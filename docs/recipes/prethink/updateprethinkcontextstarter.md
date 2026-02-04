---
sidebar_label: "Update Prethink context (with AI)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update Prethink context (with AI)

**io.moderne.prethink.UpdatePrethinkContextStarter**

_Generate Moderne Prethink context files with AI-generated code comprehension, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. Maps tests to implementation methods and optionally generates AI summaries of what each test verifies when LLM provider is configured._

## Recipe source

[GitHub: UpdatePrethinkContextStarter.java](https://github.com/openrewrite/rewrite-prethink/blob/main/src/main/java/io/moderne/prethink/UpdatePrethinkContextStarter.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-prethink/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-prethink/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | provider | *Optional*. LLM provider for generating test summaries: openai, gemini, or poolside. | `poolside` |
| `String` | apiKey | *Optional*. API key for the LLM provider. | `ps-...` |
| `String` | model | *Optional*. Model name to use for generating test summaries. | `Malibu-v2.20251021` |
| `String` | baseUrl | *Optional*. Custom base URL for the LLM provider. | `https://divers.poolsi.de/openai/v1/` |
| `Integer` | requestsPerMinute | *Optional*. Rate limit for LLM requests. | `60` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find project metadata](../prethink/calm/findprojectmetadata)
* [Find service endpoints](../prethink/calm/findserviceendpoints)
* [Find database connections](../prethink/calm/finddatabaseconnections)
* [Find external service calls](../prethink/calm/findexternalservicecalls)
* [Find messaging connections](../prethink/calm/findmessagingconnections)
* [Find server configuration](../prethink/calm/findserverconfiguration)
* [Find data assets](../prethink/calm/finddataassets)
* [Find deployment artifacts](../prethink/calm/finddeploymentartifacts)
* [Find security configuration](../prethink/calm/findsecurityconfiguration)
* [Find service components](../prethink/calm/findservicecomponents)
* [Extract coding conventions](../prethink/extractcodingconventions)
* [Extract error handling patterns](../prethink/extracterrorpatterns)
* [Extract dependency usage patterns](../prethink/extractdependencyusage)
* [Export context files](../prethink/exportcontext)
  * displayName: `Coding Conventions`
  * shortDescription: `Naming patterns, import organization, and coding style`
  * longDescription: `Detected coding conventions including naming patterns (class suffixes, method prefixes), import organization, and documentation coverage. Use this to write code that matches the existing style of the codebase.`
  * dataTables: `[org.openrewrite.prethink.table.CodingConventions]`
* [Export context files](../prethink/exportcontext)
  * displayName: `Error Handling`
  * shortDescription: `Exception handling strategies and logging patterns`
  * longDescription: `Error handling patterns detected in the codebase including try-catch usage, exception types, handling strategies (log, rethrow, wrap, recover), and logging frameworks. Use this to handle errors consistently with existing patterns.`
  * dataTables: `[org.openrewrite.prethink.table.ErrorHandlingPatterns]`
* [Export context files](../prethink/exportcontext)
  * displayName: `Library Usage`
  * shortDescription: `How external libraries and frameworks are used`
  * longDescription: `Patterns of how external libraries are used throughout the codebase. Shows which classes are commonly imported from each library and typical usage patterns. Use this to use libraries consistently with existing code.`
  * dataTables: `[org.openrewrite.prethink.table.DependencyUsage]`
* [Find CALM relationships](../prethink/calm/findcalmrelationships)
* [Comprehend code with AI](../prethink/comprehendcode)
  * provider: `poolside`
  * model: `Malibu-v2.20251021`
* [Export context files](../prethink/exportcontext)
  * displayName: `Code Comprehension`
  * shortDescription: `AI-generated descriptions for classes and methods`
  * longDescription: `AI-generated descriptions of classes and methods. Use this to quickly understand what code does without reading every line. Particularly helpful for unfamiliar parts of the codebase.`
  * dataTables: `[io.moderne.prethink.table.MethodDescriptions, io.moderne.prethink.table.ClassDescriptions]`
* [Find test coverage mapping](../prethink/findtestcoverage)
  * provider: `poolside`
  * model: `Malibu-v2.20251021`
* [Export context files](../prethink/exportcontext)
  * displayName: `Test Coverage`
  * shortDescription: `Maps test methods to implementation methods they verify`
  * longDescription: `Maps test methods to the implementation methods they exercise. Use this to find existing tests for code you're modifying, understand what behaviors are already tested, and identify gaps in test coverage. When an LLM provider is configured, includes AI-generated summaries of what each test verifies.`
  * dataTables: `[io.moderne.prethink.table.TestMapping]`
* [Dependency report](../java/dependencies/dependencylist)
  * scope: `TestRuntime`
  * includeTransitive: `true`
  * validateResolvable: `false`
* [Export context files](../prethink/exportcontext)
  * displayName: `Dependencies`
  * shortDescription: `Project dependencies including transitive dependencies`
  * longDescription: `Complete dependency tree including transitive dependencies. Use this to understand what libraries the project uses and avoid suggesting dependencies that conflict with existing ones.`
  * dataTables: `[org.openrewrite.java.dependencies.table.DependencyListReport]`
