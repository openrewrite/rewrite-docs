---
description: How to configure your project to access snapshot versions of OpenRewrite.
---

# How to use snapshot versions

Right now, OpenRewrite does a full release once every 2-4 weeks. Between those releases, recipes are consistently being added or changed to meet the needs of our users. For many people, it's fine to wait until a new release to get access to these new features or recipes. Others, however, would like to have access right away.

This guide will provide you with instructions on how to configure your project to access these "snapshot versions" so you can get updates in real time.

Snapshots are published to the same [Code Genome Project](https://artifacts.codegenomeproject.org/maven) repository as releases, and downloads from it require authentication. Gradle builds read the credentials from `codeGenomeUsername` and `codeGenomeToken` in `~/.gradle/gradle.properties`. See the [quickstart guide](../running-recipes/getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project) for details on creating a token.

## Gradle instructions

To utilize snapshot versions in Gradle projects, you'll need to make the following changes:

* Allow snapshots from the Code Genome Project in the `pluginManagement` block of your `settings.gradle` file, so that a snapshot of the plugin itself can be resolved:

```groovy title="settings.gradle"
pluginManagement {
    repositories {
        maven {
            url = "https://artifacts.codegenomeproject.org/maven"
            credentials {
                username = providers.gradleProperty("codeGenomeUsername").get()
                password = providers.gradleProperty("codeGenomeToken").get()
            }
        }
        // Keep the portal for any other plugins your build applies
        gradlePluginPortal()
    }
}
```

* Do the same in the `repositories` section of your `build.gradle` file, so that snapshots of the rewrite core libraries and recipe modules can be resolved:

```groovy title="build.gradle"
repositories {
    // Possibly other repositories such as mavenCentral()
    // ...

    maven {
        url = "https://artifacts.codegenomeproject.org/maven"
        credentials {
            username = providers.gradleProperty("codeGenomeUsername").get()
            password = providers.gradleProperty("codeGenomeToken").get()
        }
    }
}
```

* Update your version numbers to use `latest.integration` (you can also specify a specific release such as `1.18.0-SNAPSHOT` instead if you like):

```groovy title="build.gradle"
dependencies {
    rewrite platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.integration")
}
```

## Maven instructions

To utilize snapshot versions in Maven projects, you'll need to make the following changes to your `pom.xml` file:

* Update your `repositories` section to include the location of the OpenRewrite snapshots:

```xml title="pom.xml"
<repositories>
    <!-- Possibly other repositories -->
    <!-- ... -->
    <repository>
        <id>rewrite-snapshots</id>
        <url>https://central.sonatype.com/repository/maven-snapshots</url>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>rewrite-snapshots</id>
        <url>https://central.sonatype.com/repository/maven-snapshots</url>
    </pluginRepository>
</pluginRepositories>
```

* Update the version numbers of the `rewrite-maven-plugin` and all of its dependencies to use the latest snapshot versions.
  Snapshot versions are 1 minor version ahead of the [latest release](../reference/latest-versions-of-every-openrewrite-module.md) with `-SNAPSHOT` added to the end.
  For instance, if the latest release is `2.1.2`, the snapshot version would be `2.2.0-SNAPSHOT`:

```xml title="pom.xml"
<build>
    <plugins>
        <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
            <configuration>
                <activeRecipes>
                    <recipe>org.openrewrite.github.SetupJavaUpgradeJavaVersion</recipe>
                </activeRecipes>
            </configuration>
            <dependencies>
                <dependency>
                    <groupId>org.openrewrite.recipe</groupId>
                    <artifactId>rewrite-github-actions</artifactId>
                    <version>2.2.0-SNAPSHOT</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

* You can look up the latest released versions via
  - [Latest rewrite-maven-plugin version](https://artifacts.codegenomeproject.org/maven/org/openrewrite/maven/rewrite-maven-plugin/)
  - [Latest rewrite recipe module versions](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/)

## Maven Command Line instructions

To use snapshot versions via the Maven command line, follow the same logic as in the above `Maven instructions` for the rewrite-maven-plugin and the recipe versions.

The first step is to update your `pom.xml` file by modifying the `repositories` section to include the location of the OpenRewrite snapshots:

```xml title="pom.xml"
<repositories>
    <!-- Possibly other repositories -->
    <!-- ... -->
    <repository>
        <id>rewrite-snapshots</id>
        <url>https://central.sonatype.com/repository/maven-snapshots</url>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>rewrite-snapshots</id>
        <url>https://central.sonatype.com/repository/maven-snapshots</url>
    </pluginRepository>
</pluginRepositories>
```

Next, you have to update the version numbers specified in the command line.
For instance, if the latest release of the `rewrite-maven-plugin` is `6.21.1`, the snapshot version would be `6.22.0-SNAPSHOT`. And if the latest release of the  `rewrite-migrate-java` recipe is `3.19.0`, the snapshot version would be `3.20.0-SNAPSHOT`.
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:6.22.0-SNAPSHOT:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:3.20.0-SNAPSHOT -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuava -Drewrite.exportDatatables=true
```
