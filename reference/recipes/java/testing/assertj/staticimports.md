# Statically import AssertJ's `assertThat`

** org.openrewrite.java.testing.assertj.StaticImports**
_Consistently use a static import rather than inlining the `Assertions` class name in tests._

### Tags

* testing
* assertj

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.9.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.9.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.9.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.4.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.StaticImports")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.9.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.StaticImports</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.9.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.assertj.StaticImports`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForClassTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Use static import](../../../java/usestaticimport.md)
  * methodPattern: `org.assertj.core.api.Assertions *(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.StaticImports
displayName: Statically import AssertJ's `assertThat`
description: Consistently use a static import rather than inlining the `Assertions` class name in tests.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForClassTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.UseStaticImport:
      methodPattern: org.assertj.core.api.Assertions *(..)

```
{% endtab %}
{% endtabs %}
