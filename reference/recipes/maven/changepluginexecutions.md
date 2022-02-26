# Change Maven plugin executions

** org.openrewrite.maven.ChangePluginExecutions**
_Apply the specified executions to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.19.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.19.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | executions | *Optional*. Plugin goal executions provided as raw XML. Supplying `null` will remove any existing executions. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangePluginExecutionsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginExecutionsExample
displayName: Change Maven plugin executions example
recipeList:
  - org.openrewrite.maven.ChangePluginExecutions:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      executions: <execution><phase>validate</phase><goals><goal>dryRun</goal></goals></execution>
```
{% endcode %}


Now that `com.yourorg.ChangePluginExecutionsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.2")
}

rewrite {
    activeRecipe("com.yourorg.ChangePluginExecutionsExample")
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
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePluginExecutionsExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.ChangePluginExecutionsExample`
