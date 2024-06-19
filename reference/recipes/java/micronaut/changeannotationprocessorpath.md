# Change Maven annotation processor path

**org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath**

_Change the groupId, artifactId, and version of a Maven annotation processor path._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/ChangeAnnotationProcessorPath.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.7.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `my-deprecated-annotation-processor` |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. | `my-new-annotation-processor` |
| `String` | newVersion | *Optional*. An version string for the annotation processor path. Version strings that start with 'micronaut.' will be treated specially.  | `micronaut.validation` |
| `List` | exclusions | *Optional*. A list of exclusions to apply to the annotation processor path in the format groupId:artifactId | `io.micronaut:micronaut-inject` |


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
      newVersion: micronaut.validation
      exclusions: io.micronaut:micronaut-inject
```
{% endcode %}

Now that `com.yourorg.ChangeAnnotationProcessorPathExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:2.7.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangeAnnotationProcessorPathExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.7.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.ChangeAnnotationProcessorPathExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.7.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ChangeAnnotationProcessorPathExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.ChangeAnnotationProcessorPath)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jeremy Grelle](mailto:grellej@unityfoundation.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
