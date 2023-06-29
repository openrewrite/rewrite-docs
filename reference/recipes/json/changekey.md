# Change key

**org.openrewrite.json.ChangeKey**

_Change a JSON mapping entry key leaving the value intact._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-json/src/main/java/org/openrewrite/json/ChangeKey.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-json/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-json
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldKeyPath | A JsonPath expression to locate a JSON entry. |
| `String` | newKey | The new name for the key selected by oldKeyPath. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldKeyPath|`$.description`|
|newKey|`"newDescription"`|


{% tabs %}
{% tab title="json" %}

###### Before
{% code %}
```json
{
  "id": "something",
  "description": "desc",
  "other": "whatever"
}
```
{% endcode %}

###### After
{% code %}
```json
{
  "id": "something",
  "newDescription": "desc",
  "other": "whatever"
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -3,1 +3,1 @@
{
  "id": "something",
- "description": "desc",
+ "newDescription": "desc",
  "other": "whatever"
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeKeyExample
displayName: Change key example
recipeList:
  - org.openrewrite.json.ChangeKey:
      oldKeyPath: $.subjects.kind
      newKey: kind
```
{% endcode %}

Now that `com.yourorg.ChangeKeyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeKeyExample")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeKeyExample</recipe>
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
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.json.ChangeKey)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
