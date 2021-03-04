# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.JUnit5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

## Tags

* junit
* testing frameworks

## Recipe list

* [Change type](org.openrewrite.java.changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Ignore
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
* [Change type](org.openrewrite.java.changetype.md)
  * oldFullyQualifiedTypeName: org.junit.Assume
  * newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
* [Remove Maven dependency](org.openrewrite.maven.removedependency.md)
  * groupId: junit
  * artifactId: junit
* [Exclude Maven dependency](org.openrewrite.maven.excludedependency.md)
  * groupId: org.junit.vintage
  * artifactId: junit-vintage-engine
* [Exclude Maven dependency](org.openrewrite.maven.excludedependency.md)
  * groupId: junit
  * artifactId: junit