* [Update Prethink context](../prethink/updateprethinkcontext)
* [Generate architecture mermaid diagram](../prethink/calm/generatecalmmermaiddiagram)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.prethink.UpdatePrethinkContextStarter
displayName: Update Prethink context (with AI)
description: |
  Generate Moderne Prethink context files with AI-generated code comprehension, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. Maps tests to implementation methods and optionally generates AI summaries of what each test verifies when LLM provider is configured.





recipeList:
  - io.moderne.prethink.calm.FindProjectMetadata
  - io.moderne.prethink.calm.FindServiceEndpoints
  - io.moderne.prethink.calm.FindDatabaseConnections
  - io.moderne.prethink.calm.FindExternalServiceCalls
  - io.moderne.prethink.calm.FindMessagingConnections
  - io.moderne.prethink.calm.FindServerConfiguration
  - io.moderne.prethink.calm.FindDataAssets
  - io.moderne.prethink.calm.FindDeploymentArtifacts
  - io.moderne.prethink.calm.FindSecurityConfiguration
  - io.moderne.prethink.calm.FindServiceComponents
  - io.moderne.prethink.ExtractCodingConventions
  - io.moderne.prethink.ExtractErrorPatterns
  - io.moderne.prethink.ExtractDependencyUsage
  - org.openrewrite.prethink.ExportContext:
      displayName: Coding Conventions
      shortDescription: Naming patterns, import organization, and coding style
      longDescription: Detected coding conventions including naming patterns (class suffixes, method prefixes), import organization, and documentation coverage. Use this to write code that matches the existing style of the codebase.
      dataTables: [org.openrewrite.prethink.table.CodingConventions]
  - org.openrewrite.prethink.ExportContext:
      displayName: Error Handling
      shortDescription: Exception handling strategies and logging patterns
      longDescription: Error handling patterns detected in the codebase including try-catch usage, exception types, handling strategies (log, rethrow, wrap, recover), and logging frameworks. Use this to handle errors consistently with existing patterns.
      dataTables: [org.openrewrite.prethink.table.ErrorHandlingPatterns]
  - org.openrewrite.prethink.ExportContext:
      displayName: Library Usage
      shortDescription: How external libraries and frameworks are used
      longDescription: Patterns of how external libraries are used throughout the codebase. Shows which classes are commonly imported from each library and typical usage patterns. Use this to use libraries consistently with existing code.
      dataTables: [org.openrewrite.prethink.table.DependencyUsage]
  - io.moderne.prethink.calm.FindCalmRelationships
  - io.moderne.prethink.ComprehendCode:
      provider: poolside
      model: Malibu-v2.20251021
  - org.openrewrite.prethink.ExportContext:
      displayName: Code Comprehension
      shortDescription: AI-generated descriptions for classes and methods
      longDescription: AI-generated descriptions of classes and methods. Use this to quickly understand what code does without reading every line. Particularly helpful for unfamiliar parts of the codebase.
      dataTables: [io.moderne.prethink.table.MethodDescriptions, io.moderne.prethink.table.ClassDescriptions]
  - io.moderne.prethink.FindTestCoverage:
      provider: poolside
      model: Malibu-v2.20251021
  - org.openrewrite.prethink.ExportContext:
      displayName: Test Coverage
      shortDescription: Maps test methods to implementation methods they verify
      longDescription: Maps test methods to the implementation methods they exercise. Use this to find existing tests for code you're modifying, understand what behaviors are already tested, and identify gaps in test coverage. When an LLM provider is configured, includes AI-generated summaries of what each test verifies.
      dataTables: [io.moderne.prethink.table.TestMapping]
  - org.openrewrite.java.dependencies.DependencyList:
      scope: TestRuntime
      includeTransitive: true
      validateResolvable: false
  - org.openrewrite.prethink.ExportContext:
      displayName: Dependencies
      shortDescription: Project dependencies including transitive dependencies
      longDescription: Complete dependency tree including transitive dependencies. Use this to understand what libraries the project uses and avoid suggesting dependencies that conflict with existing ones.
      dataTables: [org.openrewrite.java.dependencies.table.DependencyListReport]
  - org.openrewrite.prethink.UpdatePrethinkContext
  - io.moderne.prethink.calm.GenerateCalmMermaidDiagram

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-prethink` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("io.moderne.prethink.UpdatePrethinkContextStarter")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-prethink:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PRETHINK}}")
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
        rewrite("org.openrewrite.recipe:rewrite-prethink:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PRETHINK}}")
    }
    rewrite {
        activeRecipe("io.moderne.prethink.UpdatePrethinkContextStarter")
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
            <recipe>io.moderne.prethink.UpdatePrethinkContextStarter</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-prethink</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PRETHINK}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-prethink:RELEASE -Drewrite.activeRecipes=io.moderne.prethink.UpdatePrethinkContextStarter -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdatePrethinkContextStarter
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-prethink:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PRETHINK}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.UpdatePrethinkContextStarter" />

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
