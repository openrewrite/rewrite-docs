---
sidebar_label: "Reorder method arguments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reorder method arguments

**org.openrewrite.java.ReorderMethodArguments**

_Reorder method arguments into the specified order._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReorderMethodArguments.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results. | `com.yourorg.A foo(String, Integer, Integer)` |
| `String[]` | newParameterNames | An array of parameter names that indicates the new order in which those arguments should be arranged. | `[foo, bar, baz]` |
| `String[]` | oldParameterNames | *Optional*. If the original method signature is not type-attributed, this is an optional list that indicates the original order in which the arguments were arranged. | `[baz, bar, foo]` |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |  |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the method pattern. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Hamcrest assertions to JUnit Jupiter](/recipes/java/testing/hamcrest/migratehamcresttojunit5.md)
* [Migrate from EasyMock to Mockito](/recipes/java/testing/easymock/easymocktomockito.md)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)
* [Reorder the arguments of `RequestBody.create()`](/recipes/okhttp/reorderrequestbodycreatearguments.md)
* [Replace  deprecated Jakarta Servlet methods and classes](/recipes/java/migrate/jakarta/removalsservletjakarta10.md)
* [Replace deprecated Jakarta Servlet methods and classes](/recipes/com/oracle/weblogic/rewrite/jakarta/removalsservletjakarta9.md)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](/recipes/java/testing/junit5/migrateassumptions.md)
* [Use non-deprecated SingleConstraintAssertion methods](/recipes/ai/timefold/solver/migration/v8/singleconstraintassertionmethodsrecipe.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReorderMethodArgumentsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReorderMethodArgumentsExample
displayName: Reorder method arguments example
recipeList:
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.yourorg.A foo(String, Integer, Integer)
      newParameterNames: [foo, bar, baz]
      oldParameterNames: [baz, bar, foo]
```

Now that `com.yourorg.ReorderMethodArgumentsExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ReorderMethodArgumentsExample")
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
            <recipe>com.yourorg.ReorderMethodArgumentsExample</recipe>
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
mod run . --recipe ReorderMethodArguments --recipe-option "methodPattern=com.yourorg.A foo(String, Integer, Integer)" --recipe-option "newParameterNames=[foo, bar, baz]" --recipe-option "oldParameterNames=[baz, bar, foo]"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ReorderMethodArguments" />

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

## Contributors

Jonathan Schneider, Joan Viladrosa, Tyler Van Gorder, Sam Snyder, Greg Adams, traceyyoshima, Tim te Beek
