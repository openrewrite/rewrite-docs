---
sidebar_label: "Format SQL in string text blocks"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Format SQL in string text blocks

**org.openrewrite.sql.FormatSql**

_Checks whether a text block may contain SQL, and if so, formats the text accordingly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | sqlDialect | *Optional*. Check out https://github.com/vertical-blank/sql-formatter#dialect for supported dialects. Valid options: `sql`, `mariadb`, `mysql`, `postgresql`, `db2`, `plsql`, `n1ql`, `redshift`, `spark`, `tsql` | `postgresql` |
| `String` | indent | *Optional*. Defaults to two spaces. | `    ` |
| `Integer` | maxColumnLength | *Optional*. Defaults to 50. | `100` |
| `Boolean` | uppercase | *Optional*. Defaults to false (not safe to use when SQL dialect has case-sensitive identifiers). | `true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Oracle SQL to PostgreSQL](/recipes/sql/migrateoracletopostgres.md)
* [Migrate SQL Server to PostgreSQL](/recipes/sql/migratesqlservertopostgres.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    String query = """
            SELECT * FROM my_table
            WHERE
              something = 1;\
            """;
}
```

###### After
```java
class Test {
    String query = """
            SELECT
              *
            FROM
              my_table
            WHERE
              something = 1;\
            """;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,4 @@
class Test {
    String query = """
-           SELECT * FROM my_table
+           SELECT
+             *
+           FROM
+             my_table
            WHERE
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FormatSql
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-sql:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.sql.FormatSql" />

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
