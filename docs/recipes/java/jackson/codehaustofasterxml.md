---
sidebar_label: "Migrate from Jackson Codehaus (legacy) to Jackson FasterXML"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from Jackson Codehaus (legacy) to Jackson FasterXML

**org.openrewrite.java.jackson.CodehausToFasterXML**

_In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/codehaus-to-fasterxml.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove Codehaus Jackson annotations if doubly annotated](../../java/jackson/codehaus/removedoublyannotatedcodehausannotations)
* [Transfer @JsonSerialize arguments from Codehaus to FasterXML](../../java/jackson/codehaus/transferjsonserializeargumentsfromcodehaustofasterxml)
* [Migrate classes from Jackson Codehaus (legacy) to Jackson FasterXML](../../java/jackson/codehausclassestofasterxml)
* [Migrate dependencies from Jackson Codehaus (legacy) to FasterXML](../../java/jackson/codehaus/codehausdependencytofasterxml)
  * version: `2.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.CodehausToFasterXML
displayName: Migrate from Jackson Codehaus (legacy) to Jackson FasterXML
description: |
  In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML.
recipeList:
  - org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations
  - org.openrewrite.java.jackson.codehaus.TransferJsonSerializeArgumentsFromCodehausToFasterXML
  - org.openrewrite.java.jackson.CodehausClassesToFasterXML
  - org.openrewrite.java.jackson.codehaus.CodehausDependencyToFasterXML:
      version: 2.x

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;

class Test {
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.setSerializationInclusion(Include.NON_NULL);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.codehaus.jackson.map.ObjectMapper;
-import org.codehaus.jackson.map.annotate.JsonSerialize;
+import com.fasterxml.jackson.annotation.JsonInclude.Include;
+import com.fasterxml.jackson.databind.ObjectMapper;

@@ -7,1 +7,1 @@
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
-       return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
+       return mapper.setSerializationInclusion(Include.NON_NULL);
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
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;

class Test {
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

class Test {
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.setSerializationInclusion(Include.NON_NULL);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.codehaus.jackson.map.ObjectMapper;
-import org.codehaus.jackson.map.annotate.JsonSerialize;
+import com.fasterxml.jackson.annotation.JsonInclude.Include;
+import com.fasterxml.jackson.databind.ObjectMapper;

@@ -7,1 +7,1 @@
    private static ObjectMapper initializeObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
-       return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
+       return mapper.setSerializationInclusion(Include.NON_NULL);
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
    activeRecipe("org.openrewrite.java.jackson.CodehausToFasterXML")
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
        activeRecipe("org.openrewrite.java.jackson.CodehausToFasterXML")
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
            <recipe>org.openrewrite.java.jackson.CodehausToFasterXML</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jackson:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.jackson.CodehausToFasterXML -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CodehausToFasterXML
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jackson:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.CodehausToFasterXML" />

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
[Tim te Beek](mailto:tim@moderne.io)
