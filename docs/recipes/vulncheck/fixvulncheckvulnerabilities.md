---
sidebar_label: "Use VulnCheck Exploit Intelligence to fix vulnerabilities"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use VulnCheck Exploit Intelligence to fix vulnerabilities

**io.moderne.vulncheck.FixVulnCheckVulnerabilities**

_This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from VulnCheck Vulnerability Intelligence. The recipe has an option to limit fixes to only those vulnerabilities that have evidence of exploitation at various levels of severity._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | apiToken | The API token for the VulnCheck api | `A_TOKEN_GENERATED_FROM_VULNCHECK` |
| `String` | scope | *Optional*. Match dependencies with the specified scope. Default is `compile`. An explanation of what each scope means can be found in the [Apache Maven documentation](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html#Dependency_Scope). Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |
| `Boolean` | overrideTransitive | *Optional*. When enabled transitive dependencies with vulnerabilities will have their versions overridden. By default only direct dependencies have their version numbers upgraded. | `false` |
| `UpgradeDelta` | maximumUpgradeDelta | *Optional*. The maximum difference to allow when suggesting a dependency version upgrade. Patch version upgrades are the default and safest option, as patch releases assert full backwards compatibility with no breaking changes. Minor version upgrades can introduce new features but do not _typically_ include breaking changes. Major version upgrades will typically require code changes above and beyond this recipe.  Valid options: `patch`, `minor`, `major` | `patch` |
| `String` | exploitMaturity | *Optional*. Fix only those vulnerabilities that have an exploit maturity level equal to or greater than the specified level. Valid options: `public`, `commercial`, `weaponized` | `weaponized` |


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FixVulnCheckVulnerabilitiesExample
displayName: Use VulnCheck Exploit Intelligence to fix vulnerabilities example
recipeList:
  - io.moderne.vulncheck.FixVulnCheckVulnerabilities: 
      apiToken: A_TOKEN_GENERATED_FROM_VULNCHECK
      scope: compile
      overrideTransitive: false
      maximumUpgradeDelta: patch
      exploitMaturity: weaponized
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FixVulnCheckVulnerabilities --recipe-option "apiToken=A_TOKEN_GENERATED_FROM_VULNCHECK" --recipe-option "scope=compile" --recipe-option "overrideTransitive=false" --recipe-option "maximumUpgradeDelta=patch" --recipe-option "exploitMaturity=weaponized"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-vulncheck:{{VERSION_IO_MODERNE_RECIPE_REWRITE_VULNCHECK}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.vulncheck.FixVulnCheckVulnerabilities" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

<TabItem value="org.openrewrite.java.dependencies.table.VulnerabilityReport" label="VulnerabilityReport">

### Vulnerability report
**org.openrewrite.java.dependencies.table.VulnerabilityReport**

_A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs._

| Column Name | Description |
| ----------- | ----------- |
| Project | The name of the project / module taking the dependency. Relevant in repositories with multiple modules. |
| CVE | The CVE number. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Fixed in version | The minimum version that is no longer vulnerable. |
| Last affected version | The last version which was vulnerable. |
| Version within delta | The difference between the version in use and the fixed version is within the configured maximum version delta. The recipe attempted to upgrade the version in use to a fixed version. |
| Summary | The summary of the CVE. |
| Base score | The calculated base score. |
| Depth | Zero for direct dependencies. |
| CWEs | Common Weakness Enumeration (CWE) identifiers; semicolon separated. |
| EPSS | EPSS probability score (0.0 to 1.0), or null if no EPSS data available. |

</TabItem>

<TabItem value="io.moderne.vulncheck.table.VulnerabilityReportWithExploits" label="VulnerabilityReportWithExploits">

### Vulnerability report with exploit intelligence
**io.moderne.vulncheck.table.VulnerabilityReportWithExploits**

_A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs and enriched by VulnCheck exploit data._

| Column Name | Description |
| ----------- | ----------- |
| Project | The name of the project / module taking the dependency. Relevant in repositories with multiple modules. |
| CVE | The CVE number. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Fixed in version | The minimum version that is no longer vulnerable. |
| Fixable with version update only | Whether the vulnerability is likely to be fixed by increasing the dependency version only, with no code modifications required. This is a heuristic which assumes that the dependency is accurately versioned according to [semver](https://semver.org/). |
| Summary | The summary of the CVE. |
| Base score | The calculated base score. |
| Depth | Zero for direct dependencies. |
| CWEs | Common Weakness Enumeration (CWE) identifiers; semicolon separated. |
| Exploit maturity | The maturity of the exploit. |
| Reported exploit | Whether the vulnerability has been exploited. |
| Reported exploited by threat actors | Whether the vulnerability has been exploited by threat actors. |
| Reported exploited by ransomware | Whether the vulnerability has been exploited by ransomware. |
| Reported exploited by botnets | Whether the vulnerability has been exploited by botnets. |

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
