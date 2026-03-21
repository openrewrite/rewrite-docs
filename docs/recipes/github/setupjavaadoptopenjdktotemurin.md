---
sidebar_label: "Use `actions/setup-java` `temurin` distribution"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `actions/setup-java` `temurin` distribution

**org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin**

_Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt to temurin to keep receiving software and security updates. See more details in the [Good-bye AdoptOpenJDK post](https://blog.adoptopenjdk.net/2021/08/goodbye-adoptopenjdk-hello-adoptium/)._

### Tags

* [security](/reference/recipes-by-tag#security)

## Recipe source

[GitHub: SetupJavaAdoptOpenJDKToTemurin.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/SetupJavaAdoptOpenJDKToTemurin.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Example


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
jobs:
  build:
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: set-up-jdk-0
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "adopt"
          java-version: "11"
      - name: set-up-jdk-1
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "adopt-hotspot"
          java-version: "11"
      - name: set-up-jdk-2
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "adopt-openj9"
          java-version: "11"
      - name: build
        run: ./gradlew build test
```

###### After
```yaml title=".github/workflows/ci.yml"
jobs:
  build:
    steps:
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: set-up-jdk-0
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "temurin"
          java-version: "11"
      - name: set-up-jdk-1
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "temurin"
          java-version: "11"
      - name: set-up-jdk-2
        uses: actions/setup-java@v2.3.0
        with:
          distribution: "adopt-openj9"
          java-version: "11"
      - name: build
        run: ./gradlew build test
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -10,1 +10,1 @@
        uses: actions/setup-java@v2.3.0
        with:
-         distribution: "adopt"
+         distribution: "temurin"
          java-version: "11"
@@ -15,1 +15,1 @@
        uses: actions/setup-java@v2.3.0
        with:
-         distribution: "adopt-hotspot"
+         distribution: "temurin"
          java-version: "11"
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin"
  displayName="Use `actions/setup-java` `temurin` distribution"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin" />

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
