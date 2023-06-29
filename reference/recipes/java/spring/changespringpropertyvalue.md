# Change the value of a spring application property

**org.openrewrite.java.spring.ChangeSpringPropertyValue**

_Change spring application property values existing in either Properties or Yaml files._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/ChangeSpringPropertyValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The name of the property key whose value is to be changed. |
| `String` | newValue | The new value to be used for key specified by `propertyKey`. |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. |
| `Boolean` | regex | *Optional*. Default false. If enabled, `oldValue` will be interpreted as a Regular Expression, and capture group contents will be available in `newValue` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false` to use exact matching. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`server.port`|
|newValue|`8081`|
|oldValue|`null`|
|regex|`null`|
|relaxedBinding|`null`|


{% tabs %}
{% tab title="properties" %}

###### Before
{% code %}
```properties
server.port=8080
```
{% endcode %}

###### After
{% code %}
```properties
server.port=8081
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -1,1 +1,1 @@
-server.port=8080
+server.port=8081
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeSpringPropertyValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeSpringPropertyValueExample
displayName: Change the value of a spring application property example
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.metrics.binders.files.enabled
      newValue: null
      oldValue: null
      regex: null
      relaxedBinding: null
```
{% endcode %}

Now that `com.yourorg.ChangeSpringPropertyValueExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeSpringPropertyValueExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeSpringPropertyValueExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
          </dependency>
        </dependencies>
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
* [Knut Wannheden](knut@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.ChangeSpringPropertyValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
