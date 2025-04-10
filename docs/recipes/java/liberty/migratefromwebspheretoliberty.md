---
sidebar_label: "Migrate from WebSphere traditional to Liberty"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from WebSphere traditional to Liberty

**org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty**

_Use this category of rules to identify code changes needed when migrating from WebSphere Application Server traditional to Liberty._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Removes invalid JNDI properties](../../java/liberty/removewas2libertynonportablejndilookup)
* [Use `getProperty("wlp.server.name")`](../../java/liberty/servername)
* [Use `getSSOCookieFromSSOToken` and `logout`](../../java/liberty/websphereunavailablessomethods)
* [Use correct application namespace values](../../xml/liberty/appddnamespacerule)
* [Use correct connector namespace values](../../xml/liberty/connectorddnamespacerule)
* [Use correct ejb-jar namespace values](../../xml/liberty/ejbddnamespacerule)
* [Move persistence.xml file](../../xml/liberty/persistencexmllocationrule)
* [Use correct web-app namespace values](../../xml/liberty/webddnamespacerule)
* [Add Liberty Maven plugin](../../maven/liberty/addopenlibertyplugin)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty
displayName: Migrate from WebSphere traditional to Liberty
description: |
  Use this category of rules to identify code changes needed when migrating from WebSphere Application Server traditional to Liberty.
recipeList:
  - org.openrewrite.java.liberty.RemoveWas2LibertyNonPortableJndiLookup
  - org.openrewrite.java.liberty.ServerName
  - org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods
  - org.openrewrite.xml.liberty.AppDDNamespaceRule
  - org.openrewrite.xml.liberty.ConnectorDDNamespaceRule
  - org.openrewrite.xml.liberty.EJBDDNamespaceRule
  - org.openrewrite.xml.liberty.PersistenceXmlLocationRule
  - org.openrewrite.xml.liberty.WebDDNamespaceRule
  - org.openrewrite.maven.liberty.AddOpenLibertyPlugin

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-liberty` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-liberty:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-liberty:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty")
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
            <recipe>org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-liberty</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-liberty:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateFromWebSphereToLiberty
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-liberty:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty" />

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
[Tim te Beek](mailto:tim@moderne.io), [cjobinabo](mailto:chukaobinabo@gmail.com), Chuka Obinabo, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [anuram](mailto:ranuradh@us.ibm.com)
