---
description: Frequently asked questions about OpenRewrite, Moderne, and recipe development.
---

import ReactPlayer from 'react-player';
import TOCInline from '@theme/TOCInline';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Frequently asked questions (FAQ)

<TOCInline toc={toc} />

## Does OpenRewrite collect any data from our projects?

**No**. The [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) and [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin) run locally on your machine, without any connections to Moderne or OpenRewrite. The plugins calls out to Maven Central (or a locally configured mirror) to check for new dependencies. Other than that, you should not see any other outbound traffic. 

## What is the difference between OpenRewrite and Moderne?

<ReactPlayer url='https://www.youtube.com/watch?v=Q-ej2lCJHRs' controls="true" />


## Is it possible to update only a few files with a recipe rather than all of them?

Yes. There are two main options for this:

1. (**Recommended**) Use some of the common [preconditions](./yaml-format-reference.md#preconditions) to limit the files or directories the recipe runs on.
2. Use exclusions to limit the folders the recipe can run on: 

:::info
Exclusion paths are relative to the project root, not the system file path.
:::

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">
In your `build.gradle` file:

```groovy title="build.gradle"
rewrite {
  exclusions = ["folderA", "folderB"]
}
```
</TabItem>

<TabItem value="maven" label="Maven">
In the command line:

```shell
mvn rewrite:run -Drewrite.exclusions="folderA,folderB"
```
</TabItem>

</Tabs>

## Why do artifact scanners detect vulnerabilities in recipe artifacts/JARs?

:::tip
If you're getting this warning from running the `downloadRecipeDependencies` Gradle task, you should consider using [TypeTables](../authoring-recipes/multiple-versions.md#typetables) instead. Not only will it greatly reduce the size of your dependencies, but it won't be flagged by a vulnerability scanner.
:::

In order to modernize and upgrade old or vulnerable code, some OpenRewrite recipe modules bundle copies of old libraries. Libraries bundled into recipe modules are never executed. That being said, these libraries are **never executed**.

OpenRewrite exercises the Java compiler internally to compile code patterns that exist in these old and/or vulnerable libraries. These patterns are then used to **match** old or vulnerable code for the sake of modernizing or repairing it.

Using a library in compilation in this way **does not trigger class initialization** in the way that reflection might, for example. In other words, code paths in libraries used in compilation are **never executed**.

## Is it possible to apply recipes on a step-by-step basis (pausing after certain recipes, so smaller commits can be made)?

This question comes up a lot with bigger migration recipes such as the [Migrate to Java 17 recipe](../recipes/java/migrate/upgradetojava17.md). Before we dive into the options you have, it's important to note that OpenRewrite recipes are highly hierarchical in nature. When you execute the Java 17 recipe, you're actually executing 180 individual migration recipes. Some of these recipes are partial steps, that by themselves, would not make sense. Consider, for instance, how different recipes change imports versus add a dependency; you'd need both for the change to make sense, and committing just a part of that would lead to failing intermediate steps.

This nuance is why we don't support intermediate steps to commit results; it would simply be too much to handle feasibly. Furthermore, we'd have to write out to disk repeatedly, which would slow the migration down even more.

That being said, there are two things you can do:

1. You can run individual parts of the hierarchy. For instance, the [Migrate to Java 17 recipe](../recipes/java/migrate/upgradetojava17.md) contains the [Migrate to Java 11 recipe](../recipes/java/migrate/java8tojava11.md), which contains the [Migrate to Java 8 recipe](../recipes/java/migrate/upgradetojava8.md). You could run each of those child recipes and commit the results - which would limit the number of changes being done at a time.

2. You can also use [Preconditions](./yaml-format-reference.md#preconditions) to limit the changes to a particular [source set](../recipes/java/search/hassourceset.md) or [set of files](../recipes/core/findsourcefiles.md).

Using these two approaches together in separate runs means you can likely create something that's feasible to review.

Worth noting, though, is that each recipe run will need to build up the Lossless Semantic Tree (LST) – which can take some time (especially for larger projects). If you'd like to speed that up, you can have a look at [Moderne](https://www.moderne.io/) where we allow you to use precomputed LSTs.

## I'm getting `java.lang.OutOfMemoryError: Java heap space` when running OpenRewrite. 

You can either increase the size of the Java heap or build and run recipes with the [Moderne CLI](https://docs.moderne.io/).

**Java heap instructions**

<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">
```shell
gradle -Dorg.gradle.jvmargs=-Xmx8G rewrite:run
```
</TabItem>

<TabItem value="maven" label="Maven">
```shell
export MAVEN_OPTS="-Xmx8G"
mvn rewrite:run
```
</TabItem>

</Tabs>

**Moderne CLI**

The Moderne CLI builds the LST artifacts for your repository in pieces if the repository can't fit into memory entirely. It also allows you to run recipes against multiple repositories at once.

## I'm getting `Failed to parse or resolve the Maven POM file or one of its dependencies; We cannot reliably continue without this information.` when running OpenRewrite.

OpenRewrite needs to resolve the Maven POM file and its dependencies to build up the Lossless Semantic Tree (LST).

We parse the POM files of your project, your dependencies, and any plugins to enrich our type information – and to resolve any transitive dependencies.

When POM files cannot be found or parsed, we are not able to type attribute some elements of your code, and recipes will fail to match those elements.

If you're seeing this error, it's likely that OpenRewrite is having trouble resolving the POM file or its dependencies.
The output will indicate with markers which `<!--~~(... Unable to download POM ...)~~>-->` which POM failed, and which repositories were tried.

There's also a trio of recipes that we offer to help you troubleshoot which Maven repositories are selected, and in what order:
1. [List effective Maven repositories](https://docs.openrewrite.org/recipes/maven/search/effectivemavenrepositories)
2. [Dependency resolution diagnostic](https://docs.openrewrite.org/recipes/java/dependencies/dependencyresolutiondiagnostic)
3. [Maven repository order](https://docs.openrewrite.org/recipes/maven/search/findrepositoryorder)

Double check and adjust your dependency version, or add additional repository configuration or credentials, to resolve this issue.

## My recipe appears to hang when running. What's happening? Is there a progress report?

OpenRewrite is likely building up a model of your code and resolving types – this can take a while. Right now, there is not a progress report for recipe runs. However, there is a suggestion to add progress indicators that you can +1 [here](https://github.com/openrewrite/rewrite-maven-plugin/issues/544).

## Can I create a report or summary of the changes made through OpenRewrite?

When recipes run with the OSS Maven and Gradle plugins, they produce a summary of what files where changes by which recipes.
If you'd like more information, then you can look at the data tables additionally produced through [getting started with data tables guide](../running-recipes/data-tables.md) for OpenRewrite.

Moderne offers this functionality through the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) and the [Moderne Platform](https://app.moderne.io/getting-started).
For more information, check out [getting started with data tables guide](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/) in the Moderne docs.

## My recipe runs, but is not making any changes. What's happening?

When a recipe fails to make changes, that's often because of malformed or missing type information.
You can use the diagnostic [Find missing types recipe](../recipes/java/search/findmissingtypes.md),
and [the data table it produces](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/), to find missing types in your codebase.
If there are any missing types you might want to double-check your dependencies are set up correctly, or whether you're using Lombok, as [Lombok leads to missing types](https://github.com/openrewrite/rewrite/issues/1297).

It could also be that a particular file is not parsed correctly. In such cases you'll see log line output which files failed to parse.
You can use the [Find source files with ParseExceptionResult markers](../recipes/core/findparsefailures.md) diagnostic recipe to find & report these issues.
Note that this again [produces a data table](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/) for you to inspect.

In some cases missing changes can be attributed to a failure to connect to Artifactory, Nexus, while building up the LST model, or while running recipes.
Quite a few recipes emit a `org.openrewrite.maven.table.MavenMetadataFailures` data table where such issues were detected.
You might then want to run the [Dependency resolution diagnostic](../recipes/java/dependencies/dependencyresolutiondiagnostic.md) recipe to troubleshoot your connectivity.

If none of those issues are present, then you might want to look at some diagnostic data tables we produce for each recipe run.
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

You can create your own custom recipe based off of an existing recipe most easily through [the Moderne recipe builder](https://app.moderne.io/builder). Check out our doc on [customizing recipes to meet your needs](../running-recipes/customize-recipe.md).

Excluding a single recipe from an existing unmodified recipe list would be quite complicated. For a detailed explanation as to why, check out [this post](https://github.com/openrewrite/rewrite-maven-plugin/pull/569#issuecomment-1576793092).

## How do I remove an element from an LST?

Visitors can remove LST elements by returning `null` when visiting the element to be removed. Please keep in mind, though, that it may not always be safe to remove an element. 

For instance, we have [a very simple recipe](https://github.com/openrewrite/rewrite-static-analysis/blob/4608489da8dcdab51e80163a18094264482d88bc/src/main/java/org/openrewrite/staticanalysis/RemoveSystemOutPrintln.java#L44-L49) that checks for certain `System.out.println` methods and removes them. We use this recipe as part of our [Java Recipe best practices](https://github.com/openrewrite/rewrite-recommendations/blob/3d724859e0137bc4ea3d7be845e631f5ed9eddfd/src/main/resources/META-INF/rewrite/openrewrite.yml#L46). However, this can result in incorrect removals as demonstrated in [a PR to OpenRewrite](https://github.com/openrewrite/rewrite/pull/4270#discussion_r1649619823).

To learn more about manipulating LSTs, [check out our recipe conventions and best practices doc](../authoring-recipes/recipe-conventions-and-best-practices.md#recipes-must-not-mutate-lsts).

## How do I replace one statement with multiple new statements using JavaTemplates?

Conceptually, you will want to modify or replace a [single LST element](../concepts-and-explanations/lst-examples.md) with a single other LST element.

For instance, let's say you wanted to replace `int i = 5` with `int i = 5; i++;`. You might be inclined to set the template string to `"int i = 5; i++;"` - but that wouldn't work. Instead, you should wrap those statements up into a [J.Block](../concepts-and-explanations/lst-examples.md#block): `{ int i = 5; i++; }`.

After doing that, you would want to run a `doAfterVisit(new RemoveUnneededBlock.getVisitor())` to remove the unnecessary block again – giving you the desired result.

## I'm seeing `LST contains missing or invalid type information` in my recipe unit tests. How to resolve?

The unit test framework for recipes has additional checks beyond the visible code.
One such check is to ensure all LST elements have valid type information, such that recipes can reliably be chained together.
Any missing types would mean subsequent recipes can't match or modify the generated code.

A common source of missing type information is when you use `JavaTemplate`, but fail to provide any `.classpath*(...)` or `.imports(...)`.
These method calls are required to resolve types referenced in your code template, and serve as input to the generated class stub.
Also note that transitive dependencies are _not_ resolved, so in deeper class hierarchies you might need to add multiple `.classpath*(...)` entries.

The error message will indicate which types are missing; Using the debugger it should be possible to pinpoint the source of the issue.
If for some reason you're unable to resolve the missing types issue, and are OK with a limited ability to chain recipes together,
then you can disable the type validation through either `org.openrewrite.test.RecipeSpec.afterTypeValidationOptions` or `org.openrewrite.test.RecipeSpec.typeValidationOptions`.

## Is it possible to pass arguments to a recipe from the command line?

This is a challenging problem for a couple of reasons:

* Some recipes can be composed of other recipes, which could in turn include other recipes, and so on.
* Some recipes can be used multiple times in one recipe with different parameters such as in [this example](https://github.com/openrewrite/rewrite-migrate-java/blob/v2.0.6/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml#L140-L160).
* The [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin) requires you to either change your build file, or add an `init.gradle` script to run recipes.

We generally recommend using a `rewrite.yml` file to configure recipes. This avoids ambiguity about which recipe instances are being configured and ensures the setup is portable across the different tools that run OpenRewrite recipes.

If you're using the [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin), we [added basic support for passing arguments to recipes](https://github.com/openrewrite/rewrite-maven-plugin/pull/816), though it's currently limited to single-recipe runs.
Using the below command you remove an argument plugin without modifying a `rewrite.yml` or `pom.xml` file:

```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.maven.RemovePlugin \
  -Drewrite.options=groupId=org.springframework.boot,artifactId=spring-boot-maven-plugin
```

Note that this approach does not scale well; each recipe invocation would build up the Lossless Semantic Tree (LST) from scratch, which can be slow for larger projects.

A better approach then is to [leverage serialized LSTs through the Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

## What order do recipes run in?

Recipes are run in the order they are activated.

Let's take this example snippet of a `build.gradle` file:

```groovy title="build.gradle"
rewrite {
    activeRecipe(
        'com.yourorg.Foo',
        'com.yourorg.RecipeA'
    )
}
```

and this example of a `rewrite.yml` file:

```yml title="rewrite.yml"
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

```xml title="settings.xml"
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

## What is the estimated time save log we are seeing? How is this value calculated?

Time savings estimates provide you with a general idea of how much time was saved from running this recipe. [Every recipe defaults to saying that it saves 5 minutes per issue it found/fixed](https://github.com/openrewrite/rewrite/blob/f2b923248e2692a3d35bdff15285be256cfd69b6/rewrite-core/src/main/java/org/openrewrite/Recipe.java#L198-L203) - but recipe authors can override that with a more accurate estimate. Some recipes may have zero time saved whereas others may have significantly more.

The assumption is that this time saved number represents how long it would take a developer to change the code, create a PR to review said change, and then merge/deploy it once it was reviewed. It _does not_ estimate how long it would take a developer to find this issue in the code (which, in some cases, can be quite a bit longer than making the change itself).

[You can export data tables with those results per recipe](../running-recipes/data-tables.md).

## Is there a way to tell `rewriteTest` to ignore formatting when comparing before and after? Likewise, can we just compare LST equivalence while ignoring static imports or fully qualified types?

No there is not -- and very intentionally not so.

The reason is that these differences can be indicative of underlying issues. For example:

* Ignoring formatting differences might overlook cases where incorrect formatting affects code behavior or leads to compilation issues.

* Ignoring import differences might cause problems if a necessary type is missing or not properly imported.

Additionally, if `rewriteTest` ignores these issues, it could lead to problems composing multiple recipes together. The output of one recipe becomes the input for the next, and if that output contains formatting or import issues, it can cause issues downstream.

Because of that, we recommend fixing the underlying causes of those differences.

## How can I run OpenRewrite against Ant projects?

One of our community members graciously [outlined how they did this](https://github.com/openrewrite/rewrite-docs/issues/247#issuecomment-2943431802). Please see that issue for more information on this.

## Why doesn't OpenRewrite fully migrate my code?

OpenRewrite recipes are designed with a focus on correctness over completeness. This means that what a recipe changes, it changes correctly, deterministically, and reproducibly. OpenRewrite endorses the [do no harm](../authoring-recipes/recipe-conventions-and-best-practices.md#do-no-harm) principle, thus it will never apply a transformation unless it can do so with full confidence that the change is both syntactically and semantically correct for your codebase.

In contrast, completeness refers to whether a recipe covers all possible cases or patterns needed to fully migrate a given technology, framework, or API usage. Not every recipe is exhaustive. In fact, some recipes are intentionally scoped to handle a subset of migration patterns, often to avoid unintended side effects in complex or edge-case scenarios. Additionally, some recipes include constraints or guards that ensure transformations only occur when it's safe. If your code doesn't meet those conditions, the recipe may choose not to act.

This approach is deliberate. Moderne prioritizes deterministic correctness over attempting to guess what the user intended, which can lead to broken code. This is **fundamentally different from AI-assisted code** generation tools, which may appear to do a "complete" migration but can introduce subtle bugs or inconsistencies because they rely on probabilistic models rather than formal LST and semantic analysis.

### What about cases the recipe doesn't cover?

If a recipe doesn't seem to result in a complete migration, it typically means one of two things:

1. The recipe doesn't yet cover certain patterns (a completeness gap).
2. The recipe contains safeguards that didn't match your code's context (a correctness constraint).

:::info
There's another practical reason why that's often overlooked; sometimes it isn't worth creating a recipe. If a particular migration pattern only affects a very small number of cases, the time and effort to write, test, and maintain a recipe might outweigh the benefit. In such cases, it's often more efficient to perform the change manually.
:::

### What should I do if the recipe isn't complete?

* _Check whether combining existing recipes solves it._ Many recipes are designed to be composable.
* _Contribute enhancements or request improvements._ The ecosystem grows because developers surface missing patterns.
* _Evaluate whether manual fixes are the right trade-off._ For very rare or project-specific patterns, it may be faster and more practical to skip automation.

The important thing to take away from this is that OpenRewrite recipes focus on being correct, safe, and deterministic – even if they aren't exhaustive.
