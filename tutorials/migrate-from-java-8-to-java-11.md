# Migrate to Java 11

Upgrading an older codebase to Java 11 can be a daunting and time-consuming task. Enterprises that leverage Java within their infrastructure have inevitably faced the challenge of upgrading their applications to a newer version of Java. This guide will outline the features of the rewrite-migrate-java project which provides recipes to automate the migration to Java 11. As a developer, you can use rewrite to quickly tackle the most common issues you will encounter with your upgrade.

## Available Recipes

| Recipe Name | Description |
| :--- | :--- |
| Upgrade to Java 11 | This is a composite recipe that will handle the most common issues you may encounter when upgrading to Java 11. |
| Add JAXB dependencies | This recipe will add the necessary JAXB dependencies for those projects using the [Java Architecture for XML Binding](https://javaee.github.io/jaxb-v2/). |
| Add JAX-WS dependencies | This recipe will add the necessary JAX-WS dependencies for those projects using the [Java API for XML Web Services](https://javaee.github.io/metro-jax-ws/). |
| Add `jdeprscan` | This recipe will add the `jdeprscan` build plugin to a maven-based build. |
| Remediate deprecations | This recipe provides a best faith effort to remediate listed Java 11 deprecations where a safe, automated solution exists. |
| Suppress illegal reflective access | This recipe will modify the maven jar plugin configuration to suppress the illegal reflective access error when running a Java application as a "fat jar", a war, or an ear. |
| Use `jakarta.xml.bind` | This recipe will migrate a project from the `javax.xml.bind` package namespace to the `jakarta.xml.bind` namespace. |
| Use `jakarta.jws` | This recipe will migrate a project from the `javax.jws` package namespace  to the `jakarta.jws` namespace. |

## Upgrade to Java 11 Composite Recipe

The easiest way explore the capabilites of Java migration module is to activate the composite Java 8 to Java 11 recipe. The recipe can be executed by including the rewrite build plugin and then activating the `org.openrewrite.java.migrate.Java8toJava11` recipe:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.5.0</version>
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-migrate-java</artifactId>
      <version>0.2.0</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite").version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.2.0")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Java Architecture for XML Binding \(JAXB\)

Java Architecture for XML Binding \(JAXB\) provides a framework for mapping XML documents to/from a Java representation of those documents. This framework was originally part of the Java Platform, Enterprise Edition \(J2EE\), and both the API and the reference implementation were governed as part of the J2EE specification. The library and the reference implementation were also included as part of the Java standard library \(JDK 6 through 8\). Starting with JDK 9, the JAXB  dependencies were removed to reduce the footprint of the Java standard library. Any projects that continue to use the JAXB framework \(on JDK 9+\) must now explicitly add the JAXB API and a runtime implementation to their builds. To muddy the waters further, the governance of the Java Platform, Enterprise Edition was transferred to the Eclipse foundation and was renamed to Jakarta EE. The Jakarta EE 8 release \(the first under the Jakarta name\) maintains the `javax.xml.bind` package namespace whereas Jakarta EE 9 is the first release where the package namespace was changed to `jakarta.xml.bind`:

| Jakarta EE Version | XML Binding Artifact | Package Namespace | Description |
| :--- | :--- | :--- | :--- |
| Jakarta EE 8 | jakarta.xml.bind:jakarata.xml.bind-api:2.3.x | javax.xml.bind | JAXB API |
| Jakarta EE 8 | org.glassfish.jaxb:jaxb-runtime:2.3.x | javax.xml.bind | JAXB Reference Implementation |
| Jakarta EE 9 | jakarta.xml.bind:jakarata.xml.bind-api:3.x | jakarta.xml.bind | JAXB API |
| Jakarta EE 9 | org.glassfish.jaxb:jaxb-runtime:3.x | jakarta.xml.bind | JAXB Reference Implementation |

There are two JAXB-related recipes in [rewrite-migrate-java](https://github.com/openrewrite/rewrite-migrate-java)  that help projects that are migrating to Java 11:

### Add JAXB dependencies

This recipe will add or update the latest 2.3.x versions of the Jakarta XML binding framework for an existing Maven project. This recipe will only add the dependencies if references to types within the `javax.xml.bind` package namespace is detected.  


```markup
<dependencies>
    <!-- JAXB API -->
    <dependency>
        <groupId>jakarta.xml.bind</groupId>
        <artifactId>jakarta.xml.bind-api</artifactId>
        <version>2.3.3</version>
    </dependency>
    <!-- JAXB runtime -->
    <dependency>
        <groupId>org.glassfish.jaxb</groupId>
        <artifactId>jaxb-runtime</artifactId>
        <version>2.3.4</version>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

For those projects that use the `maven-jaxb2-plugin`, this recipe will also update the plugin to a version that is compatible with Java 11.

```markup
<!-- Configuring the plugin for generating java model from xsds. -->
<plugin>
    <groupId>org.jvnet.jaxb2.maven2</groupId>
    <artifactId>maven-jaxb2-plugin</artifactId>
    <version>2.5.0</version>
</plugin>
```

### `Migrate to` jakarta.xml.bind `package namespace`

Rewrite also provides an optional recipe that will migrate a project from the `javax.xml.bind`  namespace to the `jakarta.xml.bind`namespace. This recipe will also add/update the dependencies of a Maven-based project to the latest Jakarta 3.x release.

> **NOTE:** **The maven-jaxb2-plugin does not yet support the jakarta-xml.bind namespace.**

## Java API for XML Web Services \(JAX-WS\)

Java API for XML Web Services \(JAX-WS\) provides a framework for building SOAP-based XML web services in Java. This framework was originally part of the Java Platform, Enterprise Edition \(J2EE\) and both the API and the reference implementation were governed as part of the J2EE specification. The JAX-WS API and reference implementation were packaged with the Java standard library \(JDK 6 through 8\). Starting with JDK 9, the dependencies were removed from the core JDK to reduce the footprint of the Java standard library. Any projects that continue to use the JAX-WS framework \(on JDK 9+\) must now explicitly add the JAX-WS API and a runtime implementation to their builds. To muddy the waters further, the governance of the Java Platform, Enterprise Edition was transferred to the Eclipse foundation and was renamed to Jakarta EE. The Jakarta EE 8 release \(the first under the Jakarta name\) maintains the `javax.jws` package namespace whereas Jakarta EE 9 is the first release where the package namespace was changed to `jakarta.jws`:

| Jakarta EE Version | XML Web Services Artifact | Package Namespace | Description |
| :--- | :--- | :--- | :--- |
| Jakarta EE 8 | jakarta.xml.ws:jakarta.xml.ws-api:2.3.x | javax.jws | JAX-WS API |
| Jakarta EE 8 | com.sun.xml.ws:jaxws-rt:2.3.x | javax.jws | JAX-WS Reference Implementation |
| Jakarta EE 9 | jakarta.xml.ws:jakarta.xml.ws-api:2.3.x | jakarta.jws | JAX-WS API |
| Jakarta EE 9 | com.sun.xml.ws:jaxws-rt:2.3.x | jakarta.jws | JAX-WS Reference Implementation |

There are two JAX-WS recipes in this project that help projects that are migrating to Java 11:

### Add JAX-WS dependencies

This recipe will add or update the latest 2.3.x versions of the Jakarta XML Web Service dependencies for an existing Maven project. This recipe will only add the dependencies if references to types within the `javax.jws` package namespace are detected.

```text
<dependencies>
    <!-- JAX-WS API -->
    <dependency>
        <groupId>jakarta.xml.ws</groupId>
        <artifactId>jakarta.xml.ws-api</artifactId>
        <version>2.3.3</version>
    </dependency>
    <!-- JAX-WS reference implementation -->
    <dependency>
        <groupId>com.sun.xml.ws</groupId>
        <artifactId>jaxws-rt</artifactId>
        <version>2.3.4</version>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

{% hint style="warning" %}
There are several build tool plugins that are used to generate Java code from WSDL files. This recipe currently does not automate this process.
{% endhint %}

### `Migrate to` jakarta.jws `package namespace`

This recipe will migrate java projects that are using the XML web services framework from the `javax.jws` package namespace to the new 'jakarta.jws' namespace. The recipe will also add/update the latest 3.x versions of the Jakarta XML Web Services framework for maven-based builds.

## Jdeprscan

Recent versions of Java are shipped with a command line tool called `jdeprscan` that will scan a codebase for uses of deprecated API elements. The tool is scoped to only find those deprecations that are party of the core Java runtime and it provides options to limits the search to those APIs deprecated for a specific major versions of Java.  
  
To list the deprecations that will be checked by the tool, a developer can use the following command to enumerate all of the deprecations as of Java 11:

```text
jdeprscan -l -- release 11
```

### Add `jdeprscan` plugin to Maven

There is a build plugin for Maven that can be used to run jdeprscan within the build pipeline. The tool will fail the build if a reference to a deprecated API is detected. It is a good idea to introduce this plugin into your build process to prevent the use of deprecated APIs from "sneaking" into your codebase. Rewrite provides a recipe to add this plugin to an existing Maven project:

```markup
<project>
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-jdeprscan-plugin</artifactId>
                <version>3.0.0-alpha-1</version>
                <configuration>
                    <release>11</release>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

### Remediate deprecations

This project does a best faith effort to remediate deprecations \(reported by `jdeprscan`\) where a safe, automated solution exists. This is in no way an exhaustive list of the supported deprecations and if you feel like we have missed something, please reach out to the team. The following are the most common deprecations you may run into as you move to Java 11.

#### Converting Primitive Wrapper Class Constructors to `valueOf` Method

The constructor of all primitive wrapper types has been deprecated in favor of using the static factory method `valueOf`. This recipe will convert these constructors to their `valueOf` counterparts on the following classes:

* Boolean
* Byte
* Character
* Double
* Float
* Long
* Short

### Converting BigDecimal Rounding Constants to Enums

There are a set of constants \(static public integers\) representing the various rounding strategies for the BigDecimal class. These have been deprecated in favor of an enum. Any use of these constants will result in a breaking change when using the `jdeprscan` tool. This recipe will migrate the use of these constants to their enum counterparts.

Methods in the `BigDecimal` classes that will be migrated:

* `divide(BigDecimal, int)` --&gt; `divide(BigDecimal, RoundingMode)`
* `divide(BigDecimal, int, int)` --&gt; `divide(BigDecimal, int, RoundingMode)`
* `setScale(int, int)` --&gt; `setScale(int, RoundingMode)`

## Future Work

The rewrite-migrate-java project is in its infancy and we are always looking for feedback on which tasks should be prioritized. If you have a specific use case that is not yet covered by this project, please reach out to our team!

### Suppress Illegal Reflective Access

The Java module system was introduced in Java 9 and provides a higher-level abstraction for grouping a set of java packages and resources along with additional meta-data. The meta-data is used to identify what services the module offers, what dependencies the module requires, and provides a mechanism for explicitly defining which module classes are “visible” to Java classes that are external to the module.

The module system provides strong encapsulation and the core Java libraries, starting with Java 9, have been designed to use the module specification. The rules of the module system, if strictly enforced, introduce breaking changes to downstream projects that have not yet adopted the module system. In fact, it is very common for a typical Java application to have a mix of module-compliant code along with code that is not aware of modules.

Even as Java has reached Java 15, there are a large number of applications and libraries that are not compliant with the rules defined by the Java module system. Rather than breaking those libraries, the Java runtime has been configured to allow mixed-use applications. If an application makes an illegal, reflective call to a module’s unpublished resource, a warning will be logged.

The default behavior of the Java runtime is to log a warning the first time an illegal access call is made. All subsequent calls will not be logged and the warning looks similar to the following:

```text
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.thoughtworks.xstream.core.util.Fields (file.....)
WARNING: Please consider reporting this to the maintainers of com.thoughtworks.xstream.core.util.Fields
WARNING: Use --illage-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
```

This warning, while valid, produces noise in an organization's logging infrastructure and can be suppressed when packaging an application into an executable JAR file by adding the following to the JAR's manifest:

```text
<Add-Opens>java.base/java.lang java.base/java.util java.base/java.lang.reflect java.base/java.text java.desktop/java.awt.font</Add-Opens>
```

This solution will suppress the warning in the deployed artifacts while still surfacing the warning when developers run the application from their development environments.

This recipe can be used to add or modify the `maven-jar-plugin` to add manifest warnings. It will need to target pom files that build FAT application JARs or WAR files. The recipe can be configured with a list of packages for the `<Add-Opens>` manifest entries:

```text
<!-- This is to suppress Java 11 reflective access warnings when running the application from a jar file. -->
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <configuration>
        <archive>
            <manifestEntries>
                <Add-Opens>java.base/java.lang java.base/java.util java.base/java.lang.reflect java.base/java.text java.desktop/java.awt.font</Add-Opens>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
```

### Add dependencies removed from the Java runtime

There are several additional libraries that have been removed from the Java standard library that should be considered when migrating to Java 11:

* java.corba
* javax.transaction
* javax.batch
* JavaFX
* Web Start

### Migrate the use of `sun.misc.Unsafe`

The `sun.misc.Unsafe` class provides direct access to CPU and other hardware features. Over the years this class, although meant for only internal use by the JDK core, has been used in many frameworks across the Java-eco system to access its features primarily for performance gains. [This is an excellent article that desribes how the `Unsafe` class has been used over the years and also details how alternatives are being added to the platform.](https://blogs.oracle.com/javamagazine/the-unsafe-class-unsafe-at-any-speed)

It will be possible to create a set of recipes to aid in the migration of `Unsafe` to the new APIs starting in Java 11.



