# Types of recipes

Before you jump into coding recipes, it's important to figure out what type of recipe you're going to make.

OpenRewrite offers support for three different types of recipes: declarative, refaster, and imperative. Each of these has its own advantages and disadvantages depending on the type of recipe you want to build. 

In this doc, we'll briefly describe each of these so that you can determine what type of recipe works best for your needs. 

## Declarative recipes

[Declarative recipes](/reference/yaml-format-reference.md) are the simplest and most common recipes. They are entirely written in YAML, and they generally tie together existing recipes while adding some light configuration to them.

The [common static analysis recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/common-static-analysis.yml) is a great example of this. It takes a bunch of simple recipes relating to static analysis and combines them into one larger recipe that can be run more easily. It does not add any logic, and it doesn't change the existing recipes.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CommonStaticAnalysis
displayName: Common static analysis issues
description: Resolve common static analysis issues discovered through 3rd party tools.
recipeList:
  - org.openrewrite.staticanalysis.AtomicPrimitiveEqualsUsesGet
  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.staticanalysis.BooleanChecksNotInverted
  - org.openrewrite.staticanalysis.CaseInsensitiveComparisonsDoNotChangeCase
  - org.openrewrite.staticanalysis.CatchClauseOnlyRethrows
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  # ...
---
```

{% hint style="success" %}
As a best practice, if your recipe can be declarative (meaning it can be built out of other recipes), then you should make it declarative.
{% endhint %}

## Refaster templates

Refaster templates are the "middle ground" of recipes. They offer more functionality than [declarative recipes](#declarative-recipes), but not as much as [imperative recipes](#imperative-recipes). On the other hand, compared to an imperative recipe, they're much quicker to create and require much less knowledge to get started.

Refaster templates are ideal for straightforward replacements such as converting `StringUtils.equals(..)` to `Objects.equals(..)`. These are more than just a string replacement, though; they offer compiler and type support.

Refaster templates can also be used as a starting point for more complex recipe implementations. This is due to the fact that, when you define a refaster template, an imperative recipe is what is actually created behind the scenes. You can find these imperative recipes in the `build` directory after you've built your repository.

A variety of refaster templates can be found in the [StringRules](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.1.1/src/main/java/org/openrewrite/java/migrate/lang/StringRules.java#L23-L48) class in `rewrite-migrate-java`:

```java
@RecipeDescriptor(
        name = "Replace redundant `String` method calls with self",
        description = "Replace redundant `substring(..)` and `toString()` method calls with the `String` self."
)
@SuppressWarnings("StringOperationCanBeSimplified")
public static class RedundantCall {
    @BeforeTemplate
    public String start(String string) {
        return string.substring(0, string.length());
    }

    @BeforeTemplate
    public String startAndEnd(String string) {
        return string.substring(0);
    }

    @BeforeTemplate
    public String toString(String string) {
        return string.toString();
    }

    @AfterTemplate
    public String self(String string) {
        return string;
    }
}
```

## Imperative recipes

[Imperative recipes](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe) offer the most freedom and functionality at the cost of being more difficult to create. They allow you to write Java code to implement your recipe.

Imperative recipes are ideal for situations where there is a lot of complexity or nuance needed to determine what should be changed or what it should be changed into. For instance, if you wanted to write a recipe that added the `final` modifier to any local variables that aren't reassigned, you would need to create an imperative recipe as refaster templates don't have the ability to determine whether a variable has been reassigned.

If your recipe can be defined via a declarative YAML file or via a refaster template, you should do so -- even if you can technically create an imperative recipe that does the same thing.

The [FinalizeLocalVariables recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/FinalizeLocalVariables.java) is a great example of an imperative recipe.

## Next steps

* If you want more information about the types of recipes and the recipe execution pipeline, please see our [recipes documentation](/concepts-and-explanations/recipes.md)
* If you want to write your own imperative recipe, please check out the [writing a Java refactoring recipe](/authoring-recipes/writing-a-java-refactoring-recipe.md) guide.