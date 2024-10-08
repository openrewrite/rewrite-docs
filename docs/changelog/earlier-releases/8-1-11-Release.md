# 8.1.11 release (2023-07-20)

## New Recipes

* org.openrewrite.FindLstProvenance: Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST. 
* org.openrewrite.github.AddCronTrigger: The `schedule` event allows you to trigger a workflow at a scheduled time. 

## Changed Recipes

* org.openrewrite.gradle.UpgradeDependencyVersion was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin was changed:
  * Old Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureTaskInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: false }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureTaskInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: false }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: false }`
* org.openrewrite.gradle.plugins.AddSettingsPlugin was changed:
  * Old Options:
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `pluginId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.gradle.plugins.UpgradePluginVersion was changed:
  * Old Options:
    * `newVersion: { type: String, required: true }`
    * `pluginIdPattern: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `newVersion: { type: String, required: false }`
    * `pluginIdPattern: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.java.RemoveImplements was changed:
  * Old Options:
    * `filter: { type: String, required: true }`
    * `interfaceType: { type: String, required: true }`
  * New Options:
    * `filter: { type: String, required: false }`
    * `interfaceType: { type: String, required: true }`
* org.openrewrite.java.ReorderMethodArguments was changed:
  * Old Options:
    * `ignoreDefinition: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`
    * `newParameterNames: { type: String[], required: true }`
    * `oldParameterNames: { type: String[], required: false }`
  * New Options:
    * `ignoreDefinition: { type: Boolean, required: false }`
    * `matchOverrides: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`
    * `newParameterNames: { type: String[], required: true }`
    * `oldParameterNames: { type: String[], required: false }`
* org.openrewrite.java.SimplifyMethodChain was changed:
  * Old Options:
    * `methodPatternChain: { type: List, required: true }`
    * `newMethodName: { type: String, required: true }`
  * New Options:
    * `matchOverrides: { type: Boolean, required: false }`
    * `methodPatternChain: { type: List, required: true }`
    * `newMethodName: { type: String, required: true }`
* org.openrewrite.java.search.ResultOfMethodCallIgnored was changed:
  * Old Options:
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `matchOverrides: { type: Boolean, required: false }`
    * `methodPattern: { type: String, required: true }`