# Change Maven dependency scope

**org.openrewrite.maven.ChangeDependencyScope**  
_Add or alter the scope of the specified dependency_

## Options

* groupId: String!
  * \*
* artifactId: String!
  * \*
* newScope: String!
  * Scope to apply to specified Maven dependency. May be null, which indicates that no scope should be added and any existing scope be removed from the dependency.\*

