# Migrate JUnit asserts to AssertJ

**org.openrewrite.java.testing.assertj.JUnitToAssertj**

_AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability. Converts assertions from `org.junit.jupiter.api.Assertions` to `org.assertj.core.api.Assertions`._

### Tags

* testing
* assertj

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.12.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.12.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.JUnitToAssertj")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.12.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.assertj.JUnitToAssertj")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.JUnitToAssertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.12.2</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.JUnitToAssertj 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JUnitToAssertj
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Clean Up Assertions](../../../java/testing/junit5/cleanupassertions.md)
* [JUnit `assertArrayEquals` To AssertJ](../../../java/testing/assertj/junitassertarrayequalstoassertthat.md)
* [JUnit `assertEquals` to AssertJ](../../../java/testing/assertj/junitassertequalstoassertthat.md)
* [JUnit `assertFalse` to AssertJ](../../../java/testing/assertj/junitassertfalsetoassertthat.md)
* [JUnit `assertNotEquals` to AssertJ](../../../java/testing/assertj/junitassertnotequalstoassertthat.md)
* [JUnit `assertNotNull` to AssertJ](../../../java/testing/assertj/junitassertnotnulltoassertthat.md)
* [JUnit `assertNull` to AssertJ](../../../java/testing/assertj/junitassertnulltoassertthat.md)
* [JUnit `assertSame` to AssertJ](../../../java/testing/assertj/junitassertsametoassertthat.md)
* [JUnit `assertTrue` to AssertJ](../../../java/testing/assertj/junitasserttruetoassertthat.md)
* [JUnit fail to AssertJ](../../../java/testing/assertj/junitfailtoassertjfail.md)
* [JUnit AssertThrows to AssertJ exceptionType](../../../java/testing/assertj/junitassertthrowstoassertexceptiontype.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.assertj`
  * artifactId: `assertj-core`
  * version: `3.x`
  * onlyIfUsing: `org.assertj.core.api.Assertions`
  * acceptTransitive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.JUnitToAssertj
displayName: Migrate JUnit asserts to AssertJ
description: AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability. Converts assertions from `org.junit.jupiter.api.Assertions` to `org.assertj.core.api.Assertions`.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.junit5.CleanupAssertions
  - org.openrewrite.java.testing.assertj.JUnitAssertArrayEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNotNullToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNullToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertSameToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertTrueToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitFailToAssertJFail
  - org.openrewrite.java.testing.assertj.JUnitAssertThrowsToAssertExceptionType
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: org.assertj.core.api.Assertions
      acceptTransitive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.JUnitToAssertj)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Greg Adams](mailto:greg@moderne.io), Yeikel, [Jonathan Schnéider](mailto:jkschneider@gmail.com), Patrick Way, [Knut Wannheden](mailto:knut@moderne.io), Adriano Machado, [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Philippe GRANET](mailto:philippe.granet@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jeroen Meijer](mailto:jjgmeijer@gmail.com), Ties van de Ven, [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), timo-abele, [Scott Jungling](mailto:scott.jungling@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de)
