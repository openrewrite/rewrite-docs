---
sidebar_label: "Migrate to ApacheHttpClient 5.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to ApacheHttpClient 5.x

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient\_5**

_Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [httpclient](/reference/recipes-by-tag#httpclient)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrates to ApacheHttpClient 4.5.x](../../apache/httpclient4/upgradeapachehttpclient_4_5)
* [Migrate from org.apache.httpcomponents to ApacheHttpClient 5.x dependencies](../../apache/httpclient5/upgradeapachehttpclientdependencies)
* [Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x](../../apache/httpclient5/upgradeapachehttpcore_5_nioclassmapping)
* [Remove duplicate Maven dependencies](../../maven/removeduplicatedependencies)
* [Migrate `RequestConfig` to httpclient5](../../apache/httpclient5/migraterequestconfig)
* [Migrate `UsernamePasswordCredentials` to httpclient5](../../apache/httpclient5/usernamepasswordcredentials)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](../../apache/httpclient5/upgradeapachehttpclient_5_classmapping)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods)
* [Adds `TimeUnit` to timeouts and duration methods](../../apache/httpclient5/upgradeapachehttpclient_5_timeunit)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](../../apache/httpclient5/statusline)
* [Replaces `AuthScope.ANY`](../../apache/httpclient5/migrateauthscope)
* [Migrate deprecated `SSLConnectionSocketFactory` to `DefaultClientTlsStrategy`](../../apache/httpclient5/migratesslconnectionsocketfactory)
* [Delete method argument](../../java/deletemethodargument)
  * methodPattern: `org.apache.hc.client5.http.impl.auth.BasicSchemeFactory <constructor>(java.nio.charset.Charset)`
  * argumentIndex: `0`
* [Delete method argument](../../java/deletemethodargument)
  * methodPattern: `org.apache.hc.client5.http.impl.auth.DigestSchemeFactory <constructor>(java.nio.charset.Charset)`
  * argumentIndex: `0`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5
displayName: Migrate to ApacheHttpClient 5.x
description: |
  Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.
tags:
  - apache
  - httpclient
recipeList:
  - org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClientDependencies
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioClassMapping
  - org.openrewrite.maven.RemoveDuplicateDependencies
  - org.openrewrite.apache.httpclient5.MigrateRequestConfig
  - org.openrewrite.apache.httpclient5.UsernamePasswordCredentials
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit
  - org.openrewrite.apache.httpclient5.StatusLine
  - org.openrewrite.apache.httpclient5.MigrateAuthScope
  - org.openrewrite.apache.httpclient5.MigrateSSLConnectionSocketFactory
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.apache.hc.client5.http.impl.auth.BasicSchemeFactory <constructor>(java.nio.charset.Charset)
      argumentIndex: 0
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.apache.hc.client5.http.impl.auth.DigestSchemeFactory <constructor>(java.nio.charset.Charset)
      argumentIndex: 0

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Framework 6.0](/recipes/java/spring/framework/upgradespringframework_6_0.md)

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MinimalField;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.util.EntityUtils;

class A {
    void method(HttpEntity entity, String urlStr) throws Exception {
        HttpUriRequest getRequest = new HttpGet(urlStr);
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
        MinimalField field = new MinimalField("A", "B");
        EntityUtils.consume(entity);
    }
}
```

###### After
```java
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.classic.methods.HttpUriRequest;
import org.apache.hc.client5.http.entity.mime.MimeField;
import org.apache.hc.client5.http.entity.mime.MultipartEntityBuilder;
import org.apache.hc.client5.http.entity.mime.StringBody;

