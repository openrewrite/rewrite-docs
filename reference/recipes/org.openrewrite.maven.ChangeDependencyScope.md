# Change Maven dependency scope

**org.openrewrite.maven.ChangeDependencyScope**  
_Add or alter the scope of the specified dependency_

### Options

* groupId: String!
	* The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
	* The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* newScope: String
	* Scope to apply to specified Maven dependency. May be omitted, which indicates that no scope should be added and any existing scope be removed from the dependency.

