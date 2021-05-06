# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe list

* [Reorder method arguments](../../../java/reordermethodarguments.md)
  * methodPattern: org.junit.Assume assume*(String, boolean)
  * newParameterNames: [Ljava.lang.String;@49e0b123
  * oldParameterNames: [Ljava.lang.String;@2e85e3f1
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Assume
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: junit
  * artifactId: junit
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: org.junit.vintage
  * artifactId: junit-vintage-engine
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: junit
  * artifactId: junit
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: org.junit.jupiter
  * artifactId: junit-jupiter-api
  * version: 5.x
  * releasesOnly: false
  * scope: test
  * onlyIfUsing: [org.junit.jupiter.api.Test]
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: org.junit.jupiter
  * artifactId: junit-jupiter-engine
  * version: 5.x
  * releasesOnly: false
  * scope: test
  * onlyIfUsing: [org.junit.jupiter.api.Test]
* [Remove JUnit4 @RunWith annotations that do not require an @ExtendsWith replacement.](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: [org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]
* [Migrate from JUnit4 `@FixedMethodOrder` to JUnit5 `@TestMethodOrder`](../../../java/testing/junit5/usetestmethodorder.md)
* [Assert To Assertions](../../../java/testing/junit5/asserttoassertions.md)
* [Category To Tag](../../../java/testing/junit5/categorytotag.md)
* [Cleanup JUnit Imports](../../../java/testing/junit5/cleanupjunitimports.md)
* [ExpectedException To AssertThrows](../../../java/testing/junit5/expectedexceptiontoassertthrows.md)
* [TemporaryFolder to TempDir](../../../java/testing/junit5/temporaryfoldertotempdir.md)
* [Update Before After Annotations](../../../java/testing/junit5/updatebeforeafterannotations.md)
* [Migrate JUnit4 `@Test` annotations to JUnit5](../../../java/testing/junit5/updatetestannotation.md)
* [JUnit4 @RunWith(Parameterized.class) to JUnit Jupiter Parameterized Tests](../../../java/testing/junit5/parameterizedrunnertoparameterized.md)
* [Pragmatists @RunWith(JUnitParamsRunner.class) to JUnit Jupiter Parameterized Tests](../../../java/testing/junit5/junitparamsrunnertoparameterized.md)
* [MockitoJUnit to MockitoExtension](../../../java/testing/junit5/mockitojunittomockitoextension.md)
* [ExpectedException To AssertThrows](../../../java/testing/junit5/expectedexceptiontoassertthrows.md)
* [okhttp3 3.x MockWebserver @Rule To 4.x MockWebServer](../../../java/testing/junit5/updatemockwebserver.md)
* [Use JUnit Jupiter `@Disabled`](../../../java/testing/junit5/ignoretodisabled.md)
* [Use `MatcherAssert#assertThat(..)`](../../../java/testing/junit5/usehamcrestassertthat.md)
* [Use Mockito JUnit Jupiter extension](../../../java/testing/junit5/usemockitoextension.md)
