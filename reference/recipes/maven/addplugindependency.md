# Add Maven plugin dependencies

** org.openrewrite.maven.AddPluginDependency**
_Adds the specified dependencies to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.21.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginGroupId | GroupId of the plugin to which the dependency will be added. A GroupId is the first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | pluginArtifactId | ArtifactId of the plugin to which the dependency will be added.The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | groupId | The GroupId of the dependency to add. |
| `String` | artifactId | The ArtifactId of the dependency to add. |
| `String` | version | The Version of the dependency to add. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddPluginDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPluginDependencyExample
displayName: Add Maven plugin dependencies example
recipeList:
  - org.openrewrite.maven.AddPluginDependency:
      pluginGroupId: org.openrewrite.maven
      pluginArtifactId: rewrite-maven-plugin
      groupId: org.openrewrite.recipe
      artifactId: org.openrewrite.recipe
      version: org.openrewrite.recipe
```
{% endcode %}


Now that `com.yourorg.AddPluginDependencyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("com.yourorg.AddPluginDependencyExample")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddPluginDependencyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddPluginDependencyExample`
