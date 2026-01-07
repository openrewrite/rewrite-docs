---
sidebar_label: "Find React component"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find React component

**org.openrewrite.react.search.FindReactComponent**

_Locates usages of React components across the codebase including JSX elements and other references. If `componentName` is `null`, finds all React components._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | componentName | *Optional*. The name of the React component to find. If `null`, finds all React components. | `Button` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|componentName|`Button`|


<Tabs groupId="beforeAfter">
<TabItem value="tsx" label="tsx">


###### Before
```tsx
import {Button} from './components/Button';
import {Card} from './components/Card';

const App = () => {
    return <>
        <Button>Click me</Button>
        <Card>Content</Card>
    </>;
};
```

###### After
```tsx
import {/*~~>*/Button} from './components/Button';
import {Card} from './components/Card';

const App = () => {
    return <>
        /*~~>*/<Button>Click me</Button>
        <Card>Content</Card>
    </>;
};
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import {Button} from './components/Button';
+import {/*~~>*/Button} from './components/Button';
import {Card} from './components/Card';
@@ -6,1 +6,1 @@
const App = () => {
    return <>
-       <Button>Click me</Button>
+       /*~~>*/<Button>Click me</Button>
        <Card>Content</Card>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindReactComponent
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-react:{{VERSION_IO_MODERNE_RECIPE_REWRITE_REACT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.react.search.FindReactComponent" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.react.table.ReactComponentUses" label="ReactComponentUses">

### React component uses
**org.openrewrite.react.table.ReactComponentUses**

_Information about React component usages including imports, JSX tags, and other references._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that contains the component usage. |
| Component name | The name of the React component being used. |
| Usage type | The type of usage: 'import' (component is imported), 'jsx-tag' (component is used as JSX tag), 'declaration' (component is defined/declared), 'reference' (component is referenced in code), or 're-export' (component is re-exported). |
| Import type | For imports: 'named', 'default', 'namespace', or 'aliased'. For other usage types: null. |
| Alias name | The aliased name if the component was imported with an alias (e.g., 'CustomButton' for `import {Button as CustomButton}`). Otherwise null. |
| Import path | The import path/module specifier (e.g., './components/Button'). For JSX tags and references: null. |
| Component type | The type of React component: 'functional' for function components, 'class' for class components, 'forwardRef' for components wrapped with forwardRef(), 'memo' for components wrapped with memo(), 'lazy' for components wrapped with lazy(), or null if type cannot be determined. |

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
