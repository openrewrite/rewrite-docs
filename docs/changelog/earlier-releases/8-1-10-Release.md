# 8.1.10 release (2023-07-17)

## New Recipes

* org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin: Add the Gradle Enterprise Gradle plugin to settings.gradle files. 
* org.openrewrite.java.micronaut.AddAnnotationProcessorPath: Add the groupId, artifactId, version, and exclusions of a Maven annotation processor path. 
* org.openrewrite.java.micronaut.RemoveWithJansiLogbackConfiguration: This recipe will remove the withJansi configuration tag from logback.xml. 
* org.openrewrite.java.micronaut.UpdateBlockingTaskExecutors: This recipe will any usage of TaskExecutors.IO to TaskExecutors.BLOCKING in order to be compatible with virtual threads. 
* org.openrewrite.java.micronaut.UpdateMicronautData: This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4. 
* org.openrewrite.java.migrate.javax.AddScopeToInjectedClass: Finds member variables annotated with `@Inject' and applies `@Dependent` scope annotation to the variable's type. 
* org.openrewrite.java.migrate.lang.RemoveThreadDestroyMethod: Remove deprecated invocations of `Thread.destroy()` which have no alternatives needed. 
* org.openrewrite.java.migrate.lang.var.UseVarForGenericMethodInvocations: Apply `var` to variables initialized by invocations of Generic Methods. This recipe ignores generic factory methods without parameters, because open rewrite cannot handle them correctly ATM. 
* org.openrewrite.java.migrate.lang.var.UseVarForGenericsConstructors: Apply `var` to generics variables initialized by constructor calls. 
* org.openrewrite.java.testing.junit5.AssertTrueInstanceofToAssertInstanceOf: Migration of JUnit4 (or potentially JUnit5) test case in form of assertTrue(x instanceof y) to assertInstanceOf(y.class, x). 
* org.openrewrite.java.testing.junit5.RemoveTryCatchFailBlocks: Replace `try-catch` blocks where `catch` merely contains a `fail(..)` statement with `Assertions.assertDoesNotThrow(() -> { ... })`. 

## Removed Recipes

* **org.openrewrite.gradle.plugins.AddGradleEnterprise**: Add the Gradle Enterprise plugin to settings.gradle files. 
* **org.openrewrite.java.testing.mockito.UsesMockitoAll**: Finds projects that depend on `mockito-all` through Maven or Gradle. 

## Changed Recipes

* org.openrewrite.text.Find was changed:
  * Old Options:
    * `caseInsensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
* org.openrewrite.text.FindAndReplace was changed:
  * Old Options:
    * `caseInsensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
