# Frequently asked questions

## Does OpenRewrite collect any data from our projects?

**No**. The [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) and [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin) run locally on your machine, without any connections to Moderne or OpenRewrite. The plugins calls out to Maven Central (or a locally configured mirror) to check for new dependencies. Other than that, you should not see any other outbound traffic. 

## What is the difference between OpenRewrite and Moderne?

{% embed url="https://www.youtube.com/watch?v=Q-ej2lCJHRs" %}

## Is it possible to update only a few files with a recipe rather than all of them?

Yes. There are two main options for this:

1. (**Recommended**) Use some of the common [preconditions](/reference/yaml-format-reference.md#preconditions) to limit the files or directories the recipe runs on.
2. Use exclusions to limit the folders the recipe can run on: 

{% hint style="info" %}
Exclusion paths are relative to the project root, not the system file path.
{% endhint %}

{% tabs %}
{% tab title="Gradle" %}
In your `build.gradle` file:

```groovy
rewrite {
    exclusions = ["folderA", "folderB"]
}
```
{% endtab %}

{% tab title="Maven" %}
In the command line:

```shell
mvn rewrite:run -Drewrite.exclusions="folderA,folderB"
```
{% endtab %}
{% endtabs %}

## Is it possible to apply recipes on a step-by-step basis (pausing after certain recipes, so smaller commits can be made)?

This question comes up a lot with bigger migration recipes such as the [Migrate to Java 17 recipe](/reference/recipes/java/migrate/upgradetojava17.md). Before we dive into the options you have, it's important to note that OpenRewrite recipes are highly hierarchical in nature. When you execute the Java 17 recipe, you're actually executing 180 individual migration recipes. Some of these recipes are partial steps, that by themselves, would not make sense. Consider, for instance, how different recipes change imports versus add a dependency; you'd need both for the change to make sense, and committing just a part of that would lead to failing intermediate steps.

This nuance is why we don't support intermediate steps to commit results; it would simply be too much to handle feasibly. Furthermore, we'd have to write out to disk repeatedly, which would slow the migration down even more.

That being said, there are two things you can do:

1. You can run individual parts of the hierarchy. For instance, the [Migrate to Java 17 recipe](/reference/recipes/java/migrate/upgradetojava17.md) contains the [Migrate to Java 11 recipe](/reference/recipes/java/migrate/java8tojava11.md), which contains the [Migrate to Java 8 recipe](/reference/recipes/java/migrate/upgradetojava8.md). You could run each of those child recipes and commit the results - which would limit the number of changes being done at a time.

2. You can also use [Preconditions](/reference/yaml-format-reference.md#preconditions) to limit the changes to a particular [source set](/reference/recipes/java/search/hassourceset.md) or [set of files](/reference/recipes/findsourcefiles.md).

Using these two approaches together in separate runs means you can likely create something that's feasible to review.

Worth noting, though, is that each recipe run will need to build up the Lossless Semantic Tree (LST) – which can take some time (especially for larger projects). If you'd like to speed that up, you can have a look at [Moderne](https://www.moderne.io/) where we allow you to use precomputed LSTs.

## I'm getting `java.lang.OutOfMemoryError: Java heap space` when running OpenRewrite. 

You can either increase the size of the Java heap or build and run recipes with the [Moderne CLI](https://docs.moderne.io/).

**Java heap instructions**

{% tabs %}
{% tab title="Gradle" %}
```shell
gradle -Dorg.gradle.jvmargs=-Xmx8G rewrite:run
```
{% endtab %}

{% tab title="Maven" %}
```shell
export MAVEN_OPTS="-Xmx8G"
mvn rewrite:run
```
{% endtab %}
{% endtabs %}

**Moderne CLI**

The Moderne CLI builds the LST artifacts for your repository in pieces if the repository can't fit into memory entirely. It also allows you to run recipes against multiple repositories at once.

## My recipe appears to hang when running. What's happening? Is there a progress report?

OpenRewrite is likely building up a model of your code and resolving types – this can take a while. Right now, there is not a progress report for recipe runs. However, there is a suggestion to add progress indicators that you can +1 [here](https://github.com/openrewrite/rewrite-maven-plugin/issues/544).

## Can I create a report or summary of the changes made through OpenRewrite?

Yes. Take a look at the [getting started with data tables guide](https://docs.moderne.io/user-documentation/data-tables). Right now, data tables can only be accessed through the [Moderne platform](https://app.moderne.io/). Access to these will be made available through the Maven and Gradle plugin soon.

## I want to exclude a single recipe from a collection of recipes.

This is not possible right now and doing so would be quite complicated. For a detailed explanation as to why, check out [this post](https://github.com/openrewrite/rewrite-maven-plugin/pull/569#issuecomment-1576793092).

## Is it possible to pass arguments to a recipe from the command line? I want to programmatically configure complex recipes.

Not right now. This is a particularly difficult problem to address for a couple of reasons:

* Some recipes can be composed of other recipes which could then include other recipes composed of other recipes and so on.
* Some recipes can be used multiple times in one recipe with different parameters such as in [this example](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.6/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml#L140-L160).

There is an [open issue](https://github.com/openrewrite/rewrite-maven-plugin/issues/345) for this request that you can +1 or provide feedback on.

## What order do recipes run in?

Recipes are run in the order they are activated.

Let's take this example snippet of a `build.gradle` file:

```groovy
rewrite {
    activeRecipe(
        'com.yourorg.Foo',
        'com.yourorg.RecipeA'
    )
}
```

and this example of a `rewrite.yml` file:

```yml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RecipeA
displayName: Recipe A
description: Applies Recipe B.
recipeList:
  - com.yourorg.RecipeB
  - com.yourorg.RecipeC
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.Foo
...
recipeList:
  - com.yourorg.bar
  - com.yourorg.bash
```

In this example, the recipes would be run in this order:

1. `com.yourorg.Foo`
2. `com.yourorg.bar`
3. `com.yourorg.bash`
4. `com.yourorg.RecipeA`
5. `com.yourorg.RecipeB`
6. `com.yourorg.RecipeC`

## Does OpenRewrite support Bazel?

There is currently no _open source_ build plugin for Bazel. [Moderne](https://docs.moderne.io/), on the other hand, does offer Bazel support through the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro). This is partially due to the fact that many Bazel repositories are mono repos that wouldn't fit into memory as easily – which is an OpenRewrite constraint. The Moderne CLI, on the other hand, serializes LSTs so that they don't have the same problem.

For more information about the differences between the Moderne CLI and the OpenRewrite build plugins, please see the [Moderne CLI docs](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro#differences-between-the-moderne-cli-and-the-openrewrite-build-plugins).