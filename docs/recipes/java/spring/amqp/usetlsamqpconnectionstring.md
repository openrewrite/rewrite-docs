---
sidebar_label: "Use TLS for AMQP connection strings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use TLS for AMQP connection strings

**org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString**

_Use TLS for AMQP connection strings._

## Recipe source

[GitHub: UseTlsAmqpConnectionString.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/amqp/UseTlsAmqpConnectionString.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | propertyKey | *Optional*. The Spring property key to perform updates against. If this value is specified, the specified property will be used for searching, otherwise a default of `spring.rabbitmq.addresses` will be used instead. | `spring.rabbitmq.addresses` |
| `Integer` | oldPort | The non-TLS enabled port number to replace with the TLS-enabled port. If this value is specified, no changes will be made to amqp connection strings which do not contain this port number.  | `1234` |
| `Integer` | port | The TLS-enabled port to use. | `1234` |
| `String` | tlsPropertyKey | *Optional*. The Spring property key to enable default TLS mode against. If this value is specified, the specified property will be used when updating the default TLS mode, otherwise a default of `spring.rabbitmq.ssl.enabled` will be used instead. | `spring.rabbitmq.ssl.enabled` |
| `List` | pathExpressions | *Optional*. Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. ("**/application.yml", "**/application.yaml", and "**/application.properties". | `**/application.yml` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|propertyKey|`null`|
|oldPort|`5672`|
|port|`5671`|
|tlsPropertyKey|`null`|
|pathExpressions|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="application.properties" label="application.properties">


###### Before
```properties title="application.properties"
spring.rabbitmq.addresses=host1:5672
```

###### After
```properties title="application.properties"
spring.rabbitmq.addresses=host1:5671
spring.rabbitmq.ssl.enabled=true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.properties
+++ application.properties
@@ -1,1 +1,2 @@
-spring.rabbitmq.addresses=host1:5672
+spring.rabbitmq.addresses=host1:5671
+spring.rabbitmq.ssl.enabled=true

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="application.yml" label="application.yml">


###### Before
```yaml title="application.yml"
spring:
  rabbitmq:
    addresses: host1:5672
```

###### After
```yaml title="application.yml"
spring:
  rabbitmq:
    addresses: host1:5671
    ssl:
      enabled: true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- application.yml
+++ application.yml
@@ -3,1 +3,3 @@
spring:
  rabbitmq:
-   addresses: host1:5672
+   addresses: host1:5671
+   ssl:
+     enabled: true

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UseTlsAmqpConnectionStringExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseTlsAmqpConnectionStringExample
displayName: Use TLS for AMQP connection strings example
recipeList:
  - org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString:
      propertyKey: spring.rabbitmq.addresses
      oldPort: 1234
      port: 1234
      tlsPropertyKey: spring.rabbitmq.ssl.enabled
      pathExpressions: **/application.yml
```

Now that `com.yourorg.UseTlsAmqpConnectionStringExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.UseTlsAmqpConnectionStringExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
            <recipe>com.yourorg.UseTlsAmqpConnectionStringExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mod run . --recipe UseTlsAmqpConnectionString --recipe-option "propertyKey=spring.rabbitmq.addresses" --recipe-option "oldPort=1234" --recipe-option "port=1234" --recipe-option "tlsPropertyKey=spring.rabbitmq.ssl.enabled" --recipe-option "pathExpressions=**/application.yml"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString" />

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
