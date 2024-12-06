---
sidebar_label: "Javascript real-time communication library insights"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Javascript real-time communication library insights

**org.openrewrite.nodejs.search.RealTimeCommunicationInsights**

_Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-nodejs/blob/main/src/main/resources/META-INF/rewrite/insights.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-nodejs/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-nodejs/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `socket.io`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `ws`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `sockjs`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `faye`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `primus`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `actioncable`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `deepstream.io`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `websockets`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@microsoft/signalr`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `pubnub`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `pusher`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `ably`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `centrifugo`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@feathersjs/feathers`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `meteor`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `nchan`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `kafka-node`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `mqtt`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `nanomsg`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `zeromq`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `amqplib`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `stompjs`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `wrtc`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `peerjs`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `janus-gateway-js`
  * onlyDirect: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.nodejs.search.RealTimeCommunicationInsights
displayName: Javascript real-time communication library insights
description: Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects.
recipeList:
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: socket.io
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: ws
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: sockjs
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: faye
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: primus
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: actioncable
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: deepstream.io
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: websockets
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @microsoft/signalr
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: pubnub
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: pusher
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: ably
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: centrifugo
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @feathersjs/feathers
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: meteor
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: nchan
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: kafka-node
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: mqtt
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: nanomsg
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: zeromq
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: amqplib
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: stompjs
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: wrtc
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: peerjs
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: janus-gateway-js
      onlyDirect: false

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-nodejs:{{VERSION_REWRITE_NODEJS}}` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RealTimeCommunicationInsights
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-nodejs:{{VERSION_REWRITE_NODEJS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.nodejs.search.RealTimeCommunicationInsights" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

