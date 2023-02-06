# Snapshot (2023-02-06)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.cleanup.InstanceOfPatternMatch](https://docs.openrewrite.org/reference/recipes/java/cleanup/instanceofpatternmatch): Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. 
* [org.openrewrite.java.cleanup.RemoveCallsToObjectFinalize](https://docs.openrewrite.org/reference/recipes/java/cleanup/removecallstoobjectfinalize): Removes calls to `Object.finalize()`. This method is called during garbage collection and calling it manually is misleading. 
* [org.openrewrite.java.spring.boot2.search.FindUpgradeRequirementsSpringBoot_2_5](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/search/findupgraderequirementsspringboot_2_5): Looks for a series of patterns that have not yet had auto-remediation recipes developed for.
* [org.openrewrite.java.spring.boot3.RemoveEnableBatchProcessing](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/removeenablebatchprocessing): Add or remove the `@EnableBatchProcessing` annotation from a Spring Boot application. 
* [org.openrewrite.java.spring.search.FindApiEndpoints](https://docs.openrewrite.org/reference/recipes/java/spring/search/findapiendpoints): Find all API endpoints that this application exposes. 

## Removed Recipes
* **org.openrewrite.java.spring.boot2.SpringBoot1To2Migration**: Migrate applications built on previous versions of Spring Boot to the latest Spring Boot 2.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes across Spring Boot versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, JUnit, etc) that are required as part of the migration to Spring Boot 2.7.
* **org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5**: Migrate applications to the latest Spring Boot 2.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.5. 
* **org.openrewrite.java.spring.boot3.SpringBoot2To3Migration**: Migrate applications built on previous versions of Spring Boot to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes across Spring Boot versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, JUnit, etc) that are required as part of the migration to Spring Boot 3.0.

## Changed Recipes
* [org.openrewrite.maven.RemoveRepository](https://docs.openrewrite.org/reference/recipes/maven/removerepository) was changed:
  * Old Options:
    * `id: { type: String, required: false }`
    * `layout: { type: String, required: false }`
    * `releasesChecksumPolicy: { type: String, required: false }`
    * `releasesEnabled: { type: Boolean, required: false }`
    * `releasesUpdatePolicy: { type: String, required: false }`
    * `repoName: { type: String, required: false }`
    * `snapshotsChecksumPolicy: { type: String, required: false }`
    * `snapshotsEnabled: { type: Boolean, required: false }`
    * `snapshotsUpdatePolicy: { type: String, required: false }`
    * `url: { type: String, required: true }`
  * New Options:
    * `id: { type: String, required: false }`
    * `url: { type: String, required: true }`