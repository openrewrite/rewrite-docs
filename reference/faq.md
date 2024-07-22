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

## Why do artifact scanners detect vulnerabilities in recipe artifacts/JARs?

In order to modernize and upgrade old or vulnerable code, some OpenRewrite recipe modules bundle copies of old libraries. Libraries bundled into recipe modules are never executed. That being said, these libraries are **never executed**.

OpenRewrite exercises the Java compiler internally to compile code patterns that exist in these old and/or vulnerable libraries. These patterns are then used to **match** old or vulnerable code for the sake of modernizing or repairing it.

Using a library in compilation in this way **does not trigger class initialization** in the way that reflection might, for example. In other words, code paths in libraries used in compilation are **never executed**.

As an example of this, consider the case of [rewrite-spring](https://github.com/openrewrite/rewrite-spring). It has libraries bundled inside of the [META-INF/rewrite/classpath directory](https://github.com/openrewrite/rewrite-spring/tree/main/src/main/resources/META-INF/rewrite). However, those JARs are not made into a Fat Jar or a shaded library in the traditional sense. It is not possible that by using `rewrite-spring` that one of those libraries gets called.


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

When recipes run with the OSS Maven and Gradle plugins, they produce a summary of what files where changes by which recipes.
If you'd like more information, then you can look at the data tables additionally produced through [getting started with data tables guide](/running-recipes/data-tables) for OpenRewrite.

Moderne offers this functionality through the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) and the [Moderne Platform](https://app.moderne.io/getting-started).
For more information, check out [getting started with data tables guide](https://docs.moderne.io/user-documentation/data-tables) in the Moderne docs.

## My recipe runs, but is not making any changes. What's happening?

When a recipe fails to make changes, that's often because of malformed or missing type information.
You can use the diagnostic [Find missing types recipe](https://docs.openrewrite.org/recipes/java/search/findmissingtypes),
and [the data table it produces](https://docs.moderne.io/user-documentation/data-tables), to find missing types in your codebase.
If there are any missing types you might want to double-check your dependencies are set up correctly, or whether you're using Lombok, as [Lombok leads to missing types](https://github.com/openrewrite/rewrite/issues/1297).

It could also be that a particular file is not parsed correctly. In such cases you'll see log line output which files failed to parse.
You can use the [Find source files with ParseExceptionResult markers](https://docs.openrewrite.org/recipes/core/findparsefailures) diagnostic recipe to find & report these issues.
Note that this again [produces a data table](https://docs.moderne.io/user-documentation/data-tables) for you to inspect.

If neither of those issues are present, then you might want to look at some diagnostic data tables we produce for each recipe run.
Once enabled you can get insight into which recipes had results, or errors, and their runtime statistics. Look for these tables in your target folder to learn which recipes had results.
```
org.openrewrite.table.SourcesFileResults
org.openrewrite.table.SourcesFileErrors
org.openrewrite.table.RecipeRunStats
```

If you're still having trouble, it might help to attach a debugger to the running process and see what's going on.
Use the typical debug flow for your build tool, and set a breakpoint in the recipe you're running to see what's happening.
For Maven, that would be using `mvnDebug` instead of `mvn`, and for Gradle, that would be using the `--debug-jvm` flag.

## I want to exclude a single recipe from a collection of recipes.

You can create your own custom recipe based off of an existing recipe most easily through [the Moderne recipe builder](https://app.moderne.io/builder).
You can [read more about the new recipe builder](https://www.moderne.ai/blog/moderne-engineering-building-the-openrewrite-recipe-builder) on the Moderne blog.

Excluding a single recipe from an existing unmodified recipe list would be quite complicated. For a detailed explanation as to why, check out [this post](https://github.com/openrewrite/rewrite-maven-plugin/pull/569#issuecomment-1576793092).

## Is it possible to pass arguments to a recipe from the command line? I want to programmatically configure complex recipes.

Not right now. This is a particularly difficult problem to address for a couple of reasons:

* Some recipes can be composed of other recipes which could then include other recipes composed of other recipes and so on.
* Some recipes can be used multiple times in one recipe with different parameters such as in [this example](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.6/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml#L140-L160).

There is an [open issue](https://github.com/openrewrite/rewrite-maven-plugin/issues/799) for this request that you can +1 or provide feedback on.

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

## How can I configure custom timeouts for my artifact repositories?

You can configure custom timeouts for your artifact repositories by setting the `timeout` property in a Maven `settings.xml` file.
This file is read from the default location in `~/.m2/settings.xml`, even if you are using Gradle to run your recipes.
The specification is described in this [Maven mini guide on HTTP settings](https://maven.apache.org/guides/mini/guide-http-settings.html#connection-timeouts).
```xml
<settings>
  <servers>
    <server>
      <id>my-server</id>
      <configuration>
        <timeout>60000</timeout> <!-- milliseconds -->
      </configuration>
    </server>
  </servers>
</settings>
```
Note that the per HTTP method `<httpConfiguration>` format is not supported.
