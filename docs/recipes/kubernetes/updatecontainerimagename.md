---
sidebar_label: "Update image name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update image name

**org.openrewrite.kubernetes.UpdateContainerImageName**

_Search for image names that match patterns and replace the components of the name with new values._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/UpdateContainerImageName.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/)

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | repoToFind | *Optional*. The repository part of the image name to search for in containers and initContainers. | `gcr.io` |
| `String` | imageToFind | The image name to search for in containers and initContainers. | `nginx` |
| `String` | tagToFind | *Optional*. The tag part of the image name to search for in containers and initContainers. | `v1.2.3` |
| `String` | digestToFind | *Optional*. The digest part of the image name to search for in containers and initContainers. | `sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229` |
| `String` | repoToUpdate | *Optional*. The repository part of the image name to update to in containers and initContainers. | `gcr.io/account/bucket` |
| `String` | imageToUpdate | *Optional*. The image name to update to in containers and initContainers. | `nginx` |
| `String` | tagToUpdate | *Optional*. The tag part of the image name to update to in containers and initContainers. | `v1.2.3` |
| `String` | digestToUpdate | *Optional*. The digest part of the image name to update to in containers and initContainers. | `sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229` |
| `boolean` | includeInitContainers | *Optional*. Boolean to indicate whether or not to treat initContainers/image identically to containers/image. | `false` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateContainerImageNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateContainerImageNameExample
displayName: Update image name example
recipeList:
  - org.openrewrite.kubernetes.UpdateContainerImageName:
      repoToFind: gcr.io
      imageToFind: nginx
      tagToFind: v1.2.3
      digestToFind: sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229
      repoToUpdate: gcr.io/account/bucket
      imageToUpdate: nginx
      tagToUpdate: v1.2.3
      digestToUpdate: sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229
      includeInitContainers: false
      fileMatcher: '**/pod-*.yml'
```

Now that `com.yourorg.UpdateContainerImageNameExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_REWRITE_KUBERNETES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.UpdateContainerImageNameExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_REWRITE_KUBERNETES}}")
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
            <recipe>com.yourorg.UpdateContainerImageNameExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>{{VERSION_REWRITE_KUBERNETES}}</version>
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
mod run . --recipe UpdateContainerImageName --recipe-option "repoToFind=gcr.io" --recipe-option "imageToFind=nginx" --recipe-option "tagToFind=v1.2.3" --recipe-option "digestToFind=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229" --recipe-option "repoToUpdate=gcr.io/account/bucket" --recipe-option "imageToUpdate=nginx" --recipe-option "tagToUpdate=v1.2.3" --recipe-option "digestToUpdate=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229" --recipe-option "includeInitContainers=false" --recipe-option "fileMatcher='**/pod-*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.UpdateContainerImageName" />

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
[Jon Brisbin](mailto:jon@jbrisbin.com), DavidTamLloyds, [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com)
