---
sidebar_label: "OWASP top ten"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OWASP top ten

**io.moderne.devcenter.SecurityStarter**

_This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs. For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/)._

## Recipe source

[GitHub](https://github.com/moderneinc/rewrite-devcenter/blob/main/src/main/resources/META-INF/rewrite/devcenter-starter.yml), 
[Issue Tracker](https://github.com/moderneinc/rewrite-devcenter/issues), 
[Maven Central](https://central.sonatype.com/artifact/io.moderne.recipe/rewrite-devcenter/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remediate OWASP A01:2021 Broken access control](../java/security/owaspa01)
* [Remediate OWASP A02:2021 Cryptographic failures](../java/security/owaspa02)
* [Remediate OWASP A03:2021 Injection](../java/security/owaspa03)
* [Remediate OWASP A08:2021 Software and data integrity failures](../java/security/owaspa08)
* [Regular Expression Denial of Service (ReDOS)](../java/security/regularexpressiondenialofservice)
* [Zip slip](../java/security/zipslip)
* [Use secure temporary file creation](../java/security/securetempfilecreation)
* [Report as security issues](../devcenter/reportassecurityissues)
  * fixRecipe: `org.openrewrite.java.security.OwaspTopTen`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.moderne.devcenter.SecurityStarter
displayName: OWASP top ten
description: |
  This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs. For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/).
recipeList:
  - org.openrewrite.java.security.OwaspA01
  - org.openrewrite.java.security.OwaspA02
  - org.openrewrite.java.security.OwaspA03
  - org.openrewrite.java.security.OwaspA08
  - org.openrewrite.java.security.RegularExpressionDenialOfService
  - org.openrewrite.java.security.ZipSlip
  - org.openrewrite.java.security.SecureTempFileCreation
  - io.moderne.devcenter.ReportAsSecurityIssues:
      fixRecipe: org.openrewrite.java.security.OwaspTopTen

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [DevCenter](/recipes/devcenter/devcenterstarter.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `io.moderne.recipe:rewrite-devcenter` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("io.moderne.devcenter.SecurityStarter")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}")
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
        rewrite("io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}")
    }
    rewrite {
        activeRecipe("io.moderne.devcenter.SecurityStarter")
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
            <recipe>io.moderne.devcenter.SecurityStarter</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>io.moderne.recipe</groupId>
            <artifactId>rewrite-devcenter</artifactId>
            <version>{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=io.moderne.recipe:rewrite-devcenter:RELEASE -Drewrite.activeRecipes=io.moderne.devcenter.SecurityStarter -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SecurityStarter
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-devcenter:{{VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.devcenter.SecurityStarter" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.table.MethodCalls" label="MethodCalls">

### Method calls
**org.openrewrite.java.table.MethodCalls**

_The text of matching method invocations._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Method call | The text of the method call. |
| Class name | The class name of the method call. |
| Method name | The method name of the method call. |
| Argument types | The argument types of the method call. |

</TabItem>

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

<TabItem value="io.moderne.devcenter.table.SecurityIssues" label="SecurityIssues">

### Security issues
**io.moderne.devcenter.table.SecurityIssues**

_Security issues in the repository._

| Column Name | Description |
| ----------- | ----------- |
| Ordinal | The ordinal position of this issue relative to other issues. |
| Issue name | The name of the security issue. |

</TabItem>

</Tabs>

## Contributors
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), Bryce Tompkins, [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Kun Li](mailto:kun@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), [Scott Jungling](mailto:scott@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
