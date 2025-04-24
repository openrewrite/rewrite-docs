---
sidebar_label: "Change property key"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change property key

**org.openrewrite.yaml.ChangePropertyKey**

_Change a YAML property key while leaving the value intact. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyKey.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldPropertyKey | The property key to rename. Supports glob patterns. | `management.metrics.binders.*.enabled` |
| `String` | newPropertyKey | The new name for the property key. | `management.metrics.enable.process.files` |
| `Boolean` | relaxedBinding | *Optional*. Whether to match the `oldPropertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Defaults to `true`. If you want to use exact matching in your search, set this to `false`. |  |
| `List` | except | *Optional*. If any of these property keys exist as direct children of `oldPropertyKey`, then they will not be moved to `newPropertyKey`. | `List.of("group")` |
| `String` | filePattern | *Optional*. A glob expression representing a file path to search for (relative to the project root). Blank/null matches all. | `.github/workflows/*.yml` |

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`management.metrics.binders.*.enabled`|
|newPropertyKey|`management.metrics.enable.process.files`|
|relaxedBinding|`null`|
|except|`null`|
|filePattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
management.metrics.binders.files.enabled: true
```

###### After
```yaml
management.metrics.enable.process.files: true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-management.metrics.binders.files.enabled: true
+management.metrics.enable.process.files: true
```
</TabItem>
</Tabs>

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`a.b.c.d`|
|newPropertyKey|`a.b.c`|
|relaxedBinding|`null`|
|except|`null`|
|filePattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
a.b.c.d: true
```

###### After
```yaml
a.b.c: true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-a.b.c.d: true
+a.b.c: true
```
</TabItem>
</Tabs>

---

##### Example 3

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`spring.profiles`|
|newPropertyKey|`spring.config.activate.on-profile`|
|relaxedBinding|`null`|
|except|`null`|
|filePattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
spring.profiles.group.prod: proddb,prodmq,prodmetrics
```

###### After
```yaml
spring.config.activate.on-profile.group.prod: proddb,prodmq,prodmetrics
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-spring.profiles.group.prod: proddb,prodmq,prodmetrics
+spring.config.activate.on-profile.group.prod: proddb,prodmq,prodmetrics

```
</TabItem>
</Tabs>

---

##### Example 4

###### Parameters
| Parameter | Value |
| -- | -- |
|oldPropertyKey|`spring.profiles`|
|newPropertyKey|`spring.config.activate.on-profile`|
|relaxedBinding|`null`|
|except|`List.of("group", "active", "include")`|
|filePattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
spring:
  profiles:
    active: allEnvs
    include: baseProfile
    foo: bar
    group:
      prod: proddb,prodmq,prodmetrics
```

###### After
```yaml
spring:
  profiles:
    active: allEnvs
    include: baseProfile
    group:
      prod: proddb,prodmq,prodmetrics
  config.activate.on-profile:
    foo: bar
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,0 @@
    active: allEnvs
    include: baseProfile
-   foo: bar
    group:
@@ -8,0 +7,2 @@
    group:
      prod: proddb,prodmq,prodmetrics
+ config.activate.on-profile:
+   foo: bar

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePropertyKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyKeyExample
displayName: Change property key example
recipeList:
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.binders.*.enabled
      newPropertyKey: management.metrics.enable.process.files
      except: List.of("group")
      filePattern: .github/workflows/*.yml
```

Now that `com.yourorg.ChangePropertyKeyExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.ChangePropertyKeyExample")
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
            <recipe>com.yourorg.ChangePropertyKeyExample</recipe>
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
mod run . --recipe ChangePropertyKey --recipe-option "oldPropertyKey=management.metrics.binders.*.enabled" --recipe-option "newPropertyKey=management.metrics.enable.process.files" --recipe-option "except=List.of("group")" --recipe-option "filePattern=.github/workflows/*.yml"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-yaml:{{VERSION_ORG_OPENREWRITE_REWRITE_YAML}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyKey" />

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Mike Solomon](mailto:mike@moderne.io), Sandeep Nagaraj, [Thomas Zub](mailto:thomas.zub@outlook.de), [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io)
