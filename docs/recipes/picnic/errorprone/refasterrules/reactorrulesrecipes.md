---
title: "`ReactorRules` Refaster recipes"
sidebar_label: "`ReactorRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `ReactorRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.ReactorRulesRecipes**

_Refaster rules related to Reactor expressions and statements. [Source](https://error-prone.picnic.tech/refasterrules/ReactorRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `ReactorRules.MonoEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDurationMonoEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDurationMonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonojustrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDuration`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisherMonoEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisherMonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonojustrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisher`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublisherrecipe)
* [Refaster template `ReactorRules.MonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyObject`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyobjectrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyOptional`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyoptionalrecipe)
* [Refaster template `ReactorRules.MonoDeferMonoJustOrEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodefermonojustoremptyrecipe)
* [Refaster template `ReactorRules.OptionalMapMonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$optionalmapmonojustrecipe)
* [Prefer a `Mono#justOrEmpty(Optional)` and `Mono#switchIfEmpty(Mono)` chain over more contrived alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromoptionalswitchifemptyrecipe)
* [Refaster template `ReactorRules.MonoZip`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoziprecipe)
* [Refaster template `ReactorRules.MonoZipWithCombinator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monozipwithcombinatorrecipe)
* [Refaster template `ReactorRules.FluxZip`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxziprecipe)
* [Refaster template `ReactorRules.FluxZipWithCombinator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithcombinatorrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablerecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableBiFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablebifunctionrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableMapFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablemapfunctionrecipe)
* [Refaster template `ReactorRules.MonoDeferredError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodeferrederrorrecipe)
* [Refaster template `ReactorRules.FluxDeferredError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdeferrederrorrecipe)
* [Refaster template `ReactorRules.MonoErrorSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoerrorsupplierrecipe)
* [Refaster template `ReactorRules.FluxErrorSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxerrorsupplierrecipe)
* [Refaster template `ReactorRules.MonoThenReturn`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenreturnrecipe)
* [Prefer `Flux#take(long)` over `Flux#take(long, boolean)` where relevant](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtakerecipe)
* [Refaster template `ReactorRules.MonoDefaultIfEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxDefaultIfEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxTimeoutFluxEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtimeoutfluxemptyrecipe)
* [Refaster template `ReactorRules.FluxJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustrecipe)
* [Refaster template `ReactorRules.FluxJustArray`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustarrayrecipe)
* [Refaster template `ReactorRules.MonoIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoidentityrecipe)
* [Refaster template `ReactorRules.MonoSingle`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monosinglerecipe)
* [Refaster template `ReactorRules.FluxSwitchIfEmptyOfEmptyPublisher`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxswitchifemptyofemptypublisherrecipe)
* [Refaster template `ReactorRules.MonoFlatMapIterableIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoflatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.FluxMapNotNullOrElse`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxmapnotnullorelserecipe)
* [Refaster template `ReactorRules.MonoFlux`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofluxrecipe)
* [Refaster template `ReactorRules.MonoThen`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenrecipe)
* [Refaster template `ReactorRules.FluxThen`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenrecipe)
* [Refaster template `ReactorRules.MonoThenEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenemptyrecipe)
* [Refaster template `ReactorRules.FluxThenEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenemptyrecipe)
* [Refaster template `ReactorRules.MonoThenMany`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenMonoFlux`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmonofluxrecipe)
* [Refaster template `ReactorRules.FluxThenMany`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenMono`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmonorecipe)
* [Refaster template `ReactorRules.FluxThenMono`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenmonorecipe)
* [Refaster template `ReactorRules.MonoSingleOptional`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monosingleoptionalrecipe)
* [Refaster template `ReactorRules.MonoOfType`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monooftyperecipe)
* [Refaster template `ReactorRules.FluxOfType`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxoftyperecipe)
* [Refaster template `ReactorRules.ConcatMapIterableIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$concatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.ConcatMapIterableIdentityWithPrefetch`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$concatmapiterableidentitywithprefetchrecipe)
* [Refaster template `ReactorRules.FluxFromIterable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromiterablerecipe)
* [Refaster template `ReactorRules.MonoDoOnError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodoonerrorrecipe)
* [Refaster template `ReactorRules.FluxDoOnError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdoonerrorrecipe)
* [Refaster template `ReactorRules.MonoOnErrorComplete`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompleterecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompleteClass`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompleteclassrecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompletePredicate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletepredicaterecipe)
* [Refaster template `ReactorRules.FluxOnErrorCompletePredicate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcompletepredicaterecipe)
* [Refaster template `ReactorRules.MonoOnErrorContinue`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcontinuerecipe)
* [Refaster template `ReactorRules.FluxOnErrorContinue`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcontinuerecipe)
* [Refaster template `ReactorRules.MonoOnErrorMap`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrormaprecipe)
* [Refaster template `ReactorRules.FluxOnErrorMap`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrormaprecipe)
* [Refaster template `ReactorRules.MonoOnErrorResume`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorresumerecipe)
* [Refaster template `ReactorRules.FluxOnErrorResume`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorresumerecipe)
* [Refaster template `ReactorRules.MonoOnErrorReturn`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorreturnrecipe)
* [Refaster template `ReactorRules.FluxOnErrorReturn`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorreturnrecipe)
* [Refaster template `ReactorRules.FluxFilterSort`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfiltersortrecipe)
* [Refaster template `ReactorRules.FluxFilterSortWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfiltersortwithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxDistinctSort`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdistinctsortrecipe)
* [Refaster template `ReactorRules.FluxDistinctSortWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdistinctsortwithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxTakeWhile`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtakewhilerecipe)
* [Refaster template `ReactorRules.FluxCollectToImmutableList`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxcollecttoimmutablelistrecipe)
* [Refaster template `ReactorRules.FluxCollectToImmutableSet`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxcollecttoimmutablesetrecipe)
* [Refaster template `ReactorRules.FluxSort`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxsortrecipe)
* [Refaster template `ReactorRules.FluxTransformMin`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformminrecipe)
* [Refaster template `ReactorRules.FluxTransformMinWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformminwithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxTransformMax`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmaxrecipe)
* [Refaster template `ReactorRules.FluxTransformMaxWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmaxwithcomparatorrecipe)
* [Refaster template `ReactorRules.MathFluxMin`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxminrecipe)
* [Refaster template `ReactorRules.MathFluxMax`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxmaxrecipe)
* [Refaster template `ReactorRules.PublisherProbeEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeemptyrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasSubscribed`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwassubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotSubscribed`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotsubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasCancelled`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwascancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotCancelled`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotcancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasRequested`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasrequestedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotRequested`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotrequestedrecipe)
* [Refaster template `ReactorRules.StepVerifierFromMono`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierfrommonorecipe)
* [Refaster template `ReactorRules.StepVerifierFromFlux`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierfromfluxrecipe)
* [Refaster template `ReactorRules.StepVerifierVerify`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifyrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyDuration`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifydurationrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyLater`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifylaterrecipe)
* [Refaster template `ReactorRules.StepVerifierStepExpectNext`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierstepexpectnextrecipe)
* [Refaster template `ReactorRules.FluxAsStepVerifierExpectNext`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifierexpectnextrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyComplete`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifycompleterecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorClass`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorclassrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorMatches`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormatchesrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorSatisfies`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorsatisfiesrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorSatisfiesAssertJ`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorsatisfiesassertjrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorMessage`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormessagerecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyTimeout`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifytimeoutrecipe)
* [Refaster template `ReactorRules.MonoFromFutureSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturesupplierrecipe)
* [Refaster template `ReactorRules.MonoFromFutureSupplierBoolean`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturesupplierbooleanrecipe)
* [Refaster template `ReactorRules.MonoFromFutureAsyncLoadingCacheGet`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetrecipe)
* [Refaster template `ReactorRules.MonoFromFutureAsyncLoadingCacheGetAll`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetallrecipe)
* [Refaster template `ReactorRules.FluxFromStreamSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromstreamsupplierrecipe)
* [Refaster template `ReactorRules.FluxNext`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxnextrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.ReactorRulesRecipes
displayName: `ReactorRules` Refaster recipes
description: |
  Refaster rules related to Reactor expressions and statements. [Source](https://error-prone.picnic.tech/refasterrules/ReactorRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyObjectRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyOptionalRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferMonoJustOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$OptionalMapMonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromOptionalSwitchIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipWithCombinatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithCombinatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableBiFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableMapFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferredErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDeferredErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoErrorSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxErrorSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenReturnRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTakeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDefaultIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDefaultIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTimeoutFluxEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustArrayRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxSwitchIfEmptyOfEmptyPublisherRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFlatMapIterableIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxMapNotNullOrElseRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFluxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenManyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoFluxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenManyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenMonoRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleOptionalRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOfTypeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOfTypeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityWithPrefetchRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromIterableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDoOnErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDoOnErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteClassRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompletePredicateRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompletePredicateRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorContinueRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorContinueRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorMapRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorMapRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorResumeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorResumeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorReturnRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorReturnRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFilterSortRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFilterSortWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDistinctSortRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDistinctSortWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTakeWhileRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxCollectToImmutableListRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxCollectToImmutableSetRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxSortRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMinRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMaxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasSubscribedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotSubscribedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasCancelledRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotCancelledRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasRequestedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotRequestedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromMonoRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromFluxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyLaterRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierStepExpectNextRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierExpectNextRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyCompleteRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorClassRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMatchesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesAssertJRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMessageRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyTimeoutRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierBooleanRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetAllRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromStreamSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxNextRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)
* [Reactor Best Practices](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/reactive/reactor/reactorbestpractices)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.ReactorRulesRecipes"
  displayName="`ReactorRules` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.ReactorRulesRecipes" />

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
