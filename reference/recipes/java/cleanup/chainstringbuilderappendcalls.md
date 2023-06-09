# Chain `StringBuilder.append()` calls

**org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls**

_String concatenation within calls to `StringBuilder.append()` causes unnecessary memory allocation. Except for concatenations of String literals, which are joined together at compile time. Replaces inefficient concatenations with chained calls to `StringBuilder.append()`._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/cleanup/ChainStringBuilderAppendCalls.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.40.6


## Examples
##### Example 1
Chain `StringBuilder.append()` calls instead of the '+' operator to efficiently concatenate strings and numbers.


###### Before
{% code title="A.java" %}
```java
class A {
    void method1() {
        StringBuilder sb = new StringBuilder();
        String op = "+";
        sb.append("A" + op + "B");
        sb.append(1 + op + 2);
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    void method1() {
        StringBuilder sb = new StringBuilder();
        String op = "+";
        sb.append("A").append(op).append("B");
        sb.append(1).append(op).append(2);
    }
}
```
{% endcode %}

<details>
<summary>Diff</summary>
```diff
--- A.java
+++ A.java
@@ -5,2 +5,2 @@
-        sb.append("A" + op + "B");
        sb.append(1 + op + 2);
+        sb.append("A").append(op).append("B");
        sb.append(1).append(op).append(2);
```
</details>
---
##### Example 2
Grouping concatenation.


###### Before
{% code title="A.java" %}
```java
class A {
    void method1() {
        StringBuilder sb = new StringBuilder();
        String op = "+";
        sb.append("A" + "B" + "C" + op + "D" + "E");
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
class A {
    void method1() {
        StringBuilder sb = new StringBuilder();
        String op = "+";
        sb.append("A" + "B" + "C").append(op).append("D" + "E");
    }
}
```
{% endcode %}

<details>
<summary>Diff</summary>
```diff
--- A.java
+++ A.java
@@ -5,1 +5,1 @@
-        sb.append("A" + "B" + "C" + op + "D" + "E");
+        sb.append("A" + "B" + "C").append(op).append("D" + "E");
```
</details>


## Contributors
* [Kun Li](kun@moderne.io)


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls")
}

repositories {
    mavenCentral()
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.
{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
