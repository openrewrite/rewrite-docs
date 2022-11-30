# Clean Up Assertions

**org.openrewrite.java.testing.junit5.CleanupAssertions** _Simplifies JUnit Jupiter assertions to their most-direct equivalents_

### Tags

* junit
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.31.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.CleanupAssertions")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.CleanupAssertions</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.31.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 \
  -DactiveRecipes=org.openrewrite.java.testing.junit5.CleanupAssertions
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.CleanupAssertions`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUnit `assertTrue(!<boolean>)` to `assertFalse(<boolean>)`](../cleanup/asserttruenegationtoassertfalse.md)
* [Replace JUnit `assertFalse(!<boolean>)` to `assertTrue(<boolean>)`](../cleanup/assertfalsenegationtoasserttrue.md)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](../cleanup/asserttrueequalstoassertequals.md)
* [Junit `assertTrue(a == b)` to `assertEquals(a,b)`](../cleanup/asserttruecomparisontoassertequals.md)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](../cleanup/assertfalseequalstoassertnotequals.md)
* [`assertEquals(a, null)` to `assertNull(a)`](../cleanup/assertequalsnulltoassertnull.md)
* [Replace JUnit `assertFalse(a == null)` to `assertNotNull(a)`](../cleanup/assertfalsenulltoassertnotnull.md)
* [Assertion arguments should be passed in the correct order](../cleanup/assertionsargumentorder.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.CleanupAssertions
displayName: Clean Up Assertions
description: Simplifies JUnit Jupiter assertions to their most-direct equivalents
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.cleanup.AssertTrueNegationToAssertFalse
  - org.openrewrite.java.testing.cleanup.AssertFalseNegationToAssertTrue
  - org.openrewrite.java.testing.cleanup.AssertTrueEqualsToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertFalseEqualsToAssertNotEquals
  - org.openrewrite.java.testing.cleanup.AssertEqualsNullToAssertNull
  - org.openrewrite.java.testing.cleanup.AssertFalseNullToAssertNotNull
  - org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder
```
{% endtab %}
{% endtabs %}
