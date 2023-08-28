# 8.4.1 release (2023-08-28)

## New Recipes

* [org.openrewrite.java.logging.slf4j.ChangeLogLevel](https://docs.openrewrite.org/reference/recipes/java/logging/slf4j/changeloglevel): Change the log level of slf4j log statements. 
* [org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes](https://docs.openrewrite.org/reference/recipes/java/migrate/apache/commons/io/apachecommonsfileutilsrecipes): Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtils`. 
* [org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes](https://docs.openrewrite.org/reference/recipes/java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes): Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`. 
* [org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes](https://docs.openrewrite.org/reference/recipes/java/migrate/plexus/plexusfileutilsrecipes): Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusFileUtils`. 
* [org.openrewrite.java.security.search.FindSensitiveApiEndpoints](https://docs.openrewrite.org/reference/recipes/java/security/search/findsensitiveapiendpoints): Find data models exposed by REST APIs that contain sensitive information like PII and secrets. 
* [org.openrewrite.jenkins.github.AddTeamToCodeowners](https://docs.openrewrite.org/reference/recipes/jenkins/github/addteamtocodeowners): Adds the `{artifactId}-plugin-developers` team to all files in `.github/CODEOWNERS` if absent. 
* [org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString](https://docs.openrewrite.org/reference/recipes/jenkins/migrate/hudson/utilgetpasttimestringtogettimespanstring): `hudson.Util.getPastTimeString` has been [deprecated](https://github.com/jenkinsci/jenkins/pull/4174) since the [2.204.1 LTS release](https://www.jenkins.io/changelog-stable/#v2.204.1) on 2019-12-18. 
* [org.openrewrite.staticanalysis.TernaryOperatorsShouldNotBeNested](https://docs.openrewrite.org/reference/recipes/staticanalysis/ternaryoperatorsshouldnotbenested): Nested ternary operators can be hard to read quickly. Prefer simpler constructs for improved readability. If supported, this recipe will try to replace nested ternaries with switch expressions. 

## Changed Recipes

* [org.openrewrite.maven.AddGradleEnterpriseMavenExtension](https://docs.openrewrite.org/reference/recipes/maven/addgradleenterprisemavenextension) was changed:
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