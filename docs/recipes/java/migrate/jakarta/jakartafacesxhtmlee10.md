---
sidebar_label: "Faces XHTML migration for Jakarta EE 10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Faces XHTML migration for Jakarta EE 10

**org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10**

_Find and replace legacy JSF namespace URIs with Jakarta Faces URNs in XHTML files._

### Tags

* faces
* jsf
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-4.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf/html`
  * replace: `jakarta.faces.html`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf/html`
  * replace: `jakarta.faces.html`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf/facelets`
  * replace: `jakarta.faces.facelets`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf/facelets`
  * replace: `jakarta.faces.facelets`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf/core`
  * replace: `jakarta.faces.core`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf/core`
  * replace: `jakarta.faces.core`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsp/jstl/core`
  * replace: `jakarta.tags.core`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsp/jstl/core`
  * replace: `jakarta.tags.core`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf/composite`
  * replace: `jakarta.faces.composite`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf/composite`
  * replace: `jakarta.faces.composite`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf/passthrough`
  * replace: `jakarta.faces.passthrough`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf/passthrough`
  * replace: `jakarta.faces.passthrough`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsp/jstl/functions`
  * replace: `jakarta.tags.functions`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsp/jstl/functions`
  * replace: `jakarta.tags.functions`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://java.sun.com/jsf`
  * replace: `jakarta.faces`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://xmlns.jcp.org/jsf`
  * replace: `jakarta.faces`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://primefaces.org/ui/extensions`
  * replace: `primefaces.extensions`
  * filePattern: `**/*.xhtml`
* [Find and replace](../../../text/findandreplace)
  * find: `http://primefaces.org/ui`
  * replace: `primefaces`
  * filePattern: `**/*.xhtml`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10
displayName: Faces XHTML migration for Jakarta EE 10
description: |
  Find and replace legacy JSF namespace URIs with Jakarta Faces URNs in XHTML files.
tags:
  - faces
  - jsf
  - jakarta
recipeList:
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf/html
      replace: jakarta.faces.html
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf/html
      replace: jakarta.faces.html
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf/facelets
      replace: jakarta.faces.facelets
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf/facelets
      replace: jakarta.faces.facelets
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf/core
      replace: jakarta.faces.core
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf/core
      replace: jakarta.faces.core
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsp/jstl/core
      replace: jakarta.tags.core
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsp/jstl/core
      replace: jakarta.tags.core
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf/composite
      replace: jakarta.faces.composite
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf/composite
      replace: jakarta.faces.composite
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf/passthrough
      replace: jakarta.faces.passthrough
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf/passthrough
      replace: jakarta.faces.passthrough
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsp/jstl/functions
      replace: jakarta.tags.functions
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsp/jstl/functions
      replace: jakarta.tags.functions
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://java.sun.com/jsf
      replace: jakarta.faces
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://xmlns.jcp.org/jsf
      replace: jakarta.faces
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://primefaces.org/ui/extensions
      replace: primefaces.extensions
      filePattern: **/*.xhtml
  - org.openrewrite.text.FindAndReplace:
      find: http://primefaces.org/ui
      replace: primefaces
      filePattern: **/*.xhtml

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:f="http://java.sun.com/jsf/core"
        xmlns:h="http://java.sun.com/jsf/html"
        xmlns:ui="http://java.sun.com/jsf/facelets"
        xmlns:c="http://java.sun.com/jsp/jstl/core"
        xmlns:p="http://primefaces.org/ui"
        xmlns:pe="http://primefaces.org/ui/extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
<p:outputPanel id="container" layout="block">
    <h:panelGrid columns="4">
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.mushrooms}" />
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.onions}" />
    </h:panelGrid>
    <c:forEach items="#{sheetDynamicController.hoursOfDay}" var="hourOfDay" varStatus="status">
            <pe:sheetcolumn styleClass="htRight #{row.cells[status.index].style}"
                            headerText="#{hourOfDay}"
                            value="#{row.cells[status.index].value}"
                            readonlyCell="#{row.readOnly}"
                            colType="numeric">
                <f:converter converterId="jakarta.faces.Integer"/>
            </pe:sheetcolumn>
    </c:forEach>
</p:outputPanel>
</ui:composition>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:f="jakarta.faces.core"
        xmlns:h="jakarta.faces.html"
        xmlns:ui="jakarta.faces.facelets"
        xmlns:c="jakarta.tags.core"
        xmlns:p="primefaces"
        xmlns:pe="primefaces.extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
