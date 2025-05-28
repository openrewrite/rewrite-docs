---
sidebar_label: "Module has dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Module has dependency

**org.openrewrite.maven.search.ModuleHasDependency**

_Searches for Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindDependency` recipe instead._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/ModuleHasDependency.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupIdPattern | Group glob pattern used to match dependencies. | `com.fasterxml.jackson.module` |
| `String` | artifactIdPattern | Artifact glob pattern used to match dependencies. | `jackson-module-*` |
| `String` | scope | *Optional*. Match dependencies with the specified scope. All scopes are searched by default. Valid options: `compile`, `test`, `runtime`, `provided`, `system` | `compile` |
| `String` | version | *Optional*. Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.All versions are searched by default. | `1.x` |
| `Boolean` | onlyDirect | *Optional*. If enabled, transitive dependencies will not be considered. All dependencies are searched by default. | `true` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupIdPattern|`org.openrewrite`|
|artifactIdPattern|`rewrite-maven`|
|scope|`null`|
|version|`8.52.0`|
|onlyDirect|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {}
```

###### After
```java
/*~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>*/class A {}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-class A {}
+/*~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>*/class A {}

```
</TabItem>
</Tabs>

###### Unchanged
```java
class B {}
```

###### Unchanged
```mavenProject
multi-project-build
```

###### Unchanged
```mavenProject
other-project
```

###### Unchanged
```mavenProject
project-uses-rewrite-maven
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>org.openrewrite.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-maven</artifactId>
            <version>8.52.0</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<!--~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>--><project>
    <groupId>org.openrewrite.example</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-maven</artifactId>
            <version>8.52.0</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -1,1 +1,1 @@
-<project>
+<!--~~(Module has dependency: org.openrewrite:rewrite-maven:8.52.0)~~>--><project>
    <groupId>org.openrewrite.example</groupId>
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <groupId>org.openrewrite.example</groupId>
    <artifactId>other-project</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite</groupId>
                <artifactId>not-rewrite-maven</artifactId>
                <version>3.0.0</version>
            </plugin>
        </plugins>
    </build>
</project>
```


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ModuleHasDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ModuleHasDependencyExample
displayName: Module has dependency example
recipeList:
  - org.openrewrite.maven.search.ModuleHasDependency:
      groupIdPattern: com.fasterxml.jackson.module
      artifactIdPattern: jackson-module-*
      scope: compile
      version: 1.x
      onlyDirect: true
```

Now that `com.yourorg.ModuleHasDependencyExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.ModuleHasDependencyExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ModuleHasDependency --recipe-option "groupIdPattern=com.fasterxml.jackson.module" --recipe-option "artifactIdPattern=jackson-module-*" --recipe-option "scope=compile" --recipe-option "version=1.x" --recipe-option "onlyDirect=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.search.ModuleHasDependency" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
