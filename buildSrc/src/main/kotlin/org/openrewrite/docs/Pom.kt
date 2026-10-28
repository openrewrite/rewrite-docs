package org.openrewrite.docs

import java.io.File
import java.io.InputStream

enum class License(val title: String, val url: String) {
    Apache2("Apache License Version 2.0", "https://www.apache.org/licenses/LICENSE-2.0"),
    MSAL("Moderne Source Available License", "https://docs.moderne.io/licensing/moderne-source-available-license"),
    Proprietary("Moderne Proprietary License", "https://docs.moderne.io/licensing/overview"),
    Unknown("License Unknown", "");

    fun markdown() = if (url.isEmpty()) title else "[$title]($url)"

    companion object {
        fun of(url: String?): License = when {
            url == null -> Unknown
            "apache.org/licenses/LICENSE-2.0" in url -> Apache2
            url.endsWith("/moderne-source-available-license") -> MSAL
            url.endsWith("/licensing/overview") -> Proprietary
            else -> Unknown
        }
    }
}

data class ManagedDependency(val groupId: String, val artifactId: String, val version: String, val scope: String?) {
    val coordinates get() = "$groupId:$artifactId"
}

class Pom(
    val groupId: String,
    val artifactId: String,
    val version: String,
    val license: License,
    /// The GitHub repository the module is built from, e.g. `https://github.com/openrewrite/rewrite`, or empty.
    val repository: String,
    val managedDependencies: List<ManagedDependency>,
) {
    val coordinates get() = "$groupId:$artifactId"

    companion object {
        private val GITHUB_REPOSITORY = Regex("https://github\\.com/[^/]+/[^/]+?(?=\\.git|/|$)")

        fun parse(file: File): Pom = file.inputStream().use(::parse)

        fun parse(pom: InputStream): Pom {
            val project = parseXml(pom)
            val parent = project.child("parent")
            val managed = project.child("dependencyManagement")?.child("dependencies")
                ?.children("dependency")
                ?.map {
                    ManagedDependency(it.text("groupId")!!, it.text("artifactId")!!, it.text("version")!!, it.text("scope"))
                }
                .orEmpty()
            return Pom(
                groupId = project.text("groupId") ?: parent!!.text("groupId")!!,
                artifactId = project.text("artifactId")!!,
                version = project.text("version") ?: parent!!.text("version")!!,
                license = License.of(project.child("licenses")?.child("license")?.text("url")),
                repository = project.child("scm")?.text("url")?.let { GITHUB_REPOSITORY.find(it)?.value }.orEmpty(),
                managedDependencies = managed,
            )
        }
    }
}
