# Change properties file property value

** org.openrewrite.properties.ChangePropertyValue**
_Change a property value leaving the key intact._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-properties/7.9.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 7.9.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The name of the property key whose value is to be changed. |
| `String` | newValue | The new value to be used for key specified by `propertyKey`. |
| `String` | oldValue | *Optional*. Only change the property value if it matches the configured `oldValue`. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangePropertyValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyValueExample
displayName: Change properties file property value example
recipeList:
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: management.metrics.binders.files.enabled
      newValue: false
      oldValue: true
      fileMatcher: **/application-*.properties
```
{% endcode %}


Now that `com.yourorg.ChangePropertyValueExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.3.0")
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
        <version>4.7.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangePropertyValueExample`
