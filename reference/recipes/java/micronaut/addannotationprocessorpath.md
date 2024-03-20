# Add Maven annotation processor path

**org.openrewrite.java.micronaut.AddAnnotationProcessorPath**

_Add the groupId, artifactId, version, and exclusions of a Maven annotation processor path._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/AddAnnotationProcessorPath.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.3.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.3.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The groupId to use. | `corp.internal.openrewrite.recipe` |
| `String` | artifactId | The artifactId to use. | `my-new-annotation-processor` |
| `String` | version | An exact version string for the annotation processor path. | `${micronaut.validation}` |
| `String` | onlyIfUsing | Used to determine if the annotation processor will be added. | `jakarta.validation.constraints.*` |
| `List` | exclusions | *Optional*. A list of exclusions to apply to the annotation processor path in the format groupId:artifactId | `io.micronaut:micronaut-inject` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddAnnotationProcessorPathExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddAnnotationProcessorPathExample
displayName: Add Maven annotation processor path example
recipeList:
  - org.openrewrite.java.micronaut.AddAnnotationProcessorPath:
      groupId: corp.internal.openrewrite.recipe
      artifactId: my-new-annotation-processor
      version: ${micronaut.validation}
      onlyIfUsing: jakarta.validation.constraints.*
      exclusions: io.micronaut:micronaut-inject
```
{% endcode %}

Now that `com.yourorg.AddAnnotationProcessorPathExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:2.3.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("com.yourorg.AddAnnotationProcessorPathExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.3.1")
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddAnnotationProcessorPathExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.3.1</version>
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
mod run . --recipe AddAnnotationProcessorPathExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.AddAnnotationProcessorPath)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
