# Parameterize SLF4J logging statements

** org.openrewrite.java.logging.slf4j.ParameterizedLogging**
_SLF4J supports parameterized logging, which can significantly boost logging performance for disabled logging statements._

### Tags

* RSPEC-2629
* slf4j
* logging

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.5.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.5.2


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.5.2 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.ParameterizedLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.5.2")
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
        <version>4.22.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.ParameterizedLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.5.2</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.logging.slf4j.ParameterizedLogging`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger trace(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger debug(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger warn(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger error(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.ParameterizedLogging
displayName: Parameterize SLF4J logging statements
description: SLF4J supports parameterized logging, which can significantly boost logging performance for disabled logging statements.
tags:
  - RSPEC-2629
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger trace(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger debug(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger warn(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger error(..)

```
{% endtab %}
{% endtabs %}
