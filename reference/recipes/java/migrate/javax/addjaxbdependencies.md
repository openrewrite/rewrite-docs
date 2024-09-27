# Add explicit JAXB dependencies

**org.openrewrite.java.migrate.javax.AddJaxbDependencies**

_This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well._

### Tags

* jaxb
* glassfish
* javax
* java11
* jakarta

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-11.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.26.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.26.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Remove Maven managed dependency](../../../maven/removemanageddependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid.md)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `2.3.x`
  * onlyIfUsing: `javax.xml.bind..*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Use latest JAXB API and runtime for Jakarta EE 8](../../../java/migrate/javax/addjaxbruntime.md)
  * runtime: `glassfish`
* [Remove redundant explicit dependency and plugin versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `org.glassfish.jaxb`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Remove redundant explicit dependency and plugin versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `com.sun.xml.bind`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Remove redundant explicit dependency and plugin versions](../../../maven/removeredundantdependencyversions.md)
  * groupPattern: `jakarta.xml.bind`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.codehaus.mojo`
  * artifactId: `jaxb2-maven-plugin`
  * newVersion: `2.5.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxbDependencies
displayName: Add explicit JAXB dependencies
description: This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well.
tags:
  - jaxb
  - glassfish
  - javax
  - java11
  - jakarta
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 2.3.x
      onlyIfUsing: javax.xml.bind..*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime:
      runtime: glassfish
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: org.glassfish.jaxb
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: com.sun.xml.bind
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: jakarta.xml.bind
      artifactPattern: *
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: jaxb2-maven-plugin
      newVersion: 2.5.x

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.26.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxbDependencies")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.26.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.26.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.javax.AddJaxbDependencies")
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.AddJaxbDependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.26.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.AddJaxbDependencies -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddJaxbDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddJaxbDependencies)

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

