# Find Gradle dependency

** org.openrewrite.gradle.search.FindDependency**
_Finds dependencies declared in `build.gradle` files. See the [reference](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph) on Gradle configurations or the diagram below for a description of what configuration to use. A project's compile and runtime classpath is based on these configurations.

<img alt="Gradle compile classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-main.png" width="200px"/>
 A project's test classpath is based on these configurations.

<img alt="Gradle test classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-test.png" width="200px"/>_

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.22.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.22.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | configuration | *Optional*. The dependency configuration to search for dependencies in. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindDependencyExample
displayName: Find Gradle dependency example
recipeList:
  - org.openrewrite.gradle.search.FindDependency:
      groupId: com.google.guava
      artifactId: guava
      configuration: api
```
{% endcode %}

Now that `com.yourorg.FindDependencyExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.22.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("com.yourorg.FindDependencyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.22.0")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.22.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindDependencyExample`
