package org.openrewrite.docs

import org.gradle.api.DefaultTask
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask

@UntrackedTask(because = "The Gradle plugin reference on GitHub is not tracked as an input")
abstract class UpdateGradlePluginProperties : DefaultTask() {
    @get:OutputFile
    abstract val pageFile: RegularFileProperty

    @TaskAction
    fun update() {
        val reference = httpGetBody("https://raw.githubusercontent.com/openrewrite/rewrite-gradle-plugin/main/docs/plugin-reference.md")
        val page = pageFile.get().asFile
        page.writeText(replaceGradlePluginProperties(page.readText(), reference))
    }
}
