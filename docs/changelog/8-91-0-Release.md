---
description: What's changed in OpenRewrite version 8.91.0.
---

# 8.91.0 release (2026-08-26)

_Total recipe count: 4142_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* CLI version `4.7.0`

## Removed Artifacts

* rewrite-analysis

## New Recipes

* [io.quarkus.updates.core.quarkus339.ChangeGradleAnnotationProcessorDependency](https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/changegradleannotationprocessordependency): Change the groupId and artifactId of a Gradle annotation processor dependency, remove any explicit version, and add an enforcedPlatform for the Quarkus BOM if the old dependency had a version and no platform was present. 
* [io.quarkus.updates.core.quarkus339.QuarkusDataHibernateRenames](https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/quarkusdatahibernaterenames): Migrate from `io.quarkus.hibernate.panache` to `io.quarkus.data.hibernate` package and rename Panache types to Quarkus Data types. 
* [io.quarkus.updates.core.quarkus339.ReplaceHibernateProcessorAnnotationProcessor](https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/replacehibernateprocessorannotationprocessor):  
* [io.quarkus.updates.core.quarkus339.ReplaceNewJpaModelgenAnnotationProcessor](https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/replacenewjpamodelgenannotationprocessor):  
* [io.quarkus.updates.core.quarkus339.ReplaceOldJpaModelgenAnnotationProcessor](https://docs.openrewrite.org/recipes/quarkus/updates/core/quarkus339/replaceoldjpamodelgenannotationprocessor):  
* [org.openrewrite.apache.ApacheBestPractices](https://docs.openrewrite.org/recipes/apache/apachebestpractices): Apply best practices to code that uses [Apache](https://apache.org/) libraries. This migrates Apache Commons, [HttpClient](https://hc.apache.org/) and [POI](https://poi.apache.org/) off their end-of-life major versions, replaces deprecated APIs with their supported replacements, and prefers the Java standard library where it now offers an equivalent. 
* [org.openrewrite.apache.commons.ApacheCommonsBestPractices](https://docs.openrewrite.org/recipes/apache/commons/apachecommonsbestpractices): Apply best practices to code that uses [Apache Commons](https://commons.apache.org/) libraries: migrate off the end-of-life Commons Lang 2.x, Commons Collections 3.x and Commons Math 2.x major versions, correct the `commons-io` coordinates, replace deprecated APIs with their supported replacements, make character encodings explicit, and prefer the Java standard library where it now offers an equivalent. 
* [org.openrewrite.github.AddMergeGroupTrigger](https://docs.openrewrite.org/recipes/github/addmergegrouptrigger): Trigger workflows for pull requests queued in a [merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue). 
* [org.openrewrite.github.IsGitHubActionsFile](https://docs.openrewrite.org/recipes/github/isgithubactionsfile): Checks if the file is either a GitHub Actions workflow file, or a GitHub Action definition (`action.yml`). Steps, and the `uses:` references within them, appear in both, so prefer this over `IsGitHubActionsWorkflow` as a precondition for any recipe that operates on steps. Recipes that read workflow-only keys such as `on:`, `permissions:`, `runs-on:` or `needs:` should keep the narrower `IsGitHubActionsWorkflow`. 
* [org.openrewrite.github.ReplaceAlwaysWithSuccessOrFailure](https://docs.openrewrite.org/recipes/github/replacealwayswithsuccessorfailure): Replace `always()` in GitHub Actions job and step conditions with `success() || failure()` so that canceled workflows do not continue running or hang until they time out. Note that teardown steps deliberately using `always()` to still run on cancellation will no longer run. 
* [org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners](https://docs.openrewrite.org/recipes/github/replacedependabotreviewerswithcodeowners): Replaces the [removed](https://github.blog/changelog/2025-04-29-dependabot-reviewers-configuration-option-being-replaced-by-code-owners/) `reviewers` option in `.github/dependabot.yml` with equivalent `CODEOWNERS` entries. Each reviewer is mapped onto the manifest files Dependabot updates for that `package-ecosystem` and `directory`, so ownership stays as narrow as the Dependabot configuration was. Update entries whose `package-ecosystem` has no known manifests are left untouched. 
* [org.openrewrite.github.SetupPythonUpgradePythonVersion](https://docs.openrewrite.org/recipes/github/setuppythonupgradepythonversion): Update the Python version used by `actions/setup-python` if it is below the expected version number. 
* [org.openrewrite.java.migrate.DanglingDocCommentToBlockComment](https://docs.openrewrite.org/recipes/java/migrate/danglingdoccommenttoblockcomment): A documentation comment that does not precede a declaration documents nothing, and since Java 22 `-Xlint:dangling-doc-comments` warns about it, which fails any build using `-Werror`. Changing `/**` to `/*` keeps the text and silences the warning. A documentation comment that is attached to a declaration is left alone. 
* [org.openrewrite.java.netty.upgrade._3_2_to_4_1_.ChangeMessageEventParameterToObject](https://docs.openrewrite.org/recipes/java/netty/upgrade/_3_2_to_4_1_/changemessageeventparametertoobject): Replaces the `MessageEvent` parameter of `channelRead` handler methods with `Object`, as Netty 4 passes the message itself rather than an event. 
* [org.openrewrite.java.recipes.InlineNestedVisitorClass](https://docs.openrewrite.org/recipes/java/recipes/inlinenestedvisitorclass): Recipes that return a named, private, static nested visitor class straight from `getVisitor()` (or `getScanner()`) can declare that visitor anonymously instead, which keeps the visitor next to the recipe metadata that configures it. Any `private static final` constants the nested class declares are hoisted onto the recipe class, as anonymous classes can not declare them. Only applied when the nested class is used exactly once, and when nothing would be lost by inlining it. 
* [org.openrewrite.java.spring.boot4.AddModularStarterDependencies](https://docs.openrewrite.org/recipes/java/spring/boot4/addmodularstarterdependencies): Adds the Spring Boot 4.0 modular starter dependencies implied by a module's Spring Boot 3 package usage, without relocating any source. Split out from `MigrateToModularStarters` so that it can be sequenced ahead of `MigrateAutoconfigurePackages` when composed into a larger migration. 
* [org.openrewrite.java.spring.doc.NormalizeSpringfoxPathSelectorsRegexToAnt](https://docs.openrewrite.org/recipes/java/spring/doc/normalizespringfoxpathselectorsregextoant): Springdoc's `GroupedOpenApi.pathsToMatch(...)` accepts Ant-style patterns, not Java regex. This recipe rewrites `PathSelectors.regex(...)` calls whose literal argument is a literal path prefix followed by `.*` (optionally anchored with `^`/`$`) into the equivalent `PathSelectors.ant(...)` call, so downstream Docket-to-GroupedOpenApi migration can translate the path. Regex patterns that use metacharacters, alternation, or character classes are left unchanged. 
* [org.openrewrite.java.spring.framework.MoveConnectTimeoutToConnectionConfig](https://docs.openrewrite.org/recipes/java/spring/framework/moveconnecttimeouttoconnectionconfig): Moves `setConnectTimeout(int)` to the Apache HttpClient `ConnectionConfig` when the local `PoolingHttpClientConnectionManager` is used by the `HttpComponentsClientHttpRequestFactory`. 
* [org.openrewrite.java.testing.junit5.JUnitSoftAssertionsToSoftAssertionsExtension](https://docs.openrewrite.org/recipes/java/testing/junit5/junitsoftassertionstosoftassertionsextension): Replaces `@Rule` fields of type `JUnitSoftAssertions` or `JUnitBDDSoftAssertions` with `@InjectSoftAssertions` fields, and registers `@ExtendWith(SoftAssertionsExtension.class)` on the test class. JUnit Jupiter does not run JUnit 4 rules, so soft assertions collected through such a rule would otherwise never be reported, silently passing tests that ought to fail. 
* [org.openrewrite.json.RemoveEmptyKeys](https://docs.openrewrite.org/recipes/json/removeemptykeys): Remove mapping entries whose value is an empty object or array, such as those left behind by `DeleteKey`. Entries are removed from the inside out, so a chain of objects holding nothing but the removed entry is removed entirely. Array elements are left alone, since removing one shifts the indexes of its siblings. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_39_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_39_0): Quarkus update recipes to upgrade your application to 3.39.0. 
* [org.openrewrite.staticanalysis.RemoveDuplicateAnnotations](https://docs.openrewrite.org/recipes/staticanalysis/removeduplicateannotations): Remove annotations that are repeated on the same element, keeping only the first occurrence. Duplicates typically arise when several distinct annotations are migrated to a single new annotation, such as when both `javax.annotation.Nullable` and `javax.annotation.CheckForNull` become `org.jspecify.annotations.Nullable`. `@Repeatable` annotations are left alone, as repeating those is meaningful. 
* [org.openrewrite.staticanalysis.RemoveNoArgumentSuperConstructorCall](https://docs.openrewrite.org/recipes/staticanalysis/removenoargumentsuperconstructorcall): The compiler inserts a call to the no argument constructor of the super class when a constructor does not start with an explicit `this()` or `super(..)` call, which makes writing out `super();` redundant. 
* [org.openrewrite.staticanalysis.UseMapEntrySetIteration](https://docs.openrewrite.org/recipes/staticanalysis/usemapentrysetiteration): A loop over `map.keySet()` that calls `map.get(key)` hashes and probes the map again for every element, which on a `TreeMap` costs an extra `O(log n)` lookup per iteration. Iterating `map.entrySet()` instead hands the loop both the key and the value. The loop is only rewritten when:
 - The map is a simple reference that is neither modified nor reassigned inside the loop.
 - `get` is called only with the loop variable.
 - The loop variable is neither reassigned nor captured by a lambda or anonymous class.

Every candidate loop, converted or not, is recorded in a data table along with the reason it was left alone. 
* [sh.stubborn.contract.migration.DropJUnit4Support](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/dropjunit4support): Replaces @Rule StubRunnerRule / StubRunnerClassRule with @RegisterExtension StubRunnerExtension (JUnit 5). Requires JUnit 5 on the test classpath. 
* [sh.stubborn.contract.migration.MigrateFromSpringCloudContract](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/migratefromspringcloudcontract): Composite recipe that updates Maven/Gradle coordinates, Java package names, and drops JUnit 4 StubRunner / Verifier usage. Run this after adding stubborn-contract-migration to your build's rewrite plugin configuration. 
* [sh.stubborn.contract.migration.MigrateStubRunnerProperties](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/migratestubrunnerproperties): Renames the deprecated Stub Runner property prefix spring.cloud.contract.stubrunner.* to its canonical stubborn.contract.stubrunner.* equivalent in Spring Boot application.properties and application.yml/yaml files. The legacy prefix still resolves at runtime via StubRunnerPropertiesMigrator, but it emits deprecation warnings and is slated for removal in the next major release; this recipe removes the warnings by rewriting the keys. The verifier property subset is handled separately by MigrateVerifierProperties. 
* [sh.stubborn.contract.migration.MigrateVerifierProperties](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/migrateverifierproperties): Renames the deprecated Verifier property prefix spring.cloud.contract.verifier.* to its canonical stubborn.contract.verifier.* equivalent in Spring Boot application.properties and application.yml/yaml files. The Stubborn Contract Maven plugin exposes these as -Dstubborn.contract.verifier.* system properties; the legacy names are still accepted for the string parameters and via this recipe for configuration files, and are slated for removal in the next major release. 
* [sh.stubborn.contract.migration.RenameJavaPackages](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/renamejavapackages): Recursively rewrites all Java import statements from org.springframework.cloud.contract.* to sh.stubborn.contract.*, and the JSON/XML assertion packages from com.toomuchcoding.* to sh.stubborn.*. 
* [sh.stubborn.contract.migration.UpdateDependencies](https://docs.openrewrite.org/recipes/sh/stubborn/contract/migration/updatedependencies): Replaces org.springframework.cloud:spring-cloud-contract-* GAVs with sh.stubborn:stubborn-* equivalents, migrates the spring-cloud-contract-dependencies BOM, and swaps both build plugins, in Maven and Gradle builds alike. The com.toomuchcoding JSON/XML assertion coordinates are swapped alongside the sh.stubborn.jsonassert / sh.stubborn.xmlassert package renames. Every coordinate is repinned to latest.release. 

## Removed Recipes

* **org.openrewrite.java.micronaut.RemoveUnnecessaryDependencies**: This recipe will remove dependencies that are no longer explicitly needed. 
* **org.openrewrite.java.migrate.guava.NoGuavaAtomicsNewReference**: Prefer the Java standard library over third-party usage of Guava in simple cases like this. 

## Changed Recipes

* [org.openrewrite.github.AutoCancelInProgressWorkflow](https://docs.openrewrite.org/recipes/github/autocancelinprogressworkflow) was changed:
  * Old Options:
    * `accessToken: { type: String, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.github.ChangeAction](https://docs.openrewrite.org/recipes/github/changeaction) was changed:
  * Old Options:
    * `newAction: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `oldAction: { type: String, required: true }`
    * `oldSha: { type: String, required: false }`
  * New Options:
    * `newAction: { type: String, required: true }`
    * `newVersion: { type: String, required: false }`
    * `oldAction: { type: String, required: true }`
    * `oldSha: { type: String, required: false }`
* [org.openrewrite.github.ChangeDependabotScheduleInterval](https://docs.openrewrite.org/recipes/github/changedependabotscheduleinterval) was changed:
  * Old Options:
    * `interval: { type: String, required: true }`
    * `packageEcosystem: { type: String, required: true }`
  * New Options:
    * `day: { type: String, required: false }`
    * `interval: { type: String, required: true }`
    * `packageEcosystem: { type: String, required: true }`
    * `time: { type: String, required: false }`
    * `timezone: { type: String, required: false }`
* [org.openrewrite.json.DeleteKey](https://docs.openrewrite.org/recipes/json/deletekey) was changed:
  * Old Options:
    * `deleteEmptyParents: { type: Boolean, required: false }`
    * `keyPath: { type: String, required: true }`
  * New Options:
    * `keyPath: { type: String, required: true }`