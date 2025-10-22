---
description: What's changed in OpenRewrite version 8.64.0.
---

# 8.64.0 release (2025-10-22)

_Total recipe count: 4942_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.49.0`
* Staging CLI version: `v3.50.0`

## New Artifacts

* rewrite-toml

## New Recipes

* [io.moderne.java.spring.boot.FieldToConstructorInjection](https://docs.openrewrite.org/recipes/java/spring/boot/fieldtoconstructorinjection): Converts `@Autowired` field injection to constructor injection pattern. For non-final classes, adds both a no-args constructor and the autowired constructor to maintain compatibility with extending classes. Moves `@Qualifier` annotations to constructor parameters. 
* [io.moderne.java.spring.framework.beansxml.BeansXmlToConfiguration](https://docs.openrewrite.org/recipes/java/spring/framework/beansxml/beansxmltoconfiguration): Converts Java/Jakarta EE `beans.xml` configuration files to Spring Framework `@Configuration` classes. 
* [io.quarkus.updates.camel.camel415.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel415/camelquarkusmigrationrecipe): Migrates `camel 4.14` Quarkus application to `camel 4.15`. 
* [org.apache.camel.upgrade.camel415.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/camelmigrationrecipe): Migrates `camel 4.14` application to `camel 4.15`. 
* [org.apache.camel.upgrade.camel415.aiNestedHeadersClasses](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/ainestedheadersclasses): Changed types of camel AI nested headers classes. 
* [org.apache.camel.upgrade.camel415.dataFormats](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/dataformats): Refactored dataFormats. 
* [org.apache.camel.upgrade.camel415.nettyAndNettyHttp](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/nettyandnettyhttp): Changed parameter in camel-netty and camel-netty-http + enhanced value. 
* [org.apache.camel.upgrade.camel415.xmlDataFormats](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/xmldataformats): Refactored dataFormats (XML DSL). 
* [org.apache.camel.upgrade.camel415.yamDataFormats](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel415/yamdataformats): Refactored dataFormats (YAML DSL). 
* [org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentXml](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/replacepropertyincomponentxml): Apache Camel XML DSL migration from version 4.9 o 4.10. 
* [org.apache.camel.upgrade.customRecipes.ReplacePropertyInComponentYaml](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/replacepropertyincomponentyaml): ARenames property of the component. 
* [org.apache.camel.upgrade.customRecipes.ReplacePropertyInDataFormatXml](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/replacepropertyindataformatxml): Apache Camel XML DSL migration from version 4.9 o 4.10. 
* [org.apache.camel.upgrade.customRecipes.ReplacePropertyInDataFormatYaml](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/replacepropertyindataformatyaml): ARenames property of the component. 
* [org.openrewrite.featureflags.RemoveDoubleFlag](https://docs.openrewrite.org/recipes/featureflags/removedoubleflag): Replace method invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.RemoveIntegerFlag](https://docs.openrewrite.org/recipes/featureflags/removeintegerflag): Replace method invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.launchdarkly.RemoveDoubleVariation](https://docs.openrewrite.org/recipes/featureflags/launchdarkly/removedoublevariation): Replace `doubleVariation` invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.launchdarkly.RemoveIntVariation](https://docs.openrewrite.org/recipes/featureflags/launchdarkly/removeintvariation): Replace `intVariation` invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.openfeature.RemoveGetDoubleValue](https://docs.openrewrite.org/recipes/featureflags/openfeature/removegetdoublevalue): Replace `getDoubleValue()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.openfeature.RemoveGetIntegerValue](https://docs.openrewrite.org/recipes/featureflags/openfeature/removegetintegervalue): Replace `getIntegerValue()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.openfeature.RemoveGetStringValue](https://docs.openrewrite.org/recipes/featureflags/openfeature/removegetstringvalue): Replace `getStringValue()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.java.jackson.ReplaceStreamWriteCapability](https://docs.openrewrite.org/recipes/java/jackson/replacestreamwritecapability): In Jackson 3, `JsonGenerator.canWriteBinaryNatively()` and `canWriteFormattedNumbers()` were removed and replaced with the `StreamWriteCapability` enum. This recipe updates these method calls to use `getWriteCapabilities().isEnabled(StreamWriteCapability.*)` instead. 
* [org.openrewrite.java.migrate.guava.NoGuavaPredicatesAndOr](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavapredicatesandor): Prefer `Predicate.and(Predicate)` over `Predicates.and(Predicate, Predicate)`. 
* [org.openrewrite.java.search.HasMethod](https://docs.openrewrite.org/recipes/java/search/hasmethod): Marks files that have at least one occurrence of a method matching a pattern. 
* [org.openrewrite.java.search.HasType](https://docs.openrewrite.org/recipes/java/search/hastype): Marks files that have at least one occurrence of a type, even if the name of that type doesn't appear in the source code. 
* [org.openrewrite.java.spring.SeparateApplicationPropertiesByProfile](https://docs.openrewrite.org/recipes/java/spring/separateapplicationpropertiesbyprofile): Separating `application.properties` into separate files based on profiles. 
* [org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_5](https://docs.openrewrite.org/recipes/java/spring/security6/upgradespringsecurity_6_5): Migrate applications to the latest Spring Security 6.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses](https://docs.openrewrite.org/recipes/java/testing/testcontainers/testcontainers2containerclasses): Change Testcontainers container classes to their new package locations in Testcontainers 2.x. 
* [org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies](https://docs.openrewrite.org/recipes/java/testing/testcontainers/testcontainers2dependencies): Change Testcontainers dependencies to adopt the new consistent `testcontainers-` prefix. 
* [org.openrewrite.java.testing.testcontainers.Testcontainers2Migration](https://docs.openrewrite.org/recipes/java/testing/testcontainers/testcontainers2migration): Change dependencies and types to migrate to testcontainers-java 2.x. 
* [org.openrewrite.maven.MigrateToMaven4](https://docs.openrewrite.org/recipes/maven/migratetomaven4): Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4. 
* [org.openrewrite.maven.RemoveDuplicatePluginDeclarations](https://docs.openrewrite.org/recipes/maven/removeduplicateplugindeclarations): Maven 4 rejects duplicate plugin declarations (same groupId and artifactId) with an error. This recipe removes duplicate plugin declarations, keeping only the first occurrence. 
* [org.openrewrite.maven.ReplaceDeprecatedLifecyclePhases](https://docs.openrewrite.org/recipes/maven/replacedeprecatedlifecyclephases): Maven 4 deprecated all `pre-*` and `post-*` lifecycle phases in favor of the `before:` and `after:` syntax. This recipe updates plugin phase declarations to use the new syntax, including `pre-clean` → `before:clean`, `pre-site` → `before:site`, `pre-integration-test` → `before:integration-test`, and their `post-*` equivalents. 
* [org.openrewrite.maven.ReplaceModulesWithSubprojects](https://docs.openrewrite.org/recipes/maven/replacemoduleswithsubprojects): Maven 4 model version 4.1.0 deprecates the `<modules>` element in favor of `<subprojects>` to eliminate confusion with Java's Platform Module System (JPMS). This recipe renames `<modules>` to `<subprojects>` and `<module>` children to `<subproject>`. 
* [org.openrewrite.maven.ReplaceRemovedRootDirectoryProperties](https://docs.openrewrite.org/recipes/maven/replaceremovedrootdirectoryproperties): Maven 4 removed support for deprecated root directory properties. This recipe replaces `${executionRootDirectory}` with `${session.rootDirectory}` and `${multiModuleProjectDirectory}` with `${project.rootDirectory}`. 
* [org.openrewrite.maven.UpgradeToModelVersion410](https://docs.openrewrite.org/recipes/maven/upgradetomodelversion410): Upgrades Maven POMs from model version 4.0.0 to 4.1.0, enabling new Maven 4 features like `<subprojects>`, `bom` packaging, and automatic version inference. This recipe updates the `<modelVersion>` element, `xmlns` namespace, and `xsi:schemaLocation` from 4.0.0 to 4.1.0. 
* [org.openrewrite.maven.UseParentInference](https://docs.openrewrite.org/recipes/maven/useparentinference): Maven 4.1.0 supports automatic parent version inference when using a relative path. This recipe simplifies parent declarations by using the shorthand `<parent/>` form when the parent is in the default location (`..`), removing the explicit `<relativePath>`, `<groupId>`, `<artifactId>`, and `<version>` elements. Maven automatically infers these values from the parent POM. 
* [org.openrewrite.toml.ChangeKey](https://docs.openrewrite.org/recipes/toml/changekey): Change a TOML key, while leaving the value intact. 
* [org.openrewrite.toml.ChangeTableRowValue](https://docs.openrewrite.org/recipes/toml/changetablerowvalue): Change a value in a TOML table row when the identifying property matches the specified matcher. 
* [org.openrewrite.toml.ChangeValue](https://docs.openrewrite.org/recipes/toml/changevalue): Change the value of a TOML key. 
* [org.openrewrite.toml.CreateTomlFile](https://docs.openrewrite.org/recipes/toml/createtomlfile): Create a new TOML file. 
* [org.openrewrite.toml.DeleteKey](https://docs.openrewrite.org/recipes/toml/deletekey): Delete a TOML key-value pair. 
* [org.openrewrite.toml.DeleteTable](https://docs.openrewrite.org/recipes/toml/deletetable): Delete a TOML table. 
* [org.openrewrite.toml.DeleteTableRow](https://docs.openrewrite.org/recipes/toml/deletetablerow): Delete a TOML table row when one of its values matches the specified matcher. 
* [org.openrewrite.toml.FindKey](https://docs.openrewrite.org/recipes/toml/findkey): Find TOML keys matching a path expression. 
* [org.openrewrite.toml.MergeTableRow](https://docs.openrewrite.org/recipes/toml/mergetablerow): Merge a TOML row into an array table. If a row with the same identifying property exists, merge the values. Otherwise, insert a new row. 
* [org.openrewrite.toml.ReplaceTableRow](https://docs.openrewrite.org/recipes/toml/replacetablerow): Replace a TOML table row with new content. If a row with the same identifying property exists, replace it entirely. 

## Removed Recipes

* **io.moderne.java.spring.framework.webxml.DeleteEmptyWebXml**: Deletes `web.xml` files that contain only an empty `<web-app>` root element with no child elements. 
* **org.openrewrite.spring.webxml.MigrateToJakartaEEServletConfiguration**: Migrates `web.xml` content to Spring Boot Configuration classes using Jakarta EE namespace. 
* **org.openrewrite.spring.webxml.MigrateToJavaXServletConfiguration**: Migrates `web.xml` content to Spring Boot Configuration classes using Java EE javax namespace. 
* **org.openrewrite.spring.webxml.RemoveWebXml**: Migrates `web.xml` content to Spring Boot Configuration classes with respect to Java EE or Jakarta EE usage. 

## Changed Recipes

* [org.openrewrite.maven.AddManagedDependency](https://docs.openrewrite.org/recipes/maven/addmanageddependency) was changed:
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
* [org.openrewrite.maven.UpgradeTransitiveDependencyVersion](https://docs.openrewrite.org/recipes/maven/upgradetransitivedependencyversion) was changed:
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