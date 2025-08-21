---
sidebar_label: "Comprehend code"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comprehend code

**io.moderne.knowledge.ComprehendCode**

_Use LLMs to add inferred knowledge to the code._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Code comprehension with unit test examples](/recipes/knowledge/comprehendcodewithunittestexamples.md)


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ComprehendCode
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-comprehension:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_COMPREHENSION}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.knowledge.ComprehendCode" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.knowledge.table.ClassDescriptions" label="ClassDescriptions">

### Class descriptions written by an LLM
**io.moderne.knowledge.table.ClassDescriptions**

_The inferred knowledge about classes in the codebase, as provided by an LLM._

| Column Name | Description |
| ----------- | ----------- |
| Class name | The fully qualified name of the class |
| Time to infer | The time taken by the LLM to infer the knowledge, in milliseconds. |
| Description | The description of the inferred knowledge, as provided by the LLM. |
| Responsibility | The responsibility of the class, as inferred by the LLM. |
| Pattern in use 1 | An architectural pattern in use in the class. |
| Pattern in use 2 | An architectural pattern in use in the class. |
| Pattern in use 3 | An architectural pattern in use in the class. |

</TabItem>

<TabItem value="io.moderne.knowledge.table.MethodDescriptions" label="MethodDescriptions">

### Method descriptions written by an LLM
**io.moderne.knowledge.table.MethodDescriptions**

_The inferred knowledge about methods in the codebase, as provided by an LLM._

| Column Name | Description |
| ----------- | ----------- |
| Class name | The fully qualified name of the class |
| Method signature | The code element at which the knowledge is inferred. |
| Number of Characters | The number of characters in the method. |
| Time to infer | The time taken by the LLM to infer the knowledge, in milliseconds. |
| Time to get API examples | The time taken by tool to get API examples. |
| Description | The description of the inferred knowledge, as provided by the LLM. |
| Return type description | What is contained in the returned type. |
| Technology in use 1 | A technique in use in the method. |
| Technology in use 2 | A technique in use in the method. |
| Technology in use 3 | A technique in use in the method. |
| Examples | API examples of the methods in the codebase with the number of occurrences. |
| Examples of unit tests | Examples of the method declaration being used in the unit test. |

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
