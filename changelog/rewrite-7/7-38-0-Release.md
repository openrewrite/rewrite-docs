# 7.38.0 release (2023-03-15)

## New Artifacts
* rewrite-java-dependencies

## New Recipes
* [org.openrewrite.FindBuildToolFailures](https://docs.openrewrite.org/reference/recipes/findbuildtoolfailures): This recipe explores build tool failures after an AST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems. 
* [org.openrewrite.github.PreferTemurinDistributions](https://docs.openrewrite.org/reference/recipes/github/prefertemurindistributions): [Host runners](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources/) include Temurin by default as part of the (hosted tool cache)(https://github.com/actions/setup-java/blob/main/docs/advanced-usage.md#hosted-tool-cache).Using Temurin speeds up builds as there is no need to download and configure the Java SDK with every build. 
* [org.openrewrite.java.ReplaceStringLiteralWithConstant](https://docs.openrewrite.org/reference/recipes/java/replacestringliteralwithconstant): Replace String literal with constant, adding import on class if needed. 
* [org.openrewrite.java.cleanup.FinalizeMethodArguments](https://docs.openrewrite.org/reference/recipes/java/cleanup/finalizemethodarguments): Adds the `final` modifier keyword to method parameters. 
* [org.openrewrite.java.migrate.util.UseLocaleOf](https://docs.openrewrite.org/reference/recipes/java/migrate/util/uselocaleof): Prefer `Locale.of(..)` over `new Locale(..)` in Java 19 or higher. 
* [org.openrewrite.java.spring.boot2.AddConfigurationAnnotationIfBeansPresent](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/addconfigurationannotationifbeanspresent): Class having `@Bean' annotation over any methods but missing '@Configuration' annotation over the declaring class would have '@Configuration' annotation added. 
* [org.openrewrite.java.spring.boot2.AuthorizeHttpRequests](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/authorizehttprequests): Replace 'HttpSecurity.authorizeRequests(...) deprecated in Spring-Security 6 with 'HttpSecurity.authorizeHttpRequests(...) and all method calls on the resultant object respectively. Replace deprecated 'AbstractInterceptUrlConfigurer' and its deprecated subclasses with 'AuthorizeHttpRequestsConfigurer' and its corresponding subclasses. 
* [org.openrewrite.java.spring.boot2.HttpSecurityLambdaDsl](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/httpsecuritylambdadsl): Converts HttpSecurity chained call from Spring-Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 
* [org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/replaceextendwithandcontextconfiguration): Replaces `@ExtendWith(SpringRunner.class)` and `@ContextConfiguration` with `@SpringJunitConfig`, preserving attributes on `@ContextConfiguration`, unless `@ContextConfiguration(loader = ...)` is used. 
* [org.openrewrite.java.spring.boot2.ServerHttpSecurityLambdaDsl](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/serverhttpsecuritylambdadsl): Converts ServerHttpSecurity chained call from Spring-Security pre 5.2.x into new lambda DSL style calls and removes `and()` methods. 
* [org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/configurationoverenablesecurity): Annotations '@EnableXXXSecurity' have '@Configuration' removed from their definition in Spring-Security 6. Consequently classes annotated with '@EnableXXXSecurity' coming from pre-Boot 3 should have '@Configuration' annotation added. 
* [org.openrewrite.java.spring.search.FindApiCalls](https://docs.openrewrite.org/reference/recipes/java/spring/search/findapicalls): Find outbound API calls that this application is making. 
* [org.openrewrite.java.spring.security5.UseNewRequestMatchers](https://docs.openrewrite.org/reference/recipes/java/spring/security5/usenewrequestmatchers): In Spring Security 5.8, the `antMatchers`, `mvcMatchers`, and `regexMatchers` methods were deprecated in favor of new `requestMatchers` methods. Refer to the [Spring Security docs](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html#use-new-requestmatchers) for more information. 
* [org.openrewrite.java.testing.mockito.AnyStringToNullable](https://docs.openrewrite.org/reference/recipes/java/testing/mockito/anystringtonullable): Since Mockito 2.10 `anyString()` no longer matches null values. Use `nullable(Class)` instead. 
* [org.openrewrite.java.testing.mockito.AnyToNullable](https://docs.openrewrite.org/reference/recipes/java/testing/mockito/anytonullable): Since Mockito 2.10 `any(Class)` and `anyString()` no longer match null values. Use `nullable(Class)` instead. 
* [org.openrewrite.java.testing.mockito.UsesMockitoAll](https://docs.openrewrite.org/reference/recipes/java/testing/mockito/usesmockitoall): Finds projects that depend on `mockito-all` through Maven or Gradle. 
* [org.openrewrite.maven.search.DoesNotIncludeDependency](https://docs.openrewrite.org/reference/recipes/maven/search/doesnotincludedependency): An applicability test which returns false if visiting a Maven pom which includes the specified dependency in the classpath of some scope. For compatibility with multimodule projects, this should most often be applied as a single-source applicability test. 

## Removed Recipes
* **org.openrewrite.java.spring.boot3.Saml**: Renames spring.security.saml2.relyingparty.registration.(any).identityprovider to spring.security.saml2.relyingparty.registration.(any).assertingparty. 

## Changed Recipes
* [org.openrewrite.java.search.HasJavaVersion](https://docs.openrewrite.org/reference/recipes/java/search/hasjavaversion) was changed:
  * Old Options:
    * `version: { type: String, required: true }`
  * New Options:
    * `checkTargetCompatibility: { type: Boolean, required: true }`
    * `version: { type: String, required: true }`
* [org.openrewrite.java.security.SecureTempFileCreation](https://docs.openrewrite.org/reference/recipes/java/security/securetempfilecreation) was changed:
  * Old Options:
    * `target: { type: String, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.maven.AddDependency](https://docs.openrewrite.org/reference/recipes/maven/adddependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.search.DependencyInsight](https://docs.openrewrite.org/reference/recipes/maven/search/dependencyinsight) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `scope: { type: String, required: true }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `onlyDirect: { type: Boolean, required: false }`
    * `scope: { type: String, required: true }`