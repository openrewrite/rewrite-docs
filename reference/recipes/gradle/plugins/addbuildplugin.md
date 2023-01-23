# Add a Gradle build plugin

**org.openrewrite.gradle.plugins.AddBuildPlugin**
_Add a Gradle build plugin to `build.gradle(.kts)`._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.35.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.35.0-SNAPSHOT

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginId | The plugin id to apply. |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddBuildPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddBuildPluginExample
displayName: Add a Gradle build plugin example
recipeList:
  - org.openrewrite.gradle.plugins.AddBuildPlugin:
      pluginId: com.jfrog.bintray
      version: 3.x
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.AddBuildPluginExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("com.yourorg.AddBuildPluginExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddBuildPluginExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.35.0-SNAPSHOT</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddBuildPluginExample`
