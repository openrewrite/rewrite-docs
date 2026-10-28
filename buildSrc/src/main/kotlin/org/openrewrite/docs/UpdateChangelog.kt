package org.openrewrite.docs

import java.time.Instant
import java.time.temporal.ChronoUnit.DAYS
import org.gradle.api.DefaultTask
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask

@UntrackedTask(because = "GitHub releases are not tracked as inputs")
abstract class UpdateChangelog : DefaultTask() {
    /// The POM of each of the [bomReleases].
    @get:InputFiles
    abstract val bomPoms: ConfigurableFileCollection

    /// A POM of each module those BOMs manage, to find the repository it is released from.
    @get:InputFiles
    abstract val modulePoms: ConfigurableFileCollection

    @get:Internal
    abstract val githubToken: Property<String>

    @get:OutputFile
    abstract val changelogFile: RegularFileProperty

    @TaskAction
    fun update() {
        val github = GitHub(githubToken.get())
        val bomReleases = bomReleases(github).associateBy { it.version }
        val repositories = modulePoms.map(Pom::parse)
            .associate { it.coordinates to it.repository.ifEmpty { REPOSITORIES_WITHOUT_SCM[it.coordinates].orEmpty() } }

        val boms = bomPoms.map(Pom::parse).map { pom ->
            val versions = releaseNoteModules(pom)
                .mapNotNull { module ->
                    val repository = repositories.getValue(module.coordinates)
                    Version.parse(module.version)?.takeIf { repository.isNotEmpty() }?.let { repository to it }
                }
                .groupBy({ it.first }, { it.second })
                .mapValues { (_, moduleVersions) -> moduleVersions.max() }
            val release = bomReleases.getValue(Version.parse(pom.version)!!)
            BomRelease(release.version, release.url, release.publishedAt, versions)
        }.sortedBy { it.version }

        val publicRepositories = boms.flatMap { it.repositoryVersions.keys }.distinct().filter(github::isPublic)
        val releasesSince = boms.first().publishedAt.minus(30, DAYS)
        val releases = publicRepositories.associateWith { github.releases(it, releasesSince) }
        changelogFile.get().asFile.writeText(Changelog(boms, releases).markdown())
    }

    companion object {
        private const val RECIPE_BOM = "https://github.com/openrewrite/rewrite-recipe-bom"
        private val RELEASE_NOTE_GROUPS = setOf("org.openrewrite", "org.openrewrite.maven", "org.openrewrite.recipe")
        private val REPOSITORIES_WITHOUT_SCM = mapOf("org.openrewrite:plugin" to "https://github.com/openrewrite/rewrite-gradle-plugin")

        /// The rewrite-recipe-bom releases of the past year, and the one before them, which the first is compared with.
        fun bomReleases(github: GitHub, now: Instant = Instant.now()): List<Release> {
            val since = now.minus(365, DAYS)
            val releases = github.releases(RECIPE_BOM, since.minus(90, DAYS)).sortedBy { it.version }
            return releases.drop(releases.indexOfFirst { it.publishedAt >= since }.coerceAtLeast(1) - 1)
        }

        fun releaseNoteModules(bom: Pom) = bom.managedDependencies.filter { it.groupId in RELEASE_NOTE_GROUPS }
    }
}
