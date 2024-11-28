---
sidebar_label: "Use modernized javax.lang.model.util APIs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use modernized `javax.lang.model.util` APIs

**org.openrewrite.java.migrate.javax.JavaxLangModelUtil**

_Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-lang-model-util.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.30.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.30.1

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](../../../java/migrate/javax/migrateabstractannotationvaluevisitor6to9)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](../../../java/migrate/javax/migrateabstractelementvisitor6to9)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](../../../java/migrate/javax/migrateabstracttypevisitor6to9)
* [Use `javax.lang.model.util.ElementKindVisitor9`](../../../java/migrate/javax/migrateelementkindvisitor6to9)
* [Use `javax.lang.model.util.ElementScanner9`](../../../java/migrate/javax/migrateelementscanner6to9)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](../../../java/migrate/javax/migratesimpleannotationvaluevisitor6to9)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](../../../java/migrate/javax/migratesimpleelementvisitor6to9)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](../../../java/migrate/javax/migratesimpletypevisitor6to9)
* [Use `javax.lang.model.util.TypeKindVisitor9`](../../../java/migrate/javax/migratetypekindvisitor6to9)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxLangModelUtil
displayName: Use modernized `javax.lang.model.util` APIs
description: Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateAbstractAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementScanner6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateTypeKindVisitor6To9

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.30.1` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.30.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.30.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.javax.JavaxLangModelUtil")
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
        <version>5.46.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxLangModelUtil</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.30.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxLangModelUtil -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaxLangModelUtil
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:2.30.1
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.JavaxLangModelUtil" />

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

