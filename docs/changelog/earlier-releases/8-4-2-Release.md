# 8.4.2 release (2023-09-04)

## New Recipes

* org.openrewrite.java.spring.batch.RemoveDefaultBatchConfigurer: Remove `extends DefaultBatchConfigurer` and `@Override` from associated methods. 
* org.openrewrite.java.spring.boot2.HeadersConfigurerLambdaDsl: Converts `HeadersConfigurer` chained call from Spring Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 
* org.openrewrite.java.spring.http.SimplifyMediaTypeParseCalls: Replaces `MediaType.parseMediaType('application/json')` and `MediaType.valueOf('application/json') with `MediaType.APPLICATION_JSON`. 
* org.openrewrite.java.spring.security5.AuthorizeHttpRequests: Replace `HttpSecurity.authorizeRequests(...)` deprecated in Spring Security 6 with `HttpSecurity.authorizeHttpRequests(...)` and all method calls on the resultant object respectively. Replace deprecated `AbstractInterceptUrlConfigurer` and its deprecated subclasses with `AuthorizeHttpRequestsConfigurer` and its corresponding subclasses. 
* org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_7: Migrate applications to the latest Spring Security 5.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_1: Migrate applications to the latest Spring Security 6.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* org.openrewrite.java.spring.security6.oauth2.client.OAuth2ClientLambdaDsl: Converts `OAuth2ClientConfigurer` chained call from Spring Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 
* org.openrewrite.java.spring.security6.oauth2.client.OAuth2LoginLambdaDsl: Converts `OAuth2LoginConfigurer` chained call from Spring Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 
* org.openrewrite.java.spring.security6.oauth2.server.resource.OAuth2ResourceServerLambdaDsl: Converts `OAuth2ResourceServerConfigurer` chained call from Spring Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 

## Removed Recipes

* **org.openrewrite.java.spring.boot2.AuthorizeHttpRequests**: Replace `HttpSecurity.authorizeRequests(...)` deprecated in Spring Security 6 with `HttpSecurity.authorizeHttpRequests(...)` and all method calls on the resultant object respectively. Replace deprecated `AbstractInterceptUrlConfigurer` and its deprecated subclasses with `AuthorizeHttpRequestsConfigurer` and its corresponding subclasses. 

