---
sidebar_label: "Inline `guava` methods annotated with `@InlineMe`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inline `guava` methods annotated with `@InlineMe`

**com.google.guava.InlineGuavaMethods**

_Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table._

## Recipe source

[GitHub: inline-guava-33-methods.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/inline-guava-33-methods.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Booleans hashCode(boolean)`
  * replacement: `Boolean.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Booleans compare(boolean, boolean)`
  * replacement: `Boolean.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Longs hashCode(long)`
  * replacement: `Long.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Longs compare(long, long)`
  * replacement: `Long.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Ints hashCode(int)`
  * replacement: `Integer.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Ints compare(int, int)`
  * replacement: `Integer.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.graph.ImmutableValueGraph copyOf(com.google.common.graph.ImmutableValueGraph)`
  * replacement: `checkNotNull(graph)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Doubles hashCode(double)`
  * replacement: `Double.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Doubles compare(double, double)`
  * replacement: `Double.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Doubles isFinite(double)`
  * replacement: `Double.isFinite(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Streams stream(java.util.Collection)`
  * replacement: `collection.stream()`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Streams stream(java.util.Optional)`
  * replacement: `optional.stream()`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Streams stream(java.util.OptionalInt)`
  * replacement: `optional.stream()`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Streams stream(java.util.OptionalLong)`
  * replacement: `optional.stream()`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Streams stream(java.util.OptionalDouble)`
  * replacement: `optional.stream()`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Range apply(java.lang.Comparable)`
  * replacement: `this.contains(input)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Range test(java.lang.Comparable)`
  * replacement: `this.contains(input)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.FluentIterable from(com.google.common.collect.FluentIterable)`
  * replacement: `checkNotNull(iterable)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.ImmutableList asList()`
  * replacement: `this`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Chars hashCode(char)`
  * replacement: `Character.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Chars compare(char, char)`
  * replacement: `Character.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.TreeBasedTable rowComparator()`
  * replacement: `requireNonNull(this.rowKeySet().comparator())`
  * staticImports: `[java.util.Objects.requireNonNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Multisets unmodifiableMultiset(com.google.common.collect.ImmutableMultiset)`
  * replacement: `checkNotNull(multiset)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Iterators unmodifiableIterator(com.google.common.collect.UnmodifiableIterator)`
  * replacement: `checkNotNull(iterator)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Iterators peekingIterator(com.google.common.collect.PeekingIterator)`
  * replacement: `checkNotNull(iterator)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Ordering from(com.google.common.collect.Ordering)`
  * replacement: `checkNotNull(ordering)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Ordering binarySearch(java.util.List, java.lang.Object)`
  * replacement: `Collections.binarySearch(sortedList, key, this)`
  * imports: `[java.util.Collections]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Bytes hashCode(byte)`
  * replacement: `Byte.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Multimaps unmodifiableMultimap(com.google.common.collect.ImmutableMultimap)`
  * replacement: `checkNotNull(delegate)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Multimaps unmodifiableSetMultimap(com.google.common.collect.ImmutableSetMultimap)`
  * replacement: `checkNotNull(delegate)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Multimaps unmodifiableListMultimap(com.google.common.collect.ImmutableListMultimap)`
  * replacement: `checkNotNull(delegate)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.base.Equivalence test(java.lang.Object, java.lang.Object)`
  * replacement: `this.equivalent(t, u)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Sets newSetFromMap(java.util.Map)`
  * replacement: `Collections.newSetFromMap(map)`
  * imports: `[java.util.Collections]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Lists newCopyOnWriteArrayList()`
  * replacement: `new CopyOnWriteArrayList<>()`
  * imports: `[java.util.concurrent.CopyOnWriteArrayList]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.base.Strings repeat(java.lang.String, int)`
  * replacement: `string.repeat(count)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.hash.BloomFilter apply(java.lang.Object)`
  * replacement: `this.mightContain(input)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.hash.BloomFilter test(java.lang.Object)`
  * replacement: `this.mightContain(input)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.base.CharMatcher apply(java.lang.Character)`
  * replacement: `this.matches(character)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.base.CharMatcher test(java.lang.Character)`
  * replacement: `this.matches(character)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.ComparisonChain compare(java.lang.Boolean, java.lang.Boolean)`
  * replacement: `this.compareFalseFirst(left, right)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files toString(java.io.File, java.nio.charset.Charset)`
  * replacement: `Files.asCharSource(file, charset).read()`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files write(java.lang.CharSequence, java.io.File, java.nio.charset.Charset)`
  * replacement: `Files.asCharSink(to, charset).write(from)`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files copy(java.io.File, java.nio.charset.Charset, java.lang.Appendable)`
  * replacement: `Files.asCharSource(from, charset).copyTo(to)`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files append(java.lang.CharSequence, java.io.File, java.nio.charset.Charset)`
  * replacement: `Files.asCharSink(to, charset, FileWriteMode.APPEND).write(from)`
  * imports: `[com.google.common.io.Files, com.google.common.io.FileWriteMode]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files readFirstLine(java.io.File, java.nio.charset.Charset)`
  * replacement: `Files.asCharSource(file, charset).readFirstLine()`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files readLines(java.io.File, java.nio.charset.Charset, com.google.common.io.LineProcessor)`
  * replacement: `Files.asCharSource(file, charset).readLines(callback)`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files readBytes(java.io.File, com.google.common.io.ByteProcessor)`
  * replacement: `Files.asByteSource(file).read(processor)`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.io.Files hash(java.io.File, com.google.common.hash.HashFunction)`
  * replacement: `Files.asByteSource(file).hash(hashFunction)`
  * imports: `[com.google.common.io.Files]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.util.concurrent.FluentFuture from(com.google.common.util.concurrent.FluentFuture)`
  * replacement: `checkNotNull(future)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.base.Converter apply(java.lang.Object)`
  * replacement: `this.convert(a)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Shorts hashCode(short)`
  * replacement: `Short.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Shorts compare(short, short)`
  * replacement: `Short.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.graph.ImmutableGraph copyOf(com.google.common.graph.ImmutableGraph)`
  * replacement: `checkNotNull(graph)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Floats hashCode(float)`
  * replacement: `Float.hashCode(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Floats compare(float, float)`
  * replacement: `Float.compare(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.Floats isFinite(float)`
  * replacement: `Float.isFinite(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.collect.Iterables unmodifiableIterable(com.google.common.collect.ImmutableCollection)`
  * replacement: `checkNotNull(iterable)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.primitives.UnsignedBytes toInt(byte)`
  * replacement: `Byte.toUnsignedInt(value)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.graph.ImmutableNetwork copyOf(com.google.common.graph.ImmutableNetwork)`
  * replacement: `checkNotNull(network)`
  * staticImports: `[com.google.common.base.Preconditions.checkNotNull]`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.LongMath checkedAdd(long, long)`
  * replacement: `Math.addExact(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.LongMath checkedSubtract(long, long)`
  * replacement: `Math.subtractExact(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.LongMath checkedMultiply(long, long)`
  * replacement: `Math.multiplyExact(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.IntMath checkedAdd(int, int)`
  * replacement: `Math.addExact(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.IntMath checkedSubtract(int, int)`
  * replacement: `Math.subtractExact(a, b)`
  * classpathFromResources: `[guava-33]`
* [Inline method calls](../../../java/inlinemethodcalls)
  * methodPattern: `com.google.common.math.IntMath checkedMultiply(int, int)`
  * replacement: `Math.multiplyExact(a, b)`
  * classpathFromResources: `[guava-33]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.google.guava.InlineGuavaMethods
displayName: Inline `guava` methods annotated with `@InlineMe`
description: |
  Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table.
recipeList:
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Booleans hashCode(boolean)
      replacement: Boolean.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Booleans compare(boolean, boolean)
      replacement: Boolean.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Longs hashCode(long)
      replacement: Long.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Longs compare(long, long)
      replacement: Long.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Ints hashCode(int)
      replacement: Integer.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Ints compare(int, int)
      replacement: Integer.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.graph.ImmutableValueGraph copyOf(com.google.common.graph.ImmutableValueGraph)
      replacement: checkNotNull(graph)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Doubles hashCode(double)
      replacement: Double.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Doubles compare(double, double)
      replacement: Double.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Doubles isFinite(double)
      replacement: Double.isFinite(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Streams stream(java.util.Collection)
      replacement: collection.stream()
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Streams stream(java.util.Optional)
      replacement: optional.stream()
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Streams stream(java.util.OptionalInt)
      replacement: optional.stream()
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Streams stream(java.util.OptionalLong)
      replacement: optional.stream()
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Streams stream(java.util.OptionalDouble)
      replacement: optional.stream()
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Range apply(java.lang.Comparable)
      replacement: this.contains(input)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Range test(java.lang.Comparable)
      replacement: this.contains(input)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.FluentIterable from(com.google.common.collect.FluentIterable)
      replacement: checkNotNull(iterable)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.ImmutableList asList()
      replacement: this
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Chars hashCode(char)
      replacement: Character.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Chars compare(char, char)
      replacement: Character.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.TreeBasedTable rowComparator()
      replacement: requireNonNull(this.rowKeySet().comparator())
      staticImports: [java.util.Objects.requireNonNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Multisets unmodifiableMultiset(com.google.common.collect.ImmutableMultiset)
      replacement: checkNotNull(multiset)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Iterators unmodifiableIterator(com.google.common.collect.UnmodifiableIterator)
      replacement: checkNotNull(iterator)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Iterators peekingIterator(com.google.common.collect.PeekingIterator)
      replacement: checkNotNull(iterator)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Ordering from(com.google.common.collect.Ordering)
      replacement: checkNotNull(ordering)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Ordering binarySearch(java.util.List, java.lang.Object)
      replacement: Collections.binarySearch(sortedList, key, this)
      imports: [java.util.Collections]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Bytes hashCode(byte)
      replacement: Byte.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Multimaps unmodifiableMultimap(com.google.common.collect.ImmutableMultimap)
      replacement: checkNotNull(delegate)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Multimaps unmodifiableSetMultimap(com.google.common.collect.ImmutableSetMultimap)
      replacement: checkNotNull(delegate)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Multimaps unmodifiableListMultimap(com.google.common.collect.ImmutableListMultimap)
      replacement: checkNotNull(delegate)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.base.Equivalence test(java.lang.Object, java.lang.Object)
      replacement: this.equivalent(t, u)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Sets newSetFromMap(java.util.Map)
      replacement: Collections.newSetFromMap(map)
      imports: [java.util.Collections]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Lists newCopyOnWriteArrayList()
      replacement: new CopyOnWriteArrayList<>()
      imports: [java.util.concurrent.CopyOnWriteArrayList]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.base.Strings repeat(java.lang.String, int)
      replacement: string.repeat(count)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.hash.BloomFilter apply(java.lang.Object)
      replacement: this.mightContain(input)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.hash.BloomFilter test(java.lang.Object)
      replacement: this.mightContain(input)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.base.CharMatcher apply(java.lang.Character)
      replacement: this.matches(character)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.base.CharMatcher test(java.lang.Character)
      replacement: this.matches(character)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.ComparisonChain compare(java.lang.Boolean, java.lang.Boolean)
      replacement: this.compareFalseFirst(left, right)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files toString(java.io.File, java.nio.charset.Charset)
      replacement: Files.asCharSource(file, charset).read()
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files write(java.lang.CharSequence, java.io.File, java.nio.charset.Charset)
      replacement: Files.asCharSink(to, charset).write(from)
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files copy(java.io.File, java.nio.charset.Charset, java.lang.Appendable)
      replacement: Files.asCharSource(from, charset).copyTo(to)
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files append(java.lang.CharSequence, java.io.File, java.nio.charset.Charset)
      replacement: Files.asCharSink(to, charset, FileWriteMode.APPEND).write(from)
      imports: [com.google.common.io.Files, com.google.common.io.FileWriteMode]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files readFirstLine(java.io.File, java.nio.charset.Charset)
      replacement: Files.asCharSource(file, charset).readFirstLine()
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files readLines(java.io.File, java.nio.charset.Charset, com.google.common.io.LineProcessor)
      replacement: Files.asCharSource(file, charset).readLines(callback)
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files readBytes(java.io.File, com.google.common.io.ByteProcessor)
      replacement: Files.asByteSource(file).read(processor)
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.io.Files hash(java.io.File, com.google.common.hash.HashFunction)
      replacement: Files.asByteSource(file).hash(hashFunction)
      imports: [com.google.common.io.Files]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.util.concurrent.FluentFuture from(com.google.common.util.concurrent.FluentFuture)
      replacement: checkNotNull(future)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.base.Converter apply(java.lang.Object)
      replacement: this.convert(a)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Shorts hashCode(short)
      replacement: Short.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Shorts compare(short, short)
      replacement: Short.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.graph.ImmutableGraph copyOf(com.google.common.graph.ImmutableGraph)
      replacement: checkNotNull(graph)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Floats hashCode(float)
      replacement: Float.hashCode(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Floats compare(float, float)
      replacement: Float.compare(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.Floats isFinite(float)
      replacement: Float.isFinite(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.collect.Iterables unmodifiableIterable(com.google.common.collect.ImmutableCollection)
      replacement: checkNotNull(iterable)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.primitives.UnsignedBytes toInt(byte)
      replacement: Byte.toUnsignedInt(value)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.graph.ImmutableNetwork copyOf(com.google.common.graph.ImmutableNetwork)
      replacement: checkNotNull(network)
      staticImports: [com.google.common.base.Preconditions.checkNotNull]
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.LongMath checkedAdd(long, long)
      replacement: Math.addExact(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.LongMath checkedSubtract(long, long)
      replacement: Math.subtractExact(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.LongMath checkedMultiply(long, long)
      replacement: Math.multiplyExact(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.IntMath checkedAdd(int, int)
      replacement: Math.addExact(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.IntMath checkedSubtract(int, int)
      replacement: Math.subtractExact(a, b)
      classpathFromResources: [guava-33]
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: com.google.common.math.IntMath checkedMultiply(int, int)
      replacement: Math.multiplyExact(a, b)
      classpathFromResources: [guava-33]

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Prefer the Java standard library instead of Guava](/recipes/java/migrate/guava/noguava.md)

## Examples
##### Example 1
`InlineGuavaMethodsTest#stringsRegular`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Strings;
class Regular {
    String repeatString(String s, int n) {
        return Strings.repeat(s, n);
    }
}
```

###### After
```java
class Regular {
    String repeatString(String s, int n) {
        return s.repeat(n);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,0 @@
-import com.google.common.base.Strings;
class Regular {
@@ -4,1 +3,1 @@
class Regular {
    String repeatString(String s, int n) {
-       return Strings.repeat(s, n);
+       return s.repeat(n);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`InlineGuavaMethodsTest#stringsRegular`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Strings;
class Regular {
    String repeatString(String s, int n) {
        return Strings.repeat(s, n);
    }
}
```

###### After
```java
class Regular {
    String repeatString(String s, int n) {
        return s.repeat(n);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,0 @@
-import com.google.common.base.Strings;
class Regular {
@@ -4,1 +3,1 @@
class Regular {
    String repeatString(String s, int n) {
-       return Strings.repeat(s, n);
+       return s.repeat(n);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.google.guava.InlineGuavaMethods")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
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
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("com.google.guava.InlineGuavaMethods")
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
            <recipe>com.google.guava.InlineGuavaMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
          </dependency>
        </dependencies>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=com.google.guava.InlineGuavaMethods -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe InlineGuavaMethods
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/com.google.guava.InlineGuavaMethods" />

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
