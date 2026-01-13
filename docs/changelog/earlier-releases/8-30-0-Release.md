# 8.30.0 release (2024-07-16)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.github.FindGitHubActionSecretReferences: Help identify and inventory your GitHub secrets that are being used in GitHub actions. 
* org.openrewrite.gradle.plugins.MigrateGradleEnterpriseToDevelocity: Migrate from the Gradle Enterprise Gradle plugin to the Develocity Gradle plugin. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes: Replace calls to `Logger.log(Level, Throwable, Supplier<String>)` with the corresponding SLF4J method calls. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierAllRecipe: Replace calls to `java.util.logging.Logger.log(Level.ALL, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierConfigRecipe: Replace calls to `java.util.logging.Logger.log(Level.CONFIG, e, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFineRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINE, e, Supplier<String>)` with `org.slf4j.Logger.atDebug().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFinerRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINER, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFinestRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINEST, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierInfoRecipe: Replace calls to `java.util.logging.Logger.log(Level.INFO, e, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierSevereRecipe: Replace calls to `java.util.logging.Logger.log(Level.SEVERE, e, Supplier<String>)` with `org.slf4j.Logger.atError().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierWarningRecipe: Replace calls to `java.util.logging.Logger.log(Level.WARNING, e, Supplier<String>)` with `org.slf4j.Logger.atWarn().log(Supplier<String>)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes: Replace calls to `Logger.log(Level, String, Throwable)` with the corresponding SLF4J method calls. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierAllRecipe: Replace calls to `java.util.logging.Logger.log(Level.ALL, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierConfigRecipe: Replace calls to `java.util.logging.Logger.log(Level.CONFIG, String message, Throwable e)` with `org.slf4j.Logger.info(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFineRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINE, String message, Throwable e)` with `org.slf4j.Logger.debug(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFinerRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINER, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFinestRecipe: Replace calls to `java.util.logging.Logger.log(Level.FINEST, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierInfoRecipe: Replace calls to `java.util.logging.Logger.log(Level.INFO, String message, Throwable e)` with `org.slf4j.Logger.info(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierSevereRecipe: Replace calls to `java.util.logging.Logger.log(Level.SEVERE, String message, Throwable e)` with `org.slf4j.Logger.error(message, e)`. 
* org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierWarningRecipe: Replace calls to `java.util.logging.Logger.log(Level.WARNING, String message, Throwable e)` with `org.slf4j.Logger.warn(message, e)`. 
* org.openrewrite.java.migrate.InternalBindPackages: Do not use APIs from `com.sun.xml.internal.bind.*` packages. 
* org.openrewrite.java.struts.migrate6.MigrateOpenSymphonyClasses: Migrate classes from `com.opensymphony.xwork2` to their replacements in `org.apache.struts2`. 
* org.openrewrite.java.testing.assertj.IsEqualToBoolean: Adopt idiomatic AssertJ assertion for true booleans. 
* org.openrewrite.micrometer.UpgradeMicrometer13]: Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the Micrometer 1.13 migration guide 
* org.openrewrite.quarkus.migrate.javaee.AddQuarkus2Dependencies: Add Quarkus 2 dependencies to the project. 
* org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins: Upgrade Standard JavaEE dependencies to Quarkus 2 dependencies. 
* org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration: Migrate Standard JavaEE Code to Quarkus 2 
* org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration: These recipes help with the migration of a JavaEE application using EJBs and Hibernate to Quarkus 2. Additional transformations like JSF, JMS, Quarkus Tests may be necessary. 
* org.openrewrite.quarkus.migrate.javaee.RemoveJavaEEDependencies: Remove JavaEE dependencies from the project. 
* org.openrewrite.staticanalysis.AddSerialAnnotationToserialVersionUID: Annotation any `serialVersionUID` fields with `@Serial` to indicate it's part of the serialization mechanism. 
* org.openrewrite.xml.XsltTransformation: Apply the specified XSLT transformation on matching files. Note that there are no format matching guarantees when running this recipe. 

## Removed Recipes

* **org.openrewrite.java.migrate.InternalBindContextFactory**: Do not use the `com.sun.xml.internal.bind.v2.ContextFactory` class. 

## Changed Recipes

* org.openrewrite.maven.AddDevelocityMavenExtension was changed:
  * Old Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureGoalInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: true }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: false }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `fileFingerprints: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: true }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: false }`
* org.openrewrite.maven.ChangeDependencyClassifier was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `changeManagedDependency: { type: Boolean, required: false }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: false }`
* org.openrewrite.java.spring.boot2.MoveAutoConfigurationToImportsFile was changed:
  * Old Options:
    * `None`
  * New Options:
    * `preserveFactoriesFile: { type: Boolean, required: false }`
* org.openrewrite.yaml.ChangePropertyKey was changed:
  * Old Options:
    * `except: { type: List, required: false }`
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `except: { type: List, required: false }`
    * `filePattern: { type: String, required: false }`
    * `newPropertyKey: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.yaml.ChangePropertyValue was changed:
  * Old Options:
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.yaml.ChangeValue was changed:
  * Old Options:
    * `keyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* org.openrewrite.yaml.DeleteKey was changed:
  * Old Options:
    * `keyPath: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
* org.openrewrite.yaml.DeleteProperty was changed:
  * Old Options:
    * `coalesce: { type: Boolean, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `coalesce: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* org.openrewrite.yaml.MergeYaml was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`