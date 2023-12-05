# Add explicit Inject dependencies

**org.openrewrite.java.migrate.javax.AddInjectDependencies**

_This recipe will add the necessary `inject-api` dependency from Jakarta EE 8 to maintain compatibility with Java version 11 or greater._

### Tags

* javax
* java11
* inject
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/add-inject-dependencies.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.4.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.4.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.4.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.AddInjectDependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.4.1")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.4.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.javax.AddInjectDependencies")
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
            <recipe>org.openrewrite.java.migrate.javax.AddInjectDependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.4.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.AddInjectDependencies
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddInjectDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `jakarta.inject`
  * artifactId: `jakarta.inject-api`
  * version: `1.0.3`
  * onlyIfUsing: `javax.inject.*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `jakarta.inject`
  * artifactId: `jakarta.inject-api`
  * newVersion: `1.0.3`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddInjectDependencies
displayName: Add explicit Inject dependencies
description: This recipe will add the necessary `inject-api` dependency from Jakarta EE 8 to maintain compatibility with Java version 11 or greater.

tags:
  - javax
  - java11
  - inject
  - jakarta
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.inject
      artifactId: jakarta.inject-api
      version: 1.0.3
      onlyIfUsing: javax.inject.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.inject
      artifactId: jakarta.inject-api
      newVersion: 1.0.3

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddInjectDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
