# Use correct application namespace values

**org.openrewrite.xml.liberty.AppDDNamespaceRule**

_Namespace values in application.xml must be consistent with the descriptor version._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-liberty
* version: 1.0.3

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-liberty:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.xml.liberty.AppDDNamespaceRule")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-liberty:1.0.3")
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
        rewrite("org.openrewrite.recipe:rewrite-liberty:1.0.3")
    }
    rewrite {
        activeRecipe("org.openrewrite.xml.liberty.AppDDNamespaceRule")
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
            <recipe>org.openrewrite.xml.liberty.AppDDNamespaceRule</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-liberty</artifactId>
            <version>1.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-liberty:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.xml.liberty.AppDDNamespaceRule
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AppDDNamespaceRule
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change XML Attribute of a specific resource version](../../xml/changenamespacevalue.md)
  * elementName: `application`
  * newValue: `http://java.sun.com/xml/ns/j2ee`
  * versionMatcher: `1.4`
  * searchAllNamespaces: `false`
* [Change XML Attribute of a specific resource version](../../xml/changenamespacevalue.md)
  * elementName: `application`
  * newValue: `http://java.sun.com/xml/ns/javaee`
  * versionMatcher: `5,6`
  * searchAllNamespaces: `false`
* [Change XML Attribute of a specific resource version](../../xml/changenamespacevalue.md)
  * elementName: `application`
  * newValue: `http://xmlns.jcp.org/xml/ns/javaee`
  * versionMatcher: `7+`
  * searchAllNamespaces: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.xml.liberty.AppDDNamespaceRule
displayName: Use correct application namespace values
description: Namespace values in application.xml must be consistent with the descriptor version.
recipeList:
  - org.openrewrite.xml.ChangeNamespaceValue:
      elementName: application
      newValue: http://java.sun.com/xml/ns/j2ee
      versionMatcher: 1.4
      searchAllNamespaces: false
  - org.openrewrite.xml.ChangeNamespaceValue:
      elementName: application
      newValue: http://java.sun.com/xml/ns/javaee
      versionMatcher: 5,6
      searchAllNamespaces: false
  - org.openrewrite.xml.ChangeNamespaceValue:
      elementName: application
      newValue: http://xmlns.jcp.org/xml/ns/javaee
      versionMatcher: 7+
      searchAllNamespaces: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.xml.liberty.AppDDNamespaceRule)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
