# Automatically select recipe examples from the unit test cases of a recipe

**org.openrewrite.java.recipes.SelectRecipeExamples**

_Add `@DocumentExample` to the first non-issue and not a disabled unit test of a recipe as an example, if there are not any examples yet._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/SelectRecipeExamples.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Example


{% tabs %}
{% tab title="org/openrewrite/java/cleanup/UnnecessaryParenthesesTest.java" %}

###### Before
{% code title="org/openrewrite/java/cleanup/UnnecessaryParenthesesTest.java" %}
```java
package org.openrewrite.java.cleanup;

import org.junit.jupiter.api.Test;
import org.openrewrite.Recipe;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class UnnecessaryParenthesesTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        Recipe recipe = new UnnecessaryParentheses();
        spec.recipe(recipe);
    }

    @Test
    void test1() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    @Test
    void test2() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/java/cleanup/UnnecessaryParenthesesTest.java" %}
```java
package org.openrewrite.java.cleanup;

import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.Recipe;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class UnnecessaryParenthesesTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        Recipe recipe = new UnnecessaryParentheses();
        spec.recipe(recipe);
    }

    @DocumentExample
    @Test
    void test1() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    @Test
    void test2() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/java/cleanup/UnnecessaryParenthesesTest.java
+++ org/openrewrite/java/cleanup/UnnecessaryParenthesesTest.java
@@ -4,0 +4,1 @@

import org.junit.jupiter.api.Test;
+import org.openrewrite.DocumentExample;
import org.openrewrite.Recipe;
@@ -17,0 +18,1 @@
    }

+   @DocumentExample
    @Test
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
    activeRecipe("org.openrewrite.java.recipes.SelectRecipeExamples")
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
            <recipe>org.openrewrite.java.recipes.SelectRecipeExamples</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.SelectRecipeExamples
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.recipes.SelectRecipeExamples)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
