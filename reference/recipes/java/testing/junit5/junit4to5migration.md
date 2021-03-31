# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe list

* [Reorder method arguments](../../reordermethodarguments.md)
  * methodPattern: org.junit.Assume assume\*\(String, boolean\)
  * newParameterNames: \[Ljava.lang.String;@4d20616a
  * oldParameterNames: \[Ljava.lang.String;@6ad6ae45
* [Change type](../../changetype.md)
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
  * onlyIfUsing: \[org.junit.jupiter.api.Test\]
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: org.junit.jupiter
  * artifactId: junit-jupiter-engine
  * version: 5.x
  * releasesOnly: false
  * scope: test
  * onlyIfUsing: \[org.junit.jupiter.api.Test\]
* [Remove JUnit4 @RunWith annotations that do not require an @ExtendsWith replacement.](removeobsoleterunners.md)
  * obsoleteRunners: \[org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner\]
* [Migrate from JUnit4 `@FixedMethodOrder` to JUnit5 `@TestMethodOrder`](usetestmethodorder.md)
* [Assert To Assertions](asserttoassertions.md)
* [Category To Tag](categorytotag.md)
* [Cleanup JUnit Imports](cleanupjunitimports.md)
* [ExpectedException To AssertThrows](expectedexceptiontoassertthrows.md)
* [TemporaryFolder to TempDir](temporaryfoldertotempdir.md)
* [Update Before After Annotations](updatebeforeafterannotations.md)
* [Migrate JUnit4 `@Test` annotations to JUnit5](updatetestannotation.md)
* [JUnit4 @RunWith\(Parameterized.class\) to JUnit Jupiter Parameterized Tests](parameterizedrunnertoparameterized.md)
* [Use JUnit Jupiter `@Disabled`](ignoretodisabled.md)
* [Use `MatcherAssert#assertThat(..)`](usehamcrestassertthat.md)
* [Use Mockito JUnit Jupiter extension](usemockitoextension.md)

