---
sidebar_label: "Comment out property"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comment out property

**org.openrewrite.yaml.CommentOutProperty**

_Comment out a YAML property and add a comment in front._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CommentOutProperty.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | propertyKey | The key to be commented out. | `applicability.singleSource` |
| `String` | commentText | The comment text to be added before the specified key. | `The `foo` property is deprecated, please migrate` |
| `Boolean` | commentOutProperty | *Optional*. If false, property wouldn't be commented out, only comment will be added. By default, set to true | `true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Check and Comment Out Deprecations removed on WebLogic version 14.1.2](/recipes/com/oracle/weblogic/rewrite/checkandcommentoutdeprecations1412.md)

## Examples
##### Example 1
comment out a map entry

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence.propertyA`|
|commentText|`Some comments`|
|commentOutProperty|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
  foo:
    bar:
      sequence:
        - name: name
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

###### After
```yaml
  foo:
    bar:
      sequence:
        - name: name
        # Some comments
        # propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,2 @@
      sequence:
        - name: name
-       - propertyA: fieldA
+       # Some comments
+       # propertyA: fieldA
        - propertyB: fieldB
```
</TabItem>
</Tabs>

---

##### Example 2
comment out entire sequence

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence`|
|commentText|`Some comments`|
|commentOutProperty|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
foo:
  bar:
    sequence:
      - name: name
      - propertyA: fieldA
      - propertyB: fieldB
    scalar: value
```

###### After
```yaml
foo:
  bar:
    # Some comments
    # sequence:
    #   - name: name
    #   - propertyA: fieldA
    #   - propertyB: fieldB
    scalar: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,4 +3,5 @@
foo:
  bar:
-   sequence:
-     - name: name
-     - propertyA: fieldA
-     - propertyB: fieldB
+   # Some comments
+   # sequence:
+   #   - name: name
+   #   - propertyA: fieldA
+   #   - propertyB: fieldB
    scalar: value
```
</TabItem>
</Tabs>

---

##### Example 3
comment out a map entry

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence.propertyA`|
|commentText|`Some comments`|
|commentOutProperty|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
  foo:
    bar:
      sequence:
        - name: name
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

###### After
```yaml
  foo:
    bar:
      sequence:
        - name: name
        # Some comments
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,0 +5,1 @@
      sequence:
        - name: name
+       # Some comments
        - propertyA: fieldA
```
</TabItem>
</Tabs>

---

##### Example 4
comment out a map entry

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence.name`|
|commentText|`Some comments`|
|commentOutProperty|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
  foo:
    bar:
      sequence:
        - name: name
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

###### After
```yaml
  foo:
    bar:
      sequence:
        # Some comments
        - name: name
        - propertyA: fieldA
        - propertyB: fieldB
      scalar: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,0 +4,1 @@
    bar:
      sequence:
+       # Some comments
        - name: name
```
</TabItem>
</Tabs>

---

##### Example 5
comment out entire sequence

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`foo.bar.sequence`|
|commentText|`Some comments`|
|commentOutProperty|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
foo:
  bar:
    sequence:
      - name: name
      - propertyA: fieldA
      - propertyB: fieldB
    scalar: value
```

###### After
```yaml
foo:
  bar:
    # Some comments
    sequence:
      - name: name
      - propertyA: fieldA
      - propertyB: fieldB
    scalar: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,1 @@
foo:
  bar:
+   # Some comments
    sequence:
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CommentOutPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CommentOutPropertyExample
displayName: Comment out property example
recipeList:
  - org.openrewrite.yaml.CommentOutProperty:
      propertyKey: applicability.singleSource
      commentText: The `foo` property is deprecated, please migrate
      commentOutProperty: true
```

Now that `com.yourorg.CommentOutPropertyExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.CommentOutPropertyExample")
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
            <recipe>com.yourorg.CommentOutPropertyExample</recipe>
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
mod run . --recipe CommentOutProperty --recipe-option "propertyKey=applicability.singleSource" --recipe-option "commentText=The `foo` property is deprecated, please migrate" --recipe-option "commentOutProperty=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-yaml:{{VERSION_ORG_OPENREWRITE_REWRITE_YAML}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.yaml.CommentOutProperty" />

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
[Kun Li](mailto:kun@moderne.io), ashakirin, Valentin Delaye, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
