# Remove Maven dependency

**org.openrewrite.maven.RemoveDependency**  
_Removes a single dependency from the <dependencies> section of the pom.xml._

### Options

* groupId: String!
	* The first part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* artifactId: String!
	* The second part of a dependency coordinate 'com.google.guava:guava:VERSION'.
* scope: String
	* Only remove dependencies if they are in this scope. If 'runtime', this willalso remove dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set

