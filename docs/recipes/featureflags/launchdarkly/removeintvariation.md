---
sidebar_label: "Remove LaunchDarkly's `intVariation` for feature key"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove LaunchDarkly's `intVariation` for feature key

**org.openrewrite.featureflags.launchdarkly.RemoveIntVariation**

_Replace `intVariation` invocations for feature key with value, and simplify constant if branch execution._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-feature-flags/blob/main/src/main/java/org/openrewrite/featureflags/launchdarkly/RemoveIntVariation.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-feature-flags/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-feature-flags/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | featureKey | The key of the feature flag to remove. | `flag-key-123abc` |
| `Integer` | replacementValue | The value to replace the feature flag check with. | `42` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove an integer feature flag for feature key](../../featureflags/removeintegerflag)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient intVariation(String, com.launchdarkly.sdk.*, int)`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.featureflags.launchdarkly.RemoveIntVariation
displayName: Remove LaunchDarkly's `intVariation` for feature key
description: |
  Replace `intVariation` invocations for feature key with value, and simplify constant if branch execution.


recipeList:
  - org.openrewrite.featureflags.RemoveIntegerFlag:
      methodPattern: com.launchdarkly.sdk.server.LDClient intVariation(String, com.launchdarkly.sdk.*, int)

```
</TabItem>
</Tabs>
## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|featureKey|`flag-key-123abc`|
|replacementValue|`100`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;
class Foo {
    private LDClient client = new LDClient("sdk-key-123abc");
    void bar() {
        LDContext context = null;
        int maxRetries = client.intVariation("flag-key-123abc", context, 3);
        System.out.println("Max retries: " + maxRetries);
    }
}
```

###### After
```java
class Foo {
    void bar() {
        System.out.println("Max retries: " + 100);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import com.launchdarkly.sdk.LDContext;
-import com.launchdarkly.sdk.server.LDClient;
class Foo {
@@ -4,1 +2,0 @@
import com.launchdarkly.sdk.server.LDClient;
class Foo {
-   private LDClient client = new LDClient("sdk-key-123abc");
    void bar() {
@@ -6,3 +3,1 @@
    private LDClient client = new LDClient("sdk-key-123abc");
    void bar() {
-       LDContext context = null;
-       int maxRetries = client.intVariation("flag-key-123abc", context, 3);
-       System.out.println("Max retries: " + maxRetries);
+       System.out.println("Max retries: " + 100);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveIntVariationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveIntVariationExample
displayName: Remove LaunchDarkly's `intVariation` for feature key example
recipeList:
  - org.openrewrite.featureflags.launchdarkly.RemoveIntVariation:
      featureKey: flag-key-123abc
      replacementValue: 42
```

Now that `com.yourorg.RemoveIntVariationExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-feature-flags:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.RemoveIntVariationExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-feature-flags:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}")
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
            <recipe>com.yourorg.RemoveIntVariationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-feature-flags</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}</version>
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
mod run . --recipe RemoveIntVariation --recipe-option "featureKey=flag-key-123abc" --recipe-option "replacementValue=42"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-feature-flags:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.featureflags.launchdarkly.RemoveIntVariation" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
