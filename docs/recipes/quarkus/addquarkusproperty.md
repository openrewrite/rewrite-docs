---
sidebar_label: "Add a Quarkus configuration property"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add a Quarkus configuration property

**org.openrewrite.quarkus.AddQuarkusProperty**

_Add a Quarkus configuration property to an existing configuration file if it does not already exist in that file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/AddQuarkusProperty.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | property | The property key to add. | `quarkus.http.port` |
| `String` | value | The value of the new property key. | `9090` |
| `String` | comment | *Optional*. A comment that will be added to the new property. | `This is a comment` |
| `String` | profile | *Optional*. The profile to add the property to. If not specified, the property will be added to the default profile. | `dev` |
| `List` | pathExpressions | *Optional*. Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. ("**/application.yml", "**/application.yaml", "**/application.properties" and "**/META-INF/microprofile-config.properties". | `["**/application.yaml"]` |


## Used by

This recipe is used as part of the following composite recipes:

* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeFastJar](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypefastjar.md)
* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeJar](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypejar.md)
* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeMutableJar](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypemutablejar.md)
* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeNativeSources](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypenativesources.md)
* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeNative](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypenative.md)
* [io.quarkus.updates.core.quarkus310.UpdateConfigPackageTypeUberJar](/recipes/io/quarkus/updates/core/quarkus310/updateconfigpackagetypeuberjar.md)

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|property|`quarkus.http.port`|
|value|`9090`|
|comment|`null`|
|profile|`null`|
|pathExpressions|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="src/main/resources/application.properties" label="src/main/resources/application.properties">


###### Before
```properties title="src/main/resources/application.properties"
quarkus.http.root-path=/api
```

###### After
```properties title="src/main/resources/application.properties"
quarkus.http.port=9090
quarkus.http.root-path=/api
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/resources/application.properties
+++ src/main/resources/application.properties
@@ -1,0 +1,1 @@
+quarkus.http.port=9090
quarkus.http.root-path=/api
```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="src/main/resources/application.yaml" label="src/main/resources/application.yaml">


###### Before
```yaml title="src/main/resources/application.yaml"
quarkus:
  http:
    root-path: /api
```

###### After
```yaml title="src/main/resources/application.yaml"
quarkus:
  http:
    root-path: /api
    port: 9090
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/resources/application.yaml
+++ src/main/resources/application.yaml
@@ -4,0 +4,1 @@
  http:
    root-path: /api
+   port: 9090

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddQuarkusPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddQuarkusPropertyExample
displayName: Add a Quarkus configuration property example
recipeList:
  - org.openrewrite.quarkus.AddQuarkusProperty:
      property: quarkus.http.port
      value: 9090
      comment: This is a comment
      profile: dev
      pathExpressions: ["**/application.yaml"]
```

Now that `com.yourorg.AddQuarkusPropertyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.AddQuarkusPropertyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
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
            <recipe>com.yourorg.AddQuarkusPropertyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}</version>
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
mod run . --recipe AddQuarkusProperty --recipe-option "property=quarkus.http.port" --recipe-option "value=9090" --recipe-option "comment=This is a comment" --recipe-option "profile=dev" --recipe-option "pathExpressions=["**/application.yaml"]"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.AddQuarkusProperty" />

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
