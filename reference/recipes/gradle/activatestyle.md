# Activate Style in Gradle Project

**org.openrewrite.gradle.ActivateStyle**
_Sets the specified style as active. Once the style has been set, future recipes will use the specified style for any changes they make. This recipe does not reformat anything on its own. Prefers to set the `activeStyle()` method in the `rewrite` DSL in a build.gradle.If no `rewrite` DSL can be found to update, will instead place a "systemProp.rewrite.activeStyles" entry within the project's gradle.properties. Styles can be provided by rewrite itself, defined in a rewrite.yml, or provided by recipe modules._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.34.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.34.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedStyleName | The name of the style to activate. |
| `boolean` | overwriteExistingStyles | *Optional*. When set to `true` this Recipe will clear all existing active styles. When `false` the new style will be added after existing styles. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ActivateStyleExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ActivateStyleExample
displayName: Activate Style in Gradle Project example
recipeList:
  - org.openrewrite.gradle.ActivateStyle:
      fullyQualifiedStyleName: org.openrewrite.java.IntelliJ
      overwriteExistingStyles: false
```
{% endcode %}

Now that `com.yourorg.ActivateStyleExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.34.3 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("com.yourorg.ActivateStyleExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.34.3")
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
            <recipe>com.yourorg.ActivateStyleExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.34.3</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.ActivateStyleExample`
