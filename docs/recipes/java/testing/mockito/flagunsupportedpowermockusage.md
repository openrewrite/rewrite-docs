---
title: "Flag PowerMock usage that cannot be migrated to Mockito"
sidebar_label: "Flag PowerMock usage that cannot be migrated to Mockito"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flag PowerMock usage that cannot be migrated to Mockito

**org.openrewrite.java.testing.mockito.FlagUnsupportedPowerMockUsage**

_Adds a comment to PowerMock usages that cannot be migrated to Mockito, such as `MemberModifier.suppress`, `PowerMockito.verifyNew` or stubbing private methods. Repositories with such usage are left on PowerMock by `ReplacePowerMockito`, so these need to be migrated manually first._

## Recipe source

[GitHub: FlagUnsupportedPowerMockUsage.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/FlagUnsupportedPowerMockUsage.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Replace PowerMock with raw Mockito](/recipes/java/testing/mockito/replacepowermockito.md)

## Example


###### Unchanged
```java
class Service {
    private String secret() {
        return "real";
    }

    static void init() {
    }
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.Test;
import org.powermock.api.mockito.PowerMockito;

import static org.powermock.api.support.membermodification.MemberMatcher.method;
import static org.powermock.api.support.membermodification.MemberModifier.suppress;

public class ServiceTest {
    @Test
    public void test() throws Exception {
        suppress(method(Service.class, "init"));
        Service service = PowerMockito.spy(new Service());
        PowerMockito.when(service, "secret").thenReturn("mock");
    }
}
```

###### After
```java
import org.junit.Test;
import org.powermock.api.mockito.PowerMockito;

import static org.powermock.api.support.membermodification.MemberMatcher.method;
import static org.powermock.api.support.membermodification.MemberModifier.suppress;

public class ServiceTest {
    @Test
    public void test() throws Exception {
        /* TODO `MemberModifier.suppress` could not be migrated automatically; migrate it manually to replace PowerMock */
        suppress(method(Service.class, "init"));
        Service service = PowerMockito.spy(new Service());
        /* TODO `PowerMockito.when` with more than one argument could not be migrated automatically; migrate it manually to replace PowerMock */
        PowerMockito.when(service, "secret").thenReturn("mock");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -10,0 +10,1 @@
    @Test
    public void test() throws Exception {
+       /* TODO `MemberModifier.suppress` could not be migrated automatically; migrate it manually to replace PowerMock */
        suppress(method(Service.class, "init"));
@@ -12,0 +13,1 @@
        suppress(method(Service.class, "init"));
        Service service = PowerMockito.spy(new Service());
+       /* TODO `PowerMockito.when` with more than one argument could not be migrated automatically; migrate it manually to replace PowerMock */
        PowerMockito.when(service, "secret").thenReturn("mock");
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.FlagUnsupportedPowerMockUsage"
  displayName="Flag PowerMock usage that cannot be migrated to Mockito"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.FlagUnsupportedPowerMockUsage" />

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
