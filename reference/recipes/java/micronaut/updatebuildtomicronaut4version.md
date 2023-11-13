# Update the Micronaut version to 4.x

**org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version**

_This recipe will update the Micronaut version to 4.x for a Gradle or Maven build._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.5

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.1.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version")
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
        <version>5.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateBuildToMicronaut4Version
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade `micronaut.version` Maven property](../../java/micronaut/upgrademicronautmavenpropertyversion.md)
  * newVersion: `4.x`
* [Upgrade gradle.properties Micronaut version](../../java/micronaut/upgrademicronautgradlepropertiesversion.md)
  * newVersion: `4.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version
displayName: Update the Micronaut version to 4.x
description: This recipe will update the Micronaut version to 4.x for a Gradle or Maven build.
recipeList:
  - org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion:
      newVersion: 4.x
  - org.openrewrite.java.micronaut.UpgradeMicronautGradlePropertiesVersion:
      newVersion: 4.x

```
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jeremy Grelle](mailto:grellej@unityfoundation.io)
* Aaron Gershman


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
