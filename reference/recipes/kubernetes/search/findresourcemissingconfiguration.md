# Find missing configuration

**org.openrewrite.kubernetes.search.FindResourceMissingConfiguration**

_Find Kubernetes resources with missing configuration._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/search/FindResourceMissingConfiguration.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.2.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.2.3

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | resourceKind | *Optional*. The Kubernetes resource type to search on. | `Pod` |
| `String` | configurationPath | A JsonPath expression to locate Kubernetes configuration. | `$.spec.containers.livenessProbe` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindResourceMissingConfigurationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindResourceMissingConfigurationExample
displayName: Find missing configuration example
recipeList:
  - org.openrewrite.kubernetes.search.FindResourceMissingConfiguration:
      resourceKind: Pod
      configurationPath: $.spec.containers.livenessProbe
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.FindResourceMissingConfigurationExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.2.3 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.11.2")
}

rewrite {
    activeRecipe("com.yourorg.FindResourceMissingConfigurationExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.2.3")
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
        <version>5.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindResourceMissingConfigurationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.2.3</version>
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
mod run . --recipe FindResourceMissingConfigurationExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindResourceMissingConfiguration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Jon Brisbin](mailto:jon@moderne.io), [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com)
