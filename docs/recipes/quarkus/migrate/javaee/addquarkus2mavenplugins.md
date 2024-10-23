---
sidebar_label: "Migrate JavaEE Maven Dependencies to Quarkus 2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate JavaEE Maven Dependencies to Quarkus 2

**org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins**

_Upgrade Standard JavaEE dependencies to Quarkus 2 dependencies._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/javaee7-to-quarkus.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/2.9.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 2.9.2

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add managed Maven dependency](../../../maven/addmanageddependency)
  * groupId: `io.quarkus.platform`
  * artifactId: `quarkus-bom`
  * version: `2.x`
  * scope: `import`
  * type: `pom`
* [Add Maven plugin](../../../maven/addplugin)
  * groupId: `io.quarkus.platform`
  * artifactId: `quarkus-maven-plugin`
  * version: `2.16.12.Final`
  * executions: `<executions><execution><goals><goal>build</goal><goal>generate-code</goal><goal>generate-code-tests</goal></goals></execution></executions>`
* [Add Maven plugin](../../../maven/addplugin)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-compiler-plugin`
  * version: `3.13.0`
  * configuration: `<configuration><compilerArgs><arg>-parameters</arg></compilerArgs></configuration>`
* [Add Maven plugin](../../../maven/addplugin)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-plugin`
  * version: `3.3.1`
  * configuration: `<configuration><systemPropertyVariables><java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager><maven.home>${maven.home}</maven.home></systemPropertyVariables></configuration>`
* [Add Maven plugin](../../../maven/addplugin)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-failsafe-plugin`
  * version: `3.3.1`
  * configuration: `<configuration><systemPropertyVariables><native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path><java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager><maven.home>${maven.home}</maven.home></systemPropertyVariables></configuration>`
  * executions: `<executions><execution><goals><goal>integration-test</goal><goal>verify</goal></goals></execution></executions>`
* [Add Maven profile](../../../maven/addprofile)
  * id: `native`
  * activation: `<activation><property><name>native</name></property></activation>`
  * properties: `<properties><skipITs>false</skipITs><quarkus.package.type>native</quarkus.package.type></properties>`
* [Configure `quarkus-maven-plugin` with reasonable defaults](../../../quarkus/configurequarkusmavenpluginwithreasonabledefaults)
* [Apache Maven best practices](../../../maven/bestpractices)
* [Add Maven project property](../../../maven/addproperty)
  * key: `maven.compiler.source`
  * value: `11`
* [Add Maven project property](../../../maven/addproperty)
  * key: `maven.compiler.target`
  * value: `11`
* [Set Maven project packaging](../../../maven/changepackaging)
  * groupId: `*`
  * artifactId: `*`
  * packaging: `jar`
* [Remove Maven plugin](../../../maven/removeplugin)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-war-plugin`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins
displayName: Migrate JavaEE Maven Dependencies to Quarkus 2
description: Upgrade Standard JavaEE dependencies to Quarkus 2 dependencies.
recipeList:
  - org.openrewrite.maven.AddManagedDependency:
      groupId: io.quarkus.platform
      artifactId: quarkus-bom
      version: 2.x
      scope: import
      type: pom
  - org.openrewrite.maven.AddPlugin:
      groupId: io.quarkus.platform
      artifactId: quarkus-maven-plugin
      version: 2.16.12.Final
      executions: <executions><execution><goals><goal>build</goal><goal>generate-code</goal><goal>generate-code-tests</goal></goals></execution></executions>
  - org.openrewrite.maven.AddPlugin:
      groupId: org.apache.maven.plugins
      artifactId: maven-compiler-plugin
      version: 3.13.0
      configuration: <configuration><compilerArgs><arg>-parameters</arg></compilerArgs></configuration>
  - org.openrewrite.maven.AddPlugin:
      groupId: org.apache.maven.plugins
      artifactId: maven-surefire-plugin
      version: 3.3.1
      configuration: <configuration><systemPropertyVariables><java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager><maven.home>${maven.home}</maven.home></systemPropertyVariables></configuration>
  - org.openrewrite.maven.AddPlugin:
      groupId: org.apache.maven.plugins
      artifactId: maven-failsafe-plugin
      version: 3.3.1
      configuration: <configuration><systemPropertyVariables><native.image.path>${project.build.directory}/${project.build.finalName}-runner</native.image.path><java.util.logging.manager>org.jboss.logmanager.LogManager</java.util.logging.manager><maven.home>${maven.home}</maven.home></systemPropertyVariables></configuration>
      executions: <executions><execution><goals><goal>integration-test</goal><goal>verify</goal></goals></execution></executions>
  - org.openrewrite.maven.AddProfile:
      id: native
      activation: <activation><property><name>native</name></property></activation>
      properties: <properties><skipITs>false</skipITs><quarkus.package.type>native</quarkus.package.type></properties>
  - org.openrewrite.quarkus.ConfigureQuarkusMavenPluginWithReasonableDefaults
  - org.openrewrite.maven.BestPractices
  - org.openrewrite.maven.AddProperty:
      key: maven.compiler.source
      value: 11
  - org.openrewrite.maven.AddProperty:
      key: maven.compiler.target
      value: 11
  - org.openrewrite.maven.ChangePackaging:
      groupId: *
      artifactId: *
      packaging: jar
  - org.openrewrite.maven.RemovePlugin:
      groupId: org.apache.maven.plugins
      artifactId: maven-war-plugin

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus:2.9.2` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.26.0")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:2.9.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.26.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-quarkus:2.9.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins")
        exportDatatables = true
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
        <version>5.43.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.9.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddQuarkus2MavenPlugins
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
[Geoffrey De Smet](mailto:gds.geoffrey.de.smet@gmail.com), [Alex Boyko](mailto:aboyko@vmware.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Aaron Gershman](mailto:aegershman@gmail.com), Tyler Van Gorder, Kun Li, [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut.wannheden@gmail.com)
