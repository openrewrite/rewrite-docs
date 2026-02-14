---
sidebar_label: "Replace deprecated `kotlinx-coroutines-core` methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `kotlinx-coroutines-core` methods

**org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods**

_Automatically generated recipes to replace deprecated Kotlin methods based on `@Deprecated(replaceWith=ReplaceWith(...))` annotations._

## Recipe source

[GitHub: kotlin-deprecations-kotlinx-coroutines-core-1.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-kotlin/src/main/resources/META-INF/rewrite/kotlin-deprecations-kotlinx-coroutines-core-1.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-kotlin/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.ChannelsKt receiveOrNull(kotlinx.coroutines.channels.ReceiveChannel, kotlin.coroutines.Continuation)`
  * replacement: `receiveCatching().getOrNull()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.ChannelsKt sendBlocking(kotlinx.coroutines.channels.SendChannel, kotlin.Any)`
  * replacement: `trySendBlocking(element)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.ReceiveChannel poll()`
  * replacement: `tryReceive().getOrNull()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.ReceiveChannel receiveOrNull()`
  * replacement: `receiveCatching().getOrNull()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.ReceiveChannel receiveOrNull(kotlin.coroutines.Continuation)`
  * replacement: `receiveCatching().getOrNull()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.SendChannel offer(*)`
  * replacement: `trySend(element).isSuccess`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.channels.SendChannel offer(..)`
  * replacement: `trySend(element).isSuccess`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt cache(kotlinx.coroutines.flow.Flow)`
  * replacement: `this.shareIn(scope, Int.MAX_VALUE, started = SharingStared.Lazily)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)`
  * replacement: `this.combine(other, transform)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)`
  * replacement: `combine(this, other, other2, transform)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)`
  * replacement: `combine(this, other, other2, other3, transform)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)`
  * replacement: `combine(this, other, other2, other3, transform)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt compose(kotlinx.coroutines.flow.Flow, kotlin.Function1)`
  * replacement: `let(transformer)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt concatMap(kotlinx.coroutines.flow.Flow, kotlin.Function1)`
  * replacement: `flatMapConcat(mapper)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt concatWith(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `onCompletion { emit(value) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt concatWith(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)`
  * replacement: `onCompletion { if (it == null) emitAll(other) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt delayEach(kotlinx.coroutines.flow.Flow, kotlin.Long)`
  * replacement: `onEach { delay(timeMillis) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt delayFlow(kotlinx.coroutines.flow.Flow, kotlin.Long)`
  * replacement: `onStart { delay(timeMillis) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt flatMap(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `flatMapConcat(mapper)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt flatten(kotlinx.coroutines.flow.Flow)`
  * replacement: `flattenConcat()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt forEach(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `collect(action)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt merge(kotlinx.coroutines.flow.Flow)`
  * replacement: `flattenConcat()`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt onErrorResume(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)`
  * replacement: `catch { emitAll(fallback) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt onErrorResumeNext(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)`
  * replacement: `catch { emitAll(fallback) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt onErrorReturn(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `catch { emit(fallback) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt onErrorReturn(kotlinx.coroutines.flow.Flow, *, kotlin.Function1)`
  * replacement: `catch { e -> if (predicate(e)) emit(fallback) else throw e }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt publish(kotlinx.coroutines.flow.Flow)`
  * replacement: `this.shareIn(scope, 0)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt publish(kotlinx.coroutines.flow.Flow, kotlin.Int)`
  * replacement: `this.buffer(bufferSize).shareIn(scope, 0)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt replay(kotlinx.coroutines.flow.Flow)`
  * replacement: `this.shareIn(scope, Int.MAX_VALUE)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt replay(kotlinx.coroutines.flow.Flow, kotlin.Int)`
  * replacement: `this.shareIn(scope, bufferSize)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt scanFold(kotlinx.coroutines.flow.Flow, *, *)`
  * replacement: `scan(initial, operation)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt scanReduce(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `runningReduce(operation)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt skip(kotlinx.coroutines.flow.Flow, kotlin.Int)`
  * replacement: `drop(count)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt startWith(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `onStart { emit(value) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt startWith(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)`
  * replacement: `onStart { emitAll(other) }`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.FlowKt switchMap(kotlinx.coroutines.flow.Flow, *)`
  * replacement: `this.flatMapLatest(transform)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt cancel(java.util.concurrent.CancellationException)`
  * replacement: `currentCoroutineContext().cancel(cause)`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt cancellable()`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt catch(*)`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt conflate()`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt distinctUntilChanged()`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt flowOn(kotlin.coroutines.CoroutineContext)`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt retry(kotlin.Long, *)`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.flow.LintKt retryWhen(*)`
  * replacement: `this`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`
* [Replace Kotlin method](../../../kotlin/replace/replacekotlinmethod)
  * methodPattern: `kotlinx.coroutines.selects.SelectBuilder onTimeout(kotlin.Long, *)`
  * replacement: `onTimeout`
  * imports: `[kotlinx.coroutines.selects.onTimeout]`
  * classpathFromResources: `[kotlinx-coroutines-core-jvm-1]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods
displayName: Replace deprecated `kotlinx-coroutines-core` methods
description: |
  Automatically generated recipes to replace deprecated Kotlin methods based on `@Deprecated(replaceWith=ReplaceWith(...))` annotations.
recipeList:
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.ChannelsKt receiveOrNull(kotlinx.coroutines.channels.ReceiveChannel, kotlin.coroutines.Continuation)
      replacement: receiveCatching().getOrNull()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.ChannelsKt sendBlocking(kotlinx.coroutines.channels.SendChannel, kotlin.Any)
      replacement: trySendBlocking(element)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.ReceiveChannel poll()
      replacement: tryReceive().getOrNull()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.ReceiveChannel receiveOrNull()
      replacement: receiveCatching().getOrNull()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.ReceiveChannel receiveOrNull(kotlin.coroutines.Continuation)
      replacement: receiveCatching().getOrNull()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.SendChannel offer(*)
      replacement: trySend(element).isSuccess
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.channels.SendChannel offer(..)
      replacement: trySend(element).isSuccess
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt cache(kotlinx.coroutines.flow.Flow)
      replacement: this.shareIn(scope, Int.MAX_VALUE, started = SharingStared.Lazily)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)
      replacement: this.combine(other, transform)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)
      replacement: combine(this, other, other2, transform)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)
      replacement: combine(this, other, other2, other3, transform)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt combineLatest(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow, *)
      replacement: combine(this, other, other2, other3, transform)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt compose(kotlinx.coroutines.flow.Flow, kotlin.Function1)
      replacement: let(transformer)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt concatMap(kotlinx.coroutines.flow.Flow, kotlin.Function1)
      replacement: flatMapConcat(mapper)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt concatWith(kotlinx.coroutines.flow.Flow, *)
      replacement: onCompletion { emit(value) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt concatWith(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)
      replacement: onCompletion { if (it == null) emitAll(other) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt delayEach(kotlinx.coroutines.flow.Flow, kotlin.Long)
      replacement: onEach { delay(timeMillis) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt delayFlow(kotlinx.coroutines.flow.Flow, kotlin.Long)
      replacement: onStart { delay(timeMillis) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt flatMap(kotlinx.coroutines.flow.Flow, *)
      replacement: flatMapConcat(mapper)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt flatten(kotlinx.coroutines.flow.Flow)
      replacement: flattenConcat()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt forEach(kotlinx.coroutines.flow.Flow, *)
      replacement: collect(action)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt merge(kotlinx.coroutines.flow.Flow)
      replacement: flattenConcat()
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt onErrorResume(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)
      replacement: catch { emitAll(fallback) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt onErrorResumeNext(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)
      replacement: catch { emitAll(fallback) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt onErrorReturn(kotlinx.coroutines.flow.Flow, *)
      replacement: catch { emit(fallback) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt onErrorReturn(kotlinx.coroutines.flow.Flow, *, kotlin.Function1)
      replacement: catch { e -> if (predicate(e)) emit(fallback) else throw e }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt publish(kotlinx.coroutines.flow.Flow)
      replacement: this.shareIn(scope, 0)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt publish(kotlinx.coroutines.flow.Flow, kotlin.Int)
      replacement: this.buffer(bufferSize).shareIn(scope, 0)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt replay(kotlinx.coroutines.flow.Flow)
      replacement: this.shareIn(scope, Int.MAX_VALUE)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt replay(kotlinx.coroutines.flow.Flow, kotlin.Int)
      replacement: this.shareIn(scope, bufferSize)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt scanFold(kotlinx.coroutines.flow.Flow, *, *)
      replacement: scan(initial, operation)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt scanReduce(kotlinx.coroutines.flow.Flow, *)
      replacement: runningReduce(operation)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt skip(kotlinx.coroutines.flow.Flow, kotlin.Int)
      replacement: drop(count)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt startWith(kotlinx.coroutines.flow.Flow, *)
      replacement: onStart { emit(value) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt startWith(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.Flow)
      replacement: onStart { emitAll(other) }
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.FlowKt switchMap(kotlinx.coroutines.flow.Flow, *)
      replacement: this.flatMapLatest(transform)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt cancel(java.util.concurrent.CancellationException)
      replacement: currentCoroutineContext().cancel(cause)
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt cancellable()
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt catch(*)
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt conflate()
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt distinctUntilChanged()
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt flowOn(kotlin.coroutines.CoroutineContext)
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt retry(kotlin.Long, *)
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.flow.LintKt retryWhen(*)
      replacement: this
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]
  - org.openrewrite.kotlin.replace.ReplaceKotlinMethod:
      methodPattern: kotlinx.coroutines.selects.SelectBuilder onTimeout(kotlin.Long, *)
      replacement: onTimeout
      imports: [kotlinx.coroutines.selects.onTimeout]
      classpathFromResources: [kotlinx-coroutines-core-jvm-1]

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```
</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ReplaceDeprecatedKotlinxCoroutinesCore1Methods
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-kotlin:{{VERSION_ORG_OPENREWRITE_REWRITE_KOTLIN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods" />

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
