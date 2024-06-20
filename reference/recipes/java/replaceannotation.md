# Replace Annotation

**org.openrewrite.java.ReplaceAnnotation**

_Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | annotationPatternToReplace | An annotation matcher, expressed as a [method pattern](/reference/method-patterns.md) to replace. | `@org.jetbrains.annotations.NotNull("Test")` |
| `String` | annotationTemplateToInsert | An annotation template to add instead of original one, will be parsed with `JavaTemplate`. | `@org.jetbrains.annotations.NotNull("Null not permitted")` |
| `String` | classpathResourceName | *Optional*. If the annotation's type is defined by a jar within the META-INF/rewrite/classpath directory provide its name here so that it can be loaded. When this parameter is not passed the runtime classpath of the recipe is provided to the parser producing the new annotation. This is necessary when the annotation is not on the runtime classpath of the recipe and isn't in the Java standard library. | `annotations` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceAnnotationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceAnnotationExample
displayName: Replace Annotation example
recipeList:
  - org.openrewrite.java.ReplaceAnnotation:
      annotationPatternToReplace: '@org.jetbrains.annotations.NotNull("Test")'
      annotationTemplateToInsert: '@org.jetbrains.annotations.NotNull("Null not permitted")'
      classpathResourceName: annotations
```
{% endcode %}

Now that `com.yourorg.ReplaceAnnotationExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceAnnotationExample")
}

repositories {
    mavenCentral()
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
            <recipe>com.yourorg.ReplaceAnnotationExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe ReplaceAnnotationExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ReplaceAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io)
