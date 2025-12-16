---
sidebar_label: "Find method invocations that resemble a pattern"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find method invocations that resemble a pattern

**io.moderne.ai.research.FindCodeThatResembles**

_This recipe uses two phase AI approach to find a method invocation that resembles a search string._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | resembles | The text, either a natural language description or a code sample, that you are looking for. | `HTTP request with Content-Type application/json` |
| `int` | k | Since AI based matching has a higher latency than rules based matching, we do a first pass to find the top k methods using embeddings. To narrow the scope, you can specify the top k methods as method filters. | `5` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|resembles|`HTTP request with Content-Type application/json`|
|k|`4`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import kong.unirest.*;
class Test {
    void test() {
          Unirest.post("https://httpbin.org/post")
                  .header("Content-Type", "application/json")
                  .body("1")
                  .asString();
    }
}
```

###### After
```java
import kong.unirest.*;
class Test {
    void test() {
          /*~~>*/Unirest.post("https://httpbin.org/post")
                  .header("Content-Type", "application/json")
                  .body("1")
                  .asString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
class Test {
    void test() {
-         Unirest.post("https://httpbin.org/post")
+         /*~~>*/Unirest.post("https://httpbin.org/post")
                  .header("Content-Type", "application/json")
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindCodeThatResemblesExample
displayName: Find method invocations that resemble a pattern example
recipeList:
  - io.moderne.ai.research.FindCodeThatResembles: 
      resembles: HTTP request with Content-Type application/json
      k: 5
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindCodeThatResembles --recipe-option "resembles=HTTP request with Content-Type application/json" --recipe-option "k=5"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-ai-search:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_AI_SEARCH}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.ai.research.FindCodeThatResembles" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.ai.table.CodeSearch" label="CodeSearch">

### Code Search
**io.moderne.ai.table.CodeSearch**

_Searches for method invocations that resemble a natural language query._

| Column Name | Description |
| ----------- | ----------- |
| Source | Source |
| Method | Method invocation |
| Query | Natural language query |
| Result of first models | First two embeddings models result, where -1 means negative match, 0 means unsure, and 1 means positive match. |
| Called second model | True if the generative model was used. |
| Result of second model | Second generative model's result. |

</TabItem>

<TabItem value="io.moderne.ai.table.TopKMethodMatcher" label="TopKMethodMatcher">

### Top-K Method Matcher
**io.moderne.ai.table.TopKMethodMatcher**

_Result from the scanning recipe for top-k method patterns that match the query._

| Column Name | Description |
| ----------- | ----------- |
| Method Pattern | Method invocation pattern. |
| Method Signature | Method invocation signature. |
| Distance | The distance between the query and the method invocation. |
| Query | The natural language search query. |

</TabItem>

<TabItem value="io.moderne.ai.table.EmbeddingPerformance" label="EmbeddingPerformance">

### Embedding performance
**io.moderne.ai.table.EmbeddingPerformance**

_Latency characteristics of uses of embedding models._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Number of requests | The count of requests made to the model. |
| Histogram | The latency histogram of the requests made to the model (counts). The histogram is a non-cumulative fixed distribution of 100 buckets of 0.01 second each. |
| Max latency | The maximum embedding latency. |

</TabItem>

<TabItem value="io.moderne.ai.table.GenerativeModelPerformance" label="GenerativeModelPerformance">

### Generative model performance
**io.moderne.ai.table.GenerativeModelPerformance**

_Latency characteristics of uses of generative models._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Number of requests | The count of requests made to the model. |
| Histogram | The latency histogram of the requests made to the model (counts). The histogram is a non-cumulative fixed distribution of 100 buckets of 1 second each. |
| Max latency | The maximum embedding latency. |

</TabItem>

<TabItem value="io.moderne.ai.table.SuggestedMethodPatterns" label="SuggestedMethodPatterns">

### Suggested method patterns
**io.moderne.ai.table.SuggestedMethodPatterns**

_As the next step after the AI-based searching for method invocations, you may want to do rule-based method searching using the recommended method patterns._

| Column Name | Description |
| ----------- | ----------- |
| Method | Method invocation |
| Method Pattern | Method invocation pattern. |
| Query | The natural language search query. |

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
