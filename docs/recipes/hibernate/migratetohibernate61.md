---
sidebar_label: "Migrate to Hibernate 6.1.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Hibernate 6.1.x

**org.openrewrite.hibernate.MigrateToHibernate61**

_This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will   be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0._

## Recipe source

[GitHub: hibernate-6.1.yml](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.1.yml),
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

* [Migrate to Hibernate 6.0.x (Community Edition)](../hibernate/migratetohibernate60-community-edition)
* [Upgrade Gradle or Maven dependency versions](../java/dependencies/upgradedependencyversion)
  * groupId: `org.hibernate.orm`
  * artifactId: `*`
  * newVersion: `6.1.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateToHibernate61
displayName: Migrate to Hibernate 6.1.x
description: |
  This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will   be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.hibernate.MigrateToHibernate60
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.hibernate.orm
      artifactId: "*"
      newVersion: 6.1.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.2.x](/recipes/hibernate/migratetohibernate62.md)
* [Migrate to Hibernate for Jakarta EE 9](/recipes/com/oracle/weblogic/rewrite/hibernate/migratehibernatetojakartaee9.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)

## Examples
##### Example 1
`MigrateToHibernate61Test#groupIdHypersistenceUtilsRenamedAndPackageUpdated`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

public class TestApplication {
}
```

###### After
```java
import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;

public class TestApplication {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
+import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
Sample
```

###### Unchanged
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>com.vladmihalcea</groupId>
      <artifactId>hibernate-types-52</artifactId>
      <version>2.17.1</version>
    </dependency>
  </dependencies>
</project>
```

---

##### Example 2
`MigrateToHibernate61Test#groupIdHypersistenceUtilsRenamedAndPackageUpdated`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;

public class TestApplication {
}
```

###### After
```java
import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;

public class TestApplication {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
+import io.hypersistence.utils.hibernate.type.json.JsonBinaryType;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
Sample
```

###### Unchanged
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>com.vladmihalcea</groupId>
      <artifactId>hibernate-types-52</artifactId>
      <version>2.17.1</version>
    </dependency>
  </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.hibernate.MigrateToHibernate61"
  displayName="Migrate to Hibernate 6.1.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernate61" />

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
