# Manage dependencies

**org.openrewrite.maven.ManageDependencies**  
_Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM._

### Options

* groupPattern: String!
  * Group glob expression pattern used to match dependencies that should be managed.Group is the the first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactPattern: String
  * Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* version: String
  * Version to use for the dependency in dependency management. Defaults to the existing version found on the matching dependency.

