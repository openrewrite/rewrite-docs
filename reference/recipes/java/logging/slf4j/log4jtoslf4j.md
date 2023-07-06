# Migrate Log4j to SLF4J

**org.openrewrite.java.logging.slf4j.Log4jToSlf4j**

_Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4jToSlf4j")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4jToSlf4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Log4jToSlf4j
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Log4j 1.x to SLF4J 1.x](../../../java/logging/slf4j/log4j1toslf4j1.md)
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass.md)
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-to-slf4j`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * newVersion: `latest.release`
  * overrideManagedVersion: `true`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * newVersion: `latest.release`
  * overrideManagedVersion: `true`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.slf4j`
  * artifactId: `slf4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-slf4j-impl`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.slf4j`
  * artifactId: `slf4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-slf4j-impl`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4jToSlf4j
displayName: Migrate Log4j to SLF4J
description: Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-to-slf4j
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      newVersion: latest.release
      overrideManagedVersion: true
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      newVersion: latest.release
      overrideManagedVersion: true
  - org.openrewrite.maven.AddDependency:
      groupId: org.slf4j
      artifactId: slf4j-api
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-slf4j-impl
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.slf4j
      artifactId: slf4j-api
      version: latest.release
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.maven.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-slf4j-impl
      version: latest.release
      onlyIfUsing: org.apache.log4j.*

```
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* [Peter Streef](mailto:p.streef@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4jToSlf4j)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
