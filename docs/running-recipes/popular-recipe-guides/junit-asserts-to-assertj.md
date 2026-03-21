---
sidebar_label: Migrate from JUnit Asserts to AssertJ
description: How to migrate from JUnit Asserts to AssertJ.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to AssertJ from JUnit Asserts

In this tutorial, we'll use OpenRewrite to perform an automated migration from [JUnit Asserts](https://junit.org/junit4/javadoc/4.13/org/junit/Assert.html) to [AssertJ](https://assertj.github.io/doc/). AssertJ is a Java library that provides a rich set of assertions and truly helpful error messages, improves test code readability, and is designed to be super easy to use within your favorite IDE.

## Example Configuration

The migrate to AssertJ recipe can be applied by adding OpenRewrite's plugin to your project and including a dependency on [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks):

<RunRecipe
  recipeName="org.openrewrite.java.testing.assertj.JUnitToAssertj"
  displayName="JUnit to AssertJ"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
/>

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

## Before and After

For the full list of changes, this recipe will make, see its [reference page](../../recipes/java/testing/assertj/junittoassertj.md).

<Tabs>
<TabItem value="junit-assert-test-class-before" label="JUnit Assert Test Class (Before)">

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
</TabItem>

<TabItem value="assertj-test-class-after" label="AssertJ Test Class (After)">

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
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.JUnitToAssertj" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.