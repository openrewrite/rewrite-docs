# Upgrade `micronaut.version` Maven property

** org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion**
_Set the maven micronaut.version property according to a node-style semver selector or to a specific version number._

## Source

[Github](https://github.com/openrewrite/rewrite-micronaut), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-micronaut/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 1.14.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | newVersion | An exact version number, or node-style semver selector used to select the version number. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpgradeMicronautMavenPropertyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeMicronautMavenPropertyVersionExample
displayName: Upgrade `micronaut.version` Maven property example
recipeList:
  - org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion:
      newVersion: 3.x
```
{% endcode %}

Now that `com.yourorg.UpgradeMicronautMavenPropertyVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-micronaut:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeMicronautMavenPropertyVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:1.14.1")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeMicronautMavenPropertyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.14.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.UpgradeMicronautMavenPropertyVersionExample`
