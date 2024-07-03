# Find XML namespace prefixes

**org.openrewrite.xml.search.FindNamespacePrefix**

_Find XML namespace prefixes, optionally restricting the search by a XPath expression._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/search/FindNamespacePrefix.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.29.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.29.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | namespacePrefix | The Namespace Prefix to find. | `http://www.w3.org/2001/XMLSchema-instance` |
| `String` | xPath | *Optional*. An XPath expression used to find namespace URIs. | `/dependencies/dependency` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindNamespacePrefixExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindNamespacePrefixExample
displayName: Find XML namespace prefixes example
recipeList:
  - org.openrewrite.xml.search.FindNamespacePrefix:
      namespacePrefix: http://www.w3.org/2001/XMLSchema-instance
      xPath: /dependencies/dependency
```
{% endcode %}

Now that `com.yourorg.FindNamespacePrefixExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("com.yourorg.FindNamespacePrefixExample")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.FindNamespacePrefixExample</recipe>
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
mod run . --recipe FindNamespacePrefixExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.search.FindNamespacePrefix)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Adriano Machado
