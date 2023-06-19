# Find fields

**org.openrewrite.java.search.FindFields**

_Find uses of a field._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindFields.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedTypeName | A fully-qualified Java type name, that is used to find matching fields. |
| `String` | fieldName | The name of a field on the type. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|fullyQualifiedTypeName|`java.nio.charset.StandardCharsets`|
|fieldName|`UTF_8`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    Object o = java.nio.charset.StandardCharsets.UTF_8;
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    Object o = /*~~>*/java.nio.charset.StandardCharsets.UTF_8;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -2,1 +2,1 @@
class Test {
-   Object o = java.nio.charset.StandardCharsets.UTF_8;
+   Object o = /*~~>*/java.nio.charset.StandardCharsets.UTF_8;
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindFieldsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindFieldsExample
displayName: Find fields example
recipeList:
  - org.openrewrite.java.search.FindFields:
      fullyQualifiedTypeName: com.fasterxml.jackson.core.json.JsonWriteFeature
      fieldName: QUOTE_FIELD_NAMES
```
{% endcode %}

Now that `com.yourorg.FindFieldsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.FindFieldsExample")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindFieldsExample</recipe>
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
* [Jonathan Schneider](jkschneider@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.search.FindFields)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
