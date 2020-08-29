---
description: Applying Rewrite recipes to your code via a build tool plugin for Maven.
---

# Rewrite Maven Plugin

The quickest way to see value from pre-packaged Rewrite recipes is to incorporate the Rewrite Maven \(or [Gradle](rewrite-gradle-plugin.md)\) plugin to your build and run a Maven goal that transforms your code locally.

The Rewrite Maven plugin offers four goals:

* `mvn rewrite:fix` - Runs the configured recipes and applies the changes locally.
* `mvn rewrite:warn` - Generates warnings in the console for any recipes that would suggest changes, but doesn't make any changes.
* `mvn rewrite:diff` - Generates a git-style patch file that you can review independently and then apply with `git apply target/site/rewrite/rewrite.patch`.
* `mvn rewrite:discover` - Generate a report showing the available and applied recipes based on what Rewrite is finding on your classpath.

### The "Fix" Goal

Execute`mvn rewrite:fix` to run the configured recipes and apply the changes locally. This will write changes locally to your source files on disk. Afterwards, review the changes, and when you are comfortalbe with the changes, commit them. The fix goal generates warnings in the build log wherever it makes changes to source files.

![Warnings showing which files were changed and by what recipes](../.gitbook/assets/image%20%285%29.png)

After the goal finishes executing, run `git diff` to see what changes were made, review, and commit them.

![An example of changes made to spring-cloud/spring-cloud-sleuth the rewrite:fix goal](../.gitbook/assets/image%20%287%29.png)

### The "Warn" Goal

Execute`mvn rewrite:warn` runs configured recipes in the same way that the fix goal does, but only writes the warnings to the build log. This does not alter your source files on disk at all. This goal can be used to preview the changes that would be made by a recipe.

It could also be manually called in a continuous integration environment, and if you so choose, fail the continuous integration build if the build log contains any such warnings.

### The "Diff" Goal

Execute`mvn rewrite:diff` to run the configured recipes and generate a git-style patch file. This is a little less disruptive than directly writing the changes to disk. Afterwards, you can review the changes with `git diff target/site/rewrite/rewrite.patch`, and when you are comfortable with the changes, use `git apply` to apply them to your source files on disk. Then commit the changes. 

The diff goal also generates warnings in the build log wherever it proposes changes. The warning will also contain the command to run to apply the changes for a particular Maven module. Notice how a separate patch file is generated for each module in a multi-module project.

![](../.gitbook/assets/image%20%284%29.png)

### The "Discover" Goal

Execute `mvn rewrite:discover` to list the recipes that the Rewrite Maven plugin has found on your classpath and the recipes that you have activated. It lists the available recipes, the inclusion and exclusion configurations for those recipes, and the visitors that are effective for that each recipe based on what was found on the classpath. So in the below example, the `org.openrewrite.mockito` recipe has been defined to include all visitors prefixed in the `org.openrewrite.mockito` package. Then it lists all the visitors that have been found in that package and will be ran if that recipe is activated. 

![Discovering the available recipes and visitors via the Maven plugin](../.gitbook/assets/image%20%283%29.png)

### Plugin configuration



