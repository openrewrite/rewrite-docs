# Migrate deprecated `java.util.logging` APIs

** org.openrewrite.java.migrate.logging.JavaLoggingAPIs**
_Certain Java logging APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* logging

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.0.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.logging.JavaLoggingAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.0.0")
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
        <version>4.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.logging.JavaLoggingAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.0.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.logging.JavaLoggingAPIs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `ManagementFactory#getPlatformMXBean(PlatformLoggingMXBean.class)`](../../../java/migrate/logging/migrategetloggingmxbeantogetplatformmxbean.md)
* [Use `Logger#getGlobal()`](../../../java/migrate/logging/migrateloggerglobaltogetglobal.md)
* [Use `Logger#logrb(.., ResourceBundle bundleName, ..)`](../../../java/migrate/logging/migrateloggerlogrbtouseresourcebundle.md)
* [Use `LogRecord#setInstant(Instant)`](../../../java/migrate/logging/migratelogrecordsetmillistosetinstant.md)
* [Use `PlatformLoggingMXBean`](../../../java/migrate/logging/migrateinterfaceloggingmxbeantoplatformloggingmxbean.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.logging.JavaLoggingAPIs
displayName: Migrate deprecated `java.util.logging` APIs
description: Certain Java logging APIs have become deprecated and their usages changed, necessitating usage changes.
tags:
  - logging
recipeList:
  - org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean
  - org.openrewrite.java.migrate.logging.MigrateLoggerGlobalToGetGlobal
  - org.openrewrite.java.migrate.logging.MigrateLoggerLogrbToUseResourceBundle
  - org.openrewrite.java.migrate.logging.MigrateLogRecordSetMillisToSetInstant
  - org.openrewrite.java.migrate.logging.MigrateInterfaceLoggingMXBeanToPlatformLoggingMXBean

```
{% endtab %}
{% endtabs %}
