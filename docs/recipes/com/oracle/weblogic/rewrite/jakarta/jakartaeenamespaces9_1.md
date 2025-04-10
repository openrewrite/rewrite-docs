---
sidebar_label: "Migrate from JavaX to Jakarta EE 9.1 Namespaces"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from JavaX to Jakarta EE 9.1 Namespaces

**com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9\_1**

_These recipes help with Migration From JavaX to Jakarta EE 9.1 Namespaces._

### Tags

* jakartaee
* weblogic
* migration
* jakarta
* namespaces

## Recipe source

[GitHub](https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate xmlns entries in `handler.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxwebhandlerxmltojakarta9handlerxml)
* [Migrate xmlns entries in `batch.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxbatchxmltojakarta9batchxml)
* [Migrate xmlns entries in `beans.xml` files for Beans 3.0.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxbeansxmltojakarta9beansxml)
* [Migrate xmlns entries in `**/batch-jobs/*.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxbatchjobsxmlstojakarta9batchjobsxmls)
* [Migrate xmlns entries in `application.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxapplicationxmltojakarta9applicationxml)
* [Migrate xmlns entries in `application-client.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxapplicationclientxmltojakarta9applicationclientxml)
* [Migrate xmlns entries in `ra.xml` files (Connectors).](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxraxmltojakarta9raxml)
* [Migrate xmlns entries in `ejb-jar.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxejbjarxmltojakarta9ejbjarxml)
* [Migrate xmlns entries in `webservices.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxwebservicesxmltojakarta9webservicesxml)
* [Migrate xmlns entries in `permissions.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxpermissionsxmltojakarta9permissionsxml)
* [Migrate xmlns entries in `*.tld` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxwebjsptaglibrarytldstojakarta9webjsptaglibrarytlds)
* [Migrate xmlns entries in `*.xjb` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxbindingsschemaxjbstojakarta9bindingsschemaxjbs)
* [Migrate xmlns entries in `**/validation/*.xml` files.](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxvalidationmappingxmlstojakarta9validationmappingxmls)
* [Migrate xmlns entries and javax. packages in `validation.xml` files](../../../../../java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml)
* [Migrate xmlns entries in `test-*.xml` files for Jakarta EE 9.1 using test interfaces](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxtestxmlstojakartatestsxmls)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1
displayName: Migrate from JavaX to Jakarta EE 9.1 Namespaces
description: |
  These recipes help with Migration From JavaX to Jakarta EE 9.1 Namespaces.
tags:
  - jakartaee
  - weblogic
  - migration
  - jakarta
  - namespaces
recipeList:
  - com.oracle.weblogic.rewrite.jakarta.JavaxWebHandlerXmlToJakarta9HandlerXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxBatchXmlToJakarta9BatchXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxBeansXmlToJakarta9BeansXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxBatchJobsXmlsToJakarta9BatchJobsXmls
  - com.oracle.weblogic.rewrite.jakarta.JavaxApplicationXmlToJakarta9ApplicationXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxApplicationClientXmlToJakarta9ApplicationClientXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxRaXmlToJakarta9RaXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxEjbJarXmlToJakarta9EjbJarXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxWebServicesXmlToJakarta9WebServicesXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxPermissionsXmlToJakarta9PermissionsXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxWebJspTagLibraryTldsToJakarta9WebJspTagLibraryTlds
  - com.oracle.weblogic.rewrite.jakarta.JavaxBindingsSchemaXjbsToJakarta9BindingsSchemaXjbs
  - com.oracle.weblogic.rewrite.jakarta.JavaxValidationMappingXmlsToJakarta9ValidationMappingXmls
  - org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxTestXmlsToJakartaTestsXmls

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1")
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
            <recipe>com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JakartaEeNamespaces9_1
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.jakarta.JakartaEeNamespaces9_1" />

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

