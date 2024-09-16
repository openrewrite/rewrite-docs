# Migrate to AssertJ from JUnit Asserts

In this tutorial, we'll use OpenRewrite to perform an automated migration from [JUnit Asserts](https://junit.org/junit4/javadoc/4.13/org/junit/Assert.html) to [AssertJ](https://assertj.github.io/doc/). AssertJ is a Java library that provides a rich set of assertions and truly helpful error messages, improves test code readability, and is designed to be super easy to use within your favorite IDE.

## Example Configuration

The migrate to AssertJ recipe can be applied by adding OpenRewrite's plugin to your project and including a dependency on [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks):

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.openrewrite.maven</groupId>
      <artifactId>rewrite-maven-plugin</artifactId>
      <version>5.40.2</version>
      <configuration>
        <activeRecipes>
          <recipe>org.openrewrite.java.testing.assertj.JUnitToAssertj</recipe>
        </activeRecipes>
      </configuration>
      <dependencies>
        <dependency>
          <groupId>org.openrewrite.recipe</groupId>
          <artifactId>rewrite-testing-frameworks</artifactId>
          <version>2.18.0</version>
        </dependency>
      </dependencies>
    </plugin>
  </plugins>
<build>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
    plugins {
        id("java")
        id("org.openrewrite.rewrite") version("6.23.3")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.java.testing.assertj.JUnitToAssertj")
    }
    
    repositories {
        mavenCentral() // rewrite-spring is published to Maven Central
    }
    
    dependencies {
        rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks")
    
        // Other project dependencies
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the full list of changes, this recipe will make, see its [reference page](/reference/recipes/java/testing/assertj/junittoassertj.md).

{% tabs %}
{% tab title="JUnit Assert Test Class (Before)" %}
```java
package org.openrewrite.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ExampleJunitTestClass {

    @Test
    void someTest() {
        try {
            QueryRegistry queryRegistry = new QueryRegistry.Builder().build();
            fail();
        } catch (IllegalArgumentException ignored) {
        }

        // ...

        assertEquals(1, currentSubs.size());
        assertEquals("myPrefix_subId", currentSubs.get(0).getSubscriptionId());
        assertTrue(allSubscriptions.containsKey("myApp"));
    }

    @Test
    void shouldFailToInitializeWithMissingTable() {
        when(catalog.loadTable(any())).thenThrow(new RuntimeException());
        IcebergWriterStage stage = new IcebergWriterStage();
        assertThrows(RuntimeException.class, () -> stage.init(context));
    }
}
```
{% endtab %}

{% tab title="AssertJ Test Class (After)" %}
```java
package org.openrewrite.example;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatExceptionOfType;

public class ExampleJunitTestClass {

    @Test
    void someTest() {
        try {
            QueryRegistry queryRegistry = new QueryRegistry.Builder().build();
            fail("");
        } catch (IllegalArgumentException ignored) {
        }

        // ...

        assertThat(currentSubs.size()).isEqualTo(1);
        assertThat(currentSubs.get(0).getSubscriptionId()).isEqualTo("myPrefix_subId");
        assertThat(allSubscriptions.containsKey("myApp")).isTrue();
    }

    @Test
    void shouldFailToInitializeWithMissingTable() {
        when(catalog.loadTable(any())).thenThrow(new RuntimeException());
        IcebergWriterStage stage = new IcebergWriterStage();
        assertThatExceptionOfType(RuntimeException.class).isThrownBy(() -> stage.init(context));
    }
}
```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.JUnitToAssertj)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.