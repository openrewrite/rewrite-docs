---
sidebar_label: "Migrate to JSpecify"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to JSpecify

**org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations**

_Migrate from OpenRewrite's JSR-305 meta-annotations to JSpecify._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/resources/META-INF/rewrite/jspecify.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.38.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.38.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Move annotation to type instead of field](../../staticanalysis/java/movefieldannotationtotype)
  * annotationType: `org.openrewrite.internal.lang.*`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.openrewrite.internal.lang.Nullable`
  * newFullyQualifiedTypeName: `org.jspecify.annotations.Nullable`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.openrewrite.internal.lang.NonNullApi`
  * newFullyQualifiedTypeName: `org.jspecify.annotations.NullMarked`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.openrewrite.internal.lang.NonNull`
  * newFullyQualifiedTypeName: `org.jspecify.annotations.NonNull`
  * ignoreDefinition: `true`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `org.jspecify`
  * artifactId: `jspecify`
  * version: `latest.release`
  * onlyIfUsing: `org.openrewrite.internal.lang.*Null*`
  * configuration: `implementation`
  * scope: `compile`
  * acceptTransitive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations
displayName: Migrate to JSpecify
description: Migrate from OpenRewrite's JSR-305 meta-annotations to JSpecify.
recipeList:
  - org.openrewrite.staticanalysis.java.MoveFieldAnnotationToType:
      annotationType: org.openrewrite.internal.lang.*
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.openrewrite.internal.lang.Nullable
      newFullyQualifiedTypeName: org.jspecify.annotations.Nullable
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.openrewrite.internal.lang.NonNullApi
      newFullyQualifiedTypeName: org.jspecify.annotations.NullMarked
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.openrewrite.internal.lang.NonNull
      newFullyQualifiedTypeName: org.jspecify.annotations.NonNull
      ignoreDefinition: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.jspecify
      artifactId: jspecify
      version: latest.release
      onlyIfUsing: org.openrewrite.internal.lang.*Null*
      configuration: implementation
      scope: compile
      acceptTransitive: true

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.26.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations")
    exportDatatables = true
}

repositories {
    mavenCentral()
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
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations")
        exportDatatables = true
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
        <version>5.43.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations</recipe>
          </activeRecipes>
        </configuration>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateFromOpenRewriteAnnotations
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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

