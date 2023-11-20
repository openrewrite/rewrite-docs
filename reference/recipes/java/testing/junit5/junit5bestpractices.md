# JUnit Jupiter best practices

**org.openrewrite.java.testing.junit5.JUnit5BestPractices**

_Applies best practices to tests._

### Tags

* junit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.1.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
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
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit5BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.1.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit5BestPractices
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JUnit5BestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Statically import JUnit Jupiter assertions](../../../java/testing/junit5/staticimports.md)
* [JUnit Jupiter migration from JUnit 4.x](../../../java/testing/junit5/junit4to5migration.md)
* [Clean Up Assertions](../../../java/testing/junit5/cleanupassertions.md)
* [Remove `test` prefix from JUnit 5 tests](../../../java/testing/cleanup/removetestprefix.md)
* [Remove `public` visibility of JUnit 5 tests](../../../java/testing/cleanup/testsshouldnotbepublic.md)
* [Add missing `@ParameterizedTest` annotation when `@ValueSource` is used or replace `@Test` with `@ParameterizedTest`](../../../java/testing/junit5/addparameterizedtestannotation.md)
* [Remove duplicates uses of @TestTemplate implementations for a single method](../../../java/testing/junit5/removeduplicatetesttemplates.md)
* [Replace `fail()` in `try-catch` blocks with `Assertions.assertDoesNotThrow(() -> { ... })`](../../../java/testing/junit5/removetrycatchfailblocks.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit5BestPractices
displayName: JUnit Jupiter best practices
description: Applies best practices to tests.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - org.openrewrite.java.testing.junit5.CleanupAssertions
  - org.openrewrite.java.testing.cleanup.RemoveTestPrefix
  - org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic:
  - org.openrewrite.java.testing.junit5.AddParameterizedTestAnnotation
  - org.openrewrite.java.testing.junit5.RemoveDuplicateTestTemplates
  - org.openrewrite.java.testing.junit5.RemoveTryCatchFailBlocks

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit5BestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Patrick Way, [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Yeikel, [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Aleksandar A Simpson](mailto:alek@asu.me), [Greg Adams](mailto:gadams@gmail.com), Adriano Machado, [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Greg Adams](mailto:greg@moderne.io), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Aurélien Mino](mailto:aurelien.mino@gmail.com), [Matthias Klauer](mailto:matthias.klauer@sap.com), Tyler Van Gorder, [Tim te Beek](mailto:tim@moderne.io), [Aaron Gershman](mailto:aegershman@gmail.com), [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com), John Burns, [Michael Keppler](mailto:bananeweizen@gmx.de), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), Ties van de Ven, [Tim te Beek](mailto:timtebeek@gmail.com), Peter Puškár, [sullis](mailto:github@seansullivan.com), Josh Soref, [Joan Viladrosa](mailto:joan@moderne.io), [Kun Li](mailto:kun@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
