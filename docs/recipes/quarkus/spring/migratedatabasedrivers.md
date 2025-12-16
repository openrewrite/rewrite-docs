---
sidebar_label: "Migrate database drivers to Quarkus JDBC extensions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate database drivers to Quarkus JDBC extensions

**org.openrewrite.quarkus.spring.MigrateDatabaseDrivers**

_Replaces Spring Boot database driver dependencies with their Quarkus JDBC extension equivalents._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [database](/reference/recipes-by-tag#database)
* [quarkus](/reference/recipes-by-tag#quarkus)
* [jdbc](/reference/recipes-by-tag#jdbc)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/database-drivers.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring-to-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring-to-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace H2 driver with Quarkus JDBC H2](../../quarkus/spring/h2drivertoquarkus)
* [Replace H2 test driver with Quarkus JDBC H2 (test scope)](../../quarkus/spring/h2testdrivertoquarkus)
* [Replace Derby driver with Quarkus JDBC Derby](../../quarkus/spring/derbydrivertoquarkus)
* [Replace Derby test driver with Quarkus JDBC Derby (test scope)](../../quarkus/spring/derbytestdrivertoquarkus)
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.postgresql`
  * oldArtifactId: `postgresql`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-postgresql`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-postgresql`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.mysql`
  * oldArtifactId: `mysql-connector-j`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-mysql`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-mysql`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `mysql`
  * oldArtifactId: `mysql-connector-java`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-mysql`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-mysql`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.mariadb.jdbc`
  * oldArtifactId: `mariadb-java-client`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-mariadb`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-mariadb`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.oracle.database.jdbc`
  * oldArtifactId: `ojdbc8`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-oracle`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-oracle`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.oracle.database.jdbc`
  * oldArtifactId: `ojdbc10`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-oracle`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-oracle`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.oracle.database.jdbc`
  * oldArtifactId: `ojdbc11`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-oracle`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-oracle`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.oracle.ojdbc`
  * oldArtifactId: `ojdbc8`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-oracle`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-oracle`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.microsoft.sqlserver`
  * oldArtifactId: `mssql-jdbc`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-mssql`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-mssql`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.ibm.db2`
  * oldArtifactId: `jcc`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-jdbc-db2`
  * newVersion: `x`
* [Change Maven dependency scope](../../maven/changedependencyscope)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-jdbc-db2`
* [Remove redundant explicit dependency and plugin versions](../../maven/removeredundantdependencyversions)
  * groupPattern: `io.quarkus`
  * artifactPattern: `*`
  * onlyIfManagedVersionIs: `ANY`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.spring.MigrateDatabaseDrivers
displayName: Migrate database drivers to Quarkus JDBC extensions
description: |
  Replaces Spring Boot database driver dependencies with their Quarkus JDBC extension equivalents.
tags:
  - spring
  - database
  - quarkus
  - jdbc
recipeList:
  - org.openrewrite.quarkus.spring.H2DriverToQuarkus
  - org.openrewrite.quarkus.spring.H2TestDriverToQuarkus
  - org.openrewrite.quarkus.spring.DerbyDriverToQuarkus
  - org.openrewrite.quarkus.spring.DerbyTestDriverToQuarkus
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.postgresql
      oldArtifactId: postgresql
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-postgresql
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-postgresql
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.mysql
      oldArtifactId: mysql-connector-j
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-mysql
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-mysql
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: mysql
      oldArtifactId: mysql-connector-java
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-mysql
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-mysql
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.mariadb.jdbc
      oldArtifactId: mariadb-java-client
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-mariadb
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-mariadb
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.oracle.database.jdbc
      oldArtifactId: ojdbc8
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-oracle
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-oracle
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.oracle.database.jdbc
      oldArtifactId: ojdbc10
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-oracle
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-oracle
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.oracle.database.jdbc
      oldArtifactId: ojdbc11
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-oracle
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-oracle
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.oracle.ojdbc
      oldArtifactId: ojdbc8
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-oracle
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-oracle
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.microsoft.sqlserver
      oldArtifactId: mssql-jdbc
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-mssql
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-mssql
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.ibm.db2
      oldArtifactId: jcc
      newGroupId: io.quarkus
      newArtifactId: quarkus-jdbc-db2
      newVersion: x
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: io.quarkus
      artifactId: quarkus-jdbc-db2
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: io.quarkus
      artifactPattern: "*"
      onlyIfManagedVersionIs: ANY

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot to Quarkus](/recipes/quarkus/spring/springboottoquarkus.md)

## Examples
##### Example 1
`MigrateDatabaseDriversTest#migratePostgreSQLDriver`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <version>42.7.7</version>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.quarkus</groupId>
            <artifactId>quarkus-jdbc-postgresql</artifactId>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -19,4 +19,2 @@
    <dependencies>
        <dependency>
-           <groupId>org.postgresql</groupId>
-           <artifactId>postgresql</artifactId>
-           <version>42.7.7</version>
-           <scope>runtime</scope>
+           <groupId>io.quarkus</groupId>
+           <artifactId>quarkus-jdbc-postgresql</artifactId>
        </dependency>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateDatabaseDriversTest#migratePostgreSQLDriver`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <version>42.7.7</version>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.quarkus</groupId>
            <artifactId>quarkus-jdbc-postgresql</artifactId>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -19,4 +19,2 @@
    <dependencies>
        <dependency>
-           <groupId>org.postgresql</groupId>
-           <artifactId>postgresql</artifactId>
-           <version>42.7.7</version>
-           <scope>runtime</scope>
+           <groupId>io.quarkus</groupId>
+           <artifactId>quarkus-jdbc-postgresql</artifactId>
        </dependency>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring-to-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.spring.MigrateDatabaseDrivers")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.spring.MigrateDatabaseDrivers")
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
            <recipe>org.openrewrite.quarkus.spring.MigrateDatabaseDrivers</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring-to-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring-to-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.spring.MigrateDatabaseDrivers -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateDatabaseDrivers
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateDatabaseDrivers" />

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
