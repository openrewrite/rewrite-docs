# 8.29.0 release (2024-07-03)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.gradle.DependencyConstraintToRule](../recipes/gradle/dependencyconstrainttorule): Gradle [dependency constraints](https://docs.gradle.org/current/userguide/dependency_constraints.html#dependency-constraints) are useful for managing the versions of transitive dependencies. Some plugins, such as the Spring Dependency Management plugin, do not respect these constraints. This recipe converts constraints into [resolution rules](https://docs.gradle.org/current/userguide/resolution_rules.html), which can achieve similar effects to constraints but are harder for plugins to ignore. 
* [org.openrewrite.java.jackson.CodehausClassesToFasterXML](../recipes/java/jackson/codehausclassestofasterxml): In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML. 
* [org.openrewrite.java.jackson.codehaus.CodehausDependencyToFasterXML](../recipes/java/jackson/codehaus/codehausdependencytofasterxml): Replace Codehaus Jackson dependencies with FasterXML Jackson dependencies, and add databind if needed. 
* [org.openrewrite.java.logging.slf4j.JulParameterizedArguments](../recipes/java/logging/slf4j/julparameterizedarguments): Replace calls to parameterized `Logger.log(Level,String,…)` call with the corresponding slf4j method calls transforming the formatter and parameter lists. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes](../recipes/java/logging/slf4j/jultoslf4jlambdasupplierrecipes): Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierConfigRecipe: Replace calls to `java.util.logging.Logger.config(Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFineRecipe: Replace calls to `java.util.logging.Logger.fine(Supplier<String>)` with `org.slf4j.Logger.atDebug().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFinerRecipe: Replace calls to `java.util.logging.Logger.finer(Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFinestRecipe: Replace calls to `java.util.logging.Logger.finest(Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierInfoRecipe: Replace calls to `java.util.logging.Logger.info(Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogAllRecipe: Replace calls to `java.util.logging.Logger.log(Level.ALL, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogConfigRecipe: Replace calls to `java.util.logging.Logger.log(Level.CONFIG, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFineRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINE, Supplier<String>)` with `org.slf4j.Logger.atDebug().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFinerRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINER, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFinestRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINEST, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogInfoRecipe: Replace calls to `java.util.logging.Logger.log(Level.INFO, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogSevereRecipe: Replace calls to `java.util.logging.Logger.log(Level.SEVERE, Supplier<String>)` with `org.slf4j.Logger.atError().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogWarningRecipe: Replace calls to `java.util.logging.Logger.log(Level.WARNING, Supplier<String>)` with `org.slf4j.Logger.atWarn().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierSevereRecipe: Replace calls to `java.util.logging.Logger.severe(Supplier<String>)` with `org.slf4j.Logger.atError().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierWarningRecipe: Replace calls to `java.util.logging.Logger.warning(Supplier<String>)` with `org.slf4j.Logger.atWarn().log(Supplier<String>)`. 
* [org.openrewrite.java.migrate.DeleteDeprecatedFinalize](../recipes/java/migrate/deletedeprecatedfinalize): The java.desktop module had a few implementations of finalize() that did nothing and have been removed. This recipe will remove these methods. 
* [org.openrewrite.java.migrate.RemovedJavaXMLWSModuleProvided](../recipes/java/migrate/removedjavaxmlwsmoduleprovided): The `java.xml.ws` module was removed in Java11. Websphere Liberty provides its own implementation of the module, which can be used by specifying the `jaxws-2.2` feature in the server.xml file. This recipe removes the `javax.xml.ws` module from the application's build dependency in favor of the Websphere Liberty implementation to avoid class loading issues. 
* [org.openrewrite.java.migrate.RemovedJaxBModuleProvided](../recipes/java/migrate/removedjaxbmoduleprovided): The `java.xml.bind` and `java.activation` modules were removed in Java11. Websphere Liberty provides its own implementation of the modules, which can be used by specifying the `jaxb-2.2` feature in the server.xml file. This recipe removes the `javax.xml.bind` and `javax.activation` modules from the application's build dependency in favor of the Websphere Liberty implementation to avoid class loading issues. 
* [org.openrewrite.java.migrate.ThreadStopDestroy](../recipes/java/migrate/threadstopdestroy): The `java.lang.Thread.destroy()` method was never implemented, and the `java.lang.Thread.stop(java.lang.Throwable)`<br />method has been unusable since Java SE 8. This recipe removes any usage of these methods from your application. 
* [org.openrewrite.java.migrate.jakarta.JavaxOrmXmlToJakartaOrmXml](../recipes/java/migrate/jakarta/javaxormxmltojakartaormxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.testing.jmockit.JMockitAnnotatedArgumentToMockito](../recipes/java/testing/jmockit/jmockitannotatedargumenttomockito): Convert JMockit `@Mocked` and `@Injectable` annotated arguments into Mockito statements. 
* [org.openrewrite.java.testing.jmockit.JMockitBlockToMockito](../recipes/java/testing/jmockit/jmockitblocktomockito): Rewrites JMockit `Expectations and Verifications` blocks to Mockito statements. 
* [org.openrewrite.maven.AddParentPom](../recipes/maven/addparentpom): Add a parent pom to a Maven pom.xml. Does nothing if a parent pom is already present. 
* [org.openrewrite.staticanalysis.MaskCreditCardNumbers](../recipes/staticanalysis/maskcreditcardnumbers): When encountering string literals which appear to be credit card numbers, mask the last eight digits with the letter 'X'. 
* [org.openrewrite.xml.search.FindNamespacePrefix](../recipes/xml/search/findnamespaceprefix): Find XML namespace prefixes, optionally restricting the search by a XPath expression. 
* [org.openrewrite.xml.search.HasNamespaceUri](../recipes/xml/search/hasnamespaceuri): Find XML namespace URIs, optionally restricting the search by a XPath expression. 

## Removed Recipes

* **org.openrewrite.java.testing.jmockit.JMockitExpectationsToMockito**: Rewrites JMockit `Expectations` blocks to Mockito statements. 
* **org.openrewrite.java.testing.jmockit.JMockitMockedVariableToMockito**: Rewrites JMockit `Mocked Variable` to Mockito statements. 

## Changed Recipes

* [org.openrewrite.text.FindAndReplace](../recipes/text/findandreplace) was changed:
  * Old Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: false }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `plaintextOnly: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: false }`
* [org.openrewrite.xml.ChangeNamespaceValue](../recipes/xml/changenamespacevalue) was changed:
  * Old Options:
    * `elementName: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `searchAllNamespaces: { type: Boolean, required: false }`
    * `versionMatcher: { type: String, required: false }`
  * New Options:
    * `elementName: { type: String, required: false }`
    * `newSchemaLocation: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `searchAllNamespaces: { type: Boolean, required: false }`
    * `versionMatcher: { type: String, required: false }`