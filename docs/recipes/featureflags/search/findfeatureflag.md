---
sidebar_label: "Find a feature flag"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find a feature flag

**org.openrewrite.featureflags.search.FindFeatureFlag**

_Find a feature flag matching method pattern._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-feature-flags/blob/main/src/main/java/org/openrewrite/featureflags/search/FindFeatureFlag.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-feature-flags/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-feature-flags/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | methodPattern | A method pattern to match against. The first argument must be the feature key as `String`. | `dev.openfeature.sdk.Client getBooleanValue(String, Boolean)` |
| `String` | featureKey | *Optional*. The unique key for the feature flag. | `flag-key-123abc` |


## Used by

This recipe is used as part of the following composite recipes:

* [Find a FF4j feature flag](/recipes/featureflags/ff4j/search/findfeatureflag.md)
* [Find a Quarkus feature flag](/recipes/featureflags/quarkus/search/findfeatureflag.md)
* [Find an OpenFeature feature flag](/recipes/featureflags/openfeature/search/findfeatureflag.md)
* [Find an Unleash feature flag](/recipes/featureflags/unleash/search/findfeatureflag.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|methodPattern|`com.acme.FeatureFlag isEnabled(String)`|
|featureKey|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.acme.FeatureFlag;

class Test {
    public void a() {
        FeatureFlag client = new FeatureFlag();
        boolean flagValue = client.isEnabled("flag-key-123abc");
        if (flagValue) {
            // Application code to show the feature
        } else {
            // The code to run if the feature is off
        }
    }
}
```

###### After
```java
import com.acme.FeatureFlag;

class Test {
    public void a() {
        FeatureFlag client = new FeatureFlag();
        boolean flagValue = /*~~>*/client.isEnabled("flag-key-123abc");
        if (flagValue) {
            // Application code to show the feature
        } else {
            // The code to run if the feature is off
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,1 +6,1 @@
    public void a() {
        FeatureFlag client = new FeatureFlag();
-       boolean flagValue = client.isEnabled("flag-key-123abc");
+       boolean flagValue = /*~~>*/client.isEnabled("flag-key-123abc");
        if (flagValue) {
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindFeatureFlagExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindFeatureFlagExample
displayName: Find a feature flag example
recipeList:
  - org.openrewrite.featureflags.search.FindFeatureFlag:
      methodPattern: dev.openfeature.sdk.Client getBooleanValue(String, Boolean)
      featureKey: flag-key-123abc
```

Now that `com.yourorg.FindFeatureFlagExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-feature-flags:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.FindFeatureFlagExample")
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
            <recipe>com.yourorg.FindFeatureFlagExample</recipe>
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
mod run . --recipe FindFeatureFlag --recipe-option "methodPattern=dev.openfeature.sdk.Client getBooleanValue(String, Boolean)" --recipe-option "featureKey=flag-key-123abc"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-feature-flags:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.featureflags.search.FindFeatureFlag" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
