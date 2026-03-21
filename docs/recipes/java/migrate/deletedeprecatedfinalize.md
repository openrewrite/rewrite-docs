---
sidebar_label: "Avoid using the deprecated empty `finalize()` method in `java.desktop`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Avoid using the deprecated empty `finalize()` method in `java.desktop`

**org.openrewrite.java.migrate.DeleteDeprecatedFinalize**

_The java.desktop module had a few implementations of finalize() that did nothing and have been removed. This recipe will remove these methods._

### Tags

* [java21](/reference/recipes-by-tag#java21)

## Recipe source

[GitHub: java-version-21.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-21.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `java.awt.color.ICC_Profile finalize()`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `java.awt.image.ColorModel finalize()`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `java.awt.image.IndexColorModel finalize()`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.DeleteDeprecatedFinalize
displayName: Avoid using the deprecated empty `finalize()` method in `java.desktop`
description: |
  The java.desktop module had a few implementations of finalize() that did nothing and have been removed. This recipe will remove these methods.
tags:
  - java21
recipeList:
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: java.awt.color.ICC_Profile finalize()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: java.awt.image.ColorModel finalize()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: java.awt.image.IndexColorModel finalize()

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 21](/recipes/java/migrate/upgradetojava21.md)

## Examples
##### Example 1
`DeleteDeprecatedFinalizeTest#deleteDeprecatedFinalize`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package java.awt.color;

import java.awt.color.ICC_Profile;
import java.awt.image.ColorModel;
import java.awt.image.IndexColorModel;

public class Test {
	public static void main(String[] args) {
		byte ff = (byte) 0xff;
		byte[] r = { ff, 0, 0, ff, 0 };
		byte[] g = { 0, ff, 0, ff, 0 };
		byte[] b = { 0, 0, ff, ff, 0 };

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);
		// flag
		profile.finalize();

		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

		// flag
		cm.finalize();

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
		// flag
		icm.finalize();

	}
}
```

###### After
```java
package java.awt.color;

import java.awt.color.ICC_Profile;
import java.awt.image.ColorModel;
import java.awt.image.IndexColorModel;

public class Test {
	public static void main(String[] args) {
		byte ff = (byte) 0xff;
		byte[] r = { ff, 0, 0, ff, 0 };
		byte[] g = { 0, ff, 0, ff, 0 };
		byte[] b = { 0, 0, ff, ff, 0 };

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);

		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);

	}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -15,2 +15,0 @@

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);
-		// flag
-		profile.finalize();

@@ -20,3 +18,0 @@
		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

-		// flag
-		cm.finalize();
-
		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
@@ -24,2 +19,0 @@

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
-		// flag
-		icm.finalize();

```
</TabItem>
</Tabs>

---

##### Example 2
`DeleteDeprecatedFinalizeTest#deleteDeprecatedFinalize`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package java.awt.color;

import java.awt.color.ICC_Profile;
import java.awt.image.ColorModel;
import java.awt.image.IndexColorModel;

public class Test {
	public static void main(String[] args) {
		byte ff = (byte) 0xff;
		byte[] r = { ff, 0, 0, ff, 0 };
		byte[] g = { 0, ff, 0, ff, 0 };
		byte[] b = { 0, 0, ff, ff, 0 };

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);
		// flag
		profile.finalize();

		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

		// flag
		cm.finalize();

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
		// flag
		icm.finalize();

	}
}
```

###### After
```java
package java.awt.color;

import java.awt.color.ICC_Profile;
import java.awt.image.ColorModel;
import java.awt.image.IndexColorModel;

public class Test {
	public static void main(String[] args) {
		byte ff = (byte) 0xff;
		byte[] r = { ff, 0, 0, ff, 0 };
		byte[] g = { 0, ff, 0, ff, 0 };
		byte[] b = { 0, 0, ff, ff, 0 };

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);

		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);

	}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -15,2 +15,0 @@

		ICC_Profile profile = ICC_Profile.getInstance(ICC_Profile.CLASS_COLORSPACECONVERSION);
-		// flag
-		profile.finalize();

@@ -20,3 +18,0 @@
		ColorModel cm = new IndexColorModel(3, 5, r, g, b);

-		// flag
-		cm.finalize();
-
		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
@@ -24,2 +19,0 @@

		IndexColorModel icm = new IndexColorModel(3, 5, r, g, b);
-		// flag
-		icm.finalize();

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.DeleteDeprecatedFinalize"
  displayName="Avoid using the deprecated empty `finalize()` method in `java.desktop`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.DeleteDeprecatedFinalize" />

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
