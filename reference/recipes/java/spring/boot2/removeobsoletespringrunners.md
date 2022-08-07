# Remove obsolete Spring JUnit runners

** org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners**
_Remove obsolete classpath runners._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.25.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.25.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.25.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.25.1")
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
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.25.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
displayName: Remove obsolete Spring JUnit runners
description: Remove obsolete classpath runners.
recipeList:
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: [org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]

```
{% endtab %}
{% endtabs %}
