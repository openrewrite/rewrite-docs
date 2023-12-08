# Find pinned resources by type

**org.openrewrite.concourse.search.FindPinnedResource**

_Find resources of a particular type that have pinned versions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-concourse/blob/main/src/main/java/org/openrewrite/concourse/search/FindPinnedResource.java), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-concourse/2.0.10/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 2.0.10

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceType | *Optional*. The resource type to search for. Leave empty to find all pins. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-concourse:2.0.10` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("org.openrewrite.concourse.search.FindPinnedResource")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:2.0.10")
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
        rewrite("org.openrewrite.recipe:rewrite-concourse:2.0.10")
    }
    rewrite {
        activeRecipe("org.openrewrite.concourse.search.FindPinnedResource")
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
            <recipe>org.openrewrite.concourse.search.FindPinnedResource</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>2.0.10</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-concourse:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.concourse.search.FindPinnedResource
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FindPinnedResource
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find YAML entries](../../yaml/search/findkey.md)
  * key: `$.resources[*].version`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.concourse.search.FindPinnedResource
displayName: Find pinned resources by type
description: Find resources of a particular type that have pinned versions.

recipeList:
  - org.openrewrite.yaml.search.FindKey:
      key: $.resources[*].version

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.concourse.search.FindPinnedResource)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), Kun Li
