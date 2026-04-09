---
sidebar_label: "Migrate to Spring Boot 4.0 modular starters (Community Edition)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Boot 4.0 modular starters (Community Edition)

**org.openrewrite.java.spring.boot4.MigrateToModularStarters**

_Adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters. Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology._

## Recipe source

[GitHub: spring-boot-40-modular-starters.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-40-modular-starters.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-cache-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.core.AutoConfigureCache`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-data-cassandra-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.data.cassandra.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-data-jpa-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.orm.jpa.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-jdbc-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.jdbc.*`
  * acceptTransitive: `true`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.liquibase`
  * oldArtifactId: `liquibase-core`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-starter-liquibase`
  * newVersion: `4.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.flywaydb`
  * oldArtifactId: `flyway-core`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-starter-flyway`
  * newVersion: `4.0.x`
* [Add `spring-boot-starter-flyway` if using Flyway](../../../java/spring/boot4/addspringbootstarterflyway)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.kafka`
  * oldArtifactId: `spring-kafka`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-starter-kafka`
  * newVersion: `4.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.security`
  * oldArtifactId: `spring-security-test`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-starter-security-test`
  * newVersion: `4.0.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-webmvc-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.web.servlet.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.web.client.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.web.client.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.web.client.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-resttestclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.web.client.*`
  * acceptTransitive: `true`
* [Migrate packages to modular starters](../../../java/spring/boot4/migrateautoconfigurepackages)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot4.MigrateToModularStarters
displayName: Migrate to Spring Boot 4.0 modular starters (Community Edition)
description: |
  Adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters. Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology.
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-cache-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.core.AutoConfigureCache
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-data-cassandra-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.data.cassandra.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-data-jpa-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.orm.jpa.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-jdbc-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.jdbc.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.liquibase
      oldArtifactId: liquibase-core
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-starter-liquibase
      newVersion: 4.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.flywaydb
      oldArtifactId: flyway-core
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-starter-flyway
      newVersion: 4.0.x
  - org.openrewrite.java.spring.boot4.AddSpringBootStarterFlyway
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.kafka
      oldArtifactId: spring-kafka
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-starter-kafka
      newVersion: 4.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.security
      oldArtifactId: spring-security-test
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-starter-security-test
      newVersion: 4.0.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-webmvc-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.web.servlet.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient
      version: 4.0.x
      onlyIfUsing: org.springframework.web.client.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.web.client.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.web.client.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-resttestclient
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.web.client.*
      acceptTransitive: true
  - org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)

## Examples
##### Example 1
`MigrateToModularStartersTest#migrateLiquibaseToStarterInMaven`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.liquibase</groupId>
            <artifactId>liquibase-core</artifactId>
            <version>4.24.0</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`MigrateToModularStartersTest#migrateLiquibaseToStarterInMaven`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.liquibase</groupId>
            <artifactId>liquibase-core</artifactId>
            <version>4.24.0</version>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot4.MigrateToModularStarters"
  displayName="Migrate to Spring Boot 4.0 modular starters (Community Edition)"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
  useFullyQualifiedCliName
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot4.MigrateToModularStarters" />

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
