# Change Maven project property value

**org.openrewrite.maven.ChangePropertyValue**

_Changes the specified Maven project property value leaving the key intact._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePropertyValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | The name of the property key whose value is to be changed. |
| `String` | newValue | Value to apply to the matching property. |
| `Boolean` | addIfMissing | *Optional*. Add the property if it is missing from the pom file. |
| `Boolean` | trustParent | *Optional*. Even if the parent defines a property with the same key, trust it even if the value isn't the same. Useful when you want to wait for the parent to have its value changed first. The parent is not trusted by default. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|key|`guava.version`|
|newValue|`29.0-jre`|
|addIfMissing|`false`|
|trustParent|`false`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <properties>
    <guava.version>28.2-jre</guava.version>
  </properties>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <properties>
    <guava.version>29.0-jre</guava.version>
  </properties>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,1 @@

  <properties>
-   <guava.version>28.2-jre</guava.version>
+   <guava.version>29.0-jre</guava.version>
  </properties>
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
displayName: Change Maven project property value example
recipeList:
  - org.openrewrite.maven.ChangePropertyValue:
      key: junit.version
      newValue: 4.13
      addIfMissing: null
      trustParent: null
```
{% endcode %}

Now that `com.yourorg.ChangePropertyValueExample` has been defined activate it in your build file:
{% tabs %}

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
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aurélien Mino](aurelien.mino@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangePropertyValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
