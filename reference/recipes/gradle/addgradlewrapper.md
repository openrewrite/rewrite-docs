# Add Gradle wrapper

**org.openrewrite.gradle.AddGradleWrapper**
_Add a Gradle wrapper where one does not exist._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/AddGradleWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.36.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | *Optional*. An exact version number or [dependency version selector](https://docs.openrewrite.org/reference/dependency-version-selectors). Defaults to the latest release version. |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". |
| `String` | repositoryUrl | The URL of the repository to download the Gradle distribution from. Currently only supports repositories like services.gradle.org, not arbitrary maven or ivy repositories. Defaults to `https://services.gradle.org/versions/all`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddGradleWrapperExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddGradleWrapperExample
displayName: Add Gradle wrapper example
recipeList:
  - org.openrewrite.gradle.AddGradleWrapper:
      version: 7.x
      distribution: null
      repositoryUrl: https://services.gradle.org/versions/all
```
{% endcode %}


Now that `com.yourorg.AddGradleWrapperExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.36.0")
}

rewrite {
    activeRecipe("com.yourorg.AddGradleWrapperExample")
}

repositories {
    mavenCentral()
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
        <version>4.40.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddGradleWrapperExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddGradleWrapperExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.AddGradleWrapper)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
