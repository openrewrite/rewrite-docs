---
description: Conventions to follow, pitfalls to avoid
---

# Recipe conventions and best practices

To help you create reliable and scalable recipes, this document will describe an assortment of conventions and best practices to keep in mind when making new recipes.

## Prerequisites

To get the most use out of this document, it would be beneficial for you to:

* Be familiar with the [Recipe Development Environment](recipe-development-environment.md)
* Know how to [create](writing-a-java-refactoring-recipe.md) and [test](recipe-testing.md) recipes
* Understand how [recipes](../concepts-and-explanations/recipes.md) work at a high level (by using [visitors](../concepts-and-explanations/visitors.md) to operate on diverse and unexpected [LSTs](../concepts-and-explanations/lossless-semantic-trees.md))

## Best practices

### Do no harm

One of the most important conventions to keep in mind when creating recipes is the concept of "Do no harm". If your recipe cannot determine that a change is safe, **it should make no changes rather than making a potentially wrong change**.

For example, in the [RenameLocalVariableToCamelCase recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameLocalVariablesToCamelCase.java), we prevent the recipe from renaming variables to a name that _could_ be a namespace conflict. Likewise, we opt out of renaming class fields since they _might_ be in use by some downstream API. We favor making fewer changes over making wrong changes.

Relatedly, when making changes, always strive to make the most minimal, least invasive version of that change. For instance, in the [NoGuavaImmutableSetOf recipe](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaImmutableSetOf.java), we restrict the recipe from changing any code that does not use at least Java 9.

By reducing a recipe's scope and minimizing the number of changes a recipe makes, you'll make it easier for others to review the changes. This, in turn, will result in more pull requests being accepted and more trust in your recipes.

On the other hand, a change that unnecessarily clobbers formatting or is otherwise overly broad in scope will burden code reviewers and drastically reduce the rate at which they accept changes.

