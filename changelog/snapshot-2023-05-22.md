# Snapshot (2023-05-22)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThresholdToSetInitThreshold](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/migratecountermonitorsetthresholdtosetinitthreshold): Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshold` in JMX 1.2 or higher. 
* [org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/migratehibernateconstraintstojavax): Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher. 
* [org.openrewrite.java.spring.security5.RenameNimbusdsJsonObjectPackageName](https://docs.openrewrite.org/reference/recipes/java/spring/security5/renamenimbusdsjsonobjectpackagename): Rename the package name from `com.nimbusds.jose.shaded.json.JSONObject` to `net.minidev.json.JSONObject`. 

## Removed Recipes
* **org.openrewrite.java.migrate.javax.MigrateCounterMonitorSetThreshholdToSetInitThreshold**: Use `javax.management.monitor.CounterMonitor#setInitThreshold` instead of the deprecated `javax.management.monitor.CounterMonitor#setThreshhold` in JMX 1.2 or higher. 
* **org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax**: Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher. 

