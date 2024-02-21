# Migrate from Micronaut 2.x to 3.x

**org.openrewrite.java.micronaut.Micronaut2to3Migration**

_This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut2-to-3.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.2.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.2.4

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.2.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.2.4")
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
    dependencies { classpath("org.openrewrite:plugin:6.8.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.2.4")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.Micronaut2to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.2.4</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.Micronaut2to3Migration
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Micronaut2to3Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [De-capitalize `BeanIntrospection` `getProperty(..)` and `getRequiredProperty(..)` name arguments](../../java/micronaut/beanpropertycapitalizationstrategy.md)
* [Copy non-inherited annotations from super class](../../java/micronaut/copynoninheritedannotations.md)
* [Change factory method return types to reflect their resolved return type](../../java/micronaut/subclassesreturnedfromfactoriesnotinjectable.md)
* [Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`](../../java/micronaut/onceperrequesthttpserverfiltertohttpserverfilter.md)
* [`Provider` implementation beans to Micronaut `@Factory`](../../java/micronaut/providerimplementationstomicronautfactories.md)
* [Add `@Introspected` to classes requiring a map representation](../../java/micronaut/typerequiresintrospection.md)
* [Fix deprecated no-arg `ExceptionHandler` constructors](../../java/micronaut/fixdeprecatedexceptionhandlerconstructors.md)
* [Upgrade Maven parent project version](../../maven/upgradeparentversion.md)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-parent`
  * newVersion: `3.x`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `io.micronaut`
  * artifactId: `micronaut-bom`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`
* [Upgrade gradle.properties Micronaut version](../../java/micronaut/upgrademicronautgradlepropertiesversion.md)
  * newVersion: `3.x`
* [Upgrade `micronaut.version` Maven property](../../java/micronaut/upgrademicronautmavenpropertyversion.md)
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `io.micronaut.configuration.cassandra`
  * newPackageName: `io.micronaut.cassandra`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `io.micronaut.configuration.security.ldap`
  * newPackageName: `io.micronaut.security.ldap`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.context.ApplicationContext build(..)`
  * newMethodName: `builder`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.core.async.SupplierUtil`
  * newFullyQualifiedTypeName: `io.micronaut.core.util.SupplierUtil`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpRequest getMethod()`
  * newMethodName: `method`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpResponse getStatus()`
  * newMethodName: `status`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.server.netty.DelegateHttpResponse getStatus()`
  * newMethodName: `status`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpRequest getUri()`
  * newMethodName: `uri`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpMessage getDecoderResult()`
  * newMethodName: `decoderResult`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.http.netty.stream.DelegateHttpMessage getProtocolVersion()`
  * newMethodName: `protocolVersion`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.management.endpoint.beans.impl.RxJavaBeanDefinitionDataCollector`
  * newFullyQualifiedTypeName: `io.micronaut.management.endpoint.beans.impl.DefaultBeanDefinitionDataCollector`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.management.endpoint.routes.impl.RxJavaRouteDataCollector`
  * newFullyQualifiedTypeName: `io.micronaut.management.endpoint.routes.impl.DefaultRouteDataCollector`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.management.health.aggregator.RxJavaHealthAggregator`
  * newFullyQualifiedTypeName: `io.micronaut.management.health.aggregator.DefaultHealthAggregator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.messaging.annotation.Body`
  * newFullyQualifiedTypeName: `io.micronaut.messaging.annotation.MessageBody`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.messaging.annotation.Headers`
  * newFullyQualifiedTypeName: `io.micronaut.messaging.annotation.MessageHeaders`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast isExplict()`
  * newMethodName: `isExplicit`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast setExplict(boolean)`
  * newMethodName: `setExplicit`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcast explict(boolean)`
  * newMethodName: `setExplicit`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.rss.itunespodcast.ItunesPodcastEpisode isExplict()`
  * newMethodName: `isExplicit`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.runtime.server.EmbeddedServerInstance`
  * newFullyQualifiedTypeName: `io.micronaut.discovery.EmbeddedServerInstance`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.RxHttpClient`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxProxyHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.proxy.RxProxyHttpClient`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.RxStreamingHttpClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.RxStreamingHttpClient`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.http.client.sse.RxSseClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.sse.RxSseClient`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.websocket.RxWebSocketClient`
  * newFullyQualifiedTypeName: `io.micronaut.rxjava2.http.client.websockets.RxWebSocketClient`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.web.router accept(io.micronaut.http.MediaType)`
  * newMethodName: `doesConsume`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.web.router.Route acceptAll()`
  * newMethodName: `consumesAll`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.web.router.RouteMatch accept(io.micronaut.http.MediaType)`
  * newMethodName: `doesConsume`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.micronaut.web.router.RouteMatch explicitAccept(io.micronaut.http.MediaType)`
  * newMethodName: `explicitlyConsumes`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Nullable`
  * newFullyQualifiedTypeName: `io.micronaut.core.annotation.Nullable`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Nonnull`
  * newFullyQualifiedTypeName: `io.micronaut.core.annotation.NonNull`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.micronaut.test.annotation.MicronautTest`
  * newFullyQualifiedTypeName: `io.micronaut.test.extensions.junit5.annotation.MicronautTest`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.Micronaut2to3Migration
displayName: Migrate from Micronaut 2.x to 3.x
description: This recipe will apply changes required for migrating from Micronaut 2 to Micronaut 3.
recipeList:
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
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut2to3Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Patrick](mailto:patway99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Patrick Way, [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), Tyler Van Gorder, [Jeremy Grelle](mailto:grellej@unityfoundation.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), Aaron Gershman
