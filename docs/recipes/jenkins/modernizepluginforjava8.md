---
sidebar_label: "Modernize a Jenkins plugin to the latest versions supported by Java 8"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modernize a Jenkins plugin to the latest versions supported by Java 8

**org.openrewrite.jenkins.ModernizePluginForJava8**

_This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/java-8.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-jenkins/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jenkins/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use HTTPS for repositories](../maven/security/usehttpsforrepositories)
* [Disables local file resolution for parent POM](../jenkins/disablelocalresolutionforparentpom)
* [Add or correct Jenkins plugins BOM](../jenkins/addpluginsbom)
* [Change Maven parent](../maven/changeparentpom)
  * oldGroupId: `org.jenkins-ci.plugins`
  * oldArtifactId: `plugin`
  * newVersion: `4.51`
  * allowVersionDowngrades: `false`
* [Upgrade property's value to version](../jenkins/upgradeversionproperty)
  * key: `jenkins.version`
  * minimumVersion: `2.346.3`
* [Remove redundant explicit dependency and plugin versions](../maven/removeredundantdependencyversions)
  * onlyIfVersionsMatch: `false`
* [Remove Maven project property](../maven/removeproperty)
  * propertyName: `java.level`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.jenkins.ModernizePluginForJava8
displayName: Modernize a Jenkins plugin to the latest versions supported by Java 8
description: |
  This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11.
recipeList:
  - org.openrewrite.maven.security.UseHttpsForRepositories
  - org.openrewrite.jenkins.DisableLocalResolutionForParentPom
  - org.openrewrite.jenkins.AddPluginsBom
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: org.jenkins-ci.plugins
      oldArtifactId: plugin
      newVersion: 4.51
      allowVersionDowngrades: false
  - org.openrewrite.jenkins.UpgradeVersionProperty:
      key: jenkins.version
      minimumVersion: 2.346.3
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      onlyIfVersionsMatch: false
  - org.openrewrite.maven.RemoveProperty:
      propertyName: java.level

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.42</version>
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.303.3</jenkins.version>
        <java.level>8</java.level>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
            <version>1.12</version>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>http://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.51</version>
        <relativePath />
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.346.3</jenkins.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.jenkins.tools.bom</groupId>
                <artifactId>bom-2.346.x</artifactId>
                <version>1763.v092b_8980a_f5e</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>https://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,2 @@
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
-       <version>4.42</version>
+       <version>4.51</version>
+       <relativePath />
    </parent>
@@ -10,2 +11,1 @@
    <version>0.8-SNAPSHOT</version>
    <properties>
-       <jenkins.version>2.303.3</jenkins.version>
-       <java.level>8</java.level>
+       <jenkins.version>2.346.3</jenkins.version>
    </properties>
@@ -13,0 +13,11 @@
        <java.level>8</java.level>
    </properties>
+   <dependencyManagement>
+       <dependencies>
+           <dependency>
+               <groupId>io.jenkins.tools.bom</groupId>
+               <artifactId>bom-2.346.x</artifactId>
+               <version>1763.v092b_8980a_f5e</version>
+               <type>pom</type>
+               <scope>import</scope>
+           </dependency>
+       </dependencies>
+   </dependencyManagement>
    <dependencies>
@@ -17,1 +28,0 @@
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
-           <version>1.12</version>
        </dependency>
@@ -23,1 +33,1 @@
        <repository>
            <id>repo.jenkins-ci.org</id>
-           <url>http://repo.jenkins-ci.org/public/</url>
+           <url>https://repo.jenkins-ci.org/public/</url>
        </repository>
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.42</version>
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.303.3</jenkins.version>
        <java.level>8</java.level>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
            <version>1.12</version>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>http://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
        <version>4.51</version>
        <relativePath />
    </parent>
    <artifactId>example-plugin</artifactId>
    <version>0.8-SNAPSHOT</version>
    <properties>
        <jenkins.version>2.346.3</jenkins.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.jenkins.tools.bom</groupId>
                <artifactId>bom-2.346.x</artifactId>
                <version>1763.v092b_8980a_f5e</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
        </dependency>
    </dependencies>
    <repositories>
        <repository>
            <id>repo.jenkins-ci.org</id>
            <url>https://repo.jenkins-ci.org/public/</url>
        </repository>
    </repositories>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,1 +5,2 @@
        <groupId>org.jenkins-ci.plugins</groupId>
        <artifactId>plugin</artifactId>
-       <version>4.42</version>
+       <version>4.51</version>
+       <relativePath />
    </parent>
@@ -10,2 +11,1 @@
    <version>0.8-SNAPSHOT</version>
    <properties>
-       <jenkins.version>2.303.3</jenkins.version>
-       <java.level>8</java.level>
+       <jenkins.version>2.346.3</jenkins.version>
    </properties>
@@ -13,0 +13,11 @@
        <java.level>8</java.level>
    </properties>
+   <dependencyManagement>
+       <dependencies>
+           <dependency>
+               <groupId>io.jenkins.tools.bom</groupId>
+               <artifactId>bom-2.346.x</artifactId>
+               <version>1763.v092b_8980a_f5e</version>
+               <type>pom</type>
+               <scope>import</scope>
+           </dependency>
+       </dependencies>
+   </dependencyManagement>
    <dependencies>
@@ -17,1 +28,0 @@
            <groupId>org.jenkins-ci.plugins</groupId>
            <artifactId>junit</artifactId>
-           <version>1.12</version>
        </dependency>
@@ -23,1 +33,1 @@
        <repository>
            <id>repo.jenkins-ci.org</id>
-           <url>http://repo.jenkins-ci.org/public/</url>
+           <url>https://repo.jenkins-ci.org/public/</url>
        </repository>
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
    activeRecipe("org.openrewrite.jenkins.ModernizePluginForJava8")
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
        activeRecipe("org.openrewrite.jenkins.ModernizePluginForJava8")
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
            <recipe>org.openrewrite.jenkins.ModernizePluginForJava8</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jenkins:RELEASE -Drewrite.activeRecipes=org.openrewrite.jenkins.ModernizePluginForJava8 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ModernizePluginForJava8
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-jenkins:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.jenkins.ModernizePluginForJava8" />

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

## Contributors

Steve Hill, Tim te Beek
