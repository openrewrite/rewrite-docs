---
description: rewrite-gradle-plugin configuration options and task descriptions
---

# Gradle plugin configuration

The OpenRewrite Gradle Plugin is the fastest way to apply OpenRewrite recipes to your code as part of your Gradle build. The OpenRewrite Gradle Plugin is compatible with all versions of Gradle since 4.0.

## Plugin configuration

Apply the org.openrewrite.rewrite plugin to your build.

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    // OpenRewrite Extension Configuration
}

// Ensure a repository is declared that the rewrite core libraries can be resolved from
repositories {
    mavenCentral() 
}
```

With the plugin applied, the `rewrite` DSL is available for configuration.

### Multi-module Gradle projects

When applied to a multi-project build, plugin behavior differs depending on whether the plugin is applied to the root project or to a sub-project. Applied to the root project, the plugin will parse and refactor all sources from all projects. Applied to any project other than the root project, the plugin will parse and refactor only sources from that project.

The rewrite Gradle plugin resolves the rewrite core libraries and any recipe modules added to the `rewrite` configuration at runtime. It will attempt to resolve them from whatever repositories are available to the project. This is accomplished by adding Maven Central, or a mirror of it, to your project's repositories:

```groovy
repositories {
    mavenCentral()
}
```

### Configuring the 'rewrite' DSL

The `rewrite` DSL exposes a few configuration options:

* `activeRecipe` - Explicitly turns on recipes by name (the name given in the `specs.openrewrite.org/v1beta/recipe` resource). No recipe is run unless explicitly turned on with this setting.
* `activeStyle` - Explicitly turns on a style by name (the name given in the `specs.openrewrite.org/v1beta/style` resource). No style is applied unless explicitly turned on with this setting.
* `configFile` - Where to look for an OpenRewrite YML configuration file somewhere in the project directory (or really anywhere on disk). This file is not required to exist. If not specified otherwise, the default value is `<project directory>/rewrite.yml`.
* `failOnDryRunResults` - Boolean flag toggling whether `rewriteDryRun` should throw an exception and non-zero exit code if changes are detected. The default is `false`.
* `sizeThresholdMb` - Threshold over which non-Java sources are ignored during parsing. The default threshold is 10Mb.
* `exclusion` - One or more paths, relative to the project the plugin is applied to, where non-Java sources are ignored during parsing. Supports [glob patterns](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/nio/file/FileSystem.html#getPathMatcher\(java.lang.String\)).
*   `plainTextMasks` - A set of file masks to denote which files should be parsed as plain text. Evaluated as a [PathMatcher](https://docs.oracle.com/javase/8/docs/api/java/nio/file/PathMatcher.html) glob pattern, where "\*\*" matches any number of directories and "\*" matches a single directory or filename. **Exclusions take precedence over any plain text masks.** If this configuration is not explicitly defined the default masks are

    ```
    **/META-INF/services/**
    **/.gitignore
    **/.gitattributes
    **/.java-version
    **/.sdkmanrc
    **/gradlew
    **/*.sh
    **/*.bash
    **/*.bat
    **/*.ksh
    **/*.txt
    **/*.jsp
    ```

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("6.23.3")
}

repositories {
    mavenCentral()
}

rewrite {
    activeRecipe("com.yourorg.ExampleRecipe", "com.yourorg.ExampleRecipe2")
    activeStyle("com.yourorg.ExampleStyle", "com.yourorg.ExampleStyle2")

    exclusion(
            // Excludes a particular yaml file
            "subproject-a/src/main/resources/generated.yaml",
            // Exclude all json files
            "**/*.json")
    plainTextMask("**/*.txt")
    
    // These are default values, shown for example. It isn't necessary to supply these values manually:
    configFile = project.getRootProject().file("rewrite.yml")
    failOnDryRunResults = false
    sizeThresholdMb = 10
}
```

## Activating OpenRewrite recipes

{% hint style="info" %}
All OpenRewrite libraries and modules are published to MavenCentral. Use the `repositories` Gradle DSL to ensure that your build can resolve dependencies from there or one of its mirrors.
{% endhint %}

