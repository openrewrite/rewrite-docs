# Upgrade Maven parent project version

**org.openrewrite.maven.UpgradeParentVersion**  
_Set the parent pom version number according to a node-style semver selector or to a specific version number_

## Options

* groupId: String!
  * Group ID of parent to upgrade.\*
* artifactId: String!
  * Artifact ID of parent to upgrade.\*
* newVersion: String!
  * An exact version number, or node-style semver selector used to select the version number\*
* versionPattern: String
  * A regular expression used to validate the metadata of a version number. e.g.: "-jre" ensures that version "1.0.0-jre" would be selected instead of "1.0.0-android" \*

