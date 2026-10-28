---
description: Release notes of the OpenRewrite modules in each release of the rewrite-recipe-bom.
---

# Changelog

Each release of the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom), OpenRewrite's bill of materials, aligns the versions of its modules.
These are the release notes of the modules that changed in each release over the past year, taken from their GitHub releases.
For the current version of each module, see the [latest versions of every OpenRewrite module](https://docs.moderne.io/user-documentation/recipes/lists/latest-versions-of-every-openrewrite-module).

## [rewrite-recipe-bom 3.44.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.44.0)

Released on October 28, 2026, with OpenRewrite 8.96.0.

#### [rewrite 8.96.0](https://github.com/openrewrite/rewrite/releases/tag/v8.96.0)

* Stop loading recipe examples and maintainers by @timtebeek in [#9449](https://github.com/openrewrite/rewrite/pull/9449)
* Keep the types of the parsers a test builds in a HashMap by @knutwannheden in [#9450](https://github.com/openrewrite/rewrite/pull/9450)
* Go: Keep RPC memory flat across a recipe run by evicting the trees received from Java by @greg-at-moderne in [#9442](https://github.com/openrewrite/rewrite/pull/9442)
* Go: report the registered source file type of every tree a scanning recipe generates by @greg-at-moderne in [#9443](https://github.com/openrewrite/rewrite/pull/9443)
* Python: RPC explicit failure for GetObject when it  cannot serialize the tree by @greg-at-moderne in [#9445](https://github.com/openrewrite/rewrite/pull/9445)
* C#: pin Nerdbank.MessagePack to 1.3.88 for GHSA-grf3-jgmf-2g5j by @knutwannheden in [#9451](https://github.com/openrewrite/rewrite/pull/9451)
* Xml: reject closing tags that do not match their opening tag by @timtebeek in [#9261](https://github.com/openrewrite/rewrite/pull/9261)
* Go: bump golang.org/x/mod and klauspost/compress past published advisories by @knutwannheden in [#9453](https://github.com/openrewrite/rewrite/pull/9453)
* Python: remove unused `PySpace.SpaceBuilder` by @greg-at-moderne in [#9452](https://github.com/openrewrite/rewrite/pull/9452)
* Go: send nil lists as empty lists where the J model declares them non-null by @knutwannheden in [#9454](https://github.com/openrewrite/rewrite/pull/9454)
* Python: build the dependency env with Python 3.8 or 3.9 when a project allows nothing newer by @knutwannheden in [#9455](https://github.com/openrewrite/rewrite/pull/9455)
* Use returned values instead of discarding them under `@CheckReturnValue` by @timtebeek in [#9394](https://github.com/openrewrite/rewrite/pull/9394)
* Scala: same-named locals in one method keep their own types by @greg-at-moderne in [#9456](https://github.com/openrewrite/rewrite/pull/9456)
* Cache unsupported Maven repository normalization results by @Shubchynskyi in [#9235](https://github.com/openrewrite/rewrite/pull/9235)
* Go: handle deleted and scanned files the same way on both RPC visit paths by @greg-at-moderne in [#9462](https://github.com/openrewrite/rewrite/pull/9462)
* Honor Gradle AddDependency's acceptTransitive option by @knutwannheden in [#9457](https://github.com/openrewrite/rewrite/pull/9457)
* Describe which dropped parent management UpgradeParentVersion retains by @timtebeek in [#9463](https://github.com/openrewrite/rewrite/pull/9463)

#### [rewrite-all 1.33.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.33.0)

* Dedupe FindCallGraph low-confidence rows on the source file's cursor by @timtebeek in [#50](https://github.com/openrewrite/rewrite-all/pull/50)

#### [rewrite-apache 2.37.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.37.0)

* Move adjacent literal StringEntity content encoding into its constructor by @jkschneider in [#163](https://github.com/openrewrite/rewrite-apache/pull/163)
* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#164](https://github.com/openrewrite/rewrite-apache/pull/164)
* Resolve commons-lang3 from the type table in SystemUtilsIsJavaVersionAtLeastToJavaVersion by @timtebeek in [#165](https://github.com/openrewrite/rewrite-apache/pull/165)

#### [rewrite-hibernate 2.30.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.30.0)

* Resolve XML namespaces through rewrite-xml's Namespaced trait by @knutwannheden in [#117](https://github.com/openrewrite/rewrite-hibernate/pull/117)

#### [rewrite-jackson 1.34.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.34.0)

* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#185](https://github.com/openrewrite/rewrite-jackson/pull/185)
* Move Codehaus Jackson 1.x test jars to type tables by @timtebeek in [#186](https://github.com/openrewrite/rewrite-jackson/pull/186)

#### [rewrite-java-dependencies 1.67.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.67.0)

* Order versions with core's Version in FindMinimum* recipes (A5 of #211) by @timtebeek in [#223](https://github.com/openrewrite/rewrite-java-dependencies/pull/223)
* Key FindMinimumJUnitVersion on JUnit major version and answer per module (A6 of #211) by @timtebeek in [#224](https://github.com/openrewrite/rewrite-java-dependencies/pull/224)
* Keep optional and classifier dependencies in RemoveRedundantDependencies (B1, B3 of #211) by @timtebeek in [#225](https://github.com/openrewrite/rewrite-java-dependencies/pull/225)
* Move guava, logback-classic and slf4j-nop test dependencies to a test type table by @timtebeek in [#226](https://github.com/openrewrite/rewrite-java-dependencies/pull/226)

#### [rewrite-jenkins 0.41.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.41.0)

* Move test-only parser jars to a test type table by @timtebeek in [#119](https://github.com/openrewrite/rewrite-jenkins/pull/119)

#### [rewrite-logging-frameworks 3.37.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.37.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#321](https://github.com/openrewrite/rewrite-logging-frameworks/pull/321)
* Keep JUL varargs type on the method name and read log level checks under && and || by @timtebeek in [#322](https://github.com/openrewrite/rewrite-logging-frameworks/pull/322)

#### [rewrite-mainframe 3.6.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.6.0)

* Share copybook trees and copied-word markers, so a COBOL LST takes 42% less heap by @knutwannheden in [#187](https://github.com/moderneinc/rewrite-mainframe/pull/187)

#### [rewrite-maven-plugin 6.53.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.53.0)

* Activate codegenome profile for Moderne CLI builds by @timtebeek in [#1226](https://github.com/openrewrite/rewrite-maven-plugin/pull/1226)
* Build KotlinIT's projects with Kotlin 2.4.21, which runs on JDK 25 by @jkschneider in [#1228](https://github.com/openrewrite/rewrite-maven-plugin/pull/1228)
* Document every goal parameter and ship the HTML plugin descriptor by @timtebeek in [#1231](https://github.com/openrewrite/rewrite-maven-plugin/pull/1231)
* Update rewrite-polyglot.version to 2.16.0-SNAPSHOT by @timtebeek in [#1232](https://github.com/openrewrite/rewrite-maven-plugin/pull/1232)

#### [rewrite-micrometer 0.34.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.34.0)

* Resolve Misk and Kotlin types from the type table instead of test runtime jars by @timtebeek in [#45](https://github.com/openrewrite/rewrite-micrometer/pull/45)

#### [rewrite-migrate-java 3.49.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.49.0)

* Wrap test in rewriteRun and fix mismatched web.xml closing tags by @timtebeek in [#1380](https://github.com/openrewrite/rewrite-migrate-java/pull/1380)
* Upgrade the Lombok version configured for the io.freefair.lombok Gradle plugin by @ds-xdev in [#1379](https://github.com/openrewrite/rewrite-migrate-java/pull/1379)

#### [rewrite-netty 0.16.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.16.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#25](https://github.com/openrewrite/rewrite-netty/pull/25)
* Move test-only io_uring incubator parser dependency to a test type table by @timtebeek in [#26](https://github.com/openrewrite/rewrite-netty/pull/26)

#### [rewrite-okhttp 0.28.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.28.0)

* Move okhttp test dependency to a test type table by @timtebeek in [#34](https://github.com/openrewrite/rewrite-okhttp/pull/34)

#### [rewrite-openapi 0.38.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.38.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#85](https://github.com/openrewrite/rewrite-openapi/pull/85)
* Move test-only jakarta.ws.rs-api parser dependency to the test type table by @timtebeek in [#86](https://github.com/openrewrite/rewrite-openapi/pull/86)

#### [rewrite-pmd 0.4.0](https://github.com/openrewrite/rewrite-pmd/releases/tag/v0.4.0)

* Fix assertion rule names in PMD 6 to 7 migration by @greg-at-moderne in [#6](https://github.com/openrewrite/rewrite-pmd/pull/6)
* Deduplicate migrated PMD rule references while preserving configuration by @greg-at-moderne in [#7](https://github.com/openrewrite/rewrite-pmd/pull/7)

#### [rewrite-prethink 1.9.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.9.0)

* Declare the released CALM 1.3 schema instead of the 2025-03 draft by @timtebeek in [#41](https://github.com/openrewrite/rewrite-prethink/pull/41)

#### [rewrite-quarkus 2.39.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.39.0)

* Move test-only Quarkus 1.13 parser jars to a test type table by @timtebeek in [#124](https://github.com/openrewrite/rewrite-quarkus/pull/124)

#### [rewrite-rewrite 0.38.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.38.0)

* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#112](https://github.com/openrewrite/rewrite-rewrite/pull/112)
* Drop ReplaceStackWithDeque from OpenRewriteRecipeBestPractices, as it leaves rewrite-static-analysis by @jkschneider in [#111](https://github.com/openrewrite/rewrite-rewrite/pull/111)
* Find ways recipes get past rewriteRun quality checks by @timtebeek in [#114](https://github.com/openrewrite/rewrite-rewrite/pull/114)
* Remove examples.yml files instead of generating them by @timtebeek in [#115](https://github.com/openrewrite/rewrite-rewrite/pull/115)

#### [rewrite-spring 6.44.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.44.0)

* Compare types with TypeUtils.isOfType or by identity instead of JavaType.equals by @knutwannheden in [#1232](https://github.com/openrewrite/rewrite-spring/pull/1232)
* Move test-only parser dependencies to type tables by @timtebeek in [#1233](https://github.com/openrewrite/rewrite-spring/pull/1233)
* Remove unused logback-classic test dependency by @timtebeek in [#1234](https://github.com/openrewrite/rewrite-spring/pull/1234)

#### [rewrite-spring-to-quarkus 0.16.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.16.0)

* Match only declared dependencies, and drop option keys the recipes ignore by @knutwannheden in [#97](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/97)
* Restore the test-scope filter on H2TestDriverToQuarkus by @knutwannheden in [#98](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/98)
* Move test-only parser jars to a test type table by @timtebeek in [#99](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/99)
* Fix the smallrye-config-core coordinate, regenerate the main type table, and version-qualify the cdi-api lookups by @timtebeek in [#100](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/100)
* Convert idiomatic Spring HealthIndicators to compilable MicroProfile Health code by @timtebeek in [#101](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/101)

#### [rewrite-static-analysis 2.48.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.48.0)

* Don't replace a call used as a statement with an expression that cannot stand alone by @knutwannheden in [#1162](https://github.com/openrewrite/rewrite-static-analysis/pull/1162)

#### [rewrite-templating 1.49.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.49.0)

* Delete src/main/resources/META-INF/rewrite/examples.yml by @timtebeek in [#199](https://github.com/openrewrite/rewrite-templating/pull/199)

#### [rewrite-testing-frameworks 3.52.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.52.0)

* Move parser-only test jars to the test type table by @timtebeek in [#1253](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1253)

## [rewrite-recipe-bom 3.43.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.43.0)

Released on October 27, 2026, with OpenRewrite 8.95.0.

#### [rewrite 8.95.0](https://github.com/openrewrite/rewrite/releases/tag/v8.95.0)

* Python: let UsesType with check_assignability read a called method that has no parameter types by @jkschneider in [#9409](https://github.com/openrewrite/rewrite/pull/9409)
* Preserve compiler configurations exporting JDK module packages by @jkschneider in [#9415](https://github.com/openrewrite/rewrite/pull/9415)
* Report unknown declarative recipe options as validation failures by @timtebeek in [#9393](https://github.com/openrewrite/rewrite/pull/9393)
* `MethodMatcher` javadoc fix by @greg-at-moderne in [#9403](https://github.com/openrewrite/rewrite/pull/9403)
* Java, Groovy, Kotlin: Parser builders to not re-use styles by @greg-at-moderne in [#9362](https://github.com/openrewrite/rewrite/pull/9362)
* Python: match requests.get by its defining module in DependencyWorkspaceIntegTest by @knutwannheden in [#9418](https://github.com/openrewrite/rewrite/pull/9418)
* Java tests: check recipe's after code not to have `J.Erroneous` by @greg-at-moderne in [#9399](https://github.com/openrewrite/rewrite/pull/9399)
* Serve MavenPomDownloaderTest's local repositories over https so probes don't wait out timeouts by @timtebeek in [#9419](https://github.com/openrewrite/rewrite/pull/9419)
* Don't match in HasTypeOnClasspathSourceSet when the source set marker is missing by @knutwannheden in [#9429](https://github.com/openrewrite/rewrite/pull/9429)
* Add the new parameter to the method type in AddMethodParameter by @knutwannheden in [#9428](https://github.com/openrewrite/rewrite/pull/9428)
* Qualify a ChangeMethodTargetToStatic call when a member method shadows the static import by @knutwannheden in [#9427](https://github.com/openrewrite/rewrite/pull/9427)
* RewriteTest: fix a NPE in tests with cursors visiting malformed trees by @greg-at-moderne in [#9420](https://github.com/openrewrite/rewrite/pull/9420)
* Receive RPC long fields that arrive as an Integer from JSON by @MBoegers in [#9431](https://github.com/openrewrite/rewrite/pull/9431)
* Don't let ChangeType shorten to a simple name that resolves to another type by @knutwannheden in [#9426](https://github.com/openrewrite/rewrite/pull/9426)
* Update the method type on a Kotlin callable reference's name in ChangeType by @knutwannheden in [#9425](https://github.com/openrewrite/rewrite/pull/9425)
* Fix XML namespace resolution, schemaLocation rewriting and first-child comment lookup in rewrite-xml by @knutwannheden in [#9422](https://github.com/openrewrite/rewrite/pull/9422)
* Let ChangeType retarget a qualified reference to a type in the default package by @knutwannheden in [#9424](https://github.com/openrewrite/rewrite/pull/9424)
* Fix four rewrite-java bugs that recipes work around by @knutwannheden in [#9421](https://github.com/openrewrite/rewrite/pull/9421)
* Type the name of a Kotlin constructor reference with its class by @knutwannheden in [#9432](https://github.com/openrewrite/rewrite/pull/9432)
* Python: indent every literal of an implicit concatenation alike when formatting by @knutwannheden in [#9435](https://github.com/openrewrite/rewrite/pull/9435)
* Python 2: keep one-line suites, decorator comments, and slices in subscripts as written by @knutwannheden in [#9436](https://github.com/openrewrite/rewrite/pull/9436)
* Python: read a file for rewrite-python-types as the parser reads it by @knutwannheden in [#9438](https://github.com/openrewrite/rewrite/pull/9438)
* Python: keep a declared class's module and supertypes when a decorator rebinds a name by @knutwannheden in [#9433](https://github.com/openrewrite/rewrite/pull/9433)
* Python: place an added import where isort would, and keep the comments it passes by @knutwannheden in [#9434](https://github.com/openrewrite/rewrite/pull/9434)
* Python: count byte offsets as ty does past a byte order mark, a form feed and non-ASCII text by @knutwannheden in [#9437](https://github.com/openrewrite/rewrite/pull/9437)
* Share test downloads, speed up slow suites, and quiet the build log by @jkschneider in [#9423](https://github.com/openrewrite/rewrite/pull/9423)
* Drop ReplaceStackWithDeque from OpenRewriteRecipeBestPracticesSubset's list by @jkschneider in [#9410](https://github.com/openrewrite/rewrite/pull/9410)
* Restore NuGet packages when packing the C# projects by @knutwannheden in [#9441](https://github.com/openrewrite/rewrite/pull/9441)
* Go: don't include test recipes in the RPC binary by @greg-at-moderne in [#9444](https://github.com/openrewrite/rewrite/pull/9444)
* Python: report a data-table column annotated `X | None` as the type X by @knutwannheden in [#9439](https://github.com/openrewrite/rewrite/pull/9439)
* Python printers: print the closing marker output of every Python node by @knutwannheden in [#9440](https://github.com/openrewrite/rewrite/pull/9440)
* Close the marker fences the Kotlin, Groovy and Ruby printers leave open by @knutwannheden in [#9446](https://github.com/openrewrite/rewrite/pull/9446)
* Allow TOML subtables to repeat under each array-of-tables element by @timtebeek in [#9448](https://github.com/openrewrite/rewrite/pull/9448)
* Raise Android `compileOptions` method-call form in `UpdateJavaCompatibility` by @ds-xdev in [#9402](https://github.com/openrewrite/rewrite/pull/9402)
* Speed up rewriteRun by sharing javac's jar index and reparsing TreeShapes without types by @knutwannheden in [#9447](https://github.com/openrewrite/rewrite/pull/9447)

#### [rewrite-all 1.32.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.32.0)

* Dedupe FindCallGraph low-confidence rows on the source file's cursor by @timtebeek in [#50](https://github.com/openrewrite/rewrite-all/pull/50)

#### [rewrite-apache 2.36.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.36.0)

* Move adjacent literal StringEntity content encoding into its constructor by @jkschneider in [#163](https://github.com/openrewrite/rewrite-apache/pull/163)
* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#164](https://github.com/openrewrite/rewrite-apache/pull/164)
* Resolve commons-lang3 from the type table in SystemUtilsIsJavaVersionAtLeastToJavaVersion by @timtebeek in [#165](https://github.com/openrewrite/rewrite-apache/pull/165)

#### [rewrite-hibernate 2.29.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.29.0)

* Migrate the Hibernate UUIDCharType FQN to its VARCHAR mapping by @jkschneider in [#114](https://github.com/openrewrite/rewrite-hibernate/pull/114)
* Move test-only parser dependencies to type tables by @timtebeek in [#115](https://github.com/openrewrite/rewrite-hibernate/pull/115)
* Version-qualify the hibernate-core lookup in MigrateUserType and move javax.persistence-api to a test type table by @timtebeek in [#116](https://github.com/openrewrite/rewrite-hibernate/pull/116)

#### [rewrite-jackson 1.33.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.33.0)

* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#185](https://github.com/openrewrite/rewrite-jackson/pull/185)
* Move Codehaus Jackson 1.x test jars to type tables by @timtebeek in [#186](https://github.com/openrewrite/rewrite-jackson/pull/186)

#### [rewrite-java-dependencies 1.66.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.66.0)

* Order versions with core's Version in FindMinimum* recipes (A5 of #211) by @timtebeek in [#223](https://github.com/openrewrite/rewrite-java-dependencies/pull/223)
* Key FindMinimumJUnitVersion on JUnit major version and answer per module (A6 of #211) by @timtebeek in [#224](https://github.com/openrewrite/rewrite-java-dependencies/pull/224)
* Keep optional and classifier dependencies in RemoveRedundantDependencies (B1, B3 of #211) by @timtebeek in [#225](https://github.com/openrewrite/rewrite-java-dependencies/pull/225)
* Move guava, logback-classic and slf4j-nop test dependencies to a test type table by @timtebeek in [#226](https://github.com/openrewrite/rewrite-java-dependencies/pull/226)

#### [rewrite-jenkins 0.40.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.40.0)

* Move test-only parser jars to a test type table by @timtebeek in [#119](https://github.com/openrewrite/rewrite-jenkins/pull/119)

#### [rewrite-logging-frameworks 3.36.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.36.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#321](https://github.com/openrewrite/rewrite-logging-frameworks/pull/321)
* Keep JUL varargs type on the method name and read log level checks under && and || by @timtebeek in [#322](https://github.com/openrewrite/rewrite-logging-frameworks/pull/322)

#### [rewrite-mainframe 3.5.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.5.0)

* Share copybook trees and copied-word markers, so a COBOL LST takes 42% less heap by @knutwannheden in [#187](https://github.com/moderneinc/rewrite-mainframe/pull/187)

#### [rewrite-maven-plugin 6.52.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.52.0)

* Activate codegenome profile for Moderne CLI builds by @timtebeek in [#1226](https://github.com/openrewrite/rewrite-maven-plugin/pull/1226)
* Build KotlinIT's projects with Kotlin 2.4.21, which runs on JDK 25 by @jkschneider in [#1228](https://github.com/openrewrite/rewrite-maven-plugin/pull/1228)

#### [rewrite-micrometer 0.33.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.33.0)

* Resolve Misk and Kotlin types from the type table instead of test runtime jars by @timtebeek in [#45](https://github.com/openrewrite/rewrite-micrometer/pull/45)

#### [rewrite-migrate-java 3.48.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.48.0)

* Preserve Guava equality bindings when migrating static imports by @jkschneider in [#1374](https://github.com/openrewrite/rewrite-migrate-java/pull/1374)
* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#1376](https://github.com/openrewrite/rewrite-migrate-java/pull/1376)
* Move test-only parser jars to the test type table by @timtebeek in [#1377](https://github.com/openrewrite/rewrite-migrate-java/pull/1377)
* Keep jspecify on the parser classpath in the Micrometer annotations test by @timtebeek in [#1378](https://github.com/openrewrite/rewrite-migrate-java/pull/1378)

#### [rewrite-netty 0.15.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.15.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#25](https://github.com/openrewrite/rewrite-netty/pull/25)
* Move test-only io_uring incubator parser dependency to a test type table by @timtebeek in [#26](https://github.com/openrewrite/rewrite-netty/pull/26)

#### [rewrite-okhttp 0.27.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.27.0)

* Move okhttp test dependency to a test type table by @timtebeek in [#34](https://github.com/openrewrite/rewrite-okhttp/pull/34)

#### [rewrite-openapi 0.37.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.37.0)

* Move test-only parser dependencies to type tables by @timtebeek in [#85](https://github.com/openrewrite/rewrite-openapi/pull/85)
* Move test-only jakarta.ws.rs-api parser dependency to the test type table by @timtebeek in [#86](https://github.com/openrewrite/rewrite-openapi/pull/86)

#### [rewrite-prethink 1.8.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.8.0)

* Declare the released CALM 1.3 schema instead of the 2025-03 draft by @timtebeek in [#41](https://github.com/openrewrite/rewrite-prethink/pull/41)

#### [rewrite-quarkus 2.38.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.38.0)

* Move test-only Quarkus 1.13 parser jars to a test type table by @timtebeek in [#124](https://github.com/openrewrite/rewrite-quarkus/pull/124)

#### [rewrite-rewrite 0.37.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.37.0)

* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#112](https://github.com/openrewrite/rewrite-rewrite/pull/112)
* Drop ReplaceStackWithDeque from OpenRewriteRecipeBestPractices, as it leaves rewrite-static-analysis by @jkschneider in [#111](https://github.com/openrewrite/rewrite-rewrite/pull/111)
* Find ways recipes get past rewriteRun quality checks by @timtebeek in [#114](https://github.com/openrewrite/rewrite-rewrite/pull/114)
* Remove examples.yml files instead of generating them by @timtebeek in [#115](https://github.com/openrewrite/rewrite-rewrite/pull/115)

#### [rewrite-spring 6.43.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.43.0)

* Compare types with TypeUtils.isOfType or by identity instead of JavaType.equals by @knutwannheden in [#1232](https://github.com/openrewrite/rewrite-spring/pull/1232)
* Move test-only parser dependencies to type tables by @timtebeek in [#1233](https://github.com/openrewrite/rewrite-spring/pull/1233)
* Remove unused logback-classic test dependency by @timtebeek in [#1234](https://github.com/openrewrite/rewrite-spring/pull/1234)

#### [rewrite-spring-to-quarkus 0.15.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.15.0)

* Match only declared dependencies, and drop option keys the recipes ignore by @knutwannheden in [#97](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/97)
* Restore the test-scope filter on H2TestDriverToQuarkus by @knutwannheden in [#98](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/98)
* Move test-only parser jars to a test type table by @timtebeek in [#99](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/99)
* Fix the smallrye-config-core coordinate, regenerate the main type table, and version-qualify the cdi-api lookups by @timtebeek in [#100](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/100)
* Convert idiomatic Spring HealthIndicators to compilable MicroProfile Health code by @timtebeek in [#101](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/101)

#### [rewrite-static-analysis 2.47.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.47.0)

* Retain raw empty collections used as cast operands by @jkschneider in [#1155](https://github.com/openrewrite/rewrite-static-analysis/pull/1155)
* Preserve value comparison for boxed subtraction operands by @jkschneider in [#1157](https://github.com/openrewrite/rewrite-static-analysis/pull/1157)
* Preserve casts nested in variable initializers by @jkschneider in [#1156](https://github.com/openrewrite/rewrite-static-analysis/pull/1156)
* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#1158](https://github.com/openrewrite/rewrite-static-analysis/pull/1158)
* Drop the dependency on the archived rewrite-analysis by @jkschneider in [#1154](https://github.com/openrewrite/rewrite-static-analysis/pull/1154)
* Move test-only parser jars for JUnit 4, TestNG and Gson to a test type table by @timtebeek in [#1159](https://github.com/openrewrite/rewrite-static-analysis/pull/1159)
* Remove the parentheses of a cast operand in RemoveUnnecessaryBitwiseOperation, now parsed as J.Parentheses by @timtebeek in [#1160](https://github.com/openrewrite/rewrite-static-analysis/pull/1160)

#### [rewrite-templating 1.48.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.48.0)

* Delete src/main/resources/META-INF/rewrite/examples.yml by @timtebeek in [#199](https://github.com/openrewrite/rewrite-templating/pull/199)

#### [rewrite-testing-frameworks 3.51.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.51.0)

* Preserve legacy Hamcrest class matcher semantics in AssertJ migrations by @jkschneider in [#1250](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1250)
* Retain opaque Hamcrest matcher assertions without crashing by @jkschneider in [#1251](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1251)
* Preserve Mockito initialization for unmanaged targets and shared handles by @jkschneider in [#1249](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1249)
* Compare types with TypeUtils.isOfType instead of JavaType.equals by @knutwannheden in [#1252](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1252)
* Keep AssertToAssertions output stable after rewrite qualifies shadowed calls by @timtebeek in [#1254](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1254)
* Pin bare mockito-core type table lookups to a single Mockito major by @timtebeek in [#1255](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1255)

## [rewrite-recipe-bom 3.42.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.42.0)

Released on October 27, 2026, with OpenRewrite 8.94.0.

#### [rewrite 8.94.0](https://github.com/openrewrite/rewrite/releases/tag/v8.94.0)

* JavaScript: cache merge builders in a trie over property names by @knutwannheden in [#9237](https://github.com/openrewrite/rewrite/pull/9237)
* JavaScript RPC: send object pages of 5000 messages by @knutwannheden in [#9238](https://github.com/openrewrite/rewrite/pull/9238)
* JavaScript: dispatch visitor methods through a map of kinds by @knutwannheden in [#9239](https://github.com/openrewrite/rewrite/pull/9239)
* RPC: resolve each received type name to its class once per queue by @knutwannheden in [#9236](https://github.com/openrewrite/rewrite/pull/9236)
* Python RPC: dispatch sender and receiver nodes through one type-keyed table by @knutwannheden in [#9240](https://github.com/openrewrite/rewrite/pull/9240)
* JavaScript: fixes for visiting delete statements on Java side by @greg-at-moderne in [#9243](https://github.com/openrewrite/rewrite/pull/9243)
* Add support for upgrading and changing version catalog plugins in TOML format by @KamilPatora in [#8950](https://github.com/openrewrite/rewrite/pull/8950)
* JavaScript: Add missing id to equals/hashCode of JS.ExpressionStateme… by @greg-at-moderne in [#9242](https://github.com/openrewrite/rewrite/pull/9242)
* In tests, re-parse converted sources with their new language’s parser by @greg-at-moderne in [#9241](https://github.com/openrewrite/rewrite/pull/9241)
* RPC: tell jsonrpc the response type each request expects by @knutwannheden in [#9245](https://github.com/openrewrite/rewrite/pull/9245)
* Groovy: Add missing id to equals/hashCode of G.ExpressionStatement, G.GString and G.GString.Value by @knutwannheden in [#9250](https://github.com/openrewrite/rewrite/pull/9250)
* Resolve Go modules excluded from a go.work standalone by @sambsnyd in [#9203](https://github.com/openrewrite/rewrite/pull/9203)
* Xml: fix a few withers to return the same if no changes by @greg-at-moderne in [#9249](https://github.com/openrewrite/rewrite/pull/9249)
* JavaScript: return same FunctionCall from withTypeParameters for an u… by @greg-at-moderne in [#9248](https://github.com/openrewrite/rewrite/pull/9248)
* JavaScript: fixing integration tests by @greg-at-moderne in [#9244](https://github.com/openrewrite/rewrite/pull/9244)
* Scala: fix type attribution of arrays, now JavaType.Array instead of Parameterized by @greg-at-moderne in [#9246](https://github.com/openrewrite/rewrite/pull/9246)
* Python: fix missing type on Py.MatchCase.withGuard by @greg-at-moderne in [#9251](https://github.com/openrewrite/rewrite/pull/9251)
* Fix whitespace when RemoveAnnotationVisitor removes several leading annotations by @timtebeek in [#9253](https://github.com/openrewrite/rewrite/pull/9253)
* C#: pin MessagePack to 2.5.307 for CVE-2026-92707 by @timtebeek in [#9255](https://github.com/openrewrite/rewrite/pull/9255)
* JavaScript: Fix missing visit to FunctionType.modifiers by @greg-at-moderne in [#9252](https://github.com/openrewrite/rewrite/pull/9252)
* JavaScript: Fix three wrong-removal bugs in RemoveImport by @greg-at-moderne in [#9259](https://github.com/openrewrite/rewrite/pull/9259)
* JavaScript: visit the space before await in for-await-of loops by @greg-at-moderne in [#9258](https://github.com/openrewrite/rewrite/pull/9258)
* Lombok check: use tsym.getQualifiedName() instead of Type.toString() by @greg-at-moderne in [#9254](https://github.com/openrewrite/rewrite/pull/9254)
* JavaScript: fix passing options from superclass recipe by @greg-at-moderne in [#9256](https://github.com/openrewrite/rewrite/pull/9256)
* Silence JDK 8 javac warnings and notes in rewrite-java-8 by @timtebeek in [#9264](https://github.com/openrewrite/rewrite/pull/9264)
* Enable Python test harness to assert about source files a recipe generates by @sambsnyd in [#9265](https://github.com/openrewrite/rewrite/pull/9265)
* JavaScript: apply changed scalars in padded elements on RPC receive by @greg-at-moderne in [#9269](https://github.com/openrewrite/rewrite/pull/9269)
* JSON: match numeric literals in JsonPath filter equality by @greg-at-moderne in [#9268](https://github.com/openrewrite/rewrite/pull/9268)
* JavaScript: fix AddImport merging into empty named import by @greg-at-moderne in [#9257](https://github.com/openrewrite/rewrite/pull/9257)
* HCL: select blocks by their labels in JsonPathMatcher by @greg-at-moderne in [#9273](https://github.com/openrewrite/rewrite/pull/9273)
* JavaScript: fix wrong resolved version for duplicate packages in yarn/pnpm locks by @greg-at-moderne in [#9271](https://github.com/openrewrite/rewrite/pull/9271)
* JavaScript: keep markers and type attribution through Prettier format by @greg-at-moderne in [#9276](https://github.com/openrewrite/rewrite/pull/9276)
* Fix Xml.Tag.withValue IndexOutOfBoundsException on empty element by @greg-at-moderne in [#9274](https://github.com/openrewrite/rewrite/pull/9274)
* HCL: add ChangeValue recipe by @greg-at-moderne in [#9279](https://github.com/openrewrite/rewrite/pull/9279)
* HCL: don't re-indent heredoc content in AutoFormat by @greg-at-moderne in [#9278](https://github.com/openrewrite/rewrite/pull/9278)
* HCL: add HclValues.stringValue and label/block name helpers by @greg-at-moderne in [#9281](https://github.com/openrewrite/rewrite/pull/9281)
* rewrite-test: don't count generated or deleted files as changed again two cycles later by @knutwannheden in [#9277](https://github.com/openrewrite/rewrite/pull/9277)
* Make RemoveUnusedProperties and RemoveUnusedImports converge in one cycle by @knutwannheden in [#9270](https://github.com/openrewrite/rewrite/pull/9270)
* Hcl: `AddContent` recipe by @greg-at-moderne in [#9283](https://github.com/openrewrite/rewrite/pull/9283)
* Honour a composite's causesAnotherCycle for its children's changes by @knutwannheden in [#9272](https://github.com/openrewrite/rewrite/pull/9272)
* JavaScript: UpgradeTransitiveDependencyVersion writes no override for… by @greg-at-moderne in [#9282](https://github.com/openrewrite/rewrite/pull/9282)
* JavaScript: read multi-document pnpm 11+ locks when refreshing resolved dependencies by @greg-at-moderne in [#9285](https://github.com/openrewrite/rewrite/pull/9285)
* HCL: match top-level attributes, nested blocks by recursive descent a… by @greg-at-moderne in [#9280](https://github.com/openrewrite/rewrite/pull/9280)
* Python RPC: encode frames with orjson and read received messages in place by @knutwannheden in [#9288](https://github.com/openrewrite/rewrite/pull/9288)
* Go: return same CompilationUnit from withImports when imports are unchanged by @greg-at-moderne in [#9286](https://github.com/openrewrite/rewrite/pull/9286)
* Python printer: dispatch nodes through accept_python/accept_java by @knutwannheden in [#9289](https://github.com/openrewrite/rewrite/pull/9289)
* JavaScript: the RPC server pages at the default batch size by @knutwannheden in [#9295](https://github.com/openrewrite/rewrite/pull/9295)
* TOML: decode basic-string escapes in Toml.Literal values by @knutwannheden in [#9296](https://github.com/openrewrite/rewrite/pull/9296)
* Python: close wrong-lock paths in native lock regeneration found against the real package managers by @knutwannheden in [#9297](https://github.com/openrewrite/rewrite/pull/9297)
* Python: ADR 0014 and uv optional-dependencies bookkeeping in native lock regeneration by @knutwannheden in [#9299](https://github.com/openrewrite/rewrite/pull/9299)
* Python: uv.lock bookkeeping the corpus replay ranked: extras, constraints, dependents, stamps by @knutwannheden in [#9300](https://github.com/openrewrite/rewrite/pull/9300)
* Python: read lock regeneration fixtures from openrewrite/rewrite-python-lock-fixtures by @knutwannheden in [#9301](https://github.com/openrewrite/rewrite/pull/9301)
* Gradle: type-attribute develocity \{\} settings blocks, keep Develocity 3.19.2 by @timtebeek in [#9303](https://github.com/openrewrite/rewrite/pull/9303)
* Scala: type repeated params as `T[]` for Java and `immutable.Seq` for Scala by @greg-at-moderne in [#9302](https://github.com/openrewrite/rewrite/pull/9302)
* JavaScript: regenerate npm locks as npm 11.21.1 and 12.2.1 by @knutwannheden in [#9304](https://github.com/openrewrite/rewrite/pull/9304)
* Python: use X | None instead of Optional[X] in recipes by @timtebeek in [#9306](https://github.com/openrewrite/rewrite/pull/9306)
* JavaScript: attribute calls and fields bound by a destructured `require()` to the required module by @greg-at-moderne in [#9307](https://github.com/openrewrite/rewrite/pull/9307)
* JavaScript: RPC codecs receive and send synchronously by @knutwannheden in [#9247](https://github.com/openrewrite/rewrite/pull/9247)
* JavaScript: stream RPC object pages through a worker transport by @knutwannheden in [#9293](https://github.com/openrewrite/rewrite/pull/9293)
* Python: fix SDK spots where recipe results disagree with real runs or with a parse by @knutwannheden in [#9308](https://github.com/openrewrite/rewrite/pull/9308)
* Python: remove_import leaves the tree a parse of its output gives by @knutwannheden in [#9309](https://github.com/openrewrite/rewrite/pull/9309)
* RPC: send comment-free Spaces as refs by @knutwannheden in [#9290](https://github.com/openrewrite/rewrite/pull/9290)
* Python: ChangeImport moves members read through dotted and from-imported modules by @knutwannheden in [#9310](https://github.com/openrewrite/rewrite/pull/9310)
* Python: port uv-pep508's marker algebra for uv lock regeneration by @knutwannheden in [#9305](https://github.com/openrewrite/rewrite/pull/9305)
* Python: uv.lock edits render untouched lines as uv 0.13.4 writes them, and keep a satisfied lock by @knutwannheden in [#9311](https://github.com/openrewrite/rewrite/pull/9311)
* Python: uv.lock edits that fork, revise dependents, or use environments and overrides match uv 0.13.4 by @knutwannheden in [#9312](https://github.com/openrewrite/rewrite/pull/9312)
* Python: a Pipfile edit locks the packages its new versions require by @knutwannheden in [#9313](https://github.com/openrewrite/rewrite/pull/9313)
* Fix provided deps resolution for maven by @BoykoAlex in [#8306](https://github.com/openrewrite/rewrite/pull/8306)
* Find transitive targets in Gradle ExcludeDependency after an earlier model change by @steve-aom-elliott in [#9298](https://github.com/openrewrite/rewrite/pull/9298)
* Use ListUtils.filter in FilterTagChildrenVisitor by @timtebeek in [#9323](https://github.com/openrewrite/rewrite/pull/9323)
* Use `TreeVisitor#reduce` instead of a captured accumulator by @timtebeek in [#9328](https://github.com/openrewrite/rewrite/pull/9328)
* Use `ListUtils.filter` instead of mapping elements to `null` by @timtebeek in [#9327](https://github.com/openrewrite/rewrite/pull/9327)
* Python: a uv.lock specifier records its numerals as PEP 440 writes them by @knutwannheden in [#9320](https://github.com/openrewrite/rewrite/pull/9320)
* Python: a uv.lock edit splits the forks of a lock that is already forked by @knutwannheden in [#9321](https://github.com/openrewrite/rewrite/pull/9321)
* Python: a changed uv.lock records each index as the manifest configures it by @knutwannheden in [#9324](https://github.com/openrewrite/rewrite/pull/9324)
* Python: each uv.lock entry's own forks are recorded in solve order by @knutwannheden in [#9325](https://github.com/openrewrite/rewrite/pull/9325)
* ADR 0014: port each Python resolver, and pipenv's install-correct contract by @knutwannheden in [#9314](https://github.com/openrewrite/rewrite/pull/9314)
* Python: a uv.lock keeps the marker it recorded, and the upload times an HTML index lists by @knutwannheden in [#9330](https://github.com/openrewrite/rewrite/pull/9330)
* Python: the uv reachability pass holds a marker, as uv does by @knutwannheden in [#9332](https://github.com/openrewrite/rewrite/pull/9332)
* Python: parse implicit string concatenation into a balanced tree by @timtebeek in [#9315](https://github.com/openrewrite/rewrite/pull/9315)
* Python: write synthesized line breaks in the file's own line ending by @timtebeek in [#9316](https://github.com/openrewrite/rewrite/pull/9316)
* Python: type a decorated class declaration as the class it declares by @timtebeek in [#9317](https://github.com/openrewrite/rewrite/pull/9317)
* Python: keep CRLF line breaks inside multi-line f-strings and t-strings by @timtebeek in [#9318](https://github.com/openrewrite/rewrite/pull/9318)
* Scala: `ListBuffer.empty[T]` and other parameterless generic factories get their instantiated return type by @greg-at-moderne in [#9333](https://github.com/openrewrite/rewrite/pull/9333)
* Python: add an import to its isort section where the imports are grouped by @timtebeek in [#9319](https://github.com/openrewrite/rewrite/pull/9319)
* Do not count a static import as a reference when adding a type import by @timtebeek in [#9329](https://github.com/openrewrite/rewrite/pull/9329)
* Scala: map extractor patterns (`case Some(v)`, `h :: t`) to `J.DeconstructionPattern` by @greg-at-moderne in [#9338](https://github.com/openrewrite/rewrite/pull/9338)
* Scala: key Java static methods under the Java owner and strip `$` only from module classes by @greg-at-moderne in [#9337](https://github.com/openrewrite/rewrite/pull/9337)
* Scala: type attribution for annotation names by @greg-at-moderne in [#9335](https://github.com/openrewrite/rewrite/pull/9335)
* JavaScript: one resolver for import and require() module bindings by @greg-at-moderne in [#9339](https://github.com/openrewrite/rewrite/pull/9339)
* Fix Gradle 9 migration dependency and wrapper compatibility by @jkschneider in [#9340](https://github.com/openrewrite/rewrite/pull/9340)
* JavaScript: keep only string-valued `engines` entries in NodeResolutionResult by @knutwannheden in [#9345](https://github.com/openrewrite/rewrite/pull/9345)
* JavaScript: keep directories and the pnpm store out of project discovery by @knutwannheden in [#9346](https://github.com/openrewrite/rewrite/pull/9346)
* JavaScript: escape lone surrogates in member names of type attribution by @knutwannheden in [#9344](https://github.com/openrewrite/rewrite/pull/9344)
* Keep a file parseable when a Javadoc reference's package cannot be listed by @knutwannheden in [#9343](https://github.com/openrewrite/rewrite/pull/9343)
* JavaScript: escape lone surrogates in the name of a call on `this` by @knutwannheden in [#9347](https://github.com/openrewrite/rewrite/pull/9347)
* Scala: spell lone surrogates in J.Literal values as escapes by @knutwannheden in [#9348](https://github.com/openrewrite/rewrite/pull/9348)
* Submit only shipped dependencies of the released commit to the dependency graph by @timtebeek in [#9349](https://github.com/openrewrite/rewrite/pull/9349)
* Remove SortDependencies from Maven BestPractices by @steve-aom-elliott in [#9350](https://github.com/openrewrite/rewrite/pull/9350)
* Attribute Markup markers to the recipe that added them by @natedanner in [#9326](https://github.com/openrewrite/rewrite/pull/9326)
* JavaType equality works for lazily loaded types by @sambsnyd in [#9352](https://github.com/openrewrite/rewrite/pull/9352)
* ChangeType updates fully qualified type references in Javadoc by @sambsnyd in [#9351](https://github.com/openrewrite/rewrite/pull/9351)
* Give `MavenSettings` object identity so a build's modules share one copy when serialized by @jkschneider in [#9355](https://github.com/openrewrite/rewrite/pull/9355)
* Python: publish options of the recipes that delegate to Java by @knutwannheden in [#9336](https://github.com/openrewrite/rewrite/pull/9336)
* Fail tests, not production runs, on a cursor whose parent holds the same element by @jkschneider in [#9356](https://github.com/openrewrite/rewrite/pull/9356)
* Scala: fix semicolon (`;`) parsing between statements by @greg-at-moderne in [#9358](https://github.com/openrewrite/rewrite/pull/9358)
* Scala: type attribution names nested classes by their JVM binary name (`Map$Entry`, `Outer$Inner`) by @greg-at-moderne in [#9360](https://github.com/openrewrite/rewrite/pull/9360)
* Python: leave a dependency's own tests out of its exported types, and read its files as ty does by @jkschneider in [#9234](https://github.com/openrewrite/rewrite/pull/9234)
* Record file deletions in RPC BatchVisit by @greg-at-moderne in [#9364](https://github.com/openrewrite/rewrite/pull/9364)
* Mark test `Assertions` and `SourceSpecs` with `@CheckReturnValue` by @timtebeek in [#9366](https://github.com/openrewrite/rewrite/pull/9366)
* Fail `rewriteRun` when a `ScanningRecipe` accumulator keeps a `Heavyweight` object by @jkschneider in [#9367](https://github.com/openrewrite/rewrite/pull/9367)
* Java: Key local variable types by declaration position so sibling locals don't share flags, annotations by @greg-at-moderne in [#9365](https://github.com/openrewrite/rewrite/pull/9365)
* Mark immutable-result APIs with `@CheckReturnValue` by @timtebeek in [#9369](https://github.com/openrewrite/rewrite/pull/9369)
* Python: resolve setuptools dependencies without building in the source tree by @knutwannheden in [#9370](https://github.com/openrewrite/rewrite/pull/9370)
* Python: share one RPC process across tests, resetting it between them by @knutwannheden in [#9374](https://github.com/openrewrite/rewrite/pull/9374)
* Stop discarding `ListUtils.map` results by @timtebeek in [#9368](https://github.com/openrewrite/rewrite/pull/9368)
* rewriteRun runs a verification cycle after declared expected cycles by @knutwannheden in [#9359](https://github.com/openrewrite/rewrite/pull/9359)
* rewriteRun fails a test whose recipe leaves an import unused by @knutwannheden in [#9375](https://github.com/openrewrite/rewrite/pull/9375)
* RemoveRedundantProperties: only remove properties older than the parent's value by @timtebeek in [#9372](https://github.com/openrewrite/rewrite/pull/9372)
* AddOrUpdateAnnotationAttribute types the enum constants it writes by @knutwannheden in [#9379](https://github.com/openrewrite/rewrite/pull/9379)
* RemoveImport unfolds a star import only into named types and keeps a written alias by @knutwannheden in [#9377](https://github.com/openrewrite/rewrite/pull/9377)
* RemoveAnnotationAttribute removes the imports the removed value used by @knutwannheden in [#9378](https://github.com/openrewrite/rewrite/pull/9378)
* Resolve the Tooling API plugin through MAVEN_CENTRAL_MIRROR_URL when it is set by @jkschneider in [#9380](https://github.com/openrewrite/rewrite/pull/9380)
* Use MAVEN_CENTRAL_MIRROR_URL in place of Maven Central in model builds by @jkschneider in [#9383](https://github.com/openrewrite/rewrite/pull/9383)
* Give rewrite-maven's tests that set up their own context the Maven Central mirror (tests only) by @jkschneider in [#9384](https://github.com/openrewrite/rewrite/pull/9384)
* Send the Gradle plugin portal to MAVEN_CENTRAL_MIRROR_URL in model builds too by @jkschneider in [#9385](https://github.com/openrewrite/rewrite/pull/9385)
* Probe local servers in repositoryOrder, since oss.sonatype.org now redirects to Maven Central by @jkschneider in [#9386](https://github.com/openrewrite/rewrite/pull/9386)
* Let one test at a time use withLocalRepository, and take customInitScript's plugin from the mirror by @jkschneider in [#9387](https://github.com/openrewrite/rewrite/pull/9387)
* Send Sonatype's snapshot repositories to MAVEN_CENTRAL_MIRROR_URL in model builds too by @jkschneider in [#9389](https://github.com/openrewrite/rewrite/pull/9389)
* Keep MavenPomDownloaderTest and ResolvedPomTest off Maven Central and Sonatype (tests only) by @jkschneider in [#9388](https://github.com/openrewrite/rewrite/pull/9388)
* Preserve primitive parameter types in FindSymbols signatures by @jkschneider in [#9390](https://github.com/openrewrite/rewrite/pull/9390)
* Python: provision the dependency environment from the manifest the markers read by @knutwannheden in [#9373](https://github.com/openrewrite/rewrite/pull/9373)
* Handle Maven RELEASE and LATEST dependency selectors by @jkschneider in [#9391](https://github.com/openrewrite/rewrite/pull/9391)
* Install each RPC engine version once when several test forks start it at once by @jkschneider in [#9396](https://github.com/openrewrite/rewrite/pull/9396)
* Compute rewrite-python's engine version from its commit in every build, rather than read back the file an earlier build left by @jkschneider in [#9395](https://github.com/openrewrite/rewrite/pull/9395)
* Expect the mirror's URL in MavenDependencyFailuresTest as the downloader normalizes it, http when only http answers by @jkschneider in [#9397](https://github.com/openrewrite/rewrite/pull/9397)
* Declare a shared BOM property override once, and settle upgrades of plugin-managed versions by @knutwannheden in [#9371](https://github.com/openrewrite/rewrite/pull/9371)
* JavaScript: fix deleted trees in BatchVisit and RecipeSpec support for generated and deleted files by @greg-at-moderne in [#9361](https://github.com/openrewrite/rewrite/pull/9361)
* Scala: key objects by their binary name (`Foo$`) so classes and companions don't mix up by @greg-at-moderne in [#9398](https://github.com/openrewrite/rewrite/pull/9398)
* JavaScript: flag async callbacks in sync array methods only on array receivers by @knutwannheden in [#9401](https://github.com/openrewrite/rewrite/pull/9401)
* Add Gradle RemoveExclusion recipe by @timtebeek in [#9376](https://github.com/openrewrite/rewrite/pull/9376)
* Scala: a union type is a MultiCatch of its alternatives by @greg-at-moderne in [#9334](https://github.com/openrewrite/rewrite/pull/9334)
* C#: keep global.json msbuild-sdks while parsing instead of deleting the file by @macsux in [#9382](https://github.com/openrewrite/rewrite/pull/9382)
* Add UpdateProjectUrlFromGitOrigin by @steve-aom-elliott in [#9322](https://github.com/openrewrite/rewrite/pull/9322)
* Remove the benchmarks that load rewrite-spring's recipes, which made rewrite depend on rewrite-spring by @jkschneider in [#9404](https://github.com/openrewrite/rewrite/pull/9404)
* Run rewrite-python's install and tests after pythonUpdateVersion, which rewrites the pyproject.toml they read by @jkschneider in [#9405](https://github.com/openrewrite/rewrite/pull/9405)
* Set only pyproject.toml's own version in pythonUpdateVersion, not ruff's target-version and ty's python-version too by @jkschneider in [#9407](https://github.com/openrewrite/rewrite/pull/9407)

#### [rewrite 8.93.11](https://github.com/openrewrite/rewrite/releases/tag/v8.93.11)

* Scala: describe a type variable's bound once, however often the bound mentions it by @jkschneider in [#9232](https://github.com/openrewrite/rewrite/pull/9232)
* Make a capped RPC peer the OOM killer's first choice by @jkschneider in [#9233](https://github.com/openrewrite/rewrite/pull/9233)

#### [rewrite 8.93.10](https://github.com/openrewrite/rewrite/releases/tag/v8.93.10)

* Scala: describe a type variable's bound once, however often the bound mentions it by @jkschneider in [#9232](https://github.com/openrewrite/rewrite/pull/9232)
* Make a capped RPC peer the OOM killer's first choice by @jkschneider in [#9233](https://github.com/openrewrite/rewrite/pull/9233)

#### [rewrite 8.93.9](https://github.com/openrewrite/rewrite/releases/tag/v8.93.9)

* Scala: mark implicit arguments and implicit imports by @greg-at-moderne in [#9204](https://github.com/openrewrite/rewrite/pull/9204)
* Insert context-free JavaTemplate statements beside expression statements by @timtebeek in [#9206](https://github.com/openrewrite/rewrite/pull/9206)
* Yaml: don't replace asterisk patterns within quoted strings by @greg-at-moderne in [#9205](https://github.com/openrewrite/rewrite/pull/9205)
* Parse GitHub Actions workflow lockfiles as YAML by @timtebeek in [#9209](https://github.com/openrewrite/rewrite/pull/9209)
* Capture dependency exclude rules in the Gradle tooling model by @steve-aom-elliott in [#9208](https://github.com/openrewrite/rewrite/pull/9208)
* Python: Python2 parsing fixes by @greg-at-moderne in [#9211](https://github.com/openrewrite/rewrite/pull/9211)
* SemanticallyEqual: compare record deconstruction patterns in instanceof by @greg-at-moderne in [#9212](https://github.com/openrewrite/rewrite/pull/9212)
* Scala library classes now keep supertypes regardless of parse order by @greg-at-moderne in [#9215](https://github.com/openrewrite/rewrite/pull/9215)
* Gradle: add RemoveExtraProperty recipe by @sullis in [#9083](https://github.com/openrewrite/rewrite/pull/9083)
* Scala: attribute calls with method types instantiated at the call site by @greg-at-moderne in [#9216](https://github.com/openrewrite/rewrite/pull/9216)
* Add Gradle RemoveDuplicateDependencies recipe by @sullis in [#9155](https://github.com/openrewrite/rewrite/pull/9155)
* JavaTemplate: resolve template type variables before splicing user parameters by @greg-at-moderne in [#9214](https://github.com/openrewrite/rewrite/pull/9214)
* Python printers: separate not/await from identifier-like operands by @greg-at-moderne in [#9213](https://github.com/openrewrite/rewrite/pull/9213)
* Scala: fix typing of inferred vals and ill-kinded type arguments by @greg-at-moderne in [#9217](https://github.com/openrewrite/rewrite/pull/9217)
* Hcl: getSimpleName() to handle quoted and computed object keys by @greg-at-moderne in [#9219](https://github.com/openrewrite/rewrite/pull/9219)
* Hcl: withAttributeValue no longer quotes bools or numbers by @greg-at-moderne in [#9218](https://github.com/openrewrite/rewrite/pull/9218)
* Hcl: Adding the ChangeKey recipe by @greg-at-moderne in [#9221](https://github.com/openrewrite/rewrite/pull/9221)
* Add Gradle ExcludeDependency recipe by @steve-aom-elliott in [#9114](https://github.com/openrewrite/rewrite/pull/9114)
* Stop the Java type mapping from completing symbols the type factory already has by @knutwannheden in [#9210](https://github.com/openrewrite/rewrite/pull/9210)
* rewriteRun checks for common recipe defects by @jkschneider in [#9223](https://github.com/openrewrite/rewrite/pull/9223)
* Kotlin: ask the type factory before materializing FIR classes by @knutwannheden in [#9225](https://github.com/openrewrite/rewrite/pull/9225)
* Type a Kotlin invocation of an inherited Java method by its declaring class by @knutwannheden in [#9224](https://github.com/openrewrite/rewrite/pull/9224)
* rewriteRun checks for imports, parser-shaped trees and composite order by @jkschneider in [#9229](https://github.com/openrewrite/rewrite/pull/9229)
* Import types from java.lang subpackages in ShortenFullyQualifiedTypeReferences by @jkschneider in [#9230](https://github.com/openrewrite/rewrite/pull/9230)
* Keep the project attribute on a Gradle project dependency reached transitively first by @jkschneider in [#9231](https://github.com/openrewrite/rewrite/pull/9231)
* C#: stop in-process MSBuild builds lending their cwd and environment by @macsux in [#9222](https://github.com/openrewrite/rewrite/pull/9222)

#### [rewrite 8.93.8](https://github.com/openrewrite/rewrite/releases/tag/v8.93.8)

* C#: model referenced projects as ProjectReferences, not resolved packages by @macsux in [#9197](https://github.com/openrewrite/rewrite/pull/9197)
* Add GitHistory and GitFileHistory markers by @jkschneider in [#9196](https://github.com/openrewrite/rewrite/pull/9196)
* Leave edits that change only markers out of SourcesFileResults and RecipeRunStats by @jkschneider in [#9202](https://github.com/openrewrite/rewrite/pull/9202)
* C#: pin System.Security.Cryptography.Xml and .Pkcs to 10.0.13 by @kmccarp in [#9201](https://github.com/openrewrite/rewrite/pull/9201)
* Add ModuleHasDependency for .NET, npm, Python and Go by @macsux in [#9200](https://github.com/openrewrite/rewrite/pull/9200)
* Record recipe exceptions also against nodes which didn't exist by @greg-at-moderne in [#9178](https://github.com/openrewrite/rewrite/pull/9178)

#### [rewrite 8.93.7](https://github.com/openrewrite/rewrite/releases/tag/v8.93.7)

* Support explicit receiver parameters in the Java parsers by @sambsnyd in [#9184](https://github.com/openrewrite/rewrite/pull/9184)
* Scala: improve function call parsing by @greg-at-moderne in [#9187](https://github.com/openrewrite/rewrite/pull/9187)
* Docker: preserve whitespace before commas in JSON arrays and accept '=' in ADD/COPY paths by @greg-at-moderne in [#9188](https://github.com/openrewrite/rewrite/pull/9188)
* JSON: report syntax errors as a ParseError instead of an NPE or non-idempotent print by @greg-at-moderne in [#9191](https://github.com/openrewrite/rewrite/pull/9191)
* ScalaParser to always include the Scala library on the classpath by @greg-at-moderne in [#9190](https://github.com/openrewrite/rewrite/pull/9190)
* JavaScript: decode UTF-16 sources with a BOM instead of reading them as UTF-8 by @greg-at-moderne in [#9192](https://github.com/openrewrite/rewrite/pull/9192)
* Scala: fix even more cases of lacking type attribution by @greg-at-moderne in [#9193](https://github.com/openrewrite/rewrite/pull/9193)
* Docker: expect Python 3.15 suggestion in EOL image tests by @greg-at-moderne in [#9195](https://github.com/openrewrite/rewrite/pull/9195)
* Scala: type lambda parameters, binders, interpolators and named-argum… by @greg-at-moderne in [#9194](https://github.com/openrewrite/rewrite/pull/9194)
* Groovy: only accept Jenkinsfile as a whole word, not JenkinsfileAsGroovy.java by @timtebeek in [#9198](https://github.com/openrewrite/rewrite/pull/9198)
* Go: Include the error message in case of failures in goListModules by @greg-at-moderne in [#9199](https://github.com/openrewrite/rewrite/pull/9199)

#### [rewrite 8.93.6](https://github.com/openrewrite/rewrite/releases/tag/v8.93.6)

* C#: print a variable declarator through a NamedVariable override by @macsux in [#9148](https://github.com/openrewrite/rewrite/pull/9148)
* C#: evaluate every project when solution-level restore graph fails by @macsux in [#9182](https://github.com/openrewrite/rewrite/pull/9182)
* C#: add a utility that shows how a snippet maps onto the LST by @macsux in [#9183](https://github.com/openrewrite/rewrite/pull/9183)
* Keep the scope of scoped packages when reading bun.lock by @jkschneider in [#9181](https://github.com/openrewrite/rewrite/pull/9181)
* C#: resolve .NET workloads and skip target frameworks the SDK cannot build by @macsux in [#9185](https://github.com/openrewrite/rewrite/pull/9185)

#### [rewrite 8.93.5](https://github.com/openrewrite/rewrite/releases/tag/v8.93.5)

* Making SemanticallyEqual visitor not trip on non-Java sources by @greg-at-moderne in [#9177](https://github.com/openrewrite/rewrite/pull/9177)
* Check only the declarations of packages a Go parse imports by @knutwannheden in [#9180](https://github.com/openrewrite/rewrite/pull/9180)

#### [rewrite 8.93.4](https://github.com/openrewrite/rewrite/releases/tag/v8.93.4)

**A temporary outage in Nuget failed this release halfway through publishing. Use 8.93.5!**

* Serve UpgradePluginVersionTest's plugin repository locally instead of from Red Hat by @jkschneider in [#9164](https://github.com/openrewrite/rewrite/pull/9164)
* Remove properties that equal the Maven 3.10 super POM defaults in MigrateToMaven3_10 by @timtebeek in [#9147](https://github.com/openrewrite/rewrite/pull/9147)
* Scala: fix support for Unicode arrows by @greg-at-moderne in [#9167](https://github.com/openrewrite/rewrite/pull/9167)
* Mark Kotlin top-level functions and properties static by @greg-at-moderne in [#9165](https://github.com/openrewrite/rewrite/pull/9165)
* UnnecessaryParentheses keeps line breaks and comments when unwrapping by @greg-at-moderne in [#9166](https://github.com/openrewrite/rewrite/pull/9166)
* JavaScript: Add missing package-lock.json entry by @greg-at-moderne in [#9172](https://github.com/openrewrite/rewrite/pull/9172)
* Anchor both sides of `..` at segment boundaries in TypeNameMatcher by @knutwannheden in [#9168](https://github.com/openrewrite/rewrite/pull/9168)
* BlockStatementTemplateGenerator not to use null for leadingAnnotations by @greg-at-moderne in [#9173](https://github.com/openrewrite/rewrite/pull/9173)
* Null safety for `AddImport` against JavaScript sources by @greg-at-moderne in [#9175](https://github.com/openrewrite/rewrite/pull/9175)
* Address flakiness in tsconfig.test.ts by @greg-at-moderne in [#9176](https://github.com/openrewrite/rewrite/pull/9176)
* Scala: fix several cases of lacking type attribution by @greg-at-moderne in [#9174](https://github.com/openrewrite/rewrite/pull/9174)
* Faster exported-types enumeration for JavaScript, Python and Go dependencies by @jkschneider in [#9179](https://github.com/openrewrite/rewrite/pull/9179)

#### [rewrite 8.93.3](https://github.com/openrewrite/rewrite/releases/tag/v8.93.3)

* Reproduce Yarn 1.0.0 to 1.6.0 and npm 7.0.4 to 7.1.0 in Node lock regeneration by @jkschneider in [#9163](https://github.com/openrewrite/rewrite/pull/9163)

#### [rewrite 8.93.2](https://github.com/openrewrite/rewrite/releases/tag/v8.93.2)

* Add RemoveInvalidParentRelativePath to MigrateToMaven3_10 by @timtebeek in [#9146](https://github.com/openrewrite/rewrite/pull/9146)
* Merge duplicate plugin declarations like Maven 3 did, as Maven 3.10 rejects them by @timtebeek in [#9141](https://github.com/openrewrite/rewrite/pull/9141)
* Only increment the project's own version in IncrementProjectVersion by @timtebeek in [#9162](https://github.com/openrewrite/rewrite/pull/9162)

#### [rewrite 8.93.1](https://github.com/openrewrite/rewrite/releases/tag/v8.93.1)

* Regenerate Node lock files with a port of each package manager's own resolver by @jkschneider in [#9149](https://github.com/openrewrite/rewrite/pull/9149)
* Link Node workspace members once per scan and match workspace paths without wildcards by @jkschneider in [#9152](https://github.com/openrewrite/rewrite/pull/9152)
* Move node-semver into rewrite-javascript so the dependency recipes run on hosts with an older rewrite-core by @jkschneider in [#9153](https://github.com/openrewrite/rewrite/pull/9153)
* Drop semver flags and helpers that only tests use by @jkschneider in [#9154](https://github.com/openrewrite/rewrite/pull/9154)
* Run the receive-failure RPC test at the default page size by @jkschneider in [#9158](https://github.com/openrewrite/rewrite/pull/9158)
* Let a DependencyTypes request name the directory its package is installed in by @jkschneider in [#9157](https://github.com/openrewrite/rewrite/pull/9157)
* Regenerate Node locks as the package manager release that built the LST by @jkschneider in [#9161](https://github.com/openrewrite/rewrite/pull/9161)
* Regenerate Node locks from every manifest the repository holds, and never lower a range on upgrade by @jkschneider in [#9160](https://github.com/openrewrite/rewrite/pull/9160)
* Hold a TypeScript program only while its project's files are being parsed by @jkschneider in [#9159](https://github.com/openrewrite/rewrite/pull/9159)
* Go: read and write an RPC page without reflection by @shanman190 in [#9129](https://github.com/openrewrite/rewrite/pull/9129)
* Python: spend less per element over RPC, and move a frame in one read and one write by @shanman190 in [#9130](https://github.com/openrewrite/rewrite/pull/9130)
* Serialize a JS RPC message in one pass when it fits in a string by @shanman190 in [#9131](https://github.com/openrewrite/rewrite/pull/9131)
* Match Maven 3.10's duplicate dependency check in RemoveDuplicateDependencies by @timtebeek in [#9140](https://github.com/openrewrite/rewrite/pull/9140)

#### [rewrite-apache 2.35.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.35.0)

* Upgrade HttpClient 5 migration target to 5.6.x by @sullis in [#153](https://github.com/openrewrite/rewrite-apache/pull/153)
* Expect httpclient5 5.6.x in migrateTransitiveParent test by @timtebeek in [#154](https://github.com/openrewrite/rewrite-apache/pull/154)
* Migrate ProxyAuthenticationStrategy to DefaultAuthenticationStrategy by @jkschneider in [#155](https://github.com/openrewrite/rewrite-apache/pull/155)
* Regenerate type table without pre-release dependencies by @timtebeek in [#156](https://github.com/openrewrite/rewrite-apache/pull/156)
* Keep method type in sync with migrated return type in MigratePoolingNHttpClientConnectionManager by @knutwannheden in [#157](https://github.com/openrewrite/rewrite-apache/pull/157)
* Remove consecutive duplicate recipe entries by @timtebeek in [#158](https://github.com/openrewrite/rewrite-apache/pull/158)
* MigratePoolingNHttpClientConnectionManager removes the imports it leaves unused by @knutwannheden in [#160](https://github.com/openrewrite/rewrite-apache/pull/160)
* Migrate attributed Collections cardinality calls to frequency by @jkschneider in [#161](https://github.com/openrewrite/rewrite-apache/pull/161)
* Move test-only parser dependencies to type tables by @timtebeek in [#162](https://github.com/openrewrite/rewrite-apache/pull/162)

#### [rewrite-cucumber-jvm 2.21.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.21.0)

* Flag `@RunWith` on a subclass of the Cucumber JUnit 4 runner by @timtebeek in [#70](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/70)
* Give the rewritten step expression literal the value of its text by @jkschneider in [#71](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/71)
* Drop a cycles(2) that sets the default by @knutwannheden in [#74](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/74)
* Publish CucumberToJunitPlatformSuiteTest's corporate parent to the local repository by @jkschneider in [#75](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/75)

#### [rewrite-github-actions 3.34.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.34.0)

* Resolve PinGitHubActionsToSha offline and drop the githubApiToken option by @timtebeek in [#233](https://github.com/openrewrite/rewrite-github-actions/pull/233)
* Seed more widely used actions for SHA pinning by @timtebeek in [#234](https://github.com/openrewrite/rewrite-github-actions/pull/234)
* Treat `$/` self-repository references like local actions by @timtebeek in [#235](https://github.com/openrewrite/rewrite-github-actions/pull/235)
* UpgradeSlackNotificationVersion2: don't reformat the whole workflow by @jkschneider in [#236](https://github.com/openrewrite/rewrite-github-actions/pull/236)
* Add target Python version to matrix axes feeding `setup-python` by @timtebeek in [#238](https://github.com/openrewrite/rewrite-github-actions/pull/238)
* Add `actions/setup-go` `go-version` upgrade recipe by @timtebeek in [#239](https://github.com/openrewrite/rewrite-github-actions/pull/239)
* Restrict `AddManualTrigger` to workflow files by @timtebeek in [#240](https://github.com/openrewrite/rewrite-github-actions/pull/240)

#### [rewrite-gitlab 0.26.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.26.0)

* Format only the entries MigrateTemplateToComponent and MigrateToRules add by @jkschneider in [#45](https://github.com/openrewrite/rewrite-gitlab/pull/45)

#### [rewrite-gradle-plugin 7.44.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.44.1)

* Keep kotlin-stdlib out of the published plugin metadata by @timtebeek in [#482](https://github.com/openrewrite/rewrite-gradle-plugin/pull/482)
* Publish the plugin marker to the Code Genome Project by @timtebeek in [#483](https://github.com/openrewrite/rewrite-gradle-plugin/pull/483)

#### [rewrite-hibernate 2.28.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.28.0)

* Match LazyCollectionOption by type and annotate qualified type arguments by @jkschneider in [#103](https://github.com/openrewrite/rewrite-hibernate/pull/103)
* Build generic types in MigrateUserType as parameterized types by @jkschneider in [#104](https://github.com/openrewrite/rewrite-hibernate/pull/104)
* Regenerate type table without pre-release dependencies by @timtebeek in [#105](https://github.com/openrewrite/rewrite-hibernate/pull/105)
* Keep method type in sync with migrated return type in MigrateUserType by @knutwannheden in [#106](https://github.com/openrewrite/rewrite-hibernate/pull/106)
* Opt the star-import AddScalarPreferStandardBasicTypes test out of the unused-import check by @knutwannheden in [#109](https://github.com/openrewrite/rewrite-hibernate/pull/109)
* Expect no BasicTypeReference import from AddScalarPreferStandardBasicTypes by @knutwannheden in [#110](https://github.com/openrewrite/rewrite-hibernate/pull/110)
* Migrate supported Hibernate basic registry names to JDBC codes by @jkschneider in [#111](https://github.com/openrewrite/rewrite-hibernate/pull/111)
* Align Hibernate 7 persistence descriptors with Jakarta Persistence 3.2 by @jkschneider in [#112](https://github.com/openrewrite/rewrite-hibernate/pull/112)
* Migrate Hibernate dialects configured in XML descriptors by @jkschneider in [#113](https://github.com/openrewrite/rewrite-hibernate/pull/113)

#### [rewrite-jackson 1.31.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.31.1)

* Skip classes with a `@JsonCreator` and stop leaving unused imports behind by @timtebeek in [#173](https://github.com/openrewrite/rewrite-jackson/pull/173)
* Don't copy the Jackson version property into inheriting modules by @knutwannheden in [#169](https://github.com/openrewrite/rewrite-jackson/pull/169)
* Keep catches compiling when the caught exception is passed on as an `IOException` by @timtebeek in [#174](https://github.com/openrewrite/rewrite-jackson/pull/174)
* Replace `JsonNode.textValue()` with `stringValue(null)` by @timtebeek in [#175](https://github.com/openrewrite/rewrite-jackson/pull/175)
* Keep `ParameterNamesModule` modes and flag unfoldable `ObjectMapper` setters by @timtebeek in [#176](https://github.com/openrewrite/rewrite-jackson/pull/176)
* Use REST Assured's Jackson 3 object mapper factory by @timtebeek in [#178](https://github.com/openrewrite/rewrite-jackson/pull/178)
* Remove built-in Jackson modules and add Jackson 3 artifacts used transitively by @timtebeek in [#177](https://github.com/openrewrite/rewrite-jackson/pull/177)
* Pass `onlyDirect` to `ModuleHasDependency` in `ModuleStillOnJackson2` by @timtebeek in [#179](https://github.com/openrewrite/rewrite-jackson/pull/179)
* Migrate AnnotationIntrospector.Pair and leave one-type catches plain by @jkschneider in [#181](https://github.com/openrewrite/rewrite-jackson/pull/181)
* Upgrade jackson-annotations to 2.22 by @sullis in [#180](https://github.com/openrewrite/rewrite-jackson/pull/180)
* Expect jackson-annotations 2.22 in tests after #180 by @timtebeek in [#182](https://github.com/openrewrite/rewrite-jackson/pull/182)
* Declare `ObjectCodec` variables as `ObjectReadContext` or `ObjectWriteContext` by @ds-xdev in [#183](https://github.com/openrewrite/rewrite-jackson/pull/183)

#### [rewrite-java-dependencies 1.65.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.65.0)

* Check the diagnostic's report without naming Maven Central's or the plugin portal's URL by @jkschneider in [#206](https://github.com/openrewrite/rewrite-java-dependencies/pull/206)
* Keep DependencyListTest and ModuleHasDependencyTest from asking Maven Central directly by @jkschneider in [#207](https://github.com/openrewrite/rewrite-java-dependencies/pull/207)
* Explain latest version selectors in dependency upgrade options by @jkschneider in [#208](https://github.com/openrewrite/rewrite-java-dependencies/pull/208)
* Add RemoveExclusion recipe for Gradle and Maven by @timtebeek in [#209](https://github.com/openrewrite/rewrite-java-dependencies/pull/209)
* Fix a dropped Gradle flag in ChangeDependency and two crashes in RelocatedDependencyCheck by @timtebeek in [#212](https://github.com/openrewrite/rewrite-java-dependencies/pull/212)
* Forward validate() to the Gradle and Maven delegates by @timtebeek in [#214](https://github.com/openrewrite/rewrite-java-dependencies/pull/214)
* Tidy build and docs: refresh recipes.csv, pin test deps, null-mark packages by @timtebeek in [#216](https://github.com/openrewrite/rewrite-java-dependencies/pull/216)
* Declare delegates' data tables and give every wrapper an instance name by @timtebeek in [#215](https://github.com/openrewrite/rewrite-java-dependencies/pull/215)
* Tidy recipe display names, descriptions, option and data table text by @timtebeek in [#213](https://github.com/openrewrite/rewrite-java-dependencies/pull/213)
* Tidy comments, asserts, Lombok and formatting in main sources by @timtebeek in [#217](https://github.com/openrewrite/rewrite-java-dependencies/pull/217)
* Make tests exercise their recipes, and cover Kotlin DSL and missing recipes by @timtebeek in [#220](https://github.com/openrewrite/rewrite-java-dependencies/pull/220)
* Share dependency matching and trim per-file work in search recipes by @timtebeek in [#218](https://github.com/openrewrite/rewrite-java-dependencies/pull/218)
* Only change relocated dependencies that keep their version, and clean up relocation data (E1–E4 of #211) by @timtebeek in [#219](https://github.com/openrewrite/rewrite-java-dependencies/pull/219)
* Resolve from `mavenCentral()` in `leaveGradleManagedDependencyWhenDisabled` by @timtebeek in [#221](https://github.com/openrewrite/rewrite-java-dependencies/pull/221)
* Refresh relocated dependency migrations with one Gradle task, and a skill by @timtebeek in [#222](https://github.com/openrewrite/rewrite-java-dependencies/pull/222)

#### [rewrite-java-dependencies 1.64.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.64.1)

* Add `onlyDirect` option to `ModuleHasDependency` by @steve-aom-elliott in [#199](https://github.com/openrewrite/rewrite-java-dependencies/pull/199)
* Add ExcludeDependency recipe for Gradle and Maven by @steve-aom-elliott in [#204](https://github.com/openrewrite/rewrite-java-dependencies/pull/204)

#### [rewrite-liberty 1.29.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.29.0)

* Expect the namespace recipes to complete in one cycle by @jkschneider in [#47](https://github.com/openrewrite/rewrite-liberty/pull/47)

#### [rewrite-logging-frameworks 3.35.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.35.0)

* Only convert format strings to `{}` placeholders when the output stays the same by @greg-at-moderne in [#309](https://github.com/openrewrite/rewrite-logging-frameworks/pull/309)
* A few fixes for `ParameterizedLogging` by @greg-at-moderne in [#308](https://github.com/openrewrite/rewrite-logging-frameworks/pull/308)
* Fix NPEs in PrintStackTraceToLogError, CompleteExceptionLogging by @greg-at-moderne in [#310](https://github.com/openrewrite/rewrite-logging-frameworks/pull/310)
* Respect log levels and markers in `RemoveUnnecessaryLogLevelGuards` and `ChangeLogLevel` by @greg-at-moderne in [#311](https://github.com/openrewrite/rewrite-logging-frameworks/pull/311)
* Keep markers and avoid uncompilable lambdas in WrapExpensiveLogStatementsInConditionals by @greg-at-moderne in [#307](https://github.com/openrewrite/rewrite-logging-frameworks/pull/307)
* `ChangeLoggersToPrivate` is now a scanning recipe and checks usages beyond current class by @greg-at-moderne in [#312](https://github.com/openrewrite/rewrite-logging-frameworks/pull/312)
* Fix `RemoveUnnecessaryLogLevelGuards` not to crash on leading comments by @greg-at-moderne in [#313](https://github.com/openrewrite/rewrite-logging-frameworks/pull/313)
* Fix LoggersNamedForEnclosingClass crashes and this.class handling in Groovy by @greg-at-moderne in [#314](https://github.com/openrewrite/rewrite-logging-frameworks/pull/314)
* `WrapExpensiveLogStatementsInConditionals` not to traverse javadocs by @greg-at-moderne in [#315](https://github.com/openrewrite/rewrite-logging-frameworks/pull/315)
* Type the null argument ConvertJulEntering adds as the null type by @jkschneider in [#316](https://github.com/openrewrite/rewrite-logging-frameworks/pull/316)
* Regenerate type table without pre-release dependencies by @timtebeek in [#317](https://github.com/openrewrite/rewrite-logging-frameworks/pull/317)
* Replace `ListUtils.map` used as a loop with an indexed loop by @timtebeek in [#319](https://github.com/openrewrite/rewrite-logging-frameworks/pull/319)
* Logging recipes remove the imports they leave unused by @knutwannheden in [#320](https://github.com/openrewrite/rewrite-logging-frameworks/pull/320)

#### [rewrite-mainframe 3.4.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.4.0)

* Replace `ListUtils.map` used as a loop with `forEach` by @timtebeek in [#186](https://github.com/moderneinc/rewrite-mainframe/pull/186)

#### [rewrite-mainframe 3.3.1](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.3.1)

* Print DB2 statements as written, and read COMMENT ON COLUMN and ADD CONSTRAINT by @jkschneider in [#183](https://github.com/moderneinc/rewrite-mainframe/pull/183)
* Read a DSN deck that opens with comments, or only frees, as a DSN deck by @jkschneider in [#184](https://github.com/moderneinc/rewrite-mainframe/pull/184)

#### [rewrite-mainframe 3.3.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.3.0)

* Name Lombok getters in code, since Javadoc cannot link to them by @timtebeek in [#173](https://github.com/moderneinc/rewrite-mainframe/pull/173)
* Read a range partition's STARTING FROM and ENDING AT bounds by @bmuschko in [#172](https://github.com/moderneinc/rewrite-mainframe/pull/172)
* Read the rest of a table when one element cannot be read by @bmuschko in [#174](https://github.com/moderneinc/rewrite-mainframe/pull/174)
* Leave another vendor's SQL to the resource step by @bmuschko in [#175](https://github.com/moderneinc/rewrite-mainframe/pull/175)
* Give REPLACE originals and preprocessor words ids of their own by @jkschneider in [#180](https://github.com/moderneinc/rewrite-mainframe/pull/180)
* Count any use of a condition name as a use of its item by @jkschneider in [#176](https://github.com/moderneinc/rewrite-mainframe/pull/176)
* Read a group SSA's segment, and LINK and XCTL as calls by @jkschneider in [#177](https://github.com/moderneinc/rewrite-mainframe/pull/177)
* Say which tables a DB2 query and view read by @jkschneider in [#178](https://github.com/moderneinc/rewrite-mainframe/pull/178)
* Read a DSN RUN deck as a bind deck, and say what it runs by @jkschneider in [#179](https://github.com/moderneinc/rewrite-mainframe/pull/179)
* Read DDL kept with the control cards as DDL by @jkschneider in [#181](https://github.com/moderneinc/rewrite-mainframe/pull/181)
* Say which tables an EXEC SQL block names, what it does to each, and where by @jkschneider in [#182](https://github.com/moderneinc/rewrite-mainframe/pull/182)

#### [rewrite-maven-plugin 6.51.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.51.0)

* Activate codegenome profile for Moderne CLI builds by @timtebeek in [#1226](https://github.com/openrewrite/rewrite-maven-plugin/pull/1226)
* Build KotlinIT's projects with Kotlin 2.4.21, which runs on JDK 25 by @jkschneider in [#1228](https://github.com/openrewrite/rewrite-maven-plugin/pull/1228)

#### [rewrite-micrometer 0.32.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.32.0)

* Fully qualify Micrometer's Metrics in MigrateEmptyLabelMiskCounter by @jkschneider in [#42](https://github.com/openrewrite/rewrite-micrometer/pull/42)
* Empty-label Misk recipes remove the listOf import they leave unused by @knutwannheden in [#44](https://github.com/openrewrite/rewrite-micrometer/pull/44)

#### [rewrite-micronaut 2.40.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.40.0)

* Send JSR-305 annotations and JwtCookieTokenReader to Micronaut types by @jkschneider in [#158](https://github.com/openrewrite/rewrite-micronaut/pull/158)
* Give Micronaut artifact and plugin swaps an explicit version that exists by @timtebeek in [#159](https://github.com/openrewrite/rewrite-micronaut/pull/159)
* Make factory return-type and validation recipes converge in one cycle by @knutwannheden in [#160](https://github.com/openrewrite/rewrite-micronaut/pull/160)
* Keep factory method type in sync with its rewritten return type by @knutwannheden in [#161](https://github.com/openrewrite/rewrite-micronaut/pull/161)
* Keep each annotation's source and types, not its tree, in CopyNonInheritedAnnotations by @jkschneider in [#163](https://github.com/openrewrite/rewrite-micronaut/pull/163)
* Use the Maven settings and the Maven Central mirror in the tests' version lookups (tests only) by @jkschneider in [#164](https://github.com/openrewrite/rewrite-micronaut/pull/164)

#### [rewrite-migrate-java 3.47.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.47.0)

* Skip var for lambda and method reference initializers by @timtebeek in [#1290](https://github.com/openrewrite/rewrite-migrate-java/pull/1290)
* Update the JVM version in one case in UpdateSdkManTest by @greg-at-moderne in [#1291](https://github.com/openrewrite/rewrite-migrate-java/pull/1291)
* Only use var for primitives when the initializer has the declared type by @timtebeek in [#1293](https://github.com/openrewrite/rewrite-migrate-java/pull/1293)
* Only copy declared type arguments onto diamond constructors when they match by @timtebeek in [#1296](https://github.com/openrewrite/rewrite-migrate-java/pull/1296)
* Don't add the javax JAX-WS runtime when the API is 3.0 or later by @mohitduhan19 in [#1294](https://github.com/openrewrite/rewrite-migrate-java/pull/1294)
* Fix ExtractExplicitConstructorInvocationArguments dropping extracted declarations by @timtebeek in [#1297](https://github.com/openrewrite/rewrite-migrate-java/pull/1297)
* Only run tests for Thread methods removed from newer JDKs on Java 21 and below by @timtebeek in [#1298](https://github.com/openrewrite/rewrite-migrate-java/pull/1298)
* Run tests on Java 25 in CI by @timtebeek in [#1299](https://github.com/openrewrite/rewrite-migrate-java/pull/1299)
* Match logger class literals by type, and format only MXBean headers by @jkschneider in [#1300](https://github.com/openrewrite/rewrite-migrate-java/pull/1300)
* Format and match a visited tree under its parent cursor by @jkschneider in [#1302](https://github.com/openrewrite/rewrite-migrate-java/pull/1302)
* Write code the way the parser makes it, and import what it names by @jkschneider in [#1303](https://github.com/openrewrite/rewrite-migrate-java/pull/1303)
* JavadocToMarkdownDocComment to generate DocComments, not plain comments by @greg-at-moderne in [#1308](https://github.com/openrewrite/rewrite-migrate-java/pull/1308)
* JSpecify migrations remove nullability annotations from void methods by @sullis in [#1285](https://github.com/openrewrite/rewrite-migrate-java/pull/1285)
* Map EE9 Jetty security and WebSocket artifacts to published Jetty 12 modules by @timtebeek in [#1311](https://github.com/openrewrite/rewrite-migrate-java/pull/1311)
* Move EE9 Jetty Java packages to their EE10 and core equivalents in JettyUpgradeEE10 by @timtebeek in [#1315](https://github.com/openrewrite/rewrite-migrate-java/pull/1315)
* Only add jakarta.annotation-api for JSR-250 types, not JSR-305 by @timtebeek in [#1316](https://github.com/openrewrite/rewrite-migrate-java/pull/1316)
* Replace milestone CDI and Faces parser classpath pins with releases by @timtebeek in [#1317](https://github.com/openrewrite/rewrite-migrate-java/pull/1317)
* AddJaxbRuntime: update JAXB runtime versions held in parent POM and Gradle properties by @sambsnyd in [#1309](https://github.com/openrewrite/rewrite-migrate-java/pull/1309)
* Don't add JAXB/JAX-WS runtimes to Gradle buildscript dependencies by @steve-aom-elliott in [#1318](https://github.com/openrewrite/rewrite-migrate-java/pull/1318)
* Fix FileuploadToFileUpload2 package migration and milestone version by @timtebeek in [#1322](https://github.com/openrewrite/rewrite-migrate-java/pull/1322)
* Make recipes that needed a second cycle converge in one, or request it by @knutwannheden in [#1324](https://github.com/openrewrite/rewrite-migrate-java/pull/1324)
* Find CompletableFuture async calls without an Executor by @steve-aom-elliott in [#1313](https://github.com/openrewrite/rewrite-migrate-java/pull/1313)
* Upgrade Mockito to 5.20.x in UpgradeToJava25 by @ds-xdev in [#1326](https://github.com/openrewrite/rewrite-migrate-java/pull/1326)
* Stop aspectjtools flip-flopping between cycles in UpgradeToJava25 by @timtebeek in [#1327](https://github.com/openrewrite/rewrite-migrate-java/pull/1327)
* Migration recipes remove the imports they leave unused by @knutwannheden in [#1329](https://github.com/openrewrite/rewrite-migrate-java/pull/1329)
* Do not drop the `else` branch when merging a null check into a switch by @timtebeek in [#1331](https://github.com/openrewrite/rewrite-migrate-java/pull/1331)
* Keep setters that do more than assign their parameter in `UseLombokSetter` by @timtebeek in [#1332](https://github.com/openrewrite/rewrite-migrate-java/pull/1332)
* Rewrite `Chars.compare` to `Character.compare` instead of nonexistent `Char.compare` by @timtebeek in [#1333](https://github.com/openrewrite/rewrite-migrate-java/pull/1333)
* Keep Lombok running when `AddLombokMapstructBinding` creates `annotationProcessorPaths` by @timtebeek in [#1335](https://github.com/openrewrite/rewrite-migrate-java/pull/1335)
* Leave if-else-if chains alone when a switch would change behaviour or not compile by @timtebeek in [#1336](https://github.com/openrewrite/rewrite-migrate-java/pull/1336)
* Keep `HttpSession.invalidate()` when adding `HttpServletRequest.logout()` by @timtebeek in [#1334](https://github.com/openrewrite/rewrite-migrate-java/pull/1334)
* Use `JavaFileChecker` precondition in `ExtractExplicitConstructorInvocationArguments` by @timtebeek in [#1337](https://github.com/openrewrite/rewrite-migrate-java/pull/1337)
* Add `jspecify` dependency when migrating Micrometer `io.micrometer.core.lang` annotations by @timtebeek in [#1338](https://github.com/openrewrite/rewrite-migrate-java/pull/1338)
* Rewrite nested and unqualified `getRealPath(String)` calls for Servlet 6 by @timtebeek in [#1339](https://github.com/openrewrite/rewrite-migrate-java/pull/1339)
* Stop running the same recipe twice in the Java 8, 11, 21 and Faces 4.1 migrations by @timtebeek in [#1340](https://github.com/openrewrite/rewrite-migrate-java/pull/1340)
* Map fastjson features to the right fastjson2 enum and migrate `@JSONField` imports by @timtebeek in [#1342](https://github.com/openrewrite/rewrite-migrate-java/pull/1342)
* Keep the unsigned TTL in `setTTL` and the `byte` type in `getTTL` migrations by @timtebeek in [#1341](https://github.com/openrewrite/rewrite-migrate-java/pull/1341)
* Stop half-migrating `javax.servlet` in `RemovalsServletJakarta10` and add Jakarta APIs for subpackage-only users by @timtebeek in [#1343](https://github.com/openrewrite/rewrite-migrate-java/pull/1343)
* Set Java version marker directly in tests using `allSources` by @timtebeek in [#1344](https://github.com/openrewrite/rewrite-migrate-java/pull/1344)
* Keep code out of converted Markdown doc comments and escaped tags visible by @timtebeek in [#1345](https://github.com/openrewrite/rewrite-migrate-java/pull/1345)
* Use `UsesMethod` preconditions with the visitors' own matchers (J2) by @timtebeek in [#1346](https://github.com/openrewrite/rewrite-migrate-java/pull/1346)
* Drop forced imports and unneeded `contextSensitive()` from `JavaTemplate` recipes by @timtebeek in [#1347](https://github.com/openrewrite/rewrite-migrate-java/pull/1347)
* Remove `TypeValidation` relaxations that hid recipe bugs (I2 of #1330) by @timtebeek in [#1348](https://github.com/openrewrite/rewrite-migrate-java/pull/1348)
* Make `java.net`/`logging`/`lang` and Guava factory recipes declarative (J4) by @timtebeek in [#1350](https://github.com/openrewrite/rewrite-migrate-java/pull/1350)
* Add missing preconditions and Java version gates to recipes (J1) by @timtebeek in [#1349](https://github.com/openrewrite/rewrite-migrate-java/pull/1349)
* Keep method types in sync with renamed and rebuilt calls (I1 of #1330) by @timtebeek in [#1351](https://github.com/openrewrite/rewrite-migrate-java/pull/1351)
* Drop pinned patch versions when upgrading Docker image tags (B3 of #1330) by @timtebeek in [#1352](https://github.com/openrewrite/rewrite-migrate-java/pull/1352)
* Resolve stale `@Disabled` and demo tests (K11 of #1330) by @timtebeek in [#1353](https://github.com/openrewrite/rewrite-migrate-java/pull/1353)
* Drop YAML options set to their default value (K9 of #1330) by @timtebeek in [#1354](https://github.com/openrewrite/rewrite-migrate-java/pull/1354)
* Use the `Comments` trait instead of hand-built comments (K5 of #1330) by @timtebeek in [#1355](https://github.com/openrewrite/rewrite-migrate-java/pull/1355)
* Use `ListUtils`, `JavaIsoVisitor` and null checks, drop restating comments (K6 of #1330) by @timtebeek in [#1356](https://github.com/openrewrite/rewrite-migrate-java/pull/1356)
* Move tests to their recipe's package and name them after it (K10 of #1330) by @timtebeek in [#1358](https://github.com/openrewrite/rewrite-migrate-java/pull/1358)
* Polish YAML recipe display names and descriptions (K8 of #1330) by @timtebeek in [#1360](https://github.com/openrewrite/rewrite-migrate-java/pull/1360)
* Hoist visitor matchers and regexes into `private static final` constants (K4 of #1330) by @timtebeek in [#1357](https://github.com/openrewrite/rewrite-migrate-java/pull/1357)
* Polish Java recipe display names and descriptions (K7 of #1330) by @timtebeek in [#1359](https://github.com/openrewrite/rewrite-migrate-java/pull/1359)
* Preserve nullable values in `UseMapOf` prose-map conversions by @martinfrancois in [#1204](https://github.com/openrewrite/rewrite-migrate-java/pull/1204)
* Honor Maven compiler processor paths when adding Lombok binding by @jkschneider in [#1361](https://github.com/openrewrite/rewrite-migrate-java/pull/1361)
* Avoid hardcoded patch version in JavaxValidationMigrationToJakartaValidationTest by @jkschneider in [#1362](https://github.com/openrewrite/rewrite-migrate-java/pull/1362)
* Drop Maven-only `changeManagedDependency` from Gradle `ChangeDependencyClassifier` by @timtebeek in [#1363](https://github.com/openrewrite/rewrite-migrate-java/pull/1363)
* Fix `AboutJavaVersion` source version and per-run dedup (H1 of #1330) by @timtebeek in [#1365](https://github.com/openrewrite/rewrite-migrate-java/pull/1365)
* Strip all leading asterisks in `DanglingDocCommentToBlockComment` (C9 of #1330) by @timtebeek in [#1364](https://github.com/openrewrite/rewrite-migrate-java/pull/1364)
* Fix root-package API recipes reached by the Java 11 migration (D8 of #1330) by @timtebeek in [#1366](https://github.com/openrewrite/rewrite-migrate-java/pull/1366)
* Avoid adding Metro beside compatible JAX-WS providers by @jkschneider in [#1367](https://github.com/openrewrite/rewrite-migrate-java/pull/1367)
* Preserve generic print argument conversions when migrating to IO by @jkschneider in [#1370](https://github.com/openrewrite/rewrite-migrate-java/pull/1370)
* Restrict JakartaFacesEcmaScript to javax.faces references by @timtebeek in [#1372](https://github.com/openrewrite/rewrite-migrate-java/pull/1372)
* Handle captured array-class arguments in ReplaceSystemOutWithIOPrint by @jkschneider in [#1371](https://github.com/openrewrite/rewrite-migrate-java/pull/1371)

#### [rewrite-netty 0.14.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.14.0)

* Regenerate type table without pre-release dependencies by @timtebeek in [#23](https://github.com/openrewrite/rewrite-netty/pull/23)

#### [rewrite-openapi 0.36.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.36.0)

* Declare Schema on the template in ConvertApiResponseHeadersToHeaders by @jkschneider in [#82](https://github.com/openrewrite/rewrite-openapi/pull/82)
* ConvertApiResponseCodesToStrings removes the imports it leaves unused by @knutwannheden in [#84](https://github.com/openrewrite/rewrite-openapi/pull/84)

#### [rewrite-prethink 1.7.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.7.0)

* Fix ExportContextTest after removal of unused tableToFilename by @timtebeek in [#36](https://github.com/openrewrite/rewrite-prethink/pull/36)
* Lower expected changing cycles after rewrite-test stopped counting a phantom cycle by @greg-at-moderne in [#37](https://github.com/openrewrite/rewrite-prethink/pull/37)
* Let rewriteRun verify GenerateCalmArchitecture settles by @knutwannheden in [#39](https://github.com/openrewrite/rewrite-prethink/pull/39)

#### [rewrite-quarkus 2.37.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.37.0)

* Regenerate type table without pre-release dependencies by @timtebeek in [#121](https://github.com/openrewrite/rewrite-quarkus/pull/121)
* Make Quarkus property and JavaEE migration recipes converge in one cycle by @knutwannheden in [#122](https://github.com/openrewrite/rewrite-quarkus/pull/122)

#### [rewrite-rewrite 0.36.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.36.0)

* Remove RecipeSpec.cycles(int) calls that restate the default by @knutwannheden in [#109](https://github.com/openrewrite/rewrite-rewrite/pull/109)
* Check ignored results of newly annotated marker and LST tree packages by @timtebeek in [#110](https://github.com/openrewrite/rewrite-rewrite/pull/110)

#### [rewrite-rewrite 0.35.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.35.0)

* FindSharedVisitorInstances recipe by @greg-at-moderne in [#98](https://github.com/openrewrite/rewrite-rewrite/pull/98)
* Print and template a visited class or document under its parent cursor by @jkschneider in [#99](https://github.com/openrewrite/rewrite-rewrite/pull/99)
* Recompute re-indented text block values and declare template imports by @jkschneider in [#100](https://github.com/openrewrite/rewrite-rewrite/pull/100)
* Reorder whole runs of maybeAddImport/maybeRemoveImport in one cycle by @knutwannheden in [#101](https://github.com/openrewrite/rewrite-rewrite/pull/101)
* Add `UseMethodMatcherPreconditions` to reuse matchers in preconditions by @timtebeek in [#105](https://github.com/openrewrite/rewrite-rewrite/pull/105)
* Add `ListUtilsFilterOverMapToNull` to prefer `ListUtils.filter` by @timtebeek in [#103](https://github.com/openrewrite/rewrite-rewrite/pull/103)
* Add `UnconditionalMaybeImport` to drop redundant import guards by @timtebeek in [#106](https://github.com/openrewrite/rewrite-rewrite/pull/106)
* Add `StaticFinalMatcherFields` to make constant matcher fields `static final` by @timtebeek in [#104](https://github.com/openrewrite/rewrite-rewrite/pull/104)
* Add best practices for declarative recipe YAML files by @timtebeek in [#107](https://github.com/openrewrite/rewrite-rewrite/pull/107)
* Add `UseVisitorReduce` to replace captured accumulators with `reduce` by @timtebeek in [#102](https://github.com/openrewrite/rewrite-rewrite/pull/102)

#### [rewrite-spring 6.42.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.42.0)

* Keep user-defined map keys when normalizing properties to kebab-case by @timtebeek in [#1212](https://github.com/openrewrite/rewrite-spring/pull/1212)
* Include `csrf().ignoringAntMatchers` in `UseNewRequestMatchers` precondition (E6) by @banna-nuel in [#1213](https://github.com/openrewrite/rewrite-spring/pull/1213)
* Spring recipes remove the imports they leave unused by @knutwannheden in [#1211](https://github.com/openrewrite/rewrite-spring/pull/1211)
* Report the HTTP method, not the path, for `@RequestMapping("/x")` in `UpdateApiManifest` by @timtebeek in [#1214](https://github.com/openrewrite/rewrite-spring/pull/1214)
* Keep explicit `prePostEnabled` when replacing `@EnableGlobalMethodSecurity` (E2) by @timtebeek in [#1215](https://github.com/openrewrite/rewrite-spring/pull/1215)
* Fix dead property, dependency and method mapping entries (F10) by @timtebeek in [#1216](https://github.com/openrewrite/rewrite-spring/pull/1216)
* Call `rewriteRun` in `MigrateDropWizardDependenciesTest` by @timtebeek in [#1217](https://github.com/openrewrite/rewrite-spring/pull/1217)
* Only replace `HttpHeaders` and `MediaType` literals in modules using `spring-web` (A12) by @timtebeek in [#1218](https://github.com/openrewrite/rewrite-spring/pull/1218)
* Stop `RemoveDefaultBatchConfigurer` from crashing on abstract methods and changing subclasses (C4) by @timtebeek in [#1219](https://github.com/openrewrite/rewrite-spring/pull/1219)
* Stop forcing imports with `maybeAddImport(x, false)` (K4) by @timtebeek in [#1221](https://github.com/openrewrite/rewrite-spring/pull/1221)
* Move tests to their recipe's package (K9) by @timtebeek in [#1220](https://github.com/openrewrite/rewrite-spring/pull/1220)
* Use `ListUtils.filter` and `reduce` instead of manual list handling (K7) by @timtebeek in [#1222](https://github.com/openrewrite/rewrite-spring/pull/1222)
* Fix typos, casing and versions in recipe display names and descriptions (K8) by @timtebeek in [#1223](https://github.com/openrewrite/rewrite-spring/pull/1223)
* Drop YAML options set to their default value (K10) by @timtebeek in [#1224](https://github.com/openrewrite/rewrite-spring/pull/1224)
* Enable disabled tests, drop `@author` javadoc and `assert` in recipe code (K11) by @timtebeek in [#1225](https://github.com/openrewrite/rewrite-spring/pull/1225)
* Read Spring Boot's releases through rewrite-maven and the Maven settings by @jkschneider in [#1226](https://github.com/openrewrite/rewrite-spring/pull/1226)
* Pass `configuration`, not `scope`, to Gradle `DependencyInsight` in `SpringWebDependency` by @timtebeek in [#1227](https://github.com/openrewrite/rewrite-spring/pull/1227)
* Run `SimplifyWebTestClientCalls` outside the `@Controller` precondition (A5) by @timtebeek in [#1229](https://github.com/openrewrite/rewrite-spring/pull/1229)
* Change only the matched placeholder default in `@Value` with `ChangeSpringPropertyValue` (F1) by @timtebeek in [#1228](https://github.com/openrewrite/rewrite-spring/pull/1228)
* Keep `ListenableToCompletableFuture` output compiling (D5) by @timtebeek in [#1230](https://github.com/openrewrite/rewrite-spring/pull/1230)

#### [rewrite-spring 6.41.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.41.1)

* Pin ClassGraph to 4.x by @timtebeek in [#1181](https://github.com/openrewrite/rewrite-spring/pull/1181)
* Preserve retry runtime behavior when migrating to Spring Batch 6 chunk-oriented steps by @myhau in [#1182](https://github.com/openrewrite/rewrite-spring/pull/1182)
* Only convert to the Spring Security lambda DSL when the result of the call is unused by @kevinkendzia in [#1184](https://github.com/openrewrite/rewrite-spring/pull/1184)
* Find Spring config files in a scan instead of a marker, and match by type by @jkschneider in [#1185](https://github.com/openrewrite/rewrite-spring/pull/1185)
* GetErrorAttributes: pin the template classpath to Spring Boot 2.7 by @jkschneider in [#1186](https://github.com/openrewrite/rewrite-spring/pull/1186)
* Merge a YAML document under a cursor on its file, not on the document itself by @jkschneider in [#1187](https://github.com/openrewrite/rewrite-spring/pull/1187)
* Build nodes the way the parser does and declare template imports by @jkschneider in [#1188](https://github.com/openrewrite/rewrite-spring/pull/1188)
* Regenerate type table without pre-release dependencies by @timtebeek in [#1190](https://github.com/openrewrite/rewrite-spring/pull/1190)
* Set explicit versions when swapping Prometheus Pushgateway and Sleuth autoconfigure artifacts by @timtebeek in [#1191](https://github.com/openrewrite/rewrite-spring/pull/1191)
* Make three Spring migration recipes converge in a single cycle by @knutwannheden in [#1192](https://github.com/openrewrite/rewrite-spring/pull/1192)
* Keep the method type in sync when recipes change a method's return type expression by @knutwannheden in [#1193](https://github.com/openrewrite/rewrite-spring/pull/1193)
* Use `ListUtils.filter` instead of mapping elements to `null` by @timtebeek in [#1196](https://github.com/openrewrite/rewrite-spring/pull/1196)
* Fix wrong and dead property, type and composite mappings by @timtebeek in [#1200](https://github.com/openrewrite/rewrite-spring/pull/1200)
* Stop recipes from silently deleting or breaking user code by @timtebeek in [#1199](https://github.com/openrewrite/rewrite-spring/pull/1199)
* Stop Spring Security recipes from weakening configuration by @timtebeek in [#1198](https://github.com/openrewrite/rewrite-spring/pull/1198)
* Keep values, not trees or visitors, in scanning recipe accumulators by @jkschneider in [#1202](https://github.com/openrewrite/rewrite-spring/pull/1202)
* Stop Spring Boot 2.2 migration from nesting logging.file subproperties under logging.file.name in YAML by @sambsnyd in [#1203](https://github.com/openrewrite/rewrite-spring/pull/1203)
* Add review-recipe-pr skill and point agents to it by @timtebeek in [#1207](https://github.com/openrewrite/rewrite-spring/pull/1207)
* Keep `@Autowired` on constructors in test sources by @timtebeek in [#1205](https://github.com/openrewrite/rewrite-spring/pull/1205)
* Rename `IntegrationSchedulerPoolRecipe` to `FindIntegrationSchedulerPool` by @timtebeek in [#1204](https://github.com/openrewrite/rewrite-spring/pull/1204)
* Stop JobBuilderFactory and StepBuilderFactory migrations from deleting or breaking user code by @timtebeek in [#1206](https://github.com/openrewrite/rewrite-spring/pull/1206)
* Stop `AuthorizeHttpRequests` from breaking expression-based authorization by @timtebeek in [#1209](https://github.com/openrewrite/rewrite-spring/pull/1209)
* Check that every recipe is reachable from a composite by @timtebeek in [#1210](https://github.com/openrewrite/rewrite-spring/pull/1210)
* Use Comments trait for TODO comments in two recipes by @timtebeek in [#1208](https://github.com/openrewrite/rewrite-spring/pull/1208)

#### [rewrite-spring-to-quarkus 0.14.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.14.0)

* Migrate Spring Boot 4 applications and skip libraries by @timtebeek in [#92](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/92)
* Fix WebToJaxRs parameter binding, HTTP methods, paths and view controllers by @timtebeek in [#93](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/93)
* Import MicroProfile's health types in SpringHealthIndicatorToQuarkus by @jkschneider in [#94](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/94)
* Accept four-part Quarkus BOM versions in CustomizeQuarkusVersionTest by @greg-at-moderne in [#95](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/95)

#### [rewrite-static-analysis 2.46.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.46.0)

* UsePortableNewlines: skip escaped backslashes and CRLF by @greg-at-moderne in [#1086](https://github.com/openrewrite/rewrite-static-analysis/pull/1086)
* Stop `FixStringFormatExpressions` from rewriting \n to %n by @greg-at-moderne in [#1087](https://github.com/openrewrite/rewrite-static-analysis/pull/1087)
* TernaryOperatorsShouldNotBeNested support for assignemnts and declara… by @greg-at-moderne in [#1088](https://github.com/openrewrite/rewrite-static-analysis/pull/1088)
* Don't use CLI's Go RPC binary in tests by @greg-at-moderne in [#1091](https://github.com/openrewrite/rewrite-static-analysis/pull/1091)
* Refactoring: use ListUtils more by @greg-at-moderne in [#1090](https://github.com/openrewrite/rewrite-static-analysis/pull/1090)
* TernaryOperatorsShouldNotBeNested not to mangle primitive numeric types by @greg-at-moderne in [#1089](https://github.com/openrewrite/rewrite-static-analysis/pull/1089)
* Add RemoveUnnecessaryBitwiseOperation recipe by @Jammy-Louie in [#1085](https://github.com/openrewrite/rewrite-static-analysis/pull/1085)
* AnnotateNullableMethods to skip JS sources by @greg-at-moderne in [#1093](https://github.com/openrewrite/rewrite-static-analysis/pull/1093)
* MissingOverrideAnnotation: only apply to Java and Groovy sources by @timtebeek in [#1094](https://github.com/openrewrite/rewrite-static-analysis/pull/1094)
* Limit `ObjectFinalizeCallsSuper` to Java, Groovy by @greg-at-moderne in [#1095](https://github.com/openrewrite/rewrite-static-analysis/pull/1095)
* `doNotChangeDifferentRecordPatterns` test case for `RemoveDuplicateConditions` by @greg-at-moderne in [#1097](https://github.com/openrewrite/rewrite-static-analysis/pull/1097)
* InterruptedExceptionHandling: rename unnamed `_` multi-catch variable b… by @greg-at-moderne in [#1096](https://github.com/openrewrite/rewrite-static-analysis/pull/1096)
* Advertise RSPEC-S2970 on `FindIgnoredCheckReturnValue` by @Jammy-Louie in [#1098](https://github.com/openrewrite/rewrite-static-analysis/pull/1098)
* Match fully qualified System.out and class literals by type by @jkschneider in [#1099](https://github.com/openrewrite/rewrite-static-analysis/pull/1099)
* Use the parent cursor for the visited tree and new ids for nested copies by @jkschneider in [#1100](https://github.com/openrewrite/rewrite-static-analysis/pull/1100)
* Tell the block's visit about default-only switches in a cursor message, not a marker by @jkschneider in [#1101](https://github.com/openrewrite/rewrite-static-analysis/pull/1101)
* Write literals, catches and && chains as the parser builds them by @jkschneider in [#1102](https://github.com/openrewrite/rewrite-static-analysis/pull/1102)
* Merge every closed resource of a try in one pass in UseTryWithResources by @knutwannheden in [#1105](https://github.com/openrewrite/rewrite-static-analysis/pull/1105)
* Keep close order and resource scope when merging closes in UseTryWithResources by @knutwannheden in [#1106](https://github.com/openrewrite/rewrite-static-analysis/pull/1106)
* Keep the method type in sync with the return type in UseCollectionInterfaces by @knutwannheden in [#1107](https://github.com/openrewrite/rewrite-static-analysis/pull/1107)
* Add FindNonCaseLabelsInSwitch recipe (`RSPEC-S1219`) by @Jammy-Louie in [#1108](https://github.com/openrewrite/rewrite-static-analysis/pull/1108)
* Preserve raw cast on non-parameterized subtype argument in `RemoveRedundantTypeCast` by @shukla-pranjal in [#1109](https://github.com/openrewrite/rewrite-static-analysis/pull/1109)
* AnnotateRequiredParameters, CatchClauseOnlyRethrows and ReplaceStackWithDeque remove the imports they leave unused by @knutwannheden in [#1113](https://github.com/openrewrite/rewrite-static-analysis/pull/1113)
* Set Java version marker directly in `InstanceOfPatternMatchTest` by @timtebeek in [#1114](https://github.com/openrewrite/rewrite-static-analysis/pull/1114)
* Preserve comments before unwrapped else blocks by @martinfrancois in [#992](https://github.com/openrewrite/rewrite-static-analysis/pull/992)
* ObjectFinalizeCallsSuper: declare the overridden finalize() exceptions when adding super.finalize() by @martinfrancois in [#969](https://github.com/openrewrite/rewrite-static-analysis/pull/969)
* Correct recipe display names, descriptions and option descriptions (M9) by @timtebeek in [#1118](https://github.com/openrewrite/rewrite-static-analysis/pull/1118)
* Tighten recipe preconditions (M8 from #1115) by @timtebeek in [#1121](https://github.com/openrewrite/rewrite-static-analysis/pull/1121)
* B3: `EmptyBlock` keeps `finally` statements and `switch` selector side effects, and leaves `synchronized` alone by @timtebeek in [#1117](https://github.com/openrewrite/rewrite-static-analysis/pull/1117)
* Correct RSPEC tags and declare Sonar effort estimates (M10) by @timtebeek in [#1119](https://github.com/openrewrite/rewrite-static-analysis/pull/1119)
* SimplifyArraysAsList: do not unwrap primitive arrays (C16 from #1116) by @timtebeek in [#1125](https://github.com/openrewrite/rewrite-static-analysis/pull/1125)
* B5: `RedundantFileCreation` only unwraps `new File(String)` by @timtebeek in [#1124](https://github.com/openrewrite/rewrite-static-analysis/pull/1124)
* A7 + B6: scope follow-up visitors to what each recipe changed by @timtebeek in [#1122](https://github.com/openrewrite/rewrite-static-analysis/pull/1122)
* C1: `NoValueOfOnStringType` keeps one `String.valueOf` when both concatenation operands are `valueOf` calls by @timtebeek in [#1127](https://github.com/openrewrite/rewrite-static-analysis/pull/1127)
* C17: `SimplifyBooleanExpression` keeps `== true` on Kotlin calls returning `Boolean?` by @timtebeek in [#1126](https://github.com/openrewrite/rewrite-static-analysis/pull/1126)
* C2: `NoEqualityInForCondition` flips the operator when the loop variable is on the right by @timtebeek in [#1128](https://github.com/openrewrite/rewrite-static-analysis/pull/1128)
* Add IsEmptyCallOnMaps recipe by @neil-mushell in [#1112](https://github.com/openrewrite/rewrite-static-analysis/pull/1112)
* A7 + B6 follow-up: side effects, comments and formatting scope by @timtebeek in [#1123](https://github.com/openrewrite/rewrite-static-analysis/pull/1123)
* Register warmJavaScriptRpcCache without the deprecated registering delegate by @timtebeek in [#1130](https://github.com/openrewrite/rewrite-static-analysis/pull/1130)
* Use `excludedBounds` in `CommonDeclarationSiteTypeVariances` by @timtebeek in [#1131](https://github.com/openrewrite/rewrite-static-analysis/pull/1131)
* Preserve nonzero long field initializers at full width by @jkschneider in [#1141](https://github.com/openrewrite/rewrite-static-analysis/pull/1141)
* Preserve NaN semantics when simplifying negated comparisons by @jkschneider in [#1142](https://github.com/openrewrite/rewrite-static-analysis/pull/1142)
* Preserve Float double constructor conversions (1116 C7) by @jkschneider in [#1143](https://github.com/openrewrite/rewrite-static-analysis/pull/1143)
* EqualsAvoidsNull: keep the null check before contentEquals by @timtebeek in [#1138](https://github.com/openrewrite/rewrite-static-analysis/pull/1138)
* Keep the null check before `contentEquals` in `EqualsAvoidsNull` by @timtebeek in [#1133](https://github.com/openrewrite/rewrite-static-analysis/pull/1133)
* Clean up `@Issue` links in tests (M14) by @timtebeek in [#1135](https://github.com/openrewrite/rewrite-static-analysis/pull/1135)
* Fix `FinalizePrivateFields` for initializer reads, Kotlin `var` and Groovy (C9) by @timtebeek in [#1139](https://github.com/openrewrite/rewrite-static-analysis/pull/1139)
* Add a delegating `equals(Object)` in `CovariantEquals` (A8 of #1116) by @timtebeek in [#1134](https://github.com/openrewrite/rewrite-static-analysis/pull/1134)
* Load every YAML recipe in a test (M13) by @timtebeek in [#1136](https://github.com/openrewrite/rewrite-static-analysis/pull/1136)
* Remove stale `@Incubating` annotations (M15) by @timtebeek in [#1137](https://github.com/openrewrite/rewrite-static-analysis/pull/1137)
* Skip JavaScript/TypeScript sources in `RemoveExtraSemicolons` by @ds-xdev in [#1145](https://github.com/openrewrite/rewrite-static-analysis/pull/1145)
* Resolve stale disabled tests, fold language variants and tidy test names (M12) by @timtebeek in [#1144](https://github.com/openrewrite/rewrite-static-analysis/pull/1144)
* Don’t leave a null body when removing the only statement of a brace-less if or loop by @greg-at-moderne in [#1149](https://github.com/openrewrite/rewrite-static-analysis/pull/1149)
* Fix `ReplaceStringBuilderWithString` literal conversion, `CharSequence` seeds and Kotlin output by @greg-at-moderne in [#1150](https://github.com/openrewrite/rewrite-static-analysis/pull/1150)
* Remove `//noinspection` lines, IDE-only suppressions and comments that restate the code (M6) by @timtebeek in [#1146](https://github.com/openrewrite/rewrite-static-analysis/pull/1146)
* Replace `assert`, use `JavaIsoVisitor` and `ListUtils`, and remove dead code (M7) by @timtebeek in [#1147](https://github.com/openrewrite/rewrite-static-analysis/pull/1147)
* C11: `UseJavaStyleArrayDeclarations` only rewrites declarations with matching dimensions by @Niloyyy in [#1132](https://github.com/openrewrite/rewrite-static-analysis/pull/1132)
* Keep labelled `continue` and the comments of a removed `return;` (B9 from #1116) by @tashen247 in [#1148](https://github.com/openrewrite/rewrite-static-analysis/pull/1148)
* Leave a `Stack` as it is when rewrite-analysis cannot follow where it flows, as its last release cannot through an anonymous class by @jkschneider in [#1151](https://github.com/openrewrite/rewrite-static-analysis/pull/1151)

#### [rewrite-templating 1.47.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.47.0)

* Print each note and warning once per compilation, not once per JVM by @jkschneider in [#197](https://github.com/openrewrite/rewrite-templating/pull/197)
* Require a signature only when forceSigning asks for one, now that releases go to the Code Genome Project by @jkschneider in [#198](https://github.com/openrewrite/rewrite-templating/pull/198)

#### [rewrite-testing-frameworks 3.50.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.50.0)

* Fixes Mockito getting PowerMock's version from parent pom properties and Gradle version variables by @sambsnyd in [#1198](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1198)
* Keep the method type in sync with the return type in ConvertToRawType by @knutwannheden in [#1202](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1202)
* Use `ListUtils.filter` instead of mapping elements to `null` by @timtebeek in [#1203](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1203)
* Only add the `Mockito` type import when spying statically by @timtebeek in [#1204](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1204)
* Always import the class mocked by `MockitoWhenOnStaticToMockStatic` by @Jammy-Louie in [#1208](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1208)
* Let rewriteRun verify the JUnit 4 to 5 migration settles by @knutwannheden in [#1209](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1209)
* Mockito, JMockit and JUnit recipes remove or type the imports they leave unused by @knutwannheden in [#1210](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1210)
* Only drop a literal zero delta in `AssertEqualsIntegralDeltaToAssertEquals` by @timtebeek in [#1212](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1212)
* Track Hamcrest `not(..)` negation locally instead of on the `ExecutionContext` by @timtebeek in [#1214](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1214)
* Only adopt `hasSeconds` for `isEqualTo` in `AdoptAssertJDurationAssertions` by @timtebeek in [#1215](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1215)
* Leave tests that call assumptions alone in `TestsShouldIncludeAssertions` by @timtebeek in [#1213](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1213)
* Keep JUnit deltas when converting `assertEquals`, `assertNotEquals` and `assertArrayEquals` to AssertJ by @timtebeek in [#1216](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1216)
* Only turn the `WireMockRule` field's `@Rule` into `@RegisterExtension` in `UseWiremockExtension` by @timtebeek in [#1218](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1218)
* Keep early returns in `TestMethodsShouldBeVoid` and `KotlinTestMethodsShouldReturnUnit` by @timtebeek in [#1217](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1217)
* Use `JavaFileChecker` preconditions instead of `isAcceptable` overrides by @timtebeek in [#1219](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1219)
* Only convert Java sources in `UseAssertSame` by @timtebeek in [#1223](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1223)
* Only convert `assertInstanceOf` used as a statement in `JUnitAssertInstanceOfToAssertThat` by @timtebeek in [#1222](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1222)
* Only remove a direct `PowerMockTestCase` or `PowerMockConfiguration` superclass in `RemovePowerMockClassExtensions` by @timtebeek in [#1224](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1224)
* Only replace `assertNotEquals(false, <boolean>)` when the second argument is a primitive `boolean` by @timtebeek in [#1220](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1220)
* Only migrate the two-argument `InvocationInterceptor.interceptDynamicTest` in `RemoveInterceptDynamicTest` by @timtebeek in [#1221](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1221)
* Hoist matchers created per visit to `private static final` constants by @timtebeek in [#1225](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1225)
* Use the `Comments` trait and `ListUtils`/`reduce` instead of hand-built comments and manual list handling by @timtebeek in [#1226](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1226)
* Add `UsesMethod` and `UsesType` preconditions to recipes that visit every file by @timtebeek in [#1227](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1227)
* Fix typos, over-claiming and inconsistent recipe display names and descriptions by @timtebeek in [#1231](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1231)
* Remove stale `@Disabled` tests, `//noinspection` lines and restating comments by @timtebeek in [#1233](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1233)
* Use `MethodMatcher`, `AnnotationMatcher` and variable types instead of name strings by @timtebeek in [#1228](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1228)
* Align test names with recipes, group no-change tests and tidy classpath entries and YAML by @timtebeek in [#1235](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1235)
* Drop forced `maybeAddImport(.., false)` where templates already attribute the added types by @timtebeek in [#1234](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1234)
* Run unconditional sub-recipes from `getRecipeList()` and keep cleanups local to the changed element by @timtebeek in [#1230](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1230)
* Tighten preconditions that were too broad or too narrow by @timtebeek in [#1229](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1229)
* Drop `contextSensitive()` from self-contained `JavaTemplate`s by @timtebeek in [#1232](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1232)
* Support Gradle Kotlin DSL in `GradleUseJunitJupiter` and `AddJupiterDependencies` by @timtebeek in [#1238](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1238)
* Create a unique folder for no-argument `TemporaryFolder#newFolder()` by @timtebeek in [#1237](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1237)
* Skip Hamcrest matchers that take nested matchers in `HamcrestMatcherToAssertJ` by @timtebeek in [#1236](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1236)
* Add `junit-jupiter-migrationsupport` where the JUnit 4 migration uses it, and only remove it once unused by @timtebeek in [#1239](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1239)
* Keep the message overloads of TestNG `assertThrows`/`expectThrows` in `TestNgAssertThrowsToAssertThat` by @timtebeek in [#1240](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1240)
* Keep `isNotEmpty()` and `isNotNull()` guards in `SimplifyRedundantAssertJChains` when the next assertion passes without them by @timtebeek in [#1241](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1241)
* Only replace `@CsvSource` values that CSV parsing leaves unchanged in `CsvSourceToValueSource` by @timtebeek in [#1244](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1244)
* Only use `hasSameSizeAs` in `SimplifyHasSizeAssertion` when the assert type has a matching overload by @timtebeek in [#1243](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1243)
* Only collapse the JRE range of the visited method in `MinimumJreConditions` by @timtebeek in [#1242](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1242)
* Preserve comments before collapsed AssertJ chains by @martinfrancois in [#1096](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1096)
* Respect composed JUnit test templates by @martinfrancois in [#1093](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1093)
* Keep `@Timeout` attributes and only convert whole minutes in `ImplausibleTimeoutToMinutes` by @tashen247 in [#1245](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1245)
* Find test classes without tests by @Jammy-Louie in [#1205](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1205)
* Preserve inherited lifecycle method visibility in TestsShouldNotBePublic by @jkschneider in [#1247](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1247)
* Preserve public test fixtures referenced from other packages by @jkschneider in [#1248](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1248)

#### [rewrite-testing-frameworks 3.49.1](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.49.1)

* WireMock 4 migration: move Jetty EE10 to EE11 and bump to 4.0.0-beta.40 by @sullis in [#1184](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1184)
* Add mockito-junit-jupiter when PowerMockRunner becomes MockitoExtension by @timtebeek in [#1185](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1185)
* Override a Spring Boot BOM-managed Mockito when replacing PowerMock by @timtebeek in [#1186](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1186)
* Keep WireMockRule used as a server a WireMockServer; port() to getPort() by @timtebeek in [#1187](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1187)
* Expect blank line before static imports after whenNew migration by @timtebeek in [#1192](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1192)
* Test on Java 21 and 25 through additional_test_java_versions by @timtebeek in [#1194](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1194)
* Match Mockito and JUnit code by type, and format only what changes by @jkschneider in [#1195](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1195)
* Give the when(instance) call built inside the replaced call ids of its own by @jkschneider in [#1196](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1196)
* Declare what templates name and build trees as the parser does by @jkschneider in [#1197](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1197)
* Pin Datafaker to 1.x when migrating from Java Faker by @timtebeek in [#1199](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1199)

#### [rewrite-third-party 0.50.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.50.0)

* Add rewrite-quarkus and rewrite-jackson as runtime dependencies by @timtebeek in [#107](https://github.com/openrewrite/rewrite-third-party/pull/107)

## [rewrite-recipe-bom 3.41.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.41.0)

Released on October 9, 2026, with OpenRewrite 8.93.0.

#### [rewrite 8.93.0](https://github.com/openrewrite/rewrite/releases/tag/v8.93.0)

* JavaScript patterns: a static call matches every spelling of its receiver by @knutwannheden in [#9115](https://github.com/openrewrite/rewrite/pull/9115)
* Python patterns: ignore the receiver only of a static call by @knutwannheden in [#9116](https://github.com/openrewrite/rewrite/pull/9116)
* Kotlin: drop KotlinSource's unused offset-to-node map by @knutwannheden in [#9117](https://github.com/openrewrite/rewrite/pull/9117)
* Scala: Fix handling of a recipe changing statement to expression by @greg-at-moderne in [#9119](https://github.com/openrewrite/rewrite/pull/9119)
* Let HasMinimumJavaVersion mark build and non-Java files by @timtebeek in [#9084](https://github.com/openrewrite/rewrite/pull/9084)
* JavaScript: a node: specifier and its built-in's bare name are one module to the binding APIs by @knutwannheden in [#9122](https://github.com/openrewrite/rewrite/pull/9122)
* `MavenWrapperUpdate` to honor mirrors in the settings by @greg-at-moderne in [#9123](https://github.com/openrewrite/rewrite/pull/9123)
* Cancel GetObject transfers still running before eviction by @greg-at-moderne in [#9072](https://github.com/openrewrite/rewrite/pull/9072)
* ChangePropertyValue: follow YAML aliases to their anchored value by @timtebeek in [#9121](https://github.com/openrewrite/rewrite/pull/9121)
* JavaScript: RPC to handle recipes which alter the source file type by @greg-at-moderne in [#9125](https://github.com/openrewrite/rewrite/pull/9125)
* RemoveUnusedProperties to guard against inefficient regexps by @greg-at-moderne in [#9132](https://github.com/openrewrite/rewrite/pull/9132)
* JavaScript: maybeBind and maybeRebind bind with require in a CommonJS file by @knutwannheden in [#9126](https://github.com/openrewrite/rewrite/pull/9126)
* Python: point ty at the uv() and template dependency workspace venvs by @knutwannheden in [#9134](https://github.com/openrewrite/rewrite/pull/9134)
* Python: JContainer padding replace refuses unknown keywords by @knutwannheden in [#9133](https://github.com/openrewrite/rewrite/pull/9133)
* Pin Maven Central in UpgradeDependencyVersionTest's directory-listing tests by @knutwannheden in [#9136](https://github.com/openrewrite/rewrite/pull/9136)
* JavaScript: RPC picks codecs by root type by @greg-at-moderne in [#9135](https://github.com/openrewrite/rewrite/pull/9135)
* Python: keep None in Optional types by @knutwannheden in [#9137](https://github.com/openrewrite/rewrite/pull/9137)
* Python templating: a substituted value keeps the layout the source gave it by @knutwannheden in [#9139](https://github.com/openrewrite/rewrite/pull/9139)
* Python: keep homogeneous tuple elements apart from fixed ones by @knutwannheden in [#9142](https://github.com/openrewrite/rewrite/pull/9142)
* Remove ClassGraph dependency from rewrite-java by @sambsnyd in [#9138](https://github.com/openrewrite/rewrite/pull/9138)
* Python: type attribution uses the project's .venv when no dependency path is given by @knutwannheden in [#9143](https://github.com/openrewrite/rewrite/pull/9143)
* Add MigrateToMaven3_10 and chain it from MigrateToMaven4 by @timtebeek in [#9145](https://github.com/openrewrite/rewrite/pull/9145)
* Parse unambiguous MSBuild project files as XML and align AlignPathCasing with them by @timtebeek in [#9113](https://github.com/openrewrite/rewrite/pull/9113)

#### [rewrite 8.92.18](https://github.com/openrewrite/rewrite/releases/tag/v8.92.18)

* Fix ignored return values of `@CheckReturnValue` methods by @timtebeek in [#9031](https://github.com/openrewrite/rewrite/pull/9031)
* Gradle: resolve a BOM version selector in SyncGradleExtPropertiesWithBom, and remove overrides without breaking the script by @jkschneider in [#9032](https://github.com/openrewrite/rewrite/pull/9032)
* Find class references in Spring config files of any profile name by @jkschneider in [#9033](https://github.com/openrewrite/rewrite/pull/9033)
* Map each Python class attribute to one method or member by @knutwannheden in [#9035](https://github.com/openrewrite/rewrite/pull/9035)
* Python: make recipe code type-check against the SDK's stubs and JavaType by @knutwannheden in [#9036](https://github.com/openrewrite/rewrite/pull/9036)
* JavaScript: RPC fixes unearthed after Java printing by @greg-at-moderne in [#9034](https://github.com/openrewrite/rewrite/pull/9034)
* JavaScript: Fix the RPC handling of NamedStyles in both directions by @greg-at-moderne in [#9037](https://github.com/openrewrite/rewrite/pull/9037)
* Python: keep parameter defaults and unannotated methods in generated stubs by @knutwannheden in [#9038](https://github.com/openrewrite/rewrite/pull/9038)
* JavaScript: Add BlankLinesStyle on Java side by @greg-at-moderne in [#9040](https://github.com/openrewrite/rewrite/pull/9040)
* Go: RPC fixes unearthed after Java printing by @greg-at-moderne in [#9041](https://github.com/openrewrite/rewrite/pull/9041)
* Python: make the generated stubs type-check by @knutwannheden in [#9039](https://github.com/openrewrite/rewrite/pull/9039)
* Python: Fix RPC sender dropping comprehension edits by @greg-at-moderne in [#9042](https://github.com/openrewrite/rewrite/pull/9042)
* Scala 3.10.0 by @greg-at-moderne in [#9044](https://github.com/openrewrite/rewrite/pull/9044)
* Python: favor relative_to paths over inferred ones by @greg-at-moderne in [#9046](https://github.com/openrewrite/rewrite/pull/9046)
* Python: attach a prebuilt venv in InstallRecipes by @knutwannheden in [#9052](https://github.com/openrewrite/rewrite/pull/9052)
* Send JavaType.Variable flags over RPC in every peer by @knutwannheden in [#9043](https://github.com/openrewrite/rewrite/pull/9043)
* Python: type a class's properties and self-assigned attributes as fields by @knutwannheden in [#9053](https://github.com/openrewrite/rewrite/pull/9053)
* Drop unused classgraph dependencies outside rewrite-java by @timtebeek in [#9055](https://github.com/openrewrite/rewrite/pull/9055)
* JavaScript: let several rebinds in one file agree on statements and names by @knutwannheden in [#9059](https://github.com/openrewrite/rewrite/pull/9059)
* Scan every JDK module for public java.* types in JavaSourceSet.build by @timtebeek in [#9056](https://github.com/openrewrite/rewrite/pull/9056)
* JavaScript templating: object literals and repeated captures by @knutwannheden in [#9060](https://github.com/openrewrite/rewrite/pull/9060)
* C#: add Recipe.Validate() so option constraints fail once at prepare time by @macsux in [#9049](https://github.com/openrewrite/rewrite/pull/9049)
* Maven: fold a renamed dependency into an existing declaration of another scope by @jkschneider in [#9061](https://github.com/openrewrite/rewrite/pull/9061)
* JavaScript: let maybeRebind's type attribution follow the move file-wide by @knutwannheden in [#9063](https://github.com/openrewrite/rewrite/pull/9063)
* Python: port maybeRebind, so a moved import re-attributes types as a parse would by @knutwannheden in [#9064](https://github.com/openrewrite/rewrite/pull/9064)
* JavaScript: let maybeRebind reuse an existing import of the target member by @knutwannheden in [#9065](https://github.com/openrewrite/rewrite/pull/9065)
* JavaScript templating: a substituted value keeps the layout the source gave it by @knutwannheden in [#9066](https://github.com/openrewrite/rewrite/pull/9066)
* Python: let a capture's type_hint restrict what a pattern matches by @knutwannheden in [#9067](https://github.com/openrewrite/rewrite/pull/9067)
* JavaScript: resolve a node16 project's extensionless relative imports by @knutwannheden in [#9068](https://github.com/openrewrite/rewrite/pull/9068)
* Python: a method declaration's declaring type is its class, not the module by @knutwannheden in [#9070](https://github.com/openrewrite/rewrite/pull/9070)
* Add a type-attribution report for JavaScript, and sharpen the Python one by @knutwannheden in [#9069](https://github.com/openrewrite/rewrite/pull/9069)
* JavaScript: a MethodMatcher type without a package matches only the type in no package by @knutwannheden in [#9071](https://github.com/openrewrite/rewrite/pull/9071)
* JavaScript: close type-mapper attribution gaps the type report surfaced by @knutwannheden in [#9073](https://github.com/openrewrite/rewrite/pull/9073)
* JavaScript templating: type an untyped capture's placeholder from the value bound to it by @knutwannheden in [#9074](https://github.com/openrewrite/rewrite/pull/9074)
* JavaScript: MethodMatcher honors matchOverrides by @knutwannheden in [#9075](https://github.com/openrewrite/rewrite/pull/9075)
* JavaScript: record a class's implemented interfaces in its type by @knutwannheden in [#9077](https://github.com/openrewrite/rewrite/pull/9077)
* JavaScript: usesType's native visitor matches as Java's HasType does by @knutwannheden in [#9079](https://github.com/openrewrite/rewrite/pull/9079)
* JavaScript: declare a call on the class that declares the method, and name module-local classes after their module by @knutwannheden in [#9080](https://github.com/openrewrite/rewrite/pull/9080)
* Python: ChangeImport moves a qualified member into a submodule as before #9064 by @knutwannheden in [#9081](https://github.com/openrewrite/rewrite/pull/9081)
* Java: a received method invocation keeps its constructor type by @knutwannheden in [#9078](https://github.com/openrewrite/rewrite/pull/9078)
* Route Maven and Gradle tests through the build's mirror when no settings.xml mirrors Central by @jkschneider in [#9082](https://github.com/openrewrite/rewrite/pull/9082)
* Go: sort each import declaration on its own in `OrderImports` by @sambsnyd in [#9062](https://github.com/openrewrite/rewrite/pull/9062)
* Make HasMinimumJavaVersion work on Kotlin and Groovy sources by @timtebeek in [#9045](https://github.com/openrewrite/rewrite/pull/9045)
* ChangeMethodName: language-neutral validation messages by @macsux in [#9051](https://github.com/openrewrite/rewrite/pull/9051)
* JavaScript: maybeBind binds a default or namespace import under a pinned alias by @knutwannheden in [#9085](https://github.com/openrewrite/rewrite/pull/9085)
* JavaScript: a function a pattern's context declares matches a same-named call by @knutwannheden in [#9086](https://github.com/openrewrite/rewrite/pull/9086)
* Raise log4j and drop both JLine bundles from the zinc classpath by @timtebeek in [#9047](https://github.com/openrewrite/rewrite/pull/9047)
* Python: SearchResult.found leaves an already-marked tree unchanged by @knutwannheden in [#9088](https://github.com/openrewrite/rewrite/pull/9088)
* JavaScript: export isEqual and namesUsedWithin by @knutwannheden in [#9087](https://github.com/openrewrite/rewrite/pull/9087)
* Python: an import keeps its attribution when another scope binds the same name by @knutwannheden in [#9089](https://github.com/openrewrite/rewrite/pull/9089)
* Python: type node ids as int | UUID so random_id() type-checks by @knutwannheden in [#9090](https://github.com/openrewrite/rewrite/pull/9090)
* JavaScript: align four helpers with Java and with each other by @knutwannheden in [#9092](https://github.com/openrewrite/rewrite/pull/9092)
* JavaScript: scope lookups tell values from types, and members bind nowhere by @knutwannheden in [#9091](https://github.com/openrewrite/rewrite/pull/9091)
* JavaScript: ChangeMethodTargetToImport moves matched calls onto an imported member by @knutwannheden in [#9093](https://github.com/openrewrite/rewrite/pull/9093)
* JavaScript: add Expression.unwrap and removeMarkerByKind by @knutwannheden in [#9096](https://github.com/openrewrite/rewrite/pull/9096)
* JavaScript: a type parameter binds across the declaration carrying it by @knutwannheden in [#9097](https://github.com/openrewrite/rewrite/pull/9097)
* JavaScript: a binding answers across `import type`, without a duplicate identifier by @knutwannheden in [#9098](https://github.com/openrewrite/rewrite/pull/9098)
* JavaScript templating: a template binds every context module its code reads by @knutwannheden in [#9094](https://github.com/openrewrite/rewrite/pull/9094)
* JavaScript templating: a replacement keeps the replaced node's `!`/`?.` and, unformatted, a capture's spacing by @knutwannheden in [#9095](https://github.com/openrewrite/rewrite/pull/9095)
* JavaScript: a namespace is a third binding kind, which a qualified type name reads by @knutwannheden in [#9100](https://github.com/openrewrite/rewrite/pull/9100)
* Python templating: a node spliced into more than one slot gets a fresh id per occurrence by @knutwannheden in [#9101](https://github.com/openrewrite/rewrite/pull/9101)
* JavaScript patterns: a call pattern with a variadic capture matches its callee by symbol by @knutwannheden in [#9102](https://github.com/openrewrite/rewrite/pull/9102)
* JavaScript: `resolve(cursor, identifier)` reads a name by position, and the rebind rename follows it by @knutwannheden in [#9103](https://github.com/openrewrite/rewrite/pull/9103)
* JavaScript: `referencesOf` lists a binding's references, and `isWrite` tells an assignment from a read by @knutwannheden in [#9105](https://github.com/openrewrite/rewrite/pull/9105)
* JavaScript patterns: a receiver the pattern writes out has to match the source receiver by @knutwannheden in [#9104](https://github.com/openrewrite/rewrite/pull/9104)
* JavaScript: a class static block is a var scope by @knutwannheden in [#9106](https://github.com/openrewrite/rewrite/pull/9106)
* Fix RemoveUnusedImports to deal with lower-case static-imported classes by @greg-at-moderne in [#9107](https://github.com/openrewrite/rewrite/pull/9107)
* Carry causesAnotherCycle across RPC by @sambsnyd in [#9054](https://github.com/openrewrite/rewrite/pull/9054)
* Preserve imported BOM precedence in `SortDependencies` by @martinfrancois in [#8508](https://github.com/openrewrite/rewrite/pull/8508)
* Emit search markers on YAML sequences, mappings, and sequence entries by @steve-aom-elliott in [#9109](https://github.com/openrewrite/rewrite/pull/9109)
* Parse poetry.lock and pdm.lock as TOML by @timtebeek in [#9110](https://github.com/openrewrite/rewrite/pull/9110)

#### [rewrite 8.92.17](https://github.com/openrewrite/rewrite/releases/tag/v8.92.17)

* Python: a spliced template's context reaches the file it lands in by @knutwannheden in [#8790](https://github.com/openrewrite/rewrite/pull/8790)
* C#: add RemoveNjsprojFromSolution to drop Node.js projects from solutions by @macsux in [#9019](https://github.com/openrewrite/rewrite/pull/9019)
* `ChangePackage` expands a wildcard import to the package's top-level types only by @jkschneider in [#9020](https://github.com/openrewrite/rewrite/pull/9020)
* `ChangeDependencyClassifier` keeps the version a dependency took from management when the classifier changes by @jkschneider in [#9021](https://github.com/openrewrite/rewrite/pull/9021)
* `UpgradeDependencyVersion` resolves nested property expressions through the POM by @jkschneider in [#9022](https://github.com/openrewrite/rewrite/pull/9022)
* `ChangeDependencyGroupIdAndArtifactId` gains `changePluginDependencies` to leave Maven plugin dependencies alone by @jkschneider in [#9023](https://github.com/openrewrite/rewrite/pull/9023)
* Don't repurpose a version property that Maven plugins also use when changing a dependency by @jkschneider in [#9024](https://github.com/openrewrite/rewrite/pull/9024)
* `ChangePropertyKey` keeps comments with their lines when moving YAML properties by @jkschneider in [#9025](https://github.com/openrewrite/rewrite/pull/9025)
* Skip calls to declared methods in UsePropertyAssignmentSyntax by @mipal-mod in [#9017](https://github.com/openrewrite/rewrite/pull/9017)
* C#: parse Android without a JDK and out-of-support workloads (NETSDK1202) by @macsux in [#9013](https://github.com/openrewrite/rewrite/pull/9013)
* JavaScript: reject a direct peer conflict before resolving the npm dependency closure by @jkschneider in [#9029](https://github.com/openrewrite/rewrite/pull/9029)
* JavaScript: format a template applied to a JSX attribute's value in the attribute's context by @jkschneider in [#9028](https://github.com/openrewrite/rewrite/pull/9028)
* JavaScript: keep the indentation of multiline template literal interpolations by @jkschneider in [#9027](https://github.com/openrewrite/rewrite/pull/9027)
* Print JavaScript, Python, Go and C# LSTs in the JVM by @jkschneider in [#9030](https://github.com/openrewrite/rewrite/pull/9030)

#### [rewrite 8.92.16](https://github.com/openrewrite/rewrite/releases/tag/v8.92.16)

* Fix duplicate `version` when replacing a shared Gradle version variable by @myhau in [#9004](https://github.com/openrewrite/rewrite/pull/9004)
* JavaScript: fix several cases in ModernizeOctalEscapeSequences, expor… by @greg-at-moderne in [#9008](https://github.com/openrewrite/rewrite/pull/9008)
* JavaScript: add isVendoredOrBundled precondition by @greg-at-moderne in [#9009](https://github.com/openrewrite/rewrite/pull/9009)
* JavaScript: Keep surrogate escapes correct when rewriting literals by @greg-at-moderne in [#9010](https://github.com/openrewrite/rewrite/pull/9010)
* C#: model typeof as Cs.TypeOf; keep whitespace in typeof/sizeof/using parens by @macsux in [#9014](https://github.com/openrewrite/rewrite/pull/9014)
* Emit `@lombok.CheckReturnValue` on Lombok-generated methods by @timtebeek in [#9012](https://github.com/openrewrite/rewrite/pull/9012)

#### [rewrite 8.92.15](https://github.com/openrewrite/rewrite/releases/tag/v8.92.15)

* Send null list elements over RPC instead of failing the C# build by @macsux in [#8994](https://github.com/openrewrite/rewrite/pull/8994)
* JavaScript: keep brace spacing on rebind, and match a created import to the file's Prettier style by @sambsnyd in [#8999](https://github.com/openrewrite/rewrite/pull/8999)
* Python: add onlyIfUsing to AddDependency, scoped per project by @sambsnyd in [#8998](https://github.com/openrewrite/rewrite/pull/8998)
* C#: send NaN and Infinity over RPC instead of failing the file by @macsux in [#9005](https://github.com/openrewrite/rewrite/pull/9005)
* JavaScript: `AddImport` now recognises references to the requested module by @greg-at-moderne in [#9006](https://github.com/openrewrite/rewrite/pull/9006)

#### [rewrite 8.92.14](https://github.com/openrewrite/rewrite/releases/tag/v8.92.14)

* Gradle: upgrade a version catalog version held in a script variable by @Jammy-Louie in [#8919](https://github.com/openrewrite/rewrite/pull/8919)
* Kotlin: indent spliced parameter lists from their declaration, and chop over-long parameter and argument lists by @knutwannheden in [#8996](https://github.com/openrewrite/rewrite/pull/8996)
* Kotlin: re-align KDoc continuation lines when a declaration changes indentation by @knutwannheden in [#8997](https://github.com/openrewrite/rewrite/pull/8997)
* Kotlin: autodetect whether wrapped parameters use the continuation indent by @knutwannheden in [#8995](https://github.com/openrewrite/rewrite/pull/8995)
* Add `ImportComments` to parent delegated class loading by @greg-at-moderne in [#9000](https://github.com/openrewrite/rewrite/pull/9000)
* Pass codegenome credentials to Gradle workflows as project properties by @timtebeek in [#9001](https://github.com/openrewrite/rewrite/pull/9001)
* Keep recipe-loaded types out of TreeVisitorAdapter's setDelegate handle by @jkschneider in [#9003](https://github.com/openrewrite/rewrite/pull/9003)

#### [rewrite 8.92.13](https://github.com/openrewrite/rewrite/releases/tag/v8.92.13)

* Go: coerce nil Go Markers to empty over RPC by @greg-at-moderne in [#8992](https://github.com/openrewrite/rewrite/pull/8992)
* Go: AsRef sends a nil Space or Markers as its empty sentinel by @jkschneider in [#8993](https://github.com/openrewrite/rewrite/pull/8993)
* Record RPC peer process lifetimes and count running peers by @shanman190 in [#8968](https://github.com/openrewrite/rewrite/pull/8968)
* Time RPC requests in both directions by @shanman190 in [#8972](https://github.com/openrewrite/rewrite/pull/8972)

#### [rewrite 8.92.12](https://github.com/openrewrite/rewrite/releases/tag/v8.92.12)

* Fix test compilation after markers and GOOS changes in parallel by @greg-at-moderne in [#8974](https://github.com/openrewrite/rewrite/pull/8974)
* Match dependency tags by managed scope of the resolved dependency by @timtebeek in [#8976](https://github.com/openrewrite/rewrite/pull/8976)
* Find the dev venv's Python on Windows by @shanman190 in [#8973](https://github.com/openrewrite/rewrite/pull/8973)
* Go: Send unset spaces as empty instead of null by @Jammy-Louie in [#8977](https://github.com/openrewrite/rewrite/pull/8977)
* Go: null-handling of empty markers in RPC by @greg-at-moderne in [#8984](https://github.com/openrewrite/rewrite/pull/8984)
* Cache TreeVisitorAdapter lookups and constructors by @jkschneider in [#8982](https://github.com/openrewrite/rewrite/pull/8982)
* Remove excessive `allowNonWhitespaceInWhitespace(true)` from tests for Go, C#, Docker by @greg-at-moderne in [#8989](https://github.com/openrewrite/rewrite/pull/8989)
* Null-safety on Java side for Go null spaces and markers by @greg-at-moderne in [#8988](https://github.com/openrewrite/rewrite/pull/8988)
* Honor RUN_TIMEOUT while scanning and add an opt-in per-file timeout by @jkschneider in [#8983](https://github.com/openrewrite/rewrite/pull/8983)
* Split multi-line YAML comments into one comment line per line by @timtebeek in [#8987](https://github.com/openrewrite/rewrite/pull/8987)
* Send a node's Markers over RPC as a ref, so marker-free nodes cost one message by @jkschneider in [#8975](https://github.com/openrewrite/rewrite/pull/8975)
* Fix Groovy parser bugs with @BaseScript, @Field, GStrings, and annotations after modifiers by @jkschneider in [#8990](https://github.com/openrewrite/rewrite/pull/8990)
* Preserve Java import comments through ordering and folding by @Niloyyy in [#8964](https://github.com/openrewrite/rewrite/pull/8964)
* Recipe DSL: shorten and import types the after-template spells fully qualified by @knutwannheden in [#8985](https://github.com/openrewrite/rewrite/pull/8985)

#### [rewrite 8.92.11](https://github.com/openrewrite/rewrite/releases/tag/v8.92.11)

* Fix C# engine stall, missing log, and slash-normalized paths on Windows by @shanman190 in [#8967](https://github.com/openrewrite/rewrite/pull/8967)
* Map each Go package, method and variable to one JavaType by @jkschneider in [#8970](https://github.com/openrewrite/rewrite/pull/8970)
* Go: Surface unresolved imports on resolution marker by @greg-at-moderne in [#8953](https://github.com/openrewrite/rewrite/pull/8953)
* Go: space and markers are now references in LST elements by @greg-at-moderne in [#8905](https://github.com/openrewrite/rewrite/pull/8905)
* Go: Parse for all platforms, GOOS, GOARCH by @greg-at-moderne in [#8947](https://github.com/openrewrite/rewrite/pull/8947)

#### [rewrite 8.92.10](https://github.com/openrewrite/rewrite/releases/tag/v8.92.10)

* Go: honor onlyIfReferenced and add imports into the right declaration and group by @jkschneider in [#8963](https://github.com/openrewrite/rewrite/pull/8963)
* Stop passing Sonatype credentials to reusable workflows by @timtebeek in [#8965](https://github.com/openrewrite/rewrite/pull/8965)
* Emit project manifests ahead of the sources they describe in parseProject by @jkschneider in [#8966](https://github.com/openrewrite/rewrite/pull/8966)

#### [rewrite 8.92.9](https://github.com/openrewrite/rewrite/releases/tag/v8.92.9)

* Do not indent blank lines when reindenting a text block by @timtebeek in [#8927](https://github.com/openrewrite/rewrite/pull/8927)
* Say when git normalizes CRLF to LF by @jkschneider in [#8934](https://github.com/openrewrite/rewrite/pull/8934)
* Give `TreeVisitorAdapter` a private class creation lock by @shanman190 in [#8935](https://github.com/openrewrite/rewrite/pull/8935)
* Python: re-use empty lists in RPC receive by @greg-at-moderne in [#8930](https://github.com/openrewrite/rewrite/pull/8930)
* Fix test sources in rewrite-java-test that javac rejects by @timtebeek in [#8938](https://github.com/openrewrite/rewrite/pull/8938)
* Add `because` to an existing Kotlin DSL constraint without a ClassCastException by @timtebeek in [#8939](https://github.com/openrewrite/rewrite/pull/8939)
* Keep an existing constraint's configuration block when adding `because` by @timtebeek in [#8940](https://github.com/openrewrite/rewrite/pull/8940)
* Gradle: recognize a version catalog in a version-catalog producer block by @Jammy-Louie in [#8906](https://github.com/openrewrite/rewrite/pull/8906)
* Gradle: require a closure argument for a version-catalog producer block by @Jammy-Louie in [#8944](https://github.com/openrewrite/rewrite/pull/8944)
* Upgrade to Kotlin 2.4.20 by @timtebeek in [#8914](https://github.com/openrewrite/rewrite/pull/8914)
* Scala: ScalaVisitor to call visitExpression(), visitStatement() for S… by @greg-at-moderne in [#8954](https://github.com/openrewrite/rewrite/pull/8954)
* Send .npmrc credentials that reference unset environment variables as written, as npm does by @mtthwcmpbll in [#8936](https://github.com/openrewrite/rewrite/pull/8936)
* Send Pipfile index URL credentials that reference unset environment variables as written, as pipenv does by @mtthwcmpbll in [#8937](https://github.com/openrewrite/rewrite/pull/8937)
* Keep index URL credentials out of uv.lock and lock regeneration failures by @shanman190 in [#8959](https://github.com/openrewrite/rewrite/pull/8959)
* Fix npm auth lookup for registry URLs with explicit default ports by @Shubchynskyi in [#8946](https://github.com/openrewrite/rewrite/pull/8946)
* Verify npm peer forks per placement and keep removed dependencies that are still required by @mtthwcmpbll in [#8942](https://github.com/openrewrite/rewrite/pull/8942)
* Let JavaParser skip type attribution, and report a conversion failure once by @jkschneider in [#8961](https://github.com/openrewrite/rewrite/pull/8961)
* Fix Groovy multi-index subscript round trips by @Shubchynskyi in [#8960](https://github.com/openrewrite/rewrite/pull/8960)
* Add `onlyDirect` option to Gradle `ModuleHasDependency` by @steve-aom-elliott in [#8943](https://github.com/openrewrite/rewrite/pull/8943)
* Honor distributionChecksum with a custom wrapperUri in UpdateGradleWrapper by @kmccarp in [#8933](https://github.com/openrewrite/rewrite/pull/8933)
* Native npm lock regeneration: fix reverted package.json edits and describe it accurately by @mtthwcmpbll in [#8957](https://github.com/openrewrite/rewrite/pull/8957)
* Name the repositories a proxy tried in Maven download failures by @jkschneider in [#8899](https://github.com/openrewrite/rewrite/pull/8899)
* Kotlin: fix resolved-qualifier typing and syntax-error reporting by @timtebeek in [#8948](https://github.com/openrewrite/rewrite/pull/8948)
* Compare numeric pre-release counters numerically in LatestRelease by @timtebeek in [#8916](https://github.com/openrewrite/rewrite/pull/8916)
* Python: type an int literal by the width its value needs by @knutwannheden in [#8869](https://github.com/openrewrite/rewrite/pull/8869)
* Never read a tree the RPC peer lost as a deletion by @jkschneider in [#8776](https://github.com/openrewrite/rewrite/pull/8776)
* Treat non-US reverse DNS prefixes as category roots by @timtebeek in [#8697](https://github.com/openrewrite/rewrite/pull/8697)
* Python: move unary operator spacing into SpacesVisitor by @knutwannheden in [#8543](https://github.com/openrewrite/rewrite/pull/8543)

#### [rewrite-all 1.30.2](https://github.com/openrewrite/rewrite-all/releases/tag/v1.30.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.34.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.34.0)

* Remove .contextSensitive in ApacheIOUtilsUseExplicitCharset by @greg-at-moderne in [#150](https://github.com/openrewrite/rewrite-apache/pull/150)
* Harden Commons Collections 3 to 4 migration by @timtebeek in [#152](https://github.com/openrewrite/rewrite-apache/pull/152)
* Harden Commons Lang migration recipes against real-world code by @timtebeek in [#151](https://github.com/openrewrite/rewrite-apache/pull/151)

#### [rewrite-cucumber-jvm 2.20.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.20.0)

* Build nightly snapshots before rewrite-testing-frameworks by @timtebeek in [#68](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/68)
* Keep the `cucumber-junit-platform-engine` swap resolvable by @timtebeek in [#69](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/69)

#### [rewrite-cucumber-jvm 2.19.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.19.0)

* Pin the Cucumber-JVM test type tables to 7.x by @timtebeek in [#64](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/64)
* Ship the datatable type table the Cucumber-Java8 migration resolves by @timtebeek in [#65](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/65)
* Drop `StrictAware` along with the `strict` option by @Akhil-1527 in [#66](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/66)
* Migrate the JUnit 4 `@RunWith(Cucumber.class)` runner to a JUnit Platform `@Suite` by @timtebeek in [#67](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/67)

#### [rewrite-feature-flags 1.24.2](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.24.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.33.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.33.0)

* Upgrade Java matrix axes that `setup-java` reads through `${{ matrix.* }}` by @jkschneider in [#231](https://github.com/openrewrite/rewrite-github-actions/pull/231)
* `RemoveRunner` recipe by @greg-at-moderne in [#232](https://github.com/openrewrite/rewrite-github-actions/pull/232)

#### [rewrite-gitlab 0.25.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.25.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.44.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.44.0)

* Narrow the Kotlin CVE-2026-53914 suppressions by @timtebeek in [#479](https://github.com/openrewrite/rewrite-gradle-plugin/pull/479)
* Add micrometer as a dependency by @greg-at-moderne in [#480](https://github.com/openrewrite/rewrite-gradle-plugin/pull/480)

#### [rewrite-hibernate 2.27.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.27.0)

* Drop `@GeneratedValue` strategy when a custom `@GenericGenerator` is used by @steve-aom-elliott in [#100](https://github.com/openrewrite/rewrite-hibernate/pull/100)
* Limit Hypersistence Utils package rename to Hibernate Types packages by @mipal-mod in [#101](https://github.com/openrewrite/rewrite-hibernate/pull/101)
* Expand Hibernate dialect migrations to cover removals through 7.0 by @steve-aom-elliott in [#102](https://github.com/openrewrite/rewrite-hibernate/pull/102)

#### [rewrite-jackson 1.31.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.31.0)

* Leave modules already on Jackson 3 alone when upgrading Jackson dependencies by @timtebeek in [#171](https://github.com/openrewrite/rewrite-jackson/pull/171)
* Remove `@Bean` factories for the modules Jackson 3 builds in by @jkschneider in [#172](https://github.com/openrewrite/rewrite-jackson/pull/172)

#### [rewrite-java-dependencies 1.64.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.64.0)

* Show the GAV being searched for in DependencyInsight's instance name by @jkschneider in [#200](https://github.com/openrewrite/rewrite-java-dependencies/pull/200)
* Pass cursor to wrapped visitors in UpgradeTransitiveDependencyVersion by @timtebeek in [#201](https://github.com/openrewrite/rewrite-java-dependencies/pull/201)
* `ChangeDependency` passes `changePluginDependencies` through to the Maven recipe by @jkschneider in [#202](https://github.com/openrewrite/rewrite-java-dependencies/pull/202)
* Pass Code Genome credentials to the migrations workflow as Gradle properties by @timtebeek in [#203](https://github.com/openrewrite/rewrite-java-dependencies/pull/203)

#### [rewrite-jenkins 0.38.2](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.38.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.12.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.12.0)

* Fix and extend the Joda-Time recipes based on a corpus evaluation by @timtebeek in [#26](https://github.com/openrewrite/rewrite-joda/pull/26)
* Translate Joda-Time formatter patterns and parse like Joda-Time by @timtebeek in [#27](https://github.com/openrewrite/rewrite-joda/pull/27)
* Map ReadableDateTime and getMillis() on Readable receivers by @timtebeek in [#28](https://github.com/openrewrite/rewrite-joda/pull/28)
* Add recipe writing lessons on migrations that change types by @timtebeek in [#29](https://github.com/openrewrite/rewrite-joda/pull/29)

#### [rewrite-liberty 1.28.2](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.28.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.34.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.34.1)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-mainframe 3.2.1](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.2.1)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-maven-plugin 6.50.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.50.0)

* Remove Sonatype snapshots repository by @timtebeek in [#1214](https://github.com/openrewrite/rewrite-maven-plugin/pull/1214)
* Develocity 2.6.0 by @greg-at-moderne in [#1219](https://github.com/openrewrite/rewrite-maven-plugin/pull/1219)
* Ignore Maven 3.10 credential and resolver warnings in ITs by @timtebeek in [#1220](https://github.com/openrewrite/rewrite-maven-plugin/pull/1220)
* Maven wrapper 3.10.0 by @timtebeek in [#1221](https://github.com/openrewrite/rewrite-maven-plugin/pull/1221)

#### [rewrite-micrometer 0.31.2](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.31.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.39.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.39.0)

* `AddSnakeYamlDependencyIfNeeded` adds SnakeYAML only to the module that owns the YAML configuration by @jkschneider in [#150](https://github.com/openrewrite/rewrite-micronaut/pull/150)
* `AddHttpRequestTypeParameter` keeps the type argument of an already parameterized security interface by @jkschneider in [#151](https://github.com/openrewrite/rewrite-micronaut/pull/151)
* `AddHttpRequestTypeParameter` leaves raw implementations with an `Object` request override alone and imports `HttpRequest` by @jkschneider in [#152](https://github.com/openrewrite/rewrite-micronaut/pull/152)
* Add `micronaut-validation` in test scope when only tests use validation constraints by @jkschneider in [#153](https://github.com/openrewrite/rewrite-micronaut/pull/153)
* Add the Micronaut validation processor to the source sets that use validation constraints by @jkschneider in [#154](https://github.com/openrewrite/rewrite-micronaut/pull/154)
* Add the Micronaut validation processor to `compileOnly` for Groovy and `kapt` for Kotlin sources by @jkschneider in [#155](https://github.com/openrewrite/rewrite-micronaut/pull/155)
* Give unmanaged Micronaut validation dependencies an explicit version by @jkschneider in [#156](https://github.com/openrewrite/rewrite-micronaut/pull/156)

#### [rewrite-migrate-java 3.46.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.46.0)

* Leave a Groovy `def` declaration alone instead of splicing `var` into its variable name. by @motlin in [#1229](https://github.com/openrewrite/rewrite-migrate-java/pull/1229)
* Add `MigrateFromSpotBugsAnnotations` recipe by @sullis in [#1245](https://github.com/openrewrite/rewrite-migrate-java/pull/1245)
* Replace deprecated AWT `show()`/`hide()` calls with `setVisible` by @timtebeek in [#1247](https://github.com/openrewrite/rewrite-migrate-java/pull/1247)
* Use OpenRewrite's StringUtils instead of Micrometer's by @greg-at-moderne in [#1248](https://github.com/openrewrite/rewrite-migrate-java/pull/1248)
* Extend JavaAwtAPIs with size, preferredSize, and countComponents renames by @jonico in [#1249](https://github.com/openrewrite/rewrite-migrate-java/pull/1249)
* Upgrade the JDK in `maven:3.9-eclipse-temurin-*` builder images when upgrading Java by @jkschneider in [#1250](https://github.com/openrewrite/rewrite-migrate-java/pull/1250)
* Upgrade the bnd Maven plugin to 7.4.0 in the Java 25 migration by @jkschneider in [#1251](https://github.com/openrewrite/rewrite-migrate-java/pull/1251)
* Upgrade explicit Java versions in `pom.xml` files that have no Maven model by @jkschneider in [#1252](https://github.com/openrewrite/rewrite-migrate-java/pull/1252)
* Replace the retired `adopt` setup-java distribution with `temurin` in the Java 25 migration by @jkschneider in [#1253](https://github.com/openrewrite/rewrite-migrate-java/pull/1253)
* Upgrade Spring Boot 3 Maven parents to 3.5 in the Java 25 migration by @jkschneider in [#1254](https://github.com/openrewrite/rewrite-migrate-java/pull/1254)
* Simplify the dead thread-group fallback left by `SystemGetSecurityManagerToNull` by @jkschneider in [#1255](https://github.com/openrewrite/rewrite-migrate-java/pull/1255)
* Keep single-statement blocks that carry comments when converting if/else-if to switch by @jkschneider in [#1256](https://github.com/openrewrite/rewrite-migrate-java/pull/1256)
* Add the JAXB API dependency for `javax.xml.bind` imports the parser could not resolve by @jkschneider in [#1257](https://github.com/openrewrite/rewrite-migrate-java/pull/1257)
* Upgrade `cimg/openjdk` CI job containers when upgrading Java by @jkschneider in [#1258](https://github.com/openrewrite/rewrite-migrate-java/pull/1258)
* Replace the discontinued `mapstruct-jdk8` artifact before upgrading the MapStruct version by @jkschneider in [#1260](https://github.com/openrewrite/rewrite-migrate-java/pull/1260)
* Upgrade an existing Maven wrapper to 3.9.x alongside the Java 17 plugin upgrades by @jkschneider in [#1261](https://github.com/openrewrite/rewrite-migrate-java/pull/1261)
* Upgrade Ehcache to 3.10.x when the Jakarta migration adds the `jakarta` classifier by @jkschneider in [#1262](https://github.com/openrewrite/rewrite-migrate-java/pull/1262)
* The Jakarta JAXB migration adds `jakarta.xml.bind-api` for imports the parser could not resolve by @jkschneider in [#1264](https://github.com/openrewrite/rewrite-migrate-java/pull/1264)
* The Jakarta annotation migration adds `jakarta.annotation-api` for imports the parser could not resolve by @jkschneider in [#1265](https://github.com/openrewrite/rewrite-migrate-java/pull/1265)
* The Jakarta XML Web Services migration adds `jakarta.xml.ws-api` for imports the parser could not resolve by @jkschneider in [#1266](https://github.com/openrewrite/rewrite-migrate-java/pull/1266)
* The Jakarta JAXB migration adds a JAXB runtime to modules that create a `JAXBContext` by @jkschneider in [#1267](https://github.com/openrewrite/rewrite-migrate-java/pull/1267)
* The Jakarta REST migration upgrades Jersey 2 to 3.0 and replaces the removed `LoggingFilter` by @jkschneider in [#1268](https://github.com/openrewrite/rewrite-migrate-java/pull/1268)
* `JavaxPersistenceXmlToJakartaPersistenceXml` finds persistence descriptors by namespace instead of file name by @jkschneider in [#1269](https://github.com/openrewrite/rewrite-migrate-java/pull/1269)
* The Jakarta JAXB migration upgrades EclipseLink MOXy to 3.0 by @jkschneider in [#1270](https://github.com/openrewrite/rewrite-migrate-java/pull/1270)
* The Jakarta migration updates Jakarta EE type names in string literals by @jkschneider in [#1271](https://github.com/openrewrite/rewrite-migrate-java/pull/1271)
* Apply the springfox-swagger2 upgrade from NoGuava again by @timtebeek in [#1286](https://github.com/openrewrite/rewrite-migrate-java/pull/1286)
* Limit DanglingDocCommentToBlockComment to Java sources by @timtebeek in [#1287](https://github.com/openrewrite/rewrite-migrate-java/pull/1287)

#### [rewrite-netty 0.13.2](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.13.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.25.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.25.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.35.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.35.0)

* Fix NullPointerException in MigrateApiParamSchemaValue for argument-less @ApiParam by @timtebeek in [#81](https://github.com/openrewrite/rewrite-openapi/pull/81)

#### [rewrite-pmd 0.1.4](https://github.com/openrewrite/rewrite-pmd/releases/tag/v0.1.4)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.13.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.13.0)

* Remove moderne-ingest workflow by @timtebeek in [#57](https://github.com/openrewrite/rewrite-polyglot/pull/57)

#### [rewrite-prethink 1.6.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.6.0)

* Drop removed UpdatePrethinkContextNoAiStarter from UpdatePrethinkContext Javadoc by @timtebeek in [#35](https://github.com/openrewrite/rewrite-prethink/pull/35)

#### [rewrite-quarkus 2.36.2](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.36.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.34.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.34.0)

* Add `lombok.checkReturnValueAnnotation` to OpenRewrite recipe best practices by @timtebeek in [#95](https://github.com/openrewrite/rewrite-rewrite/pull/95)
* Add `FindIgnoredCheckReturnValue` to OpenRewrite recipe best practices by @timtebeek in [#96](https://github.com/openrewrite/rewrite-rewrite/pull/96)
* SourceSpecTextBlockNewLine: keep Kotlin trailing comma after text block by @timtebeek in [#97](https://github.com/openrewrite/rewrite-rewrite/pull/97)

#### [rewrite-spring 6.41.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.41.0)

* Migrate remaining HttpStatus and StatusResultMatchers renames for Spr… by @shmoonwalker in [#1151](https://github.com/openrewrite/rewrite-spring/pull/1151)
* Handle empty `@ContextConfiguration()` argument list in ReplaceExtendWithAndContextConfiguration by @myhau in [#1158](https://github.com/openrewrite/rewrite-spring/pull/1158)
* Merge profile-specific bootstrap yaml into application yaml by @steve-aom-elliott in [#1153](https://github.com/openrewrite/rewrite-spring/pull/1153)
* Only narrow bean return type when every return has the same type by @Akhil-1527 in [#1156](https://github.com/openrewrite/rewrite-spring/pull/1156)
* Migrate `management.context-path` to `management.endpoints.web.base-path` by @jkschneider in [#1160](https://github.com/openrewrite/rewrite-spring/pull/1160)
* Import the Spring Boot 4 BOM when a third-party BOM manages Boot only transitively by @jkschneider in [#1161](https://github.com/openrewrite/rewrite-spring/pull/1161)
* Don't add `@Configuration` to a class whose `@Bean` methods cannot be proxied by @jkschneider in [#1162](https://github.com/openrewrite/rewrite-spring/pull/1162)
* Run the Spring Boot 4 migration only on repositories that use Spring Boot by @jkschneider in [#1163](https://github.com/openrewrite/rewrite-spring/pull/1163)
* Relocate `ServletWebServerFactory` and `ConfigurableServletWebServerFactory` to their Boot 4 package by @jkschneider in [#1164](https://github.com/openrewrite/rewrite-spring/pull/1164)
* Migrate `authorizeRequests` to `authorizeHttpRequests` even when the parsed classpath predates it by @jkschneider in [#1165](https://github.com/openrewrite/rewrite-spring/pull/1165)
* Rename `HeadersConfigurer.permissionsPolicy(Customizer)` to `permissionsPolicyHeader` in Security 6.4 by @jkschneider in [#1166](https://github.com/openrewrite/rewrite-spring/pull/1166)
* Move Hibernate Validator's `EmailValidator` from the `hv` to the `bv` package in the Boot 3 migration by @jkschneider in [#1167](https://github.com/openrewrite/rewrite-spring/pull/1167)
* Recognize `WebSecurityConfigurerAdapter` subclasses whose `@Configuration` is a meta-annotation by @jkschneider in [#1168](https://github.com/openrewrite/rewrite-spring/pull/1168)
* Migrate Thymeleaf's Spring 4 integration to Spring 5 in the Boot 2 migration by @jkschneider in [#1169](https://github.com/openrewrite/rewrite-spring/pull/1169)
* Remove `@EnableAutoConfiguration` exclusions of the Boot 1 metrics auto-configurations by @jkschneider in [#1170](https://github.com/openrewrite/rewrite-spring/pull/1170)
* Migrate `LiquibaseProperties` contexts and labels, which became lists in Boot 4 by @jkschneider in [#1171](https://github.com/openrewrite/rewrite-spring/pull/1171)
* Leave Maven plugin dependencies alone when swapping libraries for Boot starters by @jkschneider in [#1172](https://github.com/openrewrite/rewrite-spring/pull/1172)
* Remove ignored `getArguments()` call in `MigrateJpaSort` by @timtebeek in [#1175](https://github.com/openrewrite/rewrite-spring/pull/1175)
* Enable virtual threads on Java 21 and later, not only Java 21 by @timtebeek in [#1178](https://github.com/openrewrite/rewrite-spring/pull/1178)

#### [rewrite-spring-to-quarkus 0.13.2](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.13.2)

* OpenRewrite v8.93.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.45.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.45.0)

* Add FindMainWithThrowsClause recipe (RSPEC-S2096) by @steve-aom-elliott in [#1072](https://github.com/openrewrite/rewrite-static-analysis/pull/1072)
* Fix serialVersionUID for generic Serializable classes by @LouisDeconinck in [#1056](https://github.com/openrewrite/rewrite-static-analysis/pull/1056)
* Add some scala() assertions to selected recipe tests by @greg-at-moderne in [#1073](https://github.com/openrewrite/rewrite-static-analysis/pull/1073)
* Null-safety for space in RemoveExtraSemicolons by @greg-at-moderne in [#1076](https://github.com/openrewrite/rewrite-static-analysis/pull/1076)
* Run MoveFieldAnnotationToType only on Java sources by @myhau in [#1077](https://github.com/openrewrite/rewrite-static-analysis/pull/1077)
* Preserve the comments on a cast declaration `InstanceOfPatternMatch` removes by @jkschneider in [#1078](https://github.com/openrewrite/rewrite-static-analysis/pull/1078)
* Remove ignored getter calls in `NewStringBuilderBufferWithCharArgument` and `UnnecessaryThrows` by @timtebeek in [#1081](https://github.com/openrewrite/rewrite-static-analysis/pull/1081)
* Remove imports left unused after RemoveMethodsOnlyCallSuper runs by @motlin in [#1082](https://github.com/openrewrite/rewrite-static-analysis/pull/1082)
* Add FindIgnoredCheckReturnValue recipe by @timtebeek in [#1080](https://github.com/openrewrite/rewrite-static-analysis/pull/1080)
* FindIgnoredCheckReturnValue: skip calls on the current instance in AssertJ assertion constructors by @timtebeek in [#1084](https://github.com/openrewrite/rewrite-static-analysis/pull/1084)
* Fix InstanceOfPatternMatch: don't replace cast after variable reassignment by @devsuyash-Hq in [#1083](https://github.com/openrewrite/rewrite-static-analysis/pull/1083)
* Keep Java `Runtime.exec` replacements out of non-Java sources by @martinfrancois in [#990](https://github.com/openrewrite/rewrite-static-analysis/pull/990)

#### [rewrite-templating 1.46.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.46.0)

* Remove the closeAndReleaseSonatypeStagingRepository no-op stand-in by @timtebeek in [#195](https://github.com/openrewrite/rewrite-templating/pull/195)

#### [rewrite-testing-frameworks 3.49.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.49.0)

* Run the full Cucumber-JVM 7.x upgrade from `JUnit4to5Migration` by @timtebeek in [#1181](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1181)
* Upgrade WireMock to the latest 2.x in JUnit4to5Migration by @timtebeek in [#1182](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1182)

#### [rewrite-testing-frameworks 3.48.2](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.48.2)

* More efficient regexp for powermock unused Maven property by @greg-at-moderne in [#1179](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1179)
* Junit5MigrationTest to avoid flakiness by sorting sources by @greg-at-moderne in [#1180](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1180)

#### [rewrite-testing-frameworks 3.48.1](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.48.1)

* Run the Cucumber JUnit Platform suite migration from `JUnit4to5Migration` by @timtebeek in [#1178](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1178)

#### [rewrite-testing-frameworks 3.48.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.48.0)

* Add junit-jupiter when only junit.framework.TestCase is used by @manduinca in [#1117](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1117)
* Replace PowerMockRunner with the lenient MockitoJUnitRunner.Silent by @timtebeek in [#1131](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1131)
* Skip MockitoWhenOnStaticToMockStatic for tests still on PowerMock by @timtebeek in [#1132](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1132)
* Remove PowerMockRule and remaining PowerMock calls and annotations by @timtebeek in [#1133](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1133)
* Reflect on the declaring class when migrating Whitebox calls by @timtebeek in [#1134](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1134)
* Mockito1to3Migration: rename anyXOf matchers called through org.mockito.Mockito by @mohitduhan19 in [#1130](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1130)
* Migrate Whitebox calls nested in expressions and named by constants by @timtebeek in [#1135](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1135)
* Replace parent-managed PowerMock with the Mockito artifact its modules use by @timtebeek in [#1138](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1138)
* Keep migrated static mocks scoped like PowerMock's by @timtebeek in [#1136](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1136)
* Add WireMock 3 to 4 migration recipe by @sullis in [#1122](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1122)
* Keep whenNew stubbing and scope when migrating to construction mocks by @timtebeek in [#1137](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1137)
* Preserve parameterized toString assertions by @martinfrancois in [#1094](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1094)
* Leave repositories with unmigratable PowerMock usage on PowerMock and flag that usage by @timtebeek in [#1140](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1140)
* Preserve element-specific assertions in sequenced collections by @martinfrancois in [#1095](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1095)
* Upgrade an explicit mockito-core along with the Mockito that replaces PowerMock by @timtebeek in [#1141](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1141)
* Flag Whitebox calls when the class declaring the accessed member is unknown by @timtebeek in [#1142](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1142)
* PowerMock → Mockito migration enhancements by @sambsnyd in [#1143](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1143)
* Cache GradleUseJunitJupiter's parsed template on the root cursor by @timtebeek in [#1147](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1147)
* Add JUnit 4 where the PowerMock JUnit 4 module provided it by @timtebeek in [#1151](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1151)
* Keep imports that migrated PowerMock code still needs by @timtebeek in [#1149](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1149)
* Reuse an existing MockedStatic for static stubbing in setup methods by @timtebeek in [#1150](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1150)
* Disable unsupported PowerMock tests before migrating them by @timtebeek in [#1148](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1148)
* `RemoveDoNothingForDefaultMocks` removes imports only the deleted stub used by @jkschneider in [#1154](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1154)
* `MockitoJUnitToMockitoExtension` migrates only `MockitoRule` fields annotated with `@Rule` by @jkschneider in [#1155](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1155)
* `UseMockitoExtension` adds `mockito-junit-jupiter` for migrated `MockitoRule` fields by @jkschneider in [#1156](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1156)
* `UseMockitoExtension` adds `mockito-junit-jupiter` at the module's Mockito version by @jkschneider in [#1157](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1157)
* `AddHamcrestIfUsed` adds Hamcrest for any Hamcrest use, including matchers the `ExpectedException` migration generates by @jkschneider in [#1158](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1158)
* `AddJupiterDependencies` declares the Jupiter API directly in Maven modules that run `dependency:analyze` by @jkschneider in [#1159](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1159)
* The JUnit 4 migration adds `@Nested` only inside `@RunWith(Enclosed.class)` suites by @jkschneider in [#1160](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1160)
* The JUnit 4 migration keeps JUnit 4 on the classpath of modules that use Guava testlib by @jkschneider in [#1161](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1161)
* MigrateJUnitTestCase: leave TestCase subclasses overriding run(TestResult) untouched by @mohitduhan19 in [#1168](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1168)
* Migrate System Rules to System Stubs and JUnit Pioneer by @timtebeek in [#1152](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1152)
* `JUnit5to6Migration` renames `ExtensionContext.Store.getOrComputeIfAbsent` to `computeIfAbsent` by @timtebeek in [#1171](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1171)
* Exclude a transitive mockito-all when replacing PowerMock by @jkschneider in [#1172](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1172)
* Leave a declared JUnit 4 at its version when replacing PowerMock by @jkschneider in [#1173](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1173)
* Place AssertJ descriptions and failure messages before the assertion by @timtebeek in [#1170](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1170)
* Skip JUnit 6 build changes in modules that use TestNG by @timtebeek in [#1177](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1177)
* ReplacePowerMockito: fix duplicate and shadowed Mockito dependencies by @sambsnyd in [#1176](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1176)

## [rewrite-recipe-bom 3.40.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.40.0)

Released on September 23, 2026, with OpenRewrite 8.92.8.

#### [rewrite 8.92.8](https://github.com/openrewrite/rewrite/releases/tag/v8.92.8)

* OpenRewrite v8.92.7: https://github.com/openrewrite/rewrite

#### [rewrite 8.92.7](https://github.com/openrewrite/rewrite/releases/tag/v8.92.7)

* JavaScript: attribute calls on untyped modules, and merge imports into a list's own layout by @sambsnyd in [#8909](https://github.com/openrewrite/rewrite/pull/8909)
* Groovy: parse paren-less lambda arguments with a parameter list by @timtebeek in [#8908](https://github.com/openrewrite/rewrite/pull/8908)
* Remove unused JAXB annotation support from rewrite-maven by @timtebeek in [#8671](https://github.com/openrewrite/rewrite/pull/8671)
* Write services.gradle.org distribution URLs again, matching `gradle wrapper` by @timtebeek in [#8915](https://github.com/openrewrite/rewrite/pull/8915)
* Fix merging duplicate nested YAML sections after unfolding by @Niloyyy in [#8904](https://github.com/openrewrite/rewrite/pull/8904)
* Cut rewrite-gradle tooling API test cold starts by @timtebeek in [#8912](https://github.com/openrewrite/rewrite/pull/8912)
* Kotlin: fix six parser and printer defects found by parse-failure triage by @knutwannheden in [#8901](https://github.com/openrewrite/rewrite/pull/8901)
* Report a recipe missing from the marketplace instead of throwing by @bmuschko in [#8886](https://github.com/openrewrite/rewrite/pull/8886)
* Initialize a declarative recipe only once by @shanman190 in [#8920](https://github.com/openrewrite/rewrite/pull/8920)
* Record a commit's whole tree, and how each parsed file compares to its blob by @jkschneider in [#8921](https://github.com/openrewrite/rewrite/pull/8921)
* Report unresolved recipe entries on the recipe that declares them, and validate preconditions by @shanman190 in [#8923](https://github.com/openrewrite/rewrite/pull/8923)
* Python: type field-specifier assignments by their annotation, and name known instances by module by @knutwannheden in [#8924](https://github.com/openrewrite/rewrite/pull/8924)
* Python: type a quoted annotation's TypeHint by the type it names by @knutwannheden in [#8925](https://github.com/openrewrite/rewrite/pull/8925)

#### [rewrite 8.92.6](https://github.com/openrewrite/rewrite/releases/tag/v8.92.6)

* Kotlin: populate JavaType.Method.thrownExceptions by @knutwannheden in [#8897](https://github.com/openrewrite/rewrite/pull/8897)
* Groovy: keep escape sequences decoded in J.Literal.value by @knutwannheden in [#8872](https://github.com/openrewrite/rewrite/pull/8872)
* Fix Javascript type attribution giving unstable, unmatchable declaring types for default and namespace imports. by @sambsnyd in [#8902](https://github.com/openrewrite/rewrite/pull/8902)
* Fix scheduled Gradle workflows failing on Code Genome credentials by @timtebeek in [#8903](https://github.com/openrewrite/rewrite/pull/8903)
* Gradle: disable the no-repositories metadata test only when a mirror is injected by @Niloyyy in [#8664](https://github.com/openrewrite/rewrite/pull/8664)
* Restore old `getPlatformManagedVersion` by @shanman190 in [#8907](https://github.com/openrewrite/rewrite/pull/8907)

#### [rewrite 8.92.5](https://github.com/openrewrite/rewrite/releases/tag/v8.92.5)

* JavaScript: Canonicalize empty markers to shared singleton in RPC rec… by @greg-at-moderne in [#8896](https://github.com/openrewrite/rewrite/pull/8896)
* JavaScript: Share one frozen empty array across RPC-received LST nodes by @greg-at-moderne in [#8895](https://github.com/openrewrite/rewrite/pull/8895)
* JavaScript: Canonicalize empty space to shared singleton in RPC receive by @greg-at-moderne in [#8898](https://github.com/openrewrite/rewrite/pull/8898)
* JavaScript: compile literal builders to inline merged LST nodes by @greg-at-moderne in [#8900](https://github.com/openrewrite/rewrite/pull/8900)

#### [rewrite 8.92.4](https://github.com/openrewrite/rewrite/releases/tag/v8.92.4)

* Update a BOM version property declared locally but imported by a parent by @Jammy-Louie in [#8876](https://github.com/openrewrite/rewrite/pull/8876)
* Gradle: keep BOM-managed dependency versionless when upgrading platform by @greg-at-moderne in [#8890](https://github.com/openrewrite/rewrite/pull/8890)
* JavaScript: Share RPC string intern table across connection by @greg-at-moderne in [#8893](https://github.com/openrewrite/rewrite/pull/8893)
* Go: explicit Go resolution status: Resolved, Incomplete, GoSumOnly by @greg-at-moderne in [#8894](https://github.com/openrewrite/rewrite/pull/8894)
* Fix Java parser corruption for inferred lambda parameters by @sebastianhaeni in [#8709](https://github.com/openrewrite/rewrite/pull/8709)
* Do not apply Java typecast spacing to Kotlin `as` casts by @vlsi in [#8236](https://github.com/openrewrite/rewrite/pull/8236)

#### [rewrite 8.92.3](https://github.com/openrewrite/rewrite/releases/tag/v8.92.3)

* Upgrade a dependency version a Gradle platform supplies by @jkschneider in [#8867](https://github.com/openrewrite/rewrite/pull/8867)
* Upgrade version constraints in Gradle version catalogs by @jkschneider in [#8868](https://github.com/openrewrite/rewrite/pull/8868)
* Python: preserve a line continuation before an f-string's closing delimiter by @knutwannheden in [#8871](https://github.com/openrewrite/rewrite/pull/8871)
* YAML: keep a `#` that immediately precedes a `{{ ... }}` template by @knutwannheden in [#8870](https://github.com/openrewrite/rewrite/pull/8870)
* YAML: keep anchored flow mappings out of the single-brace placeholder rewrite by @knutwannheden in [#8873](https://github.com/openrewrite/rewrite/pull/8873)
* Python: print unmatched surrogate escapes inside f-strings by @knutwannheden in [#8874](https://github.com/openrewrite/rewrite/pull/8874)
* Accept the full packument as a fallback to avoid registry HTTP 406 by @bmuschko in [#8710](https://github.com/openrewrite/rewrite/pull/8710)
* Python: build an f-string's literal chunks from their MIDDLE tokens by @knutwannheden in [#8875](https://github.com/openrewrite/rewrite/pull/8875)
* Flag usage of lombok val and var as an error by @sullis in [#8802](https://github.com/openrewrite/rewrite/pull/8802)
* C#: group NuGet source failures by endpoint instead of one line per package by @macsux in [#8859](https://github.com/openrewrite/rewrite/pull/8859)
* C#: stop the template cache from growing without bound by @macsux in [#8865](https://github.com/openrewrite/rewrite/pull/8865)
* C#: provision .NET Framework reference assemblies for every targeted version by @macsux in [#8877](https://github.com/openrewrite/rewrite/pull/8877)
* Recognize OSERA and backpatch versions as releases by @jkschneider in [#8881](https://github.com/openrewrite/rewrite/pull/8881)
* Python: parse an explicit file list with ty rooted where the caller chooses by @knutwannheden in [#7987](https://github.com/openrewrite/rewrite/pull/7987)
* Python: structure a quoted annotation whose body opens with an indent by @knutwannheden in [#8882](https://github.com/openrewrite/rewrite/pull/8882)
* Python: names inside a nested quoted annotation are references by @knutwannheden in [#8883](https://github.com/openrewrite/rewrite/pull/8883)
* Python: key knownInstance FQNs off className instead of defaulting to typing by @knutwannheden in [#8885](https://github.com/openrewrite/rewrite/pull/8885)
* Report a Java-compatible type from JavaScript data tables and recipe options by @zieka in [#8839](https://github.com/openrewrite/rewrite/pull/8839)
* Don't apply UsePropertyAssignmentSyntax to version catalog builders by @sullis in [#8878](https://github.com/openrewrite/rewrite/pull/8878)
* SimplifyBooleanExpression only to invert ternary operators if they are boolean by @greg-at-moderne in [#8884](https://github.com/openrewrite/rewrite/pull/8884)
* JavaScript: Flatten UUID ids to cut LST heap during parse by @greg-at-moderne in [#8888](https://github.com/openrewrite/rewrite/pull/8888)
* JavaScript: Share one hoisted JavaType toJSON function by @greg-at-moderne in [#8887](https://github.com/openrewrite/rewrite/pull/8887)
* JavaScript: interning strings for type names in RPC by @greg-at-moderne in [#8889](https://github.com/openrewrite/rewrite/pull/8889)

#### [rewrite 8.92.2](https://github.com/openrewrite/rewrite/releases/tag/v8.92.2)

* Python: model a quoted annotation as the type nodes it contains by @knutwannheden in [#8833](https://github.com/openrewrite/rewrite/pull/8833)
* C#: preserve declared dependency version ranges on ResolvedPackage by @macsux in [#8735](https://github.com/openrewrite/rewrite/pull/8735)
* C#: parse Windows-targeted projects on Linux and macOS by @macsux in [#8840](https://github.com/openrewrite/rewrite/pull/8840)
* Python: preserve CRLF line endings when the RPC server reads a file by @knutwannheden in [#8843](https://github.com/openrewrite/rewrite/pull/8843)
* Python: a type alias's value is modelled as a type by @knutwannheden in [#8846](https://github.com/openrewrite/rewrite/pull/8846)
* Go: log per-call RPC detail only under `--trace-rpc-messages` by @knutwannheden in [#8847](https://github.com/openrewrite/rewrite/pull/8847)
* Override a Spring BOM property rather than pinning the version it governs by @jkschneider in [#8803](https://github.com/openrewrite/rewrite/pull/8803)
* Let a template insert at the top level of a script by @jkschneider in [#8805](https://github.com/openrewrite/rewrite/pull/8805)
* Delete GradleParseUtils by @jkschneider in [#8810](https://github.com/openrewrite/rewrite/pull/8810)
* Keep single line Groovy closures on one line by @jkschneider in [#8812](https://github.com/openrewrite/rewrite/pull/8812)
* Build repository action blocks from a template by @jkschneider in [#8818](https://github.com/openrewrite/rewrite/pull/8818)
* Carry a placeholder's markers onto the parameter replacing it by @jkschneider in [#8819](https://github.com/openrewrite/rewrite/pull/8819)
* Add a coordinate for an if's else branch by @jkschneider in [#8837](https://github.com/openrewrite/rewrite/pull/8837)
* C#: coerce string-encoded recipe option values to their property types by @macsux in [#8849](https://github.com/openrewrite/rewrite/pull/8849)
* Let an RPC peer exit on stdin EOF before force-killing it by @knutwannheden in [#8845](https://github.com/openrewrite/rewrite/pull/8845)
* Enable context-sensitive Kotlin Templates, among other enhancements by @sambsnyd in [#8817](https://github.com/openrewrite/rewrite/pull/8817)
* Kotlin recipe DSL: type the matcher's parameters, not just their count by @timtebeek in [#8694](https://github.com/openrewrite/rewrite/pull/8694)
* Protobuf: parse `extensions` and negative enum values, detect editions by @knutwannheden in [#8851](https://github.com/openrewrite/rewrite/pull/8851)
* JavaScript: downgrade commander to v10 by @greg-at-moderne in [#8852](https://github.com/openrewrite/rewrite/pull/8852)
* Don't override a managed version property a local parent owns by @jkschneider in [#8853](https://github.com/openrewrite/rewrite/pull/8853)
* C#: measure package graph depth from project references too by @macsux in [#8855](https://github.com/openrewrite/rewrite/pull/8855)
* YAML: an anchored sequence keeps its dash, and a scalar's anchor precedes its tag by @knutwannheden in [#8854](https://github.com/openrewrite/rewrite/pull/8854)
* C#: evaluate a solution's restore graph once instead of once per project by @macsux in [#8850](https://github.com/openrewrite/rewrite/pull/8850)
* C#: warn when a project resolves no reference metadata by @macsux in [#8857](https://github.com/openrewrite/rewrite/pull/8857)
* C#: align MSBuild path casing with the repository by @macsux in [#8858](https://github.com/openrewrite/rewrite/pull/8858)
* Preserve the anchor's blank-line prefix on REPLACEMENT by @steve-aom-elliott in [#8861](https://github.com/openrewrite/rewrite/pull/8861)
* Kotlin: expand escape sequences in J.Literal values by @knutwannheden in [#8863](https://github.com/openrewrite/rewrite/pull/8863)
* C#: recover a project's sources when MSBuild cannot evaluate it by @macsux in [#8860](https://github.com/openrewrite/rewrite/pull/8860)
* Gradle version catalogs: one model for settings and TOML by @jkschneider in [#8864](https://github.com/openrewrite/rewrite/pull/8864)
* Let the embedder cap a peer's memory by @jkschneider in [#8866](https://github.com/openrewrite/rewrite/pull/8866)

#### [rewrite-all 1.30.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.30.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.33.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.33.0)

* Drop the blank line before templated first statements by @steve-aom-elliott in [#149](https://github.com/openrewrite/rewrite-apache/pull/149)

#### [rewrite-cucumber-jvm 2.18.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.18.0)

* Drop the blank line before templated first statements by @steve-aom-elliott in [#62](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/62)

#### [rewrite-feature-flags 1.24.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.24.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.32.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.32.0)

* Add recipe to configure Dependabot `open-pull-requests-limit` by @Wanbinyu in [#229](https://github.com/openrewrite/rewrite-github-actions/pull/229)

#### [rewrite-gitlab 0.25.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.25.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.43.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.43.0)

* Expect services.gradle.org in the UpdateGradleWrapper test by @Jammy-Louie in [#478](https://github.com/openrewrite/rewrite-gradle-plugin/pull/478)
* Pass the working tree match a tree entry now carries by @jkschneider in [#477](https://github.com/openrewrite/rewrite-gradle-plugin/pull/477)

#### [rewrite-hibernate 2.26.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.26.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.30.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.30.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-java-dependencies 1.63.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.63.0)

* Pass Code Genome credentials to the migrations workflow by @timtebeek in [#198](https://github.com/openrewrite/rewrite-java-dependencies/pull/198)

#### [rewrite-jenkins 0.38.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.38.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.11.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.11.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.28.1](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.28.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.34.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.34.0)

* Migrate the Logback Janino condition attribute to the condition element by @bmuschko in [#306](https://github.com/openrewrite/rewrite-logging-frameworks/pull/306)

#### [rewrite-mainframe 3.2.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.2.0)

* Keep DB2 and COBOL lexer errors off the console by @kmccarp in [#171](https://github.com/moderneinc/rewrite-mainframe/pull/171)

#### [rewrite-maven-plugin 6.49.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.49.0)

* Pass the working tree match a tree entry now carries by @jkschneider in [#1213](https://github.com/openrewrite/rewrite-maven-plugin/pull/1213)

#### [rewrite-micrometer 0.31.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.31.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.38.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.38.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.45.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.45.0)

* Fix annotation handling in `LombokValToFinalVar` by @sullis in [#1237](https://github.com/openrewrite/rewrite-migrate-java/pull/1237)
* Add FindThreadStartInConstructor (Sonar S2693) by @steve-aom-elliott in [#1238](https://github.com/openrewrite/rewrite-migrate-java/pull/1238)
* Add lombok.config recipes by @sullis in [#1236](https://github.com/openrewrite/rewrite-migrate-java/pull/1236)
* Create root `lombok.config` when a project has none by @sullis in [#1242](https://github.com/openrewrite/rewrite-migrate-java/pull/1242)
* Stop transitive legacy kotlin-stdlib from capping Kotlin modules at Java 24 by @timtebeek in [#1243](https://github.com/openrewrite/rewrite-migrate-java/pull/1243)
* Convert 5-arg URL constructor with URLStreamHandler to URL.of by @harrisleesh in [#1241](https://github.com/openrewrite/rewrite-migrate-java/pull/1241)
* Add a `FlagUsage` recipe to stop Lombok's `val`/`var` from coming back by @sullis in [#1244](https://github.com/openrewrite/rewrite-migrate-java/pull/1244)

#### [rewrite-netty 0.13.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.13.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.25.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.25.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.34.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.34.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-pmd 0.1.3](https://github.com/openrewrite/rewrite-pmd/releases/tag/v0.1.3)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.12.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.12.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.5.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.5.0)

* Split oversized Prethink context files into paginated CSVs by @bmuschko in [#32](https://github.com/openrewrite/rewrite-prethink/pull/32)

#### [rewrite-quarkus 2.36.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.36.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.33.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.33.0)

* SourceSpecTextBlockNewLine: do not reflow text block contents by @timtebeek in [#94](https://github.com/openrewrite/rewrite-rewrite/pull/94)

#### [rewrite-spring 6.40.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.40.0)

* Cache regex patterns in ChangeSpringPropertyKey by @steve-aom-elliott in [#1144](https://github.com/openrewrite/rewrite-spring/pull/1144)
* Preserve Kotlin `@Value` escape when renaming property by @greg-at-moderne in [#1145](https://github.com/openrewrite/rewrite-spring/pull/1145)
* Prevent UseNewSecurityMatchers from re-matching securityMatcher by @greg-at-moderne in [#1149](https://github.com/openrewrite/rewrite-spring/pull/1149)

#### [rewrite-spring-to-quarkus 0.13.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.13.1)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.44.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.44.0)

* Add FindWaitWithMultipleLocksHeld (Sonar S3046) by @steve-aom-elliott in [#1059](https://github.com/openrewrite/rewrite-static-analysis/pull/1059)
* Add FindSystemAndRuntimeExitCalls recipe (RSPEC-S1147) by @steve-aom-elliott in [#1058](https://github.com/openrewrite/rewrite-static-analysis/pull/1058)
* Add FindThreadGroupUsages recipe (RSPEC-S3014) by @steve-aom-elliott in [#1063](https://github.com/openrewrite/rewrite-static-analysis/pull/1063)
* FallThrough: don't add a break after a guarded early exit by @Niloyyy in [#1008](https://github.com/openrewrite/rewrite-static-analysis/pull/1008)
* NoDoubleBraceInitialization: don't retarget invocations inside nested anonymous classes by @Niloyyy in [#1035](https://github.com/openrewrite/rewrite-static-analysis/pull/1035)
* DeclarationSiteTypeVariance: skip @Override methods when the supertype is unresolved by @Niloyyy in [#1036](https://github.com/openrewrite/rewrite-static-analysis/pull/1036)
* Track taint through derived locals in FindNewExceptionWithoutCause by @knutwannheden in [#1065](https://github.com/openrewrite/rewrite-static-analysis/pull/1065)
* UnwrapRepeatableAnnotations: only unwrap container annotations by @Niloyyy in [#1064](https://github.com/openrewrite/rewrite-static-analysis/pull/1064)
* Only remove catch clauses backed by complete type information in UnnecessaryCatch by @knutwannheden in [#1066](https://github.com/openrewrite/rewrite-static-analysis/pull/1066)
* Add UnnecessaryFinalInTryWithResources by @sullis in [#1046](https://github.com/openrewrite/rewrite-static-analysis/pull/1046)
* fix: treat unresolved call sites as possible throw sites in UnnecessaryThrows by @knutwannheden in [#1067](https://github.com/openrewrite/rewrite-static-analysis/pull/1067)
* ForLoopIncrementInUpdate: do not move increment skipped by continue by @koppor in [#1062](https://github.com/openrewrite/rewrite-static-analysis/pull/1062)
* Collapse MethodNameCasing edit phase to single traversal by @greg-at-moderne in [#1069](https://github.com/openrewrite/rewrite-static-analysis/pull/1069)
* FinalizePrivateFields not to run for JavaScript sources by @greg-at-moderne in [#1070](https://github.com/openrewrite/rewrite-static-analysis/pull/1070)
* Add regression test for RemoveRedundantTypeCast on generic method in Stream.map by @timtebeek in [#1071](https://github.com/openrewrite/rewrite-static-analysis/pull/1071)

#### [rewrite-templating 1.45.2](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.45.2)

* OpenRewrite v8.92.8: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.47.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.47.0)

* Drop the blank line before templated first statements by @steve-aom-elliott in [#1121](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1121)
* Advertise RSPEC-S5783 on AssertThrowsOnLastStatement by @steve-aom-elliott in [#1120](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1120)
* RemoveInitMocksIfRunnersSpecified: handle openMocks(this) as a try-with-resources resource by @kmccarp in [#1118](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1118)

#### [rewrite-third-party 0.48.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.48.0)

* Pass Code Genome Project credentials to aggregation workflows by @timtebeek in [#104](https://github.com/openrewrite/rewrite-third-party/pull/104)

## [rewrite-recipe-bom 3.39.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.39.0)

Released on September 9, 2026, with OpenRewrite 8.92.1.

#### [rewrite 8.92.1](https://github.com/openrewrite/rewrite/releases/tag/v8.92.1)

* See full release notes here: OpenRewrite v8.92.0: https://github.com/openrewrite/rewrite/releases/tag/v8.92.0

#### [rewrite 8.92.0](https://github.com/openrewrite/rewrite/releases/tag/v8.92.0)

* JavaScript: fix autoformat of for loops with non-standard whitespace by @greg-at-moderne in [#8795](https://github.com/openrewrite/rewrite/pull/8795)
* JavaScript: handle propertyAssignment.modifiers being empty by @greg-at-moderne in [#8799](https://github.com/openrewrite/rewrite/pull/8799)
* Go: fix how Switch statements are parsed, now with ControlParentheses by @greg-at-moderne in [#8801](https://github.com/openrewrite/rewrite/pull/8801)
* Report a Java-compatible column type from Python data tables by @mtthwcmpbll in [#8777](https://github.com/openrewrite/rewrite/pull/8777)
* JavaScript: a non-optional list slot reads as empty when a peer sends none by @knutwannheden in [#8798](https://github.com/openrewrite/rewrite/pull/8798)
* Groovy: print parentheses for a method invocation with no arguments by @knutwannheden in [#8804](https://github.com/openrewrite/rewrite/pull/8804)
* Read an annotation array element value that has neither array set by @knutwannheden in [#8813](https://github.com/openrewrite/rewrite/pull/8813)
* Python: a type parameter bound is modelled as a type by @knutwannheden in [#8820](https://github.com/openrewrite/rewrite/pull/8820)
* Cut allocation and round trips out of the RPC send and receive paths by @knutwannheden in [#8808](https://github.com/openrewrite/rewrite/pull/8808)
* JavaScript RPC: drain and page in linear time, and let a prefetched page arrive by @knutwannheden in [#8821](https://github.com/openrewrite/rewrite/pull/8821)
* Declare `JavaType.Annotation.ElementValue.getValue()` nullable by @knutwannheden in [#8816](https://github.com/openrewrite/rewrite/pull/8816)
* Compare empty annotation array element values as equal by @knutwannheden in [#8815](https://github.com/openrewrite/rewrite/pull/8815)
* Go RPC throughput: one serialization, one decode pass, overlapped paging by @knutwannheden in [#8822](https://github.com/openrewrite/rewrite/pull/8822)
* Python: cut the frozen-dataclass tax and the round trips out of the RPC paths by @knutwannheden in [#8823](https://github.com/openrewrite/rewrite/pull/8823)
* C#: draw LST ids from a per-thread generator by @knutwannheden in [#8825](https://github.com/openrewrite/rewrite/pull/8825)
* Reject JUnit snapshots for integTest configurations by @knutwannheden in [#8826](https://github.com/openrewrite/rewrite/pull/8826)
* C#: measure RPC throughput, and stop rescanning every assembly per tree node by @knutwannheden in [#8824](https://github.com/openrewrite/rewrite/pull/8824)
* C#: page GetObject so the peer stops holding a whole tree by @knutwannheden in [#8827](https://github.com/openrewrite/rewrite/pull/8827)
* Python: give PEP 695 type parameters the scope that binds them by @knutwannheden in [#8828](https://github.com/openrewrite/rewrite/pull/8828)
* Drop the stale "auto generated" banner from three visitors by @knutwannheden in [#8830](https://github.com/openrewrite/rewrite/pull/8830)
* Python: a type alias's type parameters are part of the traversal by @knutwannheden in [#8829](https://github.com/openrewrite/rewrite/pull/8829)
* Python: a dotted module import binds its root, not its last segment by @knutwannheden in [#8831](https://github.com/openrewrite/rewrite/pull/8831)
* Go: withhold GoResultionResult content on incomplete resolution by @greg-at-moderne in [#8832](https://github.com/openrewrite/rewrite/pull/8832)
* Python: a JavaType renders its identity, not its graph by @knutwannheden in [#8834](https://github.com/openrewrite/rewrite/pull/8834)
* Go: skip stdlib corpus files the host toolchain excludes from the build by @knutwannheden in [#8835](https://github.com/openrewrite/rewrite/pull/8835)
* Report a GetObject sender failure to the peer, not a truncated stream by @knutwannheden in [#8814](https://github.com/openrewrite/rewrite/pull/8814)
* Python: a name re-exported through `__all__` keeps its import by @knutwannheden in [#8836](https://github.com/openrewrite/rewrite/pull/8836)

#### [rewrite 8.91.6](https://github.com/openrewrite/rewrite/releases/tag/v8.91.6)

* Python: an identifier that spells an import's name is not always a reference by @knutwannheden in [#8778](https://github.com/openrewrite/rewrite/pull/8778)
* Python: print an LST annotated with its type attribution by @knutwannheden in [#8780](https://github.com/openrewrite/rewrite/pull/8780)
* Python: MethodMatcher honours match_overrides in-process by @knutwannheden in [#8782](https://github.com/openrewrite/rewrite/pull/8782)
* Python: a rename follows more names than a read census by @knutwannheden in [#8781](https://github.com/openrewrite/rewrite/pull/8781)
* Python: MethodMatcher gains an opt-in match_unknown_types fallback by @knutwannheden in [#8783](https://github.com/openrewrite/rewrite/pull/8783)
* Python: a MethodMatcher pattern can name a call's argument types by @knutwannheden in [#8784](https://github.com/openrewrite/rewrite/pull/8784)
* Python: a `self`, `cls`, or `super()` receiver gets a declaring type by @knutwannheden in [#8785](https://github.com/openrewrite/rewrite/pull/8785)
* Python: a method call is owned by the class declaring it by @knutwannheden in [#8786](https://github.com/openrewrite/rewrite/pull/8786)
* Python: a match-class keyword pattern names an attribute, not a binding by @knutwannheden in [#8787](https://github.com/openrewrite/rewrite/pull/8787)
* Python: a MethodMatcher resolves a receiver the types lost by @knutwannheden in [#8788](https://github.com/openrewrite/rewrite/pull/8788)
* Python: a construction the types lost still names a declaring type by @knutwannheden in [#8789](https://github.com/openrewrite/rewrite/pull/8789)
* Python: an associative operator lets its right operand regroup by @knutwannheden in [#8794](https://github.com/openrewrite/rewrite/pull/8794)
* JavaScript: fix infinite recursion in add import by @greg-at-moderne in [#8793](https://github.com/openrewrite/rewrite/pull/8793)

#### [rewrite 8.91.5](https://github.com/openrewrite/rewrite/releases/tag/v8.91.5)

* Update README to reflect current state of licensing by @mike-solomon in [#8738](https://github.com/openrewrite/rewrite/pull/8738)
* Python: a call carries the owner and name a MethodMatcher matches it by by @knutwannheden in [#8737](https://github.com/openrewrite/rewrite/pull/8737)
* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#8741](https://github.com/openrewrite/rewrite/pull/8741)
* Python: route prefix/markers writes through the delegating statement wrappers by @knutwannheden in [#8742](https://github.com/openrewrite/rewrite/pull/8742)
* Python: a decorator is typed as the thing it decorates by @jkschneider in [#8740](https://github.com/openrewrite/rewrite/pull/8740)
* Groovy: Fix AutoFormat behavior for tuple unpacking assignments by @greg-at-moderne in [#8736](https://github.com/openrewrite/rewrite/pull/8736)
* Python: template parenthesization asks what the slot demands by @knutwannheden in [#8747](https://github.com/openrewrite/rewrite/pull/8747)
* Python: search preconditions walk the LST with the generated visitor by @knutwannheden in [#8748](https://github.com/openrewrite/rewrite/pull/8748)
* Unpin Lombok by @greg-at-moderne in [#8749](https://github.com/openrewrite/rewrite/pull/8749)
* Python: names inside a string annotation are references by @knutwannheden in [#8750](https://github.com/openrewrite/rewrite/pull/8750)
* Python: imports in an `if TYPE_CHECKING:` block are module scope by @knutwannheden in [#8739](https://github.com/openrewrite/rewrite/pull/8739)
* fix(java): correctly parse named attribute assignment in annotations (#8723) by @SamBarker in [#8724](https://github.com/openrewrite/rewrite/pull/8724)
* Python: key type descriptors by their qualified name by @knutwannheden in [#8754](https://github.com/openrewrite/rewrite/pull/8754)
* Python: names inside a string return annotation are references by @knutwannheden in [#8755](https://github.com/openrewrite/rewrite/pull/8755)
* Add CODEGENOME secrets to npm-publish by @greg-at-moderne in [#8757](https://github.com/openrewrite/rewrite/pull/8757)
* Python: a function's type carries the FQN identity a class's does by @knutwannheden in [#8756](https://github.com/openrewrite/rewrite/pull/8756)
* Python: let a project's declared version pick the typeshed by @knutwannheden in [#8759](https://github.com/openrewrite/rewrite/pull/8759)
* JavaScript: RemoveImport keeps an import the file still references by @knutwannheden in [#8760](https://github.com/openrewrite/rewrite/pull/8760)
* Python: a scope model matching rewrite-javascript's scope.ts by @knutwannheden in [#8761](https://github.com/openrewrite/rewrite/pull/8761)
* Kotlin: wrap if expressions in K.StatementExpression by @greg-at-moderne in [#8746](https://github.com/openrewrite/rewrite/pull/8746)
* Kotlin: fix NPE in return.getType() by @greg-at-moderne in [#8744](https://github.com/openrewrite/rewrite/pull/8744)
* Python: keep dependency workspaces out of $TMPDIR by @knutwannheden in [#8763](https://github.com/openrewrite/rewrite/pull/8763)
* Python: upgrade ty-types to 0.0.78 by @knutwannheden in [#8764](https://github.com/openrewrite/rewrite/pull/8764)
* Python: a recipe test's sources parse as one project by @knutwannheden in [#8762](https://github.com/openrewrite/rewrite/pull/8762)
* Python: a call names the member its import binds by @knutwannheden in [#8758](https://github.com/openrewrite/rewrite/pull/8758)
* Python: a symbol ty cannot type is named by where it is bound by @knutwannheden in [#8766](https://github.com/openrewrite/rewrite/pull/8766)
* Python: an import in a module-scope `if` binds at module scope by @knutwannheden in [#8767](https://github.com/openrewrite/rewrite/pull/8767)
* Python: a recipe test fails on an Expression in a Statement slot by @knutwannheden in [#8769](https://github.com/openrewrite/rewrite/pull/8769)
* Python: a subscript or nested-call decorator is a NameTree by @knutwannheden in [#8770](https://github.com/openrewrite/rewrite/pull/8770)
* Fix the Python RPC facade's ref-table asymmetries by @knutwannheden in [#8768](https://github.com/openrewrite/rewrite/pull/8768)
* Python, Go: fix concurrency issue around RPC binary by @greg-at-moderne in [#8773](https://github.com/openrewrite/rewrite/pull/8773)
* JS: prepareJavaRecipe returns a lazy delegatesTo placeholder, aligned with Python by @knutwannheden in [#8774](https://github.com/openrewrite/rewrite/pull/8774)

#### [rewrite 8.91.4](https://github.com/openrewrite/rewrite/releases/tag/v8.91.4)

* Ruby: Add missing methods to RubyIsoVisitor by @greg-at-moderne in [#8728](https://github.com/openrewrite/rewrite/pull/8728)
* Go: add cursor helpers for function-body and init-wrapped-if checks by @bmuschko in [#8458](https://github.com/openrewrite/rewrite/pull/8458)
* Python: Add Shebang LST element by @greg-at-moderne in [#8729](https://github.com/openrewrite/rewrite/pull/8729)
* Go: unify comment parsing with other languages by @greg-at-moderne in [#8730](https://github.com/openrewrite/rewrite/pull/8730)
* Go: a truncated diff hunk header describes the lines it emits by @knutwannheden in [#8734](https://github.com/openrewrite/rewrite/pull/8734)
* JavaScript: honour the project's tsconfig when resolving modules by @knutwannheden in [#8733](https://github.com/openrewrite/rewrite/pull/8733)

#### [rewrite 8.91.3](https://github.com/openrewrite/rewrite/releases/tag/v8.91.3)

* JavaScript: a `with` statement no longer fails the whole TypeScript file by @knutwannheden in [#8698](https://github.com/openrewrite/rewrite/pull/8698)
* JavaScript: maybeBind binds afresh where the name it would reuse is shadowed by @knutwannheden in [#8696](https://github.com/openrewrite/rewrite/pull/8696)
* JS AMD: a bare arrow keeps its space before `=>` when it gains parens by @knutwannheden in [#8700](https://github.com/openrewrite/rewrite/pull/8700)
* JS AMD: the helpers a consumer reads a block with are reachable by @knutwannheden in [#8704](https://github.com/openrewrite/rewrite/pull/8704)
* JavaScript: a template's removed `bindings` option fails loudly by @knutwannheden in [#8703](https://github.com/openrewrite/rewrite/pull/8703)
* JS templates: a typed capture binds, generated code is laid out, and a module-typed parameter splices by @knutwannheden in [#8702](https://github.com/openrewrite/rewrite/pull/8702)
* JavaScript: an unparseable template reports the engine's diagnostic by @knutwannheden in [#8706](https://github.com/openrewrite/rewrite/pull/8706)
* JavaScript: a rebind renames a local name the source never chose by @knutwannheden in [#8708](https://github.com/openrewrite/rewrite/pull/8708)
* JavaScript: regenerate npm locks with alias forks and duplicate placements by @bmuschko in [#8711](https://github.com/openrewrite/rewrite/pull/8711)
* JavaScript: an added import is laid out in the file's own style by @knutwannheden in [#8713](https://github.com/openrewrite/rewrite/pull/8713)
* JavaScript: spacing owns the gap between an inline `type` and the name it exports by @knutwannheden in [#8714](https://github.com/openrewrite/rewrite/pull/8714)
* JavaScript: an existing binding answers an import request, and a CommonJS file stays CommonJS by @knutwannheden in [#8716](https://github.com/openrewrite/rewrite/pull/8716)
* JavaScript: spacing owns the gap between an inline `type` and its name by @knutwannheden in [#8715](https://github.com/openrewrite/rewrite/pull/8715)
* JavaScript: a rebind carries the moved member's attribution, and a sibling's stays put by @knutwannheden in [#8717](https://github.com/openrewrite/rewrite/pull/8717)
* JavaScript: a rebind carries attribution to the references of what moved by @knutwannheden in [#8718](https://github.com/openrewrite/rewrite/pull/8718)
* JavaScript: a whole-module move carries the types named after the module by @knutwannheden in [#8719](https://github.com/openrewrite/rewrite/pull/8719)
* JavaScript: parsing type-checks the program to keep only syntax errors by @knutwannheden in [#8720](https://github.com/openrewrite/rewrite/pull/8720)
* JavaScript: a recipe reaches the scope helpers it was reimplementing by @knutwannheden in [#8721](https://github.com/openrewrite/rewrite/pull/8721)
* JavaScript: minimum viable spacing separates every keyword from its expression by @knutwannheden in [#8725](https://github.com/openrewrite/rewrite/pull/8725)
* Go: a conversion carries the type it converts to by @knutwannheden in [#8726](https://github.com/openrewrite/rewrite/pull/8726)

#### [rewrite 8.91.2](https://github.com/openrewrite/rewrite/releases/tag/v8.91.2)

* A scope utility for JavaScript LSTs, and the import recipes use it by @knutwannheden in [#8686](https://github.com/openrewrite/rewrite/pull/8686)
* ChangeImport keeps the local name a moved binding already had by @knutwannheden in [#8688](https://github.com/openrewrite/rewrite/pull/8688)
* JS patterns: a capture binds as a whole if/while/do-while/switch condition by @MBoegers in [#8692](https://github.com/openrewrite/rewrite/pull/8692)
* C# RPC: reload an installed NuGet recipe bundle from its publish directory by @jkschneider in [#8695](https://github.com/openrewrite/rewrite/pull/8695)
* JS templates: a spliced capture keeps the markers it was matched with by @MBoegers in [#8693](https://github.com/openrewrite/rewrite/pull/8693)
* Upgrade rewrite-javascript to TypeScript 6.0 by @knutwannheden in [#8689](https://github.com/openrewrite/rewrite/pull/8689)
* JavaScript: maybeBind gives a recipe a local binding on either module system by @knutwannheden in [#8685](https://github.com/openrewrite/rewrite/pull/8685)

#### [rewrite 8.91.1](https://github.com/openrewrite/rewrite/releases/tag/v8.91.1)

* JavaTemplate gives repeated parameter occurrences fresh ids by @knutwannheden in [#8665](https://github.com/openrewrite/rewrite/pull/8665)
* JavaScript: TabsAndIndentsVisitor re-indents comments ahead of a closing delimiter by @knutwannheden in [#8668](https://github.com/openrewrite/rewrite/pull/8668)
* maybeAddImport matches the file's quote style by @knutwannheden in [#8670](https://github.com/openrewrite/rewrite/pull/8670)
* Go: `goProject` gives its `.go` sources the sibling go.mod's module context by @knutwannheden in [#8673](https://github.com/openrewrite/rewrite/pull/8673)
* JavaScript: resolve modules the way the ecosystem publishes them by @knutwannheden in [#8672](https://github.com/openrewrite/rewrite/pull/8672)
* JavaScript: object literals carry the type the checker resolved by @knutwannheden in [#8675](https://github.com/openrewrite/rewrite/pull/8675)
* Reject Scala pre-releases so rewrite-scala compiles against the stable compiler by @knutwannheden in [#8676](https://github.com/openrewrite/rewrite/pull/8676)
* JS Matcher ignores type arguments and breaks on arrow by @MBoegers in [#8674](https://github.com/openrewrite/rewrite/pull/8674)
* JavaScript: enumerate dependency types the way packages publish them by @knutwannheden in [#8677](https://github.com/openrewrite/rewrite/pull/8677)
* JS formatter reads the style marker the build attaches by @knutwannheden in [#8678](https://github.com/openrewrite/rewrite/pull/8678)
* JavaScript: stop rebuilding the TypeScript program for every test by @knutwannheden in [#8679](https://github.com/openrewrite/rewrite/pull/8679)
* JS: a container splice keeps the line breaks and the comment spacing the source wrote by @MBoegers in [#8667](https://github.com/openrewrite/rewrite/pull/8667)
* JS: a test spec can opt into the style its own source is written in by @knutwannheden in [#8681](https://github.com/openrewrite/rewrite/pull/8681)
* Maven resolution: cool down after HTTP 429, dedupe repositories by URI, and let a silent mirror keep the mirrored repository's policy by @jkschneider in [#8683](https://github.com/openrewrite/rewrite/pull/8683)
* maybeAddImport returns the name it bound, and templates resolve the modules they name by @knutwannheden in [#8680](https://github.com/openrewrite/rewrite/pull/8680)
* Python: a composite reports the data tables its children produce by @mtthwcmpbll in [#8684](https://github.com/openrewrite/rewrite/pull/8684)
* Make C# comments and formatting reachable through visitors by @macsux in [#8662](https://github.com/openrewrite/rewrite/pull/8662)
* Fix XML attribute continuation indentation by @Wanbinyu in [#8659](https://github.com/openrewrite/rewrite/pull/8659)
* JavaScript: resolve transitive deps from npm v1 lock files by @bmuschko in [#8566](https://github.com/openrewrite/rewrite/pull/8566)

#### [rewrite-all 1.30.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.30.0)

* Depend on rewrite-mainframe, the renamed rewrite-cobol by @kmccarp in [#48](https://github.com/openrewrite/rewrite-all/pull/48)

#### [rewrite-all 1.29.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.29.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#47](https://github.com/openrewrite/rewrite-all/pull/47)

#### [rewrite-apache 2.32.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.32.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#148](https://github.com/openrewrite/rewrite-apache/pull/148)

#### [rewrite-cucumber-jvm 2.17.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.17.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#61](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/61)

#### [rewrite-feature-flags 1.24.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.24.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#71](https://github.com/openrewrite/rewrite-feature-flags/pull/71)

#### [rewrite-github-actions 3.31.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.31.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#226](https://github.com/openrewrite/rewrite-github-actions/pull/226)
* The comment in PinGitHubActionsToSha to use the most-specific tag by @greg-at-moderne in [#227](https://github.com/openrewrite/rewrite-github-actions/pull/227)

#### [rewrite-gitlab 0.25.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.25.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#44](https://github.com/openrewrite/rewrite-gitlab/pull/44)

#### [rewrite-gradle-plugin 7.42.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.42.0)

* Stop publishing to the Gradle Plugin Portal by @timtebeek in [#475](https://github.com/openrewrite/rewrite-gradle-plugin/pull/475)

#### [rewrite-hibernate 2.26.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.26.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#98](https://github.com/openrewrite/rewrite-hibernate/pull/98)

#### [rewrite-jackson 1.30.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.30.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#168](https://github.com/openrewrite/rewrite-jackson/pull/168)

#### [rewrite-java-dependencies 1.62.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.62.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#197](https://github.com/openrewrite/rewrite-java-dependencies/pull/197)

#### [rewrite-jenkins 0.38.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.38.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#117](https://github.com/openrewrite/rewrite-jenkins/pull/117)

#### [rewrite-joda 0.11.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.11.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#24](https://github.com/openrewrite/rewrite-joda/pull/24)

#### [rewrite-liberty 1.28.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.28.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#46](https://github.com/openrewrite/rewrite-liberty/pull/46)

#### [rewrite-logging-frameworks 3.33.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.33.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#305](https://github.com/openrewrite/rewrite-logging-frameworks/pull/305)
* Replace the Log4j setLevel Refaster template with its generated recipe by @kmccarp in [#304](https://github.com/openrewrite/rewrite-logging-frameworks/pull/304)

#### [rewrite-mainframe 3.1.2](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v3.1.2)

* OpenRewrite v8.92.1: https://github.com/openrewrite/rewrite

#### [rewrite-maven-plugin 6.48.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.48.0)

* Let integration tests resolve OpenRewrite snapshots from the Code Genome Project by @timtebeek in [#1202](https://github.com/openrewrite/rewrite-maven-plugin/pull/1202)
* Resolve OpenRewrite snapshots from the Code Genome Project in the Pages workflow by @timtebeek in [#1203](https://github.com/openrewrite/rewrite-maven-plugin/pull/1203)
* Update OWASP suppression date bounds by @kmccarp in [#1207](https://github.com/openrewrite/rewrite-maven-plugin/pull/1207)

#### [rewrite-micrometer 0.31.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.31.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#40](https://github.com/openrewrite/rewrite-micrometer/pull/40)
* Use `$rewriteVersion` for `rewrite-templating` by @Jammy-Louie in [#41](https://github.com/openrewrite/rewrite-micrometer/pull/41)

#### [rewrite-micronaut 2.38.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.38.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#149](https://github.com/openrewrite/rewrite-micronaut/pull/149)

#### [rewrite-migrate-java 3.44.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.44.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#1231](https://github.com/openrewrite/rewrite-migrate-java/pull/1231)
* Improve test coverage for LombokValToFinalVar by @sullis in [#1230](https://github.com/openrewrite/rewrite-migrate-java/pull/1230)
* Preserve casts when converting `lombok.val` to `final var` by @sullis in [#1233](https://github.com/openrewrite/rewrite-migrate-java/pull/1233)
* Do not add `final` to a try-with-resources resource by @sullis in [#1232](https://github.com/openrewrite/rewrite-migrate-java/pull/1232)
* Do not run `ExtractExplicitConstructorInvocationArguments` on non-Java sources by @knutwannheden in [#1235](https://github.com/openrewrite/rewrite-migrate-java/pull/1235)

#### [rewrite-netty 0.13.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.13.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#22](https://github.com/openrewrite/rewrite-netty/pull/22)

#### [rewrite-okhttp 0.25.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.25.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#32](https://github.com/openrewrite/rewrite-okhttp/pull/32)

#### [rewrite-openapi 0.34.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.34.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#80](https://github.com/openrewrite/rewrite-openapi/pull/80)

#### [rewrite-pmd 0.1.2](https://github.com/openrewrite/rewrite-pmd/releases/tag/v0.1.2)

* OpenRewrite v8.92.1: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.12.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.12.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#56](https://github.com/openrewrite/rewrite-polyglot/pull/56)

#### [rewrite-prethink 1.4.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.4.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#33](https://github.com/openrewrite/rewrite-prethink/pull/33)

#### [rewrite-quarkus 2.36.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.36.0)

* Align expected XML attribute continuation indentation with rewrite-xml formatter by @greg-at-moderne in [#118](https://github.com/openrewrite/rewrite-quarkus/pull/118)
* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#119](https://github.com/openrewrite/rewrite-quarkus/pull/119)

#### [rewrite-rewrite 0.32.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.32.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#92](https://github.com/openrewrite/rewrite-rewrite/pull/92)

#### [rewrite-spring 6.39.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.39.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#1143](https://github.com/openrewrite/rewrite-spring/pull/1143)

#### [rewrite-spring-to-quarkus 0.13.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.13.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#91](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/91)

#### [rewrite-static-analysis 2.43.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.43.0)

* Preserve `@Nullable` parameters in `AnnotateRequiredParameters` by @timtebeek in [#897](https://github.com/openrewrite/rewrite-static-analysis/pull/897)
* Don't rewrite MinimumSwitchCases when the selector's type is unresolved by @neil-mushell in [#1031](https://github.com/openrewrite/rewrite-static-analysis/pull/1031)
* Keep casts on `null` arguments that select an inherited overload by @jkschneider in [#1033](https://github.com/openrewrite/rewrite-static-analysis/pull/1033)
* NoValueOfOnStringType: keep String.valueOf when the argument can be null by @Niloyyy in [#1022](https://github.com/openrewrite/rewrite-static-analysis/pull/1022)
* Re-generate recipes.csv by @greg-at-moderne in [#1037](https://github.com/openrewrite/rewrite-static-analysis/pull/1037)
* exclude JS sources from ExplicitLambdaArgumentTypes by @greg-at-moderne in [#1041](https://github.com/openrewrite/rewrite-static-analysis/pull/1041)
* JavaScript: safety guard for Identifier cast in ExplicitThis by @greg-at-moderne in [#1040](https://github.com/openrewrite/rewrite-static-analysis/pull/1040)
* FinalizeMethodArguments only for Java, Groovy by @greg-at-moderne in [#1039](https://github.com/openrewrite/rewrite-static-analysis/pull/1039)
* Mark RemoveRedundantTypeCast as Java-only by @greg-at-moderne in [#1038](https://github.com/openrewrite/rewrite-static-analysis/pull/1038)
* UseLambdaForFunctionalInterface to handle empty variable declarations… by @greg-at-moderne in [#1042](https://github.com/openrewrite/rewrite-static-analysis/pull/1042)
* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#1047](https://github.com/openrewrite/rewrite-static-analysis/pull/1047)
* Fix ClassCastException in InterruptedExceptionHandling on Kotlin sources by @greg-at-moderne in [#1045](https://github.com/openrewrite/rewrite-static-analysis/pull/1045)
* Fix init of RemoveInstanceOfPatternMatch by @greg-at-moderne in [#1044](https://github.com/openrewrite/rewrite-static-analysis/pull/1044)
* Narrow down TypecastParenPadStyle to Java only by @greg-at-moderne in [#1043](https://github.com/openrewrite/rewrite-static-analysis/pull/1043)
* Fix UseLambdaForFunctionalInterface for varargs by @greg-at-moderne in [#1048](https://github.com/openrewrite/rewrite-static-analysis/pull/1048)
* Prevent infinite recursion and StackOverflowError in ExplicitLambdaArgumentTypes by @greg-at-moderne in [#1049](https://github.com/openrewrite/rewrite-static-analysis/pull/1049)
* SimplifyElseBranch not to produce el if for Python by @greg-at-moderne in [#1051](https://github.com/openrewrite/rewrite-static-analysis/pull/1051)
* RemoveInstanceOfPatternMatchVisitor to handle other expressions too by @greg-at-moderne in [#1054](https://github.com/openrewrite/rewrite-static-analysis/pull/1054)

#### [rewrite-templating 1.45.1](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.45.1)

* OpenRewrite v8.92.1: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.46.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.46.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#1116](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1116)

#### [rewrite-third-party 0.47.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.47.0)

* Resolve org.openrewrite build plugins from the Code Genome Project by @kmccarp in [#103](https://github.com/openrewrite/rewrite-third-party/pull/103)

## [rewrite-recipe-bom 3.38.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.38.0)

Released on August 26, 2026, with OpenRewrite 8.91.0.

#### [rewrite 8.91.0](https://github.com/openrewrite/rewrite/releases/tag/v8.91.0)

* C#: use J.Empty in for loop with no init by @greg-at-moderne in [#8647](https://github.com/openrewrite/rewrite/pull/8647)
* SimplifyBooleanExpression to handle missing type attribution by @greg-at-moderne in [#8649](https://github.com/openrewrite/rewrite/pull/8649)
* JavaScript: Don't remove `|| false` and other boolean coercions in `SimplifyBooleanExpression` by @greg-at-moderne in [#8648](https://github.com/openrewrite/rewrite/pull/8648)
* Fix Groovy license header detection by @Wanbinyu in [#8646](https://github.com/openrewrite/rewrite/pull/8646)
* RemoteArchive: cache the extracted entry, not the whole archive by @bmuschko in [#8653](https://github.com/openrewrite/rewrite/pull/8653)
* JavaScript: mint fresh LST ids on every template application by @MBoegers in [#8650](https://github.com/openrewrite/rewrite/pull/8650)
* JS: templates parenthesize substitutions that would otherwise re-associate by @MBoegers in [#8651](https://github.com/openrewrite/rewrite/pull/8651)
* Report an actionable error on Kotlin compiler plugin version mismatch by @timtebeek in [#8554](https://github.com/openrewrite/rewrite/pull/8554)
* JavaScript: autoFormat re-indents multi-line comment interiors with their delimiter by @knutwannheden in [#8658](https://github.com/openrewrite/rewrite/pull/8658)
* Docker: EOL image tests hold fixtures the generated dataset does not list by @knutwannheden in [#8661](https://github.com/openrewrite/rewrite/pull/8661)
* Xml: reject attributes that only exist because of ANTLR error recovery by @timtebeek in [#8562](https://github.com/openrewrite/rewrite/pull/8562)
* Terminate the ChangeMethodInvocationReturnType template in statement position by @timtebeek in [#8660](https://github.com/openrewrite/rewrite/pull/8660)
* Keep a child module's dependency version when changing a parent pom by @timtebeek in [#8602](https://github.com/openrewrite/rewrite/pull/8602)

#### [rewrite 8.90.4](https://github.com/openrewrite/rewrite/releases/tag/v8.90.4)

* Scala: fix comment-only files printing their comment twice by @timtebeek in [#8570](https://github.com/openrewrite/rewrite/pull/8570)
* Fix `TypeValidation` unknown reporting and `none()` whitespace polarity by @timtebeek in [#8571](https://github.com/openrewrite/rewrite/pull/8571)
* Scala: de-flake `doesNotLeakTempDirectories` under parallel test JVMs by @timtebeek in [#8574](https://github.com/openrewrite/rewrite/pull/8574)
* Go: fall back to long for int literals exceeding Integer range by @bmuschko in [#8541](https://github.com/openrewrite/rewrite/pull/8541)
* Go: type attribution for non-primitive literals by @greg-at-moderne in [#8575](https://github.com/openrewrite/rewrite/pull/8575)
* Model Go type conversions as J.TypeCast by @knutwannheden in [#8546](https://github.com/openrewrite/rewrite/pull/8546)
* Go: fix handling of empty for by @greg-at-moderne in [#8577](https://github.com/openrewrite/rewrite/pull/8577)
* Python: SimplifyBooleanExpression not to mangle Python chained compar… by @greg-at-moderne in [#8579](https://github.com/openrewrite/rewrite/pull/8579)
* Stop every Go recipe from reporting go.mod and go.sum as changed by @knutwannheden in [#8580](https://github.com/openrewrite/rewrite/pull/8580)
* Send Go marker Spaces over RPC with their comments by @knutwannheden in [#8581](https://github.com/openrewrite/rewrite/pull/8581)
* Go: stop `RemoveUnusedImports` deleting imports a repository name spells by @knutwannheden in [#8582](https://github.com/openrewrite/rewrite/pull/8582)
* Go: Go.Select by @greg-at-moderne in [#8578](https://github.com/openrewrite/rewrite/pull/8578)
* Remove unreachable COMMENT handling from `parseText` by @timtebeek in [#8583](https://github.com/openrewrite/rewrite/pull/8583)
* Model quote style in flag values by @timtebeek in [#8584](https://github.com/openrewrite/rewrite/pull/8584)
* Go: instantiate a `GoTemplate` into a detached node by @knutwannheden in [#8586](https://github.com/openrewrite/rewrite/pull/8586)
* Attribute Go template output against shipped compiler export data by @knutwannheden in [#8545](https://github.com/openrewrite/rewrite/pull/8545)
* Implement variadic captures in GoTemplate by @knutwannheden in [#8587](https://github.com/openrewrite/rewrite/pull/8587)
* Give Go numeric literals a value of the type their source wrote by @knutwannheden in [#8539](https://github.com/openrewrite/rewrite/pull/8539)
* Apply OpenRewrite recipe best practices to rewrite-docker by @timtebeek in [#8588](https://github.com/openrewrite/rewrite/pull/8588)
* Go: a parenthesized conversion type is a TypeTree by @knutwannheden in [#8605](https://github.com/openrewrite/rewrite/pull/8605)
* Go: attribute builtins, comma-ok assertions, `any`, and third-party types by @knutwannheden in [#8606](https://github.com/openrewrite/rewrite/pull/8606)
* Go: validate print-equals-input at parse time by @knutwannheden in [#8607](https://github.com/openrewrite/rewrite/pull/8607)
* Go: compare a pattern against a candidate field by field by @knutwannheden in [#8631](https://github.com/openrewrite/rewrite/pull/8631)
* Go: a capture's declared type constrains what a pattern matches by @knutwannheden in [#8632](https://github.com/openrewrite/rewrite/pull/8632)
* JavaScript: a `catch` clause may bind no variable at all by @knutwannheden in [#8634](https://github.com/openrewrite/rewrite/pull/8634)
* JavaScript: a project below the git root is still in a git work tree by @knutwannheden in [#8635](https://github.com/openrewrite/rewrite/pull/8635)
* Go: surface degraded type attribution on the tree by @knutwannheden in [#8638](https://github.com/openrewrite/rewrite/pull/8638)
* Update Java compatibility behind `options.release.set()` and local variables by @jkschneider in [#8640](https://github.com/openrewrite/rewrite/pull/8640)
* Update Java version properties referenced by the compiler plugin by @jkschneider in [#8641](https://github.com/openrewrite/rewrite/pull/8641)
* Add annotation processor paths to the nearest reactor parent by @jkschneider in [#8642](https://github.com/openrewrite/rewrite/pull/8642)
* Maven: an execution context's mirrors no longer discard those recorded at parse time by @jkschneider in [#8643](https://github.com/openrewrite/rewrite/pull/8643)
* Fix parsing successive @Field declarations by @NianJiuZst in [#8620](https://github.com/openrewrite/rewrite/pull/8620)
* JSON: a member's leading whitespace belongs to the member, not its key by @knutwannheden in [#8644](https://github.com/openrewrite/rewrite/pull/8644)
* Reap a wedged RPC peer's process tree on shutdown by @bmuschko in [#8633](https://github.com/openrewrite/rewrite/pull/8633)
* TypeUtils.findOverriddenMethod accepts cross-package protected overrides by @timtebeek in [#8645](https://github.com/openrewrite/rewrite/pull/8645)

#### [rewrite 8.90.3](https://github.com/openrewrite/rewrite/releases/tag/v8.90.3)

* Python: fix RPC ser/deser of complex literals by @greg-at-moderne in [#8547](https://github.com/openrewrite/rewrite/pull/8547)
* Groovy: fix ClassCastException in AutoFormat involving implicit-retur… by @greg-at-moderne in [#8550](https://github.com/openrewrite/rewrite/pull/8550)
* Fix `gofmt` group separator placement in Go import add/remove by @knutwannheden in [#8549](https://github.com/openrewrite/rewrite/pull/8549)
* Python: fix type attribution for complex literals by @greg-at-moderne in [#8551](https://github.com/openrewrite/rewrite/pull/8551)
* Go: Add DependencyInsight recipe by @greg-at-moderne in [#8552](https://github.com/openrewrite/rewrite/pull/8552)
* Derive Go package names from semantically versioned import paths by @knutwannheden in [#8548](https://github.com/openrewrite/rewrite/pull/8548)
* Go: make the import qualifier fallback yield to type attribution by @knutwannheden in [#8555](https://github.com/openrewrite/rewrite/pull/8555)
* Go: keep `.vN` suffixes intact when deriving an import path from an FQN by @knutwannheden in [#8556](https://github.com/openrewrite/rewrite/pull/8556)
* Go: fix the whitespace fuzzer and the formatter bugs it found by @knutwannheden in [#8559](https://github.com/openrewrite/rewrite/pull/8559)
* Yaml: only treat `%` at the start of a line as a directive by @timtebeek in [#8561](https://github.com/openrewrite/rewrite/pull/8561)
* Java: fix two comment-scanning defects that drop modifiers from the LST by @timtebeek in [#8564](https://github.com/openrewrite/rewrite/pull/8564)
* Java 25: strip javac's EOI sentinel from `///` markdown doc comment text by @timtebeek in [#8565](https://github.com/openrewrite/rewrite/pull/8565)
* Kotlin: map `suspend { }` to a method invocation at every language level by @timtebeek in [#8557](https://github.com/openrewrite/rewrite/pull/8557)
* Normalize Kotlin type parameter bound colon spacing by @timtebeek in [#8558](https://github.com/openrewrite/rewrite/pull/8558)
* Fix MergeSpaceVisitor unguarded casts for Kotlin, Java, Scala by @greg-at-moderne in [#8553](https://github.com/openrewrite/rewrite/pull/8553)
* Maven: resolve version selectors in `ChangePluginGroupIdAndArtifactId` by @timtebeek in [#8567](https://github.com/openrewrite/rewrite/pull/8567)
* migrate to Kotlin 2.4.10 by @barbulescu in [#8542](https://github.com/openrewrite/rewrite/pull/8542)
* Go: fix RPC handling of codec-less enums by @greg-at-moderne in [#8569](https://github.com/openrewrite/rewrite/pull/8569)

#### [rewrite 8.90.2](https://github.com/openrewrite/rewrite/releases/tag/v8.90.2)

* Place Go template output at the site it replaces by @knutwannheden in [#8530](https://github.com/openrewrite/rewrite/pull/8530)
* Close four type-attribution gaps in the Go LST by @knutwannheden in [#8522](https://github.com/openrewrite/rewrite/pull/8522)
* Keep unattributed types intact across the Go RPC boundary by @knutwannheden in [#8538](https://github.com/openrewrite/rewrite/pull/8538)
* Kotlin: fix type of nested class reached via imported outer type by @vlsi in [#8238](https://github.com/openrewrite/rewrite/pull/8238)
* Python: MinimumViableSpacing to add spaces before `not` by @greg-at-moderne in [#8540](https://github.com/openrewrite/rewrite/pull/8540)
* Parse modifiers terminated by a type parameter list by @timtebeek in [#8532](https://github.com/openrewrite/rewrite/pull/8532)

#### [rewrite 8.90.1](https://github.com/openrewrite/rewrite/releases/tag/v8.90.1)

* Send `FileAttributes` timestamps as ISO-8601 strings by @jkschneider in [#8511](https://github.com/openrewrite/rewrite/pull/8511)
* Consume a source file’s `fileAttributes` sub-fields in Go and Python by @jkschneider in [#8513](https://github.com/openrewrite/rewrite/pull/8513)
* Honor Go's compiler build tag and GOOS aliases in `rewrite-go` by @knutwannheden in [#8516](https://github.com/openrewrite/rewrite/pull/8516)
* Intern `JavaType` instances across a parse session and keep RPC refs across files by @knutwannheden in [#8518](https://github.com/openrewrite/rewrite/pull/8518)
* Go: adopt Testify testing library by @greg-at-moderne in [#8493](https://github.com/openrewrite/rewrite/pull/8493)
* Harden the Go parser and printer against real-world code by @knutwannheden in [#8517](https://github.com/openrewrite/rewrite/pull/8517)
* Reach loop headers, operator spaces and untyped composite prefixes by @knutwannheden in [#8520](https://github.com/openrewrite/rewrite/pull/8520)
* Give `RemoveImport` a conditional mode and add `MaybeRemoveImport` in `rewrite-go` by @knutwannheden in [#8521](https://github.com/openrewrite/rewrite/pull/8521)
* Bring the Go formatter to gofmt parity on well-formatted input by @knutwannheden in [#8524](https://github.com/openrewrite/rewrite/pull/8524)
* Use a ZIP-compatible default project build output timestamp by @martinfrancois in [#8509](https://github.com/openrewrite/rewrite/pull/8509)
* Close the remaining gofmt formatting gaps by @knutwannheden in [#8526](https://github.com/openrewrite/rewrite/pull/8526)
* Use static imports for Collectors/Collections/Assertions by @timtebeek in [#8525](https://github.com/openrewrite/rewrite/pull/8525)
* Do not remove bare returns in RemoveRedundantDependencyVersions by @timtebeek in [#8528](https://github.com/openrewrite/rewrite/pull/8528)
* Parse MavenConfig so that we don't miss that source of profile activation/deactivation by @sambsnyd in [#8533](https://github.com/openrewrite/rewrite/pull/8533)

#### [rewrite 8.90.0](https://github.com/openrewrite/rewrite/releases/tag/v8.90.0)

* Send recipe identity, not live recipe graphs, in `RecipesThatMadeChanges` by @knutwannheden in [#8505](https://github.com/openrewrite/rewrite/pull/8505)
* Add rewrite-ruby: a Prism-based Ruby language module by @jkschneider in [#8506](https://github.com/openrewrite/rewrite/pull/8506)

#### [rewrite 8.89.2](https://github.com/openrewrite/rewrite/releases/tag/v8.89.2)

* Give marketplace categories real display names by @jkschneider in [#8499](https://github.com/openrewrite/rewrite/pull/8499)
* Regenerate the marketplace CSVs the category descriptors changed by @jkschneider in [#8500](https://github.com/openrewrite/rewrite/pull/8500)
* Regenerate the rewrite-javascript marketplace CSV by @jkschneider in [#8501](https://github.com/openrewrite/rewrite/pull/8501)
* Stop an undescribed category from shadowing a description by @jkschneider in [#8502](https://github.com/openrewrite/rewrite/pull/8502)
* Mirror the npm, PyPI and NuGet sidecars to the Code Genome Project by @jkschneider in [#8422](https://github.com/openrewrite/rewrite/pull/8422)
* Skip the Python import-visitor RPC round trip for files it cannot change by @knutwannheden in [#8504](https://github.com/openrewrite/rewrite/pull/8504)

#### [rewrite 8.89.1](https://github.com/openrewrite/rewrite/releases/tag/v8.89.1)

* Fix various kotlin parsing shortcomings and missing visits by @sambsnyd in [#8482](https://github.com/openrewrite/rewrite/pull/8482)
* Adding GoFileChecker by @greg-at-moderne in [#8483](https://github.com/openrewrite/rewrite/pull/8483)
* Go: do not parse .gitignored files by @greg-at-moderne in [#8484](https://github.com/openrewrite/rewrite/pull/8484)
* Go: removing imports fall back to lexical matching by @greg-at-moderne in [#8486](https://github.com/openrewrite/rewrite/pull/8486)
* Align the Python RPC server's framing and exit codes with the JS peer by @knutwannheden in [#8485](https://github.com/openrewrite/rewrite/pull/8485)
* Python: decide import shadowing by scope instead of `field_type` by @knutwannheden in [#8488](https://github.com/openrewrite/rewrite/pull/8488)
* Classify Go recipes as go, not golang by @greg-at-moderne in [#8489](https://github.com/openrewrite/rewrite/pull/8489)
* Python: Upgrade to `ty-types` 0.0.71 and map tuple element types by @knutwannheden in [#8492](https://github.com/openrewrite/rewrite/pull/8492)
* Size static wildcard imports by their static members in `Autodetect` by @timtebeek in [#8487](https://github.com/openrewrite/rewrite/pull/8487)
* Size static wildcard imports by their static members in Kotlin `Autodetect` by @timtebeek in [#8490](https://github.com/openrewrite/rewrite/pull/8490)
* Revert "Add `deleteEmptyParents` option to JSON `DeleteKey` (#8476)" by @jkschneider in [#8494](https://github.com/openrewrite/rewrite/pull/8494)
* Gradle ChangeDependency: dedupe on GA identity and upgrade the survivor by @steve-aom-elliott in [#8481](https://github.com/openrewrite/rewrite/pull/8481)
* Add `RemoveEmptyKeys` recipe to `rewrite-json` by @jkschneider in [#8495](https://github.com/openrewrite/rewrite/pull/8495)
* Fix garbled "but it recipe 'X' does not exist" validation message by @timtebeek in [#8496](https://github.com/openrewrite/rewrite/pull/8496)

#### [rewrite-all 1.28.2](https://github.com/openrewrite/rewrite-all/releases/tag/v1.28.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-apache 2.31.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.31.0)

* Add `ApacheBestPractices` and `ApacheCommonsBestPractices` recipes by @sullis in [#144](https://github.com/openrewrite/rewrite-apache/pull/144)
* Give Apache subcategories real display names by @jkschneider in [#145](https://github.com/openrewrite/rewrite-apache/pull/145)
* Regenerate recipes.csv so the new category descriptions land by @jkschneider in [#146](https://github.com/openrewrite/rewrite-apache/pull/146)
* Inline nested visitor class into `getVisitor()` by @timtebeek in [#147](https://github.com/openrewrite/rewrite-apache/pull/147)

#### [rewrite-cobol 2.24.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.24.0)

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation by @timtebeek in [#167](https://github.com/moderneinc/rewrite-cobol/pull/167)
* Record every BIND on a card, and delete the dead markers package by @jkschneider in [#162](https://github.com/moderneinc/rewrite-cobol/pull/162)
* Read the DB2 DDL a program's columns come from by @jkschneider in [#168](https://github.com/moderneinc/rewrite-cobol/pull/168)

#### [rewrite-cobol 2.22.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.22.0)

* Fix three COBOL parse gaps: EXEC DLI, EXIT paragraphs, and RD PAGE by @jkschneider in [#160](https://github.com/moderneinc/rewrite-cobol/pull/160)
* Stop PICTURE strings from consuming the entry that follows them by @jkschneider in [#161](https://github.com/moderneinc/rewrite-cobol/pull/161)
* Parse four more constructs found in real CICS and IMS COBOL by @jkschneider in [#163](https://github.com/moderneinc/rewrite-cobol/pull/163)
* Stop silently skipping a COPY REPLACING rule, and refuse partial words by @jkschneider in [#164](https://github.com/moderneinc/rewrite-cobol/pull/164)
* Model JCL statements in the LST, and stop losing statements to column 73 by @jkschneider in [#165](https://github.com/moderneinc/rewrite-cobol/pull/165)
* Give every COBOL node an identity of its own by @jkschneider in [#166](https://github.com/moderneinc/rewrite-cobol/pull/166)

#### [rewrite-cucumber-jvm 2.16.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.16.0)

* Keep the dependency migration tests from breaking on each cucumber release by @timtebeek in [#59](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/59)
* Assert the whole migrated pom again, with the resolved cucumber version read back by @timtebeek in [#60](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/60)

#### [rewrite-feature-flags 1.23.2](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.23.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-github-actions 3.30.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.30.0)

* Commit known action SHA updates straight to main by @timtebeek in [#215](https://github.com/openrewrite/rewrite-github-actions/pull/215)
* Replace Dependabot `reviewers` with `CODEOWNERS` by @timtebeek in [#214](https://github.com/openrewrite/rewrite-github-actions/pull/214)
* Use native `concurrency` in `AutoCancelInProgressWorkflow` by @timtebeek in [#216](https://github.com/openrewrite/rewrite-github-actions/pull/216)
* Add merge group workflow trigger recipe by @Wanbinyu in [#218](https://github.com/openrewrite/rewrite-github-actions/pull/218)
* Preserve action ref when changing action by @Wanbinyu in [#221](https://github.com/openrewrite/rewrite-github-actions/pull/221)
* Skip the `JsonPathMatcher` walk for non-matching keys in `setup-java`/`setup-node` recipes by @timtebeek in [#220](https://github.com/openrewrite/rewrite-github-actions/pull/220)
* Add setup-python version upgrade recipe by @poketopa in [#219](https://github.com/openrewrite/rewrite-github-actions/pull/219)
* Match composite actions in step-level GitHub Actions recipes by @timtebeek in [#223](https://github.com/openrewrite/rewrite-github-actions/pull/223)
* Replace `always()` with `success() || failure()` by @Tyleresch in [#225](https://github.com/openrewrite/rewrite-github-actions/pull/225)
* Add Dependabot schedule day, time, and timezone options by @Wanbinyu in [#224](https://github.com/openrewrite/rewrite-github-actions/pull/224)

#### [rewrite-gitlab 0.24.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.24.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.41.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.41.0)

* Let TestKit fixtures resolve io.moderne from the Code Genome Project by @kmccarp in [#473](https://github.com/openrewrite/rewrite-gradle-plugin/pull/473)
* Publish releases to the Code Genome Project as well as the plugin portal by @timtebeek in [#474](https://github.com/openrewrite/rewrite-gradle-plugin/pull/474)

#### [rewrite-gradle-plugin 7.40.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.40.0)

* Include invalid value in recipe validation error log by @timtebeek in [#466](https://github.com/openrewrite/rewrite-gradle-plugin/pull/466)
* Drop non-existent classpath entries before parsing by @timtebeek in [#468](https://github.com/openrewrite/rewrite-gradle-plugin/pull/468)
* Honor DEPENDENCY_CHECK_FORMAT in the dependencyCheck config by @timtebeek in [#469](https://github.com/openrewrite/rewrite-gradle-plugin/pull/469)
* Suppress CVE-2026-53914 and CVE-2020-29582 on the Kotlin toolchain jars by @timtebeek in [#470](https://github.com/openrewrite/rewrite-gradle-plugin/pull/470)
* Cut over to the Code Genome Project for publishing and org.openrewrite resolution by @timtebeek in [#467](https://github.com/openrewrite/rewrite-gradle-plugin/pull/467)
* Point TestKit test fixtures at the Code Genome Project by @timtebeek in [#472](https://github.com/openrewrite/rewrite-gradle-plugin/pull/472)

#### [rewrite-hibernate 2.25.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.25.1)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-jackson 1.29.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.29.1)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-jackson 1.29.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.29.0)

* Fix Jackson 3 migration of JsonGenerator#writeObjectField by @k-seth in [#166](https://github.com/openrewrite/rewrite-jackson/pull/166)
* Keep AfterburnerModule on Afterburner rather than retargeting Blackbird by @timtebeek in [#167](https://github.com/openrewrite/rewrite-jackson/pull/167)

#### [rewrite-java-dependencies 1.61.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.61.0)

* Keep dependencies that constrain resolution in `RemoveRedundantDependencies` by @timtebeek in [#195](https://github.com/openrewrite/rewrite-java-dependencies/pull/195)
* Name a `ChangeDependency` instance by the coordinates it changes by @jkschneider in [#196](https://github.com/openrewrite/rewrite-java-dependencies/pull/196)

#### [rewrite-jenkins 0.37.2](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.37.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-joda 0.10.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.10.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-liberty 1.27.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.27.0)

* Remove reference to non-existent `DetectUnsupportedJSF` recipe by @timtebeek in [#45](https://github.com/openrewrite/rewrite-liberty/pull/45)

#### [rewrite-logging-frameworks 3.32.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.32.1)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-maven-plugin 6.47.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.47.0)

* Include invalid value in recipe validation error log by @timtebeek in [#1192](https://github.com/openrewrite/rewrite-maven-plugin/pull/1192)
* Document Code Genome Project repository in README by @timtebeek in [#1193](https://github.com/openrewrite/rewrite-maven-plugin/pull/1193)
* Rename the Code Genome Project artifact secrets by @timtebeek in [#1197](https://github.com/openrewrite/rewrite-maven-plugin/pull/1197)
* Resolve org.openrewrite artifacts in the ITs from the Code Genome Project by @timtebeek in [#1201](https://github.com/openrewrite/rewrite-maven-plugin/pull/1201)
* Publish solely to the Code Genome Project by @timtebeek in [#1184](https://github.com/openrewrite/rewrite-maven-plugin/pull/1184)

#### [rewrite-micrometer 0.30.2](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.30.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-micronaut 2.37.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.37.0)

* Inline single-recipe RemoveUnnecessaryDependencies into Micronaut3to4Migration by @timtebeek in [#147](https://github.com/openrewrite/rewrite-micronaut/pull/147)
* Inline nested visitor classes into `getVisitor()` by @timtebeek in [#148](https://github.com/openrewrite/rewrite-micronaut/pull/148)

#### [rewrite-migrate-java 3.43.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.43.0)

* Fix `NoGuava*` collection recipes crashing on Groovy sources by @timtebeek in [#1210](https://github.com/openrewrite/rewrite-migrate-java/pull/1210)
* Do not rewrite Docker `FROM` images built from variables by @timtebeek in [#1212](https://github.com/openrewrite/rewrite-migrate-java/pull/1212)
* Add `lombok.checkReturnValueAnnotation` to Lombok best practices by @timtebeek in [#1214](https://github.com/openrewrite/rewrite-migrate-java/pull/1214)
* Upgrade `ARG` default values used in Docker `FROM` instructions by @timtebeek in [#1213](https://github.com/openrewrite/rewrite-migrate-java/pull/1213)
* Revert "Upgrade `ARG` default values used in Docker `FROM` instructions" by @timtebeek in [#1215](https://github.com/openrewrite/rewrite-migrate-java/pull/1215)
* Upgrade `ARG` default values used in Docker `FROM` instructions (hold for rewrite release) by @timtebeek in [#1216](https://github.com/openrewrite/rewrite-migrate-java/pull/1216)
* Read an argument and an image name without `rewrite-docker` internals by @timtebeek in [#1220](https://github.com/openrewrite/rewrite-migrate-java/pull/1220)
* Do not apply `var` where the declaration cannot legally carry it by @jkschneider in [#1221](https://github.com/openrewrite/rewrite-migrate-java/pull/1221)
* Leave Kotlin and Groovy sources to `ListFirstAndLast` by @jkschneider in [#1222](https://github.com/openrewrite/rewrite-migrate-java/pull/1222)
* Upgrade AspectJ and fold `mockito-inline` into `mockito-core` for Java 25 by @jkschneider in [#1223](https://github.com/openrewrite/rewrite-migrate-java/pull/1223)
* Turn dangling documentation comments into block comments by @jkschneider in [#1224](https://github.com/openrewrite/rewrite-migrate-java/pull/1224)
* Match a distribution whose candidate carries a vendor build by @jkschneider in [#1225](https://github.com/openrewrite/rewrite-migrate-java/pull/1225)
* Drop the `rewrite-analysis` dependency from `URLConstructorToURICreate` by @timtebeek in [#1226](https://github.com/openrewrite/rewrite-migrate-java/pull/1226)

#### [rewrite-migrate-java 3.42.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.42.1)

* Do not duplicate JSpecify annotations when several annotations map to one by @timtebeek in [#1200](https://github.com/openrewrite/rewrite-migrate-java/pull/1200)
* Upgrade `maven-pmd-plugin` as part of the Java 17 migration by @timtebeek in [#1208](https://github.com/openrewrite/rewrite-migrate-java/pull/1208)
* Update inline Guava recipes for Guava 33.7.0 by @timtebeek in [#1207](https://github.com/openrewrite/rewrite-migrate-java/pull/1207)
* Extend `UseListOf` prose pattern to `LinkedHashSet` by @timtebeek in [#1209](https://github.com/openrewrite/rewrite-migrate-java/pull/1209)

#### [rewrite-netty 0.12.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.12.0)

* Name the Netty 3.2 to 4.1 upgrade category by @jkschneider in [#20](https://github.com/openrewrite/rewrite-netty/pull/20)
* Drop rewrite-spring dependency in favor of a local recipe by @timtebeek in [#21](https://github.com/openrewrite/rewrite-netty/pull/21)

#### [rewrite-okhttp 0.24.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.24.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-openapi 0.33.2](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.33.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite/compare/v8.91.0...main

#### [rewrite-polyglot 2.11.2](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.11.2)

* OpenRewrite v8.91.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.3.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.3.0)

* Pass the renamed CODEGENOME_USERNAME/TOKEN secrets to gh-automation by @timtebeek in [#31](https://github.com/openrewrite/rewrite-prethink/pull/31)

#### [rewrite-quarkus 2.35.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.35.0)

* Inline nested visitor class into `getVisitor()` by @timtebeek in [#117](https://github.com/openrewrite/rewrite-quarkus/pull/117)

#### [rewrite-rewrite 0.31.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.31.0)

* Retain `java.util.Set` import in `UseTagsField` by @timtebeek in [#89](https://github.com/openrewrite/rewrite-rewrite/pull/89)
* Skip recipe classes that already declare a `displayName` or `description` field by @timtebeek in [#90](https://github.com/openrewrite/rewrite-rewrite/pull/90)
* Add `InlineNestedVisitorClass` recipe by @timtebeek in [#91](https://github.com/openrewrite/rewrite-rewrite/pull/91)

#### [rewrite-spring 6.38.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.38.0)

* Re-enable the two tests disabled on CI by @timtebeek in [#1132](https://github.com/openrewrite/rewrite-spring/pull/1132)
* Replace UNPROCESSABLE_ENTITY with UNPROCESSABLE_CONTENT in UpgradeSpr… by @KamilPatora in [#1134](https://github.com/openrewrite/rewrite-spring/pull/1134)
* Preserve whitespace when removing Kotlin annotation arguments by @timtebeek in [#1135](https://github.com/openrewrite/rewrite-spring/pull/1135)
* Add space after comma when inlining JdbcTemplate array initializer args by @timtebeek in [#1137](https://github.com/openrewrite/rewrite-spring/pull/1137)
* Assert Spring Boot 4 pom results with patterns instead of pinned versions by @timtebeek in [#1138](https://github.com/openrewrite/rewrite-spring/pull/1138)
* Remove rewrite-analysis dependency and ConstantFold usage by @timtebeek in [#1139](https://github.com/openrewrite/rewrite-spring/pull/1139)

#### [rewrite-spring 6.37.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.37.1)

* Add `spring-boot-starter-webflux-test` and relocate the `@WebFluxTest` slice by @MBoegers in [#1122](https://github.com/openrewrite/rewrite-spring/pull/1122)
* Name every Spring recipe category the marketplace renders by @jkschneider in [#1123](https://github.com/openrewrite/rewrite-spring/pull/1123)
* Regenerate recipes.csv so the new category descriptions land by @jkschneider in [#1124](https://github.com/openrewrite/rewrite-spring/pull/1124)
* Describe the Spring categories that only had a name by @jkschneider in [#1125](https://github.com/openrewrite/rewrite-spring/pull/1125)
* Upgrade Spring Cloud Stream for Boot 2.7 by @Ouweshs28 in [#1127](https://github.com/openrewrite/rewrite-spring/pull/1127)
* Handle more Springfox `Docket` shapes in the SpringDoc migration by @steve-aom-elliott in [#1128](https://github.com/openrewrite/rewrite-spring/pull/1128)
* Give `MigrateToModularStarters`' dependency-adding half its own recipe name by @timtebeek in [#1129](https://github.com/openrewrite/rewrite-spring/pull/1129)
* chore(ci): only raise Dependabot PRs for major action bumps by @timtebeek in [#1130](https://github.com/openrewrite/rewrite-spring/pull/1130)
* Improve httpclient connect timeout migration by @Ouweshs28 in [#1112](https://github.com/openrewrite/rewrite-spring/pull/1112)

#### [rewrite-spring-to-quarkus 0.12.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.12.0)

* Inline `WebToJaxRsVisitor` into `getVisitor()` by @timtebeek in [#90](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/90)

#### [rewrite-static-analysis 2.42.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.42.0)

* BooleanChecksNotInverted not to alter Python chained comparisons by @greg-at-moderne in [#1010](https://github.com/openrewrite/rewrite-static-analysis/pull/1010)
* Less eager changes in WriteOctalValuesAsDecimal by @greg-at-moderne in [#1011](https://github.com/openrewrite/rewrite-static-analysis/pull/1011)
* Do not apply diamond operator when nested inference would fail by @timtebeek in [#1013](https://github.com/openrewrite/rewrite-static-analysis/pull/1013)
* Limit ExplicitInitialization recipe to Java, C#, Groovy by @greg-at-moderne in [#1015](https://github.com/openrewrite/rewrite-static-analysis/pull/1015)
* Setup Go RPC binary for tests by @greg-at-moderne in [#1014](https://github.com/openrewrite/rewrite-static-analysis/pull/1014)
* Remove redundant `super()` calls and upper case hexadecimal digits by @timtebeek in [#1016](https://github.com/openrewrite/rewrite-static-analysis/pull/1016)
* Exclude Go from RemoveUnusedLocalVariables by @greg-at-moderne in [#1017](https://github.com/openrewrite/rewrite-static-analysis/pull/1017)
* Test for if-with-initializer in Go by @greg-at-moderne in [#1018](https://github.com/openrewrite/rewrite-static-analysis/pull/1018)
* Add Go tests for selected 7 recipes by @greg-at-moderne in [#938](https://github.com/openrewrite/rewrite-static-analysis/pull/938)
* Python: fix whitespace handling for SimplifyBooleanReturn by @greg-at-moderne in [#1019](https://github.com/openrewrite/rewrite-static-analysis/pull/1019)
* Go: NoRedundantJumpStatements not to alter return statements with exp… by @greg-at-moderne in [#1020](https://github.com/openrewrite/rewrite-static-analysis/pull/1020)
* Gate ReplaceStringConcatenationWithStringValueOf to Java+Groovy only by @greg-at-moderne in [#1021](https://github.com/openrewrite/rewrite-static-analysis/pull/1021)
* Go: don't convert octal literals when used for file permissions by @greg-at-moderne in [#1023](https://github.com/openrewrite/rewrite-static-analysis/pull/1023)
* RemoveRedundantTypeCast: keep casts on signature-polymorphic methods by @timtebeek in [#1025](https://github.com/openrewrite/rewrite-static-analysis/pull/1025)
* Inline nested visitor classes into `getVisitor()` by @timtebeek in [#1026](https://github.com/openrewrite/rewrite-static-analysis/pull/1026)
* Inline `UseStringReplaceVisitor` into `getVisitor()` by @timtebeek in [#1027](https://github.com/openrewrite/rewrite-static-analysis/pull/1027)
* Inline precondition-wrapped nested visitor classes by @timtebeek in [#1028](https://github.com/openrewrite/rewrite-static-analysis/pull/1028)
* Drop rewrite-analysis from ReplaceCollectionToArrayArgWithEmptyArray by @timtebeek in [#1029](https://github.com/openrewrite/rewrite-static-analysis/pull/1029)
* Only run data flow analysis on `Stack` variables in `ReplaceStackWithDeque` by @timtebeek in [#1030](https://github.com/openrewrite/rewrite-static-analysis/pull/1030)

#### [rewrite-static-analysis 2.41.1](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.41.1)

* Add `RemoveDuplicateAnnotations` by @timtebeek in [#1000](https://github.com/openrewrite/rewrite-static-analysis/pull/1000)
* Revert "Skip the JavaScript RPC tests when their npm package is unavailable" by @timtebeek in [#1001](https://github.com/openrewrite/rewrite-static-analysis/pull/1001)
* Do not remove `catch (Exception e)` covering a checked exception by @timtebeek in [#1003](https://github.com/openrewrite/rewrite-static-analysis/pull/1003)
* UnnecessaryExplicitTypeArguments: retain witness when enclosing method has dependent type parameters by @Niloyyy in [#998](https://github.com/openrewrite/rewrite-static-analysis/pull/998)
* Add recipe optimizing map iteration by @sambsnyd in [#1004](https://github.com/openrewrite/rewrite-static-analysis/pull/1004)
* WhileInsteadOfFor not to run for Go code by @greg-at-moderne in [#999](https://github.com/openrewrite/rewrite-static-analysis/pull/999)
* Keep annotated and `strictfp` overrides that only call super by @martinfrancois in [#988](https://github.com/openrewrite/rewrite-static-analysis/pull/988)

#### [rewrite-templating 1.45.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.45.0)

* Drop dangling suppressionFile config for deleted suppressions.xml by @timtebeek in [#191](https://github.com/openrewrite/rewrite-templating/pull/191)
* Honor DEPENDENCY_CHECK_FORMAT and FAIL_BUILD_ON_CVSS in dependencyCheck by @timtebeek in [#192](https://github.com/openrewrite/rewrite-templating/pull/192)
* Resolve and publish exclusively through the Code Genome Project by @timtebeek in [#193](https://github.com/openrewrite/rewrite-templating/pull/193)
* Skip annotations when detecting template parser classpath jars by @timtebeek in [#194](https://github.com/openrewrite/rewrite-templating/pull/194)

#### [rewrite-testing-frameworks 3.45.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.45.0)

* Name the JUnit, cleanup, WireMock and Byteman categories by @jkschneider in [#1091](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1091)
* Regenerate recipes.csv so the new category descriptions land by @jkschneider in [#1092](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1092)
* ExpectedExceptionToAssertThrows: inline single-use reassigned locals  by @neil-mushell in [#1074](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1074)
* Migrate `anyCollectionOf`/`anyIterableOf` to their no-arg replacements by @timtebeek in [#1100](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1100)
* Retain `doNothing()` for spies and partial mocks by @timtebeek in [#1101](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1101)
* Remove now-invalid `@Override` when migrating `TestCase` subclasses by @timtebeek in [#1104](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1104)
* Migrate AssertJ `@Rule` soft assertions to `SoftAssertionsExtension` by @timtebeek in [#1105](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1105)
* Retain the original stubbing method when rewriting static `when` to `MockedStatic` by @timtebeek in [#1106](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1106)
* test: add for final TestName Rule by @cortlepp in [#1109](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1109)

#### [rewrite-third-party 0.46.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.46.0)

* Name the Quarkus and Camel categories the marketplace was guessing by @jkschneider in [#96](https://github.com/openrewrite/rewrite-third-party/pull/96)
* Fix `@InlineMe` generator: type variable patterns and bridge methods by @timtebeek in [#97](https://github.com/openrewrite/rewrite-third-party/pull/97)
* Resolve older `rewrite-recipe-bom` versions from Maven Central by @timtebeek in [#98](https://github.com/openrewrite/rewrite-third-party/pull/98)
* Resolve older `io.moderne` artifacts from Maven Central too by @timtebeek in [#99](https://github.com/openrewrite/rewrite-third-party/pull/99)
* Bundle upstream `sh.stubborn:stubborn-contract-migration` recipes by @timtebeek in [#100](https://github.com/openrewrite/rewrite-third-party/pull/100)
* Assert the resolved Stubborn Contract Maven plugin version by @timtebeek in [#101](https://github.com/openrewrite/rewrite-third-party/pull/101)

## [rewrite-recipe-bom 3.37.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.37.0)

Released on August 12, 2026, with OpenRewrite 8.89.0.

#### [rewrite 8.89.0](https://github.com/openrewrite/rewrite/releases/tag/v8.89.0)

* Return the listings an uninstall removed by @shanman190 in [#8471](https://github.com/openrewrite/rewrite/pull/8471)
* Map a bodyless Groovy loop to a `J.Empty` body by @knutwannheden in [#8473](https://github.com/openrewrite/rewrite/pull/8473)
* Add RemovePluginGoal recipe spec by @dim-kod in [#8388](https://github.com/openrewrite/rewrite/pull/8388)
* Never infer a negative tab size when autodetecting Java style by @knutwannheden in [#8474](https://github.com/openrewrite/rewrite/pull/8474)
* Add `deleteEmptyParents` option to JSON `DeleteKey` by @Jenson3210 in [#8476](https://github.com/openrewrite/rewrite/pull/8476)
* Go: fix broken tests, making sure CI runs all Go tests by @greg-at-moderne in [#8477](https://github.com/openrewrite/rewrite/pull/8477)
* Go: parse `for (cond)` as Java `for` loop with J.Empty init/upgrade by @greg-at-moderne in [#8479](https://github.com/openrewrite/rewrite/pull/8479)
* Go: default case in switch parsed same as in Java by @greg-at-moderne in [#8480](https://github.com/openrewrite/rewrite/pull/8480)
* Synthesize nested type stubs in `ChangeMethodInvocationReturnType` by @timtebeek in [#8478](https://github.com/openrewrite/rewrite/pull/8478)

#### [rewrite 8.88.5](https://github.com/openrewrite/rewrite/releases/tag/v8.88.5)

* Remove hardcoded Azure DevOps replacement NuGet feeds by @macsux in [#8439](https://github.com/openrewrite/rewrite/pull/8439)
* Add regression for parent-managed property override upgrade by @kalayciburak in [#8441](https://github.com/openrewrite/rewrite/pull/8441)
* Scala: leading annotations no longer steal a declaration's prefix by @knutwannheden in [#8448](https://github.com/openrewrite/rewrite/pull/8448)
* Prefer PATH over well-known install directories in GoExecutor.find() by @timtebeek in [#8337](https://github.com/openrewrite/rewrite/pull/8337)
* Scala: drop the synthetic unit literal that closes a constructor body by @knutwannheden in [#8449](https://github.com/openrewrite/rewrite/pull/8449)
* Go: fix RPC receives for Switches by @greg-at-moderne in [#8451](https://github.com/openrewrite/rewrite/pull/8451)
* Report types referenced only as a static member access qualifier by @knutwannheden in [#8450](https://github.com/openrewrite/rewrite/pull/8450)
* Python: stop ParseProject pruning build/dist below the project root by @knutwannheden in [#8436](https://github.com/openrewrite/rewrite/pull/8436)
* JS: let .gitignore decide which directories are output by @knutwannheden in [#8437](https://github.com/openrewrite/rewrite/pull/8437)
* C#: type attribution for qualified names, arrays, members, and attribute values; marker and RPC fixes; MaybeAddUsing by @macsux in [#8440](https://github.com/openrewrite/rewrite/pull/8440)
* Ignore blank GAVs in `retainVersions` and `except` by @timtebeek in [#8455](https://github.com/openrewrite/rewrite/pull/8455)
* Consolidate .editorconfig files into one at the repository root by @timtebeek in [#8457](https://github.com/openrewrite/rewrite/pull/8457)
* SimplifyBooleanExpressionVisitor: correctly negate a nested ternary by @martinfrancois in [#8456](https://github.com/openrewrite/rewrite/pull/8456)
* Recipe bundle identity comes from the resolver, not the CSV payload by @shanman190 in [#8362](https://github.com/openrewrite/rewrite/pull/8362)

#### [rewrite 8.88.4](https://github.com/openrewrite/rewrite/releases/tag/v8.88.4)

* Parse WebSphere object/relational mapping files as XML by @jkschneider in [#8428](https://github.com/openrewrite/rewrite/pull/8428)
* Fix properties line continuation handling by @timtebeek in [#8431](https://github.com/openrewrite/rewrite/pull/8431)
* Stop MergeYamlVisitor from grafting the document end comment onto inserted entries by @timtebeek in [#8432](https://github.com/openrewrite/rewrite/pull/8432)
* Match nested type references by either `.` or `$` in `UsesType` by @knutwannheden in [#8430](https://github.com/openrewrite/rewrite/pull/8430)
* Python: fix AttributeError in TyTypesClient.shutdown by @knutwannheden in [#8434](https://github.com/openrewrite/rewrite/pull/8434)
* Fall back to the wrapper's `distributionUrl` when recipes find no `BuildTool` by @timtebeek in [#8433](https://github.com/openrewrite/rewrite/pull/8433)
* Parent-delegate `AnnotationMatcher` in `RecipeClassLoader` by @knutwannheden in [#8438](https://github.com/openrewrite/rewrite/pull/8438)

#### [rewrite 8.88.3](https://github.com/openrewrite/rewrite/releases/tag/v8.88.3)

* Measure RPC request timeout by wall clock instead of counting sleep intervals by @kmccarp in [#8420](https://github.com/openrewrite/rewrite/pull/8420)
* Remove CopyFile recipe by @steve-aom-elliott in [#8421](https://github.com/openrewrite/rewrite/pull/8421)
* Share Java service interfaces across the recipe classloader boundary by @knutwannheden in [#8427](https://github.com/openrewrite/rewrite/pull/8427)
* Default relativeTo to the project path in the RPC clients by @shanman190 in [#8426](https://github.com/openrewrite/rewrite/pull/8426)
* Relativize GoResolutionResult.Path in ParseProject by @shanman190 in [#8425](https://github.com/openrewrite/rewrite/pull/8425)
* Python: fix ty-types client deadlock and restore type attribution on Windows by @kmccarp in [#8423](https://github.com/openrewrite/rewrite/pull/8423)
* Go: distinguish integer widths instead of collapsing all to int by @bmuschko in [#8406](https://github.com/openrewrite/rewrite/pull/8406)

#### [rewrite 8.88.2](https://github.com/openrewrite/rewrite/releases/tag/v8.88.2)

* Check the bound name (alias) per import in Python `RemoveImport` by @knutwannheden in [#8407](https://github.com/openrewrite/rewrite/pull/8407)
* Route Python type positions through visitTypeName by @knutwannheden in [#8403](https://github.com/openrewrite/rewrite/pull/8403)
* Pin ref-slot diff wire states and make Reference.value final by @knutwannheden in [#8402](https://github.com/openrewrite/rewrite/pull/8402)
* Attribute Python import names with ty's canonical types by @knutwannheden in [#8408](https://github.com/openrewrite/rewrite/pull/8408)
* Rename the third isolated-projects property deprecated in Gradle 9.7 by @timtebeek in [#8410](https://github.com/openrewrite/rewrite/pull/8410)
* Update Java version properties redefined in an intermediate parent pom by @timtebeek in [#8413](https://github.com/openrewrite/rewrite/pull/8413)
* Fix cyclic resolved-dependency graphs in serialization and RPC by @knutwannheden in [#8411](https://github.com/openrewrite/rewrite/pull/8411)
* MavenPomDownloader authentication fixes by @sambsnyd in [#8414](https://github.com/openrewrite/rewrite/pull/8414)
* Report why a recipe class could not be loaded, not just that it wasn't by @shanman190 in [#8415](https://github.com/openrewrite/rewrite/pull/8415)
* Keep an aliased import's alias when `ChangeType` retargets it by @knutwannheden in [#8409](https://github.com/openrewrite/rewrite/pull/8409)
* Remove dead native-image visitor guard from `Py.accept` by @jkschneider in [#8419](https://github.com/openrewrite/rewrite/pull/8419)

#### [rewrite 8.88.1](https://github.com/openrewrite/rewrite/releases/tag/v8.88.1)

* Add `UpgradePluginsForMaven4` to bump plugins that fail under Maven 4 by @timtebeek in [#8350](https://github.com/openrewrite/rewrite/pull/8350)
* Prevent lock regeneration warnings from corrupting package.json by @bmuschko in [#8351](https://github.com/openrewrite/rewrite/pull/8351)
* Make `ChangeStaticFieldToMethod` work on Kotlin sources by @timtebeek in [#8352](https://github.com/openrewrite/rewrite/pull/8352)
* Keep XML comments trailing an element on the same line by @timtebeek in [#8353](https://github.com/openrewrite/rewrite/pull/8353)
* Preserve XML comments that auto-format or content removal used to drop by @timtebeek in [#8355](https://github.com/openrewrite/rewrite/pull/8355)
* Publish rewrite-bom snapshots to the Code Genome Project by @timtebeek in [#8356](https://github.com/openrewrite/rewrite/pull/8356)
* Return a new `RecipesThatMadeChanges` when merging recipe credits by @shanman190 in [#8357](https://github.com/openrewrite/rewrite/pull/8357)
* Stop `getRequestedVersion()` falling back to the resolved version by @shanman190 in [#8359](https://github.com/openrewrite/rewrite/pull/8359)
* Parse processing instructions that carry no data by @renechoi in [#8361](https://github.com/openrewrite/rewrite/pull/8361)
* Close four easy Maven 4 gaps found cross-referencing `mvnup` at rc-6 by @timtebeek in [#8363](https://github.com/openrewrite/rewrite/pull/8363)
* Add a DependencyTypes RPC to enumerate a dependency's public API by @jkschneider in [#8360](https://github.com/openrewrite/rewrite/pull/8360)
* Fix `ChangeType` and `ChangePackage` crashing on Kotlin functions with `where` clauses by @timtebeek in [#8365](https://github.com/openrewrite/rewrite/pull/8365)
* Fix OneDependencyDeclarationPerStatement mangling DependencyHandler.add() calls by @sullis in [#8358](https://github.com/openrewrite/rewrite/pull/8358)
* Python: route imports through a PythonImportService so Java ChangeType stops corrupting files by @mtthwcmpbll in [#8323](https://github.com/openrewrite/rewrite/pull/8323)
* Refactor Gradle recipes to use model mapping APIs by @KamilPatora in [#8339](https://github.com/openrewrite/rewrite/pull/8339)
* Support npm range semantics in the semver package by @jkschneider in [#8368](https://github.com/openrewrite/rewrite/pull/8368)
* Restore class loader aware `JavaParser.runtimeClasspath()` by @timtebeek in [#8335](https://github.com/openrewrite/rewrite/pull/8335)
* Add deep transitive dependency test for JS `DependencyInsight` by @knutwannheden in [#8371](https://github.com/openrewrite/rewrite/pull/8371)
* Python: transfer removed import's prefix in `ChangeImport` by @knutwannheden in [#8374](https://github.com/openrewrite/rewrite/pull/8374)
* Python: enumerate module-level functions and constants in DependencyTypes by @knutwannheden in [#8375](https://github.com/openrewrite/rewrite/pull/8375)
* Fully link the resolved-dependency graph after lock-file overlay by @knutwannheden in [#8372](https://github.com/openrewrite/rewrite/pull/8372)
* Fully link the Python resolved-dependency graph in lock-file parsers by @knutwannheden in [#8373](https://github.com/openrewrite/rewrite/pull/8373)
* Add a CopyFile recipe by @steve-aom-elliott in [#8377](https://github.com/openrewrite/rewrite/pull/8377)
* Test RPC composites keep distinct options for same-type children by @bmuschko in [#8369](https://github.com/openrewrite/rewrite/pull/8369)
* Gradle 9.6/9.7: recipes for the new deprecations by @timtebeek in [#8381](https://github.com/openrewrite/rewrite/pull/8381)
* Preserve the file's line separator when adding a properties comment by @timtebeek in [#8383](https://github.com/openrewrite/rewrite/pull/8383)
* Handle anonymous class overrides in RemoveMethodThrows by @steve-aom-elliott in [#8384](https://github.com/openrewrite/rewrite/pull/8384)
* Do not treat missing type attribution as proof of semantic equality by @timtebeek in [#8333](https://github.com/openrewrite/rewrite/pull/8333)
* Implement the scan/generate/edit lifecycle in the Python-native recipe scheduler by @knutwannheden in [#8389](https://github.com/openrewrite/rewrite/pull/8389)
* Do not fabricate an owning class for package-qualified lowercase FQNs in `ShallowClass.build()` by @knutwannheden in [#8391](https://github.com/openrewrite/rewrite/pull/8391)
* Run nested ScanningRecipe scanners in the TypeScript scheduler by @timtebeek in [#8386](https://github.com/openrewrite/rewrite/pull/8386)
* Keep comments with the dependency they precede when adding a Gradle dependency by @timtebeek in [#8393](https://github.com/openrewrite/rewrite/pull/8393)
* Diff lists as `CHANGE` regardless of concrete implementation class by @knutwannheden in [#8395](https://github.com/openrewrite/rewrite/pull/8395)
* Run a recipe's own visitor and scanner alongside its recipe list in the C# scheduler by @knutwannheden in [#8387](https://github.com/openrewrite/rewrite/pull/8387)
* Python-hosted RPC tests for Java-backed recipes by @knutwannheden in [#8390](https://github.com/openrewrite/rewrite/pull/8390)
* Deep-link the remaining Python resolved-dependency graph paths by @knutwannheden in [#8378](https://github.com/openrewrite/rewrite/pull/8378)
* `PythonImportService`: fall back to the serving RPC connection when the JVM is the spawned server by @knutwannheden in [#8394](https://github.com/openrewrite/rewrite/pull/8394)
* FindTypes: mark parameterized type usages in non-Java trees by @knutwannheden in [#8397](https://github.com/openrewrite/rewrite/pull/8397)
* Never CHANGE a ref-deduplicated RPC slot; re-ADD the new value by @knutwannheden in [#8392](https://github.com/openrewrite/rewrite/pull/8392)
* Native Node.js lock file regeneration (npm, pnpm, yarn, bun) by @jkschneider in [#8364](https://github.com/openrewrite/rewrite/pull/8364)
* Move the builtins skip into the `AddImport` visitor so the RPC path honors it by @knutwannheden in [#8401](https://github.com/openrewrite/rewrite/pull/8401)
* Populate the pre-registered ref placeholder in Python JavaType receive codecs by @knutwannheden in [#8400](https://github.com/openrewrite/rewrite/pull/8400)
* Make a null `recursive` consistently mean non-recursive in `ChangePackage` by @timtebeek in [#8382](https://github.com/openrewrite/rewrite/pull/8382)
* Send changed codec-less list elements inline over RPC by @knutwannheden in [#8396](https://github.com/openrewrite/rewrite/pull/8396)
* Depend on released `io.moderne:jsonrpc` in published configurations by @jkschneider in [#8404](https://github.com/openrewrite/rewrite/pull/8404)
* Assert the internal placeholder form in t-string template tests by @jkschneider in [#8405](https://github.com/openrewrite/rewrite/pull/8405)

#### [rewrite-all 1.28.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.28.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.30.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.30.0)

* Make subpackage recursion explicit where these renames depend on it by @timtebeek in [#141](https://github.com/openrewrite/rewrite-apache/pull/141)
* Match any commons-collections 4.x in migrateDependencies test by @timtebeek in [#142](https://github.com/openrewrite/rewrite-apache/pull/142)
* Skip UpgradeApacheHttpClient_5 in modules that depend on REST Assured by @steve-aom-elliott in [#143](https://github.com/openrewrite/rewrite-apache/pull/143)

#### [rewrite-cobol 2.21.1](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.21.1)

* Move CI and publishing onto the openrewrite gh-automation workflows by @timtebeek in [#159](https://github.com/moderneinc/rewrite-cobol/pull/159)

#### [rewrite-cobol 2.21.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.21.0)

* Pass Code Genome Project artifact credentials to the shared workflows by @timtebeek in [#158](https://github.com/moderneinc/rewrite-cobol/pull/158)

#### [rewrite-cucumber-jvm 2.15.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.15.0)

* OpenRewrite recipe best practices by @timtebeek in [#58](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/58)

#### [rewrite-cucumber-jvm 2.14.1](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.14.1)

* Only remove the step definitions class' own empty constructor by @timtebeek in [#48](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/48)
* Flag `TypeRegistryConfigurer` classes left for manual migration by @timtebeek in [#50](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/50)
* Retain constructor injected dependencies when migrating `cucumber-java8` by @timtebeek in [#49](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/49)
* Import `Scenario` in migrated hooks rather than qualify it by @timtebeek in [#51](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/51)
* Retain the `cucumber-java8` interfaces and state the lambdas closed over by @timtebeek in [#52](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/52)
* Migrate the `RuntimeOptionsBuilder` defaults dropped in Cucumber-JVM 7.0.0 by @timtebeek in [#53](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/53)
* Widen `TypeRegistryConfigurerToAnnotations` beyond the lambda by @timtebeek in [#54](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/54)
* Migrate `cucumber-java8` type registrations to `cucumber-java` by @timtebeek in [#56](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/56)
* Drop the redundant `version(..., 17)` wrappers from tests by @timtebeek in [#57](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/57)
* Migrate `cucumber-java8` glue written as a method reference by @timtebeek in [#55](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/55)

#### [rewrite-cucumber-jvm 2.14.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.14.0)

* Expand `info.cukes` coverage, drop `strict`, and fix the Telugu language code by @timtebeek in [#40](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/40)
* Resolve parser classpaths from type tables rather than the runtime classpath by @timtebeek in [#41](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/41)
* Inline named subclass visitors into `getVisitor()` by @timtebeek in [#42](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/42)
* Fix the `cucumber.api` to `io.cucumber` mapping, and migrate off `TypeRegistryConfigurer` by @timtebeek in [#38](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/38)
* Cover the 4.x -> 7.x compile breaks, and add an `UpgradeCucumber6x` tier by @timtebeek in [#43](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/43)
* Migrate the `cucumber.options` property to the individual `cucumber.*` properties by @timtebeek in [#44](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/44)
* Reformat main and test sources, and organize imports by @timtebeek in [#45](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/45)

#### [rewrite-feature-flags 1.23.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.23.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.29.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.29.0)

* Forward CGP artifact repository credentials for dependency resolution by @timtebeek in [#209](https://github.com/openrewrite/rewrite-github-actions/pull/209)
* Provide a usage example for the `githubApiToken` option by @timtebeek in [#211](https://github.com/openrewrite/rewrite-github-actions/pull/211)

#### [rewrite-gitlab 0.24.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.24.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.39.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.39.0)

* Forward CGP artifact repository credentials for dependency resolution by @timtebeek in [#461](https://github.com/openrewrite/rewrite-gradle-plugin/pull/461)
* Resolve dependencies from CGP before Sonatype snapshots and Maven Central by @timtebeek in [#465](https://github.com/openrewrite/rewrite-gradle-plugin/pull/465)

#### [rewrite-hibernate 2.25.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.25.0)

* Move `@Valid` from the container to its element type by @timtebeek in [#94](https://github.com/openrewrite/rewrite-hibernate/pull/94)

#### [rewrite-jackson 1.28.4](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.28.4)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.28.3](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.28.3)

- [Add Gradle property org.gradle.caching=true](https://github.com/openrewrite/rewrite-jackson/commit/2b94e9f5b05ef50e2849d50d59164aab6daefe00) by @timtebeek 
- [Update Gradle wrapper to 9.7.0](https://github.com/openrewrite/rewrite-jackson/commit/398477811d8fb3190107df8e3034df8ed979c106) by @timtebeek 
- [OpenRewrite recipe best practices](https://github.com/openrewrite/rewrite-jackson/commit/0c782b3ff65547a3e7def81917b89717380dda8f) by @timtebeek

#### [rewrite-jackson 1.28.2](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.28.2)

* Add an `addJsonIgnore` option to `FindJsonSetterNullsAsEmptyCollections` by @timtebeek in [#163](https://github.com/openrewrite/rewrite-jackson/pull/163)
* Add RemoveDeadJacksonThrows recipe (declarative, based on #162) by @steve-aom-elliott in [#164](https://github.com/openrewrite/rewrite-jackson/pull/164)
* Move RemoveDeadJacksonThrows after PackageChanges by @steve-aom-elliott in [#165](https://github.com/openrewrite/rewrite-jackson/pull/165)

#### [rewrite-jackson 1.28.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.28.1)

* Remove `ReplaceJsonIgnoreWithJsonSetter`, add an audit recipe for fields it changed by @timtebeek in [#160](https://github.com/openrewrite/rewrite-jackson/pull/160)

#### [rewrite-java-dependencies 1.60.2](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.60.2)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-java-dependencies 1.60.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.60.1)

* Fix wildcard support in `RemoveRedundantDependencies` by @timtebeek in [#194](https://github.com/openrewrite/rewrite-java-dependencies/pull/194)

#### [rewrite-jenkins 0.37.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.37.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.10.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.10.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.26.1](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.26.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.32.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.32.0)

* Renew log4j 1.x suppression through 2026-09-01 by @timtebeek in [#301](https://github.com/openrewrite/rewrite-logging-frameworks/pull/301)
* Support `setCause` and optional `setMessage` in `WrapExpensiveLogStatementsInConditionals` by @timtebeek in [#302](https://github.com/openrewrite/rewrite-logging-frameworks/pull/302)

#### [rewrite-maven-plugin 6.46.1](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.46.1)

* Publish releases and snapshots to the Code Genome Project by @timtebeek in [#1191](https://github.com/openrewrite/rewrite-maven-plugin/pull/1191)

#### [rewrite-maven-plugin 6.46.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.46.0)

* Renew OWASP suppressions through 2026-09-01 by @timtebeek in [#1186](https://github.com/openrewrite/rewrite-maven-plugin/pull/1186)
* Reach the Code Genome Project from the release and bump workflows by @timtebeek in [#1190](https://github.com/openrewrite/rewrite-maven-plugin/pull/1190)

#### [rewrite-micrometer 0.30.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.30.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.36.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.36.0)

* Make subpackage recursion explicit in the Micronaut LDAP rename by @timtebeek in [#144](https://github.com/openrewrite/rewrite-micronaut/pull/144)
* Only migrate documented Micronaut Security keys in yaml by @timtebeek in [#146](https://github.com/openrewrite/rewrite-micronaut/pull/146)

#### [rewrite-migrate-java 3.42.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.42.0)

* Adopt upstream XML trailing-comment formatting by @timtebeek in [#1180](https://github.com/openrewrite/rewrite-migrate-java/pull/1180)
* Add mapping for CheckForNull to JSpecify annotation by @zbynek in [#1179](https://github.com/openrewrite/rewrite-migrate-java/pull/1179)
* Skip `UseSetOf`/`UseListOf` for `HashSet`/`ArrayList` subclasses by @timtebeek in [#1182](https://github.com/openrewrite/rewrite-migrate-java/pull/1182)
* Avoid hardcoded patch version in UpdateSdkManTest by @timtebeek in [#1183](https://github.com/openrewrite/rewrite-migrate-java/pull/1183)
* Only add the Mockito surefire agent configuration when asked, and keep it minimal by @timtebeek in [#1184](https://github.com/openrewrite/rewrite-migrate-java/pull/1184)
* Make subpackage recursion explicit in the Jackson JAX-RS JSON rename by @timtebeek in [#1185](https://github.com/openrewrite/rewrite-migrate-java/pull/1185)
* Add the Mockito agent properties goal in its own execution by @MBoegers in [#1186](https://github.com/openrewrite/rewrite-migrate-java/pull/1186)
* Derive SDKMAN test versions from the candidate list by @timtebeek in [#1188](https://github.com/openrewrite/rewrite-migrate-java/pull/1188)
* Do not apply `var` when the generic return type needs the declared type by @jevanlingen in [#1187](https://github.com/openrewrite/rewrite-migrate-java/pull/1187)
* Cover legacy Bouncy Castle artifacts and their API changes by @timtebeek in [#1189](https://github.com/openrewrite/rewrite-migrate-java/pull/1189)
* Add jakarta.validation-api dependency when migrating com.sun.istack.NotNull by @steve-aom-elliott in [#1190](https://github.com/openrewrite/rewrite-migrate-java/pull/1190)

#### [rewrite-netty 0.11.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.11.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.24.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.24.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.33.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.33.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.11.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.11.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.2.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.2.0)

* Forward Code Genome Project secrets to the CI and publish workflows by @timtebeek in [#29](https://github.com/openrewrite/rewrite-prethink/pull/29)

#### [rewrite-quarkus 2.34.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.34.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.30.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.30.0)

* Add `ClasspathArgumentsOnePerLine` recipe by @timtebeek in [#85](https://github.com/openrewrite/rewrite-rewrite/pull/85)
* Skip files using `@BeforeTemplate` in recipe best practices by @timtebeek in [#87](https://github.com/openrewrite/rewrite-rewrite/pull/87)
* Insert TODO comment instead of placeholder `example` value by @timtebeek in [#86](https://github.com/openrewrite/rewrite-rewrite/pull/86)
* Replace broken `InlineMethods` entries with module published recipes by @timtebeek in [#88](https://github.com/openrewrite/rewrite-rewrite/pull/88)

#### [rewrite-spring 6.37.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.37.0)

* Fix non-varargs call warnings in AddRouteTrailingSlash by @timtebeek in [#1117](https://github.com/openrewrite/rewrite-spring/pull/1117)
* Record `@Bean` return types in the Spring components data table by @eastagiletracker in [#1121](https://github.com/openrewrite/rewrite-spring/pull/1121)

#### [rewrite-spring 6.36.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.36.1)

* Add MockMvc test configuration migration by @Ouweshs28 in [#1110](https://github.com/openrewrite/rewrite-spring/pull/1110)
* Migrate to the new Spring Batch 6.0 chunk-oriented step model by @timtebeek in [#1109](https://github.com/openrewrite/rewrite-spring/pull/1109)
* pin ambiguous classpathFromResources() artifact versions in tests by @barbulescu in [#1113](https://github.com/openrewrite/rewrite-spring/pull/1113)
* add -parameters compiler flag if missing by @barbulescu in [#1067](https://github.com/openrewrite/rewrite-spring/pull/1067)

#### [rewrite-spring-to-quarkus 0.11.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.11.1)

* OpenRewrite v8.89.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.41.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.41.0)

* Pre-install the JavaScript RPC npm package before running tests by @timtebeek in [#956](https://github.com/openrewrite/rewrite-static-analysis/pull/956)
* UnnecessaryExplicitTypeArguments: retain witness for a return-only ty… by @neil-mushell in [#958](https://github.com/openrewrite/rewrite-static-analysis/pull/958)
* Do not delete expressions that may have side effects by @timtebeek in [#959](https://github.com/openrewrite/rewrite-static-analysis/pull/959)
* OpenRewrite recipe best practices by @timtebeek in [#960](https://github.com/openrewrite/rewrite-static-analysis/pull/960)
* UseLambdaForFunctionalInterface: only convert when the anonymous class implements the SAM by @timtebeek in [#962](https://github.com/openrewrite/rewrite-static-analysis/pull/962)
* ReplaceStringBuilderWithString: wrap `char[]` appends in `String.valueOf` by @martinfrancois in [#977](https://github.com/openrewrite/rewrite-static-analysis/pull/977)
* RemoveMethodsOnlyCallSuper: keep synchronized and deprecated overrides by @martinfrancois in [#971](https://github.com/openrewrite/rewrite-static-analysis/pull/971)
* Make sure ModifierOrder doesn't alter Python's def quasi-modifier by @greg-at-moderne in [#981](https://github.com/openrewrite/rewrite-static-analysis/pull/981)
* NullableOnMethodReturnType: only move annotations applicable to TYPE_USE by @martinfrancois in [#968](https://github.com/openrewrite/rewrite-static-analysis/pull/968)
* `FallThrough` to work only for Java files by @greg-at-moderne in [#982](https://github.com/openrewrite/rewrite-static-analysis/pull/982)
* Retry a failed npx warm, and survive a machine without Node by @timtebeek in [#984](https://github.com/openrewrite/rewrite-static-analysis/pull/984)
* Make `DefaultComesLast` apply only to Java by @greg-at-moderne in [#983](https://github.com/openrewrite/rewrite-static-analysis/pull/983)

#### [rewrite-templating 1.44.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.44.0)

* Resolve and publish through the Code Genome Project by @timtebeek in [#190](https://github.com/openrewrite/rewrite-templating/pull/190)

#### [rewrite-testing-frameworks 3.44.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.44.0)

* Use assertInstanceOf for expectCause(isA/instanceOf/is(X.class)) by @neil-mushell in [#1069](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1069)
* Make subpackage recursion explicit in the JavaFaker and Fest renames by @timtebeek in [#1072](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1072)
* Handle `MockitoJUnitRunner.StrictStubs` in `MockitoJUnitRunnerToExtension` by @timtebeek in [#1079](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1079)
* Retain assertTrue/assertFalse(a.equals(null)) as is by @timtebeek in [#1075](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1075)
* Emit `threadMode = SEPARATE_THREAD` when migrating `@Test(timeout = N)` by @timtebeek in [#1076](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1076)
* Add a blank line after the `mocks` field generated in Kotlin sources by @MBoegers in [#1070](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1070)
* Do not convert constructors of types nested in a parameterized test class by @timtebeek in [#1081](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1081)
* Keep `static` on nested test classes with static members before Java 16 by @martinfrancois in [#1082](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1082)
* Do not wrap class level `mockStatic` fields in try-with-resources by @timtebeek in [#1089](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1089)
* Fix `UpdateMockWebServerMockResponseTest` expectation by @timtebeek in [#1090](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1090)

#### [rewrite-third-party 0.45.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.45.0)

* Suppress netty CVE-2026-56816 and jna JDK CPE false positives indefinitely by @timtebeek in [#94](https://github.com/openrewrite/rewrite-third-party/pull/94)

## [rewrite-recipe-bom 3.36.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.36.0)

Released on July 29, 2026, with OpenRewrite 8.88.0.

#### [rewrite 8.88.0](https://github.com/openrewrite/rewrite/releases/tag/v8.88.0)

* Kotlin recipe DSL: support non-literal displayName/description by @timtebeek in [#8316](https://github.com/openrewrite/rewrite/pull/8316)
* Gradle FindDependency: match against resolved version, not declared by @steve-aom-elliott in [#8320](https://github.com/openrewrite/rewrite/pull/8320)
* Add DirCache overload to GitIgnore to avoid re-reading the index per file by @timtebeek in [#8317](https://github.com/openrewrite/rewrite/pull/8317)
* Do not pin plugin version when managed, even when the managed version is upgraded by @timtebeek in [#8326](https://github.com/openrewrite/rewrite/pull/8326)
* Java 25: recover the method invocation type when an argument type is unresolvable by @timtebeek in [#8318](https://github.com/openrewrite/rewrite/pull/8318)
* KotlinTemplate: attribute members selected on substituted placeholders by @timtebeek in [#8324](https://github.com/openrewrite/rewrite/pull/8324)
* Make Kotlin's statement/expression wrappers first-class visited nodes by @timtebeek in [#8325](https://github.com/openrewrite/rewrite/pull/8325)
* JavaTemplate: fail loudly when the coordinates are never matched by @timtebeek in [#8328](https://github.com/openrewrite/rewrite/pull/8328)
* Regenerate recipes.csv by @timtebeek in [#8332](https://github.com/openrewrite/rewrite/pull/8332)
* Add Gradle recipe `RemoveEmptyBuildscriptBlock` by @sullis in [#8329](https://github.com/openrewrite/rewrite/pull/8329)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#8338](https://github.com/openrewrite/rewrite/pull/8338)
* Python: fix match-statement parse desync that corrupts trees over RPC by @shanman190 in [#8330](https://github.com/openrewrite/rewrite/pull/8330)
* Python: preserve PEP 695 type-alias type parameters across RPC by @shanman190 in [#8331](https://github.com/openrewrite/rewrite/pull/8331)
* Governance-aware UpgradeTransitiveDependencyVersion (add-or-update) for Maven by @shanman190 in [#8342](https://github.com/openrewrite/rewrite/pull/8342)
* Disable UseParentInference in MigrateToMaven4 until the parser supports it by @timtebeek in [#8346](https://github.com/openrewrite/rewrite/pull/8346)
* Keep relocated YAML property at the indentation of its new siblings by @timtebeek in [#8348](https://github.com/openrewrite/rewrite/pull/8348)
* YAML: Fix parsing of tags which precede sequences by @sambsnyd in [#8349](https://github.com/openrewrite/rewrite/pull/8349)

#### [rewrite 8.87.7](https://github.com/openrewrite/rewrite/releases/tag/v8.87.7)

* Add Develocity `SetDevelocityProjectId` and `SetDevelocityServer` recipes by @timtebeek in [#8311](https://github.com/openrewrite/rewrite/pull/8311)
* C#: type numeric literals consistently with their values by @macsux in [#8309](https://github.com/openrewrite/rewrite/pull/8309)
* Isolate Python recipe bundles in per-bundle virtual environments by @shanman190 in [#8275](https://github.com/openrewrite/rewrite/pull/8275)
* Represent oversize source files as Quarks in the RPC project parsers by @jkschneider in [#8312](https://github.com/openrewrite/rewrite/pull/8312)
* Visit every space the JS/C#/Python/Go printers emit by @jkschneider in [#8314](https://github.com/openrewrite/rewrite/pull/8314)
* Python: honor the requested marker printer when printing over RPC by @natedanner in [#8305](https://github.com/openrewrite/rewrite/pull/8305)

#### [rewrite 8.87.6](https://github.com/openrewrite/rewrite/releases/tag/v8.87.6)

* Isolate the type cache when cloning `GradleParser.Builder` by @timtebeek in [#8301](https://github.com/openrewrite/rewrite/pull/8301)
* Python: use textwrap.dedent for raw source fixtures in type attribution tests by @timtebeek in [#8299](https://github.com/openrewrite/rewrite/pull/8299)
* Migrate Develocity publishing to the OSS Community Develocity Instance by @cdsap in [#8303](https://github.com/openrewrite/rewrite/pull/8303)
* Kotlin: render wildcard-typed template parameters as type projections by @MBoegers in [#8302](https://github.com/openrewrite/rewrite/pull/8302)
* Python: treat bare Pipfile version as an exact pin during lock regeneration by @jkschneider in [#8304](https://github.com/openrewrite/rewrite/pull/8304)
* Python: scope native lock regeneration to a recipe's changed dependencies by @jkschneider in [#8307](https://github.com/openrewrite/rewrite/pull/8307)
* Use generous HTTP timeouts in UpdateGradleWrapperTest to avoid CI flakiness by @jkschneider in [#8308](https://github.com/openrewrite/rewrite/pull/8308)
* Delegate the three-arg generate overload through precondition decorators and the RPC Generate handler by @MBoegers in [#8310](https://github.com/openrewrite/rewrite/pull/8310)

#### [rewrite 8.87.5](https://github.com/openrewrite/rewrite/releases/tag/v8.87.5)

* Fix ChangeType NPE on ClassDeclaration with null type by @mtthwcmpbll in [#8294](https://github.com/openrewrite/rewrite/pull/8294)
* Python: attribute types for decorated class/function declarations by @timtebeek in [#8295](https://github.com/openrewrite/rewrite/pull/8295)
* Fix `MergeYaml` inserting a new entry after surrounding blank lines by @bmuschko in [#8232](https://github.com/openrewrite/rewrite/pull/8232)
* property relocation logic to nest under existing prefixes in YAML map… by @KamilPatora in [#8291](https://github.com/openrewrite/rewrite/pull/8291)
* C#: drop MSBuildLocator; evaluate restore graphs via the SDK's own msbuild by @macsux in [#8298](https://github.com/openrewrite/rewrite/pull/8298)
* perf(rpc): per-source-file eviction to bound polyglot RewriteRpc server memory by @jkschneider in [#8297](https://github.com/openrewrite/rewrite/pull/8297)

#### [rewrite 8.87.4](https://github.com/openrewrite/rewrite/releases/tag/v8.87.4)

* Python: native Pipfile.lock and uv.lock regeneration without executing package managers by @jkschneider in [#8283](https://github.com/openrewrite/rewrite/pull/8283)
* Maven FindProperties: gate $\{property\} usage marking on valuePattern by @timtebeek in [#8282](https://github.com/openrewrite/rewrite/pull/8282)
* Python: field fixes for native lock regeneration (uv url/git sources, diagnosability, whitespace-preserving upgrades) by @jkschneider in [#8284](https://github.com/openrewrite/rewrite/pull/8284)
* Python: native poetry.lock and pdm.lock regeneration without executing package managers by @jkschneider in [#8285](https://github.com/openrewrite/rewrite/pull/8285)
* Go: Fix the serialization of chars over RPC by @sambsnyd in [#8287](https://github.com/openrewrite/rewrite/pull/8287)
* JavaScript: type property-key literals by their own lexical category by @sambsnyd in [#8288](https://github.com/openrewrite/rewrite/pull/8288)
* Parent-delegate GoModVisitor and GoSumVisitor in RecipeClassLoader by @shanman190 in [#8289](https://github.com/openrewrite/rewrite/pull/8289)
* C#: resolve NuGet dependencies in-process instead of shelling out to dotnet/nuget by @macsux in [#8286](https://github.com/openrewrite/rewrite/pull/8286)
* Python: native uv.lock delta resolution (greedy-forward resolver) by @jkschneider in [#8292](https://github.com/openrewrite/rewrite/pull/8292)

#### [rewrite 8.87.3](https://github.com/openrewrite/rewrite/releases/tag/v8.87.3)

* JavaScript: fix id=0 corner case in RPC by @greg-at-moderne in [#8271](https://github.com/openrewrite/rewrite/pull/8271)
* Go: fix object ref map in outbound RPC communication to store already assigned ids better by @greg-at-moderne in [#8272](https://github.com/openrewrite/rewrite/pull/8272)
* C#: parse XML doc comments on the .NET side and send structured tree over RPC by @macsux in [#8267](https://github.com/openrewrite/rewrite/pull/8267)
* Kotlin recipe DSL: attach method type on multi-param selector rewrites by @timtebeek in [#8273](https://github.com/openrewrite/rewrite/pull/8273)
* Incorrect AST values for multiline strings by @KamilPatora in [#8277](https://github.com/openrewrite/rewrite/pull/8277)
* Fix NPE parsing @CompileStatic Groovy with parameterless lambda arguments by @timtebeek in [#8278](https://github.com/openrewrite/rewrite/pull/8278)
* Go: fix RPC handling of Go-specific unary operators by @greg-at-moderne in [#8279](https://github.com/openrewrite/rewrite/pull/8279)
* Go: fix RPC idempotency issue with statements nested within a switch by @greg-at-moderne in [#8280](https://github.com/openrewrite/rewrite/pull/8280)

#### [rewrite 8.87.2](https://github.com/openrewrite/rewrite/releases/tag/v8.87.2)

* Guard recipe generate phase against invalid source paths by @timtebeek in [#8248](https://github.com/openrewrite/rewrite/pull/8248)
* Attach lock-regeneration failure warning to the lock file too by @timtebeek in [#8254](https://github.com/openrewrite/rewrite/pull/8254)
* Add DockerCopyFrom trait for `COPY --from` / `ADD --from` image references by @timtebeek in [#8250](https://github.com/openrewrite/rewrite/pull/8250)
* Go: skip excessive `GoResolutionResult` markers by @greg-at-moderne in [#8259](https://github.com/openrewrite/rewrite/pull/8259)
* Go: fix AutoFormat tests by @greg-at-moderne in [#8258](https://github.com/openrewrite/rewrite/pull/8258)
* Go: add outbound pagination of GetObject RPC by @greg-at-moderne in [#8264](https://github.com/openrewrite/rewrite/pull/8264)
* Go: reduce object allocations on deser by 20% by @greg-at-moderne in [#8263](https://github.com/openrewrite/rewrite/pull/8263)
* Go: receiveTypedList in RPC by @greg-at-moderne in [#8265](https://github.com/openrewrite/rewrite/pull/8265)
* Toml: ChangeValue cannot update values inside TOML inline tables by @KamilPatora in [#8261](https://github.com/openrewrite/rewrite/pull/8261)

#### [rewrite 8.87.1](https://github.com/openrewrite/rewrite/releases/tag/v8.87.1)

* Go: add memory information to `rpc.csv` by @greg-at-moderne in [#8249](https://github.com/openrewrite/rewrite/pull/8249)
* rewrite-csharp: add ExpectDataTable test assertion + Net48 reference assemblies by @macsux in [#8202](https://github.com/openrewrite/rewrite/pull/8202)
* Go: use type interning on recipe runs by @greg-at-moderne in [#8251](https://github.com/openrewrite/rewrite/pull/8251)
* Match Apache Maven's anonymous-first authentication for POM and JAR downloads by @Jammy-Louie in [#8169](https://github.com/openrewrite/rewrite/pull/8169)
* Go: intern GoResolutionResult objects by @greg-at-moderne in [#8252](https://github.com/openrewrite/rewrite/pull/8252)
* Go: when reading from RPC don't store into intermediary strings by @greg-at-moderne in [#8253](https://github.com/openrewrite/rewrite/pull/8253)

#### [rewrite-all 1.28.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.28.0)

* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#46](https://github.com/openrewrite/rewrite-all/pull/46)

#### [rewrite-apache 2.29.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.29.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#137](https://github.com/openrewrite/rewrite-apache/pull/137)
* Fix AddTimeUnitArgument crash on arithmetic argument expressions by @timtebeek in [#139](https://github.com/openrewrite/rewrite-apache/pull/139)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#140](https://github.com/openrewrite/rewrite-apache/pull/140)

#### [rewrite-cobol 2.20.3](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.20.3)

* OpenRewrite v8.88.0: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.27.2](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.27.2)

* OpenRewrite v8.88.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.13.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.13.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#35](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/35)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#36](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/36)
* Upgrade Cucumber dependencies to latest release by @timtebeek in [#37](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/37)

#### [rewrite-feature-flags 1.23.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.23.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#69](https://github.com/openrewrite/rewrite-feature-flags/pull/69)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#70](https://github.com/openrewrite/rewrite-feature-flags/pull/70)

#### [rewrite-github-actions 3.28.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.28.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#206](https://github.com/openrewrite/rewrite-github-actions/pull/206)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#208](https://github.com/openrewrite/rewrite-github-actions/pull/208)

#### [rewrite-gitlab 0.24.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.24.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#42](https://github.com/openrewrite/rewrite-gitlab/pull/42)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#43](https://github.com/openrewrite/rewrite-gitlab/pull/43)

#### [rewrite-gradle-plugin 7.38.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.38.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#454](https://github.com/openrewrite/rewrite-gradle-plugin/pull/454)
* Read the git index once instead of per source file by @timtebeek in [#455](https://github.com/openrewrite/rewrite-gradle-plugin/pull/455)
* Pin `rewrite-docker` to `rewriteVersion` by @timtebeek in [#460](https://github.com/openrewrite/rewrite-gradle-plugin/pull/460)

#### [rewrite-hibernate 2.24.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.24.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#90](https://github.com/openrewrite/rewrite-hibernate/pull/90)
* Assert hibernate-validator 8.0.x pattern instead of exact version by @timtebeek in [#91](https://github.com/openrewrite/rewrite-hibernate/pull/91)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#92](https://github.com/openrewrite/rewrite-hibernate/pull/92)

#### [rewrite-jackson 1.28.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.28.0)

* Fold mapper setters only for the variable the mapper directly initializes by @MBoegers in [#157](https://github.com/openrewrite/rewrite-jackson/pull/157)
* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#158](https://github.com/openrewrite/rewrite-jackson/pull/158)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#159](https://github.com/openrewrite/rewrite-jackson/pull/159)

#### [rewrite-java-dependencies 1.60.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.60.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#190](https://github.com/openrewrite/rewrite-java-dependencies/pull/190)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#192](https://github.com/openrewrite/rewrite-java-dependencies/pull/192)
* Fix inverted exclusion comparison in `RemoveRedundantDependencies` by @timtebeek in [#191](https://github.com/openrewrite/rewrite-java-dependencies/pull/191)
* Track the Maven UpgradeTransitiveDependencyVersion accumulator type change by @shanman190 in [#193](https://github.com/openrewrite/rewrite-java-dependencies/pull/193)

#### [rewrite-java-dependencies 1.59.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.59.0)

* Include in Dependency Report the path to the build file declaring the dependencies being reported on by @sambsnyd in [#189](https://github.com/openrewrite/rewrite-java-dependencies/pull/189)

#### [rewrite-jenkins 0.37.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.37.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#115](https://github.com/openrewrite/rewrite-jenkins/pull/115)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#116](https://github.com/openrewrite/rewrite-jenkins/pull/116)

#### [rewrite-joda 0.10.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.10.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#22](https://github.com/openrewrite/rewrite-joda/pull/22)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#23](https://github.com/openrewrite/rewrite-joda/pull/23)

#### [rewrite-liberty 1.26.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.26.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#43](https://github.com/openrewrite/rewrite-liberty/pull/43)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#44](https://github.com/openrewrite/rewrite-liberty/pull/44)

#### [rewrite-logging-frameworks 3.31.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.31.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#299](https://github.com/openrewrite/rewrite-logging-frameworks/pull/299)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#300](https://github.com/openrewrite/rewrite-logging-frameworks/pull/300)

#### [rewrite-maven-plugin 6.45.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.45.0)

* Read the git index once instead of per source file by @timtebeek in [#1177](https://github.com/openrewrite/rewrite-maven-plugin/pull/1177)

#### [rewrite-micrometer 0.30.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.30.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#38](https://github.com/openrewrite/rewrite-micrometer/pull/38)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#39](https://github.com/openrewrite/rewrite-micrometer/pull/39)

#### [rewrite-micronaut 2.35.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.35.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#142](https://github.com/openrewrite/rewrite-micronaut/pull/142)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#143](https://github.com/openrewrite/rewrite-micronaut/pull/143)

#### [rewrite-migrate-java 3.41.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.41.0)

* Add Mockito Java agent surefire config in reactor modules by @timtebeek in [#1169](https://github.com/openrewrite/rewrite-migrate-java/pull/1169)
* Move Java EE 8 servlet update into separate recipe by @rlsanders4 in [#1170](https://github.com/openrewrite/rewrite-migrate-java/pull/1170)
* Update NoGuavaRefaster expected output for upstream static-import change by @timtebeek in [#1171](https://github.com/openrewrite/rewrite-migrate-java/pull/1171)
* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#1172](https://github.com/openrewrite/rewrite-migrate-java/pull/1172)
* Add `mapstruct-processor` to annotation processor paths when Lombok and MapStruct are used by @timtebeek in [#1175](https://github.com/openrewrite/rewrite-migrate-java/pull/1175)
* Fix method patterns for dead `UnsignedInts`/`UnsignedLongs` recipes by @timtebeek in [#1176](https://github.com/openrewrite/rewrite-migrate-java/pull/1176)
* Migrate web.xml xsi:schemaLocation from J2EE 1.4 namespace by @steve-aom-elliott in [#1177](https://github.com/openrewrite/rewrite-migrate-java/pull/1177)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#1178](https://github.com/openrewrite/rewrite-migrate-java/pull/1178)

#### [rewrite-netty 0.11.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.11.0)

* Add Develocity plugin and build scan configuration by @timtebeek in [#18](https://github.com/openrewrite/rewrite-netty/pull/18)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#19](https://github.com/openrewrite/rewrite-netty/pull/19)

#### [rewrite-okhttp 0.24.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.24.0)

* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#31](https://github.com/openrewrite/rewrite-okhttp/pull/31)

#### [rewrite-openapi 0.33.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.33.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#78](https://github.com/openrewrite/rewrite-openapi/pull/78)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#79](https://github.com/openrewrite/rewrite-openapi/pull/79)

#### [rewrite-polyglot 2.11.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.11.0)

* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#55](https://github.com/openrewrite/rewrite-polyglot/pull/55)

#### [rewrite-prethink 1.1.1](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.1.1)

* OpenRewrite v8.88.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.34.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.34.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#115](https://github.com/openrewrite/rewrite-quarkus/pull/115)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#116](https://github.com/openrewrite/rewrite-quarkus/pull/116)

#### [rewrite-rewrite 0.29.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.29.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#82](https://github.com/openrewrite/rewrite-rewrite/pull/82)
* Set Develocity server and projectId in recipe best practices by @timtebeek in [#83](https://github.com/openrewrite/rewrite-rewrite/pull/83)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#84](https://github.com/openrewrite/rewrite-rewrite/pull/84)

#### [rewrite-spring 6.36.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.36.0)

* Preserve Spring Boot managed Jackson versions during Boot 4 migration by @timtebeek in [#1071](https://github.com/openrewrite/rewrite-spring/pull/1071)
* Migrate OpenAPI Generator `spring` config during Spring Boot 4 upgrade by @timtebeek in [#1075](https://github.com/openrewrite/rewrite-spring/pull/1075)
* Remove stale mockito.version property when upgrading to Spring Boot 2.7 by @timtebeek in [#1076](https://github.com/openrewrite/rewrite-spring/pull/1076)
* Remove redundant managed dependency versions during Spring Boot 4 migration by @timtebeek in [#1077](https://github.com/openrewrite/rewrite-spring/pull/1077)
* Migrate jsonschema2pojo config during Spring Boot 4 upgrade by @Kyran121 in [#1078](https://github.com/openrewrite/rewrite-spring/pull/1078)
* Introduce Spring Data 4 migration foundation by @Kyran121 in [#1087](https://github.com/openrewrite/rewrite-spring/pull/1087)
* Migrate Spring Boot 4 MongoDB modular packages and test starters by @Kyran121 in [#1079](https://github.com/openrewrite/rewrite-spring/pull/1079)
* Update SeparateApplicationYamlByProfile expected output for MergeYaml blank-line fix by @timtebeek in [#1088](https://github.com/openrewrite/rewrite-spring/pull/1088)
* Add recipe to move Spring Boot 4.0 web server classes to their new packages by @GabrielBBaldez in [#1051](https://github.com/openrewrite/rewrite-spring/pull/1051)
* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#1090](https://github.com/openrewrite/rewrite-spring/pull/1090)
* Add Spring Data MongoDB 5 dependency alignment by @Kyran121 in [#1089](https://github.com/openrewrite/rewrite-spring/pull/1089)
* Remove Springfox 3.x `@EnableOpenApi` annotation when migrating to SpringDoc by @steve-aom-elliott in [#1097](https://github.com/openrewrite/rewrite-spring/pull/1097)
* Wire `ListenableToCompletableFuture` into Spring Framework 6.0 upgrade chain by @timtebeek in [#1101](https://github.com/openrewrite/rewrite-spring/pull/1101)
* Trigger spring-boot-starter-jdbc and spring-boot-hibernate on SB3 autoconfigure packages by @steve-aom-elliott in [#1103](https://github.com/openrewrite/rewrite-spring/pull/1103)
* Migrate Spring Kafka 2.8 `SeekToCurrentBatchErrorHandler` and `setBackOff` by @timtebeek in [#1102](https://github.com/openrewrite/rewrite-spring/pull/1102)
* Include Jackson PropertyNamingStrategy migration in Spring Boot 2.5 upgrade by @steve-aom-elliott in [#1104](https://github.com/openrewrite/rewrite-spring/pull/1104)
* Add Spring Boot 4.1 property migration by @Ouweshs28 in [#1096](https://github.com/openrewrite/rewrite-spring/pull/1096)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#1105](https://github.com/openrewrite/rewrite-spring/pull/1105)
* Keep renamed Spring properties as nested YAML mappings by @timtebeek in [#1106](https://github.com/openrewrite/rewrite-spring/pull/1106)

#### [rewrite-spring-to-quarkus 0.11.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.11.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#88](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/88)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#89](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/89)

#### [rewrite-static-analysis 2.40.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.40.0)

* Retain UnnecessaryThrows on overridable methods (#939) by @timtebeek in [#940](https://github.com/openrewrite/rewrite-static-analysis/pull/940)
* Qualify `this` for outer-class methods in ReplaceLambdaWithMethodReference by @timtebeek in [#942](https://github.com/openrewrite/rewrite-static-analysis/pull/942)
* FixStringFormatExpressions: don't strip args with no matched specifiers by @neil-mushell in [#943](https://github.com/openrewrite/rewrite-static-analysis/pull/943)
* UnnecessaryExplicitTypeArguments: retain load-bearing witness in argument position on instance methods too by @neil-mushell in [#946](https://github.com/openrewrite/rewrite-static-analysis/pull/946)
* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#947](https://github.com/openrewrite/rewrite-static-analysis/pull/947)
* Add recipe for finding public methods missing javadoc by @sambsnyd in [#948](https://github.com/openrewrite/rewrite-static-analysis/pull/948)
* Add recipes for migrating off a variety of legacy collection types by @sambsnyd in [#949](https://github.com/openrewrite/rewrite-static-analysis/pull/949)
* exception-without-cause by @sambsnyd in [#950](https://github.com/openrewrite/rewrite-static-analysis/pull/950)
* Do not wrap operators onto a new line in Kotlin sources by @vlsi in [#936](https://github.com/openrewrite/rewrite-static-analysis/pull/936)
* Do not remove casts from raw types to their parameterized form by @timtebeek in [#954](https://github.com/openrewrite/rewrite-static-analysis/pull/954)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#955](https://github.com/openrewrite/rewrite-static-analysis/pull/955)

#### [rewrite-templating 1.43.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.43.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#187](https://github.com/openrewrite/rewrite-templating/pull/187)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#189](https://github.com/openrewrite/rewrite-templating/pull/189)

#### [rewrite-templating 1.42.1](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.42.1)

* Recursively apply static imports to nested factory calls in generated recipes by @timtebeek in [#186](https://github.com/openrewrite/rewrite-templating/pull/186)

#### [rewrite-testing-frameworks 3.43.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.43.0)

* ReplaceInitMockToOpenMock: support Kotlin via KotlinTemplate branches by @MBoegers in [#1055](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1055)
* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#1056](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1056)
* Fix AssertThrowsOnLastStatement crash on unattributed argument types by @timtebeek in [#1059](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1059)
* AssertTrueNegationToAssertFalse: support Kotlin via LST manipulation by @timtebeek in [#1057](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1057)
* Fix Hamcrest not() unwrap crash when wrapping a bare value by @Jammy-Louie in [#1062](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1062)
* Migrate TestNG SoftAssert to AssertJ SoftAssertions by @juherr in [#1063](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1063)
* Support Kotlin in three JUnit testing recipes (fix crashes/no-ops) by @timtebeek in [#1065](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1065)
* Migrate TestNG Assertion (instance) to AssertJ by @juherr in [#1064](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1064)
* Leave AssertThrowsOnLastStatement arguments inline when their type can't be rendered by @timtebeek in [#1066](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1066)
* HamcrestMatcherToJUnit5: support Kotlin sources by @timtebeek in [#1058](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1058)
* Build and test on Java 25 with rewrite-java-25 by @timtebeek in [#1061](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1061)
* MockitoWhenOnStaticToMockStatic: name unnamed `_` variable when reusing MockedStatic by @timtebeek in [#1060](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1060)
* Simplify AssertJ `==` and `!=` assertions into one recipe by @timtebeek in [#1067](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1067)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#1068](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1068)

#### [rewrite-testing-frameworks 3.42.1](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.42.1)

* KotlinTestMethodsShouldReturnUnit: exclude @TestFactory methods by @neil-mushell in [#1052](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1052)
* AssertEqualsNullToAssertNull: support Kotlin via LST manipulation by @timtebeek in [#1053](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1053)
* Fix Hamcrest not() unwrap infinite loop and support CoreMatchers by @Jammy-Louie in [#1054](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1054)

#### [rewrite-third-party 0.44.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.44.0)

* Set Develocity `projectId` to "openrewrite" by @timtebeek in [#89](https://github.com/openrewrite/rewrite-third-party/pull/89)
* Forward Code Genome Project publish credentials to `ci-gradle.yml` by @jkschneider in [#90](https://github.com/openrewrite/rewrite-third-party/pull/90)
* Raise jackson-databind resolution pin from 2.21.4 to 2.21.5 by @timtebeek in [#92](https://github.com/openrewrite/rewrite-third-party/pull/92)
* Convert jackson-databind and httpcore5 version pins to floor-only constraints by @timtebeek in [#93](https://github.com/openrewrite/rewrite-third-party/pull/93)

## [rewrite-recipe-bom 3.35.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.35.0)

Released on July 14, 2026, with OpenRewrite 8.87.0.

#### [rewrite 8.87.0](https://github.com/openrewrite/rewrite/releases/tag/v8.87.0)

* Quiet polyglot test-runner build output by default by @timtebeek in [#8242](https://github.com/openrewrite/rewrite/pull/8242)
* Scala: visitUnknown -> throw unmappedException by @greg-at-moderne in [#8243](https://github.com/openrewrite/rewrite/pull/8243)
* Go: fix Java visitor for `Go.MultiAssignment` by @greg-at-moderne in [#8244](https://github.com/openrewrite/rewrite/pull/8244)
* Python: make the search marker collector use PythonVisitor and visit_… by @greg-at-moderne in [#8223](https://github.com/openrewrite/rewrite/pull/8223)
* Reduce compiler-warning noise in rewrite-kotlin and rewrite-scala by @timtebeek in [#8241](https://github.com/openrewrite/rewrite/pull/8241)
* Go: fix parser not to store quotes for literal values by @greg-at-moderne in [#8245](https://github.com/openrewrite/rewrite/pull/8245)
* Bound ChangeParentPom accumulator retention to changed poms by @shanman190 in [#8239](https://github.com/openrewrite/rewrite/pull/8239)
* Add `ExtractVersionsAsProperties` recipe to extract inlined Maven versions into `<properties>` by @barbulescu in [#7655](https://github.com/openrewrite/rewrite/pull/7655)
* YAML: fix MergeYaml + fix CoalesceProperties formatting on block scalars by @steve-aom-elliott in [#8157](https://github.com/openrewrite/rewrite/pull/8157)
* Keep `latest.patch` within the patch range for versions without a numeric minor by @timtebeek in [#8210](https://github.com/openrewrite/rewrite/pull/8210)
* Do not add imports from the builtins module in rewrite-python by @timtebeek in [#8246](https://github.com/openrewrite/rewrite/pull/8246)
* Scala: Use `TrailingComma` marker by @greg-at-moderne in [#8226](https://github.com/openrewrite/rewrite/pull/8226)

#### [rewrite 8.86.5](https://github.com/openrewrite/rewrite/releases/tag/v8.86.5)

* Go: fix visitor immutability by @greg-at-moderne in [#8225](https://github.com/openrewrite/rewrite/pull/8225)
* Go: TabsAndIndentsVisitor to preserve indenting style by @greg-at-moderne in [#8224](https://github.com/openrewrite/rewrite/pull/8224)
* Kotlin: dedupe conflicting imports in `AddImport` (#8213) by @timtebeek in [#8219](https://github.com/openrewrite/rewrite/pull/8219)
* Document HasMinimumJavaVersion behavior across version selector forms by @steve-aom-elliott in [#8228](https://github.com/openrewrite/rewrite/pull/8228)
* Kotlin: shorten fully qualified references in `AddImport` (#8214) by @timtebeek in [#8220](https://github.com/openrewrite/rewrite/pull/8220)
* Fix `AddDependency` `latest.patch` upgrading managed dependencies to latest release by @timtebeek in [#8215](https://github.com/openrewrite/rewrite/pull/8215)
* Kotlin: fix AddImport ambiguous-name test to expect no change by @timtebeek in [#8231](https://github.com/openrewrite/rewrite/pull/8231)
* Interpret a plain version arg to HasMinimumJavaVersion as 'N or higher' by @steve-aom-elliott in [#8229](https://github.com/openrewrite/rewrite/pull/8229)
* Maven: fix `ChangeManagedDependencyGroupIdAndArtifactId` `latest.patch` leaving redundant managed dependency by @timtebeek in [#8230](https://github.com/openrewrite/rewrite/pull/8230)
* Avoid duplicate dependencies in ChangeDependency by @timtebeek in [#8129](https://github.com/openrewrite/rewrite/pull/8129)
* Fix javadoc 'reference not found' warnings by @timtebeek in [#8234](https://github.com/openrewrite/rewrite/pull/8234)
* Decode incoming JS RPC messages without V8's 512MB string cap by @shanman190 in [#8233](https://github.com/openrewrite/rewrite/pull/8233)

#### [rewrite 8.86.4](https://github.com/openrewrite/rewrite/releases/tag/v8.86.4)

* JavaScript: allow bun, @datadog/pprof scripts by @greg-at-moderne in [#8205](https://github.com/openrewrite/rewrite/pull/8205)
* JavaScript: pin to NPM 11 for releasing by @greg-at-moderne in [#8206](https://github.com/openrewrite/rewrite/pull/8206)
* Add the source file's imports when parsing context-sensitive method-parameter templates by @MBoegers in [#8183](https://github.com/openrewrite/rewrite/pull/8183)
* Java: fix `ReplaceConstant` throwing `IllegalStateException` on Kotlin sources by @MBoegers in [#8204](https://github.com/openrewrite/rewrite/pull/8204)
* Go: list dependencies to include -test dependencies too by @greg-at-moderne in [#8207](https://github.com/openrewrite/rewrite/pull/8207)
* Balance sibling class braces in `AnnotationTemplateGenerator` stubs by @MBoegers in [#8208](https://github.com/openrewrite/rewrite/pull/8208)
* Scala: fix parsing of backticked special names as method invocations by @greg-at-moderne in [#8197](https://github.com/openrewrite/rewrite/pull/8197)
* Restore dependency management for child modules of a local parent by @timtebeek in [#8082](https://github.com/openrewrite/rewrite/pull/8082)
* Go: drop reflection usage in walker by @greg-at-moderne in [#8209](https://github.com/openrewrite/rewrite/pull/8209)
* Remove unnecessary dependencies based on declared BOM by @bmuschko in [#6576](https://github.com/openrewrite/rewrite/pull/6576)
* Fix ConcurrentModificationException in Gradle ChangeDependency under parallel recipe execution by @MBoegers in [#8217](https://github.com/openrewrite/rewrite/pull/8217)
* Remove redundant child dependency versions when aggregator parent is upgraded by @timtebeek in [#8216](https://github.com/openrewrite/rewrite/pull/8216)
* Fix MergeYaml duplicating a preceding entry's trailing comment onto an inserted entry by @bmuschko in [#8222](https://github.com/openrewrite/rewrite/pull/8222)
* Go: align the If/Else LST model with Java by @greg-at-moderne in [#8218](https://github.com/openrewrite/rewrite/pull/8218)

#### [rewrite 8.86.3](https://github.com/openrewrite/rewrite/releases/tag/v8.86.3)

* Go: GoResolutionResult marker to include module graph by @greg-at-moderne in [#8196](https://github.com/openrewrite/rewrite/pull/8196)
* Go: test harness to support scanning recipes by @greg-at-moderne in [#8200](https://github.com/openrewrite/rewrite/pull/8200)
* Go: add support for parsing go.sum files by @greg-at-moderne in [#8199](https://github.com/openrewrite/rewrite/pull/8199)
* Go: handle nested modules in LockFileRegeneration by @greg-at-moderne in [#8201](https://github.com/openrewrite/rewrite/pull/8201)
* Key local recipe installs by their absolute path across ecosystems by @shanman190 in [#8194](https://github.com/openrewrite/rewrite/pull/8194)
* Fix MergeYaml indenting new entries to a column that mismatches siblings by @bmuschko in [#8192](https://github.com/openrewrite/rewrite/pull/8192)
* Scala: fix printing of two cases in one line separated by semicolon by @greg-at-moderne in [#8195](https://github.com/openrewrite/rewrite/pull/8195)
* Scala: fix parsing of varargs with a space before asterisk by @greg-at-moderne in [#8198](https://github.com/openrewrite/rewrite/pull/8198)
* Serialize outgoing JS RPC messages without V8's 512MB string cap by @shanman190 in [#8191](https://github.com/openrewrite/rewrite/pull/8191)
* Java: support parameterized types in `ChangeMethodInvocationReturnType` by @MBoegers in [#8043](https://github.com/openrewrite/rewrite/pull/8043)

#### [rewrite 8.86.2](https://github.com/openrewrite/rewrite/releases/tag/v8.86.2)

* Report non-string declarative recipe tags as validation errors by @timtebeek in [#8162](https://github.com/openrewrite/rewrite/pull/8162)
* Fall back to anonymous JAR download on 4xx when Maven credentials are rejected by @Jammy-Louie in [#8158](https://github.com/openrewrite/rewrite/pull/8158)
* Add Kotlin test coverage for `AddCommentToMethodInvocations` by @MBoegers in [#8165](https://github.com/openrewrite/rewrite/pull/8165)
* YAML: prevent block-scalar value mutations from corrupting siblings by @steve-aom-elliott in [#8154](https://github.com/openrewrite/rewrite/pull/8154)
* Forward visit methods declared on a delegate superclass under `adapt()` by @jkschneider in [#8172](https://github.com/openrewrite/rewrite/pull/8172)
* Fix UpgradeDependencyVersion  failing to download dependencies not marked with a repository of origin by @sambsnyd in [#8176](https://github.com/openrewrite/rewrite/pull/8176)
* Go: manage `go.sum` by `LockFileRegeneration` by @greg-at-moderne in [#8164](https://github.com/openrewrite/rewrite/pull/8164)
* Fix `KotlinTemplate` stub generation for annotations on methods and variables by @MBoegers in [#8168](https://github.com/openrewrite/rewrite/pull/8168)
* use gradle property assignment for distributionUrl by @sullis in [#8177](https://github.com/openrewrite/rewrite/pull/8177)
* Fix ChangeDependencyGroupIdAndArtifactId adding a version to provided/test dependency managed by a local parent by @timtebeek in [#8179](https://github.com/openrewrite/rewrite/pull/8179)
* Fix UpdateMavenModel discarding a parent POM's update when an aggregated child module fails to re-resolve by @timtebeek in [#8155](https://github.com/openrewrite/rewrite/pull/8155)
* Fix HCL parse failure for comments containing "for " after `{`/`[` by @timtebeek in [#8185](https://github.com/openrewrite/rewrite/pull/8185)
* Add AttributeValue trait for non-literal annotation attribute values by @MBoegers in [#8166](https://github.com/openrewrite/rewrite/pull/8166)
* Fix several Scala parse-print idempotency issues found on Apache Flink by @knutwannheden in [#8174](https://github.com/openrewrite/rewrite/pull/8174)
* Support Gradle wrapper version detection for custom distribution URLs by @bmuschko in [#8171](https://github.com/openrewrite/rewrite/pull/8171)
* Store DependencyInsight's dependency graph as a DAG to prevent OOM on ubiquitous transitive deps by @jkschneider in [#8193](https://github.com/openrewrite/rewrite/pull/8193)

#### [rewrite 8.86.1](https://github.com/openrewrite/rewrite/releases/tag/v8.86.1)

* Go: Set GOROOT for Go RPC by @greg-at-moderne in [#8163](https://github.com/openrewrite/rewrite/pull/8163)

#### [rewrite-all 1.27.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.27.1)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.28.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.28.0)

* Migrate httpcore-nio entity classes to HttpClient 5.x equivalents by @steve-aom-elliott in [#136](https://github.com/openrewrite/rewrite-apache/pull/136)

#### [rewrite-cobol 2.20.2](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.20.2)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-cobol 2.20.1](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.20.1)

* Read and tokenize JCL .prm members once by path, not per source by @bmuschko in [#156](https://github.com/moderneinc/rewrite-cobol/pull/156)

#### [rewrite-codemods 0.27.1](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.27.1)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.12.4](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.12.4)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.12.3](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.12.3)

* Upgrade Cucumber-JVM 7.18.0 -> 7.34.4 to drop vulnerable shaded jackson-databind by @timtebeek in [#34](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/34)

#### [rewrite-feature-flags 1.22.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.22.1)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.27.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.27.0)

* Match composite action definitions in GitHub Action recipes by @timtebeek in [#203](https://github.com/openrewrite/rewrite-github-actions/pull/203)

#### [rewrite-gitlab 0.23.3](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.23.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.23.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.23.1)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.27.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.27.0)

* Fold setters that reference intermediate variables into builder by @steve-aom-elliott in [#152](https://github.com/openrewrite/rewrite-jackson/pull/152)
* Handle IOException on Jackson serializer/deserializer overrides in UpgradeJackson_2_3 by @steve-aom-elliott in [#151](https://github.com/openrewrite/rewrite-jackson/pull/151)
* Rewrite trailing setters and field setters as mapper.rebuild() chains by @steve-aom-elliott in [#153](https://github.com/openrewrite/rewrite-jackson/pull/153)
* Rewrite ObjectCodec.treeToValue to DeserializationContext.readTreeAsValue in deserializers by @steve-aom-elliott in [#154](https://github.com/openrewrite/rewrite-jackson/pull/154)
* Fold rebuild reassignments into initializers and reclaim final locals by @steve-aom-elliott in [#156](https://github.com/openrewrite/rewrite-jackson/pull/156)

#### [rewrite-java-dependencies 1.58.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.58.0)

* Keep direct dependencies whose scope or exclusions differ from the transitive one by @timtebeek in [#188](https://github.com/openrewrite/rewrite-java-dependencies/pull/188)

#### [rewrite-jenkins 0.36.3](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.36.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.9.3](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.9.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.25.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.25.0)

* Add missing recipe to MigrateFromWebSphereToLiberty by @rlsanders4 in [#42](https://github.com/openrewrite/rewrite-liberty/pull/42)

#### [rewrite-logging-frameworks 3.30.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.30.0)

* Allow StringFormatToParameterizedLogging to migrate format strings without specifiers. by @motlin in [#295](https://github.com/openrewrite/rewrite-logging-frameworks/pull/295)
* Fix Log4j1 to SLF4J migration of mapped diagnostic context (MDC): convert non-String values to Strings and migrate Hashtable to Map. by @motlin in [#296](https://github.com/openrewrite/rewrite-logging-frameworks/pull/296)
* Suppress OWASP findings for intentional log4j 1.x dependency by @timtebeek in [#297](https://github.com/openrewrite/rewrite-logging-frameworks/pull/297)

#### [rewrite-maven-plugin 6.44.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.44.0)

* Suppress CVE-2026-53914 and jackson-databind false positives by @timtebeek in [#1172](https://github.com/openrewrite/rewrite-maven-plugin/pull/1172)
* Update jackson-bom.version to 2.21.5 by @timtebeek in [#1173](https://github.com/openrewrite/rewrite-maven-plugin/pull/1173)

#### [rewrite-micrometer 0.29.3](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.29.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.34.4](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.34.4)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.40.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.40.0)

* Keep `\t` and `\f` escapes in UseTextBlocks to avoid incidental whitespace stripping by @timtebeek in [#1160](https://github.com/openrewrite/rewrite-migrate-java/pull/1160)
* Skip UseEnumSetOf empty conversion for static fields to avoid circular class-init (#1157) by @timtebeek in [#1161](https://github.com/openrewrite/rewrite-migrate-java/pull/1161)
* Skip `UseMapOf` for `LinkedHashMap`/`TreeMap` in the prose `put()` form (#1163) by @timtebeek in [#1165](https://github.com/openrewrite/rewrite-migrate-java/pull/1165)
* Skip AddMockitoJavaAgentToMavenSurefirePlugin when agent already configured in build/plugins by @timtebeek in [#1166](https://github.com/openrewrite/rewrite-migrate-java/pull/1166)
* Add RedundantUtf8Charset recipe to drop redundant UTF-8 from Files calls by @timtebeek in [#1167](https://github.com/openrewrite/rewrite-migrate-java/pull/1167)
* Fix Jakarta EE 10 web.xml migration by @sakshichitnis27 in [#1159](https://github.com/openrewrite/rewrite-migrate-java/pull/1159)

#### [rewrite-netty 0.10.3](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.10.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.23.3](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.23.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.32.3](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.32.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.11](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.11)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.1.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.1.0)

* Support updating multiple agent config files by @kmccarp in [#27](https://github.com/openrewrite/rewrite-prethink/pull/27)
* Add optional `template` option to UpdateAgentConfig by @Jenson3210 in [#26](https://github.com/openrewrite/rewrite-prethink/pull/26)
* Skip blank `targetConfigFiles` entries in UpdateAgentConfig by @shanman190 in [#28](https://github.com/openrewrite/rewrite-prethink/pull/28)

#### [rewrite-quarkus 2.33.3](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.33.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.28.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.28.0)

* Fix UseRewriteTestDefaults corrupting output for classes with field initializers by @timtebeek in [#80](https://github.com/openrewrite/rewrite-rewrite/pull/80)
* Avoid no-op change in SourceSpecTextBlockIndentation when margin is already minimal by @timtebeek in [#81](https://github.com/openrewrite/rewrite-rewrite/pull/81)

#### [rewrite-spring 6.35.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.35.0)

* Add option to keep the property in `CommentOutSpringPropertyKey` by @timtebeek in [#1056](https://github.com/openrewrite/rewrite-spring/pull/1056)
* Add precise migration guidance for removed `HttpComponentsClientHttpRequestFactory#setConnectTimeout` by @MBoegers in [#1062](https://github.com/openrewrite/rewrite-spring/pull/1062)
* Add parameterized `RemoveAutoConfigurationExclude` recipe by @steve-aom-elliott in [#1065](https://github.com/openrewrite/rewrite-spring/pull/1065)
* Render moved `@Autowired` field types as written instead of fully qualified by @MBoegers in [#1061](https://github.com/openrewrite/rewrite-spring/pull/1061)
* JacksonAutoConfiguration migration by @kosmaty in [#1060](https://github.com/openrewrite/rewrite-spring/pull/1060)
* Add recipe to convert auto-configuration `exclude` to `excludeName` by @steve-aom-elliott in [#1068](https://github.com/openrewrite/rewrite-spring/pull/1068)

#### [rewrite-spring-to-quarkus 0.10.3](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.10.3)

* OpenRewrite v8.87.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.39.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.39.0)

* Fix UseStringCaseInsensitiveOrder lambda matching by @timtebeek in [#933](https://github.com/openrewrite/rewrite-static-analysis/pull/933)
* Keep (Object) cast on array argument at varargs position by @timtebeek in [#935](https://github.com/openrewrite/rewrite-static-analysis/pull/935)
* Python: add Python tests for selected 7 recipes by @greg-at-moderne in [#929](https://github.com/openrewrite/rewrite-static-analysis/pull/929)
* Consolidate UseStringCaseInsensitiveOrder into a single Refaster template by @timtebeek in [#937](https://github.com/openrewrite/rewrite-static-analysis/pull/937)

#### [rewrite-templating 1.42.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.42.0)

* Warn at compile time when a return-type-widening guard is generated by @timtebeek in [#184](https://github.com/openrewrite/rewrite-templating/pull/184)
* Retain `@AfterTemplate` line breaks on `select` in generated `JavaTemplate` strings by @timtebeek in [#185](https://github.com/openrewrite/rewrite-templating/pull/185)

#### [rewrite-testing-frameworks 3.42.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.42.0)

* Support Kotlin sources in `AssertThrowsOnLastStatement` by @vlsi in [#1048](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1048)
* Use range selector so JUnit5to6Migration gates on Java 17 or higher by @steve-aom-elliott in [#1049](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1049)
* Simplify JUnit5to6Migration minimum Java version to '17' by @steve-aom-elliott in [#1050](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1050)

#### [rewrite-third-party 0.43.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.43.0)

* Renew OWASP suppressions through 2026-08-01 by @timtebeek in [#84](https://github.com/openrewrite/rewrite-third-party/pull/84)
* Force jackson-databind to 2.21.4 to remediate CVE-2026-54512/54513 by @timtebeek in [#85](https://github.com/openrewrite/rewrite-third-party/pull/85)
* Fix CVE-2026-54399 (Apache HttpComponents Core DoS) by @timtebeek in [#86](https://github.com/openrewrite/rewrite-third-party/pull/86)

## [rewrite-recipe-bom 3.34.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.34.0)

Released on July 1, 2026, with OpenRewrite 8.86.0.

#### [rewrite 8.86.0](https://github.com/openrewrite/rewrite/releases/tag/v8.86.0)

* NPM publishing version string fix by @greg-at-moderne in [#8140](https://github.com/openrewrite/rewrite/pull/8140)
* Revert "JavaScript: Consider dated versions as snapshots too (#8124)" by @greg-at-moderne in [#8141](https://github.com/openrewrite/rewrite/pull/8141)
* Fix AddPropertyComment skipping identical comments on consecutive commented-out properties by @timtebeek in [#8142](https://github.com/openrewrite/rewrite/pull/8142)
* Use the `rewrite-javascript-version.txt` in NPM publishing by @greg-at-moderne in [#8143](https://github.com/openrewrite/rewrite/pull/8143)
* C#: give each singleton marker a distinct fixed UUID by @macsux in [#8100](https://github.com/openrewrite/rewrite/pull/8100)
* npm: per-bundle recipe attribution and whole-tree PrepareRecipe by @shanman190 in [#8136](https://github.com/openrewrite/rewrite/pull/8136)
* python: per-bundle recipe attribution and whole-tree PrepareRecipe by @shanman190 in [#8137](https://github.com/openrewrite/rewrite/pull/8137)
* golang: per-bundle recipe attribution and whole-tree PrepareRecipe by @shanman190 in [#8138](https://github.com/openrewrite/rewrite/pull/8138)
* csharp: test cross-ecosystem delegatesTo emission by @shanman190 in [#8146](https://github.com/openrewrite/rewrite/pull/8146)
* Fix rewrite-scala temp dir leak by @greg-at-moderne in [#8147](https://github.com/openrewrite/rewrite/pull/8147)
* JavaScript: Java can delegate to JS's autoformat by @greg-at-moderne in [#8144](https://github.com/openrewrite/rewrite/pull/8144)
* Remove evolution comments by @greg-at-moderne in [#8148](https://github.com/openrewrite/rewrite/pull/8148)
* JavaScript: keep &lt;default> as the method name in type attribution whe… by @greg-at-moderne in [#8149](https://github.com/openrewrite/rewrite/pull/8149)
* JavaScript: DependencyWorkspace to use pid to isolate parallel runs by @greg-at-moderne in [#8150](https://github.com/openrewrite/rewrite/pull/8150)
* Go: Parse _test.go files too by @greg-at-moderne in [#8151](https://github.com/openrewrite/rewrite/pull/8151)
* Go: relativize paths before importer registration by @greg-at-moderne in [#8153](https://github.com/openrewrite/rewrite/pull/8153)
* Stream CsvDataTableStore.getRows from disk lazily and mandate closing the returned stream by @jkschneider in [#8156](https://github.com/openrewrite/rewrite/pull/8156)
* Go: prune excessive comments by @greg-at-moderne in [#8152](https://github.com/openrewrite/rewrite/pull/8152)
* rpc: remove the by-name RpcRecipe.getRecipeList() fallback by @shanman190 in [#8139](https://github.com/openrewrite/rewrite/pull/8139)

#### [rewrite 8.85.7](https://github.com/openrewrite/rewrite/releases/tag/v8.85.7)

* Fix rewrite-python README quickstart referencing unexposed PythonParser by @timtebeek in [#8118](https://github.com/openrewrite/rewrite/pull/8118)
* Fix Kotlin parse failure for annotation after modifier in primary constructor by @knutwannheden in [#8119](https://github.com/openrewrite/rewrite/pull/8119)
* Marking rewrite-csharp and rewrite-go explicitly as MSAL-licensed by @greg-at-moderne in [#8120](https://github.com/openrewrite/rewrite/pull/8120)
* Scala: infix type notation by @greg-at-moderne in [#8121](https://github.com/openrewrite/rewrite/pull/8121)
* JavaScript: Consider dated versions as snapshots too by @greg-at-moderne in [#8124](https://github.com/openrewrite/rewrite/pull/8124)
* Scala: S.PackageDeclaration by @greg-at-moderne in [#8125](https://github.com/openrewrite/rewrite/pull/8125)
* JavaScript: isolate integration tests better, reset RPC process manager by @greg-at-moderne in [#8126](https://github.com/openrewrite/rewrite/pull/8126)
* Scala: fix parsing of two consecutive extension methods by @greg-at-moderne in [#8122](https://github.com/openrewrite/rewrite/pull/8122)
* Scala: fix parsing of trailing comments after method header by @greg-at-moderne in [#8123](https://github.com/openrewrite/rewrite/pull/8123)
* JavaScript: synchronize artifact versions for snapshots of rewrite-javascript between Maven and NPM by @greg-at-moderne in [#8128](https://github.com/openrewrite/rewrite/pull/8128)
* Create a Comments trait to make it easy to add formatted comments to LST elements. by @sambsnyd in [#8131](https://github.com/openrewrite/rewrite/pull/8131)
* Bound the buffer in BackwardCompatibleObjectIdModule by @natedanner in [#8132](https://github.com/openrewrite/rewrite/pull/8132)
* Add `UsesType`/`UsesMethod` preconditions to type/method-targeted recipes by @jkschneider in [#8133](https://github.com/openrewrite/rewrite/pull/8133)
* Index used/declared method types for prefix-based matching by @knutwannheden in [#8127](https://github.com/openrewrite/rewrite/pull/8127)
* Fix RemoveExclusion#onlyIneffective for deep transitive exclusions by @timtebeek in [#8117](https://github.com/openrewrite/rewrite/pull/8117)
* Allow the recipe-run host to configure data table stores for RPC-language recipes by @jkschneider in [#8135](https://github.com/openrewrite/rewrite/pull/8135)
* Map all captured wildcards to `?` in the type mappers by @knutwannheden in [#8111](https://github.com/openrewrite/rewrite/pull/8111)
* Fix C# recipe over-attribution when multiple packages share a dependency by @shanman190 in [#8134](https://github.com/openrewrite/rewrite/pull/8134)

#### [rewrite 8.85.6](https://github.com/openrewrite/rewrite/releases/tag/v8.85.6)

* Fix Javadoc handling of varargs by @sambsnyd in [#8107](https://github.com/openrewrite/rewrite/pull/8107)
* Expose the major version of the JDK compiling the source code by @sambsnyd in [#8109](https://github.com/openrewrite/rewrite/pull/8109)
* rewrite-python: fix empty output when a Java recipe edits a Python LST (#8093) by @timtebeek in [#8094](https://github.com/openrewrite/rewrite/pull/8094)
* Add oldDigest="" to ChangeFrom to skip digest-pinned FROMs by @MBoegers in [#8110](https://github.com/openrewrite/rewrite/pull/8110)
* Keep Javadoc reference parameter names out of whitespace by @timtebeek in [#8114](https://github.com/openrewrite/rewrite/pull/8114)
* Gradle 9: attach each subproject's own GradleProject in withToolingApi by @Jenson3210 in [#8105](https://github.com/openrewrite/rewrite/pull/8105)
* Go: fail explicitly when the recipe implementation does not exist by @greg-at-moderne in [#8116](https://github.com/openrewrite/rewrite/pull/8116)
* Revert "Delete OWASP suppressions file when no suppressions remain" by @greg-at-moderne in [#8108](https://github.com/openrewrite/rewrite/pull/8108)

#### [rewrite 8.85.5](https://github.com/openrewrite/rewrite/releases/tag/v8.85.5)

* Add UsesImport recipe to rewrite-python recipes.csv by @timtebeek in [#8090](https://github.com/openrewrite/rewrite/pull/8090)
* Groovy: fixing range with complex bound parsing `s[0..(n - 1)]` by @gtiwari333 in [#8089](https://github.com/openrewrite/rewrite/pull/8089)
* Scala: fix handling the case of an extra semicolon at the end of the … by @greg-at-moderne in [#8075](https://github.com/openrewrite/rewrite/pull/8075)
* Gradle: `UseJavaExtensionBlock` handles `subprojects`/`allprojects` blocks by @timtebeek in [#8095](https://github.com/openrewrite/rewrite/pull/8095)
* Fix double indentation of continued ternary as lambda body argument by @timtebeek in [#8097](https://github.com/openrewrite/rewrite/pull/8097)
* C#: fix lossless round-trip of XML doc comment attributes by @macsux in [#8098](https://github.com/openrewrite/rewrite/pull/8098)
* Avoid ClassCastException when a recipe rewrites the J.Return inside a K.Return by @timtebeek in [#8103](https://github.com/openrewrite/rewrite/pull/8103)
* Go: fix received Block's RightPadded&lt;Body> by @greg-at-moderne in [#8104](https://github.com/openrewrite/rewrite/pull/8104)
* C#: bump StreamJsonRpc to 2.25.29 to remediate CVE-2026-48109 by @kmccarp in [#8101](https://github.com/openrewrite/rewrite/pull/8101)

#### [rewrite 8.85.4](https://github.com/openrewrite/rewrite/releases/tag/v8.85.4)

* Preserve non-String option values when applying options via `withOptions` by @zieka in [#8085](https://github.com/openrewrite/rewrite/pull/8085)
* Groovy: unbounded wildcard in method is appending '?extends' by @gtiwari333 in [#8086](https://github.com/openrewrite/rewrite/pull/8086)
* Instanceof non type use annotation cursor corruption by @barbulescu in [#8087](https://github.com/openrewrite/rewrite/pull/8087)
* rewrite-python: add uses_import precondition and gate ChangeImport on it by @jkschneider in [#8088](https://github.com/openrewrite/rewrite/pull/8088)

#### [rewrite 8.85.3](https://github.com/openrewrite/rewrite/releases/tag/v8.85.3)

* Go: fix findMethodsByPattern integration test by @greg-at-moderne in [#8062](https://github.com/openrewrite/rewrite/pull/8062)
* Go: in RPC coerce empty collections to empty lists, not nil by @greg-at-moderne in [#8061](https://github.com/openrewrite/rewrite/pull/8061)
* C#: synchronize installting CSharp.Tool to the same directory by @greg-at-moderne in [#8066](https://github.com/openrewrite/rewrite/pull/8066)
* Scala: never throw from `parseInputs` and self-heal compiler core libraries by @knutwannheden in [#7980](https://github.com/openrewrite/rewrite/pull/7980)
* Gradle: avoid allocating a new GradleDependencies trait when nothing changes by @Jenson3210 in [#8067](https://github.com/openrewrite/rewrite/pull/8067)
* `ChangePackage`: cheaper javadoc reference precondition scan by @knutwannheden in [#8070](https://github.com/openrewrite/rewrite/pull/8070)
* JavaScript: shutdown current RPC in integration tests by @greg-at-moderne in [#8068](https://github.com/openrewrite/rewrite/pull/8068)
* JavaScript: handle pnpm lock file version 9 too by @greg-at-moderne in [#8069](https://github.com/openrewrite/rewrite/pull/8069)
* JavaScript: Yarn Berry to use Corepack by @greg-at-moderne in [#8071](https://github.com/openrewrite/rewrite/pull/8071)
* JavaScript: first prefer the `npm` next to the current `node` by @greg-at-moderne in [#8072](https://github.com/openrewrite/rewrite/pull/8072)
* JavaScript: close PackageManagerExtension's pnpm stdin by @greg-at-moderne in [#8074](https://github.com/openrewrite/rewrite/pull/8074)
* Python: fix recipe pip install for version upgrades and local-path dependencies by @shanman190 in [#8065](https://github.com/openrewrite/rewrite/pull/8065)
* Fix WrappingAndBracesVisitor crash for try-with-resources ChopIfTooLong by @timtebeek in [#8077](https://github.com/openrewrite/rewrite/pull/8077)
* Record documentation-comment reference packages in `TypesInUse` by @knutwannheden in [#8078](https://github.com/openrewrite/rewrite/pull/8078)
* Scala: fix parsing of braces instead of parens in for loop by @greg-at-moderne in [#8076](https://github.com/openrewrite/rewrite/pull/8076)
* Don't inject @c/@ref identity metadata into plain Maps over RPC by @jkschneider in [#8083](https://github.com/openrewrite/rewrite/pull/8083)
* Add `engineInstallDir` seam to `PythonRewriteRpc` by @shanman190 in [#8084](https://github.com/openrewrite/rewrite/pull/8084)

#### [rewrite 8.85.2](https://github.com/openrewrite/rewrite/releases/tag/v8.85.2)

* Avoid streams in `Validated` iteration paths by @knutwannheden in [#8055](https://github.com/openrewrite/rewrite/pull/8055)
* Exact-match fast path for `DependencyMatcher` by @knutwannheden in [#8059](https://github.com/openrewrite/rewrite/pull/8059)
* Cursor-free shared `PackageNameUtils` for package-name access by @knutwannheden in [#8057](https://github.com/openrewrite/rewrite/pull/8057)
* Fix withToolingApi projectDir for multi-module builds by @Jenson3210 in [#8060](https://github.com/openrewrite/rewrite/pull/8060)
* Replace stream with plain loop in `TypeTable.Reader.parseTsvAndProcess()` by @knutwannheden in [#8063](https://github.com/openrewrite/rewrite/pull/8063)
* Slim Python and C# RPC server runtime dependencies by @jkschneider in [#8064](https://github.com/openrewrite/rewrite/pull/8064)
* Skip unreachable Maven repositories after first connection failure by @knutwannheden in [#8032](https://github.com/openrewrite/rewrite/pull/8032)

#### [rewrite 8.85.1](https://github.com/openrewrite/rewrite/releases/tag/v8.85.1)

* Groovy: parse try-with-resources without a catch block by @timtebeek in [#8042](https://github.com/openrewrite/rewrite/pull/8042)
* Fix charset misdetection causing UnmappableCharacterException for CJK… by @XiaoSK in [#7651](https://github.com/openrewrite/rewrite/pull/7651)
* Scala: fix parsing of `asinstanceof` followed by a newline by @greg-at-moderne in [#8041](https://github.com/openrewrite/rewrite/pull/8041)
* Go: retry fetching the artifact directly from GitHub if proxy.golang.… by @greg-at-moderne in [#8044](https://github.com/openrewrite/rewrite/pull/8044)
* Add TypeUtils.isOfTypeIgnoringGenerics for matching invocations to declarations by @timtebeek in [#8035](https://github.com/openrewrite/rewrite/pull/8035)
* Resolve plugin marker current version from buildscript classpath by @steve-aom-elliott in [#8045](https://github.com/openrewrite/rewrite/pull/8045)
* Answer `delegatesTo` on a `PrepareRecipe` marketplace miss in all RPC servers by @knutwannheden in [#8050](https://github.com/openrewrite/rewrite/pull/8050)
* Optimize `RecipeStack` to eliminate per-node recipe-path copying by @knutwannheden in [#8049](https://github.com/openrewrite/rewrite/pull/8049)
* Groovy: added suppport for !instanceof by @gtiwari333 in [#8047](https://github.com/openrewrite/rewrite/pull/8047)
* Groovy: fix IndexOutOfBoundsException when recipe adds @Annotation to a method in anonymous class by @gtiwari333 in [#8048](https://github.com/openrewrite/rewrite/pull/8048)
* Memoize `Semver.validate()` to cut regex CPU during recipe runs by @knutwannheden in [#8051](https://github.com/openrewrite/rewrite/pull/8051)
* Speed up `ChangeType` precondition by gating the definition scan by @knutwannheden in [#8052](https://github.com/openrewrite/rewrite/pull/8052)
* Fix SpacesStyle annotationArrayInitializerLeftBrace for annotation array initializers by @timtebeek in [#8054](https://github.com/openrewrite/rewrite/pull/8054)

#### [rewrite-all 1.27.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.27.0)

* Keep LanguageComposition classification when line counting fails by @timtebeek in [#45](https://github.com/openrewrite/rewrite-all/pull/45)

#### [rewrite-apache 2.27.2](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.27.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-cobol 2.20.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.20.0)

* Stop exposing the ANTLR4 codegen tool as a runtime dependency by @shanman190 in [#155](https://github.com/moderneinc/rewrite-cobol/pull/155)
* Expand external SYSIN/SYSTSIN .prm members into the JCL LST by @bmuschko in [#154](https://github.com/moderneinc/rewrite-cobol/pull/154)

#### [rewrite-codemods 0.27.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.27.0)

* chore: update @ui5/linter from 1.20.7 to 1.23.0 by @flovogt in [#67](https://github.com/moderneinc/rewrite-codemods/pull/67)

#### [rewrite-cucumber-jvm 2.12.2](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.12.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.22.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.22.0)

* Add recipes to migrate from LaunchDarkly to OpenFeature by @timtebeek in [#68](https://github.com/openrewrite/rewrite-feature-flags/pull/68)

#### [rewrite-github-actions 3.26.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.26.0)

* Preserve SHA-pinned actions in ChangeAction/ChangeActionVersion via opt-in oldSha by @MBoegers in [#199](https://github.com/openrewrite/rewrite-github-actions/pull/199)
* UpgradeOfficialGitHubActions recipe by @greg-at-moderne in [#201](https://github.com/openrewrite/rewrite-github-actions/pull/201)

#### [rewrite-gitlab 0.23.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.23.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.23.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.23.0)

* Expect hibernate-validator 8.0.4.Final in HibernateValidator80Test by @timtebeek in [#89](https://github.com/openrewrite/rewrite-hibernate/pull/89)

#### [rewrite-jackson 1.26.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.26.0)

* Rename JsonNode `textValue()` to `stringValue()` instead of `asString()` by @timtebeek in [#145](https://github.com/openrewrite/rewrite-jackson/pull/145)
* Fix RemoveRedundantFeatureFlags deleting parenthesized builder chains by @timtebeek in [#148](https://github.com/openrewrite/rewrite-jackson/pull/148)
* Fix `@JsonSerialize(include = …)` migration across Jackson 2 → 3 by @steve-aom-elliott in [#149](https://github.com/openrewrite/rewrite-jackson/pull/149)
* Migrate `ObjectMapper.readValue(URL, …)` to use `URL.openStream()` by @steve-aom-elliott in [#150](https://github.com/openrewrite/rewrite-jackson/pull/150)

#### [rewrite-java-dependencies 1.57.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.57.0)

* Cache delegate recipes per recipe instance to avoid repeated construction by @knutwannheden in [#184](https://github.com/openrewrite/rewrite-java-dependencies/pull/184)
* Add software.amazon.ion:ion-java -> com.amazon.ion:ion-java relocation by @timtebeek in [#185](https://github.com/openrewrite/rewrite-java-dependencies/pull/185)
* Update findRelocatedIonJava test for new relocation context by @timtebeek in [#186](https://github.com/openrewrite/rewrite-java-dependencies/pull/186)

#### [rewrite-jenkins 0.36.2](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.36.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.9.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.9.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.24.2](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.24.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.29.2](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.29.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-maven-plugin 6.43.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.43.0)

* Always parse non-project resources by @timtebeek in [#1168](https://github.com/openrewrite/rewrite-maven-plugin/pull/1168)
* Tolerate Develocity remote build cache warnings in BasicIT by @timtebeek in [#1171](https://github.com/openrewrite/rewrite-maven-plugin/pull/1171)

#### [rewrite-micrometer 0.29.2](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.29.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.34.3](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.34.3)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.39.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.39.0)

* Make ExtractExplicitConstructorInvocationArguments templates context-free by @knutwannheden in [#1140](https://github.com/openrewrite/rewrite-migrate-java/pull/1140)
* Convert Javadoc `<br>` tags to Markdown line breaks by @timtebeek in [#1142](https://github.com/openrewrite/rewrite-migrate-java/pull/1142)
* Preserve angle brackets when converting `@param <T>` to Markdown by @timtebeek in [#1141](https://github.com/openrewrite/rewrite-migrate-java/pull/1141)
* Fix JavadocToMarkdown's handling of varargs and JDKs newer than the bytecode source/target compatibility by @sambsnyd in [#1143](https://github.com/openrewrite/rewrite-migrate-java/pull/1143)
* Move ReplaceUnusedVariablesWithUnderscore to Java best practices by @timtebeek in [#1144](https://github.com/openrewrite/rewrite-migrate-java/pull/1144)
* Extend Use\{List,Set,Map\}Of to recognise prose-statement chains by @steve-aom-elliott in [#1145](https://github.com/openrewrite/rewrite-migrate-java/pull/1145)
* Skip `UseMapOf` when the anonymous `HashMap` is assigned to a concrete `HashMap` variable by @timtebeek in [#1149](https://github.com/openrewrite/rewrite-migrate-java/pull/1149)
* Fix jakarta.enterprise.concurrent-api version for EE9 and EE10 by @evie-lau in [#1152](https://github.com/openrewrite/rewrite-migrate-java/pull/1152)
* Add recipe to replace jakarta jws-api with ws-api in EE10 by @evie-lau in [#1151](https://github.com/openrewrite/rewrite-migrate-java/pull/1151)
* Upgrade maven-ejb-plugin alongside jakarta.ejb-api by @evie-lau in [#1155](https://github.com/openrewrite/rewrite-migrate-java/pull/1155)
* Upgrade maven-ear-plugin for ee9 and ee11 by @evie-lau in [#1156](https://github.com/openrewrite/rewrite-migrate-java/pull/1156)

#### [rewrite-migrate-java 3.38.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.38.0)

* use . instead # for FQN link in Markdown javadoc by @barbulescu in [#1134](https://github.com/openrewrite/rewrite-migrate-java/pull/1134)
* Explain why Kotlin modules are capped at Java 24 during Java 25 migration by @timtebeek in [#1137](https://github.com/openrewrite/rewrite-migrate-java/pull/1137)
* Preserve `@{argLine}` in AddSurefireFailsafeArgLine for JaCoCo coverage by @timtebeek in [#1138](https://github.com/openrewrite/rewrite-migrate-java/pull/1138)
* Add recipe to extract complex explicit constructor invocation arguments (JEP 513) by @timtebeek in [#1135](https://github.com/openrewrite/rewrite-migrate-java/pull/1135)

#### [rewrite-netty 0.10.2](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.10.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.23.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.23.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.32.2](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.32.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.10](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.10)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.0.2](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.0.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 1.0.1](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.0.1)

* Stream data table rows into context files and render each context once by @krlittle in [#20](https://github.com/openrewrite/rewrite-prethink/pull/20)

#### [rewrite-prethink 1.0.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v1.0.0)

* Generate ExportContext CSV placeholders in cycle 1, fill them in cycle 2 by @jkschneider in [#24](https://github.com/openrewrite/rewrite-prethink/pull/24)

#### [rewrite-quarkus 2.33.2](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.33.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.27.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.27.0)

* Avoid renaming ExecutionContext parameter when it would shadow an outer scope by @timtebeek in [#78](https://github.com/openrewrite/rewrite-rewrite/pull/78)

#### [rewrite-spring 6.34.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.34.0)

* Set resolvable 3.1.x version when migrating thymeleaf dependencies to Spring Boot 3 by @timtebeek in [#1042](https://github.com/openrewrite/rewrite-spring/pull/1042)
* Upgrade JobRunr to 8.x when migrating to Spring Boot 4 by @timtebeek in [#1044](https://github.com/openrewrite/rewrite-spring/pull/1044)
* Fix AddSpringProperty duplicating flattened YAML keys by @timtebeek in [#1045](https://github.com/openrewrite/rewrite-spring/pull/1045)
* Don't re-migrate already-migrated Spring Cloud Gateway properties by @timtebeek in [#1048](https://github.com/openrewrite/rewrite-spring/pull/1048)
* Route TestEntityManager types to spring-boot-jpa-test package in SB 4.0 migration by @steve-aom-elliott in [#1049](https://github.com/openrewrite/rewrite-spring/pull/1049)

#### [rewrite-spring-to-quarkus 0.10.2](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.10.2)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.38.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.38.0)

* Fix `UseTryWithResources` moving resource out of scope for catch block by @timtebeek in [#921](https://github.com/openrewrite/rewrite-static-analysis/pull/921)
* Fix `MinimumSwitchCases` crash on Java 21 sealed-interface pattern switch by @timtebeek in [#922](https://github.com/openrewrite/rewrite-static-analysis/pull/922)
* Fix RemoveUnusedPrivateMethods deleting methods called with raw collection arguments by @habiibullahm in [#898](https://github.com/openrewrite/rewrite-static-analysis/pull/898)
* Add UseStringCaseInsensitiveOrder by @steve-aom-elliott in [#923](https://github.com/openrewrite/rewrite-static-analysis/pull/923)
* Add 7 cross-language code quality recipes by @jkschneider in [#853](https://github.com/openrewrite/rewrite-static-analysis/pull/853)
* Fix `RemoveRedundantTypeCast` removing cast that gives a `var` lambda its target type by @timtebeek in [#925](https://github.com/openrewrite/rewrite-static-analysis/pull/925)
* Tests for Kotlin, Groovy, TS for cross-language code quality recipes by @greg-at-moderne in [#928](https://github.com/openrewrite/rewrite-static-analysis/pull/928)
* Add RemoveUnreachableMultiCatchAlternative by @steve-aom-elliott in [#926](https://github.com/openrewrite/rewrite-static-analysis/pull/926)
* Use unnamed variable for unused try-with-resources resource on Java 21+ by @timtebeek in [#930](https://github.com/openrewrite/rewrite-static-analysis/pull/930)

#### [rewrite-templating 1.41.10](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.10)

* OpenRewrite v8.86.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.41.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.41.0)

* Keep `mockStatic` import in `CleanupMockitoImports` when type info is incomplete by @timtebeek in [#1047](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1047)

#### [rewrite-testing-frameworks 3.40.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.40.0)

* TestNgToAssertj: emit a static import for assertThat by @timtebeek in [#1033](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1033)
* Add SimplifyHasSizeFromIsEqualToAssertion recipe by @timtebeek in [#1034](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1034)
* Refactor assertThat(x instanceof Type).isTrue() to assertThat(x).isInstanceOf(Type.class) by @timtebeek in [#1035](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1035)
* Converge AssertJ isSameAs/isNotSameAs(0|1) within a single run by @timtebeek in [#1036](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1036)
* Simplify AssertJ hasSize(0) to isEmpty() for Iterable by @timtebeek in [#1037](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1037)
* Fix isSameAs(null) compile error from null reference comparisons by @timtebeek in [#1038](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1038)
* Cover commented AssertJ tests: array length, Comparable & BigDecimal compareTo by @timtebeek in [#1039](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1039)
* Recognize meta-annotated test methods in TestsShouldNotBePublic by @timtebeek in [#1040](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1040)
* Surface implausible JUnit `@Timeout` values by rewriting them to minutes by @timtebeek in [#1041](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1041)
* Decompose `assertThat(a && b).isTrue()` into separate assertions by @timtebeek in [#1042](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1042)
* Skip JUnit 4 lifecycle annotation when Jupiter equivalent already present by @timtebeek in [#1043](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1043)
* Convert `assertThrows` with an `Executable` variable by @timtebeek in [#1046](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1046)

#### [rewrite-testing-frameworks 3.39.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.39.0)

* Add `PowerMockWhiteboxGetFieldToJavaReflection` recipe by @MBoegers in [#1025](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1025)
* Add `PowerMockWhiteboxGetMethodToJavaReflection` recipe by @MBoegers in [#1026](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1026)
* Add `PowerMockWhiteboxInvokeConstructorToJavaReflection` recipe by @MBoegers in [#1027](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1027)
* Expand TestNG to AssertJ assertion coverage by @juherr in [#1028](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1028)
* Flag un-migratable PowerMock powermock-reflect usage with a comment by @MBoegers in [#1016](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1016)

#### [rewrite-third-party 0.41.4](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.41.4)

* Shade AWS SDK supporting modules into the fat jar by @timtebeek in [#82](https://github.com/openrewrite/rewrite-third-party/pull/82)

#### [rewrite-third-party 0.41.3](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.41.3)

* Provided scope for shaded jars by @greg-at-moderne in [#81](https://github.com/openrewrite/rewrite-third-party/pull/81)

#### [rewrite-third-party 0.41.2](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.41.2)

* Pin org.axonframework to 4.+ by @greg-at-moderne in [#80](https://github.com/openrewrite/rewrite-third-party/pull/80)

## [rewrite-recipe-bom 3.33.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.33.0)

Released on June 17, 2026, with OpenRewrite 8.85.0.

#### [rewrite 8.85.0](https://github.com/openrewrite/rewrite/releases/tag/v8.85.0)

* Go: enforce proper whitespace attachment in all rewriteRun tests by @greg-at-moderne in [#7977](https://github.com/openrewrite/rewrite/pull/7977)
* Scala: don't drop the final modifier for objects by @greg-at-moderne in [#7978](https://github.com/openrewrite/rewrite/pull/7978)
* Scala: add typeParameters for extension methods by @greg-at-moderne in [#7976](https://github.com/openrewrite/rewrite/pull/7976)
* Scala: fix parsing of `summon[Type]` by @greg-at-moderne in [#7981](https://github.com/openrewrite/rewrite/pull/7981)
* Scala: fix parsing of union type literals by @greg-at-moderne in [#7975](https://github.com/openrewrite/rewrite/pull/7975)
* Scala: fix braceless extension methods by @greg-at-moderne in [#7979](https://github.com/openrewrite/rewrite/pull/7979)
* Scala: fix parsing of procedure-syntax setter by @greg-at-moderne in [#7982](https://github.com/openrewrite/rewrite/pull/7982)
* Python: fix RPC placeholder construction broken by id coercion by @knutwannheden in [#7983](https://github.com/openrewrite/rewrite/pull/7983)
* Python: remove stale workspace directories blocking rebuilds by @knutwannheden in [#7984](https://github.com/openrewrite/rewrite/pull/7984)
* Python: upgrade to ty/ty-types 0.0.49 and drop stale suppressions by @knutwannheden in [#7985](https://github.com/openrewrite/rewrite/pull/7985)
* Scala: enforce args constructor is present for LST elements by @greg-at-moderne in [#7991](https://github.com/openrewrite/rewrite/pull/7991)
* Scala: fix parsing @throws[Exception] annotations by @greg-at-moderne in [#7992](https://github.com/openrewrite/rewrite/pull/7992)
* Scala: S.ConstructorInvocation type tree by @greg-at-moderne in [#7990](https://github.com/openrewrite/rewrite/pull/7990)
* Scala: fix parsing of curried anonymous class by @greg-at-moderne in [#7997](https://github.com/openrewrite/rewrite/pull/7997)
* Scala: fix parsing of intersection and union tests with & and | by @greg-at-moderne in [#7998](https://github.com/openrewrite/rewrite/pull/7998)
* Fix `ChangeMethodInvocationReturnType` changing variable type for nested matches by @timtebeek in [#7993](https://github.com/openrewrite/rewrite/pull/7993)
* Gradle 9: recipes for findAll→matching (9.4) and current-project project() notation (9.3) by @timtebeek in [#7989](https://github.com/openrewrite/rewrite/pull/7989)
* Add ModerneWebsiteExampleTest: real LST type-attribution example by @jkschneider in [#8001](https://github.com/openrewrite/rewrite/pull/8001)
* Python: Populate JavaType.Class members for classes by @knutwannheden in [#8000](https://github.com/openrewrite/rewrite/pull/8000)
* Fix Java 25 Javadoc losing space before `//` comments in `<pre>` blocks by @barbulescu in [#8003](https://github.com/openrewrite/rewrite/pull/8003)
* Add unit test for junit-bom upgrade by @sullis in [#7957](https://github.com/openrewrite/rewrite/pull/7957)
* Fix Java 25 parser treating named classes as unnamed when a bare `;` precedes the class declaration by @barbulescu in [#8008](https://github.com/openrewrite/rewrite/pull/8008)
* C#: pass --no-build to dotnet run so build output can't corrupt the RPC pipe by @timtebeek in [#7996](https://github.com/openrewrite/rewrite/pull/7996)
* Re-enabling some tests in rewrite-gradle by @greg-at-moderne in [#7999](https://github.com/openrewrite/rewrite/pull/7999)
* Fix `TypeNameMatcher` `..*` followed by a suffix matching every name by @knutwannheden in [#8012](https://github.com/openrewrite/rewrite/pull/8012)
* Add mockk to IsLikelyTest by @sullis in [#8013](https://github.com/openrewrite/rewrite/pull/8013)
* C#: REWRITE_DOTNET_RPC_SERVER env-var fallback + symlink-safe project references by @macsux in [#8017](https://github.com/openrewrite/rewrite/pull/8017)
* Publish NPM snapshot for scheduled CI runs too by @greg-at-moderne in [#8021](https://github.com/openrewrite/rewrite/pull/8021)
* Cache parsed versions in semver selection to cut Matcher allocation by @jkschneider in [#8019](https://github.com/openrewrite/rewrite/pull/8019)
* Scala: fix parsing of Array[Type]\(\) calls by @greg-at-moderne in [#8023](https://github.com/openrewrite/rewrite/pull/8023)
* Scala: fix parsing of higher-order type parameters by @greg-at-moderne in [#8022](https://github.com/openrewrite/rewrite/pull/8022)
* Scala: introduce `S.Try` for complicated cases of try-catch by @greg-at-moderne in [#8024](https://github.com/openrewrite/rewrite/pull/8024)
* Scala: fix parsing of function type references `A => B` by @greg-at-moderne in [#8025](https://github.com/openrewrite/rewrite/pull/8025)
* Optimize `Markers.findFirst` to avoid stream allocation by @knutwannheden in [#8028](https://github.com/openrewrite/rewrite/pull/8028)
* Build `J.Assignment` directly in `UsePropertyAssignmentSyntax` by @steve-aom-elliott in [#8016](https://github.com/openrewrite/rewrite/pull/8016)
* Cache DataTable column descriptors per row type by @knutwannheden in [#8031](https://github.com/openrewrite/rewrite/pull/8031)
* Optimize TreeVisitor.visit() hot path: keep it inlinable and cache reflective type resolution by @knutwannheden in [#8033](https://github.com/openrewrite/rewrite/pull/8033)
* Cache mixin discovery in TreeVisitorAdapter to avoid per-node classpath scan by @knutwannheden in [#8029](https://github.com/openrewrite/rewrite/pull/8029)
* C#: harden RPC server for #nullable directives, dependency recipe activation, and NuGet-sourced files by @macsux in [#8020](https://github.com/openrewrite/rewrite/pull/8020)
* rewrite-csharp: add LOCAL_NUGET_FEED env var and skip repo nuget.config on tool install by @macsux in [#8018](https://github.com/openrewrite/rewrite/pull/8018)
* Reduce allocation in ResolvedDependency.findDependency/findDependencies by @jkschneider in [#8030](https://github.com/openrewrite/rewrite/pull/8030)
* Delete OWASP suppressions file when no suppressions remain by @timtebeek in [#7995](https://github.com/openrewrite/rewrite/pull/7995)
* Preserve trailing comments when removing an import by @MBoegers in [#8010](https://github.com/openrewrite/rewrite/pull/8010)
* Groovy: fix parser failure @CompileDynamic  by @gtiwari333 in [#8037](https://github.com/openrewrite/rewrite/pull/8037)
* Scala: fix parsing of qualified this by @greg-at-moderne in [#8027](https://github.com/openrewrite/rewrite/pull/8027)
* Fix shortening java.lang annotations by @sakshichitnis27 in [#8009](https://github.com/openrewrite/rewrite/pull/8009)
* Groovy: fix parsing of groovy code that has default method with 'this' keyword by @gtiwari333 in [#8038](https://github.com/openrewrite/rewrite/pull/8038)
* Groovy: Added visitor for do-while loops by @gtiwari333 in [#8036](https://github.com/openrewrite/rewrite/pull/8036)

#### [rewrite 8.84.9](https://github.com/openrewrite/rewrite/releases/tag/v8.84.9)

* JS RPC: accept all engines shapes that npm accepts by @jkschneider in [#7971](https://github.com/openrewrite/rewrite/pull/7971)
* Python: allow a composite's recipe_list to reference a recipe over RPC by @knutwannheden in [#7956](https://github.com/openrewrite/rewrite/pull/7956)
* Python: accept UUID ids in LST node, Marker, and Markers constructors by @knutwannheden in [#7972](https://github.com/openrewrite/rewrite/pull/7972)
* JavaScript: share active RewriteRpc connection across module copies (#7968) by @timtebeek in [#7969](https://github.com/openrewrite/rewrite/pull/7969)
* Guard against null requested managed dependency in isManagedDependencyTag by @timtebeek in [#7973](https://github.com/openrewrite/rewrite/pull/7973)

#### [rewrite 8.84.8](https://github.com/openrewrite/rewrite/releases/tag/v8.84.8)

* Scala: fix prefix handling in partial function applications by @greg-at-moderne in [#7960](https://github.com/openrewrite/rewrite/pull/7960)
* Scala: fix for space between curried parameter lists in method declar… by @greg-at-moderne in [#7959](https://github.com/openrewrite/rewrite/pull/7959)
* Scala: fix parsing of alternate matching pattern in case binding by @greg-at-moderne in [#7961](https://github.com/openrewrite/rewrite/pull/7961)
* Go: add Go.DeclarationBlock to the type registry by @greg-at-moderne in [#7962](https://github.com/openrewrite/rewrite/pull/7962)
* Scala: fix for double-dollar, i.e. dollar escaping in String interpol… by @greg-at-moderne in [#7963](https://github.com/openrewrite/rewrite/pull/7963)
* Go: Add GetSourcePath() and use it in preconditions by @greg-at-moderne in [#7964](https://github.com/openrewrite/rewrite/pull/7964)
* Scala: handle dotted match syntax by @greg-at-moderne in [#7965](https://github.com/openrewrite/rewrite/pull/7965)
* Scala: fix parsing of trailing comments in parameter lists by @greg-at-moderne in [#7966](https://github.com/openrewrite/rewrite/pull/7966)
* Docker: fix stale alpine suggestion in FindEndOfLifeImagesTest by @timtebeek in [#7967](https://github.com/openrewrite/rewrite/pull/7967)
* Python: reduce LST memory footprint (__slots__, shared empty lists, compact ids) by @knutwannheden in [#7958](https://github.com/openrewrite/rewrite/pull/7958)
* Use JavaSourceFile, not J.CompilationUnit, when a Java recipe only needs file-level data by @jkschneider in [#7970](https://github.com/openrewrite/rewrite/pull/7970)

#### [rewrite 8.84.7](https://github.com/openrewrite/rewrite/releases/tag/v8.84.7)

* Go: Make sure `go.mod` files when parsed have relative path, not absolute by @greg-at-moderne in [#7952](https://github.com/openrewrite/rewrite/pull/7952)
* Go: enforcing whitespace attachment to the outermost element by @greg-at-moderne in [#7953](https://github.com/openrewrite/rewrite/pull/7953)
* Upgrade bom to the latest patch upgrades to the latest release by @BoykoAlex in [#7942](https://github.com/openrewrite/rewrite/pull/7942)
* Go: fix GoMod LST to descend from Tree by @greg-at-moderne in [#7955](https://github.com/openrewrite/rewrite/pull/7955)
* rewrite-kotlin: stop mapped-type fallback shadowing real stdlib extensions by @timtebeek in [#7954](https://github.com/openrewrite/rewrite/pull/7954)

#### [rewrite 8.84.6](https://github.com/openrewrite/rewrite/releases/tag/v8.84.6)

* Go: remove LiteralKind field by @greg-at-moderne in [#7943](https://github.com/openrewrite/rewrite/pull/7943)
* Go: clean up Go's copy of `ForEachControl` to mimic the Java one by @greg-at-moderne in [#7944](https://github.com/openrewrite/rewrite/pull/7944)
* Go: add isInt() helper by @greg-at-moderne in [#7947](https://github.com/openrewrite/rewrite/pull/7947)
* Go: remove excessive type fields in LST by @greg-at-moderne in [#7945](https://github.com/openrewrite/rewrite/pull/7945)
* Scala: improvement for parsing procedural syntax of methods by @greg-at-moderne in [#7949](https://github.com/openrewrite/rewrite/pull/7949)
* Scala: fix parsing of given binding within for comprehension by @greg-at-moderne in [#7948](https://github.com/openrewrite/rewrite/pull/7948)
* Scala: fix parsing of multiple anonymous using parameters by @greg-at-moderne in [#7946](https://github.com/openrewrite/rewrite/pull/7946)
* Scala: fix parsing annotations with fully qualified name by @greg-at-moderne in [#7950](https://github.com/openrewrite/rewrite/pull/7950)

#### [rewrite 8.84.5](https://github.com/openrewrite/rewrite/releases/tag/v8.84.5)

* Use canonical source file type in the RPC edit-batch gate by @knutwannheden in [#7929](https://github.com/openrewrite/rewrite/pull/7929)
* Python: accept a caller-provisioned dependency path for `ty` type attribution by @knutwannheden in [#7930](https://github.com/openrewrite/rewrite/pull/7930)
* Python: share the ty-types type registry across a project parse by @knutwannheden in [#7932](https://github.com/openrewrite/rewrite/pull/7932)
* Python: distinguish `type[X]` class objects from instances in ty attribution by @knutwannheden in [#7933](https://github.com/openrewrite/rewrite/pull/7933)
* Go: fix RPC-handling of keyless `for` by @greg-at-moderne in [#7934](https://github.com/openrewrite/rewrite/pull/7934)
* Go: introduce Go.Return for multi-value returns by @greg-at-moderne in [#7936](https://github.com/openrewrite/rewrite/pull/7936)
* Go: introduce Go.MethodDeclaration to handle receivers by @greg-at-moderne in [#7939](https://github.com/openrewrite/rewrite/pull/7939)
* Go: introduce Go.DeclarationBlock to hold blocked variable declarations by @greg-at-moderne in [#7938](https://github.com/openrewrite/rewrite/pull/7938)
* Go: use typeParameters in method invocations by @greg-at-moderne in [#7937](https://github.com/openrewrite/rewrite/pull/7937)
* Go: Go.ArrayType for array types with declared length by @greg-at-moderne in [#7941](https://github.com/openrewrite/rewrite/pull/7941)

#### [rewrite 8.84.4](https://github.com/openrewrite/rewrite/releases/tag/v8.84.4)

* Python: regenerate stale type stubs and fix typing imports in stub generator by @knutwannheden in [#7927](https://github.com/openrewrite/rewrite/pull/7927)
* Fix Windows portability in Go/Python recipe install (+ PEP 440 specifiers) by @shanman190 in [#7928](https://github.com/openrewrite/rewrite/pull/7928)
* Add recipeInstallDir to CSharpRewriteRpc so callers control the recipe project location by @shanman190 in [#7819](https://github.com/openrewrite/rewrite/pull/7819)
* JavaScript: fix npm audit vulnerabilities by @knutwannheden in [#7926](https://github.com/openrewrite/rewrite/pull/7926)
* Add `OneDependencyDeclarationPerStatement` recipe to the Gradle 9 chain by @Jenson3210 in [#7907](https://github.com/openrewrite/rewrite/pull/7907)
* rewrite-xml: support HTML void elements in JSP/HTML parsing by @knutwannheden in [#7906](https://github.com/openrewrite/rewrite/pull/7906)

#### [rewrite 8.84.3](https://github.com/openrewrite/rewrite/releases/tag/v8.84.3)

* GitProvenance: replace the `includeCommitters` boolean with a `CommitHistory` options type by @jkschneider in [#7921](https://github.com/openrewrite/rewrite/pull/7921)
* Python: insert imports in sorted order in `maybe_add_import` by @knutwannheden in [#7922](https://github.com/openrewrite/rewrite/pull/7922)
* rewrite-python: resolve external types in ty attribution by @knutwannheden in [#7923](https://github.com/openrewrite/rewrite/pull/7923)
* Python: handle ty-types 0.0.44 `typeForm` descriptor by @knutwannheden in [#7924](https://github.com/openrewrite/rewrite/pull/7924)
* Python: add TypeUtils-style type comparison helpers by @knutwannheden in [#7925](https://github.com/openrewrite/rewrite/pull/7925)

#### [rewrite 8.84.2](https://github.com/openrewrite/rewrite/releases/tag/v8.84.2)

* Scala: handle parsing String interpolation with a non-empty prefix by @greg-at-moderne in [#7908](https://github.com/openrewrite/rewrite/pull/7908)
* Scala: fix parsing of return types written in parens by @greg-at-moderne in [#7909](https://github.com/openrewrite/rewrite/pull/7909)
* Let callers opt out of the GitProvenance committer-history walk by @knutwannheden in [#7910](https://github.com/openrewrite/rewrite/pull/7910)
* Scala: handle case guards with complex (block) conditions by @greg-at-moderne in [#7913](https://github.com/openrewrite/rewrite/pull/7913)
* Go: make sure go.mod is emitted as GoMod source by @greg-at-moderne in [#7914](https://github.com/openrewrite/rewrite/pull/7914)
* Scala: ScalaSpace class for handling nesting comments by @greg-at-moderne in [#7915](https://github.com/openrewrite/rewrite/pull/7915)
* Scala: fix too optimistic matching of `???` by @greg-at-moderne in [#7916](https://github.com/openrewrite/rewrite/pull/7916)
* Scala: fix spacing before underscore parameter by @greg-at-moderne in [#7912](https://github.com/openrewrite/rewrite/pull/7912)
* rewrite-csharp: rename XmlRecipeActivator to CoreCSharpRecipeActivator and drop example recipes by @macsux in [#7917](https://github.com/openrewrite/rewrite/pull/7917)

#### [rewrite 8.84.1](https://github.com/openrewrite/rewrite/releases/tag/v8.84.1)

* Give the NullSafe marker a Jackson creator so it round-trips by @jkschneider in [#7879](https://github.com/openrewrite/rewrite/pull/7879)
* rewrite-kotlin: extend recipe DSL `rewrite { } to { }` arity from 2 to 12 by @jkschneider in [#7890](https://github.com/openrewrite/rewrite/pull/7890)
* JavaScript: tolerate MethodDeclarations without dimensionsAfterName by @greg-at-moderne in [#7891](https://github.com/openrewrite/rewrite/pull/7891)
* JavaScript: don't try to install RPC recipes by @greg-at-moderne in [#7892](https://github.com/openrewrite/rewrite/pull/7892)
* rewrite-kotlin: re-expose Java instance methods Kotlin's mapped-type customizer hides by @jkschneider in [#7893](https://github.com/openrewrite/rewrite/pull/7893)
* 8.83.5 regression: RocksdbMavenPomCache fails to deserialize stale POM cache entries by @benjaminknauer in [#7887](https://github.com/openrewrite/rewrite/pull/7887)
* npm-publish: also publish for manual `ci` dispatches on main by @knutwannheden in [#7886](https://github.com/openrewrite/rewrite/pull/7886)
* rewrite-kotlin: variadic-by-default matching in the recipe DSL by @jkschneider in [#7895](https://github.com/openrewrite/rewrite/pull/7895)
* C#: decompose CsDocComment.DocComment over RPC via a proper visitor by @macsux in [#7894](https://github.com/openrewrite/rewrite/pull/7894)
* rewrite-csharp: preserve pragma whitespace and modifier-only lambda params by @macsux in [#7896](https://github.com/openrewrite/rewrite/pull/7896)
* Groovy: Disable AST transformations on the classpath that influence the shape of the code  by @gtiwari333 in [#7871](https://github.com/openrewrite/rewrite/pull/7871)
* Gradle: surface the real parse failure instead of an opaque ClassCastException by @jkschneider in [#7898](https://github.com/openrewrite/rewrite/pull/7898)
* Add BackwardCompatibleObjectIdModule so that we can adopt @JsonIdentityInfo annotations without breaking deserialization of old LSTs that lack the ref field. by @sambsnyd in [#7897](https://github.com/openrewrite/rewrite/pull/7897)
* Renew expired OWASP suppressions to 2026-07-01 by @Jenson3210 in [#7899](https://github.com/openrewrite/rewrite/pull/7899)
* C#: Share `JavaType` cache across documents within a project by @knutwannheden in [#7900](https://github.com/openrewrite/rewrite/pull/7900)
* C#: Stream RPC with `System.Text.Json` instead of `Newtonsoft` by @knutwannheden in [#7901](https://github.com/openrewrite/rewrite/pull/7901)
* Build data table descriptors from the cached recipe descriptor by @jkschneider in [#7876](https://github.com/openrewrite/rewrite/pull/7876)
* Set DOTNET_ROOT for the C# RPC apphost from the resolved dotnet by @jkschneider in [#7874](https://github.com/openrewrite/rewrite/pull/7874)
* Groovy: Fix parsing of generated code that contains ternery operator   by @gtiwari333 in [#7859](https://github.com/openrewrite/rewrite/pull/7859)
* C#: Deserialize recipe option values from JsonElement in PrepareRecipe by @knutwannheden in [#7904](https://github.com/openrewrite/rewrite/pull/7904)
* Make MavenPomDownloaderTest hermetic with MockWebServer by @knutwannheden in [#7905](https://github.com/openrewrite/rewrite/pull/7905)
* Groovy: reuse the classpath loader across files and skip the per-file global-transform scan by @knutwannheden in [#7903](https://github.com/openrewrite/rewrite/pull/7903)
* rewrite-csharp: parse with latest SDK by neutralizing global.json pins by @macsux in [#7902](https://github.com/openrewrite/rewrite/pull/7902)

#### [rewrite-all 1.26.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.26.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.27.1](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.27.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-cobol 2.19.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.19.0)

* Recognize .dcl (DCLGEN) files as copybooks for EXEC SQL INCLUDE by @bmuschko in [#152](https://github.com/moderneinc/rewrite-cobol/pull/152)
* Increase default Cobol parser timeout to 10 minutes by @bmuschko in [#153](https://github.com/moderneinc/rewrite-cobol/pull/153)

#### [rewrite-codemods 0.26.1](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.26.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.12.1](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.12.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.21.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.21.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.25.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.25.0)

* Refresh the tibdex app token recipe by @greg-at-moderne in [#194](https://github.com/openrewrite/rewrite-github-actions/pull/194)
* Harden PinGitHubActionsToSha tests against SHA drift by @timtebeek in [#196](https://github.com/openrewrite/rewrite-github-actions/pull/196)

#### [rewrite-gitlab 0.23.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.23.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.35.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.35.0)

* Use Paths.get instead of Path.of in DefaultProjectParserIsExcludedTest by @timtebeek in [#451](https://github.com/openrewrite/rewrite-gradle-plugin/pull/451)

#### [rewrite-hibernate 2.22.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.22.0)

* Handle Hypersistence-utils for Hibernate 7 (see #53) and update it for 6.2 and 6.3 by @DidierLoiseau in [#88](https://github.com/openrewrite/rewrite-hibernate/pull/88)

#### [rewrite-jackson 1.25.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.25.0)

* Run UpgradeJackson_2_3_TypeChanges just before UpgradeJackson_2_3_PackageChanges by @steve-aom-elliott in [#142](https://github.com/openrewrite/rewrite-jackson/pull/142)
* Rename `JsonMappingException.Reference.getFieldName()` to `getPropertyName()` by @steve-aom-elliott in [#143](https://github.com/openrewrite/rewrite-jackson/pull/143)
* Fix JsonFactory rename and migrate JsonFactory setters to builder by @steve-aom-elliott in [#141](https://github.com/openrewrite/rewrite-jackson/pull/141)

#### [rewrite-java-dependencies 1.56.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.56.0)

* Fix RemoveDependency.unlessUsing for multi-module Maven projects by @steve-aom-elliott in [#183](https://github.com/openrewrite/rewrite-java-dependencies/pull/183)

#### [rewrite-jenkins 0.36.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.36.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.9.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.9.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.24.1](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.24.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.29.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.29.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-maven-plugin 6.42.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.42.0)

* Change the MavenPomCache init logic by @greg-at-moderne in [#1164](https://github.com/openrewrite/rewrite-maven-plugin/pull/1164)
* Remove .context files by @timtebeek in [#1165](https://github.com/openrewrite/rewrite-maven-plugin/pull/1165)
* Switch to packages.nuxeo.com in BasicIT by @greg-at-moderne in [#1167](https://github.com/openrewrite/rewrite-maven-plugin/pull/1167)
* Apply configured styles after auto-detected styles; tighten parser visibility by @timtebeek in [#1116](https://github.com/openrewrite/rewrite-maven-plugin/pull/1116)

#### [rewrite-micrometer 0.29.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.29.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.34.2](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.34.2)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.37.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.37.0)

* Align Kotlin jvmTarget with the Java version during UpgradeJavaVersion by @MBoegers in [#1120](https://github.com/openrewrite/rewrite-migrate-java/pull/1120)
* Move instance main methods recipe to JavaBestPractices by @timtebeek in [#1130](https://github.com/openrewrite/rewrite-migrate-java/pull/1130)
* javadoc code tag language is not converted to markdown by @barbulescu in [#1129](https://github.com/openrewrite/rewrite-migrate-java/pull/1129)
* Contribute AddMockitoJavaAgentToMavenSurefirePlugin Recipe by @ryan-hudson in [#1128](https://github.com/openrewrite/rewrite-migrate-java/pull/1128)
* Preserve significant trailing space in UseTextBlocks (#1132) by @timtebeek in [#1133](https://github.com/openrewrite/rewrite-migrate-java/pull/1133)

#### [rewrite-netty 0.10.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.10.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.23.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.23.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.32.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.32.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.9](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.9)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.7.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.7.0)

* Improve description for GenerateCalmArchitecture recipe by @mike-solomon in [#22](https://github.com/openrewrite/rewrite-prethink/pull/22)

#### [rewrite-quarkus 2.33.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.33.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.26.1](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.26.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-spring 6.33.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.33.0)

* Preserve generic type parameters in AutowiredFieldIntoConstructorParameterVisitor by @MBoegers in [#1037](https://github.com/openrewrite/rewrite-spring/pull/1037)
* Migrate `CompositeHealth`/`HealthComponent` to Spring Boot 4 descriptor types by @steve-aom-elliott in [#1038](https://github.com/openrewrite/rewrite-spring/pull/1038)
* Avoid uncompilable output when migrating `JobBuilderFactory`/`StepBuilderFactory` by @steve-aom-elliott in [#1036](https://github.com/openrewrite/rewrite-spring/pull/1036)
* Skip `@AutoConfigureWebTestClient` when `WebTestClient` is built manually by @MBoegers in [#1040](https://github.com/openrewrite/rewrite-spring/pull/1040)

#### [rewrite-spring 6.32.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.32.1)

* Adopt changes in [rewrite v8.84.6](https://github.com/openrewrite/rewrite/releases/tag/v8.84.6)

#### [rewrite-spring-to-quarkus 0.10.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.10.1)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.37.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.37.0)

* Preserve raw supertype cast on parameterized argument in `RemoveRedundantTypeCast` by @timtebeek in [#915](https://github.com/openrewrite/rewrite-static-analysis/pull/915)
* Preserve space when InstanceOfPatternMatch replaces a cast after a keyword by @timtebeek in [#913](https://github.com/openrewrite/rewrite-static-analysis/pull/913)
* `InstanceOfPatternMatch` not to remove double primitive cast by @greg-at-moderne in [#918](https://github.com/openrewrite/rewrite-static-analysis/pull/918)
* Fix UseDiamondOperator throwing array index out of bounds when operating on a varargs method by @sambsnyd in [#919](https://github.com/openrewrite/rewrite-static-analysis/pull/919)
* Fix false positive in `AnnotateNullableParameters` when parameter der… by @stefanodallapalma in [#868](https://github.com/openrewrite/rewrite-static-analysis/pull/868)

#### [rewrite-templating 1.41.9](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.9)

* OpenRewrite v8.85.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.38.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.38.0)

* Don't add MockitoExtension during migration when unsafe (#875) by @timtebeek in [#1017](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1017)
* Add junit-platform-launcher testRuntimeOnly dependency for Gradle during JUnit 6 migration by @timtebeek in [#1018](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1018)
* Migrate removed LocalStack Service enum and getEndpointOverride in Testcontainers 2.x migration by @MBoegers in [#1014](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1014)
* Re-include CloseUnclosedStaticMocks in Mockito1to4Migration by @steve-aom-elliott in [#1019](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1019)
* Update MockWebServer MockResponse test for nested-type render change by @steve-aom-elliott in [#1020](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1020)
* Fix UsesType precondition pattern in KotlinTestMethodsShouldReturnUnit by @timtebeek in [#1022](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1022)
* Support 4-arg Whitebox.setInternalState(target, field, value, Class) by @MBoegers in [#1023](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1023)
* Refactor `PowerMockWhiteboxToJavaReflection` into per-API recipes by @MBoegers in [#1021](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1021)
* Box primitive casts in `Whitebox.getInternalState`/`invokeMethod` reflection by @MBoegers in [#1024](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1024)

#### [rewrite-third-party 0.41.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.41.1)

* Renew expired OWASP suppressions to 2026-07-01 by @Jenson3210 in [#78](https://github.com/openrewrite/rewrite-third-party/pull/78)

#### [rewrite-third-party 0.41.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.41.0)

* Renew expired OWASP suppressions to 2026-07-01 by @Jenson3210 in [#78](https://github.com/openrewrite/rewrite-third-party/pull/78)

## [rewrite-recipe-bom 3.32.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.32.0)

Released on June 3, 2026, with OpenRewrite 8.84.0.

#### [rewrite 8.84.0](https://github.com/openrewrite/rewrite/releases/tag/v8.84.0)

* Go: visitor logic to traverse `go.mod` and test harness by @greg-at-moderne in [#7864](https://github.com/openrewrite/rewrite/pull/7864)
* Scala: add public canonical all-args constructors to 6 S LST types by @knutwannheden in [#7869](https://github.com/openrewrite/rewrite/pull/7869)
* JavaScript: Normalize `@types/<pkg>` to the importable specifier in transitively-resolved type names by @knutwannheden in [#7868](https://github.com/openrewrite/rewrite/pull/7868)
* Return -1 for blank or null Java compatibility without throwing by @timtebeek in [#7872](https://github.com/openrewrite/rewrite/pull/7872)
* Kotlin recipe DSL v2 dispatch: route all-Java bodies to JavaVisitor by @jkschneider in [#7875](https://github.com/openrewrite/rewrite/pull/7875)
* Resolve RPC tree codec by canonical type for SourceFile subclasses by @knutwannheden in [#7873](https://github.com/openrewrite/rewrite/pull/7873)
* Make `AdaptiveRadixTree` stack-safe (iterative search, insert, and copy) by @steve-aom-elliott in [#7878](https://github.com/openrewrite/rewrite/pull/7878)
* Recover the declaring package for bare top-level type names in the TypeScript parser by @knutwannheden in [#7881](https://github.com/openrewrite/rewrite/pull/7881)
* Attribute internal export= namespaces by their importable package name (TypeScript parser) by @knutwannheden in [#7882](https://github.com/openrewrite/rewrite/pull/7882)
* Richer TypeScript type attribution: decorators and type-alias names by @knutwannheden in [#7883](https://github.com/openrewrite/rewrite/pull/7883)
* Break self-referential JavaType.Method attribution cycles via the type cache by @jkschneider in [#7877](https://github.com/openrewrite/rewrite/pull/7877)

#### [rewrite 8.83.7](https://github.com/openrewrite/rewrite/releases/tag/v8.83.7)

* Groovy: parse untyped parameters whose names start with a modifier keyword by @knutwannheden in [#7866](https://github.com/openrewrite/rewrite/pull/7866)
* Exclude synthetic parameters from constructor parameterNames in `JavaReflectionTypeMapping` by @knutwannheden in [#7867](https://github.com/openrewrite/rewrite/pull/7867)

#### [rewrite 8.83.6](https://github.com/openrewrite/rewrite/releases/tag/v8.83.6)

* Scala: fix parsing of indented tuple-pattern generator by @greg-at-moderne in [#7840](https://github.com/openrewrite/rewrite/pull/7840)
* Go: fix missing visiting of MultiAssignments by @greg-at-moderne in [#7846](https://github.com/openrewrite/rewrite/pull/7846)
* Scala: fix parsing of type expressions by @greg-at-moderne in [#7847](https://github.com/openrewrite/rewrite/pull/7847)
* .gitignore .kotlin/ by @greg-at-moderne in [#7848](https://github.com/openrewrite/rewrite/pull/7848)
* Go: fix template comparator to use the new Go-specific operators by @greg-at-moderne in [#7849](https://github.com/openrewrite/rewrite/pull/7849)
* Go: adding a lot of missing visits in the visitor by @greg-at-moderne in [#7851](https://github.com/openrewrite/rewrite/pull/7851)
* Scala: Introduce `S.Binding` by @greg-at-moderne in [#7852](https://github.com/openrewrite/rewrite/pull/7852)
* Scala: parse by-name types into S.FunctionType by @greg-at-moderne in [#7854](https://github.com/openrewrite/rewrite/pull/7854)
* Scala: add support for interpolated strings by @greg-at-moderne in [#7853](https://github.com/openrewrite/rewrite/pull/7853)
* Scala: parse classOf[Something] as MethodInvocation by @greg-at-moderne in [#7857](https://github.com/openrewrite/rewrite/pull/7857)
* Fix implement interface double space by @benjaminknauer in [#7856](https://github.com/openrewrite/rewrite/pull/7856)
* Scala: fix parsing of array types by @greg-at-moderne in [#7860](https://github.com/openrewrite/rewrite/pull/7860)
* Go: parse `go.mod` files by @greg-at-moderne in [#7862](https://github.com/openrewrite/rewrite/pull/7862)
* Go: add `MaybeAddImport` convenience function by @greg-at-moderne in [#7855](https://github.com/openrewrite/rewrite/pull/7855)
* Replace shallow class mapping in parsers with proper type attribution by @jkschneider in [#7861](https://github.com/openrewrite/rewrite/pull/7861)
* Enable RewriteTest to use modw as a test runner by @sambsnyd in [#7863](https://github.com/openrewrite/rewrite/pull/7863)

#### [rewrite 8.83.5](https://github.com/openrewrite/rewrite/releases/tag/v8.83.5)

* Go: Fenced Marker Printer only to print SearchResults and Markup by @greg-at-moderne in [#7812](https://github.com/openrewrite/rewrite/pull/7812)
* JavaScript: Java port of dependency-management recipes + resolved-deps overlay by @knutwannheden in [#7795](https://github.com/openrewrite/rewrite/pull/7795)
* Regenerate recipes.csv for all modules (alphabetical sort) by @knutwannheden in [#7816](https://github.com/openrewrite/rewrite/pull/7816)
* Fix StackOverflowError in Kotlin parser for deeply nested binary expressions by @zieka in [#7083](https://github.com/openrewrite/rewrite/pull/7083)
* Fix main CI: exclude build-time gradle-api jar from tooling-API test manifest by @timtebeek in [#7818](https://github.com/openrewrite/rewrite/pull/7818)
* Keep a space between a leading annotation and a Kotlin variable name by @MBoegers in [#7817](https://github.com/openrewrite/rewrite/pull/7817)
* Fix C-style array method declaration parsing by @Jenson3210 in [#6992](https://github.com/openrewrite/rewrite/pull/6992)
* Gradle: sync `version { strictly(...) }` constraints when upgrading dependencies by @Jenson3210 in [#7810](https://github.com/openrewrite/rewrite/pull/7810)
* Scala: fix parsing of lambda within `{}` block by @greg-at-moderne in [#7814](https://github.com/openrewrite/rewrite/pull/7814)
* Go: send `dimensionsAfterName` in `MethodDeclaration` RPC codec by @knutwannheden in [#7823](https://github.com/openrewrite/rewrite/pull/7823)
* Go: Fix RPC codec boolean decoding in `ImportBlock` marker by @knutwannheden in [#7822](https://github.com/openrewrite/rewrite/pull/7822)
* Go: Fix `nil` directive slices in `go.mod` producer by @knutwannheden in [#7821](https://github.com/openrewrite/rewrite/pull/7821)
* Scala: fix parsing of closing parens, introduce positionOfMatchingClose by @greg-at-moderne in [#7825](https://github.com/openrewrite/rewrite/pull/7825)
* Go: Refactor, split into java and golang packages by @greg-at-moderne in [#7827](https://github.com/openrewrite/rewrite/pull/7827)
* Go: break import cycles in `ProjectImporter` to fix stack overflow by @knutwannheden in [#7828](https://github.com/openrewrite/rewrite/pull/7828)
* Scala: fix parsing of a parenthesized expression before a \{\} block by @greg-at-moderne in [#7826](https://github.com/openrewrite/rewrite/pull/7826)
* Go: Add missing `TypeParameters` to MethodDeclarations and TypeDecl by @greg-at-moderne in [#7830](https://github.com/openrewrite/rewrite/pull/7830)
* Support proto2 groups in ProtoParser by @knutwannheden in [#7829](https://github.com/openrewrite/rewrite/pull/7829)
* Go: Map type-set union constraints to rich `Go.Union` / `Go.UnderlyingType` by @knutwannheden in [#7824](https://github.com/openrewrite/rewrite/pull/7824)
* Fix YAML parser round-trip for block scalars and nested template placeholders by @knutwannheden in [#7832](https://github.com/openrewrite/rewrite/pull/7832)
* Scala: fix parsing types with context bounds by @greg-at-moderne in [#7835](https://github.com/openrewrite/rewrite/pull/7835)
* Go: fix `Print` panics from type-inferred RPC padding receive (empty imports, compound-assignment operators) by @knutwannheden in [#7831](https://github.com/openrewrite/rewrite/pull/7831)
* Go: visitor to go into grouped declarations' specs by @greg-at-moderne in [#7820](https://github.com/openrewrite/rewrite/pull/7820)
* Go: collapse receiver `q.Receive` boilerplate via generic `receiveValue` by @knutwannheden in [#7836](https://github.com/openrewrite/rewrite/pull/7836)
* Go: resolve composite recipes' `RecipeList()` children by name by @knutwannheden in [#7837](https://github.com/openrewrite/rewrite/pull/7837)
* Go: fix `Print` panic on pointer-typed `*Container` NO_CHANGE receive (follow-up to #7831) by @knutwannheden in [#7838](https://github.com/openrewrite/rewrite/pull/7838)
* Go: isolate reverse-RPC receive state so a mid-receive panic can't cascade by @knutwannheden in [#7839](https://github.com/openrewrite/rewrite/pull/7839)
* Fix NPE in ProtoParser for fields named after keywords by @knutwannheden in [#7841](https://github.com/openrewrite/rewrite/pull/7841)
* Go: map Go-specific operators to rich Go.* LST nodes so they survive RPC round-trips by @knutwannheden in [#7842](https://github.com/openrewrite/rewrite/pull/7842)
* Type signature, marker, and SPI changes across rewrite-java and rewrite-maven by @jkschneider in [#7845](https://github.com/openrewrite/rewrite/pull/7845)

#### [rewrite 8.83.4](https://github.com/openrewrite/rewrite/releases/tag/v8.83.4)

* Introduce a JavaProject dirtiness registry for dependency-mutation safety by @steve-aom-elliott in [#7460](https://github.com/openrewrite/rewrite/pull/7460)
* Go: don't parse `.moderne/` files by @greg-at-moderne in [#7804](https://github.com/openrewrite/rewrite/pull/7804)
* Fix DOCTYPE continuation indentation in XML TabsAndIndents by @SJvaca30 in [#7805](https://github.com/openrewrite/rewrite/pull/7805)
* Scala: fix parsing of curried constructor calls by @greg-at-moderne in [#7809](https://github.com/openrewrite/rewrite/pull/7809)
* Go: call newObj on CHANGE with nil value by @greg-at-moderne in [#7811](https://github.com/openrewrite/rewrite/pull/7811)
* JavaScript: spawn Java RPC server for TS integration tests by @knutwannheden in [#7806](https://github.com/openrewrite/rewrite/pull/7806)
* Lazy single-recipe activation by @knutwannheden in [#7807](https://github.com/openrewrite/rewrite/pull/7807)
* `RecipeMarketplaceWriter` to sort recipes alphabetically by @greg-at-moderne in [#7815](https://github.com/openrewrite/rewrite/pull/7815)

#### [rewrite 8.83.3](https://github.com/openrewrite/rewrite/releases/tag/v8.83.3)

* Go: fix several cases of padding coercion in RPC by @greg-at-moderne in [#7778](https://github.com/openrewrite/rewrite/pull/7778)
* Go: handle markers with no RPC codecs by @greg-at-moderne in [#7776](https://github.com/openrewrite/rewrite/pull/7776)
* RenameVariable: skip type-reference identifiers in method signatures and casts by @timtebeek in [#7780](https://github.com/openrewrite/rewrite/pull/7780)
* Fix AddCommentToXmlTag for self-closing and empty tags by @Jenson3210 in [#7779](https://github.com/openrewrite/rewrite/pull/7779)
* Go: introduce JavaTypeShallowClass by @greg-at-moderne in [#7782](https://github.com/openrewrite/rewrite/pull/7782)
* Go: don't pick the container variant off the first element by @greg-at-moderne in [#7783](https://github.com/openrewrite/rewrite/pull/7783)
* Go: mutate objects in place in RPC receiver by @greg-at-moderne in [#7785](https://github.com/openrewrite/rewrite/pull/7785)
* RemoveUnusedImports: keep imports used only in nested generics with partial type attribution by @timtebeek in [#7784](https://github.com/openrewrite/rewrite/pull/7784)
* Scala: fixing various cases of leading whitespace in brackets, etc. by @greg-at-moderne in [#7756](https://github.com/openrewrite/rewrite/pull/7756)
* C#: skip dotnet restore for unmodified csproj during attestation by @macsux in [#7788](https://github.com/openrewrite/rewrite/pull/7788)
* C#: preserve whitespace in nullable directives and widen IsPattern by @macsux in [#7787](https://github.com/openrewrite/rewrite/pull/7787)
* Python: bump `ty-types` to 0.0.39, handle `EnumComplement` by @knutwannheden in [#7789](https://github.com/openrewrite/rewrite/pull/7789)
* Scala: fix for anonymous `using` context parameter by @greg-at-moderne in [#7761](https://github.com/openrewrite/rewrite/pull/7761)
* TypeTable: tolerate cross-JVM races when publishing per-artifact JARs by @timtebeek in [#7786](https://github.com/openrewrite/rewrite/pull/7786)
* Python: fix DependencyWorkspace race on invalid leftover dir by @knutwannheden in [#7790](https://github.com/openrewrite/rewrite/pull/7790)
* Scala: fix for parsing optional braces in a function expression by @greg-at-moderne in [#7792](https://github.com/openrewrite/rewrite/pull/7792)
* Scala: fix for if expressions in new class by @greg-at-moderne in [#7791](https://github.com/openrewrite/rewrite/pull/7791)
* Go: preserve elements' ids over RPC by @greg-at-moderne in [#7794](https://github.com/openrewrite/rewrite/pull/7794)
* Scala: accept .sbt files and add sbt() test helper by @timtebeek in [#7793](https://github.com/openrewrite/rewrite/pull/7793)
* Go: default to new UUID for new objects by @greg-at-moderne in [#7796](https://github.com/openrewrite/rewrite/pull/7796)
* Go: fix RPC handling of left padded operator enums by @greg-at-moderne in [#7797](https://github.com/openrewrite/rewrite/pull/7797)
* Scala: fix printing of new-class with `with` intersection type by @greg-at-moderne in [#7798](https://github.com/openrewrite/rewrite/pull/7798)
* Fix `FindEndOfLifeImagesTest` to suggest Node 26 or 24 by @greg-at-moderne in [#7800](https://github.com/openrewrite/rewrite/pull/7800)
* Python: regenerate recipes.csv by @Jenson3210 in [#7801](https://github.com/openrewrite/rewrite/pull/7801)
* Scala: support for Scala 2 macro syntax by @greg-at-moderne in [#7799](https://github.com/openrewrite/rewrite/pull/7799)
* Go: Add missing visitFallThrough to RPC by @greg-at-moderne in [#7802](https://github.com/openrewrite/rewrite/pull/7802)
* C#: preserve whitespace in auto-property accessors and null-conditional assignments by @macsux in [#7803](https://github.com/openrewrite/rewrite/pull/7803)

#### [rewrite 8.83.2](https://github.com/openrewrite/rewrite/releases/tag/v8.83.2)

* Scala: handle whitespace before asInstanceOf cast by @greg-at-moderne in [#7758](https://github.com/openrewrite/rewrite/pull/7758)
* JUnit 6 best practices by @timtebeek in [#7766](https://github.com/openrewrite/rewrite/pull/7766)
* Go: handle type attribution for multi-return by @greg-at-moderne in [#7767](https://github.com/openrewrite/rewrite/pull/7767)
* Go: tests to observe the markers added by a recipe in 'after' by @greg-at-moderne in [#7768](https://github.com/openrewrite/rewrite/pull/7768)
* Default whitespace for keyword-prefixed JContainers in withX(...) mutators by @steve-aom-elliott in [#7769](https://github.com/openrewrite/rewrite/pull/7769)
* JavaTemplate: recurse into lambda bodies so coords-targeting-body actually apply by @steve-aom-elliott in [#7770](https://github.com/openrewrite/rewrite/pull/7770)
* Fix AddDependency no-op when libs.versions.toml is present on Gradle 9 by @timtebeek in [#7550](https://github.com/openrewrite/rewrite/pull/7550)

#### [rewrite 8.83.1](https://github.com/openrewrite/rewrite/releases/tag/v8.83.1)

* Scala: amendments to import handling by @greg-at-moderne in [#7760](https://github.com/openrewrite/rewrite/pull/7760)
* Publish to NPM directly by @greg-at-moderne in [#7759](https://github.com/openrewrite/rewrite/pull/7759)
* RecipeClassLoader: child-load Kotlin recipe-DSL builder classes by @jkschneider in [#7763](https://github.com/openrewrite/rewrite/pull/7763)
* Refresh README: update Moderne section, links, and CLI thumbnail by @bryanfriedman in [#7755](https://github.com/openrewrite/rewrite/pull/7755)
* Defer JUnit version selection to upstream convention plugin by @timtebeek in [#7762](https://github.com/openrewrite/rewrite/pull/7762)
* Remove rewrite-java-next module due to downstream issues by @timtebeek in [#7764](https://github.com/openrewrite/rewrite/pull/7764)
* Go: employ modfile for parsing go.mod files by @greg-at-moderne in [#7765](https://github.com/openrewrite/rewrite/pull/7765)

#### [rewrite-all 1.26.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.26.0)

* Regenerate recipes.csv by @timtebeek in [#44](https://github.com/openrewrite/rewrite-all/pull/44)

#### [rewrite-apache 2.27.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.27.0)

* Set commentCharacter on @CsvSource to avoid clash with '#' delimiter by @timtebeek in [#131](https://github.com/openrewrite/rewrite-apache/pull/131)
* Map `decodeBase64` to `getMimeDecoder()` to preserve URL-safe decoding by @timtebeek in [#133](https://github.com/openrewrite/rewrite-apache/pull/133)

#### [rewrite-cobol 2.18.0](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.18.0)

* Regenerate recipes.csv by @timtebeek in [#151](https://github.com/moderneinc/rewrite-cobol/pull/151)

#### [rewrite-codemods 0.26.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.26.0)

* Regenerate recipes.csv by @timtebeek in [#66](https://github.com/moderneinc/rewrite-codemods/pull/66)

#### [rewrite-cucumber-jvm 2.12.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.12.0)

* Regenerate recipes.csv by @timtebeek in [#33](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/33)

#### [rewrite-feature-flags 1.21.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.21.0)

* Remove redundant junit-jupiter-engine test runtime dependency by @timtebeek in [#66](https://github.com/openrewrite/rewrite-feature-flags/pull/66)
* Regenerate recipes.csv by @timtebeek in [#67](https://github.com/openrewrite/rewrite-feature-flags/pull/67)

#### [rewrite-github-actions 3.24.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.24.0)

* Regenerate recipes.csv by @timtebeek in [#189](https://github.com/openrewrite/rewrite-github-actions/pull/189)

#### [rewrite-gitlab 0.23.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.23.0)

* Regenerate recipes.csv by @timtebeek in [#41](https://github.com/openrewrite/rewrite-gitlab/pull/41)

#### [rewrite-gradle-plugin 7.34.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.34.0)

* Create site directory before copying plugin reference by @timtebeek in [#447](https://github.com/openrewrite/rewrite-gradle-plugin/pull/447)
* Annotate rewrite tasks with @DisableCachingByDefault by @timtebeek in [#448](https://github.com/openrewrite/rewrite-gradle-plugin/pull/448)
* Resolve the Gradle JavaVersion from declared release/toolchain config by @timtebeek in [#449](https://github.com/openrewrite/rewrite-gradle-plugin/pull/449)

#### [rewrite-hibernate 2.21.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.21.0)

* Stop renaming `hibernate-validator` to `org.hibernate.orm` by @Jenson3210 in [#86](https://github.com/openrewrite/rewrite-hibernate/pull/86)
* Regenerate recipes.csv by @timtebeek in [#87](https://github.com/openrewrite/rewrite-hibernate/pull/87)

#### [rewrite-jackson 1.24.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.24.0)

* Regenerate recipes.csv by @timtebeek in [#139](https://github.com/openrewrite/rewrite-jackson/pull/139)
* Handle jackson-core and jackson-databind resolving to different versions by @timtebeek in [#140](https://github.com/openrewrite/rewrite-jackson/pull/140)

#### [rewrite-java-dependencies 1.55.3](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.55.3)

* OpenRewrite v8.84.0: https://github.com/openrewrite/rewrite/compare/v8.84.0...main

#### [rewrite-java-dependencies 1.55.2](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.55.2)

* Trust resolved version over declared dep in dependency search by @timtebeek in [#181](https://github.com/openrewrite/rewrite-java-dependencies/pull/181)

#### [rewrite-java-dependencies 1.55.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.55.1)

* Match requested dependencies in ModuleHasDependency and RepositoryHasDependency by @Jenson3210 in [#179](https://github.com/openrewrite/rewrite-java-dependencies/pull/179)
* Regenerate recipes.csv by @timtebeek in [#180](https://github.com/openrewrite/rewrite-java-dependencies/pull/180)

#### [rewrite-jenkins 0.36.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.36.0)

* Regenerate recipes.csv by @timtebeek in [#113](https://github.com/openrewrite/rewrite-jenkins/pull/113)
* Recover Jenkinsfile parse errors caused by a misplaced shebang by @steve-aom-elliott in [#114](https://github.com/openrewrite/rewrite-jenkins/pull/114)

#### [rewrite-joda 0.9.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.9.0)

* Regenerate recipes.csv by @timtebeek in [#21](https://github.com/openrewrite/rewrite-joda/pull/21)

#### [rewrite-liberty 1.24.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.24.0)

* Regenerate recipes.csv by @timtebeek in [#41](https://github.com/openrewrite/rewrite-liberty/pull/41)

#### [rewrite-logging-frameworks 3.29.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.29.0)

* Regenerate recipes.csv by @timtebeek in [#292](https://github.com/openrewrite/rewrite-logging-frameworks/pull/292)
* Fix re-escaping of control characters when rebuilding Java string literals in logging recipes. by @motlin in [#293](https://github.com/openrewrite/rewrite-logging-frameworks/pull/293)
* Add Log4j2IsEnabledToSlf4j Refaster recipe to convert isEnabled(Level) level guards to SLF4J isXEnabled() calls. by @motlin in [#294](https://github.com/openrewrite/rewrite-logging-frameworks/pull/294)

#### [rewrite-maven-plugin 6.41.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.41.0)

* Validate compiler version properties and read pluginManagement for JavaVersion by @timtebeek in [#1161](https://github.com/openrewrite/rewrite-maven-plugin/pull/1161)

#### [rewrite-micrometer 0.29.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.29.0)

* Regenerate recipes.csv by @timtebeek in [#36](https://github.com/openrewrite/rewrite-micrometer/pull/36)

#### [rewrite-micronaut 2.34.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.34.1)

* OpenRewrite v8.84.0: https://github.com/openrewrite/rewrite/compare/v8.84.0...main

#### [rewrite-migrate-java 3.36.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.36.0)

* Move StringFormatted recipe from Java 17 upgrade to Java best practices by @timtebeek in [#1106](https://github.com/openrewrite/rewrite-migrate-java/pull/1106)
* Skip `IfElseIfConstructToSwitch` when a trailing non-`== null` binary check is present by @timtebeek in [#1109](https://github.com/openrewrite/rewrite-migrate-java/pull/1109)
* Skip `UseTextBlocks` when literal value matches its source by @timtebeek in [#1111](https://github.com/openrewrite/rewrite-migrate-java/pull/1111)
* Skip `UseMapOf` for `HashMap` subclasses like `LinkedHashMap` and `TreeMap` by @timtebeek in [#1113](https://github.com/openrewrite/rewrite-migrate-java/pull/1113)
* Skip `RenameUnderscoreIdentifier` on Kotlin and Groovy sources by @MBoegers in [#1114](https://github.com/openrewrite/rewrite-migrate-java/pull/1114)
* Do not add `java.io.IO` import in `ReplaceSystemOutWithIOPrint` by @timtebeek in [#1118](https://github.com/openrewrite/rewrite-migrate-java/pull/1118)
* fix: do not replace lambda params with underscore when used as assignment target by @darrencilia in [#1117](https://github.com/openrewrite/rewrite-migrate-java/pull/1117)
* Route WSS4J message.token classes to their real 2.x packages by @Jenson3210 in [#1122](https://github.com/openrewrite/rewrite-migrate-java/pull/1122)
* Migrate `com.sun.xml.bind.marshaller.NamespacePrefixMapper` to `org.glassfish.jaxb.runtime.marshaller.NamespacePrefixMapper` by @Jenson3210 in [#1121](https://github.com/openrewrite/rewrite-migrate-java/pull/1121)
* Fix `RefineSwitchCases` generating invalid guard on enum constant labels by @timtebeek in [#1124](https://github.com/openrewrite/rewrite-migrate-java/pull/1124)
* Skip unparseable Java versions in FindJavaVersion instead of reporting -1 by @timtebeek in [#1125](https://github.com/openrewrite/rewrite-migrate-java/pull/1125)

#### [rewrite-netty 0.10.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.10.0)

* Regenerate recipes.csv by @timtebeek in [#17](https://github.com/openrewrite/rewrite-netty/pull/17)

#### [rewrite-okhttp 0.23.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.23.0)

* Regenerate recipes.csv by @timtebeek in [#30](https://github.com/openrewrite/rewrite-okhttp/pull/30)

#### [rewrite-openapi 0.32.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.32.0)

* Migrate springfox `@ApiIgnore` on parameters to `@Parameter(hidden = true)` by @timtebeek in [#76](https://github.com/openrewrite/rewrite-openapi/pull/76)

#### [rewrite-polyglot 2.10.8](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.8)

* OpenRewrite v8.84.0: https://github.com/openrewrite/rewrite/compare/v8.84.0...main

#### [rewrite-polyglot 2.10.7](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.7)

* OmniParser: forward JavaTypeFactory to default Groovy/Gradle parsers by @jkschneider in [#54](https://github.com/openrewrite/rewrite-polyglot/pull/54)

#### [rewrite-prethink 0.6.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.6.0)

* Regenerate recipes.csv by @timtebeek in [#19](https://github.com/openrewrite/rewrite-prethink/pull/19)

#### [rewrite-quarkus 2.33.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.33.0)

* Regenerate recipes.csv by @timtebeek in [#114](https://github.com/openrewrite/rewrite-quarkus/pull/114)

#### [rewrite-rewrite 0.26.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.26.0)

* Regenerate recipes.csv by @timtebeek in [#77](https://github.com/openrewrite/rewrite-rewrite/pull/77)

#### [rewrite-spring 6.32.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.32.0)

* Move `MigrateHibernateConstraintsToJavax` call into `UpgradeSpringFramework_5_0` by @steve-aom-elliott in [#1025](https://github.com/openrewrite/rewrite-spring/pull/1025)
* Emit Kotlin array literal for single-element `@MockBean(types = ...)` by @MBoegers in [#1026](https://github.com/openrewrite/rewrite-spring/pull/1026)
* Skip spring.data.redis.ssl rename when ssl has child keys by @timtebeek in [#1028](https://github.com/openrewrite/rewrite-spring/pull/1028)
* Regenerate recipes.csv by @timtebeek in [#1030](https://github.com/openrewrite/rewrite-spring/pull/1030)
* Apply ClientHttpResponse#getRawStatusCode() migration as of Spring Framework 6.0 by @timtebeek in [#1031](https://github.com/openrewrite/rewrite-spring/pull/1031)
* Migrate `ResponseEntity#getStatusCode()` callers to `HttpStatusCode` by @Jenson3210 in [#1033](https://github.com/openrewrite/rewrite-spring/pull/1033)
* Support static imports in `MigrateUriComponentsBuilderMethods` by @timtebeek in [#1035](https://github.com/openrewrite/rewrite-spring/pull/1035)

#### [rewrite-spring-to-quarkus 0.10.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.10.0)

* Regenerate recipes.csv by @timtebeek in [#87](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/87)

#### [rewrite-static-analysis 2.36.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.36.0)

* Guard `instanceof` to `Class::isInstance` conversion on lambda arity by @timtebeek in [#903](https://github.com/openrewrite/rewrite-static-analysis/pull/903)
* Preserve cast on argument to overloaded method in `RemoveRedundantTypeCast` by @timtebeek in [#904](https://github.com/openrewrite/rewrite-static-analysis/pull/904)
* Preserve raw cast on parameterized expression in `RemoveRedundantTypeCast` by @timtebeek in [#905](https://github.com/openrewrite/rewrite-static-analysis/pull/905)
* Skip Python sources in `CombineSemanticallyEqualCatchBlocks` by @timtebeek in [#908](https://github.com/openrewrite/rewrite-static-analysis/pull/908)
* Use receiver type for unbound instance method reference in `ReplaceLambdaWithMethodReference` by @timtebeek in [#909](https://github.com/openrewrite/rewrite-static-analysis/pull/909)
* Regenerate recipes.csv by @timtebeek in [#910](https://github.com/openrewrite/rewrite-static-analysis/pull/910)
* Retain load-bearing type witness in select position in `UnnecessaryExplicitTypeArguments` by @knutwannheden in [#911](https://github.com/openrewrite/rewrite-static-analysis/pull/911)

#### [rewrite-templating 1.41.8](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.8)

* OpenRewrite v8.84.0: https://github.com/openrewrite/rewrite/compare/v8.84.0...main

#### [rewrite-testing-frameworks 3.37.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.37.0)

* Reuse `MockedStatic` for consecutive stubbings of the same class by @timtebeek in [#1005](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1005)
* Add RemoveJupiterMigrationSupport recipe by @sullis in [#1006](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1006)
* Regenerate recipes.csv by @timtebeek in [#1007](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1007)
* fix: retain doNothing() stubs inside lambda bodies to prevent uncompilable code by @darrencilia in [#1009](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1009)
* Migrate deprecated AssertionsForClassTypes/InterfaceTypes to Assertions by @timtebeek in [#1010](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1010)
* Add direct mockwebserver3 dep when only inherited from parent pom by @steve-aom-elliott in [#1011](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1011)
* Match MockWebServer.shutdown() against pre-rename type by @steve-aom-elliott in [#1012](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1012)

#### [rewrite-third-party 0.40.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.40.1)

* Add rewrite-migrate-java to runtime classpath by @timtebeek in [#74](https://github.com/openrewrite/rewrite-third-party/pull/74)

#### [rewrite-third-party 0.40.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.40.0)

* Add rewrite-migrate-java to runtime classpath by @timtebeek in [#74](https://github.com/openrewrite/rewrite-third-party/pull/74)

## [rewrite-recipe-bom 3.31.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.31.0)

Released on May 21, 2026, with OpenRewrite 8.83.0.

#### [rewrite 8.83.0](https://github.com/openrewrite/rewrite/releases/tag/v8.83.0)

* Fix RemoveAnnotation crash on Groovy trees when rewrite-kotlin is on the classpath by @Jenson3210 in [#7720](https://github.com/openrewrite/rewrite/pull/7720)
* Kotlin recipe DSL: Java-static chain inner + bare-param after + trailing-lambda parens by @jkschneider in [#7723](https://github.com/openrewrite/rewrite/pull/7723)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#7724](https://github.com/openrewrite/rewrite/pull/7724)
* Kotlin recipe DSL: wrap generated visitors with UsesMethod/UsesField preconditions by @jkschneider in [#7725](https://github.com/openrewrite/rewrite/pull/7725)
* Groovy: preserve folded constant references in nested annotation arguments by @timtebeek in [#7722](https://github.com/openrewrite/rewrite/pull/7722)
* Pass --skip-existing to twine upload for Python snapshots by @timtebeek in [#7728](https://github.com/openrewrite/rewrite/pull/7728)
* Kotlin recipe DSL: preserve dot-on-its-own-line layout across chain collapse by @jkschneider in [#7729](https://github.com/openrewrite/rewrite/pull/7729)
* Scala: support for scala-xml parsing by @greg-at-moderne in [#7727](https://github.com/openrewrite/rewrite/pull/7727)
* Semver: accept globs in metadataPattern; fix backpatch-style upgrades by @jkschneider in [#7731](https://github.com/openrewrite/rewrite/pull/7731)
* JavaScript: make `prettier` a devDependency to fix flaky npmBuild by @jkschneider in [#7735](https://github.com/openrewrite/rewrite/pull/7735)
* C#: fix InstallRecipes echoing wildcard versions in response.Version by @natedanner in [#7697](https://github.com/openrewrite/rewrite/pull/7697)
* Scala: more fixes for braceless/indentation syntax by @greg-at-moderne in [#7734](https://github.com/openrewrite/rewrite/pull/7734)
* Scala: fix parsing of whitespace after annotations by @greg-at-moderne in [#7732](https://github.com/openrewrite/rewrite/pull/7732)
* Scala: support `_=>` by @greg-at-moderne in [#7733](https://github.com/openrewrite/rewrite/pull/7733)
* Support parsing Python 2.7 source through the existing parser pipeline by @bmuschko in [#7678](https://github.com/openrewrite/rewrite/pull/7678)
* Kotlin recipe DSL: emit precise arg-count matcher patterns instead of (..) by @jkschneider in [#7737](https://github.com/openrewrite/rewrite/pull/7737)
* C#: restore legacy packages.config projects via NuGet CLI by @macsux in [#7726](https://github.com/openrewrite/rewrite/pull/7726)
* Scala: support for `given` and `using` by @greg-at-moderne in [#7738](https://github.com/openrewrite/rewrite/pull/7738)
* Scala: fix parsing of a block following a partial function by @greg-at-moderne in [#7739](https://github.com/openrewrite/rewrite/pull/7739)
* Scala: enabling postfixOps compiler setting by @greg-at-moderne in [#7740](https://github.com/openrewrite/rewrite/pull/7740)
* Add rewrite-java-next module for non-LTS JDK support by @timtebeek in [#7719](https://github.com/openrewrite/rewrite/pull/7719)
* Go: fix Javadoc references by @greg-at-moderne in [#7745](https://github.com/openrewrite/rewrite/pull/7745)
* Scala: fix try catch single line default by @greg-at-moderne in [#7744](https://github.com/openrewrite/rewrite/pull/7744)
* Scala: fix parameterless method declaration with type parameters by @greg-at-moderne in [#7742](https://github.com/openrewrite/rewrite/pull/7742)
* Scala: fix printing of curried method declaration with default values by @greg-at-moderne in [#7746](https://github.com/openrewrite/rewrite/pull/7746)
* Kotlin: normalise `kotlin.String` to `java.lang.String` for Java static-method params by @timtebeek in [#7747](https://github.com/openrewrite/rewrite/pull/7747)
* Scala: fix bodyless classes by @greg-at-moderne in [#7748](https://github.com/openrewrite/rewrite/pull/7748)
* Provide JDK 26 toolchain for scheduled Gradle workflows by @timtebeek in [#7749](https://github.com/openrewrite/rewrite/pull/7749)
* Don't npm-publish other than releases or snapshots from main by @greg-at-moderne in [#7750](https://github.com/openrewrite/rewrite/pull/7750)
* Go: revise the recipe installation procedure by @greg-at-moderne in [#7743](https://github.com/openrewrite/rewrite/pull/7743)
* Scala: S.Import and support for rich import/export syntax by @greg-at-moderne in [#7751](https://github.com/openrewrite/rewrite/pull/7751)
* Tolerate methods without an enclosing class in RemoveMethodThrows + handle Kotlin @Throws by @MBoegers in [#7661](https://github.com/openrewrite/rewrite/pull/7661)
* Suppress gradleApi() transitive CVEs in rewrite-gradle-tooling-model:plugin by @timtebeek in [#7752](https://github.com/openrewrite/rewrite/pull/7752)
* Kotlin recipe DSL: preserve substituted args' interior whitespace across AutoFormat by @jkschneider in [#7753](https://github.com/openrewrite/rewrite/pull/7753)
* Scala: distinguish between annotated type and annotated expression by @greg-at-moderne in [#7754](https://github.com/openrewrite/rewrite/pull/7754)
* Gradle: handle null resolved versions in UpgradePluginVersion (consolidates #7658) by @knutwannheden in [#7656](https://github.com/openrewrite/rewrite/pull/7656)

#### [rewrite 8.82.1](https://github.com/openrewrite/rewrite/releases/tag/v8.82.1)

* Kotlin recipe DSL: trailing-lambda parens + Java-static chain inner + bare-param after body by @jkschneider in [#7709](https://github.com/openrewrite/rewrite/pull/7709)
* Kotlin recipe DSL: drop `KotlinCompositeRecipe` bridge row from recipes.csv by @jkschneider in [#7710](https://github.com/openrewrite/rewrite/pull/7710)
* RecipeClassLoader: parent-delegate `@AbstractRecipe` by @jkschneider in [#7711](https://github.com/openrewrite/rewrite/pull/7711)
* Scala: handle varargs splat expressions by @greg-at-moderne in [#7700](https://github.com/openrewrite/rewrite/pull/7700)
* Scala: fixes for parsing _ => false function by @greg-at-moderne in [#7699](https://github.com/openrewrite/rewrite/pull/7699)
* Scala: add support for `with` syntax in intersection types by @greg-at-moderne in [#7712](https://github.com/openrewrite/rewrite/pull/7712)
* Scala: fix underscore lambda detection by @greg-at-moderne in [#7713](https://github.com/openrewrite/rewrite/pull/7713)
* Scala: introduce S.SplatExpression by @greg-at-moderne in [#7714](https://github.com/openrewrite/rewrite/pull/7714)
* Package Go RPC sources as part of the rewrite-go JAR by @greg-at-moderne in [#7715](https://github.com/openrewrite/rewrite/pull/7715)

#### [rewrite 8.82.0](https://github.com/openrewrite/rewrite/releases/tag/v8.82.0)

* Scala: fix parsing of auxiliary constructors by @greg-at-moderne in [#7682](https://github.com/openrewrite/rewrite/pull/7682)
* Scala: another set of fixes for parsing of indentation-significant syntax by @greg-at-moderne in [#7683](https://github.com/openrewrite/rewrite/pull/7683)
* Scala: fix parsing of closing braces in try-catch by @greg-at-moderne in [#7681](https://github.com/openrewrite/rewrite/pull/7681)
* Scala: fix parsing of syntax elements in comments by @greg-at-moderne in [#7684](https://github.com/openrewrite/rewrite/pull/7684)
* Pom only fallback non 404 by @Jenson3210 in [#7685](https://github.com/openrewrite/rewrite/pull/7685)
* Reflection-based recipe discovery via [Category, ...] attributes by @macsux in [#7679](https://github.com/openrewrite/rewrite/pull/7679)
* Scala: introducing `S.RepeatedType` by @greg-at-moderne in [#7686](https://github.com/openrewrite/rewrite/pull/7686)
* Scala: fix unapply matching in catch clauses by @greg-at-moderne in [#7687](https://github.com/openrewrite/rewrite/pull/7687)
* Scala: fix parsing of binary expressions with no space on the left by @greg-at-moderne in [#7688](https://github.com/openrewrite/rewrite/pull/7688)
* RPC: Fix RPC startup when the underlying binary is missing by @greg-at-moderne in [#7689](https://github.com/openrewrite/rewrite/pull/7689)
* Scala: handle implicit lambda parameter with no type by @greg-at-moderne in [#7690](https://github.com/openrewrite/rewrite/pull/7690)
* Scala: S.TupleType by @greg-at-moderne in [#7691](https://github.com/openrewrite/rewrite/pull/7691)
* Scala: fix empty parens constructors by @greg-at-moderne in [#7693](https://github.com/openrewrite/rewrite/pull/7693)
* Scala: fix parsing of multi-line annotations by @greg-at-moderne in [#7692](https://github.com/openrewrite/rewrite/pull/7692)
* UpgradeDependencyVersion for Gradle preserves shared version variable references when upgrading dependencies by @bmuschko in [#7694](https://github.com/openrewrite/rewrite/pull/7694)
* Delegate kotlin.* classes to parent in RecipeClassLoader by @timtebeek in [#7695](https://github.com/openrewrite/rewrite/pull/7695)
* UpdateGradleWrapper: support Maven-layout Artifactory repos by @timtebeek in [#7696](https://github.com/openrewrite/rewrite/pull/7696)
* Preconditions: expose `And`/`Or`/`Not` as public classes with getters by @jkschneider in [#7702](https://github.com/openrewrite/rewrite/pull/7702)
* Kotlin recipe DSL (K2 compiler plugin) + cross-language visitor mixins by @jkschneider in [#7701](https://github.com/openrewrite/rewrite/pull/7701)
* Kotlin recipe DSL: pattern-matching gap closures + matcher/template fixes by @jkschneider in [#7703](https://github.com/openrewrite/rewrite/pull/7703)
* rpc: discover DynamicDispatchRpcCodec providers across classloaders by @steve-aom-elliott in [#7698](https://github.com/openrewrite/rewrite/pull/7698)
* Kotlin recipe DSL: `recipes()` builder for fixed-list composites by @jkschneider in [#7704](https://github.com/openrewrite/rewrite/pull/7704)
* Kotlin: release `KotlinCoreEnvironment` on every parse path by @jkschneider in [#7705](https://github.com/openrewrite/rewrite/pull/7705)
* Kotlin recipe DSL: discoverable `recipes()` composites + `@AbstractRecipe` by @jkschneider in [#7707](https://github.com/openrewrite/rewrite/pull/7707)
* Add rewrite-android module: AndroidProject marker, traits, and SDK/AGP upgrade recipes by @jkschneider in [#7706](https://github.com/openrewrite/rewrite/pull/7706)
* Kotlin recipe DSL: chained-call patterns + cursor exposure in visitX actions by @jkschneider in [#7708](https://github.com/openrewrite/rewrite/pull/7708)

#### [rewrite 8.81.17](https://github.com/openrewrite/rewrite/releases/tag/v8.81.17)

* RPC: enable CPU time collection in Pyroscope wall profiler for JS by @greg-at-moderne in [#7674](https://github.com/openrewrite/rewrite/pull/7674)
* Scala: fix missing print out of type arguments by @greg-at-moderne in [#7675](https://github.com/openrewrite/rewrite/pull/7675)
* Add MSBuild csproj recipes + .sln .njsproj filter by @macsux in [#7518](https://github.com/openrewrite/rewrite/pull/7518)
* Add .NET Framework version primitives for legacy csproj and config files by @steve-aom-elliott in [#7672](https://github.com/openrewrite/rewrite/pull/7672)
* Scala: S.FunctionType by @greg-at-moderne in [#7677](https://github.com/openrewrite/rewrite/pull/7677)
* Scala: another bunch of parser fixes for extra whitespace by @greg-at-moderne in [#7676](https://github.com/openrewrite/rewrite/pull/7676)
* Scala: various parser fixes for whitespace in try-catch by @greg-at-moderne in [#7680](https://github.com/openrewrite/rewrite/pull/7680)

#### [rewrite 8.81.16](https://github.com/openrewrite/rewrite/releases/tag/v8.81.16)

* Use application mainClass in MigrateToGradle9 by @sullis in [#7596](https://github.com/openrewrite/rewrite/pull/7596)
* Throw clearer error when annotation arguments template fails to parse by @MBoegers in [#7666](https://github.com/openrewrite/rewrite/pull/7666)
* Use version closure in MigrateToGradle9 by @sullis in [#7612](https://github.com/openrewrite/rewrite/pull/7612)
* RPC: strip trailing / and attempt to shutdown Pyroscope gracefully by @greg-at-moderne in [#7673](https://github.com/openrewrite/rewrite/pull/7673)

#### [rewrite 8.81.15](https://github.com/openrewrite/rewrite/releases/tag/v8.81.15)

* Delegate org.openrewrite.semver classes to parent in RecipeClassLoader by @timtebeek in [#7669](https://github.com/openrewrite/rewrite/pull/7669)

#### [rewrite 8.81.14](https://github.com/openrewrite/rewrite/releases/tag/v8.81.14)

* Scala: fix parsing of non-standard whitespace by @greg-at-moderne in [#7648](https://github.com/openrewrite/rewrite/pull/7648)
* Update server configuration in CI workflow by @Jenson3210 in [#7649](https://github.com/openrewrite/rewrite/pull/7649)
* Kotlin: fix multi-dollar string interpolation with template entries by @knutwannheden in [#7662](https://github.com/openrewrite/rewrite/pull/7662)
* Kotlin: handle ConeTypeVariableType in type signature builder by @knutwannheden in [#7663](https://github.com/openrewrite/rewrite/pull/7663)
* Avoid SIOOBE in `RemoveImport` when type has no package by @knutwannheden in [#7657](https://github.com/openrewrite/rewrite/pull/7657)
* Gradle `AddDependency`: skip unknown configurations instead of NPE by @knutwannheden in [#7659](https://github.com/openrewrite/rewrite/pull/7659)
* Scala: fix parsing fragility around case bodies and try/catch keywords by @knutwannheden in [#7665](https://github.com/openrewrite/rewrite/pull/7665)
* rpc: exit JS server when parent connection closes by @jkschneider in [#7652](https://github.com/openrewrite/rewrite/pull/7652)
* Scala: stop leaking Dotty diagnostics to stderr by @knutwannheden in [#7667](https://github.com/openrewrite/rewrite/pull/7667)
* Kotlin: don't leak dependsOn into the parse-error stream by @knutwannheden in [#7668](https://github.com/openrewrite/rewrite/pull/7668)
* Stop closing recipe classloaders on CachingMavenRecipeBundleResolver close by @jkschneider in [#7670](https://github.com/openrewrite/rewrite/pull/7670)

#### [rewrite 8.81.13](https://github.com/openrewrite/rewrite/releases/tag/v8.81.13)

* rewrite-maven: route tests through the Maven settings mirror by @jkschneider in [#7633](https://github.com/openrewrite/rewrite/pull/7633)
* Scala: fix printing missing modifiers by @greg-at-moderne in [#7610](https://github.com/openrewrite/rewrite/pull/7610)
* Scala: support for indented syntax by @greg-at-moderne in [#7611](https://github.com/openrewrite/rewrite/pull/7611)
* RPC: wait for the stderr drain thread completion by @greg-at-moderne in [#7635](https://github.com/openrewrite/rewrite/pull/7635)
* Scala: fix parsing for postfix operator syntax by @greg-at-moderne in [#7639](https://github.com/openrewrite/rewrite/pull/7639)
* Scala: fix parsing of optional semicolon in for loops by @greg-at-moderne in [#7637](https://github.com/openrewrite/rewrite/pull/7637)
* Scala: backtick identifiers fixes by @greg-at-moderne in [#7640](https://github.com/openrewrite/rewrite/pull/7640)
* Scala: fix printing of extension method by @greg-at-moderne in [#7642](https://github.com/openrewrite/rewrite/pull/7642)
* Scala: fix parsing of braced packages by @greg-at-moderne in [#7641](https://github.com/openrewrite/rewrite/pull/7641)
* Speed up Tree.randomId() with ThreadLocalRandom by @knutwannheden in [#7638](https://github.com/openrewrite/rewrite/pull/7638)
* Scala: add support for parsing primary-constructor parameters by @greg-at-moderne in [#7643](https://github.com/openrewrite/rewrite/pull/7643)
* Scala: partial functions whitespace parsing fix by @greg-at-moderne in [#7645](https://github.com/openrewrite/rewrite/pull/7645)
* Scala: add support for non-standard space around method return type by @greg-at-moderne in [#7646](https://github.com/openrewrite/rewrite/pull/7646)
* rpc: allow sharing the in-flight Semaphore across ExecutionContexts by @jkschneider in [#7647](https://github.com/openrewrite/rewrite/pull/7647)

#### [rewrite 8.81.12](https://github.com/openrewrite/rewrite/releases/tag/v8.81.12)

* rewrite-python: cache JavaVisitor / PyVisitor imports in is_acceptable / accept by @jkschneider in [#7630](https://github.com/openrewrite/rewrite/pull/7630)
* rewrite-csharp: fix UsesType/UsesMethod local visitor traversal by @jkschneider in [#7632](https://github.com/openrewrite/rewrite/pull/7632)
* rewrite-python: Unknown declaring-type for unattributed method calls + public SearchResult.found by @jkschneider in [#7631](https://github.com/openrewrite/rewrite/pull/7631)

#### [rewrite 8.81.11](https://github.com/openrewrite/rewrite/releases/tag/v8.81.11)

* rpc: walk superclass chain in RpcVisitor.isAcceptable by @jkschneider in [#7619](https://github.com/openrewrite/rewrite/pull/7619)
* rpc: install openrewrite with [profiling] extra so Python rpc can report to Pyroscope by @jkschneider in [#7618](https://github.com/openrewrite/rewrite/pull/7618)
* Java: exclude leaked checkstyle Maven metadata from shadowJar by @knutwannheden in [#7615](https://github.com/openrewrite/rewrite/pull/7615)
* AddDependency: prevent duplicate `<dependency>` when existing direct dep already satisfies the request by @steve-aom-elliott in [#7613](https://github.com/openrewrite/rewrite/pull/7613)
* Python rpc: skip SearchResult walk when visitor didn't modify (~59% faster) by @jkschneider in [#7620](https://github.com/openrewrite/rewrite/pull/7620)
* rewrite-python: wire Preconditions.check end-to-end for RPC recipes by @jkschneider in [#7621](https://github.com/openrewrite/rewrite/pull/7621)
* rewrite-python: lazy RecipeRef so preconditions don't RPC at editor() time by @jkschneider in [#7622](https://github.com/openrewrite/rewrite/pull/7622)
* javascript: defensive Space handling in JavaScriptPrinter.visitSpace by @jkschneider in [#7623](https://github.com/openrewrite/rewrite/pull/7623)
* rewrite-python: restore the skip-walk-when-not-modified guard by @jkschneider in [#7624](https://github.com/openrewrite/rewrite/pull/7624)
* RewriteRpcProcess: deregister shutdown hook in shutdown() by @jkschneider in [#7629](https://github.com/openrewrite/rewrite/pull/7629)
* rewrite-python: Preconditions.or_ / and_ / not_ for RPC recipes by @jkschneider in [#7625](https://github.com/openrewrite/rewrite/pull/7625)
* rewrite-javascript: Preconditions.or / and / not for RPC recipes by @jkschneider in [#7626](https://github.com/openrewrite/rewrite/pull/7626)
* rewrite-go: align preconditions to the Java/Python wrapper model by @jkschneider in [#7627](https://github.com/openrewrite/rewrite/pull/7627)
* rewrite-csharp: add Preconditions.Or + composite wire introspection by @jkschneider in [#7628](https://github.com/openrewrite/rewrite/pull/7628)

#### [rewrite 8.81.10](https://github.com/openrewrite/rewrite/releases/tag/v8.81.10)

* rpc: kill child processes at JVM exit via shutdown hook by @Jammy-Louie in [#7616](https://github.com/openrewrite/rewrite/pull/7616)
* rpc: avoid ForkJoinPool compensation in send polling loop by @jkschneider in [#7617](https://github.com/openrewrite/rewrite/pull/7617)

#### [rewrite 8.81.9](https://github.com/openrewrite/rewrite/releases/tag/v8.81.9)

* Scala: support * methods with tuple by @greg-at-moderne in [#7607](https://github.com/openrewrite/rewrite/pull/7607)
* Scala: fix parsing of whitespace around `_.` calls by @greg-at-moderne in [#7608](https://github.com/openrewrite/rewrite/pull/7608)
* Scala: fix printer hardcoded whitespace by @greg-at-moderne in [#7609](https://github.com/openrewrite/rewrite/pull/7609)
* rpc: cap concurrent in-flight requests via ExecutionContext by @jkschneider in [#7614](https://github.com/openrewrite/rewrite/pull/7614)

#### [rewrite 8.81.8](https://github.com/openrewrite/rewrite/releases/tag/v8.81.8)

* Renew sbt CPE false-positive suppressions to 2026-06-01 by @Jenson3210 in [#7595](https://github.com/openrewrite/rewrite/pull/7595)
* Scala: close parser gaps for Super, ForYield, Alternative, and other AST nodes by @jkschneider in [#7398](https://github.com/openrewrite/rewrite/pull/7398)
* Gradle 9: move top-level sourceCompatibility/targetCompatibility into `java { }` by @Jenson3210 in [#7581](https://github.com/openrewrite/rewrite/pull/7581)
* Fix ConcurrentModificationException in RecipeMarketplace.Category.merge by @jkschneider in [#7597](https://github.com/openrewrite/rewrite/pull/7597)
* Scala: close parser gaps for `new {}`, mixin classes, and synthetic TypeTree by @jkschneider in [#7598](https://github.com/openrewrite/rewrite/pull/7598)
* Scala: refactor the parser code; sourceBefore, ident, buildArgumentContainer by @greg-at-moderne in [#7456](https://github.com/openrewrite/rewrite/pull/7456)
* Scala: fix parsing of trailing whitespace before closing parentheses by @greg-at-moderne in [#7600](https://github.com/openrewrite/rewrite/pull/7600)
* Scala: add support for parsing `export` statements by @greg-at-moderne in [#7601](https://github.com/openrewrite/rewrite/pull/7601)
* Scala: fix parsing of annotations on classes with modifiers by @greg-at-moderne in [#7603](https://github.com/openrewrite/rewrite/pull/7603)
* Scala: fix whitespace handling around `=>` by @greg-at-moderne in [#7604](https://github.com/openrewrite/rewrite/pull/7604)
* Gradle 9: rewrite spread-`all*` in `configurations { }` to `configurations.all { }` by @Jenson3210 in [#7585](https://github.com/openrewrite/rewrite/pull/7585)
* Scala: introduce ExpressionStatement by @greg-at-moderne in [#7606](https://github.com/openrewrite/rewrite/pull/7606)

#### [rewrite 8.81.7](https://github.com/openrewrite/rewrite/releases/tag/v8.81.7)

* RPC: avoid defensive copy in RpcSendQueue.flush() by @jkschneider in [#7586](https://github.com/openrewrite/rewrite/pull/7586)
* python: speed up RpcReceiveQueue._parse_message by @jkschneider in [#7587](https://github.com/openrewrite/rewrite/pull/7587)
* python: skip dataclasses.replace in hot replace_if_changed path by @jkschneider in [#7588](https://github.com/openrewrite/rewrite/pull/7588)
* python: implement TreeVisitor.adapt() so generic visitors can visit Py/J nodes by @jkschneider in [#7590](https://github.com/openrewrite/rewrite/pull/7590)
* go: dispatch `*tree.Else` in `GoVisitor.Visit` so RPC sends the body by @jkschneider in [#7592](https://github.com/openrewrite/rewrite/pull/7592)
* csharp: implement `TreeVisitor.Adapt()` on the .NET side by @jkschneider in [#7591](https://github.com/openrewrite/rewrite/pull/7591)
* Add TypeNameMatcher to RecipeClassLoader allowlist; align with moderne-recipe-loading-commons by @pdelagrave in [#7584](https://github.com/openrewrite/rewrite/pull/7584)

#### [rewrite-all 1.25.4](https://github.com/openrewrite/rewrite-all/releases/tag/v1.25.4)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.26.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.26.0)

* Migrate `AuthState` to `AuthExchange` for HttpClient 5 by @steve-aom-elliott in [#130](https://github.com/openrewrite/rewrite-apache/pull/130)

#### [rewrite-cobol 2.17.5](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.17.5)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.25.5](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.5)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.16](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.16)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.20.6](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.6)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.23.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.23.0)

* Update stale codeql-action SHA in PinGitHubActionsToShaTest by @timtebeek in [#186](https://github.com/openrewrite/rewrite-github-actions/pull/186)

#### [rewrite-gitlab 0.22.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.22.2)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.20.3](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.20.3)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.23.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.23.0)

* Rename JsonParser getCurrentToken/getCurrentName for Jackson 3 by @MBoegers in [#135](https://github.com/openrewrite/rewrite-jackson/pull/135)
* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#137](https://github.com/openrewrite/rewrite-jackson/pull/137)
* Cap jackson-annotations at 2.21 and bump Lombok for Jackson 3 support by @Jenson3210 in [#136](https://github.com/openrewrite/rewrite-jackson/pull/136)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#138](https://github.com/openrewrite/rewrite-jackson/pull/138)

#### [rewrite-java-dependencies 1.55.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.55.0)

* Pin empty MavenSettings in DependencyResolutionDiagnosticTest.maven() by @timtebeek in [#178](https://github.com/openrewrite/rewrite-java-dependencies/pull/178)
* Speed up ModuleHasDependency and RepositoryHasDependency by removing DependencyInsight by @steve-aom-elliott in [#176](https://github.com/openrewrite/rewrite-java-dependencies/pull/176)

#### [rewrite-jenkins 0.35.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.35.0)

* Revert "Testing 404s from Maven Central (?)" by @greg-at-moderne in [#108](https://github.com/openrewrite/rewrite-jenkins/pull/108)
* Revert "Revert "Testing 404s from Maven Central (?)"" by @greg-at-moderne in [#109](https://github.com/openrewrite/rewrite-jenkins/pull/109)

#### [rewrite-joda 0.8.4](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.8.4)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.23.15](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.15)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.28.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.28.0)

* Renew log4j 1.2.17 reference suppression to 2026-06-01 by @Jenson3210 in [#287](https://github.com/openrewrite/rewrite-logging-frameworks/pull/287)
* Update log4j-api TypeTable to 2.26.0 by @timtebeek in [#288](https://github.com/openrewrite/rewrite-logging-frameworks/pull/288)
* Preserve formatting when ParameterizedLogging has nothing to parameterize by @timtebeek in [#290](https://github.com/openrewrite/rewrite-logging-frameworks/pull/290)

#### [rewrite-maven-plugin 6.40.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.40.0)

* Suppress Maven transfer progress via .mvn/maven.config by @timtebeek in [#1154](https://github.com/openrewrite/rewrite-maven-plugin/pull/1154)

#### [rewrite-micrometer 0.28.12](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.12)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.34.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.34.0)

* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#139](https://github.com/openrewrite/rewrite-micronaut/pull/139)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#140](https://github.com/openrewrite/rewrite-micronaut/pull/140)
* Add declarative base recipe for Micronaut 4.x to 5.x migration by @timtebeek in [#141](https://github.com/openrewrite/rewrite-micronaut/pull/141)

#### [rewrite-migrate-java 3.35.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.35.0)

* Add `java.io.IO` import in `ReplaceSystemOutWithIOPrint` by @timtebeek in [#1093](https://github.com/openrewrite/rewrite-migrate-java/pull/1093)
* Skip `UseMapOf` when `put()` argument is a null literal by @timtebeek in [#1094](https://github.com/openrewrite/rewrite-migrate-java/pull/1094)
* Migrate JAXB XJC binding files declaring version 2.0/2.1/2.2 by @MBoegers in [#1098](https://github.com/openrewrite/rewrite-migrate-java/pull/1098)
* Preserve explicit type arguments in MigrateCollections* recipes by @timtebeek in [#1099](https://github.com/openrewrite/rewrite-migrate-java/pull/1099)
* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#1096](https://github.com/openrewrite/rewrite-migrate-java/pull/1096)
* Load sun.internal.new[Class].jar directly to fix CI test failures by @timtebeek in [#1101](https://github.com/openrewrite/rewrite-migrate-java/pull/1101)
* Skip explicit type arguments containing wildcards in `UseVarForGenericMethodInvocations` by @timtebeek in [#1102](https://github.com/openrewrite/rewrite-migrate-java/pull/1102)
* Skip `var` when target type inference widens a generic argument by @timtebeek in [#1103](https://github.com/openrewrite/rewrite-migrate-java/pull/1103)
* Skip `IfElseIfConstructToSwitch` when `instanceof` types are missing by @timtebeek in [#1095](https://github.com/openrewrite/rewrite-migrate-java/pull/1095)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#1104](https://github.com/openrewrite/rewrite-migrate-java/pull/1104)
* Aggregate FindJavaVersion to one row per repository by @timtebeek in [#1105](https://github.com/openrewrite/rewrite-migrate-java/pull/1105)

#### [rewrite-netty 0.9.3](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.9.3)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.22.7](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.7)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.31.7](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.7)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.6](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.6)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.5.3](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.5.3)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.32.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.32.0)

* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#112](https://github.com/openrewrite/rewrite-quarkus/pull/112)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#113](https://github.com/openrewrite/rewrite-quarkus/pull/113)

#### [rewrite-rewrite 0.25.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.25.0)

* Test collapsing lambda after AssertJ ReturnActual by @timtebeek in [#76](https://github.com/openrewrite/rewrite-rewrite/pull/76)

#### [rewrite-spring 6.31.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.31.0)

* Chain `UpgradeSpringFramework_5_1` from `UpgradeSpringBoot_2_1` by @steve-aom-elliott in [#1014](https://github.com/openrewrite/rewrite-spring/pull/1014)
* Wrap `List` arguments to `ItemWriter.write` call sites in `new Chunk<>(...)` by @Jenson3210 in [#1015](https://github.com/openrewrite/rewrite-spring/pull/1015)
* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#1016](https://github.com/openrewrite/rewrite-spring/pull/1016)
* OpenRewrite recipe best practices by @timtebeek in [#1017](https://github.com/openrewrite/rewrite-spring/pull/1017)
* Stop deleting user-defined `swagger.*` properties in `SwaggerToSpringDoc` by @timtebeek in [#1020](https://github.com/openrewrite/rewrite-spring/pull/1020)
* Pass cursor to `RemoveAnnotationVisitor` in `AutowiredFieldIntoConstructorParameterVisitor` by @Jenson3210 in [#1022](https://github.com/openrewrite/rewrite-spring/pull/1022)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#1021](https://github.com/openrewrite/rewrite-spring/pull/1021)
* Make UnwrapMockAndSpyBeanContainers Kotlin-aware by @MBoegers in [#1023](https://github.com/openrewrite/rewrite-spring/pull/1023)
* Allow opting additional YAML/properties files into Spring property recipes by @steve-aom-elliott in [#1018](https://github.com/openrewrite/rewrite-spring/pull/1018)

#### [rewrite-spring-to-quarkus 0.9.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.9.0)

* Route Maven through Moderne Artifactory cache to avoid HTTP 429 by @Jenson3210 in [#85](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/85)
* Revert inline Maven mirror (now in gh-automation#95) by @Jenson3210 in [#86](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/86)

#### [rewrite-static-analysis 2.35.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.35.0)

* Document identity-semantics caveat on PrimitiveWrapperClassConstructorToValueOf by @timtebeek in [#883](https://github.com/openrewrite/rewrite-static-analysis/pull/883)
* Skip `FinalClass` when class has anonymous inner subclasses by @timtebeek in [#886](https://github.com/openrewrite/rewrite-static-analysis/pull/886)
* Skip `ReplaceLambdaWithMethodReference` for parameterized types with multiple constructors by @timtebeek in [#887](https://github.com/openrewrite/rewrite-static-analysis/pull/887)
* Preserve `null` cast at varargs position in `RemoveRedundantTypeCast` by @timtebeek in [#888](https://github.com/openrewrite/rewrite-static-analysis/pull/888)
* Retain explicit type arguments on no-arg static methods in `UnnecessaryExplicitTypeArguments` by @timtebeek in [#889](https://github.com/openrewrite/rewrite-static-analysis/pull/889)
* Detect overloads on parameterized receiver in `hasMethodOverloading` by @timtebeek in [#890](https://github.com/openrewrite/rewrite-static-analysis/pull/890)
* Preserve cast on generic method invocation in overloaded outer call by @timtebeek in [#891](https://github.com/openrewrite/rewrite-static-analysis/pull/891)
* Guard cast to `JavaType.Annotation` in `ReorderAnnotations` by @timtebeek in [#894](https://github.com/openrewrite/rewrite-static-analysis/pull/894)
* Strip diamond operator from cast in `UseLambdaForFunctionalInterface` by @timtebeek in [#893](https://github.com/openrewrite/rewrite-static-analysis/pull/893)
* Replace `var` with interface type in `UseLambdaForFunctionalInterface` by @timtebeek in [#896](https://github.com/openrewrite/rewrite-static-analysis/pull/896)

#### [rewrite-templating 1.41.7](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.7)

* OpenRewrite v8.83.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.36.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.36.0)

* Skip wrapper-primitive in `UseAssertSame`; rewrite via `AssertTrueComparisonToAssertEquals` by @motlin in [#995](https://github.com/openrewrite/rewrite-testing-frameworks/pull/995)
* Add unit test for JUnit6BestPractices by @sullis in [#994](https://github.com/openrewrite/rewrite-testing-frameworks/pull/994)
* Cleanup junit vintage engine by @sullis in [#993](https://github.com/openrewrite/rewrite-testing-frameworks/pull/993)
* OpenRewrite recipe best practices by @timtebeek in [#997](https://github.com/openrewrite/rewrite-testing-frameworks/pull/997)
* Fix `JUnit4to5Migration` for classes that extend `org.junit.Assert` by @motlin in [#996](https://github.com/openrewrite/rewrite-testing-frameworks/pull/996)
* Preserve newlines when converting `@CsvSource(textBlock = ...)` to `@ValueSource` by @timtebeek in [#998](https://github.com/openrewrite/rewrite-testing-frameworks/pull/998)
* Fix `EnclosedToNested` failing with "Expected to find enclosing JavaSourceFile" by @timtebeek in [#1001](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1001)
* Fix `assertEquals` delta misinterpreted as message in AssertJ conversion by @timtebeek in [#1000](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1000)
* Add JUnit 6.1 migration recipes by @timtebeek in [#1002](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1002)
* Handle Kotlin sources in `MockitoWhenOnStaticToMockStatic` by @MBoegers in [#1003](https://github.com/openrewrite/rewrite-testing-frameworks/pull/1003)

#### [rewrite-third-party 0.39.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.39.0)

* Renew quarkus-update-recipes suppression to 2026-06-01 by @Jenson3210 in [#70](https://github.com/openrewrite/rewrite-third-party/pull/70)
* Add marketplace category descriptions for Picnic, Quarkus, and Apache by @timtebeek in [#71](https://github.com/openrewrite/rewrite-third-party/pull/71)
* Revert marketplace category descriptions by @timtebeek in [#72](https://github.com/openrewrite/rewrite-third-party/pull/72)
* Suppress CVE-2026-42582: false positive on core Netty modules by @timtebeek in [#73](https://github.com/openrewrite/rewrite-third-party/pull/73)

## [rewrite-recipe-bom 3.30.1](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.30.1)

Released on May 7, 2026, with OpenRewrite 8.81.6.

#### [rewrite 8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

* Groovy: add support for @Memoize annotation by @greg-at-moderne in [#7575](https://github.com/openrewrite/rewrite/pull/7575)
* Re-enable the `UpgradePluginVersionTest` by @greg-at-moderne in [#7578](https://github.com/openrewrite/rewrite/pull/7578)
* Fix AddAnnotationProcessor when parent matches by GAV alone by @MBoegers in [#7527](https://github.com/openrewrite/rewrite/pull/7527)
* Transitively collect data tables from composite recipes by @jkschneider in [#7580](https://github.com/openrewrite/rewrite/pull/7580)
* Add TypeNameMatcher to RecipeClassLoader allowlist by @pdelagrave in [#7582](https://github.com/openrewrite/rewrite/pull/7582)

#### [rewrite 8.81.5](https://github.com/openrewrite/rewrite/releases/tag/v8.81.5)

* Further work on Golang RPC, import manipulation, and formatting by @jkschneider in [#7557](https://github.com/openrewrite/rewrite/pull/7557)
* RPC: continuous profiling for Python/JS/Go subprocesses by @jkschneider in [#7558](https://github.com/openrewrite/rewrite/pull/7558)
* Go: fix parsing of condition-only for loops using semicolons by @greg-at-moderne in [#7560](https://github.com/openrewrite/rewrite/pull/7560)
* Remove rpc binary by @greg-at-moderne in [#7562](https://github.com/openrewrite/rewrite/pull/7562)
* Throw MavenParsingException when a POM is missing groupId or version by @steve-aom-elliott in [#7480](https://github.com/openrewrite/rewrite/pull/7480)
* RewriteTest: framework-agnostic ExecutionContext customizer registry by @jkschneider in [#7559](https://github.com/openrewrite/rewrite/pull/7559)
* Provide Artifactory credentials to CI by @greg-at-moderne in [#7566](https://github.com/openrewrite/rewrite/pull/7566)
* Java 25 parser: don't merge `///` blocks across blank lines by @timtebeek in [#7556](https://github.com/openrewrite/rewrite/pull/7556)
* AddToTagVisitor: skip insert when a semantically-equal child already exists by @steve-aom-elliott in [#7567](https://github.com/openrewrite/rewrite/pull/7567)
* Go: Fix comments within method invocation by @greg-at-moderne in [#7561](https://github.com/openrewrite/rewrite/pull/7561)
* UpgradeDependencyVersion (Gradle): respect shared version variables by @MBoegers in [#7491](https://github.com/openrewrite/rewrite/pull/7491)
* Maven, Gradle: emit `DependenciesDeclared` table from `FindDependency` by @MBoegers in [#7530](https://github.com/openrewrite/rewrite/pull/7530)
* Move Groovy and Kotlin tests of recipes to rewrite-groovy/ and rewrit… by @greg-at-moderne in [#7563](https://github.com/openrewrite/rewrite/pull/7563)
* XML: harden parser against malformed input crashes by @timtebeek in [#7555](https://github.com/openrewrite/rewrite/pull/7555)
* JS: fix npmPublish skip detection that always reported "already published" by @timtebeek in [#7570](https://github.com/openrewrite/rewrite/pull/7570)
* Re-enable some Gradle tests after fixing gradle-plugins in Artifactory by @greg-at-moderne in [#7577](https://github.com/openrewrite/rewrite/pull/7577)
* AddRepositoryTest - skip `updateToSpringBoot30Snapshot` in CI by @greg-at-moderne in [#7574](https://github.com/openrewrite/rewrite/pull/7574)

#### [rewrite 8.81.4](https://github.com/openrewrite/rewrite/releases/tag/v8.81.4)

* InlineMethodCalls: preserve method select when replacement is bare by @timtebeek in [#7551](https://github.com/openrewrite/rewrite/pull/7551)
* JS: skip `npm publish` when snapshot version already exists by @timtebeek in [#7552](https://github.com/openrewrite/rewrite/pull/7552)
* RPC: gate BatchVisit by remote getLanguages by @jkschneider in [#7553](https://github.com/openrewrite/rewrite/pull/7553)

#### [rewrite 8.81.3](https://github.com/openrewrite/rewrite/releases/tag/v8.81.3)

* C#: pass `--skip-duplicate` to `dotnet nuget push` by @timtebeek in [#7544](https://github.com/openrewrite/rewrite/pull/7544)
* PipRecipeBundleResolver: pip install on the server side by @jkschneider in [#7547](https://github.com/openrewrite/rewrite/pull/7547)

#### [rewrite 8.81.2](https://github.com/openrewrite/rewrite/releases/tag/v8.81.2)

* Scope Python RPC marketplace responses to the requested distribution by @jkschneider in [#7512](https://github.com/openrewrite/rewrite/pull/7512)
* Groovy: fix parsing of exclusive-right ranges by @greg-at-moderne in [#7514](https://github.com/openrewrite/rewrite/pull/7514)
* Groovy: fix parsing of @groovy.transform.builder.Builder annotation by @greg-at-moderne in [#7513](https://github.com/openrewrite/rewrite/pull/7513)
* JavaScript: setupSharedDependencies must search inside recipe directory itself by @Jenson3210 in [#7515](https://github.com/openrewrite/rewrite/pull/7515)
* Gradle: keep comments with their dependency when sorting (fixes #7516) by @timtebeek in [#7517](https://github.com/openrewrite/rewrite/pull/7517)
* Groovy: fix parsing of variables typed as generics class parameter by @greg-at-moderne in [#7519](https://github.com/openrewrite/rewrite/pull/7519)
* Fix Ubuntu EOL tests by @greg-at-moderne in [#7522](https://github.com/openrewrite/rewrite/pull/7522)
* Remove java-test dependencies on rewrite-groovy, rewrite-kotlin by @greg-at-moderne in [#7520](https://github.com/openrewrite/rewrite/pull/7520)
* Groovy: fix parsing of Spock assertions/labels by @greg-at-moderne in [#7523](https://github.com/openrewrite/rewrite/pull/7523)
* Remove CLI specific NPE checks by @MBoegers in [#7386](https://github.com/openrewrite/rewrite/pull/7386)
* Groovy: support GStrings as identifiers by @greg-at-moderne in [#7525](https://github.com/openrewrite/rewrite/pull/7525)
* Groovy: fix parsing of inner constructor calls by @greg-at-moderne in [#7526](https://github.com/openrewrite/rewrite/pull/7526)
* Groovy: improve support for trait parsing by @greg-at-moderne in [#7529](https://github.com/openrewrite/rewrite/pull/7529)
* Introduce `JavaTypeFactory` and extend `JavaSourceSet` with classpath fast paths by @knutwannheden in [#7528](https://github.com/openrewrite/rewrite/pull/7528)
* Groovy: trait support continued by @greg-at-moderne in [#7533](https://github.com/openrewrite/rewrite/pull/7533)
* Groovy: handle comma as an assert separator by @greg-at-moderne in [#7532](https://github.com/openrewrite/rewrite/pull/7532)
* Java: realign Javadoc cursor when javac strips continuation whitespace by @timtebeek in [#7531](https://github.com/openrewrite/rewrite/pull/7531)
* Groovy: fix parsing of deconstructing assignment of existing variables by @greg-at-moderne in [#7535](https://github.com/openrewrite/rewrite/pull/7535)
* Pick Gradle distribution based on client JVM version by @timtebeek in [#7534](https://github.com/openrewrite/rewrite/pull/7534)
* Python: Pipfile support and dependency recipe rework by @Jenson3210 in [#7521](https://github.com/openrewrite/rewrite/pull/7521)
* Pin Tooling-API client default to Gradle 8.14.3 by @timtebeek in [#7537](https://github.com/openrewrite/rewrite/pull/7537)
* Add Maven recipes for reproducible builds by @timtebeek in [#7541](https://github.com/openrewrite/rewrite/pull/7541)
* Gradle: rename `mainClassName` to `mainClass` in `application` block by @timtebeek in [#7540](https://github.com/openrewrite/rewrite/pull/7540)
* Fix JavaSourceSet#gavFromPath for TypeTable jar layout by @steve-aom-elliott in [#7543](https://github.com/openrewrite/rewrite/pull/7543)
* RPC peers: emit empty arrays for descriptor collections, never omit them by @jkschneider in [#7546](https://github.com/openrewrite/rewrite/pull/7546)

#### [rewrite 8.81.1](https://github.com/openrewrite/rewrite/releases/tag/v8.81.1)

* Align ASM and Kotlin stdlib versions across modules by @knutwannheden in [#7474](https://github.com/openrewrite/rewrite/pull/7474)
* UpgradeDependencyVersion: warn on install failure instead of throwing by @Jenson3210 in [#7479](https://github.com/openrewrite/rewrite/pull/7479)
* XML: recognize additional .NET XML file extensions by @macsux in [#7448](https://github.com/openrewrite/rewrite/pull/7448)
* Fix TypeTable round-trip for Kotlin top-level functions by @steve-aom-elliott in [#7422](https://github.com/openrewrite/rewrite/pull/7422)
* Improve AddDependency performance by reducing unnecessary scanning for types in use by @sambsnyd in [#7482](https://github.com/openrewrite/rewrite/pull/7482)
* Resolve groovy multiline interpolation parse error by @vpa1977 in [#7430](https://github.com/openrewrite/rewrite/pull/7430)
* Add unit test for lombok.val by @sullis in [#7481](https://github.com/openrewrite/rewrite/pull/7481)
* Groovy: fix parsing of a dynamic map key with parens by @greg-at-moderne in [#7485](https://github.com/openrewrite/rewrite/pull/7485)
* Groovy: fix parsing of a method with array varargs by @greg-at-moderne in [#7484](https://github.com/openrewrite/rewrite/pull/7484)
* Groovy: fix parsing of @Immutable @ToString by @greg-at-moderne in [#7487](https://github.com/openrewrite/rewrite/pull/7487)
* Groovy: Fix NPE with generics of an unknown class by @greg-at-moderne in [#7488](https://github.com/openrewrite/rewrite/pull/7488)
* Make Java compatibility tests not depend on java-tck JAR by @greg-at-moderne in [#7489](https://github.com/openrewrite/rewrite/pull/7489)
* FindStyles: honor custom @JsonSerialize so ImportLayoutStyle.layout isn't dropped by @Jenson3210 in [#7486](https://github.com/openrewrite/rewrite/pull/7486)
* UpgradeDependencyVersion: pass --legacy-peer-deps to npm/pnpm by @Jenson3210 in [#7490](https://github.com/openrewrite/rewrite/pull/7490)
* Fix Groovy parser failure on nested annotations in list literals by @timtebeek in [#7492](https://github.com/openrewrite/rewrite/pull/7492)
* Groovy: fix parsing of method calls on int literals by @greg-at-moderne in [#7493](https://github.com/openrewrite/rewrite/pull/7493)
* Groovy: support `@groovy.test.NotYetImplemented` by @greg-at-moderne in [#7494](https://github.com/openrewrite/rewrite/pull/7494)
* Kotlin: remap builtins on Java-origin method/field types by @timtebeek in [#7428](https://github.com/openrewrite/rewrite/pull/7428)
* Exclude `META-INF` for Gradle caching in Java compatibility tests by @greg-at-moderne in [#7495](https://github.com/openrewrite/rewrite/pull/7495)
* Groovy: fix parsing method invocations with method names like `.classSomething` by @greg-at-moderne in [#7496](https://github.com/openrewrite/rewrite/pull/7496)
* Groovy: fix parsing of explicit `super()` constructor call by @greg-at-moderne in [#7497](https://github.com/openrewrite/rewrite/pull/7497)
* Groovy: add trait support by @greg-at-moderne in [#7499](https://github.com/openrewrite/rewrite/pull/7499)
* Javadoc: preserve multi-line HTML comments inside block tags by @timtebeek in [#7500](https://github.com/openrewrite/rewrite/pull/7500)
* Groovy: fix parsing syntactic sugar of closure-call expressions by @greg-at-moderne in [#7501](https://github.com/openrewrite/rewrite/pull/7501)
* Migrate 'main' property in MigrateToGradle9 by @sullis in [#7504](https://github.com/openrewrite/rewrite/pull/7504)
* Groovy: fix parsing of command expressions with args in parens by @greg-at-moderne in [#7503](https://github.com/openrewrite/rewrite/pull/7503)
* Groovy: fix parsing of generics class literal by @greg-at-moderne in [#7505](https://github.com/openrewrite/rewrite/pull/7505)
* Groovy: more fixes to map key expressions with parens by @greg-at-moderne in [#7507](https://github.com/openrewrite/rewrite/pull/7507)
* Groovy: fix parsing of property expressions in parens by @greg-at-moderne in [#7506](https://github.com/openrewrite/rewrite/pull/7506)
* Groovy: fix parsing of negated new expression by @greg-at-moderne in [#7508](https://github.com/openrewrite/rewrite/pull/7508)
* Restore JavaScript/Python/C# entries for Java recipes in recipes.csv by @timtebeek in [#7510](https://github.com/openrewrite/rewrite/pull/7510)
* Build fast "has type" lookup into TypesInUse cache, speeding up repeated type queries by @sambsnyd in [#7483](https://github.com/openrewrite/rewrite/pull/7483)

#### [rewrite-all 1.25.3](https://github.com/openrewrite/rewrite-all/releases/tag/v1.25.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Update FindCallGraphTest to expect void for Kotlin Unit return type by @timtebeek in [#43](https://github.com/openrewrite/rewrite-all/pull/43)

#### [rewrite-apache 2.25.2](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.25.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Fix ResponseHandler migration to land in core5, not client5 by @steve-aom-elliott in [#128](https://github.com/openrewrite/rewrite-apache/pull/128)
* Java 25 on Gradle 9.5.0 by @timtebeek in [#129](https://github.com/openrewrite/rewrite-apache/pull/129)

#### [rewrite-cobol 2.17.4](https://github.com/moderneinc/rewrite-mainframe/releases/tag/v2.17.4)

- OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-codemods 0.25.4](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.4)

- OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-cucumber-jvm 2.11.15](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.15)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-cucumber-jvm 2.11.14](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.14)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-feature-flags 1.20.5](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.5)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Switch classpath.tsv from zip to gzip compression by @timtebeek in [#63](https://github.com/openrewrite/rewrite-feature-flags/pull/63)

#### [rewrite-github-actions 3.22.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.22.0)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Add recipe to pin GitHub Actions to commit SHAs by @timtebeek in [#169](https://github.com/openrewrite/rewrite-github-actions/pull/169)
* Fix tag comment placement when pinned `uses:` is followed by a sequence boundary by @steve-aom-elliott in [#181](https://github.com/openrewrite/rewrite-github-actions/pull/181)
* Tolerate actions with no matching version tags in update-known-shas by @timtebeek in [#182](https://github.com/openrewrite/rewrite-github-actions/pull/182)
* Update known action SHAs by @timtebeek in [#183](https://github.com/openrewrite/rewrite-github-actions/pull/183)
* feat(github-actions): Add an option of trusted owners list  by @BelmoMusta in [#184](https://github.com/openrewrite/rewrite-github-actions/pull/184)

#### [rewrite-gitlab 0.22.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.22.1)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-gradle-plugin 7.32.2](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.32.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Persist pom lookups in rocksdb pom cache, matching the behavior of the maven plugin. by @sambsnyd in [#444](https://github.com/openrewrite/rewrite-gradle-plugin/pull/444)

#### [rewrite-gradle-plugin 7.32.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.32.1)

* Persist pom lookups in rocksdb pom cache, matching the behavior of the maven plugin. by @sambsnyd in [#444](https://github.com/openrewrite/rewrite-gradle-plugin/pull/444)

#### [rewrite-hibernate 2.20.2](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.20.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Handle class-form `@Type` for boolean legacy types in `MigrateBooleanMappings` by @steve-aom-elliott in [#85](https://github.com/openrewrite/rewrite-hibernate/pull/85)

#### [rewrite-jackson 1.22.2](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.22.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Target Jackson 3.1.x in UpgradeJackson_2_3 recipe by @MBoegers in [#134](https://github.com/openrewrite/rewrite-jackson/pull/134)

#### [rewrite-java-dependencies 1.54.5](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.5)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Add test for invertMarking with version range precondition by @timtebeek in [#175](https://github.com/openrewrite/rewrite-java-dependencies/pull/175)

#### [rewrite-java-dependencies 1.54.4](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.4)

* Add test for invertMarking with version range precondition by @timtebeek in [#175](https://github.com/openrewrite/rewrite-java-dependencies/pull/175)

#### [rewrite-jenkins 0.34.10](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.10)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Testing 404s from Maven Central (?) by @greg-at-moderne in [#107](https://github.com/openrewrite/rewrite-jenkins/pull/107)

#### [rewrite-joda 0.8.3](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.8.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Use `JavaTemplate.apply()` static method by @timtebeek in [#20](https://github.com/openrewrite/rewrite-joda/pull/20)

#### [rewrite-liberty 1.23.14](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.14)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-logging-frameworks 3.27.3](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.27.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Fix IndexOutOfBoundsException when JUL placeholders exceed argument count by @timtebeek in [#284](https://github.com/openrewrite/rewrite-logging-frameworks/pull/284)
* Fix exception consumed by format placeholder in CompleteExceptionLogging by @timtebeek in [#285](https://github.com/openrewrite/rewrite-logging-frameworks/pull/285)

#### [rewrite-micrometer 0.28.11](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.11)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Move dropwizard metrics-core to parser classpath type table by @timtebeek in [#35](https://github.com/openrewrite/rewrite-micrometer/pull/35)

#### [rewrite-micronaut 2.33.6](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.6)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-migrate-java 3.34.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.34.1)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Refresh UpdateSdkManTest fixtures after SDKMAN CSV update by @steve-aom-elliott in [#1073](https://github.com/openrewrite/rewrite-migrate-java/pull/1073)
* Add more static analysis recipes to java-best-practices by @timtebeek in [#1075](https://github.com/openrewrite/rewrite-migrate-java/pull/1075)
* OpenRewrite recipe best practices by @timtebeek in [#1074](https://github.com/openrewrite/rewrite-migrate-java/pull/1074)
* Add jspecify hyperlink by @sullis in [#1076](https://github.com/openrewrite/rewrite-migrate-java/pull/1076)
* Skip `var` when reassignment relies on declared supertype by @timtebeek in [#1078](https://github.com/openrewrite/rewrite-migrate-java/pull/1078)
* Keep parentheses when renaming typed lambda parameter to underscore by @timtebeek in [#1082](https://github.com/openrewrite/rewrite-migrate-java/pull/1082)
* Document null-probing semantic differences in singleton migrations by @timtebeek in [#1081](https://github.com/openrewrite/rewrite-migrate-java/pull/1081)
* Skip main migration when referenced as static API by @timtebeek in [#1084](https://github.com/openrewrite/rewrite-migrate-java/pull/1084)
* Skip `Immutable*.copyOf` rewrite when argument is not a `Collection` by @timtebeek in [#1089](https://github.com/openrewrite/rewrite-migrate-java/pull/1089)
* Keep block body when refined switch arm contains an if statement by @timtebeek in [#1088](https://github.com/openrewrite/rewrite-migrate-java/pull/1088)
* Use `Map.ofEntries` when migrating more than 10 entries by @timtebeek in [#1090](https://github.com/openrewrite/rewrite-migrate-java/pull/1090)

#### [rewrite-netty 0.9.2](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.9.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Reject netty snapshots by @greg-at-moderne in [#16](https://github.com/openrewrite/rewrite-netty/pull/16)

#### [rewrite-okhttp 0.22.6](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.6)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Add entries to `.gitignore` by @zieka in [#29](https://github.com/openrewrite/rewrite-okhttp/pull/29)

#### [rewrite-openapi 0.31.6](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.6)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Handle `responseContainer` without `response` in ApiResponse migration by @timtebeek in [#75](https://github.com/openrewrite/rewrite-openapi/pull/75)

#### [rewrite-polyglot 2.10.5](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.5)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

#### [rewrite-prethink 0.5.2](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.5.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Generate context files when they already exist in the LST by @kmccarp in [#16](https://github.com/openrewrite/rewrite-prethink/pull/16)

#### [rewrite-quarkus 2.31.3](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.31.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* JavaEE migration tests no longer need 2 cycles by @steve-aom-elliott in [#111](https://github.com/openrewrite/rewrite-quarkus/pull/111)

#### [rewrite-rewrite 0.24.3](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.24.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Use JavaBestPractices in RecipeTestingBestPractices by @timtebeek in [#67](https://github.com/openrewrite/rewrite-rewrite/pull/67)
* Expand `OpenRewriteRecipeBestPractices` with targeted static analysis and migration recipes by @timtebeek in [#75](https://github.com/openrewrite/rewrite-rewrite/pull/75)

#### [rewrite-spring 6.30.4](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.30.4)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Skip scoped `.class` references in AddConfigurationAnnotationIfBeansPresent by @timtebeek in [#1007](https://github.com/openrewrite/rewrite-spring/pull/1007)
* Apply consistent code formatting across recipes and tests by @timtebeek in [#1011](https://github.com/openrewrite/rewrite-spring/pull/1011)
* Migrate SpringFox `SecurityConfiguration` bean to Springdoc properties by @steve-aom-elliott in [#1012](https://github.com/openrewrite/rewrite-spring/pull/1012)

#### [rewrite-spring 6.30.3](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.30.3)

* OpenRewrite recipe best practices by @timtebeek in [#1009](https://github.com/openrewrite/rewrite-spring/pull/1009)
* Rename `HealthIndicator.getHealth()` to `health()` for Spring Boot 4 by @aamotharald in [#1008](https://github.com/openrewrite/rewrite-spring/pull/1008)

#### [rewrite-spring-to-quarkus 0.8.4](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.8.4)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Fix incorrect getId/setId removal and wrong PanacheEntity base class by @timtebeek in [#82](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/82)
* Fix AddProfile generating malformed XML (Issue #68) by @timtebeek in [#81](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/81)
* Convert @ConfigurationProperties classes to @ConfigMapping interfaces by @timtebeek in [#83](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/83)
* Fix PanacheMongoRepository generic type parameter mismatch (Issue #67) by @timtebeek in [#84](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/84)

#### [rewrite-static-analysis 2.34.1](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.34.1)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Preserve statement order in `UseTryWithResources` by @timtebeek in [#866](https://github.com/openrewrite/rewrite-static-analysis/pull/866)
* Skip meta-annotated `@Configuration` in `FinalClass` and `HideUtilityClassConstructor` by @timtebeek in [#867](https://github.com/openrewrite/rewrite-static-analysis/pull/867)
* OpenRewrite recipe best practices by @timtebeek in [#869](https://github.com/openrewrite/rewrite-static-analysis/pull/869)
* Revert to using rewrite-java-21 for test runtime by @timtebeek in [#870](https://github.com/openrewrite/rewrite-static-analysis/pull/870)
* Preserve casts pinning generic-method return type in lambdas by @timtebeek in [#872](https://github.com/openrewrite/rewrite-static-analysis/pull/872)
* Preserve `(Object)` bridge cast for unchecked generic casts by @timtebeek in [#876](https://github.com/openrewrite/rewrite-static-analysis/pull/876)
* Skip `Objects::nonNull`/`isNull` when lambda parameter does not match by @timtebeek in [#875](https://github.com/openrewrite/rewrite-static-analysis/pull/875)
* Regression tests for ReplaceStackWithDeque ControlFlow crashes by @knutwannheden in [#879](https://github.com/openrewrite/rewrite-static-analysis/pull/879)
* Skip `SimplifyConsecutiveAssignments` when initializer would self-reference by @timtebeek in [#882](https://github.com/openrewrite/rewrite-static-analysis/pull/882)

#### [rewrite-testing-frameworks 3.35.3](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.35.3)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)
* Cleanup Mockito AutoCloseable fields by @sullis in [#977](https://github.com/openrewrite/rewrite-testing-frameworks/pull/977)
* Preserve mockStatic when returned from helper methods by @timtebeek in [#979](https://github.com/openrewrite/rewrite-testing-frameworks/pull/979)
* Upgrade junit-bom to 6.x in JUnit 5 to 6 migration by @timtebeek in [#978](https://github.com/openrewrite/rewrite-testing-frameworks/pull/978)
* Tighten PowerMockitoMockStaticToMockito precondition to actual PowerMockito usage by @timtebeek in [#981](https://github.com/openrewrite/rewrite-testing-frameworks/pull/981)
* Fix AssertTrueInstanceofToAssertInstanceOf static import by @timtebeek in [#984](https://github.com/openrewrite/rewrite-testing-frameworks/pull/984)
* Fix `ClassCastException` for `@PrepareForTest(fullyQualifiedNames = "...")` by @timtebeek in [#983](https://github.com/openrewrite/rewrite-testing-frameworks/pull/983)
* Preserve `doNothing()` stubbings using `ArgumentCaptor.capture()` by @timtebeek in [#988](https://github.com/openrewrite/rewrite-testing-frameworks/pull/988)
* Document strictness implication of `RemoveInitMocksIfRunnersSpecified` by @timtebeek in [#990](https://github.com/openrewrite/rewrite-testing-frameworks/pull/990)
* Support `textBlock` attribute in `CsvSourceToValueSource` by @timtebeek in [#989](https://github.com/openrewrite/rewrite-testing-frameworks/pull/989)
* Skip primitive comparisons in `UseAssertSame` by @timtebeek in [#992](https://github.com/openrewrite/rewrite-testing-frameworks/pull/992)

#### [rewrite-third-party 0.38.2](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.38.2)

* OpenRewrite [v8.81.6](https://github.com/openrewrite/rewrite/releases/tag/v8.81.6)

## [rewrite-recipe-bom 3.30.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.30.0)

Released on April 27, 2026, with OpenRewrite 8.81.0.

#### [rewrite 8.81.0](https://github.com/openrewrite/rewrite/releases/tag/v8.81.0)

* Skip `META-INF/` entries in classpath scanner by @knutwannheden in [#7461](https://github.com/openrewrite/rewrite/pull/7461)
* Scala: public canonical ctors for `S.TuplePattern` and `S.FunctionCall` by @knutwannheden in [#7462](https://github.com/openrewrite/rewrite/pull/7462)
* Fix print idempotency for Javadoc `<pre><code>` blocks on Java 25 by @knutwannheden in [#7464](https://github.com/openrewrite/rewrite/pull/7464)
* Add `Supplier<Path>` overloads to RPC builders for lazy tool-path resolution by @knutwannheden in [#7465](https://github.com/openrewrite/rewrite/pull/7465)
* Fix YAML print idempotency for asterisk placeholders inside block scalars by @knutwannheden in [#7466](https://github.com/openrewrite/rewrite/pull/7466)
* Fix GroovyParserVisitor crash on multi-variable field declarations by @timtebeek in [#7467](https://github.com/openrewrite/rewrite/pull/7467)
* During declarative recipe loading filter out duplicate copies of singleton recipes. by @sambsnyd in [#7468](https://github.com/openrewrite/rewrite/pull/7468)
* Fix GroovyParserVisitor cast dispatch for parenthesized expressions by @knutwannheden in [#7470](https://github.com/openrewrite/rewrite/pull/7470)
* Fix Kotlin parser handling of unresolved callable references by @knutwannheden in [#7469](https://github.com/openrewrite/rewrite/pull/7469)
* JavaScript: Package Manager to return the same node resolution marker if no changes by @greg-at-moderne in [#7473](https://github.com/openrewrite/rewrite/pull/7473)
* Use version pattern in `noDependencyManagementSection` test by @knutwannheden in [#7475](https://github.com/openrewrite/rewrite/pull/7475)

#### [rewrite 8.80.1](https://github.com/openrewrite/rewrite/releases/tag/v8.80.1)

* Scala: fix parsing of backtick-wrapped identifiers by @greg-at-moderne in [#7440](https://github.com/openrewrite/rewrite/pull/7440)
* Register `JavaType.ShallowClass` codec on the Python RPC side by @knutwannheden in [#7441](https://github.com/openrewrite/rewrite/pull/7441)
* C#: Improve TreeVisitor combining and handle null expression statements by @macsux in [#7435](https://github.com/openrewrite/rewrite/pull/7435)
* Handle `J.SwitchExpression` in `BlockStatementTemplateGenerator` by @knutwannheden in [#7445](https://github.com/openrewrite/rewrite/pull/7445)
* Scala: pass `-parameters` to `javac` in joint compilation by @knutwannheden in [#7449](https://github.com/openrewrite/rewrite/pull/7449)
* Scala: support `implicit` method parameters by @greg-at-moderne in [#7450](https://github.com/openrewrite/rewrite/pull/7450)
* Scala: support for package objects by @greg-at-moderne in [#7451](https://github.com/openrewrite/rewrite/pull/7451)
* Scala: fix handling of comments within cases by @greg-at-moderne in [#7452](https://github.com/openrewrite/rewrite/pull/7452)
* Pin bouncycastle 1.84 in kotlinBouncyCastleConfiguration by @Jenson3210 in [#7453](https://github.com/openrewrite/rewrite/pull/7453)
* Fix Scala parser losing type attribution when classpath lacks stdlib by @knutwannheden in [#7446](https://github.com/openrewrite/rewrite/pull/7446)
* Share artifact cache across JavaSourceSetUpdater visitors by @steve-aom-elliott in [#7454](https://github.com/openrewrite/rewrite/pull/7454)
* Disable JAR downloading in JavaSourceSetUpdater by @steve-aom-elliott in [#7459](https://github.com/openrewrite/rewrite/pull/7459)

#### [rewrite-all 1.25.2](https://github.com/openrewrite/rewrite-all/releases/tag/v1.25.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-apache 2.25.1](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.25.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-codemods 0.25.3](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.3)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.13](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.13)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-feature-flags 1.20.4](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.4)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-github-actions 3.21.1](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.21.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-gitlab 0.22.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.22.0)

* Add MigrateTemplateToComponent recipe by @timtebeek in [#40](https://github.com/openrewrite/rewrite-gitlab/pull/40)

#### [rewrite-gradle-plugin 7.32.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.32.0)

* Honor throwOnParseFailures option (#441) by @timtebeek in [#442](https://github.com/openrewrite/rewrite-gradle-plugin/pull/442)

#### [rewrite-hibernate 2.20.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.20.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-jackson 1.22.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.22.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-java-dependencies 1.54.3](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.3)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-java-dependencies 1.54.2](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.2)

* Add test for invertMarking with version range precondition by @timtebeek in [#175](https://github.com/openrewrite/rewrite-java-dependencies/pull/175)

#### [rewrite-jenkins 0.34.9](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.9)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-joda 0.8.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.8.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-liberty 1.23.13](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.13)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-logging-frameworks 3.27.2](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.27.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-micrometer 0.28.10](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.10)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-micronaut 2.33.5](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.5)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-migrate-java 3.34.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.34.0)

* Ensure `case` always has a space before the label in `IfElseIfConstructToSwitch` by @timtebeek in [#1071](https://github.com/openrewrite/rewrite-migrate-java/pull/1071)
* Add `UsePredicateNot` to replace cast-and-negate with `Predicate.not(..)` by @timtebeek in [#1072](https://github.com/openrewrite/rewrite-migrate-java/pull/1072)

#### [rewrite-netty 0.9.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.9.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-okhttp 0.22.5](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.5)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-openapi 0.31.5](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.5)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-polyglot 2.10.4](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.4)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.5.1](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.5.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.31.2](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.31.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-rewrite 0.24.2](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.24.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-spring 6.30.2](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.30.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-spring 6.30.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.30.1)

* Quote YAML values containing colons in `AddSpringProperty` by @timtebeek in [#1001](https://github.com/openrewrite/rewrite-spring/pull/1001)
* Upgrade Kotlin to 2.2.x as part of Spring Boot 4 migration by @steve-aom-elliott in [#1004](https://github.com/openrewrite/rewrite-spring/pull/1004)

#### [rewrite-spring-to-quarkus 0.8.3](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.8.3)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-static-analysis 2.34.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.34.0)

* bugfix:  false positive in AnnotateNullableParameters when parameter … by @stefanodallapalma in [#865](https://github.com/openrewrite/rewrite-static-analysis/pull/865)

#### [rewrite-templating 1.41.6](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.6)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.35.2](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.35.2)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

#### [rewrite-testing-frameworks 3.35.1](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.35.1)

* Fix `UpdateMockWebServerDispatcher` classpath lookup by @knutwannheden in [#975](https://github.com/openrewrite/rewrite-testing-frameworks/pull/975)

#### [rewrite-third-party 0.38.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.38.1)

* OpenRewrite v8.81.0: https://github.com/openrewrite/rewrite/compare/v8.81.0...main

## [rewrite-recipe-bom 3.29.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.29.0)

Released on April 21, 2026, with OpenRewrite 8.80.0.

#### [rewrite 8.80.0](https://github.com/openrewrite/rewrite/releases/tag/v8.80.0)

* Python: bump ty-types to 0.0.31, consume new ParamSpec wire fields by @knutwannheden in [#7431](https://github.com/openrewrite/rewrite/pull/7431)
* Python: fix `ChangeImport` leaving stray leading newline when import is the only statement by @knutwannheden in [#7433](https://github.com/openrewrite/rewrite/pull/7433)
* Go: support whitespace around `<-` with `ChanDirMarker` by @greg-at-moderne in [#7432](https://github.com/openrewrite/rewrite/pull/7432)
* Minimize the eager resolution of transitive dependencies when upgrading dependency versions. by @sambsnyd in [#7423](https://github.com/openrewrite/rewrite/pull/7423)
* Update kotlin-compiler-embeddable to 2.3.20 by @sambsnyd in [#7438](https://github.com/openrewrite/rewrite/pull/7438)
* Fix local YAML recipe scanning to be recursive by @kdvolder in [#7437](https://github.com/openrewrite/rewrite/pull/7437)
* Remove stray `[DEBUG-TMPL]` debug prints from `ScalaTreeVisitor` by @knutwannheden in [#7439](https://github.com/openrewrite/rewrite/pull/7439)

#### [rewrite 8.79.6](https://github.com/openrewrite/rewrite/releases/tag/v8.79.6)

* Scala: fix parsing of type parameters applied to method invocations by @greg-at-moderne in [#7388](https://github.com/openrewrite/rewrite/pull/7388)
* Scala: Don't swallow space of a single expression block by @greg-at-moderne in [#7390](https://github.com/openrewrite/rewrite/pull/7390)
* End files with a single newline by @greg-at-moderne in [#7391](https://github.com/openrewrite/rewrite/pull/7391)
* `EmptyNewlineAtEndOfFile` not to alter empty files by @greg-at-moderne in [#7389](https://github.com/openrewrite/rewrite/pull/7389)
* Scala: fix support for parsing of underscore numeric literals by @greg-at-moderne in [#7393](https://github.com/openrewrite/rewrite/pull/7393)
* Scala: fix parsing _ when used as lambda syntactic sugar by @greg-at-moderne in [#7395](https://github.com/openrewrite/rewrite/pull/7395)
* Harden handleError() against secondary exceptions by @Jenson3210 in [#7387](https://github.com/openrewrite/rewrite/pull/7387)
* Add go.mod parser and GoResolutionResult marker by @jkschneider in [#7397](https://github.com/openrewrite/rewrite/pull/7397)
* Detect cyclic property references instead of StackOverflowError by @kmccarp in [#7396](https://github.com/openrewrite/rewrite/pull/7396)
* Omit version when annotation processor is managed by parent POM by @timtebeek in [#7392](https://github.com/openrewrite/rewrite/pull/7392)
* Include java.version and classpath in parser construction errors by @timtebeek in [#7362](https://github.com/openrewrite/rewrite/pull/7362)
* Preserve Unicode escapes in Javadoc HTML element and attribute names by @timtebeek in [#7394](https://github.com/openrewrite/rewrite/pull/7394)
* Fix/change method target to static constructor wildcard by @kdvolder in [#7399](https://github.com/openrewrite/rewrite/pull/7399)
* Scala: handling optional semicolons by @greg-at-moderne in [#7400](https://github.com/openrewrite/rewrite/pull/7400)
* Scala: introduce `S.FunctionCall` to model non-MethodInvocation function calls by @greg-at-moderne in [#7401](https://github.com/openrewrite/rewrite/pull/7401)
* Scala: fix newlines handling within new call by @greg-at-moderne in [#7402](https://github.com/openrewrite/rewrite/pull/7402)
* Scala: remove trailing whitespace from code by @greg-at-moderne in [#7403](https://github.com/openrewrite/rewrite/pull/7403)
* Scala: model partial functions with short match syntax by @greg-at-moderne in [#7404](https://github.com/openrewrite/rewrite/pull/7404)
* Python: add RPC codec for `JavaType.Annotation` by @knutwannheden in [#7405](https://github.com/openrewrite/rewrite/pull/7405)
* Python: fix AutoFormat crash on `import ... as ...` by @knutwannheden in [#7412](https://github.com/openrewrite/rewrite/pull/7412)
* Scala: support for right-associative operators in infix syntax by @greg-at-moderne in [#7410](https://github.com/openrewrite/rewrite/pull/7410)
* Fix KotlinBlockStatementTemplateGenerator for Unit-returning method invocations by @timtebeek in [#7409](https://github.com/openrewrite/rewrite/pull/7409)
* Wire `JavaType.Annotation` element values across all RPC implementations by @knutwannheden in [#7415](https://github.com/openrewrite/rewrite/pull/7415)
* Fix Kotlin method declaringType for primitive receivers by @timtebeek in [#7413](https://github.com/openrewrite/rewrite/pull/7413)
* Kotlin: declare caller-scope type variables on synthetic Template class by @timtebeek in [#7414](https://github.com/openrewrite/rewrite/pull/7414)
* Add YAML StringUtils.quoteIfNeeded() for safe scalar quoting by @Jenson3210 in [#7416](https://github.com/openrewrite/rewrite/pull/7416)
* Remove debug files from Scala support PR by @Jenson3210 in [#7419](https://github.com/openrewrite/rewrite/pull/7419)
* `AppendToTextFile`: support glob patterns for the relative file name by @timtebeek in [#7417](https://github.com/openrewrite/rewrite/pull/7417)
* Python RPC: don't send prefix/markers for delegating wrapper types by @knutwannheden in [#7424](https://github.com/openrewrite/rewrite/pull/7424)
* JavaScript: fix non-FQ type on enum declarations and harden `parseProject` by @knutwannheden in [#7425](https://github.com/openrewrite/rewrite/pull/7425)
* Walk `JavaType` refs embedded in annotation element values by @knutwannheden in [#7426](https://github.com/openrewrite/rewrite/pull/7426)

#### [rewrite 8.79.5](https://github.com/openrewrite/rewrite/releases/tag/v8.79.5)

* Fix being unable to correctly load recipes whose superclasses come from other jars. by @sambsnyd in [#7338](https://github.com/openrewrite/rewrite/pull/7338)
* Fix JavaSourceSet phantom diffs and use cached updates in all wrapping visitors by @steve-aom-elliott in [#7376](https://github.com/openrewrite/rewrite/pull/7376)
* Auto-deduce valid values for enum @Option fields by @timtebeek in [#7354](https://github.com/openrewrite/rewrite/pull/7354)
* Prevent NPEs in ChangeDependencyGroupIdAndArtifactId by @MBoegers in [#7379](https://github.com/openrewrite/rewrite/pull/7379)
* `LocalRemoteArtifactCache.hashUri()` micro optimization by @timtebeek in [#7370](https://github.com/openrewrite/rewrite/pull/7370)
* Strip Object bound from Java-origin type parameters surfaced as Library by @jkschneider in [#7377](https://github.com/openrewrite/rewrite/pull/7377)
* Fix RemoveUnusedImports removing imports used as static field qualifiers by @utafrali in [#7383](https://github.com/openrewrite/rewrite/pull/7383)
* Scala parser: wrap non-Expression J trees in S.StatementExpression at visitUnknown fallbacks by @jkschneider in [#7385](https://github.com/openrewrite/rewrite/pull/7385)
* Fix UpgradePluginVersion to handle plugins with 'apply false' by @flex-gwanbin in [#6269](https://github.com/openrewrite/rewrite/pull/6269)

#### [rewrite 8.79.4](https://github.com/openrewrite/rewrite/releases/tag/v8.79.4)

* `StringUtils` micro performance optimizations by @greg-at-moderne in [#7366](https://github.com/openrewrite/rewrite/pull/7366)
* Add $N backref capture to ChangeFrom by @jkschneider in [#7371](https://github.com/openrewrite/rewrite/pull/7371)
* Fix Go RPC round-trip issues for Print path and delta encoding by @jkschneider in [#7372](https://github.com/openrewrite/rewrite/pull/7372)
* Fix NPE in ChangeDependencyGroupIdAndArtifactId for POMs without dependencyManagement by @MBoegers in [#7374](https://github.com/openrewrite/rewrite/pull/7374)
* Fix ChangeDependency routing Gradle build files to updateJavaSourceSet instead of gradleVisitor by @steve-aom-elliott in [#7373](https://github.com/openrewrite/rewrite/pull/7373)
* Align Kotlin type model with Java parser output by @jkschneider in [#7364](https://github.com/openrewrite/rewrite/pull/7364)
* Scala parser: eliminate J.Unknown, add S types for Scala-specific constructs by @jkschneider in [#7375](https://github.com/openrewrite/rewrite/pull/7375)
* Remove stale maven.compiler.source/target properties after release replacement by @timtebeek in [#7315](https://github.com/openrewrite/rewrite/pull/7315)

#### [rewrite 8.79.3](https://github.com/openrewrite/rewrite/releases/tag/v8.79.3)

* C#: Pass classpath via environment variable instead of -cp argument by @macsux in [#7345](https://github.com/openrewrite/rewrite/pull/7345)
* Make AddProfile idempotent by @timtebeek in [#7356](https://github.com/openrewrite/rewrite/pull/7356)
* Suppress spurious MockWebServer crash warnings in CI logs by @timtebeek in [#7357](https://github.com/openrewrite/rewrite/pull/7357)
* Add recipes to Gradle best practices by @timtebeek in [#7353](https://github.com/openrewrite/rewrite/pull/7353)
* Add recipes to Maven best practices by @timtebeek in [#7352](https://github.com/openrewrite/rewrite/pull/7352)
* Prevent marker-only changes from producing phantom diffs by @steve-aom-elliott in [#7358](https://github.com/openrewrite/rewrite/pull/7358)
* Resolve Maven property references when matching dependency tags by @timtebeek in [#7351](https://github.com/openrewrite/rewrite/pull/7351)
* JavaScript: fail fast if no codec for Json.Document by @greg-at-moderne in [#7359](https://github.com/openrewrite/rewrite/pull/7359)

#### [rewrite 8.79.2](https://github.com/openrewrite/rewrite/releases/tag/v8.79.2)

* C#: Fix PointerDereference type propagation crash by @macsux in [#7325](https://github.com/openrewrite/rewrite/pull/7325)
* RequirementsTxtParser: surface resolution failures as ParseExceptionResult by @Jenson3210 in [#7326](https://github.com/openrewrite/rewrite/pull/7326)
* Fix AddKeyValue logging parser errors for trailing dot in keyPath by @timtebeek in [#7327](https://github.com/openrewrite/rewrite/pull/7327)
* ChangeDependency skips dependencies whose new coordinates don't resolve by @steve-aom-elliott in [#7321](https://github.com/openrewrite/rewrite/pull/7321)
* Move rewrite-go Go module up one directory by @jkschneider in [#7329](https://github.com/openrewrite/rewrite/pull/7329)
* Reuse C# RPC process across CSharpRecipeTest methods by @steve-aom-elliott in [#7332](https://github.com/openrewrite/rewrite/pull/7332)
* Fix IndexOutOfBoundsException in JavaTemplateParser.parseExpression for local class types by @knutwannheden in [#7335](https://github.com/openrewrite/rewrite/pull/7335)
* Fix RemoveUnusedImports keeping import only referenced in type attribution by @timtebeek in [#7336](https://github.com/openrewrite/rewrite/pull/7336)
* Skip plugins block in UsePropertyAssignmentSyntax by @timtebeek in [#7337](https://github.com/openrewrite/rewrite/pull/7337)
* Fix UnsupportedOperationException in Py.ExpressionTypeTree.withType() by @knutwannheden in [#7314](https://github.com/openrewrite/rewrite/pull/7314)
* Fix `BlankLinesVisitor.visitImport()` `IndexOutOfBoundsException` on Python files by @knutwannheden in [#7340](https://github.com/openrewrite/rewrite/pull/7340)
* Fixed an issue with lingering Tempdirs and missing marker descriptions. by @Jenson3210 in [#7330](https://github.com/openrewrite/rewrite/pull/7330)
* Fix `GroovyTemplate` failure when method invocation has `void` return type by @knutwannheden in [#7341](https://github.com/openrewrite/rewrite/pull/7341)
* RPC: explicitly fail if RPC receives a message it has no codec for by @greg-at-moderne in [#7342](https://github.com/openrewrite/rewrite/pull/7342)
* Fix duplicate marketplace categories from case-sensitive displayName matching by @pdelagrave in [#7334](https://github.com/openrewrite/rewrite/pull/7334)
* C#: Expose csproj visitor classes for reuse in custom recipes by @macsux in [#7324](https://github.com/openrewrite/rewrite/pull/7324)
* Add FindStyles diagnostic recipe and test Kotlin style detection behavior by @Jenson3210 in [#6634](https://github.com/openrewrite/rewrite/pull/6634)
* JavaScript: register existing `RemoveDependency` recipe by @greg-at-moderne in [#7343](https://github.com/openrewrite/rewrite/pull/7343)
* Expand star imports in ChangePackage and related recipes when they would create ambiguity by @steve-aom-elliott in [#7202](https://github.com/openrewrite/rewrite/pull/7202)
* Fix file handle leak from ProcessBuilder.redirectError() on Windows by @shanman190 in [#7346](https://github.com/openrewrite/rewrite/pull/7346)
* C#: Add Preconditions.Not, And, and recipe-based Check support by @macsux in [#7348](https://github.com/openrewrite/rewrite/pull/7348)
* Work around dotnet tool exec auth failure on private NuGet feeds by @macsux in [#7347](https://github.com/openrewrite/rewrite/pull/7347)

#### [rewrite 8.79.1](https://github.com/openrewrite/rewrite/releases/tag/v8.79.1)

* C#: Improve csproj manipulation and add reattestation by @macsux in [#7316](https://github.com/openrewrite/rewrite/pull/7316)
* XmlParser: case-insensitive accept for nuget.config by @steve-aom-elliott in [#7317](https://github.com/openrewrite/rewrite/pull/7317)
* C#: Remove REWRITE_SOURCE_PATH env var from RPC launcher by @macsux in [#7322](https://github.com/openrewrite/rewrite/pull/7322)
* Treat all packages listed in requirements.txt as direct dependencies by @Jenson3210 in [#7320](https://github.com/openrewrite/rewrite/pull/7320)
* Parse all requirements files in requirements-only Python projects by @Jenson3210 in [#7323](https://github.com/openrewrite/rewrite/pull/7323)

#### [rewrite-all 1.25.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.25.0)

* Update FindCallGraphTest to expect void for Kotlin Unit return type by @timtebeek in [#43](https://github.com/openrewrite/rewrite-all/pull/43)

#### [rewrite-apache 2.25.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.25.0)

* Add explicit Charset to deprecated Apache FileUtils methods by @timtebeek in [#125](https://github.com/openrewrite/rewrite-apache/pull/125)
* Enable migrateTransitiveParent test for HttpClient 5 upgrade by @timtebeek in [#126](https://github.com/openrewrite/rewrite-apache/pull/126)
* Add composite recipe to prefer JDK over Apache Commons by @timtebeek in [#127](https://github.com/openrewrite/rewrite-apache/pull/127)

#### [rewrite-codemods 0.25.2](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.2)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.12](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.12)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-feature-flags 1.20.3](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.3)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-github-actions 3.21.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.21.0)

* Remove PreferSecretsInheritWorkflow recipe by @timtebeek in [#175](https://github.com/openrewrite/rewrite-github-actions/pull/175)
* Add PreferBlockStyleJobDependencies recipe by @timtebeek in [#176](https://github.com/openrewrite/rewrite-github-actions/pull/176)
* Add GitHubActionsBestPractices recipe by @timtebeek in [#178](https://github.com/openrewrite/rewrite-github-actions/pull/178)

#### [rewrite-gitlab 0.21.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.21.0)

* Fix indentation in MigrateToRules via AutoFormatVisitor by @scuba10steve in [#39](https://github.com/openrewrite/rewrite-gitlab/pull/39)

#### [rewrite-gradle-plugin 7.31.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.31.0)

* Add Javadoc to RewriteExtension and sync test to prevent drift by @timtebeek in [#435](https://github.com/openrewrite/rewrite-gradle-plugin/pull/435)
* Generate plugin reference docs and deploy via GitHub Pages by @timtebeek in [#436](https://github.com/openrewrite/rewrite-gradle-plugin/pull/436)
* Convert GitHub Pages index to HTML using pandoc by @timtebeek in [#437](https://github.com/openrewrite/rewrite-gradle-plugin/pull/437)
* Fix HTML table width in GitHub Pages documentation by @timtebeek in [#438](https://github.com/openrewrite/rewrite-gradle-plugin/pull/438)
* Mark plugin-created configurations as non-consumable by @timtebeek in [#434](https://github.com/openrewrite/rewrite-gradle-plugin/pull/434)
* Exclude generated sources in build directory from parsing by @timtebeek in [#433](https://github.com/openrewrite/rewrite-gradle-plugin/pull/433)
* Add testGradle9 task pinned to Gradle 9.4.1 on Java 25 by @timtebeek in [#440](https://github.com/openrewrite/rewrite-gradle-plugin/pull/440)

#### [rewrite-hibernate 2.20.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.20.0)

* Add MigrateDialect recipe for Hibernate 6.2 dialect migration by @salaheddinemchich in [#80](https://github.com/openrewrite/rewrite-hibernate/pull/80)
* Add class renames for Hibernate 7.0 migration by @salaheddinemchich in [#82](https://github.com/openrewrite/rewrite-hibernate/pull/82)
* Add Session method renames for Hibernate 7.0 migration by @salaheddinemchich in [#83](https://github.com/openrewrite/rewrite-hibernate/pull/83)
* Add Session load/saveOrUpdate and CascadeType renames for Hibernate 7.0 by @salaheddinemchich in [#84](https://github.com/openrewrite/rewrite-hibernate/pull/84)

#### [rewrite-hibernate 2.19.3](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.19.3)

* Consolidate Hibernate ORM ChangeDependency entries to preserve shared version properties by @steve-aom-elliott in [#78](https://github.com/openrewrite/rewrite-hibernate/pull/78)

#### [rewrite-jackson 1.22.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.22.0)

* Stop folding non-setter methods into ObjectMapper builder by @Jenson3210 in [#132](https://github.com/openrewrite/rewrite-jackson/pull/132)
* Migrate jacksonObjectMapper() chains (including trailing .apply blocks) to jacksonMapperBuilder() by @steve-aom-elliott in [#133](https://github.com/openrewrite/rewrite-jackson/pull/133)

#### [rewrite-jackson 1.21.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.21.1)

* Remove rewrite-static-analysis dependency by @timtebeek in [#128](https://github.com/openrewrite/rewrite-jackson/pull/128)
* Add ObjectNode method renames for Jackson 2→3 migration by @Jenson3210 in [#129](https://github.com/openrewrite/rewrite-jackson/pull/129)

#### [rewrite-java-dependencies 1.54.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.1)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-jenkins 0.34.7](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.7)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-joda 0.8.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.8.1)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-liberty 1.23.12](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.12)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-logging-frameworks 3.27.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.27.1)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-maven-plugin 6.37.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.37.0)

* Fix GHSA-6fmv-xxpf-w3cw: pin plexus-utils 3.6.1 and suppress false positive by @timtebeek in [#1138](https://github.com/openrewrite/rewrite-maven-plugin/pull/1138)
* Validate DEVELOCITY_ACCESS_KEY format before build by @timtebeek in [#1141](https://github.com/openrewrite/rewrite-maven-plugin/pull/1141)
* Add Slack notification for scheduled CI failures by @timtebeek in [#1140](https://github.com/openrewrite/rewrite-maven-plugin/pull/1140)
* Resolve Maven user properties (-D) in YAML configuration by @timtebeek in [#1139](https://github.com/openrewrite/rewrite-maven-plugin/pull/1139)
* Skip parsing generated sources; use compiled classes instead by @timtebeek in [#1142](https://github.com/openrewrite/rewrite-maven-plugin/pull/1142)
* Fix plexus-utils CVE-2025-67030 suppression by @Jenson3210 in [#1144](https://github.com/openrewrite/rewrite-maven-plugin/pull/1144)
* Move dependency-check-maven plugin from reporting to build by @Jenson3210 in [#1145](https://github.com/openrewrite/rewrite-maven-plugin/pull/1145)

#### [rewrite-micrometer 0.28.9](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.9)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-micronaut 2.33.3](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.3)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-micronaut 2.33.2](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.2)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-migrate-java 3.33.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.33.0)

* Add URLEqualsHashCodeRecipes to Java best practices by @timtebeek in [#1058](https://github.com/openrewrite/rewrite-migrate-java/pull/1058)
* Add --add-opens JVM args to surefire/failsafe for Java 25 by @timtebeek in [#1055](https://github.com/openrewrite/rewrite-migrate-java/pull/1055)
* Collapse UpgradeDockerImageVersion cartesian via ChangeFrom capture by @jkschneider in [#1060](https://github.com/openrewrite/rewrite-migrate-java/pull/1060)
* Add NoJodaTime to Java best practices by @timtebeek in [#1061](https://github.com/openrewrite/rewrite-migrate-java/pull/1061)
* Support `copyOf` migration for Guava by @greg-at-moderne in [#1062](https://github.com/openrewrite/rewrite-migrate-java/pull/1062)
* Rename `_` identifier to `__` for Java ≤ 8 source files by @Jenson3210 in [#1063](https://github.com/openrewrite/rewrite-migrate-java/pull/1063)
* Fix `ClassCastException` on parenthesized initializers in `var` recipes by @knutwannheden in [#1064](https://github.com/openrewrite/rewrite-migrate-java/pull/1064)
* Gate Kotlin-based Java version cap on actual Kotlin sources by @timtebeek in [#1066](https://github.com/openrewrite/rewrite-migrate-java/pull/1066)
* Fix `MigrateCollections*` template errors on complex expression contexts by @knutwannheden in [#1067](https://github.com/openrewrite/rewrite-migrate-java/pull/1067)

#### [rewrite-migrate-java 3.32.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.32.1)

* Remove parentheses from single unnamed lambda parameters by @timtebeek in [#1054](https://github.com/openrewrite/rewrite-migrate-java/pull/1054)
* Skip Kotlin and Groovy files in ReplaceUnusedVariablesWithUnderscore by @timtebeek in [#1056](https://github.com/openrewrite/rewrite-migrate-java/pull/1056)

#### [rewrite-netty 0.9.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.9.0)

* Wrap code references in backticks in recipe description by @timtebeek in [#15](https://github.com/openrewrite/rewrite-netty/pull/15)

#### [rewrite-okhttp 0.22.4](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.4)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-openapi 0.31.4](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.4)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-polyglot 2.10.2](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.2)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.5.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.5.0)

* Only update .gitignore when CSV context files have data rows by @timtebeek in [#13](https://github.com/openrewrite/rewrite-prethink/pull/13)
* Improve agent config template for parallel context reads by @mtthwcmpbll in [#15](https://github.com/openrewrite/rewrite-prethink/pull/15)

#### [rewrite-quarkus 2.31.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.31.0)

* JavaEE migration tests no longer need 2 cycles by @steve-aom-elliott in [#111](https://github.com/openrewrite/rewrite-quarkus/pull/111)

#### [rewrite-rewrite 0.24.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.24.0)

* Strip comments from replacement in GenerateDeprecatedMethodRecipes by @timtebeek in [#73](https://github.com/openrewrite/rewrite-rewrite/pull/73)
* Skip cast in UseVisitWithParentCursor when invocation is a statement by @knutwannheden in [#74](https://github.com/openrewrite/rewrite-rewrite/pull/74)

#### [rewrite-spring 6.30.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.30.0)

* Quote YAML values containing colons in `AddSpringProperty` by @timtebeek in [#1001](https://github.com/openrewrite/rewrite-spring/pull/1001)
* Upgrade Kotlin to 2.2.x as part of Spring Boot 4 migration by @steve-aom-elliott in [#1004](https://github.com/openrewrite/rewrite-spring/pull/1004)

#### [rewrite-spring 6.29.2](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.29.2)

* Picks up latest `org.openrewrite.recipe:rewrite-hibernate` that contains chained improvements

#### [rewrite-spring 6.29.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.29.1)

* Exclude test sources from FindApiCalls recipe by @timtebeek in [#989](https://github.com/openrewrite/rewrite-spring/pull/989)
* Remove jakarta-servlet.version property in Spring Boot 3.2 upgrade by @timtebeek in [#990](https://github.com/openrewrite/rewrite-spring/pull/990)
* Skip `StringUtils#isEmpty` to `ObjectUtils#isEmpty` replacement for collections by @timtebeek in [#991](https://github.com/openrewrite/rewrite-spring/pull/991)
* Fix UpdateRequestCache failing on inline HttpSessionRequestCache constructor by @timtebeek in [#992](https://github.com/openrewrite/rewrite-spring/pull/992)
* Skip spring-boot-starter-validation when jakarta.validation-api is present by @timtebeek in [#993](https://github.com/openrewrite/rewrite-spring/pull/993)
* Fix flyway starter getting explicit version when managed by parent by @timtebeek in [#994](https://github.com/openrewrite/rewrite-spring/pull/994)
* Add explicit `scope: test` to test starter dependencies in MigrateToModularStarters by @timtebeek in [#995](https://github.com/openrewrite/rewrite-spring/pull/995)
* Skip adding CrudRepository when already on Spring Data 3.x by @steve-aom-elliott in [#996](https://github.com/openrewrite/rewrite-spring/pull/996)
* Add recipe to rename logback.xml to logback-spring.xml by @Jenson3210 in [#997](https://github.com/openrewrite/rewrite-spring/pull/997)
* Fix broken Flyway starter test and add Gradle coverage by @steve-aom-elliott in [#998](https://github.com/openrewrite/rewrite-spring/pull/998)

#### [rewrite-spring-to-quarkus 0.8.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.8.1)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite/compare/v8.80.0...main

#### [rewrite-spring-to-quarkus 0.8.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.8.0)

* Fix incorrect getId/setId removal and wrong PanacheEntity base class by @timtebeek in [#82](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/82)
* Fix AddProfile generating malformed XML (Issue #68) by @timtebeek in [#81](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/81)
* Convert @ConfigurationProperties classes to @ConfigMapping interfaces by @timtebeek in [#83](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/83)
* Fix PanacheMongoRepository generic type parameter mismatch (Issue #67) by @timtebeek in [#84](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/84)

#### [rewrite-static-analysis 2.33.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.33.0)

* A new test case for `SimplifyBooleanExpression` by @greg-at-moderne in [#848](https://github.com/openrewrite/rewrite-static-analysis/pull/848)
* `InstanceOfPatternMatch` to avoid providing invalid variable definitions pointing to itself by @greg-at-moderne in [#849](https://github.com/openrewrite/rewrite-static-analysis/pull/849)
* Enrich recipe descriptions with rationale by @jkschneider in [#850](https://github.com/openrewrite/rewrite-static-analysis/pull/850)
* Fix EmptyBlock, FinalClass, HideUtilityClassConstructor; add regression tests by @timtebeek in [#851](https://github.com/openrewrite/rewrite-static-analysis/pull/851)
* Fix switch-related recipe bugs (#6, #9, #14, #687) by @timtebeek in [#852](https://github.com/openrewrite/rewrite-static-analysis/pull/852)
* Add space after // in single-line comments by @AVIMTA in [#854](https://github.com/openrewrite/rewrite-static-analysis/pull/854)
* Fix InstanceOfPatternMatch duplicate pattern variable names with flow scoping by @timtebeek in [#855](https://github.com/openrewrite/rewrite-static-analysis/pull/855)
* Fix RenameExceptionInEmptyCatch crash on Kotlin/Groovy files by @timtebeek in [#856](https://github.com/openrewrite/rewrite-static-analysis/pull/856)
* Fix FinalizeLocalVariables crash on Kotlin/Groovy top-level variables by @timtebeek in [#857](https://github.com/openrewrite/rewrite-static-analysis/pull/857)
* Fix UnnecessaryExplicitTypeArguments within lambda return statements by @timtebeek in [#858](https://github.com/openrewrite/rewrite-static-analysis/pull/858)
* Add SillyEqualsCheck recipe (RSPEC-S2159) by @timtebeek in [#834](https://github.com/openrewrite/rewrite-static-analysis/pull/834)
* Add RemoveUnusedLabels recipe (RSPEC-S1065) by @timtebeek in [#835](https://github.com/openrewrite/rewrite-static-analysis/pull/835)
* Add S2209/S3252 recipe: Static members via class name by @timtebeek in [#836](https://github.com/openrewrite/rewrite-static-analysis/pull/836)
* Add S1185 recipe: Remove methods that only call super by @timtebeek in [#837](https://github.com/openrewrite/rewrite-static-analysis/pull/837)
* NeedBraces: add test for if-else, fix do-while by @greg-at-moderne in [#859](https://github.com/openrewrite/rewrite-static-analysis/pull/859)
* Add tests confirming #20 is fixed by @greg-at-moderne in [#860](https://github.com/openrewrite/rewrite-static-analysis/pull/860)
* Handle chained addition in PreferIncrementOperator by @greg-at-moderne in [#816](https://github.com/openrewrite/rewrite-static-analysis/pull/816)
* Fix UnnecessaryCatch for nested try-with-resources close() by @timtebeek in [#863](https://github.com/openrewrite/rewrite-static-analysis/pull/863)
* Fix FinalizePrivateFields breaking code with lambda reads in field initializers by @timtebeek in [#862](https://github.com/openrewrite/rewrite-static-analysis/pull/862)
* Regression test for `ReplaceStackWithDeque` crash on `this` argument by @knutwannheden in [#864](https://github.com/openrewrite/rewrite-static-analysis/pull/864)

#### [rewrite-templating 1.41.5](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.5)

* OpenRewrite v8.80.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.35.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.35.0)

* Skip FieldAccess arguments in AssertThrowsOnLastStatement by @timtebeek in [#965](https://github.com/openrewrite/rewrite-testing-frameworks/pull/965)
* Add MigrateToKafkaNative recipe for Testcontainers (#568) by @timtebeek in [#967](https://github.com/openrewrite/rewrite-testing-frameworks/pull/967)
* Fix ClassCastException in RemoveTimesZeroAndOne by @timtebeek in [#969](https://github.com/openrewrite/rewrite-testing-frameworks/pull/969)
* Fix RemoveTryCatchFailBlocks failing when removing blocks within lambda expressions by @sambsnyd in [#970](https://github.com/openrewrite/rewrite-testing-frameworks/pull/970)
* Use KotlinTypeUtils.isKotlinUnit to match Kotlin void return types by @timtebeek in [#971](https://github.com/openrewrite/rewrite-testing-frameworks/pull/971)
* Fix MockWebServer Dispatcher return type and RecordedRequest renames by @timtebeek in [#972](https://github.com/openrewrite/rewrite-testing-frameworks/pull/972)
* Add @MockitoSettings(strictness = Strictness.WARN) for Mockito migration by @bmuschko in [#966](https://github.com/openrewrite/rewrite-testing-frameworks/pull/966)

#### [rewrite-third-party 0.38.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.38.0)

* Auto-generate picnic.yml from the error-prone-contrib jar by @timtebeek in [#68](https://github.com/openrewrite/rewrite-third-party/pull/68)

## [rewrite-recipe-bom 3.28.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.28.0)

Released on April 8, 2026, with OpenRewrite 8.79.0.

#### [rewrite 8.79.0](https://github.com/openrewrite/rewrite/releases/tag/v8.79.0)

* Go: Fix how generics (parametrized types) are parsed by @greg-at-moderne in [#7294](https://github.com/openrewrite/rewrite/pull/7294)
* Fix DTD ENTITY parsing when quoted values contain angle brackets by @timtebeek in [#7280](https://github.com/openrewrite/rewrite/pull/7280)
* Scala: `ExpressionStatement`s by @greg-at-moderne in [#7296](https://github.com/openrewrite/rewrite/pull/7296)
* C#: Fix RPC serialization of XmlDoc comments by @greg-at-moderne in [#7297](https://github.com/openrewrite/rewrite/pull/7297)
* Fix NPE in UpgradeDependencyVersion ext property upgrade by @Jenson3210 in [#7299](https://github.com/openrewrite/rewrite/pull/7299)
* Scala: fix parsing of pattern matching with case conditions by @greg-at-moderne in [#7298](https://github.com/openrewrite/rewrite/pull/7298)
* Go: fix parsing of multi-parameter generics by @greg-at-moderne in [#7300](https://github.com/openrewrite/rewrite/pull/7300)
* Add UsePropertyAssignmentSyntax recipe for Gradle (#5828) by @timtebeek in [#7286](https://github.com/openrewrite/rewrite/pull/7286)
* Scala: parsing to support multiline case blocks with no `{}` braces by @greg-at-moderne in [#7301](https://github.com/openrewrite/rewrite/pull/7301)
* Support META-INF/services files in ChangePackage and ChangeType by @timtebeek in [#7282](https://github.com/openrewrite/rewrite/pull/7282)
* Preserve whitespace in DTD internal subset markup declarations by @Jenson3210 in [#7302](https://github.com/openrewrite/rewrite/pull/7302)
* Fix Groovy as-style type casts losing space around `as` keyword by @timtebeek in [#7303](https://github.com/openrewrite/rewrite/pull/7303)
* Python: fix for not crashing with empty files by @greg-at-moderne in [#7304](https://github.com/openrewrite/rewrite/pull/7304)
* Scala: fix whitespace parsing of type casts by @greg-at-moderne in [#7306](https://github.com/openrewrite/rewrite/pull/7306)
* Fix MavenDependency#findNewerVersion ExactVersion edge cases by @timtebeek in [#7305](https://github.com/openrewrite/rewrite/pull/7305)
* Fix `IndexOutOfBoundsException` in `JavaTemplateParser.parseExpression` by @knutwannheden in [#7295](https://github.com/openrewrite/rewrite/pull/7295)
* Fix Docker line continuation with CRLF line endings by @steve-aom-elliott in [#7309](https://github.com/openrewrite/rewrite/pull/7309)
* Fix UpdateMavenModel using stale projectPoms for child module resolution by @timtebeek in [#7310](https://github.com/openrewrite/rewrite/pull/7310)
* Fix MergeYaml Document.End fallback inserting extra blank lines by @timtebeek in [#7311](https://github.com/openrewrite/rewrite/pull/7311)
* Fix URISyntaxException in MavenPomDownloader for unresolved version placeholders by @timtebeek in [#7313](https://github.com/openrewrite/rewrite/pull/7313)
* Add PythonDependencyFile trait for polymorphic dependency management by @Jenson3210 in [#7274](https://github.com/openrewrite/rewrite/pull/7274)

#### [rewrite 8.78.6](https://github.com/openrewrite/rewrite/releases/tag/v8.78.6)

* Fix ChangePackage not rewriting fully qualified javadoc references by @timtebeek in [#7284](https://github.com/openrewrite/rewrite/pull/7284)
* Prevent UpgradeDependencyVersion from downgrading ext property versions by @steve-aom-elliott in [#7290](https://github.com/openrewrite/rewrite/pull/7290)
* Only add SCM to root POM in UpdateScmFromGitOrigin by @timtebeek in [#7287](https://github.com/openrewrite/rewrite/pull/7287)
* Fix parsing of type-use annotations on qualified types in array declarations by @steve-aom-elliott in [#7289](https://github.com/openrewrite/rewrite/pull/7289)
* Fix MergeYaml wildcard, flow-style sequence, and comment handling by @timtebeek in [#7291](https://github.com/openrewrite/rewrite/pull/7291)
* Extend MethodMatcher's ability to make structural matches when partial type information is available by @sambsnyd in [#7292](https://github.com/openrewrite/rewrite/pull/7292)
* Fix CsvDataTableStore failing to read rows with cells larger than 4096 characters. by @sambsnyd in [#7293](https://github.com/openrewrite/rewrite/pull/7293)

#### [rewrite-all 1.24.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.24.1)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.24.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.24.0)

* Bumped vulnerable dependencies by @Jenson3210 in [#121](https://github.com/openrewrite/rewrite-apache/pull/121)
* Add IsBlankToJdk recipe to replace StringUtils#isBlank and #isNotBlank with JDK equivalents by @ap44444 in [#122](https://github.com/openrewrite/rewrite-apache/pull/122)
* Add DefaultIfBlankToJdk recipe to replace StringUtils#defaultIfBlank with JDK equivalent by @ap44444 in [#124](https://github.com/openrewrite/rewrite-apache/pull/124)

#### [rewrite-codemods 0.25.1](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.1)

* Upgrade lodash to 4.18.0+ (CVE-2026-4800) by @timtebeek in [#64](https://github.com/moderneinc/rewrite-codemods/pull/64)

#### [rewrite-codemods 0.25.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.25.0)

* Update Prethink context by @kmccarp in [#62](https://github.com/moderneinc/rewrite-codemods/pull/62)

#### [rewrite-cucumber-jvm 2.11.11](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.11)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.20.2](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.2)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.20.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.20.0)

* feat(github-actions): Enable adding runners to all the jobs within a workflow by @BelmoMusta in [#170](https://github.com/openrewrite/rewrite-github-actions/pull/170)
* Drop `Recipe` suffix from security recipe class names by @timtebeek in [#172](https://github.com/openrewrite/rewrite-github-actions/pull/172)
* Fix JsonPath matchers after wildcard expansion change by @timtebeek in [#173](https://github.com/openrewrite/rewrite-github-actions/pull/173)

#### [rewrite-gitlab 0.20.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.20.2)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.30.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.30.0)

* Skip deletion of files that were never written to disk by @bmuschko in [#431](https://github.com/openrewrite/rewrite-gradle-plugin/pull/431)
* Fix isExcluded gitignore handling using shared GitIgnore utility by @pdelagrave in [#432](https://github.com/openrewrite/rewrite-gradle-plugin/pull/432)

#### [rewrite-hibernate 2.19.2](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.19.2)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.21.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.21.0)

* Preserve comments when migrating setters to builder by @Jenson3210 in [#123](https://github.com/openrewrite/rewrite-jackson/pull/123)
* Support mixture of fluent and setters in MigrateMapperSettersToBuilder by @Jenson3210 in [#125](https://github.com/openrewrite/rewrite-jackson/pull/125)
* Add recipe to replace deprecated PropertyNamingStrategy constants by @timtebeek in [#127](https://github.com/openrewrite/rewrite-jackson/pull/127)

#### [rewrite-java-dependencies 1.54.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.54.0)

* Add test for invertMarking with version range precondition by @timtebeek in [#175](https://github.com/openrewrite/rewrite-java-dependencies/pull/175)

#### [rewrite-jenkins 0.34.6](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.6)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.8.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.8.0)

* Use `JavaTemplate.apply()` static method by @timtebeek in [#20](https://github.com/openrewrite/rewrite-joda/pull/20)

#### [rewrite-liberty 1.23.11](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.11)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.27.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.27.0)

* Fix IndexOutOfBoundsException when JUL placeholders exceed argument count by @timtebeek in [#284](https://github.com/openrewrite/rewrite-logging-frameworks/pull/284)
* Fix exception consumed by format placeholder in CompleteExceptionLogging by @timtebeek in [#285](https://github.com/openrewrite/rewrite-logging-frameworks/pull/285)

#### [rewrite-micrometer 0.28.8](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.8)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.33.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.1)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.32.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.32.0)

* Cap Java version at 24 for Kotlin &lt;2.3 in UpgradeToJava25 by @timtebeek in [#1035](https://github.com/openrewrite/rewrite-migrate-java/pull/1035)
* Inline JavaTemplate fields at their usage sites by @timtebeek in [#1036](https://github.com/openrewrite/rewrite-migrate-java/pull/1036)
* Use `JavaTemplate.apply()` static method by @timtebeek in [#1037](https://github.com/openrewrite/rewrite-migrate-java/pull/1037)
* Fix ClassCastException in UseVarForGenericMethodInvocations by @knutwannheden in [#1039](https://github.com/openrewrite/rewrite-migrate-java/pull/1039)
* Upgrade Mockito to 5.17.x in Java 25 migration recipe by @timtebeek in [#1041](https://github.com/openrewrite/rewrite-migrate-java/pull/1041)
* Migrate Mojarra and Glassfish JSF dependencies to Jakarta Faces by @timtebeek in [#1040](https://github.com/openrewrite/rewrite-migrate-java/pull/1040)
* Upgrade jakarta.annotation-api to 3.0.x in Jakarta EE 11 recipe by @timtebeek in [#1042](https://github.com/openrewrite/rewrite-migrate-java/pull/1042)
* Move type-use annotations to array brackets during JSpecify migration by @timtebeek in [#1038](https://github.com/openrewrite/rewrite-migrate-java/pull/1038)
* Add explicit casts for visitor visit() return type by @timtebeek in [#1049](https://github.com/openrewrite/rewrite-migrate-java/pull/1049)
* Add UseVarForTypeCast and UseVarForConstructors to UseVar recipe by @timtebeek in [#1050](https://github.com/openrewrite/rewrite-migrate-java/pull/1050)
* Replace Collections.emptyXXX with Immutable Static Factory Methods by @mkarg in [#1045](https://github.com/openrewrite/rewrite-migrate-java/pull/1045)
* Fix `AddMissingMethodImplementation` generating stubs for inherited methods by @timtebeek in [#1051](https://github.com/openrewrite/rewrite-migrate-java/pull/1051)
* Add EnableLombokAnnotationProcessor to LombokBestPractices by @timtebeek in [#1052](https://github.com/openrewrite/rewrite-migrate-java/pull/1052)

#### [rewrite-netty 0.8.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.8.0)

* Add support to migrate from 3.2.x to 4.1.x by @tmoreira2020 in [#14](https://github.com/openrewrite/rewrite-netty/pull/14)

#### [rewrite-okhttp 0.22.3](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.3)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.31.3](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.3)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.1)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.4.2](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.4.2)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.4.1](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.4.1)

* Fix failing to read rows with cells larger than 4096 characters. by @sambsnyd in [#12](https://github.com/openrewrite/rewrite-prethink/pull/12)

#### [rewrite-quarkus 2.30.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.30.0)

* Fix AddProperty constructor calls for rewrite#7275 by @timtebeek in [#110](https://github.com/openrewrite/rewrite-quarkus/pull/110)

#### [rewrite-rewrite 0.23.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.23.0)

* Increase Gradle heap size by @greg-at-moderne in [#66](https://github.com/openrewrite/rewrite-rewrite/pull/66)
* Add UseJavaTemplateStaticApply recipe by @timtebeek in [#68](https://github.com/openrewrite/rewrite-rewrite/pull/68)
* Add JUnit6BestPractices and Assertj to RecipeTestingBestPractices by @timtebeek in [#69](https://github.com/openrewrite/rewrite-rewrite/pull/69)
* Fix compilation error in SingleDocumentExample by @timtebeek in [#70](https://github.com/openrewrite/rewrite-rewrite/pull/70)
* Add cast for iso-style visitors in UseVisitWithParentCursor by @timtebeek in [#71](https://github.com/openrewrite/rewrite-rewrite/pull/71)
* Add data table to GenerateDeprecatedMethodRecipes by @timtebeek in [#72](https://github.com/openrewrite/rewrite-rewrite/pull/72)

#### [rewrite-spring 6.29.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.29.0)

* Fix UnnecessarySpringExtensionTest classpath version mismatch by @steve-aom-elliott in [#985](https://github.com/openrewrite/rewrite-spring/pull/985)
* Add Spring Data 3.0 upgrade recipe by @steve-aom-elliott in [#984](https://github.com/openrewrite/rewrite-spring/pull/984)
* Consolidate Spring Data migration YAML into two files by @timtebeek in [#986](https://github.com/openrewrite/rewrite-spring/pull/986)
* Fix AddProperty constructor calls for rewrite#7275 by @timtebeek in [#987](https://github.com/openrewrite/rewrite-spring/pull/987)
* OpenRewrite recipe best practices by @timtebeek in [#988](https://github.com/openrewrite/rewrite-spring/pull/988)

#### [rewrite-spring-to-quarkus 0.7.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.7.1)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.32.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.32.0)

* Remove @Disabled tests in `ReplaceStackWithDequeTest` by @greg-at-moderne in [#840](https://github.com/openrewrite/rewrite-static-analysis/pull/840)
* A couple of test cases in `RemoveExtraSemicolonsTest ` are no longer expected to fail by @greg-at-moderne in [#841](https://github.com/openrewrite/rewrite-static-analysis/pull/841)
* Fix compilation after new args added to Cs.CompilationUnit by @greg-at-moderne in [#842](https://github.com/openrewrite/rewrite-static-analysis/pull/842)
* Improve AnnotateNullableParameters to avoid duplicate annotations and annotation placement issues by @stefanodallapalma in [#843](https://github.com/openrewrite/rewrite-static-analysis/pull/843)
* Inline JavaTemplate fields at call sites by @timtebeek in [#844](https://github.com/openrewrite/rewrite-static-analysis/pull/844)
* Use `JavaTemplate.apply()` static method by @timtebeek in [#846](https://github.com/openrewrite/rewrite-static-analysis/pull/846)
* Improve AnnotateNullableMethods to avoid duplicate annotations and annotation placement issues by @stefanodallapalma in [#845](https://github.com/openrewrite/rewrite-static-analysis/pull/845)
* Skip `InstanceOfPatternMatch` for try-with-resources casts by @timtebeek in [#847](https://github.com/openrewrite/rewrite-static-analysis/pull/847)

#### [rewrite-templating 1.41.4](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.4)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.34.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.34.0)

* Remove empty if blocks after initMocks/openMocks cleanup by @timtebeek in [#952](https://github.com/openrewrite/rewrite-testing-frameworks/pull/952)
* Extend SimplifyMockitoVerifyWhenGiven for more S6068 cases by @timtebeek in [#953](https://github.com/openrewrite/rewrite-testing-frameworks/pull/953)
* Add RemoveDoNothingForDefaultMocks to Mockito1to3Migration by @bmuschko in [#956](https://github.com/openrewrite/rewrite-testing-frameworks/pull/956)
* Skip private method stubbing in PowerMockitoDoStubbingToMockito by @bmuschko in [#957](https://github.com/openrewrite/rewrite-testing-frameworks/pull/957)
* Fix AssertToAssertionsTest expectations for static imports by @timtebeek in [#958](https://github.com/openrewrite/rewrite-testing-frameworks/pull/958)
* Add ThenThrowCheckedExceptionToRuntimeException recipe by @bmuschko in [#954](https://github.com/openrewrite/rewrite-testing-frameworks/pull/954)
* Fix AnyToNullable removing any() import when untyped any() still used by @timtebeek in [#960](https://github.com/openrewrite/rewrite-testing-frameworks/pull/960)
* Rename implicit @MethodSource methods in RemoveTestPrefix by @timtebeek in [#961](https://github.com/openrewrite/rewrite-testing-frameworks/pull/961)
* Add UpgradeWiremockDependencyVersion recipe by @timtebeek in [#963](https://github.com/openrewrite/rewrite-testing-frameworks/pull/963)
* Support intermediate methods in SimplifyChainedAssertJAssertion by @timtebeek in [#962](https://github.com/openrewrite/rewrite-testing-frameworks/pull/962)
* Add MigrateToOracleFree recipe for Testcontainers by @timtebeek in [#964](https://github.com/openrewrite/rewrite-testing-frameworks/pull/964)

#### [rewrite-third-party 0.37.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.37.1)

* OpenRewrite v8.79.0: https://github.com/openrewrite/rewrite

## [rewrite-recipe-bom 3.27.1](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.27.1)

Released on April 6, 2026, with OpenRewrite 8.78.5.

#### [rewrite 8.78.5](https://github.com/openrewrite/rewrite/releases/tag/v8.78.5)

* AddProperty add options for controlling where new properties get inserted by @sambsnyd in [#7275](https://github.com/openrewrite/rewrite/pull/7275)
* When the `CachingMavenRecipeBundleResolver` is closed, ensure that all cached `MavenRecipeBundleResolver` instances are closed as well by @shanman190 in [#7277](https://github.com/openrewrite/rewrite/pull/7277)
* Fix CsvDataTableStore.getRows() returning String[] where other implementation returned typed objects by @sambsnyd in [#7279](https://github.com/openrewrite/rewrite/pull/7279)
* Roll back localRefs on failed GetObject exchange by @kmccarp in [#6932](https://github.com/openrewrite/rewrite/pull/6932)
* Support changing from a constructor to a factory method in ChangeMethodTargetToStatic by @timtebeek in [#7281](https://github.com/openrewrite/rewrite/pull/7281)
* Fix ChangePropertyKey whitespace quirks when moving subproperties by @timtebeek in [#7283](https://github.com/openrewrite/rewrite/pull/7283)

#### [rewrite 8.78.4](https://github.com/openrewrite/rewrite/releases/tag/v8.78.4)

* Fix Javadoc @see field reference resolution by @timtebeek in [#7257](https://github.com/openrewrite/rewrite/pull/7257)
* Go: load recipe modules as plugins for real execution by @jkschneider in [#7263](https://github.com/openrewrite/rewrite/pull/7263)
* Go: automatically visit tree nodes in RPC queues with no onChange callback by @greg-at-moderne in [#7264](https://github.com/openrewrite/rewrite/pull/7264)
* Go: `StatementExpression` registered as a type by @greg-at-moderne in [#7265](https://github.com/openrewrite/rewrite/pull/7265)
* Go: Fix parsing of comments in empty argument list by @greg-at-moderne in [#7267](https://github.com/openrewrite/rewrite/pull/7267)
* Exclude the version txt file from the build cache by @greg-at-moderne in [#7266](https://github.com/openrewrite/rewrite/pull/7266)
* Go: Fix type cast in RPC, literals are not always primitive in Go by @greg-at-moderne in [#7268](https://github.com/openrewrite/rewrite/pull/7268)
* Go: Run go native tests as part of the build by @greg-at-moderne in [#7270](https://github.com/openrewrite/rewrite/pull/7270)
* Go: fix more cases of comments parsing in empty enumerations by @greg-at-moderne in [#7269](https://github.com/openrewrite/rewrite/pull/7269)
* Declare Gradle inputs to tasks for rewrite-csharp and rewrite-python by @greg-at-moderne in [#7272](https://github.com/openrewrite/rewrite/pull/7272)
* Go: Fix RPC serialization for varargs by @greg-at-moderne in [#7271](https://github.com/openrewrite/rewrite/pull/7271)
* Go: Fix parsing of a trailing comma in argument list by @greg-at-moderne in [#7273](https://github.com/openrewrite/rewrite/pull/7273)

#### [rewrite 8.78.3](https://github.com/openrewrite/rewrite/releases/tag/v8.78.3)

* Fix StackOverflowError from self-referential supertype in Python type mapping by @knutwannheden in [#7240](https://github.com/openrewrite/rewrite/pull/7240)
* Go: Fix parsing of multi-value initialization by @greg-at-moderne in [#7244](https://github.com/openrewrite/rewrite/pull/7244)
* Limit name-based repo duplicate check to URL-less repositories by @pstreef in [#7245](https://github.com/openrewrite/rewrite/pull/7245)
* Go: add `PointerType` by @greg-at-moderne in [#7246](https://github.com/openrewrite/rewrite/pull/7246)
* Scala parser: map def declarations to J.MethodDeclaration by @jkschneider in [#7248](https://github.com/openrewrite/rewrite/pull/7248)
* Fix `ChangeType` `UnsupportedOperationException` on JS `FunctionCall` nodes by @knutwannheden in [#7239](https://github.com/openrewrite/rewrite/pull/7239)
* Go: fix functions type mapping by @greg-at-moderne in [#7247](https://github.com/openrewrite/rewrite/pull/7247)
* Go: Fixing how comments are parsed by @greg-at-moderne in [#7249](https://github.com/openrewrite/rewrite/pull/7249)
* Scala parser: add try/catch/finally and match expression support by @jkschneider in [#7252](https://github.com/openrewrite/rewrite/pull/7252)
* Fix Go RPC protocol and recipe installer for CLI integration by @jkschneider in [#7254](https://github.com/openrewrite/rewrite/pull/7254)
* Defer .NET SDK validation to execution phase by @bmuschko in [#7253](https://github.com/openrewrite/rewrite/pull/7253)
* Update rewrite-scala to target Java 17 bytecode for main source by @shanman190 in [#7255](https://github.com/openrewrite/rewrite/pull/7255)
* Go: override Java receiver visitors for Go-specific type mismatches by @jkschneider in [#7258](https://github.com/openrewrite/rewrite/pull/7258)
* Scala parser: add try/catch/finally, match, and fix complex parameter types by @jkschneider in [#7260](https://github.com/openrewrite/rewrite/pull/7260)
* Go: add StatementExpression, fix variadic params, remove receiver overrides by @jkschneider in [#7261](https://github.com/openrewrite/rewrite/pull/7261)
* Implement CsvDataTableStore.getRows() so that it can read back data it has written by @sambsnyd in [#7256](https://github.com/openrewrite/rewrite/pull/7256)

#### [rewrite 8.78.2](https://github.com/openrewrite/rewrite/releases/tag/v8.78.2)

* Surface actual parse error in MergeYaml via Validated API by @timtebeek in [#6818](https://github.com/openrewrite/rewrite/pull/6818)
* JS: Populate declaring type on standalone function declarations by @timtebeek in [#7222](https://github.com/openrewrite/rewrite/pull/7222)
* Fix RPC recipes errors being swallowed when in batch by @greg-at-moderne in [#7226](https://github.com/openrewrite/rewrite/pull/7226)
* JavaScript: `upgrade-dependency-version` recipe to fail when `npm install` fails by @greg-at-moderne in [#7227](https://github.com/openrewrite/rewrite/pull/7227)
* Fix duplicate gradlePluginPortal() in settings.gradle.kts by @pstreef in [#7230](https://github.com/openrewrite/rewrite/pull/7230)
* Go: add GoTemplate, GoPattern, MethodMatcher, TypeUtils, and rename module by @jkschneider in [#7235](https://github.com/openrewrite/rewrite/pull/7235)
* Gracefully handle malformed Maven version strings by @timtebeek in [#7234](https://github.com/openrewrite/rewrite/pull/7234)
* Suppress vulnerabilities by @Jenson3210 in [#7236](https://github.com/openrewrite/rewrite/pull/7236)
* Fix StackOverflow in RELEASE_PATTERN by reducing regex branch nodes by @Jenson3210 in [#7231](https://github.com/openrewrite/rewrite/pull/7231)

#### [rewrite 8.78.1](https://github.com/openrewrite/rewrite/releases/tag/v8.78.1)

* Fix NumberFormatException in version comparison for versions with 6+ numeric parts by @Jenson3210 in [#7207](https://github.com/openrewrite/rewrite/pull/7207)
* Scala parser: enum support, wildcard import preservation, intersection types by @jkschneider in [#7203](https://github.com/openrewrite/rewrite/pull/7203)
* Fix build cache determinism for reproducible builds by @ribafish in [#7173](https://github.com/openrewrite/rewrite/pull/7173)
* Fix build cache determinism for rewrite-go goBuild task by @timtebeek in [#7214](https://github.com/openrewrite/rewrite/pull/7214)
* C#: Add `MSBuildProject`/`DotNetProject` RPC codecs and `Parse` handler by @knutwannheden in [#7156](https://github.com/openrewrite/rewrite/pull/7156)
* Add GitIgnore utility for gitignored-and-untracked checks by @pdelagrave in [#7215](https://github.com/openrewrite/rewrite/pull/7215)
* Allow null Properties to skip YAML placeholder resolution by @timtebeek in [#7200](https://github.com/openrewrite/rewrite/pull/7200)
* C#: Exclude git-ignored files from SolutionParser results by @knutwannheden in [#7181](https://github.com/openrewrite/rewrite/pull/7181)
* Support changing properties in Maven profiles by @MBoegers in [#7031](https://github.com/openrewrite/rewrite/pull/7031)
* Add SyncGradleExtPropertiesWithBom recipe by @Jenson3210 in [#6958](https://github.com/openrewrite/rewrite/pull/6958)
* C#: Add documentation comment LST infrastructure by @jkschneider in [#7015](https://github.com/openrewrite/rewrite/pull/7015)
* Skip redundant property override in child when parent declares same dependency by @MBoegers in [#6955](https://github.com/openrewrite/rewrite/pull/6955)
* Add recipes which sort dependency declarations in Gradle and Maven by @sambsnyd in [#7217](https://github.com/openrewrite/rewrite/pull/7217)
* Fix AddProperty skipping property when child POM has relativePath by @MBoegers in [#6943](https://github.com/openrewrite/rewrite/pull/6943)
* Add ParseError support to rewrite-go parser and RPC by @jkschneider in [#7218](https://github.com/openrewrite/rewrite/pull/7218)
* Handle directory-style relativePath in getParentWithinProject by @kmccarp in [#7223](https://github.com/openrewrite/rewrite/pull/7223)
* Python: Populate declaring type on function declarations by @timtebeek in [#7221](https://github.com/openrewrite/rewrite/pull/7221)
* Rewrite encoding detection as inverted UTF-8 validator by @pstreef in [#7213](https://github.com/openrewrite/rewrite/pull/7213)
* Fix parsing of dockerfiles which contain $ and escaped \" characters by @sambsnyd in [#7224](https://github.com/openrewrite/rewrite/pull/7224)
* Replace `ThreadLocal` with cursor-based accumulator in `DeclarativeRecipe` by @knutwannheden in [#7225](https://github.com/openrewrite/rewrite/pull/7225)
* Use `JavaTemplate.apply()` static method by @timtebeek in [#7219](https://github.com/openrewrite/rewrite/pull/7219)

#### [rewrite 8.78.0](https://github.com/openrewrite/rewrite/releases/tag/v8.78.0)

* Support Checkstyle ImportOrder option="inflow" for mixed static/non-static imports by @timtebeek in [#7180](https://github.com/openrewrite/rewrite/pull/7180)
* Improve Scala parser for Scala 2 and 3 compatibility by @jkschneider in [#7197](https://github.com/openrewrite/rewrite/pull/7197)
* Support same-column sequence indentation in YAML by @Jenson3210 in [#7135](https://github.com/openrewrite/rewrite/pull/7135)
* JavaScript: setting RPC metrics file in debugging mode too by @greg-at-moderne in [#7201](https://github.com/openrewrite/rewrite/pull/7201)
* Add Go language support module (rewrite-go) by @jkschneider in [#7116](https://github.com/openrewrite/rewrite/pull/7116)
* Fix slow Lombok initialization caused by ShadowClassLoader scanning entire classpath by @knutwannheden in [#7205](https://github.com/openrewrite/rewrite/pull/7205)
* C#: Fix `InvalidCastException` in `CSharpPrinter` for expression-bodied methods by @knutwannheden in [#7206](https://github.com/openrewrite/rewrite/pull/7206)
* Fix AddProperty duplicating self-closing XML property tags by @timtebeek in [#7209](https://github.com/openrewrite/rewrite/pull/7209)
* Fix multi-line Dockerfile COPY with line continuations by @timtebeek in [#7210](https://github.com/openrewrite/rewrite/pull/7210)
* Fix context-sensitive template replacement for standalone expression statements by @timtebeek in [#7211](https://github.com/openrewrite/rewrite/pull/7211)

#### [rewrite 8.77.2](https://github.com/openrewrite/rewrite/releases/tag/v8.77.2)

* C#: Allow directives to interleave with usings/externs in `CompilationUnit` by @knutwannheden in [#7176](https://github.com/openrewrite/rewrite/pull/7176)
* C#: Fix `AutoFormat` corrupting whitespace outside target subtree by @knutwannheden in [#7179](https://github.com/openrewrite/rewrite/pull/7179)
* Fix context-sensitive template crash for anonymous class args in assignments by @timtebeek in [#7177](https://github.com/openrewrite/rewrite/pull/7177)
* C#: Preserve `MinimumViableSpacing` fixes when Roslyn formatting is a no-op by @knutwannheden in [#7182](https://github.com/openrewrite/rewrite/pull/7182)
* Add negation support to JsonPathMatcher filter expressions by @steve-aom-elliott in [#7164](https://github.com/openrewrite/rewrite/pull/7164)
* C#: Fix Stack empty crash in CSharpPrinter.VisitConditionalDirective by @knutwannheden in [#7183](https://github.com/openrewrite/rewrite/pull/7183)
* Treat missing POMs for non-classpath dependencies as warnings by @Jenson3210 in [#7163](https://github.com/openrewrite/rewrite/pull/7163)
* C#: Fix MinimumViableSpacing fix lost during WhitespaceReconciler by @knutwannheden in [#7186](https://github.com/openrewrite/rewrite/pull/7186)
* C#: Fix numeric literal type attribution to reflect suffix by @knutwannheden in [#7187](https://github.com/openrewrite/rewrite/pull/7187)
* C#: Unwrap parentheses in pattern matching comparator by @knutwannheden in [#7188](https://github.com/openrewrite/rewrite/pull/7188)
* C#: Fix AutoFormat not inserting newlines in synthesized nodes by @knutwannheden in [#7189](https://github.com/openrewrite/rewrite/pull/7189)
* C#: Fix RPC deserialization error for J.ControlParentheses by @knutwannheden in [#7190](https://github.com/openrewrite/rewrite/pull/7190)
* C#: Fix `AutoFormat` not expanding empty constructor bodies with initializers by @knutwannheden in [#7191](https://github.com/openrewrite/rewrite/pull/7191)
* C#: Fix MaybeAutoFormat no-op when SDK consumed via NuGet PackageReference by @knutwannheden in [#7192](https://github.com/openrewrite/rewrite/pull/7192)
* JS: Fix type attribution for classes, methods, and FQN paths by @jkschneider in [#7195](https://github.com/openrewrite/rewrite/pull/7195)
* C#: Add `.editorconfig`-based formatting style detection for `RoslynFormatter` by @knutwannheden in [#7194](https://github.com/openrewrite/rewrite/pull/7194)
* C#: Auto-parenthesize IsPattern with or/and combinators by @knutwannheden in [#7196](https://github.com/openrewrite/rewrite/pull/7196)
* JavaScript: `UpgradeDependencyVersion` to support package patterns by @greg-at-moderne in [#7198](https://github.com/openrewrite/rewrite/pull/7198)

#### [rewrite 8.77.1](https://github.com/openrewrite/rewrite/releases/tag/v8.77.1)

* C#: Replace `CSharpPattern.ToFindVisitor()` with static `CSharpPattern.Find()` by @knutwannheden in [#7136](https://github.com/openrewrite/rewrite/pull/7136)
* Re-enable disabled tests in `VariableNameUtilsTest` by @greg-at-moderne in [#7137](https://github.com/openrewrite/rewrite/pull/7137)
* Fix RPC receiving of method invocation identifier type by @greg-at-moderne in [#7139](https://github.com/openrewrite/rewrite/pull/7139)
* Java: Fix parsing of extra semicolons after imports by @greg-at-moderne in [#7138](https://github.com/openrewrite/rewrite/pull/7138)
* Validate types in newly generated sources by @sambsnyd in [#7141](https://github.com/openrewrite/rewrite/pull/7141)
* C#: NuGet recipe improvements for .NET upgrade migrations by @macsux in [#7144](https://github.com/openrewrite/rewrite/pull/7144)
* Propagate SSL/proxy environment to pip and uv subprocesses by @pdelagrave in [#7012](https://github.com/openrewrite/rewrite/pull/7012)
* DeleteProperty should not remove pre-existing empty mappings by @steve-aom-elliott in [#7145](https://github.com/openrewrite/rewrite/pull/7145)
* C#: Make AttributeList implement Statement to fix deserialization by @knutwannheden in [#7146](https://github.com/openrewrite/rewrite/pull/7146)
* C#: Fix stack overflow in RPC sender when diffing cyclic type graphs by @knutwannheden in [#7148](https://github.com/openrewrite/rewrite/pull/7148)
* Fix template matching for member references with literal receivers by @knutwannheden in [#7147](https://github.com/openrewrite/rewrite/pull/7147)
* C#: Deduplicate TargetFrameworks list after replacement by @knutwannheden in [#7149](https://github.com/openrewrite/rewrite/pull/7149)
* C#: Make value types assignable to their `Nullable<T>` counterparts by @knutwannheden in [#7151](https://github.com/openrewrite/rewrite/pull/7151)
* C#: Reintroduce separate `externs`, `usings`, `attributeLists` on `CompilationUnit`/`NamespaceDeclaration` by @knutwannheden in [#7152](https://github.com/openrewrite/rewrite/pull/7152)
* C#: Preserve `NullSafe` marker through `CSharpTemplate.Rewrite()` by @knutwannheden in [#7140](https://github.com/openrewrite/rewrite/pull/7140)
* remove last usage of `withInstanceName` on data tables by @MBoegers in [#7154](https://github.com/openrewrite/rewrite/pull/7154)
* Fix template replacement for method invocations inside type casts by @timtebeek in [#7155](https://github.com/openrewrite/rewrite/pull/7155)
* FindManagedDependency: resolve version for BOM imports by @MBoegers in [#7162](https://github.com/openrewrite/rewrite/pull/7162)
* C#: Fully qualify Core namespace references in test files by @macsux in [#7166](https://github.com/openrewrite/rewrite/pull/7166)
* C#: Batch Roslyn formatting into a single pass per source file by @knutwannheden in [#7165](https://github.com/openrewrite/rewrite/pull/7165)
* C#: Fix `CSharpTemplate.Rewrite` whitespace artifact on sibling methods by @knutwannheden in [#7169](https://github.com/openrewrite/rewrite/pull/7169)
* C#: Fix parser for file-local `#define` with `#if` directives by @knutwannheden in [#7168](https://github.com/openrewrite/rewrite/pull/7168)
* C#: Include unified diff in print idempotency parse errors by @knutwannheden in [#7172](https://github.com/openrewrite/rewrite/pull/7172)
* C#: Use list protocol for `ConditionalDirective.directiveLines` in RPC by @knutwannheden in [#7081](https://github.com/openrewrite/rewrite/pull/7081)
* C#: Replace ExceptionFilteredTry with WhenClause on catch variable initializer by @knutwannheden in [#7171](https://github.com/openrewrite/rewrite/pull/7171)
* Yaml: handle dashes on its own lines better by @greg-at-moderne in [#7174](https://github.com/openrewrite/rewrite/pull/7174)
* Write data table headers using column descriptor names not display names by @bryceatmoderne in [#7167](https://github.com/openrewrite/rewrite/pull/7167)

#### [rewrite-gradle-plugin 7.29.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.29.1)

* Skip deletion of files that were never written to disk by @bmuschko in [#431](https://github.com/openrewrite/rewrite-gradle-plugin/pull/431)
* Fix isExcluded gitignore handling using shared GitIgnore utility by @pdelagrave in [#432](https://github.com/openrewrite/rewrite-gradle-plugin/pull/432)

#### [rewrite-jackson 1.20.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.20.1)

* Add recipe to add missing Jackson dataformat dependencies by @timtebeek in [#112](https://github.com/openrewrite/rewrite-jackson/pull/112)
* Extend MigrateMapperSettersToBuilder to all format-aligned mappers by @timtebeek in [#111](https://github.com/openrewrite/rewrite-jackson/pull/111)
* Reorder StreamWriteException constructor arguments for Jackson 3 by @timtebeek in [#110](https://github.com/openrewrite/rewrite-jackson/pull/110)
* Handle Kotlin AST wrappers in MigrateMapperSettersToBuilder by @timtebeek in [#114](https://github.com/openrewrite/rewrite-jackson/pull/114)
* Use += instead of = for lombok.jacksonized.jacksonVersion config by @timtebeek in [#116](https://github.com/openrewrite/rewrite-jackson/pull/116)
* Skip Kotlin files in AddJsonCreatorToPrivateConstructors by @timtebeek in [#118](https://github.com/openrewrite/rewrite-jackson/pull/118)
* Rename getSerializationConfig/getDeserializationConfig for Jackson 3 by @Jenson3210 in [#119](https://github.com/openrewrite/rewrite-jackson/pull/119)
* Add TODO comment for SimpleModule methods on modules that changed hierarchy by @Jenson3210 in [#120](https://github.com/openrewrite/rewrite-jackson/pull/120)
* Add recipes for Jackson 3 builder API migrations by @Jenson3210 in [#121](https://github.com/openrewrite/rewrite-jackson/pull/121)

#### [rewrite-maven-plugin 6.35.1](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.35.1)

* Fix datatable_export test for updated CSV column headers by @timtebeek in [#1132](https://github.com/openrewrite/rewrite-maven-plugin/pull/1132)
* Fix files falsely marked as changed by migration recipes by @timtebeek in [#1134](https://github.com/openrewrite/rewrite-maven-plugin/pull/1134)
* Pass null properties when resolvePropertiesInYaml=false by @timtebeek in [#1133](https://github.com/openrewrite/rewrite-maven-plugin/pull/1133)
* Fix isExcluded gitignore handling using shared GitIgnore utility by @pdelagrave in [#1135](https://github.com/openrewrite/rewrite-maven-plugin/pull/1135)

#### [rewrite-migrate-java 3.31.3](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.31.3)

* Add acceptTransitive to javax-to-jakarta AddDependency entries by @steve-aom-elliott in [#1034](https://github.com/openrewrite/rewrite-migrate-java/pull/1034)

#### [rewrite-migrate-java 3.31.2](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.31.2)

* Only add lombok annotation processor to modules that use lombok by @Jenson3210 in [#1031](https://github.com/openrewrite/rewrite-migrate-java/pull/1031)
* Add missing AddDependency fallback for jakarta.servlet.jsp-api in JSP migration by @steve-aom-elliott in [#1032](https://github.com/openrewrite/rewrite-migrate-java/pull/1032)
* Add missing AddDependency fallback entries for all javax-to-jakarta migrations by @steve-aom-elliott in [#1033](https://github.com/openrewrite/rewrite-migrate-java/pull/1033)

#### [rewrite-migrate-java 3.31.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.31.1)

* Add JSP and JSTL API version upgrades to Jakarta EE 10 recipe by @steve-aom-elliott in [#1029](https://github.com/openrewrite/rewrite-migrate-java/pull/1029)

#### [rewrite-spring 6.28.2](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.28.2)

* Use acceptTransitive in MigrateToModularStarters AddDependency recipes by @timtebeek in [#983](https://github.com/openrewrite/rewrite-spring/pull/983)

#### [rewrite-spring 6.28.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.28.1)

* Add Jakarta EE 10 migration to Spring Framework 6.0 upgrade by @steve-aom-elliott in [#975](https://github.com/openrewrite/rewrite-spring/pull/975) / [#981](https://github.com/openrewrite/rewrite-spring/pull/981)
* Guard spring property recipes with `IsPossibleSpringConfigFile` by @steve-aom-elliott in [#976](https://github.com/openrewrite/rewrite-spring/pull/976)
* Fix health actuate type relocations for registry and endpoint packages by @timtebeek in [#977](https://github.com/openrewrite/rewrite-spring/pull/977)
* Fix `MigrateUriComponentsBuilderMethods` for Kotlin by @timtebeek in [#978](https://github.com/openrewrite/rewrite-spring/pull/978)
* Migrate away from removed `spring-cloud-starter-parent` in 2025.1 by @steve-aom-elliott in [#980](https://github.com/openrewrite/rewrite-spring/pull/980) / [#982](https://github.com/openrewrite/rewrite-spring/pull/982)

#### [rewrite-testing-frameworks 3.33.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.33.0)

* OpenRewrite recipe best practices by @timtebeek in [#949](https://github.com/openrewrite/rewrite-testing-frameworks/pull/949)
* Add RemoveDoNothingForDefaultMocks recipe by @bmuschko in [#947](https://github.com/openrewrite/rewrite-testing-frameworks/pull/947)
* Add PowerMockitoDoStubbingToMockito recipe by @bmuschko in [#948](https://github.com/openrewrite/rewrite-testing-frameworks/pull/948)
* Remove @SuppressStaticInitializationFor during PowerMockito migration by @bmuschko in [#946](https://github.com/openrewrite/rewrite-testing-frameworks/pull/946)
* Add AssertEqualsIntegralDeltaToAssertEquals recipe by @timtebeek in [#950](https://github.com/openrewrite/rewrite-testing-frameworks/pull/950)
* Inline JavaParser and JavaTemplate fields in recipes by @timtebeek in [#951](https://github.com/openrewrite/rewrite-testing-frameworks/pull/951)

#### [rewrite-testing-frameworks 3.32.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.32.0)

* Fix PowerMockRunner removal leaving @Mock fields uninitialized by @bmuschko in [#942](https://github.com/openrewrite/rewrite-testing-frameworks/pull/942)
* Refactor PowerMockito recipes for clarity and single responsibility by @timtebeek in [#943](https://github.com/openrewrite/rewrite-testing-frameworks/pull/943)
* Add PowerMockWhiteboxToJavaReflection recipe by @bmuschko in [#944](https://github.com/openrewrite/rewrite-testing-frameworks/pull/944)
* Use declared parameter types for Whitebox.invokeMethod reflection by @bmuschko in [#945](https://github.com/openrewrite/rewrite-testing-frameworks/pull/945)

#### [rewrite-third-party 0.37.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.37.0)

* Limit how far back chained Quarkus migrations run by @timtebeek in [#66](https://github.com/openrewrite/rewrite-third-party/pull/66)

## [rewrite-recipe-bom 3.27.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.27.0)

Released on March 25, 2026, with OpenRewrite 8.77.0.

#### [rewrite 8.77.0](https://github.com/openrewrite/rewrite/releases/tag/v8.77.0)

* CopyValue: process all matching YAML files, not just the first by @Jenson3210 in [#7099](https://github.com/openrewrite/rewrite/pull/7099)
* Support variable references in multi-component Gradle dependency declarations by @MBoegers in [#7095](https://github.com/openrewrite/rewrite/pull/7095)
* C#: Add declarative `RewriteRule` combinator by @knutwannheden in [#7106](https://github.com/openrewrite/rewrite/pull/7106)
* Add CopyValue recipe for .properties files by @Jenson3210 in [#7097](https://github.com/openrewrite/rewrite/pull/7097)
* Fix JavaTemplate expression replacement inside return statements by @timtebeek in [#7096](https://github.com/openrewrite/rewrite/pull/7096)
* C#: Wire up capture constraint evaluation in pattern matching by @knutwannheden in [#7109](https://github.com/openrewrite/rewrite/pull/7109)
* C#: Fix indentation of flattened multi-statement template blocks by @knutwannheden in [#7110](https://github.com/openrewrite/rewrite/pull/7110)
* C#: Add `IRewriteRule.ToVisitor()` with fast-reject pattern matching by @knutwannheden in [#7111](https://github.com/openrewrite/rewrite/pull/7111)
* Fix AddSettingsPluginRepository duplicate pluginManagement when not first statement by @MBoegers in [#7105](https://github.com/openrewrite/rewrite/pull/7105)
* Docker: Add new EOL image entries and update existing data by @timtebeek in [#7108](https://github.com/openrewrite/rewrite/pull/7108)
* C#: Add `Find()` annotator overload and `ToFindVisitor()` to `CSharpPattern` by @knutwannheden in [#7115](https://github.com/openrewrite/rewrite/pull/7115)
* C#: Support variadic captures in attribute pattern matching and templates by @knutwannheden in [#7114](https://github.com/openrewrite/rewrite/pull/7114)
* Python: fix type attribution for identifiers in method invocations by @greg-at-moderne in [#7119](https://github.com/openrewrite/rewrite/pull/7119)
* Gradle: fix GradleJavaTemplateTest by @greg-at-moderne in [#7118](https://github.com/openrewrite/rewrite/pull/7118)
* C#: Simplify `IRewriteRule` API by @knutwannheden in [#7120](https://github.com/openrewrite/rewrite/pull/7120)
* C#: Enforce typed capture constraints at pattern matching time by @knutwannheden in [#7117](https://github.com/openrewrite/rewrite/pull/7117)
* C#: Fix typed capture constraints for generic interfaces and primitives by @knutwannheden in [#7122](https://github.com/openrewrite/rewrite/pull/7122)
* C#: Support open generic type parameters in typed captures by @knutwannheden in [#7124](https://github.com/openrewrite/rewrite/pull/7124)
* Fix JavaTemplate statement replacement regression for non-J.Block parent cursors by @timtebeek in [#7123](https://github.com/openrewrite/rewrite/pull/7123)
* C#: Fix typed capture type resolution and improve type system by @knutwannheden in [#7126](https://github.com/openrewrite/rewrite/pull/7126)
* Add Proxy/Proxies data model to MavenSettings by @timtebeek in [#7092](https://github.com/openrewrite/rewrite/pull/7092)
* Add visitArrayAccess to JavaPrinter for marker rendering by @steve-aom-elliott in [#7129](https://github.com/openrewrite/rewrite/pull/7129)
* Fix unchanged Quark files appearing in changeset results by @timtebeek in [#7130](https://github.com/openrewrite/rewrite/pull/7130)
* C#: Use safe pattern-match in CSharpVisitor for VisitExpression/VisitStatement by @knutwannheden in [#7133](https://github.com/openrewrite/rewrite/pull/7133)
* Continue refinements of `AddSettingsPluginRepository` by @shanman190 in [#7132](https://github.com/openrewrite/rewrite/pull/7132)
* C#: Replace `RewriteRule` with `CSharpTemplate.Rewrite()` by @knutwannheden in [#7134](https://github.com/openrewrite/rewrite/pull/7134)
* Toml: Fix comment handling in `DeleteKey` by @greg-at-moderne in [#7121](https://github.com/openrewrite/rewrite/pull/7121)

#### [rewrite 8.76.2](https://github.com/openrewrite/rewrite/releases/tag/v8.76.2)

* Preserve existing property references in UseMavenCompilerPluginReleaseConfiguration by @timtebeek in [#7101](https://github.com/openrewrite/rewrite/pull/7101)
* fix(javascript): support member renaming for aliased imports in ChangeImport by @danne-jm in [#7102](https://github.com/openrewrite/rewrite/pull/7102)
* SimplifyBooleanExpression: skip nullable boolean comparisons in Kotlin by @timtebeek in [#7103](https://github.com/openrewrite/rewrite/pull/7103)
* Recipe testing best practices by @timtebeek in [#7094](https://github.com/openrewrite/rewrite/pull/7094)
* Add ChangeTaskToTasksRegister recipe by @jhl221123 in [#5492](https://github.com/openrewrite/rewrite/pull/5492)
* Don't append display name suffix to data table file keys by @jkschneider in [#7104](https://github.com/openrewrite/rewrite/pull/7104)

#### [rewrite 8.76.1](https://github.com/openrewrite/rewrite/releases/tag/v8.76.1)

* ChangeType removes star imports when no types from the package remain by @Jenson3210 in [#7093](https://github.com/openrewrite/rewrite/pull/7093)
* Support Groovy destructuring assignment parsing by @MBoegers in [#6636](https://github.com/openrewrite/rewrite/pull/6636)
* Remove usage of DataTable#withInstanceName by @MBoegers in [#7098](https://github.com/openrewrite/rewrite/pull/7098)

#### [rewrite 8.76.0](https://github.com/openrewrite/rewrite/releases/tag/v8.76.0)

* C#: Fix parsing of nullable type constraints by @knutwannheden in [#7077](https://github.com/openrewrite/rewrite/pull/7077)
* C#: Add `JavaType.ShallowClass` to match Java-side type hierarchy by @knutwannheden in [#7078](https://github.com/openrewrite/rewrite/pull/7078)
* C#: Preserve UTF-8 BOM flag in parser for correct patch generation by @steve-aom-elliott in [#7079](https://github.com/openrewrite/rewrite/pull/7079)
* Fix ConcurrentModificationException in DeclarativeRecipe by @natedanner in [#7066](https://github.com/openrewrite/rewrite/pull/7066)
* C#: fix whitespace attachment by @greg-at-moderne in [#7076](https://github.com/openrewrite/rewrite/pull/7076)
* Fix FindEmptyMethods false positives for bodyless declarations by @timtebeek in [#7085](https://github.com/openrewrite/rewrite/pull/7085)
* Introduce DataTableStore abstraction by @jkschneider in [#7088](https://github.com/openrewrite/rewrite/pull/7088)
* Add support for Java 23+ triple-slash markdown Javadoc (///) by @timtebeek in [#7087](https://github.com/openrewrite/rewrite/pull/7087)
* ChangeType: visit annotations on package declarations by @timtebeek in [#7086](https://github.com/openrewrite/rewrite/pull/7086)
* Handle YAML complex keys to prevent ClassCastException in RPC by @kmccarp in [#7084](https://github.com/openrewrite/rewrite/pull/7084)
* Add NoSystemScopeDependencies cleanup recipe by @timtebeek in [#7055](https://github.com/openrewrite/rewrite/pull/7055)
* Add support for Kotlin multi-dollar interpolation string by @barbulescu in [#7090](https://github.com/openrewrite/rewrite/pull/7090)

#### [rewrite 8.75.11](https://github.com/openrewrite/rewrite/releases/tag/v8.75.11)

* C#: Add typed captures to template engine by @knutwannheden in [#7057](https://github.com/openrewrite/rewrite/pull/7057)
* C#: Commutative `==` / `!=` and `== null` ↔ `is null` in pattern matching by @knutwannheden in [#7058](https://github.com/openrewrite/rewrite/pull/7058)
* C#: Add `MinimumViableSpacingVisitor` for `AutoFormat` pipeline by @knutwannheden in [#7062](https://github.com/openrewrite/rewrite/pull/7062)
* C#: NuGet dependency workspace for template type attribution by @knutwannheden in [#7061](https://github.com/openrewrite/rewrite/pull/7061)
* C#: Restore NuGet global cache population during pTML by @macsux in [#7060](https://github.com/openrewrite/rewrite/pull/7060)
* Store ExecutionContext in localObjects for onComplete() retrieval by @jkschneider in [#7065](https://github.com/openrewrite/rewrite/pull/7065)
* C#: Add `CaptureKind` to template captures for position-aware scaffolding by @knutwannheden in [#7059](https://github.com/openrewrite/rewrite/pull/7059)
* C#: Scaffold strategies for class members and attributes in template engine by @knutwannheden in [#7063](https://github.com/openrewrite/rewrite/pull/7063)
* Fix load-recipe logic to find YAML recipes from dependency resource loaders by @greg-at-moderne in [#7053](https://github.com/openrewrite/rewrite/pull/7053)
* C#: Add semantic matching to pattern comparator by @knutwannheden in [#7069](https://github.com/openrewrite/rewrite/pull/7069)
* C#: Add precedence-aware parenthesization utility by @knutwannheden in [#7068](https://github.com/openrewrite/rewrite/pull/7068)
* C#: Default test framework to `Net90` reference assemblies by @knutwannheden in [#7071](https://github.com/openrewrite/rewrite/pull/7071)
* C#: Auto-parenthesize captured expressions in template substitutions by @knutwannheden in [#7073](https://github.com/openrewrite/rewrite/pull/7073)
* Normalize file URIs at intake instead of patching each consumption point by @pstreef in [#7027](https://github.com/openrewrite/rewrite/pull/7027)
* C#: Allow `Capture` objects as `MatchResult` keys by @knutwannheden in [#7074](https://github.com/openrewrite/rewrite/pull/7074)
* C#: Add extension method flag to type model by @knutwannheden in [#7075](https://github.com/openrewrite/rewrite/pull/7075)

#### [rewrite 8.75.10](https://github.com/openrewrite/rewrite/releases/tag/v8.75.10)

* Improve local NuGet development workflow by @macsux in [#7037](https://github.com/openrewrite/rewrite/pull/7037)
* Skip RPC for Java-delegate recipes in cross-language composites by @jkschneider in [#7038](https://github.com/openrewrite/rewrite/pull/7038)
* C#: Enable XML tree processing via RPC for csproj recipe support by @macsux in [#7039](https://github.com/openrewrite/rewrite/pull/7039)
* C#: Fix print idempotency for attribute arguments with trailing comments by @macsux in [#7034](https://github.com/openrewrite/rewrite/pull/7034)
* C#: Add `ParentTree` property and `PathToRoot()` to `Cursor` by @knutwannheden in [#7040](https://github.com/openrewrite/rewrite/pull/7040)
* Speed up CI: exclude slow C# RPC tests, add caching to C# build/test tasks by @knutwannheden in [#7042](https://github.com/openrewrite/rewrite/pull/7042)
* Simplify csharpPublishLocal to use local feed by @knutwannheden in [#7041](https://github.com/openrewrite/rewrite/pull/7041)
* Use try-with-resources by @timtebeek in [#7044](https://github.com/openrewrite/rewrite/pull/7044)
* Gradle 9.4.1 entry in gradle wrapper versions CSV by @greg-at-moderne in [#7046](https://github.com/openrewrite/rewrite/pull/7046)
* C#: Make `Preconditions.Check` language-agnostic like Java by @knutwannheden in [#7045](https://github.com/openrewrite/rewrite/pull/7045)
* C#: Fix null-coalescing pattern that prevents node deletion in visitors by @knutwannheden in [#7047](https://github.com/openrewrite/rewrite/pull/7047)
* Prevent duplicate imports when unfolding star imports by @Jenson3210 in [#7001](https://github.com/openrewrite/rewrite/pull/7001)
* C#: Fix `TrailingComma` markers on array initializers by @knutwannheden in [#7052](https://github.com/openrewrite/rewrite/pull/7052)
* Fix #7048: Support newer Gradle wrapper template variables by @timtebeek in [#7049](https://github.com/openrewrite/rewrite/pull/7049)
* Python: Whitespace attachment fixes by @greg-at-moderne in [#7051](https://github.com/openrewrite/rewrite/pull/7051)
* C#: Fix `AutoFormat` on structurally modified subtrees by @knutwannheden in [#7054](https://github.com/openrewrite/rewrite/pull/7054)
* Java: fixing parsing of EnumValueSets with regards to leading space by @greg-at-moderne in [#7043](https://github.com/openrewrite/rewrite/pull/7043)
* Make CsprojParser public with pre-resolved solution support by @jkschneider in [#7056](https://github.com/openrewrite/rewrite/pull/7056)

#### [rewrite 8.75.9](https://github.com/openrewrite/rewrite/releases/tag/v8.75.9)

* Fix FindEmptyMethods false positive on non-empty constructors by @timtebeek in [#7033](https://github.com/openrewrite/rewrite/pull/7033)
* UpdateGradleWrapper: handle TaskContainer-based Wrapper DSL patterns by @bmuschko in [#7035](https://github.com/openrewrite/rewrite/pull/7035)
* Fix multi-repo RPC deadlock via stderr redirect and dedicated GetObject pool by @jkschneider in [#7036](https://github.com/openrewrite/rewrite/pull/7036)

#### [rewrite 8.75.8](https://github.com/openrewrite/rewrite/releases/tag/v8.75.8)

* C#: Route all `Space` fields through `VisitSpace` in visitors by @knutwannheden in [#7016](https://github.com/openrewrite/rewrite/pull/7016)
* C#: Add `ListUtils.Map` and simplify visitor methods by @knutwannheden in [#7018](https://github.com/openrewrite/rewrite/pull/7018)
* C#: Fix `dotnet restore` failing due to semicolons in MSBuild property by @knutwannheden in [#7019](https://github.com/openrewrite/rewrite/pull/7019)
* C#: Add parse-to-print idempotency validation and `ParseError` support via RPC by @knutwannheden in [#7017](https://github.com/openrewrite/rewrite/pull/7017)
* Fix `ReplaceConstantWithAnotherConstant` leaving stale import when replacing enum constants by @MBoegers in [#7014](https://github.com/openrewrite/rewrite/pull/7014)
* JavaScript: When failing to install a recipe, let the user know which recipe by @greg-at-moderne in [#7022](https://github.com/openrewrite/rewrite/pull/7022)
* Fix IDE.properties module exclusion by @timtebeek in [#7023](https://github.com/openrewrite/rewrite/pull/7023)
* C#: Fix RPC reentrancy deadlock and enable cross-ecosystem recipe resolution by @jkschneider in [#7028](https://github.com/openrewrite/rewrite/pull/7028)
* C#: Fix `CSharpParser` round-trip for `default (T)` spacing by @knutwannheden in [#7026](https://github.com/openrewrite/rewrite/pull/7026)

#### [rewrite 8.75.7](https://github.com/openrewrite/rewrite/releases/tag/v8.75.7)

* Use File(URI).toPath() to fix Windows drive letter handling by @pstreef in [#6993](https://github.com/openrewrite/rewrite/pull/6993)
* C#: Improve type attribution coverage on identifiers and declarations by @jkschneider in [#6994](https://github.com/openrewrite/rewrite/pull/6994)
* Add RSPEC-S6809 tag to ResultOfMethodCallIgnored recipe by @timtebeek in [#6991](https://github.com/openrewrite/rewrite/pull/6991)
* C#: Add TypeUtils and MethodMatcher by @jkschneider in [#6995](https://github.com/openrewrite/rewrite/pull/6995)
* C#: Handle `Primitive(String)` in `TypeUtils.IsAssignableTo` and `GetFullyQualifiedName` by @knutwannheden in [#6996](https://github.com/openrewrite/rewrite/pull/6996)
* C#: Add null-conditional (`?.`) support to `CSharpPattern` by @knutwannheden in [#6997](https://github.com/openrewrite/rewrite/pull/6997)
* Make `TreeHelper.SetPrefix` public for recipe authors by @knutwannheden in [#6998](https://github.com/openrewrite/rewrite/pull/6998)
* Add `CSharpPattern` capture support tests for `as` operator by @knutwannheden in [#6999](https://github.com/openrewrite/rewrite/pull/6999)
* Add generic `J.SetPrefix<T>` / `J.SetId<T>` static helpers by @knutwannheden in [#7000](https://github.com/openrewrite/rewrite/pull/7000)
* C#: Add `Type` property to `Expression` and `NameTree` interfaces by @knutwannheden in [#7002](https://github.com/openrewrite/rewrite/pull/7002)
* C#: Fix `NewClass.Type` returning `void` instead of constructed type by @knutwannheden in [#7004](https://github.com/openrewrite/rewrite/pull/7004)
* JavaScript: reinstantiate `install-recipes.test.ts` tests by @greg-at-moderne in [#7005](https://github.com/openrewrite/rewrite/pull/7005)
* C#: Fix `CSharpPrinter` corruption of explicit interface implementations by @knutwannheden in [#7006](https://github.com/openrewrite/rewrite/pull/7006)
* Add XML LST support for Java-C# RPC bridge by @macsux in [#7007](https://github.com/openrewrite/rewrite/pull/7007)
* C#: Add recipe utility methods to the C# SDK by @knutwannheden in [#7008](https://github.com/openrewrite/rewrite/pull/7008)
* C#: Add `StructuralEqualityComparator` to SDK by @knutwannheden in [#7009](https://github.com/openrewrite/rewrite/pull/7009)
* Fix XML RPC bridge CI failures by @macsux in [#7010](https://github.com/openrewrite/rewrite/pull/7010)
* Fix CSharpParser handling of preprocessor directives around delegate semicolons by @knutwannheden in [#7011](https://github.com/openrewrite/rewrite/pull/7011)
* C#: csproj parsing and core dependency recipes by @jkschneider in [#7013](https://github.com/openrewrite/rewrite/pull/7013)

#### [rewrite 8.75.6](https://github.com/openrewrite/rewrite/releases/tag/v8.75.6)

* Fix C# RPC: `RecipeDescriptor` alignment by @knutwannheden in [#6942](https://github.com/openrewrite/rewrite/pull/6942)
* Python: Fixing cross-module recipe calls by @greg-at-moderne in [#6956](https://github.com/openrewrite/rewrite/pull/6956)
* Fix `IllegalArgumentException: Bad escape` for file:// Maven repos with non-ASCII paths by @pstreef in [#6960](https://github.com/openrewrite/rewrite/pull/6960)
* Add Reset JSON-RPC handler to JS and C# RPC servers by @jkschneider in [#6964](https://github.com/openrewrite/rewrite/pull/6964)
* C#: Wire auto-format into template engine via RoslynFormatter by @knutwannheden in [#6965](https://github.com/openrewrite/rewrite/pull/6965)
* Fix `AddSettingsPluginRepository` duplicate `pluginManagement` and repository handling by @timtebeek in [#6959](https://github.com/openrewrite/rewrite/pull/6959)
* C#: Fix RPC sender/receiver alignment and `CompilationUnit` fields by @knutwannheden in [#6961](https://github.com/openrewrite/rewrite/pull/6961)
* Add test for parsing deeply nested Kotlin class references by @timtebeek in [#6968](https://github.com/openrewrite/rewrite/pull/6968)
* C#: Fix incomplete visitor traversal in JavaVisitor.cs and CSharpVisitor.cs by @knutwannheden in [#6970](https://github.com/openrewrite/rewrite/pull/6970)
* C#: Parse attribute lists on type declarations by @knutwannheden in [#6971](https://github.com/openrewrite/rewrite/pull/6971)
* JS: Fast-path method name check in semantic comparator by @knutwannheden in [#6973](https://github.com/openrewrite/rewrite/pull/6973)
* JavaScript: Upgrade diff to v8 by @knutwannheden in [#6974](https://github.com/openrewrite/rewrite/pull/6974)
* Fix ChangeDependency isAcceptable to reject PlainText files by @timtebeek in [#6976](https://github.com/openrewrite/rewrite/pull/6976)
* Groovy: guard calls to `isSealed()` with the check for Groovy 4 by @greg-at-moderne in [#6975](https://github.com/openrewrite/rewrite/pull/6975)
* C#: Fix whitespace violations in parser by @knutwannheden in [#6977](https://github.com/openrewrite/rewrite/pull/6977)
* Place fenced afterSyntax markers before trailing newline in PlainText diffs by @steve-aom-elliott in [#6967](https://github.com/openrewrite/rewrite/pull/6967)
* C#: Parse attributes on fields, methods, constructors, and event fields by @knutwannheden in [#6978](https://github.com/openrewrite/rewrite/pull/6978)
* C#: Fix using `var` declaration keyword leaking into Space fields by @knutwannheden in [#6979](https://github.com/openrewrite/rewrite/pull/6979)
* Use source file charset when converting diff bytes to String by @Jenson3210 in [#6982](https://github.com/openrewrite/rewrite/pull/6982)
* C#: Consolidate namespace and compilation unit model by @jkschneider in [#6981](https://github.com/openrewrite/rewrite/pull/6981)
* Upgrade kotlin-reflect from 1.6.10 to 2.2.0 by @timtebeek in [#6984](https://github.com/openrewrite/rewrite/pull/6984)
* C#: Fix RPC delta computation and extract RecipeScheduler by @jkschneider in [#6985](https://github.com/openrewrite/rewrite/pull/6985)
* Batch consecutive same-RPC recipes via BatchVisit RPC by @jkschneider in [#6983](https://github.com/openrewrite/rewrite/pull/6983)
* Fix `BatchVisit` over-attributing `RecipesThatMadeChanges` marker by @knutwannheden in [#6987](https://github.com/openrewrite/rewrite/pull/6987)
* C#: Add `DataTable`, `DataTableStore`, and `CsvDataTableStore` by @knutwannheden in [#6988](https://github.com/openrewrite/rewrite/pull/6988)
* Initialize ScanningRecipe accumulator key eagerly for thread safety by @pstreef in [#6914](https://github.com/openrewrite/rewrite/pull/6914)
* Add favicon at project root by @greg-at-moderne in [#6980](https://github.com/openrewrite/rewrite/pull/6980)
* HasSourceSet should match any SourceFile, not just Java files by @Jenson3210 in [#6989](https://github.com/openrewrite/rewrite/pull/6989)

#### [rewrite-all 1.24.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.24.0)

* Record Error row in LanguageComposition when classification fails by @Jenson3210 in [#41](https://github.com/openrewrite/rewrite-all/pull/41)

#### [rewrite-apache 2.23.3](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.23.3)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-codemods 0.24.6](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.6)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.10](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.10)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-feature-flags 1.20.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.1)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-github-actions 3.19.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.19.0)

* Fix AddCronTrigger Jackson deserialization by @timtebeek in [#167](https://github.com/openrewrite/rewrite-github-actions/pull/167)
* feat(dependabot-cooldown): Add the ability to exclude ecosystems by @BelmoMusta in [#168](https://github.com/openrewrite/rewrite-github-actions/pull/168)

#### [rewrite-gitlab 0.20.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.20.1)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.29.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.29.0)

* Use CsvDataTableStore for data table export by @jkschneider in [#430](https://github.com/openrewrite/rewrite-gradle-plugin/pull/430)

#### [rewrite-gradle-plugin 7.28.2](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.28.2)

* Fixing handling various AGP versions in Android projects by @greg-at-moderne in [#429](https://github.com/openrewrite/rewrite-gradle-plugin/pull/429)

#### [rewrite-hibernate 2.19.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.19.1)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-jackson 1.20.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.20.0)

* Handle fluent-chained setter calls in MigrateMapperSettersToBuilder by @timtebeek in [#109](https://github.com/openrewrite/rewrite-jackson/pull/109)

#### [rewrite-jackson 1.19.3](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.19.3)

* Add Jackson 3 feature relocation, token rename, and ObjectMapper.copy() recipes by @MBoegers in [#103](https://github.com/openrewrite/rewrite-jackson/pull/103)
* Fix chained method removal in RemoveBuiltInModuleRegistrations and RemoveRedundantFeatureFlags by @timtebeek in [#107](https://github.com/openrewrite/rewrite-jackson/pull/107)
* Migrate ObjectMapper setter calls to builder pattern by @Jenson3210 in [#104](https://github.com/openrewrite/rewrite-jackson/pull/104)
* Add all ObjectMapper setter-to-builder mappings by @Jenson3210 in [#108](https://github.com/openrewrite/rewrite-jackson/pull/108)

#### [rewrite-jackson 1.19.2](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.19.2)

* Add ChangeType for SimpleFilterProvider and SimpleBeanPropertyFilter by @Jenson3210 in [#98](https://github.com/openrewrite/rewrite-jackson/pull/98)
* Handle fully-qualified feature flag references in RemoveRedundantFeatureFlags by @Jenson3210 in [#99](https://github.com/openrewrite/rewrite-jackson/pull/99)
* Migrate relocated feature constants to DateTimeFeature and EnumFeature by @Jenson3210 in [#100](https://github.com/openrewrite/rewrite-jackson/pull/100)
* Add recipe to comment on removed canSerialize/canDeserialize by @Jenson3210 in [#102](https://github.com/openrewrite/rewrite-jackson/pull/102)

#### [rewrite-jackson 1.19.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.19.1)

* Test double-brace initialization in UpdateSerializationInclusionConfiguration by @timtebeek in [#95](https://github.com/openrewrite/rewrite-jackson/pull/95)
* Fix duplicate key crash in SimplifyJacksonExceptionCatch by @Jenson3210 in [#97](https://github.com/openrewrite/rewrite-jackson/pull/97)
* Add `@JsonCreator` to non-public constructors for Jackson 3 migration by @timtebeek in [#90](https://github.com/openrewrite/rewrite-jackson/pull/90)

#### [rewrite-java-dependencies 1.53.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.53.0)

* Fix NPE with RepositoryHasDependency as precondition by @greg-at-moderne in [#174](https://github.com/openrewrite/rewrite-java-dependencies/pull/174)

#### [rewrite-jenkins 0.34.5](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.5)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.7.3](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.7.3)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.23.10](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.10)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-logging-frameworks 3.26.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.26.1)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite/compare/v8.77.0...main

#### [rewrite-maven-plugin 6.35.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.35.0)

* Add optional version input to publish workflow by @timtebeek in [#1124](https://github.com/openrewrite/rewrite-maven-plugin/pull/1124)
* Use CsvDataTableStore for data table export by @jkschneider in [#1125](https://github.com/openrewrite/rewrite-maven-plugin/pull/1125)
* Load proxy settings from Maven settings.xml by @timtebeek in [#1127](https://github.com/openrewrite/rewrite-maven-plugin/pull/1127)

#### [rewrite-maven-plugin 6.34.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.34.0)

* Add explicit Groovy source file parsing with classpath by @timtebeek in [#1119](https://github.com/openrewrite/rewrite-maven-plugin/pull/1119)
* Prevent cross-scope source files from being parsed as PlainText by @pstreef in [#1123](https://github.com/openrewrite/rewrite-maven-plugin/pull/1123)

#### [rewrite-micrometer 0.28.7](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.7)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.33.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.33.0)

* Fix scheduled CI failure in UpdateMicronautSecurity by @timtebeek in [#136](https://github.com/openrewrite/rewrite-micronaut/pull/136)
* Replace MergeYaml with CopyValue createNewKeys to fix CI by @timtebeek in [#137](https://github.com/openrewrite/rewrite-micronaut/pull/137)

#### [rewrite-migrate-java 3.31.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.31.0)

* Modernize README to reflect current project capabilities by @timtebeek in [#1020](https://github.com/openrewrite/rewrite-migrate-java/pull/1020)
* Add UseTryWithResources to Java 11 migration recipe by @timtebeek in [#1022](https://github.com/openrewrite/rewrite-migrate-java/pull/1022)
* Add ExplicitTypeToVar recipe to replace explicit type with var keyword. by @motlin in [#1009](https://github.com/openrewrite/rewrite-migrate-java/pull/1009)
* Fix IBMSemeruTest for updated ChangeType wildcard import handling by @timtebeek in [#1026](https://github.com/openrewrite/rewrite-migrate-java/pull/1026)
* Extend UseVarForPrimitive to support String literals by @timtebeek in [#1024](https://github.com/openrewrite/rewrite-migrate-java/pull/1024)
* Add notes for Faces 4.0 FacesManagedBeansRemoved by @evie-lau in [#1025](https://github.com/openrewrite/rewrite-migrate-java/pull/1025)
* Fix order for ManagedProperty migration in Faces 4.0 by @evie-lau in [#1027](https://github.com/openrewrite/rewrite-migrate-java/pull/1027)
* Add javax/jakarta.enterprise.concurrent-api migration for EE9 by @evie-lau in [#1028](https://github.com/openrewrite/rewrite-migrate-java/pull/1028)
* Add Java best practices recipe by @timtebeek in [#1021](https://github.com/openrewrite/rewrite-migrate-java/pull/1021)
* Add JavadocToMarkdownDocComment recipe (JEP 467) by @timtebeek in [#1019](https://github.com/openrewrite/rewrite-migrate-java/pull/1019)

#### [rewrite-migrate-java 3.30.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.30.1)

* Fix Jackson 2.21+ compatibility for JREThrowableFinalMethods by @timtebeek in [#1010](https://github.com/openrewrite/rewrite-migrate-java/pull/1010)
* Fix UpgradeToJava21 recipe ordering for switch expressions by @timtebeek in [#1012](https://github.com/openrewrite/rewrite-migrate-java/pull/1012)
* Fix IfElseIfConstructToSwitch null safety regression by @timtebeek in [#1014](https://github.com/openrewrite/rewrite-migrate-java/pull/1014)
* Fix Jetty EE9 dependencies by @evie-lau in [#1016](https://github.com/openrewrite/rewrite-migrate-java/pull/1016)
* Cleanup Jetty EE10 recipes. Reorder… by @evie-lau in [#1017](https://github.com/openrewrite/rewrite-migrate-java/pull/1017)

#### [rewrite-netty 0.7.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.7.1)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.22.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.2)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.31.2](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.2)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.10.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.10.0)

* Fix tracked files matching .gitignore being skipped in acceptedPaths by @pdelagrave in [#53](https://github.com/openrewrite/rewrite-polyglot/pull/53)
* Fix empty relative path handling in OmniParser by @CharlesDuboisSAP in [#52](https://github.com/openrewrite/rewrite-polyglot/pull/52)

#### [rewrite-prethink 0.4.0](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.4.0)

* Migrate to DataTableStore API by @jkschneider in [#10](https://github.com/openrewrite/rewrite-prethink/pull/10)
* Fix non-deterministic output ordering in generated files by @jkschneider in [#11](https://github.com/openrewrite/rewrite-prethink/pull/11)

#### [rewrite-prethink 0.3.6](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.3.6)

* Only update .gitignore when context files were actually generated by @timtebeek in [#9](https://github.com/openrewrite/rewrite-prethink/pull/9)

#### [rewrite-quarkus 2.29.4](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.29.4)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.22.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.22.0)

* Restrict NlsRewrite annotation removal to Recipe subclasses by @timtebeek in [#64](https://github.com/openrewrite/rewrite-rewrite/pull/64)
* Refine recipe best practices scope and edge cases by @timtebeek in [#65](https://github.com/openrewrite/rewrite-rewrite/pull/65)
* Use visit with parent cursor when calling from another visitor by @timtebeek in [#61](https://github.com/openrewrite/rewrite-rewrite/pull/61)

#### [rewrite-spring 6.28.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.28.0)

* Fix: Gate ConditionalOnBeanAnyNestedCondition to Boot 1.x by @timtebeek in [#967](https://github.com/openrewrite/rewrite-spring/pull/967)
* Restrict ReplaceStringLiteralsWithConstants to controller classes by @timtebeek in [#970](https://github.com/openrewrite/rewrite-spring/pull/970)
* Add AuthorizationManager#check to #authorize migration for Spring Security 7 by @Chhun-Lee in [#969](https://github.com/openrewrite/rewrite-spring/pull/969)
* Skip kebab-case conversion for pass-through property keys by @timtebeek in [#974](https://github.com/openrewrite/rewrite-spring/pull/974)
* Unwrap @MockBeans/@SpyBeans containers before migrating to @MockitoBean by @Jenson3210 in [#968](https://github.com/openrewrite/rewrite-spring/pull/968)
* 2025.0.x Incompatible with Spring Boot 4.0 (NoSuchMethodError) by @rkampani in [#971](https://github.com/openrewrite/rewrite-spring/pull/971)
* Jax-RS to Spring MVC Recipe by @yasaswigadde in [#903](https://github.com/openrewrite/rewrite-spring/pull/903)

#### [rewrite-spring 6.27.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.27.1)

* Stop coalescing YAML properties when separating profiles by @Jenson3210 in [#964](https://github.com/openrewrite/rewrite-spring/pull/964)
* SeparateApplicationYamlByProfile should not modify test resources by @Jenson3210 in [#965](https://github.com/openrewrite/rewrite-spring/pull/965)

#### [rewrite-spring-to-quarkus 0.7.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.7.0)

* Fix @PathParam losing parameter name (Issue #76) by @timtebeek in [#78](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/78)
* Remove Jackson BOM and allow rewrite-build-gradle-plugin to drive by @jkschneider in [#80](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/80)

#### [rewrite-static-analysis 2.31.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.31.0)

* Add InterruptedExceptionHandling recipe (RSPEC-S2142) by @timtebeek in [#838](https://github.com/openrewrite/rewrite-static-analysis/pull/838)
* Add ExplicitThis recipe to make `this.` prefix explicit. by @motlin in [#791](https://github.com/openrewrite/rewrite-static-analysis/pull/791)
* SimplifyBooleanExpression: skip nullable boolean comparisons in Kotlin by @timtebeek in [#839](https://github.com/openrewrite/rewrite-static-analysis/pull/839)

#### [rewrite-static-analysis 2.30.1](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.30.1)

* Fix RemoveInstanceOfPatternMatch crash on Groovy files by @timtebeek in [#828](https://github.com/openrewrite/rewrite-static-analysis/pull/828)
* Add `RSPEC-S2387` tag to HiddenField recipe by @timtebeek in [#829](https://github.com/openrewrite/rewrite-static-analysis/pull/829)
* Add `RSPEC-S1845` recipe: members differing only by capitalization by @timtebeek in [#830](https://github.com/openrewrite/rewrite-static-analysis/pull/830)
* Add `UseTryWithResources` recipe (`RSPEC-S2093`) by @timtebeek in [#831](https://github.com/openrewrite/rewrite-static-analysis/pull/831)
* Extend `UseTryWithResources` to non-consecutive declarations by @timtebeek in [#833](https://github.com/openrewrite/rewrite-static-analysis/pull/833)

#### [rewrite-templating 1.41.3](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.3)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.31.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.31.0)

* Fix AssertThrowsOnLastStatement crash on TypeCast arguments by @timtebeek in [#933](https://github.com/openrewrite/rewrite-testing-frameworks/pull/933)
* Functions annotated with TestFactory must return a value hence must be ignored by TestMethodsShouldBeVoid recipe by @barbulescu in [#935](https://github.com/openrewrite/rewrite-testing-frameworks/pull/935)
* Fix empty setUp/tearDown generation and missing public modifier for JUnit 4 by @bmuschko in [#936](https://github.com/openrewrite/rewrite-testing-frameworks/pull/936)
* Fix AssertThrowsOnLastStatement cursor chain for JavaTemplate compatibility by @timtebeek in [#938](https://github.com/openrewrite/rewrite-testing-frameworks/pull/938)
* Convert ArgumentMatcher anonymous class to lambda in Mockito migration by @bmuschko in [#937](https://github.com/openrewrite/rewrite-testing-frameworks/pull/937)
* Add apiguardian-api to annotation processor classpath by @timtebeek in [#939](https://github.com/openrewrite/rewrite-testing-frameworks/pull/939)
* Add mockito-junit-jupiter dependency when MockitoExtension is introduced by @bmuschko in [#941](https://github.com/openrewrite/rewrite-testing-frameworks/pull/941)
* Add PowerMockRunnerDelegateToRunWith recipe by @bmuschko in [#940](https://github.com/openrewrite/rewrite-testing-frameworks/pull/940)

#### [rewrite-third-party 0.36.4](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.36.4)

* OpenRewrite v8.77.0: https://github.com/openrewrite/rewrite

#### [rewrite-third-party 0.36.3](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.36.3)

* Pin timefold to 1.x by @greg-at-moderne in [#64](https://github.com/openrewrite/rewrite-third-party/pull/64)

## [rewrite-recipe-bom 3.26.1](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.26.1)

Released on March 12, 2026, with OpenRewrite 8.75.5.

#### [rewrite 8.75.5](https://github.com/openrewrite/rewrite/releases/tag/v8.75.5)

* C#: Roslyn-based `AutoFormat` via tree-walking reconciler by @knutwannheden in [#6953](https://github.com/openrewrite/rewrite/pull/6953)
* JavaScript: Don't use vitest in `rewrite-test.ts` by @greg-at-moderne in [#6957](https://github.com/openrewrite/rewrite/pull/6957)

#### [rewrite 8.75.4](https://github.com/openrewrite/rewrite/releases/tag/v8.75.4)

* C#: Fix template substitution for method names and variadic args by @knutwannheden in [#6940](https://github.com/openrewrite/rewrite/pull/6940)
* C#: Fix `CSharpPattern` variadic capture: zero args, non-trailing position, and min/max bounds by @knutwannheden in [#6941](https://github.com/openrewrite/rewrite/pull/6941)
* JavaScript: `RemoveDependency` recipe by @greg-at-moderne in [#6938](https://github.com/openrewrite/rewrite/pull/6938)
* JavaScript: Fixing cross-module recipe calls by @greg-at-moderne in [#6894](https://github.com/openrewrite/rewrite/pull/6894)
* Use LatestRelease for BOM version filtering in upgrade search by @Jenson3210 in [#6908](https://github.com/openrewrite/rewrite/pull/6908)
* AddDependency only scans test sources when scope is test by @Jenson3210 in [#6935](https://github.com/openrewrite/rewrite/pull/6935)
* JavaScript: Revert to previous NPM publishing by @greg-at-moderne in [#6934](https://github.com/openrewrite/rewrite/pull/6934)
* Handle integer overflow in TildeRange and CaretRange by @Jenson3210 in [#6944](https://github.com/openrewrite/rewrite/pull/6944)
* JavaScript: Revert to previous NPM publishing - continued by @greg-at-moderne in [#6947](https://github.com/openrewrite/rewrite/pull/6947)
* C#: Fix RPC receiver for brand-new trees from Java by @knutwannheden in [#6949](https://github.com/openrewrite/rewrite/pull/6949)
* Fix C# RPC ADD-based tree reconstruction for recipe execution by @macsux in [#6950](https://github.com/openrewrite/rewrite/pull/6950)
* C#: Fix RPC receiver generic type preservation and Primitive ADD path by @jkschneider in [#6951](https://github.com/openrewrite/rewrite/pull/6951)
* JavaScript: Migrate test framework from Jest to Vitest by @knutwannheden in [#6906](https://github.com/openrewrite/rewrite/pull/6906)
* Use long in Semver.max() for large version segments by @Jenson3210 in [#6952](https://github.com/openrewrite/rewrite/pull/6952)
* C#: Implement `Generate` and `GetLanguages` JSON-RPC methods by @knutwannheden in [#6946](https://github.com/openrewrite/rewrite/pull/6946)

#### [rewrite 8.75.3](https://github.com/openrewrite/rewrite/releases/tag/v8.75.3)

* Handle new ty-types 0.0.21 descriptor kinds and enriched fields by @knutwannheden in [#6893](https://github.com/openrewrite/rewrite/pull/6893)
* UpgradeTransitiveDependencyVersion should not add managed deps to child modules by @steve-aom-elliott in [#6896](https://github.com/openrewrite/rewrite/pull/6896)
* JavaScript: Add missing Type properties to some test classes by @greg-at-moderne in [#6901](https://github.com/openrewrite/rewrite/pull/6901)
* Also check thread context classloader in `TypeTable.fromClasspath()` by @knutwannheden in [#6900](https://github.com/openrewrite/rewrite/pull/6900)
* Fix NPE in Markup.markup() when tree node has null markers by @bmuschko in [#6895](https://github.com/openrewrite/rewrite/pull/6895)
* Filter SNAPSHOT versions from BOM upgrade candidates by @Jenson3210 in [#6902](https://github.com/openrewrite/rewrite/pull/6902)
* Support ext subscript and set-in-block syntax for version upgrades by @Jenson3210 in [#6905](https://github.com/openrewrite/rewrite/pull/6905)
* JavaScript: Detect empty diffs in `rewriteRun()` test harness and fix surfaced issues by @knutwannheden in [#6904](https://github.com/openrewrite/rewrite/pull/6904)
* Improved C# RPC server bootstrapping by @knutwannheden in [#6899](https://github.com/openrewrite/rewrite/pull/6899)
* Add tests for Gradle 9 migration and best practices recipes by @sullis in [#6907](https://github.com/openrewrite/rewrite/pull/6907)
* Add NuGet API key to CI and publish workflows by @macsux in [#6911](https://github.com/openrewrite/rewrite/pull/6911)
* Split C# NuGet into library and tool packages by @jkschneider in [#6912](https://github.com/openrewrite/rewrite/pull/6912)
* Fix ScanningRecipe accumulator loss in preconditioned DeclarativeRecipes across RecipeRunCycles by @pstreef in [#6913](https://github.com/openrewrite/rewrite/pull/6913)
* fix: switch npm publishing to OIDC trusted publishing by @zieka in [#6919](https://github.com/openrewrite/rewrite/pull/6919)
* fix: add setup-node for npm OIDC trusted publishing by @zieka in [#6922](https://github.com/openrewrite/rewrite/pull/6922)
* Fix Python RPC GetObject timeout on Windows by @kmccarp in [#6920](https://github.com/openrewrite/rewrite/pull/6920)
* Fix NoWhitespaceAfter removing required space after type-use annotation by @timtebeek in [#6921](https://github.com/openrewrite/rewrite/pull/6921)
* fix: decouple npmPublish from Gradle publish task for OIDC-only npm auth by @zieka in [#6923](https://github.com/openrewrite/rewrite/pull/6923)
* fix: add workflow_dispatch to npm-publish for manual OIDC testing by @zieka in [#6924](https://github.com/openrewrite/rewrite/pull/6924)
* fix: replace setup-node with manual .npmrc for npm OIDC trusted publishing by @zieka in [#6925](https://github.com/openrewrite/rewrite/pull/6925)
* fix: use system npm for publish to support OIDC trusted publishing by @zieka in [#6926](https://github.com/openrewrite/rewrite/pull/6926)
* fix: use system npm for publish to support OIDC trusted publishing by @zieka in [#6927](https://github.com/openrewrite/rewrite/pull/6927)
* fix: use NPM_TOKEN for npm publish authentication by @zieka in [#6928](https://github.com/openrewrite/rewrite/pull/6928)
* fix: add repository field to package.json for npm provenance by @zieka in [#6929](https://github.com/openrewrite/rewrite/pull/6929)
* fix: switch npm publish back to OIDC trusted publishing by @zieka in [#6930](https://github.com/openrewrite/rewrite/pull/6930)
* fix: revert OIDC-only npm auth, restore NPM_TOKEN by @zieka in [#6931](https://github.com/openrewrite/rewrite/pull/6931)
* Isolate C# plugin assemblies in custom AssemblyLoadContext by @jkschneider in [#6915](https://github.com/openrewrite/rewrite/pull/6915)
* C# Template API for pattern matching and code generation by @jkschneider in [#6916](https://github.com/openrewrite/rewrite/pull/6916)

#### [rewrite 8.75.2](https://github.com/openrewrite/rewrite/releases/tag/v8.75.2)

* Use Groovy 4 parser by @knutwannheden in [#6228](https://github.com/openrewrite/rewrite/pull/6228)
* Fix ChangeDependency isAcceptable returning true for all files by @Jenson3210 in [#6889](https://github.com/openrewrite/rewrite/pull/6889)

#### [rewrite 8.75.1](https://github.com/openrewrite/rewrite/releases/tag/v8.75.1)

* Fix bugs and performance issues in rewrite-python by @knutwannheden in [#6851](https://github.com/openrewrite/rewrite/pull/6851)
* Preserve existing Gradle wrapper distribution type by @bmuschko in [#6874](https://github.com/openrewrite/rewrite/pull/6874)
* C# Support by @jkschneider in [#6678](https://github.com/openrewrite/rewrite/pull/6678)
* Minor amendment to Python tests - delete `venv`, `uv.lock` symlinks after tests by @greg-at-moderne in [#6872](https://github.com/openrewrite/rewrite/pull/6872)
* JavaScript: Don't remove double negations by @greg-at-moderne in [#6878](https://github.com/openrewrite/rewrite/pull/6878)
* Convert ChangeDependency to ScanningRecipe to preserve GString/StringTemplate versions by @Jenson3210 in [#6858](https://github.com/openrewrite/rewrite/pull/6858)
* Honor empty &lt;relativePath/> in MavenPomDownloader by @Jenson3210 in [#6875](https://github.com/openrewrite/rewrite/pull/6875)
* Fix RPC framework errors caused by concurrent visitor cursor access by @knutwannheden in [#6880](https://github.com/openrewrite/rewrite/pull/6880)
* C#: Add MSAL license header to files under rewrite-csharp by @greg-at-moderne in [#6883](https://github.com/openrewrite/rewrite/pull/6883)
* Fix `StackOverflowError` in `DefaultJavaTypeSignatureBuilder` for cyclic types by @knutwannheden in [#6884](https://github.com/openrewrite/rewrite/pull/6884)
* Add module-specific `CLAUDE.md` files for Python and JavaScript by @knutwannheden in [#6886](https://github.com/openrewrite/rewrite/pull/6886)
* C#: `nugetApiKey` check on publishing by @greg-at-moderne in [#6887](https://github.com/openrewrite/rewrite/pull/6887)
* Fix IllegalArgumentException in KotlinParser when dependsOn paths are relative by @jkschneider in [#6882](https://github.com/openrewrite/rewrite/pull/6882)

#### [rewrite-all 1.23.11](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.11)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-apache 2.23.2](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.23.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-codemods 0.24.5](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.5)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-cucumber-jvm 2.11.9](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.9)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-dropwizard 0.10.2](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.10.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-feature-flags 1.20.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.20.0)

* Switch classpath.tsv from zip to gzip compression by @timtebeek in [#63](https://github.com/openrewrite/rewrite-feature-flags/pull/63)

#### [rewrite-github-actions 3.18.4](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.18.4)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-gitlab 0.20.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.20.0)

* Add MigrateOnlyToRules and MigrateExceptToRules recipes by @scuba10steve in [#38](https://github.com/openrewrite/rewrite-gitlab/pull/38)

#### [rewrite-gradle-plugin 7.28.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.28.1)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-hibernate 2.19.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.19.0)

* Replace classpath zip compression with gzip by @timtebeek in [#77](https://github.com/openrewrite/rewrite-hibernate/pull/77)

#### [rewrite-jackson 1.19.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.19.0)

* Fix Kotlin MapperBuilder changeDefaultPropertyInclusion matching by @timtebeek in [#92](https://github.com/openrewrite/rewrite-jackson/pull/92)
* Jackson 3 migration breaking Spring by @MBoegers in [#93](https://github.com/openrewrite/rewrite-jackson/pull/93)

#### [rewrite-java-dependencies 1.52.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.52.0)

* Convert ChangeDependency to ScanningRecipe by @Jenson3210 in [#173](https://github.com/openrewrite/rewrite-java-dependencies/pull/173)

#### [rewrite-jenkins 0.34.4](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.4)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-joda 0.7.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.7.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-liberty 1.23.9](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.9)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-logging-frameworks 3.26.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.26.0)

* Add recipe to convert log creation from JBoss Logging to SLF4J by @tmoreira2020 in [#283](https://github.com/openrewrite/rewrite-logging-frameworks/pull/283)

#### [rewrite-micrometer 0.28.6](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.6)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-micronaut 2.32.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.32.1)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-migrate-java 3.30.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.30.0)

* DataNucleus migrations by @jkschneider in [#998](https://github.com/openrewrite/rewrite-migrate-java/pull/998)
* Enable Lombok annotation processor during Java 17 upgrades by @timtebeek in [#999](https://github.com/openrewrite/rewrite-migrate-java/pull/999)
* Use Groovy 4 by @greg-at-moderne in [#1001](https://github.com/openrewrite/rewrite-migrate-java/pull/1001)
* Avoid 9.1 Gradle version, should be 9.1.0 by @greg-at-moderne in [#1002](https://github.com/openrewrite/rewrite-migrate-java/pull/1002)
* Also upgrade maven-surefire-report-plugin to 3.5.x by @timtebeek in [#1006](https://github.com/openrewrite/rewrite-migrate-java/pull/1006)
* Fix `IfElseIfConstructToSwitch` dropping pattern variables for unresolvable types by @timtebeek in [#1005](https://github.com/openrewrite/rewrite-migrate-java/pull/1005)
* Fix Jackson 2.21+ conflicting creators in AWT recipes by @timtebeek in [#1007](https://github.com/openrewrite/rewrite-migrate-java/pull/1007)

#### [rewrite-netty 0.7.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.7.0)

* Switch classpath file from zip to gzip compression by @timtebeek in [#13](https://github.com/openrewrite/rewrite-netty/pull/13)

#### [rewrite-okhttp 0.22.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.1)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-openapi 0.31.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.1)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-polyglot 2.9.9](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.9)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-prethink 0.3.5](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.3.5)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-prethink 0.3.4](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.3.4)

* Add parent, module count columns and SourceSetLanguageSummary table by @MBoegers in [#7](https://github.com/openrewrite/rewrite-prethink/pull/7)

#### [rewrite-quarkus 2.29.3](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.29.3)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-rewrite 0.21.2](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.21.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-spring 6.27.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.27.0)

* Skip bootstrap.yml merge when spring-cloud-starter-bootstrap is present by @Jenson3210 in [#954](https://github.com/openrewrite/rewrite-spring/pull/954)
* Handle RestClientResponseException subclasses in getRawStatusCode migration by @Jenson3210 in [#956](https://github.com/openrewrite/rewrite-spring/pull/956)
* Migrate UriComponentsBuilder.fromHttpUrl to fromUriString by @Jenson3210 in [#955](https://github.com/openrewrite/rewrite-spring/pull/955)
* Maybe remove import for parameter type after changing method parameter by @steve-aom-elliott in [#958](https://github.com/openrewrite/rewrite-spring/pull/958)
* Lombok Best Practices by @timtebeek in [#959](https://github.com/openrewrite/rewrite-spring/pull/959)
* Fix spring.artemis.host and spring.artemis.port migration to broker-url by @giulianoscassaioli in [#961](https://github.com/openrewrite/rewrite-spring/pull/961)
* Skip kebab-case conversion for Spring Boot pass-through properties by @knutwannheden in [#960](https://github.com/openrewrite/rewrite-spring/pull/960)
* Migrate Jackson properties for Spring Boot 4 by @timtebeek in [#963](https://github.com/openrewrite/rewrite-spring/pull/963)

#### [rewrite-spring-to-quarkus 0.6.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.6.1)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-static-analysis 2.30.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.30.0)

* Disabling C# tests if no .dotnet available by @greg-at-moderne in [#825](https://github.com/openrewrite/rewrite-static-analysis/pull/825)
* Add missing RSPEC tags and fix inconsistent tag formatting by @timtebeek in [#826](https://github.com/openrewrite/rewrite-static-analysis/pull/826)
* Remove `RemoveTrailingWhitespace` by @greg-at-moderne in [#827](https://github.com/openrewrite/rewrite-static-analysis/pull/827)

#### [rewrite-templating 1.41.2](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

#### [rewrite-testing-frameworks 3.30.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.30.0)

* Use `FindImports` and dependency-aware framework detection in `ReplaceMockitoTestExecutionListener` by @steve-aom-elliott in [#925](https://github.com/openrewrite/rewrite-testing-frameworks/pull/925)
* Align targetFramework switch value with @Option valid values by @steve-aom-elliott in [#928](https://github.com/openrewrite/rewrite-testing-frameworks/pull/928)
* Add JSpecify to type table for `JUnitToAssertJRulesRecipes` by @timtebeek in [#929](https://github.com/openrewrite/rewrite-testing-frameworks/pull/929)
* Fix CI failure from upstream AddDependency changes by @timtebeek in [#931](https://github.com/openrewrite/rewrite-testing-frameworks/pull/931)

#### [rewrite-third-party 0.36.2](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.36.2)

* OpenRewrite v8.75.5: https://github.com/openrewrite/rewrite/compare/v8.75.5...main

## [rewrite-recipe-bom 3.26.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.26.0)

Released on March 4, 2026, with OpenRewrite 8.75.0.

#### [rewrite 8.75.0](https://github.com/openrewrite/rewrite/releases/tag/v8.75.0)

* Python: Fix RPC `write_message` to use binary mode on Windows by @knutwannheden in [#6850](https://github.com/openrewrite/rewrite/pull/6850)
* Support empty JSP documents, or documents only containing comments by @evie-lau in [#6846](https://github.com/openrewrite/rewrite/pull/6846)
* Python: Update `ty-types` dependency to released 0.0.19 by @knutwannheden in [#6853](https://github.com/openrewrite/rewrite/pull/6853)
* Fix `IllegalArgumentException` in `Input.getRelativePath` for relative paths by @timtebeek in [#6843](https://github.com/openrewrite/rewrite/pull/6843)
* Python: Add f-string support for Python template/pattern API by @knutwannheden in [#6854](https://github.com/openrewrite/rewrite/pull/6854)
* Use version patterns in ChangeDependencyGroupIdAndArtifactId tests by @Jenson3210 in [#6856](https://github.com/openrewrite/rewrite/pull/6856)
* Support escaping property placeholders with backslash by @MBoegers in [#6817](https://github.com/openrewrite/rewrite/pull/6817)
* Python: Add `context`, `dependencies`, and `configure()` to Python `Template`/`Pattern` by @knutwannheden in [#6855](https://github.com/openrewrite/rewrite/pull/6855)
* Clean up `.context/` directory by @greg-at-moderne in [#6859](https://github.com/openrewrite/rewrite/pull/6859)
* Fix print idempotency for annotated array type casts by @knutwannheden in [#6861](https://github.com/openrewrite/rewrite/pull/6861)
* Handle unresolved Maven credential placeholders gracefully by @timtebeek in [#6845](https://github.com/openrewrite/rewrite/pull/6845)
* Fix Maven parser on $\{project.version\} in parent reference by @MBoegers in [#6860](https://github.com/openrewrite/rewrite/pull/6860)
* JavaScript: Fix `Yaml.Mapping` non-empty prefix error for nested flow mappings by @knutwannheden in [#6864](https://github.com/openrewrite/rewrite/pull/6864)
* JavaScript: Fix three found JS/TS parse failures by @knutwannheden in [#6863](https://github.com/openrewrite/rewrite/pull/6863)
* Ensure ImportLayoutStyles can be merged by @sambsnyd in [#6862](https://github.com/openrewrite/rewrite/pull/6862)
* JavaScript: Fix stack overflow in `Type.signature` for cyclic parameterized types by @knutwannheden in [#6867](https://github.com/openrewrite/rewrite/pull/6867)
* JavaScript: Fix empty named imports parse failure and add validator to `parseProject()` by @knutwannheden in [#6866](https://github.com/openrewrite/rewrite/pull/6866)
* Fix GradleWrapperTest after Gradle 9.4.0 got released by @greg-at-moderne in [#6871](https://github.com/openrewrite/rewrite/pull/6871)
* fix: KotlinVisitor.visitAnnotatedExpression now traverses inner expression by @thake in [#6870](https://github.com/openrewrite/rewrite/pull/6870)
* Skip recipe validation for imperative recipes in assertRecipesConfigure() by @MBoegers in [#6841](https://github.com/openrewrite/rewrite/pull/6841)

#### [rewrite 8.74.3](https://github.com/openrewrite/rewrite/releases/tag/v8.74.3)

* Make sure `AddToGitignore` keeps the newline at the end of the file by @greg-at-moderne in [#6847](https://github.com/openrewrite/rewrite/pull/6847)
* Fix JDK 25 IllegalAccessError from module split in JavaUnrestrictedClassLoader by @mcebanupgrade in [#6836](https://github.com/openrewrite/rewrite/pull/6836)
* RecipeListing withers now preserve metadata map by @jkschneider in [#6849](https://github.com/openrewrite/rewrite/pull/6849)

#### [rewrite 8.74.2](https://github.com/openrewrite/rewrite/releases/tag/v8.74.2)

* Python: Fix cross-type literal matching in pattern comparator by @knutwannheden in [#6816](https://github.com/openrewrite/rewrite/pull/6816)
* Python: Enable build cache and Develocity reporting for pytest by @knutwannheden in [#6819](https://github.com/openrewrite/rewrite/pull/6819)
* JavaScript: Add Develocity test reporting for Jest by @knutwannheden in [#6820](https://github.com/openrewrite/rewrite/pull/6820)
* Remove `maxHeapSize` from `JavaScriptRewriteRpc.Builder` in favor of caller-provided `NODE_OPTIONS` by @pdelagrave in [#6803](https://github.com/openrewrite/rewrite/pull/6803)
* Python: Isolate openrewrite package by version and add recipeInstallDir by @knutwannheden in [#6824](https://github.com/openrewrite/rewrite/pull/6824)
* Python: Serialize large integers as strings in RPC by @knutwannheden in [#6829](https://github.com/openrewrite/rewrite/pull/6829)
* Python: Add RPC codecs for `PythonResolutionResult` marker by @knutwannheden in [#6832](https://github.com/openrewrite/rewrite/pull/6832)
* JavaScript and Python: unique file names for `version.txt` files by @greg-at-moderne in [#6831](https://github.com/openrewrite/rewrite/pull/6831)
* Python: Parenthesize template results based on surrounding context by @knutwannheden in [#6827](https://github.com/openrewrite/rewrite/pull/6827)
* Migrate from services.gradle.org to downloads.gradle.org by @timtebeek in [#6823](https://github.com/openrewrite/rewrite/pull/6823)
* Treat literal "null" string as null when reading marketplace CSV by @timtebeek in [#6826](https://github.com/openrewrite/rewrite/pull/6826)
* Python: Unwrap `ExpressionStatement` around block-level template placeholders by @knutwannheden in [#6838](https://github.com/openrewrite/rewrite/pull/6838)
* RPC: Fix `getObject()` desync bugs by @knutwannheden in [#6835](https://github.com/openrewrite/rewrite/pull/6835)
* Python: Unify dev and release bootstrap for `openrewrite` package by @knutwannheden in [#6839](https://github.com/openrewrite/rewrite/pull/6839)
* Python: Fix `auto_format` adding extra indentation on sub-trees by @knutwannheden in [#6842](https://github.com/openrewrite/rewrite/pull/6842)
* Fix AddDependency bypassing onlyIfUsing with explicit config by @timtebeek in [#6834](https://github.com/openrewrite/rewrite/pull/6834)
* Python: Fix template apply losing indentation in nested contexts by @knutwannheden in [#6844](https://github.com/openrewrite/rewrite/pull/6844)
* UpgradePluginVersion: skip adding version when managed by pluginManagement by @timtebeek in [#6828](https://github.com/openrewrite/rewrite/pull/6828)

#### [rewrite-all 1.23.10](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.10)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.23.1](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.23.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.24.4](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.4)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.8](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.8)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.10.1](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.10.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.19.2](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.19.2)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.18.3](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.18.3)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-gitlab 0.19.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.19.0)

* Add simple Add* recipes for GitLab CI/CD best practices by @scuba10steve in [#34](https://github.com/openrewrite/rewrite-gitlab/pull/34)
* Add complex Add* recipes and BestPractices composite by @scuba10steve in [#36](https://github.com/openrewrite/rewrite-gitlab/pull/36)
* Add noopWhenAlreadyPresent tests to prevent duplicate entries by @scuba10steve in [#37](https://github.com/openrewrite/rewrite-gitlab/pull/37)

#### [rewrite-gradle-plugin 7.28.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.28.0)

* Fix style precedence in DefaultProjectParser by @timtebeek in [#426](https://github.com/openrewrite/rewrite-gradle-plugin/pull/426)

#### [rewrite-hibernate 2.18.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.18.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.17.1](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.17.1)

* `RemoveRedundantFeatureFlags` should retain `new ObjectMapper()` at start of chain by @mcclellanmj in [#87](https://github.com/openrewrite/rewrite-jackson/pull/87)
* Migrate jsr310 package imports to javatime in Jackson 3 by @timtebeek in [#88](https://github.com/openrewrite/rewrite-jackson/pull/88)

#### [rewrite-java-dependencies 1.51.2](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.51.2)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-jenkins 0.34.3](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.3)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.7.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.7.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.23.8](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.8)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.25.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.25.0)

* Add StringFormat, MessageFormat, and RemoveUnnecessaryLogLevelGuards SLF4J recipes. by @motlin in [#280](https://github.com/openrewrite/rewrite-logging-frameworks/pull/280)
* Fix PrintStackTraceToLogError breaking stacktrace-to-string methods by @timtebeek in [#282](https://github.com/openrewrite/rewrite-logging-frameworks/pull/282)

#### [rewrite-micrometer 0.28.5](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.5)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.32.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.32.0)

* Use pattern matching in UpdateMicronautValidationTest by @greg-at-moderne in [#135](https://github.com/openrewrite/rewrite-micronaut/pull/135)

#### [rewrite-migrate-java 3.29.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.29.0)

* Add entries to `.gitignore` by @zieka in [#995](https://github.com/openrewrite/rewrite-migrate-java/pull/995)
* Add @RequiredArgsConstructor and @AllArgsConstructor recipes by @jkschneider in [#996](https://github.com/openrewrite/rewrite-migrate-java/pull/996)
* Use classpathFromResources for lombok in Java templates by @jkschneider in [#997](https://github.com/openrewrite/rewrite-migrate-java/pull/997)
* Fix `IfElseIfConstructToSwitch` type attribution for non-JDK types by @timtebeek in [#994](https://github.com/openrewrite/rewrite-migrate-java/pull/994)

#### [rewrite-netty 0.6.8](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.8)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.22.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.22.0)

* Add entries to `.gitignore` by @zieka in [#29](https://github.com/openrewrite/rewrite-okhttp/pull/29)

#### [rewrite-openapi 0.31.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.31.0)

* Add entries to `.gitignore` by @zieka in [#73](https://github.com/openrewrite/rewrite-openapi/pull/73)

#### [rewrite-polyglot 2.9.7](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.7)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.3.3](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.3.3)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.29.2](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.29.2)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.21.1](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.21.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-spring 6.26.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.26.0)

* Skip version pinning for renamed starters when dependency-management plugin is present by @Jenson3210 in [#951](https://github.com/openrewrite/rewrite-spring/pull/951)

#### [rewrite-spring 6.25.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.25.1)

* Pass literal values to fix `ReplaceStringLiteralWithConstant` validation by @timtebeek in [#947](https://github.com/openrewrite/rewrite-spring/pull/947)
* Fixing `services` to `downloads` for subdomain on Gradle distributions, retaining test showing it can migrate that for you as well. by @steve-aom-elliott in [#949](https://github.com/openrewrite/rewrite-spring/pull/949)
* Fix security autoconfig package by @timtebeek in [#950](https://github.com/openrewrite/rewrite-spring/pull/950)

#### [rewrite-spring-to-quarkus 0.6.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.6.0)

* Fix untyped template substitution in WebToJaxRs (#74) by @timtebeek in [#75](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/75)

#### [rewrite-static-analysis 2.29.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.29.0)

* Remove mutable static field in ChainStringBuilderAppendCalls by @timtebeek in [#822](https://github.com/openrewrite/rewrite-static-analysis/pull/822)
* `ChainStringBuilderAppendCalls` should not flatten a single argument by @motlin in [#823](https://github.com/openrewrite/rewrite-static-analysis/pull/823)

#### [rewrite-templating 1.41.1](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.29.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.29.0)

* Detect JUnit version in PowerMockitoMockStaticToMockito by @MBoegers in [#919](https://github.com/openrewrite/rewrite-testing-frameworks/pull/919)
* ReplacePowerMockito: ensure mockito-core is added when PowerMock is removed by @MBoegers in [#920](https://github.com/openrewrite/rewrite-testing-frameworks/pull/920)
* Remove all remaining PowerMock dependencies in ReplacePowerMockito recipe by @steve-aom-elliott in [#921](https://github.com/openrewrite/rewrite-testing-frameworks/pull/921)
* Add JUnit 4 support to AddMockitoExtensionIfAnnotationsUsed by @bmuschko in [#922](https://github.com/openrewrite/rewrite-testing-frameworks/pull/922)
* Use mockito-inline instead of mockito-core where applicable by @bmuschko in [#923](https://github.com/openrewrite/rewrite-testing-frameworks/pull/923)
* Add recipe to replace MockitoTestExecutionListener by @steve-aom-elliott in [#924](https://github.com/openrewrite/rewrite-testing-frameworks/pull/924)
* Remove empty constructors and suite() methods in MigrateJUnitTestCase by @timtebeek in [#926](https://github.com/openrewrite/rewrite-testing-frameworks/pull/926)

#### [rewrite-third-party 0.36.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.36.1)

* OpenRewrite v8.75.0: https://github.com/openrewrite/rewrite

## [rewrite-recipe-bom 3.25.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.25.0)

Released on February 25, 2026, with OpenRewrite 8.74.1.

#### [rewrite 8.74.1](https://github.com/openrewrite/rewrite/releases/tag/v8.74.1)

* Python: Fix ty 0.0.18 type checking diagnostics by @knutwannheden in [#6806](https://github.com/openrewrite/rewrite/pull/6806)
* Handle null class body in KotlinPrinter by @Jenson3210 in [#6805](https://github.com/openrewrite/rewrite/pull/6805)
* Normalize ANTLR generated code by @greg-at-moderne in [#6807](https://github.com/openrewrite/rewrite/pull/6807)
* Normalize ANTLR generated code - continued by @greg-at-moderne in [#6808](https://github.com/openrewrite/rewrite/pull/6808)
* Python: Support ternary comparisons in PatternMatchingComparator by @knutwannheden in [#6809](https://github.com/openrewrite/rewrite/pull/6809)
* Make DeclarativeRecipe.accumulator thread-safe with ThreadLocal by @kmccarp in [#6810](https://github.com/openrewrite/rewrite/pull/6810)
* Skip AddAnnotationProcessor when processor already in effective POM via ancestor by @mcebanupgrade in [#6759](https://github.com/openrewrite/rewrite/pull/6759)
* Python: Fix tuple parsing for parenthesized element with trailing comma by @knutwannheden in [#6811](https://github.com/openrewrite/rewrite/pull/6811)
* Python: Handle RPC deserialization errors in `PythonRewriteRpc#parseProject()` by @knutwannheden in [#6812](https://github.com/openrewrite/rewrite/pull/6812)
* Python: Fix pattern matching false positives and add template auto-parenthesization by @knutwannheden in [#6814](https://github.com/openrewrite/rewrite/pull/6814)
* Python: Pin `openrewrite` Python package version in RPC bootstrap by @knutwannheden in [#6813](https://github.com/openrewrite/rewrite/pull/6813)
* Python: register all existing recipes by @greg-at-moderne in [#6815](https://github.com/openrewrite/rewrite/pull/6815)

#### [rewrite 8.74.0](https://github.com/openrewrite/rewrite/releases/tag/v8.74.0)

* Upgrade rewrite-kotlin to Kotlin 2 compiler (K2) by @jkschneider in [#6766](https://github.com/openrewrite/rewrite/pull/6766)
* Autodetect text block indent by @Jenson3210 in [#6768](https://github.com/openrewrite/rewrite/pull/6768)
* Restore recipe hierarchy rows in SourcesFileResults by @timtebeek in [#6764](https://github.com/openrewrite/rewrite/pull/6764)
* Fall back to uv lock when no lock file exists for pyproject.toml by @knutwannheden in [#6769](https://github.com/openrewrite/rewrite/pull/6769)
* `ChangeImport`: rewrite qualified references when `old_name` is specified by @knutwannheden in [#6760](https://github.com/openrewrite/rewrite/pull/6760)
* JavaScript: Write `.npmrc` file before install by @knutwannheden in [#6417](https://github.com/openrewrite/rewrite/pull/6417)
* Parse more checkstyle rules into OpenRewrite styles. by @sambsnyd in [#6761](https://github.com/openrewrite/rewrite/pull/6761)
* Use resolved version of managed dependency in `ResolvedPom`'s managed dependencies by @steve-aom-elliott in [#6776](https://github.com/openrewrite/rewrite/pull/6776)
* Fix DeclarativeRecipe descriptor leaking PreconditionBellwether by @pstreef in [#6774](https://github.com/openrewrite/rewrite/pull/6774)
* Restore TypeTable support for Kotlin K2 by @timtebeek in [#6779](https://github.com/openrewrite/rewrite/pull/6779)
* Add Variable type attribution for Python identifiers by @knutwannheden in [#6772](https://github.com/openrewrite/rewrite/pull/6772)
* Fix Java 21 parser dropping `var` in record pattern binding variables by @cuioss-oliver in [#6781](https://github.com/openrewrite/rewrite/pull/6781)
* Add prefix to the block after resolutionStrategy block when non existing by @Jenson3210 in [#6784](https://github.com/openrewrite/rewrite/pull/6784)
* Include declarative recipe preconditions in recipe descriptors by @sambsnyd in [#6777](https://github.com/openrewrite/rewrite/pull/6777)
* Python: Replace LSP hover with `ty-types` structured descriptors by @knutwannheden in [#6782](https://github.com/openrewrite/rewrite/pull/6782)
* Filter duplicate generated files in ScanningRecipe.generate() by @pstreef in [#6778](https://github.com/openrewrite/rewrite/pull/6778)
* Fix Python RPC server crash on Windows due to hardcoded /tmp log path by @knutwannheden in [#6787](https://github.com/openrewrite/rewrite/pull/6787)
* Fix resolution of dated snapshots as input by @shanman190 in [#6788](https://github.com/openrewrite/rewrite/pull/6788)
* Annotation attribute non jvm class misses import by @BoykoAlex in [#6786](https://github.com/openrewrite/rewrite/pull/6786)
* Move all `kotlinx` recipes to rewrite-migrate-kotlin by @timtebeek in [#6791](https://github.com/openrewrite/rewrite/pull/6791)
* Fix `ChangeManagedDependencyGroupIdAndArtifactId` overwriting `artifactId` with glob pattern by @timtebeek in [#6783](https://github.com/openrewrite/rewrite/pull/6783)
* Python: Add type attribution tests and fix method declaration/type hint types by @knutwannheden in [#6794](https://github.com/openrewrite/rewrite/pull/6794)
* Python: Add parameter `field_type` attribution and call-site type arguments by @knutwannheden in [#6795](https://github.com/openrewrite/rewrite/pull/6795)
* Fix exponential overcounting in composite recipe listings by @jkschneider in [#6796](https://github.com/openrewrite/rewrite/pull/6796)
* Python: Add type attribution tests, use moduleName for module-qualified FQNs, and fix RemoveImport shadowing by @knutwannheden in [#6798](https://github.com/openrewrite/rewrite/pull/6798)
* Update expected jackson-jakarta-rs-json-provider version in test by @knutwannheden in [#6801](https://github.com/openrewrite/rewrite/pull/6801)
* Handle local version variables in UpgradePluginVersion for kotlin plugins by @MBoegers in [#6746](https://github.com/openrewrite/rewrite/pull/6746)
* Use flexible version assertions in ChangeDependencyGroupIdAndArtifactId tests by @Jenson3210 in [#6799](https://github.com/openrewrite/rewrite/pull/6799)
* Add Kotlin script template support for Gradle KTS by @timtebeek in [#6792](https://github.com/openrewrite/rewrite/pull/6792)
* Add type attribution for Gradle plugin DSL in KTS files by @timtebeek in [#6804](https://github.com/openrewrite/rewrite/pull/6804)
* DeleteProperty: preserve inline comments when deleting entries by @Jenson3210 in [#6797](https://github.com/openrewrite/rewrite/pull/6797)
* Preserve old exclusions and add sibling for new coordinates on dependency change by @Jenson3210 in [#6800](https://github.com/openrewrite/rewrite/pull/6800)

#### [rewrite 8.73.2](https://github.com/openrewrite/rewrite/releases/tag/v8.73.2)

* Python: Fix parsing of byte strings `b''` by @greg-at-moderne in [#6734](https://github.com/openrewrite/rewrite/pull/6734)
* Python: in tests the `before_recipe` hook to run after idempotence check by @greg-at-moderne in [#6735](https://github.com/openrewrite/rewrite/pull/6735)
* Python: Upgrade ty to 0.0.17 and fix type errors by @knutwannheden in [#6737](https://github.com/openrewrite/rewrite/pull/6737)
* Fix JDK 25 LinkageError in JavaUnrestrictedClassLoader by @timtebeek in [#6736](https://github.com/openrewrite/rewrite/pull/6736)
* Complete Java 24 compatibility fix by backporting UnknownType workaround by @kdvolder in [#6740](https://github.com/openrewrite/rewrite/pull/6740)
* Python: Include `pyproject.toml` in ParseProject results by @knutwannheden in [#6744](https://github.com/openrewrite/rewrite/pull/6744)
* Fix htmlIndexToVersioning() HTML title attribute handling by @timtebeek in [#6745](https://github.com/openrewrite/rewrite/pull/6745)
* JavaScript: in tests the `before_recipe` hook to run after idempotence check by @greg-at-moderne in [#6738](https://github.com/openrewrite/rewrite/pull/6738)
* Recipe testing best practices by @timtebeek in [#6748](https://github.com/openrewrite/rewrite/pull/6748)
* Allow MavenRecipeMarketplaceGenerator to operate on directories of class files by @sambsnyd in [#6750](https://github.com/openrewrite/rewrite/pull/6750)
* Redirect pip install output away from console by @jkschneider in [#6751](https://github.com/openrewrite/rewrite/pull/6751)
* Clarify Maven RemoveDependency recipe impact by @timtebeek in [#6749](https://github.com/openrewrite/rewrite/pull/6749)
* Python: Improve dependency recipe lock file handling and version normalization by @knutwannheden in [#6752](https://github.com/openrewrite/rewrite/pull/6752)
* Parse JS templates as TSX to support JSX syntax by @jkschneider in [#6756](https://github.com/openrewrite/rewrite/pull/6756)
* `ChangeDependencyGroupIdAndArtifactId` updates version properties in parent POMs by @MBoegers in [#6630](https://github.com/openrewrite/rewrite/pull/6630)
* Python: Support legacy project manifests (`setup.cfg` etc.) by @knutwannheden in [#6716](https://github.com/openrewrite/rewrite/pull/6716)
* Fix empty dependencies block left after constraint-to-rule conversion by @Jenson3210 in [#6754](https://github.com/openrewrite/rewrite/pull/6754)
* Only calculate hex string for valid HTTP responses by @timtebeek in [#6763](https://github.com/openrewrite/rewrite/pull/6763)
* WrappingAndBracesVisitor: Preserve indentation by @NeQuissimus in [#6758](https://github.com/openrewrite/rewrite/pull/6758)
* Fix AddDependency duplicating dependencies in applied scripts by @AnastasiiaDesiateryk in [#6650](https://github.com/openrewrite/rewrite/pull/6650)
* Pass resolvers to JS/Python RPC so PrepareRecipe callbacks can resolve Maven recipes by @kmccarp in [#6742](https://github.com/openrewrite/rewrite/pull/6742)

#### [rewrite 8.73.1](https://github.com/openrewrite/rewrite/releases/tag/v8.73.1)

* Python: Extend dependency recipes with scope support and package-manager-aware transitive pinning by @knutwannheden in [#6715](https://github.com/openrewrite/rewrite/pull/6715)
* Fix ChangeParentPom not fully updating submodule parent models (#6717) by @timtebeek in [#6718](https://github.com/openrewrite/rewrite/pull/6718)
* Python - fix for method_select in TabsAndIndentsVisitor by @greg-at-moderne in [#6711](https://github.com/openrewrite/rewrite/pull/6711)
* Python: Fix RPC issues by @knutwannheden in [#6721](https://github.com/openrewrite/rewrite/pull/6721)
* AddOrUpdateAnnotationAttribute: Handle fully qualified enum values by @Jenson3210 in [#6719](https://github.com/openrewrite/rewrite/pull/6719)
* Python - handle f-strings concatenation by @greg-at-moderne in [#6722](https://github.com/openrewrite/rewrite/pull/6722)
* Python: Support t-string templates and parsing (PEP 750) by @knutwannheden in [#6724](https://github.com/openrewrite/rewrite/pull/6724)
* Support Gradle 8.x on Java 23+ by @timtebeek in [#6725](https://github.com/openrewrite/rewrite/pull/6725)
* Python: Fix formatter bugs and add comprehensive format tests by @knutwannheden in [#6727](https://github.com/openrewrite/rewrite/pull/6727)
* Python: Integrate auto-formatting into template engine by @knutwannheden in [#6728](https://github.com/openrewrite/rewrite/pull/6728)
* Fixing `@ToBeRemoved` annotations with invalid date by @greg-at-moderne in [#6729](https://github.com/openrewrite/rewrite/pull/6729)
* Python: changing how imports are parsed, prefer `J.Import` by @greg-at-moderne in [#6730](https://github.com/openrewrite/rewrite/pull/6730)
* Python: Fix f-string parsing for debug = with format spec by @knutwannheden in [#6731](https://github.com/openrewrite/rewrite/pull/6731)
* Fix anchor on MappingStart in sequence entry losing prefix by @knutwannheden in [#6732](https://github.com/openrewrite/rewrite/pull/6732)
* Add recipes for Kotlinx coroutines and serialization, based on `ReplaceWith` by @timtebeek in [#6561](https://github.com/openrewrite/rewrite/pull/6561)

#### [rewrite-all 1.23.9](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.9)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.23.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.23.0)

* Add migration recipe for Apache POI 4.1.2 by @krlittle in [#119](https://github.com/openrewrite/rewrite-apache/pull/119)
* Add Apache POI 5.x upgrade recipe by @krlittle in [#120](https://github.com/openrewrite/rewrite-apache/pull/120)

#### [rewrite-codemods 0.24.3](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.3)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.7](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.7)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite/compare/v8.74.1...main

#### [rewrite-dropwizard 0.10.0](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.10.0)

* Dropwizard test migration by @Fossur in [#5](https://github.com/openrewrite/rewrite-dropwizard/pull/5)
* OpenRewrite recipe best practices by @greg-at-moderne in [#16](https://github.com/openrewrite/rewrite-dropwizard/pull/16)

#### [rewrite-feature-flags 1.19.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.19.1)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite/compare/v8.74.1...main

#### [rewrite-github-actions 3.18.2](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.18.2)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-gitlab 0.18.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.18.0)

* Add search recipes for deprecated only/except keywords by @scuba10steve in [#32](https://github.com/openrewrite/rewrite-gitlab/pull/32)

#### [rewrite-hibernate 2.18.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.18.0)

* Code cleanup: remove debug hook, fix constants, remove redundant recipe by @knutwannheden in [#75](https://github.com/openrewrite/rewrite-hibernate/pull/75)
* Add Singleton precondition to declarative recipes by @steve-aom-elliott in [#76](https://github.com/openrewrite/rewrite-hibernate/pull/76)

#### [rewrite-jackson 1.17.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.17.0)

* Replace @JsonIgnore with @JsonSetter on empty collection fields for Jackson 3 by @timtebeek in [#85](https://github.com/openrewrite/rewrite-jackson/pull/85)
* Replicate issue with managed dependencies with a version property by @timtebeek in [#84](https://github.com/openrewrite/rewrite-jackson/pull/84)
* Replace `IOException` with `JacksonException` in catch clauses by @timtebeek in [#86](https://github.com/openrewrite/rewrite-jackson/pull/86)

#### [rewrite-java-dependencies 1.51.1](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.51.1)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-jenkins 0.34.2](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.2)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.7.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.7.0)

* Decompose Joda-Time recipe into YAML-composed declarative recipes by @timtebeek in [#17](https://github.com/openrewrite/rewrite-joda/pull/17)
* Add JodaTimePeriodToJavaTime recipe by @timtebeek in [#18](https://github.com/openrewrite/rewrite-joda/pull/18)
* OpenRewrite recipe best practices by @greg-at-moderne in [#19](https://github.com/openrewrite/rewrite-joda/pull/19)

#### [rewrite-liberty 1.23.7](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.7)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite/compare/v8.74.1...main

#### [rewrite-logging-frameworks 3.24.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.24.0)

* Replace JulGetLoggerToLoggerFactory Refaster recipe with imperative visitor by @steve-aom-elliott in [#278](https://github.com/openrewrite/rewrite-logging-frameworks/pull/278)
* Fix CI: Change slf4j-api-2.1.+ to slf4j-api-2 by @timtebeek in [#279](https://github.com/openrewrite/rewrite-logging-frameworks/pull/279)

#### [rewrite-maven-plugin 6.30.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.30.0)

* Add integration test for JDK 25 Lombok LinkageError by @timtebeek in [#1109](https://github.com/openrewrite/rewrite-maven-plugin/pull/1109)
* Add generateRecipeCsv goal by @Jenson3210 in [#1113](https://github.com/openrewrite/rewrite-maven-plugin/pull/1113)

#### [rewrite-micrometer 0.28.4](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.4)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.31.3](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.31.3)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite/compare/v8.74.1...main

#### [rewrite-migrate-java 3.28.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.28.0)

* Add maven-compiler-plugin version when missing during Java migration by @jkschneider in [#989](https://github.com/openrewrite/rewrite-migrate-java/pull/989)
* `UpdateSdkMan` recipe to support `newJavaVersion=latest.patch` by @greg-at-moderne in [#990](https://github.com/openrewrite/rewrite-migrate-java/pull/990)
* Fix UpdateSdkManTest to use current SDKMAN Java versions by @timtebeek in [#991](https://github.com/openrewrite/rewrite-migrate-java/pull/991)

#### [rewrite-migrate-java 3.27.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.27.1)

* Add UpgradePluginsForJava25 for surefire, failsafe, compiler, and byte-buddy by @timtebeek in [#981](https://github.com/openrewrite/rewrite-migrate-java/pull/981)
* Skip adding methods already provided by a superclass by @Jenson3210 in [#983](https://github.com/openrewrite/rewrite-migrate-java/pull/983)
* Prevent UseTextBlocks from dropping comments in concatenations by @timtebeek in [#985](https://github.com/openrewrite/rewrite-migrate-java/pull/985)
* Prevent LombokValToFinalVar from removing star imports by @Jenson3210 in [#986](https://github.com/openrewrite/rewrite-migrate-java/pull/986)
* Retain javax.xml.bind:jaxb-api when jackson-module-jaxb-annotations is present by @Jenson3210 in [#987](https://github.com/openrewrite/rewrite-migrate-java/pull/987)

#### [rewrite-netty 0.6.7](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.7)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.21.4](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.21.4)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.30.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.30.1)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.9.6](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.6)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-prethink 0.3.2](https://github.com/openrewrite/rewrite-prethink/releases/tag/v0.3.2)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.29.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.29.1)

* OpenRewrite v8.74.1: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.21.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.21.0)

* Redirect examples.yml for rewrite-java-test to rewrite-java by @timtebeek in [#62](https://github.com/openrewrite/rewrite-rewrite/pull/62)
* Adopt fields in nested recipe classes for tests by @timtebeek in [#63](https://github.com/openrewrite/rewrite-rewrite/pull/63)

#### [rewrite-spring 6.25.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.25.0)

* Replace `RepositoryRestConfigurerAdapter` with `RepositoryRestConfigurer` by @MichalTHEDUDE in [#934](https://github.com/openrewrite/rewrite-spring/pull/934)
* Ensure properties with on-cloud-platform remain unchanged by @cachescrubber in [#936](https://github.com/openrewrite/rewrite-spring/pull/936)
* Ensure yaml with on-cloud-platform remain unchanged by @cachescrubber in [#939](https://github.com/openrewrite/rewrite-spring/pull/939)
* Fix Kotlin tests after K2 compiler upgrade by @timtebeek in [#940](https://github.com/openrewrite/rewrite-spring/pull/940)
* Only add int cast when context expects int in Spring Batch migration by @timtebeek in [#942](https://github.com/openrewrite/rewrite-spring/pull/942)
* Remove `super.configure(http)` calls in `WebSecurityConfigurerAdapter` migration by @timtebeek in [#943](https://github.com/openrewrite/rewrite-spring/pull/943)
* Remove remaining Springfox dead code after SpringDoc migration by @timtebeek in [#945](https://github.com/openrewrite/rewrite-spring/pull/945)
* Fix spring.reactor.context-propagation property value from 'true' to 'auto' by @sakhujarohan in [#938](https://github.com/openrewrite/rewrite-spring/pull/938)
* SeparateApplicationYamlByProfile: merge into existing profile files by @Jenson3210 in [#937](https://github.com/openrewrite/rewrite-spring/pull/937)
* Fix `requestMatchers().antMatchers()` incorrectly migrated to lambda DSL by @timtebeek in [#944](https://github.com/openrewrite/rewrite-spring/pull/944)
* Fix reactive ServerHttpSecurity DSL and password encoder recursion by @timtebeek in [#946](https://github.com/openrewrite/rewrite-spring/pull/946)

#### [rewrite-spring 6.24.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.24.1)

* Make Flyway migration work with both Maven and Gradle by @ReneM in [#932](https://github.com/openrewrite/rewrite-spring/pull/932)
* Spring Boot 4: Migrate actuator health EndpointRequest and HealthEndpoint  by @cachescrubber in [#933](https://github.com/openrewrite/rewrite-spring/pull/933)

#### [rewrite-spring-to-quarkus 0.5.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.5.0)

* Expand the Spring Boot to Quarkus migration recipes by @timtebeek in [#63](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/63)
* Validate and fix recipe correctness issues by @timtebeek in [#65](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/65)
* Add jackson-bom 2.21.0 and fix recipe correctness issues by @timtebeek in [#71](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/71)
* `CustomizeQuarkusVersionTest` fix for quarkus BOM 3.31.4 by @greg-at-moderne in [#72](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/72)
* Use pattern matching in CustomizeQuarkusVersionTest by @steve-aom-elliott in [#73](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/73)

#### [rewrite-static-analysis 2.28.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.28.0)

* CLAUDE instructions: Do not add to common-static-analysis.yml by @greg-at-moderne in [#818](https://github.com/openrewrite/rewrite-static-analysis/pull/818)
* Regenerate recipes.csv to fix CI by @timtebeek in [#820](https://github.com/openrewrite/rewrite-static-analysis/pull/820)
* `RemoveTrailingWhitespace` recipe by @greg-at-moderne in [#819](https://github.com/openrewrite/rewrite-static-analysis/pull/819)
* `SimplifyForLoopBoundaryComparison` recipe by @greg-at-moderne in [#821](https://github.com/openrewrite/rewrite-static-analysis/pull/821)

#### [rewrite-templating 1.41.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.41.0)

* Add return-type-widening guard to Refaster template engine by @knutwannheden in [#179](https://github.com/openrewrite/rewrite-templating/pull/179)
* Add Semantics usage precondition to generated Refaster recipes by @timtebeek in [#180](https://github.com/openrewrite/rewrite-templating/pull/180)
* Refactor RecipeWriter: extract methods and eliminate duplication by @timtebeek in [#181](https://github.com/openrewrite/rewrite-templating/pull/181)

#### [rewrite-testing-frameworks 3.28.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.28.0)

* Fix 6 issues in AssertJ recipe migrations by @timtebeek in [#911](https://github.com/openrewrite/rewrite-testing-frameworks/pull/911)
* Preserve throws clause when checked exceptions exist outside assertThrows. by @motlin in [#899](https://github.com/openrewrite/rewrite-testing-frameworks/pull/899)
* Pin AssertJ to stable 3.27.7 by @timtebeek in [#913](https://github.com/openrewrite/rewrite-testing-frameworks/pull/913)
* Add .contextSensitive() to Hamcrest conversion templates and improve type matching in `CollapseConsecutiveAssertThatStatements` by @timtebeek in [#912](https://github.com/openrewrite/rewrite-testing-frameworks/pull/912)
* Fix 2 AssertJ migration recipe issues found via large-scale validation by @timtebeek in [#914](https://github.com/openrewrite/rewrite-testing-frameworks/pull/914)
* Add Hamcrest to AssertJ recipes for hasProperty, everyItem, and hasItem(Matcher) by @timtebeek in [#916](https://github.com/openrewrite/rewrite-testing-frameworks/pull/916)
* Add missing Hamcrest not(Matcher) to AssertJ conversions by @timtebeek in [#917](https://github.com/openrewrite/rewrite-testing-frameworks/pull/917)
* Do not incorrectly strip method calls from assertion arguments by @timtebeek in [#918](https://github.com/openrewrite/rewrite-testing-frameworks/pull/918)

## [rewrite-recipe-bom 3.24.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.24.0)

Released on February 11, 2026, with OpenRewrite 8.73.0.

#### [rewrite 8.73.0](https://github.com/openrewrite/rewrite/releases/tag/v8.73.0)

* Python: Add `DatetimeUtcNow` recipe for Python 3.12 deprecation migration by @knutwannheden in [#6696](https://github.com/openrewrite/rewrite/pull/6696)
* Register accumulators for nested ScanningRecipes in OR preconditions by @Jenson3210 in [#6701](https://github.com/openrewrite/rewrite/pull/6701)
* Python: Add Python 2 parser support using parso by @jkschneider in [#6703](https://github.com/openrewrite/rewrite/pull/6703)
* Correct string block indent by @BoykoAlex in [#6694](https://github.com/openrewrite/rewrite/pull/6694)
* Python: Fix some type checking errors by @knutwannheden in [#6705](https://github.com/openrewrite/rewrite/pull/6705)
* Fix RPC serialization for `J.Literal.UnicodeEscape` by @knutwannheden in [#6695](https://github.com/openrewrite/rewrite/pull/6695)
* Python - Python tests plugged into Gradle build by @greg-at-moderne in [#6706](https://github.com/openrewrite/rewrite/pull/6706)
* Python: Add `pyproject.toml` parser with dependency resolution by @knutwannheden in [#6702](https://github.com/openrewrite/rewrite/pull/6702)
* Add ModuleContainsFile and ModuleUsesType scanning recipes by @Jenson3210 in [#6699](https://github.com/openrewrite/rewrite/pull/6699)
* Preserve implicitly defined version properties in Maven recipes by @Jenson3210 in [#6691](https://github.com/openrewrite/rewrite/pull/6691)
* Python: Add dependency management recipes for `pyproject.toml` by @knutwannheden in [#6708](https://github.com/openrewrite/rewrite/pull/6708)
* Python - AutoFormatter by @greg-at-moderne in [#6707](https://github.com/openrewrite/rewrite/pull/6707)
* Fix handling of specifying comma-separated value to recipe option of type List by @greg-at-moderne in [#6700](https://github.com/openrewrite/rewrite/pull/6700)
* Python - fix the test_remove_decorator test case by @greg-at-moderne in [#6709](https://github.com/openrewrite/rewrite/pull/6709)
* Python: Fix `ClassCastException` in parser by @knutwannheden in [#6710](https://github.com/openrewrite/rewrite/pull/6710)
* Fix text block indentation by @Jenson3210 in [#6712](https://github.com/openrewrite/rewrite/pull/6712)
* Fix Java 24 runtime compatibility by falling back to Java 21 parser by @kdvolder in [#6682](https://github.com/openrewrite/rewrite/pull/6682)
* fix an edge case in `RemoveUnusedProperties` when there is no parent in filtering by @nmck257 in [#6687](https://github.com/openrewrite/rewrite/pull/6687)
* Python: Fix `MatchSequence` parser incorrectly consuming child's delimiter by @knutwannheden in [#6713](https://github.com/openrewrite/rewrite/pull/6713)

#### [rewrite 8.72.8](https://github.com/openrewrite/rewrite/releases/tag/v8.72.8)

* Fix StackOverflowError in Validated.Both and redundant validation traversal by @pstreef in [#6690](https://github.com/openrewrite/rewrite/pull/6690)
* Changing `npx` to `npx.cmd` on Windows, normalizing paths for source file processing and fixing `spawn` and `spawnSync` on Windows. by @steve-aom-elliott in [#6662](https://github.com/openrewrite/rewrite/pull/6662)
* Mark parent tag in DependencyInsight when dependency is inherited by @Jenson3210 in [#6693](https://github.com/openrewrite/rewrite/pull/6693)
* Clean up the error message when a recipe cannot be found in the marketplace by @shanman190 in [#6688](https://github.com/openrewrite/rewrite/pull/6688)

#### [rewrite 8.72.7](https://github.com/openrewrite/rewrite/releases/tag/v8.72.7)

* RPC - Remove mention of JavaScript for Python RPC server error message by @greg-at-moderne in [#6673](https://github.com/openrewrite/rewrite/pull/6673)
* Skip BOM download when version contains unresolved placeholders by @Jenson3210 in [#6674](https://github.com/openrewrite/rewrite/pull/6674)
* Support multi-component literal dependency declarations by @MBoegers in [#6669](https://github.com/openrewrite/rewrite/pull/6669)
* Improving `AddCommentToImport` when it comes to comments that get added at the beginning of the file by @steve-aom-elliott in [#6675](https://github.com/openrewrite/rewrite/pull/6675)
* Fix DeleteProperty losing newlines when deleting entries with block scalars by @Jenson3210 in [#6670](https://github.com/openrewrite/rewrite/pull/6670)
* Python: Add RPC infrastructure for calling Java recipes by @jkschneider in [#6677](https://github.com/openrewrite/rewrite/pull/6677)
* Python: Add pip bootstrap support for openrewrite package by @jkschneider in [#6679](https://github.com/openrewrite/rewrite/pull/6679)
* Python: Add data table support for recipes by @jkschneider in [#6680](https://github.com/openrewrite/rewrite/pull/6680)
* Add Gradle FindRepositoryOrder recipe by @kmccarp in [#6676](https://github.com/openrewrite/rewrite/pull/6676)
* Python: Add context-insensitive templating mechanism by @jkschneider in [#6681](https://github.com/openrewrite/rewrite/pull/6681)
* Fix test for newer plugin versions by @Jenson3210 in [#6685](https://github.com/openrewrite/rewrite/pull/6685)
* Catch Throwable instead of Exception in KotlinParser and PythonParser by @Jenson3210 in [#6633](https://github.com/openrewrite/rewrite/pull/6633)

#### [rewrite 8.72.6](https://github.com/openrewrite/rewrite/releases/tag/v8.72.6)

* Python: Add MethodMatcher for matching method invocations by type signature by @jkschneider in [#6671](https://github.com/openrewrite/rewrite/pull/6671)
* JavaScript - use `@latest` for upgrades of recipe packages by @greg-at-moderne in [#6672](https://github.com/openrewrite/rewrite/pull/6672)

#### [rewrite 8.72.5](https://github.com/openrewrite/rewrite/releases/tag/v8.72.5)

* Speed up ModuleHasDependency by removing DependencyInsight from their implementation. by @sambsnyd in [#6664](https://github.com/openrewrite/rewrite/pull/6664)
* Python: Support recipe execution via RPC by @jkschneider in [#6665](https://github.com/openrewrite/rewrite/pull/6665)
* Break cycles when parsing Gradle projects. by @sambsnyd in [#6666](https://github.com/openrewrite/rewrite/pull/6666)
* RPC recipes - the recipe descriptor to be used for all purposes by @greg-at-moderne in [#6660](https://github.com/openrewrite/rewrite/pull/6660)
* Python recipe marketplace installer by @jkschneider in [#6667](https://github.com/openrewrite/rewrite/pull/6667)
* Preserve parentheses around unary operators in method invocation select by @dsgrieve in [#6663](https://github.com/openrewrite/rewrite/pull/6663)

#### [rewrite 8.72.4](https://github.com/openrewrite/rewrite/releases/tag/v8.72.4)

* Optimize `ChangePropertyKey` by @knutwannheden in [#6622](https://github.com/openrewrite/rewrite/pull/6622)
* Maven annotation processor and plugin recipes should correctly handle parent and aggregator poms by @MBoegers in [#6546](https://github.com/openrewrite/rewrite/pull/6546)
* Always refresh non-dated SNAPSHOTs in LocalMavenArtifactCache by @Jenson3210 in [#6623](https://github.com/openrewrite/rewrite/pull/6623)
* Keep trailing newlines in literal/folded YAML scalar values by @knutwannheden in [#6612](https://github.com/openrewrite/rewrite/pull/6612)
* Wrapping and braces style by @Jenson3210 in [#6429](https://github.com/openrewrite/rewrite/pull/6429)
* Support standalone Helm control flow directives in YAML parsing by @timtebeek in [#6625](https://github.com/openrewrite/rewrite/pull/6625)
* Singleton precondition by @sambsnyd in [#6619](https://github.com/openrewrite/rewrite/pull/6619)
* Handle asterisk placeholder values in YAML parser by @timtebeek in [#6626](https://github.com/openrewrite/rewrite/pull/6626)
* Fix NPE in ProtoParser for malformed syntax declarations by @timtebeek in [#6627](https://github.com/openrewrite/rewrite/pull/6627)
* Add DockerFrom trait for semantic Docker FROM analysis by @timtebeek in [#6620](https://github.com/openrewrite/rewrite/pull/6620)
* Fix Groovy parser for closure parameters with default values by @knutwannheden in [#6628](https://github.com/openrewrite/rewrite/pull/6628)
* Fix Gradle `AddDependency` for matches only in `test` sources by @knutwannheden in [#6637](https://github.com/openrewrite/rewrite/pull/6637)
* Extending YAML `DeleteProperty` to also allow glob patterns. by @steve-aom-elliott in [#6639](https://github.com/openrewrite/rewrite/pull/6639)
* Allow Gradle AddDependency to work with explicit configuration without Java sources by @bmuschko in [#6624](https://github.com/openrewrite/rewrite/pull/6624)
* Fix `TypeUtils#isAssignableToGeneric()` by @knutwannheden in [#6641](https://github.com/openrewrite/rewrite/pull/6641)
* Add `AddExplicitDependencyVersion` visitor to explicitly set or remove dependency versions by @Jenson3210 in [#6549](https://github.com/openrewrite/rewrite/pull/6549)
* Add `J.MemberReference` support to `ChangeMethodTargetToStatic` by @timtebeek in [#6645](https://github.com/openrewrite/rewrite/pull/6645)
* Add Docker recipes for best practices and security by @timtebeek in [#6640](https://github.com/openrewrite/rewrite/pull/6640)
* Fix parsing of user-written `@lombok.Generated` annotations by @knutwannheden in [#6638](https://github.com/openrewrite/rewrite/pull/6638)
* Fix MergeYaml being unable to insert a scalar into a list that contains entries by @sambsnyd in [#6651](https://github.com/openrewrite/rewrite/pull/6651)
* Fix vulnerability reports by @Jenson3210 in [#6652](https://github.com/openrewrite/rewrite/pull/6652)
* Resolve generic type variable identifiers in `JavaTemplate` output by @knutwannheden in [#6642](https://github.com/openrewrite/rewrite/pull/6642)
* Add recipes to find end-of-life & normalize Docker base images by @timtebeek in [#6649](https://github.com/openrewrite/rewrite/pull/6649)
* Fix JSON parser idempotency issues with non-UTF-8 encoded files by @MBoegers in [#6635](https://github.com/openrewrite/rewrite/pull/6635)
* Parent-load `ParseErrorVisitor` and `JavadocVisitor` by @knutwannheden in [#6629](https://github.com/openrewrite/rewrite/pull/6629)
* Do not pin managed versions from spring boot plugin  by @Jenson3210 in [#6654](https://github.com/openrewrite/rewrite/pull/6654)
* Python: Bump `ty` to 0.0.14 by @knutwannheden in [#6655](https://github.com/openrewrite/rewrite/pull/6655)
* Adding recipe `AddCommentToProperty` for YAML files by @steve-aom-elliott in [#6643](https://github.com/openrewrite/rewrite/pull/6643)
* Fix MergeYaml adding extra newlines when the previous lines content already ended with a newline by @sambsnyd in [#6656](https://github.com/openrewrite/rewrite/pull/6656)
* Improve performance of `JavaTemplate$Matcher#find()` by @knutwannheden in [#6657](https://github.com/openrewrite/rewrite/pull/6657)
* Support Groovy method pointers and array constructor method references by @jevanlingen in [#5782](https://github.com/openrewrite/rewrite/pull/5782)

#### [rewrite 8.72.3](https://github.com/openrewrite/rewrite/releases/tag/v8.72.3)

* Validate all JSONPath expressions in YAML recipes by @knutwannheden in [#6586](https://github.com/openrewrite/rewrite/pull/6586)
* Align estimated time savings between `Result` and `SourcesFileResults` by @pstreef in [#6022](https://github.com/openrewrite/rewrite/pull/6022)
* Allowing properties to be updated for `ChangeDependencyGroupIdAndArtifactId` / `ChangeManagedDependencyGroupIdAndArtifactId` only under safe circumstances. by @steve-aom-elliott in [#6583](https://github.com/openrewrite/rewrite/pull/6583)
* Make it easier to troubleshoot missing artifacts by @timtebeek in [#6588](https://github.com/openrewrite/rewrite/pull/6588)
* `UpgradeDependencyVersion` now upgrades literal versions in Spring dependency management plugin entries by @jkschneider in [#6590](https://github.com/openrewrite/rewrite/pull/6590)
* Skip safe-call method invocations in EqualsMethodUsage recipe by @jkschneider in [#6592](https://github.com/openrewrite/rewrite/pull/6592)
* LatestMinor should not include minor version in tilde range by @dsgrieve in [#6587](https://github.com/openrewrite/rewrite/pull/6587)
* Fix gradle bom upgrade by @kdvolder in [#6582](https://github.com/openrewrite/rewrite/pull/6582)
* RemoveRedundantDependencyVersions recipe removes unused properties by @jevanlingen in [#5645](https://github.com/openrewrite/rewrite/pull/5645)
* Enable Java recipes for Python via ty LSP type attribution by @jkschneider in [#6593](https://github.com/openrewrite/rewrite/pull/6593)
* Propagate execution context customizations to recipe execution context by @jkschneider in [#6596](https://github.com/openrewrite/rewrite/pull/6596)
* Update strictly version in dependency constraints instead of removing by @jkschneider in [#6594](https://github.com/openrewrite/rewrite/pull/6594)
* Update exclusions when changing dependency coordinates by @jkschneider in [#6595](https://github.com/openrewrite/rewrite/pull/6595)
* Append YAML object to sequence by @timtebeek in [#6589](https://github.com/openrewrite/rewrite/pull/6589)
* Add DockerParser and initial recipes by @timtebeek in [#6509](https://github.com/openrewrite/rewrite/pull/6509)
* Fix NPE in JavaScriptPrinter.visitFunctionType when space is null by @jkschneider in [#6600](https://github.com/openrewrite/rewrite/pull/6600)
* Handle invalid UTF-16 surrogate pairs in JavaScript/TypeScript parser by @jkschneider in [#6599](https://github.com/openrewrite/rewrite/pull/6599)
* AddOrUpdateAnnotationAttribute respects appendArray with string literals by @steve-aom-elliott in [#6598](https://github.com/openrewrite/rewrite/pull/6598)
* Fix YAML parser idempotency issues with flow mappings and single-brace templates by @jkschneider in [#6604](https://github.com/openrewrite/rewrite/pull/6604)
* JavaScript: Add `OmitColon` marker for TypeScript YAML parser by @knutwannheden in [#6611](https://github.com/openrewrite/rewrite/pull/6611)
* Fix JavaTemplate parsing failure for anonymous inner classes by @knutwannheden in [#6528](https://github.com/openrewrite/rewrite/pull/6528)
* Allow `$` by itself across JsonPathMatcher implementations by @timtebeek in [#6591](https://github.com/openrewrite/rewrite/pull/6591)
* Set type attribution when unfolding star imports by @jkschneider in [#6614](https://github.com/openrewrite/rewrite/pull/6614)
* `YamlResourceLoader` should be able to create recipe listings without resolving artifacts by @shanman190 in [#6602](https://github.com/openrewrite/rewrite/pull/6602)
* Support both tag and digest in Docker by @timtebeek in [#6617](https://github.com/openrewrite/rewrite/pull/6617)
* Add recipe to change image tag by @timtebeek in [#6616](https://github.com/openrewrite/rewrite/pull/6616)
* Support glob pattern matching for Docker images with environment variables by @timtebeek in [#6615](https://github.com/openrewrite/rewrite/pull/6615)
* JavaScript: Fix ts-jest test failures with es2017 target by @timtebeek in [#6618](https://github.com/openrewrite/rewrite/pull/6618)
* Fix Jackson 2.21 compatibility for MavenSettings ServerConfiguration parsing by @timtebeek in [#6605](https://github.com/openrewrite/rewrite/pull/6605)

#### [rewrite 8.72.2](https://github.com/openrewrite/rewrite/releases/tag/v8.72.2)

* Preventing the addition of a version tag on a direct dependency for scenarios where the local parent had the managed dependency that we were also changing. Also prevented property creation / modification that could cause breakages of other dependencies. by @steve-aom-elliott in [#6566](https://github.com/openrewrite/rewrite/pull/6566)
* Allow direct Kotlin recipe instantiation in tests by @timtebeek in [#6578](https://github.com/openrewrite/rewrite/pull/6578)
* Fix print inequality around modifiers with whitespace by @timtebeek in [#6579](https://github.com/openrewrite/rewrite/pull/6579)
* Minor update to one of the tests - following lodash release by @greg-at-moderne in [#6581](https://github.com/openrewrite/rewrite/pull/6581)
* RPC - when process dies, store its stderr by @greg-at-moderne in [#6580](https://github.com/openrewrite/rewrite/pull/6580)
* Expand `UpgradePluginVersion` to support the `kotlin` plugin by @Laurens-W in [#6570](https://github.com/openrewrite/rewrite/pull/6570)
* Load dependent recipes in a declarative from an existing `RecipeMarkeplace` by @shanman190 in [#6584](https://github.com/openrewrite/rewrite/pull/6584)

#### [rewrite 8.72.1](https://github.com/openrewrite/rewrite/releases/tag/v8.72.1)

* Fix loading of YAML recipes on Windows by @shanman190 in [#6575](https://github.com/openrewrite/rewrite/pull/6575)

#### [rewrite-all 1.23.8](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.8)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-all 1.23.7](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.7)

* Detect Docker in `LanguageComposition` by @timtebeek in [#39](https://github.com/openrewrite/rewrite-all/pull/39)
* Changing how `LanguageComposition` detects JavaScript / Typescript files based on what their compilation units are now. by @steve-aom-elliott in [#40](https://github.com/openrewrite/rewrite-all/pull/40)

#### [rewrite-all 1.23.6](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.6)

* Detect additional mainframe languages by @timtebeek in [#38](https://github.com/openrewrite/rewrite-all/pull/38)

#### [rewrite-apache 2.22.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.22.0)

* Remove precondition from `UpgradeApacheHttpClientDependencies` to fix transitive dependency case by @jkschneider in [#114](https://github.com/openrewrite/rewrite-apache/pull/114)
* Migrate SSLConnectionSocketFactory.getDefaultHostnameVerifier to HttpsSupport by @jkschneider in [#116](https://github.com/openrewrite/rewrite-apache/pull/116)
* Fix MigrateSSLConnectionSocketFactory leaving incomplete code by @jkschneider in [#115](https://github.com/openrewrite/rewrite-apache/pull/115)
* Migrate Apache HttpAsyncClient 4.x to HttpClient 5.x by @steve-aom-elliott in [#117](https://github.com/openrewrite/rewrite-apache/pull/117)

#### [rewrite-codemods 0.24.2](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.2)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.6](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.6)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.9.0](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.9.0)

* Add Dropwizard 4.x to 5.0.x upgrade recipes by @timtebeek in [#13](https://github.com/openrewrite/rewrite-dropwizard/pull/13)

#### [rewrite-feature-flags 1.19.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.19.0)

* use assertj-core provided by `org.openrewrite.build.recipe-library`  by @Jenson3210 in [#61](https://github.com/openrewrite/rewrite-feature-flags/pull/61)

#### [rewrite-github-actions 3.18.1](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.18.1)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-gitlab 0.17.6](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.6)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.17.2](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.17.2)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-jackson 1.16.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.16.0)

* Handle `ObjectMapper.setSerializationInclusion()` in Jackson 3 migration by @knutwannheden in [#79](https://github.com/openrewrite/rewrite-jackson/pull/79)
* mitigate assertj risk by removing compileClasspath dependency by @Jenson3210 in [#81](https://github.com/openrewrite/rewrite-jackson/pull/81)
* Revert "Handle `ObjectMapper.setSerializationInclusion()` in Jackson 3 migration" by @bryceatmoderne in [#82](https://github.com/openrewrite/rewrite-jackson/pull/82)
* Re-land ObjectMapper.setSerializationInclusion() migration with fix by @pstreef in [#83](https://github.com/openrewrite/rewrite-jackson/pull/83)

#### [rewrite-java-dependencies 1.51.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.51.0)

* Add FindDuplicateClasses recipe by @jkschneider in [#170](https://github.com/openrewrite/rewrite-java-dependencies/pull/170)
* Add combined FindRepositoryOrder for Maven and Gradle by @kmccarp in [#171](https://github.com/openrewrite/rewrite-java-dependencies/pull/171)
* Register MavenRepositoryOrder data table on combined FindRepositoryOrder by @kmccarp in [#172](https://github.com/openrewrite/rewrite-java-dependencies/pull/172)

#### [rewrite-jenkins 0.34.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.1)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.6.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.6.2)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.6.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.6.1)

* Fix assertion failures on Groovy/Gradle files by @pstreef in [#9](https://github.com/openrewrite/rewrite-joda/pull/9)

#### [rewrite-liberty 1.23.6](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.6)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.23.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.23.0)

* Make declarative recipes singletons by @sambsnyd in [#275](https://github.com/openrewrite/rewrite-logging-frameworks/pull/275)
* Support `isEnabledFor` to `isEnabled` in Log4j 1.x to 2.x migration by @timtebeek in [#277](https://github.com/openrewrite/rewrite-logging-frameworks/pull/277)

#### [rewrite-maven-plugin 6.29.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.29.0)

* Skip unresolved property placeholders when determining charset by @timtebeek in [#1105](https://github.com/openrewrite/rewrite-maven-plugin/pull/1105)

#### [rewrite-maven-plugin 6.28.1](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.28.1)

* Parse src/main/webapp resources for WAR projects by @Jenson3210 in [#1103](https://github.com/openrewrite/rewrite-maven-plugin/pull/1103)

#### [rewrite-micrometer 0.28.3](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.3)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.31.2](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.31.2)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.27.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.27.0)

* Add jakarta.annotation-api dependency when using javax.annotation by @jkschneider in [#972](https://github.com/openrewrite/rewrite-migrate-java/pull/972)
* Add com.sun.istack.NotNull migration to Jakarta validation by @jkschneider in [#973](https://github.com/openrewrite/rewrite-migrate-java/pull/973)
* Add UseListOf and UseSetOf recipes by @jkschneider in [#974](https://github.com/openrewrite/rewrite-migrate-java/pull/974)
* Lombok Annotation Processor Configuration by @MBoegers in [#977](https://github.com/openrewrite/rewrite-migrate-java/pull/977)
* Migrate GraalVM resource-config.json from regex to glob patterns by @MBoegers in [#976](https://github.com/openrewrite/rewrite-migrate-java/pull/976)
* Followup after the formatting merge by @Jenson3210 in [#978](https://github.com/openrewrite/rewrite-migrate-java/pull/978)
* Avoid line continuation escapes in text blocks with mixed newline content by @Jenson3210 in [#975](https://github.com/openrewrite/rewrite-migrate-java/pull/975)
* Change Docker image version in Java upgrades by @timtebeek in [#980](https://github.com/openrewrite/rewrite-migrate-java/pull/980)

#### [rewrite-netty 0.6.6](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.6)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.21.3](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.21.3)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.30.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.30.0)

* Migrate the `authorizations` property in `MigrateApiToTag` by @jdiazdev in [#65](https://github.com/openrewrite/rewrite-openapi/pull/65)
* Convert `responseHeaders` when migrating `ApiResponse` by @jdiazdev in [#68](https://github.com/openrewrite/rewrite-openapi/pull/68)
* Handle constant field references in API response code conversion by @jkschneider in [#69](https://github.com/openrewrite/rewrite-openapi/pull/69)

#### [rewrite-polyglot 2.9.5](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.5)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.9.4](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.4)

* Add DockerParser by @timtebeek in [#50](https://github.com/openrewrite/rewrite-polyglot/pull/50)

#### [rewrite-quarkus 2.29.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.29.0)

* Adjusting test for deleting a property form YAML to reflect changes to `DeleteProperty` that remove leading empty lines upon deletion by @steve-aom-elliott in [#109](https://github.com/openrewrite/rewrite-quarkus/pull/109)

#### [rewrite-rewrite 0.20.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.20.0)

* Add recipe to remove elements annotated with `ToBeRemoved` by @timtebeek in [#55](https://github.com/openrewrite/rewrite-rewrite/pull/55)
* Add recipe to generate InlineMethodCalls for deprecated delegating methods by @timtebeek in [#56](https://github.com/openrewrite/rewrite-rewrite/pull/56)
* Followup after the formatting merge by @Jenson3210 in [#57](https://github.com/openrewrite/rewrite-rewrite/pull/57)
* Add a recipe which adds the Singleton precondition to declarative recipes. by @sambsnyd in [#58](https://github.com/openrewrite/rewrite-rewrite/pull/58)
* Fix alignment of Text blocks in tests by @Jenson3210 in [#60](https://github.com/openrewrite/rewrite-rewrite/pull/60)

#### [rewrite-spring 6.24.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.24.0)

* Also upgrading the version of `spring-kafka` during the `Spring Kafka 3.x` upgrade to ensure compatibility with the included class changes. by @steve-aom-elliott in [#921](https://github.com/openrewrite/rewrite-spring/pull/921)
* Fix OAuth2ResourceServerLambdaDsl for Kotlin code by @MBoegers in [#916](https://github.com/openrewrite/rewrite-spring/pull/916)
* Add AddAutoConfigureWebTestClient recipe and support old TestRestTemplate location by @MBoegers in [#922](https://github.com/openrewrite/rewrite-spring/pull/922)
* Add recipe for deprecated HttpComponentsClientHttpRequestFactory.setConnectTimeout by @jkschneider in [#919](https://github.com/openrewrite/rewrite-spring/pull/919)
* Add transaction manager and timestamp migration recipes for Spring Batch by @timtebeek in [#923](https://github.com/openrewrite/rewrite-spring/pull/923)
* Spring Boot 4: Upgrade Gradle wrapper to 8.14 by @knutwannheden in [#928](https://github.com/openrewrite/rewrite-spring/pull/928)
* Spring Boot 4: Migrate `actuate.health` package to `health.contributor` by @knutwannheden in [#927](https://github.com/openrewrite/rewrite-spring/pull/927)
* Handle non-lambda arguments in SuccessFailureCallbackToBiConsumerVisitor by @Jenson3210 in [#929](https://github.com/openrewrite/rewrite-spring/pull/929)
* Migrating missed `spring.session.mongodb.*` to `spring.session.data.mongodb.*` by @steve-aom-elliott in [#930](https://github.com/openrewrite/rewrite-spring/pull/930)

#### [rewrite-spring 6.23.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.23.1)

* Organize Kotlin tests with @Nested and fix test expectations by @MBoegers in [#913](https://github.com/openrewrite/rewrite-spring/pull/913)
* Add NoHttpExchangeAnnotation by @nurdy-kim in [#910](https://github.com/openrewrite/rewrite-spring/pull/910)

#### [rewrite-spring-to-quarkus 0.4.4](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.4.4)

* OpenRewrite v8.73.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.27.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.27.0)

* Skip MinimumSwitchCases transformation when type info is missing by @jkschneider in [#808](https://github.com/openrewrite/rewrite-static-analysis/pull/808)
* Preserve `else-if` chains in `UnwrapElseAfterReturn` recipe by @knutwannheden in [#809](https://github.com/openrewrite/rewrite-static-analysis/pull/809)
* Followup after the formatting merge by @Jenson3210 in [#810](https://github.com/openrewrite/rewrite-static-analysis/pull/810)
* Make declarative recipes singletons by @sambsnyd in [#811](https://github.com/openrewrite/rewrite-static-analysis/pull/811)
* Fix UnnecessaryThrows to check actual close() method exceptions by @timtebeek in [#812](https://github.com/openrewrite/rewrite-static-analysis/pull/812)
* Adjust indent in `ReplaceRedundantFormatWithPrintfTest` by @greg-at-moderne in [#815](https://github.com/openrewrite/rewrite-static-analysis/pull/815)
* One more test case for `ExplicitLambdaArgumentTypes` by @greg-at-moderne in [#814](https://github.com/openrewrite/rewrite-static-analysis/pull/814)

#### [rewrite-templating 1.40.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.40.0)

* Add BeforeTemplate precondition to all generated recipes by @timtebeek in [#178](https://github.com/openrewrite/rewrite-templating/pull/178)

#### [rewrite-testing-frameworks 3.27.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.27.0)

* Correcting MockWebServer migration for OkHttp by @steve-aom-elliott in [#849](https://github.com/openrewrite/rewrite-testing-frameworks/pull/849)
* Add `ReturnActual` recipe for AssertJ by @timtebeek in [#891](https://github.com/openrewrite/rewrite-testing-frameworks/pull/891)
* Add `MockConstructionToTryWithResources` recipe by @jkschneider in [#892](https://github.com/openrewrite/rewrite-testing-frameworks/pull/892)
* Add CleanupKotlinJUnit5AssertionImports recipe by @jkschneider in [#893](https://github.com/openrewrite/rewrite-testing-frameworks/pull/893)
* Skip Kotlin files in PowerMockitoMockStaticToMockito by @jkschneider in [#894](https://github.com/openrewrite/rewrite-testing-frameworks/pull/894)
* Add test cases for `MockedConstruction` pattern by @jkschneider in [#895](https://github.com/openrewrite/rewrite-testing-frameworks/pull/895)
* Update byte buddy to a Java 25 compatible version by @Laurens-W in [#897](https://github.com/openrewrite/rewrite-testing-frameworks/pull/897)
* Followup after the formatting merge by @Jenson3210 in [#900](https://github.com/openrewrite/rewrite-testing-frameworks/pull/900)
* Skip TemporaryFolder conversion when used in RuleChain. by @motlin in [#898](https://github.com/openrewrite/rewrite-testing-frameworks/pull/898)
* Add JUnit 4 to JUnit 5 exception class migrations. by @motlin in [#902](https://github.com/openrewrite/rewrite-testing-frameworks/pull/902)
* Make declarative recipes singletons by @sambsnyd in [#905](https://github.com/openrewrite/rewrite-testing-frameworks/pull/905)
* Handle method references in JUnit Assert to Assertions migration. by @motlin in [#901](https://github.com/openrewrite/rewrite-testing-frameworks/pull/901)
* Add explicit test scope to AssertJ dependency additions by @Jenson3210 in [#903](https://github.com/openrewrite/rewrite-testing-frameworks/pull/903)
* Skip SimplifyChainedAssertJAssertion when actual type has wildcard type parameters by @knutwannheden in [#906](https://github.com/openrewrite/rewrite-testing-frameworks/pull/906)
* Revert "Add explicit test scope to AssertJ dependency additions (#903)" by @Jenson3210 in [#907](https://github.com/openrewrite/rewrite-testing-frameworks/pull/907)
* Fix AssertThrowsOnLastStatement to preserve parameterized types when extracting arguments. by @motlin in [#908](https://github.com/openrewrite/rewrite-testing-frameworks/pull/908)
* Enhance RemoveInitMocksIfRunnersSpecified to also remove openMocks by @dsgrieve in [#904](https://github.com/openrewrite/rewrite-testing-frameworks/pull/904)
* `RemoveInitMocksIfRunnersSpecified` (or any recipe) should not have a mutable static field by @Jenson3210 in [#910](https://github.com/openrewrite/rewrite-testing-frameworks/pull/910)

#### [rewrite-third-party 0.35.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.35.0)

* Add liftwizard-rewrite recipes by @timtebeek in [#59](https://github.com/openrewrite/rewrite-third-party/pull/59)

## [rewrite-recipe-bom 3.23.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.23.0)

Released on January 20, 2026, with OpenRewrite 8.72.0.

#### [rewrite 8.72.0](https://github.com/openrewrite/rewrite/releases/tag/v8.72.0)

* Drop still unused `UnsafeReplaceJavaType` added in d29ac92 by @timtebeek in [#6494](https://github.com/openrewrite/rewrite/pull/6494)
* UUID generation fallback for Node version pre-14.17.0 by @bmuschko in [#6495](https://github.com/openrewrite/rewrite/pull/6495)
* Changing `AddDependencyVisitor` so it is able to broaden the scope of a direct dependency if needed by @steve-aom-elliott in [#6434](https://github.com/openrewrite/rewrite/pull/6434)
* Add style parameter to OrderImports. by @sambsnyd in [#6496](https://github.com/openrewrite/rewrite/pull/6496)
* Drop Lombok hint from RemoveUnusedImports class by @timtebeek in [#6500](https://github.com/openrewrite/rewrite/pull/6500)
* In yaml `CopyValue`, invoke `UnfoldProperties` after `MergeYaml` by @dsgrieve in [#6499](https://github.com/openrewrite/rewrite/pull/6499)
* Altering check for `AddDependency` to compare versions differently when direct vs indirect dependency. by @steve-aom-elliott in [#6505](https://github.com/openrewrite/rewrite/pull/6505)
* Changing the parsing of the `relativePath` for `parent` in the `MavenPomDownloader` to prevent the situation where `/` was producing `/\pom.xml` on Windows rather than `\pom.xml` by @steve-aom-elliott in [#6506](https://github.com/openrewrite/rewrite/pull/6506)
* Retain nested class imports in `ChangePackage` by @timtebeek in [#6515](https://github.com/openrewrite/rewrite/pull/6515)
* Use `var` for variables initialized with type casts by @timtebeek in [#6523](https://github.com/openrewrite/rewrite/pull/6523)
* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#6521](https://github.com/openrewrite/rewrite/pull/6521)
* Fix `KotlinTemplate` building for annotations by @Laurens-W in [#6522](https://github.com/openrewrite/rewrite/pull/6522)
* Handle `JavaLanguageVersion.of(JavaVersion.VERSION_1_8.majorVersion)` by @Jenson3210 in [#6524](https://github.com/openrewrite/rewrite/pull/6524)
* Add XML recipe `ChangeTagAttributeKey` by @MBoegers in [#6525](https://github.com/openrewrite/rewrite/pull/6525)
* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#6530](https://github.com/openrewrite/rewrite/pull/6530)
* Fix HCL parser for comments with CR-only line endings by @timtebeek in [#6532](https://github.com/openrewrite/rewrite/pull/6532)
* Update version defined in the gradle.properties referenced by the Spring Dependency Management plugin by @bmuschko in [#6527](https://github.com/openrewrite/rewrite/pull/6527)
* ChangeParentPom propagate maven model updates to submodules by @sambsnyd in [#6536](https://github.com/openrewrite/rewrite/pull/6536)
* Process exclusion with `ChangeDependencyGroupIdAndArtifactId` by @gliptak in [#5746](https://github.com/openrewrite/rewrite/pull/5746)
* Java 25: Compact source files by @Laurens-W in [#6011](https://github.com/openrewrite/rewrite/pull/6011)
* Fix StackOverflowError in JavaTypeVisitor for circular type references by @mcebanupgrade in [#6492](https://github.com/openrewrite/rewrite/pull/6492)
* Adjust `Java.Class` inheritance hierarchy for `ChangePackage` and `ChangeType` by @BoykoAlex in [#6498](https://github.com/openrewrite/rewrite/pull/6498)
* Retain imported annotations on `package-info.java` by @timtebeek in [#6519](https://github.com/openrewrite/rewrite/pull/6519)
* Skip managed dependency check for plugin dependencies by @timtebeek in [#6534](https://github.com/openrewrite/rewrite/pull/6534)
* Groovy - Fixing parsing of `assert :` syntax by @greg-at-moderne in [#6531](https://github.com/openrewrite/rewrite/pull/6531)
* Add Kotlin DSL support to RemovePluginVisitor by @div-bargali in [#6537](https://github.com/openrewrite/rewrite/pull/6537)
* RPC - Don't close process.getInputStream() on failure by @greg-at-moderne in [#6541](https://github.com/openrewrite/rewrite/pull/6541)
* Revert "RPC - Don't close process.getInputStream() on failure" by @greg-at-moderne in [#6542](https://github.com/openrewrite/rewrite/pull/6542)
* Python: Refactor RPC receiver and fix marker serialization by @knutwannheden in [#6538](https://github.com/openrewrite/rewrite/pull/6538)
* Python: Replace cursor-based tracking with token-based tracking by @knutwannheden in [#6545](https://github.com/openrewrite/rewrite/pull/6545)
* Support for directives in Yaml by @greg-at-moderne in [#6529](https://github.com/openrewrite/rewrite/pull/6529)
* HCL - indentation for tuples continuation in autoformatting by @greg-at-moderne in [#6548](https://github.com/openrewrite/rewrite/pull/6548)
* Groovy - support for `@Canonical` annotation by @greg-at-moderne in [#6550](https://github.com/openrewrite/rewrite/pull/6550)
* Python: Fix various parser issues by @knutwannheden in [#6547](https://github.com/openrewrite/rewrite/pull/6547)
* Fix dependency management logic resolution order by @shanman190 in [#6554](https://github.com/openrewrite/rewrite/pull/6554)
* Remove artifact that is not published from the rewrite-bom by @shanman190 in [#6558](https://github.com/openrewrite/rewrite/pull/6558)
* Python: Handle `PrepareRecipe`, `Visit`, and `Generate` by @knutwannheden in [#6551](https://github.com/openrewrite/rewrite/pull/6551)
* Python: Remove `Location` enums by @knutwannheden in [#6553](https://github.com/openrewrite/rewrite/pull/6553)
* Groovy - support for `@Synchronized` annotation by @greg-at-moderne in [#6562](https://github.com/openrewrite/rewrite/pull/6562)
* Small renames and changing `bom` to `pom` in tests by @steve-aom-elliott in [#6565](https://github.com/openrewrite/rewrite/pull/6565)
* Maven's `DependencyInsight` should use `LinkedHashMap` for stable order by @timtebeek in [#6568](https://github.com/openrewrite/rewrite/pull/6568)
* Python: Enable `ty` type checking by @knutwannheden in [#6555](https://github.com/openrewrite/rewrite/pull/6555)
* Support varargs in JavaTemplate.Matcher by @timtebeek in [#6556](https://github.com/openrewrite/rewrite/pull/6556)
* Fix `MavenRecipeBundleReader` to set version on all recipe listings by @jkschneider in [#6573](https://github.com/openrewrite/rewrite/pull/6573)
* Reduce scope of recipe resolvers by @shanman190 in [#6557](https://github.com/openrewrite/rewrite/pull/6557)
* Fix JavaTemplate replacements passing a `J.NewArray` into a vararg `J.MethodInvocation` by @timtebeek in [#6572](https://github.com/openrewrite/rewrite/pull/6572)
* Fix flaky test by isolating Maven tests that modify user.home by @jkschneider in [#6574](https://github.com/openrewrite/rewrite/pull/6574)

#### [rewrite-all 1.23.5](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.21.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.21.0)

* Commons-lang3: Migrate deprecated SystemUtils constants by @123Haynes in [#113](https://github.com/openrewrite/rewrite-apache/pull/113)

#### [rewrite-codemods 0.24.1](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.1)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.5](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-docker 2.14.5](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.8.5](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-feature-flags 1.18.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.18.1)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-github-actions 3.18.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.18.0)

* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#165](https://github.com/openrewrite/rewrite-github-actions/pull/165)

#### [rewrite-gitlab 0.17.5](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.17.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.17.1)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-jackson 1.15.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.15.0)

* Add package change for jackson.dataformat by @tschut in [#74](https://github.com/openrewrite/rewrite-jackson/pull/74)
* Drop unnecessary `testRuntimeOnly` for `Jackson3TypeChangesTest` by @timtebeek in [#76](https://github.com/openrewrite/rewrite-jackson/pull/76)
* Fix core exception package paths for StreamReadException and StreamWriteException by @timtebeek in [#77](https://github.com/openrewrite/rewrite-jackson/pull/77)
* Upgrade `jackson-annotations` to `2.21 by @sullis in [#78](https://github.com/openrewrite/rewrite-jackson/pull/78)

#### [rewrite-java-dependencies 1.50.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.50.0)

* Updating `AddDependency` test to better reflect allowed scopes for Maven by @steve-aom-elliott in [#167](https://github.com/openrewrite/rewrite-java-dependencies/pull/167)

#### [rewrite-jenkins 0.34.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.34.0)

* Add search result marker to explain whitespace changes by @timtebeek in [#105](https://github.com/openrewrite/rewrite-jenkins/pull/105)

#### [rewrite-joda 0.6.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.6.0)

* Delete junit config file by @YarochkinMichael in [#8](https://github.com/openrewrite/rewrite-joda/pull/8)

#### [rewrite-liberty 1.23.5](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-logging-frameworks 3.22.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.22.0)

* Support for java.lang.System.Logger in recipes that handles System.out to logger framework by @ovelindstrom in [#272](https://github.com/openrewrite/rewrite-logging-frameworks/pull/272)
* Fix IndexOutOfBoundsException with quoted parameters in JulParameterizedArguments by @timtebeek in [#274](https://github.com/openrewrite/rewrite-logging-frameworks/pull/274)

#### [rewrite-maven-plugin 6.27.1](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.27.1)

* Include active profiles from external parent poms by @shanman190 in [#1096](https://github.com/openrewrite/rewrite-maven-plugin/pull/1096)

#### [rewrite-micrometer 0.28.2](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.2)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.31.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.31.1)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-migrate-java 3.26.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.26.0)

* Also change managed dependency classifier to ehcache to avoid breaking multi module projects by @dsgrieve in [#963](https://github.com/openrewrite/rewrite-migrate-java/pull/963)
* fix `IndexOutOfBoundsException` that occurs in `UseNoArgsConstructor` when visiting record compact constructor method by @zakaria-shahen in [#964](https://github.com/openrewrite/rewrite-migrate-java/pull/964)
* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#966](https://github.com/openrewrite/rewrite-migrate-java/pull/966)
* Use `var` for variables initialized with type casts by @timtebeek in [#965](https://github.com/openrewrite/rewrite-migrate-java/pull/965)
* Add recipe to find locale-sensitive date/time formatting affected by JDK 20+ CLDR changes by @timtebeek in [#967](https://github.com/openrewrite/rewrite-migrate-java/pull/967)
* Normalize version numbers in `FindJavaVersion` by @timtebeek in [#969](https://github.com/openrewrite/rewrite-migrate-java/pull/969)
* Fix JavaxWebXmlToJakartaWebXml regex to match multiline schemaLocation by @timtebeek in [#971](https://github.com/openrewrite/rewrite-migrate-java/pull/971)

#### [rewrite-netty 0.6.5](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.21.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.21.2)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.29.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.29.0)

* MigrateApiParamDefaultValue to allow defaultValue in different order by @jdiazdev in [#57](https://github.com/openrewrite/rewrite-openapi/pull/57)
* Migrate `@ApiParam(allowableValues)` to `@Parameter(schema = @Schema(allowableValues))` by @jdiazdev in [#59](https://github.com/openrewrite/rewrite-openapi/pull/59)
* Convert `@ApiModel(reference)` to `@Schema(ref)` or `@Schema(implementation)` by @timtebeek in [#60](https://github.com/openrewrite/rewrite-openapi/pull/60)
* change swagger-jersey2-jaxrs dependency to swagger-jaxrs2 by @dsgrieve in [#61](https://github.com/openrewrite/rewrite-openapi/pull/61)
* Correcting `artifactId` for `swagger-jaxrs` to `swagger-jaxrs2` when we go to the new `groupId` of `io.swagger.core.v3`, and updated test to show `jersey` artifact combining into the same artifact by @steve-aom-elliott in [#63](https://github.com/openrewrite/rewrite-openapi/pull/63)

#### [rewrite-polyglot 2.9.3](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.3)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.28.5](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.5)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.19.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.19.0)

* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#50](https://github.com/openrewrite/rewrite-rewrite/pull/50)
* Use `@Getter final String displayName` when not using `@Value` by @timtebeek in [#51](https://github.com/openrewrite/rewrite-rewrite/pull/51)
* Replace `getTags()` method with field by @timtebeek in [#52](https://github.com/openrewrite/rewrite-rewrite/pull/52)
* Add Refaster recipes to use `StringUtils` for isNull/Empty/Blank by @timtebeek in [#53](https://github.com/openrewrite/rewrite-rewrite/pull/53)
* Replace `getEstimatedEffortPerOccurrence()` method with field by @timtebeek in [#54](https://github.com/openrewrite/rewrite-rewrite/pull/54)

#### [rewrite-spring 6.23.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.23.0)

* Migrating Spring Kafka's `SeekToCurrentErrorHandler` to `DefaultErrorHandler` and updates method that was previously used to set the handler for `AbstractKafkaListenerContainerFactory`. by @steve-aom-elliott in [#900](https://github.com/openrewrite/rewrite-spring/pull/900)
* Add recipes for Jackson 3 migration in Spring Kafka 4 by @jjank in [#901](https://github.com/openrewrite/rewrite-spring/pull/901)
* Update package names for spring-boot-graphql by @tschut in [#902](https://github.com/openrewrite/rewrite-spring/pull/902)
* Add more Jackson 3 migrations for Spring Kafka by @jjank in [#904](https://github.com/openrewrite/rewrite-spring/pull/904)
* Add `@AutoConfigureTestRestTemplate` if necessary by @jjank in [#906](https://github.com/openrewrite/rewrite-spring/pull/906)
* Add annotation support to `ChangeSpringPropertyValue` by @timtebeek in [#907](https://github.com/openrewrite/rewrite-spring/pull/907)

#### [rewrite-spring 6.22.1](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.22.1)

* Added recipes for JobExecutionAlreadyRunningException, JobInstanceAlr… by @wesselboelen in [#898](https://github.com/openrewrite/rewrite-spring/pull/898)
* feat: Add OpenTelemetry migration recipes for Spring Boot applications by @sandy2008 in [#893](https://github.com/openrewrite/rewrite-spring/pull/893)
* Add support for kotlin in ChangeSpringPropertyKey and avoid regenerative changes in annotations. by @Jenson3210 in [#899](https://github.com/openrewrite/rewrite-spring/pull/899)

#### [rewrite-spring-to-quarkus 0.4.3](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.4.3)

* OpenRewrite v8.72.0: https://github.com/openrewrite/rewrite/compare/v8.72.0...main

#### [rewrite-static-analysis 2.26.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.26.0)

* Replace `getDisplayName()` and `getDescription()` methods with fields by @timtebeek in [#805](https://github.com/openrewrite/rewrite-static-analysis/pull/805)
* Replace `getTags()` method with field by @timtebeek in [#806](https://github.com/openrewrite/rewrite-static-analysis/pull/806)
* Replace `getEstimatedEffortPerOccurrence()` method with field by @timtebeek in [#807](https://github.com/openrewrite/rewrite-static-analysis/pull/807)

#### [rewrite-templating 1.39.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.39.0)

* Only add `@Generated` on the outer class by @timtebeek in [#177](https://github.com/openrewrite/rewrite-templating/pull/177)
* Add support for `@Repeated` annotation and `Refaster.asVarargs()` by @timtebeek in [#176](https://github.com/openrewrite/rewrite-templating/pull/176)

#### [rewrite-testing-frameworks 3.26.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.26.0)

* Transform `Assume` methods to without a direct counterpart to equivalent `Assumptions` by @cortlepp in [#889](https://github.com/openrewrite/rewrite-testing-frameworks/pull/889)
* Apply Kotlin style class reference in `AddMockitoExtensionIfAnnotationsUsed` by @Laurens-W in [#890](https://github.com/openrewrite/rewrite-testing-frameworks/pull/890)

#### [rewrite-third-party 0.34.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.34.0)

* Regenerate `MigrateToQuarkus_v3_0_0` and enable scheduled pipeline by @timtebeek in [#56](https://github.com/openrewrite/rewrite-third-party/pull/56)

## [rewrite-recipe-bom 3.22.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.22.0)

Released on January 7, 2026, with OpenRewrite 8.71.0.

#### [rewrite 8.71.0](https://github.com/openrewrite/rewrite/releases/tag/v8.71.0)

* Document usages of the various `ClasspathScanningLoader` methods by @timtebeek in [#6471](https://github.com/openrewrite/rewrite/pull/6471)
* JavaScript: Add `JS.Spread` for spread and rest syntax by @knutwannheden in [#6436](https://github.com/openrewrite/rewrite/pull/6436)
* Provide a next step when validation fails by @timtebeek in [#6475](https://github.com/openrewrite/rewrite/pull/6475)
* Fix Recipe to remove build cache configuration for Develocity by @div-bargali in [#6465](https://github.com/openrewrite/rewrite/pull/6465)
* Only remove `gradleEnterprise` and `develocity.buildCache` by @timtebeek in [#6476](https://github.com/openrewrite/rewrite/pull/6476)
* `groupId` and `artifactId` on project POM definition need to be resolved fully to prevent being interpreted as an external POM by @shanman190 in [#6477](https://github.com/openrewrite/rewrite/pull/6477)
* Resolve GAVs, classifiers and types of transitive dependencies via the containing POM by @steve-aom-elliott in [#6464](https://github.com/openrewrite/rewrite/pull/6464)
* Update version in the Gradle model by @BoykoAlex in [#6428](https://github.com/openrewrite/rewrite/pull/6428)
* Utilize a child-first strategy for resource loading by @shanman190 in [#6414](https://github.com/openrewrite/rewrite/pull/6414)
* Bug: Incorrect plugin insertion order in settings.gradle with pluginManagement and buildscript by @div-bargali in [#6478](https://github.com/openrewrite/rewrite/pull/6478)
* Accept exit code of 1 for Javascript RPC server by @shanman190 in [#6481](https://github.com/openrewrite/rewrite/pull/6481)
* fix(groovy): GroovyPrinter omits space after Elvis operator by @albertocavalcante in [#6483](https://github.com/openrewrite/rewrite/pull/6483)
* Add initial generated recipes.csv ahead of customization by @timtebeek in [#6484](https://github.com/openrewrite/rewrite/pull/6484)
* Fix issue where BOMs/platforms defined in Gradle Module Metadata could end up erroneously listed as requested dependencies in our maven model by @sambsnyd in [#6488](https://github.com/openrewrite/rewrite/pull/6488)
* Allow `InMemoryDiffEntry` to print with the correct `MarkerPrinter` by @kmccarp in [#6486](https://github.com/openrewrite/rewrite/pull/6486)
* Ensure `plugins` block is added after `pluginManagement`, even when `pluginManagement` was added just before by @Laurens-W in [#6489](https://github.com/openrewrite/rewrite/pull/6489)
* Handle `JavaLanguageVersion.of(JavaVersion.VERSION_1_8)` by @timtebeek in [#6491](https://github.com/openrewrite/rewrite/pull/6491)
* Mark an initial set of recipes as usable for JavaScript by @timtebeek in [#6485](https://github.com/openrewrite/rewrite/pull/6485)

#### [rewrite 8.70.4](https://github.com/openrewrite/rewrite/releases/tag/v8.70.4)

* Allow links and backticks at start of displaynames and descriptions by @timtebeek in [#6470](https://github.com/openrewrite/rewrite/pull/6470)
* Managed dependencies without a version should be merged with settings coming from an existing version by @shanman190 in [#6472](https://github.com/openrewrite/rewrite/pull/6472)

#### [rewrite 8.70.3](https://github.com/openrewrite/rewrite/releases/tag/v8.70.3)

* Do not delegate to `ChangeManagedDependencyGroupIdAndArtifactId` for globs by @timtebeek in [#6469](https://github.com/openrewrite/rewrite/pull/6469)
* Allow for upgrading direct and transitive dependencies added by Gradle plugins by @bmuschko in [#6462](https://github.com/openrewrite/rewrite/pull/6462)

#### [rewrite 8.70.2](https://github.com/openrewrite/rewrite/releases/tag/v8.70.2)

* Mem perf recipe csv validators by @jkschneider in [#6467](https://github.com/openrewrite/rewrite/pull/6467)

#### [rewrite 8.70.0](https://github.com/openrewrite/rewrite/releases/tag/v8.70.0)

* JavaScript: Add `ProjectParser` for whole-project parsing by @knutwannheden in [#6458](https://github.com/openrewrite/rewrite/pull/6458)
* Kotlin `OrderImports` recipe by @MBoegers in [#6461](https://github.com/openrewrite/rewrite/pull/6461)
* Migrate from Immer to Mutative by @knutwannheden in [#6460](https://github.com/openrewrite/rewrite/pull/6460)
* Add CopyValue for JSON by @dsgrieve in [#6449](https://github.com/openrewrite/rewrite/pull/6449)
* Properly construct nested type by @BoykoAlex in [#6450](https://github.com/openrewrite/rewrite/pull/6450)
* Recipe marketplace RPC and additional recipe bundle readers by @jkschneider in [#6437](https://github.com/openrewrite/rewrite/pull/6437)
* Allow `AddMethodParameter` to match overridden methods by @Anmol202005 in [#6294](https://github.com/openrewrite/rewrite/pull/6294)

#### [rewrite-all 1.23.4](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.20.4](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.20.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.24.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.24.0)

* chore: update @ui5/linter from 1.20.5 to 1.20.7 by @flovogt in [#58](https://github.com/moderneinc/rewrite-codemods/pull/58)
* Fix recipes.csv validation issues by @timtebeek in [#59](https://github.com/moderneinc/rewrite-codemods/pull/59)

#### [rewrite-cucumber-jvm 2.11.4](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-docker 2.14.4](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.8.4](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.18.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.18.0)

* Add Quarkus feature flags support by @timtebeek in [#58](https://github.com/openrewrite/rewrite-feature-flags/pull/58)
* Support Kotlin String in `MigrateUserToContext` by @timtebeek in [#59](https://github.com/openrewrite/rewrite-feature-flags/pull/59)

#### [rewrite-github-actions 3.17.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.17.0)

* Allow updating multiple actions using a wildcard pattern by @wjglerum in [#164](https://github.com/openrewrite/rewrite-github-actions/pull/164)

#### [rewrite-gitlab 0.17.4](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.24.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.24.0)

* Improve error logging for recipe validation failures by including recipe name by @RaoPrashanth in [#423](https://github.com/openrewrite/rewrite-gradle-plugin/pull/423)

#### [rewrite-hibernate 2.17.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.17.0)

* Support `TypeDefs` in `TypeAnnotationParameter` by @dsgrieve in [#70](https://github.com/openrewrite/rewrite-hibernate/pull/70)

#### [rewrite-jackson 1.14.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.14.0)

* fix: Migrate Jackson com.fasterxml.jackson.datatype dependencies by @kdombeck in [#67](https://github.com/openrewrite/rewrite-jackson/pull/67)
* fix: Migrate Jackson com.fasterxml.jackson.(jaxrs,jakarta.rs,jr) dependencies by @kdombeck in [#68](https://github.com/openrewrite/rewrite-jackson/pull/68)
* fix: correct language by @kdombeck in [#69](https://github.com/openrewrite/rewrite-jackson/pull/69)
* Simplify ChangeDependency duplicates following openrewrite/rewrite#6406 by @timtebeek in [#62](https://github.com/openrewrite/rewrite-jackson/pull/62)
* Add package change for com.fasterxml.jackson.module by @tschut in [#71](https://github.com/openrewrite/rewrite-jackson/pull/71)

#### [rewrite-java-dependencies 1.49.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.49.0)

* Remove redundant dependencies by @timtebeek in [#166](https://github.com/openrewrite/rewrite-java-dependencies/pull/166)

#### [rewrite-jenkins 0.33.3](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.33.3)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.5.2](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.5.2)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.23.4](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.21.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.21.0)

* Update expectations after random name generator upgrade by @greg-at-moderne in [#270](https://github.com/openrewrite/rewrite-logging-frameworks/pull/270)
* Remove vulnerable dependency from test scope by @Laurens-W in [#271](https://github.com/openrewrite/rewrite-logging-frameworks/pull/271)

#### [rewrite-micrometer 0.28.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.1)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.31.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.31.0)

* Adopt `recipeFromResources` to load recipes by @timtebeek in [#133](https://github.com/openrewrite/rewrite-micronaut/pull/133)

#### [rewrite-migrate-java 3.25.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.25.0)

* Add or update recipe category descriptors by @jkschneider in [#960](https://github.com/openrewrite/rewrite-migrate-java/pull/960)
* Add bulk read method to InputStream implementations by @pstreef in [#961](https://github.com/openrewrite/rewrite-migrate-java/pull/961)

#### [rewrite-netty 0.6.4](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.21.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.21.1)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.28.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.28.0)

* Fix recipe description by @timtebeek in [#56](https://github.com/openrewrite/rewrite-openapi/pull/56)

#### [rewrite-polyglot 2.9.2](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.2)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.28.4](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.18.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.18.0)

* Ensure a stable example order even with multiple examples per recipe by @timtebeek in [#48](https://github.com/openrewrite/rewrite-rewrite/pull/48)

#### [rewrite-spring 6.22.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.22.0)

* spring-boot-40: handle rename of spring-boot-data-jpa packages by @murdos in [#875](https://github.com/openrewrite/rewrite-spring/pull/875)
* feat: Add automatic upgrade of error-handling-spring-boot-starter for… by @wimdeblauwe in [#878](https://github.com/openrewrite/rewrite-spring/pull/878)
* spring-boot-40: upgrade to neo4j-migrations-spring-boot-starter 3.0 by @murdos in [#880](https://github.com/openrewrite/rewrite-spring/pull/880)
* spring-boot-40: upgrade to springdoc-openapi 3.0 by @murdos in [#879](https://github.com/openrewrite/rewrite-spring/pull/879)
* Unneeded escape char in regex in MigrateToModularStartersTest by @ghusta in [#882](https://github.com/openrewrite/rewrite-spring/pull/882)
* spring-boot-40: handle rename of spring-boot-persistence packages by @ghusta in [#881](https://github.com/openrewrite/rewrite-spring/pull/881)
* OpenRewrite recipe best practices by @timtebeek in [#883](https://github.com/openrewrite/rewrite-spring/pull/883)
* Remove unnecessary `expectedCyclesThatMakeChanges` by @timtebeek in [#886](https://github.com/openrewrite/rewrite-spring/pull/886)
* Fix JdbcTemplateObjectArrayArgToVarArgs for Object[] argument reordering by @Gautam-aman in [#885](https://github.com/openrewrite/rewrite-spring/pull/885)
* spring-boot-40: handle rename of spring-boot-starter-validation packages by @wyfrel in [#887](https://github.com/openrewrite/rewrite-spring/pull/887)
* Add or update recipe category descriptors by @jkschneider in [#888](https://github.com/openrewrite/rewrite-spring/pull/888)
* Add: recipes to handle the new spring-boot-webtestclient module by @wleese in [#889](https://github.com/openrewrite/rewrite-spring/pull/889)
* Specify the spring-boot-test version in tests by @timtebeek in [#892](https://github.com/openrewrite/rewrite-spring/pull/892)
* Add Spring doc 3 migration recipe by @wyfrel in [#891](https://github.com/openrewrite/rewrite-spring/pull/891)
* Upgrade Spock dependency by @GoldenSupremeSaltedFish in [#890](https://github.com/openrewrite/rewrite-spring/pull/890)
* Add `newVersion` to `ChangeDependency` steps for Spring Boot 4.0 by @timtebeek in [#894](https://github.com/openrewrite/rewrite-spring/pull/894)
* Add recipe Spring Boot 4.0 Modular Starters Flyway Dependency Precondition by @wleese in [#895](https://github.com/openrewrite/rewrite-spring/pull/895)

#### [rewrite-spring-to-quarkus 0.4.2](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.4.2)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.25.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.25.0)

* `ReplaceWeekYearWithYear` should not replace valid week-year usages by @tginsberg in [#801](https://github.com/openrewrite/rewrite-static-analysis/pull/801)

#### [rewrite-templating 1.38.4](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.38.4)

* OpenRewrite v8.71.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.25.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.25.0)

* add upgrade recipe for deprecated APIs introduced in junit 5.13 by @murdos in [#877](https://github.com/openrewrite/rewrite-testing-frameworks/pull/877)
* throwing ParseError.toException by @greg-at-moderne in [#878](https://github.com/openrewrite/rewrite-testing-frameworks/pull/878)
* Add recipe to migrate JUnit 4 ExternalResource rules using jupiter-migrationsupport by @amishra-u in [#880](https://github.com/openrewrite/rewrite-testing-frameworks/pull/880)
* Drop `FindUnitTests` and associated data table by @timtebeek in [#882](https://github.com/openrewrite/rewrite-testing-frameworks/pull/882)
* fix: HamcrestMatcherToAssertJ argumentType does not allow subclasses by @Gosho1024 in [#881](https://github.com/openrewrite/rewrite-testing-frameworks/pull/881)
* Convert TestContainers raw types as part of upgrade by @timtebeek in [#883](https://github.com/openrewrite/rewrite-testing-frameworks/pull/883)
* Add or update recipe category descriptors by @jkschneider in [#884](https://github.com/openrewrite/rewrite-testing-frameworks/pull/884)

#### [rewrite-third-party 0.33.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.33.0)

* Remove out-of-date OWASP suppressions by @Laurens-W in [#54](https://github.com/openrewrite/rewrite-third-party/pull/54)
* Update suppressions by @Laurens-W in [#55](https://github.com/openrewrite/rewrite-third-party/pull/55)

## [rewrite-recipe-bom 3.21.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.21.0)

Released on December 16, 2025, with OpenRewrite 8.69.0.

#### [rewrite 8.69.0](https://github.com/openrewrite/rewrite/releases/tag/v8.69.0)

* MSAL license on rewrite-javascript files by @greg-at-moderne in [#6385](https://github.com/openrewrite/rewrite/pull/6385)
* JavaScript: Various formatter fixes by @knutwannheden in [#6382](https://github.com/openrewrite/rewrite/pull/6382)
* Updated  toml parser to handle whitspaces incase of empty array. by @sudouser777 in [#6388](https://github.com/openrewrite/rewrite/pull/6388)
* Separate dependency graph in dependency insight recipes into a `ExplainDependenciesInUse` data table by @jkschneider in [#6386](https://github.com/openrewrite/rewrite/pull/6386)
* Fixed parser issue to support flow style mappings in sequences. by @sudouser777 in [#6394](https://github.com/openrewrite/rewrite/pull/6394)
* JavaScript - Refactor JavaScript tests not to use `@openrewrite/rewrite` in imports by @greg-at-moderne in [#6400](https://github.com/openrewrite/rewrite/pull/6400)
* JavaScript test framework fix for running recipes on all sources by @greg-at-moderne in [#6392](https://github.com/openrewrite/rewrite/pull/6392)
* Add annotation matcher support for Kotlin's class reference by @Laurens-W in [#6399](https://github.com/openrewrite/rewrite/pull/6399)
* Add count column to `DependencyInsight` rather than listing per row by @shanman190 in [#6405](https://github.com/openrewrite/rewrite/pull/6405)
* Kotlin false negative `FindMissingTypes` by @Laurens-W in [#6402](https://github.com/openrewrite/rewrite/pull/6402)
* Fixed `ChangeParentPom` pulling properties defined externally to the POMs themselves into the final POM. by @steve-aom-elliott in [#6407](https://github.com/openrewrite/rewrite/pull/6407)
* Added SearchResults as a global datatable by @Jenson3210 in [#6368](https://github.com/openrewrite/rewrite/pull/6368)
* JavaScript: Add Node.js dependency insights recipe by @knutwannheden in [#6404](https://github.com/openrewrite/rewrite/pull/6404)
* Avoid duplicate dependencies following one or more `ChangeDependency` recipes by @BoykoAlex in [#6406](https://github.com/openrewrite/rewrite/pull/6406)
* Allow `SimplifyMethodChain` to operate on Groovy and Kotlin by @timtebeek in [#6413](https://github.com/openrewrite/rewrite/pull/6413)
* JavaScript: New `UpgradeTransitiveDependencyVersion` recipe by @knutwannheden in [#6416](https://github.com/openrewrite/rewrite/pull/6416)
* `ChangeType` should also update type information on nested types by @timtebeek in [#6412](https://github.com/openrewrite/rewrite/pull/6412)
* Allow multiple instances of ChangeValue to make changes by @timtebeek in [#6419](https://github.com/openrewrite/rewrite/pull/6419)
* JavaScript: New `AddDependency` recipe by @greg-at-moderne in [#6384](https://github.com/openrewrite/rewrite/pull/6384)
* Fixed groovy parser issue to handle slashy string delimters as escape characters. by @sudouser777 in [#6422](https://github.com/openrewrite/rewrite/pull/6422)
* JavaScript: JSONC parser for Bun support by @knutwannheden in [#6424](https://github.com/openrewrite/rewrite/pull/6424)
* Fix error when parsing xml-s (and plain texts) encoded with UTF-8 BOM by @akiraly in [#6420](https://github.com/openrewrite/rewrite/pull/6420)
* Add ExplicitDependencyVersion for Maven by @timtebeek in [#6430](https://github.com/openrewrite/rewrite/pull/6430)
* JavaScript: Add YAML support by @knutwannheden in [#6425](https://github.com/openrewrite/rewrite/pull/6425)
* Prevent unexpected but not technically invalid paths in tests by @timtebeek in [#6432](https://github.com/openrewrite/rewrite/pull/6432)
* Add imports for static methods from the same package by @timtebeek in [#6433](https://github.com/openrewrite/rewrite/pull/6433)
* Add description column to global SearchResults Datatable by @Jenson3210 in [#6421](https://github.com/openrewrite/rewrite/pull/6421)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#6439](https://github.com/openrewrite/rewrite/pull/6439)
* JavaScript tests - reverting import replacement with ../src by @greg-at-moderne in [#6403](https://github.com/openrewrite/rewrite/pull/6403)
* Resolve existing maven properties with a null value to an empty string by @elmuerte in [#6431](https://github.com/openrewrite/rewrite/pull/6431)
* Followup to BOM handling changes in #6420: `isCharsetBomMarked()` call should be inside the try block as that is the only method that can throw `UnsupportedOperationException` by @akiraly in [#6440](https://github.com/openrewrite/rewrite/pull/6440)
* Fix Java parser for record component annotations by @sudouser777 in [#6444](https://github.com/openrewrite/rewrite/pull/6444)
* JavaScript: Formatter supports simple blocks/methods in one line by @knutwannheden in [#6445](https://github.com/openrewrite/rewrite/pull/6445)
* Java11Parser: Support `var` as variable name in lambda parameters by @akiraly in [#6443](https://github.com/openrewrite/rewrite/pull/6443)
* Fix UpgradeDependencyVersion stabilization with multiple managed dependencies by @timtebeek in [#6355](https://github.com/openrewrite/rewrite/pull/6355)
* Drop five year old Grafana and Prometheus scripts by @timtebeek in [#6378](https://github.com/openrewrite/rewrite/pull/6378)
* Remove fully qualified JavaDoc references from `TypesInUse` for `RemoveUnusedImports` by @Pankraz76 in [#5738](https://github.com/openrewrite/rewrite/pull/5738)
* Allow specifying environment variables to `JavaScriptRewriteRpc.Builder` by @pdelagrave in [#6441](https://github.com/openrewrite/rewrite/pull/6441)

#### [rewrite-all 1.23.3](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.20.3](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.20.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.23.1](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.23.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-cucumber-jvm 2.11.3](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-docker 2.14.3](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.8.3](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.17.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.17.0)

* Fix test failing due to incorrect method pattern by @timtebeek in [#57](https://github.com/openrewrite/rewrite-feature-flags/pull/57)

#### [rewrite-github-actions 3.16.1](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.16.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-gitlab 0.17.3](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.23.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.23.0)

* Improve error logging for recipe validation failures by including recipe name by @RaoPrashanth in [#423](https://github.com/openrewrite/rewrite-gradle-plugin/pull/423)

#### [rewrite-hibernate 2.16.2](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.16.2)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-hibernate 2.16.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.16.1)

* Avoid confusion between Hypersistence recipe names and package by @timtebeek in [#69](https://github.com/openrewrite/rewrite-hibernate/pull/69)

#### [rewrite-jackson 1.13.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.13.0)

* feat: support removing built-in modules on MapperBuilder by @murdos in [#56](https://github.com/openrewrite/rewrite-jackson/pull/56)
* Also remove redundant feature flag imports by @timtebeek in [#58](https://github.com/openrewrite/rewrite-jackson/pull/58)
* Remove method calls on removed modules by @timtebeek in [#59](https://github.com/openrewrite/rewrite-jackson/pull/59)
* Add SimplifyJacksonExceptionCatch recipe by @timtebeek in [#63](https://github.com/openrewrite/rewrite-jackson/pull/63)
* Migrate `JSONNode` field iterator for Jackson 3 by @MBoegers in [#64](https://github.com/openrewrite/rewrite-jackson/pull/64)
* jackson3: recipe for updating serialization inclusion configuration by @murdos in [#61](https://github.com/openrewrite/rewrite-jackson/pull/61)
* Format aligned Mappers by @MBoegers in [#65](https://github.com/openrewrite/rewrite-jackson/pull/65)

#### [rewrite-java-dependencies 1.48.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.48.0)

* Adjust to new data table columns by @shanman190 in [#164](https://github.com/openrewrite/rewrite-java-dependencies/pull/164)
* Tests for duplicate dependencies by @BoykoAlex in [#165](https://github.com/openrewrite/rewrite-java-dependencies/pull/165)

#### [rewrite-jenkins 0.33.2](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.33.2)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.5.1](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.5.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-liberty 1.23.3](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.20.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.20.0)

* Do not wrap record component accessor methods by @timtebeek in [#267](https://github.com/openrewrite/rewrite-logging-frameworks/pull/267)
* Verify `CommonsLoggingToLog4j` for Groovy sources by @cliviu in [#269](https://github.com/openrewrite/rewrite-logging-frameworks/pull/269)

#### [rewrite-maven-plugin 6.26.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.26.0)

* Log the recipe name involved in validation error by @timtebeek in [#1089](https://github.com/openrewrite/rewrite-maven-plugin/pull/1089)

#### [rewrite-micrometer 0.28.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.28.0)

* Update method patterns now that nested types are updated by @timtebeek in [#32](https://github.com/openrewrite/rewrite-micrometer/pull/32)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#33](https://github.com/openrewrite/rewrite-micrometer/pull/33)

#### [rewrite-micronaut 2.30.3](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.30.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.24.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.24.0)

* Migrate to `jakarta.mail-api:2.1.x` as part of Jakarta EE 10 upgrade by @ChenyuWang98 in [#954](https://github.com/openrewrite/rewrite-migrate-java/pull/954)
* Lombok: add `onMethod_` argument If getter/setter method is annotated by @zakaria-shahen in [#955](https://github.com/openrewrite/rewrite-migrate-java/pull/955)
* UseLombokGetter recipe: fix `IndexOutOfBoundsException` that occurs when visiting `record` compact constructor method by @zakaria-shahen in [#956](https://github.com/openrewrite/rewrite-migrate-java/pull/956)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#957](https://github.com/openrewrite/rewrite-migrate-java/pull/957)
* Avoid opinionated empty EnumSet where included with Java 6+ upgrades by @timtebeek in [#959](https://github.com/openrewrite/rewrite-migrate-java/pull/959)

#### [rewrite-netty 0.6.3](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.21.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.21.0)

* Add migration support for MockWebServer3 and update related tests by @RaoPrashanth in [#27](https://github.com/openrewrite/rewrite-okhttp/pull/27)

#### [rewrite-openapi 0.27.3](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.27.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.9.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-quarkus 2.28.3](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.17.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.17.0)

* Remove imports before adding imports by @timtebeek in [#46](https://github.com/openrewrite/rewrite-rewrite/pull/46)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#47](https://github.com/openrewrite/rewrite-rewrite/pull/47)

#### [rewrite-spring 6.21.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.21.0)

* feat(spring-boot-40): update property value for hibernate implicit-strategy by @murdos in [#863](https://github.com/openrewrite/rewrite-spring/pull/863)
* Do not add `@Valid` to static fields by @timtebeek in [#865](https://github.com/openrewrite/rewrite-spring/pull/865)
* Also detect JAX-RS endpoints by @timtebeek in [#866](https://github.com/openrewrite/rewrite-spring/pull/866)
* Fix old Spring Cloud Gateway starter names by @DidierLoiseau in [#867](https://github.com/openrewrite/rewrite-spring/pull/867)
* Migrate JobStep to use JobOperator instead of JobLauncher by @ielatif in [#858](https://github.com/openrewrite/rewrite-spring/pull/858)
* Replace empty string with "project" in mavenProject() test calls by @Copilot in [#869](https://github.com/openrewrite/rewrite-spring/pull/869)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#870](https://github.com/openrewrite/rewrite-spring/pull/870)
* spring-boot-40: handle rename of AOP Starter by @murdos in [#873](https://github.com/openrewrite/rewrite-spring/pull/873)
* feat: Adopt an initial few modular Spring Boot 4.0 starters by @murdos in [#860](https://github.com/openrewrite/rewrite-spring/pull/860)

#### [rewrite-spring-to-quarkus 0.4.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.4.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-static-analysis 2.24.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.24.0)

* Remove dead stores by @timtebeek in [#797](https://github.com/openrewrite/rewrite-static-analysis/pull/797)

#### [rewrite-templating 1.38.3](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.38.3)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.24.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.24.0)

* Recipe to check that Kotlin test methods return Unit by @greg-dennis in [#871](https://github.com/openrewrite/rewrite-testing-frameworks/pull/871)
* Reorder `maybeRemoveImport` before `maybeAddImport` by @timtebeek in [#873](https://github.com/openrewrite/rewrite-testing-frameworks/pull/873)
* Add test for Kotlin by @Laurens-W in [#876](https://github.com/openrewrite/rewrite-testing-frameworks/pull/876)

#### [rewrite-third-party 0.32.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.32.1)

* OpenRewrite v8.69.0: https://github.com/openrewrite/rewrite

## [rewrite-recipe-bom 3.20.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.20.0)

Released on December 5, 2025, with OpenRewrite 8.68.1.

#### [rewrite 8.68.1](https://github.com/openrewrite/rewrite/releases/tag/v8.68.1)

* Fix HttpSender.Response.getBody() InputStream performance and EOF handling by @pstreef in [#6381](https://github.com/openrewrite/rewrite/pull/6381)

#### [rewrite 8.68.0](https://github.com/openrewrite/rewrite/releases/tag/v8.68.0)

* ANTLR-based `XPathMatcher` implementation by @knutwannheden in [#6353](https://github.com/openrewrite/rewrite/pull/6353)
* Consolidate LLM guidance into CLAUDE.md by @timtebeek in [#6223](https://github.com/openrewrite/rewrite/pull/6223)
* Miscellaneous Windows bug fixes by @shanman190 in [#6362](https://github.com/openrewrite/rewrite/pull/6362)
* Fix Groovy/Gradle parsing for GString-s where the interpolation prefix `'$'` is preceded by an even number of backslashes by @akiraly in [#6348](https://github.com/openrewrite/rewrite/pull/6348)
* JavaScript: `PackageJsonParser` and `NodeResolutionResult` marker by @knutwannheden in [#6308](https://github.com/openrewrite/rewrite/pull/6308)
* `GradleDependency` only needs to look at first order dependencies by @shanman190 in [#6364](https://github.com/openrewrite/rewrite/pull/6364)
* Kotlin: Fix type attribution for companion objects by @knutwannheden in [#6365](https://github.com/openrewrite/rewrite/pull/6365)
* Changing `doAfterVisit(new ChangeTagValueVisitor<>(..)` in Maven `AddProperty` to be direct invocation instead to trigger model update by @steve-aom-elliott in [#6366](https://github.com/openrewrite/rewrite/pull/6366)
* JavaScript: Fix `AddImport` bug by @knutwannheden in [#6367](https://github.com/openrewrite/rewrite/pull/6367)
* Fix Java 25 javadoc parsing issue by @Laurens-W in [#6370](https://github.com/openrewrite/rewrite/pull/6370)
* Rework dependency graph to be more efficient by @shanman190 in [#6360](https://github.com/openrewrite/rewrite/pull/6360)
* Fix `NoSuchMethodError` during Java 11 parsing when the LST generation is running on an older Java 11 version which doesn't have `JCTree.JCVariableDecl.declaredUsingVar()` by @akiraly in [#6372](https://github.com/openrewrite/rewrite/pull/6372)
* JavaScript: New `UpgradeDependencyVersion` recipe by @knutwannheden in [#6369](https://github.com/openrewrite/rewrite/pull/6369)
* feat(maven): `ChangeDependencyGroupIdAndArtifactId` should also update annotation processor paths by @murdos in [#6361](https://github.com/openrewrite/rewrite/pull/6361)
* Fix RemoteArchive performance by adding bulk read methods by @pstreef in [#6377](https://github.com/openrewrite/rewrite/pull/6377)
* Track additional Git object information by @shanman190 in [#6347](https://github.com/openrewrite/rewrite/pull/6347)
* Reduce Version allocations in dependency graph traversal by @pstreef in [#6354](https://github.com/openrewrite/rewrite/pull/6354)

#### [rewrite 8.67.1](https://github.com/openrewrite/rewrite/releases/tag/v8.67.1)

* More marketplace improvements by @jkschneider in [#6326](https://github.com/openrewrite/rewrite/pull/6326)
* Method Invocation Argument Wrapping and Autoformat Refactoring by @Jenson3210 in [#6283](https://github.com/openrewrite/rewrite/pull/6283)
* JavaScript - Remove debug console.log statements in `type-mapping.test.ts` by @greg-at-moderne in [#6328](https://github.com/openrewrite/rewrite/pull/6328)
* JavaScript - Adding `Expression.type` by @greg-at-moderne in [#6327](https://github.com/openrewrite/rewrite/pull/6327)
* Revert "Refactored autoFormat and added MethodInvocation argument wrapping"  by @Jenson3210 in [#6329](https://github.com/openrewrite/rewrite/pull/6329)
* JavaScript: Type-attribute imported objects by @knutwannheden in [#6320](https://github.com/openrewrite/rewrite/pull/6320)
* Fix `XPathMatcher` to support `text()` predicate in XPath expressions by @timtebeek in [#6315](https://github.com/openrewrite/rewrite/pull/6315)
* Drop `com.sun.tools.javac.code.@Nullable` by @timtebeek in [#6336](https://github.com/openrewrite/rewrite/pull/6336)
* Add version support for DoesNotIncludeDependency (Gradle and Maven) by @DidierLoiseau in [#6335](https://github.com/openrewrite/rewrite/pull/6335)
* Reduce GC pressure in dependency graph traversal by @pstreef in [#6333](https://github.com/openrewrite/rewrite/pull/6333)
* fix(validation): use fully-qualified recipe name in validation errors by @Vishalup29 in [#6340](https://github.com/openrewrite/rewrite/pull/6340)
* Gradle wrapper 9.2.1 by @timtebeek in [#6341](https://github.com/openrewrite/rewrite/pull/6341)
* Fixing parsing of YAML tags in sequences by @Vishalup29 in [#6334](https://github.com/openrewrite/rewrite/pull/6334)
* Reapply "Refactored autoFormat and added MethodInvocation argument wrapping" by @Jenson3210 in [#6337](https://github.com/openrewrite/rewrite/pull/6337)
* JavaScript - add explicit error when cursor.parentTree is not a function by @greg-at-moderne in [#6343](https://github.com/openrewrite/rewrite/pull/6343)
* Drop outdated gradlew files following new packaged & templated resources by @timtebeek in [#6342](https://github.com/openrewrite/rewrite/pull/6342)
* Revert "JavaScript - add explicit error when cursor.parentTree is not a function" by @greg-at-moderne in [#6344](https://github.com/openrewrite/rewrite/pull/6344)
* JavaScript - adding the Shebang statement by @greg-at-moderne in [#6349](https://github.com/openrewrite/rewrite/pull/6349)
* Fixed autoformatting of groovy / js / kotlin files by @Jenson3210 in [#6350](https://github.com/openrewrite/rewrite/pull/6350)
* Add recipe RemoveMethodThrows by @ghusta in [#6332](https://github.com/openrewrite/rewrite/pull/6332)
* Avoid `String` allocations in `Version` by @knutwannheden in [#6317](https://github.com/openrewrite/rewrite/pull/6317)
* Ensure proper "because" ordering for multiple Maven dependencies by @bmuschko in [#6352](https://github.com/openrewrite/rewrite/pull/6352)

#### [rewrite-all 1.23.2](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-apache 2.20.2](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.20.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-codemods 0.23.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.23.0)

* chore: update @ui5/linter from 1.19.0 to 1.20.2 by @flovogt in [#53](https://github.com/moderneinc/rewrite-codemods/pull/53)

#### [rewrite-cucumber-jvm 2.11.2](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-docker 2.14.2](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-dropwizard 0.8.2](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-feature-flags 1.16.2](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.16.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-github-actions 3.16.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.16.0)

* Add recipe to configure Dependabot cooldown periods by @sjungling in [#162](https://github.com/openrewrite/rewrite-github-actions/pull/162)

#### [rewrite-gitlab 0.17.2](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-gradle-plugin 7.22.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.22.0)

* Make sure that user projects can resolve dependency variants correctly by @wjglerum in [#420](https://github.com/openrewrite/rewrite-gradle-plugin/pull/420)
* Add Git object information marker to all source files by @shanman190 in [#422](https://github.com/openrewrite/rewrite-gradle-plugin/pull/422)

#### [rewrite-hibernate 2.16.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.16.0)

* feat: initialize migration recipes for Hibernate 6.6, 7.0 and 7.1 by @murdos in [#68](https://github.com/openrewrite/rewrite-hibernate/pull/68)

#### [rewrite-jackson 1.12.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.12.0)

* fix: Do not migrate Jackson dependencies not available in v3 by @ThomasVitale in [#50](https://github.com/openrewrite/rewrite-jackson/pull/50)
* Also remove variable declarations of matching types by @timtebeek in [#53](https://github.com/openrewrite/rewrite-jackson/pull/53)
* feat: support removing redundant feature flags on MapperBuilder by @murdos in [#54](https://github.com/openrewrite/rewrite-jackson/pull/54)
* Fix NPE when type is null in RemoveBuiltInModuleRegistrations by @pstreef in [#55](https://github.com/openrewrite/rewrite-jackson/pull/55)

#### [rewrite-java-dependencies 1.47.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.47.0)

* Fix a possible NPE by @Jenson3210 in [#163](https://github.com/openrewrite/rewrite-java-dependencies/pull/163)

#### [rewrite-jenkins 0.33.1](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.33.1)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-joda 0.5.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.5.0)

* AssertJ best practices by @timtebeek in [#7](https://github.com/openrewrite/rewrite-joda/pull/7)

#### [rewrite-liberty 1.23.2](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-logging-frameworks 3.19.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.19.1)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-maven-plugin 6.25.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.25.0)

* Duplicate resources by @MBoegers in [#1079](https://github.com/openrewrite/rewrite-maven-plugin/pull/1079)
* Add Git object information marker to all source files by @shanman190 in [#1081](https://github.com/openrewrite/rewrite-maven-plugin/pull/1081)

#### [rewrite-micrometer 0.27.2](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.27.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-micronaut 2.30.2](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.30.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-migrate-java 3.23.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.23.0)

* Migrate Micronaut Nullability annotations to JSpecify nullability annotations by @lissam1 in [#950](https://github.com/openrewrite/rewrite-migrate-java/pull/950)
* Prepare formatting refactor by @Jenson3210 in [#951](https://github.com/openrewrite/rewrite-migrate-java/pull/951)

#### [rewrite-netty 0.6.2](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-okhttp 0.20.2](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.20.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-openapi 0.27.2](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.27.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-polyglot 2.9.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.9.0)

* AssertJ best practices by @timtebeek in [#48](https://github.com/openrewrite/rewrite-polyglot/pull/48)

#### [rewrite-quarkus 2.28.2](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-rewrite 0.16.1](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.16.1)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-spring 6.20.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.20.0)

* Spring batch 6.0 - handle core listener package change by @ielatif in [#839](https://github.com/openrewrite/rewrite-spring/pull/839)
* Spring batch 6.0 - handle core job package change by @ielatif in [#841](https://github.com/openrewrite/rewrite-spring/pull/841)
* Prepare formatting refactor by addressing a test expectation difference by @Jenson3210 in [#844](https://github.com/openrewrite/rewrite-spring/pull/844)
* Spring batch 6.0 - handle core step package change by @ielatif in [#842](https://github.com/openrewrite/rewrite-spring/pull/842)
* Spring batch 6.0 - handle job parameters package change by @ielatif in [#843](https://github.com/openrewrite/rewrite-spring/pull/843)
* simpleclient_pushgateway to prometheus-metrics-exporter-pushgateway by @sruffatti in [#796](https://github.com/openrewrite/rewrite-spring/pull/796)
* Fix java.lang.ClassCastException in  by @Jenson3210 in [#846](https://github.com/openrewrite/rewrite-spring/pull/846)
* Spring batch 6.0 - Rename ChunkHandler to ChunkRequestHandler by @ielatif in [#847](https://github.com/openrewrite/rewrite-spring/pull/847)
* Spring batch 6.0 - rename JobRepositoryFactoryBean to JdbcJobRepositoryFactoryBean by @ielatif in [#848](https://github.com/openrewrite/rewrite-spring/pull/848)
* Spring batch 6.0 - Rename JobExplorerFactoryBean to JdbcJobExplorerFactoryBean by @ielatif in [#849](https://github.com/openrewrite/rewrite-spring/pull/849)
* Remove throws exception in SecurityConfigurer methods by @ghusta in [#851](https://github.com/openrewrite/rewrite-spring/pull/851)
* Add upgrade rules for Spring Boot 4.0 dependencies by @wac84s in [#855](https://github.com/openrewrite/rewrite-spring/pull/855)
* feat: add `MigrateToHibernate71` recipe to `UpgradeSpringBoot_4_0` by @murdos in [#861](https://github.com/openrewrite/rewrite-spring/pull/861)
* Replace deprecated starters with their new names by @wac84s in [#856](https://github.com/openrewrite/rewrite-spring/pull/856)
* Add `SwaggerToOpenAPI` to SpringDoc 2 upgrade so that not only the dependencies are changed, but also the associated Swagger classes. by @steve-aom-elliott in [#859](https://github.com/openrewrite/rewrite-spring/pull/859)
* Extends ChangeSpringPropertyKey to handle properties in @SpringBootTest annotations by @murdos in [#862](https://github.com/openrewrite/rewrite-spring/pull/862)

#### [rewrite-spring-to-quarkus 0.4.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.4.0)

* Add Quarkus Maven plugin extensions and executions by @timtebeek in [#61](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/61)

#### [rewrite-static-analysis 2.23.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.23.0)

* Prepare formatting refactor by @Jenson3210 in [#790](https://github.com/openrewrite/rewrite-static-analysis/pull/790)
* Fix `AnnotateRequiredParameters` to handle `Objects.requireNonNull` in assignments by @timtebeek in [#793](https://github.com/openrewrite/rewrite-static-analysis/pull/793)
* `AnnotateRequiredParameters` should not remove nested if blocks by @timtebeek in [#794](https://github.com/openrewrite/rewrite-static-analysis/pull/794)
* Fix RemoveUnusedLocalVariables to delete unused local variables inside method invocation argument blocks by @Jenson3210 in [#795](https://github.com/openrewrite/rewrite-static-analysis/pull/795)

#### [rewrite-templating 1.38.2](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.38.2)

* OpenRewrite v8.68.1: https://github.com/openrewrite/rewrite

#### [rewrite-testing-frameworks 3.23.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.23.0)

* Add `@ExtendWith(MockitoExtension.class)` Test using Mockito Annotations by @MBoegers in [#848](https://github.com/openrewrite/rewrite-testing-frameworks/pull/848)
* Add troubleshooting context info when ParseError encountered in `GradleUseJunitJupiter` by @greg-at-moderne in [#852](https://github.com/openrewrite/rewrite-testing-frameworks/pull/852)
* Fix/850 testcontainers2 migration only springboot4 by @Thomas-Iapichino in [#854](https://github.com/openrewrite/rewrite-testing-frameworks/pull/854)
* Fixed the expectation to be correctly spaced + formatted args by @Jenson3210 in [#855](https://github.com/openrewrite/rewrite-testing-frameworks/pull/855)
* Simplify redundant AssertJ chains of `hasSize` and `containsExactly` by @timtebeek in [#857](https://github.com/openrewrite/rewrite-testing-frameworks/pull/857)
* Simplify AssertJ `stream().map(Function)` to `extracting(Function)` by @timtebeek in [#856](https://github.com/openrewrite/rewrite-testing-frameworks/pull/856)
* `AssertThrowsOnLastStatement`: Support calls with lambda parameters by @knutwannheden in [#859](https://github.com/openrewrite/rewrite-testing-frameworks/pull/859)
* Fix bugs in `HamcrestMatcherToAssertJ` and `HamcrestIsMatcherToAssertJ` by @knutwannheden in [#863](https://github.com/openrewrite/rewrite-testing-frameworks/pull/863)
* `HamcrestMatcherToAssertJ`: `isNull()` and `isNotNull()` take no args by @knutwannheden in [#864](https://github.com/openrewrite/rewrite-testing-frameworks/pull/864)
* Fix variable name conflict in JMockit to Mockito migration by @knutwannheden in [#865](https://github.com/openrewrite/rewrite-testing-frameworks/pull/865)

#### [rewrite-third-party 0.32.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.32.0)

* Update suppressions by @Laurens-W in [#53](https://github.com/openrewrite/rewrite-third-party/pull/53)

## [rewrite-recipe-bom 3.19.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.19.0)

Released on November 20, 2025, with OpenRewrite 8.67.0.

#### [rewrite 8.67.0](https://github.com/openrewrite/rewrite/releases/tag/v8.67.0)

* JavaScript: Align `Pattern#match()` and `Template#apply()` APIs by @knutwannheden in [#6311](https://github.com/openrewrite/rewrite/pull/6311)
* Rename `target` param of `maybeAddImport()` and `maybeRemoveImport()` by @knutwannheden in [#6309](https://github.com/openrewrite/rewrite/pull/6309)
* Add `@CheckReturnValue` annotations to tree packages by @timtebeek in [#6289](https://github.com/openrewrite/rewrite/pull/6289)

#### [rewrite 8.66.4](https://github.com/openrewrite/rewrite/releases/tag/v8.66.4)

* Add Version and VersionPattern support for gradle FindDependency by @DovOps in [#6299](https://github.com/openrewrite/rewrite/pull/6299)
* Add find managed dependency version where specified via property by @kbrockhoff in [#6297](https://github.com/openrewrite/rewrite/pull/6297)
* null-safety for `before` in JRightPadded.withElements() by @greg-at-moderne in [#6301](https://github.com/openrewrite/rewrite/pull/6301)
* Making the retrieved BAT wrapper for Gradle use Windows line endings for existing comparisons. by @steve-aom-elliott in [#6304](https://github.com/openrewrite/rewrite/pull/6304)
* Return modified TryResource from JavaVisitor by @Jenson3210 in [#6303](https://github.com/openrewrite/rewrite/pull/6303)
* JavaScript: More type attribution by @knutwannheden in [#6298](https://github.com/openrewrite/rewrite/pull/6298)
* Javascript - autoformatting to fix indents of JSX tags by @greg-at-moderne in [#6307](https://github.com/openrewrite/rewrite/pull/6307)
* Reduce allocations of `Version` to reduce GC impact by @shanman190 in [#6296](https://github.com/openrewrite/rewrite/pull/6296)

#### [rewrite 8.66.3](https://github.com/openrewrite/rewrite/releases/tag/v8.66.3)

* Cache the resolved dependencies result rather than recomputing it every time by @shanman190 in [#6295](https://github.com/openrewrite/rewrite/pull/6295)

#### [rewrite 8.66.2](https://github.com/openrewrite/rewrite/releases/tag/v8.66.2)

* JavaScript - fix handling autoformatting of method declarations in isolation by @greg-at-moderne in [#6256](https://github.com/openrewrite/rewrite/pull/6256)
* Fix merging styles for non-mentioned properties by @Jenson3210 in [#6257](https://github.com/openrewrite/rewrite/pull/6257)
* Instantiate using reflection to overcome classloading issue by @Jenson3210 in [#6258](https://github.com/openrewrite/rewrite/pull/6258)
* JavaScript - Refactoring, avoiding putting logic in visit() override by @greg-at-moderne in [#6260](https://github.com/openrewrite/rewrite/pull/6260)
* Added MethodDeclaration wrapping options by @Jenson3210 in [#6208](https://github.com/openrewrite/rewrite/pull/6208)
* JavaScript: Fix `TabsAndIndentsVisitor` when formatting subtree by @knutwannheden in [#6264](https://github.com/openrewrite/rewrite/pull/6264)
* JavaScript - removing trailing whitespace when breaking the line by @greg-at-moderne in [#6261](https://github.com/openrewrite/rewrite/pull/6261)
* JavaScript: Enable formatter in templating by @knutwannheden in [#6265](https://github.com/openrewrite/rewrite/pull/6265)
* JavaScript - Honoring new line or lack thereof before function expressions by @greg-at-moderne in [#6270](https://github.com/openrewrite/rewrite/pull/6270)
* Restore UTF-8 BOM during printing by @pstreef in [#6266](https://github.com/openrewrite/rewrite/pull/6266)
* JavaScript - don't add a new line in empty braces by @greg-at-moderne in [#6271](https://github.com/openrewrite/rewrite/pull/6271)
* Introduce merge strategy to AppendToTextFile recipe by @bmuschko in [#6262](https://github.com/openrewrite/rewrite/pull/6262)
* JavaScript - not attempting to add new lines in object literals by @greg-at-moderne in [#6272](https://github.com/openrewrite/rewrite/pull/6272)
* Add ability to get effective project and plugin repsoitories for Gradle by @shanman190 in [#6267](https://github.com/openrewrite/rewrite/pull/6267)
* Only remove imports when method select changes by @timtebeek in [#6277](https://github.com/openrewrite/rewrite/pull/6277)
* Extending trailing comma support in GroovyParser by @akiraly in [#6279](https://github.com/openrewrite/rewrite/pull/6279)
* Use the Java25Parser for Java 23 and above by @timtebeek in [#6280](https://github.com/openrewrite/rewrite/pull/6280)
* JavaScript - adapt to new way of parsing  expressions in autoformatting by @greg-at-moderne in [#6285](https://github.com/openrewrite/rewrite/pull/6285)
* JacocoReportDeprecations should replace deprecated methods with assignments to make it work with Gradle 8 by @akiraly in [#6282](https://github.com/openrewrite/rewrite/pull/6282)
* fix for incorrect parsing of tags as first line of mapping sequence by @dsgrieve in [#6281](https://github.com/openrewrite/rewrite/pull/6281)
* JavaScript: Provide debugging for `pattern` matching by @knutwannheden in [#6284](https://github.com/openrewrite/rewrite/pull/6284)
* Issue #5592: resolved ChangeMethodAccessLevelVisitor bug by @Anmol202005 in [#6286](https://github.com/openrewrite/rewrite/pull/6286)
* JavaScript: Support `undefined` in `visitRightPadded()` by @knutwannheden in [#6288](https://github.com/openrewrite/rewrite/pull/6288)
* Fix unused return types, ahead of #6289 by @timtebeek in [#6290](https://github.com/openrewrite/rewrite/pull/6290)
* Reorganize RecipeMarketplace to better support reading CSVs without l… by @jkschneider in [#6278](https://github.com/openrewrite/rewrite/pull/6278)

#### [rewrite-all 1.23.1](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-apache 2.20.1](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.20.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-codemods 0.22.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.22.0)

* Use `PrintOutputCapture.MarkerPrinter.SANITIZED` by @knutwannheden in [#54](https://github.com/moderneinc/rewrite-codemods/pull/54)
* Link to ESLint docs by @timtebeek in [#56](https://github.com/moderneinc/rewrite-codemods/pull/56)

#### [rewrite-cucumber-jvm 2.11.1](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-docker 2.14.1](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-dropwizard 0.8.1](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-feature-flags 1.16.1](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.16.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-github-actions 3.15.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.15.0)

* Allow to rewrite both `.yml` and `.yaml` GitHub workflow files by @wjglerum in [#159](https://github.com/openrewrite/rewrite-github-actions/pull/159)

#### [rewrite-gitlab 0.17.1](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-gradle-plugin 7.21.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.21.0)

* Consistently use JSpecify Nullable annotation by @timtebeek in [#419](https://github.com/openrewrite/rewrite-gradle-plugin/pull/419)

#### [rewrite-hibernate 2.15.1](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.15.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-jackson 1.11.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.11.0)

* support jackson-module-kotlin by @sullis in [#44](https://github.com/openrewrite/rewrite-jackson/pull/44)
* feat: When Jackson 2->3, remove duplicates in Gradle by @ThomasVitale in [#46](https://github.com/openrewrite/rewrite-jackson/pull/46)
* Use wildcards to convert all artifacts under dataformat and module by @sullis in [#47](https://github.com/openrewrite/rewrite-jackson/pull/47)
* cleanup UpgradeJackson_2_3Test by @sullis in [#48](https://github.com/openrewrite/rewrite-jackson/pull/48)

#### [rewrite-jackson 1.10.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.10.0)

* Also retain constructors in chained assignments by @timtebeek in 29d936808e6759838a5b88136930cb8dd6bd4129
* Remove modules folded into jackson-databind by @timtebeek in [#39](https://github.com/openrewrite/rewrite-jackson/pull/39)
* feat: Extend Jackson 2->3 recipe with more method renames by @ThomasVitale in [#41](https://github.com/openrewrite/rewrite-jackson/pull/41)
* feat: Extend Jackson 2->3 recipe with more JsonNode method renames by @ThomasVitale in [#43](https://github.com/openrewrite/rewrite-jackson/pull/43)

#### [rewrite-java-dependencies 1.46.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.46.0)

* Updated to support gradle version support in FindDependencies by @DovOps in [#161](https://github.com/openrewrite/rewrite-java-dependencies/pull/161)

#### [rewrite-jenkins 0.33.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.33.0)

* Jenkinsfile for Java 25 by @jonesbusy in [#102](https://github.com/openrewrite/rewrite-jenkins/pull/102)

#### [rewrite-joda 0.4.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.4.0)

* Migrate `DateMidnight` creation by @MBoegers in [#5](https://github.com/openrewrite/rewrite-joda/pull/5)

#### [rewrite-liberty 1.23.1](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-logging-frameworks 3.19.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.19.0)

* Apply do no harm to `ParameterizedLogging` by not changing statements with exceptions by @Laurens-W in [#264](https://github.com/openrewrite/rewrite-logging-frameworks/pull/264)

#### [rewrite-logging-frameworks 3.18.1](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.18.1)

* Fix method pattern in ArgumentArrayToVarargs by @timtebeek in [#263](https://github.com/openrewrite/rewrite-logging-frameworks/pull/263)
* Directly include the generated recipes here, as rewrite-third-party requires Java 17  by @timtebeek in c7b5bd28bb714792781d4b62ede1cf864fdf810e)

#### [rewrite-micrometer 0.27.1](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.27.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-micronaut 2.30.1](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.30.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-migrate-java 3.22.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.22.0)

* Handle `JaxbAnnotationIntrospector` and `JacksonJsonProvider` in migration by @CalvinZengyi in [#936](https://github.com/openrewrite/rewrite-migrate-java/pull/936)
* Also change Gradle classifier for Apache Shiro by @timtebeek in [#939](https://github.com/openrewrite/rewrite-migrate-java/pull/939)
* Remove dependency version upgrade for commons-fileupload by @hendrikebbers in [#943](https://github.com/openrewrite/rewrite-migrate-java/pull/943)
* Convert `Iterables.all(Collection, Predictate)` into `.stream().allMatch(Predicate)` by @timtebeek in [#945](https://github.com/openrewrite/rewrite-migrate-java/pull/945)
* Wrapping the adding of the dependency for `org.projectlombok:lombok-mapstruct-binding` in a check to make sure you do not already have said dependency (potentially in another scope) by @steve-aom-elliott in [#944](https://github.com/openrewrite/rewrite-migrate-java/pull/944)
* Update jakarta-ee-10.yml by @ChenyuWang98 in [#946](https://github.com/openrewrite/rewrite-migrate-java/pull/946)
* Use ChangeType for classes renamed in fastjson2 by @timtebeek in [#948](https://github.com/openrewrite/rewrite-migrate-java/pull/948)

#### [rewrite-migrate-java 3.21.2](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.21.2)

* JaxB plugin migrations from 2.X to 4.0 by @MBoegers in [#932](https://github.com/openrewrite/rewrite-migrate-java/pull/932)
* `jaxws-maven-plugin` to 2.3.X by @MBoegers in [#929](https://github.com/openrewrite/rewrite-migrate-java/pull/929)
* Update jakarta-ee-10.yml add tyrus to ee10 by @ChenyuWang98 in [#935](https://github.com/openrewrite/rewrite-migrate-java/pull/935)
* Always add explicit type to the `Predicate.isEqual` method by @lredor in [#927](https://github.com/openrewrite/rewrite-migrate-java/pull/927)
* Convert Guava `Predicates.instanceOf` by @lredor in [#919](https://github.com/openrewrite/rewrite-migrate-java/pull/919)
* Add the generated Guava recipes, as third-party requires Java 17 by @timtebeek in f02a15f59c08ab15bbde59ef413a16f4ec0653e8

#### [rewrite-netty 0.6.1](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-okhttp 0.20.1](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.20.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-openapi 0.27.1](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.27.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-polyglot 2.8.1](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.8.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-quarkus 2.28.1](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-rewrite 0.16.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.16.0)

* Add recipe to ensure Recipe classes are public by @timtebeek in [#44](https://github.com/openrewrite/rewrite-rewrite/pull/44)

#### [rewrite-spring 6.19.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.19.0)

* Add Testcontainers2Migration to Spring Boot 4 recipe list by @wyfrel in [#823](https://github.com/openrewrite/rewrite-spring/pull/823)
* Migrate Spring Framework null annotations to JSpecify by @wyfrel in [#822](https://github.com/openrewrite/rewrite-spring/pull/822)
* Do not add valid to local variables by @timtebeek in [#826](https://github.com/openrewrite/rewrite-spring/pull/826)
* Add ReplaceMockBeanAndSpyBean to UpgradeSpringBoot_3_4 recipe by @mcebanupgrade in [#813](https://github.com/openrewrite/rewrite-spring/pull/813)
* Add missing references to existing recipes by @timtebeek in [#827](https://github.com/openrewrite/rewrite-spring/pull/827)
* Move SpringFox recipes out of SpringDoc package by @timtebeek in [#828](https://github.com/openrewrite/rewrite-spring/pull/828)
* Migration Recipe for Spring Security 7.0 by @ghusta in [#830](https://github.com/openrewrite/rewrite-spring/pull/830)
* Spring Batch 6.0 Recipe by @ielatif in [#832](https://github.com/openrewrite/rewrite-spring/pull/832)
* Spring batch 6.0 - handle infrastructure package change by @ielatif in [#833](https://github.com/openrewrite/rewrite-spring/pull/833)
* Spring batch 6.0 - handle core explore package change by @ielatif in [#834](https://github.com/openrewrite/rewrite-spring/pull/834)
* Spring batch 6.0 - handle JDBC DAOs package change by @ielatif in [#835](https://github.com/openrewrite/rewrite-spring/pull/835)
* Spring batch 6.0 - handle Mongo DAOs package change by @ielatif in [#836](https://github.com/openrewrite/rewrite-spring/pull/836)
* Do not use nested recipes where visitors suffice by @timtebeek in [#837](https://github.com/openrewrite/rewrite-spring/pull/837)
* Spring batch 6.0 - handle partition package changes by @ielatif in [#838](https://github.com/openrewrite/rewrite-spring/pull/838)

#### [rewrite-spring-to-quarkus 0.3.1](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.3.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-static-analysis 2.22.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.22.0)

* Prevent `AnnotateNullableMethods` from failing on TypeScript sources by @greg-at-moderne in [#773](https://github.com/openrewrite/rewrite-static-analysis/pull/773)
* Fix CombineSemanticallyEqualCatchBlocks for inner exception types by @timtebeek in [#772](https://github.com/openrewrite/rewrite-static-analysis/pull/772)
* Handle single quotes in ReplaceStringBuilderWithString by @timtebeek in [#775](https://github.com/openrewrite/rewrite-static-analysis/pull/775)
* Prevent `ReplaceLambdaWithMethodReference` in nested generic/overloaded contexts by @timtebeek in [#776](https://github.com/openrewrite/rewrite-static-analysis/pull/776)
* Fix ReplaceLambdaWithMethodReference for local records and classes by @timtebeek in [#777](https://github.com/openrewrite/rewrite-static-analysis/pull/777)
* Move nullable annotations to array types by @timtebeek in [#778](https://github.com/openrewrite/rewrite-static-analysis/pull/778)
* Annotate nullable array type parameters by @timtebeek in [#779](https://github.com/openrewrite/rewrite-static-analysis/pull/779)
* Annotate required parameters with `@NonNull` and remove throws by @timtebeek in [#782](https://github.com/openrewrite/rewrite-static-analysis/pull/782)
* Skip UnnecessaryCatch after any missing types via a precondition by @timtebeek in [#784](https://github.com/openrewrite/rewrite-static-analysis/pull/784)
* Run `UnnecessaryCatch` after `UnnecessaryThrows` to remove unused catch clauses by @timtebeek in [#785](https://github.com/openrewrite/rewrite-static-analysis/pull/785)
* Add JavascriptFileChecker to selectively skip JavaScript files by @timtebeek in [#787](https://github.com/openrewrite/rewrite-static-analysis/pull/787)
* Fix `RemoveUnusedLocalVariables` to preserve assignments with side effects by @timtebeek in [#741](https://github.com/openrewrite/rewrite-static-analysis/pull/741)

#### [rewrite-templating 1.38.1](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.38.1)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-testing-frameworks 3.22.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.22.0)

* Upgrade mockwebserver to latest 5.x version by @busches in [#846](https://github.com/openrewrite/rewrite-testing-frameworks/pull/846)

#### [rewrite-testing-frameworks 3.21.3](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.21.3)

* fix: add Mockito.anyObject() alias to Mockito 1-to-3 migration by @rshvashisht in [#842](https://github.com/openrewrite/rewrite-testing-frameworks/pull/842)
* Add `guava-33` type table entry for `AssertJIterableRulesRecipes` from EPS by @timtebeek in [#843](https://github.com/openrewrite/rewrite-testing-frameworks/pull/843)
* Convert Testcontainers `@Rule`/`@ClassRule` to JUnit 5 `@Container` and add `@Testcontainers` by @jc65536 in [#838](https://github.com/openrewrite/rewrite-testing-frameworks/pull/838)

#### [rewrite-testing-frameworks 3.21.2](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.21.2)

* Depend on rewrite-third-party for the type table entries by @timtebeek in [#841](https://github.com/openrewrite/rewrite-testing-frameworks/pull/841)

#### [rewrite-testing-frameworks 3.21.1](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.21.1)

* Add JUnit 6 type table entries by @timtebeek in [#839](https://github.com/openrewrite/rewrite-testing-frameworks/pull/839)

#### [rewrite-third-party 0.31.2](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.31.2)

* OpenRewrite v8.67.0: https://github.com/openrewrite/rewrite/compare/v8.67.0...main

#### [rewrite-third-party 0.31.1](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.31.1)

* Update suppressions by @Laurens-W in [#51](https://github.com/openrewrite/rewrite-third-party/pull/51)
* Move the log4j recipes into rewrite-logging-frameworks by @timtebeek in 3a65c7fa97a66cc00c4ebc7ff641e3ef08b3cae4
* Move the Guava generated recipes to rewrite-migrate-java by @timtebeek in d52b3fbd81bb822f72442df2ee4eddfa63da6d43
* Exclude `refaster-support` from `error-prone-contrib::recipes` by @timtebeek in e5bd3c65c2b9629ed7520f9ceb6ebf4564f9c4b7

## [rewrite-recipe-bom 3.18.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.18.0)

Released on November 5, 2025, with OpenRewrite 8.66.1.

#### [rewrite 8.66.1](https://github.com/openrewrite/rewrite/releases/tag/v8.66.1)

* Only add a Maven Wrapper if it doesn't exist yet by @bmuschko in [#6247](https://github.com/openrewrite/rewrite/pull/6247)
* Expanding TypeMatcher to actually use the matcher for `JavaType.Primitive`s. `FindFieldsOfType` should properly match against primitives now. by @steve-aom-elliott in [#6246](https://github.com/openrewrite/rewrite/pull/6246)
* add tools.jackson to protected prefix list by @sullis in [#6249](https://github.com/openrewrite/rewrite/pull/6249)
* JavaScript - fixing several whitespace attachment problems in parsing by @greg-at-moderne in [#6251](https://github.com/openrewrite/rewrite/pull/6251)
* Prevent NPE when using Google Java format by @timtebeek in [#6254](https://github.com/openrewrite/rewrite/pull/6254)
* JavaScript - fixing autoformatting for function as the first element by @greg-at-moderne in [#6253](https://github.com/openrewrite/rewrite/pull/6253)
* JavaScript: Templating engine enhancements by @knutwannheden in [#6240](https://github.com/openrewrite/rewrite/pull/6240)

#### [rewrite 8.66.0](https://github.com/openrewrite/rewrite/releases/tag/v8.66.0)

* Run `licenseFormat` after `generateAntlrSources` by @timtebeek in [#6197](https://github.com/openrewrite/rewrite/pull/6197)
* Always wrap builder methods and support align when multiline by @Jenson3210 in [#6177](https://github.com/openrewrite/rewrite/pull/6177)
* JavaScript - Add a test for `cursor.parent` in visitor by @greg-at-moderne in [#6198](https://github.com/openrewrite/rewrite/pull/6198)
* JavaScript - Fix formatting of collapsed if with proper else block by @greg-at-moderne in [#6199](https://github.com/openrewrite/rewrite/pull/6199)
* JavaScript: New `AddImport` visitor by @knutwannheden in [#6201](https://github.com/openrewrite/rewrite/pull/6201)
* Fix Javadoc parser to preserve spacing in malformed qualified names by @timtebeek in [#6169](https://github.com/openrewrite/rewrite/pull/6169)
* Fix calculation non-aligned cases (first variable on new line) by @Jenson3210 in [#6200](https://github.com/openrewrite/rewrite/pull/6200)
* Style Google Whitespaces by @MBoegers in [#6202](https://github.com/openrewrite/rewrite/pull/6202)
* Target matching Java versions after seeing IDE failures by @timtebeek in [#6204](https://github.com/openrewrite/rewrite/pull/6204)
* JavaScript - BlankLinesVisitor not to attempt to preserve indent by @greg-at-moderne in [#6206](https://github.com/openrewrite/rewrite/pull/6206)
* JavaScript: Type mapping for function types by @knutwannheden in [#6209](https://github.com/openrewrite/rewrite/pull/6209)
* Drop tools/language-parser-builder by @timtebeek in [#6210](https://github.com/openrewrite/rewrite/pull/6210)
* JavaScript: Cache `node_modules` for `npm()` test utility by @knutwannheden in [#6211](https://github.com/openrewrite/rewrite/pull/6211)
* JavaScript - handling `function()` as expressions in autoformatting by @greg-at-moderne in [#6213](https://github.com/openrewrite/rewrite/pull/6213)
* Use Kotlin plugin version 2.1 but target 1.9 by @timtebeek in [#6212](https://github.com/openrewrite/rewrite/pull/6212)
* JavaScript - unify the indent on the top-level too by @greg-at-moderne in [#6214](https://github.com/openrewrite/rewrite/pull/6214)
* JavaScript - fixing parsing of whitespace before function expressions by @greg-at-moderne in [#6215](https://github.com/openrewrite/rewrite/pull/6215)
* JavaScript - Code clean-up in JavaScript autoformatter by @greg-at-moderne in [#6218](https://github.com/openrewrite/rewrite/pull/6218)
* Do not derive relative links from index html when deriving metadata in MavenPomDownloader by @Jenson3210 in [#6217](https://github.com/openrewrite/rewrite/pull/6217)
* Use Nebula version for NPM by @knutwannheden in [#6219](https://github.com/openrewrite/rewrite/pull/6219)
* Drop launcher from rewrite-test, as it's now set in the build plugin by @timtebeek in [#6220](https://github.com/openrewrite/rewrite/pull/6220)
* Manual rerun of  `:rewrite-gradle:syncWrapperScripts` by @knutwannheden in [#6222](https://github.com/openrewrite/rewrite/pull/6222)
* Use virtual threads to download Gradle wrapper scripts by @timtebeek in [#6221](https://github.com/openrewrite/rewrite/pull/6221)
* JavaScript: Implement custom `dedent` function for test harness by @knutwannheden in [#6229](https://github.com/openrewrite/rewrite/pull/6229)
* JavaScript: Fix parser `prefix` assignment bug by @knutwannheden in [#6230](https://github.com/openrewrite/rewrite/pull/6230)
* JavaScript: Add semantic comparison for function calls by @knutwannheden in [#6231](https://github.com/openrewrite/rewrite/pull/6231)
* Add dependency graph column to DependencyInsight recipes by @bmuschko in [#6170](https://github.com/openrewrite/rewrite/pull/6170)
* Update rendering logic to ensure 100% match in official Gradle wrapper scripts by @shanman190 in [#6233](https://github.com/openrewrite/rewrite/pull/6233)
* Isolated recipe classloading for `RecipeMarketplace` by @jkschneider in [#6235](https://github.com/openrewrite/rewrite/pull/6235)
* Add recipe for migrating Gradle dependency declarations to the version catalog by @bmuschko in [#6224](https://github.com/openrewrite/rewrite/pull/6224)
* Add Dockerfile parser based on ANTLR by @timtebeek in [#6203](https://github.com/openrewrite/rewrite/pull/6203)
* Maven resolution order for scopes should be preserved deterministically by @bmuschko in [#6238](https://github.com/openrewrite/rewrite/pull/6238)
* JavaScript: Allow untyped variables in patterns to match typed variables by @knutwannheden in [#6239](https://github.com/openrewrite/rewrite/pull/6239)
* Polish GradleWrapperScriptDownloader by @timtebeek in [#6236](https://github.com/openrewrite/rewrite/pull/6236)
* Escape special characters like newlines when exporting to CSV by @timtebeek in [#6241](https://github.com/openrewrite/rewrite/pull/6241)
* Drop `@InlineMe` annotation and recipe generator ahead of move to rewrite-third-party by @timtebeek in [#6242](https://github.com/openrewrite/rewrite/pull/6242)
* JavaScript - fix missing beforeSyntax, afterSyntax by @greg-at-moderne in [#6244](https://github.com/openrewrite/rewrite/pull/6244)
* Convert JaCoCo config when used as method invocation by @timtebeek in [#6232](https://github.com/openrewrite/rewrite/pull/6232)
* JavaScript - enforcing whitespace attached to the outermost element by @greg-at-moderne in [#6245](https://github.com/openrewrite/rewrite/pull/6245)

#### [rewrite 8.65.0](https://github.com/openrewrite/rewrite/releases/tag/v8.65.0)

* Fix protobuf parser to handle files without syntax declaration by @timtebeek in [#6166](https://github.com/openrewrite/rewrite/pull/6166)
* Improved support for indentation formatting using records and single arg method declarations by @Jenson3210 in [#6158](https://github.com/openrewrite/rewrite/pull/6158)
* Ensure that sequential find operations can locate results in the same file by @sambsnyd in [#6171](https://github.com/openrewrite/rewrite/pull/6171)
* Add custom style configuration option to AutoFormat recipe by @Jenson3210 in [#6167](https://github.com/openrewrite/rewrite/pull/6167)
* ChopIfTooLong for methodInvocation chains by @Jenson3210 in [#6112](https://github.com/openrewrite/rewrite/pull/6112)
* JavaScript: Support old octal literals like `0777` by @knutwannheden in [#6172](https://github.com/openrewrite/rewrite/pull/6172)
* Temporarily enable the usage of private static methods while we wait for a parent runtime upgrade by @Jenson3210 in [#6173](https://github.com/openrewrite/rewrite/pull/6173)
* JavaScript: Allow incomplete `\x` hex escape sequences by @knutwannheden in [#6174](https://github.com/openrewrite/rewrite/pull/6174)
* JavaScript: Properly map literal method names by @knutwannheden in [#6178](https://github.com/openrewrite/rewrite/pull/6178)
* JavaScript - fix the order of properties in instanceOf RPC by @greg-at-moderne in [#6182](https://github.com/openrewrite/rewrite/pull/6182)
* Allow octal escapes for strings in JS sources by @knutwannheden in [#6184](https://github.com/openrewrite/rewrite/pull/6184)
* JS `RemoveImport`: Handle multi-variable assignments by @knutwannheden in [#6185](https://github.com/openrewrite/rewrite/pull/6185)
* JavaScript: More `RemoveImport` corrections by @knutwannheden in [#6187](https://github.com/openrewrite/rewrite/pull/6187)
* JavaScript: Handle `import ... = ...` in `RemoveImport` by @knutwannheden in [#6190](https://github.com/openrewrite/rewrite/pull/6190)
* Added formatting support for single/multiline comments in parameters / record header by @Jenson3210 in [#6176](https://github.com/openrewrite/rewrite/pull/6176)
* Improve description clarity in AddLiteralMethodArgument by @Jenson3210 in [#6191](https://github.com/openrewrite/rewrite/pull/6191)
* Add annotation search methods to AnnotationService by @sambsnyd in [#6192](https://github.com/openrewrite/rewrite/pull/6192)
* HCL: Add support for provider-scoped functions by @timtebeek in [#6194](https://github.com/openrewrite/rewrite/pull/6194)
* JavaScript - adding `maybeAutoFormat()` method to visitors by @greg-at-moderne in [#6189](https://github.com/openrewrite/rewrite/pull/6189)
* JavaScript - indent non-block bodies of `if`, `while`, `for` by @greg-at-moderne in [#6186](https://github.com/openrewrite/rewrite/pull/6186)
* Validate recipes are found in package by @timtebeek in [#6179](https://github.com/openrewrite/rewrite/pull/6179)
* Recipe marketplace CSV by @jkschneider in [#6150](https://github.com/openrewrite/rewrite/pull/6150)

#### [rewrite-all 1.23.0](https://github.com/openrewrite/rewrite-all/releases/tag/v1.23.0)

* Gradle 9.2.0 by @timtebeek in [#37](https://github.com/openrewrite/rewrite-all/pull/37)

#### [rewrite-apache 2.20.0](https://github.com/openrewrite/rewrite-apache/releases/tag/v2.20.0)

* Change HTTP constants and `HttpEntityEnclosingRequest` when upgrading to HC 5 by @ChenyuWang98 in [#109](https://github.com/openrewrite/rewrite-apache/pull/109)
* Gradle 9.2.0 by @timtebeek in [#110](https://github.com/openrewrite/rewrite-apache/pull/110)

#### [rewrite-codemods 0.21.0](https://github.com/moderneinc/rewrite-codemods/releases/tag/v0.21.0)

* OpenRewrite recipe best practices by @timtebeek in [#51](https://github.com/moderneinc/rewrite-codemods/pull/51)
* Gradle 9.2.0 by @timtebeek in [#52](https://github.com/moderneinc/rewrite-codemods/pull/52)

#### [rewrite-cucumber-jvm 2.11.0](https://github.com/openrewrite/rewrite-cucumber-jvm/releases/tag/v2.11.0)

* Gradle 9.2.0 by @timtebeek in [#31](https://github.com/openrewrite/rewrite-cucumber-jvm/pull/31)

#### [rewrite-docker 2.14.0](https://github.com/openrewrite/rewrite-docker/releases/tag/v2.14.0)

* Gradle 9.1.0 on Java 25 by @timtebeek in [#22](https://github.com/openrewrite/rewrite-docker/pull/22)
* Gradle 9.2.0 by @timtebeek in [#23](https://github.com/openrewrite/rewrite-docker/pull/23)

#### [rewrite-dropwizard 0.8.0](https://github.com/openrewrite/rewrite-dropwizard/releases/tag/v0.8.0)

* Gradle 9.2.0 by @timtebeek in [#12](https://github.com/openrewrite/rewrite-dropwizard/pull/12)

#### [rewrite-feature-flags 1.16.0](https://github.com/openrewrite/rewrite-feature-flags/releases/tag/v1.16.0)

* Gradle 9.2.0 by @timtebeek in [#56](https://github.com/openrewrite/rewrite-feature-flags/pull/56)

#### [rewrite-github-actions 3.14.0](https://github.com/openrewrite/rewrite-github-actions/releases/tag/v3.14.0)

* feat: add recipe to migrate astral-sh/setup-uv from v6 to v7 by @sjungling in [#155](https://github.com/openrewrite/rewrite-github-actions/pull/155)
* OpenRewrite recipe best practices by @timtebeek in [#156](https://github.com/openrewrite/rewrite-github-actions/pull/156)
* Gradle 9.1.0 on Java 25 by @timtebeek in [#157](https://github.com/openrewrite/rewrite-github-actions/pull/157)
* Gradle 9.2.0 by @timtebeek in [#158](https://github.com/openrewrite/rewrite-github-actions/pull/158)

#### [rewrite-gitlab 0.17.0](https://github.com/openrewrite/rewrite-gitlab/releases/tag/v0.17.0)

* Gradle 9.1.0 on Java 25 by @timtebeek in [#29](https://github.com/openrewrite/rewrite-gitlab/pull/29)
* Gradle 9.2.0 by @timtebeek in [#30](https://github.com/openrewrite/rewrite-gitlab/pull/30)

#### [rewrite-gradle-plugin 7.20.0](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.20.0)

* Gradle 9.1.0 on Java 25 by @timtebeek in [#414](https://github.com/openrewrite/rewrite-gradle-plugin/pull/414)
* Remove unused `spring-petclinic-test.init.gradle` by @timtebeek in [#415](https://github.com/openrewrite/rewrite-gradle-plugin/pull/415)
* Gradle 9.2.0 by @timtebeek in [#416](https://github.com/openrewrite/rewrite-gradle-plugin/pull/416)
* Add `rewrite-docker` to rewrite dependencies by @timtebeek in [#417](https://github.com/openrewrite/rewrite-gradle-plugin/pull/417)

#### [rewrite-hibernate 2.15.0](https://github.com/openrewrite/rewrite-hibernate/releases/tag/v2.15.0)

* Gradle 9.2.0 by @timtebeek in [#67](https://github.com/openrewrite/rewrite-hibernate/pull/67)

#### [rewrite-jackson 1.9.0](https://github.com/openrewrite/rewrite-jackson/releases/tag/v1.9.0)

* Common static analysis issues by @timtebeek in [#32](https://github.com/openrewrite/rewrite-jackson/pull/32)
* Gradle 9.1.0 by @timtebeek in [#33](https://github.com/openrewrite/rewrite-jackson/pull/33)
* Gradle 9.2.0 by @timtebeek in [#34](https://github.com/openrewrite/rewrite-jackson/pull/34)
* Also remove old configuration properties by @timtebeek in [#35](https://github.com/openrewrite/rewrite-jackson/pull/35)
* readme: why upgrade to jackson 3 by @sullis in [#36](https://github.com/openrewrite/rewrite-jackson/pull/36)

#### [rewrite-java-dependencies 1.45.0](https://github.com/openrewrite/rewrite-java-dependencies/releases/tag/v1.45.0)

* Gradle 9.1.0 on Java 21 by @timtebeek in [#159](https://github.com/openrewrite/rewrite-java-dependencies/pull/159)
* Gradle 9.2.0 by @timtebeek in [#160](https://github.com/openrewrite/rewrite-java-dependencies/pull/160)

#### [rewrite-jenkins 0.32.0](https://github.com/openrewrite/rewrite-jenkins/releases/tag/v0.32.0)

* Gradle 9.2.0 by @timtebeek in [#100](https://github.com/openrewrite/rewrite-jenkins/pull/100)
* Add Maven Central before slower Jenkins repository by @timtebeek in [#101](https://github.com/openrewrite/rewrite-jenkins/pull/101)

#### [rewrite-joda 0.3.0](https://github.com/openrewrite/rewrite-joda/releases/tag/v0.3.0)

* Run on Java 25 by @timtebeek in [#3](https://github.com/openrewrite/rewrite-joda/pull/3)
* Gradle 9.2.0 by @timtebeek in [#4](https://github.com/openrewrite/rewrite-joda/pull/4)

#### [rewrite-liberty 1.23.0](https://github.com/openrewrite/rewrite-liberty/releases/tag/v1.23.0)

* Gradle 9.2.0 by @timtebeek in [#39](https://github.com/openrewrite/rewrite-liberty/pull/39)

#### [rewrite-logging-frameworks 3.18.0](https://github.com/openrewrite/rewrite-logging-frameworks/releases/tag/v3.18.0)

* Gradle 9.2.0 by @timtebeek in [#259](https://github.com/openrewrite/rewrite-logging-frameworks/pull/259)
* Update SLF4J JBoss Logmanager version to 2.0.2.Final by @greg-at-moderne in [#260](https://github.com/openrewrite/rewrite-logging-frameworks/pull/260)
* Move the `@InlineMe` recipes to rewrite-third-party by @timtebeek in [#261](https://github.com/openrewrite/rewrite-logging-frameworks/pull/261)

#### [rewrite-maven-plugin 6.23.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.23.0)

* Avoid duplicate Java sources by @timtebeek in [#1060](https://github.com/openrewrite/rewrite-maven-plugin/pull/1060)
* Maven multi modules resources not handled correctly by @timtebeek in [#1067](https://github.com/openrewrite/rewrite-maven-plugin/pull/1067)
* Update SDKMan Java version by @timtebeek in [#1068](https://github.com/openrewrite/rewrite-maven-plugin/pull/1068)

#### [rewrite-micrometer 0.27.0](https://github.com/openrewrite/rewrite-micrometer/releases/tag/v0.27.0)

* Gradle 9.2.0 by @timtebeek in [#31](https://github.com/openrewrite/rewrite-micrometer/pull/31)

#### [rewrite-micronaut 2.30.0](https://github.com/openrewrite/rewrite-micronaut/releases/tag/v2.30.0)

* Gradle 9.2.0 by @timtebeek in [#132](https://github.com/openrewrite/rewrite-micronaut/pull/132)

#### [rewrite-migrate-java 3.21.1](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.21.1)

* Instance main should not be used for certain test cases by @timtebeek in [#891](https://github.com/openrewrite/rewrite-migrate-java/pull/891)
* Update expected indentation for `LombokValueToRecordTest` by @timtebeek in [#892](https://github.com/openrewrite/rewrite-migrate-java/pull/892)
* OpenRewrite recipe best practices by @timtebeek in [#894](https://github.com/openrewrite/rewrite-migrate-java/pull/894)
* Convert Guava `Iterables.any` and `.filter` by @lredor in [#896](https://github.com/openrewrite/rewrite-migrate-java/pull/896)
* Support varargs for Predicates.and() and Predicates.or() by @timtebeek in [#901](https://github.com/openrewrite/rewrite-migrate-java/pull/901)
* Convert Guava `Functions.compose` by @lredor in [#906](https://github.com/openrewrite/rewrite-migrate-java/pull/906)
* Convert Guava `Sets.filter` by @lredor in [#898](https://github.com/openrewrite/rewrite-migrate-java/pull/898)
* Only convert Guava Predicate when not used as method argument by @timtebeek in [#902](https://github.com/openrewrite/rewrite-migrate-java/pull/902)
* OpenRewrite recipe best practices by @timtebeek in [#907](https://github.com/openrewrite/rewrite-migrate-java/pull/907)
* Support Lambda for Predicates.and() and Predicates.or() by @lredor in [#910](https://github.com/openrewrite/rewrite-migrate-java/pull/910)
* Convert Guava `Predicates.equalTo` by @lredor in [#911](https://github.com/openrewrite/rewrite-migrate-java/pull/911)
* Only change Guava `Predicate.apply` to `test` when not using `filter` or similar methods by @lredor in [#909](https://github.com/openrewrite/rewrite-migrate-java/pull/909)
* Cover more cases for Predicates.and/or methods by @lredor in [#912](https://github.com/openrewrite/rewrite-migrate-java/pull/912)
* Prefer `Optional.stream().collect(toSet())` over `Optional.asSet()` by @timtebeek in [#915](https://github.com/openrewrite/rewrite-migrate-java/pull/915)
* Fix indentation calculation by @Jenson3210 in [#916](https://github.com/openrewrite/rewrite-migrate-java/pull/916)
* Convert Guava `Iterables.transform` and `Collections2.transform` by @lredor in [#917](https://github.com/openrewrite/rewrite-migrate-java/pull/917)
* Ignore `java.util.Iterator` in NoGuavaSetsNewHashSet recipe by @lredor in [#921](https://github.com/openrewrite/rewrite-migrate-java/pull/921)
* Gradle 9.1.0 by @timtebeek in [#922](https://github.com/openrewrite/rewrite-migrate-java/pull/922)
* Dependencies for `javax.jws..*` in Java 11 Migration by @MBoegers in [#925](https://github.com/openrewrite/rewrite-migrate-java/pull/925)
* Set build tools to use Java 8 when running Java 8 upgrade by @MBoegers in [#924](https://github.com/openrewrite/rewrite-migrate-java/pull/924)
* Update SDKMan Java version by @timtebeek in [#926](https://github.com/openrewrite/rewrite-migrate-java/pull/926)
* Do not migrate to Jakarta annotations as part of Java 17 upgrade by @Laurens-W in [#923](https://github.com/openrewrite/rewrite-migrate-java/pull/923)
* Gradle 9.2.0 by @timtebeek in [#930](https://github.com/openrewrite/rewrite-migrate-java/pull/930)
* Change the Jetty dependency coordinates going from EE9 to EE10 by @ChenyuWang98 in [#914](https://github.com/openrewrite/rewrite-migrate-java/pull/914)
* Move the `@InlineMe` recipes to rewrite-third-party by @timtebeek in [#931](https://github.com/openrewrite/rewrite-migrate-java/pull/931)

#### [rewrite-migrate-java 3.21.0](https://github.com/openrewrite/rewrite-migrate-java/releases/tag/v3.21.0)

* Instance main should not be used for certain test cases by @timtebeek in [#891](https://github.com/openrewrite/rewrite-migrate-java/pull/891)
* Update expected indentation for `LombokValueToRecordTest` by @timtebeek in [#892](https://github.com/openrewrite/rewrite-migrate-java/pull/892)
* OpenRewrite recipe best practices by @timtebeek in [#894](https://github.com/openrewrite/rewrite-migrate-java/pull/894)
* Convert Guava `Iterables.any` and `.filter` by @lredor in [#896](https://github.com/openrewrite/rewrite-migrate-java/pull/896)
* Support varargs for Predicates.and() and Predicates.or() by @timtebeek in [#901](https://github.com/openrewrite/rewrite-migrate-java/pull/901)
* Convert Guava `Functions.compose` by @lredor in [#906](https://github.com/openrewrite/rewrite-migrate-java/pull/906)
* Convert Guava `Sets.filter` by @lredor in [#898](https://github.com/openrewrite/rewrite-migrate-java/pull/898)
* Only convert Guava Predicate when not used as method argument by @timtebeek in [#902](https://github.com/openrewrite/rewrite-migrate-java/pull/902)
* OpenRewrite recipe best practices by @timtebeek in [#907](https://github.com/openrewrite/rewrite-migrate-java/pull/907)
* Support Lambda for Predicates.and() and Predicates.or() by @lredor in [#910](https://github.com/openrewrite/rewrite-migrate-java/pull/910)
* Convert Guava `Predicates.equalTo` by @lredor in [#911](https://github.com/openrewrite/rewrite-migrate-java/pull/911)
* Only change Guava `Predicate.apply` to `test` when not using `filter` or similar methods by @lredor in [#909](https://github.com/openrewrite/rewrite-migrate-java/pull/909)
* Cover more cases for Predicates.and/or methods by @lredor in [#912](https://github.com/openrewrite/rewrite-migrate-java/pull/912)
* Prefer `Optional.stream().collect(toSet())` over `Optional.asSet()` by @timtebeek in [#915](https://github.com/openrewrite/rewrite-migrate-java/pull/915)
* Fix indentation calculation by @Jenson3210 in [#916](https://github.com/openrewrite/rewrite-migrate-java/pull/916)
* Convert Guava `Iterables.transform` and `Collections2.transform` by @lredor in [#917](https://github.com/openrewrite/rewrite-migrate-java/pull/917)
* Ignore `java.util.Iterator` in NoGuavaSetsNewHashSet recipe by @lredor in [#921](https://github.com/openrewrite/rewrite-migrate-java/pull/921)
* Gradle 9.1.0 by @timtebeek in [#922](https://github.com/openrewrite/rewrite-migrate-java/pull/922)
* Dependencies for `javax.jws..*` in Java 11 Migration by @MBoegers in [#925](https://github.com/openrewrite/rewrite-migrate-java/pull/925)
* Set build tools to use Java 8 when running Java 8 upgrade by @MBoegers in [#924](https://github.com/openrewrite/rewrite-migrate-java/pull/924)
* Update SDKMan Java version by @timtebeek in [#926](https://github.com/openrewrite/rewrite-migrate-java/pull/926)
* Do not migrate to Jakarta annotations as part of Java 17 upgrade by @Laurens-W in [#923](https://github.com/openrewrite/rewrite-migrate-java/pull/923)
* Gradle 9.2.0 by @timtebeek in [#930](https://github.com/openrewrite/rewrite-migrate-java/pull/930)
* Change the Jetty dependency coordinates going from EE9 to EE10 by @ChenyuWang98 in [#914](https://github.com/openrewrite/rewrite-migrate-java/pull/914)
* Move the `@InlineMe` recipes to rewrite-third-party by @timtebeek in [#931](https://github.com/openrewrite/rewrite-migrate-java/pull/931)

#### [rewrite-netty 0.6.0](https://github.com/openrewrite/rewrite-netty/releases/tag/v0.6.0)

* Gradle 9.2.0 by @timtebeek in [#11](https://github.com/openrewrite/rewrite-netty/pull/11)

#### [rewrite-okhttp 0.20.0](https://github.com/openrewrite/rewrite-okhttp/releases/tag/v0.20.0)

* Gradle 9.2.0 by @timtebeek in [#26](https://github.com/openrewrite/rewrite-okhttp/pull/26)

#### [rewrite-openapi 0.27.0](https://github.com/openrewrite/rewrite-openapi/releases/tag/v0.27.0)

* Gradle 9.2.0 by @timtebeek in [#55](https://github.com/openrewrite/rewrite-openapi/pull/55)

#### [rewrite-polyglot 2.8.0](https://github.com/openrewrite/rewrite-polyglot/releases/tag/v2.8.0)

* Gradle 9.2.0 by @greg-at-moderne in [#46](https://github.com/openrewrite/rewrite-polyglot/pull/46)
* Add DockerfileParser by @timtebeek in [#47](https://github.com/openrewrite/rewrite-polyglot/pull/47)

#### [rewrite-quarkus 2.28.0](https://github.com/openrewrite/rewrite-quarkus/releases/tag/v2.28.0)

* Gradle 9.2.0 by @timtebeek in [#107](https://github.com/openrewrite/rewrite-quarkus/pull/107)

#### [rewrite-rewrite 0.15.0](https://github.com/openrewrite/rewrite-rewrite/releases/tag/v0.15.0)

* Gradle 9.1.0 on Java 25 by @timtebeek in [#42](https://github.com/openrewrite/rewrite-rewrite/pull/42)
* Gradle 9.2.0 by @timtebeek in [#43](https://github.com/openrewrite/rewrite-rewrite/pull/43)

#### [rewrite-spring 6.18.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.18.0)

* Spring Boot 4.0 Recipe and Properties recipe by @sruffatti in [#766](https://github.com/openrewrite/rewrite-spring/pull/766)
* Convert Spring Fox's `ApiInfoBuilder` into Swagger's `Info` by @dsgrieve in [#805](https://github.com/openrewrite/rewrite-spring/pull/805)
* Run license format after generating property migrations by @timtebeek in [#809](https://github.com/openrewrite/rewrite-spring/pull/809)
* OpenRewrite recipe best practices by @timtebeek in [#810](https://github.com/openrewrite/rewrite-spring/pull/810)
* Create an imperative `ApiInfoBuilderToInfo` by @timtebeek in [#811](https://github.com/openrewrite/rewrite-spring/pull/811)
* Gradle 9.2.0 by @timtebeek in [#814](https://github.com/openrewrite/rewrite-spring/pull/814)
* Replace `ApiKey` with `SecurityScheme` and `AuthorizationScope` with `Scopes` by @dsgrieve in [#808](https://github.com/openrewrite/rewrite-spring/pull/808)
* Fixing a small typo (SpringFox, not SpringDoc) by @ghusta in [#819](https://github.com/openrewrite/rewrite-spring/pull/819)
* Migrate SecurityReference SecurityRequirement by @dsgrieve in [#821](https://github.com/openrewrite/rewrite-spring/pull/821)

#### [rewrite-spring-to-quarkus 0.3.0](https://github.com/openrewrite/rewrite-spring-to-quarkus/releases/tag/v0.3.0)

* Gradle 9.2.0 by @timtebeek in [#59](https://github.com/openrewrite/rewrite-spring-to-quarkus/pull/59)

#### [rewrite-static-analysis 2.21.0](https://github.com/openrewrite/rewrite-static-analysis/releases/tag/v2.21.0)

* Retain necessary null checks in EqualsAvoidsNull by @timtebeek in [#761](https://github.com/openrewrite/rewrite-static-analysis/pull/761)
* Fix RemoveUnusedLocalVariables producing invalid pattern matching code by @timtebeek in [#762](https://github.com/openrewrite/rewrite-static-analysis/pull/762)
* Use constructor changed in rewrite-core by @Jenson3210 in [#763](https://github.com/openrewrite/rewrite-static-analysis/pull/763)
* Add recipe to reorder annotation attributes by @timtebeek in [#764](https://github.com/openrewrite/rewrite-static-analysis/pull/764)
* Gradle 9.2.0 by @timtebeek in [#766](https://github.com/openrewrite/rewrite-static-analysis/pull/766)
* Improve `CovariantEquals` for kotlin by @Laurens-W in [#765](https://github.com/openrewrite/rewrite-static-analysis/pull/765)
* Limit `RemoveSystemOutPrintln` to `System.out` and `System.err` by @timtebeek in [#770](https://github.com/openrewrite/rewrite-static-analysis/pull/770)
* Replace empty String concatenation with `String.valueOf()` by @timtebeek in [#634](https://github.com/openrewrite/rewrite-static-analysis/pull/634)

#### [rewrite-templating 1.38.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.38.0)

* Sort the jar names for consistency between sources by @timtebeek in [#173](https://github.com/openrewrite/rewrite-templating/pull/173)
* Gradle 9.2.0 by @timtebeek in [#174](https://github.com/openrewrite/rewrite-templating/pull/174)
* Adding test dependency of junit-platform-launcher by @greg-at-moderne in [#175](https://github.com/openrewrite/rewrite-templating/pull/175)

#### [rewrite-testing-frameworks 3.21.0](https://github.com/openrewrite/rewrite-testing-frameworks/releases/tag/v3.21.0)

* OpenRewrite recipe best practices by @timtebeek in [#834](https://github.com/openrewrite/rewrite-testing-frameworks/pull/834)
* Gradle 9.2.0 by @timtebeek in [#836](https://github.com/openrewrite/rewrite-testing-frameworks/pull/836)
* Add recipe to simplify AssertJ SequencedCollection assertions by @timtebeek in [#837](https://github.com/openrewrite/rewrite-testing-frameworks/pull/837)

#### [rewrite-third-party 0.31.0](https://github.com/openrewrite/rewrite-third-party/releases/tag/v0.31.0)

* Add a type table for error-prone-support generated recipes by @timtebeek in [#47](https://github.com/openrewrite/rewrite-third-party/pull/47)
* Gradle 9.2.0 by @timtebeek in [#48](https://github.com/openrewrite/rewrite-third-party/pull/48)
* Add generated recipes for methods annotated with `@InlineMe` by @timtebeek in [#49](https://github.com/openrewrite/rewrite-third-party/pull/49)
* Add recipe generator for `@InlineMe` annotated methods by @timtebeek in [#50](https://github.com/openrewrite/rewrite-third-party/pull/50)
