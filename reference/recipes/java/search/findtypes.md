# Find types

**org.openrewrite.java.search.FindTypes**

_Find type references by name._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindTypes.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.7.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.7.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedTypeName | A fully-qualified type name, that is used to find matching type references. Supports glob expressions. `java..*` finds every type from every subpackage of the `java` package. |
| `Boolean` | checkAssignability | *Optional*. When enabled, find type references that are assignable to the provided type. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindTypesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindTypesExample
displayName: Find types example
recipeList:
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: java.util.List
      checkAssignability: null
```
{% endcode %}

Now that `com.yourorg.FindTypesExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.16")
}

rewrite {
    activeRecipe("com.yourorg.FindTypesExample")
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
        <version>5.7.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindTypesExample</recipe>
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
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* Tyler Van Gorder


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.search.FindTypes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
