# Migrate to ApacheHttpClient 5.x deprecated methods from 4.x

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5\_DeprecatedMethods**

_Migrates deprecated methods to their equivalent ones in 5.x_

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/0.1.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 0.1.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:0.1.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:0.1.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.10.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:0.1.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods")
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>0.1.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeApacheHttpClient_5_DeprecatedMethods
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setSocketTimeout(int)`
  * newMethodName: `setResponseTimeout`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
displayName: Migrate to ApacheHttpClient 5.x deprecated methods from 4.x
description: Migrates deprecated methods to their equivalent ones in 5.x
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setSocketTimeout(int)
      newMethodName: setResponseTimeout

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
