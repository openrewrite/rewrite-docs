# Add Maven dependency

**org.openrewrite.maven.AddDependency**  

### Options

* groupId: String!
  * The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
  * The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* version: String!
  * An exact version number, or node-style semver selector used to select the version number.
* versionPattern: String
  * Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre
* releasesOnly: boolean
  * Whether to exclude snapshots from consideration.
* classifier: String
  * A Maven classifier to add. Most commonly used to select shaded or test variants of a library
* scope: String
* type: String
* familyPattern: String
  * A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character.
* onlyIfUsing: List
  * Add the dependency only if using one of the supplied types. Types should be identified by fully qualified class name or a glob expression

