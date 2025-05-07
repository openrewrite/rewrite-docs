---
sidebar_label: "Remove unused dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove unused dependencies

**org.openrewrite.java.dependencies.RemoveUnusedDependencies**

_Scans through source code collecting references to types and methods, removing any dependencies that are not used from Maven or Gradle build files. This is a complex recipe which has not yet been well tested and exercised. For now it should be treated as making recommendations to further investigate._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Examples
##### Example 1


###### Unchanged
```java
import java.util.List;
import java.util.ArrayList;
public class A {
    List<String> a = new ArrayList<>();
}
```

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>29.0-jre</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>app</artifactId>
    <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,7 +5,0 @@
    <artifactId>app</artifactId>
    <version>1</version>
-   <dependencies>
-       <dependency>
-           <groupId>com.google.guava</groupId>
-           <artifactId>guava</artifactId>
-           <version>29.0-jre</version>
-       </dependency>
-   </dependencies>
</project>
```
</TabItem>
</Tabs>

---

##### Example 2


###### Unchanged
```java
import com.google.common.collect.Lists;
import java.util.List;
public class A {
    List<String> a = Lists.newArrayList();
}
```

###### Unchanged
```java
import java.util.List;
import java.util.ArrayList;
public class B {
    List<String> b = new ArrayList<>();
}
```

###### Unchanged
```mavenProject
no-guava
```

###### Unchanged
```mavenProject
root
```

###### Unchanged
```mavenProject
uses-guava
```

###### Unchanged
```xml title="pom.xml"
<project>
      <groupId>com.mycompany</groupId>
      <artifactId>root</artifactId>
      <version>1</version>
      <modules>
          <module>uses-guava</module>
          <module>no-guava</module>
      </modules>
</project>
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>no-guava</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>29.0-jre</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>no-guava</artifactId>
    <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,7 +5,0 @@
    <artifactId>no-guava</artifactId>
    <version>1</version>
-   <dependencies>
-       <dependency>
-           <groupId>com.google.guava</groupId>
-           <artifactId>guava</artifactId>
-           <version>29.0-jre</version>
-       </dependency>
-   </dependencies>
</project>
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <groupId>com.mycompany</groupId>
    <artifactId>uses-guava</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>com.google.guava</groupId>
            <artifactId>guava</artifactId>
            <version>29.0-jre</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 3


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    implementation 'com.google.guava:guava:29.0-jre'
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -8,1 +8,0 @@
}
dependencies {
-   implementation 'com.google.guava:guava:29.0-jre'
}
```
</TabItem>
</Tabs>

###### Unchanged
```java
import java.util.List;
import java.util.ArrayList;
public class A {
    List<String> a = new ArrayList<>();
}
```

###### Unchanged
```mavenProject
project
```

---

##### Example 4


###### Unchanged
```groovy title="build.gradle"
plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    implementation 'com.google.guava:guava:29.0-jre'
}
```

###### Unchanged
```java
import com.google.common.collect.Lists;
import java.util.List;
public class A {
    List<String> a = Lists.newArrayList();
}
```

###### Unchanged
```mavenProject
project
```


## Usage

This recipe has no required configuration options. Users of Moderne can run it via the Moderne CLI:
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RemoveUnusedDependencies
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveUnusedDependencies" />

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
