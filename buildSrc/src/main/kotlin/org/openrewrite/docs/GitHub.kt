package org.openrewrite.docs

import groovy.json.JsonSlurper
import java.time.Instant

data class Release(val version: Version, val url: String, val publishedAt: Instant, val body: String)

class GitHub(token: String) {
    private val headers = mapOf(
        "Authorization" to "Bearer $token",
        "Accept" to "application/vnd.github+json",
        "X-GitHub-Api-Version" to "2022-11-28",
    )

    fun isPublic(repository: String): Boolean {
        val url = "$API/repos/${path(repository)}"
        val response = httpGet(url, headers)
        return when (response.statusCode()) {
            200 -> (JsonSlurper().parseText(response.body()) as Map<*, *>)["private"] == false
            404 -> false
            else -> error("GET $url returned ${response.statusCode()}")
        }
    }

    /// The published, non-prerelease releases of [repository] tagged with a release version, published since [since].
    fun releases(repository: String, since: Instant): List<Release> {
        val releases = mutableListOf<Release>()
        var page = 1
        do {
            val batch = httpGetJson("$API/repos/${path(repository)}/releases?per_page=100&page=${page++}", headers) as List<*>
            val published = batch.map { it as Map<*, *> }
                .filter { it["draft"] == false && it["prerelease"] == false }
                .mapNotNull { release ->
                    Version.parse(release["tag_name"] as String)?.let {
                        Release(it, release["html_url"] as String, Instant.parse(release["published_at"] as String), release["body"] as String? ?: "")
                    }
                }
            releases += published.filter { it.publishedAt >= since }
        } while (batch.size == 100 && published.any { it.publishedAt >= since })
        return releases
    }

    private fun path(repository: String) = repository.removePrefix("https://github.com/")

    private companion object {
        const val API = "https://api.github.com"
    }
}
