# Remove Maven annotation processor path

**org.openrewrite.java.micronaut.RemoveAnnotationProcessorPath**

_Remove the Maven annotation processor path that matches the given groupId and artifactId._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/RemoveAnnotationProcessorPath.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The groupId to use. |
| `String` | artifactId | The artifactId to use. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveAnnotationProcessorPathExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveAnnotationProcessorPathExample
displayName: Remove Maven annotation processor path example
recipeList:
  - org.openrewrite.java.micronaut.RemoveAnnotationProcessorPath:
      groupId: corp.internal.openrewrite.recipe
      artifactId: my-new-annotation-processor
```
{% endcode %}

Now that `com.yourorg.RemoveAnnotationProcessorPathExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:2.1.3 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.16")
}

rewrite {
    activeRecipe("com.yourorg.RemoveAnnotationProcessorPathExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.3")
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
        <version>5.7.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveAnnotationProcessorPathExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.3</version>
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
{% endtabs %}

## Contributors
* [Jeremy Grelle](mailto:grellej@unityfoundation.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.RemoveAnnotationProcessorPath)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
