# 7.34.0 Release (2022-12-9)

## New Recipes
* [org.openrewrite.cloudsuitability.FindJavaFx](../../../recipes/cloudsuitability/findjavafx): JavaFX is not cloud compatible and requires the JRE on the remote device. 
* [org.openrewrite.cloudsuitability.FindJks](../../../recipes/cloudsuitability/findjks): In a cloud environment, use a centralized keystore, such as Azure Key Vault or AWS Secrets Manager, to better secure sensitive information. 
* [org.openrewrite.cloudsuitability.FindJms](../../../recipes/cloudsuitability/findjms): Run embedded service broker as a JMS Provider. 
* [org.openrewrite.cloudsuitability.FindJni](../../../recipes/cloudsuitability/findjni): A few conditions have to be met to make JNI calls. 
* [org.openrewrite.java.migrate.maven.UseMavenCompilerPluginReleaseConfiguration](../../../recipes/java/migrate/maven/usemavencompilerpluginreleaseconfiguration): Replaces any explicit `source` or `target` configuration (if present) on the maven-compiler-plugin with `release`, and updates the `release` value if needed. 
* [org.openrewrite.java.spring.NoRepoAnnotationOnRepoInterface](../../../recipes/java/spring/norepoannotationonrepointerface): Removes superfluous `@Repository` annotation from Spring Data `Repository` sub-interfaces. 
* [org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0](../../../recipes/java/spring/boot2/migratespringboot_2_0): Migrate applications built on Spring Boot 1.5 to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0.
* [org.openrewrite.java.spring.boot2.MoveAutoConfigurationToImportsFile](../../../recipes/java/spring/boot2/moveautoconfigurationtoimportsfile): Use `org.springframework.boot.autoconfigure.AutoConfiguration.imports` instead of the deprecated entry `org.springframework.boot.autoconfigure.EnableAutoConfiguration` in `spring.factories` when defining auto-configuration classes. 
* [org.openrewrite.maven.RemovePluginDependency](../../../recipes/maven/removeplugindependency): Removes a dependency from the `<dependencies>` section of a plugin in the pom.xml. 

## Removed Recipes
* **org.openrewrite.cloudsuitability.FindJMS**: Run embedded service broker as a JMS Provider. 
* **org.openrewrite.cloudsuitability.FindJNI**: A few conditions have to be met to make JNI calls. 
* **org.openrewrite.cloudsuitability.FindJavaFX**: JavaFX is not cloud compatible and requires the JRE on the remote device. 
* **org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0**: Upgrade to Spring Boot 2.0 from prior 1.x version. 

## Changed Recipes
* [org.openrewrite.java.security.SecureTempFileCreation](../../../recipes/java/security/securetempfilecreation) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `target: { type: String, required: true }`
* [org.openrewrite.maven.ChangeParentPom](../../../recipes/maven/changeparentpom) was changed:
  * Old Options:
    * `allowVersionDowngrades: { type: boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `allowVersionDowngrades: { type: boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.RemoveRedundantDependencyVersions](../../../recipes/maven/removeredundantdependencyversions) was changed:
  * Old Options:
    * `artifactPattern: { type: String, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfVersionsMatch: { type: Boolean, required: false }`
  * New Options:
    * `artifactPattern: { type: String, required: false }`
    * `except: { type: List, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfVersionsMatch: { type: Boolean, required: false }`
* [org.openrewrite.maven.UpgradeDependencyVersion](../../../recipes/maven/upgradedependencyversion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.UpgradeParentVersion](../../../recipes/maven/upgradeparentversion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`