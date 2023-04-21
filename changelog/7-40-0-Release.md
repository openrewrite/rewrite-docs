# 7.40.0 release (2023-04-21)

## New Recipes
* [org.openrewrite.java.cleanup.ShortenFullyQualifiedTypeReferences](https://docs.openrewrite.org/reference/recipes/java/cleanup/shortenfullyqualifiedtypereferences): Any fully qualified references to Java types will be replaced with corresponding simple names and import statements, provided that it doesn't result in any conflicts with other imports or types declared in the local compilation unit. 
* [org.openrewrite.java.dependencies.DependencyList](https://docs.openrewrite.org/reference/recipes/java/dependencies/dependencylist): Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file. 
* [org.openrewrite.java.migrate.apache.commons.lang.IsNotEmptyToJdk](https://docs.openrewrite.org/reference/recipes/java/migrate/apache/commons/lang/isnotemptytojdk): Replace any `StringUtils#isEmpty(String)` and `#isNotEmpty(String)` with `s == null || s.isEmpty()` and `s != null && !s.isEmpty()`. 
* [org.openrewrite.java.spring.ChangeSpringPropertyValue](https://docs.openrewrite.org/reference/recipes/java/spring/changespringpropertyvalue): Change spring application property values existing in either Properties or Yaml files. 
* [org.openrewrite.java.spring.RenameBean](https://docs.openrewrite.org/reference/recipes/java/spring/renamebean): Renames a Spring bean, both declaration and references. 
* [org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants](https://docs.openrewrite.org/reference/recipes/java/spring/http/replacestringliteralswithhttpheadersconstants): Replace String literals with `org.springframework.http.HttpHeaders` constants. 
* [org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants](https://docs.openrewrite.org/reference/recipes/java/spring/http/replacestringliteralswithmediatypeconstants): Replace String literals with `org.springframework.http.MediaType` constants. 
* [org.openrewrite.java.spring.http.SpringWebDependency](https://docs.openrewrite.org/reference/recipes/java/spring/http/springwebdependency): Find compile scoped Spring Web dependency for Maven and Gradle, both direct and transitive. 
* [org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurity](https://docs.openrewrite.org/reference/recipes/java/spring/security5/replaceglobalmethodsecuritywithmethodsecurity): `@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity` and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations by default and use AuthorizationManager internally. 
* [org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml](https://docs.openrewrite.org/reference/recipes/java/spring/security5/replaceglobalmethodsecuritywithmethodsecurityxml): `@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity`  and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations  by default and use AuthorizationManager internally. 
* [org.openrewrite.java.spring.security6.RemoveFilterSecurityInterceptorOncePerRequest](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removefiltersecurityinterceptoronceperrequest): In Spring Security 6.0, `<http>` defaults `authorizeRequests#filterSecurityInterceptorOncePerRequest` to false. So, to complete migration, any defaults values can be removed. 
* [org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removeoauth2loginconfig): `oauth2Login()` is a Spring Security feature that allows users to authenticate with an OAuth2 or OpenID Connect 1.0 provider. When a user is authenticated using this feature, they are granted a set of authorities that determines what actions they are allowed to perform within the application. In Spring Security 5, the default authority given to a user authenticated with an OAuth2 or OpenID Connect 1.0 provider via `oauth2Login()` is `ROLE_USER`. This means that the user is allowed to access the application's resources as a regular user. However, in Spring Security 6, the default authority given to a user authenticated with an OAuth2 provider is `OAUTH2_USER`, and the default authority given to a user authenticated with an OpenID Connect 1.0 provider is `OIDC_USER`. These authorities are more specific and allow for better customization of the user's permissions within the application. If you are upgrading to Spring Security 6 and you have previously configured a `GrantedAuthoritiesMapper` to handle the authorities of users authenticated via `oauth2Login()`, you can remove it completely as the new default authorities should be sufficient. 
* [org.openrewrite.java.spring.security6.RemoveUseAuthorizationManager](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removeuseauthorizationmanager): In Spring Security 6, <websocket-message-broker> defaults use-authorization-manager to true.  So, the 'use-authorization-manager' attribute for message security is no longer needed and can be removed. 
* [org.openrewrite.java.spring.security6.UpdateEnableReactiveMethodSecurity](https://docs.openrewrite.org/reference/recipes/java/spring/security6/updateenablereactivemethodsecurity): In Spring security 6.0, `@EnableReactiveMethodSecurity` defaults `useAuthorizationManager` to true. So, to complete migration, `@EnableReactiveMethodSecurity` remove the `useAuthorizationManager` attribute. 
* [org.openrewrite.java.spring.security6.UpdateRequestCache](https://docs.openrewrite.org/reference/recipes/java/spring/security6/updaterequestcache): By default, Spring Security 5 queries the saved request on every request, which means that in a typical setup, the HttpSession is queried on every request to use the RequestCache. In Spring Security 6, the default behavior has changed, and RequestCache will only be queried for a cached request if the HTTP parameter "continue" is defined. To maintain the same default behavior as Spring Security 5, either explicitly add the HTTP parameter "continue" to every request or use NullRequestCache to override the default behavior. 
* [org.openrewrite.java.testing.junit5.UpgradeOkHttpMockWebServer](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/upgradeokhttpmockwebserver): Migrates OkHttp 3 `MockWebServer` to the JUnit Jupiter compatible version. 
* [org.openrewrite.xml.ChangeTagValue](https://docs.openrewrite.org/reference/recipes/xml/changetagvalue): Alters the value of XML tags matching the provided expression. 
* [org.openrewrite.yaml.AppendToSequence](https://docs.openrewrite.org/reference/recipes/yaml/appendtosequence): Append item to YAML sequence. 
* [org.openrewrite.yaml.ChangePropertyValue](https://docs.openrewrite.org/reference/recipes/yaml/changepropertyvalue): Change a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e.  as Spring Boot interprets `application.yml` files. 

## Removed Recipes
* **org.openrewrite.search.FindLanguageComposition**: Produce a table of files and their language composition. 

## Changed Recipes
* [org.openrewrite.github.AddCronTrigger](https://docs.openrewrite.org/reference/recipes/github/addcrontrigger) was changed:
  * Old Options:
    * `cron: { type: String, required: true }`
  * New Options:
    * `cron: { type: String, required: true }`
    * `workflowFileMatcher: { type: String, required: false }`
* [org.openrewrite.properties.ChangePropertyValue](https://docs.openrewrite.org/reference/recipes/properties/changepropertyvalue) was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `fileMatcher: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`