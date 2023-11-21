# Migrate LaunchDarkly dependencies to 6.x

**org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies**

_Migrate LaunchDarkly dependencies to 6.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-launchdarkly/blob/main/src/main/resources/META-INF/rewrite/launchdarkly-6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-launchdarkly/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-launchdarkly/0.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-launchdarkly
* version: 0.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-launchdarkly:0.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.6")
}

rewrite {
    activeRecipe("org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-launchdarkly:0.0.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.6") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-launchdarkly:0.0.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies")
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
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-launchdarkly</artifactId>
            <version>0.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-launchdarkly:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeLaunchDarkly6Dependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `com.launchdarkly`
  * oldArtifactId: `launchdarkly-java-server-sdk`
  * newVersion: `6.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies
displayName: Migrate LaunchDarkly dependencies to 6.x
description: Migrate LaunchDarkly dependencies to 6.x.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.launchdarkly
      oldArtifactId: launchdarkly-java-server-sdk
      newVersion: 6.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.