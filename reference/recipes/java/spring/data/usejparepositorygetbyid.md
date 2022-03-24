# Use `JpaRepository#getById(ID id)`

** org.openrewrite.java.spring.data.UseJpaRepositoryGetById**
_`JpaRepository#getOne(ID)` was deprecated in 2.5._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.18.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.18.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.18.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.data.UseJpaRepositoryGetById")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.18.0")
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
        <version>4.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.data.UseJpaRepositoryGetById</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.18.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.data.UseJpaRepositoryGetById`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.springframework.data.jpa.repository.JpaRepository getOne(..)`
  * newMethodName: `getById`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.data.UseJpaRepositoryGetById
displayName: Use `JpaRepository#getById(ID id)`
description: `JpaRepository#getOne(ID)` was deprecated in 2.5.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.data.jpa.repository.JpaRepository getOne(..)
      newMethodName: getById

```
{% endtab %}
{% endtabs %}
