---
sidebar_label: "Migrate @ConfigurationProperties to Quarkus @ConfigMapping"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate @ConfigurationProperties to Quarkus @ConfigMapping

**org.openrewrite.quarkus.spring.MigrateConfigurationProperties**

_Migrates Spring Boot @ConfigurationProperties to Quarkus @ConfigMapping. This recipe converts configuration property classes to the native Quarkus pattern._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [configuration](/reference/recipes-by-tag#configuration)
* [quarkus](/reference/recipes-by-tag#quarkus)
* [migration](/reference/recipes-by-tag#migration)

## Recipe source

[GitHub: spring-config.yml](https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-config.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring-to-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring-to-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-config-yaml`
  * version: `x`
  * onlyIfUsing: `org.springframework.boot.context.properties.ConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.context.properties.ConfigurationProperties`
  * newFullyQualifiedTypeName: `io.smallrye.config.ConfigMapping`
* [Remove annotation attribute](../../java/removeannotationattribute)
  * annotationType: `io.smallrye.config.ConfigMapping`
  * attributeName: `ignoreUnknownFields`
* [Remove annotation attribute](../../java/removeannotationattribute)
  * annotationType: `io.smallrye.config.ConfigMapping`
  * attributeName: `ignoreInvalidFields`
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `org.springframework.boot.context.properties.EnableConfigurationProperties`
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `org.springframework.boot.context.properties.ConstructorBinding`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.spring.MigrateConfigurationProperties
displayName: Migrate @ConfigurationProperties to Quarkus @ConfigMapping
description: |
  Migrates Spring Boot @ConfigurationProperties to Quarkus @ConfigMapping. This recipe converts configuration property classes to the native Quarkus pattern.
tags:
  - spring
  - configuration
  - quarkus
  - migration
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.quarkus
      artifactId: quarkus-config-yaml
      version: x
      onlyIfUsing: org.springframework.boot.context.properties.ConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.context.properties.ConfigurationProperties
      newFullyQualifiedTypeName: io.smallrye.config.ConfigMapping
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: io.smallrye.config.ConfigMapping
      attributeName: ignoreUnknownFields
  - org.openrewrite.java.RemoveAnnotationAttribute:
      annotationType: io.smallrye.config.ConfigMapping
      attributeName: ignoreInvalidFields
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: org.springframework.boot.context.properties.EnableConfigurationProperties
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: org.springframework.boot.context.properties.ConstructorBinding

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot to Quarkus](/recipes/quarkus/spring/springboottoquarkus.md)

## Examples
##### Example 1
`MigrateConfigurationPropertiesTest#convertConfigurationPropertiesToConfigMapping`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private int timeout;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTimeout() {
        return timeout;
    }

    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }
}
```

###### After
```java
import io.smallrye.config.ConfigMapping;

@ConfigMapping(prefix = "app")
public class AppProperties {
    private String name;
    private int timeout;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTimeout() {
        return timeout;
    }

    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.boot.context.properties.ConfigurationProperties;
+import io.smallrye.config.ConfigMapping;

@@ -3,1 +3,1 @@
import org.springframework.boot.context.properties.ConfigurationProperties;

-@ConfigurationProperties(prefix = "app")
+@ConfigMapping(prefix = "app")
public class AppProperties {
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateConfigurationPropertiesTest#convertConfigurationPropertiesToConfigMapping`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private int timeout;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTimeout() {
        return timeout;
    }

    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }
}
```

###### After
```java
import io.smallrye.config.ConfigMapping;

@ConfigMapping(prefix = "app")
public class AppProperties {
    private String name;
    private int timeout;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTimeout() {
        return timeout;
    }

    public void setTimeout(int timeout) {
        this.timeout = timeout;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.boot.context.properties.ConfigurationProperties;
+import io.smallrye.config.ConfigMapping;

@@ -3,1 +3,1 @@
import org.springframework.boot.context.properties.ConfigurationProperties;

-@ConfigurationProperties(prefix = "app")
+@ConfigMapping(prefix = "app")
public class AppProperties {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.quarkus.spring.MigrateConfigurationProperties"
  displayName="Migrate @ConfigurationProperties to Quarkus @ConfigMapping"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring-to-quarkus"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateConfigurationProperties" />

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
