# Fields in a `Serializable` class should either be transient or serializable

** org.openrewrite.java.cleanup.FixSerializableFields**
_The fields of a class that implements `Serializable` must also implement `Serializable` or be marked as `transient`._

### Tags

* RSPEC-1948

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.15.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.15.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | markAllAsTransient | Mark any fields that are not serializable as transient |
| `List` | fullyQualifiedExclusions | *Optional*. A list of fully-qualified names that should always be marked as transient vs being made `Serializable` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FixSerializableFieldsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FixSerializableFieldsExample
displayName: Fields in a `Serializable` class should either be transient or serializable example
recipeList:
  - org.openrewrite.java.cleanup.FixSerializableFields:
      markAllAsTransient: null
      fullyQualifiedExclusions: org.example.BeanFactory
```
{% endcode %}


Now that `com.yourorg.FixSerializableFieldsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.0")
}

rewrite {
    activeRecipe("com.yourorg.FixSerializableFieldsExample")
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
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FixSerializableFieldsExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FixSerializableFieldsExample`
