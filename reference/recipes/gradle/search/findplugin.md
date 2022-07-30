# Find Gradle plugin

** org.openrewrite.gradle.search.FindPlugin**
_Find a Gradle plugin by id._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.26.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.26.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginId | The `ID` part of `plugin { ID }`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindPluginExample
displayName: Find Gradle plugin example
recipeList:
  - org.openrewrite.gradle.search.FindPlugin:
      pluginId: '`com.jfrog.bintray`'
```
{% endcode %}

Now that `com.yourorg.FindPluginExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.26.3 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("com.yourorg.FindPluginExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.26.3")
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
            <recipe>com.yourorg.FindPluginExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.26.3</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.FindPluginExample`
