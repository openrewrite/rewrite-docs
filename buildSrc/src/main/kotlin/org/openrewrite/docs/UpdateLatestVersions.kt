package org.openrewrite.docs

import org.gradle.api.DefaultTask
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.provider.Property
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.Internal
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask

@UntrackedTask(because = "Versions from npm, NuGet and the Go module proxy are not tracked as inputs")
abstract class UpdateLatestVersions : DefaultTask() {
    @get:InputFiles
    abstract val modulePoms: ConfigurableFileCollection

    @get:InputFiles
    abstract val rewriteRecipeBomPom: ConfigurableFileCollection

    @get:InputFiles
    abstract val gradlePluginPom: ConfigurableFileCollection

    @get:InputFiles
    abstract val mavenPluginPom: ConfigurableFileCollection

    @get:Internal
    abstract val codegenomeUsername: Property<String>

    @get:Internal
    abstract val codegenomePassword: Property<String>

    @get:OutputFile
    abstract val javascriptFile: RegularFileProperty

    @TaskAction
    fun update() {
        val registries = PackageRegistries(codegenomeUsername.get(), codegenomePassword.get())
        val latestVersions = LatestVersions(
            rewriteRecipeBom = version(rewriteRecipeBomPom),
            gradlePlugin = version(gradlePluginPom),
            mavenPlugin = version(mavenPluginPom),
            modules = modulePoms.map { Module.of(Pom.parse(it)) } + registries.modules(logger::warn),
        )
        javascriptFile.get().asFile.writeText(latestVersions.javascript())
    }

    private fun version(pom: ConfigurableFileCollection) = Pom.parse(pom.singleFile).version
}
