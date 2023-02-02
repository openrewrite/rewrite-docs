# How to use snapshot versions

Right now, OpenRewrite does a full release once every 2-4 weeks. Between those releases, recipes are consistently being added or changed to meet the needs of our users. For many people, it's fine to wait until a new release to get access to these new features or recipes. Others, however, would like to have access right away.

This guide will provide you with instructions on how to configure your project to access these "snapshot versions" so you can get updates in real time.

## Gradle instructions

To utilize snapshot versions in Gradle projects, you'll need to make the following changes to your `build.gradle` file:

* Update your `repositories` section to include the location of the OpenRewrite snapshots:

```groovy
repositories {
    // ...

    maven {
        url = uri("https://oss.sonatype.org/content/repositories/snapshots/")
    }
}
```

* Update your version numbers to use `latest.integration` (you can also specify a specific release such as `1.17.0-SNAPSHOT` instead if you like):

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
    <repository>
        <id>rewrite-snapshots</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
</repositories>
```

* Update the version numbers of your recipes to use the latest snapshot version. Snapshot versions are 1 minor version ahead of the [latest release](/reference/latest-versions-of-every-openrewrite-module.md) with `-SNAPSHOT` added to the end. For instance, if the latest release is `1.16.0`, the snapshot version would be `1.17.0-SNAPSHOT`:

{% hint style="warning" %}
You should not append `-SNAPSHOT` to the `rewrite-maven-plugin` version. Only change the dependencies to use the snapshot versions.
{% endhint %}

```xml
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>4.39.0</version>
    <configuration>
        <activeRecipes>
            <recipe>org.openrewrite.github.SetupJavaUpgradeJavaVersion</recipe>
        </activeRecipes>
    </configuration>
    <dependencies>
        <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>1.17.0-SNAPSHOT</version>
        </dependency>
    </dependencies>
</plugin>

```