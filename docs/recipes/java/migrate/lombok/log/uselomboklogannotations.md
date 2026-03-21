---
sidebar_label: "Use Lombok logger annotations instead of explicit fields"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use Lombok logger annotations instead of explicit fields

**org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations**

_Applies all recipes that replace logger declarations with class level annotations._

## Recipe source

[GitHub: lombok.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/lombok.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `@CommonsLog` instead of explicit fields](../../../../java/migrate/lombok/log/usecommonslog)
* [Use `@JBossLog` instead of explicit fields](../../../../java/migrate/lombok/log/usejbosslog)
* [Use `@Log` instead of explicit fields](../../../../java/migrate/lombok/log/uselog)
* [Use `@Log4j2` instead of explicit fields](../../../../java/migrate/lombok/log/uselog4j2)
* [Use `@Slf4` instead of explicit fields](../../../../java/migrate/lombok/log/useslf4j)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations
displayName: Use Lombok logger annotations instead of explicit fields
description: |
  Applies all recipes that replace logger declarations with class level annotations.
recipeList:
  - org.openrewrite.java.migrate.lombok.log.UseCommonsLog
  - org.openrewrite.java.migrate.lombok.log.UseJBossLog
  - org.openrewrite.java.migrate.lombok.log.UseLog
  - org.openrewrite.java.migrate.lombok.log.UseLog4j2
  - org.openrewrite.java.migrate.lombok.log.UseSlf4j

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Lombok Best Practices](/recipes/java/migrate/lombok/lombokbestpractices.md)

## Examples
##### Example 1
`ConvertAnyLogTest#replaceAllLoggers`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);
}
```

###### After
```java
import lombok.extern.slf4j.Slf4j;

@Slf4j
class A {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,3 @@
+import lombok.extern.slf4j.Slf4j;
+
+@Slf4j
class A {
@@ -2,1 +5,0 @@
class A {
-   private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Logger;
class C {
    private static final Logger log = Logger.getLogger(C.class.getName());
}
```

###### After
```java
import lombok.extern.java.Log;

@Log
class C {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import java.util.logging.Logger;
+import lombok.extern.java.Log;
+
+@Log
class C {
@@ -3,1 +5,0 @@
import java.util.logging.Logger;
class C {
-   private static final Logger log = Logger.getLogger(C.class.getName());
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
class E {
    private static final Log log = LogFactory.getLog(E.class);
}
```

###### After
```java
import lombok.extern.apachecommons.CommonsLog;

@CommonsLog
class E {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.commons.logging.Log;
-import org.apache.commons.logging.LogFactory;
+import lombok.extern.apachecommons.CommonsLog;
+
+@CommonsLog
class E {
@@ -4,1 +5,0 @@
import org.apache.commons.logging.LogFactory;
class E {
-   private static final Log log = LogFactory.getLog(E.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
class B {
    private static final Logger log = LogManager.getLogger(B.class);
}
```

###### After
```java
import lombok.extern.log4j.Log4j2;

@Log4j2
class B {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.logging.log4j.Logger;
-import org.apache.logging.log4j.LogManager;
+import lombok.extern.log4j.Log4j2;
+
+@Log4j2
class B {
@@ -4,1 +5,0 @@
import org.apache.logging.log4j.LogManager;
class B {
-   private static final Logger log = LogManager.getLogger(B.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jboss.logging.Logger;
class D {
    private static final Logger log = Logger.getLogger(D.class);
}
```

###### After
```java
import lombok.extern.jbosslog.JBossLog;

@JBossLog
class D {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import org.jboss.logging.Logger;
+import lombok.extern.jbosslog.JBossLog;
+
+@JBossLog
class D {
@@ -3,1 +5,0 @@
import org.jboss.logging.Logger;
class D {
-   private static final Logger log = Logger.getLogger(D.class);
}
```
</TabItem>
</Tabs>

---

##### Example 2
`ConvertAnyLogTest#replaceAllLoggers`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
    private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);
}
```

###### After
```java
import lombok.extern.slf4j.Slf4j;

@Slf4j
class A {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,3 @@
+import lombok.extern.slf4j.Slf4j;
+
+@Slf4j
class A {
@@ -2,1 +5,0 @@
class A {
-   private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(A.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Logger;
class C {
    private static final Logger log = Logger.getLogger(C.class.getName());
}
```

###### After
```java
import lombok.extern.java.Log;

@Log
class C {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import java.util.logging.Logger;
+import lombok.extern.java.Log;
+
+@Log
class C {
@@ -3,1 +5,0 @@
import java.util.logging.Logger;
class C {
-   private static final Logger log = Logger.getLogger(C.class.getName());
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
class E {
    private static final Log log = LogFactory.getLog(E.class);
}
```

###### After
```java
import lombok.extern.apachecommons.CommonsLog;

@CommonsLog
class E {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.commons.logging.Log;
-import org.apache.commons.logging.LogFactory;
+import lombok.extern.apachecommons.CommonsLog;
+
+@CommonsLog
class E {
@@ -4,1 +5,0 @@
import org.apache.commons.logging.LogFactory;
class E {
-   private static final Log log = LogFactory.getLog(E.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
class B {
    private static final Logger log = LogManager.getLogger(B.class);
}
```

###### After
```java
import lombok.extern.log4j.Log4j2;

@Log4j2
class B {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.logging.log4j.Logger;
-import org.apache.logging.log4j.LogManager;
+import lombok.extern.log4j.Log4j2;
+
+@Log4j2
class B {
@@ -4,1 +5,0 @@
import org.apache.logging.log4j.LogManager;
class B {
-   private static final Logger log = LogManager.getLogger(B.class);
}
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jboss.logging.Logger;
class D {
    private static final Logger log = Logger.getLogger(D.class);
}
```

###### After
```java
import lombok.extern.jbosslog.JBossLog;

@JBossLog
class D {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-import org.jboss.logging.Logger;
+import lombok.extern.jbosslog.JBossLog;
+
+@JBossLog
class D {
@@ -3,1 +5,0 @@
import org.jboss.logging.Logger;
class D {
-   private static final Logger log = Logger.getLogger(D.class);
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations"
  displayName="Use Lombok logger annotations instead of explicit fields"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations" />

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
