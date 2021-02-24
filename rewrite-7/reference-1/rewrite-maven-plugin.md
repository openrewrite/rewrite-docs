---
description: rewrite-maven-plugin configuration options and goal descriptions
---

# Maven Plugin Configuration

The quickest way to see value from pre-packaged Rewrite recipes is to incorporate the Rewrite Maven \(or [Gradle](../../getting-started/rewrite-gradle-plugin.md)\) plugin to your build and run a Maven goal that transforms your code locally.

{% hint style="success" %}
The Rewrite Maven plugin automatically supplies any recipes you configure to run with all source files in the project that are transformable. It will supply Java visitors with Java files, XML visitors with XML files, etc.
{% endhint %}

The Rewrite Maven plugin offers four goals:

* `mvn rewrite:fix` - Runs the configured recipes and applies the changes locally.
* `mvn rewrite:warn` - Generates warnings in the console for any recipes that would suggest changes, but doesn't make any changes.
* `mvn rewrite:diff` - Generates a git-style patch file that you can review independently and then apply with `git apply target/site/rewrite/rewrite.patch`.
* `mvn rewrite:discover` - Generate a report showing the available and applied recipes based on what Rewrite finds on your classpath.

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
        <version>3.0.0-rc.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.Spring</recipe>
          </activeRecipes>
          <activeStyles>
            <!-- This style is made up for sake of example. It isn't packaged with Rewrite -->
            <style>com.yourorg.SpringStyle</style>
          </activeStyles>
          <!-- These are the default values. It is not necessary to supply these value manually --> 
          <reportOutputDirectory>${project.reporting.outputDirectory}/rewrite</reportOutputDirector>
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
        </configuration>
        <dependencies>
          <!-- This module is made up for sake of example. IT isn't packaged with Rewrite -->
          <dependency>
            <groupId>com.yourorg.recipes</groupId>
            <artifactId>your-recipes</artifactId>
            <version>1.0.0<version>
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

## The "Fix" Goal

Execute`mvn rewrite:fix` to run the active recipes and apply the changes. This will write changes locally to your source files on disk. Afterwards, review the changes, and when you are comfortable with the changes, commit them. The fix goal generates warnings in the build log wherever it makes changes to source files.

![Warnings showing which files were changed and by what visitors](../../.gitbook/assets/image%20%285%29.png)

After the goal finishes executing, run `git diff` to see what changes were made, review, and commit them.

![An example of changes made to spring-cloud/spring-cloud-sleuth the rewrite:fix goal](../../.gitbook/assets/image%20%287%29.png)

## The "Warn" Goal

Execute`mvn rewrite:warn` to dry-run the active recipes and print which visitors would make changes to which files to the build log. This does not alter your source files on disk at all. This goal can be used to preview the changes that would be made by a recipe.

It could also be manually called in a continuous integration environment, and if you so choose, fail the continuous integration build if the build log contains any such warnings.

## The "Diff" Goal

Execute`mvn rewrite:diff` to run the configured recipes and generate a git-style patch file. This is a little less disruptive than directly writing the changes to disk. Afterwards, you can review the changes with `git diff target/site/rewrite/rewrite.patch`, and when you are comfortable with the changes, use `git apply` to apply them to your source files on disk. Then commit the changes.

The diff goal also generates warnings in the build log wherever it proposes changes. The warning will also contain the command to run to apply the changes for a particular Maven module. Notice how a separate patch file is generated for each module in a multi-module project.

![Log output showing what changed and how to apply the patch](../../.gitbook/assets/image%20%284%29.png)

The output directory of the `rewrite.patch` file can be controlled by setting the `reportOutputDirectory` property. This value is relativized for each module of a multi-module project and a patch generated individually in each module.

{% code title="pom.xml" %}
```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>3.0.0-rc.4</version>
    <configuration>
        <reportOutputDirectory>.rewrite</reportOutputDirector>
    </configuration>
</plugin>
```
{% endcode %}

## The "Discover" Goal

Execute `mvn rewrite:discover` to list the recipes that the Rewrite Maven plugin has found on your classpath and the recipes that you have activated. It lists the available recipes, the inclusion and exclusion configurations for those recipes, and the visitors that are effective for that each recipe based on what was found on the classpath. So in the below example, the `org.openrewrite.mockito` recipe has been defined to include all visitors prefixed in the `org.openrewrite.mockito` package. Then it lists all the visitors that have been found in that package and will be ran if that recipe is activated.

![](../../.gitbook/assets/image%20%281%29.png)

## Links

* [Github project](https://github.com/openrewrite/rewrite-maven-plugin)
* [Issue Tracker](https://github.com/openrewrite/rewrite-maven-plugin/issues)

