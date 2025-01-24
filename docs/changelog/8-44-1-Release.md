# 8.44.1 release (2025-01-24)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Removed Artifacts
* rewrite-recommendations

## New Recipes

* [org.openrewrite.hcl.ReplaceLegacyAttributeIndexSyntax](https://docs.openrewrite.org/recipes/hcl/replacelegacyattributeindexsyntax): Replace legacy attribute index syntax (`.0`) with the new syntax (`[0]`). 
* [org.openrewrite.java.ChangeMethodInvocationReturnType](https://docs.openrewrite.org/recipes/java/changemethodinvocationreturntype): Changes the return type of a method invocation. 
* [org.openrewrite.java.ReplaceStringLiteralValue](https://docs.openrewrite.org/recipes/java/replacestringliteralvalue): Replace the value of a complete `String` literal. 
* [org.openrewrite.java.migrate.lombok.LombokBestPractices](https://docs.openrewrite.org/recipes/java/migrate/lombok/lombokbestpractices): Applies all recipes that enforce best practices for using Lombok. 
* [org.openrewrite.java.spring.boot3.ReplaceMockBeanAndSpyBean](https://docs.openrewrite.org/recipes/java/spring/boot3/replacemockbeanandspybean): Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`. 
* [org.openrewrite.java.spring.boot3.ReplaceRestTemplateBuilderMethods](https://docs.openrewrite.org/recipes/java/spring/boot3/replaceresttemplatebuildermethods): Replaces `setConnectTimeout`, `setReadTimeout`, and `setSslBundle` method invocations with `connectTimeout`, `readTimeout`, and `sslBundle` respectively. 
* [org.openrewrite.json.AddKeyValue](https://docs.openrewrite.org/recipes/json/addkeyvalue): Adds a `value` at the specified `keyPath` with the specified `key`, if the key doesn't already exist. 
* [org.openrewrite.json.format.Indents](https://docs.openrewrite.org/recipes/json/format/indents): Format tabs and indents in JSON. 
* [org.openrewrite.maven.UpdateMavenProjectPropertyJavaVersion](https://docs.openrewrite.org/recipes/maven/updatemavenprojectpropertyjavaversion): The Java version is determined by several project properties, including:<br /><br /> * `java.version`<br /> * `jdk.version`<br /> * `javaVersion`<br /> * `jdkVersion`<br /> * `maven.compiler.source`<br /> * `maven.compiler.target`<br /> * `maven.compiler.release`<br /> * `release.version`<br /><br />If none of these properties are in use and the maven compiler plugin is not otherwise configured, adds the `maven.compiler.release` property. 
* [org.openrewrite.maven.UseMavenCompilerPluginReleaseConfiguration](https://docs.openrewrite.org/recipes/maven/usemavencompilerpluginreleaseconfiguration): Replaces any explicit `source` or `target` configuration (if present) on the `maven-compiler-plugin` with `release`, and updates the `release` value if needed. Will not downgrade the Java version if the current version is higher. 
* [org.openrewrite.staticanalysis.AbstractClassPublicConstructor](https://docs.openrewrite.org/recipes/staticanalysis/abstractclasspublicconstructor): Constructors of `abstract` classes can only be called in constructors of their subclasses. Therefore the visibility of `public` constructors are reduced to `protected`. 
* [software.amazon.awssdk.v2migration.SdkBytesToByteBuffer](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/sdkbytestobytebuffer): Convert SdkBytes to ByteBuffer by calling SdkBytes#asByteBuffer() 

## Removed Recipes

* **org.openrewrite.java.boot3.ReplaceMockBeanAndSpyBean**: Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`. 

## Changed Recipes

* [org.openrewrite.gradle.plugins.AddBuildPlugin](https://docs.openrewrite.org/recipes/gradle/plugins/addbuildplugin) was changed:
  * Old Options:
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.gradle.plugins.AddSettingsPlugin](https://docs.openrewrite.org/recipes/gradle/plugins/addsettingsplugin) was changed:
  * Old Options:
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `apply: { type: Boolean, required: false }`
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.java.AddOrUpdateAnnotationAttribute](https://docs.openrewrite.org/recipes/java/addorupdateannotationattribute) was changed:
  * Old Options:
    * `addOnly: { type: Boolean, required: true }`
    * `annotationType: { type: String, required: true }`
    * `appendArray: { type: Boolean, required: true }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: true }`
  * New Options:
    * `addOnly: { type: Boolean, required: true }`
    * `annotationType: { type: String, required: true }`
    * `appendArray: { type: Boolean, required: true }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: true }`
    * `oldAttributeValue: { type: String, required: true }`
* [org.openrewrite.maven.ChangePluginGroupIdAndArtifactId](https://docs.openrewrite.org/recipes/maven/changeplugingroupidandartifactid) was changed:
  * Old Options:
    * `newArtifact: { type: String, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
  * New Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
* [org.openrewrite.quarkus.search.FindQuarkusProperties](https://docs.openrewrite.org/recipes/quarkus/search/findquarkusproperties) was changed:
  * Old Options:
    * `profile: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `searchAllProfiles: { type: Boolean, required: false }`
  * New Options:
    * `pathExpressions: { type: List, required: false }`
    * `profile: { type: String, required: false }`
    * `propertyKey: { type: String, required: true }`
    * `searchAllProfiles: { type: Boolean, required: false }`
* [org.openrewrite.staticanalysis.UnnecessaryCatch](https://docs.openrewrite.org/recipes/staticanalysis/unnecessarycatch) was changed:
  * Old Options:
    * `includeJavaLangException: { type: boolean, required: false }`
  * New Options:
    * `includeJavaLangException: { type: boolean, required: false }`
    * `includeJavaLangThrowable: { type: boolean, required: false }`