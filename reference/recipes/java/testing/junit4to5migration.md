# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.JUnit4to5Migration**  
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing frameworks

### Recipe list

* [Change type](https://docs.openrewrite.org/reference/recipes/java/changetype.md)
	* oldFullyQualifiedTypeName: org.junit.Ignore
	* newFullyQualifiedTypeName: org.junit.jupiter.api.Disabled
* [Change type](https://docs.openrewrite.org/reference/recipes/java/changetype.md)
	* oldFullyQualifiedTypeName: org.junit.Assume
	* newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
* [Remove Maven dependency](https://docs.openrewrite.org/reference/recipes/maven/removedependency.md)
	* groupId: junit
	* artifactId: junit
* [Exclude Maven dependency](https://docs.openrewrite.org/reference/recipes/maven/excludedependency.md)
	* groupId: org.junit.vintage
	* artifactId: junit-vintage-engine
* [Exclude Maven dependency](https://docs.openrewrite.org/reference/recipes/maven/excludedependency.md)
	* groupId: junit
	* artifactId: junit
* [Assert To Assertions](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/asserttoassertions.md)
* [Category To Tag](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/categorytotag.md)
* [Cleanup JUnit Imports](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/cleanupjunitimports.md)
* [ExpectedException To AssertThrows](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/expectedexceptiontoassertthrows.md)
* [MockitoRunner To MockitoExtension](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/mockitorunnertomockitoextension.md)
* [Add Mockito Dependency](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/addmockitodependency.md)
* [TemporaryFolder to TempDir](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/temporaryfoldertotempdir.md)
* [Update Before After Annotations](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/updatebeforeafterannotations.md)
* [Update Test Annotation](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/updatetestannotation.md)
* [Find JUnit 5](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/findjunit5.md)
* [Add JUnit Dependencies](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/addjunitdependencies.md)
