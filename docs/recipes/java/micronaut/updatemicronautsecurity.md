---
sidebar_label: "Update the Micronaut Security library"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update the Micronaut Security library

**org.openrewrite.java.micronaut.UpdateMicronautSecurity**

_This recipe will update imports for relocated classes and update configuration files with renamed keys._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.TokenRefreshRequest`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.TokenRefreshRequest`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.AccessRefreshToken`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.AccessRefreshToken`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.BearerAccessRefreshToken`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.BearerAccessRefreshToken`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthController`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthController`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthControllerConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthControllerConfiguration`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.endpoints.OauthControllerConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.endpoints.OauthControllerConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.DefaultAccessRefreshTokenGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.DefaultAccessRefreshTokenGenerator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.AccessTokenCookieConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.AccessTokenCookieConfiguration`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.CookieLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.CookieLoginHandler`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.AccessRefreshTokenLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.AccessRefreshTokenLoginHandler`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenConfiguration`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.bearer.BearerTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.bearer.BearerTokenReader`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.TokenRenderer`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.TokenRenderer`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.render.BearerTokenRenderer`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.render.BearerTokenRenderer`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.CookieTokenReader`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.RefreshTokenCookieConfiguration`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.RefreshTokenCookieConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieClearerLogoutHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieClearerLogoutHandler`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieLoginHandler`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieLoginHandler`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieTokenReader`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessRefreshTokenGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessRefreshTokenGenerator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessTokenConfiguration`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessTokenConfiguration`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.AccessTokenConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.generator.AccessTokenConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.ClaimsGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.ClaimsGenerator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.ClaimsAudienceProvider`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.ClaimsAudienceProvider`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.AbstractAccessTokenCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.AbstractAccessTokenCookieConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.cookie.JwtCookieConfigurationProperties`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.cookie.TokenCookieConfigurationProperties`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.JwtIdGenerator`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.claims.JtiGenerator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.token.jwt.generator.claims.JwtClaims`
  * newFullyQualifiedTypeName: `io.micronaut.security.token.Claims`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.DenyAllAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaDenyAllAnnotationMapper`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.PermitAllAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaPermitAllAnnotationMapper`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.security.annotation.RolesAllowedAnnotationMapper`
  * newFullyQualifiedTypeName: `io.micronaut.security.annotation.JakartaRolesAllowedAnnotationMapper`
* [Update relocated Micronaut Security config properties](../../java/micronaut/updatesecuritypropertiesifneeded)
* [Update relocated Micronaut Security config yaml keys](../../java/micronaut/updatesecurityyamlifneeded)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateMicronautSecurity
displayName: Update the Micronaut Security library
description: |
  This recipe will update imports for relocated classes and update configuration files with renamed keys.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.TokenRefreshRequest
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.TokenRefreshRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.AccessRefreshToken
      newFullyQualifiedTypeName: io.micronaut.security.token.render.AccessRefreshToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.BearerAccessRefreshToken
      newFullyQualifiedTypeName: io.micronaut.security.token.render.BearerAccessRefreshToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthController
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthController
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthControllerConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthControllerConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.endpoints.OauthControllerConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.endpoints.OauthControllerConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.DefaultAccessRefreshTokenGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.DefaultAccessRefreshTokenGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.AccessTokenCookieConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.AccessTokenCookieConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.CookieLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.CookieLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.AccessRefreshTokenLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.AccessRefreshTokenLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.bearer.BearerTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.bearer.BearerTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.TokenRenderer
      newFullyQualifiedTypeName: io.micronaut.security.token.render.TokenRenderer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.render.BearerTokenRenderer
      newFullyQualifiedTypeName: io.micronaut.security.token.render.BearerTokenRenderer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.CookieTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.RefreshTokenCookieConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.RefreshTokenCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.RefreshTokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieClearerLogoutHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieClearerLogoutHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieLoginHandler
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieLoginHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieTokenReader
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieTokenReader
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessRefreshTokenGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessRefreshTokenGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessTokenConfiguration
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessTokenConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.AccessTokenConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.generator.AccessTokenConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.ClaimsGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.ClaimsGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.ClaimsAudienceProvider
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.ClaimsAudienceProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.AbstractAccessTokenCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.AbstractAccessTokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.cookie.JwtCookieConfigurationProperties
      newFullyQualifiedTypeName: io.micronaut.security.token.cookie.TokenCookieConfigurationProperties
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.JwtIdGenerator
      newFullyQualifiedTypeName: io.micronaut.security.token.claims.JtiGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.token.jwt.generator.claims.JwtClaims
      newFullyQualifiedTypeName: io.micronaut.security.token.Claims
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.DenyAllAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaDenyAllAnnotationMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.PermitAllAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaPermitAllAnnotationMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.security.annotation.RolesAllowedAnnotationMapper
      newFullyQualifiedTypeName: io.micronaut.security.annotation.JakartaRolesAllowedAnnotationMapper
  - org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded
  - org.openrewrite.java.micronaut.UpdateSecurityYamlIfNeeded

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautSecurity")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
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
        rewrite("org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateMicronautSecurity")
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
            <recipe>org.openrewrite.java.micronaut.UpdateMicronautSecurity</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateMicronautSecurity -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateMicronautSecurity
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautSecurity" />

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
[Jeremy Grelle](mailto:grellej@unityfoundation.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
