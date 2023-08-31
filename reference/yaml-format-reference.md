# Declarative YAML format

OpenRewrite allows you to create [recipes](../concepts-and-explanations/recipes.md) and [styles](../concepts-and-explanations/styles.md) in [YAML](https://yaml.org). While doing so potentially reduces customizability, it makes up for that with development speed and portability.

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
* Custom recipes should not be placed into the `org.openrewrite` namespace. Instead, they should follow the same [reverse domain name notation](https://en.wikipedia.org/wiki/Reverse\_domain\_name\_notation) used in Java packages.

## Recipes

### Format

{% hint style="info" %}
You can find the full recipe schema [here](https://github.com/openrewrite/rewrite/blob/241e146a8996a917a8a460b27d17136108b3d50a/rewrite-core/openrewrite.json#L32-L75).
{% endhint %}

| Key                                                | Type                                                                                                        | Description                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| type                                               | const                                                                                                       | A constant: `specs.openrewrite.org/v1beta/recipe`                                               |
| name                                               | string                                                                                                      | A fully qualified, unique name for this recipe                                                  |
| displayName                                        | string                                                                                                      | A human-readable name for this recipe (does not end with a period)                              |
| description                                        | string                                                                                                      | A human-readable description for this recipe (ends with a period)                               |
| tags                                               | array of strings                                                                                            | A list of strings that help categorize this recipe                                              |
| estimatedEffortPerOccurence                        | [duration](https://docs.oracle.com/javase/8/docs/api/java/time/Duration.html#parse-java.lang.CharSequence-) | The expected amount of time saved each time this recipe fixes something                         |
| causesAnotherCycle                                 | boolean                                                                                                     | Whether or not this recipe can cause another cycle (defaults to false)                          |
| [recipeList](yaml-format-reference.md#recipe-list) | array of recipes                                                                                            | The list of recipes which comprise this recipe                                                  |

### Preconditions

Declarative YAML recipes do not support preconditions (formerly named applicability tests) as of [OpenRewrite 8](https://docs.openrewrite.org/changelog/8-1-2-release#applicability-tests-have-been-replaced). If your recipe needs that functionality, it should be defined in an [imperative manner](/concepts-and-explanations/recipes.md#imperative-recipes) instead.

### Recipe list

A declarative recipe can be made up of one or more recipes. The recipes in the list could be other declarative recipes defined in the same file or they can be imperative recipes created elsewhere. Like imperative recipes, each recipe in this list can potentially have configuration options that need to be specified.

{% hint style="success" %}
Recipes in the `recipeList` will run in the order they are listed. That being said, a declarative recipe may include another declarative recipe declared later in the same `rewrite.yml` file.
{% endhint %}

### Recipe example

Consider this example declarative recipe:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RecipeA
displayName: Recipe A
description: Applies Recipe B.
tags:
  - tag1
  - tag2
estimatedEffortPerOccurrence: PT15M
causesAnotherCycle: true
recipeList:
  - com.yourorg.RecipeB:
      exampleConfig1: foo
      exampleConfig2: bar
  - com.yourorg.RecipeC
```

If you wanted to run this recipe (but not distribute it to others), you would:

1. Copy the above YAML into a `rewrite.yml` file at the root of your project
2. Configure the [Gradle plugin](gradle-plugin-configuration.md) or [Maven plugin](rewrite-maven-plugin.md) to have an active recipe of `com.yourorg.RecipeA`
3. Run the `mvn rewrite:run` or the `gradle rewriteRun` command

## Styles

### Format

{% hint style="info" %}
You can find the full style schema [here](https://github.com/openrewrite/rewrite/blob/241e146a8996a917a8a460b27d17136108b3d50a/rewrite-core/openrewrite.json#L126-L153).
{% endhint %}

| Key          | Type             | Description                                                       |
| ------------ | ---------------- | ----------------------------------------------------------------- |
| type         | const            | A constant: `specs.openrewrite.org/v1beta/style`                  |
| name         | string           | A fully qualified, unique name for this style                     |
| displayName  | string           | A human-readable name for this style (does not end with a period) |
| description  | string           | A human-readable description for this style (ends with a period)  |
| tags         | array of strings | A list of strings that help categorize this style                 |
| styleConfigs | array of styles  | The list of styles which comprise this style                      |

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
