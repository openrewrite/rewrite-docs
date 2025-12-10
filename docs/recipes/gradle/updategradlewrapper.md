---
sidebar_label: "Update Gradle wrapper"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update Gradle wrapper

**org.openrewrite.gradle.UpdateGradleWrapper**

_Update the version of Gradle used in an existing Gradle wrapper. Queries services.gradle.org to determine the available releases, but prefers the artifact repository URL which already exists within the wrapper properties file. If your artifact repository does not contain the same Gradle distributions as services.gradle.org, then the recipe may suggest a version which is not available in your artifact repository._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateGradleWrapper.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. Defaults to the latest release available from services.gradle.org if not specified. | `7.x` |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". Valid options: `bin`, `all` |  |
| `Boolean` | addIfMissing | *Optional*. Add a Gradle wrapper, if it's missing. Defaults to `true`. |  |
| `String` | wrapperUri | *Optional*. The URI of the Gradle wrapper distribution.<br />Specifies a custom location from which to download the Gradle wrapper scripts (gradlew, gradlew.bat, etc.). This is useful for setting up the Gradle wrapper without relying on Gradle's official distribution services.<br /><br />When this option is set, the version and distribution fields must not be specified — only one source of truth is allowed. The URI should point to a valid and reachable Gradle wrapper distribution (typically a .zip archive containing the wrapper files).<br />This is particularly helpful in environments where access to Gradle's central services is restricted or where custom Gradle wrapper setups are required.<br />If the URI is inaccessible, the recipe will leave the existing wrapper files in the repository unchanged, as they are generally compatible with various Gradle versions. | `https://services.gradle.org/distributions/gradle-8.5-bin.zip` |
| `String` | distributionChecksum | *Optional*. The SHA-256 checksum of the Gradle distribution. If specified, the recipe will add the checksum along with the custom distribution URL. | `29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Micronaut 3.x to 4.x](/recipes/java/micronaut/micronaut3to4migration.md)
* [Migrate from Spring Boot 1.x to 2.0](/recipes/java/spring/boot2/upgradespringboot_2_0.md)
* [Migrate to Gradle 5 from Gradle 4](/recipes/gradle/migratetogradle5.md)
* [Migrate to Gradle 6 from Gradle 5](/recipes/gradle/migratetogradle6.md)
* [Migrate to Gradle 7 from Gradle 6](/recipes/gradle/migratetogradle7.md)
* [Migrate to Gradle 8 from Gradle 7](/recipes/gradle/migratetogradle8.md)
* [Migrate to Gradle 9 from Gradle 8](/recipes/gradle/migratetogradle9.md)
* [Migrate to Spring Boot 2.1](/recipes/java/spring/boot2/upgradespringboot_2_1.md)
* [Migrate to Spring Boot 2.2](/recipes/java/spring/boot2/upgradespringboot_2_2.md)
* [Migrate to Spring Boot 2.3](/recipes/java/spring/boot2/upgradespringboot_2_3.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Upgrade Android Gradle Plugin (AGP) version](/recipes/android/upgradeandroidgradlepluginversion.md)
* [Upgrade plugins to Java 17 compatible versions](/recipes/java/migrate/upgradepluginsforjava17.md)
* [Upgrade plugins to Java 21 compatible versions](/recipes/java/migrate/upgradepluginsforjava21.md)
* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|version|`7.4.2`|
|distribution|`null`|
|addIfMissing|`null`|
|wrapperUri|`null`|
|distributionChecksum|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4-bin.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

###### After
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
distributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
-distributionUrl=https\://services.gradle.org/distributions/gradle-7.4-bin.zip
+distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
zipStoreBase=GRADLE_USER_HOME
@@ -6,0 +6,1 @@
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
+distributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda

```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.UpdateGradleWrapper")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
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
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.gradle.UpdateGradleWrapper")
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

<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateGradleWrapper
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
