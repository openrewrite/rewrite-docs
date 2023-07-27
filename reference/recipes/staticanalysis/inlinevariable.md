# Inline variable

**org.openrewrite.staticanalysis.InlineVariable**

_Inline variables when they are immediately used to return or throw._

### Tags

* RSPEC-1488

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/InlineVariable.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.util.List;
import java.util.stream.Collectors;

class Test {
    int test() {
        int n = 0;
        return n;
    }

    int test2() {
        int n = 0;
        System.out.println(n);
        return n;
    }

    void test3() {}

    void test4(String arg) throws IllegalArgumentException {
        if (arg == null || arg.isEmpty()) {
            IllegalArgumentException e = new IllegalArgumentException("arg should not be empty or null");
            throw e;
        }
    }

    List<String> testLambda(List<String> names) {
        return names.stream().map(n -> {
            String un = n.toLowerCase();
            return un;
        }).collect(Collectors.toList());
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.List;
import java.util.stream.Collectors;

class Test {
    int test() {
        return 0;
    }

    int test2() {
        int n = 0;
        System.out.println(n);
        return n;
    }

    void test3() {}

    void test4(String arg) throws IllegalArgumentException {
        if (arg == null || arg.isEmpty()) {
            throw new IllegalArgumentException("arg should not be empty or null");
        }
    }

    List<String> testLambda(List<String> names) {
        return names.stream().map(n -> {
            return n.toLowerCase();
        }).collect(Collectors.toList());
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
@@ -6,2 +6,1 @@
class Test {
    int test() {
-       int n = 0;
-       return n;
+       return 0;
    }
@@ -20,2 +19,1 @@
    void test4(String arg) throws IllegalArgumentException {
        if (arg == null || arg.isEmpty()) {
-           IllegalArgumentException e = new IllegalArgumentException("arg should not be empty or null");
-           throw e;
+           throw new IllegalArgumentException("arg should not be empty or null");
        }
@@ -27,2 +25,1 @@
    List<String> testLambda(List<String> names) {
        return names.stream().map(n -> {
-           String un = n.toLowerCase();
-           return un;
+           return n.toLowerCase();
        }).collect(Collectors.toList());
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.InlineVariable")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.InlineVariable</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.InlineVariable
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.InlineVariable)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
