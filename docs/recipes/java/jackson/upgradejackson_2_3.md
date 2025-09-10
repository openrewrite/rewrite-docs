---
sidebar_label: "Migrates from Jackson 2.x to Jackson 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrates from Jackson 2.x to Jackson 3.x

**org.openrewrite.java.jackson.UpgradeJackson\_2\_3**

_Migrate applications to the latest Jackson 3.x release._

### Tags

* [jackson](/reference/recipes-by-tag#jackson)

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
* [Migrates Jackson 2.x base exceptions to Jackson 3.x base exceptions](../../java/jackson/upgradejackson_2_and_3_base_exceptions)
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `com.fasterxml.jackson.core`
  * artifactId: `jackson-annotations`
  * newVersion: `2.20`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.core`
  * oldArtifactId: `jackson-core`
  * newGroupId: `tools.jackson.core`
  * newArtifactId: `jackson-core`
  * newVersion: `3.0.0-rc9`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson`
  * oldArtifactId: `jackson-bom`
  * newGroupId: `tools.jackson`
  * newArtifactId: `jackson-bom`
  * newVersion: `3.0.0-rc9`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.core`
  * oldArtifactId: `jackson-databind`
  * newGroupId: `tools.jackson.core`
  * newArtifactId: `jackson-databind`
  * newVersion: `3.0.0-rc9`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.module`
  * oldArtifactId: `jackson-module-parameter-names`
  * newGroupId: `tools.jackson.core`
  * newArtifactId: `jackson-databind`
  * newVersion: `3.0.0-rc9`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jdk8`
  * newGroupId: `tools.jackson.core`
  * newArtifactId: `jackson-databind`
  * newVersion: `3.0.0-rc9`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `com.fasterxml.jackson.datatype`
  * oldArtifactId: `jackson-datatype-jsr310`
  * newGroupId: `tools.jackson.core`
  * newArtifactId: `jackson-databind`
  * newVersion: `3.0.0-rc9`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.core.JsonParseException`
  * newFullyQualifiedTypeName: `tools.jackson.core.StreamReadException`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `com.fasterxml.jackson.core.JsonGenerationException`
  * newFullyQualifiedTypeName: `tools.jackson.core.StreamWriteException`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `com.fasterxml.jackson.core`
  * newPackageName: `tools.jackson.core`
  * recursive: `true`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `com.fasterxml.jackson.databind`
  * newPackageName: `tools.jackson.databind`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.UpgradeJackson_2_3
displayName: Migrates from Jackson 2.x to Jackson 3.x
description: |
  Migrate applications to the latest Jackson 3.x release.
tags:
  - jackson
recipeList:
  - org.openrewrite.java.jackson.UpgradeJackson_2_And_3_Base_Exceptions
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson.core
      artifactId: jackson-annotations
      newVersion: 2.20
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.core
      oldArtifactId: jackson-core
      newGroupId: tools.jackson.core
      newArtifactId: jackson-core
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson
      oldArtifactId: jackson-bom
      newGroupId: tools.jackson
      newArtifactId: jackson-bom
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.core
      oldArtifactId: jackson-databind
      newGroupId: tools.jackson.core
      newArtifactId: jackson-databind
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.module
      oldArtifactId: jackson-module-parameter-names
      newGroupId: tools.jackson.core
      newArtifactId: jackson-databind
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jdk8
      newGroupId: tools.jackson.core
      newArtifactId: jackson-databind
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.datatype
      oldArtifactId: jackson-datatype-jsr310
      newGroupId: tools.jackson.core
      newArtifactId: jackson-databind
      newVersion: 3.0.0-rc9
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.core.JsonParseException
      newFullyQualifiedTypeName: tools.jackson.core.StreamReadException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.core.JsonGenerationException
      newFullyQualifiedTypeName: tools.jackson.core.StreamWriteException
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.fasterxml.jackson.core
      newPackageName: tools.jackson.core
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.fasterxml.jackson.databind
      newPackageName: tools.jackson.databind
      recursive: true

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.core.JsonFactory;
import tools.jackson.core.JsonFactoryBuilder;
import tools.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,3 +2,3 @@
import com.fasterxml.jackson.annotation.JsonProperty;
-import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonFactoryBuilder;
-import com.fasterxml.jackson.databind.ObjectMapper;
+import tools.jackson.core.JsonFactory;
+import tools.jackson.core.JsonFactoryBuilder;
+import tools.jackson.databind.ObjectMapper;

```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-parameter-names</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jdk8</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr310</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonFactoryBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonProperty;
import tools.jackson.core.JsonFactory;
import tools.jackson.core.JsonFactoryBuilder;
import tools.jackson.databind.ObjectMapper;

class Test {
    public String foo(@JsonProperty("foo") String foo) {
        return foo;
    }

    static void helloJackson() {
        Object[] input = new Object[] { "one", "two" };
        JsonFactory factory = new JsonFactoryBuilder().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,3 +2,3 @@
import com.fasterxml.jackson.annotation.JsonProperty;
-import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonFactoryBuilder;
-import com.fasterxml.jackson.databind.ObjectMapper;
+import tools.jackson.core.JsonFactory;
+import tools.jackson.core.JsonFactoryBuilder;
+import tools.jackson.databind.ObjectMapper;

```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-annotations</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-parameter-names</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jdk8</artifactId>
            <version>2.19.0</version>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-jsr310</artifactId>
            <version>2.19.0</version>
        </dependency>
    </dependencies>
</project>
```


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
    activeRecipe("org.openrewrite.java.jackson.UpgradeJackson_2_3")
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
        activeRecipe("org.openrewrite.java.jackson.UpgradeJackson_2_3")
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
            <recipe>org.openrewrite.java.jackson.UpgradeJackson_2_3</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jackson:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.jackson.UpgradeJackson_2_3 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeJackson_2_3
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jackson:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.UpgradeJackson_2_3" />

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
