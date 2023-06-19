# Rename `server.max-http-header-size` to `server.max-http-request-header-size`

**org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize**

_Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="src/main/resources/application.properties" %}

###### Before
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
server.max-http-header-size=10KB
```
{% endcode %}

###### After
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
server.max-http-request-header-size=10KB
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.properties
+++ src/main/resources/application.properties
@@ -2,1 +2,1 @@
# application.properties
-server.max-http-header-size=10KB
+server.max-http-request-header-size=10KB

```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="src/main/resources/application.yml" %}

###### Before
{% code title="src/main/resources/application.yml" %}
```yaml
    server:
      max-http-header-size: 10KB
```
{% endcode %}

###### After
{% code title="src/main/resources/application.yml" %}
```yaml
    server:
      max-http-request-header-size: 10KB
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -2,1 +2,1 @@
    server:
-     max-http-header-size: 10KB
+     max-http-request-header-size: 10KB

```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="src/main/resources/application.properties" %}

###### Before
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
server.max-http-header-size=10KB
```
{% endcode %}

###### After
{% code title="src/main/resources/application.properties" %}
```properties
# application.properties
server.max-http-request-header-size=10KB
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.properties
+++ src/main/resources/application.properties
@@ -2,1 +2,1 @@
# application.properties
-server.max-http-header-size=10KB
+server.max-http-request-header-size=10KB

```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="src/main/resources/application.yml" %}

###### Before
{% code title="src/main/resources/application.yml" %}
```yaml
    server:
      max-http-header-size: 10KB
```
{% endcode %}

###### After
{% code title="src/main/resources/application.yml" %}
```yaml
    server:
      max-http-request-header-size: 10KB
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- src/main/resources/application.yml
+++ src/main/resources/application.yml
@@ -2,1 +2,1 @@
    server:
-     max-http-header-size: 10KB
+     max-http-request-header-size: 10KB

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
    activeRecipe("org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize")
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
            <recipe>org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.max-http-header-size`
  * newPropertyKey: `server.max-http-request-header-size`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize
displayName: Rename `server.max-http-header-size` to `server.max-http-request-header-size`
description: Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.max-http-header-size
      newPropertyKey: server.max-http-request-header-size

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Kyle Scully](scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
