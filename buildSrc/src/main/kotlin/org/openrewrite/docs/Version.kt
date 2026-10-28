package org.openrewrite.docs

/// A release version made up of numbers alone, such as `8.95.0`, so that prereleases and snapshots never parse.
data class Version(private val parts: List<Int>) : Comparable<Version> {
    override fun compareTo(other: Version): Int {
        for (i in 0 until maxOf(parts.size, other.parts.size)) {
            val comparison = parts.getOrElse(i) { 0 }.compareTo(other.parts.getOrElse(i) { 0 })
            if (comparison != 0) return comparison
        }
        return 0
    }

    override fun toString() = parts.joinToString(".")

    companion object {
        private val RELEASE = Regex("v?(\\d+(?:\\.\\d+)*)")

        fun parse(version: String): Version? =
            RELEASE.matchEntire(version)?.groupValues?.get(1)?.split('.')?.map(String::toInt)?.let(::Version)
    }
}
