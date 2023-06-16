# Migrate Log4j 2.x to SLF4J 1.x

**org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1**

_Transforms usages of Log4j 2.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1
```
{% endcode %}
{% endtab %}
{% endtabs %}

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
description: Transforms usages of Log4j 2.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files.
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

## Contributors
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
