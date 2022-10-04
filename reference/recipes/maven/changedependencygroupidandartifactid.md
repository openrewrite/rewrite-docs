# Change Maven dependency groupId, artifactId and/or the version

** org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId**
_Change the groupId, artifactId and/or the version of a specified Maven dependency._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.30.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.30.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `Boolean` | overrideManagedVersion | *Optional*. If the new dependency has a managed version, this flag can be used to explicitly set the version on the dependency. The default for this flag is `false`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample
displayName: Change Maven dependency groupId, artifactId and/or the version example
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
      overrideManagedVersion: false
```
{% endcode %}


Now that `com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.2")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample")
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
        <version>4.34.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample`
