---
sidebar_label: "Substitute removed Faces Managed Beans"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Substitute removed Faces Managed Beans

**org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved**

_This recipe substitutes Faces Managed Beans, which were deprecated in JavaServer Faces 2.3 and have been removed from Jakarta Faces 4.0._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-4.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.ApplicationScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.ApplicationScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.ApplicationScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.ApplicationScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.ManagedProperty`
  * newFullyQualifiedTypeName: `jakarta.faces.annotation.ManagedProperty`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.ManagedProperty`
  * newFullyQualifiedTypeName: `jakarta.faces.annotation.ManagedProperty`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.NoneScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.Dependent`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.NoneScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.Dependent`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.RequestScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.RequestScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.RequestScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.RequestScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.SessionScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.SessionScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.SessionScoped`
  * newFullyQualifiedTypeName: `jakarta.enterprise.context.SessionScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.faces.bean.ViewScoped`
  * newFullyQualifiedTypeName: `jakarta.faces.view.ViewScoped`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.faces.bean.ViewScoped`
  * newFullyQualifiedTypeName: `jakarta.faces.view.ViewScoped`
  * ignoreDefinition: `true`
* [Update Faces `@ManagedBean` to use CDI `@Named`](../../../java/migrate/jakarta/updatemanagedbeantonamed)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved
displayName: Substitute removed Faces Managed Beans
description: |
  This recipe substitutes Faces Managed Beans, which were deprecated in JavaServer Faces 2.3 and have been removed from Jakarta Faces 4.0.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.ApplicationScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.ApplicationScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.ApplicationScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.ApplicationScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.ManagedProperty
      newFullyQualifiedTypeName: jakarta.faces.annotation.ManagedProperty
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.ManagedProperty
      newFullyQualifiedTypeName: jakarta.faces.annotation.ManagedProperty
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.NoneScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.Dependent
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.NoneScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.Dependent
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.RequestScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.RequestScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.RequestScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.RequestScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.SessionScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.SessionScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.SessionScoped
      newFullyQualifiedTypeName: jakarta.enterprise.context.SessionScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.faces.bean.ViewScoped
      newFullyQualifiedTypeName: jakarta.faces.view.ViewScoped
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.faces.bean.ViewScoped
      newFullyQualifiedTypeName: jakarta.faces.view.ViewScoped
      ignoreDefinition: true
  - org.openrewrite.java.migrate.jakarta.UpdateManagedBeanToNamed

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.NoneScoped;
import javax.faces.bean.ViewScoped;

@ApplicationScoped
@RequestScoped
@SessionScoped
@ManagedProperty
@NoneScoped
@ViewScoped
public class ApplicationBean2 {
}
```

###### After
```java
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Dependent;
import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.annotation.ManagedProperty;
import jakarta.faces.view.ViewScoped;

@ApplicationScoped
@RequestScoped
@SessionScoped
@ManagedProperty
@Dependent
@ViewScoped
public class ApplicationBean2 {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,6 +1,6 @@
-import javax.faces.bean.ApplicationScoped;
-import javax.faces.bean.RequestScoped;
-import javax.faces.bean.SessionScoped;
-import javax.faces.bean.ManagedProperty;
-import javax.faces.bean.NoneScoped;
-import javax.faces.bean.ViewScoped;
+import jakarta.enterprise.context.ApplicationScoped;
+import jakarta.enterprise.context.Dependent;
+import jakarta.enterprise.context.RequestScoped;
+import jakarta.enterprise.context.SessionScoped;
+import jakarta.faces.annotation.ManagedProperty;
+import jakarta.faces.view.ViewScoped;

@@ -12,1 +12,1 @@
@SessionScoped
@ManagedProperty
-@NoneScoped
+@Dependent
@ViewScoped
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.RequestScoped;
import javax.faces.bean.SessionScoped;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.NoneScoped;
import javax.faces.bean.ViewScoped;

@ApplicationScoped
@RequestScoped
@SessionScoped
@ManagedProperty
@NoneScoped
@ViewScoped
public class ApplicationBean2 {
}
```

###### After
```java
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.context.Dependent;
import jakarta.enterprise.context.RequestScoped;
import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.annotation.ManagedProperty;
import jakarta.faces.view.ViewScoped;

@ApplicationScoped
@RequestScoped
@SessionScoped
@ManagedProperty
@Dependent
@ViewScoped
public class ApplicationBean2 {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,6 +1,6 @@
-import javax.faces.bean.ApplicationScoped;
-import javax.faces.bean.RequestScoped;
-import javax.faces.bean.SessionScoped;
-import javax.faces.bean.ManagedProperty;
-import javax.faces.bean.NoneScoped;
-import javax.faces.bean.ViewScoped;
+import jakarta.enterprise.context.ApplicationScoped;
+import jakarta.enterprise.context.Dependent;
+import jakarta.enterprise.context.RequestScoped;
+import jakarta.enterprise.context.SessionScoped;
+import jakarta.faces.annotation.ManagedProperty;
+import jakarta.faces.view.ViewScoped;

@@ -12,1 +12,1 @@
@SessionScoped
@ManagedProperty
-@NoneScoped
+@Dependent
@ViewScoped
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
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved")
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
        activeRecipe("org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved")
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
            <recipe>org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FacesManagedBeansRemoved
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved" />

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
Evie Lau, [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de), [Tim te Beek](mailto:timtebeek@gmail.com)
