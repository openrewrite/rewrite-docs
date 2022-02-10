# Migrate Log4j 2.x to Logback

** org.openrewrite.java.logging.logback.Log4jToLogback**
_Migrates usage of Apache Log4j 2.x to using `logback` as an SLF4J implementation directly. Note, this currently does not modify `log4j.properties` files._

### Tags

* logging
* log4j
* logback

## Source

[Github](https://github.com/openrewrite/rewrite-logging-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/1.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 1.2.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-logging-frameworks:1.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.logback.Log4jToLogback")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:1.2.0")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.logback.Log4jToLogback</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>1.2.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.logging.logback.Log4jToLogback`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `ch.qos.logback`
  * artifactId: `logback-core`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `ch.qos.logback`
  * artifactId: `logback-classic`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.slf4j`
  * artifactId: `slf4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-*`
* [Migrate Log4j to SLF4J](../../../java/logging/slf4j/log4jtoslf4j.md)
* [Migrate Log4j 2.x Appender to logback-classic equivalents](../../../java/logging/logback/log4jappendertologback.md)
* [Migrate Log4j 2.x Layout to logback-classic equivalents](../../../java/logging/logback/log4jlayouttologback.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.logback.Log4jToLogback
displayName: Migrate Log4j 2.x to Logback
description: Migrates usage of Apache Log4j 2.x to using `logback` as an SLF4J implementation directly. Note, this currently does not modify `log4j.properties` files.
tags:
  - logging
  - log4j
  - logback
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: ch.qos.logback
      artifactId: logback-core
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: ch.qos.logback
      artifactId: logback-classic
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.slf4j
      artifactId: slf4j-api
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-*
  - org.openrewrite.java.logging.slf4j.Log4jToSlf4j
  - org.openrewrite.java.logging.logback.Log4jAppenderToLogback
  - org.openrewrite.java.logging.logback.Log4jLayoutToLogback

```
{% endtab %}
{% endtabs %}
