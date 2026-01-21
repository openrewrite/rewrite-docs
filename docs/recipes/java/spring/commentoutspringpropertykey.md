---
sidebar_label: "Comment out Spring properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comment out Spring properties

**org.openrewrite.java.spring.CommentOutSpringPropertyKey**

_Add comment to specified Spring properties, and comment out the property._

## Recipe source

[GitHub: rewrite-spring-6.23.0.jar](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/CommentOutSpringPropertyKey.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | propertyKey | The name of the property key to comment out. | `management.metrics.binders.files.enabled` |
| `String` | comment | Comment to replace the property key. | `This property is deprecated and no longer applicable starting from Spring Boot 3.0.x` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot properties to 2.0](/recipes/java/spring/boot2/springbootproperties_2_0.md)
* [Migrate Spring Boot properties to 2.1](/recipes/java/spring/boot2/springbootproperties_2_1.md)
* [Migrate Spring Boot properties to 2.2](/recipes/java/spring/boot2/springbootproperties_2_2.md)
* [Migrate Spring Boot properties to 2.3](/recipes/java/spring/boot2/springbootproperties_2_3.md)
* [Migrate Spring Boot properties to 2.4](/recipes/java/spring/boot2/springbootproperties_2_4.md)
* [Migrate Spring Boot properties to 2.5](/recipes/java/spring/boot2/springbootproperties_2_5.md)
* [Migrate Spring Boot properties to 2.6](/recipes/java/spring/boot2/springbootproperties_2_6.md)
* [Migrate Spring Boot properties to 2.7](/recipes/java/spring/boot2/springbootproperties_2_7.md)
* [Migrate Spring Boot properties to 3.0](/recipes/java/spring/boot3/springbootproperties_3_0.md)
* [Migrate Spring Boot properties to 3.1](/recipes/java/spring/boot3/springbootproperties_3_1.md)
* [Migrate Spring Boot properties to 3.2](/recipes/java/spring/boot3/springbootproperties_3_2.md)
* [Migrate Spring Boot properties to 3.3](/recipes/java/spring/boot3/springbootproperties_3_3.md)
* [Migrate Spring Boot properties to 3.4](/recipes/java/spring/boot3/springbootproperties_3_4-community-edition.md)
* [Migrate Spring Boot properties to 3.5](/recipes/java/spring/boot3/springbootproperties_3_5.md)
* [Migrate Spring Boot properties to 4.0](/recipes/java/spring/boot4/springbootproperties_4_0.md)
* [Migrate Spring Cloud properties to 2020](/recipes/java/spring/cloud2020/springcloudproperties_2020.md)
* [Migrate Spring Cloud properties to 2021](/recipes/java/spring/cloud2021/springcloudproperties_2021.md)
* [Migrate Spring Cloud properties to 2022](/recipes/java/spring/cloud2022/springcloudproperties_2022.md)
* [Migrate Spring Cloud properties to 2023](/recipes/java/spring/cloud2023/springcloudproperties_2023.md)
* [Migrate Spring Cloud properties to 2024](/recipes/java/spring/cloud2024/springcloudproperties_2024.md)
* [Migrate Spring Cloud properties to 2025](/recipes/java/spring/cloud2025/springcloudproperties_2025.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|propertyKey|`server.port`|
|comment|`This property has been removed.`|


###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
server.port: 8080
```

###### After
```yaml
# This property has been removed.
# server.port: 8080
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,3 @@
-server.port: 8080
+# This property has been removed.
+# server.port: 8080
+
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CommentOutSpringPropertyKeyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CommentOutSpringPropertyKeyExample
displayName: Comment out Spring properties example
recipeList:
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.binders.files.enabled
      comment: This property is deprecated and no longer applicable starting from Spring Boot 3.0.x
```

Now that `com.yourorg.CommentOutSpringPropertyKeyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.CommentOutSpringPropertyKeyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
            <recipe>com.yourorg.CommentOutSpringPropertyKeyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
          </dependency>
        </dependencies>
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
mod run . --recipe CommentOutSpringPropertyKey --recipe-option "propertyKey=management.metrics.binders.files.enabled" --recipe-option "comment=This property is deprecated and no longer applicable starting from Spring Boot 3.0.x"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.CommentOutSpringPropertyKey" />

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
