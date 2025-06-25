---
sidebar_label: "Migrate to Spring Boot 3.4 (Community Edition)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Spring Boot 3.4 (Community Edition)

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_4**

_Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-34.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Boot 3.3](../../../java/spring/boot3/upgradespringboot_3_3)
* [Migrate to Spring Framework 6.2](../../../java/spring/framework/upgradespringframework_6_2)
* [Migrate to Spring Cloud 2024](../../../java/spring/cloud2024/upgradespringcloud_2024)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.4.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-maven-plugin`
  * newVersion: `3.4.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.2.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.4.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `3.4.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springdoc`
  * artifactId: `*`
  * newVersion: `2.8.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.webjars`
  * oldArtifactId: `webjars-locator-core`
  * newGroupId: `org.webjars`
  * newArtifactId: `webjars-locator-lite`
  * newVersion: `1.0.x`
* [Replace deprecated setters in `RestTemplateBuilder`](../../../java/spring/boot3/replaceresttemplatebuildermethods)
* [Add `@Valid` to nested properties in `@ConfigurationProperties`](../../../java/spring/boot3/addvalidtonestedconfigproperties)
* [Upgrade to SpringDoc 2.8](../../../java/springdoc/upgradespringdoc_2_8)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4
displayName: Migrate to Spring Boot 3.4
description: |
  Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_3
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_2
  - org.openrewrite.java.spring.cloud2024.UpgradeSpringCloud_2024
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: "*"
      newVersion: 3.4.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-maven-plugin
      newVersion: 3.4.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: "*"
      newVersion: 6.2.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 3.4.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springdoc
      artifactId: "*"
      newVersion: 2.8.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.webjars
      oldArtifactId: webjars-locator-core
      newGroupId: org.webjars
      newArtifactId: webjars-locator-lite
      newVersion: 1.0.x
  - org.openrewrite.java.spring.boot3.ReplaceRestTemplateBuilderMethods
  - org.openrewrite.java.spring.boot3.AddValidToNestedConfigProperties
  - org.openrewrite.java.springdoc.UpgradeSpringDoc_2_8

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4")
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
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeSpringBoot_3_4
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4" />

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
[Knut Wannheden](mailto:knut@moderne.io), Tyler Van Gorder, ashakirin, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), [Sam Snyder](mailto:sam@moderne.io), Chuka Obinabo, [Laurens Westerlaken](mailto:laurens.w@live.nl), Kun Li, [Jonathan Schneider](mailto:jkschneider@gmail.com), Anu Ramamoorthy, Simon Zilliken, Patrick Way, Cathy, [traceyyoshima](mailto:tracey.yoshima@gmail.com), [steve-aom-elliott](mailto:steve@moderne.io), [qwtfps](mailto:qwtfps@163.com), pdesprez, SiBorea, [Aaron Gershman](mailto:aegershman@gmail.com), [Niels de Bruin](mailto:nielsdebruin@gmail.com), [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Guillaume Husta](mailto:guillaume.husta@gmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), Kushank24, [Marcin Słowiak](mailto:m.slowiak@smartrecruiters.com), [Andrii Rodionov](mailto:andrii@moderne.io), [Curtis](mailto:curtis@mail.ustc.edu.cn), [Melloware](mailto:mellowaredev@gmail.com), [Kun Li](mailto:kun@moderne.io), 123Haynes, BhavanaPidapa, [Jente Sondervorst](mailto:jentesondervorst@gmail.com), Evie Lau, [Kevin McCarpenter](mailto:kevin@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Marcin Słowiak](mailto:marcin.slowiak.007@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Andrii Rodionov](mailto:andrey.rodionov@gmail.com), Michel Gonzalez, Fabian Krüger, [Johannes Jank](mailto:johannes.wengert@googlemail.com), Adam Slaski, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Aaron Gershman, Daryl Robbins, ranuradh, nbruno, [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [adammak](mailto:maka9@mcmaster.ca), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Greg Adams](mailto:gadams@gmail.com), Sandeep Nagaraj, [Matthias Klauer](mailto:matthias.klauer@sap.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [BoykoAlex](mailto:aboyko@pivotal.io), Anshuman Mishra, Tyler Van Gorder, [Greg Adams](mailto:greg@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), Josh Soref, [Laurens Westerlaken](mailto:laurens.westerlaken@moderne.io), Adriano Machado, John Burns, Aakarshit Uppal, BramliAK, [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), eocantu, [Benjamin Muschko](mailto:benjamin.muschko@gmail.com), [Mckinney, Nicholas](mailto:mckinneynicholas@gmail.com), [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de), [Avneesh Dubey](mailto:avneeshdubey1198@gmail.com), rob-valor, [JohannisK](mailto:johan.kragt@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com)
