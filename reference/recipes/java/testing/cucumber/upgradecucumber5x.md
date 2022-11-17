# Upgrade to Cucumber-JVM 5.x

** org.openrewrite.java.testing.cucumber.UpgradeCucumber5x**
_Upgrade to Cucumber-JVM 5.x from any previous version._

### Tags

* cucumber
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.30.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.30.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cucumber.UpgradeCucumber5x")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0")
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
            <recipe>org.openrewrite.java.testing.cucumber.UpgradeCucumber5x</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.30.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0 \
  -DactiveRecipes=org.openrewrite.java.testing.cucumber.UpgradeCucumber5x
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.cucumber.UpgradeCucumber5x`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Cucumber-JVM 2.x](../../../java/testing/cucumber/upgradecucumber2x.md)
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `cucumber.api`
  * newPackageName: `io.cucumber`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.cucumber.UpgradeCucumber5x
displayName: Upgrade to Cucumber-JVM 5.x
description: Upgrade to Cucumber-JVM 5.x from any previous version.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.java.testing.cucumber.UpgradeCucumber2x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: cucumber.api
      newPackageName: io.cucumber

```
{% endtab %}
{% endtabs %}
