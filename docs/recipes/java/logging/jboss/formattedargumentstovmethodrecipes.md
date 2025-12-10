---
sidebar_label: "Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods

**org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes**

_Replace `logger.level("hello {0}", arg)` with `logger.levelv("hello {0}", arg)`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jboss/FormattedArgumentsToVMethod.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `FormattedArgumentsToVMethod.TraceToVTrace`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracerecipe)
* [Refaster template `FormattedArgumentsToVMethod.TraceToVTraceWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracewiththrowablerecipe)
* [Refaster template `FormattedArgumentsToVMethod.DebugToVDebug`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugrecipe)
* [Refaster template `FormattedArgumentsToVMethod.DebugToVDebugWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugwiththrowablerecipe)
* [Refaster template `FormattedArgumentsToVMethod.InfoToVInfo`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$infotovinforecipe)
* [Refaster template `FormattedArgumentsToVMethod.InfoToVInfoWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$infotovinfowiththrowablerecipe)
* [Refaster template `FormattedArgumentsToVMethod.WarnToVWarn`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnrecipe)
* [Refaster template `FormattedArgumentsToVMethod.WarnToVWarnWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnwiththrowablerecipe)
* [Refaster template `FormattedArgumentsToVMethod.ErrorToVError`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorrecipe)
* [Refaster template `FormattedArgumentsToVMethod.ErrorToVErrorWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorwiththrowablerecipe)
* [Refaster template `FormattedArgumentsToVMethod.FatalToVFatal`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalrecipe)
* [Refaster template `FormattedArgumentsToVMethod.FatalToVFatalWithThrowable`](../../../java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalwiththrowablerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes
displayName: Replace deprecated JBoss Logging Logger formatted message invocations with the v-version of methods
description: |
  Replace `logger.level(&quot;hello {0}&quot;, arg)` with `logger.levelv(&quot;hello {0}&quot;, arg)`.
recipeList:
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$TraceToVTraceRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$TraceToVTraceWithThrowableRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$DebugToVDebugRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$DebugToVDebugWithThrowableRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$InfoToVInfoRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$InfoToVInfoWithThrowableRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$WarnToVWarnRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$WarnToVWarnWithThrowableRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$ErrorToVErrorRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$ErrorToVErrorWithThrowableRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$FatalToVFatalRecipe
  - org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$FatalToVFatalWithThrowableRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [JBoss Logging Best Practices](/recipes/java/logging/jboss/jbossloggingbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jboss.logging.Logger;

class Test {
    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {
        logger.info(msg, formatArgs);
        logger.info(msg, new Object[]{o});
        logger.info((Object)msg, formatArgs, t);
        logger.info(o, formatArgs, t);
    }
}
```

###### After
```java
import org.jboss.logging.Logger;

class Test {
    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {
        logger.infov(msg, formatArgs);
        logger.infov(msg, new Object[]{o});
        logger.infov(msg, formatArgs, t);
        logger.info(o, formatArgs, t);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,3 +5,3 @@
class Test {
    void test(Logger logger, String msg, Throwable t, Object[] formatArgs, Object o) {
-       logger.info(msg, formatArgs);
-       logger.info(msg, new Object[]{o});
-       logger.info((Object)msg, formatArgs, t);
+       logger.infov(msg, formatArgs);
+       logger.infov(msg, new Object[]{o});
+       logger.infov(msg, formatArgs, t);
        logger.info(o, formatArgs, t);
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
    activeRecipe("org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes")
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
        activeRecipe("org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes")
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
            <recipe>org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FormattedArgumentsToVMethodRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes" />

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
