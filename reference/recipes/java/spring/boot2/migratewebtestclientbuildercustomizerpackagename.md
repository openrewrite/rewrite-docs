# Use `WebTestClientBuilderCustomizer`

** org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName**
_`org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientBuilderCustomizer` was deprecated in 2.2._

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
    id("org.openrewrite.rewrite") version("5.26.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName")
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
        <version>4.31.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientBuilderCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.web.reactive.server.WebTestClientBuilderCustomizer`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateWebTestClientBuilderCustomizerPackageName
displayName: Use `WebTestClientBuilderCustomizer`
description: `org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientBuilderCustomizer` was deprecated in 2.2.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientBuilderCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.test.web.reactive.server.WebTestClientBuilderCustomizer

```
{% endtab %}
{% endtabs %}