class A {
    void method(HttpEntity entity, String urlStr) throws Exception {
        HttpUriRequest getRequest = new HttpGet(urlStr);
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
        MimeField field = new MimeField("A", "B");
        EntityUtils.consume(entity);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,8 +1,8 @@
-import org.apache.http.HttpEntity;
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.client.methods.HttpUriRequest;
-import org.apache.http.entity.ContentType;
-import org.apache.http.entity.mime.MinimalField;
-import org.apache.http.entity.mime.MultipartEntityBuilder;
-import org.apache.http.entity.mime.content.StringBody;
-import org.apache.http.util.EntityUtils;
+import org.apache.hc.core5.http.ContentType;
+import org.apache.hc.core5.http.io.entity.EntityUtils;
+import org.apache.hc.core5.http.HttpEntity;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.client5.http.classic.methods.HttpUriRequest;
+import org.apache.hc.client5.http.entity.mime.MimeField;
+import org.apache.hc.client5.http.entity.mime.MultipartEntityBuilder;
+import org.apache.hc.client5.http.entity.mime.StringBody;

@@ -15,1 +15,1 @@
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
-       MinimalField field = new MinimalField("A", "B");
+       MimeField field = new MimeField("A", "B");
        EntityUtils.consume(entity);
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.net.ssl.SSLContext;

import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContexts;

class HttpClientManager {
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
        SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(sslContext);
        HttpClients.custom().setSSLSocketFactory(sslConnectionSocketFactory).build();
    }
}
```

###### After
```java
import javax.net.ssl.SSLContext;

import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
import org.apache.hc.client5.http.io.HttpClientConnectionManager;
import org.apache.hc.client5.http.ssl.DefaultClientTlsStrategy;
import org.apache.hc.client5.http.ssl.TlsSocketStrategy;
import org.apache.hc.core5.ssl.SSLContexts;

class HttpClientManager {
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
        TlsSocketStrategy tlsSocketStrategy = new DefaultClientTlsStrategy(sslContext);
        HttpClientConnectionManager cm = PoolingHttpClientConnectionManagerBuilder.create().setTlsSocketStrategy(tlsSocketStrategy).build();
        HttpClients.custom().setConnectionManager(cm).build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,3 +3,6 @@
import javax.net.ssl.SSLContext;

-import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
-import org.apache.http.impl.client.HttpClients;
-import org.apache.http.ssl.SSLContexts;
+import org.apache.hc.client5.http.impl.classic.HttpClients;
+import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
+import org.apache.hc.client5.http.io.HttpClientConnectionManager;
+import org.apache.hc.client5.http.ssl.DefaultClientTlsStrategy;
+import org.apache.hc.client5.http.ssl.TlsSocketStrategy;
+import org.apache.hc.core5.ssl.SSLContexts;

@@ -10,2 +13,3 @@
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
-       SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(sslContext);
-       HttpClients.custom().setSSLSocketFactory(sslConnectionSocketFactory).build();
+       TlsSocketStrategy tlsSocketStrategy = new DefaultClientTlsStrategy(sslContext);
+       HttpClientConnectionManager cm = PoolingHttpClientConnectionManagerBuilder.create().setTlsSocketStrategy(tlsSocketStrategy).build();
+       HttpClients.custom().setConnectionManager(cm).build();
    }
```
</TabItem>
</Tabs>

---

##### Example 3


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.auth.AuthScope;

class A {
    void method() {
        AuthScope any = AuthScope.ANY;
    }
}
```

###### After
```java
import org.apache.hc.client5.http.auth.AuthScope;

class A {
    void method() {
        AuthScope any = new AuthScope(null, -1);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.http.auth.AuthScope;
+import org.apache.hc.client5.http.auth.AuthScope;

@@ -5,1 +5,1 @@
class A {
    void method() {
-       AuthScope any = AuthScope.ANY;
+       AuthScope any = new AuthScope(null, -1);
    }
```
</TabItem>
</Tabs>

---

##### Example 4


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.client.methods.HttpGet;
import org.apache.http.ProtocolVersion;

class A {
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        System.out.println("httpGet.getRequestLine() :: " + httpGet.getRequestLine());
        String method = httpGet.getRequestLine().getMethod();
        String uri = httpGet.getRequestLine().getUri();
        ProtocolVersion version = httpGet.getRequestLine().getProtocolVersion();
    }
}
```

###### After
```java
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.core5.http.ProtocolVersion;
import org.apache.hc.core5.http.message.RequestLine;

