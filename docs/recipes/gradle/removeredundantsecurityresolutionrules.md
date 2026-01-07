---
sidebar_label: "Remove redundant security resolution rules"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove redundant security resolution rules

**org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules**

_Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified._

### Tags

* [security](/reference/recipes-by-tag#security)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/RemoveRedundantSecurityResolutionRules.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | securityPattern | *Optional*. A regular expression pattern to identify security-related resolution rules by matching against the `because` clause. Rules matching this pattern will be considered for removal. The pattern is searched within the clause, so a `because` containing multiple identifiers (e.g., `CVE-2024-1234, GHSA-abcd-1234-efgh`) will match if any identifier matches. Default pattern matches CVE identifiers (e.g., `CVE-2024-1234`) and GitHub Security Advisory identifiers (e.g., `GHSA-xxxx-xxxx-xxxx`). | `(CVE-\d|GHSA-[a-z0-9])` |

## Examples
##### Example 1
`RemoveRedundantSecurityResolutionRulesGroovyTest#removeRedundantCveRule`

###### Parameters
| Parameter | Value |
| --- | --- |
|securityPattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories { mavenCentral() }
configurations.all {
    resolutionStrategy.eachDependency { details ->
        if (details.requested.group == 'com.fasterxml.jackson.core' && details.requested.name == 'jackson-databind') {
            details.useVersion('2.12.5')
            details.because('CVE-2024-BAD')
        }
    }
}
dependencies {
    implementation platform('org.springframework.boot:spring-boot-dependencies:3.3.3')
    implementation 'com.fasterxml.jackson.core:jackson-databind'
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories { mavenCentral() }
dependencies {
    implementation platform('org.springframework.boot:spring-boot-dependencies:3.3.3')
    implementation 'com.fasterxml.jackson.core:jackson-databind'
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -5,8 +5,0 @@
}
repositories { mavenCentral() }
-configurations.all {
-   resolutionStrategy.eachDependency { details ->
-       if (details.requested.group == 'com.fasterxml.jackson.core' && details.requested.name == 'jackson-databind') {
-           details.useVersion('2.12.5')
-           details.because('CVE-2024-BAD')
-       }
-   }
-}
dependencies {
```
</TabItem>
</Tabs>

---

##### Example 2
`RemoveRedundantSecurityResolutionRulesKotlinTest#removeRedundantCveRule`

###### Parameters
| Parameter | Value |
| --- | --- |
|securityPattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="buildGradleKts" label="buildGradleKts">


###### Before
```buildGradleKts
plugins {
    java
}
repositories { mavenCentral() }
configurations.all {
    resolutionStrategy.eachDependency {
        if (requested.group == "com.fasterxml.jackson.core" && requested.name == "jackson-databind") {
            useVersion("2.12.5")
            because("CVE-2024-BAD")
        }
    }
}
dependencies {
    implementation(platform("org.springframework.boot:spring-boot-dependencies:3.3.3"))
    implementation("com.fasterxml.jackson.core:jackson-databind")
}
```

###### After
```buildGradleKts
plugins {
    java
}
repositories { mavenCentral() }
dependencies {
    implementation(platform("org.springframework.boot:spring-boot-dependencies:3.3.3"))
    implementation("com.fasterxml.jackson.core:jackson-databind")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,8 +5,0 @@
}
repositories { mavenCentral() }
-configurations.all {
-   resolutionStrategy.eachDependency {
-       if (requested.group == "com.fasterxml.jackson.core" && requested.name == "jackson-databind") {
-           useVersion("2.12.5")
-           because("CVE-2024-BAD")
-       }
-   }
-}
dependencies {
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
    activeRecipe("org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules")
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
        activeRecipe("org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules")
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
mod run . --recipe RemoveRedundantSecurityResolutionRules
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
