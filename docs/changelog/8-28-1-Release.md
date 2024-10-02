# 8.28.1 release (2024-06-19)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.quarkus.updates.camel.camel40.UsePluginHelperForContextGetters](../recipes/io/quarkus/updates/camel/camel40/usepluginhelperforcontextgetters):  
* [io.quarkus.updates.camel.customRecipes.MoveGetterToPluginHelper](../recipes/io/quarkus/updates/camel/customrecipes/movegettertopluginhelper): Move getter from context to PluginHelper 
* [io.quarkus.updates.core.quarkus39.GraalSDK](../recipes/io/quarkus/updates/core/quarkus39/graalsdk):  
* [io.quarkus.updates.core.quarkus39.SyncHibernateJpaModelgenVersionWithBOM](../recipes/io/quarkus/updates/core/quarkus39/synchibernatejpamodelgenversionwithbom):  
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipes): Replace calls to `Logger.log(Level, String)` with the corresponding method calls. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelConfigSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelconfigsuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.CONFIG, Supplier<String>)` with `Logger.config(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelConfigToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelconfigtomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.CONFIG, String)` with `Logger.config(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFineSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinesuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINE, Supplier<String>)` with `Logger.fine(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFineToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinetomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINE, String)` with `Logger.fine(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinerSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinersuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINER, Supplier<String>)` with `Logger.finer(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinerToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINER, String)` with `Logger.finer(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinestSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinestsuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINEST, Supplier<String>)` with `Logger.finest(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinestToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelfinesttomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.FINEST, String)` with `Logger.finest(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelInfoSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelinfosuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.INFO, Supplier<String>)` with `Logger.info(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelInfoToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelinfotomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.INFO, String)` with `Logger.info(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelSevereSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelseveresuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.SEVERE, Supplier<String>)` with `Logger.severe(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelSevereToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelseveretomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.SEVERE, String)` with `Logger.severe(String)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelWarningSupplierToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelwarningsuppliertomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.WARNING, Supplier<String>)` with `Logger.warning(Supplier<String>)`. 
* [org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelWarningToMethodRecipe](../recipes/java/logging/jul/loggerlevelargumenttomethodrecipesusdloglevelwarningtomethodrecipe): Replace calls to `java.util.logging.Logger.log(Level.WARNING, String)` with `Logger.warning(String)`. 
* [org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes](../recipes/java/logging/slf4j/julgetloggertologgerfactoryrecipes): Replace calls to `Logger.getLogger` with `LoggerFactory.getLogger`. 
* [org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes$GetLoggerClassCanonicalNameToLoggerFactoryRecipe](../recipes/java/logging/slf4j/julgetloggertologgerfactoryrecipesusdgetloggerclasscanonicalnametologgerfactoryrecipe): Replace calls to `java.util.logging.Logger.getLogger(Some.class.getCanonicalName())` with `org.slf4j.LoggerFactory.getLogger(Some.class)`. 
* [org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes$GetLoggerClassNameToLoggerFactoryRecipe](../recipes/java/logging/slf4j/julgetloggertologgerfactoryrecipesusdgetloggerclassnametologgerfactoryrecipe): Replace calls to `java.util.logging.Logger.getLogger(Some.class.getName())` with `org.slf4j.LoggerFactory.getLogger(Some.class)`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipes): Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelAllRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelallrecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.ALL)` with `org.slf4j.Logger.isTraceEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelConfigRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelconfigrecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.CONFIG)` with `org.slf4j.Logger.isInfoEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFineRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelfinerecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.FINE)` with `org.slf4j.Logger.isDebugEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFinerRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelfinerrecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.FINER)` with `org.slf4j.Logger.isTraceEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFinestRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelfinestrecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.FINEST)` with `org.slf4j.Logger.isTraceEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelInfoRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelinforecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.INFO)` with `org.slf4j.Logger.isInfoEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelSevereRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelsevererecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.SEVERE)` with `org.slf4j.Logger.isErrorEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelWarningRecipe](../recipes/java/logging/slf4j/julisloggabletoisenabledrecipesusdloggerisloggablelevelwarningrecipe): Replace calls to `java.util.logging.Logger.isLoggable(Level.WARNING)` with `org.slf4j.Logger.isWarnEnabled()`. 
* [org.openrewrite.java.logging.slf4j.JulLevelAllToTraceRecipe](../recipes/java/logging/slf4j/jullevelalltotracerecipe): Replace `java.util.logging.Logger#log(Level.ALL, String)` with `org.slf4j.Logger#trace(String)`. 
* [org.openrewrite.java.logging.slf4j.JulToSlf4j](../recipes/java/logging/slf4j/jultoslf4j): Migrates usage of Java Util Logging (JUL) to using SLF4J directly. 
* [org.openrewrite.java.migrate.IBMJDKtoOracleJDK](../recipes/java/migrate/ibmjdktooraclejdk): This recipe will apply changes commonly needed when upgrading Java versions. The solutions provided in this list are solutions necessary for migrating from IBM Runtimes to Oracle Runtimes. 
* [org.openrewrite.java.migrate.Krb5LoginModuleClass](../recipes/java/migrate/krb5loginmoduleclass): Do not use the `com.ibm.security.auth.module.Krb5LoginModule` class. 
* [org.openrewrite.java.migrate.RemovedPolicy](../recipes/java/migrate/removedpolicy): The `javax.security.auth.Policy` class is not available from Java SE 11 onwards. 
* [org.openrewrite.java.recipes.BlankLinesAroundFieldsWithAnnotations](../recipes/java/recipes/blanklinesaroundfieldswithannotations): Fields with annotations should have a blank line before them to clearly separate them from the field above. If another field follows, it should also have a blank line after so that the field with the annotation has space on either side of it, visually distinguishing it from its neighbors. 
* [org.openrewrite.java.spring.boot3.RelocateLauncherClasses](../recipes/java/spring/boot3/relocatelauncherclasses): Relocate classes that have been moved to different packages in Spring Boot 3.2. 
* [org.openrewrite.java.testing.assertj.IsEqualToEmptyString](../recipes/java/testing/assertj/isequaltoemptystring): Adopt idiomatic AssertJ assertion for empty Strings. 

