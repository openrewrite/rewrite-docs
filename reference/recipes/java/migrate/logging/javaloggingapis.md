# Use modernized `java.util.logging` APIs

**org.openrewrite.java.migrate.logging.JavaLoggingAPIs**

_Certain Java logging APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* logging

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-logging-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.20.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.20.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.logging.JavaLoggingAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.20.0")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.logging.JavaLoggingAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.20.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.logging.JavaLoggingAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `ManagementFactory#getPlatformMXBean(PlatformLoggingMXBean.class)`](../../../java/migrate/logging/migrategetloggingmxbeantogetplatformmxbean.md)
* [Use `Logger#getGlobal()`](../../../java/migrate/logging/migrateloggerglobaltogetglobal.md)
* [Use `Logger#logrb(.., ResourceBundle bundleName, ..)`](../../../java/migrate/logging/migrateloggerlogrbtouseresourcebundle.md)
* [Use `LogRecord#setInstant(Instant)`](../../../java/migrate/logging/migratelogrecordsetmillistosetinstant.md)
* [Use `java.lang.management.PlatformLoggingMXBean`](../../../java/migrate/logging/migrateinterfaceloggingmxbeantoplatformloggingmxbean.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.logging.JavaLoggingAPIs
displayName: Use modernized `java.util.logging` APIs
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.logging.JavaLoggingAPIs)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
