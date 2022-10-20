# Update Gradle wrapper

** org.openrewrite.gradle.UpdateGradleWrapper**
_Update the version of Gradle used in an existing Gradle wrapper._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.32.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the version number. |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpdateGradleWrapperExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateGradleWrapperExample
displayName: Update Gradle wrapper example
recipeList:
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 7.x
      distribution: null
```
{% endcode %}

Now that `com.yourorg.UpdateGradleWrapperExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.32.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGradleWrapperExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.32.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateGradleWrapperExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.32.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.UpdateGradleWrapperExample`
