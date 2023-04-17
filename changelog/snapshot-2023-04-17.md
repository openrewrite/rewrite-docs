# Snapshot (2023-04-17)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.migrate.apache.commons.lang.IsNotEmptyToJdk](https://docs.openrewrite.org/reference/recipes/java/migrate/apache/commons/lang/isnotemptytojdk): Replace any `StringUtils#isEmpty(String)` and `#isNotEmpty(String)` with `s == null || s.isEmpty()` and `s != null && !s.isEmpty()`. 
* [org.openrewrite.java.spring.ChangeSpringPropertyValue](https://docs.openrewrite.org/reference/recipes/java/spring/changespringpropertyvalue): Change spring application property values existing in either Properties or Yaml files. 
* [org.openrewrite.java.spring.RenameBean](https://docs.openrewrite.org/reference/recipes/java/spring/renamebean): Renames a Spring bean, both declaration and references. 
* [org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants](https://docs.openrewrite.org/reference/recipes/java/spring/http/replacestringliteralswithhttpheadersconstants): Replace String literals with `org.springframework.http.HttpHeaders` constants. 
* [org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants](https://docs.openrewrite.org/reference/recipes/java/spring/http/replacestringliteralswithmediatypeconstants): Replace String literals with `org.springframework.http.MediaType` constants. 
* [org.openrewrite.java.spring.http.SpringWebDependency](https://docs.openrewrite.org/reference/recipes/java/spring/http/springwebdependency): Find compile scoped Spring Web dependency for Maven and Gradle, both direct and transitive. 
* [org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurity](https://docs.openrewrite.org/reference/recipes/java/spring/security5/replaceglobalmethodsecuritywithmethodsecurity): `@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity` and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations by default and use AuthorizationManager internally. 
* [org.openrewrite.java.spring.security5.ReplaceGlobalMethodSecurityWithMethodSecurityXml](https://docs.openrewrite.org/reference/recipes/java/spring/security5/replaceglobalmethodsecuritywithmethodsecurityxml): `@EnableGlobalMethodSecurity` and `<global-method-security>` are deprecated in favor of `@EnableMethodSecurity`  and `<method-security>`, respectively. The new annotation and XML element activate Spring’s pre-post annotations  by default and use AuthorizationManager internally. 
* [org.openrewrite.java.spring.security6.RemoveFilterSecurityInterceptorOncePerRequest](https://docs.openrewrite.org/reference/recipes/java/spring/security6/removefiltersecurityinterceptoronceperrequest): In Spring Security 6.0, `<http>` defaults `authorizeRequests#filterSecurityInterceptorOncePerRequest` to false. So, to complete migration, any defaults values can be removed. 
* [org.openrewrite.java.testing.junit5.UpgradeOkHttpMockWebServer](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/upgradeokhttpmockwebserver): Migrates OkHttp 3 `MockWebServer` to the JUnit Jupiter compatible version. 
* [org.openrewrite.yaml.AppendToSequence](https://docs.openrewrite.org/reference/recipes/yaml/appendtosequence): Append item to YAML sequence. 
* [org.openrewrite.yaml.ChangePropertyValue](https://docs.openrewrite.org/reference/recipes/yaml/changepropertyvalue): Change a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e.  as Spring Boot interprets `application.yml` files. 

## Removed Recipes
* **org.openrewrite.search.FindLanguageComposition**: Produce a table of individual files, noting their language and size. 

## Changed Recipes
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