---
sidebar_label: "Change Docker FROM"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Docker FROM

**org.openrewrite.docker.ChangeFrom**

_Change the base image in a Dockerfile FROM instruction._

## Recipe source

[GitHub: ChangeFrom.java](https://github.com/openrewrite/rewrite/blob/main/src/main/java/org/openrewrite/docker/ChangeFrom.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-docker/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldImageName | Glob pattern to match image names (without tag/digest). | `ubuntu` |
| `String` | oldTag | *Optional*. Only match images with tags matching this glob pattern. If null, matches any tag or no tag. | `20.*` |
| `String` | oldDigest | *Optional*. Only match images with digests matching this glob pattern. If null, matches any digest or no digest. | `sha256:*` |
| `String` | oldPlatform | *Optional*. Only change images with this platform. If null, matches any platform. | `linux/amd64` |
| `String` | newImageName | *Optional*. The new image name. If null, preserves the existing name. | `ubuntu` |
| `String` | newTag | *Optional*. The new tag. If null, preserves the existing tag. If empty, removes the tag. | `22.04` |
| `String` | newDigest | *Optional*. The new digest. If null, preserves the existing digest. If empty, removes the digest. | `sha256:abc123...` |
| `String` | newPlatform | *Optional*. The new platform. If null, preserves the existing platform. If empty, removes the platform flag. | `linux/arm64` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeFromExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeFromExample
displayName: Change Docker FROM example
recipeList:
  - org.openrewrite.docker.ChangeFrom:
      oldImageName: ubuntu
      oldTag: 20.*
      oldDigest: sha256:*
      oldPlatform: linux/amd64
      newImageName: ubuntu
      newTag: 22.04
      newDigest: sha256:abc123...
      newPlatform: linux/arm64
```

Now that `com.yourorg.ChangeFromExample` has been defined, activate it and take a dependency on `org.openrewrite:rewrite-docker:{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeFromExample")
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
            <recipe>com.yourorg.ChangeFromExample</recipe>
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
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeFrom --recipe-option "oldImageName=ubuntu" --recipe-option "oldTag=20.*" --recipe-option "oldDigest=sha256:*" --recipe-option "oldPlatform=linux/amd64" --recipe-option "newImageName=ubuntu" --recipe-option "newTag=22.04" --recipe-option "newDigest=sha256:abc123..." --recipe-option "newPlatform=linux/arm64"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-docker:{{VERSION_ORG_OPENREWRITE_REWRITE_DOCKER}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.docker.ChangeFrom" />

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
