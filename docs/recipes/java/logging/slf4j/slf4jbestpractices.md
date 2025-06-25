---
sidebar_label: "SLF4J best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SLF4J best practices

**org.openrewrite.java.logging.slf4j.Slf4jBestPractices**

_Applies best practices to logging with SLF4J._

### Tags

* slf4j
* logging

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass)
* [Parameterize SLF4J's logging statements](../../../java/logging/slf4j/parameterizedlogging)
* [SLF4J logging statements should begin with constants](../../../java/logging/slf4j/slf4jlogshouldbeconstant)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](../../../java/logging/slf4j/completeexceptionlogging)
* [Catch block log level](../../../java/logging/catchblockloglevel)
* [Change logger fields to `private`](../../../java/logging/changeloggerstoprivate)
* [Match `if (is*Enabled())` with logging statements](../../../java/logging/slf4j/matchisloglevelenabledwithlogstatements)
* [Wrap expensive log statements in conditionals](../../../java/logging/slf4j/wrapexpensivelogstatementsinconditionals)
* [Strip `toString()` from arguments](../../../java/logging/slf4j/striptostringfromarguments)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Slf4jBestPractices
displayName: SLF4J best practices
description: |
  Applies best practices to logging with SLF4J.
tags:
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging
  - org.openrewrite.java.logging.slf4j.Slf4jLogShouldBeConstant
  - org.openrewrite.java.logging.slf4j.CompleteExceptionLogging
  - org.openrewrite.java.logging.CatchBlockLogLevel
  - org.openrewrite.java.logging.ChangeLoggersToPrivate
  - org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements
  - org.openrewrite.java.logging.slf4j.WrapExpensiveLogStatementsInConditionals
  - org.openrewrite.java.logging.slf4j.StripToStringFromArguments

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
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
    activeRecipe("org.openrewrite.java.logging.slf4j.Slf4jBestPractices")
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
        activeRecipe("org.openrewrite.java.logging.slf4j.Slf4jBestPractices")
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
            <recipe>org.openrewrite.java.logging.slf4j.Slf4jBestPractices</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Slf4jBestPractices -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Slf4jBestPractices
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Slf4jBestPractices" />

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
Aaron Gershman, [Tim te Beek](mailto:tim@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), [Kun Li](mailto:kun@moderne.io), jhl221123, [Pierre Delagrave](mailto:pierre@moderne.io), Md Riyazul Islam, [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Andrii Rodionov](mailto:andrey.rodionov@gmail.com), Adriano Machado, [Peter Streef](mailto:p.streef@gmail.com), [JohannisK](mailto:johan.kragt@moderne.io), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Joan Viladrosa](mailto:joan@moderne.io), [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Kevin McCarpenter](mailto:kevin@moderne.io)
