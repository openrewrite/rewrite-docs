# Dependency report

**org.openrewrite.java.dependencies.DependencyList**

_Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file._

## Source

[Github](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyList.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 0.4.0

## Contributors
* [Sam Snyder](sam@moderne.io)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Scope` | scope | The scope of the dependencies to include in the report. |
| `boolean` | includeTransitive | Whether or not to include transitive dependencies in the report. Defaults to including only direct dependencies. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DependencyListExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyListExample
displayName: Dependency report example
recipeList:
  - org.openrewrite.java.dependencies.DependencyList:
      scope: Compile
      includeTransitive: true
```
{% endcode %}

Now that `com.yourorg.DependencyListExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:0.4.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.DependencyListExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:0.4.0")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DependencyListExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>0.4.0</version>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyList)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
