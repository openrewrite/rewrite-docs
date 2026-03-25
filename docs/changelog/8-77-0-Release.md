---
description: What's changed in OpenRewrite version 8.77.0.
---

# 8.77.0 release (2026-03-25)

_Total recipe count: 4244_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.57.16`
* Staging CLI version: `v3.57.16`

## Removed Artifacts

* rewrite-devcenter

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

* **org.openrewrite.csharp.recipes.meziantou.analyzer.AbstractTypesShouldNotHaveConstructorsMA0017**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ArgumentExceptionShouldSpecifyArgumentNameMA0043**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.AvoidComparisonWithBoolConstantMA0073**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.AvoidUsingRedundantElseMA0071**: The 'if' block contains a jump statement (break, continue, goto, return, throw, yield break). Using 'else' is redundant and needlessly maintains a higher nesting level. 
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ClassMustBeSealedMA0053**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.CommaMA0007**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotRemoveOriginalExceptionFromThrowStatementMA0027**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotUseBlockingCallInAsyncContextMA0042**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotUseBlockingCallInAsyncContextMA0045**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotUseEqualityComparerDefaultOfStringMA0024**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotUseEqualityOperatorsForSpanOfCharMA0103**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.DoNotUseStringGetHashCodeMA0021**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.EqualityShouldBeCorrectlyImplementedMA0077**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.EventsShouldHaveProperArgumentsMA0091**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MakeClassStaticMA0036**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MakeInterpolatedStringMA0165**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MakeMemberReadOnlyMA0102**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MakeMethodStaticMA0038**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MakeMethodStaticMA0041**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MarkAttributesWithAttributeUsageAttributeMA0010**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.MethodOverridesShouldNotChangeParameterDefaultsMA0061**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.NamedParameterMA0003**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.NotPatternShouldBeParenthesizedCodeMA0164**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0020**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0029**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0030**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0031**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0078**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0098**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeLinqUsageMA0159**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeStartsWithMA0089**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.OptimizeStringBuilderUsageMA0028**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ParameterAttributeForRazorComponentMA0116**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ParameterAttributeForRazorComponentMA0117**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.PreserveParamsOnOverrideMA0081**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.RemoveEmptyStatementMA0037**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.RemoveUselessToStringMA0044**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ReplaceEnumToStringWithNameofMA0052**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ReturnTaskFromResultInsteadOfReturningNullMA0022**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.SimplifyCallerArgumentExpressionMA0108**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.StringShouldNotContainsNonDeterministicEndOfLineMA0101**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseAnOverloadThatHasCancellationTokenFixer_ArgumentMA0040**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseAnOverloadThatHasCancellationTokenFixer_AwaitForEachMA0079**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseAnOverloadThatHasTimeProviderMA0166**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseArrayEmptyMA0005**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseConfigureAwaitMA0004**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseDateTimeUnixEpochMA0113**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseDateTimeUnixEpochMA0114**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseEventArgsEmptyMA0019**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseEventArgsEmptyMA0093**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseGuidEmptyMA0067**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseIsPatternInsteadOfSequenceEqualMA0128**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseJSRuntimeInvokeVoidAsyncWhenReturnValueIsNotUsedMA0120**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseLangwordInXmlCommentMA0154**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UsePatternMatchingForEqualityComparisonsMA0141**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UsePatternMatchingForEqualityComparisonsMA0142**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UsePatternMatchingForEqualityComparisonsMA0148**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UsePatternMatchingForEqualityComparisonsMA0149**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseRegexSourceGeneratorMA0110**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStringComparerMA0002**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStringComparisonMA0001**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStringComparisonMA0074**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStringCreateInsteadOfFormattableStringMA0111**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStringEqualsMA0006**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.UseStructLayoutAttributeMA0008**:  
* **org.openrewrite.csharp.recipes.meziantou.analyzer.ValidateArgumentsCorrectlyMA0050**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AbstractTypesShouldNotHaveConstructorsCA1012**: Constructors on abstract types can be called only by derived types. Because public constructors create instances of a type, and you cannot create instances of an abstract type, an abstract type that has a public constructor is incorrectly designed. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidConstArraysCA1861**: Constant arrays passed as arguments are not reused when called repeatedly, which implies a new array is created each time. Consider extracting them to 'static readonly' fields to improve performance if the passed array is not mutated within the called method. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidLengthCalculationWhenSlicingToEndCA1514**: An explicit length calculation can be error-prone and can be avoided when slicing to end of the buffer. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidUnreliableStreamReadCA2022**: A call to 'Stream.Read' may return fewer bytes than requested, resulting in unreliable code if the return value is not checked. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidUnsealedAttributesCA1813**: The .NET Framework class library provides methods for retrieving custom attributes. By default, these methods search the attribute inheritance hierarchy. Sealing the attribute eliminates the search through the inheritance hierarchy and can improve performance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidUnusedPrivateFieldsCA1823**: Private fields were detected that do not appear to be accessed in the assembly. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.AvoidZeroLengthArrayAllocationsCA1825**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpAvoidDuplicateElementInitializationCA2244**: Indexed elements in objects initializers must initialize unique elements. A duplicate index might overwrite a previous element initialization. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDisableRuntimeMarshallingCA1421**: This method uses runtime marshalling even when runtime marshalling is disabled, which can cause unexpected behavior differences at runtime due to different expectations of a type's native layout. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDisposeMethodsShouldCallBaseClassDisposeCA2215**: A type that implements System.IDisposable inherits from a type that also implements IDisposable. The Dispose method of the inheriting type does not call the Dispose method of the parent type. To fix a violation of this rule, call base.Dispose in your Dispose method. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotCompareSpanToNullCA2265**: Comparing a span to 'null' or 'default' might not do what you intended. 'default' and the 'null' literal are implicitly converted to 'Span<T>.Empty'. Remove the redundant comparison or make the code more explicit by using 'IsEmpty'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotGuardCallCA1853**: Do not guard 'Dictionary.Remove(key)' with 'Dictionary.ContainsKey(key)'. The former already checks whether the key exists, and will not throw if it does not. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotGuardCallCA1868**: Do not guard 'Add(item)' or 'Remove(item)' with 'Contains(item)' for the set. The former two already check whether the item exists and will return if it was added or removed. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotInitializeUnnecessarilyCA1805**: The .NET runtime initializes all fields of reference types to their default values before running the constructor. In most cases, explicitly initializing a field to its default value in a constructor is redundant, adding maintenance costs and potentially degrading performance (such as with increased assembly size), and the explicit initialization can be removed.  In some cases, such as with static readonly fields that permanently retain their default value, consider instead changing them to be constants or properties. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotPassNonNullableValueToArgumentNullExceptionThrowIfNullCA1871**: 'ArgumentNullException.ThrowIfNull' accepts an 'object', so passing a nullable struct may cause the value to be boxed. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotPassNonNullableValueToArgumentNullExceptionThrowIfNullCA2264**: 'ArgumentNullException.ThrowIfNull' throws when the passed argument is 'null'. Certain constructs like non-nullable structs, 'nameof()' and 'new' expressions are known to never be null, so 'ArgumentNullException.ThrowIfNull' will never throw. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotUseCountWhenAnyCanBeUsedCA1827**: For non-empty collections, Count() and LongCount() enumerate the entire sequence, while Any() stops at the first item or the first item that satisfies a condition. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotUseCountWhenAnyCanBeUsedCA1828**: For non-empty collections, CountAsync() and LongCountAsync() enumerate the entire sequence, while AnyAsync() stops at the first item or the first item that satisfies a condition. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDoNotUseEnumerableMethodsOnIndexableCollectionsInsteadUseTheCollectionDirectlyCA1826**: This collection is directly indexable. Going through LINQ here causes unnecessary allocations and CPU work. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDynamicInterfaceCastableImplementationCA2256**: Types attributed with 'DynamicInterfaceCastableImplementationAttribute' act as an interface implementation for a type that implements the 'IDynamicInterfaceCastable' type. As a result, it must provide an implementation of all of the members defined in the inherited interfaces, because the type that implements 'IDynamicInterfaceCastable' will not provide them otherwise. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpDynamicInterfaceCastableImplementationCA2257**: Since a type that implements 'IDynamicInterfaceCastable' may not implement a dynamic interface in metadata, calls to an instance interface member that is not an explicit implementation defined on this type are likely to fail at runtime. Mark new interface members 'static' to avoid runtime errors. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpEnumStorageShouldBeInt32CA1028**: An enumeration is a value type that defines a set of related named constants. By default, the System.Int32 data type is used to store the constant value. Although you can change this underlying type, it is not required or recommended for most scenarios. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpEnumsShouldHaveZeroValueCA1008**: The default value of an uninitialized enumeration, just as other value types, is zero. A nonflags-attributed enumeration should define a member by using the value of zero so that the default value is a valid value of the enumeration. If an enumeration that has the FlagsAttribute attribute applied defines a zero-valued member, its name should be ""None"" to indicate that no values have been set in the enumeration. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpForwardCancellationTokenToInvocationsCA2016**: Forward the 'CancellationToken' parameter to methods to ensure the operation cancellation notifications gets properly propagated, or pass in 'CancellationToken.None' explicitly to indicate intentionally not propagating the token. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpIdentifiersShouldNotContainUnderscoresCA1707**: By convention, identifier names do not contain the underscore (_) character. This rule checks namespaces, types, members, and parameters. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpMakeTypesInternalCA1515**: Unlike a class library, an application's API isn't typically referenced publicly, so types can be marked internal. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpMarkAllNonSerializableFieldsCA2235**: An instance field of a type that is not serializable is declared in a type that is serializable. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpMarkMembersAsStaticCA1822**: Members that do not access instance data or call instance methods can be marked as static. After you mark the methods as static, the compiler will emit nonvirtual call sites to these members. This can give you a measurable performance gain for performance-sensitive code. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpOverrideEqualsAndOperatorEqualsOnValueTypesCA1815**: For value types, the inherited implementation of Equals uses the Reflection library and compares the contents of all fields. Reflection is computationally expensive, and comparing every field for equality might be unnecessary. If you expect users to compare or sort instances, or to use instances as hash table keys, your value type should implement Equals. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferAsSpanOverSubstringCA1846**: 'AsSpan' is more efficient than 'Substring'. 'Substring' performs an O(n) string copy, while 'AsSpan' does not and has a constant cost. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferDictionaryContainsMethodsCA1841**: 'ContainsKey' is usually O(1), while 'Keys.Contains' may be O(n) in some cases. Additionally, many dictionary implementations lazily initialize the Keys collection to cut back on allocations. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferDictionaryTryMethodsOverContainsKeyGuardCA1854**: Prefer a 'TryGetValue' call over a Dictionary indexer access guarded by a 'ContainsKey' check. 'ContainsKey' and the indexer both would lookup the key under the hood, so using 'TryGetValue' removes the extra lookup. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferDictionaryTryMethodsOverContainsKeyGuardCA1864**: Prefer a 'TryAdd' call over an 'Add' call guarded by a 'ContainsKey' check. 'TryAdd' behaves the same as 'Add', except that when the specified key already exists, it returns 'false' instead of throwing an exception. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferGenericOverloadsCA2263**: Using a generic overload is preferable to the 'System.Type' overload when the type is known, promoting cleaner and more type-safe code with improved compile-time checks. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferHashDataOverComputeHashCA1850**: It is more efficient to use the static 'HashData' method over creating and managing a HashAlgorithm instance to call 'ComputeHash'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferIsEmptyOverCountCA1836**: For determining whether the object contains or not any items, prefer using 'IsEmpty' property rather than retrieving the number of items from the 'Count' property and comparing it to 0 or 1. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferLengthCountIsEmptyOverAnyCA1860**: Prefer using 'IsEmpty', 'Count' or 'Length' properties whichever available, rather than calling 'Enumerable.Any()'. The intent is clearer and it is more performant than using 'Enumerable.Any()' extension method. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpPreferStreamAsyncMemoryOverloadsCA1835**: 'Stream' has a 'ReadAsync' overload that takes a 'Memory<Byte>' as the first argument, and a 'WriteAsync' overload that takes a 'ReadOnlyMemory<Byte>' as the first argument. Prefer calling the memory based overloads, which are more efficient. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpRecommendCaseInsensitiveStringComparisonCA1862**: Avoid calling 'ToLower', 'ToUpper', 'ToLowerInvariant' and 'ToUpperInvariant' to perform case-insensitive string comparisons because they lead to an allocation. Instead, prefer calling the method overloads of 'Contains', 'IndexOf' and 'StartsWith' that take a 'StringComparison' enum value to perform case-insensitive comparisons. Switching to using an overload that takes a 'StringComparison' might cause subtle changes in behavior, so it's important to conduct thorough testing after applying the suggestion. Additionally, if a culturally sensitive comparison is not required, consider using 'StringComparison.OrdinalIgnoreCase'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpSpecifyCultureForToLowerAndToUpperCA1311**: Specify culture to help avoid accidental implicit dependency on current culture. Using an invariant version yields consistent results regardless of the culture of an application. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpSpecifyMarshalingForPInvokeStringArgumentsCA2101**: A platform invoke member allows partially trusted callers, has a string parameter, and does not explicitly marshal the string. This can cause a potential security vulnerability. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpStaticHolderTypesCA1052**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpTestForEmptyStringsUsingStringLengthCA1820**: Comparing strings by using the String.Length property or the String.IsNullOrEmpty method is significantly faster than using Equals. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpTestForNaNCorrectlyCA2242**: This expression tests a value against Single.Nan or Double.Nan. Use Single.IsNan(Single) or Double.IsNan(Double) to test the value. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseAsSpanInsteadOfRangeIndexerCA1831**: The Range-based indexer on string values produces a copy of requested portion of the string. This copy is usually unnecessary when it is implicitly used as a ReadOnlySpan or ReadOnlyMemory value. Use the AsSpan method to avoid the unnecessary copy. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseAsSpanInsteadOfRangeIndexerCA1832**: The Range-based indexer on array values produces a copy of requested portion of the array. This copy is usually unnecessary when it is implicitly used as a ReadOnlySpan or ReadOnlyMemory value. Use the AsSpan method to avoid the unnecessary copy. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseAsSpanInsteadOfRangeIndexerCA1833**: The Range-based indexer on array values produces a copy of requested portion of the array. This copy is often unwanted when it is implicitly used as a Span or Memory value. Use the AsSpan method to avoid the copy. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseLiteralsWhereAppropriateCA1802**: A field is declared static and read-only (Shared and ReadOnly in Visual Basic), and is initialized by using a value that is computable at compile time. Because the value that is assigned to the targeted field is computable at compile time, change the declaration to a const (Const in Visual Basic) field so that the value is computed at compile time instead of at runtime. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseOrdinalStringComparisonCA1309**: A string comparison operation that is nonlinguistic does not set the StringComparison parameter to either Ordinal or OrdinalIgnoreCase. By explicitly setting the parameter to either StringComparison.Ordinal or StringComparison.OrdinalIgnoreCase, your code often gains speed, becomes more correct, and becomes more reliable. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUsePropertyInsteadOfCountMethodWhenAvailableCA1829**: Enumerable.Count() potentially enumerates the sequence while a Length/Count property is a direct access. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseSearchValuesCA1870**: Using a cached 'SearchValues' instance is more efficient than passing values to 'IndexOfAny'/'ContainsAny' directly. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseSpanBasedStringConcatCA1845**: It is more efficient to use 'AsSpan' and 'string.Concat', instead of 'Substring' and a concatenation operator. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseSpanClearInsteadOfFillCA1855**: It is more efficient to use 'Clear', instead of 'Fill' with default value. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseStartsWithInsteadOfIndexOfComparisonWithZeroCodeFixCA1858**: It is both clearer and faster to use 'StartsWith' instead of comparing the result of 'IndexOf' to zero. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseStringContainsCharOverloadWithSingleCharactersCA1847**: 'string.Contains(char)' is available as a better performing overload for single char lookup. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.CSharpUseStringMethodCharOverloadWithSingleCharactersCA1865**: The char overload is a better performing overload than a string with a single char. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DefineAccessorsForAttributeArgumentsCA1019**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DoNotCallToImmutableCollectionOnAnImmutableCollectionValueCA2009**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DoNotCreateTaskCompletionSourceWithWrongArgumentsCA2247**: TaskCompletionSource has constructors that take TaskCreationOptions that control the underlying Task, and constructors that take object state that's stored in the task.  Accidentally passing a TaskContinuationOptions instead of a TaskCreationOptions will result in the call treating the options as state. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DoNotDirectlyAwaitATaskCA2007**: When an asynchronous method awaits a Task directly, continuation occurs in the same thread that created the task. Consider calling Task.ConfigureAwait(Boolean) to signal your intention for continuation. Call ConfigureAwait(false) on the task to schedule continuations to the thread pool, thereby avoiding a deadlock on the UI thread. Passing false is a good option for app-independent libraries. Calling ConfigureAwait(true) on the task has the same behavior as not explicitly calling ConfigureAwait. By explicitly calling this method, you're letting readers know you intentionally want to perform the continuation on the original synchronization context. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DoNotUseWhenAllOrWaitAllWithSingleArgumentCA1842**: Using 'WhenAll' with a single task may result in performance loss, await or return the task instead. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.DoNotUseWhenAllOrWaitAllWithSingleArgumentCA1843**: Using 'WaitAll' with a single task may result in performance loss, await or return the task instead. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.EnumWithFlagsAttributeCA1027**: An enumeration is a value type that defines a set of related named constants. Apply FlagsAttribute to an enumeration when its named constants can be meaningfully combined. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.EnumWithFlagsAttributeCA2217**: An externally visible enumeration is marked by using FlagsAttribute, and it has one or more values that are not powers of two or a combination of the other defined values on the enumeration. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.EquatableCA1066**: When a type T overrides Object.Equals(object), the implementation must cast the object argument to the correct type T before performing the comparison. If the type implements IEquatable<T>, and therefore offers the method T.Equals(T), and if the argument is known at compile time to be of type T, then the compiler can call IEquatable<T>.Equals(T) instead of Object.Equals(object), and no cast is necessary, improving performance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.EquatableCA1067**: When a type T implements the interface IEquatable<T>, it suggests to a user who sees a call to the Equals method in source code that an instance of the type can be equated with an instance of any other type. The user might be confused if their attempt to equate the type with an instance of another type fails to compile. This violates the "principle of least surprise". 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.ExceptionsShouldBePublicCA1064**: An internal exception is visible only inside its own internal scope. After the exception falls outside the internal scope, only the base exception can be used to catch the exception. If the internal exception is inherited from T:System.Exception, T:System.SystemException, or T:System.ApplicationException, the external code will not have sufficient information to know what to do with the exception. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.ImplementStandardExceptionConstructorsCA1032**: Failure to provide the full set of constructors can make it difficult to correctly handle exceptions. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.InstantiateArgumentExceptionsCorrectlyCA2208**: A call is made to the default (parameterless) constructor of an exception type that is or derives from ArgumentException, or an incorrect string argument is passed to a parameterized constructor of an exception type that is or derives from ArgumentException. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.InterfaceMethodsShouldBeCallableByChildTypesCA1033**: An unsealed externally visible type provides an explicit method implementation of a public interface and does not provide an alternative externally visible method that has the same name. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.MarkAttributesWithAttributeUsageCA1018**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.MarkTypesWithSerializableCA2237**: To be recognized by the common language runtime as serializable, types must be marked by using the SerializableAttribute attribute even when the type uses a custom serialization routine through implementation of the ISerializable interface. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.OperatorOverloadsHaveNamedAlternatesCA2225**: An operator overload was detected, and the expected named alternative method was not found. The named alternative member provides access to the same functionality as the operator and is provided for developers who program in languages that do not support overloaded operators. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.OperatorsShouldHaveSymmetricalOverloadsCA2226**: A type implements the equality or inequality operator and does not implement the opposite operator. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.OverloadOperatorEqualsOnOverridingValueTypeEqualsCA2231**: In most programming languages there is no default implementation of the equality operator (==) for value types. If your programming language supports operator overloads, you should consider implementing the equality operator. Its behavior should be identical to that of Equals. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.OverrideMethodsOnComparableTypesCA1036**: A public or protected type implements the System.IComparable interface. It does not override Object.Equals nor does it overload the language-specific operator for equality, inequality, less than, less than or equal, greater than or greater than or equal. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.ParameterNamesShouldMatchBaseDeclarationCA1725**: Consistent naming of parameters in an override hierarchy increases the usability of the method overrides. A parameter name in a derived method that differs from the name in the base declaration can cause confusion about whether the method is an override of the base method or a new overload of the method. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.PreferConstCharOverConstUnitStringCA1834**: 'StringBuilder.Append(char)' is more efficient than 'StringBuilder.Append(string)' when the string is a single character. When calling 'Append' with a constant, prefer using a constant char rather than a constant string containing one character. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.PreferConvertToHexStringOverBitConverterCA1872**: Use 'Convert.ToHexString' or 'Convert.ToHexStringLower' when encoding bytes to a hexadecimal string representation. These methods are more efficient and allocation-friendly than using 'BitConverter.ToString' in combination with 'String.Replace' to replace dashes and 'String.ToLower'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.PreferStringContainsOverIndexOfCA2249**: Calls to 'string.IndexOf' where the result is used to check for the presence/absence of a substring can be replaced by 'string.Contains'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.PreferTypedStringBuilderAppendOverloadsCA1830**: StringBuilder.Append and StringBuilder.Insert provide overloads for multiple types beyond System.String.  When possible, prefer the strongly-typed overloads over using ToString() and the string-based overload. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.ProvidePublicParameterlessSafeHandleConstructorCA1419**: Providing a parameterless constructor that is as visible as the containing type for a type derived from 'System.Runtime.InteropServices.SafeHandle' enables better performance and usage with source-generated interop solutions. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.RemoveEmptyFinalizersCA1821**: Finalizers should be avoided where possible, to avoid the additional performance overhead involved in tracking object lifetime. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.RethrowToPreserveStackDetailsCA2200**:  
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.SealInternalTypesCA1852**: When a type is not accessible outside its assembly and has no subtypes within its containing assembly, it can be safely sealed. Sealing types can improve performance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.SealMethodsThatSatisfyPrivateInterfacesCA2119**: An inheritable public type provides an overridable method implementation of an internal (Friend in Visual Basic) interface. To fix a violation of this rule, prevent the method from being overridden outside the assembly. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.TypesThatOwnDisposableFieldsShouldBeDisposableCA1001**: A class declares and implements an instance field that is a System.IDisposable type, and the class does not implement IDisposable. A class that declares an IDisposable field indirectly owns an unmanaged resource and should implement the IDisposable interface. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UriParametersShouldNotBeStringsCA1054**: This rule assumes that the parameter represents a Uniform Resource Identifier (URI). A string representation or a URI is prone to parsing and encoding errors, and can lead to security vulnerabilities. 'System.Uri' class provides these services in a safe and secure manner. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseCancellationTokenThrowIfCancellationRequestedCA2250**: 'ThrowIfCancellationRequested' automatically checks whether the token has been canceled, and throws an 'OperationCanceledException' if it has. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseEnvironmentMembersCA1837**: 'Environment.ProcessId' is simpler and faster than 'Process.GetCurrentProcess().Id'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseEnvironmentMembersCA1839**: 'Environment.ProcessPath' is simpler and faster than 'Process.GetCurrentProcess().MainModule.FileName'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseEnvironmentMembersCA1840**: 'Environment.CurrentManagedThreadId' is simpler and faster than 'Thread.CurrentThread.ManagedThreadId'. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseExceptionThrowHelpersCA1510**: Throw helpers are simpler and more efficient than an if block constructing a new exception instance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseExceptionThrowHelpersCA1511**: Throw helpers are simpler and more efficient than an if block constructing a new exception instance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseExceptionThrowHelpersCA1512**: Throw helpers are simpler and more efficient than an if block constructing a new exception instance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseExceptionThrowHelpersCA1513**: Throw helpers are simpler and more efficient than an if block constructing a new exception instance. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseNameOfInPlaceOfStringCA1507**: Using nameof helps keep your code valid when refactoring. 
* **org.openrewrite.csharp.recipes.microsoft.codeanalysis.netanalyzers.UseStringEqualsOverStringCompareCA2251**: It is both clearer and likely faster to use 'string.Equals' instead of comparing the result of 'string.Compare' to zero. 
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddBracesRCS1001**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddBracesRCS1007**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddBracesRCS1126**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddBracesToIfElseRCS1003**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddExceptionToDocumentationCommentRCS1140**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddOrRemoveParenthesesWhenCreatingNewObjectRCS1050**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddOrRemoveTrailingCommaRCS1260**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddParagraphToDocumentationCommentRCS1226**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AddParenthesesWhenNecessaryRCS1123**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AnonymousMethodRCS1048**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AssignmentExpressionRCS1089**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AssignmentExpressionRCS1114**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AttributeArgumentListRCS1039**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AvoidBoxingOfValueTypeRCS1198**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AvoidNullReferenceExceptionRCS1202**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.AwaitExpressionRCS1090**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BaseArgumentListRCS1205**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BaseTypeRCS1182**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1098**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1113**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1143**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1145**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1156**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1165**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1166**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1190**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1195**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1199**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1233**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1240**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BinaryExpressionRCS1268**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BlockRCS1031**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.BlockRCS1171**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.CaseSwitchLabelRCS1069**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.CastExpressionRCS1257**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ClassDeclarationRCS1102**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ClassDeclarationRCS1108**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ClassDeclarationRCS1194**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ClassDeclarationRCS1203**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ClassDeclarationRCS1225**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.CompositeEnumValueContainsUndefinedFlagRCS1157**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConditionalExpressionRCS1084**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConditionalExpressionRCS1104**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConditionalExpressionRCS1206**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConditionalExpressionRCS1238**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConstructorDeclarationRCS1071**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConstructorDeclarationRCS1074**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConstructorDeclarationRCS1160**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ConvertLambdaExpressionBodyToExpressionBodyRCS1021**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DeclareEachAttributeSeparatelyRCS1052**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DeclareEnumMemberWithZeroValueRCS1135**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DeclareTypeInsideNamespaceRCS1110**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DefaultExpressionRCS1244**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DestructorDeclarationRCS1106**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DirectiveTriviaRCS1222**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DisposeResourceAsynchronouslyRCS1261**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DoStatementRCS1063**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DocumentRCS1093**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DocumentationCommentRCS1139**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.DuplicateWordInCommentRCS1243**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ElseClauseRCS1006**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ElseClauseRCS1040**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EmptyStatementRCS1038**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EndRegionDirectiveTriviaRCS1189**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumDeclarationRCS1154**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumDeclarationRCS1161**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumDeclarationRCS1237**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumMemberDeclarationRCS1191**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumMemberDeclarationRCS1234**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.EnumMemberDeclarationRCS1254**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ExpressionRCS1051**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ExpressionRCS1215**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ExtractMemberToNewDocumentRCS1060**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.FinallyClauseRCS1066**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ForStatementRCS1064**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1061**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1073**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1103**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1173**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1208**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1236**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.IfStatementRCS1255**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ImplementNonGenericCounterpartRCS1241**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InitializerRCS1035**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InterpolatedStringRCS1214**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InterpolatedStringRCS1217**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InterpolationRCS1105**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvalidArgumentNullCheckRCS1256**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1080**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1097**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1107**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1112**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1196**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1200**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.InvocationExpressionRCS1267**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.LocalDeclarationStatementRCS1124**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.LockStatementRCS1059**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MarkLocalVariableAsConstRCS1118**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MarkTypeWithDebuggerDisplayAttributeRCS1223**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1018**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1019**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1034**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1055**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1132**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1169**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1170**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1181**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1187**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.MemberDeclarationRCS1224**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.NamespaceDeclarationRCS1072**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.NamespaceDeclarationRCS1094**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.NormalizeNullCheckProviderRCS1248**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.NormalizeUsageOfInfiniteLoopRCS1252**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ObjectCreationExpressionRCS1204**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OptimizeLinqMethodCallRCS1077**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OptimizeLinqMethodCallRCS1246**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OptimizeMethodCallRCS1235**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OptimizeStringBuilderAppendCallRCS1197**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OrderElementsInDocumentationCommentRCS1232**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.OrderTypeParameterConstraintsRCS1209**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ParameterNameDiffersFromBaseRCS1168**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ParameterRCS1193**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ParameterRCS1231**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ParameterRCS1242**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ParenthesizedExpressionRCS1032**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.PropertyDeclarationRCS1188**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RawStringLiteralRCS1262**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RawStringLiteralRCS1266**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RegionDirectiveTriviaRCS1091**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveBracesFromIfElseRCS1004**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveBracesRCS1002**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveElementInDocumentationCommentRCS1228**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveElementInDocumentationCommentRCS1263**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveEmptyInitializerRCS1041**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveEmptySyntaxRCS1259**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveEnumDefaultBaseTypeRCS1042**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveOriginalExceptionRCS1044**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemovePartialModifierFromTypeWithSinglePartRCS1043**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveRedundantAssignmentRCS1212**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveRedundantAsyncAwaitRCS1174**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveRedundantBooleanLiteralRCS1033**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveRedundantCastRCS1151**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveRedundantCatchBlockRCS1265**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveUnnecessaryBracesRCS1251**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.RemoveUnnecessaryElseRCS1211**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ReturnCompletedTaskInsteadOfNullRCS1210**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SimplifyBooleanComparisonRCS1049**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SimplifyCodeBranchingRCS1218**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SimplifyLogicalNegationRCS1068**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SimplifyNestedUsingStatementRCS1005**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SimplifyNullableOfTRCS1020**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SingleLineDocumentationCommentTriviaRCS1100**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SingleLineDocumentationCommentTriviaRCS1101**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SingleLineDocumentationCommentTriviaRCS1141**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SingleLineDocumentationCommentTriviaRCS1142**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SingleLineDocumentationCommentTriviaRCS1253**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.StatementRCS1133**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.StatementRCS1134**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.StatementRCS1180**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.StatementRCS1201**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SwitchSectionRCS1070**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SwitchSectionRCS1099**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SwitchSectionRCS1111**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.SwitchSectionRCS1136**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.TokenRCS1249**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.TypeParameterRCS1164**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.TypeRCS1159**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnnecessaryAssignmentRCS1179**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnnecessaryEnumFlagRCS1258**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnnecessaryExplicitUseOfEnumeratorRCS1230**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnnecessaryUnsafeContextRCS1216**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnnecessaryUsageOfVerbatimStringLiteralRCS1192**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnusedMemberRCS1213**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UnusedParameterRCS1163**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseAnonymousFunctionOrMethodGroupRCS1207**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseAsyncAwaitRCS1229**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseAutoPropertyRCS1085**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseBlockBodyOrExpressionBodyRCS1016**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseCoalesceExpressionRCS1128**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseCompoundAssignmentRCS1058**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseConditionalAccessRCS1146**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseEmptyStringLiteralOrStringEmptyRCS1078**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseExplicitTypeInsteadOfVarInForEachRCS1009**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseExplicitTypeInsteadOfVarRCS1008**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseExplicitTypeInsteadOfVarRCS1012**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseExplicitlyOrImplicitlyTypedArrayRCS1014**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseHasFlagMethodOrBitwiseOperatorRCS1096**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseImplicitOrExplicitObjectCreationRCS1250**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseIsOperatorInsteadOfAsOperatorRCS1172**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseNameOfOperatorRCS1015**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UsePatternMatchingInsteadOfAsAndNullCheckRCS1221**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UsePatternMatchingInsteadOfIsAndCastRCS1220**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UsePredefinedTypeRCS1013**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseRegexInstanceInsteadOfStaticMethodRCS1186**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseStringComparisonRCS1155**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseVarInsteadOfExplicitTypeRCS1010**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseVarInsteadOfExplicitTypeRCS1176**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseVarInsteadOfExplicitTypeRCS1177**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UseVarOrExplicitTypeRCS1264**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.UsingDirectiveRCS1056**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.ValidateArgumentsCorrectlyRCS1227**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.VariableDeclarationRCS1081**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.VariableDeclaratorRCS1129**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.WhileStatementRCS1065**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.WhileStatementRCS1239**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.WhitespaceTriviaRCS1036**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.WhitespaceTriviaRCS1037**:  
* **org.openrewrite.csharp.recipes.roslynator.analyzers.XmlNodeRCS1247**:  
* **org.openrewrite.csharp.recipes.stylecop.analyzers.IndentationSA1137**: Elements at the same level in the syntax tree should have the same indentation. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.PropertySummaryDocumentationSA1623**: The documentation text within a C# property’s <summary> tag does not match the accessors within the property. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.PropertySummaryDocumentationSA1624**: The documentation text within a C# property’s <summary> tag takes into account all of the accessors within the property, but one of the accessors has limited access. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RemoveRegionSA1123**: The C# code contains a region within the body of a code element. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RemoveRegionSA1124**: The C# code contains a region. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToLowerCaseSA1306**: The name of a field in C# does not begin with a lower-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToLowerCaseSA1312**: The name of a variable in C# does not begin with a lower-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToLowerCaseSA1313**: The name of a parameter in C# does not begin with a lower-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToUpperCaseSA1300**: The name of a C# element does not begin with an upper-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToUpperCaseSA1303**: The name of a constant C# field should begin with an upper-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToUpperCaseSA1304**: The name of a non-private readonly C# field should being with an upper-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToUpperCaseSA1307**: The name of a public or internal field in C# does not begin with an upper-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.RenameToUpperCaseSA1311**: The name of a static readonly field does not begin with an upper-case letter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1003SA1003**: The spacing around an operator symbol is incorrect, within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1004SA1004**: A line within a documentation header above a C# element does not begin with a single space. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1005SA1005**: A single-line comment within a C# code file does not begin with a single space. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1018SA1018**: A nullable type symbol within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1025SA1025**: The code contains multiple whitespace characters in a row. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1027SA1027**: The code contains a tab or space character which is not consistent with the current project settings. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1028SA1028**: There should not be any whitespace at the end of a line of code. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1100SA1100**: A call to a member from an inherited class begins with 'base.', and the local class does not contain an override or implementation of the member. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1101SA1101**: A call to an instance member of the local class or a base class is not prefixed with 'this.', within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1102SA1102**: A C# query clause does not begin on the same line as the previous clause, or on the next line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1103SA1103**: The clauses within a C# query expression are not all placed on the same line, and each clause is not placed on its own line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1104SA1105SA1104**: A clause within a C# query expression begins on the same line as the previous clause, when the previous clause spans across multiple lines. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1104SA1105SA1105**: A clause within a C# query expression spans across multiple lines, and does not begin on its own line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1106SA1106**: The C# code contains an extra semicolon. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1107SA1107**: The C# code contains more than one statement on a single line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1116SA1116**: The parameters to a C# method or indexer call or declaration span across multiple lines, but the first parameter does not start on the line after the opening bracket. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1119SA1119**: A C# statement contains parenthesis which are unnecessary and should be removed. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1119SA1119_p**: A C# statement contains parenthesis which are unnecessary and should be removed. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1120SA1120**: The C# comment does not contain any comment text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1121SA1121**: The code uses one of the basic C# types, but does not use the built-in alias for the type. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1122SA1122**: The C# code includes an empty string, written as "". 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1127SA1127**: Each type constraint clause for a generic type parameter should be listed on a line of code by itself. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1128SA1128**: A constructor initializer, including the colon character, should be on its own line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1129SA1129**: When creating a new instance of a value type T, the syntax 'default(T)' is functionally equivalent to the syntax 'new T()'. To avoid confusion regarding the behavior of the resulting instance, the first form is preferred. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1130SA1130**: Lambda expressions are more succinct and easier to read than anonymous methods, so they should are preferred whenever the two are functionally equivalent. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1131SA1131**: When a comparison is made between a variable and a literal, the variable should be placed on the left-hand-side to maximize readability. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1132SA1132**: Each field should be declared on its own line, in order to clearly see each field of a type and allow for proper documentation of the behavior of each field. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1133SA1133**: Each attribute usage should be placed in its own set of square brackets for maximum readability. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1134SA1134**: Each attribute should be placed on its own line of code. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1135SA1135**: All using directives should be qualified. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1136SA1136**: Enum values should be placed on their own lines for maximum readability. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1139SA1139**: Use literal suffix notation instead of casting, in order to improve readability, avoid bugs related to illegal casts and ensure that optimal IL is produced. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1205SA1205**: The partial element does not have an access modifier defined. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1206SA1206**: The keywords within the declaration of an element do not follow a standard ordering scheme. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1207SA1207**: The keyword '{0}' is positioned after the keyword '{1}' within the declaration of a {0} {1} C# element. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1212SA1213SA1212**: A get accessor appears after a set accessor within a property or indexer. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1212SA1213SA1213**: An add accessor appears after a remove accessor within an event. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1302SA1302**: The name of a C# interface does not begin with the capital letter I. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1308SA1308**: A field name in C# is prefixed with 'm_', 's_', or 't_'. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1309SA1309**: A field name in C# begins with an underscore. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1310SA1310**: A field name in C# contains an underscore. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1314SA1314**: The name of a C# type parameter does not begin with the capital letter T. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1400SA1400**: The access modifier for a C# element has not been explicitly defined. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1402SA1402**: A C# code file contains more than one unique type. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1404SA1404**: A Code Analysis SuppressMessage attribute does not include a justification. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1407SA1408SA1407**: A C# statement contains a complex arithmetic expression which omits parenthesis around operators. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1407SA1408SA1408**: A C# statement contains a complex conditional expression which omits parenthesis around operators. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1410SA1411SA1410**: A call to a C# anonymous method does not contain any method parameters, yet the statement still includes parenthesis. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1410SA1411SA1411**: TODO. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1412SA1412**: Source files should be saved using the UTF-8 encoding with a byte order mark 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1413SA1413**: A multi-line initializer in a C# code file should use a comma on the last line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1500SA1500**: The opening or closing brace within a C# statement, element, or expression is not placed on its own line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1501SA1501**: A C# statement containing opening and closing braces is written completely on a single line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1502SA1502**: A C# element containing opening and closing braces is written completely on a single line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1503SA1503**: The opening and closing braces for a C# statement have been omitted. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1503SA1519**: The opening and closing braces for a multi-line C# statement have been omitted. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1503SA1520**: The opening and closing braces of a chained if/else if/else construct were included for some clauses, but omitted for others. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1504SA1504**: Within a C# property, indexer or event, at least one of the child accessors is written on a single line, and at least one of the child accessors is written across multiple lines. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1505SA1505**: An opening brace within a C# element, statement, or expression is followed by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1506SA1506**: An element documentation header above a C# element is followed by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1507SA1507**: The C# code contains multiple blank lines in a row. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1508SA1508**: A closing brace within a C# element, statement, or expression is preceded by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1509SA1509**: An opening brace within a C# element, statement, or expression is preceded by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1510SA1510**: Chained C# statements are separated by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1511SA1511**: The while footer at the bottom of a do-while statement is separated from the statement by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1512SA1512**: A single-line comment within C# code is followed by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1513SA1513**: A closing brace within a C# element, statement, or expression is not followed by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1514SA1514**: An element documentation header above a C# element is not preceded by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1515SA1515**: A single-line comment within C# code is not preceded by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1516SA1516**: Adjacent C# elements are not separated by a blank line. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1517SA1517**: The code file has blank lines at the start. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1518SA1518**: Code should not contain blank lines at the end of the file 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1609SA1610SA1609**: The XML header documentation for a C# property does not contain a <value> tag. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1609SA1610SA1610**: The XML header documentation for a C# property contains an empty <value> tag. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1615SA1616SA1615**: A C# element is missing documentation for its return value. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1615SA1616SA1616**: The <returns> tag within a C# element's documentation header is empty. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1617SA1617**: A C# code element does not contain a return value, or returns void, but the documentation header for the element contains a <returns> tag. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1626SA1626**: The C# code contains a single-line comment which begins with three forward slashes in a row. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1629SA1629**: A section of the XML header documentation for a C# element does not end with a period. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1642SA1643SA1642**: The XML documentation header for a C# constructor does not contain the appropriate summary text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1642SA1643SA1643**: The XML documentation header for a C# finalizer does not contain the appropriate summary text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SA1651SA1651**: The element documentation contains a <placeholder> element. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SX1101SX1101**: A call to an instance member of the local class or a base class is prefixed with `this.`. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SX1309SX1309**: A field name in C# does not begin with an underscore. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SX1309SX1309S**: A static field name in C# does not begin with an underscore. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1600**: A C# code element is missing a documentation header. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1601**: A C# partial element is missing a documentation header. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1602**: An item within a C# enumeration is missing an Xml documentation header. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1633**: A C# code file is missing a standard file header. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1634**: The file header at the top of a C# code file is missing a copyright tag. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1635**: The file header at the top of a C# code file is missing copyright text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1636**: The file header at the top of a C# code file does not contain the appropriate copyright text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1637**: The file header at the top of a C# code file is missing the file name. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1638**: The file attribute within copyright tag of the file header at the top of a C# code file does not contain the name of the file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1639**: The file header at the top of a C# code file does not contain a filled-in summary tag. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1640**: The file header at the top of a C# code file does not contain company name text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1641**: The file header at the top of a C# code file does not contain the appropriate company name text. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.SettingsFileSA1649**: The file name of a C# code file does not match the first type declared in the file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1000**: The spacing around a C# keyword is incorrect. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1001**: The spacing around a comma is incorrect, within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1002**: The spacing around a semicolon is incorrect, within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1006**: A C# preprocessor-type keyword is preceded by space. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1007**: The operator keyword within a C# operator overload method is not followed by any whitespace. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1008**: An opening parenthesis within a C# statement is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1009**: A closing parenthesis within a C# statement is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1010**: An opening square bracket within a C# statement is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1011**: A closing square bracket within a C# statement is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1012**: An opening brace within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1013**: A closing brace within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1014**: An opening generic bracket within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1015**: A closing generic bracket within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1016**: An opening attribute bracket within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1017**: A closing attribute bracket within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1019**: The spacing around a member access symbol is incorrect, within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1020**: An increment or decrement symbol within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1021**: A negative sign within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1022**: A positive sign within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1023**: A dereference symbol or an access-of symbol within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1024**: A colon within a C# element is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1026**: An implicitly typed array allocation within a C# code file is not spaced correctly. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1110**: The opening parenthesis or bracket is not placed on the same line as the method/indexer/attribute/array name. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1111**: The closing parenthesis or bracket in a call to or declaration of a C# method/indexer/attribute/array/constructor/delegate is not placed on the same line as the last parameter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1112**: The closing parenthesis or bracket in a call to a C# method or indexer, or the declaration of a method or indexer, is not placed on the same line as the opening bracket when the element does not take any parameters. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.TokenSpacingSA1113**: A comma between two parameters in a call to a C# method or indexer, or in the declaration of a method or indexer, is not placed on the same line as the previous parameter. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1200**: A C# using directive is placed outside of a namespace element. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1208**: A using directive which declares a member of the 'System' namespace appears after a using directive which declares a member of a different namespace, within a C# code file. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1209**: A using-alias directive is positioned before a regular using directive. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1210**: The using directives within a C# code file are not sorted alphabetically by namespace. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1211**: The using-alias directives within a C# code file are not sorted alphabetically by alias name. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1216**: A using static directive is positioned before a regular or after an alias using directive. 
* **org.openrewrite.csharp.recipes.stylecop.analyzers.UsingSA1217**: All using static directives should be ordered alphabetically. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AddAttributeListFixWPF0130**: Add [TemplatePart] to the type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AddAttributeListFixWPF0176**: StyleTypedProperty is missing. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AddDefaultMemberFixWPF0070**: Add default field to converter. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AttachedPropertyBrowsableForTypeArgumentFixWPF0034**: Use correct argument for [AttachedPropertyBrowsableForType]. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AttachedPropertyBrowsableForTypeAttributeFixWPF0033**: Add [AttachedPropertyBrowsableForType]. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.AttachedPropertyBrowsableForTypeAttributeFixWPF0071**: Add ValueConversion attribute. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.CastFixWPF0019**: Cast sender to correct type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.CastFixWPF0020**: Cast value to correct type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.CastFixWPF0021**: Cast sender to correct type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.CastFixWPF0022**: Cast value to correct type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ChangeTypeofFixWPF0081**: MarkupExtensionReturnType must use correct return type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ComponentResourceKeyFixWPF0140**: Use containing type when creating a ComponentResourceKey. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ComponentResourceKeyFixWPF0141**: Use containing member as key when creating a ComponentResourceKey. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ConstructorArgumentAttributeArgumentFixWPF0082**: [ConstructorArgument] must match the name of the constructor parameter. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ConstructorArgumentAttributeFixWPF0083**: Add [ConstructorArgument] for the property. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ConvertToLambdaFixWPF0023**: The callback is trivial, convert to lambda for better locality. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.DocumentationFixWPF0060**: Backing member for DependencyProperty should have standard documentation text. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.DocumentationFixWPF0061**: Accessor method for attached property should have standard documentation text. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.DocumentationFixWPF0062**: Property changed callback should have standard documentation text. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.DocumentationFixWPF0108**: Backing member for RoutedEvent should have standard documentation text. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MakeFieldStaticReadonlyFixWPF0030**: Backing field for a DependencyProperty should be static and readonly. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MakeFieldStaticReadonlyFixWPF0107**: Backing member for a RoutedEvent should be static and readonly. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MakeFieldStaticReadonlyFixWPF0123**: Backing field for a RoutedCommand should be static and readonly. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MakeNullableFixWPF0024**: Parameter type should be nullable. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MarkupExtensionReturnTypeAttributeFixWPF0080**: Add MarkupExtensionReturnType attribute. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.MoveFixWPF0031**: DependencyPropertyKey member must be declared before DependencyProperty member. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RegisterRoutedCommandFixWPF0122**: Register containing type as owner for routed command. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0001**: A dependency property's backing field should be named with the name it is registered with suffixed by 'Property'.  This is the convention in the framework. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0002**: A DependencyPropertyKey's backing field must be named with the name it is registered with suffixed by 'PropertyKey'. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0003**: A CLR property accessor for a DependencyProperty must have the same name as the DependencyProperty is registered with. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0004**: CLR methods for accessing a DependencyProperty must have names matching the name the DependencyProperty is registered with. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0005**: Name of PropertyChangedCallback should match registered name. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0006**: Name of CoerceValueCallback should match registered name. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0007**: Name of ValidateValueCallback should match registered name. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0090**: Name the invoked method OnEventName. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0091**: Name the invoked method OnEventName. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0100**: A routed event's backing field should be named with the name it is registered with suffixed by 'Event'. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.RenameMemberFixWPF0102**: Name of the event should match registered name. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseContainingTypeFixWPF0011**: When registering a DependencyProperty register containing type as owner type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseContainingTypeFixWPF0101**: When registering a RoutedEvent register containing type as owner type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseContainingTypeFixWPF0121**: Register containing type as owner for routed command. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseCorrectDelegateFixWPF0092**: Use correct handler type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseDependencyPropertyKeyFixWPF0040**: A readonly DependencyProperty must be set with DependencyPropertyKey. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseNameofFixWPF0120**: Register containing member name as name for routed command. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseNameofFixWPF0150**: Use nameof() as it is less fragile than string literal. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseNameofFixWPF0151**: Use nameof() as it is less fragile than constant. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseRegisteredTypeFixWPF0012**: CLR property type should match registered type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseRegisteredTypeFixWPF0013**: CLR accessor for attached property must match registered type. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseSetCurrentValueFixWPF0041**: Prefer setting mutable dependency properties using SetCurrentValue. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseSetValueFixWPF0035**: Use SetValue in setter. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.UseSetValueFixWPF0043**: Set DataContext and Style using SetValue. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ValueConversionAttributeArgumentFixWPF0072**: ValueConversion must use correct types. 
* **org.openrewrite.csharp.recipes.wpfanalyzers.ValueConversionAttributeFixWPF0073**: Add ValueConversion attribute (unknown types). 
* **org.openrewrite.csharp.recipes.wpfanalyzers.XmlnsDefinitionFixWPF0052**: XmlnsDefinitions does not map all namespaces with public types. 
* **org.openrewrite.node.dependency-vulnerability-check**: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version. If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from the GitHub Security Advisory Database. 
* **org.openrewrite.node.migrate.buffer.replace-deprecated-slice**: Replace deprecated `buffer.slice()` calls with `buffer.subarray()` for compatibility with Uint8Array.prototype.slice(). 
* **org.openrewrite.node.migrate.buffer.replace-slow-buffer**: Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method. 
* **org.openrewrite.node.migrate.crypto.replace-crypto-fips**: Replace deprecated `crypto.fips` property access with `crypto.getFips()` for reads and `crypto.setFips(value)` for writes. 
* **org.openrewrite.node.migrate.crypto.replace-hash-constructor**: Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods. 
* **org.openrewrite.node.migrate.fs.replace-dirent-path**: Replaces deprecated `dirent.path` property access with `dirent.parentPath` on `fs.Dirent` instances to address DEP0178 deprecation. 
* **org.openrewrite.node.migrate.fs.replace-fs-access-constants**: Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace. 
* **org.openrewrite.node.migrate.fs.replace-fs-truncate-fd**: Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number). 
* **org.openrewrite.node.migrate.fs.replace-stats-constructor**: Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined. 
* **org.openrewrite.node.migrate.http.replace-outgoing-message-headers**: Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation. 
* **org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts**: Remove calls to deprecated `net._setSimultaneousAccepts()` which was an undocumented internal function that is no longer necessary. 
* **org.openrewrite.node.migrate.process.coerce-process-exit-code**: Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer. 
* **org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants**: Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`. 
* **org.openrewrite.node.migrate.stream.replace-internal-modules**: Replace deprecated internal stream module imports like `require('node:_stream_readable')` with the public `node:stream` module. 
* **org.openrewrite.node.migrate.tls.replace-internal-modules**: Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module. 
* **org.openrewrite.node.migrate.upgrade-node-22**: Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions. 
* **org.openrewrite.node.migrate.upgrade-node-24**: Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations. 
* **org.openrewrite.node.migrate.util.remove-promisify-on-promise**: Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174). 
* **org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module**: Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`. 
* **org.openrewrite.node.migrate.util.replace-util-extend**: Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior. 
* **org.openrewrite.node.migrate.util.replace-util-log**: Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not. 
* **org.openrewrite.node.migrate.util.use-native-type-checking-methods**: The `util` module's type-checking methods have been removed in Node 22. 
* **org.openrewrite.node.migrate.zlib.replace-bytes-read**: Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`. 
* **org.openrewrite.node.security.remove-redundant-overrides**: Removes overrides/resolutions from package.json that are redundant because the dependency tree already resolves to the overridden version or higher. 
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