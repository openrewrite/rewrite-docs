# Simplify a call chain

** org.openrewrite.java.SimplifyMethodChain**
_Simplify `a.b().c()` to `a.d()`._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.28.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.28.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | methodPatternChain | A list of [method patterns](/reference/method-patterns.md) that are called in sequence |
| `String` | newMethodName | The method name that will replace the existing name. The new method name target is assumed to have the same arguments as the last method in the chain. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.SimplifyMethodChainExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SimplifyMethodChainExample
displayName: Simplify a call chain example
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: null
      newMethodName: null
```
{% endcode %}


Now that `com.yourorg.SimplifyMethodChainExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.27.0")
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
        <version>4.32.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.SimplifyMethodChainExample`
