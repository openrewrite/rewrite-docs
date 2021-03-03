# Add Maven dependency

---
**org.openrewrite.maven.AddDependency**  
**
## Options
- groupId: String!
	- *
- artifactId: String!
	- *
- version: String!
	- An exact version number, or node-style semver selector used to select the version number.*
- versionPattern: String
	- Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre*
- releasesOnly: boolean
	- When set to 'true' snapshots are excluded from consideration. Defaults to 'true'*
- classifier: String
	- *
- scope: String
	- *
- type: String
	- *
- familyPattern: String
	- A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character.*
