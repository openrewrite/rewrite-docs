# Use modernized `java.util.logging` APIs

**org.openrewrite.java.migrate.logging.JavaLoggingAPIs**

_Certain Java logging APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* logging

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-logging-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.9

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.logging.LoggingMXBean;

class Test {
    static void method() {
        LoggingMXBean loggingBean = null;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.lang.management.PlatformLoggingMXBean;

class Test {
    static void method() {
        PlatformLoggingMXBean loggingBean = null;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import java.util.logging.LoggingMXBean;
+import java.lang.management.PlatformLoggingMXBean;

@@ -5,1 +5,1 @@
class Test {
    static void method() {
-       LoggingMXBean loggingBean = null;
+       PlatformLoggingMXBean loggingBean = null;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.logging.LoggingMXBean;

class Test {
    static void method() {
        LoggingMXBean loggingBean = null;
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.lang.management.PlatformLoggingMXBean;

class Test {
    static void method() {
        PlatformLoggingMXBean loggingBean = null;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import java.util.logging.LoggingMXBean;
+import java.lang.management.PlatformLoggingMXBean;

@@ -5,1 +5,1 @@
class Test {
    static void method() {
-       LoggingMXBean loggingBean = null;
+       PlatformLoggingMXBean loggingBean = null;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.logging.JavaLoggingAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.9")
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
            <recipe>org.openrewrite.java.migrate.logging.JavaLoggingAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.9</version>
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

## Contributors
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Tyler Van Gorder
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.logging.JavaLoggingAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
