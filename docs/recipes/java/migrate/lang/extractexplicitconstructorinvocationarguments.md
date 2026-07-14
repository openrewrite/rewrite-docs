---
title: "Extract complex `super(..)` and `this(..)` arguments into local variables"
sidebar_label: "Extract complex `super(..)` and `this(..)` arguments into local variables"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Extract complex `super(..)` and `this(..)` arguments into local variables

**org.openrewrite.java.migrate.lang.ExtractExplicitConstructorInvocationArguments**

_[JEP 513](https://openjdk.org/jeps/513) allows statements before an explicit `super(..)` or `this(..)` constructor invocation. When such a call computes one of its arguments through a method invocation or object creation, this recipe extracts the non-trivial arguments into local variables declared right before the call, surfacing the work done before construction.  This is a strictly behavior-preserving transformation: argument expressions are already evaluated before the delegate constructor body runs, and such an argument can never reference the instance under construction, so hoisting them into preceding statements changes neither the order of side effects nor the set of legal references. Arguments are extracted in their original left-to-right order, and trivial arguments (literals and local variable references, which have no side effects) are left in place. Statements that follow the constructor invocation are deliberately *not* moved, as reordering them relative to the delegate constructor's side effects could change behavior._

## Recipe source

[GitHub: ExtractExplicitConstructorInvocationArguments.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/ExtractExplicitConstructorInvocationArguments.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Java best practices](/recipes/java/migrate/javabestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.Objects;

class Parent {
    Parent(String name) {
    }
}

class Child extends Parent {
    Child(String name) {
        super(Objects.requireNonNull(name));
    }
}
```

###### After
```java
import java.util.Objects;

class Parent {
    Parent(String name) {
    }
}

class Child extends Parent {
    Child(String name) {
        String name1 = Objects.requireNonNull(name);
        super(name1);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -10,1 +10,2 @@
class Child extends Parent {
    Child(String name) {
-       super(Objects.requireNonNull(name));
+       String name1 = Objects.requireNonNull(name);
+       super(name1);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.lang.ExtractExplicitConstructorInvocationArguments"
  displayName="Extract complex `super(..)` and `this(..)` arguments into local variables"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.ExtractExplicitConstructorInvocationArguments" />

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
