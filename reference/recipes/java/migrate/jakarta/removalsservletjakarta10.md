# Replace  deprecated Jakarta Servlet methods and classes

**org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10**

_This recipe replaces the classes and methods deprecated in Jakarta Servlet 6.0_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.18.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.18.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.18.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.18.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.18.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RemovalsServletJakarta10
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.http.HttpServletRequest`
  * newFullyQualifiedTypeName: `jakarta.servlet.http.HttpServletRequest`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.http.HttpServletRequestWrapper`
  * newFullyQualifiedTypeName: `jakarta.servlet.http.HttpServletRequestWrapper`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.http.HttpServletResponse`
  * newFullyQualifiedTypeName: `jakarta.servlet.http.HttpServletResponse`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.http.HttpServletResponseWrapper`
  * newFullyQualifiedTypeName: `jakarta.servlet.http.HttpServletResponseWrapper`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.http.HttpSession`
  * newFullyQualifiedTypeName: `jakarta.servlet.http.HttpSession`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.ServletContext`
  * newFullyQualifiedTypeName: `jakarta.servlet.ServletContext`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.servlet.UnavailableException`
  * newFullyQualifiedTypeName: `jakarta.servlet.UnavailableException`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletRequest  isRequestedSessionIdFromUrl()`
  * newMethodName: `isRequestedSessionIdFromURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletRequestWrapper  isRequestedSessionIdFromUrl()`
  * newMethodName: `isRequestedSessionIdFromURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponse encodeUrl(String)`
  * newMethodName: `encodeURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponseWrapper encodeUrl(String)`
  * newMethodName: `encodeURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponse encodeRedirectUrl(String)`
  * newMethodName: `encodeRedirectURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponseWrapper encodeRedirectUrl(String)"`
  * newMethodName: `encodeRedirectURL`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpSession getValue(String)`
  * newMethodName: `getAttribute`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpSession getValueNames()`
  * newMethodName: `getAttributeNames`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpSession putValue(String, Object)`
  * newMethodName: `setAttribute`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `jakarta.servlet.http.HttpSession removeValue(String)`
  * newMethodName: `removeAttribute`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponse setStatus(int, String)`
  * argumentIndex: `1`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `jakarta.servlet.http.HttpServletResponseWrapper setStatus(int, String)`
  * argumentIndex: `1`
* [Reorder method arguments](../../../java/reordermethodarguments.md)
  * methodPattern: `jakarta.servlet.ServletContext log(Exception, String)`
  * newParameterNames: `[ex, str]`
  * oldParameterNames: `[str, ex]`
  * matchOverrides: `true`
* [Updates `getRealPath()` to call `getContext()` followed by `getRealPath()`](../../../java/migrate/jakarta/updategetrealpath.md)
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `jakarta.servlet.UnavailableException <constructor>(jakarta.servlet.Servlet, String)`
  * argumentIndex: `0`
* [Delete method argument](../../../java/deletemethodargument.md)
  * methodPattern: `jakarta.servlet.UnavailableException <constructor>(int, jakarta.servlet.Servlet, String)`
  * argumentIndex: `1`
* [Reorder method arguments](../../../java/reordermethodarguments.md)
  * methodPattern: `jakarta.servlet.UnavailableException <constructor>(int, String)`
  * newParameterNames: `[str, in]`
  * oldParameterNames: `[in, str]`
  * matchOverrides: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10
displayName: Replace  deprecated Jakarta Servlet methods and classes
description: This recipe replaces the classes and methods deprecated in Jakarta Servlet 6.0

recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.http.HttpServletRequest
      newFullyQualifiedTypeName: jakarta.servlet.http.HttpServletRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.http.HttpServletRequestWrapper
      newFullyQualifiedTypeName: jakarta.servlet.http.HttpServletRequestWrapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.http.HttpServletResponse
      newFullyQualifiedTypeName: jakarta.servlet.http.HttpServletResponse
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.http.HttpServletResponseWrapper
      newFullyQualifiedTypeName: jakarta.servlet.http.HttpServletResponseWrapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.http.HttpSession
      newFullyQualifiedTypeName: jakarta.servlet.http.HttpSession
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.ServletContext
      newFullyQualifiedTypeName: jakarta.servlet.ServletContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.servlet.UnavailableException
      newFullyQualifiedTypeName: jakarta.servlet.UnavailableException
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletRequest  isRequestedSessionIdFromUrl()
      newMethodName: isRequestedSessionIdFromURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletRequestWrapper  isRequestedSessionIdFromUrl()
      newMethodName: isRequestedSessionIdFromURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletResponse encodeUrl(String)
      newMethodName: encodeURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletResponseWrapper encodeUrl(String)
      newMethodName: encodeURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletResponse encodeRedirectUrl(String)
      newMethodName: encodeRedirectURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpServletResponseWrapper encodeRedirectUrl(String)"
      newMethodName: encodeRedirectURL
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpSession getValue(String)
      newMethodName: getAttribute
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpSession getValueNames()
      newMethodName: getAttributeNames
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpSession putValue(String, Object)
      newMethodName: setAttribute
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: jakarta.servlet.http.HttpSession removeValue(String)
      newMethodName: removeAttribute
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: jakarta.servlet.http.HttpServletResponse setStatus(int, String)
      argumentIndex: 1
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: jakarta.servlet.http.HttpServletResponseWrapper setStatus(int, String)
      argumentIndex: 1
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: jakarta.servlet.ServletContext log(Exception, String)
      newParameterNames: [ex, str]
      oldParameterNames: [str, ex]
      matchOverrides: true
  - org.openrewrite.java.migrate.jakarta.UpdateGetRealPath
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: jakarta.servlet.UnavailableException <constructor>(jakarta.servlet.Servlet, String)
      argumentIndex: 0
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: jakarta.servlet.UnavailableException <constructor>(int, jakarta.servlet.Servlet, String)
      argumentIndex: 1
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: jakarta.servlet.UnavailableException <constructor>(int, String)
      newParameterNames: [str, in]
      oldParameterNames: [in, str]
      matchOverrides: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Anu Ramamoorthy, [Tim te Beek](mailto:tim@moderne.io)
