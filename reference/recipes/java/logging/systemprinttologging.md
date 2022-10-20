# Use logger instead of system print statements

** org.openrewrite.java.logging.SystemPrintToLogging**
_Replace `System.out` and `System.err` print statements with a logger._

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.14.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | addLogger | *Optional*. Add a logger field to the class if it isn't already present. |
| `String` | loggerName | *Optional*. The name of the logger to use when generating a field. |
| `String` | loggingFramework | *Optional*. The logging framework to use. |
| `String` | level | *Optional*. The logging level to turn `System.out` print statements into. |


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.SystemPrintToLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.14.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.SystemPrintToLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.14.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:1.14.0 \
  -DactiveRecipes=org.openrewrite.java.logging.SystemPrintToLogging
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.logging.SystemPrintToLogging`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use logger instead of system print statements](../../java/logging/systemerrtologging.md)
  * loggerName: ``
  * loggingFramework: ``
* [Use logger instead of system print statements](../../java/logging/systemouttologging.md)
  * loggerName: ``
  * loggingFramework: ``
  * level: ``
* [Use logger instead of `printStackTrace()`](../../java/logging/printstacktracetologerror.md)
  * loggerName: ``
  * loggingFramework: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.SystemPrintToLogging
displayName: Use logger instead of system print statements
description: Replace `System.out` and `System.err` print statements with a logger.

loggerName: 

loggingFramework: 

level: 

recipeList:
  - org.openrewrite.java.logging.SystemErrToLogging:
      loggerName: 
      loggingFramework: 
  - org.openrewrite.java.logging.SystemOutToLogging:
      loggerName: 
      loggingFramework: 
      level: 
  - org.openrewrite.java.logging.PrintStackTraceToLogError:
      loggerName: 
      loggingFramework: 

```
{% endtab %}
{% endtabs %}
