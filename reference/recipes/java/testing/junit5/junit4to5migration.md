# JUnit Jupiter migration from JUnit 4.x

 **org.openrewrite.java.testing.junit5.JUnit4to5Migration** _Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Source

[Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.6.0/jar) \| [Github](https://github.com/openrewrite/rewrite-testing-frameworks) \| [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.6.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.6.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.junit5.JUnit4to5Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Reorder method arguments](../../reordermethodarguments.md)
  * methodPattern: `org.junit.Assume assume*(String, boolean)`
  * newParameterNames: `[b, message]`
  * oldParameterNames: `[message, b]`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.junit.Assume`
  * newFullyQualifiedTypeName: `org.junit.jupiter.api.Assumptions`
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](removeobsoleterunners.md)
  * obsoleteRunners: `[org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-api`
  * version: `5.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.junit.jupiter.api.Test]`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-engine`
  * version: `5.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.junit.jupiter.api.Test]`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-params`
  * version: `5.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.junit.jupiter.params.ParameterizedTest]`
* [Use JUnit Jupiter `@Disabled`](ignoretodisabled.md)
* [Use `MatcherAssert#assertThat(..)`](usehamcrestassertthat.md)
* [Use Mockito JUnit Jupiter extension](usemockitoextension.md)
* [Add `org.hamcrest:hamcrest` if it is used.](../hamcrest/addhamcrestifused.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
displayName: JUnit Jupiter migration from JUnit 4.x
description: Migrates JUnit 4.x tests to JUnit Jupiter.
tags:
  - testing
  - junit
recipeList:
  - org.openrewrite.java.testing.junit5.IgnoreToDisabled
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.junit.Assume assume*(String, boolean)
      oldParameterNames:
        - message
        - b
      newParameterNames:
        - b
        - message
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners:
        - org.junit.runners.JUnit4
        - org.junit.runners.BlockJUnit4ClassRunner
  - org.openrewrite.java.testing.junit5.UseHamcrestAssertThat
  - org.openrewrite.java.testing.junit5.UseMockitoExtension
  - org.openrewrite.java.testing.junit5.UseTestMethodOrder
  - org.openrewrite.java.testing.junit5.MigrateJUnitTestCase
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.CategoryToTag
  - org.openrewrite.java.testing.junit5.CleanupJUnitImports
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.UpdateTestAnnotation
  - org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized
  - org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized
  - org.openrewrite.java.testing.junit5.MockitoJUnitToMockitoExtension
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - org.openrewrite.java.testing.junit5.UpdateMockWebServer
  - org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
  - org.openrewrite.maven.RemoveDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.ExcludeDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.maven.ExcludeDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-api
      version: 5.x
      scope: test
      onlyIfUsing:
        - org.junit.jupiter.api.Test
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-engine
      version: 5.x
      scope: test
      onlyIfUsing:
        - org.junit.jupiter.api.Test
  - org.openrewrite.maven.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-params
      version: 5.x
      scope: test
      onlyIfUsing:
        - org.junit.jupiter.params.ParameterizedTest
```
{% endtab %}
{% endtabs %}

