# Recipes with Data Tables

_This doc contains all of the recipes with **unique** data tables that have been explicitly added by the recipe author. If a recipe contains only the default data tables, it won't be included in this list._

### [Find colliding source files](../recipes/core/findcollidingsourcefiles)
 
_org.openrewrite.FindCollidingSourceFiles_

Finds source files which share a path with another source file. There should always be exactly one source file per path within a repository. This is a diagnostic for finding problems in OpenRewrite parsers/build plugins.

#### Data tables:

  * **org.openrewrite.table.CollidingSourceFiles**: *Source files that have the same relative path.*


### [Find deserialization errors](../recipes/core/finddeserializationerrors)
 
_org.openrewrite.FindDeserializationErrors_

Produces a data table collecting all deserialization errors of serialized LSTs.

#### Data tables:

  * **org.openrewrite.table.DeserializationErrorTable**: *Table collecting any LST deserialization errors.*


### [Show Git source control metadata](../recipes/core/findgitprovenance)
 
_org.openrewrite.FindGitProvenance_

List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.

#### Data tables:

  * **org.openrewrite.table.DistinctGitProvenance**: *List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.*


### [Find LST provenance](../recipes/core/findlstprovenance)
 
_org.openrewrite.FindLstProvenance_

Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST.

#### Data tables:

  * **org.openrewrite.table.LstProvenanceTable**: *Table showing which tools were used to produce LSTs.*


### [Find source files with `ParseExceptionResult` markers](../recipes/core/findparsefailures)
 
_org.openrewrite.FindParseFailures_

This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.

#### Data tables:

  * **org.openrewrite.table.ParseFailures**: *A list of files that failed to parse along with stack traces of their failures.*


### [Find files](../recipes/core/findsourcefiles)
 
_org.openrewrite.FindSourceFiles_

Find files by source path.

#### Data tables:

  * **org.openrewrite.table.SourcesFiles**: *Source files that matched some criteria.*


### [List runtime classpath](../recipes/core/listruntimeclasspath)
 
_org.openrewrite.ListRuntimeClasspath_

A diagnostic utility which emits the runtime classpath to a data table.

#### Data tables:

  * **org.openrewrite.table.ClasspathReport**: *Contains a report of the runtime classpath and any other jars found inside each classpath entry.*


### [Find committers on repositories](../recipes/search/findcommitters)
 
_org.openrewrite.search.FindCommitters_

List the committers on a repository.

#### Data tables:

  * **org.openrewrite.table.DistinctCommitters**: *The distinct set of committers per repository.*
  * **org.openrewrite.table.CommitsByDay**: *The commit activity by day by committer.*


### [Find parse to print inequality](../recipes/search/findparsetoprintinequality)
 
_org.openrewrite.search.FindParseToPrintInequality_

OpenRewrite `Parser` implementations should produce `SourceFile` objects whose `printAll()` method should be byte-for-byte equivalent with the original source file. When this isn't true, recipes can still run on the `SourceFile` and even produce diffs, but the diffs would fail to apply as a patch to the original source file. Most `Parser` use `Parser#requirePrintEqualsInput` to produce a `ParseError` when they fail to produce a `SourceFile` that is print idempotent.

#### Data tables:

  * **org.openrewrite.table.ParseToPrintInequalities**: *A list of files that parsers produced `SourceFile` which, when printed, didn't match the original source code.*


### [Find text](../recipes/text/find)
 
_org.openrewrite.text.Find_

Textual search, optionally using Regular Expression (regex) to query.

#### Data tables:

  * **org.openrewrite.table.TextMatches**: *Lines matching simple text search.*


### [Upgrade transitive Gradle dependencies](../recipes/gradle/upgradetransitivedependencyversion)
 
_org.openrewrite.gradle.UpgradeTransitiveDependencyVersion_

Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Add the Develocity Gradle plugin](../recipes/gradle/plugins/adddevelocitygradleplugin)
 