{% hint style="success" %}
[RewriteTest](recipe-testing.md#rewritetest-interface) helps you to verify that your recipe does not make unnecessary changes by running your recipe over multiple cycles. If you see your change being made many times it is likely your visitor fails to avoid making unnecessary changes. See the [cycle section](recipe-conventions-and-best-practices.md#stay-single-cycle) for more information.
{% endhint %}

{% hint style="info" %}
When authoring your tests, always remember to test that changes aren't made when they shouldn't be. For instance, if your recipe only affects a certain package, make sure you include a test that shows that other packages are unaffected.
{% endhint %}

### Naming conventions

All recipe names, descriptions, and parameters should follow our [recipe naming conventions](https://github.com/openrewrite/rewrite/blob/main/doc/adr/0002-recipe-naming.md).

By following these conventions, you'll ensure that:

* The [documentation](../reference/recipes/) generated for your recipe is valid and clear to others
* The [Moderne platform](https://app.moderne.io/) can accurately filter and display your recipe and its parameters

### If it can be declarative, it should be declarative

Before you begin writing a new recipe, take the time to examine existing recipes. You may find that what you want to do can be done by combining existing recipes without writing any code. You can achieve this by creating a [declarative YAML](/reference/yaml-format-reference.md) file.

For instance, let's say you wanted to create a recipe that combines the functionality of numerous other static analysis recipes. You _could_ [imperatively code](https://gist.github.com/mike-solomon/a57a7f685bf8213d98162d57406cf8ae) a new recipe that calls one recipe after the next. However, that approach is strongly discouraged. Instead, you should [declaratively list out](https://gist.github.com/mike-solomon/95fa160b2ee07baf2256d57884321621) each recipe you want to run in a YAML file. In doing so, you will not only save time, but you will also substantially reduce the number of potential errors.

If your recipe can be declarative, it should be.

{% hint style="info" %}
For more information on imperative and declarative recipes, please read the [Recipe documentation](../concepts-and-explanations/recipes.md). Or if you want to learn how to configure a declarative YAML file, please read our [declarative YAML format doc](/reference/yaml-format-reference.md).
{% endhint %}

### Be deliberate about LST traversal

As the author of a [visitor](../concepts-and-explanations/visitors.md), the traversal of the [Lossless Semantic Tree](../concepts-and-explanations/lossless-semantic-trees.md) (LST) is in your hands. This traversal through the sub-elements can be achieved by calling a method like `super.visitSomeLstElement()`.

For instance, let's say you were creating a recipe that adds the `public` visibility modifier to a [ClassDeclaration](../concepts-and-explanations/lst-examples.md#classdeclaration). If you did not call `super.visitClassDeclaration()` in your overridden `visitClassDeclaration` method, then your recipe would not visit or check for inner classes. It's _possible_ this is what you want, but it's also possible that this is a bug.

By not calling `super.visitSomeLstElement()`, you will often improve the performance of your recipe. However, in many cases, that could be a confusing bug. It's your responsibility to take the time to think through these options and decide one way or another.

{% hint style="success" %}
If you do decide to include `super.visitSomeLstElement()`, it is often most convenient to do so at the beginning of each `visit` method you override.
{% endhint %}

### Use preconditions

Most recipes are not universally applicable to every source file. For instance, a recipe that makes changes to a method introduced in Java 17 would not be useful to run on Java 8 code. Likewise, a recipe that works with ArrayLists would not apply to a file that does not contain an ArrayList.

Instead of running your recipe on every file, you can have your recipe provide some context on when it should be run. By doing so, you'll not only make it so your recipe can be run on more files more quickly, but you'll also enhance the readability of your recipe. That, in turn, simplifies debugging and maintenance and leads to better recipes.

To do this, you'll want to utilize the [Preconditions.check() method](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/Preconditions.java#L30).

For instance, in the [MigrateCollectionsSingletonSet recipe](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.1/src/main/java/org/openrewrite/java/migrate/util/MigrateCollectionsSingletonSet.java#L44-L45), we add a check that ensures the Java version is 9 and that the file contains a `singleton` method. We can be confident that this recipe won't make changes if those preconditions do not apply.

You can use [Preconditions.and(), Preconditions.or(), and Preconditions.not()](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/Preconditions.java#L79-L123) to create more complex applicability criteria from simple building blocks.

{% hint style="success" %}
Preconditions are most worthwhile when they can cheaply prevent a visitor from running unnecessarily.
{% endhint %}

### Recipe and LST immutability

Recipes must have no mutable state. Likewise, `Recipe.getVisitor()` must always return a brand-new visitor instance. This is because, during recipe execution, the same recipe may be invoked multiple times, possibly on sources it has seen before. Any mutable state could lead to strange and confusing bugs. Following this rule is essential for OpenRewrite to operate reliably and correctly.

{% hint style="info" %}
During test execution, recipe execution is single-threaded for simplicity. However, outside of tests, recipe execution is parallelized.
{% endhint %}

Also note that, inside the `Recipe.getVisitor()` method, all LST fields (such as the [Body](https://github.com/openrewrite/rewrite/blob/v7.33.0/rewrite-java/src/main/java/org/openrewrite/java/tree/J.java#L1161) on a [Class Declaration](../concepts-and-explanations/lst-examples.md#classdeclaration)) should be treated as immutable. Even if there are certain circumstances where mutating these fields is _technically_ possible, it is **always** a bug for a recipe to mutate those fields.

OpenRewrite detects that a visitor/recipe has made a change based on referential equality. Mutating fields on an LST breaks this detection, and can potentially cause incorrect diffs to be created.

### Use ListUtils for collections manipulation

Since referential equality is so important for OpenRewrite to detect changes, typical collection creation and manipulation patterns like newing up your own collection or using Java streams are usually a mistake. Instead, we provide the `ListUtils` class which provides referential-equality conscious data access and manipulation faculties that avoid unnecessary memory allocations.

For instance, in the [UnnecessaryCatch recipe](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-java/src/main/java/org/openrewrite/java/cleanup/UnnecessaryCatch.java), we [utilize ListUtils.flatMap](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-java/src/main/java/org/openrewrite/java/cleanup/UnnecessaryCatch.java#L50-L57) to flatten all of the statements in a block down to one level. We then make changes if that statement matches a `J.Try` via a `ListUtils.map` method.

If we used a typical Java stream, regardless of whether or not there were any changes, we'd end up with a newly allocated list. This would lead to OpenRewrite incorrectly saying that there were changes even if our recipe did not intend to make any.

### Nullability matters

Throughout our LSTs and other APIs, we have been careful to use Java's nullability annotations to indicate whether a field is nullable or not. If a field is nullable then there _will_ be LSTs where that field is null. To operate correctly on the wildly diverse code which exists throughout the world, Recipe/Visitors must not make changes if a field they need is null.

### Week Year ("YYYY") should not be used for date formatting

If your recipe is going to work with dates, please ensure that you adhere to [RSPEC-3986](https://rules.sonarsource.com/java/RSPEC-3986). Dates should be constructed with `y` for `Year` instead of `Y` for `Week Year`.

### Avoid constructing LST elements by hand

Even very simple pieces of code have complex LST representations which are tedious and error-prone to construct by hand. Never attempt to build up LSTs by hand. Instead, you should use faculties like [JavaTemplate](../concepts-and-explanations/javatemplate.md) to turn code snippets into [LST elements](../concepts-and-explanations/lst-examples.md). For data formats like XML or JSON, it is usually more convenient to use the format's parser to turn a snippet of text into usable LST elements.

### Stay single cycle

OpenRewrite executes recipes in a loop. Each iteration of that loop through the full recipe list is called a cycle. This is so that if one recipe makes a change and another recipe would do something based on that change, it will have a chance to do so. This happens regardless of the order the recipes are executed in.

By default, only a single cycle is executed unless some recipe in the group overrides `Recipe.causesAnotherCycle()` to return `true`. For larger recipes, such as a framework migration, the performance impact of causing another cycle can be substantially detrimental. Whenever possible, a recipe should complete all of its work the first time (which avoids the need to override `Recipe.causesAnotherCycle()`).

### State conventions

You should generally avoid passing [state](https://en.wikipedia.org/wiki/State\_\(computer\_science\)) across visitors if at all possible. If you do need to pass state around, though, you should first figure out which parts of your recipe need what information.

If you need to pass state between functions in the **same** visitor, then you should [use cursor messaging instead of execution context messaging](recipe-conventions-and-best-practices.md#prefer-cursor-messaging-to-execution-context-messaging).

If you need to pass state between **different** visitors, then you should [override the visit function](recipe-conventions-and-best-practices.md#override-the-visit-method-if-you-need-pass-state-between-visitors).

#### Use cursor messaging instead of execution context messaging

When passing state between functions in the same visitor, there are two main options: cursor messaging and execution context messaging.

Cursor messaging is the preferred method. With it, you can utilize `TreeVisitor.getCursor()` to access a map that arbitrary data can be read from or written to. For instance, in the [AddDependency recipe](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java), we pass data from the [overridden visitTag method](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L182) to the [overridden visitDocument method](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L196) in our `MavenVisitor`.

The `Cursor` object is a stack that keeps track of a visitor's current progress through an LST. Once everything has been visited in a particular [cycle](../concepts-and-explanations/recipes.md#execution-cycles), all of this information is then thrown away. There is no risk of this state leaking into places that you don't want.

The `ExecutionContext` object, on the other hand, has a few key differences that make it less suitable for most situations. All recipes in a run will have the same `ExecutionContext` object. This object contains a map, similar to the `Cursor`, that recipes can read from or write arbitrary data to. Unlike the `Cursor` map, though, this `ExecutionContext` map sticks around between recipe run cycles. This poses some considerable danger.

Imagine one recipe author decided to write a `foo` object to the `ExecutionContext` so that the `bar` and `bash` functions could both interact with it. Now, let's imagine another recipe author, unaware of the fact that the other recipe wrote a `foo` object to the `ExecutionContext`, also decides that their recipe should read and write to a `foo` object. If those recipes get chained together, both of those recipes could break.

Because of that, whenever shared state is needed within a single visitor or recipe, the cursor stack should be used instead of adding state to the execution context.

#### Override the visit method if you need pass state between visitors

If you need to pass state between different visitors in the same recipe, you should override the `Recile.visit(before, ExecutionContext)` function and create a variable whose scope is accessible to your visitors. For example, in the [AddDependency recipe](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java), we create a [scopeByProject Map](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L155) that is then shared between a [UsesTypes visitor](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L159-L164) and a [MavenVisitor](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L191).

Unlike the `ExecutionContext` mentioned above, this state will not carry over between cycles and there is, therefore, no risk of harming other recipes.
