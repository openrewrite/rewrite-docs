# Migrate Okio dependencies to 3.x

**org.openrewrite.okio.UpgradeOkio3Dependencies**

_Migrate Okio dependencies to 3.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-okhttp/blob/main/src/main/resources/META-INF/rewrite/okio-3.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-okhttp/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-okhttp/0.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-okhttp
* version: 0.1.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-okhttp:0.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("org.openrewrite.okio.UpgradeOkio3Dependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-okhttp:0.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-okhttp:0.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.okio.UpgradeOkio3Dependencies")
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
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.okio.UpgradeOkio3Dependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-okhttp</artifactId>
            <version>0.1.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-okhttp:RELEASE -Drewrite.activeRecipes=org.openrewrite.okio.UpgradeOkio3Dependencies
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeOkio3Dependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `com.squareup.okio`
  * oldArtifactId: `okio-multiplatform`
  * newArtifactId: `okio`
  * newVersion: `3.x`
* [Upgrade Gradle or Maven dependency versions](../java/dependencies/upgradedependencyversion.md)
  * groupId: `com.squareup.okio`
  * artifactId: `okio`
  * newVersion: `3.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.okio.UpgradeOkio3Dependencies
displayName: Migrate Okio dependencies to 3.x
description: Migrate Okio dependencies to 3.x.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.squareup.okio
      oldArtifactId: okio-multiplatform
      newArtifactId: okio
      newVersion: 3.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.squareup.okio
      artifactId: okio
      newVersion: 3.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.okio.UpgradeOkio3Dependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
