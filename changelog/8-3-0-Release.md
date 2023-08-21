# 8.3.0 release (2023-08-21)

## New Artifacts
* rewrite-liberty
* rewrite-micrometer

## New Recipes

* [org.openrewrite.hibernate.MigrateToHibernate62](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohibernate62): This recipe will apply changes commonly needed when migrating to Hibernate 6.2.x.
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.0](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohypersistenceutilshibernate6/0): This recipe will migrate any existing dependencies on `com.vladmihalcea:hibernate-types` to `io.hypersistence:hypersistence-utils-hibernate-60`.  This migration will include the adjustment from `com.vladmihalcea` to `io.hypersistence.utils` package name.
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.2](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohypersistenceutilshibernate6/2): This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-60` to `io.hypersistence:hypersistence-utils-hibernate-62`.
* [org.openrewrite.hibernate.TypeAnnotationParameter](https://docs.openrewrite.org/reference/recipes/hibernate/typeannotationparameter): Hibernate 6.x has 'type' parameter of type String replaced with 'value' of type class.
* [org.openrewrite.kotlin.format.AutoFormat](https://docs.openrewrite.org/reference/recipes/kotlin/format/autoformat): Format Kotlin code using a standard comprehensive set of Kotlin formatting recipes.
* [org.openrewrite.maven.search.FindMavenSettings](https://docs.openrewrite.org/reference/recipes/maven/search/findmavensettings): List the effective maven settings file for the current project.
* [org.openrewrite.java.liberty](https://docs.openrewrite.org/reference/recipes/java/liberty): Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty. 
* [org.openrewrite.java.liberty.ChangeMethodInvocation](https://docs.openrewrite.org/reference/recipes/java/liberty/changemethodinvocation): Rename a method invocation. 
* [org.openrewrite.java.liberty.ChangeStringLiteral](https://docs.openrewrite.org/reference/recipes/java/liberty/changestringliteral): Changes the value of a string literal. 
* [org.openrewrite.java.liberty.RemoveWas2LibertyNonPortableJndiLookup](https://docs.openrewrite.org/reference/recipes/java/liberty/removewas2libertynonportablejndilookup): Remove the use of invalid JNDI properties from Hashtable. 
* [org.openrewrite.java.liberty.ServerName](https://docs.openrewrite.org/reference/recipes/java/liberty/servername): The `getDisplayName()` is not available in Liberty. 
* [org.openrewrite.java.liberty.WebSphereUnavailableSSOCookieMethod](https://docs.openrewrite.org/reference/recipes/java/liberty/websphereunavailablessocookiemethod): Replace `WSSecurityHelper.revokeSSOCookies(request, response)` with `request.logout()`. 
* [org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod](https://docs.openrewrite.org/reference/recipes/java/liberty/websphereunavailablessotokenmethod): This method `LTPACookieFromSSOToken()` is deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. It is not available on Liberty. 
* [org.openrewrite.micrometer.UpgradeMicrometer](https://docs.openrewrite.org/reference/recipes/micrometer/upgrademicrometer): This recipe will apply changes commonly needed when migrating Micrometer. 
* [org.openrewrite.xml.liberty.AppDDNamespaceRule](https://docs.openrewrite.org/reference/recipes/xml/liberty/appddnamespacerule): Namespace values in application.xml must be consistent with the descriptor version. 
* [org.openrewrite.xml.liberty.ConnectorDDNamespaceRule](https://docs.openrewrite.org/reference/recipes/xml/liberty/connectorddnamespacerule): Namespace values in ra.xml must be consistent with the descriptor version. 
* [org.openrewrite.xml.liberty.EJBDDNamespaceRule](https://docs.openrewrite.org/reference/recipes/xml/liberty/ejbddnamespacerule): Namespace values in ejb-jar.xml must be consistent with the descriptor version. 
* [org.openrewrite.xml.liberty.PersistenceXmlLocationRule](https://docs.openrewrite.org/reference/recipes/xml/liberty/persistencexmllocationrule): This recipes moves persistence.xml files into the root META-INF directory in source folder. 
* [org.openrewrite.xml.liberty.WebDDNamespaceRule](https://docs.openrewrite.org/reference/recipes/xml/liberty/webddnamespacerule): Namespace values in web.xml must be consistent with the descriptor version. 

