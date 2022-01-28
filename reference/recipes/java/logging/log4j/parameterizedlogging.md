# Parameterize Log4j 2.x logging statements

** org.openrewrite.java.logging.log4j.ParameterizedLogging**
_Log4j 2.x supports parameterized logging, which can significantly boost logging performance for disabled logging statements._

### Tags

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
    activeRecipe("org.openrewrite.java.logging.log4j.ParameterizedLogging")
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
            <recipe>org.openrewrite.java.logging.log4j.ParameterizedLogging</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.logging.log4j.ParameterizedLogging`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger trace(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger debug(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger warn(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger error(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger fatal(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Logger trace(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category debug(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category warn(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category error(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.apache.logging.log4j.Category fatal(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.log4j.ParameterizedLogging
displayName: Parameterize Log4j 2.x logging statements
description: Log4j 2.x supports parameterized logging, which can significantly boost logging performance for disabled logging statements.
tags:
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger trace(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger debug(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger warn(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger error(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger fatal(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Logger trace(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category debug(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category warn(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category error(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.apache.logging.log4j.Category fatal(..)

```
{% endtab %}
{% endtabs %}
