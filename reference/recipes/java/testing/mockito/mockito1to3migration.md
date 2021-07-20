# Mockito 3.x migration from 1.x

 **org.openrewrite.java.testing.mockito.Mockito1to3Migration** _Spring Boot 2.x requires upgrading from Mockito 1.x to 3.x._

### Tags

* testing
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.8.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.3.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.8.0")
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
        <version>4.7.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.mockito.Mockito1to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.mockito.Mockito1to3Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.MockitoAnnotations.Mock`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change method name](../../changemethodname.md)
  * methodPattern: `org.mockito.Matchers anyVararg()`
  * newMethodName: `any`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.Matchers`
  * newFullyQualifiedTypeName: `org.mockito.ArgumentMatchers`
* [Change method name](../../changemethodname.md)
  * methodPattern: `org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)`
  * newMethodName: `getArgument`
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `org.mockito.runners.MockitoJUnitRunner`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.mockito`
  * artifactId: `mockito-junit-jupiter`
  * version: `3.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.mockito.junit.jupiter.MockitoExtension]`
* [Cleanup Mockito imports](cleanupmockitoimports.md)
* [Use static form of Mockito `MockUtil`](mockutilstostatic.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.Mockito1to3Migration
displayName: Mockito 3.x migration from 1.x
description: Spring Boot 2.x requires upgrading from Mockito 1.x to 3.x.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.MockitoAnnotations.Mock
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Matchers anyVararg()
      newMethodName: any
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.Matchers
      newFullyQualifiedTypeName: org.mockito.ArgumentMatchers
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.invocation.InvocationOnMock getArgumentAt(int, java.lang.Class)
      newMethodName: getArgument
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.mockito.runners.MockitoJUnitRunner
      newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner
  - org.openrewrite.maven.AddDependency:
      groupId: org.mockito
      artifactId: mockito-junit-jupiter
      version: 3.x
      releasesOnly: false
      scope: test
      onlyIfUsing: [org.mockito.junit.jupiter.MockitoExtension]
  - org.openrewrite.java.testing.mockito.CleanupMockitoImports
  - org.openrewrite.java.testing.mockito.MockUtilsToStatic
```
{% endtab %}
{% endtabs %}

