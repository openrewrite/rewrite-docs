# Change property key

**org.openrewrite.properties.ChangePropertyKey**
_Change a property key leaving the value intact._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/ChangePropertyKey.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-properties/7.37.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 7.37.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldPropertyKey | The property key to rename. |
| `String` | newPropertyKey | The new name for the key identified by `oldPropertyKey`. |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `oldPropertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |
| `Boolean` | regex | *Optional*. Default false. If enabled, `oldPropertyKey` will be interepreted as a Regular Expression, and capture group contents will be available in `newPropertyKey` |


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
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.metrics.binders.files.enabled
      newPropertyKey: management.metrics.enable.process.files
      relaxedBinding: null
      fileMatcher: '**/application-*.properties'
      regex: null
```
{% endcode %}


Now that `com.yourorg.ChangePropertyKeyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyKeyExample")
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
        <version>4.41.0</version>
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
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.ChangePropertyKeyExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.properties.ChangePropertyKey)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
