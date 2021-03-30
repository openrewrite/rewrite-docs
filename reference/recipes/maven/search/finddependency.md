# Find Maven dependency

**org.openrewrite.maven.search.FindDependency**  
_Finds first-order dependency uses, i.e. dependencies that are defined directly in a project._

### Options

* groupId: String!
  * The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
  * The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.

