# Change the default value for feature key

**org.openrewrite.launchdarkly.ChangeVariationDefault**

_Change the default value for `Variation` invocations for feature key._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-launchdarkly/blob/main/src/main/java/org/openrewrite/launchdarkly/ChangeVariationDefault.java), [Issue Tracker](https://github.com/openrewrite/rewrite-launchdarkly/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-launchdarkly/0.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-launchdarkly
* version: 0.1.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | featureKey | The key of the feature flag to remove. | `flag-key-123abc` |
| `String` | defaultValue | The default value to use in feature flag invocations. | `true` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeVariationDefaultExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeVariationDefaultExample
displayName: Change the default value for feature key example
recipeList:
  - org.openrewrite.launchdarkly.ChangeVariationDefault:
      featureKey: flag-key-123abc
      defaultValue: true
```
{% endcode %}

Now that `com.yourorg.ChangeVariationDefaultExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-launchdarkly:0.1.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeVariationDefaultExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-launchdarkly:0.1.0")
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeVariationDefaultExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-launchdarkly</artifactId>
            <version>0.1.0</version>
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
mod run . --recipe ChangeVariationDefault
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.launchdarkly.ChangeVariationDefault)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
