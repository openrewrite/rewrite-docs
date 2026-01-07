---
sidebar_label: "Find AI libraries in use"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find AI libraries in use

**io.moderne.ai.FindLibrariesInUse**

_Scans codebases to identify usage of AI services. Detects AI libraries across Java dependencies. Useful for auditing and understanding AI integration patterns._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1
`FindAiLibrariesInUseTest#findLibraries`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
    testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    /*~~(org.springframework.ai:spring-ai-autoconfigure-model-chat-client:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-memory:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-embedding-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-image-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-openai:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-tool:1.1.0,org.springframework.ai:spring-ai-autoconfigure-retry:1.1.0,org.springframework.ai:spring-ai-client-chat:1.1.0,org.springframework.ai:spring-ai-commons:1.1.0,org.springframework.ai:spring-ai-model:1.1.0,org.springframework.ai:spring-ai-openai:1.1.0,org.springframework.ai:spring-ai-retry:1.1.0,org.springframework.ai:spring-ai-starter-model-openai:1.1.0,org.springframework.ai:spring-ai-template-st:1.1.0)~~>*/implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
    /*~~(dev.langchain4j:langchain4j-bedrock:1.8.0,dev.langchain4j:langchain4j-core:1.8.0)~~>*//*~~(software.amazon.awssdk:bedrockruntime:2.33.5)~~>*/testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -8,2 +8,2 @@
}
dependencies {
-   implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
-   testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
+   /*~~(org.springframework.ai:spring-ai-autoconfigure-model-chat-client:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-memory:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-embedding-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-image-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-openai:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-tool:1.1.0,org.springframework.ai:spring-ai-autoconfigure-retry:1.1.0,org.springframework.ai:spring-ai-client-chat:1.1.0,org.springframework.ai:spring-ai-commons:1.1.0,org.springframework.ai:spring-ai-model:1.1.0,org.springframework.ai:spring-ai-openai:1.1.0,org.springframework.ai:spring-ai-retry:1.1.0,org.springframework.ai:spring-ai-starter-model-openai:1.1.0,org.springframework.ai:spring-ai-template-st:1.1.0)~~>*/implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
+   /*~~(dev.langchain4j:langchain4j-bedrock:1.8.0,dev.langchain4j:langchain4j-core:1.8.0)~~>*//*~~(software.amazon.awssdk:bedrockruntime:2.33.5)~~>*/testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```
</TabItem>
</Tabs>

---

##### Example 2
`FindAiLibrariesInUseTest#findLibraries`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
    testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    /*~~(org.springframework.ai:spring-ai-autoconfigure-model-chat-client:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-memory:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-embedding-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-image-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-openai:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-tool:1.1.0,org.springframework.ai:spring-ai-autoconfigure-retry:1.1.0,org.springframework.ai:spring-ai-client-chat:1.1.0,org.springframework.ai:spring-ai-commons:1.1.0,org.springframework.ai:spring-ai-model:1.1.0,org.springframework.ai:spring-ai-openai:1.1.0,org.springframework.ai:spring-ai-retry:1.1.0,org.springframework.ai:spring-ai-starter-model-openai:1.1.0,org.springframework.ai:spring-ai-template-st:1.1.0)~~>*/implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
    /*~~(dev.langchain4j:langchain4j-bedrock:1.8.0,dev.langchain4j:langchain4j-core:1.8.0)~~>*//*~~(software.amazon.awssdk:bedrockruntime:2.33.5)~~>*/testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -8,2 +8,2 @@
}
dependencies {
-   implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
-   testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
+   /*~~(org.springframework.ai:spring-ai-autoconfigure-model-chat-client:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-memory:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-chat-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-embedding-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-image-observation:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-openai:1.1.0,org.springframework.ai:spring-ai-autoconfigure-model-tool:1.1.0,org.springframework.ai:spring-ai-autoconfigure-retry:1.1.0,org.springframework.ai:spring-ai-client-chat:1.1.0,org.springframework.ai:spring-ai-commons:1.1.0,org.springframework.ai:spring-ai-model:1.1.0,org.springframework.ai:spring-ai-openai:1.1.0,org.springframework.ai:spring-ai-retry:1.1.0,org.springframework.ai:spring-ai-starter-model-openai:1.1.0,org.springframework.ai:spring-ai-template-st:1.1.0)~~>*/implementation("org.springframework.ai:spring-ai-starter-model-openai:1.1.0")
+   /*~~(dev.langchain4j:langchain4j-bedrock:1.8.0,dev.langchain4j:langchain4j-core:1.8.0)~~>*//*~~(software.amazon.awssdk:bedrockruntime:2.33.5)~~>*/testImplementation("dev.langchain4j:langchain4j-bedrock:1.8.0")
}
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindLibrariesInUse
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-ai:{{VERSION_IO_MODERNE_RECIPE_REWRITE_AI}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.ai.FindLibrariesInUse" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.DependenciesInUse" label="DependenciesInUse">

### Dependencies in use
**org.openrewrite.maven.table.DependenciesInUse**

_Direct and transitive dependencies in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency. |
| Source set | The source set that contains the dependency. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Dated snapshot version | The resolved dated snapshot version or `null` if this dependency is not a snapshot. |
| Scope | Dependency scope. This will be `compile` if the dependency is direct and a scope is not explicitly specified in the POM. |
| Count | How many times does this dependency appear. |

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
