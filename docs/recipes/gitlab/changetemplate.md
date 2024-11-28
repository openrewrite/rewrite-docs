---
sidebar_label: "Change GitLab template"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change GitLab template

**org.openrewrite.gitlab.ChangeTemplate**

_Change a GitLab template in use._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-gitlab/blob/main/src/main/java/org/openrewrite/gitlab/ChangeTemplate.java), [Issue Tracker](https://github.com/openrewrite/rewrite-gitlab/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-gitlab/0.3.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-gitlab
* version: 0.3.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldTemplate | The name of the template to match. | `Terraform/Base.gitlab-ci.yml` |
| `String` | newTemplate | Name of the template to use instead. | `OpenTofu/Base.gitlab-ci.yml` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change value](../yaml/changevalue)
  * keyPath: `$.include[?(@.template =~ 'null(?:@.+)?')].template`
  * filePattern: `.gitlab-ci.yml`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gitlab.ChangeTemplate
displayName: Change GitLab template
description: Change a GitLab template in use.


recipeList:
  - org.openrewrite.yaml.ChangeValue:
      keyPath: $.include[?(@.template =~ 'null(?:@.+)?')].template
      filePattern: .gitlab-ci.yml

```
</TabItem>
</Tabs>

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTemplateExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTemplateExample
displayName: Change GitLab template example
recipeList:
  - org.openrewrite.gitlab.ChangeTemplate:
      oldTemplate: Terraform/Base.gitlab-ci.yml
      newTemplate: OpenTofu/Base.gitlab-ci.yml
```

Now that `com.yourorg.ChangeTemplateExample` has been defined, activate it and take a dependency on org.openrewrite.recipe:rewrite-gitlab:0.3.1 in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTemplateExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-gitlab:0.3.1")
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
        <version>5.46.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeTemplateExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-gitlab</artifactId>
            <version>0.3.1</version>
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
mod run . --recipe ChangeTemplateExample
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-gitlab:0.3.1
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gitlab.ChangeTemplate" />

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
[Steven Tompkins](mailto:steven.tompkins.jr@gmail.com)
