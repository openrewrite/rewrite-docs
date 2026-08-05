---
title: "Migrates `camel 4.20` application to `camel 4.21`"
sidebar_label: "Migrates `camel 4.20` application to `camel 4.21`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates `camel 4.20` application to `camel 4.21`

**org.apache.camel.upgrade.camel421.CamelMigrationRecipe**

_Migrates `camel 4.20` application to `camel 4.21`._

## Recipe source

[GitHub: search?type=code&q=org.apache.camel.upgrade.camel421.CamelMigrationRecipe](https://github.com/search?type=code&q=org.apache.camel.upgrade.camel421.CamelMigrationRecipe),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate camel-jgroups header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradejgroupsheaders)
* [Migrate camel-jira header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradejiraheaders)
* [Migrate camel-jgroups-raft header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradejgroupsraftheaders)
* [Migrate camel-shiro security header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradeshiroheaders)
* [Migrate camel-solr header prefixes to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradesolrheaders)
* [Migrate camel-mongodb-gridfs header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgrademongodbgridfsheaders)
* [Migrate camel-github2 producer header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradegithub2headers)
* [Migrate camel-google-cloud header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradegooglecloudheaders)
* [Migrate camel-google-secret-manager header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradegooglesecretmanagerheaders)
* [Migrate camel-lucene header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradeluceneheaders)
* [Migrate camel-openstack header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradeopenstackheaders)
* [Migrate camel-web3j header constants to new naming convention](../../../../apache/camel/upgrade/camel418_3/upgradeweb3jheaders)
* [Migrate camel-kafka headers](../../../../apache/camel/upgrade/camel421/upgradekafkarecipes)
* [Migrate camel-dns header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradednsheaders)
* [Migrate camel-couchdb header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradecouchdbheaders)
* [Migrate camel-couchbase header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradecouchbaseheaders)
* [Migrate camel-github2 producer header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradegithub2headers)
* [Migrate camel-google-vision header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradegooglecloudvisionheaders)
* [Migrate camel-google-test-to-spech header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradegooglecloudtexttospeechheaders)
* [Migrate camel-google-speech-to-text header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradegooglecloudspeechtotextheaders)
* [Migrate camel-pdf header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradepdfheaders)
* [Migrate camel-arangodb header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradearangodbheaders)
* [Migrate camel-jt400 header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradejt400headers)
* [Migrate camel-mail consumer dispatch header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgrademailheaders)
* [Migrate camel-milo header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgrademiloheaders)
* [Migrate camel-opensearch header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradeopensearchheaders)
* [Migrate camel-irc header constants to new naming convention](../../../../apache/camel/upgrade/camel421/upgradeircheaders)
* [Remove camel-stomp dependency](../../../../apache/camel/upgrade/camel421/removecamelstompdependency)
* [Remove camel-aws-xray dependency](../../../../apache/camel/upgrade/camel421/removecamelawsxraydependency)
* [Remove camel-guava-eventbus dependency](../../../../apache/camel/upgrade/camel421/removecamelguavaeventbusdependency)
* [Remove camel-grape dependency](../../../../apache/camel/upgrade/camel421/removecamelgrapedependency)
* [Remove camel-elytron dependency](../../../../apache/camel/upgrade/camel421/removecamelelytrondependency)
* [Remove camel-github dependency](../../../../apache/camel/upgrade/camel421/removecamelgithubdependency)
* [Migrate camel-aws2-s3 listObjects to V2 API](../../../../apache/camel/upgrade/camel421/migrateaws2s3listobjectsapi)
* [Migrate Error Registry configuration properties](../../../../apache/camel/upgrade/camel421/migrateerrorregistryproperties)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.apache.camel.upgrade.camel421.CamelMigrationRecipe
displayName: Migrates `camel 4.20` application to `camel 4.21`
description: |
  Migrates `camel 4.20` application to `camel 4.21`.
recipeList:
  - org.apache.camel.upgrade.camel418_3.upgradeJGroupsHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeJiraHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeJGroupsRaftHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeShiroHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeSolrHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeMongoDbGridFsHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeGitHub2Headers
  - org.apache.camel.upgrade.camel418_3.upgradeGoogleCloudHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeGoogleSecretManagerHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeLuceneHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeOpenstackHeaders
  - org.apache.camel.upgrade.camel418_3.upgradeWeb3jHeaders
  - org.apache.camel.upgrade.camel421.upgradeKafkaRecipes
  - org.apache.camel.upgrade.camel421.upgradeDnsHeaders
  - org.apache.camel.upgrade.camel421.upgradeCouchdbHeaders
  - org.apache.camel.upgrade.camel421.upgradeCouchbaseHeaders
  - org.apache.camel.upgrade.camel421.upgradeGitHub2Headers
  - org.apache.camel.upgrade.camel421.upgradeGoogleCloudVisionHeaders
  - org.apache.camel.upgrade.camel421.upgradeGoogleCloudTextToSpeechHeaders
  - org.apache.camel.upgrade.camel421.upgradeGoogleCloudSpeechToTextHeaders
  - org.apache.camel.upgrade.camel421.upgradePdfHeaders
  - org.apache.camel.upgrade.camel421.upgradeArangoDbHeaders
  - org.apache.camel.upgrade.camel421.upgradeJt400Headers
  - org.apache.camel.upgrade.camel421.upgradeMailHeaders
  - org.apache.camel.upgrade.camel421.upgradeMiloHeaders
  - org.apache.camel.upgrade.camel421.upgradeOpensearchHeaders
  - org.apache.camel.upgrade.camel421.upgradeIrcHeaders
  - org.apache.camel.upgrade.camel421.removeCamelStompDependency
  - org.apache.camel.upgrade.camel421.removeCamelAwsXrayDependency
  - org.apache.camel.upgrade.camel421.removeCamelGuavaEventbusDependency
  - org.apache.camel.upgrade.camel421.removeCamelGrapeDependency
  - org.apache.camel.upgrade.camel421.removeCamelElytronDependency
  - org.apache.camel.upgrade.camel421.removeCamelGithubDependency
  - org.apache.camel.upgrade.camel421.migrateAws2S3ListObjectsApi
  - org.apache.camel.upgrade.camel421.migrateErrorRegistryProperties

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to 4.21.0](/recipes/apache/camel/upgrade/camelmigrationrecipe.md)
* [Migrates `camel 4.20` application to `camel 4.21`](/recipes/quarkus/updates/camel/camel421/camelquarkusmigrationrecipe.md)


## Usage

<RunRecipe
  recipeName="org.apache.camel.upgrade.camel421.CamelMigrationRecipe"
  displayName="Migrates `camel 4.20` application to `camel 4.21`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.apache.camel.upgrade.camel421.CamelMigrationRecipe" />

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
