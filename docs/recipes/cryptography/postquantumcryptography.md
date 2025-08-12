---
sidebar_label: "Post quantum cryptography"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Post quantum cryptography

**io.moderne.cryptography.PostQuantumCryptography**

_This recipe searches for instances in code that may be impacted by post quantum cryptography. Applications may need to support larger key sizes, different algorithms, or use crypto agility to handle the migration. The recipe includes detection of hardcoded values that affect behavior in a post-quantum world, programmatic configuration that may prevent algorithm changes, and general cryptographic usage patterns that should be reviewed._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PostQuantumCryptography
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-cryptography:{{VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.cryptography.PostQuantumCryptography" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.analysis.java.taint.table.TaintFlowTable" label="TaintFlowTable">

### Taint flow
**org.openrewrite.analysis.java.taint.table.TaintFlowTable**

_Records taint flows from sources to sinks with their taint types._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Source | The source code where taint originates. |
| Sink | The sink code where taint flows to. |
| Taint type | The taint type that matched at the sink. |

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

<TabItem value="io.moderne.cryptography.table.InsecureSetProperties" label="InsecureSetProperties">

### Insecure `Security.setProperty(..)` uses.
**io.moderne.cryptography.table.InsecureSetProperties**

_An itemization of the properties used in such calls_

| Column Name | Description |
| ----------- | ----------- |
| Source code | The source code where the insecure property is defined, which may not contain a `Security.setProperty(..)` call directly if the property was defined somewhere and through data flow analysis we've concluded that it is later used in a `Security.setProperty(..)` call. |
| Property | The property that is set insecurely, e.g. `crypto.policy`. |

</TabItem>

<TabItem value="io.moderne.devcenter.table.SecurityIssues" label="SecurityIssues">

### Security issues
**io.moderne.devcenter.table.SecurityIssues**

_Security issues in the repository._

| Column Name | Description |
| ----------- | ----------- |
| Ordinal | The ordinal position of this issue relative to other issues. |
| Issue name | The name of the security issue. |

</TabItem>

</Tabs>

## Contributors

Jonathan Schneider
