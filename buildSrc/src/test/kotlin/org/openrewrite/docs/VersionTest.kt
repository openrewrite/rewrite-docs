package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class VersionTest {
    private fun version(version: String) = Version.parse(version)!!

    @Test
    fun parsesReleaseTags() {
        assertThat(Version.parse("v8.95.0")).isEqualTo(Version.parse("8.95.0"))
        assertThat(Version.parse("8.95.0-rc.1")).isNull()
        assertThat(Version.parse("8.96.0-SNAPSHOT")).isNull()
    }

    @Test
    fun comparesNumerically() {
        assertThat(version("3.10.0")).isGreaterThan(version("3.9.0"))
        assertThat(version("3.26.1")).isGreaterThan(version("3.26"))
        assertThat(version("3.26.0")).isEqualByComparingTo(version("3.26"))
    }
}
