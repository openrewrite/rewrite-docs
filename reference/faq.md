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
Exclusion paths are paths relative to the project root, not the system file path.
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
