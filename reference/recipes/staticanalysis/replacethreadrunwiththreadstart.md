# Replace calls to `Thread.run()` with `Thread.start()`

**org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart**

_`Thread.run()` should not be called directly._

### Tags

* RSPEC-1217

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
public class A {
    public static void main(String[] args) {
       Runnable r = ()-> System.out.println("Hello world");
       Thread myThread = new Thread(r);
       myThread.run();
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
public class A {
    public static void main(String[] args) {
       Runnable r = ()-> System.out.println("Hello world");
       Thread myThread = new Thread(r);
       myThread.start();
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
-       myThread.run();
+       myThread.start();
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
public class A {
    public static void main(String[] args) {
       Runnable r = ()-> System.out.println("Hello world");
       Thread myThread = new Thread(r);
       myThread.run();
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
public class A {
    public static void main(String[] args) {
       Runnable r = ()-> System.out.println("Hello world");
       Thread myThread = new Thread(r);
       myThread.start();
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
-       myThread.run();
+       myThread.start();
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../java/changemethodname.md)
  * methodPattern: `java.lang.Thread run()`
  * newMethodName: `start`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart
displayName: Replace calls to `Thread.run()` with `Thread.start()`
description: `Thread.run()` should not be called directly.
tags:
  - RSPEC-1217
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.lang.Thread run()
      newMethodName: start

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
