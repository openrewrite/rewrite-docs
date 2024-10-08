# 8.9.6 release (2023-11-21)

## New Artifacts
* rewrite-launchdarkly

## New Recipes

* org.openrewrite.java.spring.boot3.EnableVirtualThreads: Set `spring.threads.virtual.enabled` to `true` in `application.properties` or `application.yml`. 
* org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_2: Migrate applications to the latest Spring Boot 3.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.1. 
* org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_2: Migrate applications to the latest Spring Security 6.2 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* org.openrewrite.launchdarkly.UpgradeLaunchDarkly6: This recipe will apply changes commonly needed when migrating to LaunchDarkly 6.x.
* org.openrewrite.launchdarkly.UpgradeLaunchDarkly6Dependencies: Migrate LaunchDarkly dependencies to 6.x. 
* org.openrewrite.java.ChangeAnnotationAttributeName: Some annotations accept arguments. This recipe renames an existing attribute. 


## Changed Recipes

* org.openrewrite.maven.search.ParentPomInsight was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `version: { type: String, required: false }`