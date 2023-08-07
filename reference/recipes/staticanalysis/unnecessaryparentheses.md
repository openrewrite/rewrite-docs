# Remove unnecessary parentheses

**org.openrewrite.staticanalysis.UnnecessaryParentheses**

_Removes unnecessary parentheses from code where extra parentheses pairs are redundant._

### Tags

* RSPEC-1110
* RSPEC-1611

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UnnecessaryParentheses.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

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

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.UnnecessaryParentheses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.4")
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
            <recipe>org.openrewrite.staticanalysis.UnnecessaryParentheses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.UnnecessaryParentheses
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UnnecessaryParentheses)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
