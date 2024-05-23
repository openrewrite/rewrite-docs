# Use `getSSOCookieFromSSOToken` and `logout`

**org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods**

_This recipe replaces `LTPACookieFromSSOToken()` with  `getSSOCookieFromSSOToken`  and `revokeSSOCookies` with `logout`. The two methods are  deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. They are not available on Liberty._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/1.4.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-liberty
* version: 1.4.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-liberty:1.4.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-liberty:1.4.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.14.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-liberty:1.4.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods")
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-liberty</artifactId>
            <version>1.4.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-liberty:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe WebSphereUnavailableSSOMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `revokeSSOCookies` with `logout`](../../java/liberty/websphereunavailablessocookiemethod.md)
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `com.ibm.websphere.security.WSSecurityHelper getLTPACookieFromSSOToken()`
  * newMethodName: `getSSOCookieFromSSOToken`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.ibm.websphere.security.WSSecurityHelper`
  * newFullyQualifiedTypeName: `com.ibm.websphere.security.web.WebSecurityHelper`
  * ignoreDefinition: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods
displayName: Use `getSSOCookieFromSSOToken` and `logout`
description: This recipe replaces `LTPACookieFromSSOToken()` with  `getSSOCookieFromSSOToken`  and `revokeSSOCookies` with `logout`. The two methods are  deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. They are not available on Liberty.

recipeList:
  - org.openrewrite.java.liberty.WebSphereUnavailableSSOCookieMethod
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.ibm.websphere.security.WSSecurityHelper getLTPACookieFromSSOToken()
      newMethodName: getSSOCookieFromSSOToken
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.ibm.websphere.security.WSSecurityHelper
      newFullyQualifiedTypeName: com.ibm.websphere.security.web.WebSecurityHelper
      ignoreDefinition: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
