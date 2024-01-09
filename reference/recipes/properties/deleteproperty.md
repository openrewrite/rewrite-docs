# Delete Property

**org.openrewrite.properties.DeleteProperty**

_Deletes key/value pairs from properties files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/DeleteProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-properties/8.13.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 8.13.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | propertyKey | The key(s) to be deleted. This is a glob expression. | `management.metrics.binders.files.enabled or management.metrics.*` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeletePropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeletePropertyExample
displayName: Delete Property example
recipeList:
  - org.openrewrite.properties.DeleteProperty:
      propertyKey: management.metrics.binders.files.enabled or management.metrics.*
```
{% endcode %}

Now that `com.yourorg.DeletePropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("com.yourorg.DeletePropertyExample")
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DeletePropertyExample</recipe>
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
mod run . --recipe DeleteProperty
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.properties.DeleteProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
