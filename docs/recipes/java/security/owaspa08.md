---
sidebar_label: "Remediate OWASP A08:2021 Software and data integrity failures"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remediate OWASP A08:2021 Software and data integrity failures

**org.openrewrite.java.security.OwaspA08**

_OWASP [A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) software and data integrity failures._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-security/blob/main/src/main/resources/META-INF/rewrite/owasp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-java-security/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-security/2.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-security
* version: 2.16.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Insecure JMS deserialization](../../java/security/marshalling/insecurejmsdeserialization)
* [Secure the use of SnakeYAML's constructor](../../java/security/marshalling/securesnakeyamlconstructor)
* [Secure the use of Jackson default typing](../../java/security/marshalling/securejacksondefaulttyping)
* [Find Jackson default type mapping enablement](../../java/security/search/findjacksondefaulttypemapping)
* [Find vulnerable uses of Jackson `@JsonTypeInfo`](../../java/security/search/findvulnerablejacksonjsontypeinfo)
* [Use secure temporary file creation](../../java/security/securetempfilecreation)
* [Find text-direction changes](../../java/security/findtextdirectionchanges)
* [Use `Files#createTempDirectory`](../../java/security/usefilescreatetempdirectory)
* [Enable CSRF attack prevention](../../java/security/spring/csrfprotection)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.security.OwaspA08
displayName: Remediate OWASP A08:2021 Software and data integrity failures
description: OWASP [A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) software and data integrity failures.
recipeList:
  - org.openrewrite.java.security.marshalling.InsecureJmsDeserialization
  - org.openrewrite.java.security.marshalling.SecureSnakeYamlConstructor
  - org.openrewrite.java.security.marshalling.SecureJacksonDefaultTyping
  - org.openrewrite.java.security.search.FindJacksonDefaultTypeMapping
  - org.openrewrite.java.security.search.FindVulnerableJacksonJsonTypeInfo
  - org.openrewrite.java.security.SecureTempFileCreation
  - org.openrewrite.java.security.FindTextDirectionChanges
  - org.openrewrite.java.security.UseFilesCreateTempDirectory
  - org.openrewrite.java.security.spring.CsrfProtection

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-security:2.16.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.security.OwaspA08")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-security:2.16.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-security:2.16.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.security.OwaspA08")
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
        <version>5.46.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.security.OwaspA08</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-security</artifactId>
            <version>2.16.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-security:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.security.OwaspA08 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe OwaspA08
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-security:2.16.0
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.OwaspA08" />

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
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Leitschuh](mailto:Jonathan.Leitschuh@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kun Li](mailto:kun@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Scott Jungling](mailto:scott@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com)
