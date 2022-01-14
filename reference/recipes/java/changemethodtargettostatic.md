# Change method target to static

** org.openrewrite.java.ChangeMethodTargetToStatic**
_Change method invocations to static method calls._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.17.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns) that is used to find matching method invocations. The original method call may or may not be a static method invocation. |
| `String` | fullyQualifiedTargetTypeName | A fully-qualified class name of the type upon which the static method is defined. |
| `String` | returnType | *Optional*. Sometimes changing the target type also changes the return type. In the Guava example, changing from `ImmutableSet#of(..)` to `Set#of(..)` widens the return type from Guava's `ImmutableSet` to just `java.util.Set`. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodTargetToStaticExample`.
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
      matchOverrides: null
```
{% endcode %}


Now that `com.yourorg.ChangeMethodTargetToStaticExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.3")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodTargetToStaticExample")
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
        <version>4.17.0</version>
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
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangeMethodTargetToStaticExample`
