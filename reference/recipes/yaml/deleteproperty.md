# Delete property

**org.openrewrite.yaml.DeleteProperty**

_Delete a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e.  as Spring Boot interprets application.yml files like `a.b.c.d` or `a.b.c:d`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/DeleteProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | propertyKey | The key to be deleted. | `management.metrics.binders.files.enabled` |
| `Boolean` | coalesce | *Optional*. (Deprecated: in a future version, this recipe will always use the `false` behavior) Simplify nested map hierarchies into their simplest dot separated property form. |  |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Defaults to `true`. If you want to use exact matching in your search, set this to `false`. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeletePropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeletePropertyExample
displayName: Delete property example
recipeList:
  - org.openrewrite.yaml.DeleteProperty:
      propertyKey: management.metrics.binders.files.enabled
```
{% endcode %}

Now that `com.yourorg.DeletePropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
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
        <version>5.34.0</version>
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
mod run . --recipe DeletePropertyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.DeleteProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Kun Li](mailto:kun@moderne.io), [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), Patrick Way, [Alex Serbin](mailto:aleksanderserbin@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Mike Solomon](mailto:mike@moderne.io), [Aurélien Mino](mailto:aurelien.mino@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com)
