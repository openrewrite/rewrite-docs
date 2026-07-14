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
* [Prefer `Mono#timeout(Duration, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonoemptydurationrecipe)
* [Prefer `Mono#timeout(Duration, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonojustdurationrecipe)
* [Prefer `Mono#timeout(Duration, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationrecipe)
* [Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonoemptypublisherrecipe)
* [Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutmonojustpublisherrecipe)
* [Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less efficient alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublisherrecipe)
* [Refaster template `ReactorRules.MonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyObject`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyobjectrecipe)
* [Refaster template `ReactorRules.MonoJustOrEmptyOptional`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyoptionalrecipe)
* [Refaster template `ReactorRules.MonoDeferMonoJustOrEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodefermonojustoremptyrecipe)
* [Refaster template `ReactorRules.OptionalMapMonoJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$optionalmapmonojustrecipe)
* [Prefer a `Mono#justOrEmpty(Optional)` and `Mono#switchIfEmpty(Mono)` chain over more contrived alternatives](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monojustoremptyswitchifemptyrecipe)
* [Refaster template `ReactorRules.MonoZip`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoziprecipe)
* [Refaster template `ReactorRules.MonoZipMapFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monozipmapfunctionrecipe)
* [Refaster template `ReactorRules.FluxZip`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxziprecipe)
* [Refaster template `ReactorRules.FluxZipMapFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipmapfunctionrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablerecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableWithBiFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablewithbifunctionrecipe)
* [Refaster template `ReactorRules.FluxZipWithIterableMapFunction`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxzipwithiterablemapfunctionrecipe)
* [Refaster template `ReactorRules.MonoErrorThrowable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoerrorthrowablerecipe)
* [Refaster template `ReactorRules.FluxErrorThrowable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxerrorthrowablerecipe)
* [Refaster template `ReactorRules.MonoErrorSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoerrorsupplierrecipe)
* [Refaster template `ReactorRules.FluxErrorSupplier`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxerrorsupplierrecipe)
* [Refaster template `ReactorRules.MonoThenReturn`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenreturnrecipe)
* [Prefer `Flux#take(long)` over `Flux#take(long, boolean)` where relevant](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtakerecipe)
* [Refaster template `ReactorRules.MonoDefaultIfEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxDefaultIfEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdefaultifemptyrecipe)
* [Refaster template `ReactorRules.FluxTimeoutFluxEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtimeoutfluxemptyrecipe)
* [Refaster template `ReactorRules.FluxJust`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustrecipe)
* [Refaster template `ReactorRules.FluxJustVarargs`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustvarargsrecipe)
* [Refaster template `ReactorRules.MonoIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoidentityrecipe)
* [Refaster template `ReactorRules.MonoSingle`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monosinglerecipe)
* [Refaster template `ReactorRules.FluxIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxidentityrecipe)
* [Refaster template `ReactorRules.MonoFlatMapIterableIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoflatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.FluxMapNotNullOptionalOrElseNull`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxmapnotnulloptionalorelsenullrecipe)
* [Refaster template `ReactorRules.MonoFlux`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofluxrecipe)
* [Refaster template `ReactorRules.MonoThen`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenrecipe)
* [Refaster template `ReactorRules.FluxThen`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenrecipe)
* [Refaster template `ReactorRules.MonoThenEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenemptyrecipe)
* [Refaster template `ReactorRules.FluxThenEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenemptyrecipe)
* [Refaster template `ReactorRules.MonoThenMany`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenFlux`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenfluxrecipe)
* [Refaster template `ReactorRules.FluxThenMany`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenmanyrecipe)
* [Refaster template `ReactorRules.MonoThenWithMono`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monothenwithmonorecipe)
* [Refaster template `ReactorRules.FluxThenWithMono`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxthenwithmonorecipe)
* [Refaster template `ReactorRules.MonoSingleOptional`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monosingleoptionalrecipe)
* [Refaster template `ReactorRules.MonoOfType`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monooftyperecipe)
* [Refaster template `ReactorRules.FluxOfType`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxoftyperecipe)
* [Refaster template `ReactorRules.FluxConcatMapIterableIdentity`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxconcatmapiterableidentityrecipe)
* [Refaster template `ReactorRules.FluxConcatMapIterableIdentityWithInt`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxconcatmapiterableidentitywithintrecipe)
* [Refaster template `ReactorRules.FluxFromIterable`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromiterablerecipe)
* [Refaster template `ReactorRules.MonoDoOnError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monodoonerrorrecipe)
* [Refaster template `ReactorRules.FluxDoOnError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdoonerrorrecipe)
* [Refaster template `ReactorRules.MonoOnErrorComplete`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompleterecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompleteWithClass`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletewithclassrecipe)
* [Refaster template `ReactorRules.MonoOnErrorCompleteWithPredicate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoonerrorcompletewithpredicaterecipe)
* [Refaster template `ReactorRules.FluxOnErrorCompleteWithPredicate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxonerrorcompletewithpredicaterecipe)
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
* [Refaster template `ReactorRules.FluxTransformMathFluxMinSingleOrEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxminsingleoremptyrecipe)
* [Refaster template `ReactorRules.FluxTransformMathFluxMinSingleOrEmptyWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxminsingleoremptywithcomparatorrecipe)
* [Refaster template `ReactorRules.FluxTransformMathFluxMaxSingleOrEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxmaxsingleoremptyrecipe)
* [Refaster template `ReactorRules.FluxTransformMathFluxMaxSingleOrEmptyWithComparator`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtransformmathfluxmaxsingleoremptywithcomparatorrecipe)
* [Refaster template `ReactorRules.MathFluxMin`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxminrecipe)
* [Refaster template `ReactorRules.MathFluxMax`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$mathfluxmaxrecipe)
* [Refaster template `ReactorRules.PublisherProbeEmpty`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeemptyrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasSubscribed`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwassubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotSubscribed`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotsubscribedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasCancelled`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwascancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotCancelled`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotcancelledrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasRequested`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasrequestedrecipe)
* [Refaster template `ReactorRules.PublisherProbeAssertWasNotRequested`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$publisherprobeassertwasnotrequestedrecipe)
* [Refaster template `ReactorRules.MonoAsStepVerifierCreate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monoasstepverifiercreaterecipe)
* [Refaster template `ReactorRules.FluxAsStepVerifierCreate`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifiercreaterecipe)
* [Refaster template `ReactorRules.StepVerifierVerify`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifyrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyWithDuration`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifywithdurationrecipe)
* [Refaster template `ReactorRules.StepVerifierVerifyLater`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierverifylaterrecipe)
* [Refaster template `ReactorRules.StepExpectNext`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$stepexpectnextrecipe)
* [Refaster template `ReactorRules.FluxAsStepVerifierCreateExpectNext`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxasstepverifiercreateexpectnextrecipe)
* [Refaster template `ReactorRules.LastStepVerifyComplete`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifycompleterecipe)
* [Refaster template `ReactorRules.LastStepVerifyError`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorrecipe)
* [Refaster template `ReactorRules.LastStepVerifyErrorWithClass`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorwithclassrecipe)
* [Refaster template `ReactorRules.LastStepVerifyErrorMatches`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrormatchesrecipe)
* [Refaster template `ReactorRules.LastStepVerifyErrorSatisfies`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorsatisfiesrecipe)
* [Refaster template `ReactorRules.LastStepVerifyErrorSatisfiesAssertThatIsInstanceOfHasMessage`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrorsatisfiesassertthatisinstanceofhasmessagerecipe)
* [Refaster template `ReactorRules.LastStepVerifyErrorMessage`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifyerrormessagerecipe)
* [Refaster template `ReactorRules.LastStepVerifyTimeout`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$laststepverifytimeoutrecipe)
* [Refaster template `ReactorRules.MonoFromFuture`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturerecipe)
* [Refaster template `ReactorRules.MonoFromFutureWithBoolean`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfuturewithbooleanrecipe)
* [Prefer suppressing `Mono` cancellations to upstream cache value computations over propagating them, as completion of such computations may benefit concurrent or subsequent cache usages](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegettruerecipe)
* [Prefer suppressing `Mono` cancellations to upstream cache value computations over propagating them, as completion of such computations may benefit concurrent or subsequent cache usages](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$monofromfutureasyncloadingcachegetalltruerecipe)
* [Refaster template `ReactorRules.FluxFromStream`](../../../picnic/errorprone/refasterrules/reactorrulesrecipes$fluxfromstreamrecipe)
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
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoEmptyDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoJustDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoEmptyPublisherRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutMonoJustPublisherRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyObjectRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyOptionalRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferMonoJustOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$OptionalMapMonoJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptySwitchIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipMapFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipMapFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableWithBiFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableMapFunctionRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoErrorThrowableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxErrorThrowableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoErrorSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxErrorSupplierRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenReturnRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTakeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDefaultIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDefaultIfEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTimeoutFluxEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustVarargsRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFlatMapIterableIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxMapNotNullOptionalOrElseNullRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFluxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenManyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenFluxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenManyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenWithMonoRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenWithMonoRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleOptionalRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOfTypeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOfTypeRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxConcatMapIterableIdentityRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxConcatMapIterableIdentityWithIntRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromIterableRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDoOnErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDoOnErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteWithClassRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteWithPredicateRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompleteWithPredicateRecipe
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
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMinSingleOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMinSingleOrEmptyWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMaxSingleOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMathFluxMaxSingleOrEmptyWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMinRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMaxRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeEmptyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasSubscribedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotSubscribedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasCancelledRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotCancelledRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasRequestedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotRequestedRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoAsStepVerifierCreateRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierCreateRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyWithDurationRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyLaterRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepExpectNextRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierCreateExpectNextRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyCompleteRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorWithClassRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorMatchesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorSatisfiesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorSatisfiesAssertThatIsInstanceOfHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyErrorMessageRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$LastStepVerifyTimeoutRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureWithBooleanRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetTrueRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetAllTrueRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromStreamRecipe
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
