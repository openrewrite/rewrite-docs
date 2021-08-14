# Add Maven dependency

** org.openrewrite.maven.AddProvenanceScopedDependency**
_Use type matching rules to conditionally add a maven dependency to a pom.xml file._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.11.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.11.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | version | An exact version number, or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `boolean` | releasesOnly | *Optional*. Whether to exclude snapshots from consideration when using a semver selector |
| `String` | scope | *Optional*. The maven dependency scope to add the dependency to. |
| `List` | typeMatchExpressions | *Optional*. A list of fully qualified type names or glob expressions used to determine if the dependency will be added and which scope it should be placed. |
| `String` | type | *Optional*. The type of dependency to add. If omitted Maven defaults to assuming the type is "jar". |
| `String` | classifier | *Optional*. A Maven classifier to add. Most commonly used to select shaded or test variants of a library |
| `Boolean` | optional | *Optional*. Set the value of the `<optional>` tag. No `<optional>` tag will be added when this is `null`. |
| `String` | familyPattern | *Optional*. A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddProvenanceScopedDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddProvenanceScopedDependencyExample
displayName: Add Maven dependency example
recipeList:
  - org.openrewrite.maven.AddProvenanceScopedDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 29.X
      versionPattern: -jre
      releasesOnly: true
      scope: compile
      typeMatchExpressions: org.junit.jupiter.api.*
      type: jar
      classifier: test
      optional: true
      familyPattern: com.fasterxml.jackson*
```
{% endcode %}


Now that `com.yourorg.AddProvenanceScopedDependencyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.7.0")
}

rewrite {
    activeRecipe("com.yourorg.AddProvenanceScopedDependencyExample")
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
        <version>4.9.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddProvenanceScopedDependencyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddProvenanceScopedDependencyExample`
