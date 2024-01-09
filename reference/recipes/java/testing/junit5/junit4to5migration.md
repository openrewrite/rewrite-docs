# JUnit Jupiter migration from JUnit 4.x

**org.openrewrite.java.testing.junit5.JUnit4to5Migration**

_Migrates JUnit 4.x tests to JUnit Jupiter._

### Tags

* junit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.1.5

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.junit5.JUnit4to5Migration")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.1.5</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit4to5Migration
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
* [Make lifecycle methods non private](../../../java/testing/junit5/lifecyclenonprivate.md)
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
* [Use OkHttp 3 MockWebServer for JUnit 5](../../../java/testing/junit5/upgradeokhttpmockwebserver.md)
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
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Exclude Maven dependency](../../../maven/excludedependency.md)
  * groupId: `org.junit.vintage`
  * artifactId: `junit-vintage-engine`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.api.Test`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.junit.jupiter`
  * artifactId: `junit-jupiter-params`
  * version: `5.x`
  * onlyIfUsing: `org.junit.jupiter.params.ParameterizedTest`
  * acceptTransitive: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-plugin`
  * newVersion: `2.22.x`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-failsafe-plugin`
  * newVersion: `2.22.x`

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
  - org.openrewrite.java.testing.junit5.LifecycleNonPrivate
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
  - org.openrewrite.java.testing.junit5.UpgradeOkHttpMockWebServer
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
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.maven.ExcludeDependency:
      groupId: org.junit.vintage
      artifactId: junit-vintage-engine
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter
      version: 5.x
      onlyIfUsing: org.junit.jupiter.api.Test
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.junit.jupiter
      artifactId: junit-jupiter-params
      version: 5.x
      onlyIfUsing: org.junit.jupiter.params.ParameterizedTest
      acceptTransitive: true
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-surefire-plugin
      newVersion: 2.22.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-failsafe-plugin
      newVersion: 2.22.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit4to5Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Patrick Way, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:gadams@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Greg Adams](mailto:greg@moderne.io), [magicwerk](mailto:magicwerk@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), Tyler Van Gorder, [Tim te Beek](mailto:tim@moderne.io), [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), John Burns, [Michael Keppler](mailto:bananeweizen@gmx.de), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), Peter Puškár, [Tim te Beek](mailto:timtebeek@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Kun Li](mailto:kun@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
