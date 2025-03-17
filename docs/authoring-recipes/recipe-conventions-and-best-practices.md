---
description: A list of important conventions and best practices to keep in mind when writing OpenRewrite recipes.
---

# Recipe conventions and best practices

To help you create reliable and scalable recipes, this document will describe an assortment of conventions and best practices to keep in mind when making new recipes.

## Prerequisites

To get the most use out of this document, it would be beneficial for you to:

* Be familiar with the [Recipe Development Environment](./recipe-development-environment.md)
* Know how to [create](./writing-a-java-refactoring-recipe.md) and [test](./recipe-testing.md) recipes
* Understand how [recipes](../concepts-and-explanations/recipes.md) work at a high level (by using [visitors](../concepts-and-explanations/visitors.md) to operate on diverse and unexpected [LSTs](../concepts-and-explanations/lossless-semantic-trees.md))

## Best practices

### Do no harm

One of the most important conventions to keep in mind when creating recipes is the concept of "Do no harm". If your recipe cannot determine that a change is safe, **it should make no changes rather than making a potentially wrong change**.

For example, in the [RenameLocalVariableToCamelCase recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameLocalVariablesToCamelCase.java), we prevent the recipe from renaming variables to a name that _could_ be a namespace conflict. Likewise, we opt out of renaming class fields since they _might_ be in use by some downstream API. We favor making fewer changes over making wrong changes.

Relatedly, when making changes, always strive to make the most minimal, least invasive version of that change. For instance, in the [NoGuavaImmutableSetOf recipe](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaImmutableSetOf.java), we restrict the recipe from changing any code that does not use at least Java 9.

By reducing a recipe's scope and minimizing the number of changes a recipe makes, you'll make it easier for others to review the changes. This, in turn, will result in more pull requests being accepted and more trust in your recipes.

On the other hand, a change that unnecessarily clobbers formatting or is otherwise overly broad in scope will burden code reviewers and drastically reduce the rate at which they accept changes.

