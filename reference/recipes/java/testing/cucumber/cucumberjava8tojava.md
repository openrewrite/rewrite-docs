# Cucumber-Java8 migration to Cucumber-Java

**org.openrewrite.java.testing.cucumber.CucumberJava8ToJava**
_Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods._

### Tags

* cucumber
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.31.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cucumber.CucumberJava8ToJava")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0")
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
            <recipe>org.openrewrite.java.testing.cucumber.CucumberJava8ToJava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.31.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 \
  -DactiveRecipes=org.openrewrite.java.testing.cucumber.CucumberJava8ToJava
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.cucumber.CucumberJava8ToJava`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace Cucumber-Java8 hook definition with Cucumber-Java](../../../java/testing/cucumber/cucumberjava8hookdefinitiontocucumberjava.md)
* [Replace Cucumber-Java8 step definitions with Cucumber-Java](../../../java/testing/cucumber/cucumberjava8stepdefinitiontocucumberjava.md)
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `io.cucumber`
  * oldArtifactId: `cucumber-java8`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `io.cucumber.java8`
  * newPackageName: `io.cucumber.java`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.cucumber.CucumberJava8ToJava
displayName: Cucumber-Java8 migration to Cucumber-Java
description: Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.java.testing.cucumber.CucumberJava8HookDefinitionToCucumberJava
  - org.openrewrite.java.testing.cucumber.CucumberJava8StepDefinitionToCucumberJava
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: io.cucumber
      oldArtifactId: cucumber-java8
      newGroupId: io.cucumber
      newArtifactId: cucumber-java
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.cucumber.java8
      newPackageName: io.cucumber.java

```
{% endtab %}
{% endtabs %}
