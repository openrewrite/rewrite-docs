---
sidebar_label: "OpenRewrite best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenRewrite best practices

**org.openrewrite.recipes.OpenRewriteBestPractices**

_Best practices for OpenRewrite recipe development._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-recommendations/blob/main/src/main/resources/META-INF/rewrite/openrewrite.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-recommendations/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-recommendations/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Java Recipe best practices](../recipes/javarecipebestpractices)
* [Recipe testing best practices](../recipes/recipetestingbestpractices)
* [Recipe nullability best practices](../recipes/recipenullabilitybestpractices)
* [Order imports](../java/orderimports)
* [Remove unused imports](../java/removeunusedimports)
* [End files with a single newline](../java/format/emptynewlineatendoffile)
* [Remove trailing whitespace](../java/format/removetrailingwhitespace)
* [Enum values should be compared with "=="](../staticanalysis/compareenumswithequalityoperator)
* [Inline variable](../staticanalysis/inlinevariable)
* [Simplify lambda blocks to expressions](../staticanalysis/lambdablocktoexpression)
* [Add missing `@Override` to overriding and implementing methods](../staticanalysis/missingoverrideannotation)
* [Operator wrapping](../staticanalysis/operatorwrap)
  * wrapOption: `EOL`
* [Remove unused local variables](../staticanalysis/removeunusedlocalvariables)
* [Remove unused private fields](../staticanalysis/removeunusedprivatefields)
* [Remove unused private methods](../staticanalysis/removeunusedprivatemethods)
* [Use the diamond operator](../staticanalysis/usediamondoperator)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipes.OpenRewriteBestPractices
displayName: OpenRewrite best practices
description: Best practices for OpenRewrite recipe development.
recipeList:
  - org.openrewrite.recipes.JavaRecipeBestPractices
  - org.openrewrite.recipes.RecipeTestingBestPractices
  - org.openrewrite.recipes.RecipeNullabilityBestPractices
  - org.openrewrite.java.OrderImports
  - org.openrewrite.java.RemoveUnusedImports
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.java.format.RemoveTrailingWhitespace
  - org.openrewrite.staticanalysis.CompareEnumsWithEqualityOperator
  - org.openrewrite.staticanalysis.InlineVariable
  - org.openrewrite.staticanalysis.LambdaBlockToExpression
  - org.openrewrite.staticanalysis.MissingOverrideAnnotation
  - org.openrewrite.staticanalysis.OperatorWrap:
      wrapOption: EOL
  - org.openrewrite.staticanalysis.RemoveUnusedLocalVariables
  - org.openrewrite.staticanalysis.RemoveUnusedPrivateFields
  - org.openrewrite.staticanalysis.RemoveUnusedPrivateMethods
  - org.openrewrite.staticanalysis.UseDiamondOperator

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-recommendations` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.recipes.OpenRewriteBestPractices")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-recommendations:{{VERSION_REWRITE_RECOMMENDATIONS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-recommendations:{{VERSION_REWRITE_RECOMMENDATIONS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.recipes.OpenRewriteBestPractices")
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
            <recipe>org.openrewrite.recipes.OpenRewriteBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-recommendations</artifactId>
            <version>{{VERSION_REWRITE_RECOMMENDATIONS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-recommendations:RELEASE -Drewrite.activeRecipes=org.openrewrite.recipes.OpenRewriteBestPractices -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe OpenRewriteBestPractices
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-recommendations:{{VERSION_REWRITE_RECOMMENDATIONS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.recipes.OpenRewriteBestPractices" />

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

