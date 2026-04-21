---
sidebar_label: "Use `String.equals()` on `String` literals"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `String.equals()` on `String` literals

**org.openrewrite.staticanalysis.StringLiteralEquality**

_`String.equals()` should be used when checking value equality on String literals. Using `==` or `!=` compares object references, not the actual value of the Strings. This only modifies code where at least one side of the binary operation (`==` or `!=`) is a String literal, such as `"someString" == someVariable;`. This is to prevent inadvertently changing code where referential equality is the user's intent. Reference equality on strings is fragile because it depends on JVM string interning behavior, which can vary across runtimes and is not guaranteed for dynamically constructed strings._

### Tags

* [RSPEC-S4973](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S4973&open=java%3AS4973)

## Recipe source

[GitHub: StringLiteralEquality.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/StringLiteralEquality.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.List;
class Test {
    public String getString() {
        return "stringy";
    }

    public void method(String str) {
        if (str.length() > 1 && str == "test") ;
        if ("test" == str) ;
        if ("test" == "test") ;
        if ("test" == new String("test")) ;
        if ("test" == getString());
        boolean flag = (str == "test");
        while ("test" == str) {
        }
    }

    public void findPeter(List<Friend> friends) {
        friends.stream().filter(e -> e.name == "peter");
    }

    class Friend {
        String name;
    }
}
```

###### After
```java
import java.util.List;
class Test {
    public String getString() {
        return "stringy";
    }

    public void method(String str) {
        if (str.length() > 1 && "test".equals(str)) ;
        if ("test".equals(str)) ;
        if ("test".equals("test")) ;
        if ("test".equals(new String("test"))) ;
        if ("test".equals(getString()));
        boolean flag = ("test".equals(str));
        while ("test".equals(str)) {
        }
    }

    public void findPeter(List<Friend> friends) {
        friends.stream().filter(e -> "peter".equals(e.name));
    }

    class Friend {
        String name;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -8,7 +8,7 @@

    public void method(String str) {
-       if (str.length() > 1 && str == "test") ;
-       if ("test" == str) ;
-       if ("test" == "test") ;
-       if ("test" == new String("test")) ;
-       if ("test" == getString());
-       boolean flag = (str == "test");
-       while ("test" == str) {
+       if (str.length() > 1 && "test".equals(str)) ;
+       if ("test".equals(str)) ;
+       if ("test".equals("test")) ;
+       if ("test".equals(new String("test"))) ;
+       if ("test".equals(getString()));
+       boolean flag = ("test".equals(str));
+       while ("test".equals(str)) {
        }
@@ -19,1 +19,1 @@

    public void findPeter(List<Friend> friends) {
-       friends.stream().filter(e -> e.name == "peter");
+       friends.stream().filter(e -> "peter".equals(e.name));
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.StringLiteralEquality"
  displayName="Use `String.equals()` on `String` literals"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.StringLiteralEquality" />

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
