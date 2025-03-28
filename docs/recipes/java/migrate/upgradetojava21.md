---
sidebar_label: "Migrate to Java 21"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Java 21

**org.openrewrite.java.migrate.UpgradeToJava21**

_This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21._

### Tags

* java21

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-21.yml), 
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
* [Migrate to Java 17](../../java/migrate/upgradetojava17)
* [Upgrade build to Java 21](../../java/migrate/upgradebuildtojava21)
* [Remove illegal semicolons](../../java/migrate/removeillegalsemicolons)
* [Replace `Thread.resume()`, `Thread.stop()`, and `Thread.suspend()` with `throw new UnsupportedOperationException()`](../../java/migrate/lang/threadstopunsupported)
* [Convert `new URL(String)` to `URI.create(String).toURL()`](../../java/migrate/net/urlconstructortouricreate)
* [Adopt `SequencedCollection`](../../java/migrate/util/sequencedcollection)
* [Prefer `Locale.of(..)` over `new Locale(..)`](../../java/migrate/util/uselocaleof)
* [Replace deprecated `Runtime#exec()` methods](../../staticanalysis/replacedeprecatedruntimeexecmethods)
* [Upgrade `actions/setup-java` `java-version`](../../github/setupjavaupgradejavaversion)
* [Upgrade plugins to Java 21 compatible versions](../../java/migrate/upgradepluginsforjava21)
* [Avoid using the deprecated empty `finalize()` method in `java.desktop`](../../java/migrate/deletedeprecatedfinalize)
* [Adopt `javax.security.auth.Subject.current()` and `javax.security.auth.Subject.callAs()` methods`](../../java/migrate/removedsubjectmethods)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeToJava21
displayName: Migrate to Java 21
description: |
  This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21.
tags:
  - java21
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.migrate.UpgradeBuildToJava21
  - org.openrewrite.java.migrate.RemoveIllegalSemicolons
  - org.openrewrite.java.migrate.lang.ThreadStopUnsupported
  - org.openrewrite.java.migrate.net.URLConstructorToURICreate
  - org.openrewrite.java.migrate.util.SequencedCollection
  - org.openrewrite.java.migrate.util.UseLocaleOf
  - org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods
  - org.openrewrite.github.SetupJavaUpgradeJavaVersion
  - org.openrewrite.java.migrate.UpgradePluginsForJava21
  - org.openrewrite.java.migrate.DeleteDeprecatedFinalize
  - org.openrewrite.java.migrate.RemovedSubjectMethods

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
    activeRecipe("org.openrewrite.java.migrate.UpgradeToJava21")
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
        activeRecipe("org.openrewrite.java.migrate.UpgradeToJava21")
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
            <recipe>org.openrewrite.java.migrate.UpgradeToJava21</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.UpgradeToJava21 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeToJava21
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeToJava21" />

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
Chuka Obinabo, [Tim te Beek](mailto:tim@moderne.io), Anu Ramamoorthy, [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), BhavanaPidapa, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), Tyler Van Gorder, Adam Slaski, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), [karthikNousher](mailto:emailkarthik369@gmail.com), Aaron Gershman, Daryl Robbins, [Patrick](mailto:patway99@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de), [Kun Li](mailto:kun@moderne.io), Aakarshit Uppal, BramliAK, [Shannon Pamperl](mailto:shanman190@gmail.com), eocantu, [Niels de Bruin](mailto:nielsdebruin@gmail.com), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), Kun Li, Josh Soref, [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de)
