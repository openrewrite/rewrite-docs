---
sidebar_label: "Change type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change type

**org.openrewrite.java.ChangeType**

_Change a given type to another._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeType.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldFullyQualifiedTypeName | Fully-qualified class name of the original type. | `org.junit.Assume` |
| `String` | newFullyQualifiedTypeName | Fully-qualified class name of the replacement type, or the name of a primitive such as "int". The `OuterClassName$NestedClassName` naming convention should be used for nested classes. | `org.junit.jupiter.api.Assumptions` |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |  |

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`file`|
|newFullyQualifiedTypeName|`newFile`|
|ignoreDefinition|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="groovy" label="groovy">


###### Before
```groovy
class file {
}
```

###### After
```groovy
class newFile {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-class file {
+class newFile {
}
```
</TabItem>
</Tabs>

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`file`|
|newFullyQualifiedTypeName|`newFile`|
|ignoreDefinition|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="kotlin" label="kotlin">


###### Before
```kotlin
class file {
}
```

###### After
```kotlin
class newFile {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-class file {
+class newFile {
}
```
</TabItem>
</Tabs>

---

##### Example 3

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`java.util.logging.Logger`|
|newFullyQualifiedTypeName|`org.apache.logging.log4j.Logger`|
|ignoreDefinition|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Logger;

class Test {
    void method(Logger logger) {
      logger.entering("Test", "method");
      logger.entering("Test", "method", "param");
      logger.entering("Test", "method", new Object[]{"param1", "param2"});
    }
}
```

###### After
```java
import org.apache.logging.log4j.Logger;

class Test {
    void method(Logger logger) {
      logger.traceEntry();
      logger.traceEntry(null, "param");
      logger.traceEntry(null, new Object[]{"param1", "param2"});
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import java.util.logging.Logger;
+import org.apache.logging.log4j.Logger;

@@ -5,3 +5,3 @@
class Test {
    void method(Logger logger) {
-     logger.entering("Test", "method");
-     logger.entering("Test", "method", "param");
-     logger.entering("Test", "method", new Object[]{"param1", "param2"});
+     logger.traceEntry();
+     logger.traceEntry(null, "param");
+     logger.traceEntry(null, new Object[]{"param1", "param2"});
    }
```
</TabItem>
</Tabs>

---

##### Example 4

###### Parameters
| Parameter | Value |
| -- | -- |
|oldFullyQualifiedTypeName|`java.util.logging.Logger`|
|newFullyQualifiedTypeName|`org.apache.logging.log4j.Logger`|
|ignoreDefinition|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Logger;

class Test {
    void method(Logger logger) {
      logger.exiting("Test", "method");
      logger.exiting("Test", "method", "result");
    }
}
```

###### After
```java
import org.apache.logging.log4j.Logger;

class Test {
    void method(Logger logger) {
      logger.traceExit();
      logger.traceExit("result");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import java.util.logging.Logger;
+import org.apache.logging.log4j.Logger;

@@ -5,2 +5,2 @@
class Test {
    void method(Logger logger) {
-     logger.exiting("Test", "method");
-     logger.exiting("Test", "method", "result");
+     logger.traceExit();
+     logger.traceExit("result");
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTypeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTypeExample
displayName: Change type example
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
```

Now that `com.yourorg.ChangeTypeExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTypeExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.ChangeTypeExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeType --recipe-option "oldFullyQualifiedTypeName=org.junit.Assume" --recipe-option "newFullyQualifiedTypeName=org.junit.jupiter.api.Assumptions"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangeType" />

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

## Contributors
[Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Nassim Jahnke](mailto:jahnke.nassim@gmail.com), [Kun Li](mailto:kun@moderne.io), [Greg Adams](mailto:greg@moderne.io), Tyler Van Gorder, [Joan Viladrosa](mailto:joan@moderne.io), [zac.kim](mailto:zaccoding725@gmail.com), Michał Kosmulski, [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), Ralph Sanders, Josh Soref, Adriano Machado, [Patrick](mailto:patway99@gmail.com)
