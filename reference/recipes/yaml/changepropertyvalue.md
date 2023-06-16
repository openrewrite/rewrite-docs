# Change YAML property

**org.openrewrite.yaml.ChangePropertyValue**

_Change a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e.  as Spring Boot interprets `application.yml` files._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The key to look for. Glob is supported. |
| `String` | newValue | The new value to be used for key specified by `propertyKey`. |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. |
| `Boolean` | regex | *Optional*. Default false. If enabled, `oldValue` will be interpreted as a Regular Expression, and capture group contents will be available in `newValue` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`my.prop`|
|newValue|`bar`|
|oldValue|`null`|
|regex|`null`|
|relaxedBinding|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
my.prop: foo
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
my.prop: bar
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -1,1 +1,1 @@
-my.prop: foo
+my.prop: bar

```
{% endcode %}
{% endtab %}
{% endtabs %}


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
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyValueExample")
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
        <version>5.2.1</version>
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
{% endtab %}
{% endtabs %}

## Contributors
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
