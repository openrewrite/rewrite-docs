---
sidebar_label: "Upgrade to Maven model version 4.1.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Maven model version 4.1.0

**org.openrewrite.maven.UpgradeToModelVersion410**

_Upgrades Maven POMs from model version 4.0.0 to 4.1.0, enabling new Maven 4 features like `<subprojects>`, `bom` packaging, and automatic version inference. This recipe updates the `<modelVersion>` element, `xmlns` namespace, and `xsi:schemaLocation` from 4.0.0 to 4.1.0._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change XML tag value](../xml/changetagvalue)
  * elementName: `/project/modelVersion`
  * oldValue: `4.0.0`
  * newValue: `4.1.0`
* [Change XML attribute](../xml/changetagattribute)
  * elementName: `/project`
  * attributeName: `xmlns`
  * newValue: `http://maven.apache.org/POM/4.1.0`
  * oldValue: `http://maven.apache.org/POM/4.0.0`
* [Change XML attribute](../xml/changetagattribute)
  * elementName: `/project`
  * attributeName: `xsi:schemaLocation`
  * newValue: `$14.1.0$24.1.0$3`
  * oldValue: `(http://maven\.apache\.org/POM/)4\.0\.0(\s+http://maven\.apache\.org/xsd/maven-)4\.0\.0(\.xsd)`
  * regex: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.UpgradeToModelVersion410
displayName: Upgrade to Maven model version 4.1.0
description: |
  Upgrades Maven POMs from model version 4.0.0 to 4.1.0, enabling new Maven 4 features like `&lt;subprojects&gt;`, `bom` packaging, and automatic version inference. This recipe updates the `&lt;modelVersion&gt;` element, `xmlns` namespace, and `xsi:schemaLocation` from 4.0.0 to 4.1.0.
recipeList:
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /project/modelVersion
      oldValue: 4.0.0
      newValue: 4.1.0
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: /project
      attributeName: xmlns
      newValue: http://maven.apache.org/POM/4.1.0
      oldValue: http://maven.apache.org/POM/4.0.0
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: /project
      attributeName: xsi:schemaLocation
      newValue: $14.1.0$24.1.0$3
      oldValue: (http://maven\.apache\.org/POM/)4\.0\.0(\s+http://maven\.apache\.org/xsd/maven-)4\.0\.0(\.xsd)
      regex: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Maven 4](/recipes/maven/migratetomaven4.md)


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
            <recipe>org.openrewrite.maven.UpgradeToModelVersion410</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.UpgradeToModelVersion410 -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeToModelVersion410
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.UpgradeToModelVersion410" />

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
