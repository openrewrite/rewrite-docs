# 8.30.0 release (2024-07-16)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.github.FindGitHubActionSecretReferences](https://docs.openrewrite.org/recipes/github/findgithubactionsecretreferences): Help identify and inventory your GitHub secrets that are being used in GitHub actions. 
* [org.openrewrite.gradle.plugins.MigrateGradleEnterpriseToDevelocity](https://docs.openrewrite.org/recipes/gradle/plugins/migrategradleenterprisetodevelocity): Migrate from the Gradle Enterprise Gradle plugin to the Develocity Gradle plugin. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipes): Replace calls to `Logger.log(Level, Throwable, Supplier<String>)` with the corresponding SLF4J method calls. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierAllRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierallrecipe): Replace calls to `java.util.logging.Logger.log(Level.ALL, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierConfigRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierconfigrecipe): Replace calls to `java.util.logging.Logger.log(Level.CONFIG, e, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFineRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierfinerecipe): Replace calls to `java.util.logging.Logger.log(Level.FINE, e, Supplier<String>)` with `org.slf4j.Logger.atDebug().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFinerRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierfinerrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINER, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierFinestRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierfinestrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINEST, e, Supplier<String>)` with `org.slf4j.Logger.atTrace().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierInfoRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierinforecipe): Replace calls to `java.util.logging.Logger.log(Level.INFO, e, Supplier<String>)` with `org.slf4j.Logger.atInfo().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierSevereRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsuppliersevererecipe): Replace calls to `java.util.logging.Logger.log(Level.SEVERE, e, Supplier<String>)` with `org.slf4j.Logger.atError().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierWithThrowableRecipes$JulToSlf4jSupplierWarningRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jlambdasupplierwiththrowablerecipesusdjultoslf4jsupplierwarningrecipe): Replace calls to `java.util.logging.Logger.log(Level.WARNING, e, Supplier<String>)` with `org.slf4j.Logger.atWarn().log(Supplier<String>)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipes): Replace calls to `Logger.log(Level, String, Throwable)` with the corresponding SLF4J method calls. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierAllRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierallrecipe): Replace calls to `java.util.logging.Logger.log(Level.ALL, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierConfigRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierconfigrecipe): Replace calls to `java.util.logging.Logger.log(Level.CONFIG, String message, Throwable e)` with `org.slf4j.Logger.info(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFineRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierfinerecipe): Replace calls to `java.util.logging.Logger.log(Level.FINE, String message, Throwable e)` with `org.slf4j.Logger.debug(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFinerRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierfinerrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINER, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierFinestRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierfinestrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINEST, String message, Throwable e)` with `org.slf4j.Logger.trace(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierInfoRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierinforecipe): Replace calls to `java.util.logging.Logger.log(Level.INFO, String message, Throwable e)` with `org.slf4j.Logger.info(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierSevereRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsuppliersevererecipe): Replace calls to `java.util.logging.Logger.log(Level.SEVERE, String message, Throwable e)` with `org.slf4j.Logger.error(message, e)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4jSimpleCallsWithThrowableRecipes$JulToSlf4jSupplierWarningRecipe](https://docs.openrewrite.org/recipes/java/logging/slf4j/jultoslf4jsimplecallswiththrowablerecipesusdjultoslf4jsupplierwarningrecipe): Replace calls to `java.util.logging.Logger.log(Level.WARNING, String message, Throwable e)` with `org.slf4j.Logger.warn(message, e)`. 
* [org.openrewrite.java.migrate.InternalBindPackages](https://docs.openrewrite.org/recipes/java/migrate/internalbindpackages): Do not use APIs from `com.sun.xml.internal.bind.*` packages. 
* [org.openrewrite.java.struts.migrate6.MigrateOpenSymphonyClasses](https://docs.openrewrite.org/recipes/java/struts/migrate6/migrateopensymphonyclasses): Migrate classes from `com.opensymphony.xwork2` to their replacements in `org.apache.struts2`. 
* [org.openrewrite.java.testing.assertj.IsEqualToBoolean](https://docs.openrewrite.org/recipes/java/testing/assertj/isequaltoboolean): Adopt idiomatic AssertJ assertion for true booleans. 
* [org.openrewrite.micrometer.UpgradeMicrometer13](https://docs.openrewrite.org/recipes/micrometer/upgrademicrometer13): Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the [Micrometer 1.13 migration guide](https://github.com/micrometer-metrics/micrometer/wiki/1.13-Migration-Guide) 
* [org.openrewrite.quarkus.migrate.javaee.AddQuarkus2Dependencies](https://docs.openrewrite.org/recipes/quarkus/migrate/javaee/addquarkus2dependencies): Add Quarkus 2 dependencies to the project. 
* [org.openrewrite.quarkus.migrate.javaee.AddQuarkus2MavenPlugins](https://docs.openrewrite.org/recipes/quarkus/migrate/javaee/addquarkus2mavenplugins): Upgrade Standard JavaEE dependencies to Quarkus 2 dependencies. 
* [org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2CodeMigration](https://docs.openrewrite.org/recipes/quarkus/migrate/javaee/javaeetoquarkus2codemigration): Migrate Standard JavaEE Code to Quarkus 2 
* [org.openrewrite.quarkus.migrate.javaee.JavaEEtoQuarkus2Migration](https://docs.openrewrite.org/recipes/quarkus/migrate/javaee/javaeetoquarkus2migration): These recipes help with the migration of a JavaEE application using EJBs and Hibernate to Quarkus 2. Additional transformations like JSF, JMS, Quarkus Tests may be necessary. 
* [org.openrewrite.quarkus.migrate.javaee.RemoveJavaEEDependencies](https://docs.openrewrite.org/recipes/quarkus/migrate/javaee/removejavaeedependencies): Remove JavaEE dependencies from the project. 
* [org.openrewrite.staticanalysis.AddSerialAnnotationToserialVersionUID](https://docs.openrewrite.org/recipes/staticanalysis/addserialannotationtoserialversionuid): Annotation any `serialVersionUID` fields with `@Serial` to indicate it's part of the serialization mechanism. 
* [org.openrewrite.xml.XsltTransformation](https://docs.openrewrite.org/recipes/xml/xslttransformation): Apply the specified XSLT transformation on matching files. Note that there are no format matching guarantees when running this recipe. 

## Removed Recipes

* **org.openrewrite.java.migrate.InternalBindContextFactory**: Do not use the `com.sun.xml.internal.bind.v2.ContextFactory` class. 

## Changed Recipes

* [org.openrewrite.maven.AddDevelocityMavenExtension](https://docs.openrewrite.org/recipes/maven/adddevelocitymavenextension) was changed:
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
* [org.openrewrite.maven.ChangeDependencyClassifier](https://docs.openrewrite.org/recipes/maven/changedependencyclassifier) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `changeManagedDependency: { type: Boolean, required: false }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: false }`
* [org.openrewrite.java.spring.boot2.MoveAutoConfigurationToImportsFile](https://docs.openrewrite.org/recipes/java/spring/boot2/moveautoconfigurationtoimportsfile) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `preserveFactoriesFile: { type: Boolean, required: false }`
* [org.openrewrite.yaml.ChangePropertyKey](https://docs.openrewrite.org/recipes/yaml/changepropertykey) was changed:
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
* [org.openrewrite.yaml.ChangePropertyValue](https://docs.openrewrite.org/recipes/yaml/changepropertyvalue) was changed:
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
* [org.openrewrite.yaml.ChangeValue](https://docs.openrewrite.org/recipes/yaml/changevalue) was changed:
  * Old Options:
    * `keyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* [org.openrewrite.yaml.DeleteKey](https://docs.openrewrite.org/recipes/yaml/deletekey) was changed:
  * Old Options:
    * `keyPath: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `keyPath: { type: String, required: true }`
* [org.openrewrite.yaml.DeleteProperty](https://docs.openrewrite.org/recipes/yaml/deleteproperty) was changed:
  * Old Options:
    * `coalesce: { type: Boolean, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
  * New Options:
    * `coalesce: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `relaxedBinding: { type: Boolean, required: false }`
* [org.openrewrite.yaml.MergeYaml](https://docs.openrewrite.org/recipes/yaml/mergeyaml) was changed:
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