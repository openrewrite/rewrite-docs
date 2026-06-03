---
title: "Apply Axon Framework 5 messaging module renames"
sidebar_label: "Apply Axon Framework 5 messaging module renames"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apply Axon Framework 5 messaging module renames

**org.axonframework.migration.Axon4ToAxon5Messaging**

_Migrates the messaging core (command, event, query handling) from `org.axonframework.{command,event,query}handling` into the `org.axonframework.messaging.*` namespace, relocates handler & interceptor annotations into their `.annotation.*` subpackages, renames `EventBus` to `EventSink`, fixes `MetaData` casing to `Metadata`, relocates the top-level messaging API (`Message`, `Metadata`, `UnitOfWork`, `MessageHandlerInterceptor`, `MessageHandlerInterceptorChain`, `correlation.*`) into `messaging.core.*`, moves the sequencing policy package out of `eventhandling.async` into `messaging.core.sequencing`, relocates `tokenstore` and the replay/reset annotations under their AF5 subpackages, and moves `QueryGateway` into its own gateway subpackage._

## Recipe source

[GitHub: search?type=code&q=org.axonframework.migration.Axon4ToAxon5Messaging](https://github.com/search?type=code&q=org.axonframework.migration.Axon4ToAxon5Messaging),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.commandhandling`
  * newPackageName: `org.axonframework.messaging.commandhandling`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.eventhandling`
  * newPackageName: `org.axonframework.messaging.eventhandling`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.queryhandling`
  * newPackageName: `org.axonframework.messaging.queryhandling`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.commandhandling.CommandHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.commandhandling.annotation.CommandHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.EventHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.annotation.EventHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.QueryHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.annotation.QueryHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.MessageDispatchInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.MessageDispatchInterceptor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.MessageHandlerInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.annotation.interceptors.MessageHandlerInterceptor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.ExceptionHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.annotation.interceptors.ExceptionHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.ResultHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.annotation.interceptors.ResultHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.LoggingInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.interception.LoggingInterceptor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.EventBus`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.EventSink`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.PropagatingErrorHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.processing.errorhandling.PropagatingErrorHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.DisallowReplay`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.replay.annotation.DisallowReplay`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.ResetHandler`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.replay.annotation.ResetHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.ReplayToken`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.processing.streaming.token.ReplayToken`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.messaging.eventhandling.tokenstore`
  * newPackageName: `org.axonframework.messaging.eventhandling.processing.streaming.token.store`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.messaging.eventhandling.async`
  * newPackageName: `org.axonframework.messaging.core.sequencing`
  * recursive: `true`
* [Migrate SequencingPolicy lambdas to the AF5 two-arg, Optional-returning shape](../../../org/axonframework/migration/migratesequencingpolicylambda)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.QueryGateway`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.gateway.QueryGateway`
* [Unwrap ResponseTypes wrappers on AF5-shape QueryGateway.query(...) calls](../../../org/axonframework/migration/axon4toaxon5queryresponsetypes)
* [Remove unused imports](../../../java/removeunusedimports)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.eventhandling.EventProcessor shutDown()`
  * newMethodName: `shutdown`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.eventhandling.EventProcessor shutDown()`
  * newMethodName: `shutdown`
  * matchOverrides: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.messaging.correlation`
  * newPackageName: `org.axonframework.messaging.core.correlation`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.MetaData`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.Metadata`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.annotation.MetaDataValue`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.annotation.MetadataValue`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.unitofwork.UnitOfWork`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.unitofwork.UnitOfWork`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.InterceptorChain`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.MessageHandlerInterceptorChain`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.Message`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.Message`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.MessageHandlerInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.core.MessageHandlerInterceptor`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.core.Message`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.eventhandling.EventMessage`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.commandhandling.CommandMessage`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.QueryMessage`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.queryhandling.QueryResponseMessage`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.ResultMessage`
* [Remove type arguments from a specific type](../../../org/axonframework/migration/removetypearguments)
  * fullyQualifiedTypeName: `org.axonframework.messaging.core.unitofwork.UnitOfWork`
* [Migrate MessageHandlerInterceptor / MessageDispatchInterceptor signatures to AF5](../../../org/axonframework/migration/migratemessageinterceptorsignatures)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message getIdentifier()`
  * newMethodName: `identifier`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message getIdentifier()`
  * newMethodName: `identifier`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.eventhandling.EventMessage getIdentifier()`
  * newMethodName: `identifier`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.eventhandling.EventMessage getIdentifier()`
  * newMethodName: `identifier`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message getMetaData()`
  * newMethodName: `metadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message getMetaData()`
  * newMethodName: `metadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message getPayload()`
  * newMethodName: `payload`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message getPayload()`
  * newMethodName: `payload`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message getPayloadType()`
  * newMethodName: `payloadType`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message getPayloadType()`
  * newMethodName: `payloadType`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.eventhandling.EventMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.eventhandling.EventMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.commandhandling.CommandMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.commandhandling.CommandMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.queryhandling.QueryMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.queryhandling.QueryMessage withMetaData(java.util.Map)`
  * newMethodName: `withMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.Message andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.core.Message andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.eventhandling.EventMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.eventhandling.EventMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.commandhandling.CommandMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.commandhandling.CommandMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.queryhandling.QueryMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.queryhandling.QueryMessage andMetaData(java.util.Map)`
  * newMethodName: `andMetadata`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.eventhandling.EventMessage getTimestamp()`
  * newMethodName: `timestamp`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.axonframework.messaging.eventhandling.EventMessage getTimestamp()`
  * newMethodName: `timestamp`
  * matchOverrides: `true`
* [Replace class-level CommandGateway with method-parameter CommandDispatcher in @EventHandler methods](../../../org/axonframework/migration/migratecommandgatewayineventhandler)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.Axon4ToAxon5Messaging
displayName: Apply Axon Framework 5 messaging module renames
description: |
  Migrates the messaging core (command, event, query handling) from `org.axonframework.{command,event,query}handling` into the `org.axonframework.messaging.*` namespace, relocates handler &amp; interceptor annotations into their `.annotation.*` subpackages, renames `EventBus` to `EventSink`, fixes `MetaData` casing to `Metadata`, relocates the top-level messaging API (`Message`, `Metadata`, `UnitOfWork`, `MessageHandlerInterceptor`, `MessageHandlerInterceptorChain`, `correlation.*`) into `messaging.core.*`, moves the sequencing policy package out of `eventhandling.async` into `messaging.core.sequencing`, relocates `tokenstore` and the replay/reset annotations under their AF5 subpackages, and moves `QueryGateway` into its own gateway subpackage.
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.commandhandling
      newPackageName: org.axonframework.messaging.commandhandling
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.eventhandling
      newPackageName: org.axonframework.messaging.eventhandling
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.queryhandling
      newPackageName: org.axonframework.messaging.queryhandling
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.commandhandling.CommandHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.commandhandling.annotation.CommandHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.EventHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.annotation.EventHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.queryhandling.QueryHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.queryhandling.annotation.QueryHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.MessageDispatchInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.core.MessageDispatchInterceptor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.MessageHandlerInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.core.annotation.interceptors.MessageHandlerInterceptor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.ExceptionHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.core.annotation.interceptors.ExceptionHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.ResultHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.core.annotation.interceptors.ResultHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.LoggingInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.core.interception.LoggingInterceptor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.EventBus
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.EventSink
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.PropagatingErrorHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.processing.errorhandling.PropagatingErrorHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.DisallowReplay
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.replay.annotation.DisallowReplay
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.ResetHandler
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.replay.annotation.ResetHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.ReplayToken
      newFullyQualifiedTypeName: org.axonframework.messaging.eventhandling.processing.streaming.token.ReplayToken
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.messaging.eventhandling.tokenstore
      newPackageName: org.axonframework.messaging.eventhandling.processing.streaming.token.store
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.messaging.eventhandling.async
      newPackageName: org.axonframework.messaging.core.sequencing
      recursive: true
  - org.axonframework.migration.MigrateSequencingPolicyLambda
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.queryhandling.QueryGateway
      newFullyQualifiedTypeName: org.axonframework.messaging.queryhandling.gateway.QueryGateway
  - org.axonframework.migration.Axon4ToAxon5QueryResponseTypes
  - org.openrewrite.java.RemoveUnusedImports
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.eventhandling.EventProcessor shutDown()
      newMethodName: shutdown
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.eventhandling.EventProcessor shutDown()
      newMethodName: shutdown
      matchOverrides: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.messaging.correlation
      newPackageName: org.axonframework.messaging.core.correlation
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.MetaData
      newFullyQualifiedTypeName: org.axonframework.messaging.core.Metadata
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.annotation.MetaDataValue
      newFullyQualifiedTypeName: org.axonframework.messaging.core.annotation.MetadataValue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.unitofwork.UnitOfWork
      newFullyQualifiedTypeName: org.axonframework.messaging.core.unitofwork.UnitOfWork
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.InterceptorChain
      newFullyQualifiedTypeName: org.axonframework.messaging.core.MessageHandlerInterceptorChain
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.Message
      newFullyQualifiedTypeName: org.axonframework.messaging.core.Message
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.MessageHandlerInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.core.MessageHandlerInterceptor
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.core.Message
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.eventhandling.EventMessage
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.commandhandling.CommandMessage
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.queryhandling.QueryMessage
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.queryhandling.QueryResponseMessage
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.ResultMessage
  - org.axonframework.migration.RemoveTypeArguments:
      fullyQualifiedTypeName: org.axonframework.messaging.core.unitofwork.UnitOfWork
  - org.axonframework.migration.MigrateMessageInterceptorSignatures
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message getIdentifier()
      newMethodName: identifier
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message getIdentifier()
      newMethodName: identifier
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.eventhandling.EventMessage getIdentifier()
      newMethodName: identifier
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.eventhandling.EventMessage getIdentifier()
      newMethodName: identifier
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message getMetaData()
      newMethodName: metadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message getMetaData()
      newMethodName: metadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message getPayload()
      newMethodName: payload
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message getPayload()
      newMethodName: payload
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message getPayloadType()
      newMethodName: payloadType
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message getPayloadType()
      newMethodName: payloadType
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.eventhandling.EventMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.eventhandling.EventMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.commandhandling.CommandMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.commandhandling.CommandMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.queryhandling.QueryMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.queryhandling.QueryMessage withMetaData(java.util.Map)
      newMethodName: withMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.Message andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.core.Message andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.eventhandling.EventMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.eventhandling.EventMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.commandhandling.CommandMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.commandhandling.CommandMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.queryhandling.QueryMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.queryhandling.QueryMessage andMetaData(java.util.Map)
      newMethodName: andMetadata
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.eventhandling.EventMessage getTimestamp()
      newMethodName: timestamp
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.axonframework.messaging.eventhandling.EventMessage getTimestamp()
      newMethodName: timestamp
      matchOverrides: true
  - org.axonframework.migration.MigrateCommandGatewayInEventHandler

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to free Axon Framework 5](/recipes/org/axonframework/migration/upgradeaxon4toaxon5.md)


## Usage

<RunRecipe
  recipeName="org.axonframework.migration.Axon4ToAxon5Messaging"
  displayName="Apply Axon Framework 5 messaging module renames"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.axonframework.migration.Axon4ToAxon5Messaging" />

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
