---
title: "Exclude a Gradle or Maven dependency"
sidebar_label: "Exclude a Gradle or Maven dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Exclude a Gradle or Maven dependency

**org.openrewrite.java.dependencies.ExcludeDependency**

_Exclude the specified dependency from any direct dependency that transitively includes it. For a Gradle project, adds an `exclude` to the declaration's closure in `build.gradle` or `build.gradle.kts`. For a Maven project, adds an `<exclusion>` to the dependency in the `pom.xml`._

## Recipe source

[GitHub: ExcludeDependency.java](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/ExcludeDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Use `*` to exclude the artifact from every group. Partial wildcards are not supported. | `commons-logging` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Use `*` to exclude every artifact in the group. Partial wildcards are not supported. | `commons-logging` |
| `String` | configuration | *Optional*. For Gradle only, only direct dependency declarations in this configuration are considered. If omitted, declarations in every configuration are considered. | `implementation` |
| `String` | scope | *Optional*. For Maven only, only dependencies in this scope are considered. If you specify `compile`, this will NOT match dependencies in `runtime`. Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |

## Examples
##### Example 1
Exclude a transitive Gradle dependency

###### Parameters
| Parameter | Value |
| --- | --- |
|groupId|`commons-logging`|
|artifactId|`commons-logging`|
|configuration|`null`|
|scope|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.apache.httpcomponents:httpclient:4.5.13'
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation('org.apache.httpcomponents:httpclient:4.5.13') {
        exclude group: 'commons-logging', module: 'commons-logging'
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,3 @@

dependencies {
-   implementation 'org.apache.httpcomponents:httpclient:4.5.13'
+   implementation('org.apache.httpcomponents:httpclient:4.5.13') {
+       exclude group: 'commons-logging', module: 'commons-logging'
+   }
}
```
</TabItem>
</Tabs>

---

##### Example 2
Exclude a transitive Maven dependency

###### Parameters
| Parameter | Value |
| --- | --- |
|groupId|`commons-logging`|
|artifactId|`commons-logging`|
|configuration|`null`|
|scope|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpclient</artifactId>
      <version>4.5.13</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpclient</artifactId>
      <version>4.5.13</version>
      <exclusions>
        <exclusion>
          <groupId>commons-logging</groupId>
          <artifactId>commons-logging</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -11,0 +11,6 @@
      <artifactId>httpclient</artifactId>
      <version>4.5.13</version>
+     <exclusions>
+       <exclusion>
+         <groupId>commons-logging</groupId>
+         <artifactId>commons-logging</artifactId>
+       </exclusion>
+     </exclusions>
    </dependency>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ExcludeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ExcludeDependencyExample
displayName: Exclude a Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.ExcludeDependency:
      groupId: commons-logging
      artifactId: commons-logging
      configuration: implementation
      scope: compile
```

<RunRecipe
  recipeName="org.openrewrite.java.dependencies.ExcludeDependency"
  displayName="Exclude a Gradle or Maven dependency"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-dependencies"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES"
  requiresConfiguration
  cliOptions={' --recipe-option "groupId=commons-logging" --recipe-option "artifactId=commons-logging"'}
  optionalCliOptions={' --recipe-option "configuration=implementation" --recipe-option "scope=compile"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.ExcludeDependency" />

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
