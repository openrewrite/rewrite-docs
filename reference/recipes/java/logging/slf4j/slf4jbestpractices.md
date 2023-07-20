# SLF4J best practices

**org.openrewrite.java.logging.slf4j.Slf4jBestPractices**

_Applies best practices to logging with SLF4J._

### Tags

* slf4j
* logging

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.2

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
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
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
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
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Slf4jBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.2")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Slf4jBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Slf4jBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass.md)
* [Parameterize SLF4J logging statements](../../../java/logging/slf4j/parameterizedlogging.md)
* [SLF4J logging statements should begin with constants](../../../java/logging/slf4j/slf4jlogshouldbeconstant.md)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](../../../java/logging/slf4j/completeexceptionlogging.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Slf4jBestPractices
displayName: SLF4J best practices
description: Applies best practices to logging with SLF4J.
tags:
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging
  - org.openrewrite.java.logging.slf4j.Slf4jLogShouldBeConstant
  - org.openrewrite.java.logging.slf4j.CompleteExceptionLogging

```
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Patrick](mailto:patway99@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Peter Streef](mailto:p.streef@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Kevin McCarpenter](mailto:kevin@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Slf4jBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