No recipe is ever run on your codebase without being explicitly activated in the plugin's configuration. To make pre-packaged OpenRewrite recipes available for activation, add Rewrite's bill of materials along with the specific `rewrite` dependencies:

```groovy
dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
    rewrite("org.openrewrite.recipe:rewrite-spring")
}
```

Once a pre-packaged recipe has been added to the `rewrite` dependency configuration, you can tell the Gradle plugin to activate it the `rewrite` DSL. For example, here is how you would activate the `org.openrewrite.java.testing.junit5.JUnit5BestPractices` recipe that comes with `rewrite-testing-frameworks` in a single-project Gradle build:

```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("6.23.3")
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("junit:junit:4.13")
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:latest-release"))
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnit5BestPractices")
}
```

## The "Run" task

Execute `gradle rewriteRun` to run the active recipes and apply the changes. This will write changes locally to your source files on disk. Afterward, review the changes, and when you are comfortable with the changes, commit them. The `run` goal generates warnings in the build log wherever it makes changes to source files.

![Showing which files were changed and by what visitors](../.gitbook/assets/rewrite-fix-gradle-output.png)

After the goal finishes executing, run `git diff` (or your VCS system's equivalent) to see what changes were made, review, and commit them.

![Example of changes made to netflix conductor by the rewriteRun task](../.gitbook/assets/rewrite-fix-git-diff-output.png)

### JVM args that can be added to the Gradle command line

It is possible to control the active recipe and style using JVM arguments in the command line.

* To change the active recipe, you can specify either `rewrite.activeRecipe` or `rewrite.activeRecipes` (both do the same thing and take the same input).
* To change the style, you can specify either `rewrite.activeStyle` or `rewrite.activeStyles` (both do the same thing and take the same input).

Here's an example of what this might look like if you were to use [rewriteRun with an init script](/running-recipes/running-rewrite-on-a-gradle-project-without-modifying-the-build.md):

{% code overflow="wrap" %}
```bash
gradle rewriteRun --init-script init.gradle -Drewrite.activeRecipe=org.openrewrite.FindSpringUses 
```
{% endcode %}

In general, it's best to default to not passing in any styles and to allow rewrite to detect the styles itself. If you need to, though, you can always append `-Drewrite.activeStyle` to the end of the command:

```bash
-Drewrite.activeStyle=com.yourorg.YesTabsNoStarImports
```

## The "dryRun" task

Execute `gradle rewriteDryRun` to dry-run the active recipes and print which visitors would make changes to which files in the build log. This does not alter your source files on disk at all. This goal can be used to preview the changes that would be made by the active recipes.

`rewriteDryRun` outputs a report in the form of a `patch` file, by default under `build/reports/rewrite/rewrite.patch`, containing changes that would be made if you were to run `rewriteRun`. This `patch` file can be used with `git` or `diff` to view or apply the potential changes. For example, `git diff . build/reports/rewrite/rewrite.patch`.

![Listing of source files that would be changed if rewriteRun were run](../.gitbook/assets/rewrite-warn-gradle-output.png)

`rewriteDryRun` can be used as a "gate" in a continuous integration environment by failing the build if `rewriteDryRun` detects changes to be made and `failOnDryRunResults` is set to `true`:

```groovy
rewrite {
    // ...
    failOnDryRunResults = true
}
```

If desired, `rewriteDryRun` can be configured so that when `check` runs, `rewriteDryRun` does too:

```groovy
tasks.named("check").configure {
    dependsOn(tasks.named("rewriteDryRun"))
}
```

## The "Discover" task

Execute `gradle rewriteDiscover` to list the recipes available on your classpath.

![](<../.gitbook/assets/rewrite-discover.png>)

## Links

* [GitHub project](https://github.com/openrewrite/rewrite-gradle-plugin)
* [Issue Tracker](https://github.com/openrewrite/rewrite-gradle-plugin/issues)
* [Gradle Plugin Portal Listing](https://plugins.gradle.org/plugin/org.openrewrite.rewrite)
