# Upgrade to Cucumber-JVM 7.x

** org.openrewrite.java.testing.cucumber.UpgradeCucumber7x**
_Upgrade to Cucumber-JVM 7.x from any previous version._

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
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cucumber.UpgradeCucumber7x")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.cucumber.UpgradeCucumber7x</recipe>
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
  -DactiveRecipes=org.openrewrite.java.testing.cucumber.UpgradeCucumber7x
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.cucumber.UpgradeCucumber7x`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Cucumber-JVM 5.x](../../../java/testing/cucumber/upgradecucumber5x.md)
* [Cucumber-Java8 migration to Cucumber-Java](../../../java/testing/cucumber/cucumberjava8tojava.md)
* [Drop SummaryPrinter.](../../../java/testing/cucumber/dropsummaryprinter.md)
* [Replace Cucumber-Java step definition regexes with Cucumber expressions.](../../../java/testing/cucumber/regextocucumberexpression.md)
* [Cucumber to Junit Test Suites](../../../java/testing/cucumber/cucumbertojunitplatformsuite.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `io.cucumber`
  * artifactId: `*`
  * newVersion: `7.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.cucumber.UpgradeCucumber7x
displayName: Upgrade to Cucumber-JVM 7.x
description: Upgrade to Cucumber-JVM 7.x from any previous version.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.java.testing.cucumber.UpgradeCucumber5x
  - org.openrewrite.java.testing.cucumber.CucumberJava8ToJava
  - org.openrewrite.java.testing.cucumber.DropSummaryPrinter
  - org.openrewrite.java.testing.cucumber.RegexToCucumberExpression
  - org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: io.cucumber
      artifactId: *
      newVersion: 7.x

```
{% endtab %}
{% endtabs %}
