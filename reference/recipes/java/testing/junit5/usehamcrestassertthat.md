# Use `MatcherAssert#assertThat(..)`

**org.openrewrite.java.testing.junit5.UseHamcrestAssertThat**

_JUnit 4's `Assert#assertThat(..)` This method was deprecated in JUnit 4 and removed in JUnit Jupiter._

### Tags

* junit
* testing
* hamcrest

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

class Test {
    void test() {
        assertThat(1 + 1, is(2));
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

class Test {
    void test() {
        assertThat(1 + 1, is(2));
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
@@ -2,1 +2,1 @@
import static org.hamcrest.CoreMatchers.is;
-import static org.junit.Assert.assertThat;
+import static org.hamcrest.MatcherAssert.assertThat;

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
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

class Test {
    void test() {
        assertThat(1 + 1, is(2));
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

class Test {
    void test() {
        assertThat(1 + 1, is(2));
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
@@ -2,1 +2,1 @@
import static org.hamcrest.CoreMatchers.is;
-import static org.junit.Assert.assertThat;
+import static org.hamcrest.MatcherAssert.assertThat;

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseHamcrestAssertThat")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
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
            <recipe>org.openrewrite.java.testing.junit5.UseHamcrestAssertThat</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UseHamcrestAssertThat
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.junit.Assert assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.hamcrest.MatcherAssert`
* [Use static import](../../../java/usestaticimport.md)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UseHamcrestAssertThat
displayName: Use `MatcherAssert#assertThat(..)`
description: JUnit 4's `Assert#assertThat(..)` This method was deprecated in JUnit 4 and removed in JUnit Jupiter.
tags:
  - junit
  - testing
  - hamcrest
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.junit.Assert assertThat(..)
      fullyQualifiedTargetTypeName: org.hamcrest.MatcherAssert
  - org.openrewrite.java.UseStaticImport:
      methodPattern: org.hamcrest.MatcherAssert assertThat(..)

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UseHamcrestAssertThat)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
