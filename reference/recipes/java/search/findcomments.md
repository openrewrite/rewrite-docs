# Find within comments and literals

**org.openrewrite.java.search.FindComments**

_Find regular expression matches within comments and literals. "Literals" includes string literals, character literals, and numeric literals._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindComments.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.11.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | patterns | A list of regular expressions to search for. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindCommentsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindCommentsExample
displayName: Find within comments and literals example
recipeList:
  - org.openrewrite.java.search.FindComments:
      patterns: -----BEGIN RSA PRIVATE KEY-----
```
{% endcode %}

Now that `com.yourorg.FindCommentsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("com.yourorg.FindCommentsExample")
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
        <version>5.14.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindCommentsExample</recipe>
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
mod run . --recipe FindComments
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.search.FindComments)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
