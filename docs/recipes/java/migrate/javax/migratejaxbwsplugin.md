---
sidebar_label: "Migrate JAXB-WS Plugin"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate JAXB-WS Plugin

**org.openrewrite.java.migrate.javax.MigrateJaxBWSPlugin**

_Upgrade the JAXB-WS Maven plugin to be compatible with Java 11._

### Tags

* [java11](/reference/recipes-by-tag#java11)

## Recipe source

[GitHub: jaxb-plugins.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jaxb-plugins.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Change Maven plugin group and artifact ID](../../../maven/changeplugingroupidandartifactid)
  * oldGroupId: `org.jvnet.jax-ws-commons`
  * oldArtifactId: `jaxws-maven-plugin`
  * newGroupId: `com.sun.xml.ws`
  * newVersion: `2.3.7`
* [Add or update child tag](../../../xml/addorupdatechildtag)
  * parentXPath: `//plugin[artifactId='jaxws-maven-plugin']/executions/execution`
  * newChildTag: `<phase>generate-sources</phase>`
* [Change XML tag name](../../../xml/changetagname)
  * elementName: `//plugin[artifactId='jaxws-maven-plugin']/executions/execution/configuration/nocompile`
  * newName: `xnocompile`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.MigrateJaxBWSPlugin
displayName: Migrate JAXB-WS Plugin
description: |
  Upgrade the JAXB-WS Maven plugin to be compatible with Java 11.
tags:
  - java11
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.jvnet.jax-ws-commons
      oldArtifactId: jaxws-maven-plugin
      newGroupId: com.sun.xml.ws
      newVersion: 2.3.7
  - org.openrewrite.xml.AddOrUpdateChildTag:
      parentXPath: //plugin[artifactId='jaxws-maven-plugin']/executions/execution
      newChildTag: <phase>generate-sources</phase>
  - org.openrewrite.xml.ChangeTagName:
      elementName: //plugin[artifactId='jaxws-maven-plugin']/executions/execution/configuration/nocompile
      newName: xnocompile

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Examples
##### Example 1
`MigrateJaxwsMavenPluginTest#migrateJaxwsPluginFromJvnetToSunXmlWs`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>jaxws-service</artifactId>
    <version>1.0.0</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jvnet.jax-ws-commons</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
                <version>2.1</version>
                <executions>
                    <execution>
                        <id>wsimport-from-jdk</id>
                        <goals>
                            <goal>wsimport</goal>
                        </goals>
                        <configuration>
                            <sourceDestDir>${project.build.directory}/generated-sources/wsimport</sourceDestDir>
                            <wsdlDirectory>${project.basedir}/src/main/resources/wsdl</wsdlDirectory>
                            <wsdlFiles>
                                <wsdlFile>STSSAPPrimingService.wsdl</wsdlFile>
                            </wsdlFiles>
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
                            <nocompile>true</nocompile>
                            <verbose>true</verbose>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.14.1</version>
                <executions>
                    <execution>
                        <configuration>
                            <nocompile>true</nocompile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>jaxws-service</artifactId>
    <version>1.0.0</version>
    <build>
        <plugins>
            <plugin>
                <groupId>com.sun.xml.ws</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
                <version>2.3.7</version>
                <executions>
                    <execution>
                        <id>wsimport-from-jdk</id>
                        <goals>
                            <goal>wsimport</goal>
                        </goals>
                        <configuration>
                            <sourceDestDir>${project.build.directory}/generated-sources/wsimport</sourceDestDir>
                            <wsdlDirectory>${project.basedir}/src/main/resources/wsdl</wsdlDirectory>
                            <wsdlFiles>
                                <wsdlFile>STSSAPPrimingService.wsdl</wsdlFile>
                            </wsdlFiles>
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
                            <xnocompile>true</xnocompile>
                            <verbose>true</verbose>
                        </configuration>
                        <phase>generate-sources</phase>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.14.1</version>
                <executions>
                    <execution>
                        <configuration>
                            <nocompile>true</nocompile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -9,1 +9,1 @@
        <plugins>
            <plugin>
-               <groupId>org.jvnet.jax-ws-commons</groupId>
+               <groupId>com.sun.xml.ws</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
@@ -11,1 +11,1 @@
                <groupId>org.jvnet.jax-ws-commons</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
-               <version>2.1</version>
+               <version>2.3.7</version>
                <executions>
@@ -26,1 +26,1 @@
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
-                           <nocompile>true</nocompile>
+                           <xnocompile>true</xnocompile>
                            <verbose>true</verbose>
@@ -29,0 +29,1 @@
                            <verbose>true</verbose>
                        </configuration>
+                       <phase>generate-sources</phase>
                    </execution>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateJaxwsMavenPluginTest#migrateJaxwsPluginFromJvnetToSunXmlWs`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>jaxws-service</artifactId>
    <version>1.0.0</version>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jvnet.jax-ws-commons</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
                <version>2.1</version>
                <executions>
                    <execution>
                        <id>wsimport-from-jdk</id>
                        <goals>
                            <goal>wsimport</goal>
                        </goals>
                        <configuration>
                            <sourceDestDir>${project.build.directory}/generated-sources/wsimport</sourceDestDir>
                            <wsdlDirectory>${project.basedir}/src/main/resources/wsdl</wsdlDirectory>
                            <wsdlFiles>
                                <wsdlFile>STSSAPPrimingService.wsdl</wsdlFile>
                            </wsdlFiles>
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
                            <nocompile>true</nocompile>
                            <verbose>true</verbose>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.14.1</version>
                <executions>
                    <execution>
                        <configuration>
                            <nocompile>true</nocompile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>jaxws-service</artifactId>
    <version>1.0.0</version>
    <build>
        <plugins>
            <plugin>
                <groupId>com.sun.xml.ws</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
                <version>2.3.7</version>
                <executions>
                    <execution>
                        <id>wsimport-from-jdk</id>
                        <goals>
                            <goal>wsimport</goal>
                        </goals>
                        <configuration>
                            <sourceDestDir>${project.build.directory}/generated-sources/wsimport</sourceDestDir>
                            <wsdlDirectory>${project.basedir}/src/main/resources/wsdl</wsdlDirectory>
                            <wsdlFiles>
                                <wsdlFile>STSSAPPrimingService.wsdl</wsdlFile>
                            </wsdlFiles>
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
                            <xnocompile>true</xnocompile>
                            <verbose>true</verbose>
                        </configuration>
                        <phase>generate-sources</phase>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.14.1</version>
                <executions>
                    <execution>
                        <configuration>
                            <nocompile>true</nocompile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -9,1 +9,1 @@
        <plugins>
            <plugin>
-               <groupId>org.jvnet.jax-ws-commons</groupId>
+               <groupId>com.sun.xml.ws</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
@@ -11,1 +11,1 @@
                <groupId>org.jvnet.jax-ws-commons</groupId>
                <artifactId>jaxws-maven-plugin</artifactId>
-               <version>2.1</version>
+               <version>2.3.7</version>
                <executions>
@@ -26,1 +26,1 @@
                            <packageName>org.example.generated</packageName>
                            <keep>true</keep>
-                           <nocompile>true</nocompile>
+                           <xnocompile>true</xnocompile>
                            <verbose>true</verbose>
@@ -29,0 +29,1 @@
                            <verbose>true</verbose>
                        </configuration>
+                       <phase>generate-sources</phase>
                    </execution>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.javax.MigrateJaxBWSPlugin"
  displayName="Migrate JAXB-WS Plugin"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.MigrateJaxBWSPlugin" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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

</Tabs>
