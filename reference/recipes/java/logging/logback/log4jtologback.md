# Migrate Log4j to Logback

** org.openrewrite.java.logging.logback.Log4jToLogback**
_Migrates Log4j to logback._

### Tags

* logging
* log4j
* logback

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
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.logback.Log4jToLogback")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.logback.Log4jToLogback</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.logging.logback.Log4jToLogback`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate from Log4j appender](../../../java/logging/logback/log4jappendertologback.md)
* [Migrate from Log4j layout](../../../java/logging/logback/log4jlayouttologback.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.logback.Log4jToLogback
displayName: Migrate Log4j to Logback
description: Migrates Log4j to logback.
tags:
  - logging
  - log4j
  - logback
recipeList:
  - org.openrewrite.java.logging.logback.Log4jAppenderToLogback
  - org.openrewrite.java.logging.logback.Log4jLayoutToLogback

```
{% endtab %}
{% endtabs %}
