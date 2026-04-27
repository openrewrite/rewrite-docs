---
sidebar_label: "Migrate GitLab Terraform template to OpenTofu component"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate GitLab Terraform template to OpenTofu component

**org.openrewrite.gitlab.MigrateTerraformTemplateToOpenTofuComponent**

_Replace the deprecated `Terraform/Base.latest.gitlab-ci.yml` template include with the OpenTofu CI/CD component, per the GitLab catalog migration guide._

### Tags

* [ci](/reference/recipes-by-tag#ci)
* [gitlab](/reference/recipes-by-tag#gitlab)
* [terraform](/reference/recipes-by-tag#terraform)
* [opentofu](/reference/recipes-by-tag#opentofu)

## Recipe source

[GitHub: opentofu.yml](https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/resources/META-INF/rewrite/opentofu.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-gitlab/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-gitlab/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate GitLab template to component](../gitlab/migratetemplatetocomponent)
  * oldTemplate: `Terraform/Base.latest.gitlab-ci.yml`
  * newComponent: `$CI_SERVER_FQDN/components/opentofu/job-templates`
  * version: `~latest`
  * inputs: `[opentofu_version: 1.11.6]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gitlab.MigrateTerraformTemplateToOpenTofuComponent
displayName: Migrate GitLab Terraform template to OpenTofu component
description: |
  Replace the deprecated `Terraform/Base.latest.gitlab-ci.yml` template include with the OpenTofu CI/CD component, per the GitLab catalog migration guide.
tags:
  - ci
  - gitlab
  - terraform
  - opentofu
recipeList:
  - org.openrewrite.gitlab.MigrateTemplateToComponent:
      oldTemplate: Terraform/Base.latest.gitlab-ci.yml
      newComponent: $CI_SERVER_FQDN/components/opentofu/job-templates
      version: ~latest
      inputs: [opentofu_version: 1.11.6]

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`MigrateTerraformTemplateToOpenTofuComponentTest#migrateTerraformTemplateToOpenTofuComponent`


<Tabs groupId="beforeAfter">
<TabItem value=".gitlab-ci.yml" label=".gitlab-ci.yml">


###### Before
```yaml title=".gitlab-ci.yml"
include:
  - template: Terraform/Base.latest.gitlab-ci.yml
```

###### After
```yaml title=".gitlab-ci.yml"
include:
  - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest
    inputs:
      opentofu_version: 1.11.6
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .gitlab-ci.yml
+++ .gitlab-ci.yml
@@ -2,1 +2,3 @@
include:
- - template: Terraform/Base.latest.gitlab-ci.yml
+ - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest
+   inputs:
+     opentofu_version: 1.11.6

```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateTerraformTemplateToOpenTofuComponentTest#migrateTerraformTemplateToOpenTofuComponent`


<Tabs groupId="beforeAfter">
<TabItem value=".gitlab-ci.yml" label=".gitlab-ci.yml">


###### Before
```yaml title=".gitlab-ci.yml"
include:
  - template: Terraform/Base.latest.gitlab-ci.yml
```

###### After
```yaml title=".gitlab-ci.yml"
include:
  - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest
    inputs:
      opentofu_version: 1.11.6
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .gitlab-ci.yml
+++ .gitlab-ci.yml
@@ -2,1 +2,3 @@
include:
- - template: Terraform/Base.latest.gitlab-ci.yml
+ - component: $CI_SERVER_FQDN/components/opentofu/job-templates@~latest
+   inputs:
+     opentofu_version: 1.11.6

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.gitlab.MigrateTerraformTemplateToOpenTofuComponent"
  displayName="Migrate GitLab Terraform template to OpenTofu component"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-gitlab"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITLAB"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gitlab.MigrateTerraformTemplateToOpenTofuComponent" />

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
