---
sidebar_label: "Find matching words in the source code"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find matching words in the source code

**org.openrewrite.cobol.search.FindWord**

_Search for COBOL words based on a search term._

## Recipe source

[GitHub: FindWord.java](https://github.com/moderneinc/rewrite-cobol/blob/main/src/main/java/org/openrewrite/cobol/search/FindWord.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-cobol/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-cobol/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | searchTerm | A word or regex pattern to find. By default the search term is case insensitive. | `CM102M or cm1.*` |
| `Boolean` | exactMatch | Search for a word based on an exact match of the search term. | `true` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|searchTerm|`CM102M`|
|exactMatch|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="cobol" label="cobol">


###### Before
```cobol
000100 IDENTIFICATION DIVISION.                                         CM1024.2
000200 PROGRAM-ID.                                                      CM1024.2
000300     CM102M.                                                      CM1024.2
000400 AUTHOR.                                                          CM1024.2
000500     FEDERAL COMPILER TESTING CENTER.                             CM1024.2
000600 INSTALLATION.                                                    CM1024.2
000700     GENERAL SERVICES ADMINISTRATION                              CM1024.2
000800     AUTOMATED DATA AND TELECOMMUNICATION SERVICE.                CM1024.2
000900     SOFTWARE DEVELOPMENT OFFICE.                                 CM1024.2
001000     5203 LEESBURG PIKE  SUITE 1100                               CM1024.2
001100     FALLS CHURCH VIRGINIA 22041.                                 CM1024.2
001200                                                                  CM1024.2
001300     PHONE   (703) 756-6153                                       CM1024.2
001400                                                                  CM1024.2
001500     " HIGH       ".                                              CM1024.2
```

###### After
```cobol
000100 IDENTIFICATION DIVISION.                                         CM1024.2
000200 PROGRAM-ID.                                                      CM1024.2
000300     ~~>CM102M.                                                      CM1024.2
000400 AUTHOR.                                                          CM1024.2
000500     FEDERAL COMPILER TESTING CENTER.                             CM1024.2
000600 INSTALLATION.                                                    CM1024.2
000700     GENERAL SERVICES ADMINISTRATION                              CM1024.2
000800     AUTOMATED DATA AND TELECOMMUNICATION SERVICE.                CM1024.2
000900     SOFTWARE DEVELOPMENT OFFICE.                                 CM1024.2
001000     5203 LEESBURG PIKE  SUITE 1100                               CM1024.2
001100     FALLS CHURCH VIRGINIA 22041.                                 CM1024.2
001200                                                                  CM1024.2
001300     PHONE   (703) 756-6153                                       CM1024.2
001400                                                                  CM1024.2
001500     " HIGH       ".                                              CM1024.2
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
000100 IDENTIFICATION DIVISION.                                         CM1024.2
000200 PROGRAM-ID.                                                      CM1024.2
-000300     CM102M.                                                      CM1024.2
+000300     ~~>CM102M.                                                      CM1024.2
000400 AUTHOR.                                                          CM1024.2
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindWordExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindWordExample
displayName: Find matching words in the source code example
recipeList:
  - org.openrewrite.cobol.search.FindWord:
      searchTerm: CM102M or cm1.*
      exactMatch: true
```

Now that `com.yourorg.FindWordExample` has been defined, activate it and take a dependency on `org.openrewrite:rewrite-cobol:{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.FindWordExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-cobol:{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}")
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
            <recipe>com.yourorg.FindWordExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-cobol</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}</version>
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
mod run . --recipe FindWord --recipe-option "searchTerm=CM102M or cm1.*" --recipe-option "exactMatch=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-cobol:{{VERSION_ORG_OPENREWRITE_REWRITE_COBOL}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.cobol.search.FindWord" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.cobol.table.WordSearchResult" label="WordSearchResult">

### COBOL word search results
**org.openrewrite.cobol.table.WordSearchResult**

_Words in COBOL source code that match the search criteria._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The source path of the file that contains the matching word. |
| Matched word | The word text that matched the search criteria. |

</TabItem>

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
