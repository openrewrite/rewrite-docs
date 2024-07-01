# Use Jenkins API plugin instead of libraries

**org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin**

_Prefer Jenkins API plugins over bundling libraries for slimmer plugins._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/java/org/openrewrite/jenkins/ReplaceLibrariesWithApiPlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.8.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.8.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | pluginGroupId | The first part of a dependency coordinate 'io.jenkins.plugins:ARTIFACT_ID:VERSION'. | `io.jenkins.plugins` |
| `String` | pluginArtifactId | The second part of a dependency coordinate 'GROUP_ID:jackson2-api:VERSION'. | `jackson2-api` |
| `String` | pluginVersion | An exact version number. | `1981.v17df70e84a_a_1` |
| `Set` | replaces | The set of library coordinates replaced by this API Plugin. | <pre>groupId: org.apache.commons<br />artifactId: commons-text</pre> |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceLibrariesWithApiPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceLibrariesWithApiPluginExample
displayName: Use Jenkins API plugin instead of libraries example
recipeList:
  - org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin:
      pluginGroupId: io.jenkins.plugins
      pluginArtifactId: jackson2-api
      pluginVersion: 1981.v17df70e84a_a_1
      replaces: groupId: org.apache.commons
artifactId: commons-text
```
{% endcode %}

Now that `com.yourorg.ReplaceLibrariesWithApiPluginExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-jenkins:0.8.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceLibrariesWithApiPluginExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.8.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.ReplaceLibrariesWithApiPluginExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.8.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ReplaceLibrariesWithApiPluginExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Steve Hill](mailto:sghill.dev@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
