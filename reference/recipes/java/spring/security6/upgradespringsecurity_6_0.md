# Migrate to Spring Security 6.0

**org.openrewrite.java.spring.security6.UpgradeSpringSecurity\_6\_0**

_Migrate applications to the latest Spring Security 6.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* spring
* security

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-60.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Security 5.8](../../../java/spring/security5/upgradespringsecurity_5_8.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.security`
  * artifactId: `*`
  * newVersion: `6.0.x`
  * overrideManagedVersion: `false`
* [Remove explicit configuration of SHA-256 as encoding and matching algorithm for `TokenBasedRememberMeServices`](../../../java/spring/security6/usesha256inrememberme.md)
* [Remove calls matching `AuthenticationEntryPointFailureHandler.setRethrowAuthenticationServiceException(true)`](../../../java/spring/security6/propagateauthenticationserviceexceptions.md)
* [Remove explicit `SecurityContextConfigurer.requireExplicitSave(true)` opt-in](../../../java/spring/security6/requireexplicitsavingofsecuritycontextrepository.md)
* [Remove unneeded `oauth2Login` config when upgrading to Spring Security 6](../../../java/spring/security6/removeoauth2loginconfig.md)
* [Keep the default RequestCache querying behavior in Spring Security 5](../../../java/spring/security6/updaterequestcache.md)
* [Remove unnecessary `use-authorization-manager` for message security in Spring security 6](../../../java/spring/security6/removeuseauthorizationmanager.md)
* [Remove the `useAuthorizationManager=true` attribute from `@EnableReactiveMethodSecurity`](../../../java/spring/security6/updateenablereactivemethodsecurity.md)
* [Remove unnecessary `filterSecurityInterceptorOncePerRequest(false)` when upgrading to Spring Security 6](../../../java/spring/security6/removefiltersecurityinterceptoronceperrequest.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
displayName: Migrate to Spring Security 6.0
description: Migrate applications to the latest Spring Security 6.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.

tags:
  - spring
  - security
recipeList:
  - org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: *
      newVersion: 6.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.security6.UseSha256InRememberMe
  - org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions
  - org.openrewrite.java.spring.security6.RequireExplicitSavingOfSecurityContextRepository
  - org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig
  - org.openrewrite.java.spring.security6.UpdateRequestCache
  - org.openrewrite.java.spring.security6.RemoveUseAuthorizationManager
  - org.openrewrite.java.spring.security6.UpdateEnableReactiveMethodSecurity
  - org.openrewrite.java.spring.security6.RemoveFilterSecurityInterceptorOncePerRequest

```
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](knut@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Alex Boyko](aboyko@vmware.com)
* [Johannes Jank](johannes.wengert@googlemail.com)
* [Kun Li](kun@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
