# Migrate to Micronaut 4 from Micronaut 3

In this guide, we'll look at using OpenRewrite to perform an automated migration from Micronaut 3.x to Micronaut 4.x

If you want to learn more about the process that went into developing these recipes, check out the [Micronaut framework 4.0 release blog post](https://www.moderne.io/blog/micronaut-framework-4-0-automated-upgrade-with-openrewrite).

## Configuration
See various ways you can configure your project to run this recipe on the [recipe reference page](/reference/recipes/java/micronaut/micronaut3to4migration.md). This is also where you can find the full list of changes it will make.

Once you've configured your project, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

### Many `javax` packages have been updated to `jakarta`

These include:

* `javax.annotation.*`
* `javax.persistence.*`
* `javax.validation.*`

{% tabs %}
{% tab title="Before" %}
```java
import javax.annotation.PostConstruct;

import javax.persistence.GenerationType;

import javax.validation.constraints.NotBlank;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;

// ...
```
{% endtab %}

{% tab title="After" %}
```java
import jakarta.annotation.PostConstruct;

import jakarta.persistence.GenerationType;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

// ...
```
{% endtab %}
{% endtabs %}

### Interface parameter updates

An `HttpRequest` type parameter has been added to some interfaces.

{% tabs %}
{% tab title="Before" %}
```java
import io.micronaut.http.HttpRequest;
import io.micronaut.security.authentication.AuthenticationProvider;
import io.micronaut.security.authentication.AuthenticationRequest;
import io.micronaut.security.authentication.AuthenticationResponse;
import org.reactivestreams.Publisher;
            
import java.io.Serializable;
            
public class AuthProvPass implements AuthenticationProvider, Serializable {
            
    @Override
    public Publisher<AuthenticationResponse> authenticate(HttpRequest<?> httpRequest,
                                                            AuthenticationRequest<?, ?> authenticationRequest) {
        return null;
    }
}
```
{% endtab %}

{% tab title="After" %}
```java
import io.micronaut.http.HttpRequest;
import io.micronaut.security.authentication.AuthenticationProvider;
import io.micronaut.security.authentication.AuthenticationRequest;
import io.micronaut.security.authentication.AuthenticationResponse;
import org.reactivestreams.Publisher;
            
import java.io.Serializable;
            
public class AuthProvPass implements AuthenticationProvider<HttpRequest<?>>, Serializable {
            
    @Override
    public Publisher<AuthenticationResponse> authenticate(HttpRequest<?> httpRequest,
                                                            AuthenticationRequest<?, ?> authenticationRequest) {
        return null;
    }
}
```
{% endtab %}
{% endtabs %}

### Various dependencies _may_ be added or updated

These include:

* Micronaut Retry
* Micronaut Session
* Micronaut Websocket
* SnakeYaml

{% tabs %}
{% tab title="build.gradle" %}

**Before**

```groovy
plugins {
    id("io.micronaut.application") version "%s"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.micronaut:micronaut-session")
}
```

**After**

```groovy
plugins {
    id("io.micronaut.application") version "%s"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "io.micronaut:micronaut-retry"
    implementation "io.micronaut:micronaut-websocket"
    
    implementation("io.micronaut.session:micronaut-session")

    runtimeOnly "org.yaml:snakeyaml"
}
```

{% endtab %}

{% tab title="pom.xml" %}

**Before**

```xml
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <parent>
        <groupId>io.micronaut.platform</groupId>
        <artifactId>micronaut-parent</artifactId>
        <version>%s</version>
    </parent>
    <dependencies>
        <dependency>
            <groupId>io.micronaut</groupId>
            <artifactId>micronaut-session</artifactId>
        </dependency>
    </dependencies>
</project>
```

**After**

```xml
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <parent>
        <groupId>io.micronaut.platform</groupId>
        <artifactId>micronaut-parent</artifactId>
        <version>%s</version>
    </parent>
    <dependencies>
        <dependency>
            <groupId>io.micronaut</groupId>
            <artifactId>micronaut-retry</artifactId>
        </dependency>
        <dependency>
            <groupId>io.micronaut</groupId>
            <artifactId>micronaut-websocket</artifactId>
        </dependency>
        <dependency>
            <groupId>io.micronaut.session</groupId>
            <artifactId>micronaut-session</artifactId>
        </dependency>
        <dependency>
            <groupId>org.yaml</groupId>
            <artifactId>snakeyaml</artifactId>
            <scope>runtime</scope>
        </dependency>
    </dependencies>
</project>
```
{% endtab %}
{% endtabs %}

### `withJansi` configuration tag has been removed from `logback.xml`

{% tabs %}
{% tab title="Before" %}
```xml
<configuration>  
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <withJansi>true</withJansi>
        <!-- encoders are assigned the type
            ch.qos.logback.classic.encoder.PatternLayoutEncoder by default -->
        <encoder>
            <pattern>%cyan(%d{HH:mm:ss.SSS}) %gray([%thread]) %highlight(%-5level) %magenta(%logger{36}) - %msg%n</pattern>
        </encoder>
    </appender>
    <root level="info">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```
{% endtab %}

{% tab title="After" %}
```xml
<configuration>  
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <!-- encoders are assigned the type
            ch.qos.logback.classic.encoder.PatternLayoutEncoder by default -->
        <encoder>
            <pattern>%cyan(%d{HH:mm:ss.SSS}) %gray([%thread]) %highlight(%-5level) %magenta(%logger{36}) - %msg%n</pattern>
        </encoder>
    </appender>
    <root level="info">
        <appender-ref ref="STDOUT" />
    </root>
</configuration>
```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut3to4Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.