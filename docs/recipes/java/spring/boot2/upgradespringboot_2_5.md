---
sidebar_label: "Upgrade to Spring Boot 2.5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Spring Boot 2.5

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_5**

_Upgrade to Spring Boot 2.5 from any prior 2.x version._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Boot 2.4](../../../java/spring/boot2/upgradespringboot_2_4)
* [Migrate to Spring Data 2.5](../../../java/spring/data/upgradespringdata_2_5)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.5.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-maven-plugin`
  * newVersion: `2.5.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.5.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `2.5.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion)
  * pluginIdPattern: `io.spring.dependency-management`
  * newVersion: `1.0.x`
* [Update Gradle wrapper](../../../gradle/updategradlewrapper)
  * version: `^6.8`
  * addIfMissing: `false`
* [Migrate flyway and liquibase credentials](../../../java/spring/boot2/migratedatabasecredentials)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `mysql`
  * oldArtifactId: `mysql-connector-java`
  * newGroupId: `com.mysql`
  * newArtifactId: `mysql-connector-j`
  * newVersion: `8.0.x`
* [Migrate deprecated `ActuatorMediaType` to `ApiVersion#getProducedMimeType`](../../../java/spring/boot2/migrateactuatormediatypetoapiversion)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.ResourceProperties`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.WebProperties$Resources`
* [Migrate Spring Boot properties to 2.5](../../../java/spring/boot2/springbootproperties_2_5)
* [Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`](../../../java/spring/boot2/databasecomponentandbeaninitializationordering)
* [Upgrade MyBatis to Spring Boot 2.5](../../../java/spring/boot3/upgrademybatistospringboot_2_5)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
displayName: Upgrade to Spring Boot 2.5
description: |
  Upgrade to Spring Boot 2.5 from any prior 2.x version.
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
  - org.openrewrite.java.spring.data.UpgradeSpringData_2_5
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: "*"
      newVersion: 2.5.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-maven-plugin
      newVersion: 2.5.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.5.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 2.5.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.spring.dependency-management
      newVersion: 1.0.x
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: ^6.8
      addIfMissing: false
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: mysql
      oldArtifactId: mysql-connector-java
      newGroupId: com.mysql
      newArtifactId: mysql-connector-j
      newVersion: 8.0.x
  - org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.ResourceProperties
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.WebProperties$Resources
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_5
  - org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering
  - org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_5

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
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")
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
        activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")
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
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeSpringBoot_2_5
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5" />

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

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
Tyler Van Gorder, ashakirin, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Patrick Way, [Aaron Gershman](mailto:aegershman@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Jente Sondervorst](mailto:jentesondervorst@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Laurens Westerlaken](mailto:laurens.w@live.nl), SiBorea, Fabian Krüger, Kun Li, nbruno, [Shannon Pamperl](mailto:shanman190@gmail.com), [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Kun Li](mailto:kun@moderne.io), Tyler Van Gorder, [Niels de Bruin](mailto:nielsdebruin@gmail.com), Aaron Gershman, Josh Soref, [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Mckinney, Nicholas](mailto:mckinneynicholas@gmail.com), eocantu
