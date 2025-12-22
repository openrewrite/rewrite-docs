---
description: What's changed in OpenRewrite version 8.47.1.
---

# 8.47.1 release (2025-02-21)

_Total recipe count: 3069_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.moderne.hibernate.MigrateToHibernate66](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate66): This recipe will apply changes commonly needed when migrating to Hibernate 6.5.x. 
* [io.moderne.hibernate.search.FindJPQLDefinitions](https://docs.openrewrite.org/recipes/hibernate/search/findjpqldefinitions): Find Java Persistence Query Language definitions in the codebase. 
* [io.moderne.hibernate.update66.FixConflictingClassTypeAnnotations](https://docs.openrewrite.org/recipes/hibernate/update66/fixconflictingclasstypeannotations): Since Hibernate 6.6 a mapped class can have *either* `@MappedSuperclass` or `@Embeddable`, or `@Entity`. This recipe removes `@Entity` from classes annotated with `@MappedSuperclass` or `@Embeddable`.For the moment die combination of `@MappedSuperclass` or `@Embeddable` is advised to migrate to [Single Table Inheritance](https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance-single-table)but still accepted and therefore stays. 
* [io.moderne.hibernate.update66.RemoveTableFromInheritedEntity](https://docs.openrewrite.org/recipes/hibernate/update66/removetablefrominheritedentity): For Single Table Inherited Entities Hibernate ignores the `@Table` annotation on child entities. From Version 6.6 it is considered an error. 
* [io.moderne.java.spring.boot3.AddValidToConfigurationPropertiesFields](https://docs.openrewrite.org/recipes/java/spring/boot3/addvalidtoconfigurationpropertiesfields): In Spring Boot 3.4, validation of `@ConfigurationProperties` classes annotated with `@Validated` now follows the Bean Validation specification, only cascading to nested properties if the corresponding field is annotated with `@Valid`. The recipe will add a `@Valid` annotation to each field which has a type that has a field which is annotated with a `jakarta.validation.constraints.*` annotation. 
* [io.moderne.java.spring.boot3.CommentDeprecations](https://docs.openrewrite.org/recipes/java/spring/boot3/commentdeprecations): Spring Boot 3.4 deprecates methods that are not commonly used or need manual interaction. 
* [io.moderne.java.spring.boot3.CommentOnMockAndSpyBeansInConfigSpring34](https://docs.openrewrite.org/recipes/java/spring/boot3/commentonmockandspybeansinconfigspring34): As stated in [Spring Docs](https://docs.spring.io/spring-framework/reference/testing/annotations/integration-spring/annotation-mockitobean.html) `@MockitoSpyBean` and `@MockitoBean` will only work in tests, explicitly not in `@Configuration` annotated classes. 
* [io.moderne.java.spring.boot3.ConditionalOnAvailableEndpointMigrationSpring34](https://docs.openrewrite.org/recipes/java/spring/boot3/conditionalonavailableendpointmigrationspring34): Migrate `@ConditionalOnAvailableEndpoint(EndpointExposure.CLOUD_FOUNDRY)` to `@ConditionalOnAvailableEndpoint(EndpointExposure.WEB)` for Spring Boot 3.4. 
* [io.moderne.java.spring.boot3.MigrateEndpointAccessValueSpring34](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateendpointaccessvaluespring34): Migrate manage endpoint access value from `false` to `none` and `true` to `read-only`. 
* [io.moderne.java.spring.boot3.MigrateEndpointAnnotationAccessValueSpring34](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateendpointannotationaccessvaluespring34): Since Spring Boot 3.4 the `@Endpoint` access configuration values are no longer `true|false` but `none|read-only|unrestricted` 
* [io.moderne.java.spring.boot3.RemoveReplaceNoneFromAutoConfigureTestDatabase](https://docs.openrewrite.org/recipes/java/spring/boot3/removereplacenonefromautoconfiguretestdatabase): `Replace.NONE` is the default value for `@AutoConfigureTestDatabase` since Spring Boot 3.4. 
* [io.moderne.java.spring.boot3.SpringBoot3BestPractices](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot3bestpractices): Applies best practices to Spring Boot 3.4+ applications. 
* [io.moderne.java.spring.boot3.SpringBootManagementEndpointProperties_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootmanagementendpointproperties_3_4): Migrate the settings for Management Endpoint Security from `true`|`false` to `read-only`|`none`. 
* [io.moderne.java.spring.boot3.SpringBootProperties_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_4): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.boot3.UpgradeGradle7Spring34](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradegradle7spring34): Spring Boot 3.4 requires Gradle 7.6.4. 
* [io.moderne.java.spring.boot3.UpgradeGradle8Spring34](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradegradle8spring34): Spring Boot 3.4 requires Gradle 8.4+. 
* [io.moderne.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_3_4): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.4. 
* [io.moderne.java.spring.boot3.UpgradeSpringBoot_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_4-moderne-edition): Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.4. 
* [io.moderne.java.spring.cloud2024.DependencyUpgrades](https://docs.openrewrite.org/recipes/java/spring/cloud2024/dependencyupgrades): Upgrade dependencies to Spring Cloud 2024 from prior 2023.x version. 
* [io.moderne.java.spring.cloud2024.UpgradeSpringCloud_2024](https://docs.openrewrite.org/recipes/java/spring/cloud2024/upgradespringcloud_2024): Migrate applications to the latest Spring Cloud 2024 (Leyton) release. 
* [io.moderne.java.spring.framework.UpgradeSpringFramework_6_2](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_6_2): Migrate applications to the latest Spring Framework 6.2 release. 
* [io.moderne.java.spring.security6.UpgradeSpringSecurity_6_4](https://docs.openrewrite.org/recipes/java/spring/security6/upgradespringsecurity_6_4): Migrate applications to the latest Spring Security 6.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.apache.camel.upgrade.JavaVersion17](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/javaversion17): Change maven.compiler.source and maven.compiler.target values to 17. 
* [org.apache.camel.upgrade.SetupJavaUpgradeJavaVersion](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/setupjavaupgradejavaversion): Update the Java version used by `actions/setup-java` if it is below the expected version number. 
* [org.apache.camel.upgrade.UpgradeJavaVersion](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/upgradejavaversion): Upgrade build plugin configuration to use the specified Java version. This recipe changes `java.toolchain.languageVersion` in `build.gradle(.kts)` of gradle projects, or maven-compiler-plugin target version and related settings. Will not downgrade if the version is newer than the specified version. 
* [org.apache.camel.upgrade.UpgradeToJava17](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/upgradetojava17): This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17. 
* [org.apache.camel.upgrade.camel410.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410/camelmigrationrecipe): Migrates `camel 4.9` application to `camel 4.10`. 
* [org.apache.camel.upgrade.camel410.XmlDsl410Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410/xmldsl410recipe): Apache Camel XML DSL migration from version 4.9 o 4.10. 
* [org.apache.camel.upgrade.camel410.camelAzureFiles](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410/camelazurefiles): Renamed constants in camel-azure-files. 
* [org.apache.camel.upgrade.camel410.camelSmb](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410/camelsmb): Renamed constants in camel-smb. 
* [org.openrewrite.gradle.search.FindJVMTestSuites](https://docs.openrewrite.org/recipes/gradle/search/findjvmtestsuites): Find Gradle JVMTestSuite plugin configurations and produce a data table. 
* [org.openrewrite.java.migrate.jakarta.MigrationToJakarta10Apis](https://docs.openrewrite.org/recipes/java/migrate/jakarta/migrationtojakarta10apis): Jakarta EE 10 updates some apis compared to Jakarta EE 9. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaFacesApi4](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartafacesapi4): Update Jakarta EE Java Faces Dependencies to 4.0.x. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaXmlWsEE10](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartaxmlwsee10): Update Jakarta EE XML Web Services Dependencies for EE 10. 
* [org.openrewrite.java.security.secrets.FindFacebookSecrets](https://docs.openrewrite.org/recipes/java/security/secrets/findfacebooksecrets): Locates Facebook secrets stored in plain text in code. 
* [org.openrewrite.java.spring.boot2.MaybeAddSpringBootStarterActuator](https://docs.openrewrite.org/recipes/java/spring/boot2/maybeaddspringbootstarteractuator): Replace deprecated `micrometer-spring-legacy` with `spring-boot-starter-actuator` 
* [org.openrewrite.java.spring.boot3.SpringBoot3BestPracticesOnly](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot3bestpracticesonly): Applies best practices to Spring Boot 3 applications, without chaining in upgrades to Spring Boot. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_0): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.0. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_1](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_1): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.1. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_2](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_2): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.2. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_3](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_3): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.3. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_4](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_4): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.4. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_5](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_5): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.5. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_6](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_6): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.6. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_2_7](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_2_7): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 2.7. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_0](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_3_0): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.0. 
* [org.openrewrite.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_2](https://docs.openrewrite.org/recipes/java/spring/boot3/upgrademybatistospringboot_3_2): Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.2. 
* [org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_3](https://docs.openrewrite.org/recipes/java/spring/security6/upgradespringsecurity_6_3): Migrate applications to the latest Spring Security 6.3 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 

## Removed Recipes

* **io.moderne.recipe.hibernate.MigrateToHibernate66**: This recipe will apply changes commonly needed when migrating to Hibernate 6.5.x. 
* **io.moderne.recipe.hibernate.search.FindJPQLDefinitions**: Find Java Persistence Query Language definitions in the codebase. 
* **io.moderne.recipe.hibernate.update66.FixConflictingClassTypeAnnotations**: Since Hibernate 6.6 a mapped class can have *either* `@MappedSuperclass` or `@Embeddable`, or `@Entity`. This recipe removes `@Entity` from classes annotated with `@MappedSuperclass` or `@Embeddable`.For the moment die combination of `@MappedSuperclass` or `@Embeddable` is advised to migrate to [Single Table Inheritance](https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance-single-table)but still accepted and therefore stays. 
* **io.moderne.recipe.hibernate.update66.RemoveTableFromInheritedEntity**: For Single Table Inherited Entities Hibernate ignores the `@Table` annotation on child entities. From Version 6.6 it is considered an error. 
* **io.moderne.recipe.spring.boot3.AddValidToConfigurationPropertiesFields**: In Spring Boot 3.4, validation of `@ConfigurationProperties` classes annotated with `@Validated` now follows the Bean Validation specification, only cascading to nested properties if the corresponding field is annotated with `@Valid`. The recipe will add a `@Valid` annotation to each field which has a type that has a field which is annotated with a `jakarta.validation.constraints.*` annotation. 
* **io.moderne.recipe.spring.boot3.CommentDeprecations**: Spring Boot 3.4 deprecates methods that are not commonly used or need manual interaction. 
* **io.moderne.recipe.spring.boot3.CommentOnMockAndSpyBeansInConfigSpring34**: As stated in [Spring Docs](https://docs.spring.io/spring-framework/reference/testing/annotations/integration-spring/annotation-mockitobean.html) `@MockitoSpyBean` and `@MockitoBean` will only work in tests, explicitly not in `@Configuration` annotated classes. 
* **io.moderne.recipe.spring.boot3.ConditionalOnAvailableEndpointMigrationSpring34**: Migrate `@ConditionalOnAvailableEndpoint(EndpointExposure.CLOUD_FOUNDRY)` to `@ConditionalOnAvailableEndpoint(EndpointExposure.WEB)` for Spring Boot 3.4. 
* **io.moderne.recipe.spring.boot3.MigrateEndpointAccessValueSpring34**: Migrate manage endpoint access value from `false` to `none` and `true` to `read-only`. 
* **io.moderne.recipe.spring.boot3.MigrateEndpointAnnotationAccessValueSpring34**: Since Spring Boot 3.4 the `@Endpoint` access configuration values are no longer `true|false` but `none|read-only|unrestricted` 
* **io.moderne.recipe.spring.boot3.RemoveReplaceNoneFromAutoConfigureTestDatabase**: `Replace.NONE` is the default value for `@AutoConfigureTestDatabase` since Spring Boot 3.4. 
* **io.moderne.recipe.spring.boot3.SpringBoot3BestPractices**: Applies best practices to Spring Boot 3.4+ applications. 
* **io.moderne.recipe.spring.boot3.SpringBootManagementEndpointProperties_3_4**: Migrate the settings for Management Endpoint Security from `true`|`false` to `read-only`|`none`. 
* **io.moderne.recipe.spring.boot3.SpringBootProperties_3_4**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.recipe.spring.boot3.UpgradeGradle7Spring34**: Spring Boot 3.4 requires Gradle 7.6.4. 
* **io.moderne.recipe.spring.boot3.UpgradeGradle8Spring34**: Spring Boot 3.4 requires Gradle 8.4+. 
* **io.moderne.recipe.spring.boot3.UpgradeSpringBoot_3_4**: Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.4. 
* **io.moderne.recipe.spring.cloud2024.DependencyUpgrades**: Upgrade dependencies to Spring Cloud 2024 from prior 2023.x version. 
* **io.moderne.recipe.spring.cloud2024.UpgradeSpringCloud_2024**: Migrate applications to the latest Spring Cloud 2024 (Leyton) release. 
* **io.moderne.recipe.spring.framework.UpgradeSpringFramework_6_2**: Migrate applications to the latest Spring Framework 6.2 release. 

## Changed Recipes

* [org.openrewrite.gradle.search.FindPlugins](https://docs.openrewrite.org/recipes/gradle/search/findplugins) was changed:
  * Old Options:
    * `pluginId: { type: String, required: true }`
  * New Options:
    * `pluginClass: { type: String, required: false }`
    * `pluginId: { type: String, required: true }`
* [org.openrewrite.yaml.MergeYaml](https://docs.openrewrite.org/recipes/yaml/mergeyaml) was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `insertBefore: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `insertMode: { type: InsertMode, required: false }`
    * `insertProperty: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`