---
sidebar_label: "Migrate to Java 21"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Java 21

**org.openrewrite.java.migrate.UpgradeToJava21**

_This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21._

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
* [Migrate to Java 17](../../java/migrate/upgradetojava17)
* [Upgrade build to Java 21](../../java/migrate/upgradebuildtojava21)
* [Remove extra semicolons](../../staticanalysis/removeextrasemicolons)
* [Replace `Thread.resume()`, `Thread.stop()`, and `Thread.suspend()` with `throw new UnsupportedOperationException()`](../../java/migrate/lang/threadstopunsupported)
* [Convert `new URL(String)` to `URI.create(String).toURL()`](../../java/migrate/net/urlconstructortouricreate)
* [Adopt `SequencedCollection`](../../java/migrate/util/sequencedcollection)
* [Prefer `Locale.of(..)` over `new Locale(..)`](../../java/migrate/util/uselocaleof)
* [Replace deprecated `Runtime#exec()` methods](../../staticanalysis/replacedeprecatedruntimeexecmethods)
* [Upgrade `actions/setup-java` `java-version`](../../github/setupjavaupgradejavaversion)
* [Upgrade plugins to Java 21 compatible versions](../../java/migrate/upgradepluginsforjava21)
* [Avoid using the deprecated empty `finalize()` method in `java.desktop`](../../java/migrate/deletedeprecatedfinalize)
* [Adopt `javax.security.auth.Subject.current()` and `javax.security.auth.Subject.callAs()` methods`](../../java/migrate/removedsubjectmethods)
* [If-else-if-else to switch](../../java/migrate/lang/ifelseifconstructtoswitch)
* [Add null check to existing switch cases](../../java/migrate/lang/nullcheckasswitchcase)
* [Convert assigning Switch statements to Switch expressions](../../java/migrate/lang/switchcaseassignmentstoswitchexpression)
* [Convert switch cases where every case returns into a returned switch expression](../../java/migrate/lang/switchcasereturnstoswitchexpression)
* [Convert switch expression yield to arrow](../../java/migrate/lang/switchexpressionyieldtoarrow)
* [Adopt switch pattern matching (JEP 441)](../../java/migrate/switchpatternmatching)
* [Remove illegal semicolons](../../java/migrate/removeillegalsemicolons)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeToJava21
displayName: Migrate to Java 21
description: |
  This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21.
tags:
  - java21
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.migrate.UpgradeBuildToJava21
  - org.openrewrite.staticanalysis.RemoveExtraSemicolons
  - org.openrewrite.java.migrate.lang.ThreadStopUnsupported
  - org.openrewrite.java.migrate.net.URLConstructorToURICreate
  - org.openrewrite.java.migrate.util.SequencedCollection
  - org.openrewrite.java.migrate.util.UseLocaleOf
  - org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods
  - org.openrewrite.github.SetupJavaUpgradeJavaVersion
  - org.openrewrite.java.migrate.UpgradePluginsForJava21
  - org.openrewrite.java.migrate.DeleteDeprecatedFinalize
  - org.openrewrite.java.migrate.RemovedSubjectMethods
  - org.openrewrite.java.migrate.lang.IfElseIfConstructToSwitch
  - org.openrewrite.java.migrate.lang.NullCheckAsSwitchCase
  - org.openrewrite.java.migrate.lang.SwitchCaseAssignmentsToSwitchExpression
  - org.openrewrite.java.migrate.lang.SwitchCaseReturnsToSwitchExpression
  - org.openrewrite.java.migrate.lang.SwitchExpressionYieldToArrow
  - org.openrewrite.java.migrate.SwitchPatternMatching
  - org.openrewrite.java.migrate.RemoveIllegalSemicolons

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate tests to Java 21](/recipes/java/recipes/upgradeteststojava21.md)
* [Migrate to Java 25](/recipes/java/migrate/upgradetojava25.md)

## Examples
##### Example 1
`UpgradeToJava21Test#ifElseIfAssignmentToSwitchExpressionInOnePass`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    private static double convertToDouble(Object value) {
        double dValue;
        if (value instanceof String string) {
            dValue = Double.parseDouble(string);
        } else if (value instanceof Integer integer) {
            dValue = integer.doubleValue();
        } else if (value instanceof Long long1) {
            dValue = long1.doubleValue();
        } else {
            dValue = (double) value;
        }
        return dValue;
    }
}
```

###### After
```java
class Test {
    private static double convertToDouble(Object value) {
        return switch (value) {
            case String string -> Double.parseDouble(string);
            case Integer integer -> integer.doubleValue();
            case Long long1 -> long1.doubleValue();
            case null, default -> (double) value;
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,11 +3,6 @@
class Test {
    private static double convertToDouble(Object value) {
-       double dValue;
-       if (value instanceof String string) {
-           dValue = Double.parseDouble(string);
-       } else if (value instanceof Integer integer) {
-           dValue = integer.doubleValue();
-       } else if (value instanceof Long long1) {
-           dValue = long1.doubleValue();
-       } else {
-           dValue = (double) value;
-       }
-       return dValue;
+       return switch (value) {
+           case String string -> Double.parseDouble(string);
+           case Integer integer -> integer.doubleValue();
+           case Long long1 -> long1.doubleValue();
+           case null, default -> (double) value;
+       };
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeToJava21Test#ifElseIfAssignmentToSwitchExpressionInOnePass`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    private static double convertToDouble(Object value) {
        double dValue;
        if (value instanceof String string) {
            dValue = Double.parseDouble(string);
        } else if (value instanceof Integer integer) {
            dValue = integer.doubleValue();
        } else if (value instanceof Long long1) {
            dValue = long1.doubleValue();
        } else {
            dValue = (double) value;
        }
        return dValue;
    }
}
```

###### After
```java
class Test {
    private static double convertToDouble(Object value) {
        return switch (value) {
            case String string -> Double.parseDouble(string);
            case Integer integer -> integer.doubleValue();
            case Long long1 -> long1.doubleValue();
            case null, default -> (double) value;
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,11 +3,6 @@
class Test {
    private static double convertToDouble(Object value) {
-       double dValue;
-       if (value instanceof String string) {
-           dValue = Double.parseDouble(string);
-       } else if (value instanceof Integer integer) {
-           dValue = integer.doubleValue();
-       } else if (value instanceof Long long1) {
-           dValue = long1.doubleValue();
-       } else {
-           dValue = (double) value;
-       }
-       return dValue;
+       return switch (value) {
+           case String string -> Double.parseDouble(string);
+           case Integer integer -> integer.doubleValue();
+           case Long long1 -> long1.doubleValue();
+           case null, default -> (double) value;
+       };
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeToJava21"
  displayName="Migrate to Java 21"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
