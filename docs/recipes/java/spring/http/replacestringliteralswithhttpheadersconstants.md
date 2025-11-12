---
sidebar_label: "Replace String literals with `HttpHeaders` constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace String literals with `HttpHeaders` constants

**org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants**

_Replace String literals with `org.springframework.http.HttpHeaders` constants._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/http/ReplaceStringLiteralsWithHttpHeadersConstants.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_CHARSET`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_LANGUAGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_PATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_RANGES`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_MAX_AGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.AGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ALLOW`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.AUTHORIZATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CACHE_CONTROL`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONNECTION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_DISPOSITION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LANGUAGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LENGTH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LOCATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_TYPE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.COOKIE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.DATE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ETAG`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.EXPECT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.EXPIRES`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.FROM`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.HOST`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_MATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_MODIFIED_SINCE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_NONE_MATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_UNMODIFIED_SINCE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LAST_MODIFIED`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LINK`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LOCATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.MAX_FORWARDS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ORIGIN`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PRAGMA`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PROXY_AUTHENTICATE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PROXY_AUTHORIZATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.REFERER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.RETRY_AFTER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SERVER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SET_COOKIE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SET_COOKIE2`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TRAILER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TRANSFER_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.UPGRADE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.USER_AGENT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.VARY`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.VIA`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.WARNING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.WWW_AUTHENTICATE`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants
displayName: Replace String literals with `HttpHeaders` constants
description: |
  Replace String literals with `org.springframework.http.HttpHeaders` constants.
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_CHARSET
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_LANGUAGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_PATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_RANGES
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_MAX_AGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.AGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ALLOW
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.AUTHORIZATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CACHE_CONTROL
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONNECTION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LANGUAGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LENGTH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LOCATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_TYPE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.COOKIE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.DATE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ETAG
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.EXPECT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.EXPIRES
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.FROM
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.HOST
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_MATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_MODIFIED_SINCE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_NONE_MATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_UNMODIFIED_SINCE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LAST_MODIFIED
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LINK
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LOCATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.MAX_FORWARDS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ORIGIN
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PRAGMA
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PROXY_AUTHENTICATE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PROXY_AUTHORIZATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.REFERER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.RETRY_AFTER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SERVER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SET_COOKIE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SET_COOKIE2
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TRAILER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TRANSFER_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.UPGRADE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.USER_AGENT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.VARY
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.VIA
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.WARNING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.WWW_AUTHENTICATE

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Replace String literals with Spring constants](/recipes/java/spring/boot3/replacestringliteralswithconstants.md)


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
    activeRecipe("org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants")
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
        activeRecipe("org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants")
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
            <recipe>org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ReplaceStringLiteralsWithHttpHeadersConstants
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
