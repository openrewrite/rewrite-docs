# Reorder method arguments

**org.openrewrite.java.ReorderMethodArguments**

_Reorder method arguments into the specified order._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReorderMethodArguments.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.0

## Options

| Type       | Name              | Description                                                                                                                                                              |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `String`   | methodPattern     | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations.                                                                                   |
| `String[]` | newParameterNames | An array of parameter names that indicates the new order in which those arguments should be arranged.                                                                    |
| `String[]` | oldParameterNames | _Optional_. If the original method signature is not type-attributed, this is an optional list that indicates the original order in which the arguments were arranged.    |
| `Boolean`  | ignoreDefinition  | _Optional_. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReorderMethodArgumentsExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReorderMethodArgumentsExample
displayName: Reorder method arguments example
recipeList:
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.yourorg.A foo(String, Integer, Integer)
      newParameterNames: [foo, bar, baz]
      oldParameterNames: [baz, bar, foo]
      ignoreDefinition: null
```
{% endcode %}

Now that `com.yourorg.ReorderMethodArgumentsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("com.yourorg.ReorderMethodArgumentsExample")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReorderMethodArgumentsExample</recipe>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](../../../.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.ReorderMethodArguments)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
