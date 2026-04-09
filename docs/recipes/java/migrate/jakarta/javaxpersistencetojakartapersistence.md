---
sidebar_label: "Migrate deprecated `javax.persistence` packages to `jakarta.persistence`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate deprecated `javax.persistence` packages to `jakarta.persistence`

**org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence**

_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

## Recipe source

[GitHub: jakarta-ee-9.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `javax.persistence`
  * oldArtifactId: `javax.persistence-api`
  * newGroupId: `jakarta.persistence`
  * newArtifactId: `jakarta.persistence-api`
  * newVersion: `3.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.eclipse.persistence`
  * oldArtifactId: `javax.persistence`
  * newGroupId: `jakarta.persistence`
  * newArtifactId: `jakarta.persistence-api`
  * newVersion: `3.0.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * newVersion: `3.0.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * version: `3.0.x`
  * onlyIfUsing: `javax.persistence..*`
  * acceptTransitive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `javax.persistence`
  * newPackageName: `jakarta.persistence`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
displayName: Migrate deprecated `javax.persistence` packages to `jakarta.persistence`
description: |
  Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: javax.persistence
      oldArtifactId: javax.persistence-api
      newGroupId: jakarta.persistence
      newArtifactId: jakarta.persistence-api
      newVersion: 3.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.eclipse.persistence
      oldArtifactId: javax.persistence
      newGroupId: jakarta.persistence
      newArtifactId: jakarta.persistence-api
      newVersion: 3.0.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      newVersion: 3.0.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      version: 3.0.x
      onlyIfUsing: javax.persistence..*
      acceptTransitive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.persistence
      newPackageName: jakarta.persistence
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Micronaut 3.x to 4.x](/recipes/java/micronaut/micronaut3to4migration.md)
* [Migrate to Hibernate 6.0.x (Community Edition)](/recipes/hibernate/migratetohibernate60-community-edition.md)
* [Migrate to Jakarta EE 9](/recipes/java/migrate/jakarta/javaxmigrationtojakarta.md)

## Examples
##### Example 1
`JavaxPersistenceToJakartaPersistenceTest#switchesJavaxPersistenceApiDependencyToJakartaPersistenceApiDependency`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.persistence.EntityManagerFactory;
public class TestApplication {
}
```

###### After
```java
import jakarta.persistence.EntityManagerFactory;
public class TestApplication {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.persistence.EntityManagerFactory;
+import jakarta.persistence.EntityManagerFactory;
public class TestApplication {
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
Sample
```

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>javax.persistence</groupId>
            <artifactId>javax.persistence-api</artifactId>
            <version>2.2</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`JavaxPersistenceToJakartaPersistenceTest#switchesJavaxPersistenceApiDependencyToJakartaPersistenceApiDependency`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.persistence.EntityManagerFactory;
public class TestApplication {
}
```

###### After
```java
import jakarta.persistence.EntityManagerFactory;
public class TestApplication {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.persistence.EntityManagerFactory;
+import jakarta.persistence.EntityManagerFactory;
public class TestApplication {
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
Sample
```

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>javax.persistence</groupId>
            <artifactId>javax.persistence-api</artifactId>
            <version>2.2</version>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence"
  displayName="Migrate deprecated `javax.persistence` packages to `jakarta.persistence`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence" />

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
