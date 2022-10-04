# JUnit Jupiter migration from JUnit 4.x

** org.openrewrite.java.testing.junit5.JUnit4to5Migration**
_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.28.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.28.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.34.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.28.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0 \
  -DactiveRecipes=org.openrewrite.java.testing.junit5.JUnit4to5Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit4to5Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use wiremock extension](../../../java/testing/junit5/usewiremockextension.md)
* [Use JUnit Jupiter `@Disabled`](../../../java/testing/junit5/ignoretodisabled.md)
* [Reorder method arguments](../../../java/reordermethodarguments.md)
  * methodPattern: `org.junit.Assume assume*(String, boolean)`
  * newParameterNames: `[b, message]`
  * oldParameterNames: `[message, b]`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.junit.Assume`
  * newFullyQualifiedTypeName: `org.junit.jupiter.api.Assumptions`
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]`
* [Use `MatcherAssert#assertThat(..)`](../../../java/testing/junit5/usehamcrestassertthat.md)
* [Use Mockito JUnit Jupiter extension](../../../java/testing/junit5/usemockitoextension.md)
* [Migrate from JUnit4 `@FixedMethodOrder` to JUnit5 `@TestMethodOrder`](../../../java/testing/junit5/usetestmethodorder.md)
* [Migrate JUnit 4 `TestCase` to JUnit Jupiter](../../../java/testing/junit5/migratejunittestcase.md)
* [JUnit4 Assert To JUnit Jupiter Assertions](../../../java/testing/junit5/asserttoassertions.md)
* [JUnit4 `@Category` to JUnit Jupiter `@Tag`](../../../java/testing/junit5/categorytotag.md)
* [Cleanup JUnit imports](../../../java/testing/junit5/cleanupjunitimports.md)
* [Use JUnit Jupiter `@TempDir`](../../../java/testing/junit5/temporaryfoldertotempdir.md)
* [Make `@TempDir` fields non final](../../../java/testing/junit5/tempdirnonfinal.md)
* [JUnit TestName @Rule to JUnit Jupiter TestInfo](../../../java/testing/junit5/testruletotestinfo.md)
* [Migrate JUnit 4 lifecycle annotations to JUnit Jupiter](../../../java/testing/junit5/updatebeforeafterannotations.md)
* [Make lifecycle methods non private](../../../java/testing/junit5/lifecyclenonprivate.md)
* [Migrate JUnit 4 `@Test` annotations to JUnit5](../../../java/testing/junit5/updatetestannotation.md)
* [JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests](../../../java/testing/junit5/parameterizedrunnertoparameterized.md)
* [Pragmatists @RunWith(JUnitParamsRunner.class) to JUnit Jupiter Parameterized Tests](../../../java/testing/junit5/junitparamsrunnertoparameterized.md)
* [JUnit 4 `ExpectedException` To JUnit Jupiter's `assertThrows()`](../../../java/testing/junit5/expectedexceptiontoassertthrows.md)
* [okhttp3 3.x MockWebserver @Rule To 4.x MockWebServer](../../../java/testing/junit5/updatemockwebserver.md)
* [Use Vertx JUnit 5 Extension](../../../java/testing/junit5/vertxunittovertxjunit5.md)
* [JUnit 4 `@RunWith(Enclosed.class)` to JUnit Jupiter `@Nested`](../../../java/testing/junit5/enclosedtonested.md)
* [JUnit5 inner test classes should be annotated with `@Nested`.](../../../java/testing/junit5/addmissingnested.md)
* [Add `org.hamcrest:hamcrest` if it is used.](../../../java/testing/hamcrest/addhamcrestifused.md)
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.api.Test`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-params`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.params.ParameterizedTest`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
displayName: JUnit Jupiter migration from JUnit 4.x
description: Migrates JUnit 4.x tests to JUnit Jupiter.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.UseWiremockExtension
  - org.openrewrite.java.testing.junit5.IgnoreToDisabled
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.junit.Assume assume*(String, boolean)
      newParameterNames: [b, message]
      oldParameterNames: [message, b]
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: [org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]
  - org.openrewrite.java.testing.junit5.UseHamcrestAssertThat
  - org.openrewrite.java.testing.junit5.UseMockitoExtension
  - org.openrewrite.java.testing.junit5.UseTestMethodOrder
  - org.openrewrite.java.testing.junit5.MigrateJUnitTestCase
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.CategoryToTag
  - org.openrewrite.java.testing.junit5.CleanupJUnitImports
  - org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir
  - org.openrewrite.java.testing.junit5.TempDirNonFinal
  - org.openrewrite.java.testing.junit5.TestRuleToTestInfo
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.LifecycleNonPrivate
  - org.openrewrite.java.testing.junit5.UpdateTestAnnotation
  - org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized
  - org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - org.openrewrite.java.testing.junit5.UpdateMockWebServer
  - org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
  - org.openrewrite.java.testing.junit5.EnclosedToNested
  - org.openrewrite.java.testing.junit5.AddMissingNested
  - org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
  - org.openrewrite.maven.RemoveDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.ExcludeDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.maven.ExcludeDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter
      version: 5.x
      onlyIfUsing: org.junit.jupiter.api.Test
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-params
      version: 5.x
      onlyIfUsing: org.junit.jupiter.params.ParameterizedTest

```
{% endtab %}
{% endtabs %}
