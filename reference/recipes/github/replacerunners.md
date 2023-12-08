# Replace runners for a job

**org.openrewrite.github.ReplaceRunners**

_Replaces the runners of a given job._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/ReplaceRunners.java), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/2.0.11/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 2.0.11

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | jobName | The name of the job to update |
| `List` | runners | The new list of runners to set |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceRunnersExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceRunnersExample
displayName: Replace runners for a job example
recipeList:
  - org.openrewrite.github.ReplaceRunners:
      jobName: build
      runners: ubuntu-latest
```
{% endcode %}

Now that `com.yourorg.ReplaceRunnersExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-github-actions:2.0.11 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceRunnersExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:2.0.11")
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
        <version>5.15.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceRunnersExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>2.0.11</version>
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
mod run . --recipe ReplaceRunners
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.github.ReplaceRunners)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
