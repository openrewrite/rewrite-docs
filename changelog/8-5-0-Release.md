# 8.5.0 release (2023-09-12)

## New Recipes

* [org.openrewrite.gradle.ChangeExtraProperty](https://docs.openrewrite.org/recipes/gradle/changeextraproperty): Gradle's [ExtraPropertiesExtension](https://docs.gradle.org/current/dsl/org.gradle.api.plugins.ExtraPropertiesExtension.html) is a commonly used mechanism for setting arbitrary key/value pairs on a project. This recipe will change the value of a property with the given key name if that key can be found. It assumes that the value being set is a String literal. Does not add the value if it does not already exist. 
* [org.openrewrite.java.migrate.lang.StringRulesRecipes](https://docs.openrewrite.org/recipes/java/migrate/lang/stringrulesrecipes): Refaster template recipes for `org.openrewrite.java.migrate.lang.StringRules`. 
* [org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes](https://docs.openrewrite.org/recipes/java/migrate/maven/shared/mavensharedstringutilsrecipes): Refaster template recipes for `org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtils`. 
* [org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes](https://docs.openrewrite.org/recipes/java/migrate/plexus/plexusstringutilsrecipes): Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`. 
* [org.openrewrite.java.search.FindMethodDeclaration](https://docs.openrewrite.org/recipes/java/search/findmethoddeclaration): Locates the declaration of a method. 
* [org.openrewrite.java.security.OwaspA01](https://docs.openrewrite.org/recipes/java/security/owaspa01): OWASP [A01:2021](https://owasp.org/Top10/A01_2021-Broken_Access_Control/) describes failures related to broken access  control. 
* [org.openrewrite.java.security.OwaspA02](https://docs.openrewrite.org/recipes/java/security/owaspa02): OWASP [A02:2021](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/) describes failures related to cryptography  (or lack thereof), which often lead to exposure of sensitive data. This recipe seeks to remediate these vulnerabilities. 
* [org.openrewrite.java.security.OwaspA03](https://docs.openrewrite.org/recipes/java/security/owaspa03): OWASP [A03:2021](https://owasp.org/Top10/A03_2021-Injection/) describes failures related to user-supplied data being used to influence program state to operate outside of its intended bounds. This recipe seeks to remediate these vulnerabilities. 
* [org.openrewrite.java.security.OwaspA05](https://docs.openrewrite.org/recipes/java/security/owaspa05): OWASP [A05:2021](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/) describes failures related to security  misconfiguration. 
* [org.openrewrite.java.security.OwaspA06](https://docs.openrewrite.org/recipes/java/security/owaspa06): OWASP [A06:2021](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/) describes failures related to  vulnerable and outdated components. 
* [org.openrewrite.java.security.OwaspA08](https://docs.openrewrite.org/recipes/java/security/owaspa08): OWASP [A08:2021](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/) software and data integrity  failures. 
* [org.openrewrite.java.security.OwaspA10](https://docs.openrewrite.org/recipes/java/security/owaspa10): OWASP [A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/) Server-Side Request Forgery (SSRF) 
* [org.openrewrite.java.security.OwaspTopTen](https://docs.openrewrite.org/recipes/java/security/owasptopten): [OWASP](https://owasp.org) publishes a list of the most impactful common security vulnerabilities.  These recipes identify and remediate vulnerabilities from the OWASP Top Ten. 
* [org.openrewrite.maven.ChangeProjectVersion](https://docs.openrewrite.org/recipes/maven/changeprojectversion): Change the project version of a Maven pom.xml. Identifies the project to be changed by its groupId and artifactId. If the version is defined as a property, this recipe will only change the property value if the property exists within the same pom. 
* [org.openrewrite.micrometer.TimerToObservation](https://docs.openrewrite.org/recipes/micrometer/timertoobservation): Convert Micrometer Timer to Observations. 

## Removed Recipes

* **org.openrewrite.java.search.FindCallGraph**: Produce the call graph describing the relationships between methods. 

## Changed Recipes

* [org.openrewrite.text.FindAndReplace](https://docs.openrewrite.org/recipes/text/findandreplace) was changed:
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
* [org.openrewrite.gradle.plugins.AddSettingsPluginRepository](https://docs.openrewrite.org/recipes/gradle/plugins/addsettingspluginrepository) was changed:
  * Old Options:
    * `type: { type: String, required: true }`
    * `url: { type: String, required: true }`
  * New Options:
    * `type: { type: String, required: true }`
    * `url: { type: String, required: false }`
* [org.openrewrite.maven.ChangeParentPom](https://docs.openrewrite.org/recipes/maven/changeparentpom) was changed:
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