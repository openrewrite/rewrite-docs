# Snapshot (2023-04-11)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.dependencies.DependencyList](https://docs.openrewrite.org/reference/recipes/java/dependencies/dependencylist): Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file. 
* [org.openrewrite.java.spring.security6.RemoveOauth2LoginConfig](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removeoauth2loginconfig): `oauth2Login()` is a Spring Security feature that allows users to authenticate with an OAuth2 or OpenID Connect 1.0 provider. When a user is authenticated using this feature, they are granted a set of authorities that determines what actions they are allowed to perform within the application. In Spring Security 5, the default authority given to a user authenticated with an OAuth2 or OpenID Connect 1.0 provider via `oauth2Login()` is `ROLE_USER`. This means that the user is allowed to access the application's resources as a regular user. However, in Spring Security 6, the default authority given to a user authenticated with an OAuth2 provider is `OAUTH2_USER`, and the default authority given to a user authenticated with an OpenID Connect 1.0 provider is `OIDC_USER`. These authorities are more specific and allow for better customization of the user's permissions within the application. If you are upgrading to Spring Security 6 and you have previously configured a `GrantedAuthoritiesMapper` to handle the authorities of users authenticated via `oauth2Login()`, you can remove it completely as the new default authorities should be sufficient. 
* [org.openrewrite.java.spring.security6.RemoveUseAuthorizationManager](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removeuseauthorizationmanager): In Spring Security 6, <websocket-message-broker> defaults use-authorization-manager to true.  So, the 'use-authorization-manager' attribute for message security is no longer needed and can be removed. 
* [org.openrewrite.java.spring.security6.UpdateEnableReactiveMethodSecurity](https://docs.openrewrite.org/reference/recipes/java/spring/security6/updateenablereactivemethodsecurity): In Spring security 6.0, `@EnableReactiveMethodSecurity` defaults `useAuthorizationManager` to true. So, to complete migration, `@EnableReactiveMethodSecurity` remove the `useAuthorizationManager` attribute. 
* [org.openrewrite.java.spring.security6.UpdateRequestCache](https://docs.openrewrite.org/reference/recipes/java/spring/security6/updaterequestcache): By default, Spring Security 5 queries the saved request on every request, which means that in a typical setup, the HttpSession is queried on every request to use the RequestCache. In Spring Security 6, the default behavior has changed, and RequestCache will only be queried for a cached request if the HTTP parameter "continue" is defined. To maintain the same default behavior as Spring Security 5, either explicitly add the HTTP parameter "continue" to every request or use NullRequestCache to override the default behavior. 
* [org.openrewrite.java.testing.junit5.MigrateAssumptions](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/migrateassumptions): Many of JUnit 4's `Assume#assume(..)` methods have no direct counterpart in JUnit 5 and require Hamcrest JUnit's `MatcherAssume`. 

## Changed Recipes
* [org.openrewrite.github.AddCronTrigger](https://docs.openrewrite.org/reference/recipes/github/addcrontrigger) was changed:
  * Old Options:
    * `cron: { type: String, required: true }`
  * New Options:
    * `cron: { type: String, required: true }`
    * `workflowFileMatcher: { type: String, required: false }`