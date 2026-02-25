---
sidebar_label: "Migrate JUL to SLF4J"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate JUL to SLF4J

**org.openrewrite.java.logging.slf4j.JulToSlf4j**

_Migrates usage of Java Util Logging (JUL) to using SLF4J directly._

### Tags

* [slf4j](/reference/recipes-by-tag#slf4j)
* [java-util-logging](/reference/recipes-by-tag#java)
* [logging](/reference/recipes-by-tag#logging)

## Recipe source

[GitHub: slf4j.yml](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace JUL Logger creation with SLF4J LoggerFactory](../../../java/logging/slf4j/julgetloggertologgerfactory)
* [Replace JUL active Level check with corresponding SLF4J method calls](../../../java/logging/slf4j/julisloggabletoisenabledrecipes)
* [Replace parameterized JUL level call with corresponding SLF4J method calls](../../../java/logging/slf4j/julparameterizedarguments)
* [Replace JUL active Level check with corresponding SLF4J method calls](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes)
* [Replace JUL `log(Level, Throwable, Supplier&lt;String&gt;)` with corresponding SLF4J method calls](../../../java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipes)
* [Replace JUL `log(Level, String, Throwable)` with corresponding SLF4J method calls](../../../java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipes)
* [Replace JUL `Level.ALL` logging with SLF4J's trace level](../../../java/logging/slf4j/jullevelalltotracerecipe)
* [Migrate JUL to Log4j 2.x API](../../../java/logging/log4j/jultolog4j)
* [Migrate Log4j 2.x to SLF4J 1.x](../../../java/logging/slf4j/log4j2toslf4j1)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.JulToSlf4j
displayName: Migrate JUL to SLF4J
description: |
  Migrates usage of Java Util Logging (JUL) to using SLF4J directly.
tags:
  - slf4j
  - java-util-logging
  - logging
recipeList:
  - org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactory
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes
  - org.openrewrite.java.logging.slf4j.JulParameterizedArguments
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes
  - org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes
  - org.openrewrite.java.logging.slf4j.JulLevelAllToTraceRecipe
  - org.openrewrite.java.logging.log4j.JulToLog4j
  - org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`JulParameterizedArgumentsTest#parameterizedSingleArgument`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Level;
import java.util.logging.Logger;

class Test {
    void method(Logger logger, String param1) {
        logger.log(Level.INFO, "INFO Log entry, param1: {0}", param1);
    }
}
```

###### After
```java
import org.slf4j.Logger;

class Test {
    void method(Logger logger, String param1) {
        logger.info("INFO Log entry, param1: {}", param1);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import java.util.logging.Level;
-import java.util.logging.Logger;
+import org.slf4j.Logger;

@@ -6,1 +5,1 @@
class Test {
    void method(Logger logger, String param1) {
-       logger.log(Level.INFO, "INFO Log entry, param1: {0}", param1);
+       logger.info("INFO Log entry, param1: {}", param1);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`JulToSlf4jTest#simpleLoggerCalls`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Level;
import java.util.logging.Logger;

class Test {
    void method(Logger logger) {
        logger.finest("finest");
        logger.finer("finer");
        logger.fine("fine");
        logger.config("config");
        logger.info("info");
        logger.warning("warning");
        logger.severe("severe");

        logger.log(Level.FINEST, "finest");
        logger.log(Level.FINER, "finer");
        logger.log(Level.FINE, "fine");
        logger.log(Level.CONFIG, "config");
        logger.log(Level.INFO, "info");
        logger.log(Level.WARNING, "warning");
        logger.log(Level.SEVERE, "severe");

        logger.log(Level.ALL, "all");
    }
}
```

###### After
```java
import org.slf4j.Logger;

class Test {
    void method(Logger logger) {
        logger.trace("finest");
        logger.trace("finer");
        logger.debug("fine");
        logger.info("config");
        logger.info("info");
        logger.warn("warning");
        logger.error("severe");

        logger.trace("finest");
        logger.trace("finer");
        logger.debug("fine");
        logger.info("config");
        logger.info("info");
        logger.warn("warning");
        logger.error("severe");

        logger.trace("all");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import java.util.logging.Level;
-import java.util.logging.Logger;
+import org.slf4j.Logger;

@@ -6,4 +5,4 @@
class Test {
    void method(Logger logger) {
-       logger.finest("finest");
-       logger.finer("finer");
-       logger.fine("fine");
-       logger.config("config");
+       logger.trace("finest");
+       logger.trace("finer");
+       logger.debug("fine");
+       logger.info("config");
        logger.info("info");
@@ -11,2 +10,2 @@
        logger.config("config");
        logger.info("info");
-       logger.warning("warning");
-       logger.severe("severe");
+       logger.warn("warning");
+       logger.error("severe");

@@ -14,7 +13,7 @@
        logger.severe("severe");

-       logger.log(Level.FINEST, "finest");
-       logger.log(Level.FINER, "finer");
-       logger.log(Level.FINE, "fine");
-       logger.log(Level.CONFIG, "config");
-       logger.log(Level.INFO, "info");
-       logger.log(Level.WARNING, "warning");
-       logger.log(Level.SEVERE, "severe");
+       logger.trace("finest");
+       logger.trace("finer");
+       logger.debug("fine");
+       logger.info("config");
+       logger.info("info");
+       logger.warn("warning");
+       logger.error("severe");

@@ -22,1 +21,1 @@
        logger.log(Level.SEVERE, "severe");

-       logger.log(Level.ALL, "all");
+       logger.trace("all");
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`JulParameterizedArgumentsTest#parameterizedSingleArgument`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Level;
import java.util.logging.Logger;

class Test {
    void method(Logger logger, String param1) {
        logger.log(Level.INFO, "INFO Log entry, param1: {0}", param1);
    }
}
```

###### After
```java
import org.slf4j.Logger;

class Test {
    void method(Logger logger, String param1) {
        logger.info("INFO Log entry, param1: {}", param1);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import java.util.logging.Level;
-import java.util.logging.Logger;
+import org.slf4j.Logger;

@@ -6,1 +5,1 @@
class Test {
    void method(Logger logger, String param1) {
-       logger.log(Level.INFO, "INFO Log entry, param1: {0}", param1);
+       logger.info("INFO Log entry, param1: {}", param1);
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`JulToSlf4jTest#simpleLoggerCalls`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Level;
import java.util.logging.Logger;

class Test {
    void method(Logger logger) {
        logger.finest("finest");
        logger.finer("finer");
        logger.fine("fine");
        logger.config("config");
        logger.info("info");
        logger.warning("warning");
        logger.severe("severe");

        logger.log(Level.FINEST, "finest");
        logger.log(Level.FINER, "finer");
        logger.log(Level.FINE, "fine");
        logger.log(Level.CONFIG, "config");
        logger.log(Level.INFO, "info");
        logger.log(Level.WARNING, "warning");
        logger.log(Level.SEVERE, "severe");

        logger.log(Level.ALL, "all");
    }
}
```

###### After
```java
import org.slf4j.Logger;

class Test {
    void method(Logger logger) {
        logger.trace("finest");
        logger.trace("finer");
        logger.debug("fine");
        logger.info("config");
        logger.info("info");
        logger.warn("warning");
        logger.error("severe");

        logger.trace("finest");
        logger.trace("finer");
        logger.debug("fine");
        logger.info("config");
        logger.info("info");
        logger.warn("warning");
        logger.error("severe");

        logger.trace("all");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import java.util.logging.Level;
-import java.util.logging.Logger;
+import org.slf4j.Logger;

@@ -6,4 +5,4 @@
class Test {
    void method(Logger logger) {
-       logger.finest("finest");
-       logger.finer("finer");
-       logger.fine("fine");
-       logger.config("config");
+       logger.trace("finest");
+       logger.trace("finer");
+       logger.debug("fine");
+       logger.info("config");
        logger.info("info");
@@ -11,2 +10,2 @@
        logger.config("config");
        logger.info("info");
-       logger.warning("warning");
-       logger.severe("severe");
+       logger.warn("warning");
+       logger.error("severe");

@@ -14,7 +13,7 @@
        logger.severe("severe");

-       logger.log(Level.FINEST, "finest");
-       logger.log(Level.FINER, "finer");
-       logger.log(Level.FINE, "fine");
-       logger.log(Level.CONFIG, "config");
-       logger.log(Level.INFO, "info");
-       logger.log(Level.WARNING, "warning");
-       logger.log(Level.SEVERE, "severe");
+       logger.trace("finest");
+       logger.trace("finer");
+       logger.debug("fine");
+       logger.info("config");
+       logger.info("info");
+       logger.warn("warning");
+       logger.error("severe");

@@ -22,1 +21,1 @@
        logger.log(Level.SEVERE, "severe");

-       logger.log(Level.ALL, "all");
+       logger.trace("all");
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4j")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4j")
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
            <recipe>org.openrewrite.java.logging.slf4j.JulToSlf4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.JulToSlf4j -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JulToSlf4j
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.JulToSlf4j" />

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
