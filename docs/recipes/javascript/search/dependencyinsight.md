---
sidebar_label: "Node.js dependency insight"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node.js dependency insight

**org.openrewrite.javascript.search.DependencyInsight**

_Find direct and transitive npm dependencies matching a package name pattern. Results include dependencies that either directly match or transitively include a matching dependency._

## Recipe source

[GitHub: DependencyInsight.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-javascript/src/main/java/org/openrewrite/javascript/search/DependencyInsight.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packageNamePattern | A glob pattern to match npm package names. Use `*` as a wildcard. | `@types/*` |
| `String` | scope | *Optional*. Match dependencies in the specified scope. All scopes are searched by default. Valid options: `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`, `bundledDependencies` | `dependencies` |
| `Boolean` | onlyDirect | *Optional*. If enabled, transitive dependencies will not be considered. All dependencies are searched by default. | `true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|packageNamePattern|`lodash`|
|scope|`null`|
|onlyDirect|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="packageJson" label="packageJson">


###### Before
```packageJson
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

###### After
```packageJson
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    /*~~>*/"lodash": "^4.17.21"
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
  "version": "1.0.0",
  "dependencies": {
-   "lodash": "^4.17.21"
+   /*~~>*/"lodash": "^4.17.21"
  }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DependencyInsightExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyInsightExample
displayName: Node.js dependency insight example
recipeList:
  - org.openrewrite.javascript.search.DependencyInsight:
      packageNamePattern: '@types/*'
      scope: dependencies
      onlyDirect: true
```

Now that `com.yourorg.DependencyInsightExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.DependencyInsightExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
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
            <recipe>com.yourorg.DependencyInsightExample</recipe>
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
mod run . --recipe DependencyInsight --recipe-option "packageNamePattern='@types/*'" --recipe-option "scope=dependencies" --recipe-option "onlyDirect=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-javascript:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.javascript.search.DependencyInsight" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.javascript.table.NodeDependenciesInUse" label="NodeDependenciesInUse">

### Node.js dependencies in use
**org.openrewrite.javascript.table.NodeDependenciesInUse**

_Direct and transitive dependencies in use in Node.js projects._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency (from package.json). |
| Project path | The path to the project. |
| Package name | The name of the npm package. |
| Version | The resolved version of the package. |
| Version constraint | The version constraint as declared in package.json. |
| Scope | Dependency scope: dependencies, devDependencies, peerDependencies, optionalDependencies, or bundledDependencies. |
| Direct | Whether this is a direct dependency (true) or transitive dependency (false). |
| Count | How many times this dependency appears in the dependency tree. |
| License | The SPDX license identifier of the package, if available. |

</TabItem>

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
