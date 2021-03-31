# Maven dependency insight

**org.openrewrite.maven.search.DependencyInsight**  
_Find direct and transitive dependencies matching a group, artifact, and scope. Results include dependencies that either directly match or transitively include a matching dependency._

## Options

* groupIdPattern: String!
  * Group glob pattern used to match dependencies.
* artifactIdPattern: String!
  * Artifact glob pattern used to match dependencies.
* scope: String!
  * Match dependencies with the specified scope

