# 8.1.8 release (2023-07-13)

## New Artifacts
* rewrite-jenkins

## New Recipes

* [org.openrewrite.jenkins.AddPluginsBom](https://docs.openrewrite.org/reference/recipes/jenkins/addpluginsbom): Adds [Jenkins plugins BOM](https://www.jenkins.io/doc/developer/plugin-development/dependency-management/#jenkins-plugin-bom) at the latest release if the project depends on any managed versions. BOMs are expected to be synchronized to Jenkins LTS versions, so this will also remove any mismatched BOMs (Such as using Jenkins 2.387.3, but importing bom-2.319.x). If the expected BOM is already added, the version will not be upgraded. 
* [org.openrewrite.jenkins.CommonsLang3ToApiPlugin](https://docs.openrewrite.org/reference/recipes/jenkins/commonslang3toapiplugin): Updates `pom.xml` to depend on `commons-lang3-api` and exclude `commons-lang3` where it is brought in transitively. 
* [org.openrewrite.jenkins.CreateIndexJelly](https://docs.openrewrite.org/reference/recipes/jenkins/createindexjelly): The Jenkins tooling has changed over the years to [enforce](https://github.com/jenkinsci/maven-hpi-plugin/pull/302) that a `src/main/resources/index.jelly` exists with a description. If you don't have this, the build fails. 
* [org.openrewrite.jenkins.DisableLocalResolutionForParentPom](https://docs.openrewrite.org/reference/recipes/jenkins/disablelocalresolutionforparentpom): Explicitly sets `<relativePath/>` to disable file resolution, as recommended in the [plugin development guide](https://www.jenkins.io/doc/developer/plugin-development/updating-parent/). 
* [org.openrewrite.jenkins.IsJenkinsPlugin](https://docs.openrewrite.org/reference/recipes/jenkins/isjenkinsplugin): Checks if the project is a Jenkins plugin by the presence of a managed version of jenkins-core 
* [org.openrewrite.jenkins.JavaxAnnotationsToSpotbugs](https://docs.openrewrite.org/reference/recipes/jenkins/javaxannotationstospotbugs): SpotBugs is the [preferred replacement](https://www.jenkins.io/doc/developer/tutorial-improve/replace-jsr-305-annotations/) of JSR-305 annotations. 
* [org.openrewrite.jenkins.ModernizeJenkinsfile](https://docs.openrewrite.org/reference/recipes/jenkins/modernizejenkinsfile): Updates `Jenkinsfile` to build with recommended Java versions, platforms, and settings. 
* [org.openrewrite.jenkins.ModernizePlugin](https://docs.openrewrite.org/reference/recipes/jenkins/modernizeplugin): This recipe is intended to change over time to reflect the most recent tooling and [recommended Jenkins baseline](https://www.jenkins.io/doc/developer/plugin-development/choosing-jenkins-baseline/). 
* [org.openrewrite.jenkins.ModernizePluginForJava8](https://docs.openrewrite.org/reference/recipes/jenkins/modernizepluginforjava8): This recipe is intended to break down the modernization of very old plugins into distinct steps. It allows modernizing all tooling up to the last versions that supported Java 8. This can then be followed by another recipe that makes the jump to Java 11. 
* [org.openrewrite.jenkins.ReplaceLibrariesWithApiPlugin](https://docs.openrewrite.org/reference/recipes/jenkins/replacelibrarieswithapiplugin): Prefer Jenkins API plugins over bundling libraries for slimmer plugins. 
* [org.openrewrite.jenkins.UpgradeHtmlUnit_3_3_0](https://docs.openrewrite.org/reference/recipes/jenkins/upgradehtmlunit_3_3_0): Automates the HtmlUnit [migration guide](https://htmlunit.sourceforge.io/migration.html) from 2.x to 3.x. This change was brought in by [parent 4.66](https://github.com/jenkinsci/plugin-pom/releases/tag/plugin-4.66). 
* [org.openrewrite.jenkins.UpgradeVersionProperty](https://docs.openrewrite.org/reference/recipes/jenkins/upgradeversionproperty): If the current value is a version < given version, upgrade it. 
* [org.openrewrite.maven.search.FindRepositoryOrder](https://docs.openrewrite.org/reference/recipes/maven/search/findrepositoryorder): Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`. 
* [org.openrewrite.search.FindBuildMetadata](https://docs.openrewrite.org/reference/recipes/search/findbuildmetadata): Find source files with matching build metadata. 

## Changed Recipes

* [org.openrewrite.FindParseFailures](https://docs.openrewrite.org/reference/recipes/findparsefailures) was changed:
  * Old Options:
    * `maxSnippetLength: { type: Integer, required: false }`
  * New Options:
    * `maxSnippetLength: { type: Integer, required: false }`
    * `parserType: { type: String, required: false }`
    * `stackTrace: { type: String, required: false }`