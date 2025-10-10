---
sidebar_label: "Change Maven plugin configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Maven plugin configuration

**org.openrewrite.maven.ChangePluginConfiguration**

_Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginConfiguration.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of the coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION' of the plugin to modify. | `org.openrewrite.maven` |
| `String` | artifactId | The second part of a coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION' of the plugin to modify. | `rewrite-maven-plugin` |
| `String` | configuration | *Optional*. Plugin configuration provided as raw XML overriding any existing configuration. Configuration inside `<executions>` blocks will not be altered. Supplying `null` will remove any existing configuration. | `<foo>bar</foo>` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.openrewrite.maven`|
|artifactId|`rewrite-maven-plugin`|
|configuration|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>org.example</groupId>
    <artifactId>foo</artifactId>
    <version>1.0</version>

    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
                <configuration>
                    <activeRecipes>
                        <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>
                    </activeRecipes>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>org.example</groupId>
    <artifactId>foo</artifactId>
    <version>1.0</version>

    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,5 +12,0 @@
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
-               <configuration>
-                   <activeRecipes>
-                       <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>
-                   </activeRecipes>
-               </configuration>
            </plugin>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginConfigurationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginConfigurationExample
displayName: Change Maven plugin configuration example
recipeList:
  - org.openrewrite.maven.ChangePluginConfiguration:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      configuration: <foo>bar</foo>
```

Now that `com.yourorg.ChangePluginConfigurationExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

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
            <recipe>com.yourorg.ChangePluginConfigurationExample</recipe>
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
mod run . --recipe ChangePluginConfiguration --recipe-option "groupId=org.openrewrite.maven" --recipe-option "artifactId=rewrite-maven-plugin" --recipe-option "configuration=<foo>bar</foo>"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginConfiguration" />

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
