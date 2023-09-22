# Add a comment to a `XML` tag

**org.openrewrite.xml.AddCommentToXmlTag**

_Adds a comment as the first element in a `XML` tag._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/AddCommentToXmlTag.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.5.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.5.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | xPath | An XPath expression used to find matching tags. |
| `String` | commentText | The text to add as a comment.. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddCommentToXmlTagExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddCommentToXmlTagExample
displayName: Add a comment to a `XML` tag example
recipeList:
  - org.openrewrite.xml.AddCommentToXmlTag:
      xPath: /project/dependencies/dependency
      commentText: This is excluded due to CVE <X> and will be removed when we upgrade the next version is available.
```
{% endcode %}

Now that `com.yourorg.AddCommentToXmlTagExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.8")
}

rewrite {
    activeRecipe("com.yourorg.AddCommentToXmlTagExample")
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
        <version>5.5.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddCommentToXmlTagExample</recipe>
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
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.AddCommentToXmlTag)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
