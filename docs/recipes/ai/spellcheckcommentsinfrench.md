---
sidebar_label: "Fix mis-encoded comments in French"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fix mis-encoded comments in French

**io.moderne.ai.SpellCheckCommentsInFrench**

_Use spellchecker to fix mis-encoded French comments in comments, JavaDocs, properties or XML files. Mis-encoded comments will contain either '?' or '�'._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <dependencies>
    <dependency>
      <!-- c'est une d?pendance incorpor? -->
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <dependencies>
    <dependency>
      <!-- c'est une dépendance incorporé -->
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -8,1 +8,1 @@
  <dependencies>
    <dependency>
-     <!-- c'est une d?pendance incorpor? -->
+     <!-- c'est une dépendance incorporé -->
      <groupId>com.google.guava</groupId>
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    void test() {
        // Description: Fabrique pour construire la r�ponse du service Compte?
        // * - la valeur du champ "variable" doit ?tre remise ? la valeur par d?faut soit le transit courant
    }
}
```

###### After
```java
class Test {
    void test() {
        // Omelette du fromage
        // Omelette du fromage
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,2 @@
class Test {
    void test() {
-       // Description: Fabrique pour construire la r�ponse du service Compte?
-       // * - la valeur du champ "variable" doit ?tre remise ? la valeur par d?faut soit le transit courant
+       // Omelette du fromage
+       // Omelette du fromage
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpellCheckCommentsInFrench
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-ai-search:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_AI_SEARCH}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.ai.SpellCheckCommentsInFrench" />

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[juju](mailto:justine.gehring@gmail.com), [Tim te Beek](mailto:tim@moderne.io), justine-gehring
