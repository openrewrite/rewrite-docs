# Migrate Log4j to SLF4J

** org.openrewrite.java.logging.slf4j.Log4jToSlf4j**
_Migrates usage of Apache Log4j to using SLF4J directly. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.7")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4jToSlf4j")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.1.0")
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
        <version>4.17.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4jToSlf4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.logging.slf4j.Log4jToSlf4j`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Log4j 2.x to SLF4J 1.x](../../../java/logging/slf4j/log4j2toslf4j1.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4jToSlf4j
displayName: Migrate Log4j to SLF4J
description: Migrates usage of Apache Log4j to using SLF4J directly. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1

```
{% endtab %}
{% endtabs %}
