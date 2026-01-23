---
description: What's changed in OpenRewrite version 8.72.0.
---

# 8.72.0 release (2026-01-21)

_Total recipe count: 5184_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.53.2`
* Staging CLI version: `v3.55.3`

## New Artifacts

* rewrite-tapestry

## New Recipes

* [io.moderne.devcenter.BuildToolCard](https://docs.openrewrite.org/recipes/devcenter/buildtoolcard): Track build tool versions across repositories. 
* [io.moderne.devcenter.BuildToolStarter](https://docs.openrewrite.org/recipes/devcenter/buildtoolstarter): Track and automate upgrades for Gradle, Maven, and Java versions. 
* [io.moderne.devcenter.VulnerabilitiesDevCenter](https://docs.openrewrite.org/recipes/devcenter/vulnerabilitiesdevcenter): Recipes to analyze and manage dependency vulnerabilities using Moderne DevCenter. 
* [io.moderne.java.jsf.MigrateToJsf_2_3](https://docs.openrewrite.org/recipes/java/jsf/migratetojsf_2_3): Complete migration to JSF 2.3, including associated technologies like RichFaces. Updates dependencies, transforms XHTML views, and migrates Java APIs. 
* [io.moderne.java.jsf.richfaces.ConvertExtendedDataTableHeightToStyle](https://docs.openrewrite.org/recipes/java/jsf/richfaces/convertextendeddatatableheighttostyle): Converts height and width attributes to inline style attribute for RichFaces `extendedDataTable` components. 
* [io.moderne.java.jsf.richfaces.MigrateRichFaces_4_5](https://docs.openrewrite.org/recipes/java/jsf/richfaces/migraterichfaces_4_5): Complete RichFaces 3.x to 4.5 migration including tag renames, attribute migrations, and Java API updates. 
* [io.moderne.java.jsf.richfaces.update45.UpdateXHTMLTags](https://docs.openrewrite.org/recipes/java/jsf/richfaces/update45/updatexhtmltags): Migrate RichFaces tags in `xhtml` files to RichFaces 4. 
* [io.moderne.java.spring.framework.MigrateDeprecatedBeanXmlProperties](https://docs.openrewrite.org/recipes/java/spring/framework/migratedeprecatedbeanxmlproperties): Migrate Bean XML properties that were deprecated in Spring Framework 3.0. 
* [io.moderne.java.spring.framework.UpgradeSpringFramework_3_0](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_3_0): Migrate applications to the latest Spring Framework 3 release, pulling in additional proprietary Moderne recipes. 
* [io.moderne.java.spring.framework.UpgradeSpringFramework_5_3](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_5_3-moderne-edition): Migrate applications to the latest Spring Framework 5.3 release, pulling in additional proprietary Moderne recipes. 
* [io.moderne.java.spring.security7.MigrateOAuth2AccessTokenResponseClient](https://docs.openrewrite.org/recipes/java/spring/security7/migrateoauth2accesstokenresponseclient): A new set of `OAuth2AccessTokenResponseClient` implementations were introduced based on `RestClient`. This recipe replaces the `RestOperations`-based implementations which have been deprecated. The `RestClient` implementations are drop-in replacements for the deprecated implementations. 
* [io.quarkus.updates.camel.camel410_4.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel410_4/camelquarkusmigrationrecipe): Migrates `camel 4.10` quarkus application to `camel 4.10.4`. 
* [io.quarkus.updates.camel.camel416.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel416/camelquarkusmigrationrecipe): Migrates `camel 4.15` Quarkus application to `camel 4.16`. 
* [io.quarkus.updates.camel.camel417.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel417/camelquarkusmigrationrecipe): Migrates `camel 4.16` Quarkus application to `camel 4.17`. 
* [io.quarkus.updates.core.quarkus331.OidcClientFilterSplitPackagesFix](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/oidcclientfiltersplitpackagesfix):  
* [org.apache.camel.upgrade.camel417.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel417/camelmigrationrecipe): Migrates `camel 4.16` application to `camel 4.17`. 
* [org.apache.camel.upgrade.camel417.YamlTransform417Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel417/yamltransform417recipe): Apache Camel YML DSL migration from version 4.16 o 4.17. 
* [org.openrewrite.apache.commons.lang3.MigrateSystemUtilsDeprecations](https://docs.openrewrite.org/recipes/apache/commons/lang3/migratesystemutilsdeprecations): Replaces deprecated constants in org.apache.commons.lang3.SystemUtils with their recommended replacements (e.g., File.separator, System.lineSeparator()). 
* [org.openrewrite.codemods.migrate.angular.v20](https://docs.openrewrite.org/recipes/codemods/migrate/angular/v20): Upgrade to Angular v20 through `ApplyAngularCLI`. 
* [org.openrewrite.codemods.migrate.angular.v21](https://docs.openrewrite.org/recipes/codemods/migrate/angular/v21): Upgrade to Angular v21 through `ApplyAngularCLI`. 
* [org.openrewrite.java.migrate.lang.var.UseVarForTypeCast](https://docs.openrewrite.org/recipes/java/migrate/lang/var/usevarfortypecast): Apply local variable type inference `var` to variables that are initialized by a cast expression where the cast type matches the declared variable type. This removes the redundant type duplication. For example, `String s = (String) obj;` becomes `var s = (String) obj;`. 
* [org.openrewrite.java.migrate.search.FindLocaleDateTimeFormats](https://docs.openrewrite.org/recipes/java/migrate/search/findlocaledatetimeformats): Finds usages of locale-based date/time formatting APIs that may be affected by JDK 20+ CLDR locale data changes, where the space before AM/PM was changed from a regular space to a narrow no-break space (NNBSP). 
* [org.openrewrite.java.recipes.UseDisplayNameAndDescriptionFields](https://docs.openrewrite.org/recipes/java/recipes/usedisplaynameanddescriptionfields): Recipe classes that return a simple string literal (or concatenation of string literals) from `getDisplayName()` or `getDescription()` can use Lombok annotated fields instead. 
* [org.openrewrite.java.recipes.UseEstimatedEffortPerOccurrenceField](https://docs.openrewrite.org/recipes/java/recipes/useestimatedeffortperoccurrencefield): Recipe classes that return a simple expression from `getEstimatedEffortPerOccurrence()` can use a Lombok annotated field instead. 
* [org.openrewrite.java.recipes.UseStringUtilsRecipes](https://docs.openrewrite.org/recipes/java/recipes/usestringutilsrecipes): Replaces common string null and empty checks with `org.openrewrite.internal.StringUtils` utility methods. 
* [org.openrewrite.java.recipes.UseStringUtilsRecipes$StringUtilsIsBlankRecipe](https://docs.openrewrite.org/recipes/java/recipes/usestringutilsrecipes$stringutilsisblankrecipe): Replace `str == null || str.trim().isEmpty()` with `StringUtils.isBlank(str)`. 
* [org.openrewrite.java.recipes.UseStringUtilsRecipes$StringUtilsIsNotBlankRecipe](https://docs.openrewrite.org/recipes/java/recipes/usestringutilsrecipes$stringutilsisnotblankrecipe): Replace `str != null && !str.trim().isEmpty()` with `!StringUtils.isBlank(str)`. 
* [org.openrewrite.java.recipes.UseStringUtilsRecipes$StringUtilsIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/java/recipes/usestringutilsrecipes$stringutilsisnotemptyrecipe): Replace `str != null && !str.isEmpty()` with `StringUtils.isNotEmpty(str)`. 
* [org.openrewrite.java.recipes.UseStringUtilsRecipes$StringUtilsIsNullOrEmptyRecipe](https://docs.openrewrite.org/recipes/java/recipes/usestringutilsrecipes$stringutilsisnulloremptyrecipe): Replace `str == null || str.isEmpty()` with `StringUtils.isNullOrEmpty(str)`. 
* [org.openrewrite.java.recipes.UseTagsField](https://docs.openrewrite.org/recipes/java/recipes/usetagsfield): Recipe classes that return a simple expression from `getTags()` can use a Lombok annotated field instead. 
* [org.openrewrite.java.spring.boot4.AddAutoConfigureTestRestTemplate](https://docs.openrewrite.org/recipes/java/spring/boot4/addautoconfiguretestresttemplate): Adds `@AutoConfigureTestRestTemplate` to test classes annotated with `@SpringBootTest` that use `TestRestTemplate` since this bean is no longer auto-configured as described in the [Spring Boot 4 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide#using-webclient-or-testresttemplate-and-springboottest). 
* [org.openrewrite.java.spring.kafka.UpgradeSpringKafka_2_8_ErrorHandlers](https://docs.openrewrite.org/recipes/java/spring/kafka/upgradespringkafka_2_8_errorhandlers): Migrate error handlers deprecated in Spring Kafka `2.8.x` to their replacements. 
* [org.openrewrite.java.spring.kafka.UpgradeSpringKafka_4_0](https://docs.openrewrite.org/recipes/java/spring/kafka/upgradespringkafka_4_0): Migrate applications to the latest Spring Kafka 4.0 release. 
* [org.openrewrite.java.spring.opentelemetry.MigrateBraveToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratebravetoopentelemetry): Migrate Java code using Brave (Zipkin) tracing API to OpenTelemetry API. This recipe handles the migration of Brave Tracer, Span, and related classes to OpenTelemetry equivalents. 
* [org.openrewrite.java.spring.opentelemetry.MigrateDatadogToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratedatadogtoopentelemetry): Migrate from Datadog Java tracing annotations to OpenTelemetry annotations. Replace Datadog @Trace annotations with @WithSpan annotations. 
* [org.openrewrite.java.spring.opentelemetry.MigrateFromZipkinToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratefromzipkintoopentelemetry): Migrate from Zipkin tracing to OpenTelemetry OTLP. This recipe replaces Zipkin dependencies with OpenTelemetry OTLP exporter and updates the related configuration properties. 
* [org.openrewrite.java.spring.opentelemetry.MigrateNewRelicToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratenewrelictoopentelemetry): Migrate from New Relic Java Agent annotations to OpenTelemetry annotations. Replace @Trace annotations with @WithSpan annotations. 
* [org.openrewrite.java.spring.opentelemetry.MigrateOpenTracingToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migrateopentracingtoopentelemetry): Migrate Java code using OpenTracing API to OpenTelemetry API. OpenTracing has been superseded by OpenTelemetry and is no longer actively maintained. 
* [org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratesleuthtoopentelemetry): Migrate from Spring Cloud Sleuth to OpenTelemetry. [Spring Cloud Sleuth has been deprecated](https://github.com/spring-cloud/spring-cloud-sleuth#spring-cloud-sleuth) and is replaced by Micrometer Tracing with OpenTelemetry as a backend. This recipe removes Sleuth dependencies and adds OpenTelemetry instrumentation. 
* [org.openrewrite.java.spring.opentelemetry.MigrateToOpenTelemetry](https://docs.openrewrite.org/recipes/java/spring/opentelemetry/migratetoopentelemetry): Comprehensive migration to OpenTelemetry including dependencies, configuration properties, and Java code changes. This recipe handles migration from Spring Cloud Sleuth, Brave/Zipkin, and OpenTracing to OpenTelemetry. 
* [org.openrewrite.java.testing.junit5.AssumeNotNullToAssumptionsRecipes](https://docs.openrewrite.org/recipes/java/testing/junit5/assumenotnulltoassumptionsrecipes): Transform `Assume` methods without a direct counterpart to equivalent assumptions in `Assumptions`. 
* [org.openrewrite.java.testing.junit5.AssumeNotNullToAssumptionsRecipes$SingleArgRecipe](https://docs.openrewrite.org/recipes/java/testing/junit5/assumenotnulltoassumptionsrecipes$singleargrecipe): Transform singlar `Assume.assumeNotNull(object)` to `Assumptions.assumeFalse(object == null)`. 
* [org.openrewrite.java.testing.junit5.AssumeNotNullToAssumptionsRecipes$VarArgsRecipe](https://docs.openrewrite.org/recipes/java/testing/junit5/assumenotnulltoassumptionsrecipes$varargsrecipe): Transform `Assume.assumeNotNull(objects...)` to `Stream.of(object1, object2).forEach(o -> Assumptions.assumeFalse(o == null))`. 
* [org.openrewrite.maven.ChangeExclusion](https://docs.openrewrite.org/recipes/maven/changeexclusion): Modify Maven dependency exclusions, changing the group ID, artifact Id, or both. Useful when an excluded dependency has been renamed and references to it must be updated. 
* [org.openrewrite.openapi.swagger.MigrateApiParamAllowableValues](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiparamallowablevalues): Migrate `@ApiParam(allowableValues)` to `@Parameter(schema = @Schema(allowableValues))`. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_29_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_29_0): Quarkus update recipes to upgrade your application to 3.29.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_30_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_30_0): Quarkus update recipes to upgrade your application to 3.30.0. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_31_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_31_0): Quarkus update recipes to upgrade your application to 3.31.0. 
* [org.openrewrite.tapestry.ChangeTapestryPackages](https://docs.openrewrite.org/recipes/tapestry/changetapestrypackages): Updates package imports from org.apache.tapestry to org.apache.tapestry5. Only renames packages that have direct equivalents in Tapestry 5. 
* [org.openrewrite.tapestry.ChangeTapestryTypes](https://docs.openrewrite.org/recipes/tapestry/changetapestrytypes): Renames Tapestry 4 types that have direct equivalents in Tapestry 5. This handles types from different packages that were reorganized in T5. 
* [org.openrewrite.tapestry.ConvertAnnotatedMethodToField](https://docs.openrewrite.org/recipes/tapestry/convertannotatedmethodtofield): Converts abstract getter methods annotated with `sourceAnnotation` to private fields annotated with `targetAnnotation`. 
* [org.openrewrite.tapestry.ConvertBeanAnnotation](https://docs.openrewrite.org/recipes/tapestry/convertbeanannotation): Converts Tapestry 4's `@Bean` annotation to `@Property` fields. Bean initialization with 'initializer' attribute requires manual migration. 
* [org.openrewrite.tapestry.ConvertListenerInterfaces](https://docs.openrewrite.org/recipes/tapestry/convertlistenerinterfaces): Converts Tapestry 4 page lifecycle listener interfaces (`PageBeginRenderListener`, `PageEndRenderListener`, etc.) to Tapestry 5 lifecycle annotations (`@SetupRender`, `@CleanupRender`, etc.) and removes the interface implementations. 
* [org.openrewrite.tapestry.MigrateTapestry4To5](https://docs.openrewrite.org/recipes/tapestry/migratetapestry4to5): Migrates Apache Tapestry 4 applications to Tapestry 5. This includes package renames, removing base class inheritance, converting listener interfaces to annotations, and updating dependencies. 
* [org.openrewrite.tapestry.RemoveIRequestCycleParameter](https://docs.openrewrite.org/recipes/tapestry/removeirequestcycleparameter): Removes `IRequestCycle` parameters from methods. In Tapestry 5, event handler methods don't receive the request cycle as a parameter. 
* [org.openrewrite.tapestry.RemoveObsoleteFormTypes](https://docs.openrewrite.org/recipes/tapestry/removeobsoleteformtypes): Removes field declarations and imports for Tapestry 4 form component types (`IPropertySelectionModel`, `StringPropertySelectionModel`, etc.) that don't exist in Tapestry 5. Code using these types will need manual refactoring to use Tapestry 5's `SelectModel` pattern. 
* [org.openrewrite.tapestry.RemoveTapestryBaseClasses](https://docs.openrewrite.org/recipes/tapestry/removetapestrybaseclasses): Removes Tapestry 4 base class inheritance (`BasePage`, `BaseComponent`, `AbstractComponent`) and converts the class to a POJO suitable for Tapestry 5. Abstract getter/setter methods are converted to fields with `@Property` annotation. 
* [org.openrewrite.tapestry.ReplaceReverseComparator](https://docs.openrewrite.org/recipes/tapestry/replacereversecomparator): Replaces tapestry-contrib's `ReverseComparator` with the standard Java `Collections.reverseOrder()` method. 
* [org.openrewrite.tapestry.UpdateTapestryDependencies](https://docs.openrewrite.org/recipes/tapestry/updatetapestrydependencies): Updates dependencies from Tapestry 4 to Tapestry 5. 
* [org.openrewrite.xml.ChangeTagAttributeKey](https://docs.openrewrite.org/recipes/xml/changetagattributekey): Change an attributes key on XML elements using an XPath expression. 
* [tech.picnic.errorprone.refasterrules.AllRefasterRules](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/allrefasterrules): Collection of all Refaster rules from Picnic's error-prone-contrib project. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatHasSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthathassizerecipe): Recipe created for the following Refaster template. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatisemptyrecipe): Recipe created for the following Refaster template. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatisnotemptyrecipe): Recipe created for the following Refaster template. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes): Refaster rules related to expressions dealing with `Deque` instances.
[Source](https://error-prone.picnic.tech/refasterrules/DequeRules). 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeAddFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequeaddfirstrecipe): Prefer `Deque#addLast(Object)` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeDescendingIteratorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequedescendingiteratorrecipe): Prefer `Deque#descendingIterator()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeGetFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequegetfirstrecipe): Prefer `Deque#pollFirst()` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeIteratorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequeiteratorrecipe): Prefer `Deque#iterator()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeOfferLastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequeofferlastrecipe): Prefer `Deque#offerLast(Object)` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequePeekFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequepeekfirstrecipe): Prefer `Deque#peekFirst()` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequePollFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequepollfirstrecipe): Prefer `Deque#pollFirst()` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeRemoveFirstOccurrenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequeremovefirstoccurrencerecipe): Prefer `Deque#removeFirstOccurrence(Object)` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.DequeRulesRecipes$DequeRemoveFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/dequerulesrecipes$dequeremovefirstrecipe): Prefer `Deque#removeFirst()` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapBuilderPutRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes$immutablelistmultimapbuilderputrecipe): Prefer `ImmutableListMultimap.Builder#put(Object, Object)` over more contrived or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderPutRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapbuilderputrecipe): Prefer `ImmutableMap.Builder#put(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapBuilderPutRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes$immutablesetmultimapbuilderputrecipe): Prefer `ImmutableSetMultimap.Builder#put(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableBuilderPutRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipes$immutabletablebuilderputrecipe): Prefer `ImmutableTable.Builder#put(Object, Object, Object)` over more contrived alternatives. 

## Removed Recipes

* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamHasSizeRecipe**: Recipe created for the following Refaster template.
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsEmptyRecipe**: Recipe created for the following Refaster template. 
* **tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsNotEmptyRecipe**: Recipe created for the following Refaster template. 

## Changed Recipes

* [org.openrewrite.java.dependencies.RemoveUnusedDependencies](https://docs.openrewrite.org/recipes/java/dependencies/removeunuseddependencies) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `ignoredDependencies: { type: List, required: false }`
