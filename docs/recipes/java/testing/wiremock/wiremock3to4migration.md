---
title: "Upgrade WireMock to 4.x"
sidebar_label: "Upgrade WireMock to 4.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade WireMock to 4.x

**org.openrewrite.java.testing.wiremock.Wiremock3to4Migration**

_Upgrade WireMock to 4.x, which requires Java 17, ships Jetty 12.1 by default, splits JUnit support out into separate modules and makes the primary domain classes immutable. Note that `RequestMethod.GET_OR_HEAD` is a multi method matcher in 4.x rather than a method named `GET_OR_HEAD`, so code reading a name off that particular constant needs a look._

### Tags

* [wiremock](/reference/recipes-by-tag#wiremock)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: wiremock4.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/wiremock4.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Keep a single `Content-Type` response header while still on WireMock 3](../../../java/testing/wiremock/removeduplicatecontenttypeheaders)
* [Upgrade WireMock to 3.x](../../../java/testing/wiremock/upgradewiremockdependencyversion)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.wiremock`
  * oldArtifactId: `wiremock-jetty12`
  * newGroupId: `org.wiremock`
  * newArtifactId: `wiremock`
  * newVersion: `4.0.0-beta.38`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.wiremock`
  * artifactId: `wiremock`
  * newVersion: `4.0.0-beta.38`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.wiremock`
  * artifactId: `wiremock-standalone`
  * newVersion: `4.0.0-beta.38`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.wiremock`
  * artifactId: `wiremock-junit5`
  * version: `4.0.0-beta.38`
  * onlyIfUsing: `com.github.tomakehurst.wiremock.junit5.*`
  * scope: `test`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.wiremock`
  * artifactId: `wiremock-junit4`
  * version: `4.0.0-beta.38`
  * onlyIfUsing: `com.github.tomakehurst.wiremock.junit.WireMock*Rule`
  * scope: `test`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.eclipse.jetty`
  * artifactId: `jetty-client`
  * version: `12.1.x`
  * onlyIfUsing: `org.eclipse.jetty.client.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.eclipse.jetty`
  * artifactId: `jetty-proxy`
  * version: `12.1.x`
  * onlyIfUsing: `org.eclipse.jetty.proxy.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.eclipse.jetty`
  * artifactId: `jetty-xml`
  * version: `12.1.x`
  * onlyIfUsing: `org.eclipse.jetty.xml.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.eclipse.jetty.ee10`
  * artifactId: `jetty-ee10-webapp`
  * version: `12.1.x`
  * onlyIfUsing: `org.eclipse.jetty.ee10.webapp.*`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.CertificateGeneratingSslContextFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.ssl.CertificateGeneratingSslContextFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.HttpsProxyDetectingHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.proxy.HttpsProxyDetectingHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.ManInTheMiddleSslConnectHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.proxy.ManInTheMiddleSslConnectHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.NotFoundHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.NotFoundHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.SslContexts`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.ssl.SslContexts`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty11.WritableFileOrClasspathKeyStoreSource`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.common.ssl.WritableFileOrClasspathKeyStoreSource`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.HttpProxyDetectingHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.proxy.HttpProxyDetectingHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.HttpsProxyDetectingHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.proxy.HttpsProxyDetectingHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.Jetty12HttpServer`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.Jetty12HttpServer`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.Jetty12HttpServerFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.JettyHttpServerFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.Jetty12HttpUtils`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.Jetty12HttpUtils`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.ManInTheMiddleSslConnectHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.proxy.ManInTheMiddleSslConnectHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty12.NotFoundHandler`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.NotFoundHandler`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.JettyFaultInjector`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.faults.JettyFaultInjector`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.JettyFaultInjectorFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.faults.JettyFaultInjectorFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.JettyHttpsFaultInjector`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.faults.JettyHttpsFaultInjector`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.ContentTypeSettingFilter`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.ContentTypeSettingFilter`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.FaultInjectorFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.FaultInjectorFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.NoFaultInjector`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.NoFaultInjector`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.NoFaultInjectorFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.NoFaultInjectorFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.NotMatchedServlet`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.NotMatchedServlet`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.TrailingSlashFilter`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.TrailingSlashFilter`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.WarConfiguration`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.WarConfiguration`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.WireMockHandlerDispatchingServlet`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.WireMockHandlerDispatchingServlet`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.WireMockHttpServletMultipartAdapter`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.WireMockHttpServletMultipartAdapter`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.WireMockHttpServletRequestAdapter`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.WireMockHttpServletRequestAdapter`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.servlet.WireMockWebContextListener`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.WireMockWebContextListener`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.common.ServletContextFileSource`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.servlet.ServletContextFileSource`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.common.JettySettings`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.jetty.JettySettings`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.ApacheBackedHttpClient`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.apache5.ApacheBackedHttpClient`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.ApacheHttpClientFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.apache5.ApacheHttpClientFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.NetworkAddressRulesAdheringDnsResolver`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.apache5.NetworkAddressRulesAdheringDnsResolver`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.ssl.TrustSelfSignedStrategy`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.apache5.TrustSelfSignedStrategy`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.HttpClientFactory`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.client.HttpClientFactory`
  * ignoreDefinition: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.http.MimeType`
  * newFullyQualifiedTypeName: `com.github.tomakehurst.wiremock.common.entity.MimeType`
  * ignoreDefinition: `true`
* [Replace WireMock constructors removed in 4.x](../../../java/testing/wiremock/replaceremovedconstructors)
* [Replace WireMock setter calls with `transform()`](../../../java/testing/wiremock/replacesetterswithtransform)
* [Migrate the `uuid` field in WireMock stub mapping files to `id`](../../../java/testing/wiremock/migratestubmappinguuidtoid)
* [Preserve the UTF-8 default of `ContentTypeHeader.charset()`](../../../java/testing/wiremock/migratecontenttypeheadercharset)
* [Migrate `RequestMethod.isOneOf` to the matcher it became](../../../java/testing/wiremock/migraterequestmethodisoneof)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.github.tomakehurst.wiremock.stubbing.StubMapping getUuid()`
  * newMethodName: `getId`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.github.tomakehurst.wiremock.http.RequestMethod value()`
  * newMethodName: `getName`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.wiremock.Wiremock3to4Migration
displayName: Upgrade WireMock to 4.x
description: |
  Upgrade WireMock to 4.x, which requires Java 17, ships Jetty 12.1 by default, splits JUnit support out into separate modules and makes the primary domain classes immutable. Note that `RequestMethod.GET_OR_HEAD` is a multi method matcher in 4.x rather than a method named `GET_OR_HEAD`, so code reading a name off that particular constant needs a look.
tags:
  - wiremock
  - testing
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.testing.wiremock.RemoveDuplicateContentTypeHeaders
  - org.openrewrite.java.testing.wiremock.UpgradeWiremockDependencyVersion
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.wiremock
      oldArtifactId: wiremock-jetty12
      newGroupId: org.wiremock
      newArtifactId: wiremock
      newVersion: 4.0.0-beta.38
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.wiremock
      artifactId: wiremock
      newVersion: 4.0.0-beta.38
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.wiremock
      artifactId: wiremock-standalone
      newVersion: 4.0.0-beta.38
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.wiremock
      artifactId: wiremock-junit5
      version: 4.0.0-beta.38
      onlyIfUsing: com.github.tomakehurst.wiremock.junit5.*
      scope: test
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.wiremock
      artifactId: wiremock-junit4
      version: 4.0.0-beta.38
      onlyIfUsing: com.github.tomakehurst.wiremock.junit.WireMock*Rule
      scope: test
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.eclipse.jetty
      artifactId: jetty-client
      version: 12.1.x
      onlyIfUsing: org.eclipse.jetty.client.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.eclipse.jetty
      artifactId: jetty-proxy
      version: 12.1.x
      onlyIfUsing: org.eclipse.jetty.proxy.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.eclipse.jetty
      artifactId: jetty-xml
      version: 12.1.x
      onlyIfUsing: org.eclipse.jetty.xml.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.eclipse.jetty.ee10
      artifactId: jetty-ee10-webapp
      version: 12.1.x
      onlyIfUsing: org.eclipse.jetty.ee10.webapp.*
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.CertificateGeneratingSslContextFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.ssl.CertificateGeneratingSslContextFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.HttpsProxyDetectingHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.proxy.HttpsProxyDetectingHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.ManInTheMiddleSslConnectHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.proxy.ManInTheMiddleSslConnectHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.NotFoundHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.NotFoundHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.SslContexts
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.ssl.SslContexts
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty11.WritableFileOrClasspathKeyStoreSource
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.common.ssl.WritableFileOrClasspathKeyStoreSource
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.HttpProxyDetectingHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.proxy.HttpProxyDetectingHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.HttpsProxyDetectingHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.proxy.HttpsProxyDetectingHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.Jetty12HttpServer
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.Jetty12HttpServer
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.Jetty12HttpServerFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.JettyHttpServerFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.Jetty12HttpUtils
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.Jetty12HttpUtils
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.ManInTheMiddleSslConnectHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.proxy.ManInTheMiddleSslConnectHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty12.NotFoundHandler
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.NotFoundHandler
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.JettyFaultInjector
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.faults.JettyFaultInjector
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.JettyFaultInjectorFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.faults.JettyFaultInjectorFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.JettyHttpsFaultInjector
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.faults.JettyHttpsFaultInjector
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.ContentTypeSettingFilter
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.ContentTypeSettingFilter
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.FaultInjectorFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.FaultInjectorFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.NoFaultInjector
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.NoFaultInjector
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.NoFaultInjectorFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.NoFaultInjectorFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.NotMatchedServlet
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.NotMatchedServlet
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.TrailingSlashFilter
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.TrailingSlashFilter
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.WarConfiguration
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.WarConfiguration
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.WireMockHandlerDispatchingServlet
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.WireMockHandlerDispatchingServlet
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.WireMockHttpServletMultipartAdapter
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.WireMockHttpServletMultipartAdapter
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.WireMockHttpServletRequestAdapter
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.WireMockHttpServletRequestAdapter
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.servlet.WireMockWebContextListener
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.WireMockWebContextListener
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.common.ServletContextFileSource
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.servlet.ServletContextFileSource
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.common.JettySettings
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.jetty.JettySettings
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.ApacheBackedHttpClient
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.apache5.ApacheBackedHttpClient
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.ApacheHttpClientFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.apache5.ApacheHttpClientFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.NetworkAddressRulesAdheringDnsResolver
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.apache5.NetworkAddressRulesAdheringDnsResolver
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.ssl.TrustSelfSignedStrategy
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.apache5.TrustSelfSignedStrategy
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.HttpClientFactory
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.client.HttpClientFactory
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.github.tomakehurst.wiremock.http.MimeType
      newFullyQualifiedTypeName: com.github.tomakehurst.wiremock.common.entity.MimeType
      ignoreDefinition: true
  - org.openrewrite.java.testing.wiremock.ReplaceRemovedConstructors
  - org.openrewrite.java.testing.wiremock.ReplaceSettersWithTransform
  - org.openrewrite.java.testing.wiremock.MigrateStubMappingUuidToId
  - org.openrewrite.java.testing.wiremock.MigrateContentTypeHeaderCharset
  - org.openrewrite.java.testing.wiremock.MigrateRequestMethodIsOneOf
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.github.tomakehurst.wiremock.stubbing.StubMapping getUuid()
      newMethodName: getId
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.github.tomakehurst.wiremock.http.RequestMethod value()
      newMethodName: getName

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.wiremock.Wiremock3to4Migration"
  displayName="Upgrade WireMock to 4.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.wiremock.Wiremock3to4Migration" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
