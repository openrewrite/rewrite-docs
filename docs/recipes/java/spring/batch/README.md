---
description: Spring Batch OpenRewrite recipes.
---

# Spring Batch

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Spring Batch 5.0 from 4.3](./springbatch4to5migration.md)
* [Migrate to Spring Batch 6.0 from 5.2](./springbatch5to6migration.md)
* [Transform classes that extend `*ListenerSupport` to implement the `*Listener` interfaces instead](./listenersupportclasstointerface.md)

## Recipes

* [Add class argument to `JobParameters`](./migratejobparameter.md)
* [Change the type of `skipCount` parameter in `SkipPolicy` from `int` to `long`](./upgradeskippolicyparametertype.md)
* [Convert receive type in some invocation of StepExecution.xx()](./convertreceivetypewhencallstepexecutionmethod.md)
* [Migrate `ItemWriter`](./migrateitemwriterwrite.md)
* [Migrate `JobBuilderFactory` to `JobBuilder`](./migratejobbuilderfactory.md)
* [Migrate `StepBuilderFactory` to `StepBuilder`](./migratestepbuilderfactory.md)
* [Migrate method when it annotated by Spring Batch API](./migratemethodannotatedbybatchapi.md)
* [Migration invocation of JobParameter.toString to JobParameter.getValue.toString](./jobparametertostring.md)
* [Remove `DefaultBatchConfigurer`](./removedefaultbatchconfigurer.md)
* [Transform classes that extend a given Class to implement the given Interface instead](./replacesupportclasswithitsinterface.md)


