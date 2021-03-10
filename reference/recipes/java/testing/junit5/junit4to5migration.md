# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe list

* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Ignore
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
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
* [Assert To Assertions](../../../java/testing/junit5/asserttoassertions.md)
* [Category To Tag](../../../java/testing/junit5/categorytotag.md)
* [Cleanup JUnit Imports](../../../java/testing/junit5/cleanupjunitimports.md)
* [ExpectedException To AssertThrows](../../../java/testing/junit5/expectedexceptiontoassertthrows.md)
* [TemporaryFolder to TempDir](../../../java/testing/junit5/temporaryfoldertotempdir.md)
* [Update Before After Annotations](../../../java/testing/junit5/updatebeforeafterannotations.md)
* [Update Test Annotation](../../../java/testing/junit5/updatetestannotation.md)
