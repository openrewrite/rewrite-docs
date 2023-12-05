# Change annotation attribute name

**org.openrewrite.java.ChangeAnnotationAttributeName**

_Some annotations accept arguments. This recipe renames an existing attribute._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeAnnotationAttributeName.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.11.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | annotationType | The fully qualified name of the annotation. |
| `String` | oldAttributeName | The name of attribute to change. |
| `String` | newAttributeName | The new attribute name to use. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeAnnotationAttributeNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeAnnotationAttributeNameExample
displayName: Change annotation attribute name example
recipeList:
  - org.openrewrite.java.ChangeAnnotationAttributeName:
      annotationType: org.junit.Test
      oldAttributeName: timeout
      newAttributeName: waitFor
```
{% endcode %}

Now that `com.yourorg.ChangeAnnotationAttributeNameExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("com.yourorg.ChangeAnnotationAttributeNameExample")
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
            <recipe>com.yourorg.ChangeAnnotationAttributeNameExample</recipe>
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
mod run . --recipe ChangeAnnotationAttributeName
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ChangeAnnotationAttributeName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
