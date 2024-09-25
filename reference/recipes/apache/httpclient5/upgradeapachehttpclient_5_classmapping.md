# Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5\_ClassMapping**

_Mapping of all the compatible classes of ApacheHttpClient 5.x from 4.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.7.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.client.methods`
  * newPackageName: `org.apache.hc.client5.http.classic.methods`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.classic.methods.CloseableHttpResponse`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.CloseableHttpResponse`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.client.entity`
  * newPackageName: `org.apache.hc.client5.http.entity`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.client.protocol`
  * newPackageName: `org.apache.hc.client5.http.protocol`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.conn.socket`
  * newPackageName: `org.apache.hc.client5.http.socket`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.ssl`
  * newPackageName: `org.apache.hc.core5.ssl`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.concurrent`
  * newPackageName: `org.apache.hc.core5.concurrent`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.auth`
  * newPackageName: `org.apache.hc.client5.http.impl.auth`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.cookie`
  * newPackageName: `org.apache.hc.client5.http.impl.cookie`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.cookie.PublicSuffixListParser`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.psl.PublicSuffixListParser`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.cookie.DateUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.utils.DateUtils`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.client`
  * newPackageName: `org.apache.hc.client5.http.impl.classic`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.impl.client.BasicAuthCache`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.auth.BasicAuthCache`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.BasicAuthCache`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.auth.BasicAuthCache`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.HttpAuthenticator`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.auth.HttpAuthenticator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.SystemDefaultCredentialsProvider`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.auth.SystemDefaultCredentialsProvider`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.DefaultClientConnectionReuseStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultClientConnectionReuseStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.DefaultRedirectStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultRedirectStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.RedirectLocations`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.protocol.RedirectLocations`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.BasicCookieStore`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.cookie.BasicCookieStore`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.DefaultConnectionKeepAliveStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultConnectionKeepAliveStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.IdleConnectionEvictor`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.IdleConnectionEvictor`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.TunnelRefusedException`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.TunnelRefusedException`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.NoopUserTokenHandler`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.NoopUserTokenHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.DefaultUserTokenHandler`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultUserTokenHandler`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.BasicCredentialsProvider`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.auth.BasicCredentialsProvider`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.auth`
  * newPackageName: `org.apache.hc.client5.http.auth`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.cookie`
  * newPackageName: `org.apache.hc.client5.http.cookie`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.cookie`
  * newPackageName: `org.apache.hc.client5.http.cookie`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.annotation`
  * newPackageName: `org.apache.hc.core5.annotation`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.client.config`
  * newPackageName: `org.apache.hc.client5.http.config`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.hc.client5.http.config.CookieSpecs.IGNORE_COOKIES`
  * fullyQualifiedConstantName: `org.apache.hc.client5.http.cookie.StandardCookieSpec.IGNORE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.hc.client5.http.config.CookieSpecs.STANDARD`
  * fullyQualifiedConstantName: `org.apache.hc.client5.http.cookie.StandardCookieSpec.RELAXED`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant.md)
  * existingFullyQualifiedConstantName: `org.apache.hc.client5.http.config.CookieSpecs.STANDARD_STRICT`
  * fullyQualifiedConstantName: `org.apache.hc.client5.http.cookie.StandardCookieSpec.STRICT`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.annotation`
  * newPackageName: `org.apache.hc.core5.annotation`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.entity`
  * newPackageName: `org.apache.hc.core5.http.io.entity`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.io.entity.ContentLengthStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.ContentLengthStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.io.entity.ContentType`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.ContentType`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.bootstrap`
  * newPackageName: `org.apache.hc.core5.http.impl.bootstrap`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.execchain`
  * newPackageName: `org.apache.hc.client5.http.impl.classic`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.classic.TunnelRefusedException`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.TunnelRefusedException`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.io`
  * newPackageName: `org.apache.hc.core5.http.impl.io`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.DefaultHttpResponseParserFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.DefaultHttpResponseParserFactory`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.io`
  * newPackageName: `org.apache.hc.core5.http.io`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.message`
  * newPackageName: `org.apache.hc.core5.http.message`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.pool`
  * newPackageName: `org.apache.hc.core5.pool`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.protocol`
  * newPackageName: `org.apache.hc.core5.http.protocol`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.protocol.HttpService`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.HttpService`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.protocol.HttpRequestExecutor`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.HttpRequestExecutor`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.protocol.HttpRequestHandler`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.HttpRequestHandler`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.util`
  * newPackageName: `org.apache.hc.core5.util`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.util.EntityUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.entity.EntityUtils`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.client.utils.URIBuilder`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.net.URIBuilder`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.client.utils.URLEncodedUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.net.URLEncodedUtils`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.client.utils.URIUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.utils.URIUtils`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.client.utils.DateUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.utils.DateUtils`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.client`
  * newPackageName: `org.apache.hc.client5.http`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.CredentialsProvider`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.auth.CredentialsProvider`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.AuthCache`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.auth.AuthCache`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.BackoffManager`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.classic.BackoffManager`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpClient`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.classic.HttpClient`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.ConnectionBackoffStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.classic.ConnectionBackoffStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.CookieStore`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.cookie.CookieStore`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.RedirectStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.protocol.RedirectStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.classic.methods.RequestBuilder`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.support.ClassicRequestBuilder`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.config`
  * newPackageName: `org.apache.hc.core5.http.config`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.config.SocketConfig`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.SocketConfig`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.config.SocketConfig.Builder`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.SocketConfig.Builder`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl`
  * newPackageName: `org.apache.hc.core5.http.impl.io`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.EnglishReasonPhraseCatalog`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.EnglishReasonPhraseCatalog`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.DefaultConnectionReuseStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.DefaultConnectionReuseStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.DefaultHttpRequestFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.nio.DefaultHttpRequestFactory`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.DefaultHttpResponseFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.nio.DefaultHttpResponseFactory`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.conn.util`
  * newPackageName: `org.apache.hc.client5.http.psl`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.psl.DnsUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.utils.DnsUtils`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.psl.InetAddressUtils`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.net.InetAddressUtils`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.conn.routing`
  * newPackageName: `org.apache.hc.client5.http`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.BasicRouteDirector`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.routing.BasicRouteDirector`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpRouteDirector`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.routing.HttpRouteDirector`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpRoutePlanner`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.routing.HttpRoutePlanner`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.conn.ssl`
  * newPackageName: `org.apache.hc.core5.ssl`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.SSLConnectionSocketFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.NoopHostnameVerifier`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.NoopHostnameVerifier`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.DefaultHostnameVerifier`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.DefaultHostnameVerifier`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.TrustSelfSignedStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.TrustSelfSignedStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.TrustAllStrategy`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.TrustAllStrategy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.ssl.SubjectName`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.ssl.SubjectName`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.impl.conn`
  * newPackageName: `org.apache.hc.client5.http.impl.io`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.SystemDefaultDnsResolver`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.SystemDefaultDnsResolver`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.Wire`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.Wire`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.InMemoryDnsResolver`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.InMemoryDnsResolver`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.ConnectionShutdownException`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.ConnectionShutdownException`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.DefaultSchemePortResolver`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultSchemePortResolver`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.DefaultProxyRoutePlanner`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.routing.DefaultProxyRoutePlanner`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.DefaultRoutePlanner`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.routing.DefaultRoutePlanner`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.SystemDefaultRoutePlanner`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.routing.SystemDefaultRoutePlanner`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.DefaultHttpResponseParser`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.impl.io.DefaultHttpResponseParser`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.PoolingClientConnectionManager`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.SchemeRegistryFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.impl.DefaultSchemePortResolver`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http.conn`
  * newPackageName: `org.apache.hc.client5.http`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.ManagedHttpClientConnection`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.io.ManagedHttpClientConnection`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpClientConnectionManager`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.io.HttpClientConnectionManager`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpClientConnectionOperator`
  * newFullyQualifiedTypeName: `org.apache.hc.client5.http.io.HttpClientConnectionOperator`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.EofSensorWatcher`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.EofSensorWatcher`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.EofSensorInputStream`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.EofSensorInputStream`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.client5.http.HttpConnectionFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.HttpConnectionFactory`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `org.apache.http`
  * newPackageName: `org.apache.hc.core5.http`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.RequestLine`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.message.RequestLine`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.RequestLine`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.message.RequestLine`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.HttpClientConnection`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.HttpClientConnection`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.StatusLine`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.message.StatusLine`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.HttpServerConnection`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.HttpServerConnection`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.hc.core5.http.HttpConnectionFactory`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.io.HttpConnectionFactory`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.HttpRequest`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.ClassicHttpRequest`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.http.HttpResponse`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.http.ClassicHttpResponse`
* [Reorder method arguments](../../java/reordermethodarguments.md)
  * methodPattern: `org.apache.hc.core5.http.HttpHost <constructor>(java.lang.String, int, java.lang.String)`
  * newParameterNames: `[scheme, hostname, port]`
  * oldParameterNames: `[hostname, port, scheme]`
* [Reorder method arguments](../../java/reordermethodarguments.md)
  * methodPattern: `org.apache.hc.core5.http.HttpHost <constructor>(java.net.InetAddress, int, java.lang.String)`
  * newParameterNames: `[scheme, address, port]`
  * oldParameterNames: `[address, port, scheme]`
* [Reorder method arguments](../../java/reordermethodarguments.md)
  * methodPattern: `org.apache.hc.core5.http.HttpHost <constructor>(java.net.InetAddress, java.lang.String, int, java.lang.String)`
  * newParameterNames: `[scheme, address, hostname, port]`
  * oldParameterNames: `[address, hostname, port, scheme]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping
