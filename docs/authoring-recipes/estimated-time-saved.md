---
description: Describes how estimated time saved works and how to define a custom number.
---

# Estimated time saved when running recipes

Estimated time saved is a feature that allows you to define how much time will be saved by running a recipe in comparison to performing the task manually. This is particularly useful for large codebases where running multiple recipes can perform a variety of operations. For many companies, this is a key metric that they use to measure the effectiveness of their codebase maintenance and modernization efforts.

## The default estimated time saved

Every recipe implementation can produce a number for "time saved" by returning a value for the method `Recipe#getEstimatedEffortPerOccurrence`. The value for any recipe returned by this method is 5 minutes by default if you don't override the method. The default value of 5 minutes is a reasonable estimate for most recipes, as it allows for a quick and easy way to measure the "time saved" when running multiple recipes.

:::tip
At this time, many of the OpenRewrite recipes in the [catalog](https://docs.openrewrite.org/recipes) use Lombok annotations which add the `final` modifier to the class declaration. Therefore, the method `Recipe#getEstimatedEffortPerOccurrence` cannot be overridden.
:::

## Customizing the estimated time saved

Recipe implementations can override the `Recipe#getEstimatedEffortPerOccurrence` method to return a custom value for the estimated time saved. This allows you to define a more accurate estimate for the time saved when running your custom recipe.

```java
public class MyCustomRecipe extends Recipe {
    @Override
    public Duration getEstimatedEffortPerOccurrence() {
        return Duration.ofMinutes(10);
    }
}
```

You can decide to return a static value or a dynamic value based on the context of the recipe. For example, you could return a different value based on the size of the codebase or the number of files that will be modified by the recipe.