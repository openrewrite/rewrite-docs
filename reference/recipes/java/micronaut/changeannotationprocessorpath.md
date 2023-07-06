# Change Maven annotation processor path

**org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath**

_Change the groupId, artifactId, and version of a Maven annotation processor path._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/ChangeAnnotationProcessorPath.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. |
| `String` | newVersion | *Optional*. An exact version string for the annotation processor path. |
| `List` | exclusions | *Optional*. A list of exclusions to apply to the annotation processor path in the format groupId:artifactId |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeAnnotationProcessorPathExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeAnnotationProcessorPathExample
displayName: Change Maven annotation processor path example
recipeList:
  - org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: my-deprecated-annotation-processor
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: my-new-annotation-processor
      newVersion: ${micronaut.validation}
      exclusions: io.micronaut:micronaut-inject
```
{% endcode %}

Now that `com.yourorg.ChangeAnnotationProcessorPathExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("com.yourorg.ChangeAnnotationProcessorPathExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.0.1")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeAnnotationProcessorPathExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.0.1</version>
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

## Contributors
* [Jeremy Grelle](mailto:grellej@unityfoundation.io)
* [Tim te Beek](mailto:tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