_org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin_

Add the Develocity Gradle plugin to settings.gradle files.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Gradle dependency insight](../recipes/gradle/search/dependencyinsight)
 
_org.openrewrite.gradle.search.DependencyInsight_

Find direct and transitive dependencies matching a group, artifact, and optionally a configuration name. Results include dependencies that either directly match or transitively include a matching dependency.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Find Gradle wrappers](../recipes/gradle/search/findgradlewrapper)
 
_org.openrewrite.gradle.search.FindGradleWrapper_

Find Gradle wrappers.

#### Data tables:

  * **org.openrewrite.gradle.table.GradleWrappersInUse**: *Gradle wrappers in use.*


### [Add Gradle dependency](../recipes/gradle/adddependency)
 
_org.openrewrite.gradle.AddDependency_

Add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Upgrade Gradle dependency versions](../recipes/gradle/upgradedependencyversion)
 
_org.openrewrite.gradle.UpgradeDependencyVersion_

Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Calculate token length of classes](../recipes/java/ai/classdefinitionlength)
 
_org.openrewrite.java.ai.ClassDefinitionLength_

Locates class definitions and predicts the number of token in each.

#### Data tables:

  * **org.openrewrite.java.table.TokenCount**: *The number of tokens from a code snippet*


### [Calculate token length of method definitions](../recipes/java/ai/methoddefinitionlength)
 
_org.openrewrite.java.ai.MethodDefinitionLength_

Locates method definitions and predicts the number of token in each.

#### Data tables:

  * **org.openrewrite.java.table.TokenCount**: *The number of tokens from a code snippet*


### [Find OpenRewrite recipes](../recipes/java/recipes/findrecipes)
 
_org.openrewrite.java.recipes.FindRecipes_

This recipe finds all OpenRewrite recipes, primarily to produce a data table that is being used to experiment with fine-tuning a large language model to produce more recipes.

#### Data tables:

  * **org.openrewrite.table.RewriteRecipeSource**: *This table contains the source code of recipes along with their metadata for use in an experiment fine-tuning large language models to produce more recipes.*


### [Find class hierarchy](../recipes/java/search/findclasshierarchy)
 
_org.openrewrite.java.search.FindClassHierarchy_

Discovers all class declarations within a project, recording which files they appear in, their superclasses, and interfaces. That information is then recorded in a data table.

#### Data tables:

  * **org.openrewrite.java.table.ClassHierarchy**: *Record the classes*


### [Find uses of deprecated methods](../recipes/java/search/finddeprecatedmethods)
 
_org.openrewrite.java.search.FindDeprecatedMethods_

Find uses of deprecated methods in any API.

#### Data tables:

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


### [Find method usages](../recipes/java/search/findmethods)
 
_org.openrewrite.java.search.FindMethods_

Find method calls by pattern.

#### Data tables:

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


### [Find types](../recipes/java/search/findtypes)
 
_org.openrewrite.java.search.FindTypes_

Find type references by name.

#### Data tables:

  * **org.openrewrite.java.table.TypeUses**: *The source code of matching type uses.*


### [Study the size of the classpath by source set](../recipes/java/search/classpathtypecounts)
 
_org.openrewrite.java.search.ClasspathTypeCounts_

Emit one data table row per source set in a project, with the number of types in the source set.

#### Data tables:

  * **org.openrewrite.java.table.ClasspathTypeCount**: *The number of types in each source set in a project's classpath.*


### [Find type mappings](../recipes/java/search/findtypemappings)
 
_org.openrewrite.java.search.FindTypeMappings_

Study the frequency of `J` types and their `JavaType` type attribution.

#### Data tables:

  * **org.openrewrite.java.table.TypeMappings**: *The types mapped to `J` trees.*


### [Add Maven parent](../recipes/maven/addparentpom)
 
_org.openrewrite.maven.AddParentPom_