class A {
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        System.out.println("httpGet.getRequestLine() :: " + new RequestLine(httpGet));
        String method = new RequestLine(httpGet).getMethod();
        String uri = new RequestLine(httpGet).getUri();
        ProtocolVersion version = new RequestLine(httpGet).getProtocolVersion();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.ProtocolVersion;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.core5.http.ProtocolVersion;
+import org.apache.hc.core5.http.message.RequestLine;

@@ -7,4 +8,4 @@
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
-       System.out.println("httpGet.getRequestLine() :: " + httpGet.getRequestLine());
-       String method = httpGet.getRequestLine().getMethod();
-       String uri = httpGet.getRequestLine().getUri();
-       ProtocolVersion version = httpGet.getRequestLine().getProtocolVersion();
+       System.out.println("httpGet.getRequestLine() :: " + new RequestLine(httpGet));
+       String method = new RequestLine(httpGet).getMethod();
+       String uri = new RequestLine(httpGet).getUri();
+       ProtocolVersion version = new RequestLine(httpGet).getProtocolVersion();
    }
```
</TabItem>
</Tabs>

---

##### Example 5


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ProtocolVersion;

import java.io.IOException;

class A {
    void method() throws IOException {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        CloseableHttpClient instance = HttpClientBuilder.create().build();
        CloseableHttpResponse response = instance.execute(httpGet);

        System.out.println("response.getStatusLine() :: " + response.getStatusLine());
        int statusCode = response.getStatusLine().getStatusCode();
        String reason = response.getStatusLine().getReasonPhrase();
        ProtocolVersion version = response.getStatusLine().getProtocolVersion();
    }
}
```

###### After
```java
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.core5.http.HttpStatus;
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClientBuilder;
import org.apache.hc.core5.http.ProtocolVersion;
import org.apache.hc.core5.http.message.StatusLine;

import java.io.IOException;

class A {
    void method() throws IOException {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        CloseableHttpClient instance = HttpClientBuilder.create().build();
        CloseableHttpResponse response = instance.execute(httpGet);

        System.out.println("response.getStatusLine() :: " + new StatusLine(response));
        int statusCode = response.getCode();
        String reason = response.getReasonPhrase();
        ProtocolVersion version = response.getVersion();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,6 +1,7 @@
-import org.apache.http.HttpStatus;
-import org.apache.http.client.methods.CloseableHttpResponse;
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.impl.client.CloseableHttpClient;
-import org.apache.http.impl.client.HttpClientBuilder;
-import org.apache.http.ProtocolVersion;
+import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
+import org.apache.hc.core5.http.HttpStatus;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
+import org.apache.hc.client5.http.impl.classic.HttpClientBuilder;
+import org.apache.hc.core5.http.ProtocolVersion;
+import org.apache.hc.core5.http.message.StatusLine;

@@ -16,4 +17,4 @@
        CloseableHttpResponse response = instance.execute(httpGet);

-       System.out.println("response.getStatusLine() :: " + response.getStatusLine());
-       int statusCode = response.getStatusLine().getStatusCode();
-       String reason = response.getStatusLine().getReasonPhrase();
-       ProtocolVersion version = response.getStatusLine().getProtocolVersion();
+       System.out.println("response.getStatusLine() :: " + new StatusLine(response));
+       int statusCode = response.getCode();
+       String reason = response.getReasonPhrase();
+       ProtocolVersion version = response.getVersion();
    }
```
</TabItem>
</Tabs>

---

##### Example 6


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.client.config.CookieSpecs;

class A {
    void method() {
        String c1 = CookieSpecs.IGNORE_COOKIES;
        String c2 = CookieSpecs.STANDARD;
        String c3 = CookieSpecs.STANDARD_STRICT;
    }
}
```

###### After
```java
import org.apache.hc.client5.http.cookie.StandardCookieSpec;

class A {
    void method() {
        String c1 = StandardCookieSpec.IGNORE;
        String c2 = StandardCookieSpec.RELAXED;
        String c3 = StandardCookieSpec.STRICT;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.http.client.config.CookieSpecs;
+import org.apache.hc.client5.http.cookie.StandardCookieSpec;

@@ -5,3 +5,3 @@
class A {
    void method() {
-       String c1 = CookieSpecs.IGNORE_COOKIES;
-       String c2 = CookieSpecs.STANDARD;
-       String c3 = CookieSpecs.STANDARD_STRICT;
+       String c1 = StandardCookieSpec.IGNORE;
+       String c2 = StandardCookieSpec.RELAXED;
+       String c3 = StandardCookieSpec.STRICT;
    }
```
</TabItem>
</Tabs>

---

##### Example 7


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MinimalField;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.util.EntityUtils;

class A {
    void method(HttpEntity entity, String urlStr) throws Exception {
        HttpUriRequest getRequest = new HttpGet(urlStr);
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
        MinimalField field = new MinimalField("A", "B");
        EntityUtils.consume(entity);
    }
}
```

###### After
```java
import org.apache.hc.core5.http.ContentType;
import org.apache.hc.core5.http.io.entity.EntityUtils;
import org.apache.hc.core5.http.HttpEntity;
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.classic.methods.HttpUriRequest;
import org.apache.hc.client5.http.entity.mime.MimeField;
import org.apache.hc.client5.http.entity.mime.MultipartEntityBuilder;
import org.apache.hc.client5.http.entity.mime.StringBody;

class A {
    void method(HttpEntity entity, String urlStr) throws Exception {
        HttpUriRequest getRequest = new HttpGet(urlStr);
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
        MimeField field = new MimeField("A", "B");
        EntityUtils.consume(entity);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,8 +1,8 @@
-import org.apache.http.HttpEntity;
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.client.methods.HttpUriRequest;
-import org.apache.http.entity.ContentType;
-import org.apache.http.entity.mime.MinimalField;
-import org.apache.http.entity.mime.MultipartEntityBuilder;
-import org.apache.http.entity.mime.content.StringBody;
-import org.apache.http.util.EntityUtils;
+import org.apache.hc.core5.http.ContentType;
+import org.apache.hc.core5.http.io.entity.EntityUtils;
+import org.apache.hc.core5.http.HttpEntity;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.client5.http.classic.methods.HttpUriRequest;
+import org.apache.hc.client5.http.entity.mime.MimeField;
+import org.apache.hc.client5.http.entity.mime.MultipartEntityBuilder;
+import org.apache.hc.client5.http.entity.mime.StringBody;

@@ -15,1 +15,1 @@
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        StringBody body = new StringBody("stringbody", ContentType.TEXT_PLAIN);
-       MinimalField field = new MinimalField("A", "B");
+       MimeField field = new MimeField("A", "B");
        EntityUtils.consume(entity);
```
</TabItem>
</Tabs>

---

##### Example 8


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.net.ssl.SSLContext;

import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContexts;

class HttpClientManager {
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
        SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(sslContext);
        HttpClients.custom().setSSLSocketFactory(sslConnectionSocketFactory).build();
    }
}
```

###### After
```java
import javax.net.ssl.SSLContext;

import org.apache.hc.client5.http.impl.classic.HttpClients;
import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
import org.apache.hc.client5.http.io.HttpClientConnectionManager;
import org.apache.hc.client5.http.ssl.DefaultClientTlsStrategy;
import org.apache.hc.client5.http.ssl.TlsSocketStrategy;
import org.apache.hc.core5.ssl.SSLContexts;

class HttpClientManager {
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
        TlsSocketStrategy tlsSocketStrategy = new DefaultClientTlsStrategy(sslContext);
        HttpClientConnectionManager cm = PoolingHttpClientConnectionManagerBuilder.create().setTlsSocketStrategy(tlsSocketStrategy).build();
        HttpClients.custom().setConnectionManager(cm).build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,3 +3,6 @@
import javax.net.ssl.SSLContext;

-import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
-import org.apache.http.impl.client.HttpClients;
-import org.apache.http.ssl.SSLContexts;
+import org.apache.hc.client5.http.impl.classic.HttpClients;
+import org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManagerBuilder;
+import org.apache.hc.client5.http.io.HttpClientConnectionManager;
+import org.apache.hc.client5.http.ssl.DefaultClientTlsStrategy;
+import org.apache.hc.client5.http.ssl.TlsSocketStrategy;
+import org.apache.hc.core5.ssl.SSLContexts;

@@ -10,2 +13,3 @@
    void create() {
        SSLContext sslContext = SSLContexts.createDefault();
-       SSLConnectionSocketFactory sslConnectionSocketFactory = new SSLConnectionSocketFactory(sslContext);
-       HttpClients.custom().setSSLSocketFactory(sslConnectionSocketFactory).build();
+       TlsSocketStrategy tlsSocketStrategy = new DefaultClientTlsStrategy(sslContext);
+       HttpClientConnectionManager cm = PoolingHttpClientConnectionManagerBuilder.create().setTlsSocketStrategy(tlsSocketStrategy).build();
+       HttpClients.custom().setConnectionManager(cm).build();
    }
```
</TabItem>
</Tabs>

---

##### Example 9


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.auth.AuthScope;

class A {
    void method() {
        AuthScope any = AuthScope.ANY;
    }
}
```

###### After
```java
import org.apache.hc.client5.http.auth.AuthScope;

class A {
    void method() {
        AuthScope any = new AuthScope(null, -1);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.http.auth.AuthScope;
+import org.apache.hc.client5.http.auth.AuthScope;

@@ -5,1 +5,1 @@
class A {
    void method() {
-       AuthScope any = AuthScope.ANY;
+       AuthScope any = new AuthScope(null, -1);
    }
```
</TabItem>
</Tabs>

---

##### Example 10


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.client.methods.HttpGet;
import org.apache.http.ProtocolVersion;

class A {
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        System.out.println("httpGet.getRequestLine() :: " + httpGet.getRequestLine());
        String method = httpGet.getRequestLine().getMethod();
        String uri = httpGet.getRequestLine().getUri();
        ProtocolVersion version = httpGet.getRequestLine().getProtocolVersion();
    }
}
```

###### After
```java
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.core5.http.ProtocolVersion;
import org.apache.hc.core5.http.message.RequestLine;

class A {
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        System.out.println("httpGet.getRequestLine() :: " + new RequestLine(httpGet));
        String method = new RequestLine(httpGet).getMethod();
        String uri = new RequestLine(httpGet).getUri();
        ProtocolVersion version = new RequestLine(httpGet).getProtocolVersion();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.ProtocolVersion;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.core5.http.ProtocolVersion;
+import org.apache.hc.core5.http.message.RequestLine;

@@ -7,4 +8,4 @@
    void method() {
        HttpGet httpGet = new HttpGet("https://moderne.io");
-       System.out.println("httpGet.getRequestLine() :: " + httpGet.getRequestLine());
-       String method = httpGet.getRequestLine().getMethod();
-       String uri = httpGet.getRequestLine().getUri();
-       ProtocolVersion version = httpGet.getRequestLine().getProtocolVersion();
+       System.out.println("httpGet.getRequestLine() :: " + new RequestLine(httpGet));
+       String method = new RequestLine(httpGet).getMethod();
+       String uri = new RequestLine(httpGet).getUri();
+       ProtocolVersion version = new RequestLine(httpGet).getProtocolVersion();
    }
```
</TabItem>
</Tabs>

---

##### Example 11


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.ProtocolVersion;

import java.io.IOException;

class A {
    void method() throws IOException {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        CloseableHttpClient instance = HttpClientBuilder.create().build();
        CloseableHttpResponse response = instance.execute(httpGet);

        System.out.println("response.getStatusLine() :: " + response.getStatusLine());
        int statusCode = response.getStatusLine().getStatusCode();
        String reason = response.getStatusLine().getReasonPhrase();
        ProtocolVersion version = response.getStatusLine().getProtocolVersion();
    }
}
```

###### After
```java
import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
import org.apache.hc.core5.http.HttpStatus;
import org.apache.hc.client5.http.classic.methods.HttpGet;
import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
import org.apache.hc.client5.http.impl.classic.HttpClientBuilder;
import org.apache.hc.core5.http.ProtocolVersion;
import org.apache.hc.core5.http.message.StatusLine;

import java.io.IOException;

class A {
    void method() throws IOException {
        HttpGet httpGet = new HttpGet("https://moderne.io");
        CloseableHttpClient instance = HttpClientBuilder.create().build();
        CloseableHttpResponse response = instance.execute(httpGet);

        System.out.println("response.getStatusLine() :: " + new StatusLine(response));
        int statusCode = response.getCode();
        String reason = response.getReasonPhrase();
        ProtocolVersion version = response.getVersion();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,6 +1,7 @@
-import org.apache.http.HttpStatus;
-import org.apache.http.client.methods.CloseableHttpResponse;
-import org.apache.http.client.methods.HttpGet;
-import org.apache.http.impl.client.CloseableHttpClient;
-import org.apache.http.impl.client.HttpClientBuilder;
-import org.apache.http.ProtocolVersion;
+import org.apache.hc.client5.http.impl.classic.CloseableHttpResponse;
+import org.apache.hc.core5.http.HttpStatus;
+import org.apache.hc.client5.http.classic.methods.HttpGet;
+import org.apache.hc.client5.http.impl.classic.CloseableHttpClient;
+import org.apache.hc.client5.http.impl.classic.HttpClientBuilder;
+import org.apache.hc.core5.http.ProtocolVersion;
+import org.apache.hc.core5.http.message.StatusLine;

@@ -16,4 +17,4 @@
        CloseableHttpResponse response = instance.execute(httpGet);

-       System.out.println("response.getStatusLine() :: " + response.getStatusLine());
-       int statusCode = response.getStatusLine().getStatusCode();
-       String reason = response.getStatusLine().getReasonPhrase();
-       ProtocolVersion version = response.getStatusLine().getProtocolVersion();
+       System.out.println("response.getStatusLine() :: " + new StatusLine(response));
+       int statusCode = response.getCode();
+       String reason = response.getReasonPhrase();
+       ProtocolVersion version = response.getVersion();
    }
```
</TabItem>
</Tabs>

---

##### Example 12


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.client.config.CookieSpecs;

class A {
    void method() {
        String c1 = CookieSpecs.IGNORE_COOKIES;
        String c2 = CookieSpecs.STANDARD;
        String c3 = CookieSpecs.STANDARD_STRICT;
    }
}
```

###### After
```java
import org.apache.hc.client5.http.cookie.StandardCookieSpec;

class A {
    void method() {
        String c1 = StandardCookieSpec.IGNORE;
        String c2 = StandardCookieSpec.RELAXED;
        String c3 = StandardCookieSpec.STRICT;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.http.client.config.CookieSpecs;
+import org.apache.hc.client5.http.cookie.StandardCookieSpec;

@@ -5,3 +5,3 @@
class A {
    void method() {
-       String c1 = CookieSpecs.IGNORE_COOKIES;
-       String c2 = CookieSpecs.STANDARD;
-       String c3 = CookieSpecs.STANDARD_STRICT;
+       String c1 = StandardCookieSpec.IGNORE;
+       String c2 = StandardCookieSpec.RELAXED;
+       String c3 = StandardCookieSpec.STRICT;
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}")
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
        rewrite("org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5")
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
            <recipe>org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeApacheHttpClient_5
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5" />

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
