---
sidebar_label: "`ReactorRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `ReactorRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.ReactorRulesRecipes**

_Refaster rules related to Reactor expressions and statements. [Source](https://error-prone.picnic.tech/refasterrules/ReactorRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `ReactorRules.MonoEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDurationMonoEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDurationMonoJust`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonojustrecipe)
* [Refaster template `ReactorRules.MonoTimeoutDuration`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisherMonoEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonoemptyrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisherMonoJust`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonojustrecipe)
* [Refaster template `ReactorRules.MonoTimeoutPublisher`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublisherrecipe)
* [Refaster template `ReactorRules.MonoJust`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monojustrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyObject`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyobjectrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyOptional`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyoptionalrecipe)
* [Refaster template `ReactorRules.MonoDeferMonoJustOrEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monodefermonojustoremptyrecipe)
* [Refaster template `ReactorRules.OptionalMapMonoJust`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$optionalmapmonojustrecipe)
* [Prefer a `Mono#justOrEmpty(Optional)` and `Mono#switchIfEmpty(Mono)` chain over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromoptionalswitchifemptyrecipe)
* [Refaster template `ReactorRules.MonoZip`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoziprecipe)
* [Refaster template `ReactorRules.MonoZipWithCombinator`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monozipwithcombinatorrecipe)
* [Refaster template `ReactorRules.FluxZip`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxziprecipe)
* [Refaster template `ReactorRules.FluxZipWithCombinator`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithcombinatorrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterable`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablerecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableBiFunction`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablebifunctionrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableMapFunction`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablemapfunctionrecipe)
* [Refaster template `ReactorRules.MonoDeferredError`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monodeferrederrorrecipe)
* [Refaster template `ReactorRules.FluxDeferredError`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdeferrederrorrecipe)
* [Refaster template `ReactorRules.MonoErrorSupplier`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoerrorsupplierrecipe)
* [Refaster template `ReactorRules.FluxErrorSupplier`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxerrorsupplierrecipe)
* [Refaster template `ReactorRules.MonoThenReturn`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenreturnrecipe)
* [Prefer `Flux#take(long)` over `Flux#take(long, boolean)` where relevant](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtakerecipe)
* [Refaster template `ReactorRules.MonoDefaultIfEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monodefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxDefaultIfEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxTimeoutFluxEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtimeoutfluxemptyrecipe)
* [Refaster template `ReactorRules.FluxJust`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustrecipe)
* [Refaster template `ReactorRules.MonoIdentity`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoidentityrecipe)
* [Refaster template `ReactorRules.MonoSingle`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monosinglerecipe)
* [Refaster template `ReactorRules.FluxSwitchIfEmptyOfEmptyPublisher`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxswitchifemptyofemptypublisherrecipe)
* [Refaster template `ReactorRules.MonoFlatMapIterableIdentity`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoflatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.FluxMapNotNullOrElse`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxmapnotnullorelserecipe)
* [Refaster template `ReactorRules.MonoFlux`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofluxrecipe)
* [Refaster template `ReactorRules.MonoThen`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenrecipe)
* [Refaster template `ReactorRules.FluxThen`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenrecipe)
* [Refaster template `ReactorRules.MonoThenEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenemptyrecipe)
* [Refaster template `ReactorRules.FluxThenEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenemptyrecipe)
* [Refaster template `ReactorRules.MonoThenMany`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenMonoFlux`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmonofluxrecipe)
* [Refaster template `ReactorRules.FluxThenMany`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenMono`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmonorecipe)
* [Refaster template `ReactorRules.FluxThenMono`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenmonorecipe)
* [Refaster template `ReactorRules.MonoSingleOptional`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monosingleoptionalrecipe)
* [Refaster template `ReactorRules.MonoOfType`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monooftyperecipe)
* [Refaster template `ReactorRules.FluxOfType`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxoftyperecipe)
* [Refaster template `ReactorRules.ConcatMapIterableIdentity`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$concatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.ConcatMapIterableIdentityWithPrefetch`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$concatmapiterableidentitywithprefetchrecipe)
* [Refaster template `ReactorRules.FluxFromIterable`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromiterablerecipe)
* [Refaster template `ReactorRules.MonoDoOnError`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monodoonerrorrecipe)
* [Refaster template `ReactorRules.FluxDoOnError`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdoonerrorrecipe)
* [Refaster template `ReactorRules.MonoOnErrorComplete`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompleterecipe)
* [Refaster template `ReactorRules.FluxOnErrorComplete`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcompleterecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompleteClass`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompleteclassrecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompletePredicate`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletepredicaterecipe)
* [Refaster template `ReactorRules.FluxOnErrorCompletePredicate`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcompletepredicaterecipe)
* [Refaster template `ReactorRules.MonoOnErrorContinue`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcontinuerecipe)
* [Refaster template `ReactorRules.FluxOnErrorContinue`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcontinuerecipe)
* [Refaster template `ReactorRules.MonoOnErrorMap`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrormaprecipe)
* [Refaster template `ReactorRules.FluxOnErrorMap`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrormaprecipe)
* [Refaster template `ReactorRules.MonoOnErrorResume`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorresumerecipe)
* [Refaster template `ReactorRules.FluxOnErrorResume`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorresumerecipe)
* [Refaster template `ReactorRules.MonoOnErrorReturn`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorreturnrecipe)
* [Refaster template `ReactorRules.FluxOnErrorReturn`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorreturnrecipe)
* [Refaster template `ReactorRules.FluxFilterSort`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfiltersortrecipe)
* [Refaster template `ReactorRules.FluxFilterSortWithComparator`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfiltersortwithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxTakeWhile`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtakewhilerecipe)
* [Refaster template `ReactorRules.FluxCollectToImmutableList`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxcollecttoimmutablelistrecipe)
* [Refaster template `ReactorRules.FluxCollectToImmutableSet`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxcollecttoimmutablesetrecipe)
* [Refaster template `ReactorRules.FluxSort`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxsortrecipe)
* [Refaster template `ReactorRules.FluxTransformMin`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformminrecipe)
* [Refaster template `ReactorRules.FluxTransformMinWithComparator`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformminwithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxTransformMax`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmaxrecipe)
* [Refaster template `ReactorRules.FluxTransformMaxWithComparator`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmaxwithcomparatorrecipe)
* [Refaster template `ReactorRules.MathFluxMin`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxminrecipe)
* [Refaster template `ReactorRules.MathFluxMax`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxmaxrecipe)
* [Refaster template `ReactorRules.PublisherProbeEmpty`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeemptyrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasSubscribed`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwassubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotSubscribed`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotsubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasCancelled`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwascancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotCancelled`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotcancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasRequested`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasrequestedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotRequested`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotrequestedrecipe)
* [Refaster template `ReactorRules.StepVerifierFromMono`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierfrommonorecipe)
* [Refaster template `ReactorRules.StepVerifierFromFlux`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierfromfluxrecipe)
* [Refaster template `ReactorRules.StepVerifierVerify`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifyrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyDuration`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifydurationrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyLater`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifylaterrecipe)
* [Refaster template `ReactorRules.StepVerifierStepExpectNext`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierstepexpectnextrecipe)
* [Refaster template `ReactorRules.FluxAsStepVerifierExpectNext`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifierexpectnextrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyComplete`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifycompleterecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyError`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorClass`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorclassrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorMatches`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormatchesrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorSatisfies`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorsatisfiesrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorSatisfiesAssertJ`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorsatisfiesassertjrecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyErrorMessage`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormessagerecipe)
* [Refaster template `ReactorRules.StepVerifierLastStepVerifyTimeout`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifytimeoutrecipe)
* [Refaster template `ReactorRules.MonoFromFutureSupplier`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturesupplierrecipe)
* [Refaster template `ReactorRules.MonoFromFutureSupplierBoolean`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturesupplierbooleanrecipe)
* [Refaster template `ReactorRules.MonoFromFutureAsyncLoadingCacheGet`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetrecipe)
* [Refaster template `ReactorRules.MonoFromFutureAsyncLoadingCacheGetAll`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetallrecipe)
* [Refaster template `ReactorRules.FluxFromStreamSupplier`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromstreamsupplierrecipe)
* [Refaster template `ReactorRules.FluxNext`](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxnextrecipe)

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
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompleteRecipe
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

* [Reactor Best Practices](/recipes/reactive/reactor/reactorbestpractices.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.ReactorRulesRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.ReactorRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.ReactorRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ReactorRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

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
