# Is the project a Jenkins plugin?

**org.openrewrite.jenkins.IsJenkinsPlugin**

_Checks if the project is a Jenkins plugin by the presence of a managed version of jenkins-core_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/java/org/openrewrite/jenkins/IsJenkinsPlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.3.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.3.6

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | version | The value of the `<jenkins.version>` property. | `[1,)` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.IsJenkinsPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.IsJenkinsPluginExample
displayName: Is the project a Jenkins plugin? example
recipeList:
  - org.openrewrite.jenkins.IsJenkinsPlugin:
      version: '[1,)'
```
{% endcode %}

Now that `com.yourorg.IsJenkinsPluginExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-jenkins:0.3.6 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("com.yourorg.IsJenkinsPluginExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.3.6")
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.IsJenkinsPluginExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.3.6</version>
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
mod run . --recipe IsJenkinsPluginExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.IsJenkinsPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Steve Hill](mailto:sghill.dev@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
