---
sidebar_label: Migrate from Hamcrest to AssertJ
description: How to migrate from Hamcrest to AssertJ.
---

# Migrate to AssertJ from Hamcrest

In this tutorial, we'll use OpenRewrite to perform an automated migration from [Hamcrest](https://hamcrest.org/JavaHamcrest/) to [AssertJ](https://assertj.github.io/doc/#assertj-overview). AssertJ is more actively maintained than Hamcrest and is generally favored for testing assertions. 

## Configuration

Configure your repository according to the instructions on the [reference page](../../recipes/java/testing/assertj/assertj-best-practices.md). This is also where you'll find the full list of changes this recipe will make.

# Before and After

### Example test

#### Before

```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class BiscuitTest {
    @Test
    public void testEquals() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");

        assertThat(theBiscuit, equalTo(myBiscuit));
        assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
        assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
    }

    @Test
    public void otherExamples() {
        // ...

        assertThat(foo.get("id")).isEqualTo("test-data");
        assertThat(bar.size()).isEqualTo(1);
        assertThat(bash.get("one")).isEqualTo(1);
        assertThat(baz.size()).isEqualTo(concurrency * maxPerTask);
    }
}
```

#### After

```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BiscuitTest {
    @Test
    public void testEquals() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");

        assertThat(theBiscuit).isEqualTo(myBiscuit);
        assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
        assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }

    @Test
    public void otherExamples() {
        // ...

        assertThat(foo).containsEntry("id", "test-data");
        assertThat(bar).hasSize(1);
        assertThat(bash).containsEntry("one", 1);
        assertThat(baz).hasSize(concurrency * maxPerTask);
    }
}
```

## Running this recipe with the Moderne CLI

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command:

```shell title="shell"
mod run . --recipe org.openrewrite.java.testing.assertj.Assertj
```

If the recipe is not available locally, then you can install it using:

```shell title="shell"
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
