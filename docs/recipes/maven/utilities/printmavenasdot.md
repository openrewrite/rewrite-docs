---
sidebar_label: "Print Maven dependency hierarchy in DOT format"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Print Maven dependency hierarchy in DOT format

**org.openrewrite.maven.utilities.PrintMavenAsDot**

_The DOT language format is specified [here](https://graphviz.org/doc/info/lang.html)._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/utilities/PrintMavenAsDot.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
        <groupId>org.yaml</groupId>
        <artifactId>snakeyaml</artifactId>
        <version>1.27</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<!--~~(digraph main {
0 [label="com.mycompany.app:my-app:1"];
1 [label="org.yaml:snakeyaml:1.27"];
2 [label="org.junit.jupiter:junit-jupiter:5.7.0"];
3 [label="org.junit.jupiter:junit-jupiter-api:5.7.0"];
4 [label="org.junit.jupiter:junit-jupiter-params:5.7.0"];
5 [label="org.junit.jupiter:junit-jupiter-engine:5.7.0"];
6 [label="org.junit:junit-bom:5.7.0"];
7 [label="org.apiguardian:apiguardian-api:1.1.0"];
8 [label="org.opentest4j:opentest4j:1.2.0"];
9 [label="org.junit.platform:junit-platform-commons:1.7.0"];
10 [label="org.junit.platform:junit-platform-engine:1.7.0"];
0 -> 1 [taillabel="Compile"];
0 -> 2 [taillabel="Test"];
2 -> 3 [taillabel="Test"];
3 -> 7 [taillabel="Test"];
3 -> 8 [taillabel="Test"];
3 -> 9 [taillabel="Test"];
2 -> 4 [taillabel="Test"];
2 -> 5 [taillabel="Test"];
5 -> 10 [taillabel="Test"];
2 -> 6 [taillabel="Test"];
})~~>--><project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <dependencies>
    <dependency>
        <groupId>org.yaml</groupId>
        <artifactId>snakeyaml</artifactId>
        <version>1.27</version>
    </dependency>
    <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -1,1 +1,23 @@
-<project>
+<!--~~(digraph main {
+0 [label="com.mycompany.app:my-app:1"];
+1 [label="org.yaml:snakeyaml:1.27"];
+2 [label="org.junit.jupiter:junit-jupiter:5.7.0"];
+3 [label="org.junit.jupiter:junit-jupiter-api:5.7.0"];
+4 [label="org.junit.jupiter:junit-jupiter-params:5.7.0"];
+5 [label="org.junit.jupiter:junit-jupiter-engine:5.7.0"];
+6 [label="org.junit:junit-bom:5.7.0"];
+7 [label="org.apiguardian:apiguardian-api:1.1.0"];
+8 [label="org.opentest4j:opentest4j:1.2.0"];
+9 [label="org.junit.platform:junit-platform-commons:1.7.0"];
+10 [label="org.junit.platform:junit-platform-engine:1.7.0"];
+0 -> 1 [taillabel="Compile"];
+0 -> 2 [taillabel="Test"];
+2 -> 3 [taillabel="Test"];
+3 -> 7 [taillabel="Test"];
+3 -> 8 [taillabel="Test"];
+3 -> 9 [taillabel="Test"];
+2 -> 4 [taillabel="Test"];
+2 -> 5 [taillabel="Test"];
+5 -> 10 [taillabel="Test"];
+2 -> 6 [taillabel="Test"];
+})~~>--><project>
  <groupId>com.mycompany.app</groupId>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">

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
            <recipe>org.openrewrite.maven.utilities.PrintMavenAsDot</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.utilities.PrintMavenAsDot -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PrintMavenAsDot
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.utilities.PrintMavenAsDot" />

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
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Patrick](mailto:patway99@gmail.com)
