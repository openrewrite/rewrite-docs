---
sidebar_label: "Change Concourse value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Concourse value

**org.openrewrite.concourse.ChangeValue**

_Change every value matching the key pattern._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | keyPath | The key to match and replace. | `$.resources[?(@.type == 'git')].source.uri` |
| `String` | oldValue | *Optional*. Only change if the existing value matches. | `https://github.com/openrewrite/rewrite0` |
| `String` | newValue | New value to replace the old value with. | `git@github.com:openrewrite/rewrite1.git` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pipeline*.yml` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|keyPath|`$.resources[?(@.type == 'git')].source.uri`|
|oldValue|`https://github.com/openrewrite/rewrite0`|
|newValue|`git@github.com:openrewrite/rewrite1.git`|
|fileMatcher|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
resources:
- name: git-repo
  type: git
  source:
    uri: https://github.com/openrewrite/rewrite0
- name: custom
  type: custom-type
  source:
    uri: https://github.com/openrewrite/rewrite0
```

###### After
```yaml
resources:
- name: git-repo
  type: git
  source:
    uri: git@github.com:openrewrite/rewrite1.git
- name: custom
  type: custom-type
  source:
    uri: https://github.com/openrewrite/rewrite0
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
  type: git
  source:
-   uri: https://github.com/openrewrite/rewrite0
+   uri: git@github.com:openrewrite/rewrite1.git
- name: custom
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
name: com.yourorg.ChangeValueExample
displayName: Change Concourse value example
recipeList:
  - org.openrewrite.concourse.ChangeValue: 
      keyPath: $.resources[?(@.type == 'git')].source.uri
      oldValue: https://github.com/openrewrite/rewrite0
      newValue: git@github.com:openrewrite/rewrite1.git
      fileMatcher: '**/pipeline*.yml'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeValue --recipe-option "keyPath=$.resources[?(@.type == 'git')].source.uri" --recipe-option "oldValue=https://github.com/openrewrite/rewrite0" --recipe-option "newValue=git@github.com:openrewrite/rewrite1.git" --recipe-option "fileMatcher='**/pipeline*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-concourse:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.concourse.ChangeValue" />

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
