# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**

_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.19.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use wiremock extension](../../../java/testing/junit5/usewiremockextension.md)
* [Use JUnit Jupiter `@Disabled`](../../../java/testing/junit5/ignoretodisabled.md)
* [Use JUnit Jupiter `Executable`](../../../java/testing/junit5/throwingrunnabletoexecutable.md)
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]`
* [Remove Maven plugin dependency](../../../maven/removeplugindependency.md)
  * pluginGroupId: `org.apache.maven.plugins`
  * pluginArtifactId: `maven-surefire-plugin`
  * groupId: `org.apache.maven.surefire`
  * artifactId: `surefire-junit*`
* [Upgrade Surefire Plugin](../../../java/testing/junit5/upgradesurefireplugin.md)
* [Add Hamcrest JUnit dependency](../../../java/testing/junit5/addhamcrestjunitdependency.md)
* [Use `MatcherAssert#assertThat(..)`](../../../java/testing/junit5/usehamcrestassertthat.md)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](../../../java/testing/junit5/migrateassumptions.md)
* [Use Mockito JUnit Jupiter extension](../../../java/testing/junit5/usemockitoextension.md)
* [Migrate from JUnit 4 `@FixedMethodOrder` to JUnit 5 `@TestMethodOrder`](../../../java/testing/junit5/usetestmethodorder.md)
* [Migrate JUnit 4 `TestCase` to JUnit Jupiter](../../../java/testing/junit5/migratejunittestcase.md)
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.junit.Assert assertEquals(.., Object[], Object[])`
  * newMethodName: `assertArrayEquals`
* [JUnit 4 `Assert` To JUnit Jupiter `Assertions`](../../../java/testing/junit5/asserttoassertions.md)
* [JUnit 4 `@Category` to JUnit Jupiter `@Tag`](../../../java/testing/junit5/categorytotag.md)
* [Cleanup JUnit imports](../../../java/testing/junit5/cleanupjunitimports.md)
* [Use JUnit Jupiter `@TempDir`](../../../java/testing/junit5/temporaryfoldertotempdir.md)
* [Make `@TempDir` fields non final](../../../java/testing/junit5/tempdirnonfinal.md)
* [JUnit TestName @Rule to JUnit Jupiter TestInfo](../../../java/testing/junit5/testruletotestinfo.md)
* [Migrate JUnit 4 lifecycle annotations to JUnit Jupiter](../../../java/testing/junit5/updatebeforeafterannotations.md)
* [Migrate JUnit 4 `@Test` annotations to JUnit 5](../../../java/testing/junit5/updatetestannotation.md)
* [Add missing `@BeforeEach`, `@AfterEach`, `@Test` to overriding methods](../../../java/testing/junit5/addmissingtestbeforeafterannotations.md)
* [JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests](../../../java/testing/junit5/parameterizedrunnertoparameterized.md)
* [Pragmatists @RunWith(JUnitParamsRunner.class) to JUnit Jupiter Parameterized Tests](../../../java/testing/junit5/junitparamsrunnertoparameterized.md)
* [JUnit 4 `ExpectedException` To JUnit Jupiter's `assertThrows()`](../../../java/testing/junit5/expectedexceptiontoassertthrows.md)
* [OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`](../../../java/testing/junit5/updatemockwebserver.md)
* [Use Vert.x JUnit 5 Extension](../../../java/testing/junit5/vertxunittovertxjunit5.md)
* [JUnit 4 `@RunWith(Enclosed.class)` to JUnit Jupiter `@Nested`](../../../java/testing/junit5/enclosedtonested.md)
* [JUnit 5 inner test classes should be annotated with `@Nested`](../../../java/testing/junit5/addmissingnested.md)
* [Add `org.hamcrest:hamcrest` if it is used.](../../../java/testing/hamcrest/addhamcrestifused.md)
* [Use XMLUnit Legacy for JUnit 5](../../../java/testing/junit5/usexmlunitlegacy.md)
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `junit`
  * artifactId: `junit`
* [Remove exclusion](../../../maven/removeexclusion.md)
  * groupId: `org.testcontainers`
  * artifactId: `testcontainers`
  * exclusionGroupId: `junit`
  * exclusionArtifactId: `junit`
