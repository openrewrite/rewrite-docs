# PlanningVariable's `nullable` is newly called `unassignedValues`

**ai.timefold.solver.migration.v8.NullableRecipe**

_Removes references to null vars and replace them with unassigned values._

## Recipe source

[GitHub](https://github.com/search?type=code&q=ai.timefold.solver.migration.v8.NullableRecipe), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("ai.timefold.solver.migration.v8.NullableRecipe")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
    }
    rewrite {
        activeRecipe("ai.timefold.solver.migration.v8.NullableRecipe")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>ai.timefold.solver.migration.v8.NullableRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=ai.timefold.solver.migration.v8.NullableRecipe 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe NullableRecipe
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifNotExistsIncludingNullVars(..)`
  * newMethodName: `ifNotExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifExistsIncludingNullVars(..)`
  * newMethodName: `ifExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.quad.QuadConstraintStream ifNotExistsIncludingNullVars(..)`
  * newMethodName: `ifNotExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.bi.BiConstraintStream ifNotExistsIncludingNullVars(..)`
  * newMethodName: `ifNotExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifExistsOtherIncludingNullVars(..)`
  * newMethodName: `ifExistsOtherIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory forEachIncludingNullVars(Class)`
  * newMethodName: `forEachIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.tri.TriConstraintStream ifExistsIncludingNullVars(..)`
  * newMethodName: `ifExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.quad.QuadConstraintStream ifExistsIncludingNullVars(..)`
  * newMethodName: `ifExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.tri.TriConstraintStream ifNotExistsIncludingNullVars(..)`
  * newMethodName: `ifNotExistsIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifNotExistsOtherIncludingNullVars(..)`
  * newMethodName: `ifNotExistsOtherIncludingUnassigned`
* [Change method name](../../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.bi.BiConstraintStream ifExistsIncludingNullVars(..)`
  * newMethodName: `ifExistsIncludingUnassigned`
* [Change annotation attribute name](../../../../../java/changeannotationattributename.md)
  * annotationType: `ai.timefold.solver.core.api.domain.variable.PlanningVariable`
  * oldAttributeName: `nullable`
  * newAttributeName: `allowsUnassigned`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.v8.NullableRecipe
displayName: PlanningVariable's `nullable` is newly called `unassignedValues`
description: Removes references to null vars and replace them with unassigned values.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifNotExistsIncludingNullVars(..)
      newMethodName: ifNotExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifExistsIncludingNullVars(..)
      newMethodName: ifExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.quad.QuadConstraintStream ifNotExistsIncludingNullVars(..)
      newMethodName: ifNotExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.bi.BiConstraintStream ifNotExistsIncludingNullVars(..)
      newMethodName: ifNotExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifExistsOtherIncludingNullVars(..)
      newMethodName: ifExistsOtherIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.ConstraintFactory forEachIncludingNullVars(Class)
      newMethodName: forEachIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.tri.TriConstraintStream ifExistsIncludingNullVars(..)
      newMethodName: ifExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.quad.QuadConstraintStream ifExistsIncludingNullVars(..)
      newMethodName: ifExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.tri.TriConstraintStream ifNotExistsIncludingNullVars(..)
      newMethodName: ifNotExistsIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.uni.UniConstraintStream ifNotExistsOtherIncludingNullVars(..)
      newMethodName: ifNotExistsOtherIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.bi.BiConstraintStream ifExistsIncludingNullVars(..)
      newMethodName: ifExistsIncludingUnassigned
  - org.openrewrite.java.ChangeAnnotationAttributeName:
      annotationType: ai.timefold.solver.core.api.domain.variable.PlanningVariable
      oldAttributeName: nullable
      newAttributeName: allowsUnassigned

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/ai.timefold.solver.migration.v8.NullableRecipe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
