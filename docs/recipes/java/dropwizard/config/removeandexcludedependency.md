---
sidebar_label: "Combined dependency management to remove and exclude"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Combined dependency management to remove and exclude

**org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency**

_Combines excluding transitive dependencies and removing direct dependencies._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-dropwizard/blob/main/src/main/java/org/openrewrite/java/dropwizard/config/RemoveAndExcludeDependency.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-dropwizard/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-dropwizard/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate to remove 'org.mockito' | `org.mockito` |
| `String` | artifactId | The second part of a dependency coordinate to remove 'mockito-core' | `mockito-core` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove Maven dependency](../../../maven/removedependency)
* [Exclude Maven dependency](../../../maven/excludedependency)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency
displayName: Combined dependency management to remove and exclude
description: |
  Combines excluding transitive dependencies and removing direct dependencies.


recipeList:
  - org.openrewrite.maven.RemoveDependency
  - org.openrewrite.maven.ExcludeDependency

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Create Spring Boot Application Entry Point](/recipes/java/dropwizard/coresetup.md)
* [Migrate Health Checks to Spring Boot](/recipes/java/dropwizard/migratesecurity.md)
* [Migrate Health Checks to Spring Boot](/recipes/java/dropwizard/migratetests.md)
* [Migrate Hibernate](/recipes/java/dropwizard/migratehibernate.md)
* [Migrate Resource Classes](/recipes/java/dropwizard/migrateresourcestospringjersey.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveAndExcludeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveAndExcludeDependencyExample
displayName: Combined dependency management to remove and exclude example
recipeList:
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: org.mockito
      artifactId: mockito-core
```

Now that `com.yourorg.RemoveAndExcludeDependencyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.RemoveAndExcludeDependencyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.RemoveAndExcludeDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-dropwizard</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RemoveAndExcludeDependency --recipe-option "groupId=org.mockito" --recipe-option "artifactId=mockito-core"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency" />

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
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
Karl-Erik Hein, [steve-aom-elliott](mailto:steve.aom.elliott@gmail.com)
