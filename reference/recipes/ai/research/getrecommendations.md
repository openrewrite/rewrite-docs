# Get recommendations

**io.moderne.ai.research.GetRecommendations**

_This recipe calls an AI model to get recommendations for modernizing the code base by looking at a sample of method declarations._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-ai-search/blob/main/src/main/java/io/moderne/ai/research/GetRecommendations.java), [Issue Tracker](https://github.com/openrewrite/rewrite-ai-search/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-ai-search/0.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-ai-search
* version: 0.14.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Boolean` | randomSampling | Do random sampling or use clusters based on embeddings to sample. |  |
| `int` | numberOfCenters | *Optional*. Number of diverse centers to sample if you don't do random sampling per repository. | `3` |

## Data Tables

### Recommendations

_Collects the recommendations based on sampled methods._

| Column Name | Description |
| ----------- | ----------- |
| Name | Name of the class or method |
| Lantency | Latency in seconds to get recommendations |
| Token size | Estimated token size for input and output |
| Recommendation | The recommendations based on the method |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.GetRecommendationsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.GetRecommendationsExample
displayName: Get recommendations example
recipeList:
  - io.moderne.ai.research.GetRecommendations:
      randomSampling: null
      numberOfCenters: 3
```
{% endcode %}

Now that `com.yourorg.GetRecommendationsExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-ai-search:0.14.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.GetRecommendationsExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-ai-search:0.14.1")
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
        <version>5.34.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.GetRecommendationsExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-ai-search</artifactId>
            <version>0.14.1</version>
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
mod run . --recipe GetRecommendationsExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.moderne.ai.research.GetRecommendations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
