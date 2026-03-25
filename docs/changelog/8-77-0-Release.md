---
description: What's changed in OpenRewrite version 8.77.0.
---

# 8.77.0 release (2026-03-25)

_Total recipe count: 4244_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::


## New Recipes

* [org.openrewrite.csharp.AddNuGetPackageReference](https://docs.openrewrite.org/recipes/csharp/addnugetpackagereference): Adds a `<PackageReference>` element to .csproj files if not already present. 
* [org.openrewrite.csharp.ChangeDotNetTargetFramework](https://docs.openrewrite.org/recipes/csharp/changedotnettargetframework): Changes the `<TargetFramework>` or `<TargetFrameworks>` value in .csproj files. For multi-TFM projects, replaces the matching framework within the semicolon-delimited list. 
* [org.openrewrite.csharp.RemoveNuGetPackageReference](https://docs.openrewrite.org/recipes/csharp/removenugetpackagereference): Removes a `<PackageReference>` element from .csproj files. 
* [org.openrewrite.csharp.UpgradeNuGetPackageVersion](https://docs.openrewrite.org/recipes/csharp/upgradenugetpackageversion): Upgrades the version of a NuGet `<PackageReference>` or `<PackageVersion>` in .csproj and Directory.Packages.props files. Handles property references by updating the property value instead of the version attribute. Supports semver version selectors. 
* [org.openrewrite.gitlab.MigrateToRules](https://docs.openrewrite.org/recipes/gitlab/migratetorules): Replace the deprecated `only` and `except` keywords with equivalent `rules` in `.gitlab-ci.yml` job definitions. When both `only` and `except` are present, they are combined into a single `rules` block. Handles simple ref list forms; complex object forms with `refs`, `variables`, or `changes` sub-keys are left unchanged. 
* [org.openrewrite.gradle.ChangeTaskToTasksRegister](https://docs.openrewrite.org/recipes/gradle/changetasktotasksregister): Changes eager task creation `task exampleName(type: ExampleType)` to lazy registration `tasks.register("exampleName", ExampleType)`. Also supports Kotlin DSL: `task<ExampleType>("exampleName")` to `tasks.register<ExampleType>("exampleName")`. 
* [org.openrewrite.java.jackson.AddJsonCreatorToPrivateConstructors](https://docs.openrewrite.org/recipes/java/jackson/addjsoncreatortoprivateconstructors): Jackson 3 strictly enforces creator visibility rules. Non-public constructors in Jackson-annotated classes that were auto-detected in Jackson 2 need an explicit `@JsonCreator` annotation to work for deserialization in Jackson 3. 
* [org.openrewrite.java.jackson.LombokJacksonizedConfig](https://docs.openrewrite.org/recipes/java/jackson/lombokjacksonizedconfig): When `@Jacksonized` is used, Lombok generates Jackson annotations. By default it generates Jackson 2.x annotations. This recipe adds `lombok.jacksonized.jacksonVersion = 3` to `lombok.config` so Lombok generates Jackson 3 compatible annotations. 
* [org.openrewrite.java.jackson.MigrateMapperSettersToBuilder](https://docs.openrewrite.org/recipes/java/jackson/migratemappersetterstobuilder): In Jackson 3, `JsonMapper` is immutable. Configuration methods like `setFilterProvider`, `addMixIn`, `disable`, `enable`, etc. must be called on the builder instead. This recipe migrates setter calls to the builder pattern when safe, or adds TODO comments when automatic migration is not possible. 
* [org.openrewrite.java.jackson.ReplaceObjectMapperCopy](https://docs.openrewrite.org/recipes/java/jackson/replaceobjectmappercopy): In Jackson 3, `ObjectMapper.copy()` was removed. Use `mapper.rebuild().build()` instead. 
* [org.openrewrite.java.jackson.StdDeserializerNullConstructor](https://docs.openrewrite.org/recipes/java/jackson/stddeserializernullconstructor): In Jackson 3, `StdDeserializer` no longer accepts `null` for the handled type parameter. This recipe replaces `this(null)` and `super((Class<?>) null)` in `StdDeserializer` subclass constructors with the actual type parameter from the class declaration. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_RelocatedFeatureConstants](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_relocatedfeatureconstants): Jackson 3 moved date/time-related feature constants from `SerializationFeature` and `DeserializationFeature` into `DateTimeFeature`, and enum-related constants into `EnumFeature`. 
* [org.openrewrite.java.micronaut.RemoveUnusedInConfigFiles](https://docs.openrewrite.org/recipes/java/micronaut/removeunusedinconfigfiles): Remove empty YAML keys left behind after relocating security config keys. 
* [org.openrewrite.java.migrate.JavaBestPractices](https://docs.openrewrite.org/recipes/java/migrate/javabestpractices): Applies opinionated best practices for Java projects targeting Java 25. This recipe includes the full Java 25 upgrade chain plus additional improvements to code style, API usage, and third-party dependency reduction that go beyond what the version migration recipes apply. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusPackageMoves_4_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleuspackagemoves_4_0): Relocate packages that were moved in DataNucleus 4.0. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusPackageMoves_5_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleuspackagemoves_5_0): Relocate packages that were moved in DataNucleus 5.0. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusPackageMoves_5_2](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleuspackagemoves_5_2): Relocate packages that were moved in DataNucleus 5.2. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_4_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleusproperties_4_0): Rename property keys that changed in DataNucleus 4.0. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_5_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleusproperties_5_0): Rename property keys that changed in DataNucleus 5.0. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_5_1](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleusproperties_5_1): Rename property keys that changed in DataNucleus 5.1. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_5_2](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleusproperties_5_2): Rename property keys that changed in DataNucleus 5.2. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusTypeChanges_4_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleustypechanges_4_0): Rename types that were changed in DataNucleus 4.0. 
* [org.openrewrite.java.migrate.datanucleus.DataNucleusTypeChanges_5_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/datanucleustypechanges_5_0): Rename types that were changed in DataNucleus 5.0. 
* [org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_4_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/upgradedatanucleus_4_0): Migrate DataNucleus 3.x applications to 4.0. This recipe handles package relocations, type renames, property key changes, and dependency updates introduced in AccessPlatform 4.0. 
* [org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_5_0](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/upgradedatanucleus_5_0): Migrate DataNucleus 4.x applications to 5.0. This recipe handles package relocations, type renames, property key changes, and dependency updates. 
* [org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_5_1](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/upgradedatanucleus_5_1): Migrate DataNucleus applications to 5.1. This recipe first applies the 5.0 migration, then handles the transaction namespace reorganization and other property renames introduced in 5.1. 
* [org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_5_2](https://docs.openrewrite.org/recipes/java/migrate/datanucleus/upgradedatanucleus_5_2): Migrate DataNucleus applications to 5.2. This recipe first applies the 5.1 migration, then handles the column mapping package move and query-related property renames introduced in 5.2. 
* [org.openrewrite.java.migrate.lang.JavadocToMarkdownDocComment](https://docs.openrewrite.org/recipes/java/migrate/lang/javadoctomarkdowndoccomment): Convert traditional Javadoc comments (`/** ... */`) to Markdown documentation comments (`///`) as supported by JEP 467 in Java 23+. Transforms HTML constructs like `<pre>`, `<code>`, `<em>`, `<p>`, and lists to their Markdown equivalents, and converts inline tags like `{@code}` and `{@link}` to Markdown syntax. 
* [org.openrewrite.java.migrate.lang.var.UseVarForConstructors](https://docs.openrewrite.org/recipes/java/migrate/lang/var/usevarforconstructors): Replace explicit type declarations with `var` when the variable is initialized with a constructor call of exactly the same type. Does not transform when declared type differs from constructor type (e.g., interface vs implementation). 
* [org.openrewrite.java.recipes.RemoveNlsRewriteAnnotations](https://docs.openrewrite.org/recipes/java/recipes/removenlsrewriteannotations): Remove `@NlsRewrite.DisplayName` and `@NlsRewrite.Description` annotations, but only from classes that extend `Recipe`. 
* [org.openrewrite.java.recipes.UseVisitWithParentCursor](https://docs.openrewrite.org/recipes/java/recipes/usevisitwithparentcursor): When calling another visitor from within a visitor, use the generic `visit(tree, ctx, getCursor().getParentTreeCursor())` method instead of a specific `visit*` method like `visitMethodInvocation`. The specific visit methods bypass the visitor lifecycle, including cursor setup, pre/post visit hooks, and observer notifications. 
* [org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedConditionBoot1](https://docs.openrewrite.org/recipes/java/spring/boot2/conditionalonbeananynestedconditionboot1): Migrate multi-condition `@ConditionalOnBean` annotations to use `AnyNestedCondition` when upgrading from Spring Boot 1.x to 2.x. In Boot 1.x, listing multiple beans in `@ConditionalOnBean` meant OR (any match); in Boot 2.x+ it means AND (all must match). This recipe preserves the original OR semantics by wrapping conditions in an `AnyNestedCondition` class. 
* [org.openrewrite.java.spring.boot2.MigrateArtemisProperties](https://docs.openrewrite.org/recipes/java/spring/boot2/migrateartemisproperties): Combines `spring.artemis.host` and `spring.artemis.port` into `spring.artemis.broker-url` in the format `tcp://host:port`. 
* [org.openrewrite.java.spring.boot4.UnwrapMockAndSpyBeanContainers](https://docs.openrewrite.org/recipes/java/spring/boot4/unwrapmockandspybeancontainers): Replaces class-level `@MockBeans` and `@SpyBeans` container annotations with a single class-level `@MockBean` or `@SpyBean` annotation with a merged `types` attribute for compatibility with `@MockitoBean`. 
* [org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025_1](https://docs.openrewrite.org/recipes/java/spring/cloud2025/upgradespringcloud_2025_1): Migrate applications to the latest Spring Cloud 2025.1 release, compatible with Spring Boot 4.0. 
* [org.openrewrite.java.spring.mvc.JaxrsToSpringMvcMediaType](https://docs.openrewrite.org/recipes/java/spring/mvc/jaxrstospringmvcmediatype): Replaces all JAX-RS MediaType with Spring MVC MediaType. 
* [org.openrewrite.java.spring.mvc.JaxrsToSpringMvcResponseEntity](https://docs.openrewrite.org/recipes/java/spring/mvc/jaxrstospringmvcresponseentity): Replaces all JAX-RS Response with Spring MVC ResponseEntity. 
* [org.openrewrite.java.testing.mockito.AddMockitoJupiterDependency](https://docs.openrewrite.org/recipes/java/testing/mockito/addmockitojupiterdependency): Adds `org.mockito:mockito-junit-jupiter` dependency if `@ExtendWith(MockitoExtension.class)` will be added to any test class, i.e. when Mockito annotations are used in JUnit 5 tests without the extension already present. 
* [org.openrewrite.java.testing.mockito.ArgumentMatcherToLambda](https://docs.openrewrite.org/recipes/java/testing/mockito/argumentmatchertolambda): Converts anonymous `ArgumentMatcher<T>` implementations with `matches(Object)` to lambda expressions with the correct parameter type. In Mockito 1.x, `ArgumentMatcher<T>` extended Hamcrest's `BaseMatcher` and `matches` always took `Object`. In Mockito 2+, `ArgumentMatcher<T>` is a functional interface where `matches` takes `T`. 
* [org.openrewrite.java.testing.mockito.PowerMockRunnerDelegateToRunWith](https://docs.openrewrite.org/recipes/java/testing/mockito/powermockrunnerdelegatetorunwith): Replaces `@PowerMockRunnerDelegate(X.class)` by promoting the delegate runner to `@RunWith(X.class)` and removing the PowerMock-specific annotation. 
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForJUnit4](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistenerforjunit4): Replace `MockitoTestExecutionListener` in projects that have JUnit 4 as a dependency. Uses `@RunWith(MockitoJUnitRunner.class)` as the replacement. 
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForJupiter](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistenerforjupiter): Replace `MockitoTestExecutionListener` in projects that have JUnit Jupiter as a dependency. Uses `@ExtendWith(MockitoExtension.class)` as the replacement. 
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForTestNG](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistenerfortestng): Replace `MockitoTestExecutionListener` in projects that have TestNG as a dependency. Uses `MockitoAnnotations.openMocks(this)` with `@BeforeMethod`/`@AfterMethod` as the replacement. 
* [org.openrewrite.jcl.search.FindWord](https://docs.openrewrite.org/recipes/jcl/search/findword): Search for JCL words based on a search term. 
* [org.openrewrite.maven.cleanup.NoSystemScopeDependencies](https://docs.openrewrite.org/recipes/maven/cleanup/nosystemscopedependencies): Replaces `<scope>system</scope>` with the default compile scope and removes `<systemPath>` for dependencies that are available in configured repositories. 
* [org.openrewrite.properties.CopyValue](https://docs.openrewrite.org/recipes/properties/copyvalue): Copies a property value from one key to another. The existing key/value pair remains unaffected by this change. If the destination key already exists, its value will be replaced. By default, creates the destination key if it does not exist. 
* [org.openrewrite.staticanalysis.ExplicitThis](https://docs.openrewrite.org/recipes/staticanalysis/explicitthis): Add explicit 'this.' prefix to field and method access. 
* [org.openrewrite.staticanalysis.InterruptedExceptionHandling](https://docs.openrewrite.org/recipes/staticanalysis/interruptedexceptionhandling): When `InterruptedException` is caught, `Thread.currentThread().interrupt()` should be called to restore the thread's interrupted state. Failing to do so can suppress the interruption signal and prevent proper thread cancellation. 
* [org.openrewrite.staticanalysis.MemberNameCaseInsensitiveDuplicates](https://docs.openrewrite.org/recipes/staticanalysis/membernamecaseinsensitiveduplicates): Looking at the set of methods and fields in a class and all of its parents, no two members should have names that differ only in capitalization. This rule will not report if a method overrides a parent method. 
* [org.openrewrite.staticanalysis.UseTryWithResources](https://docs.openrewrite.org/recipes/staticanalysis/usetrywithresources): Refactor try/finally blocks to use try-with-resources when the finally block only closes an `AutoCloseable` resource. 

## Removed Recipes

* **org.openrewrite.staticanalysis.RemoveTrailingWhitespace**: Remove trailing whitespace from the end of each line. Trailing whitespace is simply useless and should not stay in code. It may generate noise when comparing different versions of the same file. 

## Changed Recipes

* [org.openrewrite.github.AddDependabotCooldown](https://docs.openrewrite.org/recipes/github/adddependabotcooldown) was changed:
  * Old Options:
    * `cooldownDays: { type: Integer, required: false }`
    * `exclude: { type: List, required: false }`
    * `include: { type: List, required: false }`
    * `semverMajorDays: { type: Integer, required: false }`
    * `semverMinorDays: { type: Integer, required: false }`
    * `semverPatchDays: { type: Integer, required: false }`
  * New Options:
    * `cooldownDays: { type: Integer, required: false }`
    * `exclude: { type: List, required: false }`
    * `excludeEcosystems: { type: List, required: false }`
    * `include: { type: List, required: false }`
    * `semverMajorDays: { type: Integer, required: false }`
    * `semverMinorDays: { type: Integer, required: false }`
    * `semverPatchDays: { type: Integer, required: false }`
* [org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener](https://docs.openrewrite.org/recipes/java/testing/mockito/replacemockitotestexecutionlistener) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `targetFramework: { type: String, required: false }`