# Remove explicit configuration of SHA-256 as encoding and matching algorithm for `TokenBasedRememberMeServices`

**org.openrewrite.java.spring.security6.UseSha256InRememberMe**

_As of Spring Security 6.0 the SHA-256 algorithm is the default for the encoding and matching algorithm used by `TokenBasedRememberMeServices` and does thus no longer need to be explicitly configured. See the corresponding [Sprint Security 6.0 migration step](https://docs.spring.io/spring-security/reference/6.0.0/migration/servlet/authentication.html#servlet-opt-in-sha256-rememberme) for details._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security6/UseSha256InRememberMe.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices.RememberMeTokenAlgorithm;

import static org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices.RememberMeTokenAlgorithm.SHA256;

class T {
    void qualifiedFieldAccess(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, RememberMeTokenAlgorithm.SHA256);
    }
    void staticImport(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, SHA256);
    }
    void localVariable(UserDetailsService userDetailsService) {
        final RememberMeTokenAlgorithm encodingAlgorithm = RememberMeTokenAlgorithm.SHA256;
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, encodingAlgorithm);
    }
    void classField(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, encodingAlgorithm);
    }
    void constantInOtherClass(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, X.ALGORITHM);
    }
    final RememberMeTokenAlgorithm encodingAlgorithm = RememberMeTokenAlgorithm.SHA256;
}
class X {
    static final RememberMeTokenAlgorithm ALGORITHM = RememberMeTokenAlgorithm.SHA256;
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices.RememberMeTokenAlgorithm;

import static org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices.RememberMeTokenAlgorithm.SHA256;

class T {
    void qualifiedFieldAccess(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
    void staticImport(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
    void localVariable(UserDetailsService userDetailsService) {
        final RememberMeTokenAlgorithm encodingAlgorithm = RememberMeTokenAlgorithm.SHA256;
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
    void classField(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
    void constantInOtherClass(UserDetailsService userDetailsService) {
        TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, X.ALGORITHM);
    }
    final RememberMeTokenAlgorithm encodingAlgorithm = RememberMeTokenAlgorithm.SHA256;
}
class X {
    static final RememberMeTokenAlgorithm ALGORITHM = RememberMeTokenAlgorithm.SHA256;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -9,1 +9,1 @@
class T {
    void qualifiedFieldAccess(UserDetailsService userDetailsService) {
-       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, RememberMeTokenAlgorithm.SHA256);
+       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
@@ -12,1 +12,1 @@
    }
    void staticImport(UserDetailsService userDetailsService) {
-       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, SHA256);
+       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
@@ -16,1 +16,1 @@
    void localVariable(UserDetailsService userDetailsService) {
        final RememberMeTokenAlgorithm encodingAlgorithm = RememberMeTokenAlgorithm.SHA256;
-       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, encodingAlgorithm);
+       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
    }
@@ -19,1 +19,1 @@
    }
    void classField(UserDetailsService userDetailsService) {
-       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService, encodingAlgorithm);
+       TokenBasedRememberMeServices rememberMe = new TokenBasedRememberMeServices("key", userDetailsService);
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
    activeRecipe("org.openrewrite.java.spring.security6.UseSha256InRememberMe")
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
            <recipe>org.openrewrite.java.spring.security6.UseSha256InRememberMe</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security6.UseSha256InRememberMe
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.security6.UseSha256InRememberMe)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
