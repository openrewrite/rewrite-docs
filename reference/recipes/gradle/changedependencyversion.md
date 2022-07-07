# Change a Gradle dependency version

** org.openrewrite.gradle.ChangeDependencyVersion**
_Finds dependencies declared in `build.gradle` files._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.25.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.25.0

## Options

| Type | Name | Description |
| -- | -- | -- |
                        | `String` | dependencyPattern | A dependency pattern specifying which dependencies should have their groupId updated. Dependency patterns are a concise way of describing which dependencies are applicable to a recipe. Valid dependency patterns take one of these forms:

* groupId:artifactId
* groupId:artifactId:versionSelector
* groupId:artifactId:versionSelector/versionPattern

"groupId" and "artifactId" accept glob patterns.
"versionSelector" accepts both literal version numbers and semver selectors.
"versionPattern" is used for artifacts that encode variant/platform information in their version.Guava is a common example of such a library. Guava appends "-jre" or "-android" to its version to indicate platform compatibility. |
| `String` | newVersion | The version number to update the dependency to |
| `String` | configuration | *Optional*. The dependency configuration to search for dependencies in. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyVersionExample
displayName: Change a Gradle dependency version example
recipeList:
  - org.openrewrite.gradle.ChangeDependencyVersion:
      dependencyPattern: com.fasterxml.jackson*:*
      newVersion: 1.0
      configuration: api
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyVersionExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.25.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.23.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.25.0")
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
        <version>4.26.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.25.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.ChangeDependencyVersionExample`
