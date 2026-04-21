---
sidebar_label: "Migrate Hibernate dialect to the generic dialect"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Hibernate dialect to the generic dialect

**org.openrewrite.hibernate.MigrateDialect**

_Migrate all Hibernate version-specific dialect classes to their generic equivalents. Version-specific dialects were deprecated in Hibernate 6.0 and removed in Hibernate 6.2._

## Recipe source

[GitHub: hibernate-6.2.yml](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.2.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../core/singleton)

**Recipes**

* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MySQL5Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MySQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MySQL55Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MySQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MySQL57Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MySQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MySQL8Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MySQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MariaDB53Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MariaDBDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MariaDB10Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MariaDBDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MariaDB102Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MariaDBDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.MariaDB103Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.MariaDBDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL81Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL82Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL9Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL91Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL92Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL93Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL94Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL95Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQL10Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.PostgreSQLDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.Oracle8iDialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.OracleDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.Oracle9iDialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.OracleDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.Oracle10gDialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.OracleDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.Oracle12cDialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.OracleDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.SQLServer2005Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.SQLServerDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.SQLServer2008Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.SQLServerDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.SQLServer2012Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.SQLServerDialect`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.hibernate.dialect.SQLServer2016Dialect`
  * newFullyQualifiedTypeName: `org.hibernate.dialect.SQLServerDialect`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateDialect
displayName: Migrate Hibernate dialect to the generic dialect
description: |
  Migrate all Hibernate version-specific dialect classes to their generic equivalents. Version-specific dialects were deprecated in Hibernate 6.0 and removed in Hibernate 6.2.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MySQL5Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MySQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MySQL55Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MySQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MySQL57Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MySQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MySQL8Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MySQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MariaDB53Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MariaDBDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MariaDB10Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MariaDBDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MariaDB102Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MariaDBDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.MariaDB103Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.MariaDBDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL81Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL82Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL9Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL91Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL92Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL93Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL94Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL95Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQL10Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.PostgreSQLDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.Oracle8iDialect
      newFullyQualifiedTypeName: org.hibernate.dialect.OracleDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.Oracle9iDialect
      newFullyQualifiedTypeName: org.hibernate.dialect.OracleDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.Oracle10gDialect
      newFullyQualifiedTypeName: org.hibernate.dialect.OracleDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.Oracle12cDialect
      newFullyQualifiedTypeName: org.hibernate.dialect.OracleDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.SQLServer2005Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.SQLServerDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.SQLServer2008Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.SQLServerDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.SQLServer2012Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.SQLServerDialect
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.dialect.SQLServer2016Dialect
      newFullyQualifiedTypeName: org.hibernate.dialect.SQLServerDialect

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.2.x](/recipes/hibernate/migratetohibernate62.md)

## Examples
##### Example 1
`MigrateDialectTest#replacesMySQL5DialectInYaml`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/resources/application.yml" label="src/main/resources/application.yml">


###### Before
```yaml title="src/main/resources/application.yml"
spring:
  jpa:
    database-platform: org.hibernate.dialect.MySQL5Dialect
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL5Dialect
```

###### After
```yaml title="src/main/resources/application.yml"
spring:
  jpa:
    database-platform: org.hibernate.dialect.MySQLDialect
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -3,1 +3,1 @@
spring:
  jpa:
-   database-platform: org.hibernate.dialect.MySQL5Dialect
+   database-platform: org.hibernate.dialect.MySQLDialect
    properties:
@@ -6,1 +6,1 @@
    properties:
      hibernate:
-       dialect: org.hibernate.dialect.MySQL5Dialect
+       dialect: org.hibernate.dialect.MySQLDialect

```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateDialectTest#replacesMySQL5DialectInYaml`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/resources/application.yml" label="src/main/resources/application.yml">


###### Before
```yaml title="src/main/resources/application.yml"
spring:
  jpa:
    database-platform: org.hibernate.dialect.MySQL5Dialect
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL5Dialect
```

###### After
```yaml title="src/main/resources/application.yml"
spring:
  jpa:
    database-platform: org.hibernate.dialect.MySQLDialect
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQLDialect
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -3,1 +3,1 @@
spring:
  jpa:
-   database-platform: org.hibernate.dialect.MySQL5Dialect
+   database-platform: org.hibernate.dialect.MySQLDialect
    properties:
@@ -6,1 +6,1 @@
    properties:
      hibernate:
-       dialect: org.hibernate.dialect.MySQL5Dialect
+       dialect: org.hibernate.dialect.MySQLDialect

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.hibernate.MigrateDialect"
  displayName="Migrate Hibernate dialect to the generic dialect"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateDialect" />

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
