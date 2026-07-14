---
title: "Migrate from LaunchDarkly to OpenFeature"
sidebar_label: "Migrate from LaunchDarkly to OpenFeature"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from LaunchDarkly to OpenFeature

**org.openrewrite.featureflags.launchdarkly.MigrateLaunchDarklyToOpenFeature**

_Migrate call sites from the LaunchDarkly server SDK to the vendor-neutral [OpenFeature](https://openfeature.dev/) API, backed by the LaunchDarkly OpenFeature provider. Flag evaluations are renamed and their arguments reordered (LaunchDarkly takes the context as the second argument; OpenFeature takes it last), `LDContext` construction becomes `MutableContext`, and `LDClient` becomes `dev.openfeature.sdk.Client`. The one-time provider bootstrap (`OpenFeatureAPI.setProviderAndWait(...)`) is intentionally left for manual configuration._

## Recipe source

[GitHub: launchdarkly-openfeature.yml](https://github.com/openrewrite/rewrite-feature-flags/blob/main/src/main/resources/META-INF/rewrite/launchdarkly-openfeature.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-feature-flags/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-feature-flags/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate `LDUser` to `LDContext`](../../featureflags/launchdarkly/migrateusertocontext)
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient boolVariation(String, com.launchdarkly.sdk.LDContext, boolean)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient stringVariation(String, com.launchdarkly.sdk.LDContext, String)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient intVariation(String, com.launchdarkly.sdk.LDContext, int)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient doubleVariation(String, com.launchdarkly.sdk.LDContext, double)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient boolVariationDetail(String, com.launchdarkly.sdk.LDContext, boolean)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient stringVariationDetail(String, com.launchdarkly.sdk.LDContext, String)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient intVariationDetail(String, com.launchdarkly.sdk.LDContext, int)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Reorder method arguments](../../java/reordermethodarguments)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient doubleVariationDetail(String, com.launchdarkly.sdk.LDContext, double)`
  * newParameterNames: `[key, value, context]`
  * oldParameterNames: `[key, context, value]`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient boolVariation(..)`
  * newMethodName: `getBooleanValue`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient stringVariation(..)`
  * newMethodName: `getStringValue`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient intVariation(..)`
  * newMethodName: `getIntegerValue`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient doubleVariation(..)`
  * newMethodName: `getDoubleValue`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient boolVariationDetail(..)`
  * newMethodName: `getBooleanDetails`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient stringVariationDetail(..)`
  * newMethodName: `getStringDetails`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient intVariationDetail(..)`
  * newMethodName: `getIntegerDetails`
* [Change method name](../../java/changemethodname)
  * methodPattern: `com.launchdarkly.sdk.server.LDClient doubleVariationDetail(..)`
  * newMethodName: `getDoubleDetails`
* [Migrate LaunchDarkly `LDClient` construction to OpenFeature](../../featureflags/launchdarkly/migrateldclienttoopenfeature)
* [Migrate LaunchDarkly `LDContext` to OpenFeature `MutableContext`](../../featureflags/launchdarkly/migrateldcontexttoevaluationcontext)
* [Migrate LaunchDarkly `LDValue` and `jsonValueVariation` to OpenFeature](../../featureflags/launchdarkly/migrateldvaluetovalue)
* [Migrate LaunchDarkly `LDClient` lifecycle calls to OpenFeature](../../featureflags/launchdarkly/migrateldclientlifecycle)
* [Mark incompatible LaunchDarkly `EvaluationDetail` accessors](../../featureflags/launchdarkly/markincompatibleevaluationdetailaccessors)
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.launchdarkly.sdk.server.LDClient`
  * newFullyQualifiedTypeName: `dev.openfeature.sdk.Client`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.launchdarkly.sdk.LDContext`
  * newFullyQualifiedTypeName: `dev.openfeature.sdk.EvaluationContext`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.launchdarkly.sdk.ContextBuilder`
  * newFullyQualifiedTypeName: `dev.openfeature.sdk.MutableContext`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.launchdarkly.sdk.EvaluationDetail`
  * newFullyQualifiedTypeName: `dev.openfeature.sdk.FlagEvaluationDetails`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `dev.openfeature`
  * artifactId: `sdk`
  * version: `latest.release`
  * onlyIfUsing: `dev.openfeature.sdk.Client`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.launchdarkly`
  * artifactId: `launchdarkly-openfeature-serverprovider`
  * version: `latest.release`
  * onlyIfUsing: `dev.openfeature.sdk.Client`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.featureflags.launchdarkly.MigrateLaunchDarklyToOpenFeature
displayName: Migrate from LaunchDarkly to OpenFeature
description: |
  Migrate call sites from the LaunchDarkly server SDK to the vendor-neutral [OpenFeature](https://openfeature.dev/) API, backed by the LaunchDarkly OpenFeature provider. Flag evaluations are renamed and their arguments reordered (LaunchDarkly takes the context as the second argument; OpenFeature takes it last), `LDContext` construction becomes `MutableContext`, and `LDClient` becomes `dev.openfeature.sdk.Client`. The one-time provider bootstrap (`OpenFeatureAPI.setProviderAndWait(...)`) is intentionally left for manual configuration.
recipeList:
  - org.openrewrite.featureflags.launchdarkly.MigrateUserToContext
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient boolVariation(String, com.launchdarkly.sdk.LDContext, boolean)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient stringVariation(String, com.launchdarkly.sdk.LDContext, String)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient intVariation(String, com.launchdarkly.sdk.LDContext, int)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient doubleVariation(String, com.launchdarkly.sdk.LDContext, double)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient boolVariationDetail(String, com.launchdarkly.sdk.LDContext, boolean)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient stringVariationDetail(String, com.launchdarkly.sdk.LDContext, String)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient intVariationDetail(String, com.launchdarkly.sdk.LDContext, int)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: com.launchdarkly.sdk.server.LDClient doubleVariationDetail(String, com.launchdarkly.sdk.LDContext, double)
      newParameterNames:
        - key
        - value
        - context
      oldParameterNames:
        - key
        - context
        - value
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient boolVariation(..)
      newMethodName: getBooleanValue
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient stringVariation(..)
      newMethodName: getStringValue
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient intVariation(..)
      newMethodName: getIntegerValue
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient doubleVariation(..)
      newMethodName: getDoubleValue
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient boolVariationDetail(..)
      newMethodName: getBooleanDetails
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient stringVariationDetail(..)
      newMethodName: getStringDetails
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient intVariationDetail(..)
      newMethodName: getIntegerDetails
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.launchdarkly.sdk.server.LDClient doubleVariationDetail(..)
      newMethodName: getDoubleDetails
  - org.openrewrite.featureflags.launchdarkly.MigrateLDClientToOpenFeature
  - org.openrewrite.featureflags.launchdarkly.MigrateLDContextToEvaluationContext
  - org.openrewrite.featureflags.launchdarkly.MigrateLDValueToValue
  - org.openrewrite.featureflags.launchdarkly.MigrateLDClientLifecycle
  - org.openrewrite.featureflags.launchdarkly.MarkIncompatibleEvaluationDetailAccessors
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.launchdarkly.sdk.server.LDClient
      newFullyQualifiedTypeName: dev.openfeature.sdk.Client
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.launchdarkly.sdk.LDContext
      newFullyQualifiedTypeName: dev.openfeature.sdk.EvaluationContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.launchdarkly.sdk.ContextBuilder
      newFullyQualifiedTypeName: dev.openfeature.sdk.MutableContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.launchdarkly.sdk.EvaluationDetail
      newFullyQualifiedTypeName: dev.openfeature.sdk.FlagEvaluationDetails
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: dev.openfeature
      artifactId: sdk
      version: latest.release
      onlyIfUsing: dev.openfeature.sdk.Client
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.launchdarkly
      artifactId: launchdarkly-openfeature-serverprovider
      version: latest.release
      onlyIfUsing: dev.openfeature.sdk.Client

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`MigrateLaunchDarklyToOpenFeatureTest#migrateBooleanEvaluationWithContext`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;

class FeatureFlags {
    boolean newCheckout(LDClient client, String userKey) {
        LDContext context = LDContext.builder(userKey)
                .name("Sandy")
                .set("email", "sandy@example.com")
                .build();
        return client.boolVariation("new-checkout", context, false);
    }
}
```

###### After
```java
import dev.openfeature.sdk.Client;
import dev.openfeature.sdk.EvaluationContext;
import dev.openfeature.sdk.MutableContext;

class FeatureFlags {
    boolean newCheckout(Client client, String userKey) {
        EvaluationContext context = new MutableContext(userKey)
                .add("name", "Sandy")
                .add("email", "sandy@example.com");
        return client.getBooleanValue("new-checkout", false, context);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import com.launchdarkly.sdk.LDContext;
-import com.launchdarkly.sdk.server.LDClient;
+import dev.openfeature.sdk.Client;
+import dev.openfeature.sdk.EvaluationContext;
+import dev.openfeature.sdk.MutableContext;

@@ -5,6 +6,5 @@

class FeatureFlags {
-   boolean newCheckout(LDClient client, String userKey) {
-       LDContext context = LDContext.builder(userKey)
-               .name("Sandy")
-               .set("email", "sandy@example.com")
-               .build();
-       return client.boolVariation("new-checkout", context, false);
+   boolean newCheckout(Client client, String userKey) {
+       EvaluationContext context = new MutableContext(userKey)
+               .add("name", "Sandy")
+               .add("email", "sandy@example.com");
+       return client.getBooleanValue("new-checkout", false, context);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateLaunchDarklyToOpenFeatureTest#migrateBooleanEvaluationWithContext`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.launchdarkly.sdk.LDContext;
import com.launchdarkly.sdk.server.LDClient;

class FeatureFlags {
    boolean newCheckout(LDClient client, String userKey) {
        LDContext context = LDContext.builder(userKey)
                .name("Sandy")
                .set("email", "sandy@example.com")
                .build();
        return client.boolVariation("new-checkout", context, false);
    }
}
```

###### After
```java
import dev.openfeature.sdk.Client;
import dev.openfeature.sdk.EvaluationContext;
import dev.openfeature.sdk.MutableContext;

class FeatureFlags {
    boolean newCheckout(Client client, String userKey) {
        EvaluationContext context = new MutableContext(userKey)
                .add("name", "Sandy")
                .add("email", "sandy@example.com");
        return client.getBooleanValue("new-checkout", false, context);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import com.launchdarkly.sdk.LDContext;
-import com.launchdarkly.sdk.server.LDClient;
+import dev.openfeature.sdk.Client;
+import dev.openfeature.sdk.EvaluationContext;
+import dev.openfeature.sdk.MutableContext;

@@ -5,6 +6,5 @@

class FeatureFlags {
-   boolean newCheckout(LDClient client, String userKey) {
-       LDContext context = LDContext.builder(userKey)
-               .name("Sandy")
-               .set("email", "sandy@example.com")
-               .build();
-       return client.boolVariation("new-checkout", context, false);
+   boolean newCheckout(Client client, String userKey) {
+       EvaluationContext context = new MutableContext(userKey)
+               .add("name", "Sandy")
+               .add("email", "sandy@example.com");
+       return client.getBooleanValue("new-checkout", false, context);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.featureflags.launchdarkly.MigrateLaunchDarklyToOpenFeature"
  displayName="Migrate from LaunchDarkly to OpenFeature"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-feature-flags"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.featureflags.launchdarkly.MigrateLaunchDarklyToOpenFeature" />

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
