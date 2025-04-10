---
description: What's changed in OpenRewrite version 8.49.0.
---

# 8.49.0 release (2025-03-28)

_Total recipe count: 3086_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.quakus.updates.minio.minio38.UpdateAll](https://docs.openrewrite.org/recipes/io/quakus/updates/minio/minio38/updateall):  
* [io.quarkus.updates.core.quarkus321.TlsRegistrySplitPackagesFix](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus321/tlsregistrysplitpackagesfix):  
* [io.quarkus.updates.minio.minio38.UpdateProperties](https://docs.openrewrite.org/recipes/io/quarkus/updates/minio/minio38/updateproperties):  
* [io.quarkus.updates.quarkiverse.minio.minio38.AdjustURLPropertyValue](https://docs.openrewrite.org/recipes/io/quarkus/updates/quarkiverse/minio/minio38/adjusturlpropertyvalue): Adjust quarkus.minio.url property key to quarkus.minio.host. 
* [org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBold](https://docs.openrewrite.org/recipes/apache/poi/replacesetboldweightwithsetbold): Replace `Font.setBoldweight(short)` or equivalent with `Font.setBold(boolean)`. 
* [org.openrewrite.apache.poi.ReplaceSetCellType](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltype): `Cell.setCellType()` can be configured with either an integer or a the `CellType` enumeration. It is clearer and less error-prone to use the `CellType` enumeration, so this recipe converts all `setCellType()` calls to use it. 
* [org.openrewrite.java.logging.CatchBlockLogLevel](https://docs.openrewrite.org/recipes/java/logging/catchblockloglevel): Sometimes exceptions are caught and logged at the wrong log level. This will set the log level of logging statements within a catch block not containing an exception to "warn", and the log level of logging statements containing an exception to "error". This supports SLF4J, Log4J1, Log4j2, and Logback. 
* [org.openrewrite.java.logging.logback.ConfigureLoggerLevel](https://docs.openrewrite.org/recipes/java/logging/logback/configureloggerlevel): Within logback.xml configuration files sets the specified log level for a particular class. Will not create a logback.xml if one does not already exist. 
* [org.openrewrite.java.migrate.jakarta.UpdateAnnotationAttributeJavaxToJakarta](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateannotationattributejavaxtojakarta): Replace `javax` with `jakarta` in annotation attributes for matching annotation signatures. 
* [org.openrewrite.java.migrate.jakarta.UpdateApacheCommonsEmailDependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateapachecommonsemaildependencies): Update Apache Commons Email to Email2 for Jakarta. 
* [org.openrewrite.java.migrate.jakarta.UpdateApacheShiroDependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateapacheshirodependencies): Update Apache Shiro Dependencies to 2.0.x. 
* [org.openrewrite.java.migrate.jakarta.UpdateEclipseLinkDependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateeclipselinkdependencies): Update EclipseLink Dependencies to 4.x. 
* [org.openrewrite.java.migrate.jakarta.UpdateJerseyDependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejerseydependencies): Update GlassFish Jersey Dependencies to 3.1.x. 
* [org.openrewrite.java.migrate.jakarta.UpdateYassonDependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateyassondependencies): Update Eclipse Yasson Dependencies to 3.0.x. 
* [org.openrewrite.java.spring.boot3.SpringBoot33BestPractices](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot33bestpractices): Applies best practices to Spring Boot 3 applications. 
* [org.openrewrite.java.testing.mockito.PowerMockitoWhenNewToMockito](https://docs.openrewrite.org/recipes/java/testing/mockito/powermockitowhennewtomockito): Replaces `PowerMockito.whenNew` calls with respective `Mockito.whenConstructed` calls. 
* [software.amazon.awssdk.v2migration.DateToInstant](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/datetoinstant): Convert Date to Instant by calling Date#toInstant 
* [software.amazon.awssdk.v2migration.S3PutObjectRequestToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3putobjectrequesttov2): Transform V1 S3 PutObjectRequest to V2, as well as methods that take it as an argument. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FileMkDirsFileExistsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipesusdfilemkdirsfileexistsrecipe): Invoke `File#mkdirs()` before `File#exists()` to avoid concurrency issues 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathToFileMkDirsFilesExistsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipesusdpathtofilemkdirsfilesexistsrecipe): Invoke `File#mkdirs()` before `Files#exists(Path, LinkOption...)` to avoid concurrency issues 

## Removed Recipes

* **org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes**: Replace `Font.setBoldweight(short)` or equivalent with `Font.setBold(boolean)`. 
* **org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes$ReplaceSetBoldweightBoldWithSetBoldTrueRecipe**: Replace `Font.setBoldweight(Font.BOLDWEIGHT_BOLD)` or equivalent with `Font.setBold(true)`. 
* **org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes$ReplaceSetBoldweightNormalWithSetBoldFalseRecipe**: Replace `Font.setBoldweight(Font.BOLDWEIGHT_NORMAL)` or equivalent with `Font.setBold(false)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes**: Replace `Cell.setCellType(int)` with equivalent `Cell.setCellType(CellType)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeBlankRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_BLANK)` with `Cell.setCellType(CellType.BLANK)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeBooleanRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_BOOLEAN)` with `Cell.setCellType(CellType.BOOLEAN)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeErrorRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_ERROR)` with `Cell.setCellType(CellType.ERROR)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeFormulaRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_FORMULA)` with `Cell.setCellType(CellType.FORMULA)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeNumericRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_NUMERIC)` with `Cell.setCellType(CellType.NUMERIC)`. 
* **org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeStringRecipe**: Replace `Cell.setCellType(Cell.CELL_TYPE_STRING)` with `Cell.setCellType(CellType.STRING)`. 
* **org.openrewrite.codemods.migrate.react.ClassComponentToFunctionComponent**: Class components are still going to be supported by React for the foreseeable future. However, it is no longer recommended to write new components in class-style.

  This recipe will convert class components to function components using [react-declassify](https://github.com/wantedly/react-declassify) 
* **org.openrewrite.java.migrate.jakarta.BeanValidationMessages**: Migrate `javax.validation.constraints` messages found in Java files to `jakarta.validation.constraints` equivalents. 
* **org.openrewrite.java.spring.boot3.SpringBoot3BestPractices**: Applies best practices to Spring Boot 3 applications. 

## Changed Recipes

* [org.openrewrite.text.FindMultiselect](https://docs.openrewrite.org/recipes/text/findmultiselect) was changed:
  * Old Options:
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `regexOptions: { type: Set, required: false }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `regex: { type: Boolean, required: false }`
    * `regexOptions: { type: Set, required: false }`
