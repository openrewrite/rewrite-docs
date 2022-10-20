# AssertJ best practices

** org.openrewrite.java.testing.assertj.Assertj**
_Migrates JUnit asserts to AssertJ and applies best practices to assertions._

### Tags

* testing
* assertj

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.30.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.30.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.Assertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.30.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.30.0 \
  -DactiveRecipes=org.openrewrite.java.testing.assertj.Assertj
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Statically import AssertJ's `assertThat`](../../../java/testing/assertj/staticimports.md)
* [Migrate JUnit asserts to AssertJ](../../../java/testing/assertj/junittoassertj.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.Assertj
displayName: AssertJ best practices
description: Migrates JUnit asserts to AssertJ and applies best practices to assertions.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.assertj.StaticImports
  - org.openrewrite.java.testing.assertj.JUnitToAssertj

```
{% endtab %}
{% endtabs %}
