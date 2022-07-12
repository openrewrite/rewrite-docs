# Upgrade Wro4j plugin version

** org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion**
_This recipe will upgrade Wro4j to a more recent version compatible with Java 11._

### Tags

* wro4j
* java11

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.8.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.8.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `ro.isdc.wro4j`
  * artifactId: `wro4j-maven-plugin`
  * newVersion: `1.10.1`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion
displayName: Upgrade Wro4j plugin version
description: This recipe will upgrade Wro4j to a more recent version compatible with Java 11.
tags:
  - wro4j
  - java11
recipeList:
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: ro.isdc.wro4j
      artifactId: wro4j-maven-plugin
      newVersion: 1.10.1

```
{% endtab %}
{% endtabs %}
