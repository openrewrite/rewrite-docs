---
sidebar_label: "Move to a later Java version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Move to a later Java version

**io.moderne.devcenter.JavaVersionUpgrade**

_Determine the current state of a repository relative to a desired Java version upgrade._

## Recipe source

[GitHub](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/java/io/moderne/devcenter/JavaVersionUpgrade.java), 
[Issue Tracker](https://github.com/moderneinc/rewrite-devcenter/issues), 
[Maven Central](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-devcenter/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `int` | majorVersion | The major version of Java to upgrade to. | `24` |
| `String` | upgradeRecipe | *Optional*. The recipe to use to upgrade. | `org.openrewrite.java.migrate.UpgradeToJava21` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.JavaVersionUpgradeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.JavaVersionUpgradeExample
displayName: Move to a later Java version example
recipeList:
  - io.moderne.devcenter.JavaVersionUpgrade:
      majorVersion: 24
      upgradeRecipe: org.openrewrite.java.migrate.UpgradeToJava21
```

Now that `com.yourorg.JavaVersionUpgradeExample` has been defined, activate it and take a dependency on `io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.JavaVersionUpgradeExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.JavaVersionUpgradeExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>io.moderne.recipe</groupId>
            <artifactId>rewrite-devcenter</artifactId>
            <version>{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaVersionUpgrade --recipe-option "majorVersion=24" --recipe-option "upgradeRecipe=org.openrewrite.java.migrate.UpgradeToJava21"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.devcenter.JavaVersionUpgrade" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.devcenter.table.UpgradesAndMigrations" label="UpgradesAndMigrations">

### Upgrades and migrations
**io.moderne.devcenter.table.UpgradesAndMigrations**

_Progress towards organizational objectives on library or language migrations and upgrades._

| Column Name | Description |
| ----------- | ----------- |
| Card | The display name of the DevCenter card |
| Ordinal | The ordinal position of this value relative to other values. |
| Value | The display value of the current state of this repository. |
| Minimum version | The minimum matching version that is currently in use. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Peter Streef](mailto:peter@moderne.io), [Bryce Tompkins](mailto:bryce@moderne.io)
