# Exclude Maven dependency

**org.openrewrite.maven.ExcludeDependency**  
_Exclude specified dependency from any dependency that transitively includes it._

### Options

* groupId: String!
	* The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
	* The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.

