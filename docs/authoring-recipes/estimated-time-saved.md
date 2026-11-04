---
sidebar_label: Estimated time saved
description: Describes how estimated time saved works and how to define a custom number.
---

# Estimated time saved when running recipes

Every OpenRewrite recipe can be configured to define how much time will be saved by running the recipe instead of manually performing the task. Configuring this is particularly useful for large codebases where people may run many complex recipes at once. For many companies, this is a key metric that they use to measure the effectiveness of their codebase maintenance and modernization efforts.

In this doc, we will walk you through everything you need to know to configure and use this functionality.

## How estimated time saved is calculated

Every recipe declares an estimated effort per occurrence: how long it would take a developer to make the change by hand, open a pull request, get it reviewed, and merge and deploy it. The estimate does not include the time it would take to find the code that needs changing, which on a large codebase with only a few matches can take far longer than the change itself.

An occurrence is a source file changed by a recipe. The estimated time saved by a run is:

```
estimated time saved = sum over every changed source file of
                         the estimated effort of each recipe that changed that file
```

This has a few consequences worth knowing when you interpret the numbers:

* **Several edits in one file count once.** A recipe that changes 40 method calls in a single file is credited once for that file, whereas the same 40 changes spread over 40 files are credited 40 times.
* **Several recipes in one file count separately.** If three recipes each change the same file, that file is credited with the estimate of each of the three recipes.
* **Only the recipes that make the change count.** For a composite recipe, such as a declarative recipe with a `recipeList`, the estimate comes from the recipes in that list that changed the file. The composite recipe itself does not add to the total, so an `estimatedEffortPerOccurrence` set on a declarative recipe does not affect the estimated time saved.

Because of this, the estimated time saved is best treated as a conservative figure that is consistent from one run to the next, rather than a precise measure of effort.

## Customizing estimated time saved

To customize the estimated time savings for a recipe, you will need to override the `Recipe#getEstimatedEffortPerOccurrence` method. Below is an example of what this might look like:

```java
public class MyCustomRecipe extends Recipe {
    @Override
    public Duration getEstimatedEffortPerOccurrence() {
        return Duration.ofMinutes(10);
    }
}
```

Always return the same value from this method. A single recipe instance is shared across all the repositories and threads of a run, and the value is read more than once while the results are recorded, so a value that depends on the code being changed will not be applied the way you expect.

### Setting the effort on a Lombok `@Value` recipe

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

## Default estimated time saved

If you don't specify otherwise, every imperative recipe will default to saying it saved 5 minutes of time – which we believe is a reasonable estimate for most recipes. Many recipes override this default; most estimates fall between 1 and 15 minutes.

Declarative recipes default to 0 minutes, which has no effect on the total: the recipes in their `recipeList` contribute their own estimates.

## Viewing the estimated time saved after running a recipe

After running a recipe, you can view the estimated time saved in the [`Source files that had results` data table](./data-tables.md) (`org.openrewrite.table.SourcesFileResults`). This table has a row for each source file and each recipe that changed it, and the `Estimated time saving` column holds that recipe's estimated effort in seconds. Rows for composite recipes have an estimated time saving of 0, so the sum of the column is the estimated time saved by the run. You can group the rows by recipe or source path to see where that time comes from.
