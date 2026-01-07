---
description: What's changed in OpenRewrite version 8.68.1.
---

# 8.68.1 release (2025-12-05)

_Total recipe count: 5083_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.51.2`
* Staging CLI version: `v3.51.4`

## New Artifacts

* rewrite-jasperreports

## New Recipes

* [io.moderne.hibernate.MigrateToHibernate71](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate71-moderne-edition): This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x.
* [io.moderne.jasperreports.MigrateExporterConfigToJasper6](https://docs.openrewrite.org/recipes/jasperreports/migrateexporterconfigtojasper6): Updates deprecated exporter parameter imports to the new configuration classes introduced in JasperReports 6. This includes migrating from parameter classes to configuration classes for PDF, HTML, CSV, and other exporters. 
* [io.moderne.jasperreports.MigrateXlsToXlsxExporter](https://docs.openrewrite.org/recipes/jasperreports/migratexlstoxlsxexporter): Migrates the deprecated `JRXlsExporter` to the new `JRXlsxExporter` class in JasperReports 6. Also updates related configuration classes from XLS to XLSX variants. 
* [io.moderne.jasperreports.UpgradeToJasperReports5](https://docs.openrewrite.org/recipes/jasperreports/upgradetojasperreports5): Migrates JasperReports from 4.6.0 to 5.6.x. This recipe includes minimal breaking changes, allowing teams to test and validate the migration before proceeding to version 6. 
* [io.moderne.jasperreports.UpgradeToJasperReports6](https://docs.openrewrite.org/recipes/jasperreports/upgradetojasperreports6): Migrates JasperReports from 5.x to 6.x with the new exporter API, XLS to XLSX move, and removal of Spring JasperReports views. 
* [io.moderne.jasperreports.v5.MigrateExporterSetParameter](https://docs.openrewrite.org/recipes/jasperreports/v5/migrateexportersetparameter): Migrates deprecated `setParameter` calls on JasperReports exporters to the new API using `setExporterInput` and `setExporterOutput`. 
* [io.moderne.java.spring.boot2.UpgradeSpringBoot_2_0](https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespringboot_2_0): Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0. 
* [io.moderne.java.spring.boot3.AddSpringBootApplication](https://docs.openrewrite.org/recipes/java/spring/boot3/addspringbootapplication): Adds a `@SpringBootApplication` class containing a main method to bootify your Spring Framework application. 
* [io.moderne.java.spring.boot4.AddJackson2ForJerseyJson](https://docs.openrewrite.org/recipes/java/spring/boot4/addjackson2forjerseyjson): Check whether a module uses Jersey on combination with JSON and adds the needed `spring-boot-jackson` dependency and conditionally `spring-boot-jackson2` dependency. 
* [io.moderne.java.spring.boot4.AddMongoDbRepresentationProperties](https://docs.openrewrite.org/recipes/java/spring/boot4/addmongodbrepresentationproperties): Adds the 'spring.mongodb.representation.uuid' property with value 'standard' and the 'spring.data.mongodb.representation.big-decimal' property with the value 'decimal128' to Spring configuration files when a MongoDB dependency is detected. 
* [io.moderne.java.spring.boot4.MigrateSpringRetry](https://docs.openrewrite.org/recipes/java/spring/boot4/migratespringretry): Handle spring-retry not longer managed by Spring Boot and the possible migration to Spring Core Resilience. 
* [io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7](https://docs.openrewrite.org/recipes/java/spring/boot4/migratespringretrytospringframework7): Migrate `spring-retry`s `@Retryable` and `@Backoff` annotation to Spring Framework 7 Resilience annotations. 
* [io.moderne.java.spring.boot4.RemoveGradleUberJarLoaderImplementationConfig](https://docs.openrewrite.org/recipes/java/spring/boot4/removegradleuberjarloaderimplementationconfig): Removes the Spring Boot Uber-Jar `loaderImplementation` configuration from Gradle build files. 
* [io.moderne.java.spring.boot4.ReplaceDeprecatedAutoconfigureMongoApi](https://docs.openrewrite.org/recipes/java/spring/boot4/replacedeprecatedautoconfiguremongoapi): Replace deprecated `org.springframework.boot.autoconfigure.mongo` API. 
* [io.moderne.java.spring.boot4.ReplaceDeprecatedDockerApi](https://docs.openrewrite.org/recipes/java/spring/boot4/replacedeprecateddockerapi): Replaces deprecated `DockerApi` constructors and configuration methods with their modern equivalents. 
* [io.moderne.java.spring.boot4.ReplaceDeprecatedThreadPoolTaskSchedulerBuilderApi](https://docs.openrewrite.org/recipes/java/spring/boot4/replacedeprecatedthreadpooltaskschedulerbuilderapi): Replaces the deprecated 5-argument constructor of `ThreadPoolTaskSchedulerBuilder` with the builder pattern. 
* [io.moderne.java.spring.hibernate.MigrateDaoSupportGetSession](https://docs.openrewrite.org/recipes/java/spring/hibernate/migratedaosupportgetsession): Migrate `HibernateDaoSupport#getSession()` usage to `HibernateDaoSupport#getSessionFactory()#getCurrentSession()` and annotate the methods with `@Transactional`. 
* [io.moderne.java.spring.hibernate.MigrateSaveOrUpdateAll](https://docs.openrewrite.org/recipes/java/spring/hibernate/migratesaveorupdateall): Migrate removed `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdateAll` to an iterative `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdate`. 
* [io.moderne.java.spring.orm.SpringORM5](https://docs.openrewrite.org/recipes/java/spring/orm/springorm5): Migrate applications using Spring ORM Hibernate Support to Hibernate 5 compatible version. This will enable a further migration by the Spring Framework migration past 5. 
* [org.apache.camel.upgrade.camel416.Camel416MiloLambdaRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel416/camel416milolambdarecipe): Milo: The monitored item data value listener API has changed. 
* [org.apache.camel.upgrade.camel416.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel416/camelmigrationrecipe): Migrates `camel 4.15` application to `camel 4.16`. 
* [org.apache.camel.upgrade.camel416.camelMiloCertificate](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel416/camelmilocertificate): Different java type for ServerCertificateValidator in camel-milo. 
* [org.openrewrite.github.AddDependabotCooldown](https://docs.openrewrite.org/recipes/github/adddependabotcooldown): Adds a `cooldown` section to each update configuration in Dependabot files. Supports `default-days`, `semver-major-days`, `semver-minor-days`, `semver-patch-days`, `include`, and `exclude` options. This implements a security best practice where dependencies are not immediately adopted upon release, allowing time for security vendors to identify potential supply chain compromises. Cooldown applies only to version updates, not security updates. [Read more about dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns). [The available configuration options for dependabot are listed on GitHub](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates). 
* [org.openrewrite.hibernate.MigrateToHibernate66](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate66-community-edition): This recipe will apply changes commonly needed when migrating to Hibernate 6.6.x. 
* [org.openrewrite.hibernate.MigrateToHibernate70](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate70-community-edition): This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x. 
* [org.openrewrite.hibernate.MigrateToHibernate71](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate71-community-edition): This recipe will apply changes commonly needed when migrating to Hibernate 7.1.x. 
* [org.openrewrite.java.RemoveMethodThrows](https://docs.openrewrite.org/recipes/java/removemethodthrows): Remove specific, or all exceptions from a method declaration `throws` clause. 
* [org.openrewrite.java.jspecify.MigrateFromMicronautAnnotations](https://docs.openrewrite.org/recipes/java/jspecify/migratefrommicronautannotations): Migrate from Micronaut Framework annotations to JSpecify. 
* [org.openrewrite.java.spring.boot3.UpdatePrometheusPushgateway](https://docs.openrewrite.org/recipes/java/spring/boot3/updateprometheuspushgateway): Update the Prometheus Pushgateway artifact ID for Spring Boot 3.5 compatibility. 
* [org.openrewrite.java.spring.security7.SecurityConfigurerRemoveThrowsException](https://docs.openrewrite.org/recipes/java/spring/security7/securityconfigurerremovethrowsexception): Remove throws exception in `SecurityConfigurer` methods `init` and `configure`. 
* [org.openrewrite.java.testing.assertj.SimplifyStreamMapToExtracting](https://docs.openrewrite.org/recipes/java/testing/assertj/simplifystreammaptoextracting): Simplifies AssertJ assertions that use `stream().map()` to extract values from a collection by using the dedicated `extracting()` method instead. This makes the assertion more readable and leverages AssertJ's built-in extraction capabilities. 
* [org.openrewrite.java.testing.mockito.AddMockitoExtensionIfAnnotationsUsed](https://docs.openrewrite.org/recipes/java/testing/mockito/addmockitoextensionifannotationsused): Adds `@ExtendWith(MockitoExtension.class)` to tests using `@Mock` or `@Captor`. 
* [org.openrewrite.javascript.cleanup.use-object-property-shorthand](https://docs.openrewrite.org/recipes/javascript/cleanup/use-object-property-shorthand): Simplifies object properties where the property name and value/variable name are the same (e.g., `{ x: x }` becomes `{ x }`). Applies to both destructuring patterns and object literals. 
* [org.openrewrite.javascript.dependencies.find-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/find-dependency): Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes. 
* [org.openrewrite.javascript.dependencies.upgrade-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-dependency-version): Upgrades the version of a dependency in `package.json` and updates the lock file by running the package manager. 
* [org.openrewrite.node.migrate.buffer.replace-slow-buffer](https://docs.openrewrite.org/recipes/node/migrate/buffer/replace-slow-buffer): Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method. 
* [org.openrewrite.node.migrate.crypto.replace-crypto-fips](https://docs.openrewrite.org/recipes/node/migrate/crypto/replace-crypto-fips): Replace deprecated `crypto.fips` property access with `crypto.getFips()` for reads and `crypto.setFips(value)` for writes. 
* [org.openrewrite.node.migrate.fs.replace-dirent-path](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-dirent-path): Replaces deprecated `dirent.path` property access with `dirent.parentPath` on `fs.Dirent` instances to address DEP0178 deprecation. 
* [org.openrewrite.node.migrate.fs.replace-fs-access-constants](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-fs-access-constants): Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace. 
* [org.openrewrite.node.migrate.fs.replace-fs-truncate-fd](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-fs-truncate-fd): Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number). 
* [org.openrewrite.node.migrate.fs.replace-stats-constructor](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-stats-constructor): Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined. 
* [org.openrewrite.node.migrate.http.replace-outgoing-message-headers](https://docs.openrewrite.org/recipes/node/migrate/http/replace-outgoing-message-headers): Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation. 
* [org.openrewrite.node.migrate.process.coerce-process-exit-code](https://docs.openrewrite.org/recipes/node/migrate/process/coerce-process-exit-code): Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer. 
* [org.openrewrite.node.migrate.upgrade-node-22](https://docs.openrewrite.org/recipes/node/migrate/upgrade-node-22): Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions. 
* [org.openrewrite.node.migrate.upgrade-node-24](https://docs.openrewrite.org/recipes/node/migrate/upgrade-node-24): Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations. 
* [org.openrewrite.node.migrate.util.remove-promisify-on-promise](https://docs.openrewrite.org/recipes/node/migrate/util/remove-promisify-on-promise): Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174). 
* [org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module](https://docs.openrewrite.org/recipes/node/migrate/util/replace-is-webassembly-compiled-module): Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`. 
* [org.openrewrite.node.migrate.zlib.replace-bytes-read](https://docs.openrewrite.org/recipes/node/migrate/zlib/replace-bytes-read): Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`. 
* [tech.picnic.errorprone.refasterrules.BigDecimalRulesRecipes$BigDecimalTwoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/bigdecimalrulesrecipes$bigdecimaltworecipe): Prefer using the constant `BigDecimal#TWO` when possible. 
* [tech.picnic.errorprone.refasterrules.BugCheckerRulesRecipes$ASTHelpersGetStartPositionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/bugcheckerrulesrecipes$asthelpersgetstartpositionrecipe): Prefer `ASTHelpers#getStartPosition(Tree)` over alternatives that require casting. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionIteratorNextRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectioniteratornextrecipe): Prefer `collection.iterator().next()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ListAddFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$listaddfirstrecipe): Prefer `List#addFirst(Object)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ListAddRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$listaddrecipe): Prefer `List#add(Object)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ListRemoveFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$listremovefirstrecipe): Prefer `List#removeFirst()`} over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ListRemoveLastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$listremovelastrecipe): Prefer `List#removeLast()`} over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SequencedCollectionGetFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$sequencedcollectiongetfirstrecipe): Prefer `SequencedCollection#getFirst()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SequencedCollectionGetLastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$sequencedcollectiongetlastrecipe): Prefer `SequencedCollection#getLast()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SortedSetFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$sortedsetfirstrecipe): Prefer `SortedSet#first()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SortedSetLastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$sortedsetlastrecipe): Prefer `SortedSet#last()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes): Refaster rules related to Jackson 2.x expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/Jackson2Rules). 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$JsonNodeOptionalIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$jsonnodeoptionalintrecipe): Prefer `JsonNode#optional(int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$JsonNodeOptionalStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$jsonnodeoptionalstringrecipe): Prefer `JsonNode#optional(String)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithClassRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvaluewithclassrecipe): Prefer `ObjectMapper#convertValue(Object, Class)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithJavaTypeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvaluewithjavatyperecipe): Prefer `ObjectMapper#convertValue(Object, JavaType)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperConvertValueWithTypeReferenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmapperconvertvaluewithtypereferencerecipe): Prefer `ObjectMapper#convertValue(Object, TypeReference)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson2RulesRecipes$ObjectMapperValueToTreeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson2rulesrecipes$objectmappervaluetotreerecipe): Prefer `ObjectMapper#valueToTree(Object)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes): Refaster rules related to Jackson 3.x expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/Jackson3Rules). 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$JsonNodeOptionalIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$jsonnodeoptionalintrecipe): Prefer `JsonNode#optional(int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$JsonNodeOptionalStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$jsonnodeoptionalstringrecipe): Prefer `JsonNode#optional(String)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithClassRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvaluewithclassrecipe): Prefer `ObjectMapper#convertValue(Object, Class)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithJavaTypeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvaluewithjavatyperecipe): Prefer `ObjectMapper#convertValue(Object, JavaType)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperConvertValueWithTypeReferenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmapperconvertvaluewithtypereferencerecipe): Prefer `ObjectMapper#convertValue(Object, TypeReference)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.Jackson3RulesRecipes$ObjectMapperValueToTreeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jackson3rulesrecipes$objectmappervaluetotreerecipe): Prefer `ObjectMapper#valueToTree(Object)` over more contrived and less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDistinctSortRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdistinctsortrecipe): Apply `Flux#distinct()` before `Flux#sort()` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDistinctSortWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxdistinctsortwithcomparatorrecipe): Apply `Flux#distinct()` before `Flux#sort(Comparator)` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/springtestrulesrecipes): Refaster rules related to Spring Test expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/SpringTestRules). 
* [tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonLenientRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/springtestrulesrecipes$bodycontentspecjsonlenientrecipe): Prefer `BodyContentSpec#json(String, JsonCompareMode)` over alternatives that implicitly perform a `JsonCompareMode#LENIENT lenient` comparison or are deprecated. 
* [tech.picnic.errorprone.refasterrules.SpringTestRulesRecipes$BodyContentSpecJsonStrictRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/springtestrulesrecipes$bodycontentspecjsonstrictrecipe): Prefer `BodyContentSpec#json(String, JsonCompareMode)` over the deprecated alternative. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamDistinctSortedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamdistinctsortedrecipe): Apply `Stream#distinct()` before `Stream#sorted()` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamDistinctSortedWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamdistinctsortedwithcomparatorrecipe): Apply `Stream#distinct()` before `Stream#sorted(Comparator)` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharBetweenIndicesRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharbetweenindicesrecipe): Prefer `String#indexOf(int, int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharFromIndexRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharfromindexrecipe): Prefer `String#indexOf(int, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringBetweenIndicesRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringbetweenindicesrecipe): Prefer `String#indexOf(String, int)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringFromIndexRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringfromindexrecipe): Prefer `String#indexOf(String, int)` over less efficient alternatives. 

## Removed Recipes

* **tech.picnic.errorprone.refasterrules.JacksonRulesRecipes**: Refaster rules related to Jackson expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/JacksonRules). 
* **tech.picnic.errorprone.refasterrules.JacksonRulesRecipes$JsonNodeOptionalIntRecipe**: Prefer `JsonNode#optional(int)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.JacksonRulesRecipes$JsonNodeOptionalStringRecipe**: Prefer `JsonNode#optional(String)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompleteRecipe**: Prefer `Flux#onErrorComplete()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharRecipe**: Prefer `String#indexOf(int, int)` over less efficient alternatives. 
* **tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringRecipe**: Prefer `String#indexOf(String, int)` over less efficient alternatives. 

## Changed Recipes

* [org.openrewrite.gradle.search.DoesNotIncludeDependency](https://docs.openrewrite.org/recipes/gradle/search/doesnotincludedependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: false }`
* [org.openrewrite.java.format.AutoFormat](https://docs.openrewrite.org/recipes/java/format/autoformat) was changed:
  * Old Options:
    * `style: { type: String, required: false }`
  * New Options:
    * `removeCustomLineBreaks: { type: Boolean, required: false }`
    * `style: { type: String, required: false }`
* [org.openrewrite.java.dependencies.search.DoesNotIncludeDependency](https://docs.openrewrite.org/recipes/java/dependencies/search/doesnotincludedependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`
* [org.openrewrite.maven.search.DoesNotIncludeDependency](https://docs.openrewrite.org/recipes/maven/search/doesnotincludedependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`