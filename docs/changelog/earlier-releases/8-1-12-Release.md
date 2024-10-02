# 8.1.12 release (2023-07-24)

## New Recipes

* [org.openrewrite.gradle.plugins.ChangePlugin](../../../recipes/gradle/plugins/changeplugin): Changes the selected Gradle plugin to the new plugin. 
* [org.openrewrite.java.micronaut.AddHttpRequestTypeParameter](../../../recipes/java/micronaut/addhttprequesttypeparameter): Add an `HttpRequest` type parameter to a class `implements` statement for interfaces that have been generically parameterized where they previously specified `HttpRequest` explicitly. 
* [org.openrewrite.java.micronaut.AddTestResourcesClientDependencyIfNeeded](../../../recipes/java/micronaut/addtestresourcesclientdependencyifneeded): This recipe adds the Test Resources Client dependency to pom.xml if test.resources.client.enabled property is true. 
* [org.openrewrite.java.micronaut.RemoveAnnotationProcessorPath](../../../recipes/java/micronaut/removeannotationprocessorpath): Remove the Maven annotation processor path that matches the given groupId and artifactId. 
* [org.openrewrite.java.micronaut.RemoveUnnecessaryDependencies](../../../recipes/java/micronaut/removeunnecessarydependencies): This recipe will remove dependencies that are no longer explicitly needed. 
* [org.openrewrite.java.micronaut.UpdateMavenAnnotationProcessors](../../../recipes/java/micronaut/updatemavenannotationprocessors): This recipe will update the version of Maven-configured annotation processors from Micronaut Core. 

## Removed Recipes

_These now exist in the [static-analysis](https://github.com/openrewrite/rewrite-static-analysis) repository_

* **org.openrewrite.java.cleanup.SimplifyBooleanExpression**: Checks for over-complicated boolean expressions. Finds code like `if (b == true)`, `b || true`, `!false`, etc. 
* **org.openrewrite.java.cleanup.SimplifyBooleanReturn**: Simplifies Boolean expressions by removing redundancies, e.g.: `a && true` simplifies to `a`. 
* **org.openrewrite.java.cleanup.UnnecessaryParentheses**: Removes unnecessary parentheses from code where extra parentheses pairs are redundant. 