* [Remove exclusion](../../../maven/removeexclusion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-testcontainers`
  * exclusionGroupId: `junit`
  * exclusionArtifactId: `junit`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Add JUnit Jupiter dependencies](../../../java/testing/junit5/addjupiterdependencies.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-params`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.params.ParameterizedTest`
  * scope: `test`
  * acceptTransitive: `true`
* [Mockito 4.x upgrade](../../../java/testing/mockito/mockito1to4migration.md)
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-plugin`
  * newVersion: `3.1.x`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-failsafe-plugin`
  * newVersion: `3.1.x`
* [Gradle `Test` use JUnit Jupiter](../../../java/testing/junit5/gradleusejunitjupiter.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.jbehave.core.junit.JUnitStories`
  * newFullyQualifiedTypeName: `org.jbehave.core.junit.JupiterStories`

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
  - org.openrewrite.java.testing.junit5.ThrowingRunnableToExecutable
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: [org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]
  - org.openrewrite.maven.RemovePluginDependency:
      pluginGroupId: org.apache.maven.plugins
      pluginArtifactId: maven-surefire-plugin
      groupId: org.apache.maven.surefire
      artifactId: surefire-junit*
  - org.openrewrite.java.testing.junit5.UpgradeSurefirePlugin
  - org.openrewrite.java.testing.junit5.AddHamcrestJUnitDependency
  - org.openrewrite.java.testing.junit5.UseHamcrestAssertThat
  - org.openrewrite.java.testing.junit5.MigrateAssumptions
  - org.openrewrite.java.testing.junit5.UseMockitoExtension
  - org.openrewrite.java.testing.junit5.UseTestMethodOrder
  - org.openrewrite.java.testing.junit5.MigrateJUnitTestCase
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.junit.Assert assertEquals(.., Object[], Object[])
      newMethodName: assertArrayEquals
  - org.openrewrite.java.testing.junit5.AssertToAssertions
  - org.openrewrite.java.testing.junit5.CategoryToTag
  - org.openrewrite.java.testing.junit5.CleanupJUnitImports
  - org.openrewrite.java.testing.junit5.TemporaryFolderToTempDir
  - org.openrewrite.java.testing.junit5.TempDirNonFinal
  - org.openrewrite.java.testing.junit5.TestRuleToTestInfo
  - org.openrewrite.java.testing.junit5.UpdateBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.UpdateTestAnnotation
  - org.openrewrite.java.testing.junit5.AddMissingTestBeforeAfterAnnotations
  - org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized
  - org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized
  - org.openrewrite.java.testing.junit5.ExpectedExceptionToAssertThrows
  - org.openrewrite.java.testing.junit5.UpdateMockWebServer
  - org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
  - org.openrewrite.java.testing.junit5.EnclosedToNested
  - org.openrewrite.java.testing.junit5.AddMissingNested
  - org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
  - org.openrewrite.java.testing.junit5.UseXMLUnitLegacy
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.ExcludeDependency:
      groupId: junit
      artifactId: junit
  - org.openrewrite.maven.RemoveExclusion:
      groupId: org.testcontainers
      artifactId: testcontainers
      exclusionGroupId: junit
      exclusionArtifactId: junit
  - org.openrewrite.maven.RemoveExclusion:
      groupId: org.springframework.boot
      artifactId: spring-boot-testcontainers
      exclusionGroupId: junit
      exclusionArtifactId: junit
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.maven.ExcludeDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.java.testing.junit5.AddJupiterDependencies
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-params
      version: 5.x
      onlyIfUsing: org.junit.jupiter.params.ParameterizedTest
      scope: test
      acceptTransitive: true
  - org.openrewrite.java.testing.mockito.Mockito1to4Migration
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-surefire-plugin
      newVersion: 3.1.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-failsafe-plugin
      newVersion: 3.1.x
  - org.openrewrite.java.testing.junit5.GradleUseJunitJupiter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jbehave.core.junit.JUnitStories
      newFullyQualifiedTypeName: org.jbehave.core.junit.JupiterStories

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.19.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.19.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.19.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
        exportDatatables = true
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.19.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit4to5Migration -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JUnit4to5Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit4to5Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

