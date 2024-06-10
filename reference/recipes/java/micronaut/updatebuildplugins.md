# Add Micronaut build plugins to 4.x

**org.openrewrite.java.micronaut.UpdateBuildPlugins**

_This recipe will update the shadow jar plugin to 8.x and the Micronaut build plugins to 4.x for a Gradle build._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.6.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.6.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateBuildPlugins")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.6.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.6.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateBuildPlugins")
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
        <version>5.33.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateBuildPlugins</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.6.0</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateBuildPlugins 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateBuildPlugins
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `com.github.johnrengelman.shadow`
  * newVersion: `8.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.aot`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.application`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.component`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.crac`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.docker`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.graalvm`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.library`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.minimal.application`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.minimal.library`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.openapi`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.test-resources`
  * newVersion: `4.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.micronaut.test-resources-consumer`
  * newVersion: `4.x`
* [Change Maven plugin group and artifact ID](../../maven/changeplugingroupidandartifactid.md)
  * oldGroupId: `io.micronaut.build`
  * oldArtifactId: `micronaut-maven-plugin`
  * newGroupId: `io.micronaut.maven`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateBuildPlugins
displayName: Add Micronaut build plugins to 4.x
description: This recipe will update the shadow jar plugin to 8.x and the Micronaut build plugins to 4.x for a Gradle build.
recipeList:
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: com.github.johnrengelman.shadow
      newVersion: 8.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.aot
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.application
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.component
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.crac
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.docker
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.graalvm
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.library
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.minimal.application
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.minimal.library
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.openapi
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.test-resources
      newVersion: 4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.micronaut.test-resources-consumer
      newVersion: 4.x
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: io.micronaut.build
      oldArtifactId: micronaut-maven-plugin
      newGroupId: io.micronaut.maven

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateBuildPlugins)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
