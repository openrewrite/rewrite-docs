---
sidebar_label: "Dependency resolution diagnostic"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dependency resolution diagnostic

**org.openrewrite.java.dependencies.DependencyResolutionDiagnostic**

_Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution.   The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions.   The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyResolutionDiagnostic.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | *Optional*. The group ID of a dependency to attempt to download from the repository. Default value is "com.fasterxml.jackson.core". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `com.fasterxml.jackson.core` |
| `String` | artifactId | *Optional*. The artifact ID of a dependency to attempt to download from the repository. Default value is "jackson-core". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `jackson-core` |
| `String` | version | *Optional*. The version of a dependency to attempt to download from the repository. Default value is "2.16.0". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `2.16.0` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`null`|
|artifactId|`null`|
|version|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id("java")
}
```

###### After
```groovy title="build.gradle"
/*~~(build.gradle is a Gradle build file, but it is missing a GradleProject marker.)~~>*/plugins {
    id("java")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -1,1 +1,1 @@
-plugins {
+/*~~(build.gradle is a Gradle build file, but it is missing a GradleProject marker.)~~>*/plugins {
    id("java")
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-dependencies` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.dependencies.DependencyResolutionDiagnostic")
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

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.dependencies.DependencyResolutionDiagnostic")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

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
            <recipe>org.openrewrite.java.dependencies.DependencyResolutionDiagnostic</recipe>
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

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-dependencies:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dependencies.DependencyResolutionDiagnostic -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe DependencyResolutionDiagnostic
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyResolutionDiagnostic" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.dependencies.table.RepositoryAccessibilityReport" label="RepositoryAccessibilityReport">

### Repository accessibility report
**org.openrewrite.java.dependencies.table.RepositoryAccessibilityReport**

_Listing of all dependency repositories and whether they are accessible._

| Column Name | Description |
| ----------- | ----------- |
| Repository URI | The URI of the repository |
| Ping exception type | Empty if the repository responded to a ping. Otherwise, the type of exception encountered when attempting to access the repository. |
| Ping error message | Empty if the repository was accessible. Otherwise, the error message encountered when attempting to access the repository. |
| Ping HTTP code | The HTTP response code returned by the repository. May be empty for non-HTTP repositories. |
| Dependency resolution exception type | Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the type of exception encountered when attempting to access the repository. |
| Dependency resolution error message | Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the error message encountered when attempting to access the repository. |

</TabItem>

<TabItem value="org.openrewrite.java.dependencies.table.GradleDependencyConfigurationErrors" label="GradleDependencyConfigurationErrors">

### Gradle dependency configuration errors
**org.openrewrite.java.dependencies.table.GradleDependencyConfigurationErrors**

_Records Gradle dependency configurations which failed to resolve during parsing. Partial success/failure is common, a failure in this list does not mean that every dependency failed to resolve._

| Column Name | Description |
| ----------- | ----------- |
| Project path | The path of the project which contains the dependency configuration. |
| Configuration name | The name of the dependency configuration which failed to resolve. |
| Exception type | The type of exception encountered when attempting to resolve the dependency configuration. |
| Error message | The error message encountered when attempting to resolve the dependency configuration. |

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
