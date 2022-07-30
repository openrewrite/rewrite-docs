# Change Maven plugin dependencies

** org.openrewrite.maven.ChangePluginDependencies**
_Applies the specified dependencies to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.26.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.26.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | dependencies | *Optional*. Plugin dependencies provided as dependency coordinates of format "groupId:artifactId:version". When supplying multiple coordinates separate them with ",". Supplying `null` will remove any existing plugin dependencies. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangePluginDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginDependenciesExample
displayName: Change Maven plugin dependencies example
recipeList:
  - org.openrewrite.maven.ChangePluginDependencies:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      dependencies: org.openrewrite.recipe:rewrite-spring:1.0.0, org.openrewrite.recipe:rewrite-testing-frameworks:1.0.0
```
{% endcode %}


Now that `com.yourorg.ChangePluginDependenciesExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangePluginDependenciesExample")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePluginDependenciesExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.ChangePluginDependenciesExample`
