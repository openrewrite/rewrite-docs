# Prefer `System.lineSeparator()`

**org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator**

_Prefer the Java standard library's `System.lineSeparator()` over third-party usage of apache's `IOUtils.LINE_SEPARATOR`._

### Tags

* apache
* commons

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/apache-commons-io.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.8

## Examples
##### Example 1


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import org.apache.commons.io.IOUtils;

class A {
    static String lineSeparator() {
        return IOUtils.LINE_SEPARATOR;
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    static String lineSeparator() {
        return System.lineSeparator();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -1,2 +1,0 @@
-import org.apache.commons.io.IOUtils;
-
class A {
@@ -5,1 +3,1 @@
class A {
    static String lineSeparator() {
-       return IOUtils.LINE_SEPARATOR;
+       return System.lineSeparator();
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import org.apache.commons.io.IOUtils;

class A {
    static String lineSeparator() {
        return IOUtils.LINE_SEPARATOR;
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    static String lineSeparator() {
        return System.lineSeparator();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -1,2 +1,0 @@
-import org.apache.commons.io.IOUtils;
-
class A {
@@ -5,1 +3,1 @@
class A {
    static String lineSeparator() {
-       return IOUtils.LINE_SEPARATOR;
+       return System.lineSeparator();
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.8")
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
            <recipe>org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.8</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change static field access to static method access](../../../../../java/changestaticfieldtomethod.md)
  * oldClassName: `org.apache.commons.io.IOUtils`
  * oldFieldName: `LINE_SEPARATOR`
  * newClassName: `java.lang.System`
  * newMethodName: `lineSeparator`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator
displayName: Prefer `System.lineSeparator()`
description: Prefer the Java standard library's `System.lineSeparator()` over third-party usage of apache's `IOUtils.LINE_SEPARATOR`.
tags:
  - apache
  - commons
recipeList:
  - org.openrewrite.java.ChangeStaticFieldToMethod:
      oldClassName: org.apache.commons.io.IOUtils
      oldFieldName: LINE_SEPARATOR
      newClassName: java.lang.System
      newMethodName: lineSeparator

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
