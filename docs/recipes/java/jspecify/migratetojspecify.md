---
sidebar_label: "Migrate to JSpecify"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to JSpecify

**org.openrewrite.java.jspecify.MigrateToJspecify**

_This recipe will migrate to JSpecify annotations from various other nullability annotation standards._

### Tags

* java

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jspecify.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate from javax annotation API to JSpecify](../../java/jspecify/migratefromjavaxannotationapi)
* [Migrate from Jakarta annotation API to JSpecify](../../java/jspecify/migratefromjakartaannotationapi)
* [Migrate from JetBrains annotations to JSpecify](../../java/jspecify/migratefromjetbrainsannotations)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jspecify.MigrateToJspecify
displayName: Migrate to JSpecify
description: |
  This recipe will migrate to JSpecify annotations from various other nullability annotation standards.
tags:
  - java
recipeList:
  - org.openrewrite.java.jspecify.MigrateFromJavaxAnnotationApi
  - org.openrewrite.java.jspecify.MigrateFromJakartaAnnotationApi
  - org.openrewrite.java.jspecify.MigrateFromJetbrainsAnnotations

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
@ParametersAreNonnullByDefault
package org.openrewrite.example;

import javax.annotation.ParametersAreNonnullByDefault;
```

###### After
```java
@NullMarked
package org.openrewrite.example;

import org.jspecify.annotations.NullMarked;
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-@ParametersAreNonnullByDefault
+@NullMarked
package org.openrewrite.example;
@@ -4,1 +4,1 @@
package org.openrewrite.example;

-import javax.annotation.ParametersAreNonnullByDefault;
+import org.jspecify.annotations.NullMarked;

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class Test {
    @Nonnull
    public String field1;
    @Nullable
    public String field2;
    @Nullable
    public Foo.Bar foobar;
}

interface Foo {
  class Bar {
    @Nonnull
    public String barField;
  }
}
```

###### After
```java
import org.jspecify.annotations.NonNull;
import org.jspecify.annotations.Nullable;

public class Test {
    @NonNull
    public String field1;
    @Nullable
    public String field2;

    public Foo.@Nullable Bar foobar;
}

interface Foo {
  class Bar {
    @NonNull
    public String barField;
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import javax.annotation.Nonnull;
-import javax.annotation.Nullable;
+import org.jspecify.annotations.NonNull;
+import org.jspecify.annotations.Nullable;

@@ -5,1 +5,1 @@

public class Test {
-   @Nonnull
+   @NonNull
    public String field1;
@@ -9,2 +9,2 @@
    @Nullable
    public String field2;
-   @Nullable
-   public Foo.Bar foobar;
+
+   public Foo.@Nullable Bar foobar;
}
@@ -15,1 +15,1 @@
interface Foo {
  class Bar {
-   @Nonnull
+   @NonNull
    public String barField;
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
foo
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>javax.annotation</groupId>
            <artifactId>javax.annotation-api</artifactId>
            <version>1.3.2</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>javax.annotation</groupId>
            <artifactId>javax.annotation-api</artifactId>
            <version>1.3.2</version>
        </dependency>
        <dependency>
            <groupId>org.jspecify</groupId>
            <artifactId>jspecify</artifactId>
            <version>1.0.0</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,0 +12,5 @@
            <version>1.3.2</version>
        </dependency>
+       <dependency>
+           <groupId>org.jspecify</groupId>
+           <artifactId>jspecify</artifactId>
+           <version>1.0.0</version>
+       </dependency>
    </dependencies>
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
@ParametersAreNonnullByDefault
package org.openrewrite.example;

import javax.annotation.ParametersAreNonnullByDefault;
```

###### After
```java
@NullMarked
package org.openrewrite.example;

import org.jspecify.annotations.NullMarked;
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-@ParametersAreNonnullByDefault
+@NullMarked
package org.openrewrite.example;
@@ -4,1 +4,1 @@
package org.openrewrite.example;

-import javax.annotation.ParametersAreNonnullByDefault;
+import org.jspecify.annotations.NullMarked;

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.annotation.Nonnull;
import javax.annotation.Nullable;

public class Test {
    @Nonnull
    public String field1;
    @Nullable
    public String field2;
    @Nullable
    public Foo.Bar foobar;
}

interface Foo {
  class Bar {
    @Nonnull
    public String barField;
  }
}
```

###### After
```java
import org.jspecify.annotations.NonNull;
import org.jspecify.annotations.Nullable;

public class Test {
    @NonNull
    public String field1;
    @Nullable
    public String field2;

    public Foo.@Nullable Bar foobar;
}

interface Foo {
  class Bar {
    @NonNull
    public String barField;
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import javax.annotation.Nonnull;
-import javax.annotation.Nullable;
+import org.jspecify.annotations.NonNull;
+import org.jspecify.annotations.Nullable;

@@ -5,1 +5,1 @@

public class Test {
-   @Nonnull
+   @NonNull
    public String field1;
@@ -9,2 +9,2 @@
    @Nullable
    public String field2;
-   @Nullable
-   public Foo.Bar foobar;
+
+   public Foo.@Nullable Bar foobar;
}
@@ -15,1 +15,1 @@
interface Foo {
  class Bar {
-   @Nonnull
+   @NonNull
    public String barField;
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
foo
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>javax.annotation</groupId>
            <artifactId>javax.annotation-api</artifactId>
            <version>1.3.2</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example.foobar</groupId>
    <artifactId>foobar-core</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>javax.annotation</groupId>
            <artifactId>javax.annotation-api</artifactId>
            <version>1.3.2</version>
        </dependency>
        <dependency>
            <groupId>org.jspecify</groupId>
            <artifactId>jspecify</artifactId>
            <version>1.0.0</version>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,0 +12,5 @@
            <version>1.3.2</version>
        </dependency>
+       <dependency>
+           <groupId>org.jspecify</groupId>
+           <artifactId>jspecify</artifactId>
+           <version>1.0.0</version>
+       </dependency>
    </dependencies>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.jspecify.MigrateToJspecify")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.jspecify.MigrateToJspecify")
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
            <recipe>org.openrewrite.java.jspecify.MigrateToJspecify</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.jspecify.MigrateToJspecify -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToJspecify
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jspecify.MigrateToJspecify" />

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
