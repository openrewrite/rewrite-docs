---
title: "Drop redundant conditions around `maybeAddImport` and `maybeRemoveImport`"
sidebar_label: "Drop redundant conditions around `maybeAddImport` and `maybeRemoveImport`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop redundant conditions around `maybeAddImport` and `maybeRemoveImport`

**org.openrewrite.java.recipes.UnconditionalMaybeImport**

_`maybeAddImport` only adds an import when the type is referenced, and `maybeRemoveImport` only removes one when the type is no longer referenced, so wrapping these calls in an `if` statement is redundant. Unwraps `if` statements without an `else` that contain only such calls, when the condition and arguments have no side effects and the condition does not guard the arguments. Guards comparing trees by identity, such as `if (cu != c)`, are kept, as are calls passing `onlyIfReferenced` as anything other than `true`._

## Recipe source

[GitHub: UnconditionalMaybeImport.java](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/UnconditionalMaybeImport.java),
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
import org.openrewrite.java.tree.J;

public class SampleRecipe extends Recipe {
    @Override
    public String getDisplayName() {
        return "Sample";
    }

    @Override
    public String getDescription() {
        return "Sample recipe.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation annotation, ExecutionContext ctx) {
                boolean isMock = "Mock".equals(annotation.getSimpleName());
                if (isMock) {
                    maybeRemoveImport("org.mockito.Mock");
                }
                maybeAddImport("org.mockito.Spy");
                return annotation;
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
import org.openrewrite.java.tree.J;

public class SampleRecipe extends Recipe {
    @Override
    public String getDisplayName() {
        return "Sample";
    }

    @Override
    public String getDescription() {
        return "Sample recipe.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.Annotation visitAnnotation(J.Annotation annotation, ExecutionContext ctx) {
                boolean isMock = "Mock".equals(annotation.getSimpleName());
                maybeRemoveImport("org.mockito.Mock");
                maybeAddImport("org.mockito.Spy");
                return annotation;
            }
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -24,3 +24,1 @@
            public J.Annotation visitAnnotation(J.Annotation annotation, ExecutionContext ctx) {
                boolean isMock = "Mock".equals(annotation.getSimpleName());
-               if (isMock) {
-                   maybeRemoveImport("org.mockito.Mock");
-               }
+               maybeRemoveImport("org.mockito.Mock");
                maybeAddImport("org.mockito.Spy");
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.recipes.UnconditionalMaybeImport"
  displayName="Drop redundant conditions around `maybeAddImport` and `maybeRemoveImport`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-rewrite"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.recipes.UnconditionalMaybeImport" />

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
