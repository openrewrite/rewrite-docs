# Migrate rewrite unit test from version 7 to 8

**org.openrewrite.java.recipes.MigrateTestToRewrite8**

_Since the method `Recipe::doNext(..)` is deprecated, For unit test, change usage like `RecipeSpec.recipe(X.doNext(Y))` to `RecipeSpec.recipes(X, Y)`._

### Tags

* Rewrite8 migration

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/recipes/MigrateTestToRewrite8.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.3

## Example


{% tabs %}
{% tab title="org/openrewrite/java/migrate/Test.java" %}

###### Before
{% code title="org/openrewrite/java/migrate/Test.java" %}
```java
package org.openrewrite.java.migrate;

import org.junit.jupiter.api.Test;
import org.openrewrite.java.JavaParser;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;
import org.openrewrite.text.ChangeText;

import static org.openrewrite.test.SourceSpecs.text;

class Test implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(new ChangeText("foo").doNext(new ChangeText("bar")))
          .parser(JavaParser.fromJavaVersion()
            .classpath(JavaParser.runtimeClasspath())
          );
    }

    @Test
    void changeText() {
        rewriteRun(
          spec -> spec.expectedCyclesThatMakeChanges(2)
            .recipe(new ChangeText("foo")
              .doNext(new ChangeText("bar"))
              .doNext(new ChangeText("baz"))
            ),
          text(
            "hello", "baz"
          )
        );
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/java/migrate/Test.java" %}
```java
package org.openrewrite.java.migrate;

import org.junit.jupiter.api.Test;
import org.openrewrite.java.JavaParser;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;
import org.openrewrite.text.ChangeText;

import static org.openrewrite.test.SourceSpecs.text;

class Test implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipes(new ChangeText("foo"), new ChangeText("bar"))
          .parser(JavaParser.fromJavaVersion()
            .classpath(JavaParser.runtimeClasspath())
          );
    }

    @Test
    void changeText() {
        rewriteRun(
          spec -> spec.expectedCyclesThatMakeChanges(2).recipes(new ChangeText("foo"), new ChangeText("bar"), new ChangeText("baz")),
          text(
            "hello", "baz"
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
--- org/openrewrite/java/migrate/Test.java
+++ org/openrewrite/java/migrate/Test.java
@@ -14,1 +14,1 @@
    @Override
    public void defaults(RecipeSpec spec) {
-       spec.recipe(new ChangeText("foo").doNext(new ChangeText("bar")))
+       spec.recipes(new ChangeText("foo"), new ChangeText("bar"))
          .parser(JavaParser.fromJavaVersion()
@@ -23,5 +23,1 @@
    void changeText() {
        rewriteRun(
-         spec -> spec.expectedCyclesThatMakeChanges(2)
-           .recipe(new ChangeText("foo")
-             .doNext(new ChangeText("bar"))
-             .doNext(new ChangeText("baz"))
-           ),
+         spec -> spec.expectedCyclesThatMakeChanges(2).recipes(new ChangeText("foo"), new ChangeText("bar"), new ChangeText("baz")),
          text(
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.recipes.MigrateTestToRewrite8")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.recipes.MigrateTestToRewrite8</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.recipes.MigrateTestToRewrite8
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.recipes.MigrateTestToRewrite8)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
