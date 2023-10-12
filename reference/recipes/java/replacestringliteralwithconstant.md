# Replace String literal with constant

**org.openrewrite.java.ReplaceStringLiteralWithConstant**

_Replace String literal with constant, adding import on class if needed._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceStringLiteralWithConstant.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.7.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.7.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | literalValue | *Optional*. The literal that is to be replaced. If not configured, the value of the specified constant will be used by default. |
| `String` | fullyQualifiedConstantName |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceStringLiteralWithConstantExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceStringLiteralWithConstantExample
displayName: Replace String literal with constant example
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
```
{% endcode %}

Now that `com.yourorg.ReplaceStringLiteralWithConstantExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceStringLiteralWithConstantExample")
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceStringLiteralWithConstantExample</recipe>
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
mod run <PATH> --recipe ReplaceStringLiteralWithConstant
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [AlexanderSkrock](mailto:alexanderskrock@gmx.de)
* [srmalkan](mailto:smitmalkan99@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Alex Kirichenko


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ReplaceStringLiteralWithConstant)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
