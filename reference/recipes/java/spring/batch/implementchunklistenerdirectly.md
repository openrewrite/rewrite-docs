# Transform classes that extend `ChunkListenerSupport` to implement the `ChunkListener` interface instead

**org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly**
_As of 5.0 `ChunkListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-batch-5.0.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.33.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.33.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.33.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.33.0")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.33.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Transform classes that extend a given Class to implement the given Interface instead](../../../java/spring/batch/replacesupportclasswithitsinterface.md)
  * fullyQualifiedClassName: `org.springframework.batch.core.listener.ChunkListenerSupport`
  * fullyQualifiedInterfaceName: `org.springframework.batch.core.ChunkListener`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly
displayName: Transform classes that extend `ChunkListenerSupport` to implement the `ChunkListener` interface instead
description: As of 5.0 `ChunkListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter.
recipeList:
  - org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface:
      fullyQualifiedClassName: org.springframework.batch.core.listener.ChunkListenerSupport
      fullyQualifiedInterfaceName: org.springframework.batch.core.ChunkListener

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
