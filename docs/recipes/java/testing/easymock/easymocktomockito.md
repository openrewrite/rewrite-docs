---
sidebar_label: "Migrate from EasyMock to Mockito"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from EasyMock to Mockito

**org.openrewrite.java.testing.easymock.EasyMockToMockito**

_This recipe will apply changes commonly needed when migrating from EasyMock to Mockito._

### Tags

* easymock
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/easymock.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.mockito`
  * artifactId: `mockito-core`
  * version: `5.x`
  * onlyIfUsing: `org.easymock.*`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.easymock`
  * artifactId: `easymock`
* [Replace EasyMock `verify` calls with Mockito `verify` calls](../../../java/testing/easymock/easymockverifytomockitoverify)
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IExpectationSetters times(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IExpectationSetters once()`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IExpectationSetters atLeastOnce()`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IExpectationSetters anyTimes()`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IMocksControl replay(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.EasyMock replay(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IMocksControl verify(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IMocksControl verifyRecording(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.IMocksControl verifyUnexpectedCalls(..)`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.EasyMockSupport replayAll()`
* [Remove method invocations](../../../java/removemethodinvocations)
  * methodPattern: `org.easymock.EasyMockSupport verifyAll()`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andReturn(..)`
  * newMethodName: `thenReturn`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andThrow(java.lang.Throwable)`
  * newMethodName: `thenThrow`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andAnswer(..)`
  * newMethodName: `thenAnswer`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andStubReturn(..)`
  * newMethodName: `thenReturn`
  * ignoreDefinition: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andStubThrow(java.lang.Throwable)`
  * newMethodName: `thenThrow`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.IExpectationSetters andStubAnswer(..)`
  * newMethodName: `thenAnswer`
  * ignoreDefinition: `true`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.IMocksControl mock(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.IMocksControl createMock(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.easymock.IArgumentMatcher`
  * newFullyQualifiedTypeName: `org.mockito.ArgumentMatcher`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock anyObject(..)`
  * newMethodName: `any`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock capture(..)`
  * newMethodName: `argThat`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock reportMatcher(..)`
  * newMethodName: `argThat`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock expect(..)`
  * newMethodName: `when`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock createNiceMock(..)`
  * newMethodName: `mock`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock createStrictMock(..)`
  * newMethodName: `mock`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock createMock(..)`
  * newMethodName: `mock`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock niceMock(..)`
  * newMethodName: `mock`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.easymock.EasyMock strictMock(..)`
  * newMethodName: `mock`
* [Reorder method arguments](../../../java/reordermethodarguments)
  * methodPattern: `org.easymock.EasyMock mock(String, Class)`
  * newParameterNames: `[classToMock, name]`
  * oldParameterNames: `[name, classToMock]`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock lt(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock leq(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock gt(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock geq(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock and(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock or(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.easymock.EasyMock not(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.AdditionalMatchers`
* [Migrate Test classes that extend `org.easymock.EasyMockSupport` to use Mockito](../../../java/testing/easymock/removeextendseasymocksupport)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.easymock.EasyMock`
  * newFullyQualifiedTypeName: `org.mockito.Mockito`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.easymock.EasyMockRunner`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.easymock.Mock`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.easymock.TestSubject`
  * newFullyQualifiedTypeName: `org.mockito.InjectMocks`
* [Mockito best practices](../../../java/testing/mockito/mockitobestpractices)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.easymock.EasyMockToMockito
displayName: Migrate from EasyMock to Mockito
description: This recipe will apply changes commonly needed when migrating from EasyMock to Mockito.
tags:
  - easymock
  - testing
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.mockito
      artifactId: mockito-core
      version: 5.x
      onlyIfUsing: org.easymock.*
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.easymock
      artifactId: easymock
  - org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IExpectationSetters times(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IExpectationSetters once()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IExpectationSetters atLeastOnce()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IExpectationSetters anyTimes()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IMocksControl replay(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.EasyMock replay(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IMocksControl verify(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IMocksControl verifyRecording(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.IMocksControl verifyUnexpectedCalls(..)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.EasyMockSupport replayAll()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.easymock.EasyMockSupport verifyAll()
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andReturn(..)
      newMethodName: thenReturn
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andThrow(java.lang.Throwable)
      newMethodName: thenThrow
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andAnswer(..)
      newMethodName: thenAnswer
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andStubReturn(..)
      newMethodName: thenReturn
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andStubThrow(java.lang.Throwable)
      newMethodName: thenThrow
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.IExpectationSetters andStubAnswer(..)
      newMethodName: thenAnswer
      ignoreDefinition: true
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.IMocksControl mock(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.IMocksControl createMock(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.easymock.IArgumentMatcher
      newFullyQualifiedTypeName: org.mockito.ArgumentMatcher
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock anyObject(..)
      newMethodName: any
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock capture(..)
      newMethodName: argThat
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock reportMatcher(..)
      newMethodName: argThat
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock expect(..)
      newMethodName: when
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock createNiceMock(..)
      newMethodName: mock
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock createStrictMock(..)
      newMethodName: mock
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock createMock(..)
      newMethodName: mock
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock niceMock(..)
      newMethodName: mock
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.easymock.EasyMock strictMock(..)
      newMethodName: mock
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.easymock.EasyMock mock(String, Class)
      newParameterNames: [classToMock, name]
      oldParameterNames: [name, classToMock]
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock lt(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock leq(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock gt(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock geq(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock and(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock or(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.easymock.EasyMock not(..)
      fullyQualifiedTargetTypeName: org.mockito.AdditionalMatchers
  - org.openrewrite.java.testing.easymock.RemoveExtendsEasyMockSupport
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.easymock.EasyMock
      newFullyQualifiedTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.easymock.EasyMockRunner
      newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.easymock.Mock
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.easymock.TestSubject
      newFullyQualifiedTypeName: org.mockito.InjectMocks
  - org.openrewrite.java.testing.mockito.MockitoBestPractices

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
    activeRecipe("org.openrewrite.java.testing.easymock.EasyMockToMockito")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.easymock.EasyMockToMockito")
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
            <recipe>org.openrewrite.java.testing.easymock.EasyMockToMockito</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_REWRITE_TESTING_FRAMEWORKS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.easymock.EasyMockToMockito -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe EasyMockToMockito
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.easymock.EasyMockToMockito" />

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
[Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Tim te Beek](mailto:tim@moderne.io), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Greg Adams](mailto:gadams@gmail.com), [Matthias Klauer](mailto:matthias.klauer@sap.com), [Jente Sondervorst](mailto:jentesondervorst@gmail.com), Patrick Way, [Sander Knauff](mailto:sanderknauff@hotmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:greg@moderne.io), John Burns, [Patrick](mailto:patway99@gmail.com), [Adam Birem](mailto:adam.birem@praxedo.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), [Sam Snyder](mailto:sam@moderne.io), SiBorea, [Laurens Westerlaken](mailto:laurens.w@live.nl), Josh Soref, [Tim te Beek](mailto:timtebeek@gmail.com), [Niels de Bruin](mailto:nielsdebruin@gmail.com), Aaron Gershman
