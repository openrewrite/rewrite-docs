# Use logger instead of system print statements

**org.openrewrite.java.logging.SystemPrintToLogging**

_Replace `System.out` and `System.err` print statements with a logger._

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/SystemPrintToLogging.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.20.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.20.1

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | addLogger | *Optional*. Add a logger field to the class if it isn't already present. |
| `String` | loggerName | *Optional*. The name of the logger to use when generating a field. |
| `String` | loggingFramework | *Optional*. The logging framework to use. |
| `String` | level | *Optional*. The logging level to turn `System.out` print statements into. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:1.20.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.SystemPrintToLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.20.1")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.SystemPrintToLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.20.1</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.logging.SystemPrintToLogging
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.logging.SystemPrintToLogging)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
