# Add an annotation processor to the Maven Compiler plugin configuration

**io.quarkus.updates.core.quarkus37.AddMavenCompilerAnnotationProcessor**

_Add an annotation processor to the Maven Compiler plugin configuration._

## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus37.AddMavenCompilerAnnotationProcessor), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The groupId of the annotation processor. | `org.hibernate.orm` |
| `String` | artifactId | The artifactId of the annotation processor. | `hibernate-jpamodelgen` |
| `Boolean` | enforceManagedVersion | *Optional*. If the new annotation processor has a managed version, this flag can be used to explicitly set the version on the annotation processor with the version of the managed dependency. The default for this flag is `false`. |  |
| `String` | mavenCompilerPluginVersion | *Optional*. The version of the Maven Compiler plugin to use if not present. | `hibernate-jpamodelgen` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddMavenCompilerAnnotationProcessorExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddMavenCompilerAnnotationProcessorExample
displayName: Add an annotation processor to the Maven Compiler plugin configuration example
recipeList:
  - io.quarkus.updates.core.quarkus37.AddMavenCompilerAnnotationProcessor:
      groupId: org.hibernate.orm
      artifactId: hibernate-jpamodelgen
      mavenCompilerPluginVersion: hibernate-jpamodelgen
```
{% endcode %}

Now that `com.yourorg.AddMavenCompilerAnnotationProcessorExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-third-party:0.5.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.AddMavenCompilerAnnotationProcessorExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.AddMavenCompilerAnnotationProcessorExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mod run . --recipe AddMavenCompilerAnnotationProcessorExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus37.AddMavenCompilerAnnotationProcessor)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
