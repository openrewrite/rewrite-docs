# Control Flow Visualization

**org.openrewrite.analysis.controlflow.ControlFlowVisualization**

_Visualize the control flow of a Java program._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/controlflow/ControlFlowVisualization.java), [Issue Tracker](https://github.com/openrewrite/rewrite-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.meta/rewrite-analysis/2.1.0/jar)

* groupId: org.openrewrite.meta
* artifactId: rewrite-analysis
* version: 2.1.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `boolean` | includeDotfile | Also output with a Dotfile which can be then later visualized by Graphviz. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ControlFlowVisualizationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ControlFlowVisualizationExample
displayName: Control Flow Visualization example
recipeList:
  - org.openrewrite.analysis.controlflow.ControlFlowVisualization:
      includeDotfile: false
```
{% endcode %}

Now that `com.yourorg.ControlFlowVisualizationExample` has been defined activate it and take a dependency on org.openrewrite.meta:rewrite-analysis:2.1.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("com.yourorg.ControlFlowVisualizationExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.meta:rewrite-analysis:2.1.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
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
        <version>5.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ControlFlowVisualizationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.meta</groupId>
            <artifactId>rewrite-analysis</artifactId>
            <version>2.1.0</version>
          </dependency>
        </dependencies>
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
mod run . --recipe ControlFlowVisualization
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.analysis.controlflow.ControlFlowVisualization)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