## Changed Recipes

* [org.openrewrite.gradle.ChangeDependencyClassifier](../recipes/gradle/changedependencyclassifier) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `newClassifier: { type: String, required: false }`
* [org.openrewrite.maven.AddRepository](../recipes/maven/addrepository) was changed:
  * Old Options:
    * `id: { type: String, required: true }`
    * `layout: { type: String, required: false }`
    * `releasesChecksumPolicy: { type: String, required: false }`
    * `releasesEnabled: { type: Boolean, required: false }`
    * `releasesUpdatePolicy: { type: String, required: false }`
    * `repoName: { type: String, required: false }`
    * `snapshotsChecksumPolicy: { type: String, required: false }`
    * `snapshotsEnabled: { type: Boolean, required: false }`
    * `snapshotsUpdatePolicy: { type: String, required: false }`
    * `url: { type: String, required: true }`
  * New Options:
    * `id: { type: String, required: true }`
    * `layout: { type: String, required: false }`
    * `releasesChecksumPolicy: { type: String, required: false }`
    * `releasesEnabled: { type: Boolean, required: false }`
    * `releasesUpdatePolicy: { type: String, required: false }`
    * `repoName: { type: String, required: false }`
    * `snapshotsChecksumPolicy: { type: String, required: false }`
    * `snapshotsEnabled: { type: Boolean, required: false }`
    * `snapshotsUpdatePolicy: { type: String, required: false }`
    * `type: { type: Type, required: false }`
    * `url: { type: String, required: true }`
* [org.openrewrite.xml.search.FindTags](../recipes/xml/search/findtags) was changed:
  * Old Options:
    * `xpath: { type: String, required: true }`
  * New Options:
    * `xPath: { type: String, required: true }`