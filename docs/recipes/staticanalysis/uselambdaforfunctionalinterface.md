---
title: "Use lambda expressions instead of anonymous classes"
sidebar_label: "Use lambda expressions instead of anonymous classes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use lambda expressions instead of anonymous classes

**org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface**

_Instead of anonymous class declarations, use a lambda where possible. Using lambdas to replace anonymous classes can lead to more expressive and maintainable code, improve code readability, reduce code duplication, and achieve better performance in some cases._

### Tags

* [RSPEC-S1604](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1604&open=java%3AS1604)

## Recipe source

[GitHub: UseLambdaForFunctionalInterface.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseLambdaForFunctionalInterface.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.function.Function;
class Test {
    Function<Integer, Integer> f = new Function<Integer, Integer>() {
        @Override
        public Integer apply(Integer n) {
            return n + 1;
        }
    };
}
```

###### After
```java
import java.util.function.Function;
class Test {
    Function<Integer, Integer> f = n -> n + 1;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,6 +3,1 @@
import java.util.function.Function;
class Test {
-   Function<Integer, Integer> f = new Function<Integer, Integer>() {
-       @Override
-       public Integer apply(Integer n) {
-           return n + 1;
-       }
-   };
+   Function<Integer, Integer> f = n -> n + 1;
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface"
  displayName="Use lambda expressions instead of anonymous classes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseLambdaForFunctionalInterface" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.staticanalysis.table.AnonymousFunctionalInterfaceImplementations" label="AnonymousFunctionalInterfaceImplementations">

### Anonymous functional interface implementations
**org.openrewrite.staticanalysis.table.AnonymousFunctionalInterfaceImplementations**

_Every anonymous class that implements a functional interface, whether or not it could be rewritten to a lambda, plus the sites that could not be decided either way because the supertype carries incomplete type attribution. Sites that were not rewritten carry the reason why._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the anonymous class. |
| Class | The fully qualified name of the class containing the anonymous class. |
| Functional interface | The fully qualified name of the functional interface being implemented, or the supertype as written at the site when it did not resolve. |
| Method | The name of the interface's single abstract method, or empty when type attribution was too incomplete to identify one. |
| Convertible to lambda | Whether the anonymous class could be rewritten to a lambda automatically. |
| Reason | Why the anonymous class was not rewritten, or empty when it was. Reasons naming missing type information mark sites the recipe is blind to rather than sites that are genuinely unconvertible, which usually means the LST was built without the dependencies those types come from. |

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
