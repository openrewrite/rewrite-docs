---
description: Mockito OpenRewrite recipes.
---

# Mockito

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Mockito 3.x migration from 1.x](./mockito1to3migration.md)
* [Mockito 4 to 5.x upgrade only](./mockito4to5only.md)
* [Mockito 4.x upgrade](./mockito1to4migration.md)
* [Mockito 5.x upgrade](./mockito1to5migration.md)
* [Mockito best practices](./mockitobestpractices.md)
* [Replace PowerMock with raw Mockito](./replacepowermockito.md)

## Recipes

* [Add mockito-junit-jupiter dependency](./addmockitojupiterdependency.md)
* [Adds Mockito extensions to Mockito tests](./addmockitoextensionifannotationsused.md)
* [Call to Mockito method &quot;verify&quot;, &quot;when&quot; or &quot;given&quot; should be simplified](./simplifymockitoverifywhengiven.md)
* [Cleanup Mockito imports](./cleanupmockitoimports.md)
* [Cleanup PowerMock imports](./cleanuppowermockimports.md)
* [Close unclosed static mocks](./closeunclosedstaticmocks.md)
* [Convert `ArgumentMatcher&lt;T&gt;` anonymous class to lambda](./argumentmatchertolambda.md)
* [JUnit 4 MockitoJUnitRunner.Silent to JUnit Jupiter MockitoExtension with LENIENT settings](./mockitojunitrunnersilenttoextension.md)
* [Remove `Mockito.times(0)` and `Mockito.times(1)`](./removetimeszeroandone.md)
* [Remove `MockitoAnnotations.initMocks(this)` and `openMocks(this)` if JUnit runners specified](./removeinitmocksifrunnersspecified.md)
* [Remove PowerMock class extensions](./removepowermockclassextensions.md)
* [Remove `doNothing()` for void methods on `@Mock` fields](./removedonothingfordefaultmocks.md)
* [Replace JUnit 4 MockitoJUnitRunner with junit-jupiter MockitoExtension](./mockitojunitrunnertoextension.md)
* [Replace Mockito 1.x `anyString()` with `nullable(String.class)`](./anystringtonullable.md)
* [Replace Mockito 1.x `anyString()`/`any()` with `nullable(Class)`](./anytonullable.md)
* [Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic](./mockitowhenonstatictomockstatic.md)
* [Replace `MockitoAnnotations.initMocks(this)` to `MockitoAnnotations.openMocks(this)`](./replaceinitmocktoopenmock.md)
* [Replace `MockitoTestExecutionListener` (JUnit 4 projects)](./replacemockitotestexecutionlistenerforjunit4.md)
* [Replace `MockitoTestExecutionListener` (JUnit Jupiter projects)](./replacemockitotestexecutionlistenerforjupiter.md)
* [Replace `MockitoTestExecutionListener` (TestNG projects)](./replacemockitotestexecutionlistenerfortestng.md)
* [Replace `MockitoTestExecutionListener` with the equivalent Mockito test initialization](./replacemockitotestexecutionlistener.md)
* [Replace PowerMock `Whitebox` with Java reflection](./powermockwhiteboxtojavareflection.md)
* [Replace PowerMock dependencies with Mockito equivalents](./replacepowermockdependencies.md)
* [Replace PowerMock runner with JUnit `@RunWith`](./powermockrunnerdelegatetorunwith.md)
* [Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`](./powermockitomockstatictomockito.md)
* [Replace PowerMockito `doX().when(instance, &quot;method&quot;)` with Mockito-compatible stubbing](./powermockitodostubbingtomockito.md)
* [Replace `PowerMockito.whenNew` with Mockito counterpart](./powermockitowhennewtomockito.md)
* [Replace undeclared checked exceptions in `thenThrow` with `RuntimeException`](./thenthrowcheckedexceptiontoruntimeexception.md)
* [Replace `verifyZeroInteractions()` with `verifyNoMoreInteractions()`](./verifyzerotonomoreinteractions.md)
* [Use static form of Mockito `MockUtil`](./mockutilstostatic.md)
* [Wrap `MockedConstruction` in try-with-resources](./mockconstructiontotrywithresources.md)


