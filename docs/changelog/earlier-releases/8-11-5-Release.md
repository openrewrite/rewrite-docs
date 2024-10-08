# 8.11.5 release (2023-12-21)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.java.ClassDefinitionLength: Locates class definitions and predicts the number of token in each. 
* org.openrewrite.java.MethodDefinitionLength: Locates method definitions and predicts the number of token in each. 
* org.openrewrite.java.logging.log4j.CommonsLoggingToLog4j: Transforms code written using Apache Commons Logging to use Log4j 2.x API. 
* org.openrewrite.java.logging.log4j.ConvertJulEntering: Replaces JUL's Logger#entering method calls to Log4j API Logger#traceEntry calls. 
* org.openrewrite.java.logging.log4j.ConvertJulExiting: Replaces JUL's Logger#exiting method calls to Log4j API Logger#traceEntry calls. 
* org.openrewrite.java.logging.log4j.JulToLog4j: Transforms code written using `java.util.logging` to use Log4j 2.x API. 
* org.openrewrite.java.migrate.jakarta.BeanValidationMessages: Migrate `javax.validation.constraints` messages found in Java files to `jakarta.validation.constraints` equivalents. 
* org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x: Jakarta EE 10 uses Faces 4.0 a major upgrade to Jakarta packages and XML namespaces. 
* org.openrewrite.java.migrate.jakarta.JakartaFacesEcmaScript: Convert JSF to Faces values inside JavaScript,TypeScript, and Properties files 
* org.openrewrite.java.migrate.jakarta.JakartaFacesXhtml: Find and replace legacy JSF namespaces and javax references with Jakarta Faces values in XHTML files. 
* org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml: Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* org.openrewrite.java.migrate.jakarta.JavaxFacesConfigXmlToJakartaFacesConfigXml: Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* org.openrewrite.java.migrate.jakarta.JavaxFacesTagLibraryXmlToJakartaFacesTagLibraryXml: Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* org.openrewrite.java.migrate.jakarta.JavaxToJakartaCdiExtensions: Rename `javax.enterprise.inject.spi.Extension` to `jakarta.enterprise.inject.spi.Extension`. 
* org.openrewrite.java.migrate.jakarta.JavaxWebFragmentXmlToJakartaWebFragmentXml: Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* org.openrewrite.java.migrate.jakarta.JavaxWebXmlToJakartaWebXml: Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* org.openrewrite.java.migrate.jakarta.UpgradeFacesOpenSourceLibraries: Upgrade PrimeFaces, OmniFaces, and MyFaces libraries to Jakarta EE10 versions. 
* org.openrewrite.java.testing.junit5.AddMissingTestBeforeAfterAnnotations: Adds `@BeforeEach`, `@AfterEach`, `@Test` to methods overriding superclass methods if the annotations are present on the superclass method. 
* org.openrewrite.quarkus.AddQuarkusProperty: Add a Quarkus configuration property to an existing configuration file if it does not already exist in that file. 

## Changed Recipes

* org.openrewrite.FindSourceFiles was changed:
  * Old Options:
    * `filePattern: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`