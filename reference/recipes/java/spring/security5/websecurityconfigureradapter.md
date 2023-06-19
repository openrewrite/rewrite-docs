# Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean

**org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter**

_The Spring Security `WebSecurityConfigurerAdapter` was deprecated 5.7, this recipe will transform `WebSecurityConfigurerAdapter` classes by using a component based approach. Check out the [spring-security-without-the-websecurityconfigureradapter](https://spring.io/blog/2022/02/21/spring-security-without-the-websecurityconfigureradapter) blog for more details._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security5/WebSecurityConfigurerAdapter.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="com/example/websecuritydemo/SecurityConfiguration.java" %}

###### Before
{% code title="com/example/websecuritydemo/SecurityConfiguration.java" %}
```java
package com.example.websecuritydemo;

import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults());
    }

    void someMethod() {}

}
```
{% endcode %}

###### After
{% code title="com/example/websecuritydemo/SecurityConfiguration.java" %}
```java
package com.example.websecuritydemo;

import static org.springframework.security.config.Customizer.withDefaults;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfiguration {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults());
        return http.build();
    }

    void someMethod() {}

}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/example/websecuritydemo/SecurityConfiguration.java
+++ com/example/websecuritydemo/SecurityConfiguration.java
@@ -4,0 +4,2 @@

import static org.springframework.security.config.Customizer.withDefaults;
+
+import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@@ -5,1 +7,0 @@
import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.context.annotation.Configuration;
-import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
@@ -7,0 +8,1 @@
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
+import org.springframework.security.web.SecurityFilterChain;

@@ -9,1 +11,1 @@

@Configuration
-public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
+public class SecurityConfiguration {

@@ -11,2 +13,2 @@
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

-   @Override
-   protected void configure(HttpSecurity http) throws Exception {
+   @Bean
+   SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
@@ -18,0 +20,1 @@
            )
            .httpBasic(withDefaults());
+       return http.build();
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


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
    activeRecipe("org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter")
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
            <recipe>org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Alex Boyko](aboyko@vmware.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.WebSecurityConfigurerAdapter)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
