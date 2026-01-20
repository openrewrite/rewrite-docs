---
description: JUnit Jupiter OpenRewrite recipes.
---

# JUnit Jupiter

_Best practices for JUnit Jupiter tests._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Clean Up Assertions](./cleanupassertions.md)
* [Exclude JUnit 4, unless Testcontainers is used](./excludejunit4unlessusingtestcontainers.md)
* [JUnit 5 best practices](./junit5bestpractices.md)
* [JUnit Jupiter migration from JUnit 4.x](./junit4to5migration.md)
* [Transform `Assume` methods to `Assumptions`](./assumenotnulltoassumptionsrecipes.md)
* [Upgrade Surefire Plugin](./upgradesurefireplugin.md)
* [Upgrade to JUnit 5.13](./upgradetojunit513.md)
* [Upgrade to JUnit 5.14](./upgradetojunit514.md)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](./migrateassumptions.md)
* [Use `MatcherAssert#assertThat(..)`](./usehamcrestassertthat.md)
* [Use Mockito JUnit Jupiter extension](./usemockitoextension.md)
* [Use OkHttp 3 MockWebServer for JUnit 5](./upgradeokhttpmockwebserver.md)
* [Use Vert.x JUnit 5 Extension](./vertxunittovertxjunit5.md)

## Recipes

* [Add Hamcrest JUnit dependency](./addhamcrestjunitdependency.md)
* [Add JUnit Jupiter dependencies](./addjupiterdependencies.md)
* [Add missing `@BeforeEach`, `@AfterEach`, `@Test` to overriding methods](./addmissingtestbeforeafterannotations.md)
* [Add missing `@ParameterizedTest` annotation when `@ValueSource` is used or replace `@Test` with `@ParameterizedTest`](./addparameterizedtestannotation.md)
* [Applies JUnit 5 `assertThrows` on last statement in lambda block only](./assertthrowsonlaststatement.md)
* [Cleanup JUnit imports](./cleanupjunitimports.md)
* [Gradle `Test` use JUnit Jupiter](./gradleusejunitjupiter.md)
* [Handle the usage of ExternalResourceRule fields using @ExtendWith(ExternalResourceSupport.class)](./handleexternalresourcerules.md)
* [JUnit 4 `@Category` to JUnit Jupiter `@Tag`](./categorytotag.md)
* [JUnit 4 `@Rule Timeout` to JUnit Jupiter's `Timeout`](./timeoutruletoclassannotation.md)
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](./runnertoextension.md)
* [JUnit 4 `@RunWith(Enclosed.class)` to JUnit Jupiter `@Nested`](./enclosedtonested.md)
* [JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests](./parameterizedrunnertoparameterized.md)
* [JUnit 4 `Assert` To JUnit Jupiter `Assertions`](./asserttoassertions.md)
* [JUnit 4 `ExpectedException` To JUnit Jupiter's `assertThrows()`](./expectedexceptiontoassertthrows.md)
* [JUnit 4 `MockitoJUnit` to JUnit Jupiter `MockitoExtension`](./mockitojunittomockitoextension.md)
* [JUnit 5 inner test classes should be annotated with `@Nested`](./addmissingnested.md)
* [JUnit TestName @Rule to JUnit Jupiter TestInfo](./testruletotestinfo.md)
* [Make `@TempDir` fields non final](./tempdirnonfinal.md)
* [Make lifecycle methods non private](./lifecyclenonprivate.md)
* [Migrate JUnit 4 `@Test` annotations to JUnit 5](./updatetestannotation.md)
* [Migrate JUnit 4 `TestCase` to JUnit Jupiter](./migratejunittestcase.md)
* [Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension](./environmentvariables.md)
* [Migrate JUnit 4 lifecycle annotations to JUnit Jupiter](./updatebeforeafterannotations.md)
* [Migrate from JUnit 4 `@FixedMethodOrder` to JUnit 5 `@TestMethodOrder`](./usetestmethodorder.md)
* [OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`](./updatemockwebserver.md)
* [Pragmatists `@RunWith(JUnitParamsRunner.class)` to JUnit Jupiter `@Parameterized` tests](./junitparamsrunnertoparameterized.md)
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](./removeobsoleterunners.md)
* [Remove duplicates uses of @TestTemplate implementations for a single method](./removeduplicatetesttemplates.md)
* [Replace `@CsvSource` with `@ValueSource` for single method arguments](./csvsourcetovaluesource.md)
* [Replace `fail()` in `try-catch` blocks with `Assertions.assertDoesNotThrow(() -&gt; { ... })`](./removetrycatchfailblocks.md)
* [Statically import JUnit Jupiter assertions](./staticimports.md)
* [Transform singlar `assumeNotNull(object)` to `assumeFalse(object == null)`](./assumenotnulltoassumptionsrecipes$singleargrecipe.md)
* [Transform variadic `assumeNotNull(objects...)` to a stream of `assumeFalse(object == null)`](./assumenotnulltoassumptionsrecipes$varargsrecipe.md)
* [Use JUnit Jupiter `@Disabled`](./ignoretodisabled.md)
* [Use JUnit Jupiter `@TempDir`](./temporaryfoldertotempdir.md)
* [Use JUnit Jupiter `Executable`](./throwingrunnabletoexecutable.md)
* [Use JUnit5's `assertSame` or `assertNotSame` instead of `assertTrue(... == ...)`](./useassertsame.md)
* [Use XMLUnit Legacy for JUnit 5](./usexmlunitlegacy.md)
* [Use wiremock extension](./usewiremockextension.md)
* [`assertTrue(x instanceof y)` to `assertInstanceOf(y.class, x)`](./asserttrueinstanceoftoassertinstanceof.md)


