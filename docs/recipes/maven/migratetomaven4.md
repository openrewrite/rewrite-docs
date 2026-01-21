---
sidebar_label: "Migrate to Maven 4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Maven 4

**org.openrewrite.maven.MigrateToMaven4**

_Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4._

## Recipe source

[GitHub: maven.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Drop prefixless expressions in POM](../maven/cleanup/prefixlessexpressions)
* [Replace removed root directory properties](../maven/replaceremovedrootdirectoryproperties)
* [Replace deprecated lifecycle phases](../maven/replacedeprecatedlifecyclephases)
* [Remove duplicate plugin declarations](../maven/removeduplicateplugindeclarations)
* [Upgrade to Maven model version 4.1.0](../maven/upgradetomodelversion410)
* [Replace modules with subprojects](../maven/replacemoduleswithsubprojects)
* [Use Maven 4 parent inference](../maven/useparentinference)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.MigrateToMaven4
displayName: Migrate to Maven 4
description: |
  Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4.
recipeList:
  - org.openrewrite.maven.cleanup.PrefixlessExpressions
  - org.openrewrite.maven.ReplaceRemovedRootDirectoryProperties
  - org.openrewrite.maven.ReplaceDeprecatedLifecyclePhases
  - org.openrewrite.maven.RemoveDuplicatePluginDeclarations
  - org.openrewrite.maven.UpgradeToModelVersion410
  - org.openrewrite.maven.ReplaceModulesWithSubprojects
  - org.openrewrite.maven.UseParentInference

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`MigrateToMaven4Test#comprehensiveMigration`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <modules>
        <module>child-a</module>
        <module>child-b</module>
    </modules>

    <properties>
        <project.root>${executionRootDirectory}</project.root>
        <multi.root>${multiModuleProjectDirectory}</multi.root>
        <my.version>${version}</my.version>
        <my.basedir>${basedir}</my.basedir>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
                <executions>
                    <execution>
                        <id>pre-clean-task</id>
                        <phase>pre-clean</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>pre-integration-test-task</id>
                        <phase>pre-integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>post-integration-test-task</id>
                        <phase>post-integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project xmlns="http://maven.apache.org/POM/4.1.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.1.0 http://maven.apache.org/xsd/maven-4.1.0.xsd">
    <modelVersion>4.1.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <subprojects>
        <subproject>child-a</subproject>
        <subproject>child-b</subproject>
    </subprojects>

    <properties>
        <project.root>${session.rootDirectory}</project.root>
        <multi.root>${project.rootDirectory}</multi.root>
        <my.version>${project.version}</my.version>
        <my.basedir>${project.basedir}</my.basedir>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
                <executions>
                    <execution>
                        <id>pre-clean-task</id>
                        <phase>before:clean</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>pre-integration-test-task</id>
                        <phase>before:integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>post-integration-test-task</id>
                        <phase>after:integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -1,1 +1,1 @@
-<project xmlns="http://maven.apache.org/POM/4.0.0"
+<project xmlns="http://maven.apache.org/POM/4.1.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -3,2 +3,2 @@
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
-   <modelVersion>4.0.0</modelVersion>
+        xsi:schemaLocation="http://maven.apache.org/POM/4.1.0 http://maven.apache.org/xsd/maven-4.1.0.xsd">
+   <modelVersion>4.1.0</modelVersion>
    <groupId>com.example</groupId>
@@ -10,4 +10,4 @@
    <packaging>pom</packaging>

-   <modules>
-       <module>child-a</module>
-       <module>child-b</module>
-   </modules>
+   <subprojects>
+       <subproject>child-a</subproject>
+       <subproject>child-b</subproject>
+   </subprojects>

@@ -16,4 +16,4 @@

    <properties>
-       <project.root>${executionRootDirectory}</project.root>
-       <multi.root>${multiModuleProjectDirectory}</multi.root>
-       <my.version>${version}</my.version>
-       <my.basedir>${basedir}</my.basedir>
+       <project.root>${session.rootDirectory}</project.root>
+       <multi.root>${project.rootDirectory}</multi.root>
+       <my.version>${project.version}</my.version>
+       <my.basedir>${project.basedir}</my.basedir>
    </properties>
@@ -31,5 +31,0 @@
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
-               <artifactId>maven-compiler-plugin</artifactId>
-               <version>3.8.1</version>
-           </plugin>
-           <plugin>
-               <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
@@ -40,1 +35,1 @@
                    <execution>
                        <id>pre-clean-task</id>
