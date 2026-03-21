---
sidebar_label: "Upgrade Spring dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade Spring dependencies

**org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies**

_Upgrades dependencies according to the specified version of spring boot. Spring boot has many direct and transitive dependencies. When a module has an explicit dependency on one of these it may also need to be upgraded to match the version used by spring boot._

## Recipe source

[GitHub: UpgradeExplicitSpringBootDependencies.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/maven/spring/UpgradeExplicitSpringBootDependencies.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | fromVersion | XRange pattern for spring version used to limit which projects should be updated | ` 2.7.+` |
| `String` | toVersion | Upgrade version of `org.springframework.boot` | `3.0.0-M3` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|fromVersion|`2.7.X`|
|toVersion|`3.0.0`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>explicit-deps-app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.7.3</version>
        </dependency>
        <dependency>
            <groupId>io.dropwizard.metrics</groupId>
            <artifactId>metrics-annotation</artifactId>
            <version>4.2.8</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>2.7.3</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>explicit-deps-app</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>3.0.0</version>
        </dependency>
        <dependency>
            <groupId>io.dropwizard.metrics</groupId>
            <artifactId>metrics-annotation</artifactId>
            <version>4.2.13</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>3.0.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
-           <version>2.7.3</version>
+           <version>3.0.0</version>
        </dependency>
@@ -15,1 +15,1 @@
            <groupId>io.dropwizard.metrics</groupId>
            <artifactId>metrics-annotation</artifactId>
-           <version>4.2.8</version>
+           <version>4.2.13</version>
        </dependency>
@@ -20,1 +20,1 @@
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
-           <version>2.7.3</version>
+           <version>3.0.0</version>
            <scope>test</scope>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeExplicitSpringBootDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeExplicitSpringBootDependenciesExample
displayName: Upgrade Spring dependencies example
recipeList:
  - org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies:
      fromVersion:  2.7.+
      toVersion: 3.0.0-M3
```

<RunRecipe
  recipeName="org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies"
  displayName="Upgrade Spring dependencies"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  requiresConfiguration
  cliOptions={' --recipe-option "fromVersion= 2.7.+" --recipe-option "toVersion=3.0.0-M3"'}
  showGradle={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.spring.UpgradeExplicitSpringBootDependencies" />

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
