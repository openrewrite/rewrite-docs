# Migrating to Jakarta EE 10.0

In this tutorial, we'll use OpenRewrite to perform an automated migration to [Jakarata EE 10](https://jakarta.ee/release/10/). Jakarta EE 10 is packed with new features for building modernized, simplified, and lightweight cloud native Java applications. This new innovative community-driven release is designed for organizations looking to start developing new enterprise Java applications or advancing their existing ones.

## Example Configuration

The migrate to Jakarata EE 10 recipe can be applied by adding OpenRewrite's plugin to your project and including a dependency on [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java):

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>5.15.4</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.migrate.jakarta.JakartaEE10</recipe>
        </activeRecipes>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-migrate-java</artifactId>
          <version>2.4.2</version>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
<build>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
    plugins {
        id("java")
        id("org.openrewrite.rewrite") version("6.5.12")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.JakartaEE10")
    }
    
    repositories {
        mavenCentral() // rewrite-spring is published to Maven Central
    }
    
    dependencies {
        rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:2.5.3"))
        rewrite("org.openrewrite.recipe:rewrite-migrate-java")
    
        // Other project dependencies
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the full list of changes, this recipe will make, see its [reference page](/reference/recipes/java/migrate/jakarta/jakartaee10.md).

{% tabs %}
{% tab title="web.xml (Before)" %}
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="2.5" xmlns="http://java.sun.com/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://java.sun.com/xml/ns/javaee   http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd">
	<listener>
		<listener-class>com.netflix.priam.defaultimpl.InjectedWebListener</listener-class>
	</listener>

	<filter>
		<filter-name>guiceFilter</filter-name>
		<filter-class>com.google.inject.servlet.GuiceFilter</filter-class>
	</filter>

	<filter-mapping>
		<filter-name>guiceFilter</filter-name>
		<url-pattern>/REST/*</url-pattern>
	</filter-mapping>

</web-app>
```
{% endtab %}

{% tab title="web.xml (After)" %}
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="6.0" xmlns="https://jakarta.ee/xml/ns/jakartaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app_6_0.xsd">
	<listener>
		<listener-class>com.netflix.priam.defaultimpl.InjectedWebListener</listener-class>
	</listener>

	<filter>
		<filter-name>guiceFilter</filter-name>
		<filter-class>com.google.inject.servlet.GuiceFilter</filter-class>
	</filter>

	<filter-mapping>
		<filter-name>guiceFilter</filter-name>
		<url-pattern>/REST/*</url-pattern>
	</filter-mapping>

</web-app>
```
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="Java class (Before)" %}
```java
import javax.inject.Inject;
import javax.inject.Singleton;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javax.servlet.ServletContextEvent;
import javax.servlet.ReadListener;
import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import javax.servlet.http.HttpUtils;

// ...

public class HttpHandlerWithServletSupport implements HttpHandler {
    @Override
    public javax.servlet.ServletOutputStream getOutputStream() throws IOException {
        return servletOutputStream;
    }
}
```
{% endtab %}

{% tab title="Java class (After)" %}
```java
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.ReadListener;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.WriteListener;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpServletResponseWrapper;
import jakarta.servlet.http.HttpUtils;

// ...

public class HttpHandlerWithServletSupport implements HttpHandler {
    @Override
    public jakarta.servlet.ServletOutputStream getOutputStream() throws IOException {
        return servletOutputStream;
    }
}
```
{% endtab %}
{% endtabs %}

This recipe will also remove `javax` implementations from a `build.gradle` file such as:

```groovy
dependencies {
    implementation "javax.servlet:javax.servlet-api:4.0.1"
}
```