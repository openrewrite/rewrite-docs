---
sidebar_label: "Migrate JSF variable-resolver to el-resolver"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate JSF variable-resolver to el-resolver

**io.moderne.java.spring.framework.jsf23.MigrateFacesConfig**

_Migrates JSF faces-config.xml from namespaces, tags and values that was deprecated in JSF 1.2 and removed in later versions, to the JSF 2.3 compatible constructs._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [framework](/reference/recipes-by-tag#framework)
* [jsf](/reference/recipes-by-tag#jsf)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to JSF 2.3](/recipes/java/jsf/migratetojsf_2_3.md)

## Examples
##### Example 1
`MigrateFacesConfigVariableResolverTest#migratesVariableResolverToElResolver`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/webapp/WEB-INF/faces-config.xml" label="src/main/webapp/WEB-INF/faces-config.xml">


###### Before
```xml title="src/main/webapp/WEB-INF/faces-config.xml"
<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://java.sun.com/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                                  http://java.sun.com/xml/ns/javaee/web-facesconfig_1_2.xsd"
              version="1.2">
    <application>
        <variable-resolver>
            org.springframework.web.jsf.DelegatingVariableResolver
        </variable-resolver>
    </application>
</faces-config>
```

###### After
```xml title="src/main/webapp/WEB-INF/faces-config.xml"
<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                                  http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_3.xsd"
              version="2.3">
    <application>
        <el-resolver>
            org.springframework.web.jsf.el.SpringBeanFacesELResolver
        </el-resolver>
    </application>
</faces-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/webapp/WEB-INF/faces-config.xml
+++ src/main/webapp/WEB-INF/faces-config.xml
@@ -2,1 +2,1 @@
<?xml version="1.0" encoding="UTF-8"?>
-<faces-config xmlns="http://java.sun.com/xml/ns/javaee"
+<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -5,2 +5,2 @@
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
-                                 http://java.sun.com/xml/ns/javaee/web-facesconfig_1_2.xsd"
-             version="1.2">
+                                 http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_3.xsd"
+             version="2.3">
    <application>
@@ -8,3 +8,3 @@
              version="1.2">
    <application>
-       <variable-resolver>
-           org.springframework.web.jsf.DelegatingVariableResolver
-       </variable-resolver>
+       <el-resolver>
+           org.springframework.web.jsf.el.SpringBeanFacesELResolver
+       </el-resolver>
    </application>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateFacesConfigVariableResolverTest#migratesVariableResolverToElResolver`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/webapp/WEB-INF/faces-config.xml" label="src/main/webapp/WEB-INF/faces-config.xml">


###### Before
```xml title="src/main/webapp/WEB-INF/faces-config.xml"
<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://java.sun.com/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                                  http://java.sun.com/xml/ns/javaee/web-facesconfig_1_2.xsd"
              version="1.2">
    <application>
        <variable-resolver>
            org.springframework.web.jsf.DelegatingVariableResolver
        </variable-resolver>
    </application>
</faces-config>
```

###### After
```xml title="src/main/webapp/WEB-INF/faces-config.xml"
<?xml version="1.0" encoding="UTF-8"?>
<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                                  http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_3.xsd"
              version="2.3">
    <application>
        <el-resolver>
            org.springframework.web.jsf.el.SpringBeanFacesELResolver
        </el-resolver>
    </application>
</faces-config>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/webapp/WEB-INF/faces-config.xml
+++ src/main/webapp/WEB-INF/faces-config.xml
@@ -2,1 +2,1 @@
<?xml version="1.0" encoding="UTF-8"?>
-<faces-config xmlns="http://java.sun.com/xml/ns/javaee"
+<faces-config xmlns="http://xmlns.jcp.org/xml/ns/javaee"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -5,2 +5,2 @@
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
-                                 http://java.sun.com/xml/ns/javaee/web-facesconfig_1_2.xsd"
-             version="1.2">
+                                 http://xmlns.jcp.org/xml/ns/javaee/web-facesconfig_2_3.xsd"
+             version="2.3">
    <application>
@@ -8,3 +8,3 @@
              version="1.2">
    <application>
-       <variable-resolver>
-           org.springframework.web.jsf.DelegatingVariableResolver
-       </variable-resolver>
+       <el-resolver>
+           org.springframework.web.jsf.el.SpringBeanFacesELResolver
+       </el-resolver>
    </application>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateFacesConfig
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-spring:{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.spring.framework.jsf23.MigrateFacesConfig" />

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
