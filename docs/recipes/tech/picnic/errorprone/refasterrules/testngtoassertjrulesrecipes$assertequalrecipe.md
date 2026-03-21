---
sidebar_label: "Refaster template `TestNGToAssertJRules.AssertEqual`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Refaster template `TestNGToAssertJRules.AssertEqual`

**tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe**

Recipe created for the following Refaster template:
```java
@SuppressWarnings(value = "java:S1448")
static final class AssertEqual {
    
    @BeforeTemplate
    void before(boolean actual, boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(boolean actual, Boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Boolean actual, boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Boolean actual, Boolean expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte actual, byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(byte actual, Byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Byte actual, byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Byte actual, Byte expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char actual, char expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(char actual, Character expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Character actual, char expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Character actual, Character expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short actual, short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(short actual, Short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Short actual, short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Short actual, Short expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int actual, int expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(int actual, Integer expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Integer actual, int expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Integer actual, Integer expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long actual, long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(long actual, Long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Long actual, long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Long actual, Long expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float actual, float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(float actual, Float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Float actual, float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Float actual, Float expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double actual, double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(double actual, Double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Double actual, double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Double actual, Double expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Object actual, Object expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(String actual, String expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, Map<?, ?> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Object expected) {
        assertThat(actual).isEqualTo(expected);
    }
}
```
.

### Tags

* [RSPEC-S1448](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1448&open=java%3AS1448)

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Used by

This recipe is used as part of the following composite recipes:

* [Refaster rules that replace TestNG assertions with equivalent AssertJ assertions](/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe"
  displayName="Refaster template `TestNGToAssertJRules.AssertEqual`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualRecipe" />

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
