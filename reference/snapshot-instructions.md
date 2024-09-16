# How to use snapshot versions

Right now, OpenRewrite does a full release once every 2-4 weeks. Between those releases, recipes are consistently being added or changed to meet the needs of our users. For many people, it's fine to wait until a new release to get access to these new features or recipes. Others, however, would like to have access right away.

This guide will provide you with instructions on how to configure your project to access these "snapshot versions" so you can get updates in real time.

## Gradle instructions

To utilize snapshot versions in Gradle projects, you'll need to make the following changes to your `build.gradle` file:

* Update your `repositories` section to include the location of the OpenRewrite snapshots:

```groovy
repositories {
    // Possibly other repositories such as mavenCentral()
    // ...

    maven {
        url = uri("https://oss.sonatype.org/content/repositories/snapshots/")
    }
}
```

* Update your version numbers to use `latest.integration` (you can also specify a specific release such as `1.18.0-SNAPSHOT` <!--DO NOT BUMP--> instead if you like):

```groovy
dependencies {
    rewrite platform("org.openrewrite.recipe:rewrite-recipe-bom:latest.integration")
}
```

## Maven instructions

To utilize snapshot versions in Maven projects, you'll need to make the following changes to your `pom.xml` file:

* Update your `repositories` section to include the location of the OpenRewrite snapshots:

```xml
<repositories>
    <!-- Possibly other repositories -->
    <!-- ... -->
    <repository>
        <id>rewrite-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
</repositories>
<pluginRepositories>
    <pluginRepository>
        <id>rewrite-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </pluginRepository>
</pluginRepositories>
```

* Update the version numbers of the `rewrite-maven-plugin` and all of its dependencies to use the latest snapshot versions.
  Snapshot versions are 1 minor version ahead of the [latest release](/reference/latest-versions-of-every-openrewrite-module.md) with `-SNAPSHOT` added to the end.
  For instance, if the latest release is `2.1.2`, the snapshot version would be `2.2.0-SNAPSHOT`: <!--DO NOT BUMP-->

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.40.2</version>
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
