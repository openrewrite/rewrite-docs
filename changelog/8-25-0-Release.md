# 8.25.0 release (2024-05-08)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Artifacts
* rewrite-jackson

## New Recipes

* [org.openrewrite.github.PreferSecretsInheritWorkflow](https://docs.openrewrite.org/recipes/github/prefersecretsinheritworkflow): Pass all secrets to a reusable workflow using `secrets: inherit`. See [Simplify using secrets with reusable workflows](https://github.blog/changelog/2022-05-03-github-actions-simplify-using-secrets-with-reusable-workflows/) for details. 
* [org.openrewrite.java.jackson.CodehausToFasterXML](https://docs.openrewrite.org/recipes/java/jackson/codehaustofasterxml): In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML. 
* [org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods](https://docs.openrewrite.org/recipes/java/liberty/websphereunavailablessomethods): This recipe replaces `LTPACookieFromSSOToken()` with  `getSSOCookieFromSSOToken`  and `revokeSSOCookies` with `logout`. The two methods are  deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. They are not available on Liberty. 
* [org.openrewrite.java.migrate.jacoco.UpgradeJaCoCo](https://docs.openrewrite.org/recipes/java/migrate/jacoco/upgradejacoco): This recipe will upgrade JaCoCo to the latest patch version, which traditionally advertises full backwards compatibility for older Java versions. 
* [org.openrewrite.java.migrate.javax.AddTransientAnnotationToCollections](https://docs.openrewrite.org/recipes/java/migrate/javax/addtransientannotationtocollections): In OpenJPA, attributes that inherit from the `java.util.Collection<E>` interface are not a default persistent type, so these attributes are not persisted unless they are annotated. EclipseLink has a different default behavior and attempts to persist these attributes to the database. To keep the OpenJPA behavior of ignoring unannotated collection attributes, add the `javax.persistence.Transient` annotation to these attributes in EclipseLink. 
* [org.openrewrite.java.migrate.javax.AddTransientAnnotationToEntity](https://docs.openrewrite.org/recipes/java/migrate/javax/addtransientannotationtoentity): In OpenJPA, attributes that are themselves entity classes are not persisted by default. EclipseLink has a different default behavior and tries to persist these attributes to the database. To keep the OpenJPA behavior of ignoring unannotated entity attributes, add the `javax.persistence.Transient` annotation to these attributes in EclipseLink. 
* [org.openrewrite.java.migrate.javax.AddTransientAnnotationToPrivateAccessor](https://docs.openrewrite.org/recipes/java/migrate/javax/addtransientannotationtoprivateaccessor): According to the JPA 2.1 specification, when property access is used, the property accessor methods must be public or protected. OpenJPA ignores any private accessor methods, whereas EclipseLink persists those attributes. To ignore private accessor methods in EclipseLink, the methods must have a `@Transient` annotation. 
* [org.openrewrite.java.migrate.javax.RemoveTemporalAnnotation](https://docs.openrewrite.org/recipes/java/migrate/javax/removetemporalannotation): OpenJPA persists the fields of attributes of type `java.sql.Date`, `java.sql.Time`, or `java.sql.Timestamp` that have a `javax.persistence.Temporal` annotation, whereas EclipseLink throws an exception. Remove the `@Temporal` annotation so the behavior in EclipseLink will match the behavior in OpenJPA. 
* [org.openrewrite.java.spring.boot3.AdditionalSpringBootProperties_3_0](https://docs.openrewrite.org/recipes/java/spring/boot3/additionalspringbootproperties_3_0): Rename `management.metrics.export.atlas.aggrConfig` to `management.atlas.metrics.export.aggrConfig`. 
* [org.openrewrite.java.spring.framework.MigrateSpringAssert](https://docs.openrewrite.org/recipes/java/spring/framework/migratespringassert): Assert methods without a message argument have been removed in Spring Framework 6.0. 
* [org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_0](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_6_0): Migrate applications to the latest Spring Framework 6.0 release. 

## Removed Recipes

* **org.openrewrite.java.dependencies.ChangeDependencyGroupIdAndArtifactId**: Change a Gradle or Maven dependency coordinate. Either the `newGroupId` or `newArtifactId` must differ from the previous value. 
* **org.openrewrite.java.liberty.WebSphereUnavailableSSOTokenMethod**: This method `LTPACookieFromSSOToken()` is deprecated in traditional WebSphere Application  Server Version 8.5 and might be removed in a future release. It is not available on Liberty. 
* **org.openrewrite.java.migrate.JavaVersion11**: Change maven.compiler.source and maven.compiler.target values to 11. 
* **org.openrewrite.java.migrate.JavaVersion17**: Change maven.compiler.source and maven.compiler.target values to 17. 
* **org.openrewrite.java.migrate.JavaVersion21**: Change maven.compiler.source and maven.compiler.target values to 21. 
* **org.openrewrite.java.migrate.jacoco.UpgradeJaCoCoMavenPluginVersion**: This recipe will upgrade the JaCoCo Maven plugin to a more recent version compatible with Java 11. 

## Changed Recipes

* [org.openrewrite.gradle.plugins.AddBuildPlugin](https://docs.openrewrite.org/recipes/gradle/plugins/addbuildplugin) was changed:
  * Old Options:
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.gradle.plugins.AddSettingsPlugin](https://docs.openrewrite.org/recipes/gradle/plugins/addsettingsplugin) was changed:
  * Old Options:
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.java.dependencies.ChangeDependency](https://docs.openrewrite.org/recipes/java/dependencies/changedependency) was changed:
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
* [org.openrewrite.yaml.CreateYamlFile](https://docs.openrewrite.org/recipes/yaml/createyamlfile) was changed:
  * Old Options:
    * `fileContents: { type: String, required: false }`
    * `overwriteExisting: { type: Boolean, required: false }`
    * `relativeFileName: { type: String, required: true }`
  * New Options:
    * `fileContents: { type: String, required: false }`
    * `fileContentsUrl: { type: String, required: false }`
    * `overwriteExisting: { type: Boolean, required: false }`
    * `relativeFileName: { type: String, required: true }`