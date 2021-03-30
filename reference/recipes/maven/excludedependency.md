# Exclude Maven dependency

**org.openrewrite.maven.ExcludeDependency**  
_Exclude specified dependency from any dependency that transitively includes it._

### Options

* groupId: String!
  * The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
  * The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* scope: String
  * Match dependencies with the specified scope. If you specify `compile`, this will NOT match dependencies in `runtime`. The purpose of this is to be able to exclude dependencies that should be in a higher scope, e.g. a compile dependency that should be a test dependency.

