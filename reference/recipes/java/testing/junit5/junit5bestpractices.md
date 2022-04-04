# JUnit Jupiter best practices

** org.openrewrite.java.testing.junit5.JUnit5BestPractices**
_Applies best practices to tests._

### Tags

* junit
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.20.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.20.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.20.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.JUnit5BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.20.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.junit5.JUnit5BestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Statically import JUnit Jupiter assertions](../../../java/testing/junit5/staticimports.md)
* [JUnit Jupiter migration from JUnit 4.x](../../../java/testing/junit5/junit4to5migration.md)
* [`assertEquals(a, null)` to `assertNull(a)`](../../../java/testing/cleanup/assertequalsnulltoassertnull.md)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](../../../java/testing/cleanup/assertfalseequalstoassertnotequals.md)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](../../../java/testing/cleanup/asserttrueequalstoassertequals.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit5BestPractices
displayName: JUnit Jupiter best practices
description: Applies best practices to tests.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - org.openrewrite.java.testing.cleanup.AssertEqualsNullToAssertNull
  - org.openrewrite.java.testing.cleanup.AssertFalseEqualsToAssertNotEquals
  - org.openrewrite.java.testing.cleanup.AssertTrueEqualsToAssertEquals

```
{% endtab %}
{% endtabs %}
