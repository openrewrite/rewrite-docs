# Snapshot (2023-04-03)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.ReplaceConstantWithAnotherConstant](https://docs.openrewrite.org/reference/recipes/java/replaceconstantwithanotherconstant): Replace constant with another constant, adding/removing import on class if needed. 
* [org.openrewrite.java.cleanup.RemoveSystemOutPrintln](https://docs.openrewrite.org/reference/recipes/java/cleanup/removesystemoutprintln): Print statements are often left accidentally after debugging an issue. 
* [org.openrewrite.java.migrate.guava.NoGuavaOptionalFromJavaUtil](https://docs.openrewrite.org/reference/recipes/java/migrate/guava/noguavaoptionalfromjavautil): Replaces `com.google.common.base.Optional#fromJavaUtil(java.util.Optional)` with argument. 
* [org.openrewrite.java.migrate.guava.NoGuavaOptionalToJavaUtil](https://docs.openrewrite.org/reference/recipes/java/migrate/guava/noguavaoptionaltojavautil): Remove calls to `com.google.common.base.Optional#toJavaUtil()`. 
* [org.openrewrite.java.migrate.guava.PreferJavaUtilOptional](https://docs.openrewrite.org/reference/recipes/java/migrate/guava/preferjavautiloptional): Prefer `java.util.Optional` instead of using `com.google.common.base.Optional`. 
* [org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrElseNull](https://docs.openrewrite.org/reference/recipes/java/migrate/guava/preferjavautiloptionalorelsenull): Replaces `com.google.common.base.Optional#orNull()` with `java.util.Optional#orElse(null)`. 
* [org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrSupplier](https://docs.openrewrite.org/reference/recipes/java/migrate/guava/preferjavautiloptionalorsupplier): Prefer `java.util.Optional#or(Supplier<T extends java.util.Optional<T>>)` over `com.google.common.base.Optional#or(com.google.common.base.Optional). 
* [org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate](https://docs.openrewrite.org/reference/recipes/java/recipes/usejavaparserbuilderinjavatemplate): Because we can now clone `JavaParser.Builder`, there is no need to fully build the parser inside a `Supplier<JavaParser>`. This also makes room for `JavaTemplate` to add shared `JavaTypeCache` implementations to parsers used to compile templates. 
* [org.openrewrite.java.spring.cloud2022.MavenPomUpgrade](https://docs.openrewrite.org/reference/recipes/java/spring/cloud2022/mavenpomupgrade): Upgrade Maven POM to Spring Cloud 2022 from prior 2021.x version. 
* [org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing](https://docs.openrewrite.org/reference/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing): Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x. 
* [org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022](https://docs.openrewrite.org/reference/recipes/java/spring/cloud2022/upgradespringcloud_2022): Migrate applications to the latest Spring Cloud 2022 (Kilburn) release. 
* [org.openrewrite.maven.ChangePluginGroupIdAndArtifactId](https://docs.openrewrite.org/reference/recipes/maven/changeplugingroupidandartifactid): Change the groupId and/or the artifactId of a specified Maven plugin. 

## Changed Recipes
* [org.openrewrite.gradle.plugins.AddGradleEnterprise](https://docs.openrewrite.org/reference/recipes/gradle/plugins/addgradleenterprise) was changed:
  * Old Options:
    * `version: { type: String, required: true }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureTaskInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: false }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
* [org.openrewrite.java.ReplaceStringLiteralWithConstant](https://docs.openrewrite.org/reference/recipes/java/replacestringliteralwithconstant) was changed:
  * Old Options:
    * `fullyQualifiedConstantName: { type: String, required: true }`
    * `literalValue: { type: String, required: true }`
  * New Options:
    * `fullyQualifiedConstantName: { type: String, required: true }`
    * `literalValue: { type: String, required: false }`