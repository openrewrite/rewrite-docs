---
sidebar_label: "Find plain text secrets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find plain text secrets

**org.openrewrite.java.search.FindSecrets**

_Find secrets stored in plain text in code._

### Tags

* security

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/resources/META-INF/rewrite/find-plaintext-secrets.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Find within comments and literals](../../java/search/findcomments)
  * patterns: `[(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}), -----BEGIN RSA PRIVATE KEY-----, -----BEGIN DSA PRIVATE KEY-----, -----BEGIN EC PRIVATE KEY-----, -----BEGIN PGP PRIVATE KEY BLOCK-----, ((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}), amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}, AKIA[0-9A-Z]{16}, da2-[a-z0-9]{26}, EAACEdEose0cBA[0-9A-Za-z]+, [fF][aA][cC][eE][bB][oO][oO][kK].*['|"][0-9a-f]{32}['|"], [gG][iI][tT][hH][uU][bB].*['|"][0-9a-zA-Z]{35,40}['|"], [aA][pP][iI]_?[kK][eE][yY].*['|"][0-9a-zA-Z]{32,45}['|"], [sS][eE][cC][rR][eE][tT].*['|"][0-9a-zA-Z]{32,45}['|"], AIza[0-9A-Za-z\-_]{35}, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, "type": "service_account", AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, ya29\.[0-9A-Za-z\-_]+, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, [hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}, [0-9a-f]{32}-us[0-9]{1,2}, key-[0-9a-zA-Z]{32}, [a-zA-Z]{3,10}://[^/\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["'\s], access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}, sk_live_[0-9a-z]{32}, https://hooks\.slack\.com/services/T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}, sk_live_[0-9a-zA-Z]{24}, rk_live_[0-9a-zA-Z]{24}, sq0atp-[0-9A-Za-z\-_]{22}, sq0csp-[0-9A-Za-z\-_]{43}, [0-9]+:AA[0-9A-Za-z\-_]{33}, SK[0-9a-fA-F]{32}, [tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}, [tT][wW][iI][tT][tT][eE][rR].*['|"][0-9a-zA-Z]{35,44}['|"]]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.search.FindSecrets
displayName: Find plain text secrets
description: |
  Find secrets stored in plain text in code.
tags:
  - security
recipeList:
  - org.openrewrite.java.search.FindComments:
      patterns: [(xox[pboa]-[0-9]{12}-[0-9]{12}-[0-9]{12}-[a-z0-9]{32}), -----BEGIN RSA PRIVATE KEY-----, -----BEGIN DSA PRIVATE KEY-----, -----BEGIN EC PRIVATE KEY-----, -----BEGIN PGP PRIVATE KEY BLOCK-----, ((?:A3T[A-Z0-9]|AKIA|AGPA|AIDA|AROA|AIPA|ANPA|ANVA|ASIA)[A-Z0-9]{16}), amzn\.mws\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}, AKIA[0-9A-Z]{16}, da2-[a-z0-9]{26}, EAACEdEose0cBA[0-9A-Za-z]+, [fF][aA][cC][eE][bB][oO][oO][kK].*['|"][0-9a-f]{32}['|"], [gG][iI][tT][hH][uU][bB].*['|"][0-9a-zA-Z]{35,40}['|"], [aA][pP][iI]_?[kK][eE][yY].*['|"][0-9a-zA-Z]{32,45}['|"], [sS][eE][cC][rR][eE][tT].*['|"][0-9a-zA-Z]{32,45}['|"], AIza[0-9A-Za-z\-_]{35}, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, "type": "service_account", AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, ya29\.[0-9A-Za-z\-_]+, AIza[0-9A-Za-z\-_]{35}, [0-9]+-[0-9A-Za-z_]{32}\.apps\.googleusercontent\.com, [hH][eE][rR][oO][kK][uU].*[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}, [0-9a-f]{32}-us[0-9]{1,2}, key-[0-9a-zA-Z]{32}, [a-zA-Z]{3,10}://[^/\s:@]{3,20}:[^/\s:@]{3,20}@.{1,100}["'\s], access_token\$production\$[0-9a-z]{16}\$[0-9a-f]{32}, sk_live_[0-9a-z]{32}, https://hooks\.slack\.com/services/T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}, sk_live_[0-9a-zA-Z]{24}, rk_live_[0-9a-zA-Z]{24}, sq0atp-[0-9A-Za-z\-_]{22}, sq0csp-[0-9A-Za-z\-_]{43}, [0-9]+:AA[0-9A-Za-z\-_]{33}, SK[0-9a-fA-F]{32}, [tT][wW][iI][tT][tT][eE][rR].*[1-9][0-9]+-[0-9a-zA-Z]{40}, [tT][wW][iI][tT][tT][eE][rR].*['|"][0-9a-zA-Z]{35,44}['|"]]

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.search.FindSecrets")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
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
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.search.FindSecrets")
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
            <recipe>org.openrewrite.java.search.FindSecrets</recipe>
          </activeRecipes>
        </configuration>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.java.search.FindSecrets -Drewrite.exportDatatables=true
```

</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindSecrets
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.search.FindSecrets" />

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
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
