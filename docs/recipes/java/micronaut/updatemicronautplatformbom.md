---
sidebar_label: "Update to Micronaut 4.x platform BOM"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update to Micronaut 4.x platform BOM

**org.openrewrite.java.micronaut.UpdateMicronautPlatformBom**

_This recipe will update a Gradle or Maven build to reference the Micronaut 4 platform BOM._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Maven parent](../../maven/changeparentpom)
  * oldGroupId: `io.micronaut`
  * newGroupId: `io.micronaut.platform`
  * oldArtifactId: `micronaut-parent`
  * newVersion: `4.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateMicronautPlatformBom
displayName: Update to Micronaut 4.x platform BOM
description: |
  This recipe will update a Gradle or Maven build to reference the Micronaut 4 platform BOM.
recipeList:
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: io.micronaut
      newGroupId: io.micronaut.platform
      oldArtifactId: micronaut-parent
      newVersion: 4.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Micronaut 3.x to 4.x](/recipes/java/micronaut/micronaut3to4migration.md)

## Examples
##### Example 1
`UpdateBuildPluginsTest#updateGradleBuildPlugins`


###### Unchanged
```groovy title="build.gradle"
plugins {
    id("com.github.johnrengelman.shadow") version "7.1.2"
    id("io.micronaut.application") version "3.7.9"
    id("io.micronaut.minimal.application") version "3.7.9"
    id("io.micronaut.aot") version "3.7.9"
    id("io.micronaut.component") version "3.7.9"
    id("io.micronaut.crac") version "3.7.9"
    id("io.micronaut.docker") version "3.7.9"
    id("io.micronaut.graalvm") version "3.7.9"
    id("io.micronaut.library") version "3.7.9"
    id("io.micronaut.minimal.library") version "3.7.9"
    id("io.micronaut.test-resources") version "3.5.1"
}

repositories {
    mavenCentral()
}
```

###### Unchanged
```properties title="gradle.properties"
micronautVersion=3.9.1
```

---

##### Example 2
`UpdateMicronautDataTest#updateSQLAnnotations`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.micronaut.data.jdbc.annotation.ColumnTransformer;
import io.micronaut.data.jdbc.annotation.JoinColumn;
import io.micronaut.data.jdbc.annotation.JoinColumns;
import io.micronaut.data.jdbc.annotation.JoinTable;

public class MyEntity {

    @JoinTable(
                name = "m2m_address_association",
                joinColumns = @JoinColumns({
                                      @JoinColumn(name="ADDR_ID", referencedColumnName="ID"),
                                      @JoinColumn(name="ADDR_ZIP", referencedColumnName="ZIP")
                                  }))
    List<String> addresses;

    @ColumnTransformer(read = "UPPER(org)")
    private String name;

}
```

###### After
```java
import io.micronaut.data.annotation.sql.ColumnTransformer;
import io.micronaut.data.annotation.sql.JoinColumn;
import io.micronaut.data.annotation.sql.JoinColumns;
import io.micronaut.data.annotation.sql.JoinTable;

public class MyEntity {

    @JoinTable(
                name = "m2m_address_association",
                joinColumns = @JoinColumns({
                                      @JoinColumn(name="ADDR_ID", referencedColumnName="ID"),
                                      @JoinColumn(name="ADDR_ZIP", referencedColumnName="ZIP")
                                  }))
    List<String> addresses;

    @ColumnTransformer(read = "UPPER(org)")
    private String name;

}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,4 @@
-import io.micronaut.data.jdbc.annotation.ColumnTransformer;
-import io.micronaut.data.jdbc.annotation.JoinColumn;
-import io.micronaut.data.jdbc.annotation.JoinColumns;
-import io.micronaut.data.jdbc.annotation.JoinTable;
+import io.micronaut.data.annotation.sql.ColumnTransformer;
+import io.micronaut.data.annotation.sql.JoinColumn;
+import io.micronaut.data.annotation.sql.JoinColumns;
+import io.micronaut.data.annotation.sql.JoinTable;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

---

##### Example 3
`UpdateMicronautSessionTest#updateGradleDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id "java-library"
}
dependencies {
    implementation("io.micronaut:micronaut-session")
}
repositories {
    mavenCentral()
}
```

