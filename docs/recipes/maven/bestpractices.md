---
sidebar_label: "Apache Maven best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Apache Maven best practices

**org.openrewrite.maven.BestPractices**

_Applies best practices to Maven POMs._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.36.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Add explicit `groupId` to Maven plugins](../maven/cleanup/explicitplugingroupid)
* [Add explicit plugin versions](../maven/cleanup/explicitpluginversion)
* [Drop prefixless expressions in POM](../maven/cleanup/prefixlessexpressions)
* [Order POM elements](../maven/orderpomelements)
* [Remove duplicate Maven dependencies](../maven/removeduplicatedependencies)
* [Remove redundant explicit dependency and plugin versions](../maven/removeredundantdependencyversions)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.BestPractices
displayName: Apache Maven best practices
description: Applies best practices to Maven POMs.
recipeList:
  - org.openrewrite.maven.cleanup.ExplicitPluginGroupId
  - org.openrewrite.maven.cleanup.ExplicitPluginVersion
  - org.openrewrite.maven.cleanup.PrefixlessExpressions
  - org.openrewrite.maven.OrderPomElements
  - org.openrewrite.maven.RemoveDuplicateDependencies
  - org.openrewrite.maven.RemoveRedundantDependencyVersions

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="project-type">

<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
    <project>
      <build>
        <plugins>
          <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.41.0</version>
            <configuration>
              <exportDatatables>true</exportDatatables>
              <activeRecipes>
                <recipe>org.openrewrite.maven.BestPractices</recipe>
              </activeRecipes>
            </configuration>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.BestPractices -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe BestPractices
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.maven.BestPractices">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
[Geoffrey De Smet](mailto:gds.geoffrey.de.smet@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Knut Wannheden](mailto:knut.wannheden@mobi.ch), Patrick Way, [DidierLoiseau](mailto:didierloiseau+github@gmail.com), [Alex Boyko](mailto:aboyko@vmware.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), Adriano Machado, [DidierLoiseau](mailto:didierloiseau+git@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), Ryan Hudson, [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)