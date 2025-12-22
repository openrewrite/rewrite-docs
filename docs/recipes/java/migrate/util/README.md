---
description: java.util APIs OpenRewrite recipes.
---

# java.util APIs

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Adopt `SequencedCollection`](./sequencedcollection.md)
* [Replace `Inflater` and `Deflater` `end()` calls with `close()`](./migrateinflaterdeflatertoclose.md)
* [Use modernized `java.util` APIs](./javautilapis.md)

## Recipes

* [Prefer `EnumSet of(..)`](./useenumsetof.md)
* [Prefer `List.of(..)`](./migratecollectionssingletonlist.md)
* [Prefer `List.of(..)`](./migratecollectionsunmodifiablelist.md)
* [Prefer `Locale.of(..)` over `new Locale(..)`](./uselocaleof.md)
* [Prefer `Map.of(..)`](./migratecollectionssingletonmap.md)
* [Prefer `Map.of(..)`](./usemapof.md)
* [Prefer `Optional.isEmpty()`](./optionalnotpresenttoisempty.md)
* [Prefer `Optional.isPresent()`](./optionalnotemptytoispresent.md)
* [Prefer `Set.of(..)`](./migratecollectionssingletonset.md)
* [Prefer `Set.of(..)`](./migratecollectionsunmodifiableset.md)
* [Remove invocations of deprecated invocations from Deflater, Inflater, ZipFile](./removefinalizerfromzip.md)
* [Replace `List.get(int)`, `add(int, Object)`, and `remove(int)` with `SequencedCollection` `*First` and `*Last` methods](./listfirstandlast.md)
* [Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`](./replacestreamcollectwithtolist.md)
* [Replace `iterator().next()` with `getFirst()`](./iteratornext.md)
* [Replace `java.lang.Math random()` with `ThreadLocalRandom nextDouble()`](./replacemathrandomwiththreadlocalrandomrecipe.md)
* [`Stream&lt;Optional&gt;` idiom recipe](./optionalstreamrecipe.md)
* [Use `Reader.of(CharSequence)` for non-synchronized readers](./migratestringreadertoreaderof.md)
* [Use `getFirst()` instead of `stream().findFirst().orElseThrow()`](./streamfindfirst.md)


