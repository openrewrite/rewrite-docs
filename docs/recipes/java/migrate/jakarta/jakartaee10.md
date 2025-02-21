---
sidebar_label: "Migrate to Jakarta EE 10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Jakarta EE 10

**org.openrewrite.java.migrate.jakarta.JakartaEE10**

_These recipes help with the Migration to Jakarta EE 10, flagging and updating deprecated methods._

### Tags

* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license/).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta)
* [Migrate Jakarta EE 9 api dependencies to Jakarta EE 10 versions](../../../java/migrate/jakarta/migrationtojakarta10apis)
* [JSF 2.x to Jakarta Faces 4.x](../../../java/migrate/jakarta/faces2xmigrationtojakarta4x)
* [Use `isParametersProvided()`](../../../java/migrate/jakarta/removedisparmetersprovidedmethod)
* [Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`](../../../java/migrate/jakarta/removedsoapelementfactory)
* [Replace `doUpgrade(..)` with `ServerContainer.upgradeHttpToWebSocket(..)`](../../../java/migrate/jakarta/wswsocservercontainerdeprecation)
* [Remove `getComment` and `getVersion` methods](../../../java/migrate/jakarta/servletcookiebehaviorchangerfc6265)
* [Replace  deprecated Jakarta Servlet methods and classes](../../../java/migrate/jakarta/removalsservletjakarta10)
* [Remove deprecated API's not supported in CDI4.0](../../../java/migrate/jakarta/deprecatedcdiapisremoved40)
* [Behavior change to bean discovery in modules with `beans.xml` file with no version specified](../../../java/migrate/beandiscovery)
* [Migrate Bean Validation messages](../../../java/migrate/jakarta/beanvalidationmessages)
* [Migrate xmlns entries in `beans.xml` files](../../../java/migrate/jakarta/javaxbeansxmltojakartabeansxml)
* [Migrate xmlns entries and javax. packages in `ejb-jar.xml` files](../../../java/migrate/jakarta/javaxejbjarxmltojakartaejbjarxml)
* [Migrate xmlns entries and javax. packages in `validation.xml` files](../../../java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml)
* [Rename CDI Extension to Jakarta](../../../java/migrate/jakarta/javaxtojakartacdiextensions)
* [Update Jakarta EE Platform Dependencies to 10.0.0](../../../java/migrate/jakarta/updatejakartaplatform10)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JakartaEE10
displayName: Migrate to Jakarta EE 10
description: |
  These recipes help with the Migration to Jakarta EE 10, flagging and updating deprecated methods.
tags:
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.migrate.jakarta.MigrationToJakarta10Apis
  - org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x
  - org.openrewrite.java.migrate.jakarta.RemovedIsParmetersProvidedMethod
  - org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory
  - org.openrewrite.java.migrate.jakarta.WsWsocServerContainerDeprecation
  - org.openrewrite.java.migrate.jakarta.ServletCookieBehaviorChangeRFC6265
  - org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10
  - org.openrewrite.java.migrate.jakarta.DeprecatedCDIAPIsRemoved40
  - org.openrewrite.java.migrate.BeanDiscovery
  - org.openrewrite.java.migrate.jakarta.BeanValidationMessages
  - org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml
  - org.openrewrite.java.migrate.jakarta.JavaxEjbJarXmlToJakartaEjbJarXml
  - org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml
  - org.openrewrite.java.migrate.jakarta.JavaxToJakartaCdiExtensions
  - org.openrewrite.java.migrate.jakarta.UpdateJakartaPlatform10

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
    activeRecipe("org.openrewrite.java.migrate.jakarta.JakartaEE10")
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
        activeRecipe("org.openrewrite.java.migrate.jakarta.JakartaEE10")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JakartaEE10</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JakartaEE10 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JakartaEE10
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JakartaEE10" />

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
Chuka Obinabo, Anu Ramamoorthy, Evie Lau, ranuradh, [Melloware](mailto:mellowaredev@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
