# Fix missing braces

**org.openrewrite.staticanalysis.NeedBraces**

_Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies._

### Tags

* RSPEC-121

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NeedBraces.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    static void addToWhile() {
        while (true) ;
    }

    static void addToWhileWithBody() {
        while (true) return;
    }

    static void addToIf(int n) {
        if (n == 1) return;
    }

    static void addToIfElse(int n) {
        if (n == 1) return;
        else return;
    }

    static void addToIfElseIfElse(int n) {
        if (n == 1) return;
        else if (n == 2) return;
        else return;
    }

    static void addToDoWhile(Object obj) {
        do obj.notify(); while (true);
    }

    static void addToIterativeFor(Object obj) {
        for (int i = 0; ; ) obj.notify();
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    static void addToWhile() {
        while (true) {
        }
    }

    static void addToWhileWithBody() {
        while (true) {
            return;
        }
    }

    static void addToIf(int n) {
        if (n == 1) {
            return;
        }
    }

    static void addToIfElse(int n) {
        if (n == 1) {
            return;
        } else {
            return;
        }
    }

    static void addToIfElseIfElse(int n) {
        if (n == 1) {
            return;
        } else if (n == 2) {
            return;
        } else {
            return;
        }
    }

    static void addToDoWhile(Object obj) {
        do {
            obj.notify();
        } while (true);
    }

    static void addToIterativeFor(Object obj) {
        for (int i = 0; ; ) {
            obj.notify();
        }
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
@@ -3,1 +3,2 @@
class Test {
    static void addToWhile() {
-       while (true) ;
+       while (true) {
+       }
    }
@@ -7,1 +8,3 @@

    static void addToWhileWithBody() {
-       while (true) return;
+       while (true) {
+           return;
+       }
    }
@@ -11,1 +14,3 @@

    static void addToIf(int n) {
-       if (n == 1) return;
+       if (n == 1) {
+           return;
+       }
    }
@@ -15,2 +20,5 @@

    static void addToIfElse(int n) {
-       if (n == 1) return;
-       else return;
+       if (n == 1) {
+           return;
+       } else {
+           return;
+       }
    }
@@ -20,3 +28,7 @@

    static void addToIfElseIfElse(int n) {
-       if (n == 1) return;
-       else if (n == 2) return;
-       else return;
+       if (n == 1) {
+           return;
+       } else if (n == 2) {
+           return;
+       } else {
+           return;
+       }
    }
@@ -26,1 +38,3 @@

    static void addToDoWhile(Object obj) {
-       do obj.notify(); while (true);
+       do {
+           obj.notify();
+       } while (true);
    }
@@ -30,1 +44,3 @@

    static void addToIterativeFor(Object obj) {
-       for (int i = 0; ; ) obj.notify();
+       for (int i = 0; ; ) {
+           obj.notify();
+       }
    }
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.NeedBraces")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.NeedBraces</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.NeedBraces
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Aaron Gershman](aegershman@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Scott Jungling](scott.jungling@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NeedBraces)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
