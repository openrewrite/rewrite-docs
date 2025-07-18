---
sidebar_label: "Find GitLab Component"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find GitLab Component

**org.openrewrite.gitlab.search.FindComponent**

_Find a GitLab Component in use._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/java/org/openrewrite/gitlab/search/FindComponent.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-gitlab/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-gitlab/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | component | The component key to look for | `$CI_SERVER_FQDN/components/opentofu/full-pipeline` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find YAML entries](../../yaml/search/findkey)
  * key: `$.include[?(@.component =~ 'null(?:@.+)?')].component`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gitlab.search.FindComponent
displayName: Find GitLab Component
description: |
  Find a GitLab Component in use.

recipeList:
  - org.openrewrite.yaml.search.FindKey:
      key: $.include[?(@.component =~ 'null(?:@.+)?')].component

```
</TabItem>
</Tabs>
## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|component|`\$CI_SERVER_FQDN/components/opentofu/full-pipeline`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
include:
  - component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0
    inputs:
      version: 0.10.0
      opentofu_version: 1.6.1
```

###### After
```yaml
include:
  - ~~>component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0
    inputs:
      version: 0.10.0
      opentofu_version: 1.6.1
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
include:
- - component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0
+ - ~~>component: $CI_SERVER_FQDN/components/opentofu/full-pipeline@0.10.0
    inputs:
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindComponentExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindComponentExample
displayName: Find GitLab Component example
recipeList:
  - org.openrewrite.gitlab.search.FindComponent:
      component: $CI_SERVER_FQDN/components/opentofu/full-pipeline
```

Now that `com.yourorg.FindComponentExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-gitlab:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.FindComponentExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-gitlab:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}")
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
            <recipe>com.yourorg.FindComponentExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-gitlab</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}</version>
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
mod run . --recipe FindComponent --recipe-option "component=$CI_SERVER_FQDN/components/opentofu/full-pipeline"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-gitlab:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gitlab.search.FindComponent" />

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
[Steven Tompkins](mailto:steven.tompkins.jr@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [steve-aom-elliott](mailto:steve.aom.elliott@gmail.com)
