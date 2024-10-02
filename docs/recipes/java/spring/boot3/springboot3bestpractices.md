---
sidebar_label: "Spring Boot 3.x best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Spring Boot 3.x best practices

**org.openrewrite.java.spring.boot3.SpringBoot3BestPractices**

_Applies best practices to Spring Boot 3 applications._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-33.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.20.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Spring Boot 2.x best practices](../../../java/spring/boot2/springboot2bestpractices)
* [Migrate to Java 21](../../../java/migrate/upgradetojava21)
* [Migrate to Spring Boot 3.3](../../../java/spring/boot3/upgradespringboot_3_3)
* [Replace String literals with `HttpHeaders` constants](../../../java/spring/http/replacestringliteralswithhttpheadersconstants)
* [Replace String literals with `MediaType` constants](../../../java/spring/http/replacestringliteralswithmediatypeconstants)
* [Simplify unnecessary `MediaType.parseMediaType()` and `MediaType.valueOf()` calls](../../../java/spring/http/simplifymediatypeparsecalls)
* [Simplify WebTestClient expressions](../../../java/spring/http/simplifywebtestclientcalls)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBoot3BestPractices
displayName: Spring Boot 3.x best practices
description: Applies best practices to Spring Boot 3 applications.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
  - org.openrewrite.java.migrate.UpgradeToJava21
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_3
  - org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants
  - org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants
  - org.openrewrite.java.spring.http.SimplifyMediaTypeParseCalls
  - org.openrewrite.java.spring.http.SimplifyWebTestClientCalls

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.SpringBoot3BestPractices")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
        }
        rewrite {
            activeRecipe("org.openrewrite.java.spring.boot3.SpringBoot3BestPractices")
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
    2. Run the recipe.
    ```shell title="shell"
    gradle --init-script init.gradle rewriteRun
    ```
</TabItem>
<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
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
                <recipe>org.openrewrite.java.spring.boot3.SpringBoot3BestPractices</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-spring</artifactId>
                <version>5.20.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBoot3BestPractices -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe SpringBoot3BestPractices
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBoot3BestPractices">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), Chuka Obinabo, [Alex Boyko](mailto:aboyko@vmware.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), Kun Li, Anu Ramamoorthy, [Sam Snyder](mailto:sam@moderne.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Patrick Way, [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Laurens Westerlaken](mailto:laurens.w@live.nl), pdesprez, [Kyle Scully](mailto:scullykns@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Shannon Pamperl](mailto:shanman190@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Kun Li](mailto:kun@moderne.io), Simon Zilliken, Adam Slaski, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), [Tim te Beek](mailto:timtebeek@gmail.com), Aaron Gershman, BhavanaPidapa, Daryl Robbins, Fabian Krüger, [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, Evie Lau, [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), Fiete, nbruno, ranuradh, [Aleksandar A Simpson](mailto:alek@asu.me), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), Sandeep Nagaraj, BramliAK, [BoykoAlex](mailto:aboyko@pivotal.io), [Michael Keppler](mailto:bananeweizen@gmx.de), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), Aakarshit Uppal, eocantu, Josh Soref, Adriano Machado, [Mike Solomon](mailto:mike@moderne.io)