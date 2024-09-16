---
description: rewrite-maven-plugin configuration options and goal descriptions
---

# Maven plugin configuration

The OpenRewrite Maven Plugin is the fastest way to apply OpenRewrite recipes to your code as part of your Maven build. The OpenRewrite Maven Plugin is compatible with all versions of Maven since 3.6.

{% hint style="success" %}
The OpenRewrite Maven plugin automatically supplies any recipes you configure to run with all source files in the project that are transformable. It will supply Java visitors with Java files, XML visitors with XML files, etc.
{% endhint %}

The OpenRewrite Maven plugin offers these goals:

* `mvn rewrite:run` - Run the configured recipes and apply the changes locally.
* `mvn rewrite:runNoFork` - Run the configured recipes and apply the changes locally. This variant does not fork the Maven life cycle and can be a more efficient choice when using Rewrite within a CI workflow when combined with other Maven goals.
* `mvn rewrite:dryRun` - Generate warnings to the console for any recipe that would make changes and generates a diff file in each maven modules' `target` folder.
* `mvn rewrite:dryRunNoFork` - Generate warnings to the console for any recipe that would make changes and generates a diff file in each maven modules' `target` folder. This variant does not fork the Maven life cycle and can be a more efficient choice when using Rewrite within a CI workflow when combined with other Maven goals.
* `mvn rewrite:discover` - Generate a report of available recipes found on the classpath.

{% hint style="info" %}
_`rewrite`_ name-spaced properties can be used for substituting plugin properties

`-Drewrite.activeRecipes=org.example.R1, org.example.R2`

`-Drewrite.activeStyles=org.example.Style`

`-Drewrite.recipeArtifactCoordinates=org.example:your-recipe:1.0`
{% endhint %}

{% hint style="info" %}
The goals `rewrite:run` and `rewrite:dryRun` are configured to fork Maven's life cycle and are a better choice when running recipes via a stand-alone goal (`mvn rewrite:run`) because this will trigger all the necessary life-cycle goals prior to running rewrite's plugin. However, when using rewrite within the context of an integration build (`mvn deploy rewrite:run`) it may be more efficient to use the non-forking variants, as these will not cause duplicate life cycle phases to be called.
{% endhint %}

