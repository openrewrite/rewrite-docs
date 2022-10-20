# Replace constant with literal value

** org.openrewrite.java.ReplaceConstant**
_Replace a named constant with a literal value when you wish to remove the old constant._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.32.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | owningType | The target type in which the constant to be replaced is defined. |
| `String` | constantName | The name of the constant field to replace. |
| `String` | literalValue | The literal value to replace. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ReplaceConstantExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceConstantExample
displayName: Replace constant with literal value example
recipeList:
  - org.openrewrite.java.ReplaceConstant:
      owningType: com.google.common.base.Charsets
      constantName: UTF_8
      literalValue: UTF_8
```
{% endcode %}


Now that `com.yourorg.ReplaceConstantExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceConstantExample")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceConstantExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.ReplaceConstantExample`
