# Use `PingHealthIndicator`

** org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator**
_`org.springframework.boot.actuate.health.AbstractHealthIndicator` was deprecated in 2.2._

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
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator")
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
        <version>4.15.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.AbstractHealthIndicator`
  * newFullyQualifiedTypeName: `org.springframework.boot.actuate.health.PingHealthIndicator`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateAbstractHealthIndicatorToPingHealthIndicator
displayName: Use `PingHealthIndicator`
description: `org.springframework.boot.actuate.health.AbstractHealthIndicator` was deprecated in 2.2.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.AbstractHealthIndicator
      newFullyQualifiedTypeName: org.springframework.boot.actuate.health.PingHealthIndicator

```
{% endtab %}
{% endtabs %}
