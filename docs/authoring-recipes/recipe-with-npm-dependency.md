---
sidebar_label: Creating recipes with NPM dependencies
description: How to create a recipe that uses custom ESLint plugins or other CLI tools.
---

# Creating recipes with NPM dependencies

Many people have custom ESLint plugins or other CLI tools that they want to use inside of a recipe so that they can apply it to a large number of repositories.

This guide will walk you through everything you need to know in order to do that.

## Prerequisites

This guide assumes that:

* You are somewhat familiar with recipe development. If not, consider working through our [recipe authoring workshop](https://docs.moderne.io/user-documentation/workshops/recipe-authoring).
* Your ESLint plugin or CLI tool that you want to use inside of your recipe is available on NPM.

## Step 1: Create a recipe repository

The first thing you'll need to do is to create a repository for where your recipe should live.

We'd strongly recommend forking our [rewrite-codemods repository](https://github.com/moderneinc/rewrite-codemods) as it already includes a lot of the pieces you'll need.

## Step 2: Add your dependencies

Update the `package.json` file inside of your repository and add your dependency or dependencies:

```json title="package.json"
{
  "dependencies": {
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
  }
}
```

You'll then need to ensure that the place where you are building your recipe JAR in is able to resolve these dependencies from the registry of your choosing (this could be a public NPM registry like `npmjs` or `unpkg` or a private one – like one setup in Artifactory).

After that, you'll also need to to ensure that the dependencies are available as a resource in the recipe JAR. Without that, your recipe will not work when you publish it.

For our `rewrite-codemods` repository, we use a Gradle plugin to [npm install dependencies as a resource in the JAR](https://github.com/moderneinc/rewrite-codemods/blob/main/build.gradle.kts#L25-L29):

```kotlin title="build.gradle.kts"
node {
    nodeProjectDir.set(file("build/resources/main/codemods"))
    download.set(true)
    version.set("20.18.1")
}
```

## Step 3: Create the recipe

If you want to create a recipe that uses a custom ESLint plugin, you should create a YAML recipe similar to the [ones in our codemods repository](https://github.com/moderneinc/rewrite-codemods/tree/main/src/main/resources/META-INF/rewrite).

If you want to create a recipe that uses a custom CLI tool, you should create a new recipe that extends `NodeBaseRecipe`. Check out our [ESLint recipe](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ESLint.java) for a full example of this.

:::tip
You may find it useful to add code so that your recipe produces a [data table](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/data-tables/). Data tables are tabular data that people can use for analysis purposes. They also can be useful for creating visualizations of the results.

A good example of a recipe that uses a custom tool and produces a data table is the [UI5 recipe](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/UI5.java#L153-L162). They then use this data table to produce a visualization ([yaml](https://github.com/moderneinc/moderne-visualizations-misc/blob/main/moderne_visualizations_misc/specs/ui5lint_violations_heatmap.yml) [ipynb](https://github.com/moderneinc/moderne-visualizations-misc/blob/main/moderne_visualizations_misc/ui5lint_violations_heatmap.ipynb)).
:::

## Step 4: Deploy your recipe

With your recipe created, you'll need to deploy it as usual. If you use the Moderne Platform, check out [our guide on how to import external recipes](https://docs.moderne.io/administrator-documentation/moderne-platform/how-to-guides/importing-external-recipes). If you are a Moderne DX user, check out [our guide on how to deploy recipe artifacts with Moderne DX](https://docs.moderne.io/administrator-documentation/moderne-dx/how-to-guides/deploying-recipe-artifacts-in-moderne-dx/).

