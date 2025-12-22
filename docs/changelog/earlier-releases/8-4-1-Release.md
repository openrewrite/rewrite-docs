---
description: What's changed in OpenRewrite version 8.4.1.
---

# 8.4.1 release (2023-08-28)

## New Recipes

* org.openrewrite.java.logging.slf4j.ChangeLogLevel: Change the log level of slf4j log statements. 
* org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtils`. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusFileUtils`. 
* org.openrewrite.java.security.search.FindSensitiveApiEndpoints: Find data models exposed by REST APIs that contain sensitive information like PII and secrets. 
* org.openrewrite.jenkins.github.AddTeamToCodeowners: Adds the `{artifactId}-plugin-developers` team to all files in `.github/CODEOWNERS` if absent. 
* org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString: `hudson.Util.getPastTimeString` has been deprecated since the 2.204.1 LTS release on 2019-12-18. 
* org.openrewrite.staticanalysis.TernaryOperatorsShouldNotBeNested: Nested ternary operators can be hard to read quickly. Prefer simpler constructs for improved readability. If supported, this recipe will try to replace nested ternaries with switch expressions. 

## Changed Recipes

* org.openrewrite.maven.AddGradleEnterpriseMavenExtension was changed:
  * Old Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureGoalInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: true }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureGoalInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: true }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: false }`