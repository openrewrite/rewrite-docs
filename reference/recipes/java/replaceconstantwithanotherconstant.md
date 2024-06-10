# Replace constant with another constant

**org.openrewrite.java.ReplaceConstantWithAnotherConstant**

_Replace a constant with another constant, adding/removing import on class if needed._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceConstantWithAnotherConstant.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.27.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.27.4

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | existingFullyQualifiedConstantName |  | `org.springframework.http.MediaType.APPLICATION_JSON_VALUE` |
| `String` | fullyQualifiedConstantName |  | `org.springframework.http.MediaType.APPLICATION_JSON_VALUE` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceConstantWithAnotherConstantExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceConstantWithAnotherConstantExample
displayName: Replace constant with another constant example
recipeList:
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
```
{% endcode %}

Now that `com.yourorg.ReplaceConstantWithAnotherConstantExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceConstantWithAnotherConstantExample")
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
        <version>5.33.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.ReplaceConstantWithAnotherConstantExample</recipe>
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
mod run . --recipe ReplaceConstantWithAnotherConstantExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ReplaceConstantWithAnotherConstant)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[srmalkan](mailto:smitmalkan99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