<p:outputPanel id="container" layout="block">
    <h:panelGrid columns="4">
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.mushrooms}" />
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.onions}" />
    </h:panelGrid>
    <c:forEach items="#{sheetDynamicController.hoursOfDay}" var="hourOfDay" varStatus="status">
            <pe:sheetcolumn styleClass="htRight #{row.cells[status.index].style}"
                            headerText="#{hourOfDay}"
                            value="#{row.cells[status.index].value}"
                            readonlyCell="#{row.readOnly}"
                            colType="numeric">
                <f:converter converterId="jakarta.faces.Integer"/>
            </pe:sheetcolumn>
    </c:forEach>
</p:outputPanel>
</ui:composition>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,6 +4,6 @@
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
-       xmlns:f="http://java.sun.com/jsf/core"
-       xmlns:h="http://java.sun.com/jsf/html"
-       xmlns:ui="http://java.sun.com/jsf/facelets"
-       xmlns:c="http://java.sun.com/jsp/jstl/core"
-       xmlns:p="http://primefaces.org/ui"
-       xmlns:pe="http://primefaces.org/ui/extensions">
+       xmlns:f="jakarta.faces.core"
+       xmlns:h="jakarta.faces.html"
+       xmlns:ui="jakarta.faces.facelets"
+       xmlns:c="jakarta.tags.core"
+       xmlns:p="primefaces"
+       xmlns:pe="primefaces.extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:f="http://java.sun.com/jsf/core"
        xmlns:h="http://java.sun.com/jsf/html"
        xmlns:ui="http://java.sun.com/jsf/facelets"
        xmlns:c="http://java.sun.com/jsp/jstl/core"
        xmlns:p="http://primefaces.org/ui"
        xmlns:pe="http://primefaces.org/ui/extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
<p:outputPanel id="container" layout="block">
    <h:panelGrid columns="4">
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.mushrooms}" />
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.onions}" />
    </h:panelGrid>
    <c:forEach items="#{sheetDynamicController.hoursOfDay}" var="hourOfDay" varStatus="status">
            <pe:sheetcolumn styleClass="htRight #{row.cells[status.index].style}"
                            headerText="#{hourOfDay}"
                            value="#{row.cells[status.index].value}"
                            readonlyCell="#{row.readOnly}"
                            colType="numeric">
                <f:converter converterId="jakarta.faces.Integer"/>
            </pe:sheetcolumn>
    </c:forEach>
</p:outputPanel>
</ui:composition>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:f="jakarta.faces.core"
        xmlns:h="jakarta.faces.html"
        xmlns:ui="jakarta.faces.facelets"
        xmlns:c="jakarta.tags.core"
        xmlns:p="primefaces"
        xmlns:pe="primefaces.extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
<p:outputPanel id="container" layout="block">
    <h:panelGrid columns="4">
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.mushrooms}" />
        <p:inputText converter="jakarta.faces.Integer" value="#{basicGChartController.onions}" />
    </h:panelGrid>
    <c:forEach items="#{sheetDynamicController.hoursOfDay}" var="hourOfDay" varStatus="status">
            <pe:sheetcolumn styleClass="htRight #{row.cells[status.index].style}"
                            headerText="#{hourOfDay}"
                            value="#{row.cells[status.index].value}"
                            readonlyCell="#{row.readOnly}"
                            colType="numeric">
                <f:converter converterId="jakarta.faces.Integer"/>
            </pe:sheetcolumn>
    </c:forEach>
</p:outputPanel>
</ui:composition>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,6 +4,6 @@
<ui:composition
        xmlns="http://www.w3.org/1999/xhtml"
-       xmlns:f="http://java.sun.com/jsf/core"
-       xmlns:h="http://java.sun.com/jsf/html"
-       xmlns:ui="http://java.sun.com/jsf/facelets"
-       xmlns:c="http://java.sun.com/jsp/jstl/core"
-       xmlns:p="http://primefaces.org/ui"
-       xmlns:pe="http://primefaces.org/ui/extensions">
+       xmlns:f="jakarta.faces.core"
+       xmlns:h="jakarta.faces.html"
+       xmlns:ui="jakarta.faces.facelets"
+       xmlns:c="jakarta.tags.core"
+       xmlns:p="primefaces"
+       xmlns:pe="primefaces.extensions">
<script src="https://www.gstatic.com/charts/loader.js"></script>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JakartaFacesXhtmlEE10
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10" />

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
