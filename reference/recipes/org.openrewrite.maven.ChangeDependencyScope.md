# Change Maven dependency scope

---
**org.openrewrite.maven.ChangeDependencyScope**  
*Add or alter the scope of the specified dependency*
## Options
- groupId: String!
	- *
- artifactId: String!
	- *
- newScope: String!
	- Scope to apply to specified Maven dependency. May be null, which indicates that no scope should be added and any existing scope be removed from the dependency.*
