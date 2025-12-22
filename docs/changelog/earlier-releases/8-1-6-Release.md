---
description: What's changed in OpenRewrite version 8.1.6.
---

# 8.1.6 release (2023-07-06)

## New Recipes

* org.openrewrite.gradle.spring.AddSpringDependencyManagementPlugin: Add `io.spring.dependency-management` plugin, if in use. 
* org.openrewrite.java.migrate.guava.PreferJavaNioCharsetStandardCharsets: Prefer `java.nio.charset.StandardCharsets` instead of using `com.google.common.base.Charsets`. 
* org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsRequireNonNull: Prefer `java.util.Objects#requireNonNull` instead of using `com.google.common.base.Preconditions#checkNotNull`. 
* org.openrewrite.java.migrate.lang.UseVar: Apply local variable type inference (`var`) for primitives and objects. 
* org.openrewrite.java.migrate.lang.var.UseVarForObject: Try to apply local variable type inference `var` to variables containing Objects where possible. This recipe will not touch variable declarations with generics or initializers containing ternary operators. 
* org.openrewrite.java.migrate.lang.var.UseVarForPrimitive: Try to apply local variable type inference `var` to primitive variables where possible. This recipe will not touch variable declarations with initializers containing ternary operators. 
* org.openrewrite.java.migrate.util.RemoveFinalizerFromZip: Remove invocations of finalize() deprecated invocations from Deflater, Inflater, ZipFile. 
* org.openrewrite.java.testing.hamcrest.AssertThatBooleanToAssertJ: Replace Hamcrest `assertThat(String, boolean)` with AssertJ `assertThat(boolean).as(String).isTrue()`. 
* org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ: Migrate from Hamcrest `Matcher` to AssertJ assertions. 
* org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ: Migrate from Hamcrest `not(Matcher)` to AssertJ assertions. 
* org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ: Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`. 
* org.openrewrite.java.testing.hamcrest.RemoveIsMatcher: Remove Hamcrest `is(Matcher)` ahead of migration. 
* org.openrewrite.kotlin.cleanup.EqualsMethodUsage: In Kotlin, == means structural equality and != structural inequality and both map to the left-side term’s equals() function. It is, therefore, redundant to call equals() as a function. Also, == and != are more general than equals() and !equals() because it allows either of both operands to be null.
Developers using equals() instead of == or != is often the result of adapting styles from other languages like Java, where == means reference equality and != means reference inequality.
The == and != operators are a more concise and elegant way to test structural equality than calling a function. 
* org.openrewrite.kotlin.cleanup.ImplicitParameterInLambda: "it" is a special identifier that allows you to refer to the current parameter being passed to a lambda expression without explicitly naming the parameter.Lambda expressions are a concise way of writing anonymous functions. Many lambda expressions have only one parameter, when this is true the compiler can determine the parameter type by context. Thus when using it with single parameter lambda expressions, you do not need to declare the type. 
* org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode: Replace the usage of the deprecated `Char#toInt()` with `Char#code`. Please ensure that your Kotlin version is 1.5 or later to support the `Char#code` property. Note that the current implementation does not perform a Kotlin version check. 
* org.openrewrite.maven.UpdateMavenWrapper: Update the version of Maven used in an existing Maven wrapper. 
* org.openrewrite.staticanalysis.EqualsToContentEquals: Use `String.contentEquals(CharSequence)` instead of `String.equals(CharSequence.toString())`. 
* org.openrewrite.staticanalysis.RemoveHashCodeCallsFromArrayInstances: Replace `hashCode()` calls on arrays with `Arrays.hashCode()` because the results from `hashCode()` are not helpful. 
* org.openrewrite.staticanalysis.RemoveToStringCallsFromArrayInstances: The result from `toString()` calls on arrays is largely useless. The output does not actually reflect the contents of the array. `Arrays.toString(array)` give the contents of the array. 

## Removed Recipes

* **org.openrewrite.java.migrate.hibernate.MigrateToHibernate61**: This recipe will apply changes commonly needed when migrating to Hibernate 6.1.x. The hibernate dependencies will be updated to use the new org.hibernate.orm group ID and the recipe will make changes necessary to use Hibernate with Jakarta EE 9.0. 
* **org.openrewrite.java.migrate.hibernate.MigrateToHibernateDependencies61**: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifact names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies. 
* **org.openrewrite.java.spring.boot3.MavenPomUpgrade**: Upgrade Maven POM to Spring Boot 3.0 from prior 2.x version. 
* **org.openrewrite.java.spring.boot3.MavenPomUpgrade_3_1**: Upgrade Maven POM to Spring Boot 3.1 from prior 3.0 version. 
* **org.openrewrite.kotlin.StaticAnalysis**: Static analysis fixes for Kotlin sources. 

## Changed Recipes

* org.openrewrite.text.FindAndReplace was changed:
  * Old Options:
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
  * New Options:
    * `caseInsensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
* org.openrewrite.gradle.AddProperty was changed:
  * Old Options:
    * `key: { type: String, required: true }`
    * `overwrite: { type: Boolean, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: true }`
    * `key: { type: String, required: true }`
    * `overwrite: { type: Boolean, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.gradle.UpdateGradleWrapper was changed:
  * Old Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `version: { type: String, required: false }`