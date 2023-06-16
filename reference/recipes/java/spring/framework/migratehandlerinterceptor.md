# Migrate `HandlerInterceptorAdapter` to `HandlerInterceptor`

**org.openrewrite.java.spring.framework.MigrateHandlerInterceptor**

_Deprecated as of 5.3 in favor of implementing `HandlerInterceptor` and/or `AsyncHandlerInterceptor`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/framework/MigrateHandlerInterceptor.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="MyInterceptor.java" %}

###### Before
{% code title="MyInterceptor.java" %}
```java
import javax.servlet.http.*;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

class MyInterceptor extends HandlerInterceptorAdapter {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return super.preHandle(request, response, handler);
    }
}
```
{% endcode %}

###### After
{% code title="MyInterceptor.java" %}
```java
import javax.servlet.http.*;

import org.springframework.web.servlet.HandlerInterceptor;

class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyInterceptor.java
+++ MyInterceptor.java
@@ -3,1 +3,1 @@
import javax.servlet.http.*;

-import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
+import org.springframework.web.servlet.HandlerInterceptor;

@@ -5,1 +5,1 @@
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

-class MyInterceptor extends HandlerInterceptorAdapter {
+class MyInterceptor implements HandlerInterceptor {
    @Override
@@ -8,1 +8,1 @@
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
-       return super.preHandle(request, response, handler);
+       return HandlerInterceptor.super.preHandle(request, response, handler);
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
    activeRecipe("org.openrewrite.java.spring.framework.MigrateHandlerInterceptor")
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
            <recipe>org.openrewrite.java.spring.framework.MigrateHandlerInterceptor</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.framework.MigrateHandlerInterceptor
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.framework.MigrateHandlerInterceptor)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
