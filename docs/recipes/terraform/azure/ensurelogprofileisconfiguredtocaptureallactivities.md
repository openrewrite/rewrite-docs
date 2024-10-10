---
sidebar_label: "Ensure log profile is configured to capture all activities"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ensure log profile is configured to capture all activities

**org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities**

_Ensure log profile is configured to capture all activities._

### Tags

* Azure
* terraform
* CKV_AZURE_38

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.4.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.4.1


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Terraform configuration](../../terraform/addconfiguration)
  * resourceName: `azurerm_monitor_log_profile`
  * content: `categories = [   "Action",   "Delete",   "Write", ]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities
displayName: Ensure log profile is configured to capture all activities
description: Ensure log profile is configured to capture all activities.
tags:
  - Azure
  - terraform
  - CKV_AZURE_38
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_monitor_log_profile
      content: categories = [
  "Action",
  "Delete",
  "Write",
]

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.4.1` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.4.1")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.25.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-terraform:2.4.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities")
        exportDatatables = true
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.42.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.4.1</version>
          </dependency>
        </dependencies>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe EnsureLogProfileIsConfiguredToCaptureAllActivities
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.terraform.azure.EnsureLogProfileIsConfiguredToCaptureAllActivities">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [pocan101](mailto:jcortesd@gmail.com), [Kun Li](mailto:kun@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
