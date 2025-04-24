---
sidebar_label: "Upgrade to the latest Timefold Solver"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to the latest Timefold Solver

**ai.timefold.solver.migration.ToLatest**

_Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives._

## Recipe source

[GitHub](https://github.com/search?type=code&q=ai.timefold.solver.migration.ToLatest), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate from OptaPlanner to Timefold Solver](../../../../ai/timefold/solver/migration/fromoptaplannertotimefoldsolver)
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `timefold.solver.solve-length`
  * newPropertyKey: `timefold.solver.solve.duration`
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.timefold.solver.solve-length`
  * newPropertyKey: `quarkus.timefold.solver.solve.duration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory from(Class)`
  * newMethodName: `forEach`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUnfiltered(Class)`
  * newMethodName: `forEachIncludingUnassigned`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `ai.timefold.solver.core.api.score.stream.ConstraintFactory fromUniquePair(..)`
  * newMethodName: `forEachUniquePair`
* [ScoreManager: explain(), update()](../../../../ai/timefold/solver/migration/v8/scoremanagermethodsrecipe)
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `ai.timefold.solver.core.api.score.ScoreManager`
  * newFullyQualifiedTypeName: `ai.timefold.solver.core.api.solver.SolutionManager`
  * ignoreDefinition: `true`
* [Score: use shorter getters](../../../../ai/timefold/solver/migration/v8/scoregettersrecipe)
* [Replace getConstraint*() with getConstraintRef()](../../../../ai/timefold/solver/migration/v8/constraintrefrecipe)
* [SolverManager: use builder API](../../../../ai/timefold/solver/migration/v8/solvermanagerbuilderrecipe)
* [PlanningVariable's `nullable` is newly called `unassignedValues`](../../../../ai/timefold/solver/migration/v8/nullablerecipe)
* [Use non-deprecated SingleConstraintAssertion methods](../../../../ai/timefold/solver/migration/v8/singleconstraintassertionmethodsrecipe)
* [ConstraintStreams: use asConstraint() methods to define constraints](../../../../ai/timefold/solver/migration/v8/asconstraintrecipe)
* [Constraint Streams: don't use package name in the asConstraint() method](../../../../ai/timefold/solver/migration/v8/removeconstraintpackagerecipe)
* [Recommended Fit API becomes Assignment Recommendation API](../../../../ai/timefold/solver/migration/v8/solutionmanagerrecommendassignmentrecipe)
* [Remove unused imports](../../../../java/removeunusedimports)
* [Change the Timefold version](../../../../ai/timefold/solver/migration/changeversion)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.ToLatest
displayName: Upgrade to the latest Timefold Solver
description: |
  Replace all your calls to deleted/deprecated types and methods of Timefold Solver with their proper alternatives.
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
  - ai.timefold.solver.migration.v8.AsConstraintRecipe
  - ai.timefold.solver.migration.v8.RemoveConstraintPackageRecipe
  - ai.timefold.solver.migration.v8.SolutionManagerRecommendAssignmentRecipe
  - org.openrewrite.java.RemoveUnusedImports
  - ai.timefold.solver.migration.ChangeVersion

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("ai.timefold.solver.migration.ToLatest")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("ai.timefold.solver.migration.ToLatest")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>ai.timefold.solver.migration.ToLatest</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=ai.timefold.solver.migration.ToLatest -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ToLatest
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/ai.timefold.solver.migration.ToLatest" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>
