# Upgrade `micronaut.version` Maven property

**org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion**

_Set the maven micronaut.version property according to a node-style semver selector or to a specific version number._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/UpgradeMicronautMavenPropertyVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | newVersion | An exact version number, or node-style semver selector used to select the version number. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeMicronautMavenPropertyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeMicronautMavenPropertyVersionExample
displayName: Upgrade `micronaut.version` Maven property example
recipeList:
  - org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion:
      newVersion: 4.x
```
{% endcode %}

Now that `com.yourorg.UpgradeMicronautMavenPropertyVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:2.1.5 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeMicronautMavenPropertyVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.5")
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
            <recipe>com.yourorg.UpgradeMicronautMavenPropertyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.5</version>
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
mod run . --recipe UpgradeMicronautMavenPropertyVersion
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
* [Patrick](mailto:patway99@gmail.com), * Tyler Van Gorder, * [Sam Snyder](mailto:sam@moderne.io), * [Knut Wannheden](mailto:knut@moderne.io), * [Jeremy Grelle](mailto:grellej@unityfoundation.io), * Aaron Gershman
