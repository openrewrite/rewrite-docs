# Comment out property

**org.openrewrite.yaml.CommentOutProperty**

_Comment out a YAML property and add a comment in front._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CommentOutProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The key to be commented out. |
| `String` | commentText | comment text to be added. |

## Examples
##### Example 1
comment out a map entry

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence.propertyA`|
|commentText|`Some comments`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
  foo:
    bar:
      sequence:
        - name: name
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
  foo:
    bar:
      sequence:
        - name: name
        # Some comments
        # propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,1 +5,2 @@
      sequence:
        - name: name
-       - propertyA: fieldA
+       # Some comments
+       # propertyA: fieldA
        - propertyB: fieldB
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
comment out entire sequence

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence`|
|commentText|`Some comments`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
foo:
  bar:
    sequence:
      - name: name
      - propertyA: fieldA
      - propertyB: fieldB
    scalar: value
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
foo:
  bar:
    # Some comments
    # sequence:
    #   - name: name
    #   - propertyA: fieldA
    #   - propertyB: fieldB
    scalar: value
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,4 +3,5 @@
foo:
  bar:
-   sequence:
-     - name: name
-     - propertyA: fieldA
-     - propertyB: fieldB
+   # Some comments
+   # sequence:
+   #   - name: name
+   #   - propertyA: fieldA
+   #   - propertyB: fieldB
    scalar: value
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CommentOutPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CommentOutPropertyExample
displayName: Comment out property example
recipeList:
  - org.openrewrite.yaml.CommentOutProperty:
      propertyKey: applicability.singleSource
      commentText: This property is deprecated, please migrate
```
{% endcode %}

Now that `com.yourorg.CommentOutPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.CommentOutPropertyExample")
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
            <recipe>com.yourorg.CommentOutPropertyExample</recipe>
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
* [Kun Li](kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.CommentOutProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
