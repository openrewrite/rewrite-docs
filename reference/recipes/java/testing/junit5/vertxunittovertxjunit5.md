# Use Vert.x JUnit 5 Extension

**org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5**

_Migrates Vert.x `@RunWith` `VertxUnitRunner` to the JUnit Jupiter `@ExtendWith` `VertxExtension`._

### Tags

* junit
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
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
            <recipe>org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.vertx.testtools.VertxUnitRunner]`
  * extension: `org.vertx.testtools.VertxExtension`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `io.vertx`
  * artifactId: `vertx-junit5`
  * version: `4.x`
  * onlyIfUsing: `io.vertx.junit5.VertxExtension`
  * acceptTransitive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
displayName: Use Vert.x JUnit 5 Extension
description: Migrates Vert.x `@RunWith` `VertxUnitRunner` to the JUnit Jupiter `@ExtendWith` `VertxExtension`.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.vertx.testtools.VertxUnitRunner]
      extension: org.vertx.testtools.VertxExtension
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.vertx
      artifactId: vertx-junit5
      version: 4.x
      onlyIfUsing: io.vertx.junit5.VertxExtension
      acceptTransitive: true

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Scott Jungling](scott.jungling@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