Add a parent pom to a Maven pom.xml. Does nothing if a parent pom is already present.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Change Maven dependency](../recipes/maven/changedependencygroupidandartifactid)
 
_org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId_

Change a Maven dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before. Matching `<dependencyManagement>` coordinates are also updated if a `newVersion` or `versionPattern` is provided.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Change Maven managed dependency groupId, artifactId and optionally the version](../recipes/maven/changemanageddependencygroupidandartifactid)
 
_org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId_

Change the groupId, artifactId and optionally the version of a specified Maven managed dependency.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Change Maven parent](../recipes/maven/changeparentpom)
 
_org.openrewrite.maven.ChangeParentPom_

Change the parent pom of a Maven pom.xml. Identifies the parent pom to be changed by its groupId and artifactId.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Change Maven plugin group and artifact ID](../recipes/maven/changeplugingroupidandartifactid)
 
_org.openrewrite.maven.ChangePluginGroupIdAndArtifactId_

Change the groupId and/or the artifactId of a specified Maven plugin.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Upgrade Maven plugin version](../recipes/maven/upgradepluginversion)
 
_org.openrewrite.maven.UpgradePluginVersion_

Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Maven dependency insight](../recipes/maven/search/dependencyinsight)
 
_org.openrewrite.maven.search.DependencyInsight_

Find direct and transitive dependencies matching a group, artifact, and scope. Results include dependencies that either directly match or transitively include a matching dependency.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Effective dependencies](../recipes/maven/search/effectivedependencies)
 
_org.openrewrite.maven.search.EffectiveDependencies_

Emit the data of binary dependency relationships.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Relationships between dependencies.*


### [Effective managed dependencies](../recipes/maven/search/effectivemanageddependencies)
 
_org.openrewrite.maven.search.EffectiveManagedDependencies_

Emit the data of binary dependency relationships.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Relationships between POMs and their ancestors that define managed dependencies.*


### [List effective Maven repositories](../recipes/maven/search/effectivemavenrepositories)
 
_org.openrewrite.maven.search.EffectiveMavenRepositories_

Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the LST was produced.

#### Data tables:

  * **org.openrewrite.maven.search.EffectiveMavenRepositoriesTable**: *Table showing which Maven repositories were used in dependency resolution for this POM.*


### [Find effective maven settings](../recipes/maven/search/findmavensettings)
 
_org.openrewrite.maven.search.FindMavenSettings_

List the effective maven settings file for the current project.

#### Data tables:

  * **org.openrewrite.maven.table.EffectiveMavenSettings**: *The maven settings file used by each pom.*


### [Find Maven project properties](../recipes/maven/search/findproperties)
 
_org.openrewrite.maven.search.FindProperties_

Finds the specified Maven project properties within a pom.xml.

#### Data tables:

  * **org.openrewrite.maven.table.MavenProperties**: *Property and value.*


### [Maven repository order](../recipes/maven/search/findrepositoryorder)
 
_org.openrewrite.maven.search.FindRepositoryOrder_

Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`.

#### Data tables:

  * **org.openrewrite.maven.table.MavenRepositoryOrder**: *The order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`.*


### [Maven parent insight](../recipes/maven/search/parentpominsight)
 
_org.openrewrite.maven.search.ParentPomInsight_

Find Maven parents matching a `groupId` and `artifactId`.

#### Data tables:

  * **org.openrewrite.maven.table.ParentPomsInUse**: *Projects, GAVs and relativePaths for Maven parent POMs in use.*


### [Add Maven dependency](../recipes/maven/adddependency)
 
_org.openrewrite.maven.AddDependency_

Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Add managed Maven dependency](../recipes/maven/addmanageddependency)
 
_org.openrewrite.maven.AddManagedDependency_

Add a managed Maven dependency to a `pom.xml` file.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Upgrade Maven dependency version](../recipes/maven/upgradedependencyversion)
 
_org.openrewrite.maven.UpgradeDependencyVersion_

Upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Upgrade transitive Maven dependencies](../recipes/maven/upgradetransitivedependencyversion)
 
_org.openrewrite.maven.UpgradeTransitiveDependencyVersion_

Upgrades the version of a transitive dependency in a Maven pom file. Leaves direct dependencies unmodified. Can be paired with the regular Upgrade Dependency Version recipe to upgrade a dependency everywhere, regardless of whether it is direct or transitive.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [XML style Auto-detection debug](../recipes/xml/style/autodetectdebug)
 
_org.openrewrite.xml.style.AutodetectDebug_

Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do.

#### Data tables:

  * **org.openrewrite.xml.table.XmlStyleReport**: *Records style information about XML documents. Used for debugging style auto-detection issues.*


### [Find Kotlin sources and collect data metrics](../recipes/kotlin/findkotlinsources)
 
_org.openrewrite.kotlin.FindKotlinSources_

Use data table to collect source files types and counts of files with extensions `.kt`.

#### Data tables:

  * **org.openrewrite.kotlin.table.KotlinSourceFile**: *Kotlin sources present in LSTs on the SAAS.*


### [Find method usages](../recipes/analysis/search/findmethods)
 
_org.openrewrite.analysis.search.FindMethods_

Find method usages by pattern.

#### Data tables:

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


### [Find comments' language distribution](../recipes/io/moderne/ai/findcommentslanguage)
 
_io.moderne.ai.FindCommentsLanguage_

Finds all comments and uses AI to predict which language the comment is in.

#### Data tables:

  * **io.moderne.ai.table.LanguageDistribution**: *Shows the distribution of language in comments*


### [List all methods used](../recipes/io/moderne/ai/listallmethodsused)
 
_io.moderne.ai.ListAllMethodsUsed_

List all methods used in any Java source file.

#### Data tables:

  * **io.moderne.ai.table.MethodInUse**: *Methods used in any Java source file.*


### [Get embeddings for code snippets in code](../recipes/io/moderne/ai/research/getcodeembedding)
 
_io.moderne.ai.research.GetCodeEmbedding_

This recipe calls an AI model to get an embedding for either classes or methods which can then be used for downstream tasks.

#### Data tables:

  * **io.moderne.ai.table.Embeddings**: *Collects the embeddings for either each classes or methods.*


### [Find method invocations that resemble a pattern](../recipes/io/moderne/ai/research/findcodethatresembles)
 
_io.moderne.ai.research.FindCodeThatResembles_

This recipe uses two phase AI approach to find a method invocation that resembles a search string.

#### Data tables:

  * **io.moderne.ai.table.CodeSearch**: *Searches for method invocations that resemble a natural language query.*
  * **io.moderne.ai.table.TopKMethodMatcher**: *Result from the scanning recipe for top-k method patterns that match the query.*
  * **io.moderne.ai.table.EmbeddingPerformance**: *Latency characteristics of uses of embedding models.*
  * **io.moderne.ai.table.GenerativeModelPerformance**: *Latency characteristics of uses of generative models.*
  * **io.moderne.ai.table.SuggestedMethodPatterns**: *As the next step after the AI-based searching for method invocations, you may want to do rule-based method searching using the recommended method patterns.*


### [Get recommendations](../recipes/io/moderne/ai/research/getrecommendations)
 
_io.moderne.ai.research.GetRecommendations_

This recipe calls an AI model to get recommendations for modernizing the code base by looking at a sample of method declarations.

#### Data tables:

  * **io.moderne.ai.table.Recommendations**: *Collects the recommendations based on sampled methods.*


### [Find call graph](../recipes/core/findcallgraph)
 
_org.openrewrite.FindCallGraph_

Produces a data table where each row represents a method call.

#### Data tables:

  * **org.openrewrite.table.CallGraph**: *Records method callers and the methods they invoke.*


### [Find duplicate source files](../recipes/core/findduplicatesourcefiles)
 
_org.openrewrite.FindDuplicateSourceFiles_

