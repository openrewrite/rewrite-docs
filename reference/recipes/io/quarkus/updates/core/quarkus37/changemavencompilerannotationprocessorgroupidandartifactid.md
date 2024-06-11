# Change Maven Compiler plugin annotation processor groupId, artifactId and/or the version

**io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId**

_Change the groupId, artifactId and/or the version of a specified Maven Compiler plugin annotation processor._

## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.4.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions. | `org.hibernate` |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions. | `hibernate-jpamodelgen` |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. | `org.hibernate.orm` |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. | `hibernate-jpamodelgen` |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. If the new annotation processor has a managed version, this flag can be used to explicitly set the version on the annotation processor. The default for this flag is `false`. |  |
| `Boolean` | enforceManagedVersion | *Optional*. If the new annotation processor has a managed version, this flag can be used to explicitly set the version on the annotation processor with the version of the managed dependency. The default for this flag is `false`. |  |

## Data Tables

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample
displayName: Change Maven Compiler plugin annotation processor groupId, artifactId and/or the version example
recipeList:
  - io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 29.X
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-third-party:0.4.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.4.0")
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
        <version>5.33.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.4.0</version>
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
mod run . --recipe ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactIdExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
