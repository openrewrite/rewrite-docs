# Migrate to Spring Security 5.8

**org.openrewrite.java.spring.security5.UpgradeSpringSecurity\_5\_8**

_Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* spring
* security

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-58.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.13.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.13.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.13.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8")
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
            <recipe>org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.13.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringSecurity_5_8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Security 5.7](../../../java/spring/security5/upgradespringsecurity_5_7.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.security`
  * artifactId: `*`
  * newVersion: `5.8.x`
  * overrideManagedVersion: `false`
* [Replace `HttpSecurity.authorizeRequests(...)` with `HttpSecurity.authorizeHttpRequests(...)` and `ExpressionUrlAuthorizationConfigurer`, `AbstractInterceptUrlConfigurer` with `AuthorizeHttpRequestsConfigurer`, etc](../../../java/spring/security5/authorizehttprequests.md)
* [Use the new `requestMatchers` methods](../../../java/spring/security5/usenewrequestmatchers.md)
* [Use the new `securityMatcher()` method](../../../java/spring/security5/usenewsecuritymatchers.md)
* [Use new `Pbkdf2PasswordEncoder` factory methods](../../../java/spring/security5/updatepbkdf2passwordencoder.md)
* [Use new `SCryptPasswordEncoder` factory methods](../../../java/spring/security5/updatescryptpasswordencoder.md)
* [Use new `Argon2PasswordEncoder` factory methods](../../../java/spring/security5/updateargon2passwordencoder.md)
* [Replace global method security with method security](../../../java/spring/security5/replaceglobalmethodsecuritywithmethodsecurity.md)
* [Replace global method security with method security](../../../java/spring/security5/replaceglobalmethodsecuritywithmethodsecurityxml.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8
displayName: Migrate to Spring Security 5.8
description: Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.

tags:
  - spring
  - security
recipeList:
  - org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: *
      newVersion: 5.8.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.security5.AuthorizeHttpRequests
  - org.openrewrite.java.spring.security5.UseNewRequestMatchers
  - org.openrewrite.java.spring.security5.UseNewSecurityMatchers
  - org.openrewrite.java.spring.security5.UpdatePbkdf2PasswordEncoder
  - org.openrewrite.java.spring.security5.UpdateSCryptPasswordEncoder
  - org.openrewrite.java.spring.security5.UpdateArgon2PasswordEncoder
  - org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurity
  - org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Knut Wannheden](mailto:knut@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), [Tim te Beek](mailto:tim@moderne.io), Kun Li, [Kun Li](mailto:kun@moderne.io), [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Patrick Way, [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), Josh Soref, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
