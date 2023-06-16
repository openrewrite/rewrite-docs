# Cucumber-Java8 migration to Cucumber-Java

**org.openrewrite.cucumber.jvm.CucumberJava8ToJava**

_Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods._

### Tags

* cucumber
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.cucumber.jvm.CucumberJava8ToJava")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.1")
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
            <recipe>org.openrewrite.cucumber.jvm.CucumberJava8ToJava</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cucumber-jvm</artifactId>
            <version>1.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cucumber-jvm:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.CucumberJava8ToJava
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace Cucumber-Java8 hook definition with Cucumber-Java](../../cucumber/jvm/cucumberjava8hookdefinitiontocucumberjava.md)
* [Replace Cucumber-Java8 step definitions with Cucumber-Java](../../cucumber/jvm/cucumberjava8stepdefinitiontocucumberjava.md)
* [Change Maven dependency groupId, artifactId and/or the version](../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `io.cucumber`
  * oldArtifactId: `cucumber-java8`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `io.cucumber.java8`
  * newPackageName: `io.cucumber.java`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cucumber.jvm.CucumberJava8ToJava
displayName: Cucumber-Java8 migration to Cucumber-Java
description: Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.cucumber.jvm.CucumberJava8HookDefinitionToCucumberJava
  - org.openrewrite.cucumber.jvm.CucumberJava8StepDefinitionToCucumberJava
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

## Contributors
* [Tim te Beek](tim@moderne.io)
* [renovate[bot]](29139614+renovate[bot]@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberJava8ToJava)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
