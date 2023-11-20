# Add Maven plugin

**org.openrewrite.maven.AddPlugin**

_Add the specified Maven plugin to the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddPlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.9.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.9.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | version | *Optional*. A fixed version of the plugin to add. |
| `String` | configuration | *Optional*. Optional plugin configuration provided as raw XML |
| `String` | dependencies | *Optional*. Optional plugin dependencies provided as raw XML. |
| `String` | executions | *Optional*. Optional executions provided as raw XML. |
| `String` | filePattern | *Optional*. A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, all source files are searched.  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

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
      executions: <execution><phase>generate-sources</phase><goals><goal>add-source</goal></goals></execution>
      filePattern: '**/*-parent/grpc-*/pom.xml'
```
{% endcode %}

Now that `com.yourorg.AddPluginExample` has been defined activate it in your build file:
{% tabs %}

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
        <version>5.13.0</version>
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
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddPlugin
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com), * [Sam Snyder](mailto:sam@moderne.io), * [Daniel Wallman](mailto:daniel.wallman@m.co), * [Greg Adams](mailto:greg@moderne.io), * [Alex Boyko](mailto:aboyko@pivotal.io), * Tyler Van Gorder, * [traceyyoshima](mailto:tracey.yoshima@gmail.com), * [Aaron Gershman](mailto:aegershman@gmail.com)
