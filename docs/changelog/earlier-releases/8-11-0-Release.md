# 8.11.0 release (2023-12-05)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Removed Artifacts
* rewrite-jhipster

## New Recipes

* [org.openrewrite.java.CreateEmptyJavaClass](../../recipes/java/createemptyjavaclass): Create a new, empty Java class. 
* [org.openrewrite.java.dependencies.RemoveExpiredSuppressions](../../recipes/java/dependencies/removeexpiredsuppressions): Remove expired vulnerability suppressions from `DependencyCheck` `suppression.xml` files. 
* [org.openrewrite.java.logging.ChangeLombokLogAnnotation](../../recipes/java/logging/changelomboklogannotation): Replace Lombok annotations such as `@CommonsLog` and `@Log4j` with the target logging framework annotation, or `@Sl4fj` if not provided. 
* [org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1](../../recipes/java/logging/slf4j/commonslogging1toslf4j1): Transforms usages of Apache Commons Logging 1.x to leveraging SLF4J 1.x directly. 
* [org.openrewrite.java.migrate.BeanDiscovery](../../recipes/java/migrate/beandiscovery): Alters beans with missing version attribute to include this attribute as well as the bean-discovery-mode="all" attribute to maintain an explicit bean archive. 
* [org.openrewrite.java.migrate.BeansXmlNamespace](../../recipes/java/migrate/beansxmlnamespace): Set the `schemaLocation` that corresponds to the `xmlns` set in `beans.xml` files. 
* [org.openrewrite.java.migrate.JREDoNotUseSunNetSslAPIs](../../recipes/java/migrate/jredonotusesunnetsslapis): Do not use APIs from `com.sun.net.ssl` packages. 
* [org.openrewrite.java.migrate.RemoveMethodInvocation](../../recipes/java/migrate/removemethodinvocation): Checks for a method patterns and removes the method call from the class. 
* [org.openrewrite.java.migrate.jakarta.ApplicationPathWildcardNoLongerAccepted](../../recipes/java/migrate/jakarta/applicationpathwildcardnolongeraccepted): Remove trailing `/*` from `jakarta.ws.rs.ApplicationPath` values. 
* [org.openrewrite.java.migrate.jakarta.FacesManagedBeansRemoved](../../recipes/java/migrate/jakarta/facesmanagedbeansremoved): This recipe substitutes Faces Managed Beans, which were deprecated in JavaServer Faces 2.3 and have been removed from Jakarta Faces 4.0. 
* [org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages](../../recipes/java/migrate/jakarta/updateapachewssecuritypackages): Java EE has been rebranded to Jakarta EE.  This recipe replaces Apache security packages to migrate to Apache `wss4j` 
* [org.openrewrite.java.migrate.javaee7](../../recipes/java/migrate/javaee7): These recipes help with the Migration to Java EE 7, flagging and updating deprecated methods. 
* [org.openrewrite.java.migrate.javaee7.OpenJPAPersistenceProvider](../../recipes/java/migrate/javaee7/openjpapersistenceprovider): When migrating  to EclipseLink, using OpenJPA providers in EclipseLink results in runtime errors. To resolve these errors,  the recipe removes the flagged OpenJPA provider from the persistence.xml. 
* [org.openrewrite.java.migrate.javaee8](../../recipes/java/migrate/javaee8): These recipes help with the Migration to Java EE 8, flagging and updating deprecated methods. 
* [org.openrewrite.java.migrate.javaee8.ApacheDefaultProvider](../../recipes/java/migrate/javaee8/apachedefaultprovider): This recipe flags any `org.apache.bval.jsr*` (bval 1.1) and `org.apache.bval.jsr303*` (bval 1.0) package references in validation.xml deployment descriptors.  Bean Validation 2.0 and later use the Hibernate Validator implementation instead of the  Apache BVal implementation which was used for Bean Validation 1.0 and 1.1 
* [org.openrewrite.java.migrate.javaee8.ServletIsRequestedSessionIdFromURL](../../recipes/java/migrate/javaee8/servletisrequestedsessionidfromurl): The  method `HttpServletRequestWrapper.isRequestedSessionIdFromUrl()` is deprecated in JavaEE8 and is replaced by `HttpServletRequestWrapper.isRequestedSessionIdFromURL()` 
* [org.openrewrite.java.migrate.lang.ThreadStopUnsupported](../../recipes/java/migrate/lang/threadstopunsupported): `Thread.stop()` always throws a `new UnsupportedOperationException` in Java 21+. This recipe makes that explicit, as the migration is more complicated.See https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/doc-files/threadPrimitiveDeprecation.html . 
* [org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes](../../recipes/java/migrate/net/urlconstructorstourirecipes): Refaster template recipes for `org.openrewrite.java.migrate.net.URLConstructorsToURI`. 
* [org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLFourArgumentConstructorRecipe](../../recipes/java/migrate/net/urlconstructorstourirecipes$urlfourargumentconstructorrecipe): Converts `new URL(String, String, int, String)` constructors to `new URI(...).toURL()`. 
* [org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLSingleArgumentConstructorRecipe](../../recipes/java/migrate/net/urlconstructorstourirecipes$urlsingleargumentconstructorrecipe): Converts `new URL(String)` constructors to `URI.create(String).toURL()`. 
* [org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLThreeArgumentConstructorRecipe](../../recipes/java/migrate/net/urlconstructorstourirecipes$urlthreeargumentconstructorrecipe): Converts `new URL(String, String, String)` constructors to `new URI(...).toURL()`. 
* [org.openrewrite.java.migrate.search.FindJavaVersion](../../recipes/java/migrate/search/findjavaversion): Finds Java versions in use. 
* [org.openrewrite.java.search.FindTypeMappings](../../recipes/java/search/findtypemappings): Find types mapped to J trees. 
* [org.openrewrite.java.security.FixCwe338](../../recipes/java/security/fixcwe338): Use a cryptographically strong pseudo-random number generator (PRNG). 
* [org.openrewrite.java.spring.cloud2022.DependencyUpgrades](../../recipes/java/spring/cloud2022/dependencyupgrades): Upgrade dependencies to Spring Cloud 2022 from prior 2021.x version. 
* [org.openrewrite.java.spring.cloud2023.DependencyUpgrades](../../recipes/java/spring/cloud2023/dependencyupgrades): Upgrade dependencies to Spring Cloud 2023 from prior 2022.x version. 
* [org.openrewrite.java.spring.cloud2023.UpgradeSpringCloud_2023](../../recipes/java/spring/cloud2023/upgradespringcloud_2023): Migrate applications to the latest Spring Cloud 2023 release. 
* [org.openrewrite.java.testing.archunit.ArchUnit0to1Migration](../../recipes/java/testing/archunit/archunit0to1migration): Upgrade ArchUnit from 0.x to 1.x. 
* [org.openrewrite.java.testing.testcontainers.ExplicitContainerImage](../../recipes/java/testing/testcontainers/explicitcontainerimage): Set the image to use for a container explicitly if unset, rather than relying on the default image for the container class. 
* [org.openrewrite.java.testing.testcontainers.ExplicitContainerImages](../../recipes/java/testing/testcontainers/explicitcontainerimages): Replace implicit default container images and versions with explicit versions. 
* [org.openrewrite.java.testing.testcontainers.GetHostMigration](../../recipes/java/testing/testcontainers/gethostmigration): Replace `org.testcontainers.containers.ContainerState.getContainerIpAddress()` with `getHost()`. 
* [org.openrewrite.java.testing.testcontainers.TestContainersBestPractices](../../recipes/java/testing/testcontainers/testcontainersbestpractices): Apply best practices to Testcontainers usage. 
* [org.openrewrite.launchdarkly.ChangeVariationDefault](../../recipes/launchdarkly/changevariationdefault): Change the default value for `Variation` invocations for feature key. 
* [org.openrewrite.launchdarkly.MigrateUserToContext](../../recipes/launchdarkly/migrateusertocontext): Migrate from `LDUser` and `LDUser.Builder` to `LDContext` and `ContextBuilder`. 
* [org.openrewrite.launchdarkly.RemoveBoolVariation](../../recipes/launchdarkly/removeboolvariation): Replace `boolVariation` invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.launchdarkly.UpgradeLaunchDarkly7](../../recipes/launchdarkly/upgradelaunchdarkly7): This recipe will apply changes commonly needed when migrating to LaunchDarkly 7.x. 
* [org.openrewrite.launchdarkly.search.FindFeatureFlag](../../recipes/launchdarkly/search/findfeatureflag): Find a LaunchDarkly feature flag. 
* [org.openrewrite.okhttp.UpgradeOkHttp4](../../recipes/okhttp/upgradeokhttp4): This recipe will apply changes commonly needed when migrating to OkHttp 4.x. 
* [org.openrewrite.okhttp.UpgradeOkHttp4Dependencies](../../recipes/okhttp/upgradeokhttp4dependencies): Migrate OkHttp dependencies to 4.x. 
* [org.openrewrite.properties.CreatePropertiesFile](../../recipes/properties/createpropertiesfile): Create a new Properties file. 
* [org.openrewrite.xml.CreateXmlFile](../../recipes/xml/createxmlfile): Create a new XML file. 
* [org.openrewrite.xml.RemoveEmptyXmlTags](../../recipes/xml/removeemptyxmltags): Removes XML tags that do not have attributes or children, including self closing tags. 
* [org.openrewrite.yaml.CreateYamlFile](../../recipes/yaml/createyamlfile): Create a new YAML file. 

