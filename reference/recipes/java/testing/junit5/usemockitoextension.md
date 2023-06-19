# Use Mockito JUnit Jupiter extension

**org.openrewrite.java.testing.junit5.UseMockitoExtension**

_Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseMockitoExtension</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UseMockitoExtension
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Mockito 4.x upgrade](../../../java/testing/mockito/mockito1to4migration.md)
* [JUnit 4 MockitoJUnitRunner.Silent to JUnit Jupiter MockitoExtension with LENIENT settings](../../../java/testing/mockito/mockitojunitrunnersilenttoextension.md)
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]`
  * extension: `org.mockito.junit.jupiter.MockitoExtension`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UseMockitoExtension
displayName: Use Mockito JUnit Jupiter extension
description: Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`.
tags:
  - junit
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.testing.mockito.Mockito1to4Migration
  - org.openrewrite.java.testing.mockito.MockitoJUnitRunnerSilentToExtension
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]
      extension: org.mockito.junit.jupiter.MockitoExtension

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Tim te Beek](tim@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Greg Adams](gadams@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Scott Jungling](scott.jungling@gmail.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UseMockitoExtension)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
