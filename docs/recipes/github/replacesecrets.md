---
sidebar_label: "Replace GitHub Action secret names"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace GitHub Action secret names

**org.openrewrite.github.ReplaceSecrets**

_Replace references to GitHub Action secrets in workflow files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/ReplaceSecrets.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldSecretName | The name of the secret to be replaced | `OSSRH_S01_USERNAME` |
| `String` | newSecretName | The new secret name to use | `SONATYPE_USERNAME` |
| `String` | fileMatcher | *Optional*. Optional file path matcher | `.github/workflows/*.yml` |


## Used by

This recipe is used as part of the following composite recipes:

* [Replace OSSRH secrets with Sonatype secrets](/recipes/github/replaceossrhsecretswithsonatype.md)

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldSecretName|`OSSRH_S01_USERNAME`|
|newSecretName|`SONATYPE_USERNAME`|
|fileMatcher|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
name: Publish
jobs:
  build:
    secrets:
      ossrh_username: ${{ secrets.OSSRH_S01_USERNAME }}
      ossrh_token: ${{ secrets.OSSRH_S01_TOKEN }}
    steps:
      - name: Publish to Maven Central
        env:
          MAVEN_USERNAME: ${{ secrets.OSSRH_S01_USERNAME }}
```

###### After
```yaml
name: Publish
jobs:
  build:
    secrets:
      ossrh_username: ${{ secrets.SONATYPE_USERNAME }}
      ossrh_token: ${{ secrets.OSSRH_S01_TOKEN }}
    steps:
      - name: Publish to Maven Central
        env:
          MAVEN_USERNAME: ${{ secrets.SONATYPE_USERNAME }}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
  build:
    secrets:
-     ossrh_username: ${{ secrets.OSSRH_S01_USERNAME }}
+     ossrh_username: ${{ secrets.SONATYPE_USERNAME }}
      ossrh_token: ${{ secrets.OSSRH_S01_TOKEN }}
@@ -10,1 +10,1 @@
      - name: Publish to Maven Central
        env:
-         MAVEN_USERNAME: ${{ secrets.OSSRH_S01_USERNAME }}
+         MAVEN_USERNAME: ${{ secrets.SONATYPE_USERNAME }}

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceSecretsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceSecretsExample
displayName: Replace GitHub Action secret names example
recipeList:
  - org.openrewrite.github.ReplaceSecrets:
      oldSecretName: OSSRH_S01_USERNAME
      newSecretName: SONATYPE_USERNAME
      fileMatcher: .github/workflows/*.yml
```

Now that `com.yourorg.ReplaceSecretsExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceSecretsExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}")
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
            <recipe>com.yourorg.ReplaceSecretsExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}</version>
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
mod run . --recipe ReplaceSecrets --recipe-option "oldSecretName=OSSRH_S01_USERNAME" --recipe-option "newSecretName=SONATYPE_USERNAME" --recipe-option "fileMatcher=.github/workflows/*.yml"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-github-actions:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.ReplaceSecrets" />

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
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
