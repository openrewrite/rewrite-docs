# Migrate Struts 2.0 interceptors to action "aware" interfaces

**org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces**

_These types have moved to a new package in Struts 6.0._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-struts/blob/main/src/main/resources/META-INF/rewrite/struts6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-struts/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-struts/0.4.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-struts
* version: 0.4.4

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-struts:0.4.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-struts:0.4.4")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-struts:0.4.4")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-struts</artifactId>
            <version>0.4.4</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-struts:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateAwareInterfaces
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ApplicationAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ApplicationAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.CookiesAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.CookiesAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.HttpParametersAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ParametersAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ParameterAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ParametersAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.PrincipalAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.PrincipalAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.RequestAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletRequestAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ServletRequestAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletRequestAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.ServletResponseAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletResponseAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.interceptor.SessionAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.SessionAware`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.struts2.util.ServletContextAware`
  * newFullyQualifiedTypeName: `org.apache.struts2.action.ServletContextAware`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces
displayName: Migrate Struts 2.0 interceptors to action "aware" interfaces
description: These types have moved to a new package in Struts 6.0.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ApplicationAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ApplicationAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.CookiesAware
      newFullyQualifiedTypeName: org.apache.struts2.action.CookiesAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.HttpParametersAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ParametersAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ParameterAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ParametersAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.PrincipalAware
      newFullyQualifiedTypeName: org.apache.struts2.action.PrincipalAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.RequestAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletRequestAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ServletRequestAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletRequestAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.ServletResponseAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletResponseAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.interceptor.SessionAware
      newFullyQualifiedTypeName: org.apache.struts2.action.SessionAware
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.struts2.util.ServletContextAware
      newFullyQualifiedTypeName: org.apache.struts2.action.ServletContextAware

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
