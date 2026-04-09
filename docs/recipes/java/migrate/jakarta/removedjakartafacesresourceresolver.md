---
sidebar_label: "Replace `ResourceResolver` with `ResourceHandler`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ResourceResolver` with `ResourceHandler`

**org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver**

_The `ResourceResolver` class was removed in Jakarta Faces 3.0. The functionality provided by that class can be replaced by using the `jakarta.faces.application.ResourceHandler` class._

## Recipe source

[GitHub: jakarta-faces-3.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-3.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.view.facelets.ResourceResolver`
  * newFullyQualifiedTypeName: `jakarta.faces.application.ResourceHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.view.facelets.ResourceResolver`
  * newFullyQualifiedTypeName: `jakarta.faces.application.ResourceHandler`
  * ignoreDefinition: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver
displayName: Replace `ResourceResolver` with `ResourceHandler`
description: |
  The `ResourceResolver` class was removed in Jakarta Faces 3.0. The functionality provided by that class can be replaced by using the `jakarta.faces.application.ResourceHandler` class.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.view.facelets.ResourceResolver
      newFullyQualifiedTypeName: jakarta.faces.application.ResourceHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.view.facelets.ResourceResolver
      newFullyQualifiedTypeName: jakarta.faces.application.ResourceHandler
      ignoreDefinition: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [JSF 2.x to Jakarta Faces 3.x](/recipes/java/migrate/jakarta/faces2xmigrationtojakartafaces3x.md)

## Examples
##### Example 1
`RemovedJakartaFacesResourceResolverTest#removedJakartaFacesResourceResolver_1`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.test;
import java.net.URL;

import jakarta.faces.application.StateManager;
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;
import jakarta.faces.view.facelets.ResourceResolver;

public class ResourceResolverParent extends ResourceResolver {

    @Override
    public URL resolveUrl(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }
}
```

###### After
```java
package com.test;
import java.net.URL;

import jakarta.faces.application.ResourceHandler;
import jakarta.faces.application.StateManager;
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;

public class ResourceResolverParent extends ResourceHandler {

    @Override
    public URL resolveUrl(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,0 +4,1 @@
import java.net.URL;

+import jakarta.faces.application.ResourceHandler;
import jakarta.faces.application.StateManager;
@@ -7,1 +8,0 @@
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;
-import jakarta.faces.view.facelets.ResourceResolver;

@@ -9,1 +9,1 @@
import jakarta.faces.view.facelets.ResourceResolver;

-public class ResourceResolverParent extends ResourceResolver {
+public class ResourceResolverParent extends ResourceHandler {

```
</TabItem>
</Tabs>

---

##### Example 2
`RemovedJakartaFacesResourceResolverTest#removedJakartaFacesResourceResolver_1`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.test;
import java.net.URL;

import jakarta.faces.application.StateManager;
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;
import jakarta.faces.view.facelets.ResourceResolver;

public class ResourceResolverParent extends ResourceResolver {

    @Override
    public URL resolveUrl(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }
}
```

###### After
```java
package com.test;
import java.net.URL;

import jakarta.faces.application.ResourceHandler;
import jakarta.faces.application.StateManager;
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;

public class ResourceResolverParent extends ResourceHandler {

    @Override
    public URL resolveUrl(String arg0) {
        // TODO Auto-generated method stub
        return null;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,0 +4,1 @@
import java.net.URL;

+import jakarta.faces.application.ResourceHandler;
import jakarta.faces.application.StateManager;
@@ -7,1 +8,0 @@
import jakarta.faces.component.UIViewRoot;
import jakarta.faces.context.FacesContext;
-import jakarta.faces.view.facelets.ResourceResolver;

@@ -9,1 +9,1 @@
import jakarta.faces.view.facelets.ResourceResolver;

-public class ResourceResolverParent extends ResourceResolver {
+public class ResourceResolverParent extends ResourceHandler {

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver"
  displayName="Replace `ResourceResolver` with `ResourceHandler`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver" />

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
