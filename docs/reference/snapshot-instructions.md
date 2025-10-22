---
description: How to configure your project to access snapshot versions of OpenRewrite.
---

# How to use snapshot versions

Right now, OpenRewrite does a full release once every 2-4 weeks. Between those releases, recipes are consistently being added or changed to meet the needs of our users. For many people, it's fine to wait until a new release to get access to these new features or recipes. Others, however, would like to have access right away.

This guide will provide you with instructions on how to configure your project to access these "snapshot versions" so you can get updates in real time.

## Gradle instructions

To utilize snapshot versions in Gradle projects, you'll need to make the following changes to your `build.gradle` file:

* Update your `repositories` section to include the location of the OpenRewrite snapshots:

```groovy title="build.gradle"
repositories {
    // Possibly other repositories such as mavenCentral()
    // ...

    maven {
        url = uri("https://central.sonatype.com/repository/maven-snapshots/")
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

* You can look up the latest snapshot versions at Sonatype OSS
  - [Latest rewrite-maven-plugin version](https://oss.sonatype.org/#nexus-search;gav~org.openrewrite.maven~rewrite-maven-plugin~~~~kw,versionexpand)
  - [Latest rewrite recipe modules versions](https://oss.sonatype.org/#nexus-search;gav~org.openrewrite.recipe~~~~)

## Maven Command Line instructions

To use snapshot versions via the Maven command line, follow the same logic as in the above `Maven insructions` for the rewrite-maven-plugin and the recipe versions.

For instance, if the latest release of the `rewrite-maven-plugin` is `6.21.1`, the snapshot version would be `6.22.0-SNAPSHOT`. And if the latest release of the  `rewrite-migrate-java` recipe is `3.19.0`, , the snapshot version would be `3.20.0-SNAPSHOT`.
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:6.22.0-SNAPSHOT:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:3.20.0-SNAPSHOT -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuava -Drewrite.exportDatatables=true ```

