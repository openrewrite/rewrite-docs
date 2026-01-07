---
sidebar_label: "Migrate to Spring Boot 4.0 modular starters"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Spring Boot 4.0 modular starters

**org.openrewrite.java.spring.boot4.MigrateToModularStarters**

_Adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters. Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-40-modular-starters.yml),
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
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-data-cassandra-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.data.cassandra.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-data-jpa-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.orm.jpa.*`
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
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.web.client.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.web.client.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-restclient-test`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.autoconfigure.web.client.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-resttestclient`
  * version: `4.0.x`
  * onlyIfUsing: `org.springframework.boot.test.web.client.*`
* [Migrate packages to modular starters](../../../java/spring/boot4/migrateautoconfigurepackages)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot4.MigrateToModularStarters
displayName: Migrate to Spring Boot 4.0 modular starters
description: |
  Adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters. Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology.
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-cache-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.core.AutoConfigureCache
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-data-cassandra-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.data.cassandra.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-data-jpa-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.orm.jpa.*
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
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient
      version: 4.0.x
      onlyIfUsing: org.springframework.web.client.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.web.client.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-restclient-test
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.autoconfigure.web.client.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-resttestclient
      version: 4.0.x
      onlyIfUsing: org.springframework.boot.test.web.client.*
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

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot4.MigrateToModularStarters")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot4.MigrateToModularStarters")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

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
            <recipe>org.openrewrite.java.spring.boot4.MigrateToModularStarters</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot4.MigrateToModularStarters -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToModularStarters
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

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
