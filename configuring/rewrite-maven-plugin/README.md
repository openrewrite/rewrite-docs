---
description: Applying Rewrite recipes to your code via a build tool plugin for Maven.
---

# Rewrite Maven Plugin

The quickest way to see value from pre-packaged Rewrite recipes is to incorporate the Rewrite Maven \(or [Gradle](../rewrite-gradle-plugin.md)\) plugin to your build and run a Maven goal that transforms your code locally.

{% hint style="success" %}
The Rewrite Maven plugin automatically supplies any recipes you configure to run with all source files in the project that are transformable. It will supply Java visitors with Java files, XML visitors with XML files, etc.
{% endhint %}

The Rewrite Maven plugin offers four goals:

* `mvn rewrite:fix` - Runs the configured recipes and applies the changes locally.
* `mvn rewrite:warn` - Generates warnings in the console for any recipes that would suggest changes, but doesn't make any changes.
* `mvn rewrite:diff` - Generates a git-style patch file that you can review independently and then apply with `git apply target/site/rewrite/rewrite.patch`.
* `mvn rewrite:discover` - Generate a report showing the available and applied recipes based on what Rewrite is finding on your classpath.

## Classpath Scanning for Resources

The plugin automatically scans the `compile`, `provided`, and `test` scopes for visitors, recipes, and styles. These aren't automatically enabled, but they become available to activate through [plugin configuration](./#plugin-configuration).

{% hint style="success" %}
Because the plugin uses classpath scanning, dependencies of the project can include Rewrite recipes in their releases to help migrate users of their library from one version to another.
{% endhint %}

To make pre-packaged Rewrite recipes available to the Maven plugin, add them as `provided` dependencies. For example:

```markup
<dependencies>
  <dependency>
    <groupId>org.openrewrite.recipe</groupId>
    <artifactId>rewrite-spring</artifactId>
    <version>2.3.1</version>
    <scope>provided</scope>
  </dependency>
  <dependency>
    <groupId>org.openrewrite.recipe</groupId>
    <artifactId>rewrite-checkstyle</artifactId>
    <version>1.2.0</version>
    <scope>provided</scope>
  </dependency>
</dependencies>
```

## The "Fix" Goal

Execute`mvn rewrite:fix` to run the configured recipes and apply the changes locally. This will write changes locally to your source files on disk. Afterwards, review the changes, and when you are comfortalbe with the changes, commit them. The fix goal generates warnings in the build log wherever it makes changes to source files.

![Warnings showing which files were changed and by what recipes](../../.gitbook/assets/image%20%285%29.png)

After the goal finishes executing, run `git diff` to see what changes were made, review, and commit them.

![An example of changes made to spring-cloud/spring-cloud-sleuth the rewrite:fix goal](../../.gitbook/assets/image%20%287%29.png)

## The "Warn" Goal

Execute`mvn rewrite:warn` runs configured recipes in the same way that the fix goal does, but only writes the warnings to the build log. This does not alter your source files on disk at all. This goal can be used to preview the changes that would be made by a recipe.

It could also be manually called in a continuous integration environment, and if you so choose, fail the continuous integration build if the build log contains any such warnings.

## The "Diff" Goal

Execute`mvn rewrite:diff` to run the configured recipes and generate a git-style patch file. This is a little less disruptive than directly writing the changes to disk. Afterwards, you can review the changes with `git diff target/site/rewrite/rewrite.patch`, and when you are comfortable with the changes, use `git apply` to apply them to your source files on disk. Then commit the changes.

The diff goal also generates warnings in the build log wherever it proposes changes. The warning will also contain the command to run to apply the changes for a particular Maven module. Notice how a separate patch file is generated for each module in a multi-module project.

![Log output showing what changed and how to apply the patch](../../.gitbook/assets/image%20%284%29.png)

The output directory of the `rewrite.patch` file can be controlled by setting the `reportOutputDirectory` property. Again, this value would be relativized for each module of a multi-module project and a patch generated into each directory individually.

```markup
<plugin>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>rewrite-maven-plugin</artifactId>
    <version>2.1.1</version>
    <configuration>
        <reportOutputDirectory>.rewrite</reportOutputDirector>
    </configuration>
</plugin>
```

## The "Discover" Goal

Execute `mvn rewrite:discover` to list the recipes that the Rewrite Maven plugin has found on your classpath and the recipes that you have activated. It lists the available recipes, the inclusion and exclusion configurations for those recipes, and the visitors that are effective for that each recipe based on what was found on the classpath. So in the below example, the `org.openrewrite.mockito` recipe has been defined to include all visitors prefixed in the `org.openrewrite.mockito` package. Then it lists all the visitors that have been found in that package and will be ran if that recipe is activated.

![Discovering the available recipes and visitors via the Maven plugin](../../.gitbook/assets/image%20%283%29.png)

## Plugin configuration

It generally makes sense to apply the plugin to the root pom.xml in a repository so that the configuration applies to each project in a multi-module project. The configuration block below contains an example of every configuration option.

* `activeRecipes` - Explicitly turns on recipes by name \(the name given in the `specs.openrewrite.org/v1beta/recipe` resource\). No recipe is run unless explicitly turned on with this setting.
* `activeStyles` - Explicitly turns on a style by name \(the name given in the `specs.openrewrite.org/v1beta/style` resource\). No style is applied unless explicitly turned on with this setting.
* `configLocation` - Where to look for a Rewrite YML configuration file somewhere in the project directory \(or really anywhere on disk\). If you want to customize this, prefixing the file name with the Maven property `${maven.multiModuleProjectDirectory}` is a handy way of ensuring that each module resolves the same configuration file relative to the root directory of the repository. This `configLocation` is \(unless an absolute path is given\) evaluated for _each_ module relative to that module's project directory.

```markup
<project>
...
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>2.1.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.spring</recipe>
          </activeRecipes>
          <activeStyles>
            <!-- this style is made up. it isn't packaged with Rewrite -->
            <style>io.moderne.spring</style>
          </activeStyles>
          <sourceTypes>
            <type>Java</type>
            <type>YML</type>
          </sourceTypes>
          <reportOutputDirectory>.rewrite</reportOutputDirector>
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

![](../../.gitbook/assets/image%20%2811%29.png)

