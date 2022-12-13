# Remove Maven plugin dependency

**org.openrewrite.maven.RemovePluginDependency**
_Removes a dependency from the <dependencies> section of a plugin in the pom.xml._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.34.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.34.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginGroupId | GroupId of the plugin from which the dependency will be removed. Supports glob.A GroupId is the first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | pluginArtifactId | ArtifactId of the plugin from which the dependency will be removed. Supports glob.The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | groupId | The first part of a plugin dependency coordinate. Supports glob. |
| `String` | artifactId | The second part of a plugin dependency coordinate. Supports glob. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RemovePluginDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemovePluginDependencyExample
displayName: Remove Maven plugin dependency example
recipeList:
  - org.openrewrite.maven.RemovePluginDependency:
      pluginGroupId: org.openrewrite.maven
      pluginArtifactId: rewrite-maven-plugin
      groupId: com.google.guava
      artifactId: guava
```
{% endcode %}


Now that `com.yourorg.RemovePluginDependencyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("com.yourorg.RemovePluginDependencyExample")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemovePluginDependencyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.RemovePluginDependencyExample`
