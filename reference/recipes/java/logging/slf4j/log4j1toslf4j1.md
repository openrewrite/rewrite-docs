# Migrate Log4j 1.x to SLF4J 1.x

**org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1**

_Transforms usages of Log4j 1.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

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
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;

class Test {
    Logger logger0 = Logger.getLogger(Test.class);
    Logger logger1 = LogManager.getLogger(Test.class);
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Test {
    Logger logger0 = LoggerFactory.getLogger(Test.class);
    Logger logger1 = LoggerFactory.getLogger(Test.class);
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
-import org.apache.log4j.Logger;
-import org.apache.log4j.LogManager;
+import org.slf4j.Logger;
+import org.slf4j.LoggerFactory;

@@ -5,2 +5,2 @@

class Test {
-   Logger logger0 = Logger.getLogger(Test.class);
-   Logger logger1 = LogManager.getLogger(Test.class);
+   Logger logger0 = LoggerFactory.getLogger(Test.class);
+   Logger logger1 = LoggerFactory.getLogger(Test.class);
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
import org.apache.log4j.Logger;
import org.apache.log4j.LogManager;

class Test {
    Logger logger0 = Logger.getLogger(Test.class);
    Logger logger1 = LogManager.getLogger(Test.class);
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class Test {
    Logger logger0 = LoggerFactory.getLogger(Test.class);
    Logger logger1 = LoggerFactory.getLogger(Test.class);
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
-import org.apache.log4j.Logger;
-import org.apache.log4j.LogManager;
+import org.slf4j.Logger;
+import org.slf4j.LoggerFactory;

@@ -5,2 +5,2 @@

class Test {
-   Logger logger0 = Logger.getLogger(Test.class);
-   Logger logger1 = LogManager.getLogger(Test.class);
+   Logger logger0 = LoggerFactory.getLogger(Test.class);
+   Logger logger1 = LoggerFactory.getLogger(Test.class);
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1")
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
            <recipe>org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.log4j.MDC`
  * newFullyQualifiedTypeName: `org.slf4j.MDC`
* [Migrate Log4j 1.x to Log4j 2.x](../../../java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to SLF4J 1.x](../../../java/logging/slf4j/log4j2toslf4j1.md)
* [Parameterize SLF4J logging statements](../../../java/logging/slf4j/parameterizedlogging.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1
displayName: Migrate Log4j 1.x to SLF4J 1.x
description: Transforms usages of Log4j 1.x to leveraging SLF4J 1.x directly. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.log4j.MDC
      newFullyQualifiedTypeName: org.slf4j.MDC
  - org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
  - org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging

```
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