Record the presence of LSTs with duplicate paths, indicating that the same file was parsed more than once.

#### Data tables:

  * **org.openrewrite.table.DuplicateSourceFiles**: *A list of source files that occur more than once in an LST.*


### [Language composition report](../recipes/core/languagecomposition)
 
_org.openrewrite.LanguageComposition_

Counts the number of lines of the various kinds of source code and data formats parsed by OpenRewrite. Comments are not included in line counts. This recipe emits its results as two data tables, making no changes to any source file. One data table is per-file, the other is per-repository.

#### Data tables:

  * **org.openrewrite.table.LanguageCompositionPerRepository**: *Counts the number of files and lines of source code in the various formats OpenRewrite knows how to parse.*
  * **org.openrewrite.table.LanguageCompositionPerFolder**: *A list of folders and the language composition and line counts of their contents.*
  * **org.openrewrite.table.LanguageCompositionPerFile**: *A list of individual files and their language composition.*


### [Lint source code with ESLint](../recipes/codemods/eslint)
 
_org.openrewrite.codemods.ESLint_

Run [ESLint](https://eslint.org/) across the code to fix common static analysis issues in the code.

This requires the code to have an existing ESLint configuration.

#### Data tables:

  * **org.openrewrite.codemods.ESLintMessages**: *Errors and warnings as reported by ESLint.*


### [Find uses of docker base images](../recipes/docker/search/finddockerimageuses)
 
_org.openrewrite.docker.search.FindDockerImageUses_

Produce an impact analysis of base images used in Dockerfiles.

#### Data tables:

  * **org.openrewrite.docker.table.DockerBaseImages**: *Records the `FROM` block of Dockerfiles.*


### [Dependency insight for C#](../recipes/csharp/dependencies/dependencyinsight)
 
_org.openrewrite.csharp.dependencies.DependencyInsight_

Finds dependencies in `*.csproj` and `packages.config`.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Dependency insight for Gradle and Maven](../recipes/java/dependencies/dependencyinsight)
 
_org.openrewrite.java.dependencies.DependencyInsight_

Finds dependencies, including transitive dependencies, in both Gradle and Maven projects. Matches within all Gradle dependency configurations and Maven scopes.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Dependency report](../recipes/java/dependencies/dependencylist)
 
_org.openrewrite.java.dependencies.DependencyList_

Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file.

#### Data tables:

  * **org.openrewrite.java.dependencies.table.DependencyListReport**: *Lists all Gradle and Maven dependencies*


### [Find and fix vulnerable Nuget dependencies](../recipes/csharp/dependencies/dependencyvulnerabilitycheck)
 
_org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck_

This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

#### Data tables:

  * **org.openrewrite.csharp.dependencies.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


### [Find licenses in use in third-party dependencies](../recipes/java/dependencies/dependencylicensecheck)
 
_org.openrewrite.java.dependencies.DependencyLicenseCheck_

Locates and reports on all licenses in use.

#### Data tables:

  * **org.openrewrite.java.dependencies.table.LicenseReport**: *Contains a license report of third-party dependencies.*


### [Dependency resolution diagnostic](../recipes/java/dependencies/dependencyresolutiondiagnostic)
 
_org.openrewrite.java.dependencies.DependencyResolutionDiagnostic_

Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution. 

The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions. 

The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed.

#### Data tables:

  * **org.openrewrite.java.dependencies.table.RepositoryAccessibilityReport**: *Listing of all dependency repositories and whether they are accessible.*
  * **org.openrewrite.java.dependencies.table.GradleDependencyConfigurationErrors**: *Records Gradle dependency configurations which failed to resolve during parsing. Partial success/failure is common, a failure in this list does not mean that every dependency failed to resolve.*


### [Find and fix vulnerable dependencies](../recipes/java/dependencies/dependencyvulnerabilitycheck)
 
_org.openrewrite.java.dependencies.DependencyVulnerabilityCheck_

