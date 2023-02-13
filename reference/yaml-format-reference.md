# Declarative YAML format

OpenRewrite allows you to create [recipes](/concepts-and-explanations/recipes.md) and [styles](/concepts-and-explanations/styles.md) in [YAML](https://yaml.org). While doing so potentially reduces customizability, it makes up for that with development speed and portability.

To help you confidently define recipes and styles in YAML, this guide will walk you through all of the ways you can configure an OpenRewrite YAML file.

## Where OpenRewrite YAML files can exist

There are two places where you can define an OpenRewrite YAML file:

1. Within the `rewrite.yml` file of a project that applies rewrite recipes via the [rewrite-gradle-plugin](gradle-plugin-configuration.md) or [rewrite-maven-plugin](rewrite-maven-plugin.md)
2. Inside the `META-INF/rewrite` folder of a jar (such as in the [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks/tree/master/src/main/resources/META-INF/rewrite))

If you define a recipe or style in the `rewrite.yml` file, they _will not_ be included in the jars published from your project.

If you want to distribute a recipe or a style and apply them to other projects, you'll need to create them inside of the `META-INF/rewrite` folder of a jar.

## Best practices

Please keep these conventions in mind when you're creating OpenRewrite YAML files:

* A file may contain any number of recipes and styles, separated by `---`.
* Within a file, recipe and style names must be fully qualified.
* Custom recipes should not be placed into the `org.openrewrite` namespace. Instead, they should follow the same [reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) used in Java packages. 

## Recipes

### Format

| Key                         | Type             | Description                                                             |
|-----------------------------|------------------|-------------------------------------------------------------------------|
| type                        | const            | A constant:  `specs.openrewrite.org/v1beta/recipe`                      |
| name                        | string           | A fully qualified, unique name for this recipe                          |
| displayName                 | string           | A human-readable name for this recipe                                   |
| description                 | string           | A human-readable description for this recipe                            |
| tags                        | array of strings | A list of strings that help categorize this recipe                      |
| estimatedEffortPerOccurence | [duration](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-)         | The expected amount of time saved each time this recipe fixes something |
| causesAnotherCycle          | boolean          | Whether or not this recipe can cause another cycle (defaults to false)  |
| applicability               | object           | The list of [applicability tests](#applicability-tests) for this recipe                         |
| ↪ singleSource              | array of recipes | See [applicability tests](#applicability-tests)                                                 |
| ↪ anySource                 | array of recipes | See [applicability tests](#applicability-tests)                                                 |
| [recipeList](#recipe-list)                  | array of recipes | The list of recipes which comprise this recipe                          |

### Applicability tests

As mentioned in our [best practices guide](/authoring-recipes/recipe-conventions-and-best-practices.md#use-applicability-tests), it's a good idea to add applicability tests to your recipes. These tests limit where your recipe is run so that it can be run faster and so it's clearer to others what it does.

While most of the recipes that comprise a declarative recipe have their own applicability tests, you can add a new layer of applicability tests on top of those. These tests will be run before any individual recipe runs its applicability tests. If any of these top-level tests fail, the recipes in the `recipeList` will not run. If these top-level tests pass, then the declarative recipe will begin iterating through the recipes in the `recipeList`. Each recipe in that list will run its own applicability tests before performing any refactoring.

To create these top-level applicability tests, you'll need to add the `applicability` object to your file. This object has two pieces: `singleSource` and `anySource`. Each of those is composed of one or more recipes (formatted the same way as the [recipeList](#recipe-list)).

If the `singleSource` list is specified, OpenRewrite will grab a file from the repository the recipe is being run on. It will then run each recipe in the `singleSource` section on that file. If _all_ of those recipes result in a change to that file, then the declarative recipe is considered "applicable" for that file and the recipes specified in the `recipeList` will be run on said file. Once that's done, the process will be repeated for the next file in the repository.

If the `anySource` list is specified, OpenRewrite will run every recipe in the `anySource` list on every file in the repository the recipe is being run on. If _any_ of those recipes result in a change to at least one file, then the declarative recipe is considered "applicable" for that repository and the recipes specified in the `recipeList` will be run on every file in the repository.

You can specify both `singleSource` and `anySource` applicability tests in a declarative recipe.

### Recipe list

A declarative recipe can be made up of one or more recipes. The recipes in the list could be other declarative recipes defined in the same file or they can be imperative recipes created elsewhere. Like imperative recipes, each recipe in this list can potentially have configuration options that need to be specified.

{% hint style="success" %}
Order of recipe declaration is not important. A declarative recipe may include another declarative recipe declared later in the same file in its `recipeList`.
{% endhint %}

### Recipe example

Consider this example declarative recipe:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RecipeA
displayName: Recipe A
description: Applies Recipe B
tags:
  - tag1
  - tag2
estimatedEffortPerOccurrence: PT15M
causesAnotherCycle: true
applicability:
  singleSource:
    - org.openrewrite.FindSourceFiles:
      filePattern: '**/hello.txt'
  anySource:
    - org.openrewrite.gradle.search.FindPlugins:
      pluginId: com.gradle.build-scan
recipeList:
  - com.yourorg.RecipeB:
      exampleConfig1: foo
      exampleConfig2: bar
  - com.yourorg.RecipeC
```

If you wanted to run this recipe (but not distribute it to others), you would:

1. Copy the above YAML into a `rewrite.yml` file at the root of your project
2. Configure the [Gradle plugin](gradle-plugin-configuration.md) or [Maven plugin](rewrite-maven-plugin.md) to have an active recipe of `com.yourorg.RecipeA`
3. Run the `./mvnw rewrite:run` or the `/.gradlew rewriteRun` command

## Styles

### Format

| Key          | Type             | Description                                       |
|--------------|------------------|---------------------------------------------------|
| type         | const            | A constant:  `specs.openrewrite.org/v1beta/style` |
| name         | string           | A fully qualified, unique name for this style     |
| displayName  | string           | A human-readable name for this style              |
| description  | string           | A human-readable description for this style       |
| tags         | array of strings | A list of strings that help categorize this style |
| styleConfigs | array of styles  | The list of styles which comprise this style      |

### Style example

Consider this example declarative style, which specifies that tabs should be used for indentation and that at least 9999 imports from a given package should be required before collapsing them into a single star import:

```yaml
---
type: specs.openrewrite.org/v1beta/style
name: com.yourorg.YesTabsNoStarImports
styleConfigs:
  - org.openrewrite.java.style.TabsAndIndentsStyle:
      useTabCharacter: true
  - org.openrewrite.java.style.ImportLayoutStyle:
      classCountToUseStarImport: 9999
```

To put this style in effect for any formatting performed by OpenRewrite within the current project:

1. Put the above into a `rewrite.yml` file at the project root
2. Configure the [gradle plugin](gradle-plugin-configuration.md) or [maven plugin](rewrite-maven-plugin.md) with `com.yourorg.YesTabsNoStarImports` listed as the active style

The next time any OpenRewrite recipe is run in that project, any formatting it performs will take these styles into account.
