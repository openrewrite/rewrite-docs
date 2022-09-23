# Use `RestClientBuilderCustomizer`

** org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName**
_`org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer` was deprecated in 2.3._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.27.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.27.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.27.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.27.0")
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
        <version>4.34.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.27.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.27.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateRestClientBuilderCustomizerPackageName`

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