This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*
  * **org.openrewrite.java.dependencies.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


### [Find relocated dependencies](../recipes/java/dependencies/relocateddependencycheck)
 
_org.openrewrite.java.dependencies.RelocatedDependencyCheck_

Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.

This recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes.

#### Data tables:

  * **org.openrewrite.java.dependencies.table.RelocatedDependencyReport**: *A list of dependencies in use that have relocated.*


### [Find the oldest matching dependency version in use](../recipes/java/dependencies/search/findminimumdependencyversion)
 
_org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion_

The oldest dependency version in use is the lowest dependency version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Jackson 2.11, but a test source set uses Jackson 2.16. In this case, the oldest Jackson version in use is Java 2.11.

#### Data tables:

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Find sensitive API endpoints](../recipes/java/security/search/findsensitiveapiendpoints)
 
_org.openrewrite.java.security.search.FindSensitiveApiEndpoints_

Find data models exposed by REST APIs that contain sensitive information like PII and secrets.

#### Data tables:

  * **org.openrewrite.java.security.table.SensitiveApiEndpoints**: *The API endpoints that expose sensitive data.*


### [Find Dropwizard metrics](../recipes/micrometer/dropwizard/finddropwizardmetrics)
 
_org.openrewrite.micrometer.dropwizard.FindDropwizardMetrics_

Find uses of Dropwizard metrics that could be converted to a more modern metrics instrumentation library.

#### Data tables:

  * **org.openrewrite.micrometer.table.DropwizardMetricsInUse**: *These metrics should be converted to a more moderne metrics instrumentation library.*


### [Find which Java version is in use](../recipes/java/migrate/search/aboutjavaversion)
 
_org.openrewrite.java.migrate.search.AboutJavaVersion_

A diagnostic for studying the distribution of Java language version levels (both source and target compatibility across files and source sets).

#### Data tables:

  * **org.openrewrite.java.migrate.table.JavaVersionPerSourceSet**: *A per-source set view of Java version in use.*


### [Find data used on DTOs](../recipes/java/migrate/search/finddatausedondto)
 
_org.openrewrite.java.migrate.search.FindDataUsedOnDto_

Find data elements used on DTOs. This is useful to provide information where data over-fetching may be a problem.

#### Data tables:

  * **org.openrewrite.java.migrate.table.DtoDataUses**: *The use of the data elements of a DTO by the method declaration using it.*


### [Find uses of internal javax APIs](../recipes/java/migrate/search/findinternaljavaxapis)
 
_org.openrewrite.java.migrate.search.FindInternalJavaxApis_

The libraries that define these APIs will have to be migrated before any of the repositories that use them.

#### Data tables:

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


### [Find Java versions in use](../recipes/java/migrate/search/findjavaversion)
 
_org.openrewrite.java.migrate.search.FindJavaVersion_

Finds Java versions in use.

#### Data tables:

  * **org.openrewrite.java.migrate.table.JavaVersionTable**: *Records versions of Java in use*


### [Plan a Java version migration](../recipes/java/migrate/search/planjavamigration)
 
_org.openrewrite.java.migrate.search.PlanJavaMigration_

Study the set of Java versions and associated tools in use across many repositories.

#### Data tables:

  * **org.openrewrite.java.migrate.table.JavaVersionMigrationPlan**: *A per-repository view of the current state of Java versions and associated build tools*


### [Find and fix vulnerable npm dependencies](../recipes/nodejs/dependencyvulnerabilitycheck)
 
_org.openrewrite.nodejs.DependencyVulnerabilityCheck_

This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

#### Data tables:

  * **org.openrewrite.nodejs.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


### [Node.js dependency insight](../recipes/nodejs/search/dependencyinsight)
 
_org.openrewrite.nodejs.search.DependencyInsight_

Identify the direct and transitive Node.js dependencies used in a project.

#### Data tables:

  * **org.openrewrite.nodejs.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


