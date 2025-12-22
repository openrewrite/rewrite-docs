---
description: Micronaut OpenRewrite recipes.
---

# Micronaut

_Recipes for upgrading and patching [Micronaut](https://micronaut.io/) applications._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add Micronaut build plugins to 4.x](./updatebuildplugins.md)
* [Migrate from Micronaut 2.x to 3.x](./micronaut2to3migration.md)
* [Migrate from Micronaut 3.x to 4.x](./micronaut3to4migration.md)
* [Update jakarta annotations dependency](./updatejakartaannotations.md)
* [Update relocated Micronaut Security config properties](./updatesecuritypropertiesifneeded.md)
* [Update relocated Micronaut Security config yaml keys](./updatesecurityyamlifneeded.md)
* [Update the Micronaut Data library](./updatemicronautdata.md)
* [Update the Micronaut Security library](./updatemicronautsecurity.md)
* [Update the Micronaut Session support](./updatemicronautsession.md)
* [Update the Micronaut version to 4.x](./updatebuildtomicronaut4version.md)
* [Update the version of core annotation processors](./updatemavenannotationprocessors.md)
* [Update to Micronaut Email 2.x](./updatemicronautemail.md)
* [Update to Micronaut Validation 4.x](./updatemicronautvalidation.md)

## Recipes

* [Add `@Introspected` to classes requiring a map representation](./typerequiresintrospection.md)
* [Add `HttpRequest` type parameter for implemented interfaces](./addhttprequesttypeparameter.md)
* [Add Maven annotation processor path](./addannotationprocessorpath.md)
* [Add `micronaut-test-resources-client` if needed](./addtestresourcesclientdependencyifneeded.md)
* [Add `snakeyaml` dependency if needed](./addsnakeyamldependencyifneeded.md)
* [Change Maven annotation processor path](./changeannotationprocessorpath.md)
* [Change factory method return types to reflect their resolved return type](./subclassesreturnedfromfactoriesnotinjectable.md)
* [Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`](./onceperrequesthttpserverfiltertohttpserverfilter.md)
* [Copy non-inherited annotations from super class](./copynoninheritedannotations.md)
* [De-capitalize `BeanIntrospection` `getProperty(..)` and `getRequiredProperty(..)` name arguments](./beanpropertycapitalizationstrategy.md)
* [Find Micronaut properties config](./findpropertiesconfig.md)
* [Find Micronaut yaml config](./findyamlconfig.md)
* [Fix deprecated no-arg `ExceptionHandler` constructors](./fixdeprecatedexceptionhandlerconstructors.md)
* [Migrate the use of TaskExecutors with blocking IO](./updateblockingtaskexecutors.md)
* [`Provider` implementation beans to Micronaut `@Factory`](./providerimplementationstomicronautfactories.md)
* [Remove Maven annotation processor path](./removeannotationprocessorpath.md)
* [Remove unnecessary dependencies](./removeunnecessarydependencies.md)
* [Remove withJansi Logback configuration](./removewithjansilogbackconfiguration.md)
* [Update the Micronaut Retry support](./addmicronautretrydependencyifneeded.md)
* [Update the Micronaut Websocket support](./addmicronautwebsocketdependencyifneeded.md)
* [Update to Micronaut 4.x platform BOM](./updatemicronautplatformbom.md)
* [Upgrade gradle.properties Micronaut version](./upgrademicronautgradlepropertiesversion.md)
* [Upgrade `micronaut.version` Maven property](./upgrademicronautmavenpropertyversion.md)


