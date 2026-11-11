---
sidebar_label: Estimated time saved
description: Describes how estimated time saved is calculated and how to set it.
---

# Estimated time saved when running recipes

[Imperative OpenRewrite recipes](./types-of-recipes.md#imperative-recipes) can be configured to define how much time will be saved by running the recipe instead of manually performing the task. Configuring this is particularly useful for large codebases where people may run many complex recipes at once. For many companies, this is a key metric that they use to measure the effectiveness of their codebase maintenance and modernization efforts.

To help you make sense of and configure this functionality, this doc will explain the context behind this number and how you can configure it in your own recipes.

## What estimated time saved means

Estimated time saved is the number of minutes it would take a developer to manually change a file, open a pull request, get it reviewed, merge it in, and then deploy it.

It **does not** include the time it takes to find the code that needs to be changed. Oftentimes, in large codebases where there are only a few matches, manually finding the problematic code can take longer than changing it.

Because of that, treat the total estimated time savings as a _conservative_ figure. It is most useful for comparing one run with another.

## How estimated time saved is calculated

At a high level, estimated time savings works like this:

1. You trigger a recipe run on one or more repositories.
2. The recipe runs and makes numerous changes across many different files.
3. At the end, we look at the number of files that were changed and multiply it by the recipe's estimated effort per occurrence. That value becomes the time savings.
4. If multiple recipes were run, we sum each recipe's time savings together for the total time saved.

Let's say that a recipe says that it will save 5 minutes per occurrence (the default value). If you ran that recipe, and it made 40 edits in a _single_ file - the total time savings would be 5 minutes.

Now let's say you ran the recipe, and it made edits across _40 files_ - the time savings would be 200 minutes (40 * 5).

A file counts as changed when its text or its path differs after the run. Search markers count, since they print into the file as comments. On the other hand, a recipe that only updates a marker that does not print (such as the Gradle version recorded on a file) does not count.

## Setting the estimate

Every recipe type handles estimated time savings differently. We'll go into each below.

### Imperative recipes

By default, imperative recipes have an estimated time savings of 5 minutes. If you want to change this value, override the `Recipe#getEstimatedEffortPerOccurrence` method:

```java
public class MyCustomRecipe extends Recipe {
    @Override
    public Duration getEstimatedEffortPerOccurrence() {
        return Duration.ofMinutes(10);
    }
}
```

:::warning
Always return the same fixed value from this method.

This method has no access to the code that is being changed. It is called when the recipe descriptor is built and again when each result is recorded. Additionally, a single recipe instance may be shared across repositories and threads.

Trying to return a value that changes from one call to the next will not work as you may hope.
:::

Many OpenRewrite recipes use the `@Value` Lombok annotation, which generates a getter for every field. Rather than writing the override by hand, declare an initialized `estimatedEffortPerOccurrence` field and let Lombok generate the `getEstimatedEffortPerOccurrence()` method that satisfies the `Recipe` contract – the same way `displayName` and `description` are declared:

```java
@Value
@EqualsAndHashCode(callSuper = false)
public class MyCustomRecipe extends Recipe {

    String displayName = "My custom recipe";
    String description = "Does something useful.";
    Duration estimatedEffortPerOccurrence = Duration.ofMinutes(10);

    // ...
}
```

### Declarative recipes

Declarative recipes do not have an estimated time savings of their own, as they do not change files directly. Instead, their time savings is the sum of the estimates of the recipes in their `recipeList`. 

:::note
The YAML format accepts an `estimatedEffortPerOccurrence` field, but its value is never counted.
:::

### Refaster recipes

Refaster recipes have no way to set the estimate. Because of that, each of these recipes defaults to 5 minutes of estimated time saved.

## Viewing the estimated time saved after running a recipe

After running a recipe, you can view the estimated time saved in the `Source files that had results` [data table](./data-tables.md) (`org.openrewrite.table.SourcesFileResults`). The table has one row for each source file and each recipe that changed it. The table contains an `Estimated time saving` column that is how many _seconds_ that recipe saved on that file.

When a recipe runs as part of a declarative or other composite recipe, the table also has a row for each parent recipe. Those rows will always have an estimated time savings of 0. Summing the column gives the total for the run.
