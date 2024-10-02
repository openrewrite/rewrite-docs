# 7.36.0 release (2023-02-16)

## New Recipes
* [org.openrewrite.github.RemoveAllCronTriggers](../../../recipes/github/removeallcrontriggers): Removes all cron triggers from a workflow. 
* [org.openrewrite.github.ReplaceRunners](../../../recipes/github/replacerunners): Replaces the runners of a given job. 
* [org.openrewrite.github.SetupJavaUpgradeJavaVersion](../../../recipes/github/setupjavaupgradejavaversion): Update the Java version used by `actions/setup-java` if it is below the expected version number. 
* [org.openrewrite.gradle.UpgradeLiteralDependencyVersion](../../../recipes/gradle/upgradeliteraldependencyversion): A fixed literal version is a version that is not a variable or property or supplied indirectly by platform BOMs or similar means. For example, `com.google.guava:guava:29.0-jre`. 
* [org.openrewrite.gradle.plugins.RemoveBuildPlugin](../../../recipes/gradle/plugins/removebuildplugin): Remove plugin from `build.gradle(.kts)`. 
* [org.openrewrite.gradle.plugins.RemoveSettingsPlugin](../../../recipes/gradle/plugins/removesettingsplugin): Remove plugin from `settings.gradle(.kts)`. 
* [org.openrewrite.java.cleanup.InstanceOfPatternMatch](../../../recipes/java/cleanup/instanceofpatternmatch): Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. 
* [org.openrewrite.java.cleanup.RemoveCallsToObjectFinalize](../../../recipes/java/cleanup/removecallstoobjectfinalize): Removes calls to `Object.finalize()`. This method is called during garbage collection and calling it manually is misleading. 
* [org.openrewrite.java.cleanup.RemoveInstanceOfPatternMatch](../../../recipes/java/cleanup/removeinstanceofpatternmatch): Adds an explicit variable declaration at the beginning of `if` statement instead of `instanceof` pattern matching. 
* [org.openrewrite.java.cleanup.ReplaceApacheCommonsLang3ValidateNotNullWithObjectsRequireNonNull](../../../recipes/java/cleanup/replaceapachecommonslang3validatenotnullwithobjectsrequirenonnull): Replace `org.apache.commons.lang3.Validate.notNull(..)` with `Objects.requireNonNull(..)`. 
* [org.openrewrite.java.cleanup.ReplaceRedundantFormatWithPrintf](../../../recipes/java/cleanup/replaceredundantformatwithprintf): Replaces `PrintStream.print(String.format(format, ...args))` with `PrintStream.printf(format, ...args)` (and for `println`, appends a newline to the format string). 
* [org.openrewrite.java.cleanup.ReplaceTextBlockWithString](../../../recipes/java/cleanup/replacetextblockwithstring): Replace text block with a regular multi-line string. 
* [org.openrewrite.java.cleanup.SimplifyDurationCreationUnits](../../../recipes/java/cleanup/simplifydurationcreationunits): Simplifies `java.time.Duration` units to be more human-readable. 
* [org.openrewrite.java.cleanup.UseObjectNotifyAll](../../../recipes/java/cleanup/useobjectnotifyall): `Object.notifyAll()` and `Object.notify()` both wake up sleeping threads, but `Object.notify()` only rouses one while `Object.notifyAll()` rouses all of them. Since `Object.notify()` might not wake up the right thread, `Object.notifyAll()` should be used instead. See [this](https://wiki.sei.cmu.edu/confluence/display/java/THI02-J.+Notify+all+waiting+threads+rather+than+a+single+thread) for more information. 
* [org.openrewrite.java.cleanup.UseSystemLineSeparator](../../../recipes/java/cleanup/usesystemlineseparator): Replaces calls to `System.getProperty("line.separator")` with `System.lineSeparator()`. 
* [org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly](../../../recipes/java/spring/batch/implementchunklistenerdirectly): As of 5.0 `ChunkListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.batch.ImplementJobExecutionListenerDirectly](../../../recipes/java/spring/batch/implementjobexecutionlistenerdirectly): As of 5.0 `JobExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.batch.ImplementRepeatListenerDirectly](../../../recipes/java/spring/batch/implementrepeatlistenerdirectly): As of 5.0 `RepeatListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.batch.ImplementSkipListenerSupportDirectly](../../../recipes/java/spring/batch/implementskiplistenersupportdirectly): As of 5.0 `SkipListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly](../../../recipes/java/spring/batch/implementstepexecutionlistenerdirectly): As of 5.0 `StepExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.batch.MigrateItemWriterWrite](../../../recipes/java/spring/batch/migrateitemwriterwrite): `JobBuilderFactory` was deprecated in Springbatch 5.x : replaced by `JobBuilder`. 
* [org.openrewrite.java.spring.batch.MigrateJobBuilderFactory](../../../recipes/java/spring/batch/migratejobbuilderfactory): `JobBuilderFactory` was deprecated in spring-batch 5.x. It is replaced by `JobBuilder`. 
* [org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface](../../../recipes/java/spring/batch/replacesupportclasswithitsinterface): As of Spring-Batch 5.0 Listeners has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.boot2.search.FindUpgradeRequirementsSpringBoot_2_5](../../../recipes/java/spring/boot2/search/findupgraderequirementsspringboot_2_5): Looks for a series of patterns that have not yet had auto-remediation recipes developed for.
* [org.openrewrite.java.spring.boot3.RemoveEnableBatchProcessing](../../../recipes/java/spring/boot3/removeenablebatchprocessing): Add or remove the `@EnableBatchProcessing` annotation from a Spring Boot application. 
* [org.openrewrite.java.spring.boot3.SpringBatch4To5Migration](../../../recipes/java/spring/boot3/springbatch4to5migration): Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release. 
* [org.openrewrite.java.spring.search.FindApiEndpoints](../../../recipes/java/spring/search/findapiendpoints): Find all API endpoints that this application exposes. 
* [org.openrewrite.java.spring.search.FindSpringComponents](../../../recipes/java/spring/search/findspringcomponents): Find Spring components, including controllers, services, repositories, return types of `@Bean` annotated methods, etc. 
* [org.openrewrite.java.testing.assertj.UseExplicitSize](../../../recipes/java/testing/assertj/useexplicitsize): Convert `assertThat(collection.size()).isEqualTo(Y)` with AssertJ's `assertThat(collection).hasSize()`. 
* [org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito](../../../recipes/java/testing/mockito/powermockitomockstatictomockito): Replaces `PowerMockito.mockStatic()` by `Mockito.mockStatic()`. Removes the `@PrepareForTest` annotation. 
* [org.openrewrite.java.testing.mockito.ReplacePowerMockito](../../../recipes/java/testing/mockito/replacepowermockito): Replace PowerMock with raw Mockito. 
* [org.openrewrite.search.FindLanguageComposition](../../../recipes/search/findlanguagecomposition): Produce a table of files and their language composition. 

## Removed Recipes
* **org.openrewrite.java.spring.boot2.SpringBoot1To2Migration**: Migrate applications built on previous versions of Spring Boot to the latest Spring Boot 2.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes across Spring Boot versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, JUnit, etc) that are required as part of the migration to Spring Boot 2.7.
* **org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5**: Migrate applications to the latest Spring Boot 2.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.5.
* **org.openrewrite.java.spring.boot3.SpringBoot2To3Migration**: Migrate applications built on previous versions of Spring Boot to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes across Spring Boot versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, JUnit, etc) that are required as part of the migration to Spring Boot 3.0.

## Changed Recipes
* [org.openrewrite.gradle.AddGradleWrapper](../../../recipes/gradle/addgradlewrapper) was changed:
  * Old Options:
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: true }`
    * `version: { type: String, required: false }`
* [org.openrewrite.gradle.search.FindGradleProject](../../../recipes/gradle/search/findgradleproject) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `searchCriteria: { type: SearchCriteria, required: true }`
* [org.openrewrite.java.security.SecureTempFileCreation](../../../recipes/java/security/securetempfilecreation) was changed:
  * Old Options:
    * `target: { type: String, required: true }`
  * New Options:
    * `target: { type: String, required: false }`
* [org.openrewrite.maven.RemoveExclusion](../../../recipes/maven/removeexclusion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `exclusionArtifactId: { type: String, required: true }`
    * `exclusionGroupId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `exclusionArtifactId: { type: String, required: true }`
    * `exclusionGroupId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `onlyIneffective: { type: Boolean, required: false }`
* [org.openrewrite.maven.RemoveRepository](../../../recipes/maven/removerepository) was changed:
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