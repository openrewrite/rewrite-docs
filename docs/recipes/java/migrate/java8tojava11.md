---
sidebar_label: "Migrate to Java 11"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Java 11

**org.openrewrite.java.migrate.Java8toJava11**

_This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11._

### Tags

* jaxb
* deprecated
* java11
* jaxws
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-11.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Java 8](../../java/migrate/upgradetojava8)
* [Prefer `java.util.Base64` instead of `sun.misc`](../../java/migrate/usejavautilbase64)
  * useMimeCoder: `false`
* [Remove explicit casts on `Arrays.asList(..).toArray()`](../../java/migrate/castarraysaslisttolist)
* [Add explicit JAXB dependencies](../../java/migrate/javax/addjaxbdependencies)
* [Add explicit JAX-WS dependencies](../../java/migrate/javax/addjaxwsdependencies)
* [Add explicit Inject dependencies](../../java/migrate/javax/addinjectdependencies)
* [Add explicit Common Annotations dependencies](../../java/migrate/javax/addcommonannotationsdependencies)
* [`BigDecimal` rounding constants to `RoundingMode` enums](../../staticanalysis/bigdecimalroundingconstantstoenums)
* [Use primitive wrapper `valueOf` method](../../staticanalysis/primitivewrapperclassconstructortovalueof)
* [Use modernized `java.util.concurrent` APIs](../../java/migrate/concurrent/javaconcurrentapis)
* [Use modernized `java.lang` APIs](../../java/migrate/lang/javalangapis)
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `java.lang.Runtime runFinalizersOnExit(boolean)`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `java.lang.System runFinalizersOnExit(boolean)`
* [Use modernized `java.util.logging` APIs](../../java/migrate/logging/javaloggingapis)
* [Migrate Lombok to a Java 11 compatible version](../../java/migrate/lombok/updatelomboktojava11)
* [Use modernized `java.net` APIs](../../java/migrate/net/javanetapis)
* [Replace `Paths.get` with `Path.of`](../../java/migrate/nio/file/pathsgettopathof)
* [Use modernized `java.sql` APIs](../../java/migrate/sql/javasqlapis)
* [Use modernized `javax.lang.model.util` APIs](../../java/migrate/javax/javaxlangmodelutil)
* [Use modernized `javax.management.monitor` APIs](../../java/migrate/javax/javaxmanagementmonitorapis)
* [Use modernized `javax.xml.stream` APIs](../../java/migrate/javax/javaxxmlstreamapis)
* [Remove Cobertura Maven plugin](../../java/migrate/cobertura/removecoberturamavenplugin)
* [Upgrade build to Java 11](../../java/migrate/upgradebuildtojava11)
* [Prefer `Optional.isEmpty()`](../../java/migrate/util/optionalnotpresenttoisempty)
* [Prefer `Optional.isPresent()`](../../java/migrate/util/optionalnotemptytoispresent)
* [`Stream<Optional>` idiom recipe](../../java/migrate/util/optionalstreamrecipe)
* [Use `com.sun.xml.bind.*` instead of `com.sun.xml.internal.bind.*`](../../java/migrate/internalbindpackages)
* [Replace deprecated methods in`SecurityManager`](../../java/migrate/removedsecuritymanagermethods)
* [Upgrade plugins to Java 11 compatible versions](../../java/migrate/upgradepluginsforjava11)
* [Replace `javax.security.auth.Policy` with `java.security.Policy`](../../java/migrate/removedpolicy)
* [Replace `java.lang.ref.Reference.clone()` with constructor call](../../java/migrate/referenceclonemethod)
* [Remove `Thread.destroy()` and `Thread.stop(Throwable)`](../../java/migrate/threadstopdestroy)
* [Replace AWT `getPeer()` method](../../java/migrate/replaceawtgetpeermethod)
  * getPeerMethodPattern: `java.awt.* getPeer()`
  * lightweightPeerFQCN: `java.awt.peer.LightweightPeer`
* [Migrate to Scala 2.12.+](../../scala/migrate/upgradescala_2_12)
* [Replace `com.sun.awt.AWTUtilities` static method invocations](../../java/migrate/replacecomsunawtutilitiesmethods)
  * getAWTIsWindowsTranslucencyPattern: `com.sun.awt.AWTUtilities isTranslucencySupported(com.sun.awt.AWTUtilities.Translucency)`
  * isWindowOpaquePattern: `com.sun.awt.AWTUtilities isWindowOpaque(java.awt.Window)`
  * isTranslucencyCapablePattern: `com.sun.awt.AWTUtilities isTranslucencyCapable(java.awt.GraphicsConfiguration)`
  * setWindowOpacityPattern: `com.sun.awt.AWTUtilities setWindowOpacity(java.awt.Window, float)`
  * getWindowOpacityPattern: `com.sun.awt.AWTUtilities getWindowOpacity(java.awt.Window)`
  * getWindowShapePattern: `com.sun.awt.AWTUtilities getWindowShape(java.awt.Window)`
  * setComponentMixingCutoutShapePattern: `com.sun.awt.AWTUtilities setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)`
* [Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment](../../java/migrate/replacelocalizedstreammethods)
  * localizedInputStreamMethodMatcher: `java.lang.Runtime getLocalizedInputStream(java.io.InputStream)`
  * localizedOutputStreamMethodMatcher: `java.lang.Runtime getLocalizedOutputStream(java.io.OutputStream)`
