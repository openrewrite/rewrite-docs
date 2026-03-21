---
sidebar_label: "GitLab CI best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# GitLab CI best practices

**org.openrewrite.gitlab.BestPractices**

_Apply GitLab CI/CD best practices to `.gitlab-ci.yml`. This includes adding `workflow:rules` to prevent duplicate pipelines, setting `interruptible: true` and `retry` in the `default` section, configuring `artifacts:expire_in`, and setting a job `timeout`._

### Tags

* [ci](/reference/recipes-by-tag#ci)
* [gitlab](/reference/recipes-by-tag#gitlab)

## Recipe source

[GitHub: best-practices.yml](https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/resources/META-INF/rewrite/best-practices.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-gitlab/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-gitlab/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate `only`/`except` to `rules`](../gitlab/migratetorules)
* [Add workflow rules](../gitlab/addworkflowrules)
  * rules: `- if: $CI_PIPELINE_SOURCE == 'merge_request_event' - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS   when: never - if: $CI_COMMIT_BRANCH`
* [Add interruptible](../gitlab/addinterruptible)
* [Add retry configuration](../gitlab/addretry)
  * max: `2`
  * when: `[runner_system_failure, stuck_or_timeout_failure]`
* [Add artifacts expire_in](../gitlab/addartifactsexpirein)
  * expireIn: `1 week`
* [Add job timeout](../gitlab/addtimeout)
  * timeout: `1 hour`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gitlab.BestPractices
displayName: GitLab CI best practices
description: |
  Apply GitLab CI/CD best practices to `.gitlab-ci.yml`. This includes adding `workflow:rules` to prevent duplicate pipelines, setting `interruptible: true` and `retry` in the `default` section, configuring `artifacts:expire_in`, and setting a job `timeout`.
tags:
  - ci
  - gitlab
recipeList:
  - org.openrewrite.gitlab.MigrateToRules
  - org.openrewrite.gitlab.AddWorkflowRules:
      rules: - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
- if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS
  when: never
- if: $CI_COMMIT_BRANCH
  - org.openrewrite.gitlab.AddInterruptible
  - org.openrewrite.gitlab.AddRetry:
      max: 2
      when: [runner_system_failure, stuck_or_timeout_failure]
  - org.openrewrite.gitlab.AddArtifactsExpireIn:
      expireIn: 1 week
  - org.openrewrite.gitlab.AddTimeout:
      timeout: 1 hour

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`BestPracticesTest#appliesBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value=".gitlab-ci.yml" label=".gitlab-ci.yml">


###### Before
```yaml title=".gitlab-ci.yml"
stages:
  - build
  - test
```

###### After
```yaml title=".gitlab-ci.yml"
stages:
  - build
  - test
workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS
      when: never
    - if: $CI_COMMIT_BRANCH
default:
  interruptible: true
  retry:
    max: 2
    when:
      - runner_system_failure
      - stuck_or_timeout_failure
  artifacts:
    expire_in: 1 week
  timeout: 1 hour
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .gitlab-ci.yml
+++ .gitlab-ci.yml
@@ -4,0 +4,16 @@
  - build
  - test
+workflow:
+ rules:
+   - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
+   - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS
+     when: never
+   - if: $CI_COMMIT_BRANCH
+default:
+ interruptible: true
+ retry:
+   max: 2
+   when:
+     - runner_system_failure
+     - stuck_or_timeout_failure
+ artifacts:
+   expire_in: 1 week
+ timeout: 1 hour

```
</TabItem>
</Tabs>

---

##### Example 2
`BestPracticesTest#appliesBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value=".gitlab-ci.yml" label=".gitlab-ci.yml">


###### Before
```yaml title=".gitlab-ci.yml"
stages:
  - build
  - test
```

###### After
```yaml title=".gitlab-ci.yml"
stages:
  - build
  - test
workflow:
  rules:
    - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
    - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS
      when: never
    - if: $CI_COMMIT_BRANCH
default:
  interruptible: true
  retry:
    max: 2
    when:
      - runner_system_failure
      - stuck_or_timeout_failure
  artifacts:
    expire_in: 1 week
  timeout: 1 hour
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .gitlab-ci.yml
+++ .gitlab-ci.yml
@@ -4,0 +4,16 @@
  - build
  - test
+workflow:
+ rules:
+   - if: $CI_PIPELINE_SOURCE == 'merge_request_event'
+   - if: $CI_COMMIT_BRANCH && $CI_OPEN_MERGE_REQUESTS
+     when: never
+   - if: $CI_COMMIT_BRANCH
+default:
+ interruptible: true
+ retry:
+   max: 2
+   when:
+     - runner_system_failure
+     - stuck_or_timeout_failure
+ artifacts:
+   expire_in: 1 week
+ timeout: 1 hour

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.gitlab.BestPractices"
  displayName="GitLab CI best practices"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-gitlab"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gitlab.BestPractices" />

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
