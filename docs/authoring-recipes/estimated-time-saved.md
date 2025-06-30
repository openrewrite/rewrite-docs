---
sidebar_label: Estimated time saved
description: Describes how estimated time saved works and how to define a custom number.
---

# Estimated time saved when running recipes

Every OpenRewrite recipe can be configured to define how much time will be saved by running the recipe instead of manually performing the task. Configuring this is particularly useful for large codebases where people may run many complex recipes at once. For many companies, this is a key metric that they use to measure the effectiveness of their codebase maintenance and modernization efforts.

In this doc, we will walk you through everything you need to know to configure and use this functionality.

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

You can decide to return a static value or a dynamic value based on the context of the recipe. For example, you could return a different value based on the size of the codebase or the number of files that will be modified by the recipe.

:::warning
Many OpenRewrite recipes use the `@Value` Lombok annotation – which adds the `final` modifier to the class declaration. Therefore, the method `Recipe#getEstimatedEffortPerOccurrence` cannot be overridden and the [default estimated time saved value](#default-estimated-time-saved) will be used.
:::

## Default estimated time saved

If you don't specify otherwise, every recipe will default to saying it saved 5 minutes of time – which we believe is a reasonable estimate for most recipes.

## Viewing the estimated time saved after running a recipe

After running a recipe, you can view the estimated time saved in the `SourcesFileResults` table. The `estimatedTimeSaving` column will show the total time saved for all occurrences of the recipe that were run in seconds. This value is calculated by multiplying the number of occurrences of the recipe by the estimated time saved per occurrence.