---
description: What's changed in OpenRewrite version 8.60.0.
---

# 8.60.0 release (2025-08-13)

_Total recipe count: 4631_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.43.6`
* Staging CLI version: `v3.44.4`

## New Artifacts
* rewrite-program-analysis

## New Recipes

* [com.oracle.weblogic.rewrite.WebLogicXmlCreateIfNotExists1511](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/weblogicxmlcreateifnotexists1511): This recipe will create a `weblogic.xml` file with the WebLogic 15.1.1 namespace if it does not already exist. 
* [com.oracle.weblogic.rewrite.WebLogicXmlPreferApplicationPackagesJPA](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/weblogicxmlpreferapplicationpackagesjpa): This recipe will add a `prefer-application-packages` entry for Jakarta Persistence in `weblogic.xml` if it does not already exist. 
* [com.oracle.weblogic.rewrite.WebLogicXmlPreferApplicationPackagesSlf4j](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/weblogicxmlpreferapplicationpackagesslf4j): This recipe will add a `prefer-application-packages` entry for SLF4J in `weblogic.xml` if it does not already exist. 
* [com.oracle.weblogic.rewrite.jakarta.UpdateJakartaPersistenceTo31](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/jakarta/updatejakartapersistenceto31): Update Jakarta Persistence to 3.1. 
* [com.oracle.weblogic.rewrite.jakarta.UpdateJakartaPersistenceTo32](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/jakarta/updatejakartapersistenceto32): Update Jakarta Persistence to 3.2. 
* [com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/jakarta/upgrademavenpluginartifactitems): Change the groupId and the artifactId of an artifactItem in the configuration section of a plugin's execution. This recipe does not perform any validation and assumes all values passed are valid. 
* [com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginConfigurationArtifacts](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/jakarta/upgrademavenpluginconfigurationartifacts): Change artifacts for a Maven plugin configuration artifacts. 
* [com.oracle.weblogic.rewrite.spring.data.UpgradeSpringDataJpa](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/spring/data/upgradespringdatajpa): Upgrade Spring Data JPA to 3.4.6 version, which is the version used by spring-data-bom v2024.1.x 
* [io.moderne.hibernate.update70.AddCascadePersistToIdMappedAssociations](https://docs.openrewrite.org/recipes/hibernate/update70/addcascadepersisttoidmappedassociations): Hibernate used to automatically enable cascade=PERSIST for association fields annotated @Id or @MapsId. This was undocumented and unexpected behavior, and no longer supported in Hibernate 7. Existing code which relies on this behavior will be modified by addition of explicit cascade=PERSIST to the association fields. 
* [io.moderne.hibernate.update70.MigrateToTargetEmbeddable](https://docs.openrewrite.org/recipes/hibernate/update70/migratetotargetembeddable): Migrates code using removed @Target to to Hibernate 7.0's @TargetEmbeddable equivalent. Removes misused @Target annotations. 
* [io.quarkus.updates.camel.camel413.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel413/camelquarkusmigrationrecipe): Migrates `camel 4.12` Quarkus application to `camel 4.13`. 
* [io.quarkus.updates.core.quarkus326.EnableEnabledConfigChanges](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus326/enableenabledconfigchanges):  
* [org.apache.camel.upgrade.camel413.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/camelmigrationrecipe): Migrates `camel 4.12` application to `camel 4.13`. 
* [org.apache.camel.upgrade.camel413.YamlDsl413Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/yamldsl413recipe): Apache Camel YML DSL migration from version 4.12 o 4.13. 
* [org.apache.camel.upgrade.camel413.authenticationHttpClientConfigurer](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/authenticationhttpclientconfigurer): BasicAuthenticationHttpClientConfigurer is renamed to DefaultAuthenticationHttpClientConfigurer. 
* [org.apache.camel.upgrade.camel413.furyDependency](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/furydependency):  
* [org.apache.camel.upgrade.camel413.furyDsl](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/furydsl):  
* [org.apache.camel.upgrade.camel413.furyJava](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel413/furyjava): BasicAuthenticationHttpClientConfigurer is renamed to DefaultAuthenticationHttpClientConfigurer. 
* [org.openrewrite.analysis.java.FindNullPointerIssues](https://docs.openrewrite.org/recipes/analysis/java/findnullpointerissues): Detects potential null pointer dereferences using path-sensitive analysis to distinguish between definite NPEs, possible NPEs, and safe dereferences. 
* [org.openrewrite.analysis.java.controlflow.FindUnusedDefinitions](https://docs.openrewrite.org/recipes/analysis/java/controlflow/findunuseddefinitions): Identifies variable assignments whose values are never used before being overwritten. 
* [org.openrewrite.analysis.java.controlflow.search.FindCyclomaticComplexity](https://docs.openrewrite.org/recipes/analysis/java/controlflow/search/findcyclomaticcomplexity): Calculates the cyclomatic complexity of methods and produces a data table containing the class name, method name, argument types, complexity value, and complexity threshold. 
* [org.openrewrite.analysis.java.controlflow.search.FindUnreachableCode](https://docs.openrewrite.org/recipes/analysis/java/controlflow/search/findunreachablecode): Uses control flow analysis to identify statements that can never be executed. 
* [org.openrewrite.analysis.java.dataflow.FindDeadStores](https://docs.openrewrite.org/recipes/analysis/java/dataflow/finddeadstores): Identifies variable assignments whose values are never used before being overwritten or going out of scope. 
* [org.openrewrite.analysis.java.datalineage.TrackDataLineage](https://docs.openrewrite.org/recipes/analysis/java/datalineage/trackdatalineage): Tracks the flow of data from database sources (JDBC queries, JPA entities) to API sinks (REST endpoints, GraphQL mutations) to understand data dependencies and support compliance requirements. 
* [org.openrewrite.analysis.java.privacy.FindPiiExposure](https://docs.openrewrite.org/recipes/analysis/java/privacy/findpiiexposure): Detects when Personally Identifiable Information (PII) is exposed through logging statements or sent to external APIs without proper sanitization. This helps prevent data leaks and ensures compliance with privacy regulations like GDPR and CCPA. 
* [org.openrewrite.analysis.java.security.FindCommandInjection](https://docs.openrewrite.org/recipes/analysis/java/security/findcommandinjection): Detects when user-controlled input flows into system command execution methods like Runtime.exec() or ProcessBuilder, which could allow attackers to execute arbitrary commands. 
* [org.openrewrite.analysis.java.security.FindLdapInjection](https://docs.openrewrite.org/recipes/analysis/java/security/findldapinjection): Finds LDAP injection vulnerabilities by tracking tainted data flow from user input to LDAP queries. 
* [org.openrewrite.analysis.java.security.FindPathTraversal](https://docs.openrewrite.org/recipes/analysis/java/security/findpathtraversal): Detects potential path traversal vulnerabilities where user input flows to file system operations without proper validation. 
* [org.openrewrite.analysis.java.security.FindSecurityVulnerabilities](https://docs.openrewrite.org/recipes/analysis/java/security/findsecurityvulnerabilities): Identifies potential security vulnerabilities where untrusted data from sources flows to sensitive sinks without proper sanitization. 
* [org.openrewrite.analysis.java.security.FindSqlInjection](https://docs.openrewrite.org/recipes/analysis/java/security/findsqlinjection): Detects potential SQL injection vulnerabilities where user input flows to SQL execution methods without proper sanitization. 
* [org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage](https://docs.openrewrite.org/recipes/analysis/java/security/findunencryptedpiistorage): Identifies when personally identifiable information (PII) is stored in databases, files, or other persistent storage without encryption. 
* [org.openrewrite.analysis.java.security.FindXssVulnerability](https://docs.openrewrite.org/recipes/analysis/java/security/findxssvulnerability): Detects potential cross-site scripting vulnerabilities where user input flows to output methods without proper sanitization. 
* [org.openrewrite.analysis.java.security.FindXxeVulnerability](https://docs.openrewrite.org/recipes/analysis/java/security/findxxevulnerability): Locates XML parsers that are not configured to prevent XML External Entity (XXE) attacks. 
* [org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveRedundantNullCheckWithIsNotBlankRecipe](https://docs.openrewrite.org/recipes/apache/commons/lang/apachecommonsstringutilsrecipes$removeredundantnullcheckwithisnotblankrecipe): Remove redundant null check when using `StringUtils.isNotBlank(String)` as it already handles null values. 
* [org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs](https://docs.openrewrite.org/recipes/github/removeunusedworkflowdispatchinputs): Remove workflow_dispatch inputs that are not referenced anywhere in the workflow file. 
* [org.openrewrite.github.RemoveWorkflowInputArgument](https://docs.openrewrite.org/recipes/github/removeworkflowinputargument): Remove a specific input argument from calls to a reusable workflow. 
* [org.openrewrite.gradle.ChangeManagedDependency](https://docs.openrewrite.org/recipes/gradle/changemanageddependency): Change a Gradle managed dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before.
For now, only Spring Dependency Management Plugin entries are supported and no other forms of managed dependencies (yet). 
* [org.openrewrite.gradle.RemoveExtension](https://docs.openrewrite.org/recipes/gradle/removeextension): Remove a Gradle build extension from `settings.gradle(.kts)` or `build.gradle(.kts)` files. 
* [org.openrewrite.java.AddCommentToImport](https://docs.openrewrite.org/recipes/java/addcommenttoimport): Add a comment to an import statement in a Java source file. 
* [org.openrewrite.java.dependencies.FindDependency](https://docs.openrewrite.org/recipes/java/dependencies/finddependency): Finds direct dependencies declared in Maven and Gradle build files. This does *not* search transitive dependencies. To detect both direct and transitive dependencies use `org.openrewrite.java.dependencies.DependencyInsight` This recipe works for both Maven and Gradle projects. 
* [org.openrewrite.java.dependencies.search.DoesNotIncludeDependency](https://docs.openrewrite.org/recipes/java/dependencies/search/doesnotincludedependency): A precondition which returns false if visiting a Gradle file / Maven pom which includes the specified dependency in the classpath of some Gradle configuration / Maven scope. For compatibility with multimodule projects, this should most often be applied as a precondition. 
* [org.openrewrite.java.logging.ArgumentArrayToVarargs](https://docs.openrewrite.org/recipes/java/logging/argumentarraytovarargs): For Logger methods that support varargs, convert any final explicit `Object[]` arguments into their unpacked values. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes): Replace `logger.level("hello {0}", arg)` with `logger.levelv("hello {0}", arg)`. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$DebugToVDebugRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugrecipe): Recipe created for the following Refaster template:
```java
public static class DebugToVDebug {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.debug(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.debugv(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$DebugToVDebugWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$debugtovdebugwiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class DebugToVDebugWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.debug((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.debugv(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$ErrorToVErrorRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorrecipe): Recipe created for the following Refaster template:
```java
public static class ErrorToVError {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.error(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.errorv(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$ErrorToVErrorWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$errortoverrorwiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class ErrorToVErrorWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.error((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.errorv(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$FatalToVFatalRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalrecipe): Recipe created for the following Refaster template:
```java
public static class FatalToVFatal {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.fatal(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.fatalv(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$FatalToVFatalWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$fataltovfatalwiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class FatalToVFatalWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.fatal((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.fatalv(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$InfoToVInfoRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$infotovinforecipe): Recipe created for the following Refaster template:
```java
public static class InfoToVInfo {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.info(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.infov(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$InfoToVInfoWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$infotovinfowiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class InfoToVInfoWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.info((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.infov(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$TraceToVTraceRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracerecipe): Recipe created for the following Refaster template:
```java
public static class TraceToVTrace {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.trace(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.tracev(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$TraceToVTraceWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$tracetovtracewiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class TraceToVTraceWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.trace((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.tracev(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$WarnToVWarnRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnrecipe): Recipe created for the following Refaster template:
```java
public static class WarnToVWarn {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args) {
        logger.warn(message, args);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args) {
        logger.warnv(message, args);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.FormattedArgumentsToVMethodRecipes$WarnToVWarnWithThrowableRecipe](https://docs.openrewrite.org/recipes/java/logging/jboss/formattedargumentstovmethodrecipes$warntovwarnwiththrowablerecipe): Recipe created for the following Refaster template:
```java
public static class WarnToVWarnWithThrowable {
    
    @BeforeTemplate
    void before(Logger logger, String message, Object[] args, Throwable t) {
        logger.warn((Object)message, args, t);
    }
    
    @AfterTemplate
    void after(Logger logger, String message, Object[] args, Throwable t) {
        logger.warnv(message, args, t);
    }
}
```
. 
* [org.openrewrite.java.logging.jboss.JBossLoggingBestPractices](https://docs.openrewrite.org/recipes/java/logging/jboss/jbossloggingbestpractices): This recipe applies best practices for logging in JBoss applications.
It includes converting argument arrays to varargs for better readability and performance. 
* [org.openrewrite.java.logging.jboss.LoggerLevelArgumentToMethod](https://docs.openrewrite.org/recipes/java/logging/jboss/loggerlevelargumenttomethod): Replace calls to `Logger.log(Level, ...)` with the corresponding eponymous level method calls. For example `Logger.log(Level.INFO, ...)` to `Logger.info(...)`. 
* [org.openrewrite.java.logging.slf4j.AddJBossLogManagerSlf4jProviderDependency](https://docs.openrewrite.org/recipes/java/logging/slf4j/addjbosslogmanagerslf4jproviderdependency): When JBoss LogManager is the logging backend, add its SLF4J provider so we can migrate to SLF4J as a logging facade. 
* [org.openrewrite.java.logging.slf4j.JBossLoggingToSlf4j](https://docs.openrewrite.org/recipes/java/logging/slf4j/jbossloggingtoslf4j): Migrates usage of the JBoss Logging facade to using SLF4J. 
* [org.openrewrite.java.migrate.UpdateJakartaAnnotationsIfExistsForJakarta](https://docs.openrewrite.org/recipes/java/migrate/updatejakartaannotationsifexistsforjakarta): Counteract the `jakarta.annotation-api` by updating to `jakarta` namespace 
* [org.openrewrite.java.migrate.UpdateJakartaAnnotationsIfForJavax](https://docs.openrewrite.org/recipes/java/migrate/updatejakartaannotationsifforjavax): Counteract the `jakarta.annotation-api` by updating to `jakarta` namespace 
* [org.openrewrite.java.migrate.jakarta.RemoveJakartaAnnotationDependencyWhenManagedBySpringBoot](https://docs.openrewrite.org/recipes/java/migrate/jakarta/removejakartaannotationdependencywhenmanagedbyspringboot): Best practice recipe to cleanup a direct dependency which also comes transitively for Spring Boot applications. 
* [org.openrewrite.java.migrate.lang.SwitchCaseAssignmentsToSwitchExpression](https://docs.openrewrite.org/recipes/java/migrate/lang/switchcaseassignmentstoswitchexpression): Switch statements for which each case is assigning a value to the same variable can be converted to a switch expression that returns the value of the variable. This is only applicable for Java 17 and later. 
* [org.openrewrite.java.migrate.lang.SwitchCaseReturnsToSwitchExpression](https://docs.openrewrite.org/recipes/java/migrate/lang/switchcasereturnstoswitchexpression): Switch statements where each case returns a value can be converted to a switch expression that returns the value directly. 
* [org.openrewrite.java.migrate.lang.SwitchExpressionYieldToArrow](https://docs.openrewrite.org/recipes/java/migrate/lang/switchexpressionyieldtoarrow): Convert switch expressions with colon cases and yield statements to arrow syntax. 
* [org.openrewrite.java.migrate.lombok.AdoptLombokSetterMethodNames](https://docs.openrewrite.org/recipes/java/migrate/lombok/adoptlomboksettermethodnames): Rename methods that are effectively setter to the name Lombok would give them.
Limitations:
 - If two methods in a class are effectively the same setter then one's name will be corrected and the others name will be left as it is.
 - If the correct name for a method is already taken by another method then the name will not be corrected.
 - Method name swaps or circular renaming within a class cannot be performed because the names block each other.
E.g. `int getFoo() { return ba; } int getBa() { return foo; }` stays as it is. 
* [org.openrewrite.java.recipes.ReplaceNullWithDoesNotExist](https://docs.openrewrite.org/recipes/java/recipes/replacenullwithdoesnotexist): Replace the first or second `null` argument in OpenRewrite Assertions class methods with `RewriteTest.doesNotExist()`. 
* [org.openrewrite.java.recipes.UseRewriteTestDefaults](https://docs.openrewrite.org/recipes/java/recipes/userewritetestdefaults): When all `rewriteRun` methods in a test class use the same RecipeSpec configuration, refactor to use the `defaults` method instead. 
* [org.openrewrite.maven.RemoveRedundantProperties](https://docs.openrewrite.org/recipes/maven/removeredundantproperties): Remove properties when a parent POM specifies the same property. 
* [org.openrewrite.staticanalysis.MoveConditionsToWhile](https://docs.openrewrite.org/recipes/staticanalysis/moveconditionstowhile): Simplifies `while (true)` loops where the first statement is an `if` statement that only contains a `break`. The condition is inverted and moved to the loop condition for better readability. 
* [org.openrewrite.staticanalysis.PreferEqualityComparisonOverDifferenceCheck](https://docs.openrewrite.org/recipes/staticanalysis/preferequalitycomparisonoverdifferencecheck): Replace `a - b == 0` with `a == b`, `a - b != 0` with `a != b`, `a - b < 0` with `a < b`, and similar transformations for all comparison operators to improve readability and avoid overflow issues. 
* [org.openrewrite.staticanalysis.PreferIncrementOperator](https://docs.openrewrite.org/recipes/staticanalysis/preferincrementoperator): Prefer the use of increment and decrement operators (`++`, `--`, `+=`, `-=`) over their more verbose equivalents. 
* [org.openrewrite.staticanalysis.RemoveRedundantNullCheckBeforeLiteralEquals](https://docs.openrewrite.org/recipes/staticanalysis/removeredundantnullcheckbeforeliteralequals): Removes redundant null checks before `equals()` comparisons when the receiver is a literal string, since literals can never be null and `equals()` returns false for null arguments. 
* [org.openrewrite.staticanalysis.SimplifyBooleanExpressionWithDeMorgan](https://docs.openrewrite.org/recipes/staticanalysis/simplifybooleanexpressionwithdemorgan): Applies De Morgan's laws to simplify boolean expressions with negation. Transforms `!(a && b)` to `!a || !b` and `!(a || b)` to `!a && !b`. 
* [org.openrewrite.staticanalysis.maven.MavenJavadocNonAsciiRecipe](https://docs.openrewrite.org/recipes/staticanalysis/maven/mavenjavadocnonasciirecipe): Maven's javadoc-plugin configuration does not support non-ASCII characters. What makes it tricky is the error is very ambiguous and doesn't help in any way. This recipe removes those non-ASCII characters. 
* [org.openrewrite.xml.AddTagAttribute](https://docs.openrewrite.org/recipes/xml/addtagattribute): Add new XML attribute with value on a specified element. 

## Removed Recipes

* **io.moderne.cryptography.FindHardcodedAlgorithmChoice**: Locate hardcoded algorithm choices in cryptographic code. 
* **io.moderne.cryptography.FindHardcodedAlgorithmSpecificParameters**: Locate hardcoded algorithm specific parameters in cryptographic code. 
* **io.moderne.cryptography.FindHardcodedCertificate**: Detects hardcoded PEM certificates passed into `CertificateFactory.generateCertificate()`. 
* **io.moderne.cryptography.FindHardcodedCipherSuitesOnSslSocket**: Detects hardcoded cipher suites in SSL socket configurations, which can lead to security vulnerabilities. 
* **io.moderne.cryptography.FindHardcodedCiphersuiteChoice**: Locate hardcoded ciphersuite choices in cryptographic code. 
* **io.moderne.cryptography.FindHardcodedKeyPairGenerator**: Detects hardcoded cryptographic algorithms. 
* **io.moderne.cryptography.FindHardcodedPrivateKey**: Detects hardcoded PEM private keys passed into `KeyFactory.generatePrivate()`. 
* **io.moderne.cryptography.FindHardcodedProtocolChoice**: Locate hardcoded protocol choices in cryptographic code. 
* **io.moderne.cryptography.FindHardcodedProtocolsOnSSLSocketCreation**: Finds hardcoded protocols in SSL socket creation methods, such as `SSLContext.getInstance(String)`. 
* **io.moderne.cryptography.FindHardcodedProtocolsOnSSLSocketSetProtocols**: Detects hardcoded protocol versions in SSL socket configurations, which can hinder adaptability and security. 
* **io.moderne.cryptography.FindHardcodedRSAKeyGenParameterSpec**: It is usually insecure to pass hardcoded numbers passed into `RSAKeyGenParameterSpec`. 
* **io.moderne.cryptography.FindHardcodedSecretKeySpec**: Detects hardcoded cryptographic algorithms. 
* **io.moderne.cryptography.FindInsecureSecuritySetProperties**: Locate calls to `Security.setProperty` that set insecure properties. 
* **io.moderne.cryptography.FindSecurityProviderEditing**: Locate programmatic edits of the `Security` provider list. 
* **io.moderne.cryptography.FindSslConfiguration**: The configuration of Secure Socket Layer (SSL) and Transport Layer Security (TLS) is a key aspect of making a secure  application. This recipe detects and enumerates these configurations. 
* **io.moderne.cryptography.FindSslContextDefault**: This includes anywhere where `SSLContext.setDefault` is called. 
* **org.openrewrite.config.CompositeRecipe**: A recipe that consists of a list of other recipes. 
* **org.openrewrite.gitlab.AddStages**: Add or Update the set of stages defined in `.gitlab-ci.yml`. 
* **org.openrewrite.java.migrate.jakarta.RemoveJakartaAnnotationDependency**: Counteract the `jakarta.annotation-api` added by `org.openrewrite.java.migrate.javax.AddCommonAnnotationsDependencies` for Spring Boot applications. 
* **org.openrewrite.staticanalysis.ReplaceStreamToListWithCollect**: Replace Java 16 `Stream.toList()` with Java 11 `Stream.collect(Collectors.toList())`. 
* **software.amazon.awssdk.v2migration.ConstructorToFluent**: A recipe that takes constructor arguments and moves them to the specified fluent setters on the object. 

## Changed Recipes

* [org.openrewrite.gradle.ChangeDependency](https://docs.openrewrite.org/recipes/gradle/changedependency) was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `changeManagedDependency: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.java.AddCommentToMethodInvocations](https://docs.openrewrite.org/recipes/java/addcommenttomethodinvocations) was changed:
  * Old Options:
    * `comment: { type: String, required: true }`
    * `isMultiline: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `comment: { type: String, required: true }`
    * `methodPattern: { type: String, required: true }`
* [org.openrewrite.java.dependencies.search.ModuleHasDependency](https://docs.openrewrite.org/recipes/java/dependencies/search/modulehasdependency) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `invertMarking: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `preferDirectUpgrade: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
* [org.openrewrite.maven.UpdateScmFromGitOrigin](https://docs.openrewrite.org/recipes/maven/updatescmfromgitorigin) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
* [org.openrewrite.yaml.CoalesceProperties](https://docs.openrewrite.org/recipes/yaml/coalesceproperties) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `applyTo: { type: List, required: true }`
    * `exclusions: { type: List, required: true }`