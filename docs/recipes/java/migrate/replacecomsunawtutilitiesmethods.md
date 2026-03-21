---
sidebar_label: "Replace `com.sun.awt.AWTUtilities` static method invocations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `com.sun.awt.AWTUtilities` static method invocations

**org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods**

_This recipe replaces several static calls  in `com.sun.awt.AWTUtilities` with the JavaSE 11 equivalent. The methods replaced are `AWTUtilities.isTranslucencySupported()`, `AWTUtilities.setWindowOpacity()`, `AWTUtilities.getWindowOpacity()`, `AWTUtilities.getWindowShape()`, `AWTUtilities.isWindowOpaque()`, `AWTUtilities.isTranslucencyCapable()` and `AWTUtilities.setComponentMixingCutoutShape()`._

## Recipe source

[GitHub: ReplaceComSunAWTUtilitiesMethods.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/ReplaceComSunAWTUtilitiesMethods.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | getAWTIsWindowsTranslucencyPattern | *Optional*. The method pattern to match and replace. | `com.sun.awt.AWTUtilities isTranslucencySupported(com.sun.awt.AWTUtilities.Translucency)` |
| `String` | isWindowOpaquePattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilities isWindowOpaque(java.awt.Window)` |
| `String` | isTranslucencyCapablePattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilities isTranslucencyCapable(java.awt.GraphicsConfiguration)` |
| `String` | setWindowOpacityPattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilities setWindowOpacity(java.awt.Window, float)` |
| `String` | getWindowOpacityPattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilities getWindowOpacity(java.awt.Window)` |
| `String` | getWindowShapePattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilitiesTest getWindowShape(java.awt.Window)` |
| `String` | setComponentMixingCutoutShapePattern | *Optional*. The method pattern to match and replace. | `com.test.AWTUtilities setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|getAWTIsWindowsTranslucencyPattern|`com.test.AWTUtilitiesTest isTranslucencySupported1(com.test.AWTUtilitiesTest.Translucency)`|
|isWindowOpaquePattern|`com.test.AWTUtilitiesTest isWindowOpaque(java.awt.Window)`|
|isTranslucencyCapablePattern|`com.test.AWTUtilitiesTest isTranslucencyCapable(java.awt.GraphicsConfiguration)`|
|setWindowOpacityPattern|`com.test.AWTUtilitiesTest setWindowOpacity(java.awt.Window,float)`|
|getWindowOpacityPattern|`com.test.AWTUtilitiesTest getWindowOpacity(java.awt.Window)`|
|getWindowShapePattern|`com.test.AWTUtilitiesTest getWindowShape(java.awt.Window)`|
|setComponentMixingCutoutShapePattern|`com.test.AWTUtilitiesTest setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.test;
import com.test.AWTUtilitiesTest;
import java.awt.Window;
import java.awt.*;
import javax.swing.*;
import java.awt.geom.Ellipse2D;

class Test {
    void foo() {
        Window win = new Window(new JFrame("test"));
        boolean f = AWTUtilitiesTest.isWindowOpaque(win);
        AWTUtilitiesTest.setWindowOpacity(win,1);
        float l = AWTUtilitiesTest.getWindowOpacity(win);
        Shape sh = AWTUtilitiesTest.getWindowShape(win);
        GraphicsConfiguration gc = null;
        boolean f = AWTUtilitiesTest.isTranslucencyCapable(gc);
        Component c = null;
        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());
        AWTUtilitiesTest.setComponentMixingCutoutShape(c, sh);
    }
}
```

###### After
```java
package com.test;
import java.awt.Window;
import java.awt.*;
import javax.swing.*;
import java.awt.geom.Ellipse2D;

class Test {
    void foo() {
        Window win = new Window(new JFrame("test"));
        boolean f = win.isOpaque();
        win.setOpacity(1);
        float l = win.getOpacity();
        Shape sh = win.getShape();
        GraphicsConfiguration gc = null;
        boolean f = gc.isTranslucencyCapable();
        Component c = null;
        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());
        c.setMixingCutoutShape(sh);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,0 @@
package com.test;
-import com.test.AWTUtilitiesTest;
import java.awt.Window;
@@ -11,4 +10,4 @@
    void foo() {
        Window win = new Window(new JFrame("test"));
-       boolean f = AWTUtilitiesTest.isWindowOpaque(win);
-       AWTUtilitiesTest.setWindowOpacity(win,1);
-       float l = AWTUtilitiesTest.getWindowOpacity(win);
-       Shape sh = AWTUtilitiesTest.getWindowShape(win);
+       boolean f = win.isOpaque();
+       win.setOpacity(1);
+       float l = win.getOpacity();
+       Shape sh = win.getShape();
        GraphicsConfiguration gc = null;
@@ -16,1 +15,1 @@
        Shape sh = AWTUtilitiesTest.getWindowShape(win);
        GraphicsConfiguration gc = null;
-       boolean f = AWTUtilitiesTest.isTranslucencyCapable(gc);
+       boolean f = gc.isTranslucencyCapable();
        Component c = null;
@@ -19,1 +18,1 @@
        Component c = null;
        Shape sh = new Ellipse2D.Double(0, 0, c.getWidth(), c.getHeight());
-       AWTUtilitiesTest.setComponentMixingCutoutShape(c, sh);
+       c.setMixingCutoutShape(sh);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods"
  displayName="Replace `com.sun.awt.AWTUtilities` static method invocations"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods" />

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
