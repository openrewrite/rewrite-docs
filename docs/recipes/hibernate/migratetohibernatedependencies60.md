---
sidebar_label: "Migrate Hibernate dependencies to 6.0.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Hibernate dependencies to 6.0.x

**org.openrewrite.hibernate.MigrateToHibernateDependencies60**

_This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.0.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies._

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
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newVersion: `6.0.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.0.x`
* [Remove a Gradle or Maven dependency](../java/dependencies/removedependency)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-entitymanager`
* [Remove Maven managed dependency](../maven/removemanageddependency)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-entitymanager`
* [Add Gradle or Maven dependency](../java/dependencies/adddependency)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `3.0.x`
  * onlyIfUsing: `javax.xml.bind..*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../java/dependencies/upgradedependencyversion)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `3.0.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateToHibernateDependencies60
displayName: Migrate Hibernate dependencies to 6.0.x
description: |
  This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.0.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.0.x
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.hibernate
      artifactId: hibernate-entitymanager
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: org.hibernate
      artifactId: hibernate-entitymanager
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 3.0.x
      onlyIfUsing: javax.xml.bind..*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 3.0.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.0.x (Community Edition)](/recipes/hibernate/migratetohibernate60-community-edition.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.hibernate.MigrateToHibernateDependencies60"
  displayName="Migrate Hibernate dependencies to 6.0.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernateDependencies60" />

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
