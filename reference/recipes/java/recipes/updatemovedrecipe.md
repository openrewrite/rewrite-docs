# Update moved package recipe

**org.openrewrite.java.recipes.UpdateMovedRecipe**

_Update moved package recipe._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/UpdateMovedRecipe.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.6

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldRecipeFullyQualifiedClassName | The fully qualified className of recipe moved from a old package. |
| `String` | newRecipeFullyQualifiedClassName | The fully qualified className of recipe moved to a new package. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateMovedRecipeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateMovedRecipeExample
displayName: Update moved package recipe example
recipeList:
  - org.openrewrite.java.recipes.UpdateMovedRecipe:
      oldRecipeFullyQualifiedClassName: org.openrewrite.java.cleanup.UnnecessaryCatch
      newRecipeFullyQualifiedClassName: org.openrewrite.staticanalysis.UnnecessaryCatch
```
{% endcode %}

Now that `com.yourorg.UpdateMovedRecipeExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("com.yourorg.UpdateMovedRecipeExample")
}

repositories {
    mavenCentral()
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
            <recipe>com.yourorg.UpdateMovedRecipeExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Update moved package class name](../../java/recipes/updatemovedpackageclassname.md)
  * fullyQualifiedClassNameMovedFrom: ``
  * fullyQualifiedClassNameMovedTo: ``
* [Update moved package recipe in yaml file](../../java/recipes/updatemovedrecipeyaml.md)
  * oldRecipeFullyQualifiedClassName: ``
  * newRecipeFullyQualifiedClassName: ``
* [Update moved package recipe in pom.xml](../../java/recipes/updatemovedrecipexml.md)
  * oldRecipeFullyQualifiedClassName: ``
  * newRecipeFullyQualifiedClassName: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.recipes.UpdateMovedRecipe
displayName: Update moved package recipe
description: Update moved package recipe.
oldRecipeFullyQualifiedClassName: 

newRecipeFullyQualifiedClassName: 

recipeList:
  - org.openrewrite.java.recipes.UpdateMovedPackageClassName:
      fullyQualifiedClassNameMovedFrom: 
      fullyQualifiedClassNameMovedTo: 
  - org.openrewrite.java.recipes.UpdateMovedRecipeYaml:
      oldRecipeFullyQualifiedClassName: 
      newRecipeFullyQualifiedClassName: 
  - org.openrewrite.java.recipes.UpdateMovedRecipeXml:
      oldRecipeFullyQualifiedClassName: 
      newRecipeFullyQualifiedClassName: 

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.recipes.UpdateMovedRecipe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
