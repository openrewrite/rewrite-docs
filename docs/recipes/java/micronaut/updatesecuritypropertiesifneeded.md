---
sidebar_label: "Update relocated Micronaut Security config properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update relocated Micronaut Security config properties

**org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded**

_This recipe will update relocated security config keys in Micronaut configuration property files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/UpdateSecurityPropertiesIfNeeded.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.generator.access-token.expiration`
  * newPropertyKey: `micronaut.security.token.generator.access-token.expiration`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.enabled`
  * newPropertyKey: `micronaut.security.token.cookie.enabled`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-max-age`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-max-age`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-path`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-path`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-domain`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-domain`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-same-site`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-same-site`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `micronaut.security.token.jwt.bearer.enabled`
  * newPropertyKey: `micronaut.security.token.bearer.enabled`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded
displayName: Update relocated Micronaut Security config properties
description: |
  This recipe will update relocated security config keys in Micronaut configuration property files.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.generator.access-token.expiration
      newPropertyKey: micronaut.security.token.generator.access-token.expiration
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.enabled
      newPropertyKey: micronaut.security.token.cookie.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-max-age
      newPropertyKey: micronaut.security.token.cookie.cookie-max-age
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-path
      newPropertyKey: micronaut.security.token.cookie.cookie-path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-domain
      newPropertyKey: micronaut.security.token.cookie.cookie-domain
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-same-site
      newPropertyKey: micronaut.security.token.cookie.cookie-same-site
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.bearer.enabled
      newPropertyKey: micronaut.security.token.bearer.enabled

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Update the Micronaut Security library](/recipes/java/micronaut/updatemicronautsecurity.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
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
        rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded")
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
            <recipe>org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateSecurityPropertiesIfNeeded
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded" />

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

</Tabs>
