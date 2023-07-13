# Chain `StringBuilder.append()` calls

**org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls**

_String concatenation within calls to `StringBuilder.append()` causes unnecessary memory allocation. Except for concatenations of String literals, which are joined together at compile time. Replaces inefficient concatenations with chained calls to `StringBuilder.append()`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ChainStringBuilderAppendCalls.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.3

## Examples
##### Example 1
Chain `StringBuilder.append()` calls instead of the '+' operator to efficiently concatenate strings and numbers.


{% tabs %}
{% tab title="A.java" %}

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

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -5,2 +5,2 @@
        StringBuilder sb = new StringBuilder();
        String op = "+";
-       sb.append("A" + op + "B");
-       sb.append(1 + op + 2);
+       sb.append("A").append(op).append("B");
+       sb.append(1).append(op).append(2);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
Grouping concatenation.


{% tabs %}
{% tab title="A.java" %}

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

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -5,1 +5,1 @@
        StringBuilder sb = new StringBuilder();
        String op = "+";
-       sb.append("A" + "B" + "C" + op + "D" + "E");
+       sb.append("A" + "B" + "C").append(op).append("D" + "E");
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.15")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.3")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.3</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
