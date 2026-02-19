---
sidebar_label: "Simplify a call chain"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Simplify a call chain

**org.openrewrite.java.SimplifyMethodChain**

_Simplify `a.b().c()` to `a.d()`._

## Recipe source

[GitHub: SimplifyMethodChain.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/SimplifyMethodChain.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `List` | methodPatternChain | A list of method patterns that are called in sequence | `['java.util.Map keySet()', 'java.util.Set contains(..)']` |
| `String` | newMethodName | The method name that will replace the existing name. The new method name target is assumed to have the same arguments as the last method in the chain. | `containsKey` |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the method pattern. | `false` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate JCL to Log4j 2.x API](/recipes/java/logging/log4j/commonsloggingtolog4j.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](/recipes/apache/httpclient5/statusline.md)
* [Use `Map#containsKey`](/recipes/staticanalysis/usemapcontainskey.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|methodPatternChain|`List.of("A b()", "B c()")`|
|newMethodName|`c2`|
|matchOverrides|`false`|


###### Unchanged
```java
class A {
    static B b() { return new B(); }
    static C c2() { return new C(); }
}

class B {
    C c() { return new C(); }
}

class C {
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    C c = A.b().c();
}
```

###### After
```java
class Test {
    C c = A.c2();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
class Test {
-   C c = A.b().c();
+   C c = A.c2();
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.SimplifyMethodChainExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SimplifyMethodChainExample
displayName: Simplify a call chain example
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: ['java.util.Map keySet()', 'java.util.Set contains(..)']
      newMethodName: containsKey
      matchOverrides: false
```

Now that `com.yourorg.SimplifyMethodChainExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.SimplifyMethodChainExample")
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
            <recipe>com.yourorg.SimplifyMethodChainExample</recipe>
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
mod run . --recipe SimplifyMethodChain --recipe-option "methodPatternChain=['java.util.Map keySet()', 'java.util.Set contains(..)']" --recipe-option "newMethodName=containsKey" --recipe-option "matchOverrides=false"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.SimplifyMethodChain" />

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
