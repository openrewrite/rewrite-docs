# SLF4J best practices

**org.openrewrite.java.logging.slf4j.Slf4jBestPractices**
_Applies best practices to logging with SLF4J._

### Tags

* slf4j
* logging

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Slf4jBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.15.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Slf4jBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.15.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.logging.slf4j.Slf4jBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Slf4jBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Convert Logger#error|warn(Throwable#message) to Logger#error|warn(<log-message>, e)](../../../java/logging/slf4j/convertlogmessagemessageonlytologmessageandthrowable.md)
  * logMessage: ``
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass.md)
* [Parameterize SLF4J logging statements](../../../java/logging/slf4j/parameterizedlogging.md)
* [SLF4J logging statements should begin with constants](../../../java/logging/slf4j/slf4jlogshouldbeconstant.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Slf4jBestPractices
displayName: SLF4J best practices
description: Applies best practices to logging with SLF4J.
tags:
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.slf4j.ConvertLogMessageMessageOnlyToLogMessageAndThrowable:
      logMessage: 
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging
  - org.openrewrite.java.logging.slf4j.Slf4jLogShouldBeConstant

```
{% endtab %}
{% endtabs %}
