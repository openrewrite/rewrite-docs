---
sidebar_label: "Add Kubernetes configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Kubernetes configuration

**org.openrewrite.kubernetes.AddConfiguration**

_Add default required configuration when it is missing._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | apiVersion | *Optional*. The Kubernetes resource API version to use. | `policy/v1beta1` |
| `String` | resourceKind | The Kubernetes resource type the configured is required on. | `PodSecurityPolicy` |
| `String` | configurationPath | A JsonPath expression to locate Kubernetes configuration. Must be an absolute path. | `$.spec` |
| `String` | value | The configuration that is added when necessary, including the key. | `privileged: false` |


## Used by

This recipe is used as part of the following composite recipes:

* [Ensure image pull policy is `Always`](/recipes/kubernetes/imagepullpolicyalways.md)
* [Ensure lifecycle rule on `StorageBucket`](/recipes/kubernetes/lifecycleruleonstoragebucket.md)
* [Limit root capabilities in a container](/recipes/kubernetes/limitcontainercapabilities.md)
* [No host IPC sharing](/recipes/kubernetes/nohostipcsharing.md)
* [No host network sharing](/recipes/kubernetes/nohostnetworksharing.md)
* [No host process ID sharing](/recipes/kubernetes/nohostprocessidsharing.md)
* [No privilege escalation](/recipes/kubernetes/noprivilegeescalation.md)
* [No privileged containers](/recipes/kubernetes/noprivilegedcontainers.md)
* [No root containers](/recipes/kubernetes/norootcontainers.md)
* [Read-only root filesystem](/recipes/kubernetes/readonlyrootfilesystem.md)

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|apiVersion|`null`|
|resourceKind|`Pod`|
|configurationPath|`$.spec`|
|value|`privileged: false`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx
```

###### After
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx
  privileged: false
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,0 +9,1 @@
    - name: nginx
      image: nginx
+ privileged: false

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddConfigurationExample
displayName: Add Kubernetes configuration example
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration: 
      apiVersion: policy/v1beta1
      resourceKind: PodSecurityPolicy
      configurationPath: $.spec
      value: 'privileged: false'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddConfiguration --recipe-option "apiVersion=policy/v1beta1" --recipe-option "resourceKind=PodSecurityPolicy" --recipe-option "configurationPath=$.spec" --recipe-option "value='privileged: false'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.AddConfiguration" />

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

Jonathan Schneider, Tyler Van Gorder, Aaron Gershman, Tim te Beek, Jon Brisbin, Knut Wannheden