{% hint style="info" %}
In some circumstances, depending on how your project `pom.xml` is configured, you may get a [`NoPluginFoundForPrefixException`](https://cwiki.apache.org/confluence/display/MAVEN/NoPluginFoundForPrefixException). The root cause for this varies from `pom.xml` to `pom.xml`. In any case, as a quick fix to get unstuck, try referencing the fully-qualified rewrite-maven-plugin coordinates instead of the shorthand prefix. That is, try using `mvn org.openrewrite.maven:rewrite-maven-plugin:GOAL` (such as `mvn org.openrewrite.maven:rewrite-maven-plugin:run`, etc.) rather than `mvn rewrite:GOAL`.
{% endhint %}

## Plugin configuration

It generally makes sense to apply the plugin to the root `pom.xml` in a repository so that the configuration applies to each project in a multi-module project. The configuration block below contains an example of every configuration option. You may also find it beneficial to [check out the auto-generated rewrite-maven-plugin documentation](https://openrewrite.github.io/rewrite-maven-plugin/run-mojo.html) which contains `type` information among other things.

* `activeRecipes` - Explicitly turns on recipes by name (the name given in the `specs.openrewrite.org/v1beta/recipe` resource). No recipe is run unless explicitly turned on with this setting. You can set `activeRecipes` ad-hoc directly on the command line using `-Drewrite.activeRecipes=an.example.Recipe0,an.example.Recipe1`. For example, `mvn rewrite:run -Drewrite.activeRecipes=an.example.Recipe0`.
* `activeStyles` - Explicitly turns on a style by name (the name given in the `specs.openrewrite.org/v1beta/style` resource). No style is applied unless explicitly turned on with this setting. This can be invoked ad-hoc directly on the command line using `-Drewrite.activeStyles=an.example.Style0,an.example.Style1`. For example, `mvn rewrite:run -Drewrite.activeStyles=an.example.Style0`.
* `checkstyleDetectionEnabled` - Rewrite will, by default, detect the presence of the Checkstyle plugin and attempt to derive the coding style from the Checkstyle configuration file. If this flag is set to `false`, the plugin will not attempt to parse the Checkstyle configuration.
* `configLocation` - Where to look for an OpenRewrite YML configuration file somewhere in the project directory (or really anywhere on disk). If you want to customize this, prefixing the file name with the Maven property `${maven.multiModuleProjectDirectory}` is a handy way of ensuring that each module resolves the same configuration file relative to the root directory of the repository. This `configLocation` is (unless an absolute path is given) evaluated for _each_ module relative to that module's project directory.
* `dependencies` - To make pre-packaged OpenRewrite recipes available to the Maven plugin, add them as **plugin** dependencies.
* `failOnDryRunResults` - Boolean flag toggling whether `rewrite:dryRun` should throw an exception and non-zero exit code if changes are detected. Default is `false`.
* `exclusions` - Skips parsing for any paths matching these exclusions. Evaluated as a [PathMatcher](https://docs.oracle.com/javase/8/docs/api/java/nio/file/PathMatcher.html) glob pattern, where "\*\*" matches any number of directories and "\*" matches a single directory or filename.
*   `plainTextMasks` - A set of file masks to denote which files should be parsed as plain text. Evaluated as a [PathMatcher](https://docs.oracle.com/javase/8/docs/api/java/nio/file/PathMatcher.html) glob pattern, where "\*\*" matches any number of directories and "\*" matches a single directory or filename. **Exclusions take precedence over any plain text masks.** If this configuration is not explicitly defined the default masks are

    ```
    **/META-INF/services/**
    **/META-INF/spring.factories
    **/META-INF/spring/**
    **/*.bash
    **/*.bat
    **/CODEOWNERS
    **/*.config
    **/Dockerfile
    **/.gitattributes
    **/.gitignore
    **/.java-version
    **/*.jsp
    **/*.ksh
    **/*.md
    **/*.qute.java
    **/.sdkmanrc
    **/*.sh
    **/*.sql
    **/*.txt
    ```
* `pomCacheDirectory` - The directory where OpenRewrite will cache `pom.xml` and meta-data. The default value is `~/.rewrite-cache`
* `pomCacheEnabled` - This flag determines if OpenRewrite will cache `pom.xml` and meta-data using an on-disk cache. The default is `true`
* `sizeThresholdMb` - Threshold over which non-Java sources are ignored during parsing. The default threshold is 10Mb.
* `skipMavenParsing` - When enabled, skip parsing Maven `pom.xml`s, and any transitive poms, as source files. This can be an efficiency improvement in certain situations. Defaults to `false`. For example, `-DskipMavenParsing=true`.

{% hint style="info" %}
Note. the plugin scans the `compile`, `provided`, and `test` scopes for visitors, recipes, and styles and will automatically discover recipes on the project classpath.
{% endhint %}

{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.Spring</recipe>
          </activeRecipes>
          <activeStyles>
            <!-- This style is made up for sake of example. It isn't packaged with OpenRewrite -->
            <style>com.yourorg.SpringStyle</style>
          </activeStyles>
          <!-- These are default values, shown for example. It isn't necessary to supply these values manually: -->
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
          <failOnDryRunResults>false</failOnDryRunResults>
          <exclusions>
            <exclude>*/some/irrelevant/or/expensive/directory/**</exclude>
          </exclusions>
          <plainTextMasks>
            <plainTextMask>**/.txt</plainTextMask>
          </plainTextMasks>
        </configuration>
        <dependencies>
          <!-- This module is made up for sake of example. It isn't packaged with OpenRewrite -->
          <dependency>
            <groupId>com.yourorg.recipes</groupId>
            <artifactId>your-recipes</artifactId>
            <version>1.1.0</version>
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

## The "Run" goal

Execute `mvn rewrite:run` to run the active recipes and apply the changes. This will write changes locally to your source files on disk. Afterward, review the changes, and when you are comfortable with the changes, commit them. The `run` goal generates warnings in the build log wherever it makes changes to source files.

![Warnings showing which files were changed and by what visitors](<../.gitbook/assets/file-change-warning.png>)

After the goal finishes executing, run `git diff` to see what changes were made, review, and commit them.

![An example of changes made to spring-cloud/spring-cloud-sleuth the rewrite:run goal](<../.gitbook/assets/spring-cloud-example.png>)

## The "dryRun" goal

Execute `mvn rewrite:dryRun` to dry-run the active recipes and print which visitors would make changes to which files to the build log. This does not alter your source files at all. This goal can be used to preview the changes that would be made by a recipe.

`rewrite:dryRun` outputs a report in the form of a `patch` file, by default under `target/site/rewrite/rewrite.patch`, containing changes that would be made if you were to run `rewrite:run`. This file can be used with `git` or `diff` to view or apply the potential changes. For example, `git diff . target/site/rewrite/rewrite.patch`.

![Example rewrite.patch file produced by dryRun](<../.gitbook/assets/dry-run-example.png>)

`dryRun` can be used as a "gate" in a continuous integration environment by failing the build if `dryRun` detects changes to be made and `failOnDryRunResults` is set to `true`:

```xml
<configuration>
  <failOnDryRunResults>true</failOnDryRunResults>
</configuration>
```

If desired, `dryRun` can be configured to bind `dryRun` to desired maven phases. For example, the following configuration is sufficient to have `mvn verify` also run `rewrite:dryRun`:

```xml
<!-- truncating the pom.xml for brevity -->
<project>
  <build>
    <plugins>
      <plugin>
        <artifactId>rewrite-maven-plugin</artifactId>
        <configuration>...</configuration>
        <!-- this 'executions' block is the important part of binding the dryRun goal to the verify phase -->
        <executions>
          <execution>
            <goals>
              <goal>dryRun</goal>
            </goals>
            <phase>verify</phase>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

## The "Discover" goal

Execute `mvn rewrite:discover` to list the recipes that the OpenRewrite Maven plugin has found on your classpath and the recipes that you have activated in your plugin configuration.

![The beginning of rewrite:discover output, showing activated and available Recipes](<../.gitbook/assets/discover-output.png>)

The discover goal will produce additional details (including recipe configuration options) when setting the `details` flag:  `mvn rewrite:discover -Ddetail=true`

![Recipes showing their configurable parameters. "!" means a parameter is required.](<../.gitbook/assets/configurable-param.png>)

## Rewrite's pom cache

Rewrite's maven parser has its own resolution logic for pom files. (It will download metadata and poms from maven repositories). To speed up this process, there is a caching abstraction with two implementations (one that uses RocksDB and one that uses an in-memory cache to reduce the number of times a pom/metadata is downloaded from a repository.

The Maven plugin uses the RocksDB cache by default and will store this cache in `~/.rewrite-cache` . RocksDB is a high-performance, embedded database that is maintained by Facebook. The database engine is written in C++ and is used by the plugin via a JNI wrapper that has no transitive dependencies.

### Cache troubleshooting

In the very rare cases where the Maven plugin is unable to write to its on-disk folder or you encounter a serialization issue when reading/writing to the cache, there are several options available:

* Check if the folder is writable by the Maven process. The default folder location is under the user's home folder (`~/.rewrite-cache`) and you can choose an alternate location by using the plugin's `pomCacheDirectory` configuration property.
* It is safe to simply delete all of the contents within the cache folder. The first time the plugin is executed after deleting the cache, it will download and re-populate this cache folder.
* The `pomCacheEnabled` can be set to `false` in which case the plugin will use an in-memory cache instead. This will make running recipes slower when a project had deep dependency trees.

## Links

* [GitHub project](https://github.com/openrewrite/rewrite-maven-plugin)
* [Issue Tracker](https://github.com/openrewrite/rewrite-maven-plugin/issues)
