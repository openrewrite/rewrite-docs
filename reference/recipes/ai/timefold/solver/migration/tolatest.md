# Upgrade to the latest Timefold Solver

**ai.timefold.solver.migration.ToLatest**

_Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives._

## Recipe source

[GitHub](https://github.com/search?type=code&q=ai.timefold.solver.migration.ToLatest), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("ai.timefold.solver.migration.ToLatest")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("ai.timefold.solver.migration.ToLatest")
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
            <recipe>ai.timefold.solver.migration.ToLatest</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=ai.timefold.solver.migration.ToLatest 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ToLatest
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate from OptaPlanner to Timefold Solver](../../../../ai/timefold/solver/migration/fromoptaplannertotimefoldsolver.md)
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `timefold.solver.solve-length`
  * newPropertyKey: `timefold.solver.solve.duration`
* [Change property key](../../../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.timefold.solver.solve-length`
  * newPropertyKey: `quarkus.timefold.solver.solve.duration`
* [Change method name](../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory from(Class)`
  * newMethodName: `forEach`
* [Change method name](../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUnfiltered(Class)`
  * newMethodName: `forEachIncludingUnassigned`
* [Change method name](../../../../java/changemethodname.md)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUniquePair(..)`
  * newMethodName: `forEachUniquePair`
* [ScoreManager: explain(), update()](../../../../ai/timefold/solver/migration/v8/scoremanagermethodsrecipe.md)
* [Change type](../../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `ai.timefold.solver.core.api.score.ScoreManager`
  * newFullyQualifiedTypeName: `ai.timefold.solver.core.api.solver.SolutionManager`
  * ignoreDefinition: `true`
* [Score: use shorter getters](../../../../ai/timefold/solver/migration/v8/scoregettersrecipe.md)
* [Replace getConstraint*() with getConstraintRef()](../../../../ai/timefold/solver/migration/v8/constraintrefrecipe.md)
* [SolverManager: use builder API](../../../../ai/timefold/solver/migration/v8/solvermanagerbuilderrecipe.md)
* [PlanningVariable's `nullable` is newly called `unassignedValues`](../../../../ai/timefold/solver/migration/v8/nullablerecipe.md)
* [Use non-deprecated SingleConstraintAssertion methods](../../../../ai/timefold/solver/migration/v8/singleconstraintassertionmethodsrecipe.md)
* [Remove unused imports](../../../../java/removeunusedimports.md)
* [Change the Timefold version](../../../../ai/timefold/solver/migration/changeversion.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.ToLatest
displayName: Upgrade to the latest Timefold Solver
description: Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives.
recipeList:
  - ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: timefold.solver.solve-length
      newPropertyKey: timefold.solver.solve.duration
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.timefold.solver.solve-length
      newPropertyKey: quarkus.timefold.solver.solve.duration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.ConstraintFactory from(Class)
      newMethodName: forEach
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUnfiltered(Class)
      newMethodName: forEachIncludingUnassigned
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUniquePair(..)
      newMethodName: forEachUniquePair
  - ai.timefold.solver.migration.v8.ScoreManagerMethodsRecipe
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: ai.timefold.solver.core.api.score.ScoreManager
      newFullyQualifiedTypeName: ai.timefold.solver.core.api.solver.SolutionManager
      ignoreDefinition: true
  - ai.timefold.solver.migration.v8.ScoreGettersRecipe
  - ai.timefold.solver.migration.v8.ConstraintRefRecipe
  - ai.timefold.solver.migration.v8.SolverManagerBuilderRecipe
  - ai.timefold.solver.migration.v8.NullableRecipe
  - ai.timefold.solver.migration.v8.SingleConstraintAssertionMethodsRecipe
  - org.openrewrite.java.RemoveUnusedImports
  - ai.timefold.solver.migration.ChangeVersion

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/ai.timefold.solver.migration.ToLatest)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
