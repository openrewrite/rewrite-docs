# Find XML tags

**org.openrewrite.xml.search.FindTags**

_Find XML tags by XPath expression._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/search/FindTags.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | xPath | An XPath expression used to find matching tags. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|xPath|`/dependencies/dependency`|


{% tabs %}
{% tab title="xml" %}

###### Before
{% code %}
```xml
<dependencies>
    <dependency>
        <artifactId scope="compile">org.openrewrite</artifactId>
    </dependency>
</dependencies>
```
{% endcode %}

###### After
{% code %}
```xml
<dependencies>
    <!--~~>--><dependency>
        <artifactId scope="compile">org.openrewrite</artifactId>
    </dependency>
</dependencies>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,1 +2,1 @@
<dependencies>
-   <dependency>
+   <!--~~>--><dependency>
        <artifactId scope="compile">org.openrewrite</artifactId>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindTagsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindTagsExample
displayName: Find XML tags example
recipeList:
  - org.openrewrite.xml.search.FindTags:
      xPath: /dependencies/dependency
```
{% endcode %}

Now that `com.yourorg.FindTagsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.FindTagsExample")
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
            <recipe>com.yourorg.FindTagsExample</recipe>
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
* [Greg Adams](greg@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.search.FindTags)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
