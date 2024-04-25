# Migrate to ApacheHttpClient 5.x

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5**

_Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* apache
* httpclient

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.1.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.12.0")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.12.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:1.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5")
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
        <version>5.29.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.1.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeApacheHttpClient_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrates to ApacheHttpClient 4.5.x](../../apache/httpclient4/upgradeapachehttpclient_4_5.md)
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.apache.httpcomponents`
  * oldArtifactId: `httpclient`
  * newGroupId: `org.apache.httpcomponents.client5`
  * newArtifactId: `httpclient5`
  * newVersion: `5.2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.apache.httpcomponents`
  * oldArtifactId: `httpcore`
  * newGroupId: `org.apache.httpcomponents.core5`
  * newArtifactId: `httpcore5`
  * newVersion: `5.2.x`
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](../../apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods.md)
* [Adds `TimeUnit` to timeouts and duration methods](../../apache/httpclient5/upgradeapachehttpclient_5_timeunit.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../apache/httpclient5/statusline.md)
* [Replaces `AuthScope.ANY`](../../apache/httpclient5/migrateauthscope.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5
displayName: Migrate to ApacheHttpClient 5.x
description: Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.

tags:
  - apache
  - httpclient
recipeList:
  - org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.apache.httpcomponents
      oldArtifactId: httpclient
      newGroupId: org.apache.httpcomponents.client5
      newArtifactId: httpclient5
      newVersion: 5.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.apache.httpcomponents
      oldArtifactId: httpcore
      newGroupId: org.apache.httpcomponents.core5
      newArtifactId: httpcore5
      newVersion: 5.2.x
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
  - org.openrewrite.apache.httpclient5.StatusLine
  - org.openrewrite.apache.httpclient5.MigrateAuthScope

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Joan Viladrosa](mailto:joan@moderne.io), Adriano Machado, [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
