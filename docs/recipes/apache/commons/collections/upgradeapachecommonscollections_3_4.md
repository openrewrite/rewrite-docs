---
title: "Migrates to Apache Commons Collections 4.x"
sidebar_label: "Migrates to Apache Commons Collections 4.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates to Apache Commons Collections 4.x

**org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections\_3\_4**

_Migrate applications to the latest Apache Commons Collections 4.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions._

### Tags

* [collections](/reference/recipes-by-tag#collections)
* [commons](/reference/recipes-by-tag#commons)
* [apache](/reference/recipes-by-tag#apache)

## Recipe source

[GitHub: apache-commons-collections-3-4.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-collections-3-4.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `commons-collections`
  * oldArtifactId: `commons-collections`
  * newGroupId: `org.apache.commons`
  * newArtifactId: `commons-collections4`
  * newVersion: `4.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.apache.commons`
  * artifactId: `commons-collections4`
  * version: `4.x`
  * onlyIfUsing: `org.apache.commons.collections..*`
  * acceptTransitive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.map.IdentityMap`
  * newFullyQualifiedTypeName: `java.util.IdentityHashMap`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.apache.commons.collections.FastArrayList <constructor>(int)`
  * argumentIndex: `0`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.apache.commons.collections.FastArrayList setFast(boolean)`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.FastArrayList`
  * newFullyQualifiedTypeName: `java.util.concurrent.CopyOnWriteArrayList`
* [Change static field access to static method access](../../../java/changestaticfieldtomethod)
  * oldClassName: `org.apache.commons.collections.MapUtils`
  * oldFieldName: `EMPTY_MAP`
  * newClassName: `java.util.Collections`
  * newMethodName: `emptyMap`
* [Change static field access to static method access](../../../java/changestaticfieldtomethod)
  * oldClassName: `org.apache.commons.collections.ListUtils`
  * oldFieldName: `EMPTY_LIST`
  * newClassName: `java.util.Collections`
  * newMethodName: `emptyList`
* [Change static field access to static method access](../../../java/changestaticfieldtomethod)
  * oldClassName: `org.apache.commons.collections.SetUtils`
  * oldFieldName: `EMPTY_SET`
  * newClassName: `java.util.Collections`
  * newMethodName: `emptySet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.OrderedMap orderedMapIterator()`
  * newMethodName: `mapIterator`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.OrderedBidiMap inverseOrderedBidiMap()`
  * newMethodName: `inverseBidiMap`
  * matchOverrides: `true`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.map.AbstractReferenceMap.HARD`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.HARD`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.map.AbstractReferenceMap.SOFT`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.SOFT`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.map.AbstractReferenceMap.WEAK`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.WEAK`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.ReferenceMap.HARD`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.HARD`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.ReferenceMap.SOFT`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.SOFT`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.collections.ReferenceMap.WEAK`
  * fullyQualifiedConstantName: `org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.WEAK`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.SynchronizedSet decorate(java.util.Set)`
  * newMethodName: `synchronizedSet`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.commons.collections.set.SynchronizedSet synchronizedSet(java.util.Set)`
  * fullyQualifiedTargetTypeName: `java.util.Collections`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.SynchronizedSortedSet decorate(java.util.SortedSet)`
  * newMethodName: `synchronizedSortedSet`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.commons.collections.set.SynchronizedSortedSet synchronizedSortedSet(java.util.SortedSet)`
  * fullyQualifiedTargetTypeName: `java.util.Collections`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.SynchronizedList decorate(java.util.List)`
  * newMethodName: `synchronizedList`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.commons.collections.list.SynchronizedList synchronizedList(java.util.List)`
  * fullyQualifiedTargetTypeName: `java.util.Collections`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.PredicatedBag decorate(..)`
  * newMethodName: `predicatedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.PredicatedSortedBag decorate(..)`
  * newMethodName: `predicatedSortedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.SynchronizedBag decorate(..)`
  * newMethodName: `synchronizedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.SynchronizedSortedBag decorate(..)`
  * newMethodName: `synchronizedSortedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.TransformedBag decorate(..)`
  * newMethodName: `transformingBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.TransformedSortedBag decorate(..)`
  * newMethodName: `transformingSortedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.UnmodifiableBag decorate(..)`
  * newMethodName: `unmodifiableBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bag.UnmodifiableSortedBag decorate(..)`
  * newMethodName: `unmodifiableSortedBag`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bidimap.UnmodifiableBidiMap decorate(..)`
  * newMethodName: `unmodifiableBidiMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bidimap.UnmodifiableOrderedBidiMap decorate(..)`
  * newMethodName: `unmodifiableOrderedBidiMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.bidimap.UnmodifiableSortedBidiMap decorate(..)`
  * newMethodName: `unmodifiableSortedBidiMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.collection.PredicatedCollection decorate(..)`
  * newMethodName: `predicatedCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.collection.SynchronizedCollection decorate(..)`
  * newMethodName: `synchronizedCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.collection.TransformedCollection decorate(..)`
  * newMethodName: `transformingCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.collection.UnmodifiableBoundedCollection decorate(..)`
  * newMethodName: `unmodifiableBoundedCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.collection.UnmodifiableCollection decorate(..)`
  * newMethodName: `unmodifiableCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.comparators.ComparableComparator getInstance(..)`
  * newMethodName: `comparableComparator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.AllPredicate getInstance(..)`
  * newMethodName: `allPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.AndPredicate getInstance(..)`
  * newMethodName: `andPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.AnyPredicate getInstance(..)`
  * newMethodName: `anyPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ChainedClosure getInstance(..)`
  * newMethodName: `chainedClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ChainedTransformer getInstance(..)`
  * newMethodName: `chainedTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.CloneTransformer getInstance(..)`
  * newMethodName: `cloneTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ClosureTransformer getInstance(..)`
  * newMethodName: `closureTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ConstantFactory getInstance(..)`
  * newMethodName: `constantFactory`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ConstantTransformer getInstance(..)`
  * newMethodName: `constantTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.EqualPredicate getInstance(..)`
  * newMethodName: `equalPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ExceptionClosure getInstance(..)`
  * newMethodName: `exceptionClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ExceptionFactory getInstance(..)`
  * newMethodName: `exceptionFactory`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ExceptionPredicate getInstance(..)`
  * newMethodName: `exceptionPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ExceptionTransformer getInstance(..)`
  * newMethodName: `exceptionTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.FactoryTransformer getInstance(..)`
  * newMethodName: `factoryTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.FalsePredicate getInstance(..)`
  * newMethodName: `falsePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.ForClosure getInstance(..)`
  * newMethodName: `forClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.IdentityPredicate getInstance(..)`
  * newMethodName: `identityPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.IfClosure getInstance(..)`
  * newMethodName: `ifClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.InstanceofPredicate getInstance(..)`
  * newMethodName: `instanceOfPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.InstantiateFactory getInstance(..)`
  * newMethodName: `instantiateFactory`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.InstantiateTransformer getInstance(..)`
  * newMethodName: `instantiateTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.InvokerTransformer getInstance(..)`
  * newMethodName: `invokerTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.MapTransformer getInstance(..)`
  * newMethodName: `mapTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NOPClosure getInstance(..)`
  * newMethodName: `nopClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NOPTransformer getInstance(..)`
  * newMethodName: `nopTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NonePredicate getInstance(..)`
  * newMethodName: `nonePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NotNullPredicate getInstance(..)`
  * newMethodName: `notNullPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NotPredicate getInstance(..)`
  * newMethodName: `notPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NullIsExceptionPredicate getInstance(..)`
  * newMethodName: `nullIsExceptionPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NullIsFalsePredicate getInstance(..)`
  * newMethodName: `nullIsFalsePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NullIsTruePredicate getInstance(..)`
  * newMethodName: `nullIsTruePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.NullPredicate getInstance(..)`
  * newMethodName: `nullPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.OnePredicate getInstance(..)`
  * newMethodName: `onePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.OrPredicate getInstance(..)`
  * newMethodName: `orPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.PredicateTransformer getInstance(..)`
  * newMethodName: `predicateTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.PrototypeFactory getInstance(..)`
  * newMethodName: `prototypeFactory`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.StringValueTransformer getInstance(..)`
  * newMethodName: `stringValueTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.SwitchClosure getInstance(..)`
  * newMethodName: `switchClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.SwitchTransformer getInstance(..)`
  * newMethodName: `switchTransformer`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.TransformedPredicate getInstance(..)`
  * newMethodName: `transformedPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.TransformerClosure getInstance(..)`
  * newMethodName: `transformerClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.TransformerPredicate getInstance(..)`
  * newMethodName: `transformerPredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.TruePredicate getInstance(..)`
  * newMethodName: `truePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.UniquePredicate getInstance(..)`
  * newMethodName: `uniquePredicate`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.functors.WhileClosure getInstance(..)`
  * newMethodName: `whileClosure`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.iterators.UnmodifiableIterator decorate(..)`
  * newMethodName: `unmodifiableIterator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.iterators.UnmodifiableListIterator decorate(..)`
  * newMethodName: `unmodifiableListIterator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.iterators.UnmodifiableMapIterator decorate(..)`
  * newMethodName: `unmodifiableMapIterator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.iterators.UnmodifiableOrderedMapIterator decorate(..)`
  * newMethodName: `unmodifiableOrderedMapIterator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.FixedSizeList decorate(..)`
  * newMethodName: `fixedSizeList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.GrowthList decorate(..)`
  * newMethodName: `growthList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.LazyList decorate(..)`
  * newMethodName: `lazyList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.PredicatedList decorate(..)`
  * newMethodName: `predicatedList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.SetUniqueList decorate(..)`
  * newMethodName: `setUniqueList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.TransformedList decorate(..)`
  * newMethodName: `transformingList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.list.UnmodifiableList decorate(..)`
  * newMethodName: `unmodifiableList`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.DefaultedMap decorate(..)`
  * newMethodName: `defaultedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.FixedSizeMap decorate(..)`
  * newMethodName: `fixedSizeMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.FixedSizeSortedMap decorate(..)`
  * newMethodName: `fixedSizeSortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.LazyMap decorate(..)`
  * newMethodName: `lazyMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.LazySortedMap decorate(..)`
  * newMethodName: `lazySortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.ListOrderedMap decorate(..)`
  * newMethodName: `listOrderedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.MultiKeyMap decorate(..)`
  * newMethodName: `multiKeyMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.MultiValueMap decorate(..)`
  * newMethodName: `multiValueMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.PredicatedMap decorate(..)`
  * newMethodName: `predicatedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.PredicatedSortedMap decorate(..)`
  * newMethodName: `predicatedSortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.TransformedMap decorate(..)`
  * newMethodName: `transformingMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.TransformedMap decorateTransform(..)`
  * newMethodName: `transformedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.TransformedSortedMap decorate(..)`
  * newMethodName: `transformingSortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.TransformedSortedMap decorateTransform(..)`
  * newMethodName: `transformedSortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.UnmodifiableEntrySet decorate(..)`
  * newMethodName: `unmodifiableEntrySet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.UnmodifiableMap decorate(..)`
  * newMethodName: `unmodifiableMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.UnmodifiableOrderedMap decorate(..)`
  * newMethodName: `unmodifiableOrderedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.map.UnmodifiableSortedMap decorate(..)`
  * newMethodName: `unmodifiableSortedMap`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.ListOrderedSet decorate(..)`
  * newMethodName: `listOrderedSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.MapBackedSet decorate(..)`
  * newMethodName: `mapBackedSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.PredicatedSet decorate(..)`
  * newMethodName: `predicatedSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.PredicatedSortedSet decorate(..)`
  * newMethodName: `predicatedSortedSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.TransformedSet decorate(..)`
  * newMethodName: `transformingSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.TransformedSortedSet decorate(..)`
  * newMethodName: `transformingSortedSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.UnmodifiableSet decorate(..)`
  * newMethodName: `unmodifiableSet`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.collections.set.UnmodifiableSortedSet decorate(..)`
  * newMethodName: `unmodifiableSortedSet`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.DefaultMapEntry`
  * newFullyQualifiedTypeName: `org.apache.commons.collections4.keyvalue.DefaultMapEntry`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.HashBag`
  * newFullyQualifiedTypeName: `org.apache.commons.collections4.bag.HashBag`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.ReferenceMap`
  * newFullyQualifiedTypeName: `org.apache.commons.collections4.map.ReferenceMap`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.StaticBucketMap`
  * newFullyQualifiedTypeName: `org.apache.commons.collections4.map.StaticBucketMap`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.collections.TreeBag`
  * newFullyQualifiedTypeName: `org.apache.commons.collections4.bag.TreeBag`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.apache.commons.collections`
  * newPackageName: `org.apache.commons.collections4`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4
displayName: Migrates to Apache Commons Collections 4.x
description: |
  Migrate applications to the latest Apache Commons Collections 4.x release. This recipe modifies application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions.
tags:
  - collections
  - commons
  - apache
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: commons-collections
      oldArtifactId: commons-collections
      newGroupId: org.apache.commons
      newArtifactId: commons-collections4
      newVersion: 4.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.commons
      artifactId: commons-collections4
      version: 4.x
      onlyIfUsing: org.apache.commons.collections..*
      acceptTransitive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.map.IdentityMap
      newFullyQualifiedTypeName: java.util.IdentityHashMap
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.apache.commons.collections.FastArrayList <constructor>(int)
      argumentIndex: 0
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.commons.collections.FastArrayList setFast(boolean)
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.FastArrayList
      newFullyQualifiedTypeName: java.util.concurrent.CopyOnWriteArrayList
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: org.apache.commons.collections.MapUtils
      oldFieldName: EMPTY_MAP
      newClassName: java.util.Collections
      newMethodName: emptyMap
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: org.apache.commons.collections.ListUtils
      oldFieldName: EMPTY_LIST
      newClassName: java.util.Collections
      newMethodName: emptyList
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: org.apache.commons.collections.SetUtils
      oldFieldName: EMPTY_SET
      newClassName: java.util.Collections
      newMethodName: emptySet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.OrderedMap orderedMapIterator()
      newMethodName: mapIterator
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.OrderedBidiMap inverseOrderedBidiMap()
      newMethodName: inverseBidiMap
      matchOverrides: true
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.map.AbstractReferenceMap.HARD
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.HARD
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.map.AbstractReferenceMap.SOFT
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.SOFT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.map.AbstractReferenceMap.WEAK
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.WEAK
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.ReferenceMap.HARD
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.HARD
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.ReferenceMap.SOFT
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.SOFT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.collections.ReferenceMap.WEAK
      fullyQualifiedConstantName: org.apache.commons.collections4.map.AbstractReferenceMap.ReferenceStrength.WEAK
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.SynchronizedSet decorate(java.util.Set)
      newMethodName: synchronizedSet
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.commons.collections.set.SynchronizedSet synchronizedSet(java.util.Set)
      fullyQualifiedTargetTypeName: java.util.Collections
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.SynchronizedSortedSet decorate(java.util.SortedSet)
      newMethodName: synchronizedSortedSet
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.commons.collections.set.SynchronizedSortedSet synchronizedSortedSet(java.util.SortedSet)
      fullyQualifiedTargetTypeName: java.util.Collections
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.SynchronizedList decorate(java.util.List)
      newMethodName: synchronizedList
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.commons.collections.list.SynchronizedList synchronizedList(java.util.List)
      fullyQualifiedTargetTypeName: java.util.Collections
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.PredicatedBag decorate(..)
      newMethodName: predicatedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.PredicatedSortedBag decorate(..)
      newMethodName: predicatedSortedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.SynchronizedBag decorate(..)
      newMethodName: synchronizedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.SynchronizedSortedBag decorate(..)
      newMethodName: synchronizedSortedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.TransformedBag decorate(..)
      newMethodName: transformingBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.TransformedSortedBag decorate(..)
      newMethodName: transformingSortedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.UnmodifiableBag decorate(..)
      newMethodName: unmodifiableBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bag.UnmodifiableSortedBag decorate(..)
      newMethodName: unmodifiableSortedBag
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bidimap.UnmodifiableBidiMap decorate(..)
      newMethodName: unmodifiableBidiMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bidimap.UnmodifiableOrderedBidiMap decorate(..)
      newMethodName: unmodifiableOrderedBidiMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.bidimap.UnmodifiableSortedBidiMap decorate(..)
      newMethodName: unmodifiableSortedBidiMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.collection.PredicatedCollection decorate(..)
      newMethodName: predicatedCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.collection.SynchronizedCollection decorate(..)
      newMethodName: synchronizedCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.collection.TransformedCollection decorate(..)
      newMethodName: transformingCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.collection.UnmodifiableBoundedCollection decorate(..)
      newMethodName: unmodifiableBoundedCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.collection.UnmodifiableCollection decorate(..)
      newMethodName: unmodifiableCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.comparators.ComparableComparator getInstance(..)
      newMethodName: comparableComparator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.AllPredicate getInstance(..)
      newMethodName: allPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.AndPredicate getInstance(..)
      newMethodName: andPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.AnyPredicate getInstance(..)
      newMethodName: anyPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ChainedClosure getInstance(..)
      newMethodName: chainedClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ChainedTransformer getInstance(..)
      newMethodName: chainedTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.CloneTransformer getInstance(..)
      newMethodName: cloneTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ClosureTransformer getInstance(..)
      newMethodName: closureTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ConstantFactory getInstance(..)
      newMethodName: constantFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ConstantTransformer getInstance(..)
      newMethodName: constantTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.EqualPredicate getInstance(..)
      newMethodName: equalPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ExceptionClosure getInstance(..)
      newMethodName: exceptionClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ExceptionFactory getInstance(..)
      newMethodName: exceptionFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ExceptionPredicate getInstance(..)
      newMethodName: exceptionPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ExceptionTransformer getInstance(..)
      newMethodName: exceptionTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.FactoryTransformer getInstance(..)
      newMethodName: factoryTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.FalsePredicate getInstance(..)
      newMethodName: falsePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.ForClosure getInstance(..)
      newMethodName: forClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.IdentityPredicate getInstance(..)
      newMethodName: identityPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.IfClosure getInstance(..)
      newMethodName: ifClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.InstanceofPredicate getInstance(..)
      newMethodName: instanceOfPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.InstantiateFactory getInstance(..)
      newMethodName: instantiateFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.InstantiateTransformer getInstance(..)
      newMethodName: instantiateTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.InvokerTransformer getInstance(..)
      newMethodName: invokerTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.MapTransformer getInstance(..)
      newMethodName: mapTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NOPClosure getInstance(..)
      newMethodName: nopClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NOPTransformer getInstance(..)
      newMethodName: nopTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NonePredicate getInstance(..)
      newMethodName: nonePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NotNullPredicate getInstance(..)
      newMethodName: notNullPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NotPredicate getInstance(..)
      newMethodName: notPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NullIsExceptionPredicate getInstance(..)
      newMethodName: nullIsExceptionPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NullIsFalsePredicate getInstance(..)
      newMethodName: nullIsFalsePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NullIsTruePredicate getInstance(..)
      newMethodName: nullIsTruePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.NullPredicate getInstance(..)
      newMethodName: nullPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.OnePredicate getInstance(..)
      newMethodName: onePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.OrPredicate getInstance(..)
      newMethodName: orPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.PredicateTransformer getInstance(..)
      newMethodName: predicateTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.PrototypeFactory getInstance(..)
      newMethodName: prototypeFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.StringValueTransformer getInstance(..)
      newMethodName: stringValueTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.SwitchClosure getInstance(..)
      newMethodName: switchClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.SwitchTransformer getInstance(..)
      newMethodName: switchTransformer
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.TransformedPredicate getInstance(..)
      newMethodName: transformedPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.TransformerClosure getInstance(..)
      newMethodName: transformerClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.TransformerPredicate getInstance(..)
      newMethodName: transformerPredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.TruePredicate getInstance(..)
      newMethodName: truePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.UniquePredicate getInstance(..)
      newMethodName: uniquePredicate
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.functors.WhileClosure getInstance(..)
      newMethodName: whileClosure
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.iterators.UnmodifiableIterator decorate(..)
      newMethodName: unmodifiableIterator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.iterators.UnmodifiableListIterator decorate(..)
      newMethodName: unmodifiableListIterator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.iterators.UnmodifiableMapIterator decorate(..)
      newMethodName: unmodifiableMapIterator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.iterators.UnmodifiableOrderedMapIterator decorate(..)
      newMethodName: unmodifiableOrderedMapIterator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.FixedSizeList decorate(..)
      newMethodName: fixedSizeList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.GrowthList decorate(..)
      newMethodName: growthList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.LazyList decorate(..)
      newMethodName: lazyList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.PredicatedList decorate(..)
      newMethodName: predicatedList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.SetUniqueList decorate(..)
      newMethodName: setUniqueList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.TransformedList decorate(..)
      newMethodName: transformingList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.list.UnmodifiableList decorate(..)
      newMethodName: unmodifiableList
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.DefaultedMap decorate(..)
      newMethodName: defaultedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.FixedSizeMap decorate(..)
      newMethodName: fixedSizeMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.FixedSizeSortedMap decorate(..)
      newMethodName: fixedSizeSortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.LazyMap decorate(..)
      newMethodName: lazyMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.LazySortedMap decorate(..)
      newMethodName: lazySortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.ListOrderedMap decorate(..)
      newMethodName: listOrderedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.MultiKeyMap decorate(..)
      newMethodName: multiKeyMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.MultiValueMap decorate(..)
      newMethodName: multiValueMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.PredicatedMap decorate(..)
      newMethodName: predicatedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.PredicatedSortedMap decorate(..)
      newMethodName: predicatedSortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.TransformedMap decorate(..)
      newMethodName: transformingMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.TransformedMap decorateTransform(..)
      newMethodName: transformedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.TransformedSortedMap decorate(..)
      newMethodName: transformingSortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.TransformedSortedMap decorateTransform(..)
      newMethodName: transformedSortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.UnmodifiableEntrySet decorate(..)
      newMethodName: unmodifiableEntrySet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.UnmodifiableMap decorate(..)
      newMethodName: unmodifiableMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.UnmodifiableOrderedMap decorate(..)
      newMethodName: unmodifiableOrderedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.map.UnmodifiableSortedMap decorate(..)
      newMethodName: unmodifiableSortedMap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.ListOrderedSet decorate(..)
      newMethodName: listOrderedSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.MapBackedSet decorate(..)
      newMethodName: mapBackedSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.PredicatedSet decorate(..)
      newMethodName: predicatedSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.PredicatedSortedSet decorate(..)
      newMethodName: predicatedSortedSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.TransformedSet decorate(..)
      newMethodName: transformingSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.TransformedSortedSet decorate(..)
      newMethodName: transformingSortedSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.UnmodifiableSet decorate(..)
      newMethodName: unmodifiableSet
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.collections.set.UnmodifiableSortedSet decorate(..)
      newMethodName: unmodifiableSortedSet
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.DefaultMapEntry
      newFullyQualifiedTypeName: org.apache.commons.collections4.keyvalue.DefaultMapEntry
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.HashBag
      newFullyQualifiedTypeName: org.apache.commons.collections4.bag.HashBag
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.ReferenceMap
      newFullyQualifiedTypeName: org.apache.commons.collections4.map.ReferenceMap
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.StaticBucketMap
      newFullyQualifiedTypeName: org.apache.commons.collections4.map.StaticBucketMap
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.collections.TreeBag
      newFullyQualifiedTypeName: org.apache.commons.collections4.bag.TreeBag
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.commons.collections
      newPackageName: org.apache.commons.collections4
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Apache Commons best practices](/recipes/apache/commons/apachecommonsbestpractices.md)

## Examples
##### Example 1
`UpgradeApacheCommonsCollections_3_4Test#apacheCommonsCollections`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.map.IdentityMap;
import org.apache.commons.collections.ListUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.collections.FastArrayList;

import java.util.List;
import java.util.Map;

class Test {
    static void helloApacheCollections() {
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
        IdentityMap identityMap = new IdentityMap();
        Map emptyMap = MapUtils.EMPTY_MAP;
        FastArrayList fastList = new FastArrayList(100);
        List emptyList = ListUtils.EMPTY_LIST;
    }
}
```

###### After
```java
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

class Test {
    static void helloApacheCollections() {
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
        IdentityHashMap identityMap = new IdentityHashMap();
        Map emptyMap = Collections.emptyMap();
        CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);
        List emptyList = Collections.emptyList();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,5 +1,1 @@
-import org.apache.commons.collections.CollectionUtils;
-import org.apache.commons.collections.map.IdentityMap;
-import org.apache.commons.collections.ListUtils;
-import org.apache.commons.collections.MapUtils;
-import org.apache.commons.collections.FastArrayList;
+import org.apache.commons.collections4.CollectionUtils;

@@ -7,0 +3,2 @@
import org.apache.commons.collections.FastArrayList;

+import java.util.Collections;
+import java.util.IdentityHashMap;
import java.util.List;
@@ -9,0 +7,1 @@
import java.util.List;
import java.util.Map;
+import java.util.concurrent.CopyOnWriteArrayList;

@@ -14,4 +13,4 @@
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
-       IdentityMap identityMap = new IdentityMap();
-       Map emptyMap = MapUtils.EMPTY_MAP;
-       FastArrayList fastList = new FastArrayList(100);
-       List emptyList = ListUtils.EMPTY_LIST;
+       IdentityHashMap identityMap = new IdentityHashMap();
+       Map emptyMap = Collections.emptyMap();
+       CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);
+       List emptyList = Collections.emptyList();
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeApacheCommonsCollections_3_4Test#apacheCommonsCollections`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.map.IdentityMap;
import org.apache.commons.collections.ListUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.collections.FastArrayList;

import java.util.List;
import java.util.Map;

class Test {
    static void helloApacheCollections() {
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
        IdentityMap identityMap = new IdentityMap();
        Map emptyMap = MapUtils.EMPTY_MAP;
        FastArrayList fastList = new FastArrayList(100);
        List emptyList = ListUtils.EMPTY_LIST;
    }
}
```

###### After
```java
import org.apache.commons.collections4.CollectionUtils;

import java.util.Collections;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

class Test {
    static void helloApacheCollections() {
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
        IdentityHashMap identityMap = new IdentityHashMap();
        Map emptyMap = Collections.emptyMap();
        CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);
        List emptyList = Collections.emptyList();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,5 +1,1 @@
-import org.apache.commons.collections.CollectionUtils;
-import org.apache.commons.collections.map.IdentityMap;
-import org.apache.commons.collections.ListUtils;
-import org.apache.commons.collections.MapUtils;
-import org.apache.commons.collections.FastArrayList;
+import org.apache.commons.collections4.CollectionUtils;

@@ -7,0 +3,2 @@
import org.apache.commons.collections.FastArrayList;

+import java.util.Collections;
+import java.util.IdentityHashMap;
import java.util.List;
@@ -9,0 +7,1 @@
import java.util.List;
import java.util.Map;
+import java.util.concurrent.CopyOnWriteArrayList;

@@ -14,4 +13,4 @@
        Object[] input = new Object[] { "one", "two" };
        CollectionUtils.reverseArray(input);
-       IdentityMap identityMap = new IdentityMap();
-       Map emptyMap = MapUtils.EMPTY_MAP;
-       FastArrayList fastList = new FastArrayList(100);
-       List emptyList = ListUtils.EMPTY_LIST;
+       IdentityHashMap identityMap = new IdentityHashMap();
+       Map emptyMap = Collections.emptyMap();
+       CopyOnWriteArrayList fastList = new CopyOnWriteArrayList(100);
+       List emptyList = Collections.emptyList();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4"
  displayName="Migrates to Apache Commons Collections 4.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4" />

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
