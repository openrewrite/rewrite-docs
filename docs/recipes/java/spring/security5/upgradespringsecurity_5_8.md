---
sidebar_label: "Migrate to Spring Security 5.8"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Spring Security 5.8

**org.openrewrite.java.spring.security5.UpgradeSpringSecurity\_5\_8**

_Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* spring
* security

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-58.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Security 5.7](../../../java/spring/security5/upgradespringsecurity_5_7)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.security`
  * artifactId: `*`
  * newVersion: `5.8.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.security`
  * artifactId: `spring-security-oauth2-authorization-server`
  * newVersion: `0.4.x`
  * overrideManagedVersion: `false`
* [Convert `HttpSecurity` chained calls into Lambda DSL](../../../java/spring/boot2/httpsecuritylambdadsl)
* [Convert `ServerHttpSecurity` chained calls into Lambda DSL](../../../java/spring/boot2/serverhttpsecuritylambdadsl)
* [Convert `HeadersConfigurer` chained calls into Lambda DSL](../../../java/spring/boot2/headersconfigurerlambdadsl)
* [Replace `HttpSecurity.authorizeRequests(...)` with `HttpSecurity.authorizeHttpRequests(...)` and `ExpressionUrlAuthorizationConfigurer`, `AbstractInterceptUrlConfigurer` with `AuthorizeHttpRequestsConfigurer`, etc](../../../java/spring/security5/authorizehttprequests)
* [Use the new `requestMatchers` methods](../../../java/spring/security5/usenewrequestmatchers)
* [Use the new `securityMatcher()` method](../../../java/spring/security5/usenewsecuritymatchers)
* [Use new `Pbkdf2PasswordEncoder` factory methods](../../../java/spring/security5/updatepbkdf2passwordencoder)
* [Use new `SCryptPasswordEncoder` factory methods](../../../java/spring/security5/updatescryptpasswordencoder)
* [Use new `Argon2PasswordEncoder` factory methods](../../../java/spring/security5/updateargon2passwordencoder)
* [Replace global method security with method security](../../../java/spring/security5/replaceglobalmethodsecuritywithmethodsecurity)
* [Replace global method security with method security](../../../java/spring/security5/replaceglobalmethodsecuritywithmethodsecurityxml)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8
displayName: Migrate to Spring Security 5.8
description: |
  Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.
tags:
  - spring
  - security
recipeList:
  - org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: "*"
      newVersion: 5.8.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.security
      artifactId: spring-security-oauth2-authorization-server
      newVersion: 0.4.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.boot2.HttpSecurityLambdaDsl
  - org.openrewrite.java.spring.boot2.ServerHttpSecurityLambdaDsl
  - org.openrewrite.java.spring.boot2.HeadersConfigurerLambdaDsl
  - org.openrewrite.java.spring.security5.AuthorizeHttpRequests
  - org.openrewrite.java.spring.security5.UseNewRequestMatchers
  - org.openrewrite.java.spring.security5.UseNewSecurityMatchers
  - org.openrewrite.java.spring.security5.UpdatePbkdf2PasswordEncoder
  - org.openrewrite.java.spring.security5.UpdateSCryptPasswordEncoder
  - org.openrewrite.java.spring.security5.UpdateArgon2PasswordEncoder
  - org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurity
  - org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8")
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
            <recipe>org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeSpringSecurity_5_8
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8" />

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
[Alex Boyko](mailto:aboyko@vmware.com), [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Kun Li](mailto:kun@moderne.io), Kun Li, Michel Gonzalez, [Johannes Jank](mailto:johannes.wengert@googlemail.com), [Jacob van Lingen](mailto:jacob.van.lingen@moderne.io), [Sam Snyder](mailto:sam@moderne.io), Patrick Way, [Shannon Pamperl](mailto:shanman190@gmail.com), [Patrick](mailto:patway99@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Laurens Westerlaken](mailto:laurens.w@live.nl), Josh Soref, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Mckinney, Nicholas](mailto:mckinneynicholas@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
