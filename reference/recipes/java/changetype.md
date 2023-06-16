# Change type

**org.openrewrite.java.ChangeType**

_Change a given type to another._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeType.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldFullyQualifiedTypeName | Fully-qualified class name of the original type. |
| `String` | newFullyQualifiedTypeName | Fully-qualified class name of the replacement type, or the name of a primitive such as "int". The `OuterClassName$NestedClassName` naming convention should be used for nested classes. |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`file`|
|newFullyQualifiedTypeName|`newFile`|
|ignoreDefinition|`false`|


{% tabs %}
{% tab title="file.kt" %}

###### Before
{% code title="file.kt" %}
```kotlin
class file {
}
```
{% endcode %}

###### After
{% code title="file.kt" %}
```kotlin
class newFile {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- file.kt
+++ file.kt
@@ -1,1 +1,1 @@
-class file {
+class newFile {
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`file`|
|newFullyQualifiedTypeName|`newFile`|
|ignoreDefinition|`false`|


{% tabs %}
{% tab title="file.groovy" %}

###### Before
{% code title="file.groovy" %}
```groovy
class file {
}
```
{% endcode %}

###### After
{% code title="file.groovy" %}
```groovy
class newFile {
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- file.groovy
+++ file.groovy
@@ -1,1 +1,1 @@
-class file {
+class newFile {
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 3

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`java.lang.Integer`|
|newFullyQualifiedTypeName|`java.lang.Long`|
|ignoreDefinition|`true`|


{% tabs %}
{% tab title="ThinkPositive.java" %}

###### Before
{% code title="ThinkPositive.java" %}
```java
public class ThinkPositive { private Integer fred = 1;}```
{% endcode %}

###### After
{% code title="ThinkPositive.java" %}
```java
public class ThinkPositive { private Long fred = 1;}```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ThinkPositive.java
+++ ThinkPositive.java
@@ -1,1 +1,1 @@
-public class ThinkPositive { private Integer fred = 1;}
+public class ThinkPositive { private Long fred = 1;}
```
{% endcode %}
{% endtab %}
{% endtabs %}


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
    id("org.openrewrite.rewrite") version("6.1.3")
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
        <version>5.2.1</version>
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

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](1878529+tkvangorder@users.noreply.github.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.ChangeType)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
