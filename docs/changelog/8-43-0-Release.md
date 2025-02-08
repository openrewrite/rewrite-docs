# 8.43.0 release (2025-01-10)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts
* rewrite-compiled-analysis
* rewrite-comprehension

## New Recipes

* [io.moderne.compiled.verification.ChangeListMethodAndVerify](https://docs.openrewrite.org/recipes/compiled/verification/changelistmethodandverify): We know this won't compile.
* [io.moderne.compiled.verification.VerifyCompilation](https://docs.openrewrite.org/recipes/compiled/verification/verifycompilation): This is a task that runs after another recipe to verify that the changes made by that recipe would result in a successful compilation.
* [io.moderne.knowledge.ComprehendCode](https://docs.openrewrite.org/recipes/knowledge/comprehendcode): Use LLMs to add inferred knowledge to the code.
* [io.moderne.knowledge.docs.UpdateOpenRewriteReadme](https://docs.openrewrite.org/recipes/knowledge/docs/updateopenrewritereadme): Updates the README periodically to reflect the latest contents of recipe projects.
* [io.moderne.knowledge.docs.UpdateReadme](https://docs.openrewrite.org/recipes/knowledge/docs/updatereadme): Generate a README file for the project, containing information about the project inferred from its knowledge graph.
* [org.openrewrite.gradle.EnableDevelocityBuildCache](https://docs.openrewrite.org/recipes/gradle/enabledevelocitybuildcache): Adds `buildCache` configuration to `develocity` where not yet present.
* [org.openrewrite.gradle.plugins.RemoveDevelocity](https://docs.openrewrite.org/recipes/gradle/plugins/removedevelocity): Remove the Develocity plugin and configuration from the Gradle build and settings files.
* [org.openrewrite.gradle.plugins.RemoveDevelocityConfiguration](https://docs.openrewrite.org/recipes/gradle/plugins/removedevelocityconfiguration): Remove Develocity configuration from a Gradle build.
* [org.openrewrite.java.migrate.UpdateSdkMan](https://docs.openrewrite.org/recipes/java/migrate/updatesdkman): Update the SDKMAN JDK version in the `.sdkmanrc` file. Given a major release (e.g., 17), the recipe will update the current distribution to the current default SDKMAN version of the specified major release. The distribution option can be used to specify a specific JVM distribution. Note that these must correspond to valid SDKMAN distributions.
* [org.openrewrite.java.migrate.guava.NoMapsAndSetsWithExpectedSize](https://docs.openrewrite.org/recipes/java/migrate/guava/nomapsandsetswithexpectedsize): Prefer Java 19+ methods to create Maps and Sets of an expected size instead of using Guava methods.
* [org.openrewrite.java.migrate.lombok.UseNoArgsConstructor](https://docs.openrewrite.org/recipes/java/migrate/lombok/usenoargsconstructor): Prefer the Lombok `@NoArgsConstructor` annotation over explicitly written out constructors.
* [org.openrewrite.java.migrate.lombok.log.UseCommonsLog](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/usecommonslog): Prefer the lombok annotation `@CommonsLog` over explicitly written out `org.apache.commons.logging.Log` fields.
* [org.openrewrite.java.migrate.lombok.log.UseJBossLog](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/usejbosslog): Prefer the lombok annotation `@JBossLog` over explicitly written out `org.jboss.logging.Logger` fields.
* [org.openrewrite.java.migrate.lombok.log.UseLog](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/uselog): Prefer the lombok annotation `@Log` over explicitly written out `java.util.logging.Logger` fields.
* [org.openrewrite.java.migrate.lombok.log.UseLog4j2](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/uselog4j2): Prefer the lombok annotation `@Log4j2` over explicitly written out `org.apache.logging.log4j.Logger` fields.
* [org.openrewrite.java.migrate.lombok.log.UseLombokLogAnnotations](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/uselomboklogannotations): Applies all recipes that replace logger declarations with class level annotations.
* [org.openrewrite.java.migrate.lombok.log.UseSlf4j](https://docs.openrewrite.org/recipes/java/migrate/lombok/log/useslf4j): Prefer the lombok annotation `@Slf4` over explicitly written out `org.slf4j.Logger` fields.
* [org.openrewrite.java.search.FindCompileErrors](https://docs.openrewrite.org/recipes/java/search/findcompileerrors): Compile errors result in a particular LST structure that can be searched for.
* [org.openrewrite.java.spring.cloud2022.MigrateRequestMappingOnFeignClient](https://docs.openrewrite.org/recipes/java/spring/cloud2022/migraterequestmappingonfeignclient): Support for `@RequestMapping` over a `FeignClient` interface was removed in Spring Cloud OpenFeign 2.2.10.RELEASE.
* [org.openrewrite.java.testing.arquillian.ArquillianJUnit4ToArquillianJUnit5](https://docs.openrewrite.org/recipes/java/testing/arquillian/arquillianjunit4toarquillianjunit5): Migrates Arquillian JUnit 4 to JUnit 5.
* [org.openrewrite.java.testing.arquillian.ReplaceArquillianInSequenceAnnotation](https://docs.openrewrite.org/recipes/java/testing/arquillian/replacearquillianinsequenceannotation): Transforms the Arquillian JUnit 4 `@InSequence` to the JUnit Jupiter `@Order`.
* [org.openrewrite.java.testing.assertj.IsEqualToIgnoringMillisToIsCloseToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/isequaltoignoringmillistoisclosetorecipe): `isEqualToIgnoringMillis()` is deprecated in favor of `isCloseTo()`.
* [org.openrewrite.maven.EnableDevelocityBuildCache](https://docs.openrewrite.org/recipes/maven/enabledevelocitybuildcache): Add Develocity build cache configuration to any `.mvn/` Develocity configuration file that lack existing configuration.
* [org.openrewrite.openapi.swagger.MigrateApiImplicitParam](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiimplicitparam): Migrate `@ApiImplicitParam` to `@Parameter`.
* [org.openrewrite.openapi.swagger.MigrateApiParamDefaultValue](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiparamdefaultvalue): Migrate `@ApiParam(defaultValue)` to `@Parameter(schema = @Schema(defaultValue))`.
* [org.openrewrite.openapi.swagger.MigrateSwaggerDefinitionToOpenAPIDefinition](https://docs.openrewrite.org/recipes/openapi/swagger/migrateswaggerdefinitiontoopenapidefinition): Migrate from `@SwaggerDefinition` to `@OpenAPIDefinition`.
* [software.amazon.awssdk.v2migration.S3MethodsToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3methodstov2): Change S3 methods to v2.

## Removed Recipes

* **org.openrewrite.java.dependencies.RemoveExpiredSuppressions**: Remove expired vulnerability suppressions from `DependencyCheck` `suppression.xml` files.
* **org.openrewrite.openapi.swagger.MigrateApiImplicitParamDataTypeClass**: Migrate `@ApiImplicitParam(dataTypeClass=Foo.class)` to `@Parameter(schema=@Schema(implementation=Foo.class))`.

## Changed Recipes

* [org.openrewrite.text.Find](https://docs.openrewrite.org/recipes/text/find) was changed:
  * Old Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `description: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
* [org.openrewrite.xml.security.RemoveOwaspSuppressions](https://docs.openrewrite.org/recipes/xml/security/removeowaspsuppressions) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `cutOffDate: { type: String, required: false }`