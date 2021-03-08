# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

## Tags

* junit
* testing frameworks

## Recipe list

* [Change type](../changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Ignore
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
* [Change type](../changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Assume
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: junit
  * artifactId: junit
* [Exclude Maven dependency](../../maven/excludedependency.md)
  * groupId: org.junit.vintage
  * artifactId: junit-vintage-engine
* [Exclude Maven dependency](../../maven/excludedependency.md)
  * groupId: junit
  * artifactId: junit
* [Assert To Assertions](junit5/asserttoassertions.md)
* [Category To Tag](junit5/categorytotag.md)
* [Cleanup JUnit Imports](junit5/cleanupjunitimports.md)
* [ExpectedException To AssertThrows](junit5/expectedexceptiontoassertthrows.md)
* [MockitoRunner To MockitoExtension](junit5/mockitorunnertomockitoextension.md)
* [Add Mockito Dependency](junit5/addmockitodependency.md)
* [TemporaryFolder to TempDir](junit5/temporaryfoldertotempdir.md)
* [Update Before After Annotations](junit5/updatebeforeafterannotations.md)
* [Update Test Annotation](junit5/updatetestannotation.md)
* [Find JUnit 5](junit5/findjunit5.md)
* [Add JUnit Dependencies](junit5/addjunitdependencies.md)

