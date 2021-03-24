# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe list

* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Ignore
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
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
* [Assert To Assertions](asserttoassertions.md)
* [Category To Tag](categorytotag.md)
* [Cleanup JUnit Imports](cleanupjunitimports.md)
* [ExpectedException To AssertThrows](expectedexceptiontoassertthrows.md)
* [TemporaryFolder to TempDir](temporaryfoldertotempdir.md)
* [Update Before After Annotations](updatebeforeafterannotations.md)
* [Update Test Annotation](updatetestannotation.md)

