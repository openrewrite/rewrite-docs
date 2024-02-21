# Find annotations

**org.openrewrite.java.search.FindAnnotations**

_Find all annotations matching the annotation pattern._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindAnnotations.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.17.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.17.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | annotationPattern | An annotation pattern, expressed as a [method pattern](/reference/method-patterns.md). | `@java.lang.SuppressWarnings("deprecation")` |
| `Boolean` | matchMetaAnnotations | *Optional*. When enabled, matches on meta annotations of the annotation pattern. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindAnnotationsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindAnnotationsExample
displayName: Find annotations example
recipeList:
  - org.openrewrite.java.search.FindAnnotations:
      annotationPattern: '@java.lang.SuppressWarnings("deprecation")'
```
{% endcode %}

Now that `com.yourorg.FindAnnotationsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.4")
}

rewrite {
    activeRecipe("com.yourorg.FindAnnotationsExample")
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
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindAnnotationsExample</recipe>
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
mod run . --recipe FindAnnotationsExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.search.FindAnnotations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:greg@moderne.io), Tyler Van Gorder, [Sam Snyder](mailto:sam@moderne.io), Patrick Way, [Tim te Beek](mailto:tim@moderne.io)
