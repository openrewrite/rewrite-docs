# Upgrade to Cucumber-JVM 7.x

**org.openrewrite.cucumber.jvm.UpgradeCucumber7x**

_Upgrade to Cucumber-JVM 7.x from any previous version._

### Tags

* cucumber
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-cucumber-jvm/1.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cucumber-jvm
* version: 1.0.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.11")
}

rewrite {
    activeRecipe("org.openrewrite.cucumber.jvm.UpgradeCucumber7x")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.7")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.3.11") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-cucumber-jvm:1.0.7")
    }
    rewrite {
        activeRecipe("org.openrewrite.cucumber.jvm.UpgradeCucumber7x")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.5.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cucumber.jvm.UpgradeCucumber7x</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cucumber-jvm</artifactId>
            <version>1.0.7</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cucumber-jvm:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.cucumber.jvm.UpgradeCucumber7x
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Cucumber-JVM 5.x](../../cucumber/jvm/upgradecucumber5x.md)
* [Migrate `cucumber-java8` to `cucumber-java`](../../cucumber/jvm/cucumberjava8tojava.md)
* [Drop `SummaryPrinter`](../../cucumber/jvm/dropsummaryprinter.md)
* [Replace `cucumber-java` step definition regexes with Cucumber expressions](../../cucumber/jvm/regextocucumberexpression.md)
* [Cucumber to JUnit test `@Suite`](../../cucumber/jvm/cucumbertojunitplatformsuite.md)
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `io.cucumber`
  * artifactId: `*`
  * newVersion: `7.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cucumber.jvm.UpgradeCucumber7x
displayName: Upgrade to Cucumber-JVM 7.x
description: Upgrade to Cucumber-JVM 7.x from any previous version.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.cucumber.jvm.UpgradeCucumber5x
  - org.openrewrite.cucumber.jvm.CucumberJava8ToJava
  - org.openrewrite.cucumber.jvm.DropSummaryPrinter
  - org.openrewrite.cucumber.jvm.RegexToCucumberExpression
  - org.openrewrite.cucumber.jvm.CucumberToJunitPlatformSuite
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.cucumber
      artifactId: *
      newVersion: 7.x

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* renovate[bot]


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.UpgradeCucumber7x)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
