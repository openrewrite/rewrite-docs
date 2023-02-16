# Set file permission attributes

**org.openrewrite.SetFilePermissions**
_Set a file's read, write and executable permission attributes._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/SetFilePermissions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-core/7.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 7.36.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fileMatcher | Permissions will be applied to matching files. This is a glob expression. |
| `Boolean` | isReadable | File read permission. |
| `Boolean` | isWritable | File write permission. |
| `Boolean` | isExecutable | Files executable permission. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.SetFilePermissionsExample`.
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
      isReadable: true
      isWritable: true
      isExecutable: true
```
{% endcode %}


Now that `com.yourorg.SetFilePermissionsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.36.0")
}

rewrite {
    activeRecipe("com.yourorg.SetFilePermissionsExample")
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
            <recipe>com.yourorg.SetFilePermissionsExample</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=com.yourorg.SetFilePermissionsExample`

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.SetFilePermissions)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
