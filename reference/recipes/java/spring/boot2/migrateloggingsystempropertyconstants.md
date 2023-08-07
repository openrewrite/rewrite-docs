# Migrate to recommended constants in `LogbackLoggingSystemProperties` from deprecated values in `LoggingSystemProperties`

**org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants**

_Replaces field and static access of deprecated fields in `LoggingSystemProperties` with the recommendations from `LogbackLoggingSystemProperties`. Deprecated in 2.4.x and removed in 2.6.0._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateLoggingSystemPropertyConstants.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.7

## Example


{% tabs %}
{% tab title="org/test/Test.java" %}

###### Before
{% code title="org/test/Test.java" %}
```java
package org.test;

import org.springframework.boot.logging.LoggingSystemProperties;

class Test {
    void method() {
        String valueA = LoggingSystemProperties.FILE_CLEAN_HISTORY_ON_START;
        String valueB = LoggingSystemProperties.FILE_MAX_HISTORY;
        String valueC = LoggingSystemProperties.FILE_MAX_SIZE;
        String valueD = LoggingSystemProperties.FILE_TOTAL_SIZE_CAP;
        String valueE = LoggingSystemProperties.ROLLING_FILE_NAME_PATTERN;
    }
}
```
{% endcode %}

###### After
{% code title="org/test/Test.java" %}
```java
package org.test;

import org.springframework.boot.logging.logback.LogbackLoggingSystemProperties;

class Test {
    void method() {
        String valueA = LogbackLoggingSystemProperties.ROLLINGPOLICY_CLEAN_HISTORY_ON_START;
        String valueB = LogbackLoggingSystemProperties.ROLLINGPOLICY_MAX_HISTORY;
        String valueC = LogbackLoggingSystemProperties.ROLLINGPOLICY_MAX_FILE_SIZE;
        String valueD = LogbackLoggingSystemProperties.ROLLINGPOLICY_TOTAL_SIZE_CAP;
        String valueE = LogbackLoggingSystemProperties.ROLLINGPOLICY_FILE_NAME_PATTERN;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/test/Test.java
+++ org/test/Test.java
@@ -3,1 +3,1 @@
package org.test;

-import org.springframework.boot.logging.LoggingSystemProperties;
+import org.springframework.boot.logging.logback.LogbackLoggingSystemProperties;

@@ -7,5 +7,5 @@
class Test {
    void method() {
-       String valueA = LoggingSystemProperties.FILE_CLEAN_HISTORY_ON_START;
-       String valueB = LoggingSystemProperties.FILE_MAX_HISTORY;
-       String valueC = LoggingSystemProperties.FILE_MAX_SIZE;
-       String valueD = LoggingSystemProperties.FILE_TOTAL_SIZE_CAP;
-       String valueE = LoggingSystemProperties.ROLLING_FILE_NAME_PATTERN;
+       String valueA = LogbackLoggingSystemProperties.ROLLINGPOLICY_CLEAN_HISTORY_ON_START;
+       String valueB = LogbackLoggingSystemProperties.ROLLINGPOLICY_MAX_HISTORY;
+       String valueC = LogbackLoggingSystemProperties.ROLLINGPOLICY_MAX_FILE_SIZE;
+       String valueD = LogbackLoggingSystemProperties.ROLLINGPOLICY_TOTAL_SIZE_CAP;
+       String valueE = LogbackLoggingSystemProperties.ROLLINGPOLICY_FILE_NAME_PATTERN;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.7")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
