# 8.17.1 release (2024-02-21)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Artifacts
* rewrite-openapi

## New Recipes

* [org.openrewrite.gradle.AddDirectDependencyToUpgradeTransitiveVersion](https://docs.openrewrite.org/recipes/gradle/adddirectdependencytoupgradetransitiveversion): Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management. 
* [org.openrewrite.groovy.format.AutoFormat](https://docs.openrewrite.org/recipes/groovy/format/autoformat): Format Groovy code using a standard comprehensive set of Groovy formatting recipes. 
* [org.openrewrite.hibernate.ReplaceLazyCollectionAnnotation](https://docs.openrewrite.org/recipes/hibernate/replacelazycollectionannotation): Adds the `FetchType` to jakarta annotations and deletes `@LazyCollection`. 
* [org.openrewrite.java.migrate.javaee6](https://docs.openrewrite.org/recipes/java/migrate/javaee6): These recipes help with the Migration to Java EE 6, flagging and updating deprecated methods. 
* [org.openrewrite.java.migrate.javax.AddTableGenerator](https://docs.openrewrite.org/recipes/java/migrate/javax/addtablegenerator): Adds missing `@TableGenerator` annotation and updates the `@GeneratedValue` annotation values when it uses automatically generated values. 
* [org.openrewrite.java.migrate.javax.HttpSessionInvalidate](https://docs.openrewrite.org/recipes/java/migrate/javax/httpsessioninvalidate): Do not rely on HttpSession `invalidate` method for programmatic security logout. Add the HttpServletRequest `logout` method which was introduced in Java EE 6 as part of the Servlet 3.0 specification. 
* [org.openrewrite.java.migrate.javax.openJPAToEclipseLink](https://docs.openrewrite.org/recipes/java/migrate/javax/openjpatoeclipselink): These recipes help migrate Java Persistence applications using OpenJPA to EclipseLink JPA. 
* [org.openrewrite.java.recipes.RewriteTestClassesShouldNotBePublic](https://docs.openrewrite.org/recipes/java/recipes/rewritetestclassesshouldnotbepublic): Remove the public modifier from classes that implement RewriteTest. 
* [org.openrewrite.java.springdoc.SwaggerToSpringDoc](https://docs.openrewrite.org/recipes/java/springdoc/swaggertospringdoc): Migrate from Swagger to SpringDoc and OpenAPI. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_2](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_2): Upgrade to SpringDoc v2. 
* [org.openrewrite.java.testing.jmockit.JMockitMockedVariableToMockito](https://docs.openrewrite.org/recipes/java/testing/jmockit/jmockitmockedvariabletomockito): Rewrites JMockit `Mocked Variable` to Mockito statements. 
* [org.openrewrite.maven.search.FindManagedDependency](https://docs.openrewrite.org/recipes/maven/search/findmanageddependency): Finds first-order dependency management entries, i.e. dependencies that are defined directly in a project. 
* [org.openrewrite.openapi.swagger.ConvertApiResponseCodesToStrings](https://docs.openrewrite.org/recipes/openapi/swagger/convertapiresponsecodestostrings): Convert API response codes to strings. 
* [org.openrewrite.openapi.swagger.MigrateApiImplicitParamsToParameters](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiimplicitparamstoparameters): Converts @ApiImplicitParams to @Parameters and the @ApiImplicitParam annotation to @Parameter and converts the directly mappable attributes and removes the others. 
* [org.openrewrite.openapi.swagger.MigrateApiModelPropertyToSchema](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapimodelpropertytoschema): Converts the @ApiModelProperty annotation to @Schema and converts the "value" attribute to "description". 
* [org.openrewrite.openapi.swagger.MigrateApiOperationToOperation](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapioperationtooperation): Converts the @ApiOperation annotation to @Operation and converts the directly mappable attributes and removes the others. 
* [org.openrewrite.openapi.swagger.MigrateApiParamToParameter](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiparamtoparameter): Converts the @ApiParam annotation to @Parameter and converts the directly mappable attributes. 
* [org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiresponsestoapiresponses): Changes the namespace of the @ApiResponses and @ApiResponse annotations and converts its attributes (ex. code -> responseCode, message -> description). 
* [org.openrewrite.openapi.swagger.MigrateApiToTag](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapitotag): Converts @Api to @Tag annotation and converts the directly mappable attributes and removes the others. 
* [org.openrewrite.openapi.swagger.SwaggerToOpenAPI](https://docs.openrewrite.org/recipes/openapi/swagger/swaggertoopenapi): Migrate from Swagger to OpenAPI. 

## Changed Recipes

* [org.openrewrite.gradle.UpdateJavaCompatibility](https://docs.openrewrite.org/recipes/gradle/updatejavacompatibility) was changed:
  * Old Options:
    * `addSourceCompatibilityIfMissing: { type: Boolean, required: false }`
    * `addTargetCompatibilityIfMissing: { type: Boolean, required: false }`
    * `allowDowngrade: { type: Boolean, required: false }`
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `allowDowngrade: { type: Boolean, required: false }`
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
* [org.openrewrite.java.security.ZipSlip](https://docs.openrewrite.org/recipes/java/security/zipslip) was changed:
  * Old Options:
    * `debug: { type: boolean, required: true }`
  * New Options:
    * `None`
* [org.openrewrite.maven.UpdateMavenWrapper](https://docs.openrewrite.org/recipes/maven/updatemavenwrapper) was changed:
  * Old Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distributionVersion: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `wrapperDistribution: { type: String, required: false }`
    * `wrapperVersion: { type: String, required: false }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distributionVersion: { type: String, required: false }`
    * `enforceWrapperChecksumVerification: { type: Boolean, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `wrapperDistribution: { type: String, required: false }`
    * `wrapperVersion: { type: String, required: false }`
* [org.openrewrite.maven.search.FindDependency](https://docs.openrewrite.org/recipes/maven/search/finddependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.yaml.ChangeValue](https://docs.openrewrite.org/recipes/yaml/changevalue) was changed:
  * Old Options:
    * `oldKeyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `keyPath: { type: String, required: true }`
    * `value: { type: String, required: true }`
* [org.openrewrite.yaml.CopyValue](https://docs.openrewrite.org/recipes/yaml/copyvalue) was changed:
  * Old Options:
    * `newKey: { type: String, required: true }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`