# Remove `getComment` and `getVersion` methods

**org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265**

_Jakarta Servlet methods have been deprecated for removal in Jakarta Servlet 6.0 to align with RFC 6265.  In addition, the behavior of these methods has been changed so the setters no longer have any effect, the getComment methods return null, and the getVersion method returns 0. The deprecated methods are removed._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.3.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.3.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.3.0")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.3.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265")
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
            <recipe>org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.3.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ServletCookieBehaviorChangeRFC6265
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.http.Cookie getComment()`
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.http.Cookie getVersion()`
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.http.Cookie setComment(String)`
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.http.Cookie setVersion(int)`
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.SessionCookieConfig getComment()`
* [Remove methods calls](../../../java/migrate/jakarta/removemethods.md)
  * methodPattern: `jakarta.servlet.SessionCookieConfig setComment(String)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265
displayName: Remove `getComment` and `getVersion` methods
description: Jakarta Servlet methods have been deprecated for removal in Jakarta Servlet 6.0 to align with RFC 6265.  In addition, the behavior of these methods has been changed so the setters no longer have any effect, the getComment methods return null, and the getVersion method returns 0. The deprecated methods are removed.

recipeList:
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.http.Cookie getComment()
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.http.Cookie getVersion()
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.http.Cookie setComment(String)
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.http.Cookie setVersion(int)
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.SessionCookieConfig getComment()
  - org.openrewrite.java.migrate.jakarta.RemoveMethods:
      methodPattern: jakarta.servlet.SessionCookieConfig setComment(String)

```
{% endtab %}
{% endtabs %}

## Contributors
* ranuradh


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
