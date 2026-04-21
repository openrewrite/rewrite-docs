---
sidebar_label: "Add `argLine` to surefire and failsafe plugins"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `argLine` to surefire and failsafe plugins

**org.openrewrite.java.migrate.AddSurefireFailsafeArgLine**

_Adds the specified arguments to the `argLine` configuration of the Maven Surefire and Failsafe plugins, merging with any existing argLine value without duplicating arguments._

## Recipe source

[GitHub: AddSurefireFailsafeArgLine.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/AddSurefireFailsafeArgLine.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | argLine | The arguments to add to the surefire and failsafe plugin `argLine` configuration. Individual arguments are space-separated. Arguments already present in the existing argLine are not duplicated. | `--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add surefire `--add-opens` for Mockito/ByteBuddy](/recipes/java/migrate/addsurefirefailsafearglineformockito.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|argLine|`ARG_LINE`|


###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.5.2</version>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.5.2</version>
                <configuration>
                    <argLine>--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED</argLine>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -11,0 +11,3 @@
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.5.2</version>
+               <configuration>
+                   <argLine>--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED</argLine>
+               </configuration>
            </plugin>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddSurefireFailsafeArgLineExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddSurefireFailsafeArgLineExample
displayName: Add `argLine` to surefire and failsafe plugins example
recipeList:
  - org.openrewrite.java.migrate.AddSurefireFailsafeArgLine:
      argLine: '--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED'
```

<RunRecipe
  recipeName="org.openrewrite.java.migrate.AddSurefireFailsafeArgLine"
  displayName="Add `argLine` to surefire and failsafe plugins"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  requiresConfiguration
  cliOptions={' --recipe-option "argLine=\'--add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.util=ALL-UNNAMED\'"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.AddSurefireFailsafeArgLine" />

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
