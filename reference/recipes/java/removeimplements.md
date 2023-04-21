# Remove interface implementations

**org.openrewrite.java.RemoveImplements**

_Removes `implements` clauses from classes implementing the specified interface. Removes `@Overrides` annotations from methods which no longer override anything._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/RemoveImplements.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | interfaceType | The fully qualified name of the interface to remove. |
| `String` | filter | Only apply the interface removal to classes with fully qualified names that begin with this filter. `null` or empty matches all classes. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveImplementsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveImplementsExample
displayName: Remove interface implementations example
recipeList:
  - org.openrewrite.java.RemoveImplements:
      interfaceType: java.io.Serializable
      filter: com.yourorg.
```
{% endcode %}


Now that `com.yourorg.RemoveImplementsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveImplementsExample")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveImplementsExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.RemoveImplements)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
