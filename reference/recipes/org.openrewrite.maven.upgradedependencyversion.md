# Upgrade Maven dependency version

**org.openrewrite.maven.UpgradeDependencyVersion**  
_Upgrade the version a group or group and artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Options

* groupId: String!
  * Group ID of dependency to upgrade.\*
* artifactId: String
  * Artifact ID of dependency to upgrade.\*
* newVersion: String!
  * Version to upgrade dependency to. Supports Node Semver range syntax.\*
* versionPattern: String
  * A regular expression used to validate the metadata of a version number. e.g.: "-jre" ensures that version "1.0.0-jre" would be selected instead of "1.0.0-android" \*

