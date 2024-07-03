# Adds missing method implementations

**org.openrewrite.java.migrate.AddMissingMethodImplementation**

_Check for missing methods required by interfaces and adds them._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/AddMissingMethodImplementation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.19.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | fullyQualifiedClassName | A fully qualified class being implemented with missing method. | `com.yourorg.FooBar` |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) for matching required method definition. | `*..* hello(..)` |
| `String` | methodTemplateString | Template of method to add | `public String hello() { return \"Hello from #{}!\"; }` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddMissingMethodImplementationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddMissingMethodImplementationExample
displayName: Adds missing method implementations example
recipeList:
  - org.openrewrite.java.migrate.AddMissingMethodImplementation:
      fullyQualifiedClassName: com.yourorg.FooBar
      methodPattern: '*..* hello(..)'
      methodTemplateString: public String hello() { return \"Hello from #{}!\"; }
```
{% endcode %}

Now that `com.yourorg.AddMissingMethodImplementationExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:2.19.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("com.yourorg.AddMissingMethodImplementationExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.19.0")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.AddMissingMethodImplementationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.19.0</version>
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
mod run . --recipe AddMissingMethodImplementationExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.AddMissingMethodImplementation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo, Daryl Robbins, [Tim te Beek](mailto:timtebeek@gmail.com)
