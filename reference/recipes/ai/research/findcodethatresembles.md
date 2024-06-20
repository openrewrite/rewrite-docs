# Find method invocations that resemble a pattern

**io.moderne.ai.research.FindCodeThatResembles**

_This recipe uses two phase AI approach to find a method invocation that resembles a search string._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-ai-search/blob/main/src/main/java/io/moderne/ai/research/FindCodeThatResembles.java), [Issue Tracker](https://github.com/openrewrite/rewrite-ai-search/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-ai-search/0.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-ai-search
* version: 0.14.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | resembles | The text, either a natural language description or a code sample, that you are looking for. | `HTTP request with Content-Type application/json` |
| `int` | k | Since AI based matching has a higher latency than rules based matching, we do a first pass to find the top k methods using embeddings. To narrow the scope, you can specify the top k methods as method filters. | `1000` |

## Data Tables

### Code Search

_Searches for method invocations that resemble a natural language query._

| Column Name | Description |
| ----------- | ----------- |
| Source | Source |
| Method | Method invocation |
| Query | Natural language query |
| Result of first models | First two embeddings models result, where -1 means negative match, 0 means unsure, and 1 means positive match. |
| Result of second model | Second generative model's result, where -1 means negative match and 1 means positive match. If the model was never queried, then the result is 0. |

### Embedding performance

_Latency characteristics of uses of embedding models._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Number of requests | The count of requests made to the model. |
| Histogram | The latency histogram of the requests made to the model (counts). The histogram is a non-cumulative fixed distribution of 100 buckets of 0.01 second each. |
| Max latency | The maximum embedding latency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindCodeThatResemblesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindCodeThatResemblesExample
displayName: Find method invocations that resemble a pattern example
recipeList:
  - io.moderne.ai.research.FindCodeThatResembles:
      resembles: HTTP request with Content-Type application/json
      k: 1000
```
{% endcode %}

Now that `com.yourorg.FindCodeThatResemblesExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-ai-search:0.14.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.FindCodeThatResemblesExample")
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
            <recipe>com.yourorg.FindCodeThatResemblesExample</recipe>
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
mod run . --recipe FindCodeThatResemblesExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.moderne.ai.research.FindCodeThatResembles)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