###### After
```groovy title="build.gradle"
plugins {
    id "java-library"
}
dependencies {
    implementation("io.micronaut.session:micronaut-session")
}
repositories {
    mavenCentral()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -5,1 +5,1 @@
}
dependencies {
-   implementation("io.micronaut:micronaut-session")
+   implementation("io.micronaut.session:micronaut-session")
}
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

---

##### Example 4
`UpdateBuildPluginsTest#updateGradleBuildPlugins`


###### Unchanged
```groovy title="build.gradle"
plugins {
    id("com.github.johnrengelman.shadow") version "7.1.2"
    id("io.micronaut.application") version "3.7.9"
    id("io.micronaut.minimal.application") version "3.7.9"
    id("io.micronaut.aot") version "3.7.9"
    id("io.micronaut.component") version "3.7.9"
    id("io.micronaut.crac") version "3.7.9"
    id("io.micronaut.docker") version "3.7.9"
    id("io.micronaut.graalvm") version "3.7.9"
    id("io.micronaut.library") version "3.7.9"
    id("io.micronaut.minimal.library") version "3.7.9"
    id("io.micronaut.test-resources") version "3.5.1"
}

repositories {
    mavenCentral()
}
```

###### Unchanged
```properties title="gradle.properties"
micronautVersion=3.9.1
```

---

##### Example 5
`UpdateMicronautDataTest#updateSQLAnnotations`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.micronaut.data.jdbc.annotation.ColumnTransformer;
import io.micronaut.data.jdbc.annotation.JoinColumn;
import io.micronaut.data.jdbc.annotation.JoinColumns;
import io.micronaut.data.jdbc.annotation.JoinTable;

public class MyEntity {

    @JoinTable(
                name = "m2m_address_association",
                joinColumns = @JoinColumns({
                                      @JoinColumn(name="ADDR_ID", referencedColumnName="ID"),
                                      @JoinColumn(name="ADDR_ZIP", referencedColumnName="ZIP")
                                  }))
    List<String> addresses;

    @ColumnTransformer(read = "UPPER(org)")
    private String name;

}
```

###### After
```java
import io.micronaut.data.annotation.sql.ColumnTransformer;
import io.micronaut.data.annotation.sql.JoinColumn;
import io.micronaut.data.annotation.sql.JoinColumns;
import io.micronaut.data.annotation.sql.JoinTable;

public class MyEntity {

    @JoinTable(
                name = "m2m_address_association",
                joinColumns = @JoinColumns({
                                      @JoinColumn(name="ADDR_ID", referencedColumnName="ID"),
                                      @JoinColumn(name="ADDR_ZIP", referencedColumnName="ZIP")
                                  }))
    List<String> addresses;

    @ColumnTransformer(read = "UPPER(org)")
    private String name;

}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,4 +1,4 @@
-import io.micronaut.data.jdbc.annotation.ColumnTransformer;
-import io.micronaut.data.jdbc.annotation.JoinColumn;
-import io.micronaut.data.jdbc.annotation.JoinColumns;
-import io.micronaut.data.jdbc.annotation.JoinTable;
+import io.micronaut.data.annotation.sql.ColumnTransformer;
+import io.micronaut.data.annotation.sql.JoinColumn;
+import io.micronaut.data.annotation.sql.JoinColumns;
+import io.micronaut.data.annotation.sql.JoinTable;

```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

---

##### Example 6
`UpdateMicronautSessionTest#updateGradleDependencies`


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id "java-library"
}
dependencies {
    implementation("io.micronaut:micronaut-session")
}
repositories {
    mavenCentral()
}
```

###### After
```groovy title="build.gradle"
plugins {
    id "java-library"
}
dependencies {
    implementation("io.micronaut.session:micronaut-session")
}
repositories {
    mavenCentral()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -5,1 +5,1 @@
}
dependencies {
-   implementation("io.micronaut:micronaut-session")
+   implementation("io.micronaut.session:micronaut-session")
}
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautPlatformBom")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
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
        rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautPlatformBom")
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
            <recipe>org.openrewrite.java.micronaut.UpdateMicronautPlatformBom</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateMicronautPlatformBom -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateMicronautPlatformBom
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautPlatformBom" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

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
