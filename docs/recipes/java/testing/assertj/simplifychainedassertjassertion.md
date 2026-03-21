---
sidebar_label: "Simplify AssertJ chained assertions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify AssertJ chained assertions

**org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion**

_Many AssertJ chained assertions have dedicated assertions that function the same. It is best to use the dedicated assertions._

### Tags

* [RSPEC-S5838](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S5838&open=java%3AS5838)

## Recipe source

[GitHub: SimplifyChainedAssertJAssertion.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/assertj/SimplifyChainedAssertJAssertion.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | chainedAssertion | *Optional*. The chained AssertJ assertion to move to dedicated assertion. | `equals` |
| `String` | assertToReplace | *Optional*. The AssertJ assert that should be replaced. | `isTrue` |
| `String` | dedicatedAssertion | *Optional*. The AssertJ method to migrate to. | `isEqualTo` |
| `String` | requiredType | *Optional*. The type of the actual assertion argument. | `java.lang.String` |


## Used by

This recipe is used as part of the following composite recipes:

* [Simplify AssertJ chained assertions](/recipes/java/testing/assertj/simplifychainedassertjassertions.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|chainedAssertion|`isEmpty`|
|assertToReplace|`isTrue`|
|dedicatedAssertion|`isEmpty`|
|requiredType|`java.lang.String`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        assertThat("hello world".isEmpty()).isTrue();
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        assertThat("hello world").isEmpty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
class MyTest {
    void testMethod() {
-       assertThat("hello world".isEmpty()).isTrue();
+       assertThat("hello world").isEmpty();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion"
  displayName="Simplify AssertJ chained assertions"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion" />

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
