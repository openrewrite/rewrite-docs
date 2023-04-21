# Change Maven plugin groupId and artifactId

**org.openrewrite.maven.ChangePluginGroupIdAndArtifactId**

_Change the groupId and/or the artifactId of a specified Maven plugin._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginGroupIdAndArtifactId.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/7.40.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.40.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginGroupIdAndArtifactIdExample
displayName: Change Maven plugin groupId and artifactId example
recipeList:
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: my-deprecated-maven-plugin
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: my-new-maven-plugin
```
{% endcode %}


Now that `com.yourorg.ChangePluginGroupIdAndArtifactIdExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangePluginGroupIdAndArtifactIdExample")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePluginGroupIdAndArtifactIdExample</recipe>
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


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.ChangePluginGroupIdAndArtifactId)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
