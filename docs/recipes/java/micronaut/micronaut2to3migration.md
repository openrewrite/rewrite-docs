---
sidebar_label: "Migrate from Micronaut 2.x to 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from Micronaut 2.x to 3.x

**org.openrewrite.java.micronaut.Micronaut2to3Migration**

_This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/Micronaut2to3Migration.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Jakarta EE 9](../../java/migrate/jakarta/javaxmigrationtojakarta)
* [De-capitalize `BeanIntrospection` `getProperty(..)` and `getRequiredProperty(..)` name arguments](../../java/micronaut/beanpropertycapitalizationstrategy)
* [Copy non-inherited annotations from super class](../../java/micronaut/copynoninheritedannotations)
* [Change factory method return types to reflect their resolved return type](../../java/micronaut/subclassesreturnedfromfactoriesnotinjectable)
* [Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`](../../java/micronaut/onceperrequesthttpserverfiltertohttpserverfilter)
* [`Provider` implementation beans to Micronaut `@Factory`](../../java/micronaut/providerimplementationstomicronautfactories)
* [Add `@Introspected` to classes requiring a map representation](../../java/micronaut/typerequiresintrospection)
* [Fix deprecated no-arg `ExceptionHandler` constructors](../../java/micronaut/fixdeprecatedexceptionhandlerconstructors)
* [Upgrade Maven parent project version](../../maven/upgradeparentversion)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-parent`
  * newVersion: `3.x`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-bom`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`
* [Upgrade gradle.properties Micronaut version](../../java/micronaut/upgrademicronautgradlepropertiesversion)
  * newVersion: `3.x`
* [Upgrade `micronaut.version` Maven property](../../java/micronaut/upgrademicronautmavenpropertyversion)
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `io.micronaut.configuration.cassandra`
  * newPackageName: `io.micronaut.cassandra`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `io.micronaut.configuration.security.ldap`
  * newPackageName: `io.micronaut.security.ldap`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.context.ApplicationContext build(..)`
  * newMethodName: `builder`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.core.async.SupplierUtil`
  * newFullyQualifiedTypeName: `io.micronaut.core.util.SupplierUtil`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpRequest getMethod()`
  * newMethodName: `method`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpResponse getStatus()`
  * newMethodName: `status`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.server.netty.DelegateHttpResponse getStatus()`
  * newMethodName: `status`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpRequest getUri()`
  * newMethodName: `uri`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpMessage getDecoderResult()`
  * newMethodName: `decoderResult`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpMessage getProtocolVersion()`
  * newMethodName: `protocolVersion`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.management.endpoint.beans.impl.RxJavaBeanDefinitionDataCollector`
  * newFullyQualifiedTypeName: `io.micronaut.management.endpoint.beans.impl.DefaultBeanDefinitionDataCollector`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.management.endpoint.routes.impl.RxJavaRouteDataCollector`
  * newFullyQualifiedTypeName: `io.micronaut.management.endpoint.routes.impl.DefaultRouteDataCollector`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.management.health.aggregator.RxJavaHealthAggregator`
  * newFullyQualifiedTypeName: `io.micronaut.management.health.aggregator.DefaultHealthAggregator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.messaging.annotation.Body`
  * newFullyQualifiedTypeName: `io.micronaut.messaging.annotation.MessageBody`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.messaging.annotation.Headers`
  * newFullyQualifiedTypeName: `io.micronaut.messaging.annotation.MessageHeaders`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast isExplict()`
  * newMethodName: `isExplicit`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast setExplict(boolean)`
  * newMethodName: `setExplicit`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast explict(boolean)`
  * newMethodName: `setExplicit`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcastEpisode isExplict()`
  * newMethodName: `isExplicit`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.runtime.server.EmbeddedServerInstance`
  * newFullyQualifiedTypeName: `io.micronaut.discovery.EmbeddedServerInstance`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.RxHttpClient`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxProxyHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.proxy.RxProxyHttpClient`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxStreamingHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.RxStreamingHttpClient`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.sse.RxSseClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.sse.RxSseClient`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.websocket.RxWebSocketClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.websockets.RxWebSocketClient`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.web.router accept(io.micronaut.http.MediaType)`
  * newMethodName: `doesConsume`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.web.router.Route acceptAll()`
  * newMethodName: `consumesAll`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.web.router.RouteMatch accept(io.micronaut.http.MediaType)`
  * newMethodName: `doesConsume`
* [Change method name](../../java/changemethodname)
  * methodPattern: `io.micronaut.web.router.RouteMatch explicitAccept(io.micronaut.http.MediaType)`
  * newMethodName: `explicitlyConsumes`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.annotation.Nullable`
  * newFullyQualifiedTypeName: `io.micronaut.core.annotation.Nullable`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.annotation.Nonnull`
  * newFullyQualifiedTypeName: `io.micronaut.core.annotation.NonNull`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.test.annotation.MicronautTest`
  * newFullyQualifiedTypeName: `io.micronaut.test.extensions.junit5.annotation.MicronautTest`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.Micronaut2to3Migration
displayName: Migrate from Micronaut 2.x to 3.x
description: |
  This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3.
recipeList:
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.micronaut.BeanPropertyCapitalizationStrategy
  - org.openrewrite.java.micronaut.CopyNonInheritedAnnotations
  - org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable
  - org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter
  - org.openrewrite.java.micronaut.ProviderImplementationsToMicronautFactories
  - org.openrewrite.java.micronaut.TypeRequiresIntrospection
  - org.openrewrite.java.micronaut.FixDeprecatedExceptionHandlerConstructors
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: io.micronaut
      artifactId: micronaut-parent
      newVersion: 3.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: io.micronaut
      artifactId: micronaut-bom
      newVersion: 3.x
      overrideManagedVersion: true
  - org.openrewrite.java.micronaut.UpgradeMicronautGradlePropertiesVersion:
      newVersion: 3.x
  - org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion:
      newVersion: 3.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.micronaut.configuration.cassandra
      newPackageName: io.micronaut.cassandra
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.micronaut.configuration.security.ldap
      newPackageName: io.micronaut.security.ldap
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.context.ApplicationContext build(..)
      newMethodName: builder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.core.async.SupplierUtil
      newFullyQualifiedTypeName: io.micronaut.core.util.SupplierUtil
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.netty.stream.DelegateHttpRequest getMethod()
      newMethodName: method
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.netty.stream.DelegateHttpResponse getStatus()
      newMethodName: status
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.server.netty.DelegateHttpResponse getStatus()
      newMethodName: status
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.netty.stream.DelegateHttpRequest getUri()
      newMethodName: uri
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.netty.stream.DelegateHttpMessage getDecoderResult()
      newMethodName: decoderResult
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.http.netty.stream.DelegateHttpMessage getProtocolVersion()
      newMethodName: protocolVersion
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.management.endpoint.beans.impl.RxJavaBeanDefinitionDataCollector
      newFullyQualifiedTypeName: io.micronaut.management.endpoint.beans.impl.DefaultBeanDefinitionDataCollector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.management.endpoint.routes.impl.RxJavaRouteDataCollector
      newFullyQualifiedTypeName: io.micronaut.management.endpoint.routes.impl.DefaultRouteDataCollector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.management.health.aggregator.RxJavaHealthAggregator
      newFullyQualifiedTypeName: io.micronaut.management.health.aggregator.DefaultHealthAggregator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.messaging.annotation.Body
      newFullyQualifiedTypeName: io.micronaut.messaging.annotation.MessageBody
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.messaging.annotation.Headers
      newFullyQualifiedTypeName: io.micronaut.messaging.annotation.MessageHeaders
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.rss.itunespodcast.ItunesPodcast isExplict()
      newMethodName: isExplicit
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.rss.itunespodcast.ItunesPodcast setExplict(boolean)
      newMethodName: setExplicit
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.rss.itunespodcast.ItunesPodcast explict(boolean)
      newMethodName: setExplicit
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.rss.itunespodcast.ItunesPodcastEpisode isExplict()
      newMethodName: isExplicit
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.runtime.server.EmbeddedServerInstance
      newFullyQualifiedTypeName: io.micronaut.discovery.EmbeddedServerInstance
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.http.client.RxHttpClient
      newFullyQualifiedTypeName: io.micronaut.rxjava2.http.client.RxHttpClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.http.client.RxProxyHttpClient
      newFullyQualifiedTypeName: io.micronaut.rxjava2.http.client.proxy.RxProxyHttpClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.http.client.RxStreamingHttpClient
      newFullyQualifiedTypeName: io.micronaut.rxjava2.http.client.RxStreamingHttpClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.http.client.sse.RxSseClient
      newFullyQualifiedTypeName: io.micronaut.rxjava2.http.client.sse.RxSseClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.websocket.RxWebSocketClient
      newFullyQualifiedTypeName: io.micronaut.rxjava2.http.client.websockets.RxWebSocketClient
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.web.router accept(io.micronaut.http.MediaType)
      newMethodName: doesConsume
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.web.router.Route acceptAll()
      newMethodName: consumesAll
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.web.router.RouteMatch accept(io.micronaut.http.MediaType)
      newMethodName: doesConsume
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.micronaut.web.router.RouteMatch explicitAccept(io.micronaut.http.MediaType)
      newMethodName: explicitlyConsumes
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Nullable
      newFullyQualifiedTypeName: io.micronaut.core.annotation.Nullable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Nonnull
      newFullyQualifiedTypeName: io.micronaut.core.annotation.NonNull
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.test.annotation.MicronautTest
      newFullyQualifiedTypeName: io.micronaut.test.extensions.junit5.annotation.MicronautTest

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
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
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
        activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
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
            <recipe>org.openrewrite.java.micronaut.Micronaut2to3Migration</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.Micronaut2to3Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Micronaut2to3Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-micronaut:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut2to3Migration" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
