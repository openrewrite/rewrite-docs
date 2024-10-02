---
sidebar_label: "Adds TimeUnit to timeouts and duration methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Adds `TimeUnit` to timeouts and duration methods

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5\_TimeUnit**

_Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.7.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)`

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
displayName: Adds `TimeUnit` to timeouts and duration methods
description: Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit.
recipeList:
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectionRequestTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setConnectTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.client5.http.config.RequestConfig.Builder setResponseTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoLinger(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.http.io.SocketConfig.Builder setSoTimeout(int)

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.7.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:1.7.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-apache:1.7.0")
        }
        rewrite {
            activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit")
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
<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
    <project>
      <build>
        <plugins>
          <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.41.0</version>
            <configuration>
              <exportDatatables>true</exportDatatables>
              <activeRecipes>
                <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-apache</artifactId>
                <version>1.7.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe UpgradeApacheHttpClient_5_TimeUnit
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit">
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
[Joan Viladrosa](mailto:joan@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)