displayName: Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x
description: Mapping of all the compatible classes of ApacheHttpClient 5.x from 4.x.
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.client.methods
      newPackageName: org.apache.hc.client5.http.classic.methods
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.classic.methods.CloseableHttpResponse
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.CloseableHttpResponse
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.client.entity
      newPackageName: org.apache.hc.client5.http.entity
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.client.protocol
      newPackageName: org.apache.hc.client5.http.protocol
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.conn.socket
      newPackageName: org.apache.hc.client5.http.socket
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.ssl
      newPackageName: org.apache.hc.core5.ssl
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.concurrent
      newPackageName: org.apache.hc.core5.concurrent
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.auth
      newPackageName: org.apache.hc.client5.http.impl.auth
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.cookie
      newPackageName: org.apache.hc.client5.http.impl.cookie
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.cookie.PublicSuffixListParser
      newFullyQualifiedTypeName: org.apache.hc.client5.http.psl.PublicSuffixListParser
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.cookie.DateUtils
      newFullyQualifiedTypeName: org.apache.hc.client5.http.utils.DateUtils
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.client
      newPackageName: org.apache.hc.client5.http.impl.classic
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.impl.client.BasicAuthCache
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.auth.BasicAuthCache
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.BasicAuthCache
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.auth.BasicAuthCache
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.HttpAuthenticator
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.auth.HttpAuthenticator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.SystemDefaultCredentialsProvider
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.auth.SystemDefaultCredentialsProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.DefaultClientConnectionReuseStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultClientConnectionReuseStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.DefaultRedirectStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultRedirectStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.RedirectLocations
      newFullyQualifiedTypeName: org.apache.hc.client5.http.protocol.RedirectLocations
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.BasicCookieStore
      newFullyQualifiedTypeName: org.apache.hc.client5.http.cookie.BasicCookieStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.DefaultConnectionKeepAliveStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultConnectionKeepAliveStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.IdleConnectionEvictor
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.IdleConnectionEvictor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.TunnelRefusedException
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.TunnelRefusedException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.NoopUserTokenHandler
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.NoopUserTokenHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.DefaultUserTokenHandler
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultUserTokenHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.BasicCredentialsProvider
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.auth.BasicCredentialsProvider
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.auth
      newPackageName: org.apache.hc.client5.http.auth
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.cookie
      newPackageName: org.apache.hc.client5.http.cookie
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.cookie
      newPackageName: org.apache.hc.client5.http.cookie
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.annotation
      newPackageName: org.apache.hc.core5.annotation
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.client.config
      newPackageName: org.apache.hc.client5.http.config
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.hc.client5.http.config.CookieSpecs.IGNORE_COOKIES
      fullyQualifiedConstantName: org.apache.hc.client5.http.cookie.StandardCookieSpec.IGNORE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.hc.client5.http.config.CookieSpecs.STANDARD
      fullyQualifiedConstantName: org.apache.hc.client5.http.cookie.StandardCookieSpec.RELAXED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.hc.client5.http.config.CookieSpecs.STANDARD_STRICT
      fullyQualifiedConstantName: org.apache.hc.client5.http.cookie.StandardCookieSpec.STRICT
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.annotation
      newPackageName: org.apache.hc.core5.annotation
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.entity
      newPackageName: org.apache.hc.core5.http.io.entity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.io.entity.ContentLengthStrategy
      newFullyQualifiedTypeName: org.apache.hc.core5.http.ContentLengthStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.io.entity.ContentType
      newFullyQualifiedTypeName: org.apache.hc.core5.http.ContentType
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.bootstrap
      newPackageName: org.apache.hc.core5.http.impl.bootstrap
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.execchain
      newPackageName: org.apache.hc.client5.http.impl.classic
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.classic.TunnelRefusedException
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.TunnelRefusedException
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.io
      newPackageName: org.apache.hc.core5.http.impl.io
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.DefaultHttpResponseParserFactory
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.DefaultHttpResponseParserFactory
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.io
      newPackageName: org.apache.hc.core5.http.io
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.message
      newPackageName: org.apache.hc.core5.http.message
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.pool
      newPackageName: org.apache.hc.core5.pool
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.protocol
      newPackageName: org.apache.hc.core5.http.protocol
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.protocol.HttpService
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.HttpService
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.protocol.HttpRequestExecutor
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.HttpRequestExecutor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.protocol.HttpRequestHandler
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.HttpRequestHandler
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.util
      newPackageName: org.apache.hc.core5.util
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.util.EntityUtils
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.entity.EntityUtils
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.client.utils.URIBuilder
      newFullyQualifiedTypeName: org.apache.hc.core5.net.URIBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.client.utils.URLEncodedUtils
      newFullyQualifiedTypeName: org.apache.hc.core5.net.URLEncodedUtils
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.client.utils.URIUtils
      newFullyQualifiedTypeName: org.apache.hc.client5.http.utils.URIUtils
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.client.utils.DateUtils
      newFullyQualifiedTypeName: org.apache.hc.client5.http.utils.DateUtils
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.client
      newPackageName: org.apache.hc.client5.http
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.CredentialsProvider
      newFullyQualifiedTypeName: org.apache.hc.client5.http.auth.CredentialsProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.AuthCache
      newFullyQualifiedTypeName: org.apache.hc.client5.http.auth.AuthCache
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.BackoffManager
      newFullyQualifiedTypeName: org.apache.hc.client5.http.classic.BackoffManager
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpClient
      newFullyQualifiedTypeName: org.apache.hc.client5.http.classic.HttpClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.ConnectionBackoffStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.classic.ConnectionBackoffStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.CookieStore
      newFullyQualifiedTypeName: org.apache.hc.client5.http.cookie.CookieStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.RedirectStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.protocol.RedirectStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.classic.methods.RequestBuilder
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.support.ClassicRequestBuilder
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.config
      newPackageName: org.apache.hc.core5.http.config
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.config.SocketConfig
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.SocketConfig
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.config.SocketConfig.Builder
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.SocketConfig.Builder
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl
      newPackageName: org.apache.hc.core5.http.impl.io
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.EnglishReasonPhraseCatalog
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.EnglishReasonPhraseCatalog
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.DefaultConnectionReuseStrategy
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.DefaultConnectionReuseStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.DefaultHttpRequestFactory
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.nio.DefaultHttpRequestFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.DefaultHttpResponseFactory
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.nio.DefaultHttpResponseFactory
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.conn.util
      newPackageName: org.apache.hc.client5.http.psl
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.psl.DnsUtils
      newFullyQualifiedTypeName: org.apache.hc.client5.http.utils.DnsUtils
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.psl.InetAddressUtils
      newFullyQualifiedTypeName: org.apache.hc.core5.net.InetAddressUtils
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.conn.routing
      newPackageName: org.apache.hc.client5.http
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.BasicRouteDirector
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.routing.BasicRouteDirector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpRouteDirector
      newFullyQualifiedTypeName: org.apache.hc.client5.http.routing.HttpRouteDirector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpRoutePlanner
      newFullyQualifiedTypeName: org.apache.hc.client5.http.routing.HttpRoutePlanner
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.conn.ssl
      newPackageName: org.apache.hc.core5.ssl
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.SSLConnectionSocketFactory
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.SSLConnectionSocketFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.NoopHostnameVerifier
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.NoopHostnameVerifier
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.DefaultHostnameVerifier
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.DefaultHostnameVerifier
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.TrustSelfSignedStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.TrustSelfSignedStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.TrustAllStrategy
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.TrustAllStrategy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.ssl.SubjectName
      newFullyQualifiedTypeName: org.apache.hc.client5.http.ssl.SubjectName
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.impl.conn
      newPackageName: org.apache.hc.client5.http.impl.io
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.SystemDefaultDnsResolver
      newFullyQualifiedTypeName: org.apache.hc.client5.http.SystemDefaultDnsResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.Wire
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.Wire
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.InMemoryDnsResolver
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.InMemoryDnsResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.ConnectionShutdownException
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.ConnectionShutdownException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.DefaultSchemePortResolver
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultSchemePortResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.DefaultProxyRoutePlanner
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.routing.DefaultProxyRoutePlanner
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.DefaultRoutePlanner
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.routing.DefaultRoutePlanner
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.SystemDefaultRoutePlanner
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.routing.SystemDefaultRoutePlanner
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.DefaultHttpResponseParser
      newFullyQualifiedTypeName: org.apache.hc.core5.http.impl.io.DefaultHttpResponseParser
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.PoolingClientConnectionManager
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.impl.SchemeRegistryFactory
      newFullyQualifiedTypeName: org.apache.hc.client5.http.impl.DefaultSchemePortResolver
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http.conn
      newPackageName: org.apache.hc.client5.http
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.ManagedHttpClientConnection
      newFullyQualifiedTypeName: org.apache.hc.client5.http.io.ManagedHttpClientConnection
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpClientConnectionManager
      newFullyQualifiedTypeName: org.apache.hc.client5.http.io.HttpClientConnectionManager
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpClientConnectionOperator
      newFullyQualifiedTypeName: org.apache.hc.client5.http.io.HttpClientConnectionOperator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.EofSensorWatcher
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.EofSensorWatcher
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.EofSensorInputStream
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.EofSensorInputStream
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.client5.http.HttpConnectionFactory
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.HttpConnectionFactory
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.http
      newPackageName: org.apache.hc.core5.http
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.RequestLine
      newFullyQualifiedTypeName: org.apache.hc.core5.http.message.RequestLine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.RequestLine
      newFullyQualifiedTypeName: org.apache.hc.core5.http.message.RequestLine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.HttpClientConnection
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.HttpClientConnection
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.StatusLine
      newFullyQualifiedTypeName: org.apache.hc.core5.http.message.StatusLine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.HttpServerConnection
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.HttpServerConnection
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.hc.core5.http.HttpConnectionFactory
      newFullyQualifiedTypeName: org.apache.hc.core5.http.io.HttpConnectionFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.HttpRequest
      newFullyQualifiedTypeName: org.apache.hc.core5.http.ClassicHttpRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.HttpResponse
      newFullyQualifiedTypeName: org.apache.hc.core5.http.ClassicHttpResponse
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.apache.hc.core5.http.HttpHost <constructor>(java.lang.String, int, java.lang.String)
      newParameterNames: [scheme, hostname, port]
      oldParameterNames: [hostname, port, scheme]
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.apache.hc.core5.http.HttpHost <constructor>(java.net.InetAddress, int, java.lang.String)
      newParameterNames: [scheme, address, port]
      oldParameterNames: [address, port, scheme]
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.apache.hc.core5.http.HttpHost <constructor>(java.net.InetAddress, java.lang.String, int, java.lang.String)
      newParameterNames: [scheme, address, hostname, port]
      oldParameterNames: [address, hostname, port, scheme]

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.7.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.7.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:1.7.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping")
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.7.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeApacheHttpClient_5_ClassMapping
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping)

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