### [Find Node.js projects](../recipes/nodejs/search/findnodeprojects)
 
_org.openrewrite.nodejs.search.FindNodeProjects_

Find Node.js projects and summarize data about them.

#### Data tables:

  * **org.openrewrite.nodejs.table.NodeProjects**: *Summary information about Node.js projects.*


### [Find HTTP API calls via `RestTemplate`](../recipes/java/spring/search/findapicalls)
 
_org.openrewrite.java.spring.search.FindApiCalls_

Find outbound HTTP API calls made via Spring's `RestTemplate` class.

#### Data tables:

  * **org.openrewrite.java.spring.table.ApiCalls**: *The API endpoints that applications expose.*


### [Find Spring API endpoints](../recipes/java/spring/search/findapiendpoints)
 
_org.openrewrite.java.spring.search.FindApiEndpoints_

Find all HTTP API endpoints exposed by Spring applications. More specifically, this marks method declarations annotated with `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, and `@PatchMapping` as search results.

#### Data tables:

  * **org.openrewrite.java.spring.table.ApiEndpoints**: *The API endpoints that applications expose.*


### [Find Spring components](../recipes/java/spring/search/findspringcomponents)
 
_org.openrewrite.java.spring.search.FindSpringComponents_

Find Spring components, including controllers, services, repositories, return types of `@Bean` annotated methods, etc.

#### Data tables:

  * **org.openrewrite.java.spring.table.SpringComponents**: *Classes defined with a form of a Spring `@Component` stereotype and types returned from `@Bean` annotated methods.*
  * **org.openrewrite.java.spring.table.SpringComponentRelationships**: *A table of relationships between Spring components.*


### [Change a SQL function name](../recipes/sql/changefunctionname)
 
_org.openrewrite.sql.ChangeFunctionName_

When migrating between dialects, often one name can be substituted for another. For example, Oracle's NVL function can be replaced with Postgres COALESCE.

#### Data tables:

  * **org.openrewrite.sql.table.DatabaseQueries**: *Shows matching SQL queries.*
  * **org.openrewrite.sql.table.DatabaseFunctions**: *Shows matching SQL functions and the queries that contain them.*


### [Find SQL in code and resource files](../recipes/sql/findsql)
 
_org.openrewrite.sql.FindSql_

Find SQL in code (e.g. in string literals) and in resources like those ending with `.sql`.

#### Data tables:

  * **org.openrewrite.sql.table.DatabaseColumnsUsed**: *Shows which database columns are read/written by a SQL statement.*


### [Find SQL function](../recipes/sql/search/findfunction)
 
_org.openrewrite.sql.search.FindFunction_

Find SQL functions by name.

#### Data tables:

  * **org.openrewrite.sql.table.DatabaseQueries**: *Shows matching SQL queries.*
  * **org.openrewrite.sql.table.DatabaseFunctions**: *Shows matching SQL functions and the queries that contain them.*


### [Find Struts actions](../recipes/java/struts/search/findstrutsactions)
 
_org.openrewrite.java.struts.search.FindStrutsActions_

Find actions and their associated definitions.

#### Data tables:

  * **org.openrewrite.java.struts.table.StrutsActions**: *Definition of struts action.*


### [Change Maven Compiler plugin annotation processor groupId, artifactId and/or the version](../recipes/io/quarkus/updates/core/quarkus37/changemavencompilerannotationprocessorgroupidandartifactid)
 
_io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId_

Change the groupId, artifactId and/or the version of a specified Maven Compiler plugin annotation processor.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


### [Sync Maven Compiler plugin annotation processor version with the one provided by the BOM](../recipes/io/quarkus/updates/core/quarkus37/syncmavencompilerannotationprocessorversion)
 
_io.quarkus.updates.core.quarkus37.SyncMavenCompilerAnnotationProcessorVersion_

Sync Maven Compiler plugin annotation processor version with the one provided by the BOM.

#### Data tables:

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


