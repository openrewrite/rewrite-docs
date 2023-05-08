# Add Maven project property

**org.openrewrite.maven.AddProperty**

_Add a new property to the Maven project property._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.40.6

## Contributors
* [Aurélien Mino](aurelien.mino@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | The name of the property key to be added. |
| `String` | value | The value of property to be added. |
| `Boolean` | preserveExistingValue | *Optional*. Preserve previous value if the property already exists in the pom file. |
| `Boolean` | trustParent | *Optional*. Even if the parent defines a property with the same key, trust it even if the value isn't the same. Useful when you want to wait for the parent to have its value changed first. The parent is not trusted by default. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPropertyExample
displayName: Add Maven project property example
recipeList:
  - org.openrewrite.maven.AddProperty:
      key: junit.version
      value: 4.13
      preserveExistingValue: null
      trustParent: null
```
{% endcode %}

Now that `com.yourorg.AddPropertyExample` has been defined activate it in your build file:
{% tabs %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddPropertyExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.AddProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
