---
description: Frequently asked questions about OpenRewrite, Moderne, and recipe development.
---

import ReactPlayer from 'react-player';
import TOCInline from '@theme/TOCInline';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Frequently asked questions (FAQ)

<TOCInline toc={toc} />

## Why are there no new versions on Maven Central?

Sonatype now puts [limits on what can be published to Maven Central](https://central.sonatype.org/publish/maven-central-publishing-limits/). OpenRewrite publishes around 80 modules a day, far beyond those limits, so new versions go to the [Code Genome Project](https://codegenomeproject.org/) instead.

The last versions on Maven Central are `rewrite-core` 8.90.4 and `rewrite-maven-plugin` 6.46.1. The Gradle plugin 7.41.0 is the last one on the Gradle Plugin Portal. Anything newer exists only in the Code Genome Project. Its metadata requires authentication, which is also why mvnrepository.com does not list those versions.

To use a newer version, [configure access to the Code Genome Project](../running-recipes/getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project).

## Didn't you ask Sonatype for an exemption?

No. Other projects have been granted exemptions, but we did not ask for one. A release process that depends on an exemption is not a reliable way to deliver our software, so we moved to a repository we control.

## Is there an official announcement I can share with my infrastructure or security team?

This entry is that announcement. When you need to explain the change internally, link to it:

```text
https://docs.openrewrite.org/reference/faq#why-are-there-no-new-versions-on-maven-central
```

Your team will need to allow `https://artifacts.codegenomeproject.org/maven` over HTTPS, plus the [username and download token](../running-recipes/getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project) that go with it.

## Why do `rewrite-recipe-bom` 3.38.0 and Gradle plugin 7.41.0 fail to resolve `rewrite-bom`?

`rewrite-recipe-bom` 3.38.0, and the Gradle plugin versions 7.40.0 and 7.41.0, were published around the move and still reference `rewrite-bom` 8.91.0, which exists only in the Code Genome Project.

Neither Maven Central nor the Gradle Plugin Portal lets a publisher delete a version, so those stay broken.

If your build resolves from Maven Central alone, use `rewrite-recipe-bom` 3.37.0 or older, and Gradle plugin 7.39.0 or older. Otherwise, [add the Code Genome Project](../running-recipes/getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project), and current versions resolve normally.

The same problem hits `git bisect` across older commits that use `latest.release`: the commits that pick up a broken version fail to resolve until the Code Genome Project is configured.

## Why do Apache-licensed artifacts need a token?

Every download from the Code Genome Project is authenticated, including Apache 2.0 modules, the Maven and Gradle plugins, and the Moderne CLI. Every contributor and every fork that runs the build needs an account, which is the main objection from open-source projects. Accounts and download tokens are free.

As with Sonatype, though, we do not want to be on the hook for inefficient use by a small group of users. A token shows who is behind a request, so we can reach out when we see misuse instead of blocking everyone.

## I'm signed in, so why do I get a 403 for `rewrite-spring` or `rewrite-static-analysis`?

A 401 means the request carried no credentials, or a token that is invalid or revoked. A 403 means the request was authenticated, but your account is not entitled to that artifact.

What you can download depends on the license of the module:

* Apache 2.0 modules, the Maven and Gradle plugins, the Moderne CLI, and the Moderne Connector download with a free account.
* [Moderne Source Available License (MSAL)](../licensing/openrewrite-licensing.md#moderne-source-available-license) modules, such as `rewrite-spring` and `rewrite-static-analysis`, are available as binaries to Moderne customers only. Without a subscription, [build them from source](./building-openrewrite-from-source.md) within the terms of that license. Contributors need a Code Genome Project account to compile them locally.
* Moderne proprietary modules are available to customers only.

The [Moderne docs](https://docs.moderne.io/user-documentation/recipes/accessing-the-code-genome-project/#what-the-repository-hosts) describe the same split, and the [build order page](https://openrewrite.github.io/rewrite-recipe-bom/) shows which repository to build before which.

## How do I tell whether a recipe is Apache-licensed or MSAL?

Each recipe page in the [recipe catalog](https://codegenomeproject.org/recipes) shows the license next to the recipe name: Apache 2.0, MSAL, or Moderne proprietary. See [licensing](../licensing/openrewrite-licensing.md) for what each license allows.

## Does adding another repository expose my build to dependency confusion?

The Code Genome Project serves only OpenRewrite and Moderne artifacts. It does not mirror Maven Central, so a dependency from another publisher cannot resolve from it, even though the [packages browser](https://codegenomeproject.org/packages) shows more content than the Maven repository itself serves.

You can also restrict the repository to the OpenRewrite and Moderne group IDs, so your build never asks it for anything else.

In Gradle, that is `exclusiveContent`:

```groovy title="build.gradle"
repositories {
  exclusiveContent {
    forRepository {
      maven {
        url = 'https://artifacts.codegenomeproject.org/maven'
        credentials {
          username = providers.gradleProperty('codegenomeUsername').get()
          password = providers.gradleProperty('codegenomePassword').get()
        }
      }
    }
    filter {
      includeGroupByRegex 'org\\.openrewrite.*'
      includeGroupByRegex 'io\\.moderne.*'
    }
  }
}
```

Maven has no equivalent in `pom.xml`. It has [remote repository filtering](https://maven.apache.org/resolver/remote-repository-filtering.html), configured in the `.mvn` directory instead. On Maven 3.9 or newer, add two lines to `.mvn/maven.config`:

```properties title=".mvn/maven.config"
-Daether.remoteRepositoryFilter.groupId=true
-Daether.remoteRepositoryFilter.groupId.basedir=${session.rootDirectory}/.mvn/rrf/
```

Then list the allowed groups, one per line, in `.mvn/rrf/groupId-codegenome.txt`:

```text title=".mvn/rrf/groupId-codegenome.txt"
org.openrewrite
io.moderne
```

The file name ends with the repository ID, so the repository has to be declared with the ID `codegenome`, as in [getting started](../running-recipes/getting-started.md#step-2-add-rewrite-maven-plugin-or-rewrite-gradle-plugin-to-your-project). Either approach leaves the Code Genome Project out of the lookup for everything it does not host.

## How do I proxy the Code Genome Project through Artifactory or Nexus?

Add `https://artifacts.codegenomeproject.org/maven` as a remote repository, authenticating with your username and download token. In your virtual repository, put it below your internal repositories and above Maven Central. Above your internal repositories, it answers 404 for everything it does not host, which adds latency. Below Maven Central, you keep resolving the older releases. If your repository manager supports routing rules, send the `org.openrewrite` and `io.moderne` groups to it, so those requests cannot fall through to a Central mirror that only has the older releases.

The [Moderne docs](https://docs.moderne.io/user-documentation/recipes/accessing-the-code-genome-project/#onboarding-the-repository-in-artifactory-or-nexus) walk through the setup, including the 404 that the connection test returns.

If your organization restricts outbound connections, the host to add is `artifacts.codegenomeproject.org` over HTTPS. Some teams need weeks to open one, so start the request before you need the new versions.

## Where do I find the latest version of a module?

mvnrepository.com cannot index the Code Genome Project, because its metadata requires authentication. Use one of these instead:

* [Latest versions of every OpenRewrite module](https://docs.moderne.io/user-documentation/recipes/lists/latest-versions-of-every-openrewrite-module)
* The [Code Genome Project catalog](https://codegenomeproject.org/recipes)
* The [rewrite releases](https://github.com/openrewrite/rewrite/releases) on GitHub

## Will older releases disappear from Maven Central?

No. Maven Central [does not allow deleting or replacing published artifacts](https://central.sonatype.org/faq/can-i-change-a-component/), so everything up to `rewrite-core` 8.90.4 and `rewrite-maven-plugin` 6.46.1 stays there. Builds pinned to those versions keep working without the Code Genome Project.

## Does OpenRewrite collect any data from our projects?

**No**. The [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin) and [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin) run locally on your machine, without any connections to Moderne or OpenRewrite. The plugin calls out to the artifact repositories configured in your build (such as the Code Genome Project or a locally configured mirror) to check for new dependencies. Other than that, you should not see any other outbound traffic. 

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

This question comes up a lot with bigger migration recipes such as the [Migrate to Java 17 recipe](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava17). Before we dive into the options you have, it's important to note that OpenRewrite recipes are highly hierarchical in nature. When you execute the Java 17 recipe, you're actually executing 280 individual migration recipes. Some of these recipes are partial steps, that by themselves, would not make sense. Consider, for instance, how different recipes change imports versus add a dependency; you'd need both for the change to make sense, and committing just a part of that would lead to failing intermediate steps.

This nuance is why we don't support intermediate steps to commit results; it would simply be too much to handle feasibly. Furthermore, we'd have to write out to disk repeatedly, which would slow the migration down even more.

That being said, there are two things you can do:

1. You can run individual parts of the hierarchy. For instance, the [Migrate to Java 17 recipe](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava17) contains the [Migrate to Java 11 recipe](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.Java8toJava11), which contains the [Migrate to Java 8 recipe](https://codegenomeproject.org/recipes/org.openrewrite.java.migrate.UpgradeToJava8). You could run each of those child recipes and commit the results - which would limit the number of changes being done at a time.

2. You can also use [Preconditions](./yaml-format-reference.md#preconditions) to limit the changes to a particular [source set](https://codegenomeproject.org/recipes/org.openrewrite.java.search.HasSourceSet) or [set of files](https://codegenomeproject.org/recipes/org.openrewrite.FindSourceFiles).

Using these two approaches together in separate runs means you can likely create something that's feasible to review.

Worth noting, though, is that each recipe run will need to build up the Lossless Semantic Tree (LST) – which can take some time (especially for larger projects). If you'd like to speed that up, you can have a look at [Moderne](https://www.moderne.ai/) where we allow you to use precomputed LSTs.

## Are partial or parallel recipe runs supported with the Gradle plugin?

**No**, the Gradle plugin does not currently support partial or parallel recipe runs.
If you need to run recipes incrementally or in parallel, consider these alternatives:

1. Use the [Moderne CLI](https://docs.moderne.io/), which supports serializing LSTs and running recipes against them
2. Use exclusions to limit parsing to specific files or directories
3. Use preconditions to limit the scope of changes to specific files or directories

For more details about this limitation, see [issue #212](https://github.com/openrewrite/rewrite-gradle-plugin/issues/212) in the rewrite-gradle-plugin repository.

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
1. [List effective Maven repositories](https://codegenomeproject.org/recipes/org.openrewrite.maven.search.EffectiveMavenRepositories)
2. [Dependency resolution diagnostic](https://codegenomeproject.org/recipes/org.openrewrite.java.dependencies.DependencyResolutionDiagnostic)
3. [Maven repository order](https://codegenomeproject.org/recipes/org.openrewrite.maven.search.FindRepositoryOrder)

Double check and adjust your dependency version, or add additional repository configuration or credentials, to resolve this issue.

## My recipe appears to hang when running. What's happening? Is there a progress report?

OpenRewrite is probably still building up a model of your code and resolving types – this can take a while. Right now, there is not a progress report for recipe runs.

## Can I tell OpenRewrite to NOT touch a certain file?

Yes – [we describe how in our preconditions doc](./yaml-format-reference.md#using-preconditions-to-limit-what-files-are-touched).

## Can I create a report or summary of the changes made through OpenRewrite?

When recipes run with the OSS Maven and Gradle plugins, they produce a summary of what files were changed by which recipes.
If you'd like more information, then you can look at the data tables additionally produced through [getting started with data tables guide](../running-recipes/data-tables.md) for OpenRewrite.

Moderne offers this functionality through the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) and the [Moderne Platform](https://app.moderne.io/getting-started).
For more information, check out [getting started with data tables guide](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/) in the Moderne docs.

## My recipe runs, but is not making any changes. What's happening?

When a recipe fails to make changes, that's often because of malformed or missing type information.
You can use the diagnostic [Find missing types recipe](https://codegenomeproject.org/recipes/org.openrewrite.java.search.FindMissingTypes),
and [the data table it produces](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/), to find missing types in your codebase.
If there are any missing types you might want to double-check your dependencies are set up correctly.

It could also be that a particular file is not parsed correctly. In such cases you'll see log line output which files failed to parse.
You can use the [Find source files with ParseExceptionResult markers](https://codegenomeproject.org/recipes/org.openrewrite.FindParseFailures) diagnostic recipe to find & report these issues.
Note that this again [produces a data table](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/) for you to inspect.

In some cases missing changes can be attributed to a failure to connect to Artifactory, Nexus, while building up the LST model, or while running recipes.
Quite a few recipes emit a `org.openrewrite.maven.table.MavenMetadataFailures` data table where such issues were detected.
You might then want to run the [Dependency resolution diagnostic](https://codegenomeproject.org/recipes/org.openrewrite.java.dependencies.DependencyResolutionDiagnostic) recipe to troubleshoot your connectivity.

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

## I'm getting `Unable to construct Java21Parser` (or similar) when running my recipe. What does this mean?

This `IllegalStateException` typically occurs when using `JavaTemplate` with an incomplete classpath.
The Java parser needs all relevant types on the classpath to compile the template snippet, including transitive dependencies that aren't automatically resolved.

For example, if your template references an annotation from `jakarta.jakartaee-api`, but the annotation type extends a class from `hibernate-core`, you'll need both on the classpath:

```java
JavaTemplate
    .builder("@SequenceGenerator(name = \"gen\", sequenceName = \"seq\")")
    .imports("jakarta.persistence.SequenceGenerator")
    // highlight-next-line
    .javaParser(JavaParser.fromJavaVersion().classpath("jakarta.jakartaee-api", "hibernate-core"))
    .build()
    .apply(getCursor(), ann.getCoordinates().replace());
```

Alternatively, if your recipe uses [TypeTables](../authoring-recipes/multiple-versions.md#typetables), use `.classpathFromResources` instead of `.classpath` to load types from the `META-INF/rewrite/` directory:

```java
.javaParser(JavaParser.fromJavaVersion()
    // highlight-next-line
    .classpathFromResources(new InMemoryExecutionContext(), "jakarta.jakartaee-api", "hibernate-core"))
```

Note that `.classpathFromResources` does _not_ resolve transitive dependencies automatically, so you may need to add multiple TypeTable entries for deeper class hierarchies.

The error message includes `java.version` and the resolved classpath to help you diagnose what's missing.
Check which types your template references and ensure all required classpath entries are provided in the `.classpath(...)` or `.classpathFromResources(...)` call.

Also make sure that these dependencies are available to the build plugin that runs your recipe, for instance through an explicit dependency in the Maven or Gradle plugin configuration.

## Is it possible to pass arguments to a recipe from the command line?

This is a challenging problem for a couple of reasons:

* Some recipes can be composed of other recipes, which could in turn include other recipes, and so on.
* Some recipes can be used multiple times in one recipe with different parameters such as in [this example](https://github.com/openrewrite/rewrite-migrate-java/blob/v3.42.1/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml#L146-L157).
* The [rewrite-gradle-plugin](https://github.com/openrewrite/rewrite-gradle-plugin) requires you to either change your build file, or add an `init.gradle` script to run recipes.

We generally recommend using a `rewrite.yml` file to configure recipes. This avoids ambiguity about which recipe instances are being configured and ensures the setup is portable across the different tools that run OpenRewrite recipes.

If you're using the [rewrite-maven-plugin](https://github.com/openrewrite/rewrite-maven-plugin), we [added basic support for passing arguments to recipes](https://github.com/openrewrite/rewrite-maven-plugin/pull/816), though it's currently limited to single-recipe runs.
Using the below command you remove an argument plugin without modifying a `rewrite.yml` or `pom.xml` file:

```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:{{VERSION_REWRITE_MAVEN_PLUGIN}}:run \
  -Drewrite.activeRecipes=org.openrewrite.maven.RemovePlugin \
  -Drewrite.options=groupId=org.springframework.boot,artifactId=spring-boot-maven-plugin
```

Since this command doesn't modify your `pom.xml`, the Code Genome Project repository has to be declared in your Maven `settings.xml` file as a `pluginRepository`, as described in [running Rewrite without modifying the build](/running-recipes/running-rewrite-on-a-maven-project-without-modifying-the-build#configure-the-code-genome-project-repository).

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

Time savings estimates give you a general idea of how much time a recipe run saved. Imperative recipes default to 5 minutes. Recipe authors can override that with a more accurate estimate (that could even be 0 minutes).

The estimate counts once for each file the recipe changed, regardless of how many edits were made in that file.

The estimate represents how long it would take a developer to change the code, create a PR to review said change, and then merge/deploy it once it was reviewed. It _does not_ estimate how long it would take a developer to find this issue in the code (which, in some cases, can be quite a bit longer than making the change itself).

See [estimated time saved](../authoring-recipes/estimated-time-saved.md) for the full calculation and for how to view the numbers in a [data table](../authoring-recipes/data-tables.md).

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
