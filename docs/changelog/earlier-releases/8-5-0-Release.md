# 8.5.0 release (2023-09-12)

## New Recipes

* org.openrewrite.gradle.ChangeExtraProperty: Gradle's ExtraPropertiesExtension is a commonly used mechanism for setting arbitrary key/value pairs on a project. This recipe will change the value of a property with the given key name if that key can be found. It assumes that the value being set is a String literal. Does not add the value if it does not already exist. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes: Refaster template recipes for `org.openrewrite.java.migrate.lang.StringRules`. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtils`. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`. 
* org.openrewrite.java.search.FindMethodDeclaration: Locates the declaration of a method. 
* org.openrewrite.java.security.OwaspA01: OWASP A01:2021 describes failures related to broken access  control. 
* org.openrewrite.java.security.OwaspA02: OWASP A02:2021 describes failures related to cryptography  (or lack thereof), which often lead to exposure of sensitive data. This recipe seeks to remediate these vulnerabilities. 
* org.openrewrite.java.security.OwaspA03: OWASP A03:2021 describes failures related to user-supplied data being used to influence program state to operate outside of its intended bounds. This recipe seeks to remediate these vulnerabilities. 
* org.openrewrite.java.security.OwaspA05: OWASP A05:2021 describes failures related to security  misconfiguration. 
* org.openrewrite.java.security.OwaspA06: OWASP A06:2021 describes failures related to  vulnerable and outdated components. 
* org.openrewrite.java.security.OwaspA08: OWASP A08:2021 software and data integrity  failures. 
* org.openrewrite.java.security.OwaspA10: OWASP A10:2021 Server-Side Request Forgery (SSRF) 
* org.openrewrite.java.security.OwaspTopTen: OWASP publishes a list of the most impactful common security vulnerabilities.  These recipes identify and remediate vulnerabilities from the OWASP Top Ten. 
* org.openrewrite.maven.ChangeProjectVersion: Change the project version of a Maven pom.xml. Identifies the project to be changed by its groupId and artifactId. If the version is defined as a property, this recipe will only change the property value if the property exists within the same pom. 
* org.openrewrite.micrometer.TimerToObservation: Convert Micrometer Timer to Observations. 

## Removed Recipes

* **org.openrewrite.java.search.FindCallGraph**: Produce the call graph describing the relationships between methods. 

## Changed Recipes

* org.openrewrite.text.FindAndReplace was changed:
  * Old Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: true }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
    * `replace: { type: String, required: true }`
* org.openrewrite.gradle.plugins.AddSettingsPluginRepository was changed:
  * Old Options:
    * `type: { type: String, required: true }`
    * `url: { type: String, required: true }`
  * New Options:
    * `type: { type: String, required: true }`
    * `url: { type: String, required: false }`
* org.openrewrite.maven.ChangeParentPom was changed:
  * Old Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newRelativePath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `oldRelativePath: { type: String, required: false }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`