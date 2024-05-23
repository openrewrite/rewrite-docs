# Change method target to static

**org.openrewrite.java.ChangeMethodTargetToStatic**

_Change method invocations to static method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodTargetToStatic.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.27.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.27.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. The original method call may or may not be a static method invocation. | `com.google.common.collect.ImmutableSet of(..)` |
| `String` | fullyQualifiedTargetTypeName | A fully-qualified class name of the type upon which the static method is defined. | `java.util.Set` |
| `String` | returnType | *Optional*. Sometimes changing the target type also changes the return type. In the Guava example, changing from `ImmutableSet#of(..)` to `Set#of(..)` widens the return type from Guava's `ImmutableSet` to just `java.util.Set`. | `java.util.Set` |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |  |
| `Boolean` | matchUnknownTypes | *Optional*. When enabled, include method invocations which appear to match if full type information is missing. Using matchUnknownTypes can improve recipe resiliency for an AST with missing type information, but also increases the risk of false-positive matches on unrelated method invocations. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodTargetToStaticExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodTargetToStaticExample
displayName: Change method target to static example
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: com.google.common.collect.ImmutableSet of(..)
      fullyQualifiedTargetTypeName: java.util.Set
      returnType: java.util.Set
```
{% endcode %}

Now that `com.yourorg.ChangeMethodTargetToStaticExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodTargetToStaticExample")
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.ChangeMethodTargetToStaticExample</recipe>
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
mod run . --recipe ChangeMethodTargetToStaticExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodTargetToStatic)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Greg Adams](mailto:greg@moderne.io), [Tim te Beek](mailto:tim@moderne.io), Tyler Van Gorder, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Aaron Gershman](mailto:aegershman@gmail.com)
