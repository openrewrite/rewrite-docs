package org.openrewrite.docs

import org.gradle.api.DefaultTask
import org.gradle.api.file.RegularFileProperty
import org.gradle.api.tasks.OutputFile
import org.gradle.api.tasks.TaskAction
import org.gradle.api.tasks.UntrackedTask

@UntrackedTask(because = "The latest versions in moderne-docs are not tracked as an input")
abstract class UpdateLatestVersions : DefaultTask() {
    @get:OutputFile
    abstract val javascriptFile: RegularFileProperty

    @TaskAction
    fun update() {
        javascriptFile.get().asFile.writeText(
            httpGetBody("https://raw.githubusercontent.com/moderneinc/moderne-docs/main/src/plugins/latest-versions.js")
        )
    }
}
