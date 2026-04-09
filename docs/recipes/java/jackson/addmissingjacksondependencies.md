---
sidebar_label: "Add missing Jackson dataformat dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add missing Jackson dataformat dependencies

**org.openrewrite.java.jackson.AddMissingJacksonDependencies**

_Adds Jackson dataformat dependencies when code uses types from their packages but the dependency is not declared. For example, adds `jackson-dataformat-xml` when code uses `XmlMapper`._

### Tags

* [jackson-2](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: jackson-missing-dependencies.yml](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-missing-dependencies.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-xml`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.xml.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-yaml`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.yaml.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-csv`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.csv.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-cbor`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.cbor.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-smile`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.smile.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-avro`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.avro.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-ion`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.ion.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `com.fasterxml.jackson.dataformat`
  * artifactId: `jackson-dataformat-protobuf`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.dataformat.protobuf.*`
  * acceptTransitive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.AddMissingJacksonDependencies
displayName: Add missing Jackson dataformat dependencies
description: |
  Adds Jackson dataformat dependencies when code uses types from their packages but the dependency is not declared. For example, adds `jackson-dataformat-xml` when code uses `XmlMapper`.
tags:
  - jackson-2
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-xml
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.xml.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-yaml
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.yaml.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-csv
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.csv.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-cbor
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.cbor.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-smile
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.smile.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-avro
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.avro.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-ion
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.ion.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.dataformat
      artifactId: jackson-dataformat-protobuf
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.dataformat.protobuf.*
      acceptTransitive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrates from Jackson 2.x to Jackson 3.x](/recipes/java/jackson/upgradejackson_2_3.md)

## Examples
##### Example 1
`AddMissingJacksonDependenciesTest#addXmlDependencyWhenXmlMapperUsed`


###### Unchanged
```java
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

class A {
    XmlMapper mapper = new XmlMapper();
}
```

###### Unchanged
```mavenProject
project
```

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.17.3</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`AddMissingJacksonDependenciesTest#addXmlDependencyWhenXmlMapperUsed`


###### Unchanged
```java
import com.fasterxml.jackson.dataformat.xml.XmlMapper;

class A {
    XmlMapper mapper = new XmlMapper();
}
```

###### Unchanged
```mavenProject
project
```

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.17.3</version>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.AddMissingJacksonDependencies"
  displayName="Add missing Jackson dataformat dependencies"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.AddMissingJacksonDependencies" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
