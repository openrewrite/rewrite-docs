# Change property key

**org.openrewrite.yaml.ChangePropertyKey**

_Change a YAML property key while leaving the value intact. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyKey.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldPropertyKey | The property key to rename. Supports glob patterns. | `management.metrics.binders.*.enabled` |
| `String` | newPropertyKey | The new name for the property key. | `management.metrics.enable.process.files` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `oldPropertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Defaults to `true`. If you want to use exact matching in your search, set this to `false`. |  |
| `List` | except | *Optional*. If any of these property keys exist as direct children of `oldPropertyKey`, then they will not be moved to `newPropertyKey`. | `List.of("group")` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePropertyKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyKeyExample
displayName: Change property key example
recipeList:
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.binders.*.enabled
      newPropertyKey: management.metrics.enable.process.files
      except: List.of("group")
```
{% endcode %}

Now that `com.yourorg.ChangePropertyKeyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyKeyExample")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.ChangePropertyKeyExample</recipe>
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
mod run . --recipe ChangePropertyKeyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyKey)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Patrick](mailto:patway99@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Mike Solomon](mailto:mike@moderne.io), [Thomas Zub](mailto:thomas.zub@outlook.de), Sandeep Nagaraj, [Tim te Beek](mailto:tim@moderne.io)
