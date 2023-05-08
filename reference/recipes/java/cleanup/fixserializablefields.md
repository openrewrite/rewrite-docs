# Fields in a `Serializable` class should either be transient or serializable

**org.openrewrite.java.cleanup.FixSerializableFields**

_The fields of a class that implements `Serializable` must also implement `Serializable` or be marked as `transient`.

This recipe will look for any classes that directly or indirectly implement `Serializable` and for any member fields that are not serializable it will do one of two things:

- If a non-serializable field has a type that is represented by a `SourceFile` within the same project, that SourceFile will be changed to implement `Serializable`.

- If a non-serializable field has a type that is not represented as a `SourceFile`, the field will be marked as `transient`

NOTE: If `markAllAsTransient` is set to `true`, this recipe will mark all non-serializable fields as `transient`.

NOTE: Any fullyQualified names listed in the `fullyQualifiedExclusions` will be marked as transient, even if that SourceFile exists in the same project.

NOTE: This recipe does NOT recursively modify newly `Serilazable` classes to cut down on the graph of SourceFiles that may be impacted during a recipe run._

### Tags

* RSPEC-1948

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/cleanup/FixSerializableFields.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.6

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | markAllAsTransient | Mark any fields that are not serializable as transient |
| `List` | fullyQualifiedExclusions | *Optional*. A list of fully-qualified names that should always be marked as transient vs being made `Serializable` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FixSerializableFieldsExample`.
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
    id("org.openrewrite.rewrite") version("5.40.4")
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
        <version>4.45.0</version>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.FixSerializableFields)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
