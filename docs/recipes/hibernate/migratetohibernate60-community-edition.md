---
sidebar_label: "Migrate to Hibernate 6.0.x (Community Edition)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Hibernate 6.0.x (Community Edition)

**org.openrewrite.hibernate.MigrateToHibernate60**

_This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x. The hibernate dependencies will be updated to use the new `org.hibernate.orm` group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0._

## Recipe source

[GitHub: hibernate-6.0.yml](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.0.yml),
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

* [Migrate Hibernate dependencies to 6.0.x](../hibernate/migratetohibernatedependencies60)
* [AddScalarPreferStandardBasicTypesForHibernate5](../hibernate/addscalarpreferstandardbasictypes)
* [Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`](../hibernate/emptyinterceptortointerface)
* [Replace boolean type mappings with converters](../hibernate/migratebooleanmappings)
* [`@Type` annotation type parameter migration](../hibernate/typeannotationparameter)
* [Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType`](../hibernate/typedescriptortotype)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../java/migrate/jakarta/javaxpersistencetojakartapersistence)
* [Migrate xmlns entries in `persistence.xml` files](../java/migrate/jakarta/javaxpersistencexmltojakartapersistencexml)
* [Migrate Hibernate Types to Hypersistence Utils 6.0](../hibernate/migratetohypersistenceutilshibernate60)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateToHibernate60
displayName: Migrate to Hibernate 6.0.x (Community Edition)
description: |
  This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x. The hibernate dependencies will be updated to use the new `org.hibernate.orm` group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.hibernate.MigrateToHibernateDependencies60
  - org.openrewrite.hibernate.AddScalarPreferStandardBasicTypes
  - org.openrewrite.hibernate.EmptyInterceptorToInterface
  - org.openrewrite.hibernate.MigrateBooleanMappings
  - org.openrewrite.hibernate.TypeAnnotationParameter
  - org.openrewrite.hibernate.TypeDescriptorToType
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml
  - org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate60

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.0.x (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate60-moderne-edition)
* [Migrate to Hibernate 6.1.x](/recipes/hibernate/migratetohibernate61.md)

## Examples
##### Example 1
`MigrateToHibernate60Test#removesEntityManager`


###### Unchanged
```mavenProject
a
```

###### Unchanged
```mavenProject
b
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>a</artifactId>
  <version>1.0.0</version>
  <dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-entitymanager</artifactId>
      <version>5.6.15.Final</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>a</artifactId>
  <version>1.0.0</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,7 +5,0 @@
  <artifactId>a</artifactId>
  <version>1.0.0</version>
- <dependencies>
-   <dependency>
-     <groupId>org.hibernate</groupId>
-     <artifactId>hibernate-entitymanager</artifactId>
-     <version>5.6.15.Final</version>
-   </dependency>
- </dependencies>
</project>
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>b</artifactId>
  <version>1.0.0</version>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-entitymanager</artifactId>
        <version>5.6.15.Final</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>b</artifactId>
  <version>1.0.0</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,9 +5,0 @@
  <artifactId>b</artifactId>
  <version>1.0.0</version>
- <dependencyManagement>
-   <dependencies>
-     <dependency>
-       <groupId>org.hibernate</groupId>
-       <artifactId>hibernate-entitymanager</artifactId>
-       <version>5.6.15.Final</version>
-     </dependency>
-   </dependencies>
- </dependencyManagement>
</project>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateToHibernate60Test#removesEntityManager`


###### Unchanged
```mavenProject
a
```

###### Unchanged
```mavenProject
b
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>a</artifactId>
  <version>1.0.0</version>
  <dependencies>
    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-entitymanager</artifactId>
      <version>5.6.15.Final</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>a</artifactId>
  <version>1.0.0</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,7 +5,0 @@
  <artifactId>a</artifactId>
  <version>1.0.0</version>
- <dependencies>
-   <dependency>
-     <groupId>org.hibernate</groupId>
-     <artifactId>hibernate-entitymanager</artifactId>
-     <version>5.6.15.Final</version>
-   </dependency>
- </dependencies>
</project>
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>b</artifactId>
  <version>1.0.0</version>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.hibernate</groupId>
        <artifactId>hibernate-entitymanager</artifactId>
        <version>5.6.15.Final</version>
      </dependency>
    </dependencies>
  </dependencyManagement>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>b</artifactId>
  <version>1.0.0</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,9 +5,0 @@
  <artifactId>b</artifactId>
  <version>1.0.0</version>
- <dependencyManagement>
-   <dependencies>
-     <dependency>
-       <groupId>org.hibernate</groupId>
-       <artifactId>hibernate-entitymanager</artifactId>
-       <version>5.6.15.Final</version>
-     </dependency>
-   </dependencies>
- </dependencyManagement>
</project>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.hibernate.MigrateToHibernate60"
  displayName="Migrate to Hibernate 6.0.x (Community Edition)"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE"
  hasDataTables
  useFullyQualifiedCliName
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernate60" />

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
