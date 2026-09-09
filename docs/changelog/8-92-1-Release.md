---
description: What's changed in OpenRewrite version 8.92.1.
---

# 8.92.1 release (2026-09-09)

_Total recipe count: 4170_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* CLI version `4.7.4`

## New Artifacts

* rewrite-pmd

## New Recipes

* [io.quarkus.updates.camel.camel422.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/quarkus/updates/camel/camel422/camelquarkusmigrationrecipe): Migrates `camel 4.21` Quarkus application to `camel 4.22`. 
* [io.quarkus.updates.cxf.cxf316.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf316/updateall): quarkus-cxf 3.16.0 switched the default HTTP conduit to the Vert.x HttpClient, where hostname-verifier fails at runtime, and deprecated the per client trust-store*/key-store* options in favor of the Quarkus TLS registry. A safe automatic rewrite is not possible for every configuration, so this recipe only adds a deprecation warning comment at the top of the affected properties files and leaves the migration to the user. 
* [io.quarkus.updates.cxf.cxf320.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf320/updateall): Renames the deprecated client authentication properties quarkus.cxf.client."client-name".username and quarkus.cxf.client."client-name".password to auth.username and auth.password for quarkus-cxf 3.20.0. 
* [io.quarkus.updates.cxf.cxf322.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf322/updateall): Removes the quarkus-cxf-rt-transports-http-hc5 extension (asynchronous mode is provided by the Vert.x HttpClient based conduit in io.quarkiverse.cxf:quarkus-cxf) and drops the removed HttpClientHTTPConduitFactory value of *.http-conduit-factory so that the default VertxHttpClientHTTPConduit takes over, for quarkus-cxf 3.22.0. Other http-conduit-factory values such as URLConnectionHTTPConduitFactory stay supported and are left untouched. 
* [io.quarkus.updates.cxf.cxf331.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf331/updateall): quarkus-cxf 3.31.0 deprecated the per client proxy options (proxy-server, proxy-server-port, proxy-server-type, proxy-username, proxy-password, non-proxy-hosts) in favor of the Quarkus Proxy Registry, with removal announced for 4.0.0. A safe automatic rewrite is not possible for every configuration, so this recipe only adds a deprecation warning comment at the top of the affected properties files and leaves the migration to the user. 
* [io.quarkus.updates.cxf.cxf339.AddQuarkusJacksonIfUsed](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf339/addquarkusjacksonifused): Adds io.quarkus:quarkus-jackson to applications that use Jackson types in their sources, because quarkus-cxf stopped pulling quarkus-jackson transitively in 3.39.0. The detection is source based only: the dependency is not added when it is already available directly or transitively through another extension. The update tooling applies this recipe only to projects depending on io.quarkiverse.cxf:quarkus-cxf. 
* [io.quarkus.updates.cxf.cxf339.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf339/updateall): quarkus-cxf 3.39.0 no longer pulls io.quarkus:quarkus-jackson transitively. Adds an explicit quarkus-jackson dependency to applications that use Jackson classes in their sources and do not get the dependency from elsewhere. 
* [io.quarkus.updates.cxf.cxf38.UpdateAll](https://docs.openrewrite.org/recipes/quarkus/updates/cxf/cxf38/updateall): Removes the retired logging extension (its functionality moved to io.quarkiverse.cxf:quarkus-cxf in 2.6.0, configuration properties unchanged) for quarkus-cxf 3.8.0. 
* [io.quarkus.updates.quarkiverse.cxf.CommentDeprecatedProperties](https://docs.openrewrite.org/recipes/quarkus/updates/quarkiverse/cxf/commentdeprecatedproperties): Adds the configured warning comment at the top of every properties file that contains a key matching the configured pattern. The configuration itself is never changed and a file already carrying the comment is left alone. 
* [org.apache.camel.upgrade.camel40.removedDependencies](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel40/removeddependencies): Remove Camel 3.x dependencies that have been removed in Camel 4.0 with no single direct replacement. 
* [org.apache.camel.upgrade.camel40.renamedDependencies](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel40/renameddependencies): Rename removed Camel 3.x dependencies to their Camel 4.0 replacements. 
* [org.apache.camel.upgrade.camel413.furyXmlDsl](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel413/furyxmldsl): Change dataformat fury to fory in the Camel XML DSL. 
* [org.apache.camel.upgrade.camel422.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/camelmigrationrecipe): Migrates `camel 4.21` application to `camel 4.22`. 
* [org.apache.camel.upgrade.camel422.migrateAtmosphereWebsocketHeaders](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migrateatmospherewebsocketheaders): Renames the atmosphere-websocket Exchange header string values from websocket.* to CamelAtmosphereWebsocket*, only when the camel-atmosphere-websocket dependency is present. Symbolic WebsocketConstants references are unaffected and need no migration. 
* [org.apache.camel.upgrade.camel422.migrateAwsApacheClient](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migrateawsapacheclient): Migrates software.amazon.awssdk:apache-client to software.amazon.awssdk:apache5-client for projects using Camel AWS components. Explicit versions are set to 2.46.0, the AWS SDK release that made apache5-client the default; BOM-managed dependencies keep their managed version. 
* [org.apache.camel.upgrade.camel422.migrateAzureCredentialTypes](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migrateazurecredentialtypes): Migrates removed component-specific CredentialType enums to the shared org.apache.camel.component.azure.common.CredentialType enum. 
* [org.apache.camel.upgrade.camel422.migrateLangchain4jToolsUris](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migratelangchain4jtoolsuris): Renames the langchain4j-tools URI scheme to ai-tool on consumer endpoints (tool definition routes) in Java, XML and YAML DSL, and adds the camel-ai-tool dependency. Producer endpoints for direct tool calling are left unchanged and must be migrated to langchain4j-agent manually. 
* [org.apache.camel.upgrade.camel422.migrateMinioTypes](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migrateminiotypes): Migrates Minio types that were renamed or moved in the minio 8.x to 9.0 upgrade. 
* [org.apache.camel.upgrade.camel422.migrateSpringAiToolsDependency](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migratespringaitoolsdependency): Migrates the camel-spring-ai-tools dependency, removed in Camel 4.22, to camel-ai-tool. Route URIs using the spring-ai-tools scheme must be migrated to ai-tool manually. 
* [org.apache.camel.upgrade.camel422.migrateSpringAiToolsUris](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/migratespringaitoolsuris): Renames the spring-ai-tools URI scheme to ai-tool in Java, XML and YAML DSL routes, following the removal of the camel-spring-ai-tools component. Applies without a dependency precondition so that projects whose camel-spring-ai-tools dependency was already renamed (manually or by the dependency recipe) still get their routes migrated; the scheme is unique to the removed component. 
* [org.apache.camel.upgrade.camel422.removeCamelReactiveExecutorTomcatDependency](https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel422/removecamelreactiveexecutortomcatdependency): Removes the camel-reactive-executor-tomcat dependency which was deprecated in Camel 4.22 (functionally identical to the built-in default reactive executor since JDK 17, Camel falls back to it automatically). 
* [org.apache.camel.upgrade.customRecipes.FindCamelXmlDsl](https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/findcamelxmldsl): Marks XML documents that belong to the Camel XML DSL, so that a recipe operating on XML is not applied to unrelated documents such as Spring bean definitions. A Camel namespace or a Camel context element anywhere in the document is conclusive; otherwise the root element decides. 
* [org.openrewrite.java.pmd.AddPmdRule](https://docs.openrewrite.org/recipes/java/pmd/addpmdrule): Adds a `<rule ref="..."/>` reference to PMD ruleset XML files that do not have one yet. When the ruleset already pulls in the whole ruleset file the rule lives in, the rule is enabled by removing the `<exclude name="..."/>` that was keeping it out rather than by adding a second reference to it. 
* [org.openrewrite.java.pmd.ModernizePmd](https://docs.openrewrite.org/recipes/java/pmd/modernizepmd): Bring a PMD ruleset XML file up to date with current PMD, by updating the `<rule>` references and `<exclude>` elements to name each rule as PMD knows it today. This runs both the PMD 6 to 7 migration, which replaces the rules PMD 7 deleted and drops the ones deleted without a successor, and the PMD 7 rule renames, which adopt the current name of each rule PMD renamed within the PMD 7 line. Rules whose replacement requires a judgement call, either because PMD split one rule across several successors or because the successor reports something different, are left alone. The result requires PMD 7.27.0 or later; an earlier PMD 7 fails to load a name that its version does not know yet. 
* [org.openrewrite.java.pmd.Pmd6to7Migration](https://docs.openrewrite.org/recipes/java/pmd/pmd6to7migration): PMD 7 deleted the rules that had been deprecated throughout the PMD 6 line, and PMD refuses to load a ruleset that references a rule it does not know. Update the `<rule>` references and `<exclude>` elements in PMD ruleset XML files to name each deleted rule's successor, and drop the references to rules that were deleted without one. Rules whose behaviour PMD split across several successors, such as `VariableNamingConventions` and the primitive wrapper `*Instantiation` rules, are left alone because picking a single replacement for them requires a judgement call. 
* [org.openrewrite.java.pmd.Pmd7RuleRenames](https://docs.openrewrite.org/recipes/java/pmd/pmd7rulerenames): PMD renamed a number of rules during the PMD 7 line, keeping the old name as a deprecated alias that PMD still loads but warns about. Update the `<rule>` references and `<exclude>` elements in PMD ruleset XML files to name each rule's current name, so the ruleset stops emitting deprecation warnings and keeps loading once PMD 8 drops the aliases. Only true renames are applied, meaning the cases where PMD kept the old name as an alias pointing at the new one. Rules PMD deprecated in favour of a *different* rule, such as `AvoidCatchingNPE` in favour of the configurable `AvoidCatchingGenericException`, `GenericsNaming` in favour of `TypeParameterNamingConventions`, `UnnecessaryLocalBeforeReturn` in favour of `VariableCanBeInlined`, `UseObjectForClearerAPI` in favour of `ExcessiveParameterList`, and `CheckSkipResult`, `AvoidLosingExceptionInformation` and `UselessOperationOnImmutable` in favour of `UnusedReturnValue`, are left alone, because the successor reports different things and adopting it is a judgement call rather than a rename. The new names require PMD 7.27.0 or later; a ruleset for an earlier PMD 7 fails to load a name that its version does not know yet. 
* [org.openrewrite.java.pmd.RemovePmdRule](https://docs.openrewrite.org/recipes/java/pmd/removepmdrule): Removes both `<rule ref="..."/>` references to a rule and `<exclude name="..."/>` elements naming it from PMD ruleset XML files. Intended for rules that PMD deleted without offering a replacement, since PMD fails to load a ruleset that references a rule it does not know. 
* [org.openrewrite.java.pmd.ReplacePmdRule](https://docs.openrewrite.org/recipes/java/pmd/replacepmdrule): Updates `<rule ref="..."/>` references and `<exclude name="..."/>` elements in PMD ruleset XML files to name a rule's replacement. An `<exclude>` is only renamed when the replacement lives in the same ruleset file, because an exclusion can only name a rule from the ruleset its enclosing `<rule>` refers to; when the replacement moved to another ruleset file the exclusion no longer names a rule PMD knows, so it is removed instead. 

## Changed Recipes

* [org.apache.camel.upgrade.customRecipes.ChangeComponentUriRecipe](https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/changecomponenturirecipe) was changed:
  * Old Options:
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
  * New Options:
    * `consumerOnly: { type: Boolean, required: false }`
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
* [org.apache.camel.upgrade.customRecipes.internal.ChangeJavaComponentUriRecipe](https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/internal/changejavacomponenturirecipe) was changed:
  * Old Options:
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
  * New Options:
    * `consumerOnly: { type: Boolean, required: false }`
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
* [org.apache.camel.upgrade.customRecipes.internal.ChangeXmlComponentUriRecipe](https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/internal/changexmlcomponenturirecipe) was changed:
  * Old Options:
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
  * New Options:
    * `consumerOnly: { type: Boolean, required: false }`
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
* [org.apache.camel.upgrade.customRecipes.internal.ChangeYamlComponentUriRecipe](https://docs.openrewrite.org/recipes/apache/camel/upgrade/customrecipes/internal/changeyamlcomponenturirecipe) was changed:
  * Old Options:
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`
  * New Options:
    * `consumerOnly: { type: Boolean, required: false }`
    * `replacement: { type: String, required: true }`
    * `uriPattern: { type: String, required: true }`