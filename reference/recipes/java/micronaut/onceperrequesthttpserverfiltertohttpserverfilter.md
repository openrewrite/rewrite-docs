# Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`

**org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter**

_Starting in Micronaut 3.0 all filters are executed once per request. Directly implement `HttpServerFilter` instead of extending `OncePerRequestHttpServerFilter` and replace any usages of `micronaut.once` attributes with a custom attribute name._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/OncePerRequestHttpServerFilterToHttpServerFilter.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.1

## Example


{% tabs %}
{% tab title="MyServerFilter.java" %}

###### Before
{% code title="MyServerFilter.java" %}
```java
    package a.b;

    import io.micronaut.core.order.Ordered;
    import io.micronaut.http.HttpRequest;
    import io.micronaut.http.MutableHttpResponse;
    import io.micronaut.http.filter.OncePerRequestHttpServerFilter;
    import io.micronaut.http.filter.ServerFilterChain;
    import org.reactivestreams.Publisher;

    public class MyServerFilter extends OncePerRequestHttpServerFilter {
        @Override
        public int getOrder() {
            return Ordered.LOWEST_PRECEDENCE;
        }

        @Override
        public Publisher<MutableHttpResponse<?>> doFilterOnce(HttpRequest<?> request, ServerFilterChain chain) {
            getKey(MyServerFilter.class);
        }

        @Override
        public String getCName() {
            return "cname";
        }
    }
```
{% endcode %}

###### After
{% code title="MyServerFilter.java" %}
```java
    package a.b;

    import io.micronaut.core.order.Ordered;
    import io.micronaut.http.HttpRequest;
    import io.micronaut.http.MutableHttpResponse;
    import io.micronaut.http.filter.HttpServerFilter;
    import io.micronaut.http.filter.ServerFilterChain;
    import org.reactivestreams.Publisher;

    public class MyServerFilter implements HttpServerFilter {
        @Override
        public int getOrder() {
            return Ordered.LOWEST_PRECEDENCE;
        }

        @Override
        public Publisher<MutableHttpResponse<?>> doFilter(HttpRequest<?> request, ServerFilterChain chain) {
            /*TODO: See `Server Filter Behavior` in https://docs.micronaut.io/3.0.x/guide/#breaks for details*/ getKey(MyServerFilter.class);
        }

        @Override
        public String getCName() {
            return "cname";
        }
    }
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyServerFilter.java
+++ MyServerFilter.java
@@ -6,1 +6,1 @@
    import io.micronaut.http.HttpRequest;
    import io.micronaut.http.MutableHttpResponse;
-   import io.micronaut.http.filter.OncePerRequestHttpServerFilter;
+   import io.micronaut.http.filter.HttpServerFilter;
    import io.micronaut.http.filter.ServerFilterChain;
@@ -10,1 +10,1 @@
    import org.reactivestreams.Publisher;

-   public class MyServerFilter extends OncePerRequestHttpServerFilter {
+   public class MyServerFilter implements HttpServerFilter {
        @Override
@@ -17,2 +17,2 @@

        @Override
-       public Publisher<MutableHttpResponse<?>> doFilterOnce(HttpRequest<?> request, ServerFilterChain chain) {
-           getKey(MyServerFilter.class);
+       public Publisher<MutableHttpResponse<?>> doFilter(HttpRequest<?> request, ServerFilterChain chain) {
+           /*TODO: See `Server Filter Behavior` in https://docs.micronaut.io/3.0.x/guide/#breaks for details*/ getKey(MyServerFilter.class);
        }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.1.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.1")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
