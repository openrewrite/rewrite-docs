---
sidebar_label: "Apply Docker best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Apply Docker best practices

**org.openrewrite.docker.DockerBestPractices**

_Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices._

### Tags

* [security](/reference/recipes-by-tag#security)
* [best-practices](/reference/recipes-by-tag#best)
* [docker](/reference/recipes-by-tag#docker)

## Recipe source

[GitHub: docker.yml](https://github.com/openrewrite/rewrite/blob/main/src/main/resources/META-INF/rewrite/docker.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-docker/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Apply Docker security best practices](../docker/dockersecuritybestpractices)
* [Optimize Docker builds](../docker/dockerbuildoptimization)
* [Normalize Docker Hub image names](../docker/normalizedockerhubimagename)
* [Use exec form for `ENTRYPOINT` and `CMD`](../docker/useexecformentrypoint)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.docker.DockerBestPractices
displayName: Apply Docker best practices
description: |
  Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices.
tags:
  - security
  - best-practices
  - docker
recipeList:
  - org.openrewrite.docker.DockerSecurityBestPractices
  - org.openrewrite.docker.DockerBuildOptimization
  - org.openrewrite.docker.NormalizeDockerHubImageName
  - org.openrewrite.docker.UseExecFormEntrypoint

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`DockerBestPracticesTest#appliesBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value="docker" label="docker">


###### Before
```docker
FROM ubuntu:22.04
ADD app.jar /app/
RUN apt-get update
RUN apt-get install -y curl
ENTRYPOINT /app/start.sh
```

###### After
```docker
~~(EOL: ubuntu:22.04 (ended 2024-09-30, suggest noble (24.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:22.04
COPY app.jar /app/
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["/app/start.sh"]
USER appuser
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,5 +1,5 @@
-FROM ubuntu:22.04
-ADD app.jar /app/
-RUN apt-get update
-RUN apt-get install -y curl
-ENTRYPOINT /app/start.sh
+~~(EOL: ubuntu:22.04 (ended 2024-09-30, suggest noble (24.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:22.04
+COPY app.jar /app/
+RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
+ENTRYPOINT ["/app/start.sh"]
+USER appuser

```
</TabItem>
</Tabs>

---

##### Example 2
`DockerBestPracticesTest#appliesBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value="docker" label="docker">


###### Before
```docker
FROM ubuntu:22.04
ADD app.jar /app/
RUN apt-get update
RUN apt-get install -y curl
ENTRYPOINT /app/start.sh
```

###### After
```docker
~~(EOL: ubuntu:22.04 (ended 2024-09-30, suggest noble (24.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:22.04
COPY app.jar /app/
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
ENTRYPOINT ["/app/start.sh"]
USER appuser
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,5 +1,5 @@
-FROM ubuntu:22.04
-ADD app.jar /app/
-RUN apt-get update
-RUN apt-get install -y curl
-ENTRYPOINT /app/start.sh
+~~(EOL: ubuntu:22.04 (ended 2024-09-30, suggest noble (24.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:22.04
+COPY app.jar /app/
+RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
+ENTRYPOINT ["/app/start.sh"]
+USER appuser

```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite:rewrite-docker` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.docker.DockerBestPractices")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-docker:{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}")
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
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-docker:{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.docker.DockerBestPractices")
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
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.docker.DockerBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-docker</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-docker:RELEASE -Drewrite.activeRecipes=org.openrewrite.docker.DockerBestPractices -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe DockerBestPractices
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-docker:{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.docker.DockerBestPractices" />

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

<TabItem value="org.openrewrite.docker.table.EolDockerImages" label="EolDockerImages">

### End-of-life Docker images
**org.openrewrite.docker.table.EolDockerImages**

_Records Docker base images that have reached end-of-life._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The Dockerfile containing the EOL base image. |
| Stage name | The build stage name (from AS clause), if specified. |
| Image name | The name of the base image. |
| Tag | The image tag. |
| EOL date | The date when the image reached end-of-life. |
| Suggested replacement | Recommended newer version to migrate to. |

</TabItem>

</Tabs>
