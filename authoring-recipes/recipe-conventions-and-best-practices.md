---
description: Conventions to follow, pitfalls to avoid
---

# Recipe Conventions and Best Practices

[Recipes](../concepts-and-explanations/recipes.md) use [Visitors](../concepts-and-explanations/visitors.md) to operate on diverse and unexpected [LSTs](../concepts-and-explanations/lossless-semantic-trees.md). This document describes an assortment of conventions, best practices, and pitfalls to avoid to create reliable, scalable recipes.

### Do No Harm

If your Recipe cannot determine that a change is safe to make, such as when a type you're looking for is unavailable, it is always preferable to make no change than to make the wrong change. Relatedly, when making changes always strive to make the most minimal, least invasive version of that change. Keeping changes minimal makes for easy-to-review diffs and higher rates of pull request acceptance. A change that unnecessarily clobbers formatting or is otherwise overly broad will burden code reviewers and drastically reduce the rate at which they accept changes.

{% hint style="success" %}
RewriteTest helps you to verify that your recipe does not make unnecessary changes by running your recipe in a loop. If you see your change being made many times it is likely your visitor fails to avoid making unnecessary changes.
{% endhint %}

{% hint style="info" %}
When authoring your tests always remember to test that changes aren't made when they shouldn't be.
{% endhint %}

### Naming conventions

Recipes should always have a non-blank description. Recipe parameters should always have a fully filled-out `@Option` annotation. This metadata is used when generating documentation, when build plugins display recipe information in their discover action, and in the [Moderne saas](https://app.gitbook.com/s/JC9dRbwVINQjAyoDyBuW/alerts).

Recipe names, descriptions, and parameters should follow our [recipe naming conventions](https://github.com/openrewrite/rewrite/blob/main/doc/adr/0002-recipe-naming.md).

### If it can be declarative, it should be declarative

If your Recipe exists only to aggregate other recipes together in a unit, it is preferable to include it as a [declarative YAML recipe](../reference/yaml-format-reference.md) rather than as code.

### Recipes must be configurable with simple, JRE-provided types

Recipes may be configured in code, from YAML, or from a web interface. If your recipe is configured with complex types this becomes untenable and your recipe's interoperability and utility will be reduced. If the implementation of a visitor is simplified by using complex types, then it is the job of the recipe to assemble those more complex types out of the simple types it is configured with.

{% hint style="warning" %}
Recipe options that are configured with `String` parameters should generally treat the empty string and `null` similarly. Depending on the front-end which configures the recipe either value may be used to represent omitted configuration.
{% endhint %}

### Be deliberate about LST traversal

As the author of a visitor, the traversal of the LST is in your hands. Calling `super.visitSomeLstElement()` is what causes the traversal of sub-elements of the current element to happen. So if you know that no traversal of sub-elements will be necessary, you can skip this call entirely to improve the performance of your recipe. Usually, it is most convenient to call at the beginning of each visit method you implement.

### Use Applicability Tests

Most recipes are not universally applicable to every source file. Often you can know ahead of time that your recipe will not need to modify source files where a particular type is not present. If the visitor returned from `Recipe.getSingleSourceApplicableTest()` makes any change to the LST, that is interpreted as an "affirmative" result that the Recipe is applicable to the LST. Use `Applicability.and()`, `Applicability.or()`, and `Applicability.not()` to create more complex applicability criteria from simple building blocks.

Using applicability tests can simplify the implementation of your recipe by separating the code which detects "should a change be made" from the code which enacts "making the change". This enhances readability, simplifying debugging and maintenance.

{% hint style="info" %}
Applicability tests are most worthwhile when they can cheaply prevent a visitor from running unnecessarily.
{% endhint %}

{% hint style="warning" %}
`Recipe.getApplicableTest()` returning an affirmative result for _any_ source file marks the recipe as applicable to _all_ source files. For most recipes `Recipe.getSingleSourceApplicableTest()` is the appropriate method to overload.
{% endhint %}

### Recipe and LST immutability

Recipes must have no mutable state. `Recipe.getVisitor()` must always return a brand new visitor instance. During recipe execution the same recipe may be invoked multiple times, possibly on sources it has seen before, so any mutable state is an opportunity for bugs. During test execution recipe execution is single-threaded for simplicity, but outside of tests recipe execution is parallelized. Following this rule is essential for OpenRewrite to operate reliably and correctly.

{% hint style="warning" %}
All LST fields should be treated as immutable, even in certain circumstances where mutation is _technically_ possible it is always a bug for a recipe to mutate those fields.
{% endhint %}

OpenRewrite detects that a visitor/recipe has made a change based on referential equality. Mutating an LST foils this detection, and can potentially cause incorrect diffs to be created.

### Use ListUtils for collections manipulation

Since referential equality is so important for OpenRewrite to detect changes, typical collection creation and manipulation patterns like newing up your own collection or using Java streams are usually a mistake. Instead, we provide the `ListUtils` class which provides referential-equality conscious data access and manipulation faculties that avoid unnecessary memory allocations.

### Nullability matters

Throughout our LSTs and other APIs, we have been careful to use Java's nullability annotations to indicate whether a field is nullable or not. If a field is nullable then there _will_ be LSTs where that field is null. To operate correctly on the wildly diverse code which exists throughout the world, Recipe/Visitors must decline to make changes when a field they need to make changes is null.

### Avoid constructing LST elements by hand

Even very simple pieces of code have complex LST representations which are tedious and error-prone to construct by hand. With your visitor, prefer faculties like [JavaTemplate](../concepts-and-explanations/javatemplate.md) to turn code snippets into LST elements. In data formats like XML or JSON it is usually most convenient to use the format's parser to turn a snippet of text into usable LST elements.

### Prefer Cursor Messaging to Execution Context Messaging

There are a few ways to pass state around within and between visitors. All Recipes in a run will have the same `ExecutionContext` object passed between them, and it contains a map into which any recipe may read or write arbitrary data. Similarly, the `Cursor` object returned by `TreeVisitor.getCursor()` has a map into which any recipe may read or write arbitrary data. The difference is that the `Cursor` is a stack that keeps track of a visitor's current progress through an LST and is thrown away after all visiting is complete. Because the data in `ExecutionContext` lives for the span of the recipe run, and on into separate cycles, it can potentially change the behavior of other recipes. So whenever communication is needed but only within the current visitor or recipe, the cursor stack should be used instead of adding messages to the execution context.

### Stay Single Cycle

OpenRewrite executes recipes in a loop, each iteration of that loop through the full recipe list is called a cycle. This is so that if one recipe makes a change another recipe would respond to it can have a chance to do so, regardless of the order they are executed in. By default only a single cycle is executed, unless some recipe in the group overrides `Recipe.causesAnotherCycle()` to return `true`. For larger recipes, such as a framework migration, the performance impact of causing another cycle can be substantially detrimental. Whenever possible a recipe should complete all of its work the first time, avoiding overriding `Recipe.causesAnotherCycle()` if at all possible.
