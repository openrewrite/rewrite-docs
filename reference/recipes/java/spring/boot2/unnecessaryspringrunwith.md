# Remove unnecessary Spring `@RunWith`

** org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith**
_Remove `@RunWith` annotations on Spring tests._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.14.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.14.0")
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
            <recipe>org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.14.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner]`
  * extension: `org.springframework.test.context.junit.jupiter.SpringExtension`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
displayName: Remove unnecessary Spring `@RunWith`
description: Remove `@RunWith` annotations on Spring tests.
recipeList:
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner]
      extension: org.springframework.test.context.junit.jupiter.SpringExtension

```
{% endtab %}
{% endtabs %}
