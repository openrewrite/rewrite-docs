# Use `isEagerFilterInit()`

** org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters**
_`org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory#isEagerInitFilters` was deprecated in 2.4 and are removed in 2.6._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.15.0")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.15.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory isEagerInitFilters()`
  * newMethodName: `isEagerFilterInit`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters
displayName: Use `isEagerFilterInit()`
description: `org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory#isEagerInitFilters` was deprecated in 2.4 and are removed in 2.6.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory isEagerInitFilters()
      newMethodName: isEagerFilterInit

```
{% endtab %}
{% endtabs %}
