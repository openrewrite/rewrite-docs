---
sidebar_label: "Find annotation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find annotation

**org.openrewrite.kubernetes.search.FindMissingOrInvalidAnnotation**

_Find annotations that optionally match a given value._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | annotationName | The name of the annotation to search for the existence of. | `mycompany.io/annotation` |
| `String` | value | *Optional*. An optional regex that will validate values that match. | `value.*` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|annotationName|`mycompany.io/annotation`|
|value|`null`|
|fileMatcher|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod1
  annotations:
    mycompany.io/something: "hasvalue"
---
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
  annotations:
    mycompany.io/annotation: "novalue"
---
apiVersion: apps/v1
kind: Deployment
spec:
    template:
        spec:
            metadata:
                annotations:
                    mycompany.io/something: "hasvalue"
            containers:
            - name: app
              image: repo/app:latest
            - name: sidecar
              image: repo/sidecar:dev
```

###### After
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod1
  ~~(missing:mycompany.io/annotation)~~>annotations:
    mycompany.io/something: "hasvalue"
---
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
  annotations:
    mycompany.io/annotation: "novalue"
---
apiVersion: apps/v1
kind: Deployment
spec:
    template:
        spec:
            metadata:
                ~~(missing:mycompany.io/annotation)~~>annotations:
                    mycompany.io/something: "hasvalue"
            containers:
            - name: app
              image: repo/app:latest
            - name: sidecar
              image: repo/sidecar:dev
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
metadata:
  name: mypod1
- annotations:
+ ~~(missing:mycompany.io/annotation)~~>annotations:
    mycompany.io/something: "hasvalue"
@@ -21,1 +21,1 @@
        spec:
            metadata:
-               annotations:
+               ~~(missing:mycompany.io/annotation)~~>annotations:
                    mycompany.io/something: "hasvalue"
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
name: com.yourorg.FindMissingOrInvalidAnnotationExample
displayName: Find annotation example
recipeList:
  - org.openrewrite.kubernetes.search.FindMissingOrInvalidAnnotation: 
      annotationName: mycompany.io/annotation
      value: value.*
      fileMatcher: '**/pod-*.yml'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindMissingOrInvalidAnnotation --recipe-option "annotationName=mycompany.io/annotation" --recipe-option "value=value.*" --recipe-option "fileMatcher='**/pod-*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindMissingOrInvalidAnnotation" />

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Jon Brisbin](mailto:jon@jbrisbin.com), Aaron Gershman, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
