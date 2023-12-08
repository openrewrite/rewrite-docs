# Remove `boolVariation` for feature key

**org.openrewrite.launchdarkly.RemoveBoolVariation**

_Replace `boolVariation` invocations for feature key with value, and simplify constant if branch execution._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-launchdarkly/blob/main/src/main/java/org/openrewrite/launchdarkly/RemoveBoolVariation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-launchdarkly/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-launchdarkly/0.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-launchdarkly
* version: 0.0.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | featureKey | The key of the feature flag to remove. |
| `Boolean` | replacementValue | The value to replace the feature flag check with. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveBoolVariationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveBoolVariationExample
displayName: Remove `boolVariation` for feature key example
recipeList:
  - org.openrewrite.launchdarkly.RemoveBoolVariation:
      featureKey: flag-key-123abc
      replacementValue: true
```
{% endcode %}

Now that `com.yourorg.RemoveBoolVariationExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-launchdarkly:0.0.4 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("com.yourorg.RemoveBoolVariationExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-launchdarkly:0.0.4")
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
            <recipe>com.yourorg.RemoveBoolVariationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-launchdarkly</artifactId>
            <version>0.0.4</version>
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
mod run . --recipe RemoveBoolVariation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.launchdarkly.RemoveBoolVariation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
