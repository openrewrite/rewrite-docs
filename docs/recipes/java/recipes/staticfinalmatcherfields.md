---
title: "Make matcher fields `static final` constants"
sidebar_label: "Make matcher fields `static final` constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Make matcher fields `static final` constants

**org.openrewrite.java.recipes.StaticFinalMatcherFields**

_Instance fields of recipes and visitors holding a `MethodMatcher`, `AnnotationMatcher` or `TypeMatcher` built only from constants are recreated, and their pattern parsed again, for every instance. Make such `private final` fields `private static final` constants with an upper snake case name._

## Recipe source

[GitHub: StaticFinalMatcherFields.java](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/StaticFinalMatcherFields.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-rewrite/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Java Recipe best practices](/recipes/java/recipes/javarecipebestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J;

public class A extends Recipe {
    private final MethodMatcher listAdd = new MethodMatcher("java.util.List add(..)", true);

    @Override
    public String getDisplayName() {
        return "A";
    }

    @Override
    public String getDescription() {
        return "A.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
                if (listAdd.matches(method)) {
                    return method.withName(method.getName().withSimpleName("addAll"));
                }
                return super.visitMethodInvocation(method, ctx);
            }
        };
    }
}
```

###### After
```java
import org.openrewrite.ExecutionContext;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.tree.J;

public class A extends Recipe {
    private static final MethodMatcher LIST_ADD = new MethodMatcher("java.util.List add(..)", true);

    @Override
    public String getDisplayName() {
        return "A";
    }

    @Override
    public String getDescription() {
        return "A.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
                if (LIST_ADD.matches(method)) {
                    return method.withName(method.getName().withSimpleName("addAll"));
                }
                return super.visitMethodInvocation(method, ctx);
            }
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,1 +9,1 @@

public class A extends Recipe {
-   private final MethodMatcher listAdd = new MethodMatcher("java.util.List add(..)", true);
+   private static final MethodMatcher LIST_ADD = new MethodMatcher("java.util.List add(..)", true);

@@ -26,1 +26,1 @@
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
-               if (listAdd.matches(method)) {
+               if (LIST_ADD.matches(method)) {
                    return method.withName(method.getName().withSimpleName("addAll"));
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.recipes.StaticFinalMatcherFields"
  displayName="Make matcher fields `static final` constants"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-rewrite"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.recipes.StaticFinalMatcherFields" />

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
