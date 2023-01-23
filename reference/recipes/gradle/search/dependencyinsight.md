# Gradle dependency insight

**org.openrewrite.gradle.search.DependencyInsight**
_Find direct and transitive dependencies matching a group, artifact, and optionally a configuration name. Results include dependencies that either directly match or transitively include a matching dependency._

## Source

[Github](https://github.com/openrewrite/rewrite/tree/main/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.35.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.35.0-SNAPSHOT

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupIdPattern | Group glob pattern used to match dependencies. |
| `String` | artifactIdPattern | Artifact glob pattern used to match dependencies. |
| `String` | configuration | *Optional*. Match dependencies with the specified scope. If not specified, all configurations will be searched. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.DependencyInsightExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyInsightExample
displayName: Gradle dependency insight example
recipeList:
  - org.openrewrite.gradle.search.DependencyInsight:
      groupIdPattern: com.fasterxml.jackson.module
      artifactIdPattern: jackson-module-*
      configuration: compileClasspath
```
{% endcode %}

Now that `com.yourorg.DependencyInsightExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("com.yourorg.DependencyInsightExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.35.0-SNAPSHOT")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DependencyInsightExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.35.0-SNAPSHOT</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.DependencyInsightExample`

## See how the recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.search.DependencyInsight)

The Moderne public SaaS instance enables you to try out recipes across thousands of open-source repositories and author new public recipes easily.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
