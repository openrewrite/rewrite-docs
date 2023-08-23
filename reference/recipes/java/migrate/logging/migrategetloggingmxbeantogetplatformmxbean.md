# Use `ManagementFactory#getPlatformMXBean(PlatformLoggingMXBean.class)`

**org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean**

_Use `ManagementFactory#getPlatformMXBean(PlatformLoggingMXBean.class)` instead of the deprecated `LogManager#getLoggingMXBean()` in Java 9 or higher._

### Tags

* deprecated

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/logging/MigrateGetLoggingMXBeanToGetPlatformMXBean.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.9

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.logging.LoggingMXBean;
import java.util.logging.LogManager;

class Test {
    static void method() {
        LoggingMXBean loggingBean = LogManager.getLoggingMXBean();
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.lang.management.ManagementFactory;
import java.lang.management.PlatformLoggingMXBean;

class Test {
    static void method() {
        PlatformLoggingMXBean loggingBean = ManagementFactory.getPlatformMXBean(PlatformLoggingMXBean.class);
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
@@ -1,2 +1,2 @@
-import java.util.logging.LoggingMXBean;
-import java.util.logging.LogManager;
+import java.lang.management.ManagementFactory;
+import java.lang.management.PlatformLoggingMXBean;

@@ -6,1 +6,1 @@
class Test {
    static void method() {
-       LoggingMXBean loggingBean = LogManager.getLoggingMXBean();
+       PlatformLoggingMXBean loggingBean = ManagementFactory.getPlatformMXBean(PlatformLoggingMXBean.class);
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
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean
```
{% endcode %}
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.logging.MigrateGetLoggingMXBeanToGetPlatformMXBean)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
