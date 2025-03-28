---
sidebar_label: "Migrate from JMockit to Mockito"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from JMockit to Mockito

**org.openrewrite.java.testing.jmockit.JMockitToMockito**

_This recipe will apply changes commonly needed when migrating from JMockit to Mockito._

### Tags

* jmockit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/jmockit.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license/).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Rewrite JMockit Expectations, NonStrictExpectations, Verifications, VerificationsInOrder, FullVerifications](../../../java/testing/jmockit/jmockitblocktomockito)
* [Rewrite JMockit MockUp to Mockito statements](../../../java/testing/jmockit/jmockitmockuptomockito)
* [Convert JMockit `@Mocked` and `@Injectable` annotated arguments](../../../java/testing/jmockit/jmockitannotatedargumenttomockito)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `mockit.Mocked`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `mockit.Injectable`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `mockit.Tested`
  * newFullyQualifiedTypeName: `org.mockito.InjectMocks`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `mockit.integration.junit5.JMockitExtension`
  * newFullyQualifiedTypeName: `org.mockito.junit.jupiter.MockitoExtension`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `mockit.integration.junit4.JMockit`
  * newFullyQualifiedTypeName: `org.mockito.junit.MockitoJUnitRunner`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.mockito`
  * artifactId: `mockito-core`
  * version: `5.x`
  * onlyIfUsing: `org.mockito.*`
  * acceptTransitive: `true`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.jmockit`
  * artifactId: `jmockit`
* [Exclude Maven dependency](../../../maven/excludedependency)
  * groupId: `org.jmockit`
  * artifactId: `jmockit`
* [Mockito best practices](../../../java/testing/mockito/mockitobestpractices)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.jmockit.JMockitToMockito
displayName: Migrate from JMockit to Mockito
description: |
  This recipe will apply changes commonly needed when migrating from JMockit to Mockito.
tags:
  - jmockit
  - testing
recipeList:
  - org.openrewrite.java.testing.jmockit.JMockitBlockToMockito
  - org.openrewrite.java.testing.jmockit.JMockitMockUpToMockito
  - org.openrewrite.java.testing.jmockit.JMockitAnnotatedArgumentToMockito
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.Mocked
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.Injectable
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.Tested
      newFullyQualifiedTypeName: org.mockito.InjectMocks
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.integration.junit5.JMockitExtension
      newFullyQualifiedTypeName: org.mockito.junit.jupiter.MockitoExtension
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.integration.junit4.JMockit
      newFullyQualifiedTypeName: org.mockito.junit.MockitoJUnitRunner
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.mockito
      artifactId: mockito-core
      version: 5.x
      onlyIfUsing: org.mockito.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.jmockit
      artifactId: jmockit
  - org.openrewrite.maven.ExcludeDependency:
      groupId: org.jmockit
      artifactId: jmockit
  - org.openrewrite.java.testing.mockito.MockitoBestPractices

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.jmockit.JMockitToMockito")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.jmockit.JMockitToMockito")
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
            <recipe>org.openrewrite.java.testing.jmockit.JMockitToMockito</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.jmockit.JMockitToMockito -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JMockitToMockito
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.jmockit.JMockitToMockito" />

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
SiBorea, [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Greg Oledzki](mailto:greg.oledzki@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Shivani Sharma](mailto:s.happyrose@gmail.com), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Greg Adams](mailto:gadams@gmail.com), [Matthias Klauer](mailto:matthias.klauer@sap.com), [Jente Sondervorst](mailto:jentesondervorst@gmail.com), [Sander Knauff](mailto:sanderknauff@hotmail.com), Patrick Way, [tinder-dthomson](mailto:devin.thomson@gotinder.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:greg@moderne.io), John Burns, [Patrick](mailto:patway99@gmail.com), [Adam Birem](mailto:adam.birem@praxedo.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [gideon-sunbit](mailto:gideon.pertzov@sunbit.com), [Sam Snyder](mailto:sam@moderne.io), [Niels de Bruin](mailto:nielsdebruin@gmail.com), [Laurens Westerlaken](mailto:laurens.w@live.nl), Josh Soref, [Tim te Beek](mailto:timtebeek@gmail.com), Aaron Gershman
