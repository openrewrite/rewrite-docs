# Migrate to Spring Security 6.1

**org.openrewrite.java.spring.security6.UpgradeSpringSecurity\_6\_1**

_Migrate applications to the latest Spring Security 6.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* spring
* security

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-61.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.14.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.14.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.14.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.14.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.14.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringSecurity_6_1
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Security 6.0](../../../java/spring/security6/upgradespringsecurity_6_0.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.security`
  * artifactId: `*`
  * newVersion: `6.1.x`
  * overrideManagedVersion: `false`
* [Convert `HttpSecurity` chained calls into Lambda DSL](../../../java/spring/boot2/httpsecuritylambdadsl.md)
* [Convert `ServerHttpSecurity` chained calls into Lambda DSL](../../../java/spring/boot2/serverhttpsecuritylambdadsl.md)
* [Convert `HeadersConfigurer` chained calls into Lambda DSL](../../../java/spring/boot2/headersconfigurerlambdadsl.md)
* [Convert `OAuth2LoginConfigurer` chained calls into Lambda DSL](../../../java/spring/security6/oauth2/client/oauth2loginlambdadsl.md)
* [Convert `OAuth2ClientConfigurer` chained calls into Lambda DSL](../../../java/spring/security6/oauth2/client/oauth2clientlambdadsl.md)
* [Convert `OAuth2ResourceServerConfigurer` chained calls into Lambda DSL](../../../java/spring/security6/oauth2/server/resource/oauth2resourceserverlambdadsl.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1
displayName: Migrate to Spring Security 6.1
description: Migrate applications to the latest Spring Security 6.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.

tags:
  - spring
  - security
recipeList:
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: *
      newVersion: 6.1.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.boot2.HttpSecurityLambdaDsl
  - org.openrewrite.java.spring.boot2.ServerHttpSecurityLambdaDsl
  - org.openrewrite.java.spring.boot2.HeadersConfigurerLambdaDsl
  - org.openrewrite.java.spring.security6.oauth2.client.OAuth2LoginLambdaDsl
  - org.openrewrite.java.spring.security6.oauth2.client.OAuth2ClientLambdaDsl
  - org.openrewrite.java.spring.security6.oauth2.server.resource.OAuth2ResourceServerLambdaDsl

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Knut Wannheden](mailto:knut@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), Kun Li, [Shannon Pamperl](mailto:shanman190@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Kun Li](mailto:kun@moderne.io), [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Patrick Way, [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), Josh Soref, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
