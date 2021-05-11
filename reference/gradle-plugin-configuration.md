---
description: rewrite-gradle-plugin configuration options and task descriptions
---

# Gradle Plugin Configuration

The Rewrite Gradle Plugin is the fastest way to apply Rewrite recipes to your code as part of your Gradle build. The Rewrite Gradle Plugin is compatible with all versions of Gradle since 4.7.

## Plugin Configuration

The recommended way of applying the plugin differs slightly between single and multi-module Gradle builds.

### Single-Module Gradle projects

Apply the org.openrewrite.rewrite plugin to your build:

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("4.2.2")
}
rewrite {
    // Rewrite Extension Configuration
}
```

With the plugin applied, the `rewrite` DSL is available for configuration.

### Multi-Module Gradle Projects

There are innumerable different ways a multi-project Gradle build could potentially be configured. These instructions assume that the multi-project build in question is composed entirely of Java projects. If that isn't the case for your build, and you cannot easily copy and paste these snippets, the key point is to apply and configure the Rewrite plugin after wherever you apply the Java plugin.

1. In the root project's build.gradle, in the `plugins` block, add the rewrite plugin to your build's classpath with `apply` set to `false`.

   This tells Gradle to download the plugin but not to activate it for the current project.

2. In the `subprojects` block, or wherever your Java plugin is applied, also apply the rewrite plugin.

With these steps taken, your root build.gradle may look similar to this:

```groovy
 plugins {
     id("org.openrewrite.rewrite") version("4.2.2") apply(false)
 }

 subprojects {
     apply plugin: "java"
     apply plugin: "org.openrewrite.rewrite"

     rewrite {
         // Rewrite Extension Configuration
     }
 }
```

With the plugin applied, the `rewrite` DSL is available for configuration.

### Configuring the 'rewrite' DSL

The `rewrite` DSL exposes a few configuration options:

* `activeRecipe` - Explicitly turns on recipes by name \(the name given in the `specs.openrewrite.org/v1beta/recipe` resource\). No recipe is run unless explicitly turned on with this setting.
* `activeStyle` - Explicitly turns on a style by name \(the name given in the `specs.openrewrite.org/v1beta/style` resource\). No style is applied unless explicitly turned on with this setting.
* `configFile` - Where to look for a Rewrite YML configuration file somewhere in the project directory \(or really anywhere on disk\). This file is not required to exist. If not specified otherwise, the default value is `<root project directory>/rewrite.yml`.
* `failOnDryRunResults` - Boolean flag toggling whether `rewriteDryRun` should throw an exception and non-zero exit code if changes are detected. Default is `false`.

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("4.2.2")
}
rewrite {
    activeRecipe("com.yourorg.ExampleRecipe", "com.yourorg.ExampleRecipe2")
    activeStyle("com.yourorg.ExampleStyle", "com.yourorg.ExampleStyle2")

    // These are default values, shown for example. It isn't necessary to supply these values manually:
    configFile = project.getRootProject().file("rewrite.yml")
    failOnDryRunResults = false
}
```

## Activating Rewrite Recipes

{% hint style="info" %}
All OpenRewrite libraries and modules are published to MavenCentral. Use the `repositories` Gradle DSL to ensure that your build can resolve dependencies from there or one of its mirrors.
{% endhint %}

The plugin automatically scans the compilation time classpath of each [SourceSet](https://docs.gradle.org/current/dsl/org.gradle.api.tasks.SourceSet.html) for visitors, recipes, and styles. No recipe is ever run on your code base without being explicitly activated in the plugin's configuration.

{% hint style="success" %}
Because the plugin uses classpath scanning, dependencies of the project can include Rewrite recipes in their releases to help migrate users of their library from one version to another.
{% endhint %}

To make pre-packaged Rewrite recipes available for activation, add them as `rewrite` dependencies:

```groovy
dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.3.0")
}
```

Once a pre-packaged recipe has been added to the `rewrite` dependency configuration, you can tell the Gradle plugin to activate it the `rewrite` DSL. For example, here is how you would activate the `org.openrewrite.java.testing.junit5.JUnit5BestPractices` Recipe that comes with `rewrite-testing-frameworks` in a single-project Gradle build:

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("4.2.2")
}

repositories {
    jcenter()
}

dependencies {
    testImplementation("junit:junit:4.13")
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.4.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}
```

## The "Run" Task

Execute `gradle rewriteRun` to run the active recipes and apply the changes. This will write changes locally to your source files on disk. Afterwards, review the changes, and when you are comfortable with the changes, commit them. The `run` goal generates warnings in the build log wherever it makes changes to source files.

![Showing which files were changed and by what visitors](../.gitbook/assets/rewrite-fix-gradle-output%20%282%29%20%282%29%20%284%29%20%284%29%20%285%29%20%286%29%20%286%29.png)

After the goal finishes executing, run `git diff` \(or your VCS system's equivalent\) to see what changes were made, review, and commit them.

![Example of changes made to netflix conductor by the rewriteRun task](../.gitbook/assets/rewrite-fix-git-diff-output%20%281%29%20%281%29%20%283%29%20%283%29%20%283%29%20%281%29%20%284%29.png)

## The "DryRun" Task

Execute `gradle rewriteDryRun` to dry-run the active recipes and print which visitors would make changes to which files to the build log. This does not alter your source files on disk at all. This goal can be used to preview the changes that would be made by the active recipes.

![Listing of source files that would be changed if rewriteRun were run](../.gitbook/assets/rewrite-warn-gradle-output%20%283%29%20%283%29%20%283%29%20%281%29.png)

`rewriteDryRun` can be used as a "gate" in a continuous integration environment by failing the build if `rewriteDryRun` detects changes to be made and `failOnDryRunResults` is set to `true`:

```groovy
rewrite {
    // ...
    failOnDryRunResults = true
}
```

## The "Discover" Task

Execute `gradle rewriteDiscover` to list the recipes available on your classpath.

![](../.gitbook/assets/image%20%281%29.png)

## Links

* [Github project](https://github.com/openrewrite/rewrite-gradle-plugin)
* [Issue Tracker](https://github.com/openrewrite/rewrite-gradle-plugin/issues)
* [Gradle Plugin Portal Listing](https://plugins.gradle.org/plugin/org.openrewrite.rewrite)

