---
sidebar_label: "Replace constant with another constant"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace constant with another constant

**org.openrewrite.java.ReplaceConstantWithAnotherConstant**

_Replace a constant with another constant, adding/removing import on class if needed._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceConstantWithAnotherConstant.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | existingFullyQualifiedConstantName |  | `org.springframework.http.MediaType.APPLICATION_JSON_VALUE` |
| `String` | fullyQualifiedConstantName |  | `org.springframework.http.MediaType.APPLICATION_JSON_VALUE` |


## Used by

This recipe is used as part of the following composite recipes:

* [Maps deprecated classes from Apache HttpClient 4.5.x to suggested replacements](/recipes/apache/httpclient4/mappingdeprecatedclasses.md)
* [Migrate Hibernate CascadeType constants (Moderne Edition)](/recipes/hibernate/update66/migratecascadetypes.md)
* [Migrate `exactly_once` and `exactly_once_beta` to `exactly_once_v2`](/recipes/kafka/streams/processingguaranteeexactlyoncetov2.md)
* [Migrate `exactly_once` to `exactly_once_beta`](/recipes/kafka/streams/processingguaranteeexactlyoncetobeta.md)
* [Migrate packages to modular starters](/recipes/java/spring/boot4/migrateautoconfigurepackages.md)
* [Migrate the use of TaskExecutors with blocking IO](/recipes/java/micronaut/updateblockingtaskexecutors.md)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Migrate to Kafka 2.7](/recipes/kafka/migratetokafka27.md)
* [Migrate to Spring Framework 6.2](/recipes/java/spring/framework/upgradespringframework_6_2.md)
* [Migrate to Spring Kafka 3.0](/recipes/java/spring/kafka/upgradespringkafka_3_0.md)
* [Migrates to Apache POI 3.17](/recipes/apache/poi/upgradeapachepoi_3_17.md)
* [Prefer `java.nio.charset.StandardCharsets`](/recipes/apache/commons/io/usestandardcharsets.md)
* [Renamed classes for API](/recipes/org/apache/camel/upgrade/camel49/renamedapis.md)
* [Renamed constants in camel-smb](/recipes/org/apache/camel/upgrade/camel410/camelsmb.md)
* [Replace `CURRENT_COMPONENT` and `CURRENT_COMPOSITE_COMPONENT` with `getCurrentComponent()` and `getCurrentCompositeComponent()`](/recipes/java/migrate/jakarta/removeduicomponentconstant.md)
* [Replace `RMIConnectorServer.CREDENTIAL_TYPES` constant](/recipes/java/migrate/removedrmiconnectorservercredentialtypesconstant.md)
* [The header name for the List metadata has changed](/recipes/org/apache/camel/upgrade/camel43/kafkametadata.md)
* [Upgrade to JUnit 5.13](/recipes/java/testing/junit5/upgradetojunit513.md)
* [io.quarkus.updates.core.quarkus324.MigrateFromHibernateOrmVariousRemovedIn7](/recipes/io/quarkus/updates/core/quarkus324/migratefromhibernateormvariousremovedin7.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceConstantWithAnotherConstantExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceConstantWithAnotherConstantExample
displayName: Replace constant with another constant example
recipeList:
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
```

Now that `com.yourorg.ReplaceConstantWithAnotherConstantExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceConstantWithAnotherConstantExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
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
            <recipe>com.yourorg.ReplaceConstantWithAnotherConstantExample</recipe>
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
mod run . --recipe ReplaceConstantWithAnotherConstant --recipe-option "existingFullyQualifiedConstantName=org.springframework.http.MediaType.APPLICATION_JSON_VALUE" --recipe-option "fullyQualifiedConstantName=org.springframework.http.MediaType.APPLICATION_JSON_VALUE"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ReplaceConstantWithAnotherConstant" />

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
