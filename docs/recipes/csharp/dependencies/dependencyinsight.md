---
sidebar_label: "Dependency insight for C#"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dependency insight for C#

**org.openrewrite.csharp.dependencies.DependencyInsight**

_Finds dependencies in `*.csproj` and `packages.config`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packagePattern | *Optional*. Package glob pattern used to match dependencies. | `Microsoft*` |
| `String` | version | *Optional*. Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used. All versions are searched by default. | `1.x` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|packagePattern|`null`|
|version|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="MyFirst.csproj" label="MyFirst.csproj">


###### Before
```xml title="MyFirst.csproj"
<Project ToolsVersion="4.0" DefaultTargets="FullPublish" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
    <PackageReference Include="Contoso.Utility.UsefulStuff" Version="3.6.*" />
    <PackageReference Include="Contoso.Utility.SomeOtherUsefulStuff" Version="3.6.0">
      <ExcludeAssets>compile</ExcludeAssets>
      <PrivateAssets>contentFiles</PrivateAssets>
    </PackageReference>
  </ItemGroup>
</Project>
```

###### After
```xml title="MyFirst.csproj"
<Project ToolsVersion="4.0" DefaultTargets="FullPublish" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
    <!--~~(Contoso.Utility.UsefulStuff:3.6.*)~~>--><PackageReference Include="Contoso.Utility.UsefulStuff" Version="3.6.*" />
    <!--~~(Contoso.Utility.SomeOtherUsefulStuff:3.6.0)~~>--><PackageReference Include="Contoso.Utility.SomeOtherUsefulStuff" Version="3.6.0">
      <ExcludeAssets>compile</ExcludeAssets>
      <PrivateAssets>contentFiles</PrivateAssets>
    </PackageReference>
  </ItemGroup>
</Project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- MyFirst.csproj
+++ MyFirst.csproj
@@ -3,2 +3,2 @@
<Project ToolsVersion="4.0" DefaultTargets="FullPublish" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <ItemGroup>
-   <PackageReference Include="Contoso.Utility.UsefulStuff" Version="3.6.*" />
-   <PackageReference Include="Contoso.Utility.SomeOtherUsefulStuff" Version="3.6.0">
+   <!--~~(Contoso.Utility.UsefulStuff:3.6.*)~~>--><PackageReference Include="Contoso.Utility.UsefulStuff" Version="3.6.*" />
+   <!--~~(Contoso.Utility.SomeOtherUsefulStuff:3.6.0)~~>--><PackageReference Include="Contoso.Utility.SomeOtherUsefulStuff" Version="3.6.0">
      <ExcludeAssets>compile</ExcludeAssets>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe DependencyInsight
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.csharp.dependencies.DependencyInsight" />

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
