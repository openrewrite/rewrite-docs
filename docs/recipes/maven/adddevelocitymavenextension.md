---
sidebar_label: "Add the Develocity Maven extension"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add the Develocity Maven extension

**org.openrewrite.maven.AddDevelocityMavenExtension**

_To integrate the Develocity Maven extension into Maven projects, ensure that the `develocity-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/develocity.xml` configuration file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddDevelocityMavenExtension.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | version | *Optional*. A maven-compatible version number to select the gradle-enterprise-maven-extension version. | `1.17.4` |
| `String` | server | The URL of the Develocity server. | `https://scans.gradle.com/` |
| `Boolean` | allowUntrustedServer | *Optional*. When set to `true` the extension will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the extension will refuse to communicate without transport layer security enabled. | `true` |
| `Boolean` | fileFingerprints | *Optional*. When set to `true` the extension will capture additional information about the inputs to Maven goals. This increases the size of build scans, but is useful for diagnosing issues with goal caching.  | `true` |
| `Boolean` | uploadInBackground | *Optional*. When set to `false` the extension will not upload build scan in the background. By default, build scans are uploaded in the background after the build has finished to avoid blocking the build process. | `false` |
| `PublishCriteria` | publishCriteria | *Optional*. When set to `Always` the extension will publish build scans of every single build. This is the default behavior when omitted.When set to `Failure` the extension will only publish build scans when the build fails. When set to `Demand` the extension will only publish build scans when explicitly requested. Valid options: `Always`, `Failure`, `Demand` | `Always` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|version|`1.17`|
|server|`https://foo`|
|allowUntrustedServer|`null`|
|fileFingerprints|`null`|
|uploadInBackground|`null`|
|publishCriteria|`null`|



###### New file
```xml
<gradleEnterprise>
  <server>
    <url>https://foo</url>
  </server>
</gradleEnterprise>
```


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<extensions>
</extensions>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<extensions>
  <extension>
    <groupId>com.gradle</groupId>
    <artifactId>gradle-enterprise-maven-extension</artifactId>
    <version>1.17</version>
  </extension>
</extensions>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,5 @@
<?xml version="1.0" encoding="UTF-8"?>
<extensions>
+ <extension>
+   <groupId>com.gradle</groupId>
+   <artifactId>gradle-enterprise-maven-extension</artifactId>
+   <version>1.17</version>
+ </extension>
</extensions>
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
</project>
```


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDevelocityMavenExtensionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDevelocityMavenExtensionExample
displayName: Add the Develocity Maven extension example
recipeList:
  - org.openrewrite.maven.AddDevelocityMavenExtension:
      version: 1.17.4
      server: https://scans.gradle.com/
      allowUntrustedServer: true
      fileFingerprints: true
      uploadInBackground: false
      publishCriteria: Always
```

Now that `com.yourorg.AddDevelocityMavenExtensionExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

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
            <recipe>com.yourorg.AddDevelocityMavenExtensionExample</recipe>
          </activeRecipes>
        </configuration>
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
mod run . --recipe AddDevelocityMavenExtension --recipe-option "version=1.17.4" --recipe-option "server=https://scans.gradle.com/" --recipe-option "allowUntrustedServer=true" --recipe-option "fileFingerprints=true" --recipe-option "uploadInBackground=false" --recipe-option "publishCriteria=Always"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.AddDevelocityMavenExtension" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
