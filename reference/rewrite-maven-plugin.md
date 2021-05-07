---
description: rewrite-maven-plugin configuration options and goal descriptions
---

# Maven Plugin Configuration

The Rewrite Maven Plugin is the fastest way to apply Rewrite recipes to your code as part of your Maven build. The Rewrite Maven Plugin is compatible with all versions of Maven since 3.6.

{% hint style="success" %}
The Rewrite Maven plugin automatically supplies any recipes you configure to run with all source files in the project that are transformable. It will supply Java visitors with Java files, XML visitors with XML files, etc.
{% endhint %}

The Rewrite Maven plugin offers these goals:

* `mvn rewrite:run` - Runs the configured recipes and applies the changes locally.
* `mvn rewrite:dryRun` - Generates warnings in the console for any recipes that would make changes, but doesn't make any changes.
* `mvn rewrite:discover` - Generate a report showing the available and applied recipes based on what Rewrite finds on your classpath.
* `mvn rewrite:cyclonedx` - Generate a [CycloneDx](https://cyclonedx.org/) bill of materials outlining all of the project's dependencies, including transitive dependencies.

{% hint style="info" %}
In some circumstances, depending on how your project pom.xml is configured, you may get a [`NoPluginFoundForPrefixException`](https://cwiki.apache.org/confluence/display/MAVEN/NoPluginFoundForPrefixException). The root cause for this varies from pom.xml to pom.xml. In any case, as a quick fix to get unstuck, try referencing the fully-qualified rewrite-maven-plugin coordinates instead of the shorthand prefix. That is, try using `mvn org.openrewrite.maven:rewrite-maven-plugin:GOAL` \(such as `mvn org.openrewrite.maven:rewrite-maven-plugin:run`, etc.\) rather than `mvn rewrite:GOAL`.
{% endhint %}

## Plugin configuration

It generally makes sense to apply the plugin to the root pom.xml in a repository so that the configuration applies to each project in a multi-module project. The configuration block below contains an example of every configuration option.

* `activeRecipes` - Explicitly turns on recipes by name \(the name given in the `specs.openrewrite.org/v1beta/recipe` resource\). No recipe is run unless explicitly turned on with this setting.
* `activeStyles` - Explicitly turns on a style by name \(the name given in the `specs.openrewrite.org/v1beta/style` resource\). No style is applied unless explicitly turned on with this setting.
* `configLocation` - Where to look for a Rewrite YML configuration file somewhere in the project directory \(or really anywhere on disk\). If you want to customize this, prefixing the file name with the Maven property `${maven.multiModuleProjectDirectory}` is a handy way of ensuring that each module resolves the same configuration file relative to the root directory of the repository. This `configLocation` is \(unless an absolute path is given\) evaluated for _each_ module relative to that module's project directory.
* `dependencies` - To make pre-packaged Rewrite recipes available to the Maven plugin, add them as **plugin** dependencies.

{% hint style="info" %}
Note. the plugin scans the `compile`, `provided`, and `test` scopes for visitors, recipes, and styles and will automatically discover recipes on the project classpath.
{% endhint %}

{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.2.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.Spring</recipe>
          </activeRecipes>
          <activeStyles>
            <!-- This style is made up for sake of example. It isn't packaged with Rewrite -->
            <style>com.yourorg.SpringStyle</style>
          </activeStyles>
          <!-- These are the default values. It is not necessary to supply these value manually --> 
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
        </configuration>
        <dependencies>
          <!-- This module is made up for sake of example. It isn't packaged with Rewrite -->
          <dependency>
            <groupId>com.yourorg.recipes</groupId>
            <artifactId>your-recipes</artifactId>
            <version>1.0.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}

{% hint style="info" %}
To find out what recipes a rewrite module provides, see its documentation and the output of the `rewrite:discover` goal.
{% endhint %}

## The "Run" Goal

Execute `mvn rewrite:run` to run the active recipes and apply the changes. This will write changes locally to your source files on disk. Afterwards, review the changes, and when you are comfortable with the changes, commit them. The `run` goal generates warnings in the build log wherever it makes changes to source files.

![Warnings showing which files were changed and by what visitors](../.gitbook/assets/image%20%285%29.png)

After the goal finishes executing, run `git diff` to see what changes were made, review, and commit them.

![An example of changes made to spring-cloud/spring-cloud-sleuth the rewrite:run goal](../.gitbook/assets/image%20%287%29.png)

## The "DryRun" Goal

Execute `mvn rewrite:dryRun` to dry-run the active recipes and print which visitors would make changes to which files to the build log. This does not alter your source files at all. This goal can be used to preview the changes that would be made by a recipe.

This goal also produces a report, in the form of a patch file, in which you can see the exact changes that would be made were you to run `mvn rewrite:run`.

![Example rewrite.patch file produced by dryRun](../.gitbook/assets/image%20%2822%29.png)

`dryRun` can be called in a continuous integration environment, and if you so choose, fail the build if the build log contains any such warnings.

## The "Discover" Goal

Execute `mvn rewrite:discover` to list the recipes that the Rewrite Maven plugin has found on your classpath and the recipes that you have activated in your plugin configuration.

![The beginning of rewrite:discover output, showing activated and available Recipes](../.gitbook/assets/image%20%2818%29.png)

This same goal also lists all of the parameters that recipes can be or are already configured with.

![Recipes showing their configurable parameters. &quot;!&quot; means a parameter is required.](../.gitbook/assets/image%20%2817%29.png)

## The "CycloneDx" Goal

Execute `rewrite:cyclonedx` to generate a [CycloneDx](https://cyclonedx.org/) bill of materials \(BOM\) outlining all of the project's dependencies, including transitive dependencies. The BOM will be written to target/&lt;module name&gt;-&lt;version&gt;-cyclonedx.xml.

![Excerpt from Rewrite-generated CycloneDx BOM](../.gitbook/assets/image%20%2819%29.png)

## Links

* [Github project](https://github.com/openrewrite/rewrite-maven-plugin)
* [Issue Tracker](https://github.com/openrewrite/rewrite-maven-plugin/issues)
