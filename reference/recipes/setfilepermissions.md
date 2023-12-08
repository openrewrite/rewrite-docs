# Set file permission attributes

**org.openrewrite.SetFilePermissions**

_Set a file's read, write and executable permission attributes._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/SetFilePermissions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.11.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.11.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fileMatcher | Permissions will be applied to matching files. This is a glob expression. |
| `Boolean` | isReadable | File read permission. |
| `Boolean` | isWritable | File write permission. |
| `Boolean` | isExecutable | Files executable permission. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.SetFilePermissionsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SetFilePermissionsExample
displayName: Set file permission attributes example
recipeList:
  - org.openrewrite.SetFilePermissions:
      fileMatcher: '**/gradlew.bat'
      isReadable: null
      isWritable: null
      isExecutable: null
```
{% endcode %}

Now that `com.yourorg.SetFilePermissionsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("com.yourorg.SetFilePermissionsExample")
}

repositories {
    mavenCentral()
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
        <version>5.15.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.SetFilePermissionsExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe SetFilePermissions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.SetFilePermissions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Patrick Way, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io)
