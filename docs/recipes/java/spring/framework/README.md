---
description: Spring Framework OpenRewrite recipes.
---

# Spring Framework

## Categories

* [Beansxml](/recipes/java/spring/framework/beansxml)
* [Webxml](/recipes/java/spring/framework/webxml)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Add Spring Framework modular dependencies](./modularspringframeworkdependencies.md)
* [Migrate Bean XML properties deprecated in Spring Framework 3.0](./migratedeprecatedbeanxmlproperties.md)
* [Migrate `DefaultResponseErrorHandler.handleError` method signature](./migratedefaultresponseerrorhandler.md)
* [Migrate breaking changes in `ResponseStatusException`](./migrateresponsestatusexception.md)
* [Migrate removed Spring `Assert` methods](./migratespringassert.md)
* [Migrate to Spring Framework 3.x](./upgradespringframework_3_0.md)
* [Migrate to Spring Framework 5.0](./upgradespringframework_5_0.md)
* [Migrate to Spring Framework 5.1](./upgradespringframework_5_1.md)
* [Migrate to Spring Framework 5.2](./upgradespringframework_5_2.md)
* [Migrate to Spring Framework 5.3](./upgradespringframework_5_3-moderne-edition.md)
* [Migrate to Spring Framework 5.3](./upgradespringframework_5_3-community-edition.md)
* [Migrate to Spring Framework 6.0](./upgradespringframework_6_0.md)
* [Migrate to Spring Framework 6.1](./upgradespringframework_6_1.md)
* [Migrate to Spring Framework 6.2](./upgradespringframework_6_2.md)
* [Migrate to Spring Framework 7.0](./upgradespringframework_7_0.md)

## Recipes

* [`@Bean` methods may not return `void`](./beanmethodreturnnull.md)
* [Add `@Nullable` to optional Spring web parameters](./nullablespringwebparameters.md)
* [Convert `InstantiationAwareBeanPostProcessorAdapter` to `SmartInstantiationAwareBeanPostProcessor`](./migrateinstantiationawarebeanpostprocessoradapter.md)
* [Convert JAX-RS annotations to Spring Web](./jaxrstospringweb.md)
* [Is likely a Spring Framework project](./islikelyspringframework.md)
* [Migrate `HandlerInterceptorAdapter` to `HandlerInterceptor`](./migratehandlerinterceptor.md)
* [Migrate `HandlerResult.hasExceptionHandler()` to `getExceptionHandler()`](./migratehandlerresulthasexceptionhandlermethod.md)
* [Migrate `MethodArgumentNotValidException.errorsToStringList` and `resolveErrorMessages`](./migratemethodargumentnotvalidexceptionerrormethod.md)
* [Migrate `ResourceHttpMessageWriter.addHeaders`](./migrateresourcehttpmessagewriteraddheadersmethod.md)
* [Migrate `ResponseEntityExceptionHandler` from HttpStatus to HttpStatusCode](./migrateresponseentityexceptionhandlerhttpstatustohttpstatuscode.md)
* [Migrate `ResponseStatusException#getRawStatusCode()` to `getStatusCode().value()`](./migrateresponsestatusexceptiongetrawstatuscodemethod.md)
* [Migrate `ResponseStatusException#getStatus()` to `getStatusCode()`](./migrateresponsestatusexceptiongetstatuscodemethod.md)
* [Migrate `UriComponentsBuilder.fromHttpRequest` and `parseForwardedFor`](./migrateuricomponentsbuildermethods.md)
* [Migrate `WebExchangeBindException.resolveErrorMessages`](./migratewebexchangebindexceptionresolveerrormethod.md)
* [Migrate deprecated Spring Web UTF8 `MediaType` enums](./migrateutf8mediatypes.md)
* [Migrate `org.springframework.util.Base64Utils` to `java.io.Base64`](./migratebase64utils.md)
* [Migrate `org.springframework.web.reactive.HandlerResult.setExceptionHandler` method](./migratehandlerresultsetexceptionhandlermethod.md)
* [Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`](./httpcomponentsclienthttprequestfactoryreadtimeout.md)
* [Remove `public` from `@Bean` methods](./beanmethodsnotpublic.md)
* [Replace `WebMvcConfigurerAdapter` with `WebMvcConfigurer`](./migratewebmvcconfigureradapter.md)
* [Replaces deprecated `ClientHttpResponse#getRawStatusCode()`](./migrateclienthttpresponsegetrawstatuscodemethod.md)
* [Use `Environment#acceptsProfiles(Profiles)`](./environmentacceptsprofiles.md)
* [Use `ObjectUtils#isEmpty(Object)`](./useobjectutilsisempty.md)
* [Use varargs equivalents for deprecated JdbcTemplate signatures](./jdbctemplateobjectarrayargtovarargs.md)


