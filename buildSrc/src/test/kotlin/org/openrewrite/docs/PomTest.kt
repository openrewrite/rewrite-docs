package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class PomTest {
    private fun parse(pom: String) = Pom.parse(pom.byteInputStream())

    @Test
    fun readsCoordinatesLicenseAndRepository() {
        val pom = parse(
            """
            <project>
              <groupId>org.openrewrite</groupId>
              <artifactId>rewrite-core</artifactId>
              <version>8.95.0</version>
              <licenses>
                <license>
                  <name>The Apache Software License, Version 2.0</name>
                  <url>http://www.apache.org/licenses/LICENSE-2.0.txt</url>
                </license>
              </licenses>
              <scm>
                <url>https://github.com/openrewrite/rewrite.git</url>
              </scm>
            </project>
            """.trimIndent()
        )

        assertThat(Module.of(pom)).isEqualTo(
            Module("org.openrewrite", "rewrite-core", "8.95.0")
        )
    }

    @Test
    fun trimsTreeFromRepository() {
        val pom = parse(
            """
            <project>
              <groupId>org.openrewrite.maven</groupId>
              <artifactId>rewrite-maven-plugin</artifactId>
              <version>6.52.0</version>
              <scm>
                <url>https://github.com/openrewrite/rewrite-maven-plugin/tree/main</url>
              </scm>
            </project>
            """.trimIndent()
        )

        assertThat(pom.repository).isEqualTo("https://github.com/openrewrite/rewrite-maven-plugin")
        assertThat(pom.license).isEqualTo(License.Unknown)
    }

    @Test
    fun readsManagedDependencies() {
        val pom = parse(
            """
            <project>
              <groupId>org.openrewrite.recipe</groupId>
              <artifactId>rewrite-recipe-bom</artifactId>
              <version>3.43.0</version>
              <dependencyManagement>
                <dependencies>
                  <dependency>
                    <groupId>org.openrewrite</groupId>
                    <artifactId>rewrite-bom</artifactId>
                    <version>8.95.0</version>
                    <type>pom</type>
                    <scope>import</scope>
                  </dependency>
                  <dependency>
                    <groupId>org.openrewrite.recipe</groupId>
                    <artifactId>rewrite-spring</artifactId>
                    <version>6.43.0</version>
                  </dependency>
                </dependencies>
              </dependencyManagement>
            </project>
            """.trimIndent()
        )

        assertThat(pom.managedDependencies).containsExactly(
            ManagedDependency("org.openrewrite", "rewrite-bom", "8.95.0", "import"),
            ManagedDependency("org.openrewrite.recipe", "rewrite-spring", "6.43.0", null),
        )
    }

    @Test
    fun mapsModerneLicenses() {
        assertThat(License.of("https://docs.moderne.io/licensing/moderne-source-available-license")).isEqualTo(License.MSAL)
        assertThat(License.of("https://docs.moderne.io/licensing/overview")).isEqualTo(License.Proprietary)
    }
}
