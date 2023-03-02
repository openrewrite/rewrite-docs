# Properly use declaration-site type variance

**org.openrewrite.java.cleanup.DeclarationSiteTypeVariance**
_Currently, Java requires use-site type variance, so if someone has `Function<IN, OUT>` method parameter, it should rather be `Function<? super IN, ? extends OUT>`. Unfortunately, it is not easy to notice that `? super` and `? extends` is missing, so this recipe adds it where that would improve the situation._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/cleanup/DeclarationSiteTypeVariance.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.37.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.37.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | variantTypes | A list of well-known classes that have in/out type variance. |
| `List` | excludedBounds | *Optional*. A list of bounds that should not receive explicit variance. Globs supported. |
| `Boolean` | excludeFinalClasses | *Optional*. If true, do not add `? extends` variance to final classes. `? super` variance will be added regardless of finality. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeclarationSiteTypeVarianceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeclarationSiteTypeVarianceExample
displayName: Properly use declaration-site type variance example
recipeList:
  - org.openrewrite.java.cleanup.DeclarationSiteTypeVariance:
      variantTypes: java.util.function.Function<IN, OUT>
      excludedBounds: java.lang.*
      excludeFinalClasses: null
```
{% endcode %}


Now that `com.yourorg.DeclarationSiteTypeVarianceExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("com.yourorg.DeclarationSiteTypeVarianceExample")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DeclarationSiteTypeVarianceExample</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.DeclarationSiteTypeVarianceExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.DeclarationSiteTypeVariance)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
