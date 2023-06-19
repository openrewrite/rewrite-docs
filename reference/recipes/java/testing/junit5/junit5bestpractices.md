# JUnit Jupiter best practices

**org.openrewrite.java.testing.junit5.JUnit5BestPractices**

_Applies best practices to tests._

### Tags

* junit
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.2

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.junit.jupiter.api.Assertions;

public class Test {
    void method() {
        Assertions.assertTrue(true);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import static org.junit.jupiter.api.Assertions.assertTrue;

public class Test {
    void method() {
        assertTrue(true);
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
@@ -1,1 +1,1 @@
-import org.junit.jupiter.api.Assertions;
+import static org.junit.jupiter.api.Assertions.assertTrue;

@@ -5,1 +5,1 @@
public class Test {
    void method() {
-       Assertions.assertTrue(true);
+       assertTrue(true);
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
import org.junit.jupiter.api.Assertions;

public class Test {
    void method() {
        Assertions.assertTrue(true);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import static org.junit.jupiter.api.Assertions.assertTrue;

public class Test {
    void method() {
        assertTrue(true);
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
@@ -1,1 +1,1 @@
-import org.junit.jupiter.api.Assertions;
+import static org.junit.jupiter.api.Assertions.assertTrue;

@@ -5,1 +5,1 @@
public class Test {
    void method() {
-       Assertions.assertTrue(true);
+       assertTrue(true);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2")
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
            <recipe>org.openrewrite.java.testing.junit5.JUnit5BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnit5BestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Statically import JUnit Jupiter assertions](../../../java/testing/junit5/staticimports.md)
* [JUnit Jupiter migration from JUnit 4.x](../../../java/testing/junit5/junit4to5migration.md)
* [Clean Up Assertions](../../../java/testing/junit5/cleanupassertions.md)
* [Remove `public` visibility of JUnit 5 tests](../../../java/testing/cleanup/testsshouldnotbepublic.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.JUnit5BestPractices
displayName: JUnit Jupiter best practices
description: Applies best practices to tests.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.StaticImports
  - org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - org.openrewrite.java.testing.junit5.CleanupAssertions
  - org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic:

```
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Yeikel](yeikel@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Greg Adams](gadams@gmail.com)
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Tim te Beek](tim@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sofia Britto Schwartz](sofia.b.schwartz@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)
* [Ties van de Ven](1215166+vandeven@users.noreply.github.com)
* [Scott Jungling](scott.jungling@gmail.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Kun Li](kun@moderne.io)
* [Kyle Scully](scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit5BestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
