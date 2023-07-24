# Remove unneeded `oauth2Login` config when upgrading to Spring Security 6

**org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig**

_`oauth2Login()` is a Spring Security feature that allows users to authenticate with an OAuth2 or OpenID Connect 1.0 provider. When a user is authenticated using this feature, they are granted a set of authorities that determines what actions they are allowed to perform within the application.

In Spring Security 5, the default authority given to a user authenticated with an OAuth2 or OpenID Connect 1.0 provider via `oauth2Login()` is `ROLE_USER`. This means that the user is allowed to access the application's resources as a regular user.

However, in Spring Security 6, the default authority given to a user authenticated with an OAuth2 provider is `OAUTH2_USER`, and the default authority given to a user authenticated with an OpenID Connect 1.0 provider is `OIDC_USER`. These authorities are more specific and allow for better customization of the user's permissions within the application.

If you are upgrading to Spring Security 6 and you have previously configured a `GrantedAuthoritiesMapper` to handle the authorities of users authenticated via `oauth2Login()`, you can remove it completely as the new default authorities should be sufficient._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security6/RemoveOauth2LoginConfig.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="SecurityConfig.java" %}

###### Before
{% code title="SecurityConfig.java" %}
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import java.util.HashSet;
import java.util.Set;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/public", "/public/*").permitAll()
                .requestMatchers("/login").permitAll()
                .anyRequest().authenticated())
            .oauth2Login()
            .userInfoEndpoint()
                .userAuthoritiesMapper(null);
        return http.build();
    }
}
```
{% endcode %}

###### After
{% code title="SecurityConfig.java" %}
```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

import java.util.HashSet;
import java.util.Set;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/public", "/public/*").permitAll()
                .requestMatchers("/login").permitAll()
                .anyRequest().authenticated());
        return http.build();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- SecurityConfig.java
+++ SecurityConfig.java
@@ -18,4 +18,1 @@
                .requestMatchers("/public", "/public/*").permitAll()
                .requestMatchers("/login").permitAll()
-               .anyRequest().authenticated())
-           .oauth2Login()
-           .userInfoEndpoint()
-               .userAuthoritiesMapper(null);
+               .anyRequest().authenticated());
        return http.build();
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Kun Li
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
