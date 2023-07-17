# 8.1.10 release (2023-07-17)

## New Recipes

* [org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin](https://docs.openrewrite.org/reference/recipes/gradle/plugins/addgradleenterprisegradleplugin): Add the Gradle Enterprise Gradle plugin to settings.gradle files. 
* [org.openrewrite.java.micronaut.AddAnnotationProcessorPath](https://docs.openrewrite.org/reference/recipes/java/micronaut/addannotationprocessorpath): Add the groupId, artifactId, version, and exclusions of a Maven annotation processor path. 
* [org.openrewrite.java.micronaut.RemoveWithJansiLogbackConfiguration](https://docs.openrewrite.org/reference/recipes/java/micronaut/removewithjansilogbackconfiguration): This recipe will remove the withJansi configuration tag from logback.xml. 
* [org.openrewrite.java.micronaut.UpdateBlockingTaskExecutors](https://docs.openrewrite.org/reference/recipes/java/micronaut/updateblockingtaskexecutors): This recipe will any usage of TaskExecutors.IO to TaskExecutors.BLOCKING in order to be compatible with virtual threads. 
* [org.openrewrite.java.micronaut.UpdateMicronautData](https://docs.openrewrite.org/reference/recipes/java/micronaut/updatemicronautdata): This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4. 
* [org.openrewrite.java.migrate.javax.AddScopeToInjectedClass](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/addscopetoinjectedclass): Finds member variables annotated with `@Inject' and applies `@Dependent` scope annotation to the variable's type. 
* [org.openrewrite.java.migrate.lang.RemoveThreadDestroyMethod](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/removethreaddestroymethod): Remove deprecated invocations of `Thread.destroy()` which have no alternatives needed. 
* [org.openrewrite.java.migrate.lang.var.UseVarForGenericMethodInvocations](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/var/usevarforgenericmethodinvocations): Apply `var` to variables initialized by invocations of Generic Methods. This recipe ignores generic factory methods without parameters, because open rewrite cannot handle them correctly ATM. 
* [org.openrewrite.java.migrate.lang.var.UseVarForGenericsConstructors](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/var/usevarforgenericsconstructors): Apply `var` to generics variables initialized by constructor calls. 
* [org.openrewrite.java.testing.junit5.AssertTrueInstanceofToAssertInstanceOf](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/asserttrueinstanceoftoassertinstanceof): Migration of JUnit4 (or potentially JUnit5) test case in form of assertTrue(x instanceof y) to assertInstanceOf(y.class, x). 
* [org.openrewrite.java.testing.junit5.RemoveTryCatchFailBlocks](https://docs.openrewrite.org/reference/recipes/java/testing/junit5/removetrycatchfailblocks): Replace `try-catch` blocks where `catch` merely contains a `fail(..)` statement with `Assertions.assertDoesNotThrow(() -> { ... })`. 

## Removed Recipes

* **org.openrewrite.github.AddCronTrigger**: The `schedule` [event](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) allows you to trigger a workflow at a scheduled time. 
* **org.openrewrite.gradle.plugins.AddGradleEnterprise**: Add the Gradle Enterprise plugin to settings.gradle files. 
* **org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies**: Upgrade spring-framework 5.x Maven dependencies using a Node Semver advanced range selector. 
* **org.openrewrite.java.testing.mockito.UsesMockitoAll**: Finds projects that depend on `mockito-all` through Maven or Gradle. 

## Changed Recipes

* [org.openrewrite.text.Find](https://docs.openrewrite.org/reference/recipes/text/find) was changed:
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
* [org.openrewrite.text.FindAndReplace](https://docs.openrewrite.org/reference/recipes/text/findandreplace) was changed:
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