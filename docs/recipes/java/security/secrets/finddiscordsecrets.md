---
sidebar_label: "Find Discord secrets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find Discord secrets

**org.openrewrite.java.security.secrets.FindDiscordSecrets**

_Locates Discord secrets stored in plain text in code._

### Tags

* [security](/reference/recipes-by-tag#security)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    void discordTest() {
        String[] secretStrings = {
            "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
            "Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
            "MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "SZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zM"};
    }
}
```

###### After
```java
class Test {
    void discordTest() {
        String[] secretStrings = {
            /*~~(Discord)~~>*/"MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
            /*~~(Discord)~~>*/"Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
            /*~~(Discord)~~>*/"MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "SZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zM"};
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,3 +4,3 @@
    void discordTest() {
        String[] secretStrings = {
-           "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
-           "Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
-           "MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
+           /*~~(Discord)~~>*/"MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
+           /*~~(Discord)~~>*/"Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
+           /*~~(Discord)~~>*/"MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    void discordTest() {
        String[] secretStrings = {
            "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
            "Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
            "MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "SZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zM"};
    }
}
```

###### After
```java
class Test {
    void discordTest() {
        String[] secretStrings = {
            /*~~(Discord)~~>*/"MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
            /*~~(Discord)~~>*/"Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
            /*~~(Discord)~~>*/"MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "SZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zMC",
            "MZ1yGvKTj0rY0cV8i47CjAa.uHQPq.Xb1Mk2nEhe-4icrGOuegj57zM"};
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,3 +4,3 @@
    void discordTest() {
        String[] secretStrings = {
-           "MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
-           "Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
-           "MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
+           /*~~(Discord)~~>*/"MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs",
+           /*~~(Discord)~~>*/"Nzk5MjgxNDk0NDc2NDU1OTg3.YABS5g.2lmzECVlZv3vv6miVnUaKPQi2wI",
+           /*~~(Discord)~~>*/"MZ1yGvKTjE0rY0cV8i47CjAa.uRHQPq.Xb1Mk2nEhe-4iUcrGOuegj57zMC"};
        String[] notSecret = {
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindDiscordSecrets
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindDiscordSecrets" />

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
[Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io)
