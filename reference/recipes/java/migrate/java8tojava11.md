# Migrate Java 8 to Java 11

** org.openrewrite.java.migrate.Java8toJava11**
_This recipe will apply changes commonly needed when migrating from Java 8 to Java 11._

### Tags

* jaxb
* deprecated
* java11
* jaxws
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.2.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.2.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.2.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.Java8toJava11`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add explicit JAX-WS dependencies](../../java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit JAXB dependencies](../../java/migrate/javax/addjaxbdependencies.md)
* [Add explicit Inject dependencies](../../java/migrate/javax/addinjectdependencies.md)
* [Add JDeprScan Maven Plug-in](../../java/migrate/addjdeprscanplugin.md)
* [Migrate deprecated `java.util.concurrent` APIs](../../java/migrate/concurrent/javaconcurrentapis.md)
* [Migrate deprecated `java.lang` APIs](../../java/migrate/lang/javalangapis.md)
* [Migrate deprecated `java.util.logging` APIs](../../java/migrate/logging/javaloggingapis.md)
* [Migrate deprecated `java.net` APIs](../../java/migrate/net/javanetapis.md)
* [Migrate deprecated `java.sql` APIs](../../java/migrate/sql/javasqlapis.md)
* [Migrate deprecated `javax.lang.model.util` APIs in openjdk.](../../java/migrate/javax/javaxlangmodelutil.md)
* [Migrate deprecated `javax.management.monitor` APIs](../../java/migrate/javax/javaxmanagementmonitorapis.md)
* [Migrate deprecated `javax.xml.stream` APIs](../../java/migrate/javax/javaxxmlstreamapis.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.Java8toJava11
displayName: Migrate Java 8 to Java 11
description: This recipe will apply changes commonly needed when migrating from Java 8 to Java 11.
tags:
  - jaxb
  - deprecated
  - java11
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.javax.AddJaxwsDependencies
  - org.openrewrite.java.migrate.javax.AddJaxbDependencies
  - org.openrewrite.java.migrate.javax.AddInjectDependencies
  - org.openrewrite.java.migrate.AddJDeprScanPlugin
  - org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
  - org.openrewrite.java.migrate.lang.JavaLangAPIs
  - org.openrewrite.java.migrate.logging.JavaLoggingAPIs
  - org.openrewrite.java.migrate.net.JavaNetAPIs
  - org.openrewrite.java.migrate.sql.JavaSqlAPIs
  - org.openrewrite.java.migrate.javax.JavaxLangModelUtil
  - org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
  - org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs

```
{% endtab %}
{% endtabs %}
