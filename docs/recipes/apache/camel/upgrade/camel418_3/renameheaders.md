---
title: "Rename Camel header(s) across all DSLs"
sidebar_label: "Rename Camel header(s) across all DSLs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename Camel header(s) across all DSLs

**org.apache.camel.upgrade.camel418\_3.RenameHeaders**

```
Renames Camel header(s) from old name(s) to new name(s) across all DSL types: Java method calls (.setHeader, .getHeader), Simple expressions (${header.name}), XML DSL (<setHeader name="...">), and YAML DSL (setHeader.name). Supports both single header rename (oldHeaderName/newHeaderName) and bulk rename (headerMappings). Only migrates safe contexts to avoid false positives.
```


## Recipe source

[GitHub: search?type=code&q=org.apache.camel.upgrade.camel418_3.RenameHeaders](https://github.com/search?type=code&q=org.apache.camel.upgrade.camel418_3.RenameHeaders),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Map` | headerMappings | *Optional*. Map of old header names to new header names (for bulk rename) | `kafka.TOPIC: CamelKafkaTopic` |
| `String` | oldHeaderName | *Optional*. The old header name to replace (for single rename) | `kafka.TOPIC` |
| `String` | newHeaderName | *Optional*. The new header name to use (for single rename) | `CamelKafkaTopic` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate camel-arangodb header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradearangodbheaders.md)
* [Migrate camel-couchbase header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradecouchbaseheaders.md)
* [Migrate camel-couchdb header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradecouchdbheaders.md)
* [Migrate camel-dns header constants to new naming convention](/recipes/apache/camel/upgrade/camel418/upgradednsheaders.md)
* [Migrate camel-dns header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradednsheaders.md)
* [Migrate camel-github2 producer header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradegithub2headers.md)
* [Migrate camel-github2 producer header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradegithub2headers.md)
* [Migrate camel-google-cloud header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradegooglecloudheaders.md)
* [Migrate camel-google-secret-manager header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradegooglesecretmanagerheaders.md)
* [Migrate camel-google-speech-to-text header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradegooglecloudspeechtotextheaders.md)
* [Migrate camel-google-test-to-spech header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradegooglecloudtexttospeechheaders.md)
* [Migrate camel-google-vision header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradegooglecloudvisionheaders.md)
* [Migrate camel-irc header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradeircheaders.md)
* [Migrate camel-jgroups header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradejgroupsheaders.md)
* [Migrate camel-jgroups-raft header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradejgroupsraftheaders.md)
* [Migrate camel-jira header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradejiraheaders.md)
* [Migrate camel-jt400 header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradejt400headers.md)
* [Migrate camel-kafka headers](/recipes/apache/camel/upgrade/camel418/upgradekafkarecipes.md)
* [Migrate camel-kafka headers](/recipes/apache/camel/upgrade/camel421/upgradekafkarecipes.md)
* [Migrate camel-lucene header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradeluceneheaders.md)
* [Migrate camel-mail consumer dispatch header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgrademailheaders.md)
* [Migrate camel-milo header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgrademiloheaders.md)
* [Migrate camel-mongodb-gridfs header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgrademongodbgridfsheaders.md)
* [Migrate camel-opensearch header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradeopensearchheaders.md)
* [Migrate camel-openstack header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradeopenstackheaders.md)
* [Migrate camel-pdf header constants to new naming convention](/recipes/apache/camel/upgrade/camel421/upgradepdfheaders.md)
* [Migrate camel-salesforce header constants to new naming convention](/recipes/apache/camel/upgrade/camel418/upgradesalesforceheaders.md)
* [Migrate camel-shiro security header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradeshiroheaders.md)
* [Migrate camel-web3j header constants to new naming convention](/recipes/apache/camel/upgrade/camel418_3/upgradeweb3jheaders.md)


## Usage

<RunRecipe
  recipeName="org.apache.camel.upgrade.camel418_3.RenameHeaders"
  displayName="Rename Camel header(s) across all DSLs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.apache.camel.upgrade.camel418_3.RenameHeaders" />

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