* [org.openrewrite.gradle.AddProperty](https://docs.openrewrite.org/recipes/gradle/addproperty) was changed:
  * Old Options:
    * `filePattern: { type: String, required: true }`
    * `key: { type: String, required: true }`
    * `overwrite: { type: Boolean, required: true }`
    * `value: { type: String, required: true }`
  * New Options:
    * `filePattern: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `overwrite: { type: Boolean, required: true }`
    * `value: { type: String, required: true }`
* [org.openrewrite.java.AddOrUpdateAnnotationAttribute](https://docs.openrewrite.org/recipes/java/addorupdateannotationattribute) was changed:
  * Old Options:
    * `addOnly: { type: Boolean, required: true }`
    * `annotationType: { type: String, required: true }`
    * `appendArray: { type: Boolean, required: true }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: true }`
    * `oldAttributeValue: { type: String, required: true }`
  * New Options:
    * `addOnly: { type: Boolean, required: false }`
    * `annotationType: { type: String, required: true }`
    * `appendArray: { type: Boolean, required: false }`
    * `attributeName: { type: String, required: false }`
    * `attributeValue: { type: String, required: false }`
    * `oldAttributeValue: { type: String, required: false }`
* [org.openrewrite.java.search.FindMissingTypes](https://docs.openrewrite.org/recipes/java/search/findmissingtypes) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `checkDocumentation: { type: boolean, required: false }`
* [org.openrewrite.java.dependencies.DependencyList](https://docs.openrewrite.org/recipes/java/dependencies/dependencylist) was changed:
  * Old Options:
    * `includeTransitive: { type: boolean, required: true }`
    * `scope: { type: Scope, required: true }`
    * `validateResolvable: { type: boolean, required: true }`
  * New Options:
    * `includeTransitive: { type: boolean, required: false }`
    * `scope: { type: Scope, required: false }`
    * `validateResolvable: { type: boolean, required: false }`
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `overrideVulnerabilityDatabase: { type: URI, required: false }`
    * `scope: { type: String, required: false }`