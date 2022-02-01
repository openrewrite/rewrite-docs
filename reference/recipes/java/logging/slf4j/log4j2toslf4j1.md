# Migrate Log4j 2.x to SLF4J 1.x

** org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1**
_Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j2 messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files._

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
    id("org.openrewrite.rewrite") version("5.15.9")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.logging.log4j.LogManager`
  * newFullyQualifiedTypeName: `org.slf4j.LoggerFactory`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.logging.log4j.Logger fatal(..)`
  * newMethodName: `error`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.logging.log4j.Category fatal(..)`
  * newMethodName: `error`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.logging.log4j.Logger`
  * newFullyQualifiedTypeName: `org.slf4j.Logger`
* [Parameterize SLF4J logging statements](../../../java/logging/slf4j/parameterizedlogging.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1
displayName: Migrate Log4j 2.x to SLF4J 1.x
description: Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j2 messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.logging.log4j.LogManager
      newFullyQualifiedTypeName: org.slf4j.LoggerFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.logging.log4j.Logger fatal(..)
      newMethodName: error
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.logging.log4j.Category fatal(..)
      newMethodName: error
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.logging.log4j.Logger
      newFullyQualifiedTypeName: org.slf4j.Logger
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging

```
{% endtab %}
{% endtabs %}
