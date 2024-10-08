# 8.1.8 release (2023-07-13)

## New Artifacts
* rewrite-jenkins

## New Recipes

* org.openrewrite.jenkins.AddPluginsBom: Adds Jenkins plugins BOM at the latest release if the project depends on any managed versions. BOMs are expected to be synchronized to Jenkins LTS versions, so this will also remove any mismatched BOMs (Such as using Jenkins 2.387.3, but importing bom-2.319.x). If the expected BOM is already added, the version will not be upgraded. 
* org.openrewrite.jenkins.CommonsLang3ToApiPlugin: Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively. 
* org.openrewrite.jenkins.CreateIndexJelly: The Jenkins tooling has changed over the years to enforce that a `src/main/resources/index.jelly` exists with a description. If you don't have this, the build fails. 
* org.openrewrite.jenkins.DisableLocalResolutionForParentPom: Explicitly sets `<relativePath/>` to disable file resolution, as recommended in the plugin development guide. 
* org.openrewrite.jenkins.IsJenkinsPlugin: Checks if the project is a Jenkins plugin by the presence of a managed version of jenkins-core 
* org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs: SpotBugs is the preferred replacement of JSR-305 annotations. 
* org.openrewrite.jenkins.ModernizeJenkinsfile: Updates `Jenkinsfile` to build with recommended Java versions, platforms, and settings. 
* org.openrewrite.jenkins.ModernizePlugin: This recipe is intended to change over time to reflect the most recent tooling and recommended Jenkins baseline. 
* org.openrewrite.jenkins.ModernizePluginForJava8: This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11. 
* org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin: Prefer Jenkins API plugins over bundling libraries for slimmer plugins. 
* org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0: Automates the HtmlUnit migration guide from 2.x to 3.x. This change was brought in by parent 4.66. 
* org.openrewrite.jenkins.UpgradeVersionProperty: If the current value is a version < given version, upgrade it. 
* org.openrewrite.maven.search.FindRepositoryOrder: Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`. 
* org.openrewrite.search.FindBuildMetadata: Find source files with matching build metadata. 

## Changed Recipes

* org.openrewrite.FindParseFailures was changed:
  * Old Options:
    * `maxSnippetLength: { type: Integer, required: false }`
  * New Options:
    * `maxSnippetLength: { type: Integer, required: false }`
    * `parserType: { type: String, required: false }`
    * `stackTrace: { type: String, required: false }`