## Removed Recipes

* **org.openrewrite.java.migrate.jakarta.ChangeJavaxAnnotationToJakarta**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`. 
* **org.openrewrite.java.migrate.jakarta.JavaxAnnotationPackageToJakarta**: Change type of classes in the `javax.annotation` package to jakarta. 
* **org.openrewrite.java.migrate.jakarta.RemoveMethods**: Checks for a method patterns and removes the method call from the class 
* **org.openrewrite.java.migrate.lang.RemoveThreadDestroyMethod**: Remove deprecated invocations of `Thread.destroy()` which have no alternatives needed. 
* **org.openrewrite.java.spring.cloud2022.MavenPomUpgrade**: Upgrade Maven POM to Spring Cloud 2022 from prior 2021.x version. 
* **org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies**: Migrate LaunchDarkly dependencies to 6.x. 

## Changed Recipes

* [org.openrewrite.java.dependencies.DependencyResolutionDiagnostic](../../recipes/java/dependencies/dependencyresolutiondiagnostic) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `artifactId: { type: String, required: false }`
    * `groupId: { type: String, required: false }`
    * `version: { type: String, required: false }`
* [org.openrewrite.kotlin.FindKotlinSources](../../recipes/kotlin/findkotlinsources) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `markCompilationUnits: { type: Boolean, required: false }`