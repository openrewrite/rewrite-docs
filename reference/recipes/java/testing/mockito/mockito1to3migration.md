# Mockito 3.x migration from 1.x

**org.openrewrite.java.testing.mockito.Mockito1to3Migration**

_Upgrade Mockito from 1.x to 3.x._

### Tags

* testing
* mockito

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.8

## Examples
##### Example 1


{% tabs %}
{% tab title="mockito/example/MockitoVarargMatcherTest.java" %}

###### Before
{% code title="mockito/example/MockitoVarargMatcherTest.java" %}
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
{% endcode %}

###### After
{% code title="mockito/example/MockitoVarargMatcherTest.java" %}
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- mockito/example/MockitoVarargMatcherTest.java
+++ mockito/example/MockitoVarargMatcherTest.java
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
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="mockito/example/MockitoVarargMatcherTest.java" %}

###### Before
{% code title="mockito/example/MockitoVarargMatcherTest.java" %}
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
{% endcode %}

###### After
{% code title="mockito/example/MockitoVarargMatcherTest.java" %}
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- mockito/example/MockitoVarargMatcherTest.java
+++ mockito/example/MockitoVarargMatcherTest.java
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
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.mockito.Mockito1to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.8</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.Mockito1to3Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

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
  * methodPattern: `org.mockito.ArgumentMatchers anyMap(java.lang.Class, java.lang.Class)`
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
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.mockito`
  * artifactId: `mockito-junit-jupiter`
  * version: `3.x`
  * onlyIfUsing: `org.mockito.junit.jupiter.MockitoExtension`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`

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
      methodPattern: org.mockito.ArgumentMatchers anyMap(java.lang.Class, java.lang.Class)
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
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.mockito
      artifactId: mockito-junit-jupiter
      version: 3.x
      onlyIfUsing: org.mockito.junit.jupiter.MockitoExtension
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 3.x

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to3Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
