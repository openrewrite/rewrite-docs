# Migrate JUnit asserts to AssertJ

** org.openrewrite.java.testing.assertj.JUnitToAssertj**
_AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability._

### Tags

* testing
* assertj

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.JUnitToAssertj")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.15.0")
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
        <version>4.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.JUnitToAssertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.15.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.assertj.JUnitToAssertj`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.assertj`
  * artifactId: `assertj-core`
  * version: `3.x`
  * onlyIfUsing: `org.assertj.core.api.Assertions`
* [JUnit `assertArrayEquals` To AssertJ](../../../java/testing/assertj/junitassertarrayequalstoassertthat.md)
* [JUnit `assertEquals` to AssertJ](../../../java/testing/assertj/junitassertequalstoassertthat.md)
* [JUnit `assertFalse` to AssertJ](../../../java/testing/assertj/junitassertfalsetoassertthat.md)
* [JUnit `assertNotEquals` to AssertJ](../../../java/testing/assertj/junitassertnotequalstoassertthat.md)
* [JUnit `assertNotNull` to AssertJ](../../../java/testing/assertj/junitassertnotnulltoassertthat.md)
* [JUnit `assertNull` to AssertJ](../../../java/testing/assertj/junitassertnulltoassertthat.md)
* [JUnit `assertSame` to AssertJ](../../../java/testing/assertj/junitassertsametoassertthat.md)
* [JUnit `assertTrue` to AssertJ](../../../java/testing/assertj/junitasserttruetoassertthat.md)
* [JUnit fail to AssertJ](../../../java/testing/assertj/junitfailtoassertjfail.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.JUnitToAssertj
displayName: Migrate JUnit asserts to AssertJ
description: AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: org.assertj.core.api.Assertions
  - org.openrewrite.java.testing.assertj.JUnitAssertArrayEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNotEqualsToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNotNullToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertNullToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertSameToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitAssertTrueToAssertThat
  - org.openrewrite.java.testing.assertj.JUnitFailToAssertJFail

```
{% endtab %}
{% endtabs %}
