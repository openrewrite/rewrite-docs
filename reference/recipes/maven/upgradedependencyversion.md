# Upgrade Maven dependency version

**org.openrewrite.maven.UpgradeDependencyVersion**  
_Upgrade the version a group or group and artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Options

* groupId: String!
  * The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
  * The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* newVersion: String!
  * An exact version number, or node-style semver selector used to select the version number.
* versionPattern: String
  * Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre

