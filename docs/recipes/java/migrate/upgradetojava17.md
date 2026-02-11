---
sidebar_label: "Migrate to Java 17"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Java 17

**org.openrewrite.java.migrate.UpgradeToJava17**

_This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17._

### Tags

* [java17](/reference/recipes-by-tag#java17)

## Recipe source

[GitHub: java-version-17.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Java 11](../../java/migrate/java8tojava11)
* [Upgrade build to Java 17](../../java/migrate/upgradebuildtojava17)
* [Changes code to use Java 17's `instanceof` pattern matching](../../staticanalysis/instanceofpatternmatch)
* [Add `@Serial` annotation to `serialVersionUID`](../../staticanalysis/addserialannotationtoserialversionuid)
* [Remove `Runtime.traceInstructions(boolean)` and `Runtime.traceMethodCalls` methods](../../java/migrate/removedruntimetracemethods)
* [Change `javax.tools.ToolProvider` methods calls to static](../../java/migrate/removedtoolproviderconstructor)
* [Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static](../../java/migrate/removedmodifierandconstantbootstrapsconstructors)
* [Add explicit import for `Record` classes](../../java/migrate/lang/explicitrecordimport)
* [Use text blocks](../../java/migrate/lang/usetextblocks)
  * convertStringsWithoutNewlines: `false`
  * avoidLineContinuations: `false`
* [Prefer `String.formatted(Object...)`](../../java/migrate/lang/stringformatted)
  * addParentheses: `false`
* [Use `java.security.cert` instead of `javax.security.cert`](../../java/migrate/deprecatedjavaxsecuritycert)
* [Adopt `setLongThreadID` in `java.util.logging.LogRecord`](../../java/migrate/deprecatedlogrecordthreadid)
* [Use `SunJSSE` instead of `com.sun.net.ssl.internal.ssl.Provider`](../../java/migrate/removedlegacysunjsseprovidername)
* [Set visibility of `premain` and `agentmain` methods to `public`](../../java/migrate/jre17agentmainpremainpublic)
* [Remove `Thread.countStackFrames()` method](../../java/migrate/deprecatedcountstackframesmethod)
* [Replace `finalize` method in `java.util.zip.ZipFile`, `java.util.zip.Inflater` and `java.util.zip.Deflater`](../../java/migrate/removedzipfinalizemethods)
* [Replace `SSLSession.getPeerCertificateChain()` method](../../java/migrate/removedsslsessiongetpeercertificatechainmethodimpl)
* [Replace `com.sun.net.ssl` package](../../java/migrate/sunnetsslpackageunavailable)
* [Replace `RMIConnectorServer.CREDENTIAL_TYPES` constant](../../java/migrate/removedrmiconnectorservercredentialtypesconstant)
* [Replace `finalize` method in `java.io.FileInputStream`  and `java.io.FileOutputStream`](../../java/migrate/removedfileiofinalizemethods)
* [Upgrade plugins to Java 17 compatible versions](../../java/migrate/upgradepluginsforjava17)
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `com.google.inject`
  * artifactId: `guice`
  * newVersion: `5.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `commons-codec`
  * artifactId: `commons-codec`
  * newVersion: `1.17.x`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion)
  * groupId: `com.github.spotbugs`
  * artifactId: `spotbugs-maven-plugin`
  * newVersion: `4.9.x`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion)
  * groupId: `com.github.spotbugs`
  * artifactId: `spotbugs-maven-plugin`
  * newVersion: `4.9.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mapstruct`
  * artifactId: `mapstruct*`
  * newVersion: `1.6.x`
* [Add `lombok-mapstruct-binding` when both MapStruct and Lombok are used](../../java/migrate/addlombokmapstructbinding)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeToJava17
displayName: Migrate to Java 17
description: |
  This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.
tags:
  - java17
recipeList:
  - org.openrewrite.java.migrate.Java8toJava11
  - org.openrewrite.java.migrate.UpgradeBuildToJava17
  - org.openrewrite.staticanalysis.InstanceOfPatternMatch
  - org.openrewrite.staticanalysis.AddSerialAnnotationToSerialVersionUID
  - org.openrewrite.java.migrate.RemovedRuntimeTraceMethods
  - org.openrewrite.java.migrate.RemovedToolProviderConstructor
  - org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors
  - org.openrewrite.java.migrate.lang.ExplicitRecordImport
  - org.openrewrite.java.migrate.lang.UseTextBlocks:
      convertStringsWithoutNewlines: false
      avoidLineContinuations: false
  - org.openrewrite.java.migrate.lang.StringFormatted:
      addParentheses: false
  - org.openrewrite.java.migrate.DeprecatedJavaxSecurityCert
  - org.openrewrite.java.migrate.DeprecatedLogRecordThreadID
  - org.openrewrite.java.migrate.RemovedLegacySunJSSEProviderName
  - org.openrewrite.java.migrate.Jre17AgentMainPreMainPublic
  - org.openrewrite.java.migrate.DeprecatedCountStackFramesMethod
  - org.openrewrite.java.migrate.RemovedZipFinalizeMethods
  - org.openrewrite.java.migrate.RemovedSSLSessionGetPeerCertificateChainMethodImpl
  - org.openrewrite.java.migrate.SunNetSslPackageUnavailable
  - org.openrewrite.java.migrate.RemovedRMIConnectorServerCredentialTypesConstant
  - org.openrewrite.java.migrate.RemovedFileIOFinalizeMethods
  - org.openrewrite.java.migrate.UpgradePluginsForJava17
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.google.inject
      artifactId: guice
      newVersion: 5.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: commons-codec
      artifactId: commons-codec
      newVersion: 1.17.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: com.github.spotbugs
      artifactId: spotbugs-maven-plugin
      newVersion: 4.9.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: com.github.spotbugs
      artifactId: spotbugs-maven-plugin
      newVersion: 4.9.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mapstruct
      artifactId: mapstruct*
      newVersion: 1.6.x
  - org.openrewrite.java.migrate.AddLombokMapstructBinding

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Dropwizard 5.0.x from 4.x](/recipes/java/dropwizard/migratetodropwizard5.md)
* [Migrate to Java 21](/recipes/java/migrate/upgradetojava21.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Migrate to Struts 7.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/struts/migrate7/migratestruts7)
* [Migrate to Wicket 10.x](/recipes/org/apache/wicket/migratetowicket10.md)

## Examples
##### Example 1
`UpgradeToJava17Test#upgradeFromJava8ToJava17`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
   public String test() {
       return String.format("Hello %s", "world");
   }
}
```

###### After
```java
class A {
   public String test() {
       return "Hello %s".formatted("world");
   }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
class A {
   public String test() {
-      return String.format("Hello %s", "world");
+      return "Hello %s".formatted("world");
   }
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <properties>
    <java.version>1.8</java.version>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <properties>
    <java.version>17</java.version>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -4,3 +4,3 @@
  <modelVersion>4.0.0</modelVersion>
  <properties>
-   <java.version>1.8</java.version>
-   <maven.compiler.source>1.8</maven.compiler.source>
-   <maven.compiler.target>1.8</maven.compiler.target>
+   <java.version>17</java.version>
+   <maven.compiler.source>17</maven.compiler.source>
+   <maven.compiler.target>17</maven.compiler.target>
  </properties>
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeToJava17Test#upgradeFromJava8ToJava17`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
   public String test() {
       return String.format("Hello %s", "world");
   }
}
```

###### After
```java
class A {
   public String test() {
       return "Hello %s".formatted("world");
   }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
class A {
   public String test() {
-      return String.format("Hello %s", "world");
+      return "Hello %s".formatted("world");
   }
```
</TabItem>
</Tabs>

###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <properties>
    <java.version>1.8</java.version>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <properties>
    <java.version>17</java.version>
    <maven.compiler.source>17</maven.compiler.source>
    <maven.compiler.target>17</maven.compiler.target>
  </properties>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -4,3 +4,3 @@
  <modelVersion>4.0.0</modelVersion>
  <properties>
-   <java.version>1.8</java.version>
-   <maven.compiler.source>1.8</maven.compiler.source>
-   <maven.compiler.target>1.8</maven.compiler.target>
+   <java.version>17</java.version>
+   <maven.compiler.source>17</maven.compiler.source>
+   <maven.compiler.target>17</maven.compiler.target>
  </properties>
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
    activeRecipe("org.openrewrite.java.migrate.UpgradeToJava17")
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
        activeRecipe("org.openrewrite.java.migrate.UpgradeToJava17")
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
            <recipe>org.openrewrite.java.migrate.UpgradeToJava17</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.UpgradeToJava17 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeToJava17
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava17" />

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
