# Adds `TimeUnit` to timeouts and duration methods

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5\_TimeUnit**

_Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.2.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.2.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.2.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.2.2")
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
        rewrite("org.openrewrite.recipe:rewrite-apache:1.2.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit")
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
            <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.2.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeApacheHttpClient_5_TimeUnit
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument.md)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
displayName: Adds `TimeUnit` to timeouts and duration methods
description: Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit.
recipeList:
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Joan Viladrosa](mailto:joan@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
