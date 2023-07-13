# Add a spring configuration property

**org.openrewrite.java.spring.AddSpringProperty**

_Add a spring configuration property to a configuration file if it does not already exist in that file._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/AddSpringProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | property | The property key to add. |
| `String` | value | The value of the new property key. |
| `String` | comment | *Optional*. A comment that will be added to the new property. |
| `List` | pathExpressions | *Optional*. Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. ("**/application.yml", "**/application.yml", and "**/application.properties". |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|property|`server.servlet.path`|
|value|`/tmp/my-server-path`|
|comment|`null`|
|pathExpressions|`List.of("*")`|


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
server.port=8080
server.servlet.path=/tmp/my-server-path
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,0 +2,1 @@
server.port=8080
+server.servlet.path=/tmp/my-server-path

```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="yaml" %}

###### Before
{% code %}
```yaml
server:
  port: 8080
```
{% endcode %}

###### After
{% code %}
```yaml
server:
  port: 8080
  servlet:
    path: /tmp/my-server-path
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,0 +3,2 @@
server:
  port: 8080
+ servlet:
+   path: /tmp/my-server-path

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddSpringPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddSpringPropertyExample
displayName: Add a spring configuration property example
recipeList:
  - org.openrewrite.java.spring.AddSpringProperty:
      property: management.metrics.enable.process.files
      value: true
      comment: This is a comment
      pathExpressions: **/application.yml
```
{% endcode %}

Now that `com.yourorg.AddSpringPropertyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.5 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.15")
}

rewrite {
    activeRecipe("com.yourorg.AddSpringPropertyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddSpringPropertyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Shannon Pamperl](mailto:shanman190@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.AddSpringProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
