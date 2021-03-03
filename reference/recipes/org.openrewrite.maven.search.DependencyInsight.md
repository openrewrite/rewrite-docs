# Maven dependency insight

---
**org.openrewrite.maven.search.DependencyInsight**  
*Find direct and transitive dependencies matching groupIdPattern, artifactIdPattern, and scope. Marks are places on first order dependencies that either directly match or transitively include a matching dependency.*
## Options
- groupIdPattern: String!
	- Group glob pattern used to match dependencies.*
- artifactIdPattern: String!
	- Artifact glob pattern used to match dependencies.*
- scope: String!
	- Match dependencies with the specified scope*
