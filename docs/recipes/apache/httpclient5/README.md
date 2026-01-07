---
description: HttpClient 5 OpenRewrite recipes.
---

# HttpClient 5

_Recipes for migrating to [Apache HttpClient 5.x](https://hc.apache.org/httpcomponents-client-5.4.x/)._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Adds `TimeUnit` to timeouts and duration methods](./upgradeapachehttpclient_5_timeunit.md)
* [Migrate Apache HttpCore Nio Input Buffer classes to Apache HttpCore 5.x](./upgradeapachehttpcore_5_nioinputbuffers.md)
* [Migrate Apache HttpCore Nio Output Buffer classes to Apache HttpCore 5.x](./upgradeapachehttpcore_5_niooutputbuffers.md)
* [Migrate `clear` to ApacheHttpClient 5.x `CredentialsStore`](./credentialsstoreclear.md)
* [Migrate from httpcore-nio to ApacheHttpClient 5.x core dependency](./upgradeapachehttpcoreniodependencies.md)
* [Migrate from org.apache.httpcomponents to ApacheHttpClient 5.x dependencies](./upgradeapachehttpclientdependencies.md)
* [Migrate `setCredentials` to ApacheHttpClient 5.x `CredentialsStore`](./credentialsstoresetcredentials.md)
* [Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x](./upgradeapachehttpcore_5_nioclassmapping.md)
* [Migrate to Apache HttpCore Nio Util Classes to Apache HttpCore 5.x](./upgradeapachehttpcore_5_nioutilmapping.md)
* [Migrate to ApacheHttpClient 5.x](./upgradeapachehttpclient_5.md)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](./upgradeapachehttpclient_5_classmapping.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](./upgradeapachehttpclient_5_deprecatedmethods.md)
* [Migrate to ApacheHttpClient 5.x deprecated methods from 4.x](./statusline.md)

## Recipes

* [Adds a TimeUnit argument to the matched method invocations](./addtimeunitargument.md)
* [Adds offset and length arguments to the read method of SharedInputBuffer](./inputbufferreadaddoffsetandlengtharguments.md)
* [Adds offset and length arguments to the write method of SharedOutputBuffer](./outputbufferwriteaddoffsetandlengtharguments.md)
* [Changes an argument to a `TimeValue` for matched method invocations](./changeargumenttotimevalue.md)
* [Migrate `RequestConfig` to httpclient5](./migraterequestconfig.md)
* [Migrate `UsernamePasswordCredentials` to httpclient5](./usernamepasswordcredentials.md)
* [Migrate deprecated `SSLConnectionSocketFactory` to `DefaultClientTlsStrategy`](./migratesslconnectionsocketfactory.md)
* [Remove ByteBufferAllocator implementations](./removebytebufferallocators.md)
* [Replace `new StringEntity(String, String)` with `new StringEntity(String, Charset)`](./migratestringentitystringcharsetconstructor.md)
* [Replaces `AuthScope.ANY`](./migrateauthscope.md)
* [Replaces deprecated `HttpRequestBase::getRequestLine()`](./newrequestline.md)
* [Replaces deprecated `HttpResponse::getStatusLine()`](./newstatusline.md)


