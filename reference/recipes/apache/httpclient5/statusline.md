# Migrate to ApacheHttpClient 5.x deprecated methods from 4.x

**org.openrewrite.apache.httpclient5.StatusLine**

_Migrates deprecated methods to their equivalent ones in 5.x_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.4.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.4.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.4.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.StatusLine")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.4.1")
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
        rewrite("org.openrewrite.recipe:rewrite-apache:1.4.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.StatusLine")
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
            <recipe>org.openrewrite.apache.httpclient5.StatusLine</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.4.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.StatusLine 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe StatusLine
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Simplify a call chain](../../java/simplifymethodchain.md)
  * methodPatternChain: `[org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getStatusCode()]`
  * newMethodName: `getCode`
* [Simplify a call chain](../../java/simplifymethodchain.md)
  * methodPatternChain: `[org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getReasonPhrase()]`
  * newMethodName: `getReasonPhrase`
* [Simplify a call chain](../../java/simplifymethodchain.md)
  * methodPatternChain: `[org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getProtocolVersion()]`
  * newMethodName: `getVersion`
* [Replaces deprecated `HttpResponse::getStatusLine()`](../../apache/httpclient5/newstatusline.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.StatusLine
displayName: Migrate to ApacheHttpClient 5.x deprecated methods from 4.x
description: Migrates deprecated methods to their equivalent ones in 5.x
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: [org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getStatusCode()]
      newMethodName: getCode
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: [org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getReasonPhrase()]
      newMethodName: getReasonPhrase
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: [org.apache.hc.core5.http.HttpResponse getStatusLine(), org.apache.hc.core5.http.message.StatusLine getProtocolVersion()]
      newMethodName: getVersion
  - org.openrewrite.apache.httpclient5.NewStatusLine

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.StatusLine)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Joan Viladrosa](mailto:joan@moderne.io), Adriano Machado, [Tim te Beek](mailto:tim@moderne.io)
