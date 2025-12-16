---
sidebar_label: "Find reachable methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find reachable methods

**io.moderne.azul.search.FindReachableMethods**

_Find all methods defined in the repository's source code that are reachable._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `URL` | azulUrl | 'Azul Intelligence Cloud endpoint. | `https://YOUR_ENDPOINT.azul.com` |
| `String` | azulApiKey | API key used to make REST requests to Azul Intelligence Cloud. | `your-api-key` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|azulUrl|`URI.create(requireNonNull(properties.getProperty("azul.url"))).toURL()`|
|azulApiKey|`requireNonNull(properties.getProperty("azul.key"))`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package io.moderne.api.gateway;
import java.security.Principal;
public class AuthenticationHelper {
    public void getUserDetails(Principal principal) {
        System.out.println("details");
    }
}
```

###### After
```java
package io.moderne.api.gateway;
import java.security.Principal;
public class AuthenticationHelper {
    public void /*~~(11/23/2024 17:37:41)~~>*/getUserDetails(Principal principal) {
        System.out.println("details");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
import java.security.Principal;
public class AuthenticationHelper {
-   public void getUserDetails(Principal principal) {
+   public void /*~~(11/23/2024 17:37:41)~~>*/getUserDetails(Principal principal) {
        System.out.println("details");
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
name: com.yourorg.FindReachableMethodsExample
displayName: Find reachable methods example
recipeList:
  - io.moderne.azul.search.FindReachableMethods: 
      azulUrl: https://YOUR_ENDPOINT.azul.com
      azulApiKey: your-api-key
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindReachableMethods --recipe-option "azulUrl=https://YOUR_ENDPOINT.azul.com" --recipe-option "azulApiKey=your-api-key"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-azul:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_AZUL}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.azul.search.FindReachableMethods" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.azul.table.ReachableMethods" label="ReachableMethods">

### Reachable methods
**io.moderne.azul.table.ReachableMethods**

_Methods in a repository's source code that are reachable. This data table does not contain information about reachability in libraries._

| Column Name | Description |
| ----------- | ----------- |
| Class name | The fully qualified name of the class that is reachable. |
| Method name | The name of the method that is reachable along with its argument types. |
| Last used | The date and time when the method was last used. |
| AppEnv | The 'AppEnv' as defined by Azul Intelligence Cloud. |

</TabItem>

<TabItem value="io.moderne.azul.table.UnmatchedReachableMethods" label="UnmatchedReachableMethods">

### Unmatched reachable methods
**io.moderne.azul.table.UnmatchedReachableMethods**

_Methods that exist in a reachability dataset but didn't match repository source code._

| Column Name | Description |
| ----------- | ----------- |
| Class name | The fully qualified name of the class that is reachable. |
| Method name | The name of the method that is reachable along with its argument types. |
| Last used | The date and time when the method was last used. |
| AppEnv | The 'AppEnv' as defined by Azul Intelligence Cloud. |

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
