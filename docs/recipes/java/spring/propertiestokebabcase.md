---
sidebar_label: "Normalize Spring properties to kebab-case"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Normalize Spring properties to kebab-case

**org.openrewrite.java.spring.PropertiesToKebabCase**

_Normalize Spring properties to use lowercase and hyphen-separated syntax.  For example, changing `spring.main.showBanner` to `spring.main.show-banner`.  With [Spring's relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding),  `kebab-case` may be used in properties files and still be converted to configuration beans.  Note, an exception to this is the case of `@Value`, which is match-sensitive. For example, `@Value("${anExampleValue}")` will not match `an-example-value`.  [The Spring reference documentation recommends using `kebab-case` for properties where possible](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding)._

## Recipe source

[GitHub: properties-to-kebab-case.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/properties-to-kebab-case.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../core/singleton)

**Recipes**

* [Normalize Spring `application*.\{yml,yaml\}` properties to kebab-case](../../java/spring/propertiestokebabcaseyaml)
* [Normalize Spring `application*.properties` properties to kebab-case](../../java/spring/propertiestokebabcaseproperties)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.PropertiesToKebabCase
displayName: Normalize Spring properties to kebab-case
description: |
  Normalize Spring properties to use lowercase and hyphen-separated syntax.  For example, changing `spring.main.showBanner` to `spring.main.show-banner`.  With [Spring's relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding),  `kebab-case` may be used in properties files and still be converted to configuration beans.  Note, an exception to this is the case of `@Value`, which is match-sensitive. For example, `@Value(&quot;${anExampleValue}&quot;)` will not match `an-example-value`.  [The Spring reference documentation recommends using `kebab-case` for properties where possible](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding).
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.spring.PropertiesToKebabCaseYaml
  - org.openrewrite.java.spring.PropertiesToKebabCaseProperties

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Spring Boot 3.3 best practices (only)](/recipes/java/spring/boot3/springboot3bestpracticesonly.md)

## Examples
##### Example 1
`PropertiesToKebabCaseTest#singleFlatProperty`


<Tabs groupId="beforeAfter">
<TabItem value="application.properties" label="application.properties">


###### Before
```properties title="application.properties"
spring.main.showBanner=true
```

###### After
```properties title="application.properties"
spring.main.show-banner=true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.properties
+++ application.properties
@@ -1,1 +1,1 @@
-spring.main.showBanner=true
+spring.main.show-banner=true
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="application.yaml" label="application.yaml">


###### Before
```yaml title="application.yaml"
spring.main.showBanner: true
```

###### After
```yaml title="application.yaml"
spring.main.show-banner: true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.yaml
+++ application.yaml
@@ -1,1 +1,1 @@
-spring.main.showBanner: true
+spring.main.show-banner: true
```
</TabItem>
</Tabs>

---

##### Example 2
`PropertiesToKebabCaseTest#singleFlatProperty`


<Tabs groupId="beforeAfter">
<TabItem value="application.properties" label="application.properties">


###### Before
```properties title="application.properties"
spring.main.showBanner=true
```

###### After
```properties title="application.properties"
spring.main.show-banner=true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.properties
+++ application.properties
@@ -1,1 +1,1 @@
-spring.main.showBanner=true
+spring.main.show-banner=true
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="application.yaml" label="application.yaml">


###### Before
```yaml title="application.yaml"
spring.main.showBanner: true
```

###### After
```yaml title="application.yaml"
spring.main.show-banner: true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.yaml
+++ application.yaml
@@ -1,1 +1,1 @@
-spring.main.showBanner: true
+spring.main.show-banner: true
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.PropertiesToKebabCase"
  displayName="Normalize Spring properties to kebab-case"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.PropertiesToKebabCase" />

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
