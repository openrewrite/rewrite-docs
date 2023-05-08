# Change type

**org.openrewrite.java.ChangeType**

_Change a given type to another._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeType.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.6

## Example
* Example 1: 

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](1878529+tkvangorder@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldFullyQualifiedTypeName | Fully-qualified class name of the original type. |
| `String` | newFullyQualifiedTypeName | Fully-qualified class name of the replacement type, or the name of a primitive such as "int". The `OuterClassName$NestedClassName` naming convention should be used for nested classes. |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTypeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTypeExample
displayName: Change type example
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
      ignoreDefinition: null
```
{% endcode %}

Now that `com.yourorg.ChangeTypeExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTypeExample")
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
            <recipe>com.yourorg.ChangeTypeExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.ChangeType)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
