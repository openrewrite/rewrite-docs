# 8.11.5 release (2023-12-21)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.java.ClassDefinitionLength](https://docs.openrewrite.org/recipes/java/classdefinitionlength): Locates class definitions and predicts the number of token in each. 
* [org.openrewrite.java.MethodDefinitionLength](https://docs.openrewrite.org/recipes/java/methoddefinitionlength): Locates method definitions and predicts the number of token in each. 
* [org.openrewrite.java.logging.log4j.CommonsLoggingToLog4j](https://docs.openrewrite.org/recipes/java/logging/log4j/commonsloggingtolog4j): Transforms code written using Apache Commons Logging to use Log4j 2.x API. 
* [org.openrewrite.java.logging.log4j.ConvertJulEntering](https://docs.openrewrite.org/recipes/java/logging/log4j/convertjulentering): Replaces JUL's Logger#entering method calls to Log4j API Logger#traceEntry calls. 
* [org.openrewrite.java.logging.log4j.ConvertJulExiting](https://docs.openrewrite.org/recipes/java/logging/log4j/convertjulexiting): Replaces JUL's Logger#exiting method calls to Log4j API Logger#traceEntry calls. 
* [org.openrewrite.java.logging.log4j.JulToLog4j](https://docs.openrewrite.org/recipes/java/logging/log4j/jultolog4j): Transforms code written using `java.util.logging` to use Log4j 2.x API. 
* [org.openrewrite.java.migrate.jakarta.BeanValidationMessages](https://docs.openrewrite.org/recipes/java/migrate/jakarta/beanvalidationmessages): Migrate `javax.validation.constraints` messages found in Java files to `jakarta.validation.constraints` equivalents. 
* [org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x](https://docs.openrewrite.org/recipes/java/migrate/jakarta/faces2xmigrationtojakarta4x): Jakarta EE 10 uses Faces 4.0 a major upgrade to Jakarta packages and XML namespaces. 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesEcmaScript](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacesecmascript): Convert JSF to Faces values inside JavaScript,TypeScript, and Properties files 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesXhtml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacesxhtml): Find and replace legacy JSF namespaces and javax references with Jakarta Faces values in XHTML files. 
* [org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxbeansxmltojakartabeansxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxFacesConfigXmlToJakartaFacesConfigXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxfacesconfigxmltojakartafacesconfigxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxfacestaglibraryxmltojakartafacestaglibraryxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxToJakartaCdiExtensions](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxtojakartacdiextensions): Rename `javax.enterprise.inject.spi.Extension` to `jakarta.enterprise.inject.spi.Extension`. 
* [org.openrewrite.java.migrate.jakarta.JavaxWebFragmentXmlToJakartaWebFragmentXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxwebfragmentxmltojakartawebfragmentxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxWebXmlToJakartaWebXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxwebxmltojakartawebxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.UpgradeFacesOpenSourceLibraries](https://docs.openrewrite.org/recipes/java/migrate/jakarta/upgradefacesopensourcelibraries): Upgrade PrimeFaces, OmniFaces, and MyFaces libraries to Jakarta EE10 versions. 
* [org.openrewrite.java.testing.junit5.AddMissingTestBeforeAfterAnnotations](https://docs.openrewrite.org/recipes/java/testing/junit5/addmissingtestbeforeafterannotations): Adds `@BeforeEach`, `@AfterEach`, `@Test` to methods overriding superclass methods if the annoations are present on the superclass method. 
* [org.openrewrite.quarkus.AddQuarkusProperty](https://docs.openrewrite.org/recipes/quarkus/addquarkusproperty): Add a Quarkus configuration property to an existing configuration file if it does not already exist in that file. 

## Changed Recipes

* [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/findsourcefiles) was changed:
  * Old Options:
    * `filePattern: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`