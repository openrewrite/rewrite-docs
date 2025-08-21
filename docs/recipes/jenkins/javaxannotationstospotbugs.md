---
sidebar_label: "Migrate `javax.annotations` to SpotBugs annotations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate `javax.annotations` to SpotBugs annotations

**org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs**

_SpotBugs is the [preferred replacement](https://www.jenkins.io/doc/developer/tutorial-improve/replace-jsr-305-annotations/) of JSR-305 annotations for Jenkins plugins._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/jsr-305.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `javax.annotation.Nonnull`
  * newFullyQualifiedTypeName: `edu.umd.cs.findbugs.annotations.NonNull`
  * ignoreDefinition: `true`
* [Rename package name](../java/changepackage)
  * oldPackageName: `javax.annotation`
  * newPackageName: `edu.umd.cs.findbugs.annotations`
  * recursive: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs
displayName: Migrate `javax.annotations` to SpotBugs annotations
description: |
  SpotBugs is the [preferred replacement](https://www.jenkins.io/doc/developer/tutorial-improve/replace-jsr-305-annotations/) of JSR-305 annotations for Jenkins plugins.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Nonnull
      newFullyQualifiedTypeName: edu.umd.cs.findbugs.annotations.NonNull
      ignoreDefinition: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.annotation
      newPackageName: edu.umd.cs.findbugs.annotations
      recursive: false

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;
import java.util.Objects;

public class A {
    @CheckForNull
    public String key() {
        return null;
    }

    public @Nonnull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
    }
}
```

###### After
```java
import edu.umd.cs.findbugs.annotations.NonNull;

import edu.umd.cs.findbugs.annotations.CheckForNull;
import java.util.Objects;

public class A {
    @CheckForNull
    public String key() {
        return null;
    }

    public @NonNull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import javax.annotation.CheckForNull;
-import javax.annotation.Nonnull;
+import edu.umd.cs.findbugs.annotations.NonNull;
+
+import edu.umd.cs.findbugs.annotations.CheckForNull;
import java.util.Objects;
@@ -11,1 +12,1 @@
    }

-   public @Nonnull String myMethod(String in) {
+   public @NonNull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;
import java.util.Objects;

public class A {
    @CheckForNull
    public String key() {
        return null;
    }

    public @Nonnull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
    }
}
```

###### After
```java
import edu.umd.cs.findbugs.annotations.NonNull;

import edu.umd.cs.findbugs.annotations.CheckForNull;
import java.util.Objects;

public class A {
    @CheckForNull
    public String key() {
        return null;
    }

    public @NonNull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import javax.annotation.CheckForNull;
-import javax.annotation.Nonnull;
+import edu.umd.cs.findbugs.annotations.NonNull;
+
+import edu.umd.cs.findbugs.annotations.CheckForNull;
import java.util.Objects;
@@ -11,1 +12,1 @@
    }

-   public @Nonnull String myMethod(String in) {
+   public @NonNull String myMethod(String in) {
        return Objects.equals(in, "a") ? "yes" : "no";
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jenkins` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs")
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
            <recipe>org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jenkins</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE -Drewrite.activeRecipes=org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaxAnnotationsToSpotbugs
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs" />

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
