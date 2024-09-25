# 8.36.0 release (2024-09-24)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Artifacts
* rewrite-android

## New Recipes

* [org.openrewrite.android.ChangeAndroidSdkVersion](https://docs.openrewrite.org/recipes/android/changeandroidsdkversion): Change `compileSdk`, `compileSdkVersion`, `targetSdk` and `targetSdkVersion` in an Android Gradle build file to the argument version. 
* [org.openrewrite.android.UpgradeToAndroidSDK33](https://docs.openrewrite.org/recipes/android/upgradetoandroidsdk33): Recipes to upgrade to Android SDK version 33. 
* [org.openrewrite.android.UpgradeToAndroidSDK34](https://docs.openrewrite.org/recipes/android/upgradetoandroidsdk34): Recipes to upgrade to Android SDK version 34. 
* [org.openrewrite.android.UpgradeToAndroidSDK35](https://docs.openrewrite.org/recipes/android/upgradetoandroidsdk35): Recipes to upgrade to Android SDK version 35. 
* [org.openrewrite.featureflags.RemoveStringFlag](https://docs.openrewrite.org/recipes/featureflags/removestringflag): Replace method invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.launchdarkly.RemoveStringVariation](https://docs.openrewrite.org/recipes/featureflags/launchdarkly/removestringvariation): Replace `boolVariation` invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.gradle.MigrateToGradle5](https://docs.openrewrite.org/recipes/gradle/migratetogradle5): Migrate to version 5.x. See the Gradle upgrade guide from [version 4.x to 5.0](https://docs.gradle.org/current/userguide/upgrading_version_4.html) for more information. 
* [org.openrewrite.gradle.MigrateToGradle6](https://docs.openrewrite.org/recipes/gradle/migratetogradle6): Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information. 
* [org.openrewrite.gradle.MigrateToGradle7](https://docs.openrewrite.org/recipes/gradle/migratetogradle7): Migrate to version 7.x. See the Gradle upgrade guide from [version 6.x to 7.0](https://docs.gradle.org/current/userguide/upgrading_version_6.html) for more information. 
* [org.openrewrite.gradle.MigrateToGradle8](https://docs.openrewrite.org/recipes/gradle/migratetogradle8): Migrate to version 8.x. See the Gradle upgrade guide from [version 7.x to 8.0](https://docs.gradle.org/current/userguide/upgrading_version_7.html) and [version 8.x to latest](https://docs.gradle.org/current/userguide/upgrading_version_8.html) for more information. 
* [org.openrewrite.java.migrate.JREThrowableFinalMethods](https://docs.openrewrite.org/recipes/java/migrate/jrethrowablefinalmethods): The recipe renames  `getSuppressed()` and `addSuppressed(Throwable exception)` methods  in classes that extend `java.lang.Throwable` to `myGetSuppressed` and `myAddSuppressed(Throwable)`.These methods were added to Throwable in Java 7 and are marked final which cannot be overridden. 
* [org.openrewrite.java.migrate.ReferenceCloneMethod](https://docs.openrewrite.org/recipes/java/migrate/referenceclonemethod): The recipe replaces any clone calls that may resolve to a `java.lang.ref.Reference.clone()` or any of its known subclasses: `java.lang.ref.PhantomReference`, `java.lang.ref.SoftReference`, and `java.lang.ref.WeakReference` with a constructor call passing in the referent and reference queue as parameters. 
* [org.openrewrite.java.migrate.ReplaceAWTGetPeerMethod](https://docs.openrewrite.org/recipes/java/migrate/replaceawtgetpeermethod): This recipe replaces the use of `getPeer()` method in `java.awt.*` classes. `component.getPeer() != null` is replaced with `component.isDisplayable()` and `component.getPeer() instanceof LightweightPeer` is replaced with `component.isLightweight()`. 
* [org.openrewrite.java.migrate.search.FindInternalJavaxApis](https://docs.openrewrite.org/recipes/java/migrate/search/findinternaljavaxapis): The libraries that define these APIs will have to be migrated before any of the repositories that use them. 
* [org.openrewrite.java.migrate.search.PlanJavaMigration](https://docs.openrewrite.org/recipes/java/migrate/search/planjavamigration): Study the set of Java versions and associated tools in use across many repositories. 
* [org.openrewrite.java.spring.framework.MigrateResponseEntityExceptionHandlerHttpStatusToHttpStatusCode](https://docs.openrewrite.org/recipes/java/spring/framework/migrateresponseentityexceptionhandlerhttpstatustohttpstatuscode): With Spring 6 `HttpStatus` was replaced by `HttpStatusCode` in most method signatures in the `ResponseEntityExceptionHandler`. 
* [org.openrewrite.java.testing.mockito.MockitoWhenOnStaticToMockStatic](https://docs.openrewrite.org/recipes/java/testing/mockito/mockitowhenonstatictomockstatic): Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic as Mockito4 no longer allows this. 
* [org.openrewrite.staticanalysis.AddSerialAnnotationToSerialVersionUID](https://docs.openrewrite.org/recipes/staticanalysis/addserialannotationtoserialversionuid): Annotation any `serialVersionUID` fields with `@Serial` to indicate it's part of the serialization mechanism. 

## Removed Recipes

* **org.openrewrite.java.format.OperatorWrap**: Fixes line wrapping policies on operators. 
* **org.openrewrite.staticanalysis.AddSerialAnnotationToserialVersionUID**: Annotation any `serialVersionUID` fields with `@Serial` to indicate it's part of the serialization mechanism. 

## Changed Recipes

* [org.openrewrite.java.dependencies.DependencyInsight](https://docs.openrewrite.org/recipes/java/dependencies/dependencyinsight) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `version: { type: String, required: false }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: false }`
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
* [org.openrewrite.java.dependencies.UpgradeTransitiveDependencyVersion](https://docs.openrewrite.org/recipes/java/dependencies/upgradetransitivedependencyversion) was changed:
  * Old Options:
    * `addToRootPom: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `addToRootPom: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `because: { type: String, required: false }`
    * `classifier: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.staticanalysis.OperatorWrap](https://docs.openrewrite.org/recipes/staticanalysis/operatorwrap) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `wrapOption: { type: WrapOption, required: false }`