-                       <phase>pre-clean</phase>
+                       <phase>before:clean</phase>
                        <goals>
@@ -47,1 +42,1 @@
                    <execution>
                        <id>pre-integration-test-task</id>
-                       <phase>pre-integration-test</phase>
+                       <phase>before:integration-test</phase>
                        <goals>
@@ -54,1 +49,1 @@
                    <execution>
                        <id>post-integration-test-task</id>
-                       <phase>post-integration-test</phase>
+                       <phase>after:integration-test</phase>
                        <goals>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateToMaven4Test#comprehensiveMigration`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <modules>
        <module>child-a</module>
        <module>child-b</module>
    </modules>

    <properties>
        <project.root>${executionRootDirectory}</project.root>
        <multi.root>${multiModuleProjectDirectory}</multi.root>
        <my.version>${version}</my.version>
        <my.basedir>${basedir}</my.basedir>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
                <executions>
                    <execution>
                        <id>pre-clean-task</id>
                        <phase>pre-clean</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>pre-integration-test-task</id>
                        <phase>pre-integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>post-integration-test-task</id>
                        <phase>post-integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project xmlns="http://maven.apache.org/POM/4.1.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.1.0 http://maven.apache.org/xsd/maven-4.1.0.xsd">
    <modelVersion>4.1.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>parent</artifactId>
    <version>1.0.0</version>
    <packaging>pom</packaging>

    <subprojects>
        <subproject>child-a</subproject>
        <subproject>child-b</subproject>
    </subprojects>

    <properties>
        <project.root>${session.rootDirectory}</project.root>
        <multi.root>${project.rootDirectory}</multi.root>
        <my.version>${project.version}</my.version>
        <my.basedir>${project.basedir}</my.basedir>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
                <executions>
                    <execution>
                        <id>pre-clean-task</id>
                        <phase>before:clean</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>pre-integration-test-task</id>
                        <phase>before:integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>post-integration-test-task</id>
                        <phase>after:integration-test</phase>
                        <goals>
                            <goal>run</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -1,1 +1,1 @@
-<project xmlns="http://maven.apache.org/POM/4.0.0"
+<project xmlns="http://maven.apache.org/POM/4.1.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -3,2 +3,2 @@
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-        xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
-   <modelVersion>4.0.0</modelVersion>
+        xsi:schemaLocation="http://maven.apache.org/POM/4.1.0 http://maven.apache.org/xsd/maven-4.1.0.xsd">
+   <modelVersion>4.1.0</modelVersion>
    <groupId>com.example</groupId>
@@ -10,4 +10,4 @@
    <packaging>pom</packaging>

-   <modules>
-       <module>child-a</module>
-       <module>child-b</module>
-   </modules>
+   <subprojects>
+       <subproject>child-a</subproject>
+       <subproject>child-b</subproject>
+   </subprojects>

@@ -16,4 +16,4 @@

    <properties>
-       <project.root>${executionRootDirectory}</project.root>
-       <multi.root>${multiModuleProjectDirectory}</multi.root>
-       <my.version>${version}</my.version>
-       <my.basedir>${basedir}</my.basedir>
+       <project.root>${session.rootDirectory}</project.root>
+       <multi.root>${project.rootDirectory}</multi.root>
+       <my.version>${project.version}</my.version>
+       <my.basedir>${project.basedir}</my.basedir>
    </properties>
@@ -31,5 +31,0 @@
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
-               <artifactId>maven-compiler-plugin</artifactId>
-               <version>3.8.1</version>
-           </plugin>
-           <plugin>
-               <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-antrun-plugin</artifactId>
@@ -40,1 +35,1 @@
                    <execution>
                        <id>pre-clean-task</id>
-                       <phase>pre-clean</phase>
+                       <phase>before:clean</phase>
                        <goals>
@@ -47,1 +42,1 @@
                    <execution>
                        <id>pre-integration-test-task</id>
-                       <phase>pre-integration-test</phase>
+                       <phase>before:integration-test</phase>
                        <goals>
@@ -54,1 +49,1 @@
                    <execution>
                        <id>post-integration-test-task</id>
-                       <phase>post-integration-test</phase>
+                       <phase>after:integration-test</phase>
                        <goals>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">

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
            <recipe>org.openrewrite.maven.MigrateToMaven4</recipe>
          </activeRecipes>
        </configuration>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.MigrateToMaven4 -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToMaven4
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.MigrateToMaven4" />

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
