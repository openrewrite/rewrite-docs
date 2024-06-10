# Migrate to Struts 6.0

**org.openrewrite.java.struts.migrate6.MigrateStruts6**

_Migrate Struts 2.x to Struts 6.0_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-struts/blob/main/src/main/resources/META-INF/rewrite/struts6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-struts/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-struts/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-struts
* version: 0.4.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-struts:0.4.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-struts:0.4.0")
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
        rewrite("org.openrewrite.recipe:rewrite-struts:0.4.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6")
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
            <recipe>org.openrewrite.java.struts.migrate6.MigrateStruts6</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-struts</artifactId>
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

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-struts:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.struts.migrate6.MigrateStruts6 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateStruts6
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Struts 2.0 interceptors to action "aware" interfaces](../../../java/struts/migrate6/migrateawareinterfaces.md)
* [Upgrade Struts 6.0 dependencies](../../../java/struts/migrate6/upgradestruts6dependencies.md)
* [Migrate DTD to a specific Struts version](../../../java/struts/migratestrutsdtd.md)
  * strutsVersion: `6.0`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.struts.migrate6.MigrateStruts6
displayName: Migrate to Struts 6.0
description: Migrate Struts 2.x to Struts 6.0
recipeList:
  - org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces
  - org.openrewrite.java.struts.migrate6.UpgradeStruts6Dependencies
  - org.openrewrite.java.struts.MigrateStrutsDtd:
      strutsVersion: 6.0

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateStruts6)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
