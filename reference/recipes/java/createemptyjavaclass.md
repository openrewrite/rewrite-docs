# Create Java class

**org.openrewrite.java.CreateEmptyJavaClass**

_Create a new, empty Java class._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/CreateEmptyJavaClass.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.13.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.13.4

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | sourceRoot | The source root of the new class file. | `src/main/java` |
| `String` | packageName | The package of the new class. | `org.openrewrite.example` |
| `String` | modifier | The class modifier. Valid options: `public`, `private`, `protected`, `package-private` | `public` |
| `String` | className | File path of new file. | `ExampleClass` |
| `Boolean` | overwriteExisting | *Optional*. If there is an existing file, should it be overwritten. |  |
| `String` | relativePath | *Optional*. Directory path of new class. | `foo/bar` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CreateEmptyJavaClassExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CreateEmptyJavaClassExample
displayName: Create Java class example
recipeList:
  - org.openrewrite.java.CreateEmptyJavaClass:
      sourceRoot: src/main/java
      packageName: org.openrewrite.example
      modifier: public
      className: ExampleClass
      relativePath: foo/bar
```
{% endcode %}

Now that `com.yourorg.CreateEmptyJavaClassExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.7.0")
}

rewrite {
    activeRecipe("com.yourorg.CreateEmptyJavaClassExample")
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
        <version>5.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.CreateEmptyJavaClassExample</recipe>
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
mod run . --recipe CreateEmptyJavaClassExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.CreateEmptyJavaClass)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
