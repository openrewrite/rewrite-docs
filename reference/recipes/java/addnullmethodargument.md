# Add a `null` method argument

**org.openrewrite.java.AddNullMethodArgument**

_Add a `null` argument to method invocations._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/AddNullMethodArgument.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.23.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.23.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. | `com.yourorg.A foo(int, int)` |
| `int` | argumentIndex | A zero-based index that indicates which argument will be added as null to the method invocation. | `0` |
| `String` | parameterType | The type of the parameter that we add the argument for. | `java.lang.String` |
| `String` | parameterName | *Optional*. The name of the parameter that we add the argument for. | `name` |
| `Boolean` | explicitCast | *Optional*. Explicitly cast the argument to the parameter type. Useful if the method is overridden with another type. | `true` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddNullMethodArgumentExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddNullMethodArgumentExample
displayName: Add a `null` method argument example
recipeList:
  - org.openrewrite.java.AddNullMethodArgument:
      methodPattern: com.yourorg.A foo(int, int)
      argumentIndex: 0
      parameterType: java.lang.String
      parameterName: name
      explicitCast: true
```
{% endcode %}

Now that `com.yourorg.AddNullMethodArgumentExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.11.2")
}

rewrite {
    activeRecipe("com.yourorg.AddNullMethodArgumentExample")
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
        <version>5.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddNullMethodArgumentExample</recipe>
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
mod run . --recipe AddNullMethodArgumentExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.AddNullMethodArgument)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Peter Streef](mailto:peter@moderne.io)
