---
sidebar_label: "Find hard-coded loopback IPv4 addresses"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find hard-coded loopback IPv4 addresses

**org.openrewrite.text.FindHardcodedLoopbackAddresses**

_Locates mentions of hard-coded IPv4 addresses from the loopback IP range. The loopback IP range includes `127.0.0.0` to `127.255.255.255`. This detects the entire localhost/loopback subnet range, not just the commonly used `127.0.0.1`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="src/main/java/A.java" label="src/main/java/A.java">


###### Before
```java title="src/main/java/A.java"
class Test {
    void ipTest() {
        String localhost = "127.0.0.1";
        String loopback1 = "127.1.1.1";
        String loopback2 = "127.255.255.255";
        String loopback3 = "127.0.0.0";
        String nonLoopback = "128.0.0.1";
        String privateAddress = "192.168.1.1";
        String publicAddress = "8.8.8.8";
        String invalidAddress = "256.0.0.0";
        String springVersion = "5.2.2";
        String adding = "4.3+4.5";
        // address in a comment: 127.100.200.50
        // address in a comment: 127.0.0.1
        String date = "30.11.2017";
        String ikeaProduct = "805.721.99";
    }
}
```

###### After
```java title="src/main/java/A.java"
class Test {
    void ipTest() {
        String localhost = "~~>127.0.0.1";
        String loopback1 = "~~>127.1.1.1";
        String loopback2 = "~~>127.255.255.255";
        String loopback3 = "~~>127.0.0.0";
        String nonLoopback = "128.0.0.1";
        String privateAddress = "192.168.1.1";
        String publicAddress = "8.8.8.8";
        String invalidAddress = "256.0.0.0";
        String springVersion = "5.2.2";
        String adding = "4.3+4.5";
        // address in a comment: ~~>127.100.200.50
        // address in a comment: ~~>127.0.0.1
        String date = "30.11.2017";
        String ikeaProduct = "805.721.99";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/java/A.java
+++ src/main/java/A.java
@@ -3,4 +3,4 @@
class Test {
    void ipTest() {
-       String localhost = "127.0.0.1";
-       String loopback1 = "127.1.1.1";
-       String loopback2 = "127.255.255.255";
-       String loopback3 = "127.0.0.0";
+       String localhost = "~~>127.0.0.1";
+       String loopback1 = "~~>127.1.1.1";
+       String loopback2 = "~~>127.255.255.255";
+       String loopback3 = "~~>127.0.0.0";
        String nonLoopback = "128.0.0.1";
@@ -13,2 +13,2 @@
        String springVersion = "5.2.2";
        String adding = "4.3+4.5";
-       // address in a comment: 127.100.200.50
-       // address in a comment: 127.0.0.1
+       // address in a comment: ~~>127.100.200.50
+       // address in a comment: ~~>127.0.0.1
        String date = "30.11.2017";
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindHardcodedLoopbackAddresses
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.text.FindHardcodedLoopbackAddresses" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.text.table.HardcodedPrivateIPAddresses" label="HardcodedPrivateIPAddresses">

### Hardcoded private IP addresses
**org.openrewrite.text.table.HardcodedPrivateIPAddresses**

_This table lists locations of hardcoded private IPv4 addresses and their value found in source files._

| Column Name | Description |
| ----------- | ----------- |
| Source Path | The path to the source file containing the hard-coded IP address. |
| IP Address | The hard-coded private IPv4 address found in the source file. |
| Line Number | The line number in the source file where the hard-coded IP address is found. |

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
