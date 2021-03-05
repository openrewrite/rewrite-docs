# Upgrade Maven parent project version

**org.openrewrite.maven.UpgradeParentVersion**  
_Set the parent pom version number according to a node-style semver selector or to a specific version number._

### Options

* groupId: String!
	* The first part of a dependency coordinate 'org.springframework.boot:spring-boot-parent:VERSION'.
* artifactId: String!
	* The second part of a dependency coordinate 'org.springframework.boot:spring-boot-parent:VERSION'.
* newVersion: String!
	* An exact version number, or node-style semver selector used to select the version number.
* versionPattern: String
	* Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre

