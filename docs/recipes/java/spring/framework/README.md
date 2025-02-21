# Spring Framework

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate breaking changes in `ResponseStatusException`](./migrateresponsestatusexception.md)
* [Migrate removed Spring `Assert` methods](./migratespringassert.md)
* [Migrate to Spring Framework 5.0](./upgradespringframework_5_0.md)
* [Migrate to Spring Framework 5.1](./upgradespringframework_5_1.md)
* [Migrate to Spring Framework 5.2](./upgradespringframework_5_2.md)
* [Migrate to Spring Framework 5.3](./upgradespringframework_5_3.md)
* [Migrate to Spring Framework 6.0](./upgradespringframework_6_0.md)
* [Migrate to Spring Framework 6.1](./upgradespringframework_6_1.md)
* [Migrate to Spring Framework 6.2](./upgradespringframework_6_2.md)

## Recipes

* [`@Bean` methods may not return `void`](./beanmethodreturnnull.md)
* [Convert `InstantiationAwareBeanPostProcessorAdapter` to `SmartInstantiationAwareBeanPostProcessor`](./migrateinstantiationawarebeanpostprocessoradapter.md)
* [Migrate `HandlerInterceptorAdapter` to `HandlerInterceptor`](./migratehandlerinterceptor.md)
* [Migrate `ResponseEntityExceptionHandler` from HttpStatus to HttpStatusCode](./migrateresponseentityexceptionhandlerhttpstatustohttpstatuscode.md)
* [Migrate `ResponseStatusException#getRawStatusCode()` to `getStatusCode().value()`](./migrateresponsestatusexceptiongetrawstatuscodemethod.md)
* [Migrate `ResponseStatusException#getStatus()` to `getStatusCode()`](./migrateresponsestatusexceptiongetstatuscodemethod.md)
* [Migrate deprecated Spring Web UTF8 `MediaType` enums](./migrateutf8mediatypes.md)
* [Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`](./httpcomponentsclienthttprequestfactoryreadtimeout.md)
* [Remove `public` from `@Bean` methods](./beanmethodsnotpublic.md)
* [Replace `WebMvcConfigurerAdapter` with `WebMvcConfigurer`](./migratewebmvcconfigureradapter.md)
* [Use `Environment#acceptsProfiles(Profiles)`](./environmentacceptsprofiles.md)
* [Use `ObjectUtils#isEmpty(Object)`](./useobjectutilsisempty.md)
* [Use varargs equivalents for deprecated JdbcTemplate signatures](./jdbctemplateobjectarrayargtovarargs.md)


