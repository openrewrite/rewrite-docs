# Manage dependencies

**org.openrewrite.maven.ManageDependencies**  
_Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM._

## Options

* groupPattern: String!
  * GroupId regular expression pattern used to match dependencies that should be managed.\*
* artifactPattern: String
  * ArtifactId regular expression pattern used to match dependencies that should be managed.\*
* version: String
  * Version to use for the dependency in dependency management. Defaults to the existing version found on the matching dependency.\*

