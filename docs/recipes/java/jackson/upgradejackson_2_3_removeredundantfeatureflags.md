---
sidebar_label: "Remove redundant Jackson 3 feature flag configurations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove redundant Jackson 3 feature flag configurations

**org.openrewrite.java.jackson.UpgradeJackson\_2\_3\_RemoveRedundantFeatureFlags**

_Remove `ObjectMapper` feature flag configurations that are now defaults in Jackson 3._

### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-2-3.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `MapperFeature.SORT_PROPERTIES_ALPHABETICALLY`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `DeserializationFeature.READ_ENUMS_USING_TO_STRING`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `DeserializationFeature.FAIL_ON_TRAILING_TOKENS`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `SerializationFeature.WRITE_ENUMS_USING_TO_STRING`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `CBORReadFeature.DECODE_USING_STANDARD_NEGATIVE_BIGINT_ENCODING`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `CBORReadFeature.READ_UNDEFINED_AS_EMBEDDED_OBJECT`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `CBORReadFeature.READ_SIMPLE_VALUE_AS_EMBEDDED_OBJECT`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `CBORWriteFeature.ENCODE_USING_STANDARD_NEGATIVE_BIGINT_ENCODING`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `XmlWriteFeature.UNWRAP_ROOT_OBJECT_NODE`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `XmlWriteFeature.WRITE_NULLS_AS_XSI_NIL`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `XmlWriteFeature.AUTO_DETECT_XSI_TYPE`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `XmlWriteFeature.WRITE_XML_SCHEMA_CONFORMING_FLOATS`
  * newDefaultValue: `true`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `MapperFeature.ALLOW_FINAL_FIELDS_AS_MUTATORS`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `MapperFeature.DEFAULT_VIEW_INCLUSION`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `MapperFeature.USE_GETTERS_AS_SETTERS`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `SerializationFeature.FAIL_ON_EMPTY_BEANS`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS`
  * newDefaultValue: `false`
* [Remove redundant Jackson 3 feature flag configurations](../../java/jackson/removeredundantfeatureflags)
  * featureName: `SerializationFeature.WRITE_DATES_AS_TIMESTAMPS`
  * newDefaultValue: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags
displayName: Remove redundant Jackson 3 feature flag configurations
description: |
  Remove `ObjectMapper` feature flag configurations that are now defaults in Jackson 3.
tags:
  - jackson-3
recipeList:
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: MapperFeature.SORT_PROPERTIES_ALPHABETICALLY
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: DeserializationFeature.READ_ENUMS_USING_TO_STRING
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: DeserializationFeature.FAIL_ON_NULL_FOR_PRIMITIVES
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: DeserializationFeature.FAIL_ON_TRAILING_TOKENS
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: SerializationFeature.WRITE_ENUMS_USING_TO_STRING
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: CBORReadFeature.DECODE_USING_STANDARD_NEGATIVE_BIGINT_ENCODING
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: CBORReadFeature.READ_UNDEFINED_AS_EMBEDDED_OBJECT
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: CBORReadFeature.READ_SIMPLE_VALUE_AS_EMBEDDED_OBJECT
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: CBORWriteFeature.ENCODE_USING_STANDARD_NEGATIVE_BIGINT_ENCODING
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: XmlWriteFeature.UNWRAP_ROOT_OBJECT_NODE
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: XmlWriteFeature.WRITE_NULLS_AS_XSI_NIL
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: XmlWriteFeature.AUTO_DETECT_XSI_TYPE
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: XmlWriteFeature.WRITE_XML_SCHEMA_CONFORMING_FLOATS
      newDefaultValue: true
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: MapperFeature.ALLOW_FINAL_FIELDS_AS_MUTATORS
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: MapperFeature.DEFAULT_VIEW_INCLUSION
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: MapperFeature.USE_GETTERS_AS_SETTERS
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: SerializationFeature.FAIL_ON_EMPTY_BEANS
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS
      newDefaultValue: false
  - org.openrewrite.java.jackson.RemoveRedundantFeatureFlags:
      featureName: SerializationFeature.WRITE_DATES_AS_TIMESTAMPS
      newDefaultValue: false

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrates from Jackson 2.x to Jackson 3.x](/recipes/java/jackson/upgradejackson_2_3.md)

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY);
    }
}
```

###### After
```java
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,0 @@
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
-       mapper.enable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY);
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.enable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY);
    }
}
```

###### After
```java
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,0 @@
    void configure() {
        ObjectMapper mapper = new ObjectMapper();
-       mapper.enable(MapperFeature.SORT_PROPERTIES_ALPHABETICALLY);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jackson` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jackson:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}")
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
        rewrite("org.openrewrite.recipe:rewrite-jackson:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags")
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
            <recipe>org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jackson</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jackson:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeJackson_2_3_RemoveRedundantFeatureFlags
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jackson:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags" />

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
