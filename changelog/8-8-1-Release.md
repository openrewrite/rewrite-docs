# 8.8.1 release (2023-10-26)

## New Recipes

* [org.openrewrite.maven.cleanup.ExplicitPluginVersion](https://docs.openrewrite.org/recipes/maven/cleanup/explicitpluginversion): Add explicit plugin versions to POMs for reproducibility, as [MNG-4173](https://issues.apache.org/jira/browse/MNG-4173) removes automatic version resolution for POM plugins. 

## Changed Recipes

* [org.openrewrite.gradle.AddDependency](https://docs.openrewrite.org/recipes/gradle/adddependency) was changed:
  * Old Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `configuration: { type: String, required: false }`
    * `extension: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.AddDependency](https://docs.openrewrite.org/recipes/maven/adddependency) was changed:
  * Old Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: true }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `acceptTransitive: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `classifier: { type: String, required: false }`
    * `familyPattern: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `onlyIfUsing: { type: String, required: false }`
    * `optional: { type: Boolean, required: false }`
    * `releasesOnly: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
    * `type: { type: String, required: false }`
    * `version: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.UpgradePluginVersion](https://docs.openrewrite.org/recipes/maven/upgradepluginversion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `trustParent: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `addVersionIfMissing: { type: Boolean, required: false }`
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `trustParent: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`