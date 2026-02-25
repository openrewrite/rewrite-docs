---
description: Guava OpenRewrite recipes.
---

# Guava

_Recipes for migrating from [Google Guava](https://github.com/google/guava) to Java standard library._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Prefer `Integer#compareUnsigned`](./preferintegercompareunsigned.md)
* [Prefer `Integer#divideUnsigned`](./preferintegerdivideunsigned.md)
* [Prefer `Long#compareUnsigned`](./preferlongcompareunsigned.md)
* [Prefer `Long#divideUnsigned`](./preferlongdivideunsigned.md)
* [Prefer `Math#addExact`](./prefermathaddexact.md)
* [Prefer `Math#clamp`](./prefermathclamp.md)
* [Prefer `Math#multiplyExact`](./prefermathmultiplyexact.md)
* [Prefer `Math#subtractExact`](./prefermathsubtractexact.md)
* [Prefer `java.util.Objects#equals`](./preferjavautilobjectsequals.md)
* [Prefer `java.util.Objects#hash`](./preferjavautilobjectshashcode.md)
* [Prefer `java.util.Objects#requireNonNullElse`](./preferjavautilobjectsrequirenonnullelse.md)
* [Prefer `java.util.Optional`](./preferjavautiloptional.md)
* [Prefer `java.util.function.Predicate`](./preferjavautilpredicate.md)
* [Prefer the Java 11 standard library instead of Guava](./noguavajava11.md)
* [Prefer the Java 21 standard library instead of Guava](./noguavajava21.md)
* [Prefer the Java standard library instead of Guava](./noguava.md)
* [Refaster style Guava to Java migration recipes](./noguavarefasterrecipes.md)

## Recipes

* [Change Guava's `Predicate` into `java.util.function.Predicate` where possible](./noguavapredicate.md)
* [`Preconditions.checkNotNull` to `Objects.requireNonNull`](./noguavarefasterrecipes$preconditionschecknotnulltoobjectsrequirenonnullrecipe.md)
* [`Preconditions.checkNotNull` with `Object` message to `Objects.requireNonNull` with `String.valueOf`](./noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullmessagetypeobjectrecipe.md)
* [`Preconditions.checkNotNull` with `String` message to `Objects.requireNonNull`](./noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullrecipe.md)
* [Prefer `A.class::isInstance`](./noguavapredicatesinstanceof.md)
* [Prefer `Arrays.asList(..)` over Guava primitives](./noguavaprimitiveaslist.md)
* [Prefer `Collection.stream().allMatch(Predicate)`](./noguavaiterablesall.md)
* [Prefer `Collection.stream().anyMatch(Predicate)`](./noguavaiterablesanyfilter.md)
* [Prefer `Collection.stream().filter(Predicate)`](./noguavasetsfilter.md)
* [Prefer `Collection.stream().map(Function)` over `Collections2.transform`](./noguavacollections2transform.md)
* [Prefer `Collection.stream().map(Function)` over `Iterables.transform`](./noguavaiterablestransform.md)
* [Prefer `Files#createTempDirectory()`](./noguavacreatetempdir.md)
* [Prefer `Function.compose(Function)`](./noguavafunctionscompose.md)
* [Prefer `Integer#compare`](./preferintegercompare.md)
* [Prefer `Integer#parseUnsignedInt`](./preferintegerparseunsignedint.md)
* [Prefer `Integer#remainderUnsigned`](./preferintegerremainderunsigned.md)
* [Prefer JDK methods for Maps and Sets of an expected size](./nomapsandsetswithexpectedsize.md)
* [Prefer `List.of(..)` in Java 9 or higher](./noguavaimmutablelistof.md)
* [Prefer `Long#compare`](./preferlongcompare.md)
* [Prefer `Long#parseUnsignedInt`](./preferlongparseunsignedlong.md)
* [Prefer `Long#remainderUnsigned`](./preferlongremainderunsigned.md)
* [Prefer `Map.of(..)` in Java 9 or higher](./noguavaimmutablemapof.md)
* [Prefer `Optional.stream().collect(Collectors.toSet())`](./noguavaoptionalasset.md)
* [Prefer `Predicate.and(Predicate)`](./noguavapredicatesandor.md)
* [Prefer `Predicate.isEqual(Object)`](./noguavapredicatesequalto.md)
* [Prefer `Runnable::run`](./noguavadirectexecutor.md)
* [Prefer `Set.of(..)` in Java 9 or higher](./noguavaimmutablesetof.md)
* [Prefer `Short#compare`](./prefershortcompare.md)
* [Prefer `String#join()` over Guava `Joiner#join()`](./preferjavastringjoin.md)
* [Prefer `java.lang.Char#compare`](./prefercharcompare.md)
* [Prefer `java.nio.charset.StandardCharsets`](./preferjavaniocharsetstandardcharsets.md)
* [Prefer `java.util.Collections#synchronizedNavigableMap`](./preferjavautilcollectionssynchronizednavigablemap.md)
* [Prefer `java.util.Collections#unmodifiableNavigableMap`](./preferjavautilcollectionsunmodifiablenavigablemap.md)
* [Prefer `java.util.Optional#or(Supplier&lt;T extends java.util.Optional&lt;T&gt;&gt;)`](./preferjavautiloptionalorsupplier.md)
* [Prefer `java.util.Optional#orElse(null)` over `com.google.common.base.Optional#orNull()`](./preferjavautiloptionalorelsenull.md)
* [Prefer `java.util.function.Function`](./preferjavautilfunction.md)
* [Prefer `java.util.function.Supplier`](./preferjavautilsupplier.md)
* [Prefer `new ArrayList&lt;&gt;()`](./noguavalistsnewarraylist.md)
* [Prefer `new AtomicReference&lt;&gt;()`](./noguavaatomicsnewreference.md)
* [Prefer `new ConcurrentHashMap&lt;&gt;()`](./noguavasetsnewconcurrenthashset.md)
* [Prefer `new CopyOnWriteArrayList&lt;&gt;()`](./noguavalistsnewcopyonwritearraylist.md)
* [Prefer `new HashMap&lt;&gt;()`](./noguavamapsnewhashmap.md)
* [Prefer `new HashSet&lt;&gt;()`](./noguavasetsnewhashset.md)
* [Prefer `new LinkedHashMap&lt;&gt;()`](./noguavamapsnewlinkedhashmap.md)
* [Prefer `new LinkedHashSet&lt;&gt;()`](./noguavasetsnewlinkedhashset.md)
* [Prefer `new LinkedList&lt;&gt;()`](./noguavalistsnewlinkedlist.md)
* [Prefer `new TreeMap&lt;&gt;()`](./noguavamapsnewtreemap.md)
* [Remove `com.google.common.base.Optional#toJavaUtil()`](./noguavaoptionaltojavautil.md)
* [Replace `com.google.common.base.Optional#fromJavaUtil(java.util.Optional)` with argument](./noguavaoptionalfromjavautil.md)


