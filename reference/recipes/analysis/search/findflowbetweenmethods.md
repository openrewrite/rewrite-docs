# Finds flow between two methods

**org.openrewrite.analysis.search.FindFlowBetweenMethods**

_Takes two patterns for the start/end methods to find flow between._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/search/FindFlowBetweenMethods.java), [Issue Tracker](https://github.com/openrewrite/rewrite-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.meta/rewrite-analysis/2.1.0/jar)

* groupId: org.openrewrite.meta
* artifactId: rewrite-analysis
* version: 2.1.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | startMethodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching the start point's method invocations. |
| `Boolean` | startMatchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |
| `String` | endMethodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching the end point's method invocations. |
| `Boolean` | endMatchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |
| `String` | target | The part of the method flow should traverse to |
| `String` | flow | When enabled, show the data or taint flow of the method invocation. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindFlowBetweenMethodsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindFlowBetweenMethodsExample
displayName: Finds flow between two methods example
recipeList:
  - org.openrewrite.analysis.search.FindFlowBetweenMethods:
      startMethodPattern: java.util.List add(..)
      startMatchOverrides: null
      endMethodPattern: java.util.List add(..)
      endMatchOverrides: null
      target: null
      flow: null
```
{% endcode %}

Now that `com.yourorg.FindFlowBetweenMethodsExample` has been defined activate it and take a dependency on org.openrewrite.meta:rewrite-analysis:2.1.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.FindFlowBetweenMethodsExample")
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
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindFlowBetweenMethodsExample</recipe>
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
mod run . --recipe FindFlowBetweenMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.analysis.search.FindFlowBetweenMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
