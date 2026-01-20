---
sidebar_label: "Convert annotated abstract method to field"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Convert annotated abstract method to field

**org.openrewrite.tapestry.ConvertAnnotatedMethodToField**

_Converts abstract getter methods annotated with `sourceAnnotation` to private fields annotated with `targetAnnotation`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | sourceAnnotation | The fully qualified name of the annotation to find on abstract getter methods. | `org.apache.tapestry.annotations.InjectObject` |
| `String` | targetAnnotation | The fully qualified name of the annotation to add to the generated field. | `org.apache.tapestry5.ioc.annotations.Inject` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Tapestry 4 to Tapestry 5](/recipes/tapestry/migratetapestry4to5.md)

## Examples
##### Example 1
`ConvertInjectObjectToInjectTest#convertsInjectObjectToInject`

###### Parameters
| Parameter | Value |
| --- | --- |
|sourceAnnotation|`org.apache.tapestry.annotations.InjectObject`|
|targetAnnotation|`org.apache.tapestry5.ioc.annotations.Inject`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import org.apache.tapestry.annotations.InjectObject;

public abstract class MyPage {

    @InjectObject("service:myService")
    public abstract MyService getMyService();

    public void doWork() {
        getMyService().doSomething();
    }
}
```

###### After
```java
package com.example;

import org.apache.tapestry5.ioc.annotations.Inject;

public abstract class MyPage {
    @Inject private MyService myService;

    public void doWork() {
        getMyService().doSomething();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
package com.example;

-import org.apache.tapestry.annotations.InjectObject;
+import org.apache.tapestry5.ioc.annotations.Inject;

@@ -6,0 +6,1 @@

public abstract class MyPage {
+   @Inject private MyService myService;

@@ -7,3 +8,0 @@
public abstract class MyPage {

-   @InjectObject("service:myService")
-   public abstract MyService getMyService();
-
    public void doWork() {
```
</TabItem>
</Tabs>

---

##### Example 2
`ConvertInjectStateToSessionStateTest#convertsInjectStateToSessionState`

###### Parameters
| Parameter | Value |
| --- | --- |
|sourceAnnotation|`org.apache.tapestry.annotations.InjectState`|
|targetAnnotation|`org.apache.tapestry5.annotations.SessionState`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

import org.apache.tapestry.annotations.InjectState;

public abstract class MyPage {

    @InjectState("visit")
    public abstract Visit getVisit();

    public void doWork() {
        getVisit().getUserId();
    }
}
```

###### After
```java
package com.example;

import org.apache.tapestry5.annotations.SessionState;

public abstract class MyPage {
    @SessionState private Visit visit;

    public void doWork() {
        getVisit().getUserId();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
package com.example;

-import org.apache.tapestry.annotations.InjectState;
+import org.apache.tapestry5.annotations.SessionState;

@@ -6,0 +6,1 @@

public abstract class MyPage {
+   @SessionState private Visit visit;

@@ -7,3 +8,0 @@
public abstract class MyPage {

-   @InjectState("visit")
-   public abstract Visit getVisit();
-
    public void doWork() {
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
name: com.yourorg.ConvertAnnotatedMethodToFieldExample
displayName: Convert annotated abstract method to field example
recipeList:
  - org.openrewrite.tapestry.ConvertAnnotatedMethodToField: 
      sourceAnnotation: org.apache.tapestry.annotations.InjectObject
      targetAnnotation: org.apache.tapestry5.ioc.annotations.Inject
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ConvertAnnotatedMethodToField --recipe-option "sourceAnnotation=org.apache.tapestry.annotations.InjectObject" --recipe-option "targetAnnotation=org.apache.tapestry5.ioc.annotations.Inject"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-tapestry:{{VERSION_IO_MODERNE_RECIPE_REWRITE_TAPESTRY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.tapestry.ConvertAnnotatedMethodToField" />

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
