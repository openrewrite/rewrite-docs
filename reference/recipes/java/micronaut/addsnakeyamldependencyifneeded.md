# Add `snakeyaml` dependency if needed

**org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded**

_This recipe will add the `snakeyaml` dependency to a Micronaut 4 application that uses yaml configuration._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/AddSnakeYamlDependencyIfNeeded.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.8


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.1.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.8")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.5.12") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.8")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
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
            <recipe>org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.8</version>
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

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddSnakeYamlDependencyIfNeeded
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency.md)
  * groupId: `org.yaml`
  * artifactId: `snakeyaml`
  * onlyIfUsing: `io.micronaut.runtime.Micronaut`
  * configuration: `runtimeOnly`
  * scope: `runtime`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded
displayName: Add `snakeyaml` dependency if needed
description: This recipe will add the `snakeyaml` dependency to a Micronaut 4 application that uses yaml configuration.
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.yaml
      artifactId: snakeyaml
      onlyIfUsing: io.micronaut.runtime.Micronaut
      configuration: runtimeOnly
      scope: runtime

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
