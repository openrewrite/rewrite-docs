---
sidebar_label: "Migrate to Reactor 3.5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Reactor 3.5

**org.openrewrite.reactive.reactor.UpgradeReactor\_3\_5**

_Adopt to [breaking changes in Reactor 3.5](https://projectreactor.io/docs/core/3.4.26/api/deprecated-list.html)._

### Tags

* reactor

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

class TestClass {
    void create(String s) {
        Mono.deferWithContext(ctx -> Mono.just(s));
        Flux.deferWithContext(ctx -> Flux.just(s));
    }
}
```

###### After
```java
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

class TestClass {
    void create(String s) {
        Mono.deferContextual(ctx -> Mono.just(s));
        Flux.deferContextual(ctx -> Flux.just(s));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,2 +6,2 @@
class TestClass {
    void create(String s) {
-       Mono.deferWithContext(ctx -> Mono.just(s));
-       Flux.deferWithContext(ctx -> Flux.just(s));
+       Mono.deferContextual(ctx -> Mono.just(s));
+       Flux.deferContextual(ctx -> Flux.just(s));
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import reactor.core.publisher.Signal;

class TestClass {
    void getContext(Signal<String> signal) {
        signal.getContext();
    }
}
```

###### After
```java
import reactor.core.publisher.Signal;

class TestClass {
    void getContext(Signal<String> signal) {
        signal.getContextView();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
class TestClass {
    void getContext(Signal<String> signal) {
-       signal.getContext();
+       signal.getContextView();
    }
```
</TabItem>
</Tabs>

---

##### Example 3


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

class TestClass {
    void create(String s) {
        Mono.deferWithContext(ctx -> Mono.just(s));
        Flux.deferWithContext(ctx -> Flux.just(s));
    }
}
```

###### After
```java
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

class TestClass {
    void create(String s) {
        Mono.deferContextual(ctx -> Mono.just(s));
        Flux.deferContextual(ctx -> Flux.just(s));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,2 +6,2 @@
class TestClass {
    void create(String s) {
-       Mono.deferWithContext(ctx -> Mono.just(s));
-       Flux.deferWithContext(ctx -> Flux.just(s));
+       Mono.deferContextual(ctx -> Mono.just(s));
+       Flux.deferContextual(ctx -> Flux.just(s));
    }
```
</TabItem>
</Tabs>

---

##### Example 4


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import reactor.core.publisher.Signal;

class TestClass {
    void getContext(Signal<String> signal) {
        signal.getContext();
    }
}
```

###### After
```java
import reactor.core.publisher.Signal;

class TestClass {
    void getContext(Signal<String> signal) {
        signal.getContextView();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
class TestClass {
    void getContext(Signal<String> signal) {
-       signal.getContext();
+       signal.getContextView();
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
mod run . --recipe UpgradeReactor_3_5
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-reactive-streams:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REACTIVE_STREAMS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.reactive.reactor.UpgradeReactor_3_5" />

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
[Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
