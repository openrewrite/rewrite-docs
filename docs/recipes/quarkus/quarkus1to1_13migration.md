---
sidebar_label: "Quarkus 1.13 migration from Quarkus 1.11"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quarkus 1.13 migration from Quarkus 1.11

**org.openrewrite.quarkus.Quarkus1to1\_13Migration**

_Migrates Quarkus 1.11 to 1.13._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `@ConfigMapping`](../quarkus/configpropertiestoconfigmapping)
* [Use Mutiny `multi.toHotStream()`](../quarkus/multitransformhotstreamtomultihotstream)
* [Use `native` profile in `quarkus-maven-plugin`](../quarkus/migratequarkusmavenpluginnativeimagegoal)
* [Configure `quarkus-maven-plugin` with reasonable defaults](../quarkus/configurequarkusmavenpluginwithreasonabledefaults)
* [Change property key](../properties/changepropertykey)
  * oldPropertyKey: `quarkus.dev.instrumentation`
  * newPropertyKey: `quarkus.live-reload.instrumentation`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.Multi collectItems()`
  * newMethodName: `collect`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.Multi groupItems()`
  * newMethodName: `group`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.Multi transform()`
  * newMethodName: `select`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.MultiTransform byTakingFirstItems(..)`
  * newMethodName: `first`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.MultiTransform byFilteringItemsWith(..)`
  * newMethodName: `where`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.Multi subscribeOn(java.util.concurrent.Executor)`
  * newMethodName: `runSubscriptionOn`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.Uni subscribeOn(java.util.concurrent.Executor)`
  * newMethodName: `runSubscriptionOn`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnFailure apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnItem apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnItemOrFailure apply(java.util.function.BiFunction)`
  * newMethodName: `transform`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnNotNull apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.MultiOnFailure apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../java/changemethodname)
  * methodPattern: `io.smallrye.mutiny.groups.MultiOnItem apply(java.util.function.Function)`
  * newMethodName: `transform`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.Quarkus1to1_13Migration
displayName: Quarkus 1.13 migration from Quarkus 1.11
description: |
  Migrates Quarkus 1.11 to 1.13.
recipeList:
  - org.openrewrite.quarkus.ConfigPropertiesToConfigMapping
  - org.openrewrite.quarkus.MultiTransformHotStreamToMultiHotStream
  - org.openrewrite.quarkus.MigrateQuarkusMavenPluginNativeImageGoal
  - org.openrewrite.quarkus.ConfigureQuarkusMavenPluginWithReasonableDefaults
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.dev.instrumentation
      newPropertyKey: quarkus.live-reload.instrumentation
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi collectItems()
      newMethodName: collect
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi groupItems()
      newMethodName: group
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi transform()
      newMethodName: select
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiTransform byTakingFirstItems(..)
      newMethodName: first
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiTransform byFilteringItemsWith(..)
      newMethodName: where
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi subscribeOn(java.util.concurrent.Executor)
      newMethodName: runSubscriptionOn
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Uni subscribeOn(java.util.concurrent.Executor)
      newMethodName: runSubscriptionOn
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnFailure apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnItem apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnItemOrFailure apply(java.util.function.BiFunction)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnNotNull apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiOnFailure apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiOnItem apply(java.util.function.Function)
      newMethodName: transform

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus 2.x migration from Quarkus 1.x](/recipes/quarkus/quarkus2/quarkus1to2migration.md)

## Examples
##### Example 1
`Quarkus1to113MigrationPropertiesTest#quarkusDevInstrumentation`


<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
quarkus.dev.instrumentation=true
```

###### After
```properties
quarkus.live-reload.instrumentation=true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-quarkus.dev.instrumentation=true
+quarkus.live-reload.instrumentation=true

```
</TabItem>
</Tabs>

---

##### Example 2
`Quarkus1to113MigrationTest#changeMultiTransformAndByTakingFirst`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

import java.util.List;
import java.time.Duration;

class Test {
    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
                .transform()
                .byTakingFirstItems(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collectItems()
                .asList();
        return uni;
    }
}
```

###### After
```java
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

import java.util.List;
import java.time.Duration;

class Test {
    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
                .select()
                .first(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collect()
                .asList();
        return uni;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,2 +12,2 @@
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
-               .transform()
-               .byTakingFirstItems(count);
+               .select()
+               .first(count);
    }
@@ -19,1 +19,1 @@
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
-               .collectItems()
+               .collect()
                .asList();
```
</TabItem>
</Tabs>

---

##### Example 3
`Quarkus1to113MigrationPropertiesTest#quarkusDevInstrumentation`


<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
quarkus.dev.instrumentation=true
```

###### After
```properties
quarkus.live-reload.instrumentation=true
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-quarkus.dev.instrumentation=true
+quarkus.live-reload.instrumentation=true

```
</TabItem>
</Tabs>

---

##### Example 4
`Quarkus1to113MigrationTest#changeMultiTransformAndByTakingFirst`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

import java.util.List;
import java.time.Duration;

class Test {
    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
                .transform()
                .byTakingFirstItems(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collectItems()
                .asList();
        return uni;
    }
}
```

###### After
```java
import io.smallrye.mutiny.Multi;
import io.smallrye.mutiny.Uni;

import java.util.List;
import java.time.Duration;

class Test {
    public static Multi<String> greetings(int count, String name) {
        return Multi.createFrom().ticks().every(Duration.ofMillis(1))
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
                .select()
                .first(count);
    }

    public static Uni<List<String>> collectItems(int count, String name) {
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
                .collect()
                .asList();
        return uni;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,2 +12,2 @@
                .onItem()
                .transform(n -> "hello " + name + " -" + n)
-               .transform()
-               .byTakingFirstItems(count);
+               .select()
+               .first(count);
    }
@@ -19,1 +19,1 @@
        Multi<String> multi = greetings(count, name);
        Uni<List<String>> uni = multi
-               .collectItems()
+               .collect()
                .asList();
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.Quarkus1to1_13Migration")
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
        rewrite("org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.Quarkus1to1_13Migration")
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
            <recipe>org.openrewrite.quarkus.Quarkus1to1_13Migration</recipe>
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

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.Quarkus1to1_13Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Quarkus1to1_13Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.Quarkus1to1_13Migration" />

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
