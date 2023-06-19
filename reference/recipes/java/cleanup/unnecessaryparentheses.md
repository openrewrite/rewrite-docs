# Remove unnecessary parentheses

**org.openrewrite.java.cleanup.UnnecessaryParentheses**

_Removes unnecessary parentheses from code where extra parentheses pairs are redundant._

### Tags

* RSPEC-1110
* RSPEC-1611

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/cleanup/UnnecessaryParentheses.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.*;

class Test {
    int square(int a, int b) {
        int square = (a * b);

        int sumOfSquares = 0;
        for (int i = (0); i < 10; i++) {
            sumOfSquares += (square(i * i, i));
        }
        double num = (10.0);

        List<String> list = Arrays.asList("a1", "b1", "c1");
        list.stream()
                .filter((s) -> s.startsWith("c"))
                .forEach(System.out::println);

        return (square);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.*;

class Test {
    int square(int a, int b) {
        int square = a * b;

        int sumOfSquares = 0;
        for (int i = 0; i < 10; i++) {
            sumOfSquares += square(i * i, i);
        }
        double num = 10.0;

        List<String> list = Arrays.asList("a1", "b1", "c1");
        list.stream()
                .filter(s -> s.startsWith("c"))
                .forEach(System.out::println);

        return square;
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
@@ -5,1 +5,1 @@
class Test {
    int square(int a, int b) {
-       int square = (a * b);
+       int square = a * b;

@@ -8,2 +8,2 @@

        int sumOfSquares = 0;
-       for (int i = (0); i < 10; i++) {
-           sumOfSquares += (square(i * i, i));
+       for (int i = 0; i < 10; i++) {
+           sumOfSquares += square(i * i, i);
        }
@@ -11,1 +11,1 @@
            sumOfSquares += (square(i * i, i));
        }
-       double num = (10.0);
+       double num = 10.0;

@@ -15,1 +15,1 @@
        List<String> list = Arrays.asList("a1", "b1", "c1");
        list.stream()
-               .filter((s) -> s.startsWith("c"))
+               .filter(s -> s.startsWith("c"))
                .forEach(System.out::println);
@@ -18,1 +18,1 @@
                .forEach(System.out::println);

-       return (square);
+       return square;
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.UnnecessaryParentheses")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.UnnecessaryParentheses</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.cleanup.UnnecessaryParentheses
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Patrick](patway99@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.cleanup.UnnecessaryParentheses)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
