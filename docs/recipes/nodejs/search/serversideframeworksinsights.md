---
sidebar_label: "Javascript server-side frameworks insights"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Javascript server-side frameworks insights

**org.openrewrite.nodejs.search.ServerSideFrameworksInsights**

_Discover which popular javascript server-side frameworks (Express, Koa, Hapi, etc.) are being used in your projects._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-nodejs/blob/main/src/main/resources/META-INF/rewrite/insights.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-nodejs/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-nodejs/0.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-nodejs
* version: 0.13.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `express`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `koa`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@hapi/hapi`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@nestjs/core`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `fastify`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `socket.io`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `apollo-server`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `loopback`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@feathersjs/feathers`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `sails`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `meteor`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `restify`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `actionhero`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@adonisjs/core`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `moleculer`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `total.js`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `micro`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `polka`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `nodemailer`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `twilio`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@sendgrid/mail`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `firebase`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `aws-sdk`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `graphql-yoga`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `strapi`
  * onlyDirect: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.nodejs.search.ServerSideFrameworksInsights
displayName: Javascript server-side frameworks insights
description: Discover which popular javascript server-side frameworks (Express, Koa, Hapi, etc.) are being used in your projects.
recipeList:
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: express
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: koa
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @hapi/hapi
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @nestjs/core
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: fastify
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: socket.io
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: apollo-server
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: loopback
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @feathersjs/feathers
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: sails
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: meteor
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: restify
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: actionhero
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @adonisjs/core
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: moleculer
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: total.js
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: micro
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: polka
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: nodemailer
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: twilio
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @sendgrid/mail
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: firebase
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: aws-sdk
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: graphql-yoga
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: strapi
      onlyDirect: false

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-nodejs:0.13.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.nodejs.search.ServerSideFrameworksInsights")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-nodejs:0.13.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-nodejs:0.13.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.nodejs.search.ServerSideFrameworksInsights")
        setExportDatatables(true)
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
        <version>5.46.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.nodejs.search.ServerSideFrameworksInsights</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-nodejs</artifactId>
            <version>0.13.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-nodejs:RELEASE -Drewrite.activeRecipes=org.openrewrite.nodejs.search.ServerSideFrameworksInsights -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ServerSideFrameworksInsights
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-nodejs:0.13.0
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.nodejs.search.ServerSideFrameworksInsights" />

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

