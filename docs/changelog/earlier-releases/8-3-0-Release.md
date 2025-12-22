---
description: What's changed in OpenRewrite version 8.3.0.
---

# 8.3.0 release (2023-08-21)

## New Artifacts
* rewrite-liberty
* rewrite-micrometer

## New Recipes

* org.openrewrite.hibernate.MigrateToHibernate62: This recipe will apply changes commonly needed when migrating to Hibernate 6.2.x.
* org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.0: This recipe will migrate any existing dependencies on `com.vladmihalcea:hibernate-types` to `io.hypersistence:hypersistence-utils-hibernate-60`.  This migration will include the adjustment from `com.vladmihalcea` to `io.hypersistence.utils` package name.
* org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.2: This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-60` to `io.hypersistence:hypersistence-utils-hibernate-62`.
* org.openrewrite.hibernate.TypeAnnotationParameter: Hibernate 6.x has 'type' parameter of type String replaced with 'value' of type class.
* org.openrewrite.kotlin.format.AutoFormat: Format Kotlin code using a standard comprehensive set of Kotlin formatting recipes.
* org.openrewrite.maven.search.FindMavenSettings: List the effective maven settings file for the current project.
* org.openrewrite.java.liberty: Use this category of rules to identify code changes needed when migrating  from WebSphere Application Server traditional to Liberty. 
* org.openrewrite.java.liberty.ChangeMethodInvocation: Rename a method invocation. 
* org.openrewrite.java.liberty.ChangeStringLiteral: Changes the value of a string literal. 
* org.openrewrite.java.liberty.RemoveWas2LibertyNonPortableJndiLookup: Remove the use of invalid JNDI properties from Hashtable. 
* org.openrewrite.java.liberty.ServerName: The `getDisplayName()` is not available in Liberty. 
* org.openrewrite.java.liberty.WebSphereUnavailableSSOCookieMethod: Replace `WSSecurityHelper.revokeSSOCookies(request, response)` with `request.logout()`. 
* org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod: This method `LTPACookieFromSSOToken()` is deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. It is not available on Liberty. 
* org.openrewrite.micrometer.UpgradeMicrometer: This recipe will apply changes commonly needed when migrating Micrometer. 
* org.openrewrite.xml.liberty.AppDDNamespaceRule: Namespace values in application.xml must be consistent with the descriptor version. 
* org.openrewrite.xml.liberty.ConnectorDDNamespaceRule: Namespace values in ra.xml must be consistent with the descriptor version. 
* org.openrewrite.xml.liberty.EJBDDNamespaceRule: Namespace values in ejb-jar.xml must be consistent with the descriptor version. 
* org.openrewrite.xml.liberty.PersistenceXmlLocationRule: This recipes moves persistence.xml files into the root META-INF directory in source folder. 
* org.openrewrite.xml.liberty.WebDDNamespaceRule: Namespace values in web.xml must be consistent with the descriptor version. 

