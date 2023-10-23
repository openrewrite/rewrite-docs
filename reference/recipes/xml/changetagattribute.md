# Change XML Attribute

**org.openrewrite.xml.ChangeTagAttribute**

_Alters XML Attribute value within specified element._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/ChangeTagAttribute.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.8.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.8.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | elementName | The name of the element whose attribute's value is to be changed. Interpreted as an XPath Expression. |
| `String` | attributeName | The name of the attribute whose value is to be changed. |
| `String` | newValue | The new value to be used for key specified by `attributeName`, Set to null if you want to remove the attribute. |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTagAttributeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTagAttributeExample
displayName: Change XML Attribute example
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: newfoo.bar.attribute.value.string
      oldValue: foo.bar.attribute.value.string
```
{% endcode %}

Now that `com.yourorg.ChangeTagAttributeExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTagAttributeExample")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeTagAttributeExample</recipe>
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
mod run <PATH> --recipe ChangeTagAttribute
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Mark Brophy
* [Kun Li](mailto:kun@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.ChangeTagAttribute)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
