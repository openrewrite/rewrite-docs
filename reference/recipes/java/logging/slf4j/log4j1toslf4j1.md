# Migrate Log4j 1.x to SLF4J 1.x

** org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1**
_Transforms usages of Log4j 1.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.6.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.6.0")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.6.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.log4j.MDC`
  * newFullyQualifiedTypeName: `org.slf4j.MDC`
* [Migrate Log4j 1.x to Log4j 2.x](../../../java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to SLF4J 1.x](../../../java/logging/slf4j/log4j2toslf4j1.md)
* [Parameterize SLF4J logging statements](../../../java/logging/slf4j/parameterizedlogging.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1
displayName: Migrate Log4j 1.x to SLF4J 1.x
description: Transforms usages of Log4j 1.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.log4j.MDC
      newFullyQualifiedTypeName: org.slf4j.MDC
  - org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
  - org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging

```
{% endtab %}
{% endtabs %}
