# 8.3.0 release (2023-08-21)

## New Recipes

* [org.openrewrite.hibernate.MigrateToHibernate62](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohibernate62): This recipe will apply changes commonly needed when migrating to Hibernate 6.2.x. 
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.0](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohypersistenceutilshibernate6/0): This recipe will migrate any existing dependencies on `com.vladmihalcea:hibernate-types` to `io.hypersistence:hypersistence-utils-hibernate-60`.  This migration will include the adjustment from `com.vladmihalcea` to `io.hypersistence.utils` package name. 
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.2](https://docs.openrewrite.org/reference/recipes/hibernate/migratetohypersistenceutilshibernate6/2): This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-60` to `io.hypersistence:hypersistence-utils-hibernate-62`. 
* [org.openrewrite.hibernate.TypeAnnotationParameter](https://docs.openrewrite.org/reference/recipes/hibernate/typeannotationparameter): Hibernate 6.x has 'type' parameter of type String replaced with 'value' of type class. 
* [org.openrewrite.kotlin.format.AutoFormat](https://docs.openrewrite.org/reference/recipes/kotlin/format/autoformat): Format Kotlin code using a standard comprehensive set of Kotlin formatting recipes. 
* [org.openrewrite.maven.search.FindMavenSettings](https://docs.openrewrite.org/reference/recipes/maven/search/findmavensettings): List the effective maven settings file for the current project. 

