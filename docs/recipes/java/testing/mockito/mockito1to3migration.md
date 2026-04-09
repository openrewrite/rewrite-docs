---
sidebar_label: "Mockito 3.x migration from 1.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mockito 3.x migration from 1.x

**org.openrewrite.java.testing.mockito.Mockito1to3Migration**

_Upgrade Mockito from 1.x to 3.x._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [mockito](/reference/recipes-by-tag#mockito)

## Recipe source

[GitHub: mockito.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.MockitoAnnotations.Mock`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Replace Mockito 1.x `anyString()`/`any()` with `nullable(Class)`](../../../java/testing/mockito/anytonullable)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.Matchers`
  * newFullyQualifiedTypeName: `org.mockito.ArgumentMatchers`
* [Convert `ArgumentMatcher&lt;T&gt;` anonymous class to lambda](../../../java/testing/mockito/argumentmatchertolambda)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyVararg()`
  * newMethodName: `any`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyObject()`
  * newMethodName: `any`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyListOf(java.lang.Class)`
  * newMethodName: `anyList`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers anyList(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anySetOf(java.lang.Class)`
  * newMethodName: `anySet`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers anySet(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyMapOf(java.lang.Class, java.lang.Class)`
  * newMethodName: `anyMap`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers anyMap(java.lang.Class, java.lang.Class)`
  * argumentIndex: `0`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers anyMap(java.lang.Class)`
  * argumentIndex: `0`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyCollectionOf()`
  * newMethodName: `anyCollection`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.ArgumentMatchers anyIterableOf()`
  * newMethodName: `anyIterable`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers isNull(java.lang.Class)`
  * argumentIndex: `0`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.mockito.ArgumentMatchers notNull(java.lang.Class)`
  * argumentIndex: `0`
* [Reorder method arguments](../../../java/reordermethodarguments)
  * methodPattern: `org.mockito.MockedStatic verify(org.mockito.verification.VerificationMode, org.mockito.MockedStatic.Verification)`
  * newParameterNames: `[verification, mode]`
  * oldParameterNames: `[mode, verification]`
* [Replace `verifyZeroInteractions()` with `verifyNoMoreInteractions()`](../../../java/testing/mockito/verifyzerotonomoreinteractions)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.Mockito verifyZeroInteractions(..)`
  * newMethodName: `verifyNoInteractions`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)`
  * newMethodName: `getArgument`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.exceptions.verification.TooLittleActualInvocations`
  * newFullyQualifiedTypeName: `org.mockito.exceptions.verification.TooFewActualInvocations`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.configuration.AnnotationEngine`
  * newFullyQualifiedTypeName: `org.mockito.plugins.AnnotationEngine`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.plugins.InstantiatorProvider`
  * newFullyQualifiedTypeName: `org.mockito.plugins.InstantiatorProvider2`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.mockito.runners.MockitoJUnitRunner`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Replace undeclared checked exceptions in `thenThrow` with `RuntimeException`](../../../java/testing/mockito/thenthrowcheckedexceptiontoruntimeexception)
* [Cleanup Mockito imports](../../../java/testing/mockito/cleanupmockitoimports)
* [Use static form of Mockito `MockUtil`](../../../java/testing/mockito/mockutilstostatic)
* [Replace PowerMock with raw Mockito](../../../java/testing/mockito/replacepowermockito)
* [JUnit 4 `MockitoJUnit` to JUnit Jupiter `MockitoExtension`](../../../java/testing/junit5/mockitojunittomockitoextension)
* [Adds Mockito extensions to Mockito tests](../../../java/testing/mockito/addmockitoextensionifannotationsused)
* [Add mockito-junit-jupiter dependency](../../../java/testing/mockito/addmockitojupiterdependency)
* [Replace `MockitoTestExecutionListener` (JUnit Jupiter projects)](../../../java/testing/mockito/replacemockitotestexecutionlistenerforjupiter)
* [Replace `MockitoTestExecutionListener` (JUnit 4 projects)](../../../java/testing/mockito/replacemockitotestexecutionlistenerforjunit4)
* [Replace `MockitoTestExecutionListener` (TestNG projects)](../../../java/testing/mockito/replacemockitotestexecutionlistenerfortestng)
* [Remove `MockitoAnnotations.initMocks(this)` and `openMocks(this)` if JUnit runners specified](../../../java/testing/mockito/removeinitmocksifrunnersspecified)
* [Remove `doNothing()` for void methods on `@Mock` fields](../../../java/testing/mockito/removedonothingfordefaultmocks)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.mockito`
  * oldArtifactId: `mockito-all`
  * newArtifactId: `mockito-core`
  * newVersion: `3.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `net.bytebuddy`
  * artifactId: `byte-buddy*`
  * newVersion: `1.11.13`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.mockito.Mockito anyObject()`
  * newMethodName: `any`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.Mockito1to3Migration
displayName: Mockito 3.x migration from 1.x
description: |
  Upgrade Mockito from 1.x to 3.x.
tags:
  - testing
  - mockito
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.MockitoAnnotations.Mock
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.testing.mockito.AnyToNullable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.Matchers
      newFullyQualifiedTypeName: org.mockito.ArgumentMatchers
  - org.openrewrite.java.testing.mockito.ArgumentMatcherToLambda
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
      newParameterNames:
        - verification
        - mode
      oldParameterNames:
        - mode
        - verification
  - org.openrewrite.java.testing.mockito.VerifyZeroToNoMoreInteractions
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
  - org.openrewrite.java.testing.mockito.ThenThrowCheckedExceptionToRuntimeException
  - org.openrewrite.java.testing.mockito.CleanupMockitoImports
  - org.openrewrite.java.testing.mockito.MockUtilsToStatic
  - org.openrewrite.java.testing.mockito.ReplacePowerMockito
  - org.openrewrite.java.testing.junit5.MockitoJUnitToMockitoExtension
  - org.openrewrite.java.testing.mockito.AddMockitoExtensionIfAnnotationsUsed
  - org.openrewrite.java.testing.mockito.AddMockitoJupiterDependency
  - org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForJupiter
  - org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForJUnit4
  - org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListenerForTestNG
  - org.openrewrite.java.testing.mockito.RemoveInitMocksIfRunnersSpecified
  - org.openrewrite.java.testing.mockito.RemoveDoNothingForDefaultMocks
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.mockito
      oldArtifactId: mockito-all
      newArtifactId: mockito-core
      newVersion: 3.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: "*"
      newVersion: 3.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: net.bytebuddy
      artifactId: byte-buddy*
      newVersion: 1.11.13
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Mockito anyObject()
      newMethodName: any

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Mockito 4.x upgrade](/recipes/java/testing/mockito/mockito1to4migration.md)

## Examples
##### Example 1
`Mockito1to3MigrationTest#migrateSomeMethodsAndDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java-library'
}
repositories {
    mavenCentral()
}
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-all:1.10.19")
    testImplementation("org.mockito:mockito-junit-jupiter:2.28.2")
}
test {
    useJUnitPlatform()
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java-library'
}
repositories {
    mavenCentral()
}
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:3.12.4")
    testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
test {
    useJUnitPlatform()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -9,2 +9,2 @@
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
-   testImplementation("org.mockito:mockito-all:1.10.19")
-   testImplementation("org.mockito:mockito-junit-jupiter:2.28.2")
+   testImplementation("org.mockito:mockito-core:3.12.4")
+   testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.mockito.Matchers.anyListOf;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;

class MyTest {
    @Mock
    Object objectMock;

    private A subject;

    @BeforeEach
    void setup() {
        subject = new A();
    }

    @Test
    void someTest() {
        when(subject.someMethod(anyObject(), anyString(), anyListOf(String.class))).thenReturn(false);
    }
}
```

###### After
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MyTest {
    @Mock
    Object objectMock;

    private A subject;

    @BeforeEach
    void setup() {
        subject = new A();
    }

    @Test
    void someTest() {
        when(subject.someMethod(any(), anyString(), anyList())).thenReturn(false);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,1 @@
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
@@ -4,0 +5,1 @@
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
+import org.mockito.junit.jupiter.MockitoExtension;

@@ -5,3 +7,3 @@
import org.mockito.Mock;

-import static org.mockito.Matchers.anyListOf;
-import static org.mockito.Matchers.anyObject;
-import static org.mockito.Matchers.anyString;
+import static org.mockito.ArgumentMatchers.anyList;
+import static org.mockito.ArgumentMatchers.any;
+import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
@@ -10,0 +12,1 @@
import static org.mockito.Mockito.when;

+@ExtendWith(MockitoExtension.class)
class MyTest {
@@ -23,1 +26,1 @@
    @Test
    void someTest() {
-       when(subject.someMethod(anyObject(), anyString(), anyListOf(String.class))).thenReturn(false);
+       when(subject.someMethod(any(), anyString(), anyList())).thenReturn(false);
    }
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>some-project</artifactId>
  <version>1.0-SNAPSHOT</version>
  <dependencies>
      <dependency>
          <groupId>org.junit.jupiter</groupId>
          <artifactId>junit-jupiter-api</artifactId>
          <version>5.11.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-all</artifactId>
          <version>1.10.19</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
          <version>2.28.2</version>
      </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>some-project</artifactId>
  <version>1.0-SNAPSHOT</version>
  <dependencies>
      <dependency>
          <groupId>org.junit.jupiter</groupId>
          <artifactId>junit-jupiter-api</artifactId>
          <version>5.11.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-core</artifactId>
          <version>3.12.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
          <version>3.12.4</version>
      </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -13,2 +13,2 @@
      <dependency>
          <groupId>org.mockito</groupId>
-         <artifactId>mockito-all</artifactId>
-         <version>1.10.19</version>
+         <artifactId>mockito-core</artifactId>
+         <version>3.12.4</version>
      </dependency>
@@ -19,1 +19,1 @@
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
-         <version>2.28.2</version>
+         <version>3.12.4</version>
      </dependency>
```
</TabItem>
</Tabs>

---

##### Example 2
`MockitoMatchersToArgumentMatchersTest#mockitoAnyListOfToListOf`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package mockito.example;

import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.mockito.ArgumentMatchers.anyListOf;
import static org.mockito.ArgumentMatchers.anySetOf;
import static org.mockito.ArgumentMatchers.anyMapOf;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MockitoVarargMatcherTest {
    public static class Foo {
        public boolean addList(List<String> strings) { return true; }
        public boolean addSet(Set<String> strings) { return true; }
        public boolean addMap(Map<String, String> stringStringMap) { return true; }
    }
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
        when(mockFoo.addList(anyListOf(String.class))).thenReturn(true);
        when(mockFoo.addSet(anySetOf(String.class))).thenReturn(true);
        when(mockFoo.addMap(anyMapOf(String.class, String.class))).thenReturn(true);
    }
}
```

###### After
```java
package mockito.example;

import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anySet;
import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MockitoVarargMatcherTest {
    public static class Foo {
        public boolean addList(List<String> strings) { return true; }
        public boolean addSet(Set<String> strings) { return true; }
        public boolean addMap(Map<String, String> stringStringMap) { return true; }
    }
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
        when(mockFoo.addList(anyList())).thenReturn(true);
        when(mockFoo.addSet(anySet())).thenReturn(true);
        when(mockFoo.addMap(anyMap())).thenReturn(true);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,3 +7,3 @@
import java.util.Set;

-import static org.mockito.ArgumentMatchers.anyListOf;
-import static org.mockito.ArgumentMatchers.anySetOf;
-import static org.mockito.ArgumentMatchers.anyMapOf;
+import static org.mockito.ArgumentMatchers.anyList;
+import static org.mockito.ArgumentMatchers.anySet;
+import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.Mockito.mock;
@@ -21,3 +21,3 @@
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
-       when(mockFoo.addList(anyListOf(String.class))).thenReturn(true);
-       when(mockFoo.addSet(anySetOf(String.class))).thenReturn(true);
-       when(mockFoo.addMap(anyMapOf(String.class, String.class))).thenReturn(true);
+       when(mockFoo.addList(anyList())).thenReturn(true);
+       when(mockFoo.addSet(anySet())).thenReturn(true);
+       when(mockFoo.addMap(anyMap())).thenReturn(true);
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`Mockito1to3MigrationTest#migrateSomeMethodsAndDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java-library'
}
repositories {
    mavenCentral()
}
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-all:1.10.19")
    testImplementation("org.mockito:mockito-junit-jupiter:2.28.2")
}
test {
    useJUnitPlatform()
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java-library'
}
repositories {
    mavenCentral()
}
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:3.12.4")
    testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
test {
    useJUnitPlatform()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -9,2 +9,2 @@
dependencies {
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
-   testImplementation("org.mockito:mockito-all:1.10.19")
-   testImplementation("org.mockito:mockito-junit-jupiter:2.28.2")
+   testImplementation("org.mockito:mockito-core:3.12.4")
+   testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.mockito.Matchers.anyListOf;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.when;

class MyTest {
    @Mock
    Object objectMock;

    private A subject;

    @BeforeEach
    void setup() {
        subject = new A();
    }

    @Test
    void someTest() {
        when(subject.someMethod(anyObject(), anyString(), anyListOf(String.class))).thenReturn(false);
    }
}
```

###### After
```java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class MyTest {
    @Mock
    Object objectMock;

    private A subject;

    @BeforeEach
    void setup() {
        subject = new A();
    }

    @Test
    void someTest() {
        when(subject.someMethod(any(), anyString(), anyList())).thenReturn(false);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,1 @@
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
+import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
@@ -4,0 +5,1 @@
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
+import org.mockito.junit.jupiter.MockitoExtension;

@@ -5,3 +7,3 @@
import org.mockito.Mock;

-import static org.mockito.Matchers.anyListOf;
-import static org.mockito.Matchers.anyObject;
-import static org.mockito.Matchers.anyString;
+import static org.mockito.ArgumentMatchers.anyList;
+import static org.mockito.ArgumentMatchers.any;
+import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
@@ -10,0 +12,1 @@
import static org.mockito.Mockito.when;

+@ExtendWith(MockitoExtension.class)
class MyTest {
@@ -23,1 +26,1 @@
    @Test
    void someTest() {
-       when(subject.someMethod(anyObject(), anyString(), anyListOf(String.class))).thenReturn(false);
+       when(subject.someMethod(any(), anyString(), anyList())).thenReturn(false);
    }
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>some-project</artifactId>
  <version>1.0-SNAPSHOT</version>
  <dependencies>
      <dependency>
          <groupId>org.junit.jupiter</groupId>
          <artifactId>junit-jupiter-api</artifactId>
          <version>5.11.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-all</artifactId>
          <version>1.10.19</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
          <version>2.28.2</version>
      </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>org.example</groupId>
  <artifactId>some-project</artifactId>
  <version>1.0-SNAPSHOT</version>
  <dependencies>
      <dependency>
          <groupId>org.junit.jupiter</groupId>
          <artifactId>junit-jupiter-api</artifactId>
          <version>5.11.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-core</artifactId>
          <version>3.12.4</version>
      </dependency>
      <dependency>
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
          <version>3.12.4</version>
      </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -13,2 +13,2 @@
      <dependency>
          <groupId>org.mockito</groupId>
-         <artifactId>mockito-all</artifactId>
-         <version>1.10.19</version>
+         <artifactId>mockito-core</artifactId>
+         <version>3.12.4</version>
      </dependency>
@@ -19,1 +19,1 @@
          <groupId>org.mockito</groupId>
          <artifactId>mockito-junit-jupiter</artifactId>
-         <version>2.28.2</version>
+         <version>3.12.4</version>
      </dependency>
```
</TabItem>
</Tabs>

---

##### Example 4
`MockitoMatchersToArgumentMatchersTest#mockitoAnyListOfToListOf`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package mockito.example;

import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.mockito.ArgumentMatchers.anyListOf;
import static org.mockito.ArgumentMatchers.anySetOf;
import static org.mockito.ArgumentMatchers.anyMapOf;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MockitoVarargMatcherTest {
    public static class Foo {
        public boolean addList(List<String> strings) { return true; }
        public boolean addSet(Set<String> strings) { return true; }
        public boolean addMap(Map<String, String> stringStringMap) { return true; }
    }
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
        when(mockFoo.addList(anyListOf(String.class))).thenReturn(true);
        when(mockFoo.addSet(anySetOf(String.class))).thenReturn(true);
        when(mockFoo.addMap(anyMapOf(String.class, String.class))).thenReturn(true);
    }
}
```

###### After
```java
package mockito.example;

import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.ArgumentMatchers.anySet;
import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MockitoVarargMatcherTest {
    public static class Foo {
        public boolean addList(List<String> strings) { return true; }
        public boolean addSet(Set<String> strings) { return true; }
        public boolean addMap(Map<String, String> stringStringMap) { return true; }
    }
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
        when(mockFoo.addList(anyList())).thenReturn(true);
        when(mockFoo.addSet(anySet())).thenReturn(true);
        when(mockFoo.addMap(anyMap())).thenReturn(true);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,3 +7,3 @@
import java.util.Set;

-import static org.mockito.ArgumentMatchers.anyListOf;
-import static org.mockito.ArgumentMatchers.anySetOf;
-import static org.mockito.ArgumentMatchers.anyMapOf;
+import static org.mockito.ArgumentMatchers.anyList;
+import static org.mockito.ArgumentMatchers.anySet;
+import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.Mockito.mock;
@@ -21,3 +21,3 @@
    public void usesVarargMatcher() {
        Foo mockFoo = mock(Foo.class);
-       when(mockFoo.addList(anyListOf(String.class))).thenReturn(true);
-       when(mockFoo.addSet(anySetOf(String.class))).thenReturn(true);
-       when(mockFoo.addMap(anyMapOf(String.class, String.class))).thenReturn(true);
+       when(mockFoo.addList(anyList())).thenReturn(true);
+       when(mockFoo.addSet(anySet())).thenReturn(true);
+       when(mockFoo.addMap(anyMap())).thenReturn(true);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.Mockito1to3Migration"
  displayName="Mockito 3.x migration from 1.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to3Migration" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
