# Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`

**org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName**

_Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`._

### Tags

* spring
* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-58.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.11/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.11


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.11` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.18") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName")
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.11</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `com.nimbusds.jose.shaded.json`
  * newPackageName: `net.minidev.json`
  * recursive: `false`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `net.minidev`
  * artifactId: `json-smart`
  * version: `2.x`
  * onlyIfUsing: `com.nimbusds.jose`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName
displayName: Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`
description: Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`.
tags:
  - spring
  - security
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.nimbusds.jose.shaded.json
      newPackageName: net.minidev.json
      recursive: false
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: net.minidev
      artifactId: json-smart
      version: 2.x
      onlyIfUsing: com.nimbusds.jose

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
