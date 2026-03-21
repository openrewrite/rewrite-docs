---
sidebar_label: "GitHub Actions security insights"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# GitHub Actions security insights

**org.openrewrite.github.security.GitHubActionsSecurity**

_Finds potential security issues in GitHub Actions workflows, based on [Zizmor](https://docs.zizmor.sh) security analysis rules._

### Tags

* [supply-chain](/reference/recipes-by-tag#supply)
* [github](/reference/recipes-by-tag#github)
* [security](/reference/recipes-by-tag#security)

## Recipe source

[GitHub: security.yml](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/security.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find credential persistence through GitHub Actions artifacts](../../github/security/artifactsecurityrecipe)
* [Find spoofable bot actor checks](../../github/security/botconditionsrecipe)
* [Find cache poisoning vulnerabilities](../../github/security/cachepoisoningrecipe)
* [Find dangerous workflow triggers](../../github/security/dangeroustriggersrecipe)
* [Find excessive permissions](../../github/security/excessivepermissionsrecipe)
* [Find forbidden action usage](../../github/security/forbiddenusesrecipe)
* [Find dangerous GITHUB_ENV usage](../../github/security/githubenvrecipe)
* [Find hardcoded container credentials](../../github/security/hardcodedcredentialsrecipe)
* [Find insecure commands configuration](../../github/security/insecurecommandsrecipe)
* [Find obfuscated GitHub Actions features](../../github/security/obfuscationrecipe)
* [Find commit SHAs with potentially mismatched version comments](../../github/security/refversionmismatchrecipe)
* [Find unconditional secrets inheritance](../../github/security/secretsinheritrecipe)
* [Find usage of self-hosted runners](../../github/security/selfhostedrunnerrecipe)
* [Find template injection vulnerabilities](../../github/security/templateinjectionrecipe)
* [Find manual credentials instead of trusted publishing](../../github/security/trustedpublishingrecipe)
* [Document permissions usage](../../github/security/undocumentedpermissionsrecipe)
* [Pin GitHub Actions to specific commits](../../github/security/unpinnedactionsrecipe)
* [Pin Docker images to digests](../../github/security/unpinneddockerimagesrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.security.GitHubActionsSecurity
displayName: GitHub Actions security insights
description: |
  Finds potential security issues in GitHub Actions workflows, based on [Zizmor](https://docs.zizmor.sh) security analysis rules.
tags:
  - supply-chain
  - github
  - security
recipeList:
  - org.openrewrite.github.security.ArtifactSecurityRecipe
  - org.openrewrite.github.security.BotConditionsRecipe
  - org.openrewrite.github.security.CachePoisoningRecipe
  - org.openrewrite.github.security.DangerousTriggersRecipe
  - org.openrewrite.github.security.ExcessivePermissionsRecipe
  - org.openrewrite.github.security.ForbiddenUsesRecipe
  - org.openrewrite.github.security.GitHubEnvRecipe
  - org.openrewrite.github.security.HardcodedCredentialsRecipe
  - org.openrewrite.github.security.InsecureCommandsRecipe
  - org.openrewrite.github.security.ObfuscationRecipe
  - org.openrewrite.github.security.RefVersionMismatchRecipe
  - org.openrewrite.github.security.SecretsInheritRecipe
  - org.openrewrite.github.security.SelfHostedRunnerRecipe
  - org.openrewrite.github.security.TemplateInjectionRecipe
  - org.openrewrite.github.security.TrustedPublishingRecipe
  - org.openrewrite.github.security.UndocumentedPermissionsRecipe
  - org.openrewrite.github.security.UnpinnedActionsRecipe
  - org.openrewrite.github.security.UnpinnedDockerImagesRecipe

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.github.security.GitHubActionsSecurity"
  displayName="GitHub Actions security insights"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.security.GitHubActionsSecurity" />

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
