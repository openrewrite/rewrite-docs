---
sidebar_label: "Migrate to Maven 4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Maven 4

**org.openrewrite.maven.MigrateToMaven4**

_Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/src/main/resources/META-INF/rewrite/maven.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Drop prefixless expressions in POM](../maven/cleanup/prefixlessexpressions)
* [Replace removed root directory properties](../maven/replaceremovedrootdirectoryproperties)
* [Replace deprecated lifecycle phases](../maven/replacedeprecatedlifecyclephases)
* [Remove duplicate plugin declarations](../maven/removeduplicateplugindeclarations)
* [Upgrade to Maven model version 4.1.0](../maven/upgradetomodelversion410)
* [Replace modules with subprojects](../maven/replacemoduleswithsubprojects)
* [Use Maven 4 parent inference](../maven/useparentinference)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.MigrateToMaven4
displayName: Migrate to Maven 4
description: |
  Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4.
recipeList:
  - org.openrewrite.maven.cleanup.PrefixlessExpressions
  - org.openrewrite.maven.ReplaceRemovedRootDirectoryProperties
  - org.openrewrite.maven.ReplaceDeprecatedLifecyclePhases
  - org.openrewrite.maven.RemoveDuplicatePluginDeclarations
  - org.openrewrite.maven.UpgradeToModelVersion410
  - org.openrewrite.maven.ReplaceModulesWithSubprojects
  - org.openrewrite.maven.UseParentInference

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">

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
            <recipe>org.openrewrite.maven.MigrateToMaven4</recipe>
          </activeRecipes>
        </configuration>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.MigrateToMaven4 -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToMaven4
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.MigrateToMaven4" />

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
