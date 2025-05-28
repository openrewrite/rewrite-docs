---
sidebar_label: "Unfold YAML properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Unfold YAML properties

**org.openrewrite.yaml.UnfoldProperties**

_Transforms dot-separated property keys in YAML files into nested map hierarchies to enhance clarity and readability, or for compatibility with tools expecting structured YAML._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/UnfoldProperties.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `List` | exclusions | An optional list of [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expressions to specify keys that should not be unfolded. | `$..[org.springframework.security]` |
| `List` | applyTo | An optional list of [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expressions that specify which keys the recipe should target only. Only the properties matching these expressions will be unfolded. | `$..[org.springframework.security]` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|exclusions|`List.of("$..[logging.level][?(@property.match(/.*/))]", "$..[enable.process.files]")`|
|applyTo||


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
spring.application.name: my-app
logging.level:
  root: INFO
  org.springframework.web: DEBUG
management:
  metrics.enable.process.files: true
  endpoint.health:
    show-components: always
    show-details: always
```

###### After
```yaml
spring:
  application:
    name: my-app
logging:
  level:
    root: INFO
    org.springframework.web: DEBUG
management:
  metrics:
    enable.process.files: true
  endpoint:
    health:
      show-components: always
      show-details: always
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,7 @@
-spring.application.name: my-app
-logging.level:
- root: INFO
- org.springframework.web: DEBUG
+spring:
+ application:
+   name: my-app
+logging:
+ level:
+   root: INFO
+   org.springframework.web: DEBUG
management:
@@ -6,4 +9,6 @@
  org.springframework.web: DEBUG
management:
- metrics.enable.process.files: true
- endpoint.health:
-   show-components: always
-   show-details: always
+ metrics:
+   enable.process.files: true
+ endpoint:
+   health:
+     show-components: always
+     show-details: always

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UnfoldPropertiesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UnfoldPropertiesExample
displayName: Unfold YAML properties example
recipeList:
  - org.openrewrite.yaml.UnfoldProperties:
      exclusions: $..[org.springframework.security]
      applyTo: $..[org.springframework.security]
```

Now that `com.yourorg.UnfoldPropertiesExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.UnfoldPropertiesExample")
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
            <recipe>com.yourorg.UnfoldPropertiesExample</recipe>
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
mod run . --recipe UnfoldProperties --recipe-option "exclusions=$..[org.springframework.security]" --recipe-option "applyTo=$..[org.springframework.security]"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-yaml:{{VERSION_ORG_OPENREWRITE_REWRITE_YAML}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.yaml.UnfoldProperties" />

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
[Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), [JohannisK](mailto:johan.kragt@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