* [Catch `TypeNotPresentException` thrown by `Class.getAnnotation()`](../../java/migrate/arraystoreexceptiontotypenotpresentexception)
* [Replace `IllegalArgumentException` with `AlreadyConnectedException` in `DatagramChannel.send()` method](../../java/migrate/illegalargumentexceptiontoalreadyconnectedexception)
* [Return String `jks` when  `KeyStore.getDefaultType()` is called](../../java/migrate/changedefaultkeystore)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.Java8toJava11
displayName: Migrate to Java 11
description: |
  This recipe will apply changes commonly needed when upgrading to Java 11. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 11 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 11.
tags:
  - jaxb
  - deprecated
  - java11
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava8
  - org.openrewrite.java.migrate.UseJavaUtilBase64:
      useMimeCoder: false
  - org.openrewrite.java.migrate.CastArraysAsListToList
  - org.openrewrite.java.migrate.javax.AddJaxbDependencies
  - org.openrewrite.java.migrate.javax.AddJaxwsDependencies
  - org.openrewrite.java.migrate.javax.AddInjectDependencies
  - org.openrewrite.java.migrate.javax.AddCommonAnnotationsDependencies
  - org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums
  - org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf
  - org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
  - org.openrewrite.java.migrate.lang.JavaLangAPIs
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: java.lang.Runtime runFinalizersOnExit(boolean)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: java.lang.System runFinalizersOnExit(boolean)
  - org.openrewrite.java.migrate.logging.JavaLoggingAPIs
  - org.openrewrite.java.migrate.lombok.UpdateLombokToJava11
  - org.openrewrite.java.migrate.net.JavaNetAPIs
  - org.openrewrite.java.migrate.nio.file.PathsGetToPathOf
  - org.openrewrite.java.migrate.sql.JavaSqlAPIs
  - org.openrewrite.java.migrate.javax.JavaxLangModelUtil
  - org.openrewrite.java.migrate.javax.JavaxManagementMonitorAPIs
  - org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
  - org.openrewrite.java.migrate.cobertura.RemoveCoberturaMavenPlugin
  - org.openrewrite.java.migrate.UpgradeBuildToJava11
  - org.openrewrite.java.migrate.util.OptionalNotPresentToIsEmpty
  - org.openrewrite.java.migrate.util.OptionalNotEmptyToIsPresent
  - org.openrewrite.java.migrate.util.OptionalStreamRecipe
  - org.openrewrite.java.migrate.InternalBindPackages
  - org.openrewrite.java.migrate.RemovedSecurityManagerMethods
  - org.openrewrite.java.migrate.UpgradePluginsForJava11
  - org.openrewrite.java.migrate.RemovedPolicy
  - org.openrewrite.java.migrate.ReferenceCloneMethod
  - org.openrewrite.java.migrate.ThreadStopDestroy
  - org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod:
      getPeerMethodPattern: java.awt.* getPeer()
      lightweightPeerFQCN: java.awt.peer.LightweightPeer
  - org.openrewrite.scala.migrate.UpgradeScala_2_12
  - org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods:
      getAWTIsWindowsTranslucencyPattern: com.sun.awt.AWTUtilities isTranslucencySupported(com.sun.awt.AWTUtilities.Translucency)
      isWindowOpaquePattern: com.sun.awt.AWTUtilities isWindowOpaque(java.awt.Window)
      isTranslucencyCapablePattern: com.sun.awt.AWTUtilities isTranslucencyCapable(java.awt.GraphicsConfiguration)
      setWindowOpacityPattern: com.sun.awt.AWTUtilities setWindowOpacity(java.awt.Window, float)
      getWindowOpacityPattern: com.sun.awt.AWTUtilities getWindowOpacity(java.awt.Window)
      getWindowShapePattern: com.sun.awt.AWTUtilities getWindowShape(java.awt.Window)
      setComponentMixingCutoutShapePattern: com.sun.awt.AWTUtilities setComponentMixingCutoutShape(java.awt.Component,java.awt.Shape)
  - org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods:
      localizedInputStreamMethodMatcher: java.lang.Runtime getLocalizedInputStream(java.io.InputStream)
      localizedOutputStreamMethodMatcher: java.lang.Runtime getLocalizedOutputStream(java.io.OutputStream)
  - org.openrewrite.java.migrate.ArrayStoreExceptionToTypeNotPresentException
  - org.openrewrite.java.migrate.IllegalArgumentExceptionToAlreadyConnectedException
  - org.openrewrite.java.migrate.ChangeDefaultKeyStore

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
    activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
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
        activeRecipe("org.openrewrite.java.migrate.Java8toJava11")
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
            <recipe>org.openrewrite.java.migrate.Java8toJava11</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.Java8toJava11 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Java8toJava11
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.Java8toJava11" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
Chuka Obinabo, Anu Ramamoorthy, BhavanaPidapa, [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Tyler Van Gorder, Adam Slaski, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), Aaron Gershman, Daryl Robbins, [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Shannon Pamperl](mailto:shanman190@gmail.com), [Niels de Bruin](mailto:nielsdebruin@gmail.com), Cathy, Josh Soref, Kun Li
