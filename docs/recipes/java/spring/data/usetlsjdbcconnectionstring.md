---
sidebar_label: "Use TLS for JDBC connection strings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use TLS for JDBC connection strings

**org.openrewrite.java.spring.data.UseTlsJdbcConnectionString**

_Increasingly, for compliance reasons (e.g. [NACHA](https://www.nacha.org/sites/default/files/2022-06/End_User_Briefing_Supplementing_Data_Security_UPDATED_FINAL.pdf)), JDBC connection strings should be TLS-enabled. This recipe will update the port and optionally add a connection attribute to indicate that the connection is TLS-enabled._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/data/UseTlsJdbcConnectionString.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | propertyKey | The Spring property key to perform updates against. If this value is specified, the specified property will be used for searching, otherwise a default of `spring.datasource.url` will be used instead. | `spring.datasource.url` |
| `Integer` | oldPort | The non-TLS enabled port number to replace with the TLS-enabled port. If this value is specified, no changes will be made to jdbc connection strings which do not contain this port number.  | `1234` |
| `Integer` | port | The TLS-enabled port to use. | `1234` |
| `String` | attribute | A connection attribute, if any, indicating to the JDBC provider that this is a TLS connection. | `sslConnection=true` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`null`|
|oldPort|`5021`|
|port|`15021`|
|attribute|`sslConnection=true;`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
spring:
  datasource:
    url: 'jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;'
```

###### After
```yaml
spring:
  datasource:
    url: 'jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;'
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
spring:
  datasource:
-   url: 'jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;'
+   url: 'jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;'

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
spring.datasource.url=jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;
```

###### After
```properties
spring.datasource.url=jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-spring.datasource.url=jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;
+spring.datasource.url=jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UseTlsJdbcConnectionStringExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseTlsJdbcConnectionStringExample
displayName: Use TLS for JDBC connection strings example
recipeList:
  - org.openrewrite.java.spring.data.UseTlsJdbcConnectionString:
      propertyKey: spring.datasource.url
      oldPort: 1234
      port: 1234
      attribute: sslConnection=true
```

Now that `com.yourorg.UseTlsJdbcConnectionStringExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.UseTlsJdbcConnectionStringExample")
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
            <recipe>com.yourorg.UseTlsJdbcConnectionStringExample</recipe>
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
mod run . --recipe UseTlsJdbcConnectionString --recipe-option "propertyKey=spring.datasource.url" --recipe-option "oldPort=1234" --recipe-option "port=1234" --recipe-option "attribute=sslConnection=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.data.UseTlsJdbcConnectionString" />

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

## Contributors
[Shannon Pamperl](mailto:shanman190@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io), Kun Li