:::tip
[RewriteTest](./recipe-testing#rewritetest-interface) helps you to verify that your recipe does not make unnecessary changes by running your recipe over multiple cycles. If you see your change being made many times it is likely your visitor fails to avoid making unnecessary changes. See the [cycle section](#stay-single-cycle) for more information.
:::

:::info
When authoring your tests, always remember to test that changes aren't made when they shouldn't be. For instance, if your recipe only affects a certain package, make sure you include a test that shows that other packages are unaffected.
:::

### Naming conventions

All recipe names, descriptions, and parameters should follow our [recipe naming conventions](https://github.com/openrewrite/rewrite/blob/main/doc/adr/0002-recipe-naming.md).

By following these conventions, you'll ensure that:

* The [documentation](../recipes/) generated for your recipe is valid and clear to others
* The [Moderne platform](https://app.moderne.io/) can accurately filter and display your recipe and its parameters

### If it can be declarative, it should be declarative

Before you begin writing a new recipe, take the time to examine existing recipes. You may find that what you want to do can be done by combining existing recipes without writing any code. You can achieve this by creating a [declarative YAML](../reference/yaml-format-reference.md) file.

For instance, let's say you wanted to create a recipe that combines the functionality of numerous other static analysis recipes. You _could_ [imperatively code](https://gist.github.com/mike-solomon/a57a7f685bf8213d98162d57406cf8ae) a new recipe that calls one recipe after the next. However, that approach is strongly discouraged. Instead, you should [declaratively list out](https://gist.github.com/mike-solomon/95fa160b2ee07baf2256d57884321621) each recipe you want to run in a YAML file. In doing so, you will not only save time, but you will also substantially reduce the number of potential errors.

If your recipe can be declarative, it should be.

:::info
For more information on imperative and declarative recipes, please read the [Recipe documentation](../concepts-and-explanations/recipes.md). Or if you want to learn how to configure a declarative YAML file, please read our [declarative YAML format doc](../reference/yaml-format-reference.md).
:::

### Be deliberate about LST traversal

As the author of a [visitor](../concepts-and-explanations/visitors.md), the traversal of the [Lossless Semantic Tree](../concepts-and-explanations/lossless-semantic-trees.md) (LST) is in your hands. This traversal through the sub-elements can be achieved by calling a method like `super.visitSomeLstElement()`.

For instance, let's say you were creating a recipe that adds the `public` visibility modifier to a [ClassDeclaration](../concepts-and-explanations/lst-examples.md#classdeclaration). If you did not call `super.visitClassDeclaration()` in your overridden `visitClassDeclaration` method, then your recipe would not visit or check for inner classes. It's _possible_ this is what you want, but it's also possible that this is a bug.

By not calling `super.visitSomeLstElement()`, you will often improve the performance of your recipe. However, in many cases, that could be a confusing bug. It's your responsibility to take the time to think through these options and decide one way or another.

:::tip
If you do decide to include `super.visitSomeLstElement()`, it is often most convenient to do so at the beginning of each `visit` method you override.
:::

### Use preconditions

Most recipes are not universally applicable to every source file. For instance, a recipe that makes changes to a method introduced in Java 17 would not be useful to run on Java 8 code. Likewise, a recipe that works with ArrayLists would not apply to a file that does not contain an ArrayList.

Instead of running your recipe on every file, you can have your recipe provide some context on when it should be run. By doing so, you'll not only make it so your recipe can be run on more files more quickly, but you'll also enhance the readability of your recipe. That, in turn, simplifies debugging and maintenance and leads to better recipes.

To do this, you'll want to utilize the [Preconditions.check() method](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/Preconditions.java#L30).

For instance, in the [MigrateCollectionsSingletonSet recipe](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.4/src/main/java/org/openrewrite/java/migrate/util/MigrateCollectionsSingletonSet.java#L44-L45), we add a check that ensures the Java version is 9 and that the file contains a `singleton` method. We can be confident that this recipe won't make changes if those preconditions do not apply.

You can use [Preconditions.and(), Preconditions.or(), and Preconditions.not()](https://github.com/openrewrite/rewrite/blob/v8.1.2/rewrite-core/src/main/java/org/openrewrite/Preconditions.java#L79-L123) to create more complex applicability criteria from simple building blocks.

:::tip
Preconditions benefit recipe execution performance when they efficiently prevent unnecessary execution of a more computationally expensive visitor.
:::

### Recipes must be idempotent and immutable

A recipe given the same LST and configuration should always produce the same results. This means that a recipe's behavior should _not_ be influenced by LSTs which have been visited previously, only the source file currently being visited.

:::warning
Mutable recipe state can be a source of strange and confusing bugs. If visiting a source file mutates your recipe's state then your recipe likely has a bug. Mutable state makes recipes more difficult to read, understand, test, debug, and maintain.&#x20;
:::

:::tip
Recipes extending [ScanningRecipe](../concepts-and-explanations/recipes.md#scanning-recipes) gather data from any or all LSTs via `ScanningRecipe.getScanner()`. That data is then available to use in the subsequent invocations of `ScanningRecipe.generate()` and `ScanningRecipe.getVisitor()`. Data is passed via a recipe-defined type conventionally referred to as an "accumulator". This is the only correct way to pass data from one LST to another.
:::

Since recipe options are configured via their constructors there are few valid reasons for recipes to have mutable fields. It is typical, but not required, that recipes use the `@lombok.Value` annotation to declare their fields as `final` and to generate a suitable constructor. &#x20;

To help prevent state from accidentally leaking between visits of different LSTs, `Recipe.getVisitor()` is called per source file, per cycle. `Recipe.getVisitor()` is required to always return a new, non-cached visitor instance.&#x20;

:::info
If you wish to cache the result of an expensive computation which does not affect Recipe idempotence, you can store the result in a `transient` field or the execution context. Recipe execution is single-threaded but the `transient` modifier will tell lombok not to generate a constructor parameter and jackson not to attempt to serialize the field.
:::

### Recipes must not mutate LSTs

OpenRewrite detects changes based on referential comparison of the LST passed into the recipe's visitor with the LST returned by the recipe's visitor. Recipes indicate that a source file should remain unchanged by returning exactly the same LST object as was passed in. Recipes indicate that a patch should be made to a source file by returning an LST which represents the desired state of the source file post-patch. Patches themselves are generated by diffing the original, unmodified LST with the new, different LST instance returned by the recipe.&#x20;

LSTs are mostly immutable by default, not exposing `set` methods for any field. Instead LSTs provide `with` methods which return a copy of the LST with a different value for the specified field. For example, you "change" the name of a class declaration by visiting it and using `J.ClassDeclaration.withName()` to return a new class declaration with everything the same except for the name.&#x20;

:::warning
A Recipe should never mutate a field on an LST. Mutating an LST may result patches that cannot be applied. Or worse: incomplete patches that _can_ be applied but omit required diffs.
:::

The most common way a recipe author runs afoul of this important requirement is to get a collection from an LST element and mutate it directly. For example, attempting to remove an argument from a method invocation by calling `method.getArguments().remove(0)`.

:::danger
The contents of collection fields on LST elements are not enforced to be immutable at runtime. Never directly mutate the contents of any collection that is a field of an LST.
:::

:::info
Visitors can remove LST elements by returning `null` when visiting the element to be removed.
:::

Conversely, visiting an LST and returning a copy whose fields are all identical to the original LST looks to OpenRewrite like a change when no change has been made. Typical consequences include excessive recipe execution time due to wasted computation, test failures, and empty patches/diffs. The most common way this happens is that a recipe author instantiates collections of LST elements directly, uses Java `streams`, Kotlin `sequences`, or similar methods. OpenRewrite provides the `ListUtils` class which includes referential-equality conscious data access and manipulation faculties that avoid unnecessary memory allocations.

For instance, in the [UnnecessaryCatch recipe](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-java/src/main/java/org/openrewrite/java/cleanup/UnnecessaryCatch.java), we [utilize ListUtils.flatMap](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-java/src/main/java/org/openrewrite/java/cleanup/UnnecessaryCatch.java#L50-L57) to flatten all of the statements in a block down to one level. We then make changes if that statement matches a `J.Try` with `ListUtils.map`. If this usage of `ListUtils` were replaced with a superficially equivalent Java `stream().map().collect()`, it would always allocate a new list and trigger OpenRewrite to detect and misreport an empty change where no real change was intended.

:::tip
No recipe/visitor should ever mutate any part of the LST passed into it.

A recipe/visitor making a change always returns a different LST than was passed into it.

A recipe/visitor making no change always returns the exact same LST that was passed into it.
:::

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

If you need to pass state between functions in the **same** visitor, then you could [use cursor messaging instead of execution context messaging](#use-cursor-messaging-instead-of-execution-context-messaging).

If you need to pass state between **different** visitors, then you could [use a ScanningRecipe](../concepts-and-explanations/recipes.md#scanning-recipes), where a first scanning phase can collect information, which you can then use in subsequent visitors.

### Use cursor messaging instead of execution context messaging

When passing state between functions in the same visitor, there are two main options: cursor messaging and execution context messaging.
If you merely wish to extract some information from visiting downstream elements, then you can also [use a local visitor with a mutable parameter](../concepts-and-explanations/visitors.md#sharing-data-between-visitors).

Cursor messaging is the preferred method. With it, you can utilize `TreeVisitor.getCursor()` to access a map that arbitrary data can be read from or written to. For instance, in the [AddDependency recipe](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java), we pass data from the [overridden visitTag method](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L182) to the [overridden visitDocument method](https://github.com/openrewrite/rewrite/blob/v7.34.3/rewrite-maven/src/main/java/org/openrewrite/maven/AddDependency.java#L196) in our `MavenVisitor`.

The `Cursor` object is a stack that keeps track of a visitor's current progress through an LST. Once everything has been visited in a particular [cycle](../concepts-and-explanations/recipes.md#execution-cycles), all of this information is then thrown away. There is no risk of this state leaking into places that you don't want.

The `ExecutionContext` object, on the other hand, has a few key differences that make it less suitable for most situations. All recipes in a run will have the same `ExecutionContext` object. This object contains a map, similar to the `Cursor`, that recipes can read from or write arbitrary data to. Unlike the `Cursor` map, though, this `ExecutionContext` map sticks around between recipe run cycles. This poses some considerable danger.

Imagine one recipe author decided to write a `foo` object to the `ExecutionContext` so that the `bar` and `bash` functions could both interact with it. Now, let's imagine another recipe author, unaware of the fact that the other recipe wrote a `foo` object to the `ExecutionContext`, also decides that their recipe should read and write to a `foo` object. If those recipes get chained together, both of those recipes could break.

Because of that, whenever shared state is needed within a single visitor or recipe, the cursor stack should be used instead of adding state to the execution context.

### Remember multi-module projects exist

One common mistake we see is people writing recipes that behaves as if there is only ever one project/module in a repository.

In reality, there are numerous repositories that have multiple projects in them. Each project has its own code and dependencies. They _may_ have a relationship with one another, but they also may have none.

This typically isn't an issue for recipes that operate on only a single file at a time, but `ScanningRecipe`s can unintentionally conflate repository-level information with project-level information.

Unit tests won't catch this mistake because you won't write a test for it unless you're already thinking about it.=

The `JavaProject` marker exists to help differentiate which project/module a particular `SourceFile` is associated with. These markers are added at parse time by the build plugins. In unit tests, however, they must be placed manually by the test author. Within a scanning recipe it is common to make a map of `Map<JavaProject, T>` to keep track of per-project information of type `T`.

A warning sign of this mistake is a `ScanningRecipe` with a `boolean` field in its accumulator. That is appropriate if it is truly something repository-level being evaluated – such as checking the presence of a Gradle wrapper or a `.gitignore` file. However, if the recipe is looking at anything at all related to code or dependencies, it should be tracked per `JavaProject`.

We recently saw this mistake in the Gradle `AddDependency` recipe. Check out [how we fixed that](https://github.com/openrewrite/rewrite/commit/f7c5e926fc6c08a971a53081190a7946d0f750f9).

Any time you see a boolean in a scanning recipe's accumulator, ask yourself if it should be a `Map<JavaProject, Boolean>` instead.
