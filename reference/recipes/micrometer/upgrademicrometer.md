# Upgrade Micrometer

**org.openrewrite.micrometer.UpgradeMicrometer**

_This recipe will apply changes commonly needed when migrating Micrometer._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micrometer/blob/main/src/main/resources/META-INF/rewrite/micrometer.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micrometer/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micrometer/0.2.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micrometer
* version: 0.2.5


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micrometer:0.2.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.11.2")
}

rewrite {
    activeRecipe("org.openrewrite.micrometer.UpgradeMicrometer")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micrometer:0.2.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.11.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micrometer:0.2.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.micrometer.UpgradeMicrometer")
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
        <version>5.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.micrometer.UpgradeMicrometer</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micrometer</artifactId>
            <version>0.2.5</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micrometer:RELEASE -Drewrite.activeRecipes=org.openrewrite.micrometer.UpgradeMicrometer
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeMicrometer
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../java/dependencies/upgradedependencyversion.md)
  * groupId: `io.micrometer`
  * artifactId: `micrometer-core`
  * newVersion: `1.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.micrometer.UpgradeMicrometer
displayName: Upgrade Micrometer
description: This recipe will apply changes commonly needed when migrating Micrometer.
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.micrometer
      artifactId: micrometer-core
      newVersion: 1.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.micrometer.UpgradeMicrometer)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
