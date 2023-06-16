# Statically import AssertJ's `assertThat`

**org.openrewrite.java.testing.assertj.StaticImports**

_Consistently use a static import rather than inlining the `Assertions` class name in tests._

### Tags

* testing
* assertj

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

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
import java.util.List;
import org.assertj.core.api.AssertionsForClassTypes;
import org.assertj.core.api.AssertionsForInterfaceTypes;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

public class Test {
    List<String> exampleList;
    void method() {
        AssertionsForInterfaceTypes.assertThat(exampleList).hasSize(0);
        AssertionsForClassTypes.assertThat(true).isTrue();
        assertThat(true).isTrue();
        assertThat(exampleList).hasSize(0);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class Test {
    List<String> exampleList;
    void method() {
        assertThat(exampleList).hasSize(0);
        assertThat(true).isTrue();
        assertThat(true).isTrue();
        assertThat(exampleList).hasSize(0);
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
@@ -2,4 +2,0 @@
-import org.assertj.core.api.AssertionsForClassTypes;
import org.assertj.core.api.AssertionsForInterfaceTypes;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;
@@ -7,0 +3,2 @@
+import static org.assertj.core.api.Assertions.assertThat;

@@ -10,2 +8,1 @@
-        AssertionsForInterfaceTypes.assertThat(exampleList).hasSize(0);
        AssertionsForClassTypes.assertThat(true).isTrue();
+        assertThat(exampleList).hasSize(0);
@@ -13,0 +10,1 @@
+        assertThat(true).isTrue();
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
import java.util.List;
import org.assertj.core.api.AssertionsForClassTypes;
import org.assertj.core.api.AssertionsForInterfaceTypes;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

public class Test {
    List<String> exampleList;
    void method() {
        AssertionsForInterfaceTypes.assertThat(exampleList).hasSize(0);
        AssertionsForClassTypes.assertThat(true).isTrue();
        assertThat(true).isTrue();
        assertThat(exampleList).hasSize(0);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class Test {
    List<String> exampleList;
    void method() {
        assertThat(exampleList).hasSize(0);
        assertThat(true).isTrue();
        assertThat(true).isTrue();
        assertThat(exampleList).hasSize(0);
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
@@ -2,4 +2,0 @@
-import org.assertj.core.api.AssertionsForClassTypes;
import org.assertj.core.api.AssertionsForInterfaceTypes;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;
@@ -7,0 +3,2 @@
+import static org.assertj.core.api.Assertions.assertThat;

@@ -10,2 +8,1 @@
-        AssertionsForInterfaceTypes.assertThat(exampleList).hasSize(0);
        AssertionsForClassTypes.assertThat(true).isTrue();
+        assertThat(exampleList).hasSize(0);
@@ -13,0 +10,1 @@
+        assertThat(true).isTrue();
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.StaticImports")
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
            <recipe>org.openrewrite.java.testing.assertj.StaticImports</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.StaticImports
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForClassTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Use static import](../../../java/usestaticimport.md)
  * methodPattern: `org.assertj.core.api.Assertions *(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.StaticImports
displayName: Statically import AssertJ's `assertThat`
description: Consistently use a static import rather than inlining the `Assertions` class name in tests.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForClassTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.UseStaticImport:
      methodPattern: org.assertj.core.api.Assertions *(..)

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.assertj.StaticImports)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
