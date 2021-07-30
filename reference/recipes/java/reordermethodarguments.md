# Reorder method arguments

 **org.openrewrite.java.ReorderMethodArguments** _Reorder method arguments into the specified order._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.10.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.10.0

## Options

| Type | Name | Description |
| :--- | :--- | :--- |
| `String` | methodPattern | A method pattern, expressed as a [pointcut expression](https://github.com/openrewrite/rewrite-docs/tree/655780b8d7b50826bb9e9df40aa5263379183ba8/v1beta/pointcut-expressions/README.md), that is used to find matching method invocations. |
| `String[]` | newParameterNames | An array of parameter names that indicates the new order in which those arguments should be arranged. |
| `String[]` | oldParameterNames | _Optional_. If the original method signature is not type-attributed, this is an optional list that indicates the original order in which the arguments were arranged. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ReorderMethodArgumentsExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

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
```
{% endcode %}

Now that `com.yourorg.ReorderMethodArgumentsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.4.0")
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
        <version>4.8.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ReorderMethodArgumentsExample`

