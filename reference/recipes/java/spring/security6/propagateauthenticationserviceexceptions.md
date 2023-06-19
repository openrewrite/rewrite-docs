# Remove calls matching `AuthenticationEntryPointFailureHandler.setRethrowAuthenticationServiceException(true)`

**org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions**

_Remove any calls matching `AuthenticationEntryPointFailureHandler.setRethrowAuthenticationServiceException(true)`. See the corresponding [Sprint Security 6.0 migration step](https://docs.spring.io/spring-security/reference/6.0.0/migration/servlet/authentication.html#_propagate_authenticationserviceexceptions) for details._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/security6/PropagateAuthenticationServiceExceptions.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="T.java" %}

###### Before
{% code title="T.java" %}
```java
import org.springframework.security.web.authentication.AuthenticationEntryPointFailureHandler;

class T {
    void m() {
        AuthenticationEntryPointFailureHandler handler = null;
        handler.setRethrowAuthenticationServiceException(true);
    }
}
```
{% endcode %}

###### After
{% code title="T.java" %}
```java
import org.springframework.security.web.authentication.AuthenticationEntryPointFailureHandler;

class T {
    void m() {
        AuthenticationEntryPointFailureHandler handler = null;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- T.java
+++ T.java
@@ -6,1 +6,0 @@
    void m() {
        AuthenticationEntryPointFailureHandler handler = null;
-       handler.setRethrowAuthenticationServiceException(true);
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
