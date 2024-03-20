# Update the Micronaut Security library

**org.openrewrite.java.micronaut.UpdateMicronautSecurity**

_This recipe will update imports for relocated classes and update configuration files with renamed keys._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.3.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.3.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.3.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautSecurity")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.3.1")
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
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.3.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautSecurity")
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
            <recipe>org.openrewrite.java.micronaut.UpdateMicronautSecurity</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.3.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateMicronautSecurity
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateMicronautSecurity
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.TokenRefreshRequest`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.TokenRefreshRequest`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.AccessRefreshToken`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.AccessRefreshToken`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.BearerAccessRefreshToken`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.BearerAccessRefreshToken`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthController`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthController`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthControllerConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthControllerConfiguration`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthControllerConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthControllerConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.DefaultAccessRefreshTokenGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.DefaultAccessRefreshTokenGenerator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.AccessTokenCookieConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.AccessTokenCookieConfiguration`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.CookieLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.CookieLoginHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.AccessRefreshTokenLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.AccessRefreshTokenLoginHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenConfiguration`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenReader`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.TokenRenderer`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.TokenRenderer`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.BearerTokenRenderer`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.BearerTokenRenderer`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.CookieTokenReader`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.RefreshTokenCookieConfiguration`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.RefreshTokenCookieConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieClearerLogoutHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieClearerLogoutHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieLoginHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieTokenReader`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessRefreshTokenGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessRefreshTokenGenerator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessTokenConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessTokenConfiguration`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessTokenConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessTokenConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.ClaimsGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.ClaimsGenerator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.ClaimsAudienceProvider`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.ClaimsAudienceProvider`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.AbstractAccessTokenCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.AbstractAccessTokenCookieConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieConfigurationProperties`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.JwtIdGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.JtiGenerator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.JwtClaims`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.Claims`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.DenyAllAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaDenyAllAnnotationMapper`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.PermitAllAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaPermitAllAnnotationMapper`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.RolesAllowedAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaRolesAllowedAnnotationMapper`
* [Update relocated Micronaut Security config properties](../../java/micronaut/updatesecuritypropertiesifneeded.md)
* [Update relocated Micronaut Security config yaml keys](../../java/micronaut/updatesecurityyamlifneeded.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateMicronautSecurity
displayName: Update the Micronaut Security library
description: This recipe will update imports for relocated classes and update configuration files with renamed keys.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.TokenRefreshRequest
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.TokenRefreshRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.AccessRefreshToken
      newFullyQualifiedTypeName: io.micronaut.security.token.render.AccessRefreshToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.BearerAccessRefreshToken
      newFullyQualifiedTypeName: io.micronaut.security.token.render.BearerAccessRefreshToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthController
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthController
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthControllerConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthControllerConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthControllerConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthControllerConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.DefaultAccessRefreshTokenGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.DefaultAccessRefreshTokenGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.AccessTokenCookieConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.AccessTokenCookieConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.CookieLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.CookieLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.AccessRefreshTokenLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.AccessRefreshTokenLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.TokenRenderer
      newFullyQualifiedTypeName: io.micronaut.security.token.render.TokenRenderer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.BearerTokenRenderer
      newFullyQualifiedTypeName: io.micronaut.security.token.render.BearerTokenRenderer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.CookieTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.RefreshTokenCookieConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.RefreshTokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieClearerLogoutHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieClearerLogoutHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessRefreshTokenGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessRefreshTokenGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessTokenConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessTokenConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessTokenConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessTokenConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.ClaimsGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.ClaimsGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.ClaimsAudienceProvider
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.ClaimsAudienceProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.AbstractAccessTokenCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.AbstractAccessTokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.JwtIdGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.JtiGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.JwtClaims
      newFullyQualifiedTypeName: io.micronaut.security.token.Claims
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.DenyAllAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaDenyAllAnnotationMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.PermitAllAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaPermitAllAnnotationMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.RolesAllowedAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaRolesAllowedAnnotationMapper
  - org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded
  - org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautSecurity)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jeremy Grelle](mailto:grellej@unityfoundation.io), [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
