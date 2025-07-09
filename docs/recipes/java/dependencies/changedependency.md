---
sidebar_label: "Change Gradle or Maven dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Gradle or Maven dependency

**org.openrewrite.java.dependencies.ChangeDependency**

_Change the group ID, artifact ID, and/or the version of a specified Gradle or Maven dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/ChangeDependency.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old group ID to replace. The group ID is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifact ID to replace. The artifact ID is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `rewrite-testing-frameworks` |
| `String` | newGroupId | *Optional*. The new group ID to use. Defaults to the existing group ID. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | *Optional*. The new artifact ID to use. Defaults to the existing artifact ID. | `rewrite-testing-frameworks` |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. If the new dependency has a managed version, this flag can be used to explicitly set the version on the dependency. The default for this flag is `false`. |  |
| `Boolean` | changeManagedDependency | *Optional*. Also update the dependency management section. The default for this flag is `true`. |  |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`commons-lang`|
|oldArtifactId|`commons-lang`|
|newGroupId|`org.apache.commons`|
|newArtifactId|`commons-lang3`|
|newVersion|`3.11.x`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|
|changeManagedDependency|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "commons-lang:commons-lang:2.6"
}
```

###### After
```groovy title="build.gradle"
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "org.apache.commons:commons-lang3:3.11"
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   implementation "commons-lang:commons-lang:2.6"
+   implementation "org.apache.commons:commons-lang3:3.11"
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyExample
displayName: Change Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
```

Now that `com.yourorg.ChangeDependencyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
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
            <recipe>com.yourorg.ChangeDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}</version>
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
mod run . --recipe ChangeDependency --recipe-option "oldGroupId=org.openrewrite.recipe" --recipe-option "oldArtifactId=rewrite-testing-frameworks" --recipe-option "newGroupId=corp.internal.openrewrite.recipe" --recipe-option "newArtifactId=rewrite-testing-frameworks" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.ChangeDependency" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
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
[Shannon Pamperl](mailto:shanman190@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Joan Viladrosa](mailto:joan@moderne.io), [steve-aom-elliott](mailto:steve.aom.elliott@gmail.com)
