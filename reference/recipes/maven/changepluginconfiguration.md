# Change Maven plugin configuration

** org.openrewrite.maven.ChangePluginConfiguration**
_Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.25.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.25.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | configuration | *Optional*. Plugin configuration provided as raw XML. Supplying `null` will remove any existing configuration. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangePluginConfigurationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginConfigurationExample
displayName: Change Maven plugin configuration example
recipeList:
  - org.openrewrite.maven.ChangePluginConfiguration:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      configuration: <foo>bar</foo>
```
{% endcode %}


Now that `com.yourorg.ChangePluginConfigurationExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.23.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangePluginConfigurationExample")
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
        <version>4.26.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePluginConfigurationExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.ChangePluginConfigurationExample`
