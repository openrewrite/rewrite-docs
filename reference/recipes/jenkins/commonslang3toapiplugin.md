# Use commons-lang3 API Plugin

**org.openrewrite.jenkins.CommonsLang3ToApiPlugin**

_Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/rewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/0.2.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jenkins
* version: 0.2.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins:0.2.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.CommonsLang3ToApiPlugin")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:0.2.7")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.10") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-jenkins:0.2.7")
    }
    rewrite {
        activeRecipe("org.openrewrite.jenkins.CommonsLang3ToApiPlugin")
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
        <version>5.14.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.jenkins.CommonsLang3ToApiPlugin</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>0.2.7</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.jenkins.CommonsLang3ToApiPlugin
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe CommonsLang3ToApiPlugin
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use Jenkins API plugin instead of libraries](../jenkins/replacelibrarieswithapiplugin.md)
  * pluginGroupId: `io.jenkins.plugins`
  * pluginArtifactId: `commons-lang3-api`
  * pluginVersion: `3.12.0-36.vd97de6465d5b_`
  * replaces: `[ReplaceLibrariesWithApiPlugin.Library(groupId=org.apache.commons, artifactId=commons-lang3)]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.CommonsLang3ToApiPlugin
displayName: Use commons-lang3 API Plugin
description: Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively.
recipeList:
  - org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin:
      pluginGroupId: io.jenkins.plugins
      pluginArtifactId: commons-lang3-api
      pluginVersion: 3.12.0-36.vd97de6465d5b_
      replaces: [ReplaceLibrariesWithApiPlugin.Library(groupId=org.apache.commons, artifactId=commons-lang3)]

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.jenkins.CommonsLang3ToApiPlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Steve Hill](mailto:sghill.dev@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com)
