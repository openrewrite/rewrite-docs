# Mockito 3.x migration from 1.x

**org.openrewrite.java.testing.mockito.Mockito1to3Migration**

_Upgrade Mockito from 1.x to 3.x._

### Tags

* testing
* mockito

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.19.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.MockitoAnnotations.Mock`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Replace Mockito 1.x `anyString()`/`any()` with `nullable(Class)`](../../../java/testing/mockito/anytonullable.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.Matchers`
  * newFullyQualifiedTypeName: `org.mockito.ArgumentMatchers`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyVararg()`
  * newMethodName: `any`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyObject()`
  * newMethodName: `any`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyListOf(java.lang.Class)`
  * newMethodName: `anyList`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyList(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anySetOf(java.lang.Class)`
  * newMethodName: `anySet`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers anySet(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyMapOf(java.lang.Class, java.lang.Class)`
  * newMethodName: `anyMap`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyMap(java.lang.Class, java.lang.Class)`
  * argumentIndex: `0`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyMap(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyCollectionOf()`
  * newMethodName: `anyCollection`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.ArgumentMatchers anyIterableOf()`
  * newMethodName: `anyIterable`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers isNull(java.lang.Class)`
  * argumentIndex: `0`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `org.mockito.ArgumentMatchers notNull(java.lang.Class)`
  * argumentIndex: `0`
* [Reorder method arguments](../../../java/reordermethodarguments.md)
  * methodPattern: `org.mockito.MockedStatic verify(org.mockito.verification.VerificationMode, org.mockito.MockedStatic.Verification)`
  * newParameterNames: `[verification, mode]`
  * oldParameterNames: `[mode, verification]`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.Mockito verifyZeroInteractions(..)`
  * newMethodName: `verifyNoInteractions`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)`
  * newMethodName: `getArgument`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.exceptions.verification.TooLittleActualInvocations`
  * newFullyQualifiedTypeName: `org.mockito.exceptions.verification.TooFewActualInvocations`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.configuration.AnnotationEngine`
  * newFullyQualifiedTypeName: `org.mockito.plugins.AnnotationEngine`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.plugins.InstantiatorProvider`
  * newFullyQualifiedTypeName: `org.mockito.plugins.InstantiatorProvider2`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.runners.MockitoJUnitRunner`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Cleanup Mockito imports](../../../java/testing/mockito/cleanupmockitoimports.md)
* [Use static form of Mockito `MockUtil`](../../../java/testing/mockito/mockutilstostatic.md)
* [JUnit 4 `MockitoJUnit` to JUnit Jupiter `MockitoExtension`](../../../java/testing/junit5/mockitojunittomockitoextension.md)
* [Replace PowerMock with raw Mockito](../../../java/testing/mockito/replacepowermockito.md)
* [Retain Mockito strictness `WARN` when switching to JUnit 5](../../../java/testing/mockito/retainstrictnesswarn.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.mockito`
  * artifactId: `mockito-junit-jupiter`
  * version: `3.x`
  * onlyIfUsing: `org.mockito.junit.jupiter.*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `org.mockito`
  * oldArtifactId: `mockito-all`
  * newArtifactId: `mockito-core`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `net.bytebuddy`
  * artifactId: `byte-buddy*`
  * newVersion: `1.11.13`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.Mockito1to3Migration
displayName: Mockito 3.x migration from 1.x
description: Upgrade Mockito from 1.x to 3.x.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.MockitoAnnotations.Mock
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.testing.mockito.AnyToNullable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.Matchers
      newFullyQualifiedTypeName: org.mockito.ArgumentMatchers
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyVararg()
      newMethodName: any
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyObject()
      newMethodName: any
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyListOf(java.lang.Class)
      newMethodName: anyList
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers anyList(java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anySetOf(java.lang.Class)
      newMethodName: anySet
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers anySet(java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyMapOf(java.lang.Class, java.lang.Class)
      newMethodName: anyMap
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers anyMap(java.lang.Class, java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers anyMap(java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyCollectionOf()
      newMethodName: anyCollection
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.ArgumentMatchers anyIterableOf()
      newMethodName: anyIterable
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers isNull(java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.mockito.ArgumentMatchers notNull(java.lang.Class)
      argumentIndex: 0
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.mockito.MockedStatic verify(org.mockito.verification.VerificationMode, org.mockito.MockedStatic.Verification)
      newParameterNames: [verification, mode]
      oldParameterNames: [mode, verification]
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Mockito verifyZeroInteractions(..)
      newMethodName: verifyNoInteractions
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)
      newMethodName: getArgument
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.exceptions.verification.TooLittleActualInvocations
      newFullyQualifiedTypeName: org.mockito.exceptions.verification.TooFewActualInvocations
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.configuration.AnnotationEngine
      newFullyQualifiedTypeName: org.mockito.plugins.AnnotationEngine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.plugins.InstantiatorProvider
      newFullyQualifiedTypeName: org.mockito.plugins.InstantiatorProvider2
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.runners.MockitoJUnitRunner
      newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner
  - org.openrewrite.java.testing.mockito.CleanupMockitoImports
  - org.openrewrite.java.testing.mockito.MockUtilsToStatic
  - org.openrewrite.java.testing.junit5.MockitoJUnitToMockitoExtension
  - org.openrewrite.java.testing.mockito.ReplacePowerMockito
  - org.openrewrite.java.testing.mockito.RetainStrictnessWarn
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.mockito
      artifactId: mockito-junit-jupiter
      version: 3.x
      onlyIfUsing: org.mockito.junit.jupiter.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 3.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.mockito
      oldArtifactId: mockito-all
      newArtifactId: mockito-core
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: net.bytebuddy
      artifactId: byte-buddy*
      newVersion: 1.11.13

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
    activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to3Migration")
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
        activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to3Migration")
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
            <recipe>org.openrewrite.java.testing.mockito.Mockito1to3Migration</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.Mockito1to3Migration -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Mockito1to3Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to3Migration)

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


## Contributors
[Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Matthias Klauer](mailto:matthias.klauer@sap.com), [Greg Adams](mailto:gadams@gmail.com), [Tim te Beek](mailto:tim@moderne.io), Patrick Way, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:greg@moderne.io), John Burns, [Patrick](mailto:patway99@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), [Sam Snyder](mailto:sam@moderne.io), [Laurens Westerlaken](mailto:laurens.w@live.nl), [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), Josh Soref
