package org.openrewrite.docs

import java.util.zip.ZipFile
import org.gradle.api.DefaultTask
import org.gradle.api.file.ConfigurableFileCollection
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.InputFiles
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction

abstract class UpdateMavenPluginParameters : DefaultTask() {
    @get:InputFiles
    abstract val pluginJar: ConfigurableFileCollection

    @get:OutputFile
    abstract val pageFile: RegularFileProperty

    @TaskAction
    fun update() {
        val jar = pluginJar.singleFile
        val parameters = ZipFile(jar).use { zip ->
            val descriptor = zip.getEntry(DESCRIPTOR) ?: error("No $DESCRIPTOR in ${jar.name}")
            zip.getInputStream(descriptor).use(::mavenPluginParameters)
        }
        val page = pageFile.get().asFile
        page.writeText(replaceMavenPluginParameters(page.readText(), parameters))
    }

    private companion object {
        const val DESCRIPTOR = "META-INF/maven/org.openrewrite.maven/rewrite-maven-plugin/plugin-enhanced.xml"
    }
}
