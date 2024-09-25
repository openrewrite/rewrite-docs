# JSF 2.x to Jakarta Faces 4.x

**org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x**

_Jakarta EE 10 uses Faces 4.0 a major upgrade to Jakarta packages and XML namespaces._

### Tags

* faces
* jsf
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-faces-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.24.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.24.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Faces XHTML migration for Jakarta EE 10](../../../java/migrate/jakarta/jakartafacesxhtml.md)
* [Migrate JSF values inside EcmaScript files](../../../java/migrate/jakarta/jakartafacesecmascript.md)
* [Migrate xmlns entries in `faces-config.xml` files](../../../java/migrate/jakarta/javaxfacesconfigxmltojakartafacesconfigxml.md)
* [Migrate xmlns entries in `taglib.xml` files](../../../java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml.md)
* [Migrate xmlns entries in `web-fragment.xml` files](../../../java/migrate/jakarta/javaxwebfragmentxmltojakartawebfragmentxml.md)
* [Migrate xmlns entries in `web.xml` files](../../../java/migrate/jakarta/javaxwebxmltojakartawebxml.md)
* [JNDI name `jsf/ClientSideSecretKey` has been renamed to `faces/ClientSideSecretKey`, and the `jsf/FlashSecretKey` JNDI name has been renamed to `faces/FlashSecretKey`](../../../java/migrate/jakarta/facesjndinameschanged.md)
* [Use `jakarta.el` instead of `jakarta.faces.el` and `javax.faces.el`](../../../java/migrate/jakarta/removedjakartafacesexpressionlanguageclasses.md)
* [Replace `ResourceResolver` with `ResourceHandler`](../../../java/migrate/jakarta/removedjakartafacesresourceresolver.md)
* [Use `StateManagementStrategy`](../../../java/migrate/jakarta/removedstatemanagermethods.md)
* [Replace `CURRENT_COMPONENT` and `CURRENT_COMPOSITE_COMPONENT` with `getCurrentComponent()` and `getCurrentCompositeComponent()`](../../../java/migrate/jakarta/removeduicomponentconstant.md)
* [Substitute deprecated Faces Managed Beans](../../../java/migrate/jakarta/facesmanagedbeansremoved.md)
* [Upgrade Faces open source libraries](../../../java/migrate/jakarta/upgradefacesopensourcelibraries.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x
displayName: JSF 2.x to Jakarta Faces 4.x
description: Jakarta EE 10 uses Faces 4.0 a major upgrade to Jakarta packages and XML namespaces.
tags:
  - faces
  - jsf
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.jakarta.JakartaFacesXhtml
  - org.openrewrite.java.migrate.jakarta.JakartaFacesEcmaScript
  - org.openrewrite.java.migrate.jakarta.JavaxFacesConfigXmlToJakartaFacesConfigXml
  - org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml
  - org.openrewrite.java.migrate.jakarta.JavaxWebFragmentXmlToJakartaWebFragmentXml
  - org.openrewrite.java.migrate.jakarta.JavaxWebXmlToJakartaWebXml
  - org.openrewrite.java.migrate.jakarta.FacesJNDINamesChanged
  - org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesExpressionLanguageClasses
  - org.openrewrite.java.migrate.jakarta.RemovedJakartaFacesResourceResolver
  - org.openrewrite.java.migrate.jakarta.RemovedStateManagerMethods
  - org.openrewrite.java.migrate.jakarta.RemovedUIComponentConstant
  - org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved
  - org.openrewrite.java.migrate.jakarta.UpgradeFacesOpenSourceLibraries

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.24.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.24.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.24.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x")
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.24.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Faces2xMigrationToJakarta4x
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x)

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

