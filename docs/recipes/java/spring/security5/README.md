---
description: Spring Security 5.x OpenRewrite recipes.
---

# Spring Security 5.x

## Categories

* [Search](/recipes/java/spring/security5/search)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Spring Security 5.7](./upgradespringsecurity_5_7.md)
* [Migrate to Spring Security 5.8](./upgradespringsecurity_5_8.md)
* [Rename the package name from `com.nimbusds.jose.shaded.json` to `net.minidev.json`](./renamenimbusdsjsonobjectpackagename.md)
* [Replace global method security with method security](./replaceglobalmethodsecuritywithmethodsecurityxml.md)

## Recipes

* [Convert `requestMatchers` chain to `securityMatcher`](./convertsecuritymatcherstosecuritymatcher.md)
* [Replace `HttpSecurity.authorizeRequests(...)` with `HttpSecurity.authorizeHttpRequests(...)` and `ExpressionUrlAuthorizationConfigurer`, `AbstractInterceptUrlConfigurer` with `AuthorizeHttpRequestsConfigurer`, etc](./authorizehttprequests.md)
* [Replace global method security with method security](./replaceglobalmethodsecuritywithmethodsecurity.md)
* [Spring Security 5.4 introduces the ability to configure `HttpSecurity` by creating a `SecurityFilterChain` bean](./websecurityconfigureradapter.md)
* [Use new `Argon2PasswordEncoder` factory methods](./updateargon2passwordencoder.md)
* [Use new `Pbkdf2PasswordEncoder` factory methods](./updatepbkdf2passwordencoder.md)
* [Use new `SCryptPasswordEncoder` factory methods](./updatescryptpasswordencoder.md)
* [Use the new `requestMatchers` methods](./usenewrequestmatchers.md)
* [Use the new `securityMatcher()` method](./usenewsecuritymatchers.md)


