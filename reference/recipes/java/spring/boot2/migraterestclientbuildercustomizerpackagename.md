# Use `RestClientBuilderCustomizer`

** org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName**
_`org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer` was deprecated in 2.3._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.19.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.19.3


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.19.3 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.19.3")
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
        <version>4.22.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.19.3</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.elasticsearch.RestClientBuilderCustomizer`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName
displayName: Use `RestClientBuilderCustomizer`
description: `org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer` was deprecated in 2.3.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.elasticsearch.RestClientBuilderCustomizer

```
{% endtab %}
{% endtabs %}
