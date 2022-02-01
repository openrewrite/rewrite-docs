# Add `org.hamcrest:hamcrest` if it is used.

** org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed**
_JUnit Jupiter does not include hamcrest as a transitive dependency. If needed, add a direct dependency._

### Tags

* junit
* testing
* hamcrest

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.16.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.16.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.hamcrest`
  * artifactId: `hamcrest`
  * version: `2.x`
  * onlyIfUsing: `org.hamcrest.Matchers`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.hamcrest.AddHamcrestIfUsed
displayName: Add `org.hamcrest:hamcrest` if it is used.
description: JUnit Jupiter does not include hamcrest as a transitive dependency. If needed, add a direct dependency.
tags:
  - junit
  - testing
  - hamcrest
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: org.hamcrest
      artifactId: hamcrest
      version: 2.x
      onlyIfUsing: org.hamcrest.Matchers

```
{% endtab %}
{% endtabs %}
