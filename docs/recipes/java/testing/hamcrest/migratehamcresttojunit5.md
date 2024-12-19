---
sidebar_label: "Migrate Hamcrest assertions to JUnit Jupiter"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Hamcrest assertions to JUnit Jupiter

**org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5**

_Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`._

### Tags

* testing
* assertj
* hamcrest

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/hamcrest.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license/).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use consistent Hamcrest matcher imports](../../../java/testing/hamcrest/consistenthamcrestmatcherimports)
* [Reorder method arguments](../../../java/reordermethodarguments)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(java.lang.String, boolean)`
  * newParameterNames: `[assertion, reason]`
  * oldParameterNames: `[reason, assertion]`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(boolean, String)`
  * newMethodName: `assertTrue`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.hamcrest.MatcherAssert assertTrue(boolean, String)`
  * fullyQualifiedTargetTypeName: `org.junit.jupiter.api.Assertions`
* [Migrate from Hamcrest `instanceOf` matcher to JUnit 5](../../../java/testing/hamcrest/hamcrestinstanceoftojunit5)
* [Migrate from Hamcrest `Matcher` to JUnit 5](../../../java/testing/hamcrest/hamcrestmatchertojunit5)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5
displayName: Migrate Hamcrest assertions to JUnit Jupiter
description: Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`.
tags:
  - testing
  - assertj
  - hamcrest
recipeList:
  - org.openrewrite.java.testing.hamcrest.ConsistentHamcrestMatcherImports
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.hamcrest.MatcherAssert assertThat(java.lang.String, boolean)
      newParameterNames: [assertion, reason]
      oldParameterNames: [reason, assertion]
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.hamcrest.MatcherAssert assertThat(boolean, String)
      newMethodName: assertTrue
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.hamcrest.MatcherAssert assertTrue(boolean, String)
      fullyQualifiedTargetTypeName: org.junit.jupiter.api.Assertions
  - org.openrewrite.java.testing.hamcrest.HamcrestInstanceOfToJUnit5
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToJUnit5

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5")
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
            <recipe>org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_REWRITE_TESTING_FRAMEWORKS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateHamcrestToJUnit5
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

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


## Contributors
matusmatokpt, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Aleksandar A Simpson](mailto:alek@asu.me)
