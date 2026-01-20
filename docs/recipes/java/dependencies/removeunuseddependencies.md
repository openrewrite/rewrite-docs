---
sidebar_label: "Remove unused dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove unused dependencies

**org.openrewrite.java.dependencies.RemoveUnusedDependencies**

_Scans through source code collecting references to types and methods, removing any dependencies that are not used from Maven or Gradle build files. This is best effort and not guaranteed to work well in all cases; false positives are still possible.  This recipe takes reflective access into account: - When reflective access to a class is made unambiguously via a string literal, such as: `Class.forName("java.util.List")` that is counted correctly. - When reflective access to a class is made ambiguously via anything other than a string literal no dependencies will be removed.  This recipe takes transitive dependencies into account: - When a direct dependency is not used but a transitive dependency it brings in _is_ in use the direct dependency is not removed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `List` | ignoredDependencies | *Optional*. A list of `groupId:artifactId` glob patterns for dependencies that should never be removed, even if they appear unused. For example, `com.google.*:*` would ignore all Google dependencies, and `*:lombok` would ignore Lombok regardless of group ID. | `org.projectlombok:lombok,com.google.*:*` |

## Example


###### Unchanged
```java
import java.util.List;
import java.util.ArrayList;
public class A {
    List<String> a = new ArrayList<>();
}
```

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>29.0-jre</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>app</artifactId>
    <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,7 +5,0 @@
    <artifactId>app</artifactId>
    <version>1</version>
-   <dependencies>
-       <dependency>
-           <groupId>com.google.guava</groupId>
-           <artifactId>guava</artifactId>
-           <version>29.0-jre</version>
-       </dependency>
-   </dependencies>
</project>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RemoveUnusedDependencies
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveUnusedDependencies" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.dependencies.table.DependencyUsageEvidence" label="DependencyUsageEvidence">

### Dependency usage evidence
**org.openrewrite.java.dependencies.table.DependencyUsageEvidence**

_Evidence showing that a dependency is in use in the project._

| Column Name | Description |
| ----------- | ----------- |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Evidence | The evidence showing this dependency is in use (e.g., a type name, property value, or transitive dependency). |
| Evidence type | The type of evidence: 'Type usage', 'Property/YAML reference', or 'Transitive dependency'. |
| Source path | The path to the source file where the evidence was found. |

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
