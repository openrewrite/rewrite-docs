# JUnit Jupiter best practices

**org.openrewrite.java.testing.junit5.JUnit5BestPractices**

_Applies best practices to tests._

### Tags

* junit
* testing

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Examples
##### Example 1


{% tabs %}
{% tab title="Example.java" %}

###### Before
{% code title="Example.java" %}
```java
import org.junit.Before;

public class Example {
    @Before
    public void initialize() {
    }
}
```
{% endcode %}

###### After
{% code title="Example.java" %}
```java
import org.junit.jupiter.api.BeforeEach;

class Example {
    @BeforeEach
    void initialize() {
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Example.java
+++ Example.java
@@ -1,1 +1,1 @@
-import org.junit.Before;
+import org.junit.jupiter.api.BeforeEach;

@@ -3,3 +3,3 @@
import org.junit.Before;

-public class Example {
-   @Before
-   public void initialize() {
+class Example {
+   @BeforeEach
+   void initialize() {
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="Example.java" %}

###### Before
{% code title="Example.java" %}
```java
import org.junit.Before;

public class Example {
    @Before
    public void initialize() {
    }
}
```
{% endcode %}

###### After
{% code title="Example.java" %}
```java
import org.junit.jupiter.api.BeforeEach;

class Example {
    @BeforeEach
    void initialize() {
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Example.java
+++ Example.java
@@ -1,1 +1,1 @@
-import org.junit.Before;
+import org.junit.jupiter.api.BeforeEach;

@@ -3,3 +3,3 @@
import org.junit.Before;

-public class Example {
-   @Before
-   public void initialize() {
+class Example {
+   @BeforeEach
+   void initialize() {
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7")
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
            <recipe>org.openrewrite.java.testing.junit5.JUnit5BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.7</version>
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
* [Add missing @ParameterizedTest annotation when @ValueSource is used or replace @Test with @ParameterizedTest](../../../java/testing/junit5/addparameterizedtestannotation.md)
* [Remove duplicates uses of @TestTemplate implementations for a single method](../../../java/testing/junit5/removeduplicatetesttemplates.md)

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
  - org.openrewrite.java.testing.junit5.AddParameterizedTestAnnotation
  - org.openrewrite.java.testing.junit5.RemoveDuplicateTestTemplates

```
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* Yeikel
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* [Aleksandar A Simpson](mailto:alek@asu.me)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Tyler Van Gorder
* [Tim te Beek](mailto:tim@moderne.io)
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* Ties van de Ven
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)
* [Kun Li](mailto:kun@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit5BestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
