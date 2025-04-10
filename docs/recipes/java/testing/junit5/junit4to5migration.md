---
sidebar_label: "JUnit Jupiter migration from JUnit 4.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**

_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use wiremock extension](../../../java/testing/junit5/usewiremockextension)
* [Use JUnit Jupiter `@Disabled`](../../../java/testing/junit5/ignoretodisabled)
* [Use JUnit Jupiter `Executable`](../../../java/testing/junit5/throwingrunnabletoexecutable)
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners)
  * obsoleteRunners: `[org.junit.runners.JUnit4, org.junit.runners.BlockJUnit4ClassRunner]`
* [Remove Maven plugin dependency](../../../maven/removeplugindependency)
  * pluginGroupId: `org.apache.maven.plugins`
  * pluginArtifactId: `maven-surefire-plugin`
  * groupId: `org.apache.maven.surefire`
  * artifactId: `surefire-junit*`
* [Upgrade Surefire Plugin](../../../java/testing/junit5/upgradesurefireplugin)
* [Add Hamcrest JUnit dependency](../../../java/testing/junit5/addhamcrestjunitdependency)
* [Use `MatcherAssert#assertThat(..)`](../../../java/testing/junit5/usehamcrestassertthat)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](../../../java/testing/junit5/migrateassumptions)
* [Use Mockito JUnit Jupiter extension](../../../java/testing/junit5/usemockitoextension)
* [Migrate from JUnit 4 `@FixedMethodOrder` to JUnit 5 `@TestMethodOrder`](../../../java/testing/junit5/usetestmethodorder)
* [Migrate JUnit 4 `TestCase` to JUnit Jupiter](../../../java/testing/junit5/migratejunittestcase)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.junit.Assert assertEquals(.., Object[], Object[])`
  * newMethodName: `assertArrayEquals`
* [JUnit 4 `Assert` To JUnit Jupiter `Assertions`](../../../java/testing/junit5/asserttoassertions)
* [JUnit 4 `@Category` to JUnit Jupiter `@Tag`](../../../java/testing/junit5/categorytotag)
* [Cleanup JUnit imports](../../../java/testing/junit5/cleanupjunitimports)
* [Use JUnit Jupiter `@TempDir`](../../../java/testing/junit5/temporaryfoldertotempdir)
* [Make `@TempDir` fields non final](../../../java/testing/junit5/tempdirnonfinal)
* [JUnit TestName @Rule to JUnit Jupiter TestInfo](../../../java/testing/junit5/testruletotestinfo)
* [Migrate JUnit 4 lifecycle annotations to JUnit Jupiter](../../../java/testing/junit5/updatebeforeafterannotations)
* [Migrate JUnit 4 `@Test` annotations to JUnit 5](../../../java/testing/junit5/updatetestannotation)
* [JUnit 4 `@Rule Timeout` to JUnit Jupiter's `Timeout`](../../../java/testing/junit5/timeoutruletoclassannotation)
* [Add missing `@BeforeEach`, `@AfterEach`, `@Test` to overriding methods](../../../java/testing/junit5/addmissingtestbeforeafterannotations)
* [JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests](../../../java/testing/junit5/parameterizedrunnertoparameterized)
* [Pragmatists `@RunWith(JUnitParamsRunner.class)` to JUnit Jupiter `@Parameterized` tests](../../../java/testing/junit5/junitparamsrunnertoparameterized)
* [JUnit 4 `ExpectedException` To JUnit Jupiter's `assertThrows()`](../../../java/testing/junit5/expectedexceptiontoassertthrows)
* [OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`](../../../java/testing/junit5/updatemockwebserver)
* [Use Vert.x JUnit 5 Extension](../../../java/testing/junit5/vertxunittovertxjunit5)
* [JUnit 4 `@RunWith(Enclosed.class)` to JUnit Jupiter `@Nested`](../../../java/testing/junit5/enclosedtonested)
* [JUnit 5 inner test classes should be annotated with `@Nested`](../../../java/testing/junit5/addmissingnested)
* [Add `org.hamcrest:hamcrest` if it is used.](../../../java/testing/hamcrest/addhamcrestifused)
* [Use XMLUnit Legacy for JUnit 5](../../../java/testing/junit5/usexmlunitlegacy)
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `junit`
  * artifactId: `junit`
* [Exclude Maven dependency](../../../maven/excludedependency)
  * groupId: `junit`
  * artifactId: `junit`
* [Remove exclusion](../../../maven/removeexclusion)
  * groupId: `org.testcontainers`
  * artifactId: `*`
  * exclusionGroupId: `junit`
  * exclusionArtifactId: `junit`
* [Remove exclusion](../../../maven/removeexclusion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-testcontainers`
  * exclusionGroupId: `junit`
  * exclusionArtifactId: `junit`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Exclude Maven dependency](../../../maven/excludedependency)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Add JUnit Jupiter dependencies](../../../java/testing/junit5/addjupiterdependencies)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-params`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.params.ParameterizedTest`
  * scope: `test`
  * acceptTransitive: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-plugin`
  * newVersion: `3.1.x`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-failsafe-plugin`
  * newVersion: `3.1.x`
* [Gradle `Test` use JUnit Jupiter](../../../java/testing/junit5/gradleusejunitjupiter)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.jbehave.core.junit.JUnitStories`
  * newFullyQualifiedTypeName: `org.jbehave.core.junit.JupiterStories`
* [Use Arquillian JUnit 5 Extension](../../../java/testing/arquillian/arquillianjunit4toarquillianjunit5)
* [Migrate rider-spring (JUnit4) to rider-junit5 (JUnit5)](../../../java/testing/dbrider/migratedbriderspringtodbriderjunit5)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit4to5Migration
displayName: JUnit Jupiter migration from JUnit 4.x
description: |
  Migrates JUnit 4.x tests to JUnit Jupiter.
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
  - org.openrewrite.java.testing.junit5.TimeoutRuleToClassAnnotation
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
      artifactId: "*"
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
  - org.openrewrite.java.testing.arquillian.ArquillianJUnit4ToArquillianJUnit5
  - org.openrewrite.java.testing.dbrider.MigrateDbRiderSpringToDbRiderJUnit5

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
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
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit4to5Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JUnit4to5Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit4to5Migration" />

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

