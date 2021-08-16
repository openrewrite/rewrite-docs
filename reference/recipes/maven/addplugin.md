# Add Maven plugin

 **org.openrewrite.maven.AddPlugin** _Add the specified Maven plugin to the pom.xml._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.11.0

## Options

| Type | Name | Description |
| :--- | :--- | :--- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | version | A fixed version of the plugin to add. |
| `String` | configuration | _Optional_. Optional plugin configuration provided as raw XML |
| `String` | dependencies | _Optional_. Optional plugin dependencies provided as raw XML. |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddPluginExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPluginExample
displayName: Add Maven plugin example
recipeList:
  - org.openrewrite.maven.AddPlugin:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      version: 1.0.0
      configuration: <configuration><foo>foo</foo></configuration>
      dependencies: <dependencies><dependency><groupId>com.yourorg</groupId><artifactId>core-lib</artifactId><version>1.0.0</version></dependency></dependencies>
```
{% endcode %}

Now that `com.yourorg.AddPluginExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.7.0")
}

rewrite {
    activeRecipe("com.yourorg.AddPluginExample")
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
        <version>4.9.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddPluginExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddPluginExample`

