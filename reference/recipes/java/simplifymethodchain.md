# Simplify a call chain

**org.openrewrite.java.SimplifyMethodChain**

_Simplify `a.b().c()` to `a.d()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/SimplifyMethodChain.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.2.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.2.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | methodPatternChain | A list of [method patterns](/reference/method-patterns.md) that are called in sequence |
| `String` | newMethodName | The method name that will replace the existing name. The new method name target is assumed to have the same arguments as the last method in the chain. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.SimplifyMethodChainExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SimplifyMethodChainExample
displayName: Simplify a call chain example
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: ['java.util.Map keySet()', 'java.util.Set contains(..)']
      newMethodName: containsKey
      matchOverrides: false
```
{% endcode %}

Now that `com.yourorg.SimplifyMethodChainExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.24")
}

rewrite {
    activeRecipe("com.yourorg.SimplifyMethodChainExample")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.SimplifyMethodChainExample</recipe>
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

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.SimplifyMethodChain)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
