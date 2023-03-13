# Snapshot (2023-03-13)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Artifacts
* rewrite-java-dependencies

## New Recipes
* [org.openrewrite.FindBuildToolFailures](https://docs.openrewrite.org/reference/recipes/findbuildtoolfailures): This recipe explores build tool failures after an AST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems. 
* [org.openrewrite.java.ReplaceStringLiteralWithConstant](https://docs.openrewrite.org/reference/recipes/java/replacestringliteralwithconstant): Replace String literal with constant, adding import on class if needed. 
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