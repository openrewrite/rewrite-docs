# Migrate to Spring Boot 3.2

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_2**

_Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-32.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.19.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 3.1](../../../java/spring/boot3/upgradespringboot_3_1.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.2.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-maven-plugin`
  * newVersion: `3.2.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.1.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.2.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `3.2.x`
* [Migrate to Spring Security 6.2](../../../java/spring/security6/upgradespringsecurity_6_2.md)
* [Migrate Spring Boot properties to 3.2](../../../java/spring/boot3/springbootproperties_3_2.md)
* [Enable Virtual Threads on Java 21](../../../java/spring/boot3/enablevirtualthreads.md)
* [Migrate to Spring Framework 6.1](../../../java/spring/framework/upgradespringframework_6_1.md)
* [Migrate to Spring Cloud 2023](../../../java/spring/cloud2023/upgradespringcloud_2023.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskSchedulerBuilder`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorBuilder`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskSchedulerCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskSchedulerCustomizer`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskExecutorBuilder`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorBuilder`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.task.TaskExecutorCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.task.ThreadPoolTaskExecutorCustomizer`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.transaction.PlatformTransactionManagerCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.transaction.TransactionManagerCustomizer`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springdoc`
  * artifactId: `*`
  * newVersion: `2.5.x`
* [Migrate to Hibernate 6.3.x](../../../hibernate/migratetohibernate63.md)
* [Relocate Launcher Classes](../../../java/spring/boot3/relocatelauncherclasses.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2
displayName: Migrate to Spring Boot 3.2
description: Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 3.2.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-maven-plugin
      newVersion: 3.2.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: *
      newVersion: 6.1.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.2.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 3.2.x
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_2
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_2
  - org.openrewrite.java.spring.boot3.EnableVirtualThreads
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_1
  - org.openrewrite.java.spring.cloud2023.UpgradeSpringCloud_2023
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskSchedulerBuilder
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskSchedulerCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskSchedulerCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskExecutorBuilder
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.task.TaskExecutorCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.task.ThreadPoolTaskExecutorCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.transaction.PlatformTransactionManagerCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.transaction.TransactionManagerCustomizer
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springdoc
      artifactId: *
      newVersion: 2.5.x
  - org.openrewrite.hibernate.MigrateToHibernate63
  - org.openrewrite.java.spring.boot3.RelocateLauncherClasses

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.19.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.19.0")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:5.19.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2")
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
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.19.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2 -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_3_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2)

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Chuka Obinabo, [Joan Viladrosa](mailto:joan@moderne.io), Kun Li, [Jonathan Schneider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Patrick Way, pdesprez, [Sam Snyder](mailto:sam@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Laurens Westerlaken](mailto:laurens.w@live.nl), [Shannon Pamperl](mailto:shanman190@gmail.com), [Satvika Eda](mailto:satvika164.reddy@gmail.com), Anu Ramamoorthy, [Kun Li](mailto:kun@moderne.io), Simon Zilliken, [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Kevin McCarpenter](mailto:kevin@moderne.io), Fabian Krüger, [Tim te Beek](mailto:timtebeek@gmail.com), [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), Evie Lau, Adam Slaski, Aaron Gershman, nbruno, ranuradh, BhavanaPidapa, Daryl Robbins, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), Sandeep Nagaraj, [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [BoykoAlex](mailto:aboyko@pivotal.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de), Josh Soref, Aakarshit Uppal, eocantu, Adriano Machado
