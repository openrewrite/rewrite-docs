---
sidebar_label: "Migrate to HtmlUnit 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to HtmlUnit 3.x

**org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit\_3**

_Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/htmlunit.yml), 
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

* [Migrate to Spring Boot 3.4](/recipes/java/spring/boot3/upgradespringboot_3_4-moderne-edition.md)
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

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.htmlunit.UpgradeHtmlUnit_3 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeHtmlUnit_3
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}
```
</TabItem>
</Tabs>

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
