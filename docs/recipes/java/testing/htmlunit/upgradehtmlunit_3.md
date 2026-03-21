---
sidebar_label: "Migrate to HtmlUnit 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to HtmlUnit 3.x

**org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit\_3**

_Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x._

## Recipe source

[GitHub: htmlunit.yml](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/htmlunit.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `net.sourceforge.htmlunit`
  * oldArtifactId: `*`
  * newGroupId: `org.htmlunit`
  * newVersion: `3.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `com.gargoylesoftware`
  * oldArtifactId: `HTMLUnit`
  * newGroupId: `org.htmlunit`
  * newArtifactId: `htmlunit`
  * newVersion: `3.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.seleniumhq.selenium`
  * oldArtifactId: `htmlunit-driver`
  * newArtifactId: `htmlunit3-driver`
  * newVersion: `4.x`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `com.gargoylesoftware.htmlunit`
  * newPackageName: `org.htmlunit`
  * recursive: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.htmlunit.html.HtmlInput getValueAttribute()`
  * newMethodName: `getValue`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.htmlunit.html.HtmlInput setValueAttribute(String)`
  * newMethodName: `setValue`
  * matchOverrides: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3
displayName: Migrate to HtmlUnit 3.x
description: |
  Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: net.sourceforge.htmlunit
      oldArtifactId: "*"
      newGroupId: org.htmlunit
      newVersion: 3.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.gargoylesoftware
      oldArtifactId: HTMLUnit
      newGroupId: org.htmlunit
      newArtifactId: htmlunit
      newVersion: 3.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.seleniumhq.selenium
      oldArtifactId: htmlunit-driver
      newArtifactId: htmlunit3-driver
      newVersion: 4.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.gargoylesoftware.htmlunit
      newPackageName: org.htmlunit
      recursive: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.htmlunit.html.HtmlInput getValueAttribute()
      newMethodName: getValue
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.htmlunit.html.HtmlInput setValueAttribute(String)
      newMethodName: setValue
      matchOverrides: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.4 (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_4-moderne-edition)
* [Modernize a Jenkins plugin to the latest recommended versions](/recipes/jenkins/modernizeplugin.md)

## Examples
##### Example 1
`UpgradeHtmlUnit3Test#shouldUpdateHtmlUnit`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

import java.io.IOException;

public class HtmlUnitUse {
    void run() throws IOException {
        try (WebClient webClient = new WebClient()) {
            HtmlPage page = webClient.getPage("https://htmlunit.sourceforge.io/");
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
            String value = a.getValueAttribute();
            assert "".equals(value);
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
            a.setValueAttribute("updated");
        }
    }
}
```

###### After
```java
import org.htmlunit.WebClient;
import org.htmlunit.html.HtmlForm;
import org.htmlunit.html.HtmlInput;
import org.htmlunit.html.HtmlPage;

import java.io.IOException;

public class HtmlUnitUse {
    void run() throws IOException {
        try (WebClient webClient = new WebClient()) {
            HtmlPage page = webClient.getPage("https://htmlunit.sourceforge.io/");
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
            String value = a.getValue();
            assert "".equals(value);
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
            a.setValue("updated");
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,4 @@
-import com.gargoylesoftware.htmlunit.WebClient;
-import com.gargoylesoftware.htmlunit.html.HtmlForm;
-import com.gargoylesoftware.htmlunit.html.HtmlInput;
-import com.gargoylesoftware.htmlunit.html.HtmlPage;
+import org.htmlunit.WebClient;
+import org.htmlunit.html.HtmlForm;
+import org.htmlunit.html.HtmlInput;
+import org.htmlunit.html.HtmlPage;

@@ -14,1 +14,1 @@
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
-           String value = a.getValueAttribute();
+           String value = a.getValue();
            assert "".equals(value);
@@ -18,1 +18,1 @@
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
-           a.setValueAttribute("updated");
+           a.setValue("updated");
        }
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeHtmlUnit3Test#shouldUpdateHtmlUnit`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

import java.io.IOException;

public class HtmlUnitUse {
    void run() throws IOException {
        try (WebClient webClient = new WebClient()) {
            HtmlPage page = webClient.getPage("https://htmlunit.sourceforge.io/");
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
            String value = a.getValueAttribute();
            assert "".equals(value);
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
            a.setValueAttribute("updated");
        }
    }
}
```

###### After
```java
import org.htmlunit.WebClient;
import org.htmlunit.html.HtmlForm;
import org.htmlunit.html.HtmlInput;
import org.htmlunit.html.HtmlPage;

import java.io.IOException;

public class HtmlUnitUse {
    void run() throws IOException {
        try (WebClient webClient = new WebClient()) {
            HtmlPage page = webClient.getPage("https://htmlunit.sourceforge.io/");
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
            String value = a.getValue();
            assert "".equals(value);
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
            a.setValue("updated");
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,4 @@
-import com.gargoylesoftware.htmlunit.WebClient;
-import com.gargoylesoftware.htmlunit.html.HtmlForm;
-import com.gargoylesoftware.htmlunit.html.HtmlInput;
-import com.gargoylesoftware.htmlunit.html.HtmlPage;
+import org.htmlunit.WebClient;
+import org.htmlunit.html.HtmlForm;
+import org.htmlunit.html.HtmlInput;
+import org.htmlunit.html.HtmlPage;

@@ -14,1 +14,1 @@
            HtmlForm form = page.getFormByName("config");
            HtmlInput a = form.getInputByName("a");
-           String value = a.getValueAttribute();
+           String value = a.getValue();
            assert "".equals(value);
@@ -18,1 +18,1 @@
            a.setAttribute("value", "up2");
            a.setAttribute("value2", "leave");
-           a.setValueAttribute("updated");
+           a.setValue("updated");
        }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3"
  displayName="Migrate to HtmlUnit 3.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jenkins"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3" />

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
