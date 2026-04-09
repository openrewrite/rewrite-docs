---
sidebar_label: "Migrates from Netty 3.2.x to Netty 4.1.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates from Netty 3.2.x to Netty 4.1.x

**org.openrewrite.netty.UpgradeNetty\_3\_2\_to\_4\_1**

_Migrate applications to the latest Netty 4.1.x release._

### Tags

* [netty](/reference/recipes-by-tag#netty)

## Recipe source

[GitHub: netty-3_2_to_4_1.yml](https://github.com/openrewrite/rewrite-netty/blob/main/src/main/resources/META-INF/rewrite/netty-3_2_to_4_1.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-netty/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-netty/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../java/changemethodname)
  * methodPattern: `*..* channelOpen(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.ChannelStateEvent)`
  * newMethodName: `channelActive`
* [Change method name](../java/changemethodname)
  * methodPattern: `*..* channelClosed(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.ChannelStateEvent)`
  * newMethodName: `channelInactive`
* [Change method name](../java/changemethodname)
  * methodPattern: `*..* messageReceived(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.MessageEvent)`
  * newMethodName: `channelRead`
* [Change parameter type for a method declaration](../java/spring/changemethodparameter)
  * methodPattern: `*..* channelRead(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.MessageEvent)`
  * parameterType: `java.lang.Object`
  * parameterIndex: `1`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.ChannelHandlerContext getChannel()`
  * newMethodName: `channel`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.ChannelHandlerContext getPipeline()`
  * newMethodName: `pipeline`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.Channel getPipeline()`
  * newMethodName: `pipeline`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.Channel isConnected()`
  * newMethodName: `isActive`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.Channel getLocalAddress()`
  * newMethodName: `localAddress`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.Channel getRemoteAddress()`
  * newMethodName: `remoteAddress`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.Channel getCloseFuture()`
  * newMethodName: `closeFuture`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.ChannelFuture getChannel()`
  * newMethodName: `channel`
* [Change method name](../java/changemethodname)
  * methodPattern: `org.jboss.netty.channel.ChannelFuture getCause()`
  * newMethodName: `cause`
* [Remove ChannelStateEvent parameter from handler methods](../java/netty/upgrade/_3_2_to_4_1_/removechannelstateeventparameter)
* [Migrate Channel.setReadable(boolean) to Channel.config().setAutoRead(boolean)](../java/netty/upgrade/_3_2_to_4_1_/channelsetreadabletoautoread)
* [Replace annotation](../java/replaceannotation)
  * annotationPatternToReplace: `@org.jboss.netty.channel.ChannelPipelineCoverage(org.jboss.netty.channel.ChannelPipelineCoverage.ONE)`
  * annotationTemplateToInsert: `@io.netty.channel.ChannelHandler.Sharable`
  * classpathResourceName: `netty-transport`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.channel.SimpleChannelHandler`
  * newFullyQualifiedTypeName: `io.netty.channel.ChannelInboundHandlerAdapter`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.channel.SimpleChannelUpstreamHandler`
  * newFullyQualifiedTypeName: `io.netty.channel.ChannelInboundHandlerAdapter`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.handler.codec.frame.CorruptedFrameException`
  * newFullyQualifiedTypeName: `io.netty.handler.codec.CorruptedFrameException`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.buffer.ChannelBuffer`
  * newFullyQualifiedTypeName: `io.netty.buffer.ByteBuf`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.buffer.ChannelBuffers`
  * newFullyQualifiedTypeName: `io.netty.buffer.Unpooled`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.channel.ExceptionEvent`
  * newFullyQualifiedTypeName: `java.lang.Throwable`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.handler.codec.oneone.OneToOneDecoder`
  * newFullyQualifiedTypeName: `io.netty.handler.codec.MessageToMessageDecoder`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.util.ObjectSizeEstimator`
  * newFullyQualifiedTypeName: `io.netty.channel.MessageSizeEstimator`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.netty.util.DefaultObjectSizeEstimator`
  * newFullyQualifiedTypeName: `io.netty.channel.DefaultMessageSizeEstimator`
* [Migrate StringEncoder(String) to StringEncoder(StandardCharsets)](../java/netty/upgrade/_3_2_to_4_1_/stringencodertostandardcharsets)
* [Rename package name](../java/changepackage)
  * oldPackageName: `org.jboss.netty.logging`
  * newPackageName: `io.netty.util.internal.logging`
  * recursive: `true`
* [Rename package name](../java/changepackage)
  * oldPackageName: `org.jboss.netty`
  * newPackageName: `io.netty`
  * recursive: `true`
* [Change Maven dependency](../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.jboss.netty`
  * oldArtifactId: `netty`
  * newGroupId: `io.netty`
  * newArtifactId: `netty-all`
  * newVersion: `4.1.x`
* [Replace Channels.fireMessageReceived(..) with ctx.fireChannelRead(e)](../java/netty/upgrade/_3_2_to_4_1_/replacechannelsfiremessagereceived)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.netty.UpgradeNetty_3_2_to_4_1
displayName: Migrates from Netty 3.2.x to Netty 4.1.x
description: |
  Migrate applications to the latest Netty 4.1.x release.
tags:
  - netty
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *..* channelOpen(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.ChannelStateEvent)
      newMethodName: channelActive
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *..* channelClosed(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.ChannelStateEvent)
      newMethodName: channelInactive
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: *..* messageReceived(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.MessageEvent)
      newMethodName: channelRead
  - org.openrewrite.java.spring.ChangeMethodParameter:
      methodPattern: *..* channelRead(org.jboss.netty.channel.ChannelHandlerContext, org.jboss.netty.channel.MessageEvent)
      parameterType: java.lang.Object
      parameterIndex: 1
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.ChannelHandlerContext getChannel()
      newMethodName: channel
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.ChannelHandlerContext getPipeline()
      newMethodName: pipeline
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.Channel getPipeline()
      newMethodName: pipeline
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.Channel isConnected()
      newMethodName: isActive
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.Channel getLocalAddress()
      newMethodName: localAddress
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.Channel getRemoteAddress()
      newMethodName: remoteAddress
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.Channel getCloseFuture()
      newMethodName: closeFuture
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.ChannelFuture getChannel()
      newMethodName: channel
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.jboss.netty.channel.ChannelFuture getCause()
      newMethodName: cause
  - org.openrewrite.java.netty.upgrade._3_2_to_4_1_.RemoveChannelStateEventParameter
  - org.openrewrite.java.netty.upgrade._3_2_to_4_1_.ChannelSetReadableToAutoRead
  - org.openrewrite.java.ReplaceAnnotation:
      annotationPatternToReplace: @org.jboss.netty.channel.ChannelPipelineCoverage(org.jboss.netty.channel.ChannelPipelineCoverage.ONE)
      annotationTemplateToInsert: @io.netty.channel.ChannelHandler.Sharable
      classpathResourceName: netty-transport
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.channel.SimpleChannelHandler
      newFullyQualifiedTypeName: io.netty.channel.ChannelInboundHandlerAdapter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.channel.SimpleChannelUpstreamHandler
      newFullyQualifiedTypeName: io.netty.channel.ChannelInboundHandlerAdapter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.handler.codec.frame.CorruptedFrameException
      newFullyQualifiedTypeName: io.netty.handler.codec.CorruptedFrameException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.buffer.ChannelBuffer
      newFullyQualifiedTypeName: io.netty.buffer.ByteBuf
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.buffer.ChannelBuffers
      newFullyQualifiedTypeName: io.netty.buffer.Unpooled
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.channel.ExceptionEvent
      newFullyQualifiedTypeName: java.lang.Throwable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.handler.codec.oneone.OneToOneDecoder
      newFullyQualifiedTypeName: io.netty.handler.codec.MessageToMessageDecoder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.util.ObjectSizeEstimator
      newFullyQualifiedTypeName: io.netty.channel.MessageSizeEstimator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.netty.util.DefaultObjectSizeEstimator
      newFullyQualifiedTypeName: io.netty.channel.DefaultMessageSizeEstimator
  - org.openrewrite.java.netty.upgrade._3_2_to_4_1_.StringEncoderToStandardCharsets
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.jboss.netty.logging
      newPackageName: io.netty.util.internal.logging
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.jboss.netty
      newPackageName: io.netty
      recursive: true
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.jboss.netty
      oldArtifactId: netty
      newGroupId: io.netty
      newArtifactId: netty-all
      newVersion: 4.1.x
  - org.openrewrite.java.netty.upgrade._3_2_to_4_1_.ReplaceChannelsFireMessageReceived

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`UpgradeNetty_3_2_to_4_1Test#changeMethodSignature`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jboss.netty.channel.ChannelHandlerContext;
import org.jboss.netty.channel.ChannelStateEvent;

class Test {
    	public void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}
}
```

###### After
```java
import io.netty.channel.ChannelHandlerContext;

class Test {
    	public void channelActive(ChannelHandlerContext ctx) throws Exception {}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import org.jboss.netty.channel.ChannelHandlerContext;
-import org.jboss.netty.channel.ChannelStateEvent;
+import io.netty.channel.ChannelHandlerContext;

@@ -5,1 +4,1 @@

class Test {
-   	public void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}
+   	public void channelActive(ChannelHandlerContext ctx) throws Exception {}
}
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeNetty_3_2_to_4_1Test#changeMethodSignature`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jboss.netty.channel.ChannelHandlerContext;
import org.jboss.netty.channel.ChannelStateEvent;

class Test {
    	public void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}
}
```

###### After
```java
import io.netty.channel.ChannelHandlerContext;

class Test {
    	public void channelActive(ChannelHandlerContext ctx) throws Exception {}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import org.jboss.netty.channel.ChannelHandlerContext;
-import org.jboss.netty.channel.ChannelStateEvent;
+import io.netty.channel.ChannelHandlerContext;

@@ -5,1 +4,1 @@

class Test {
-   	public void channelOpen(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {}
+   	public void channelActive(ChannelHandlerContext ctx) throws Exception {}
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.netty.UpgradeNetty_3_2_to_4_1"
  displayName="Migrates from Netty 3.2.x to Netty 4.1.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-netty"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NETTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.netty.UpgradeNetty_3_2_to_4_1" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
