# Migrate OkHttp dependencies to 5.x

**org.openrewrite.okhttp.UpgradeOkHttp5Dependencies**

_Migrate OkHttp dependencies to 5.x._

## Source

[GitHub](https://github.com/openrewrite/rewrite-okhttp/blob/main/src/main/resources/META-INF/rewrite/okhttp-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-okhttp/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-okhttp/0.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-okhttp
* version: 0.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-okhttp:0.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.6")
}

rewrite {
    activeRecipe("org.openrewrite.okhttp.UpgradeOkHttp5Dependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-okhttp:0.0.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.6") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-okhttp:0.0.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.okhttp.UpgradeOkHttp5Dependencies")
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
        <version>5.5.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.okhttp.UpgradeOkHttp5Dependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-okhttp</artifactId>
            <version>0.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-okhttp:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.okhttp.UpgradeOkHttp5Dependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `com.squareup.okhttp3`
  * oldArtifactId: `okhttp`
  * newVersion: `5.0.0-alpha.11`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.okhttp.UpgradeOkHttp5Dependencies
displayName: Migrate OkHttp dependencies to 5.x
description: Migrate OkHttp dependencies to 5.x.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.squareup.okhttp3
      oldArtifactId: okhttp
      newVersion: 5.0.0-alpha.11

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.okhttp.UpgradeOkHttp5Dependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
