# Change YAML property

**org.openrewrite.yaml.ChangePropertyValue**

_Change a YAML property. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.9.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.9.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The key to look for. Supports glob patterns. |
| `String` | newValue | The new value to be used for key specified by `propertyKey`. |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. |
| `Boolean` | regex | *Optional*. Defaults to `false`. If enabled, `oldValue` will be interpreted as a regular expression, and the capture group contents will be available in `newValue` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePropertyValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyValueExample
displayName: Change YAML property example
recipeList:
  - org.openrewrite.yaml.ChangePropertyValue:
      propertyKey: management.metrics.binders.*.enabled
      newValue: null
      oldValue: null
      regex: null
      relaxedBinding: null
```
{% endcode %}

Now that `com.yourorg.ChangePropertyValueExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyValueExample")
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
        <version>5.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePropertyValueExample</recipe>
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
mod run . --recipe ChangePropertyValue
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Mike Solomon](mailto:mike@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
