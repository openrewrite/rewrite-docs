---
sidebar_label: "Code cleanup"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Code cleanup

**org.openrewrite.staticanalysis.CodeCleanup**

_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.20.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Default comes last](../staticanalysis/defaultcomeslast)
* [Remove empty blocks](../staticanalysis/emptyblock)
* [End files with a single newline](../java/format/emptynewlineatendoffile)
* [`for` loop counters should use postfix operators](../staticanalysis/forloopcontrolvariablepostfixoperators)
* [Finalize private fields](../staticanalysis/finalizeprivatefields)
* [Method parameter padding](../java/format/methodparampad)
* [No whitespace after](../java/format/nowhitespaceafter)
* [No whitespace before](../java/format/nowhitespacebefore)
* [Pad empty `for` loop components](../java/format/pademptyforloopcomponents)
* [Typecast parenthesis padding](../staticanalysis/typecastparenpad)
* [Equals avoids null](../staticanalysis/equalsavoidsnull)
* [Explicit initialization](../staticanalysis/explicitinitialization)
* [Fall through](../staticanalysis/fallthrough)
* [Hide utility class constructor](../staticanalysis/hideutilityclassconstructor)
* [Fix missing braces](../staticanalysis/needbraces)
* [Operator wrapping](../staticanalysis/operatorwrap)
* [Remove unnecessary parentheses](../staticanalysis/unnecessaryparentheses)
* [Replace calls to `Thread.run()` with `Thread.start()`](../staticanalysis/replacethreadrunwiththreadstart)
* [Chain `StringBuilder.append()` calls](../staticanalysis/chainstringbuilderappendcalls)
* [Replace `StringBuilder#append` with `String`](../staticanalysis/replacestringbuilderwithstring)
* [Add imports for fully qualified references to types](../java/shortenfullyqualifiedtypereferences)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CodeCleanup
displayName: Code cleanup
description: Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
recipeList:
  - org.openrewrite.staticanalysis.DefaultComesLast
  - org.openrewrite.staticanalysis.EmptyBlock
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators
  - org.openrewrite.staticanalysis.FinalizePrivateFields
  - org.openrewrite.java.format.MethodParamPad
  - org.openrewrite.java.format.NoWhitespaceAfter
  - org.openrewrite.java.format.NoWhitespaceBefore
  - org.openrewrite.java.format.PadEmptyForLoopComponents
  - org.openrewrite.staticanalysis.TypecastParenPad
  - org.openrewrite.staticanalysis.EqualsAvoidsNull
  - org.openrewrite.staticanalysis.ExplicitInitialization
  - org.openrewrite.staticanalysis.FallThrough
  - org.openrewrite.staticanalysis.HideUtilityClassConstructor
  - org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.staticanalysis.OperatorWrap
  - org.openrewrite.staticanalysis.UnnecessaryParentheses
  - org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.java.ShortenFullyQualifiedTypeReferences

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.27.1")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.20.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.27.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.20.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.CodeCleanup")
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
        <version>5.45.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CodeCleanup</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.20.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CodeCleanup -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CodeCleanup
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), Michel Gonzalez, [Aaron Gershman](mailto:aegershman@gmail.com), [Kun Li](mailto:kun@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Greg Adams](mailto:greg@moderne.io), Josh Soref, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), [Mike Solomon](mailto:mike@moderne.io)
