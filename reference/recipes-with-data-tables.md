# Recipes with Data Tables

_This doc contains all of the recipes with **unique** data tables that have been explicitly added by the recipe author. If a recipe contains only the default data tables, it won't be included in this list._

**[Find colliding source files](https://docs.openrewrite.org/?q=org.openrewrite.FindCollidingSourceFiles)**  
**org.openrewrite.FindCollidingSourceFiles**  
Finds source files which share a path with another source file. There should always be exactly one source file per path within a repository. This is a diagnostic for finding problems in OpenRewrite parsers/build plugins.

  * **org.openrewrite.table.CollidingSourceFiles**: *Source files that have the same relative path.*


**[Find deserialization errors](https://docs.openrewrite.org/?q=org.openrewrite.FindDeserializationErrors)**  
**org.openrewrite.FindDeserializationErrors**  
Produces a data table collecting all deserialization errors of serialized LSTs.

  * **org.openrewrite.table.DeserializationErrorTable**: *Table collecting any LST deserialization errors.*


**[Show Git source control metadata](https://docs.openrewrite.org/?q=org.openrewrite.FindGitProvenance)**  
**org.openrewrite.FindGitProvenance**  
List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.

  * **org.openrewrite.table.DistinctGitProvenance**: *List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.*


**[Find LST provenance](https://docs.openrewrite.org/?q=org.openrewrite.FindLstProvenance)**  
**org.openrewrite.FindLstProvenance**  
Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST.

  * **org.openrewrite.table.LstProvenanceTable**: *Table showing which tools were used to produce LSTs.*


**[Find source files with `ParseExceptionResult` markers](https://docs.openrewrite.org/?q=org.openrewrite.FindParseFailures)**  
**org.openrewrite.FindParseFailures**  
This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.

  * **org.openrewrite.table.ParseFailures**: *A list of files that failed to parse along with stack traces of their failures.*


**[Find files](https://docs.openrewrite.org/?q=org.openrewrite.FindSourceFiles)**  
**org.openrewrite.FindSourceFiles**  
Find files by source path.

  * **org.openrewrite.table.SourcesFiles**: *Source files that matched some criteria.*


**[List runtime classpath](https://docs.openrewrite.org/?q=org.openrewrite.ListRuntimeClasspath)**  
**org.openrewrite.ListRuntimeClasspath**  
A diagnostic utility which emits the runtime classpath to a data table.

  * **org.openrewrite.table.ClasspathReport**: *Contains a report of the runtime classpath and any other jars found inside each classpath entry.*


**[Find committers on repositories](https://docs.openrewrite.org/?q=org.openrewrite.search.FindCommitters)**  
**org.openrewrite.search.FindCommitters**  
List the committers on a repository.

  * **org.openrewrite.table.DistinctCommitters**: *The distinct set of committers per repository.*
  * **org.openrewrite.table.CommitsByDay**: *The commit activity by day by committer.*


**[Find parse to print inequality](https://docs.openrewrite.org/?q=org.openrewrite.search.FindParseToPrintInequality)**  
**org.openrewrite.search.FindParseToPrintInequality**  
OpenRewrite `Parser` implementations should produce `SourceFile` objects whose `printAll()` method should be byte-for-byte equivalent with the original source file. When this isn't true, recipes can still run on the `SourceFile` and even produce diffs, but the diffs would fail to apply as a patch to the original source file. Most `Parser` use `Parser#requirePrintEqualsInput` to produce a `ParseError` when they fail to produce a `SourceFile` that is print idempotent.

  * **org.openrewrite.table.ParseToPrintInequalities**: *A list of files that parsers produced `SourceFile` which, when printed, didn't match the original source code.*


**[Find text](https://docs.openrewrite.org/?q=org.openrewrite.text.Find)**  
**org.openrewrite.text.Find**  
Textual search, optionally using Regular Expression (regex) to query.

  * **org.openrewrite.table.TextMatches**: *Lines matching simple text search.*


**[Upgrade transitive Gradle dependencies](https://docs.openrewrite.org/?q=org.openrewrite.gradle.UpgradeTransitiveDependencyVersion)**  
**org.openrewrite.gradle.UpgradeTransitiveDependencyVersion**  
Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Add the Develocity Gradle plugin](https://docs.openrewrite.org/?q=org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin)**  
**org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin**  
Add the Develocity Gradle plugin to settings.gradle files.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Gradle dependency insight](https://docs.openrewrite.org/?q=org.openrewrite.gradle.search.DependencyInsight)**  
**org.openrewrite.gradle.search.DependencyInsight**  
Find direct and transitive dependencies matching a group, artifact, and optionally a configuration name. Results include dependencies that either directly match or transitively include a matching dependency.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Find Gradle wrappers](https://docs.openrewrite.org/?q=org.openrewrite.gradle.search.FindGradleWrapper)**  
**org.openrewrite.gradle.search.FindGradleWrapper**  
Find Gradle wrappers.

  * **org.openrewrite.gradle.table.GradleWrappersInUse**: *Gradle wrappers in use.*


**[Add Gradle dependency](https://docs.openrewrite.org/?q=org.openrewrite.gradle.AddDependency)**  
**org.openrewrite.gradle.AddDependency**  
Add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Upgrade Gradle dependency versions](https://docs.openrewrite.org/?q=org.openrewrite.gradle.UpgradeDependencyVersion)**  
**org.openrewrite.gradle.UpgradeDependencyVersion**  
Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Calculate token length of classes](https://docs.openrewrite.org/?q=org.openrewrite.java.ai.ClassDefinitionLength)**  
**org.openrewrite.java.ai.ClassDefinitionLength**  
Locates class definitions and predicts the number of token in each.

  * **org.openrewrite.java.table.TokenCount**: *The number of tokens from a code snippet*


**[Calculate token length of method definitions](https://docs.openrewrite.org/?q=org.openrewrite.java.ai.MethodDefinitionLength)**  
**org.openrewrite.java.ai.MethodDefinitionLength**  
Locates method definitions and predicts the number of token in each.

  * **org.openrewrite.java.table.TokenCount**: *The number of tokens from a code snippet*


**[Find OpenRewrite recipes](https://docs.openrewrite.org/?q=org.openrewrite.java.recipes.FindRecipes)**  
**org.openrewrite.java.recipes.FindRecipes**  
This recipe finds all OpenRewrite recipes, primarily to produce a data table that is being used to experiment with fine-tuning a large language model to produce more recipes.

  * **org.openrewrite.table.RewriteRecipeSource**: *This table contains the source code of recipes along with their metadata for use in an experiment fine-tuning large language models to produce more recipes.*


**[Find class hierarchy](https://docs.openrewrite.org/?q=org.openrewrite.java.search.FindClassHierarchy)**  
**org.openrewrite.java.search.FindClassHierarchy**  
Discovers all class declarations within a project, recording which files they appear in, their superclasses, and interfaces. That information is then recorded in a data table.

  * **org.openrewrite.java.table.ClassHierarchy**: *Record the classes*


**[Find uses of deprecated methods](https://docs.openrewrite.org/?q=org.openrewrite.java.search.FindDeprecatedMethods)**  
**org.openrewrite.java.search.FindDeprecatedMethods**  
Find uses of deprecated methods in any API.

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


**[Find method usages](https://docs.openrewrite.org/?q=org.openrewrite.java.search.FindMethods)**  
**org.openrewrite.java.search.FindMethods**  
Find method calls by pattern.

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


**[Find types](https://docs.openrewrite.org/?q=org.openrewrite.java.search.FindTypes)**  
**org.openrewrite.java.search.FindTypes**  
Find type references by name.

  * **org.openrewrite.java.table.TypeUses**: *The source code of matching type uses.*


**[Study the size of the classpath by source set](https://docs.openrewrite.org/?q=org.openrewrite.java.search.ClasspathTypeCounts)**  
**org.openrewrite.java.search.ClasspathTypeCounts**  
Emit one data table row per source set in a project, with the number of types in the source set.

  * **org.openrewrite.java.table.ClasspathTypeCount**: *The number of types in each source set in a project's classpath.*


**[Find type mappings](https://docs.openrewrite.org/?q=org.openrewrite.java.search.FindTypeMappings)**  
**org.openrewrite.java.search.FindTypeMappings**  
Study the frequency of `J` types and their `JavaType` type attribution.

  * **org.openrewrite.java.table.TypeMappings**: *The types mapped to `J` trees.*


**[Add Maven parent](https://docs.openrewrite.org/?q=org.openrewrite.maven.AddParentPom)**  
**org.openrewrite.maven.AddParentPom**  
Add a parent pom to a Maven pom.xml. Does nothing if a parent pom is already present.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Change Maven dependency](https://docs.openrewrite.org/?q=org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId)**  
**org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId**  
Change a Maven dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before. Matching `<dependencyManagement>` coordinates are also updated if a `newVersion` or `versionPattern` is provided.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Change Maven managed dependency groupId, artifactId and optionally the version](https://docs.openrewrite.org/?q=org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId)**  
**org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId**  
Change the groupId, artifactId and optionally the version of a specified Maven managed dependency.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Change Maven parent](https://docs.openrewrite.org/?q=org.openrewrite.maven.ChangeParentPom)**  
**org.openrewrite.maven.ChangeParentPom**  
Change the parent pom of a Maven pom.xml. Identifies the parent pom to be changed by its groupId and artifactId.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Change Maven plugin group and artifact ID](https://docs.openrewrite.org/?q=org.openrewrite.maven.ChangePluginGroupIdAndArtifactId)**  
**org.openrewrite.maven.ChangePluginGroupIdAndArtifactId**  
Change the groupId and/or the artifactId of a specified Maven plugin.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Upgrade Maven plugin version](https://docs.openrewrite.org/?q=org.openrewrite.maven.UpgradePluginVersion)**  
**org.openrewrite.maven.UpgradePluginVersion**  
Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Maven dependency insight](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.DependencyInsight)**  
**org.openrewrite.maven.search.DependencyInsight**  
Find direct and transitive dependencies matching a group, artifact, and scope. Results include dependencies that either directly match or transitively include a matching dependency.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Effective dependencies](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.EffectiveDependencies)**  
**org.openrewrite.maven.search.EffectiveDependencies**  
Emit the data of binary dependency relationships.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Relationships between dependencies.*


**[Effective managed dependencies](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.EffectiveManagedDependencies)**  
**org.openrewrite.maven.search.EffectiveManagedDependencies**  
Emit the data of binary dependency relationships.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Relationships between POMs and their ancestors that define managed dependencies.*


**[List effective Maven repositories](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.EffectiveMavenRepositories)**  
**org.openrewrite.maven.search.EffectiveMavenRepositories**  
Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the LST was produced.

  * **org.openrewrite.maven.search.EffectiveMavenRepositoriesTable**: *Table showing which Maven repositories were used in dependency resolution for this POM.*


**[Find effective maven settings](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.FindMavenSettings)**  
**org.openrewrite.maven.search.FindMavenSettings**  
List the effective maven settings file for the current project.

  * **org.openrewrite.maven.table.EffectiveMavenSettings**: *The maven settings file used by each pom.*


**[Find Maven project properties](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.FindProperties)**  
**org.openrewrite.maven.search.FindProperties**  
Finds the specified Maven project properties within a pom.xml.

  * **org.openrewrite.maven.table.MavenProperties**: *Property and value.*


**[Maven repository order](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.FindRepositoryOrder)**  
**org.openrewrite.maven.search.FindRepositoryOrder**  
Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`.

  * **org.openrewrite.maven.table.MavenRepositoryOrder**: *The order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`.*


**[Maven parent insight](https://docs.openrewrite.org/?q=org.openrewrite.maven.search.ParentPomInsight)**  
**org.openrewrite.maven.search.ParentPomInsight**  
Find Maven parents matching a `groupId` and `artifactId`.

  * **org.openrewrite.maven.table.ParentPomsInUse**: *Projects, GAVs and relativePaths for Maven parent POMs in use.*


**[Add Maven dependency](https://docs.openrewrite.org/?q=org.openrewrite.maven.AddDependency)**  
**org.openrewrite.maven.AddDependency**  
Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Add managed Maven dependency](https://docs.openrewrite.org/?q=org.openrewrite.maven.AddManagedDependency)**  
**org.openrewrite.maven.AddManagedDependency**  
Add a managed Maven dependency to a `pom.xml` file.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Upgrade Maven dependency version](https://docs.openrewrite.org/?q=org.openrewrite.maven.UpgradeDependencyVersion)**  
**org.openrewrite.maven.UpgradeDependencyVersion**  
Upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Upgrade transitive Maven dependencies](https://docs.openrewrite.org/?q=org.openrewrite.maven.UpgradeTransitiveDependencyVersion)**  
**org.openrewrite.maven.UpgradeTransitiveDependencyVersion**  
Upgrades the version of a transitive dependency in a Maven pom file. Leaves direct dependencies unmodified. Can be paired with the regular Upgrade Dependency Version recipe to upgrade a dependency everywhere, regardless of whether it is direct or transitive.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[XML style Auto-detection debug](https://docs.openrewrite.org/?q=org.openrewrite.xml.style.AutodetectDebug)**  
**org.openrewrite.xml.style.AutodetectDebug**  
Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do.

  * **org.openrewrite.xml.table.XmlStyleReport**: *Records style information about XML documents. Used for debugging style auto-detection issues.*


**[Find Kotlin sources and collect data metrics](https://docs.openrewrite.org/?q=org.openrewrite.kotlin.FindKotlinSources)**  
**org.openrewrite.kotlin.FindKotlinSources**  
Use data table to collect source files types and counts of files with extensions `.kt`.

  * **org.openrewrite.kotlin.table.KotlinSourceFile**: *Kotlin sources present in LSTs on the SAAS.*


**[Find method usages](https://docs.openrewrite.org/?q=org.openrewrite.analysis.search.FindMethods)**  
**org.openrewrite.analysis.search.FindMethods**  
Find method usages by pattern.

  * **org.openrewrite.java.table.MethodCalls**: *The text of matching method invocations.*


**[Find comments' language distribution](https://docs.openrewrite.org/?q=io.moderne.ai.FindCommentsLanguage)**  
**io.moderne.ai.FindCommentsLanguage**  
Finds all comments and uses AI to predict which language the comment is in.

  * **io.moderne.ai.table.LanguageDistribution**: *Shows the distribution of language in comments*


**[List all methods used](https://docs.openrewrite.org/?q=io.moderne.ai.ListAllMethodsUsed)**  
**io.moderne.ai.ListAllMethodsUsed**  
List all methods used in any Java source file.

  * **io.moderne.ai.table.MethodInUse**: *Methods used in any Java source file.*


**[Get embeddings for code snippets in code](https://docs.openrewrite.org/?q=io.moderne.ai.research.GetCodeEmbedding)**  
**io.moderne.ai.research.GetCodeEmbedding**  
This recipe calls an AI model to get an embedding for either classes or methods which can then be used for downstream tasks.

  * **io.moderne.ai.table.Embeddings**: *Collects the embeddings for either each classes or methods.*


**[Find method invocations that resemble a pattern](https://docs.openrewrite.org/?q=io.moderne.ai.research.FindCodeThatResembles)**  
**io.moderne.ai.research.FindCodeThatResembles**  
This recipe uses two phase AI approach to find a method invocation that resembles a search string.

  * **io.moderne.ai.table.CodeSearch**: *Searches for method invocations that resemble a natural language query.*
  * **io.moderne.ai.table.TopKMethodMatcher**: *Result from the scanning recipe for top-k method patterns that match the query.*
  * **io.moderne.ai.table.EmbeddingPerformance**: *Latency characteristics of uses of embedding models.*
  * **io.moderne.ai.table.GenerativeModelPerformance**: *Latency characteristics of uses of generative models.*
  * **io.moderne.ai.table.SuggestedMethodPatterns**: *As the next step after the AI-based searching for method invocations, you may want to do rule-based method searching using the recommended method patterns.*


**[Get recommendations](https://docs.openrewrite.org/?q=io.moderne.ai.research.GetRecommendations)**  
**io.moderne.ai.research.GetRecommendations**  
This recipe calls an AI model to get recommendations for modernizing the code base by looking at a sample of method declarations.

  * **io.moderne.ai.table.Recommendations**: *Collects the recommendations based on sampled methods.*


**[Find call graph](https://docs.openrewrite.org/?q=org.openrewrite.FindCallGraph)**  
**org.openrewrite.FindCallGraph**  
Produces a data table where each row represents a method call.

  * **org.openrewrite.table.CallGraph**: *Records method callers and the methods they invoke.*


**[Find duplicate source files](https://docs.openrewrite.org/?q=org.openrewrite.FindDuplicateSourceFiles)**  
**org.openrewrite.FindDuplicateSourceFiles**  
Record the presence of LSTs with duplicate paths, indicating that the same file was parsed more than once.

  * **org.openrewrite.table.DuplicateSourceFiles**: *A list of source files that occur more than once in an LST.*


**[Language composition report](https://docs.openrewrite.org/?q=org.openrewrite.LanguageComposition)**  
**org.openrewrite.LanguageComposition**  
Counts the number of lines of the various kinds of source code and data formats parsed by OpenRewrite. Comments are not included in line counts. This recipe emits its results as two data tables, making no changes to any source file. One data table is per-file, the other is per-repository.

  * **org.openrewrite.table.LanguageCompositionPerRepository**: *Counts the number of files and lines of source code in the various formats OpenRewrite knows how to parse.*
  * **org.openrewrite.table.LanguageCompositionPerFolder**: *A list of folders and the language composition and line counts of their contents.*
  * **org.openrewrite.table.LanguageCompositionPerFile**: *A list of individual files and their language composition.*


**[Lint source code with ESLint](https://docs.openrewrite.org/?q=org.openrewrite.codemods.ESLint)**  
**org.openrewrite.codemods.ESLint**  
Run [ESLint](https://eslint.org/) across the code to fix common static analysis issues in the code.

This requires the code to have an existing ESLint configuration.

  * **org.openrewrite.codemods.ESLintMessages**: *Errors and warnings as reported by ESLint.*


**[Find uses of docker base images](https://docs.openrewrite.org/?q=org.openrewrite.docker.search.FindDockerImageUses)**  
**org.openrewrite.docker.search.FindDockerImageUses**  
Produce an impact analysis of base images used in Dockerfiles.

  * **org.openrewrite.docker.table.DockerBaseImages**: *Records the `FROM` block of Dockerfiles.*


**[Dependency insight for C#](https://docs.openrewrite.org/?q=org.openrewrite.csharp.dependencies.DependencyInsight)**  
**org.openrewrite.csharp.dependencies.DependencyInsight**  
Finds dependencies in `*.csproj` and `packages.config`.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Dependency insight for Gradle and Maven](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.DependencyInsight)**  
**org.openrewrite.java.dependencies.DependencyInsight**  
Finds dependencies, including transitive dependencies, in both Gradle and Maven projects. Matches within all Gradle dependency configurations and Maven scopes.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Dependency report](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.DependencyList)**  
**org.openrewrite.java.dependencies.DependencyList**  
Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file.

  * **org.openrewrite.java.dependencies.table.DependencyListReport**: *Lists all Gradle and Maven dependencies*


**[Find and fix vulnerable Nuget dependencies](https://docs.openrewrite.org/?q=org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck)**  
**org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck**  
This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

  * **org.openrewrite.csharp.dependencies.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


**[Find licenses in use in third-party dependencies](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.DependencyLicenseCheck)**  
**org.openrewrite.java.dependencies.DependencyLicenseCheck**  
Locates and reports on all licenses in use.

  * **org.openrewrite.java.dependencies.table.LicenseReport**: *Contains a license report of third-party dependencies.*


**[Dependency resolution diagnostic](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.DependencyResolutionDiagnostic)**  
**org.openrewrite.java.dependencies.DependencyResolutionDiagnostic**  
Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution. 

The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions. 

The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed.

  * **org.openrewrite.java.dependencies.table.RepositoryAccessibilityReport**: *Listing of all dependency repositories and whether they are accessible.*
  * **org.openrewrite.java.dependencies.table.GradleDependencyConfigurationErrors**: *Records Gradle dependency configurations which failed to resolve during parsing. Partial success/failure is common, a failure in this list does not mean that every dependency failed to resolve.*


**[Find and fix vulnerable dependencies](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.DependencyVulnerabilityCheck)**  
**org.openrewrite.java.dependencies.DependencyVulnerabilityCheck**  
This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

  * **org.openrewrite.java.dependencies.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


**[Find relocated dependencies](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.RelocatedDependencyCheck)**  
**org.openrewrite.java.dependencies.RelocatedDependencyCheck**  
Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.

This recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes.

  * **org.openrewrite.java.dependencies.table.RelocatedDependencyReport**: *A list of dependencies in use that have relocated.*


**[Find the oldest matching dependency version in use](https://docs.openrewrite.org/?q=org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion)**  
**org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion**  
The oldest dependency version in use is the lowest dependency version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Jackson 2.11, but a test source set uses Jackson 2.16. In this case, the oldest Jackson version in use is Java 2.11.

  * **org.openrewrite.maven.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Find sensitive API endpoints](https://docs.openrewrite.org/?q=org.openrewrite.java.security.search.FindSensitiveApiEndpoints)**  
**org.openrewrite.java.security.search.FindSensitiveApiEndpoints**  
Find data models exposed by REST APIs that contain sensitive information like PII and secrets.

  * **org.openrewrite.java.security.table.SensitiveApiEndpoints**: *The API endpoints that expose sensitive data.*


**[Find Dropwizard metrics](https://docs.openrewrite.org/?q=org.openrewrite.micrometer.dropwizard.FindDropwizardMetrics)**  
**org.openrewrite.micrometer.dropwizard.FindDropwizardMetrics**  
Find uses of Dropwizard metrics that could be converted to a more modern metrics instrumentation library.

  * **org.openrewrite.micrometer.table.DropwizardMetricsInUse**: *These metrics should be converted to a more moderne metrics instrumentation library.*


**[Find which Java version is in use](https://docs.openrewrite.org/?q=org.openrewrite.java.migrate.search.AboutJavaVersion)**  
**org.openrewrite.java.migrate.search.AboutJavaVersion**  
A diagnostic for studying the distribution of Java language version levels (both source and target compatibility across files and source sets).

  * **org.openrewrite.java.migrate.table.JavaVersionPerSourceSet**: *A per-source set view of Java version in use.*


**[Find data used on DTOs](https://docs.openrewrite.org/?q=org.openrewrite.java.migrate.search.FindDataUsedOnDto)**  
**org.openrewrite.java.migrate.search.FindDataUsedOnDto**  
Find data elements used on DTOs. This is useful to provide information where data over-fetching may be a problem.

  * **org.openrewrite.java.migrate.table.DtoDataUses**: *The use of the data elements of a DTO by the method declaration using it.*


**[Find Java versions in use](https://docs.openrewrite.org/?q=org.openrewrite.java.migrate.search.FindJavaVersion)**  
**org.openrewrite.java.migrate.search.FindJavaVersion**  
Finds Java versions in use.

  * **org.openrewrite.java.migrate.table.JavaVersionTable**: *Records versions of Java in use*


**[Find and fix vulnerable npm dependencies](https://docs.openrewrite.org/?q=org.openrewrite.nodejs.DependencyVulnerabilityCheck)**  
**org.openrewrite.nodejs.DependencyVulnerabilityCheck**  
This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable.

  * **org.openrewrite.nodejs.table.VulnerabilityReport**: *A vulnerability report that includes detailed information about the affected artifact and the corresponding CVEs.*


**[Node.js dependency insight](https://docs.openrewrite.org/?q=org.openrewrite.nodejs.search.DependencyInsight)**  
**org.openrewrite.nodejs.search.DependencyInsight**  
Identify the direct and transitive Node.js dependencies used in a project.

  * **org.openrewrite.nodejs.table.DependenciesInUse**: *Direct and transitive dependencies in use.*


**[Find Node.js projects](https://docs.openrewrite.org/?q=org.openrewrite.nodejs.search.FindNodeProjects)**  
**org.openrewrite.nodejs.search.FindNodeProjects**  
Find Node.js projects and summarize data about them.

  * **org.openrewrite.nodejs.table.NodeProjects**: *Summary information about Node.js projects.*


**[Find HTTP API calls via `RestTemplate`](https://docs.openrewrite.org/?q=org.openrewrite.java.spring.search.FindApiCalls)**  
**org.openrewrite.java.spring.search.FindApiCalls**  
Find outbound HTTP API calls made via Spring's `RestTemplate` class.

  * **org.openrewrite.java.spring.table.ApiCalls**: *The API endpoints that applications expose.*


**[Find Spring API endpoints](https://docs.openrewrite.org/?q=org.openrewrite.java.spring.search.FindApiEndpoints)**  
**org.openrewrite.java.spring.search.FindApiEndpoints**  
Find all HTTP API endpoints exposed by Spring applications. More specifically, this marks method declarations annotated with `@RequestMapping`, `@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, and `@PatchMapping` as search results.

  * **org.openrewrite.java.spring.table.ApiEndpoints**: *The API endpoints that applications expose.*


**[Find Spring components](https://docs.openrewrite.org/?q=org.openrewrite.java.spring.search.FindSpringComponents)**  
**org.openrewrite.java.spring.search.FindSpringComponents**  
Find Spring components, including controllers, services, repositories, return types of `@Bean` annotated methods, etc.

  * **org.openrewrite.java.spring.table.SpringComponents**: *Classes defined with a form of a Spring `@Component` stereotype and types returned from `@Bean` annotated methods.*
  * **org.openrewrite.java.spring.table.SpringComponentRelationships**: *A table of relationships between Spring components.*


**[Change a SQL function name](https://docs.openrewrite.org/?q=org.openrewrite.sql.ChangeFunctionName)**  
**org.openrewrite.sql.ChangeFunctionName**  
When migrating between dialects, often one name can be substituted for another. For example, Oracle's NVL function can be replaced with Postgres COALESCE.

  * **org.openrewrite.sql.table.DatabaseQueries**: *Shows matching SQL queries.*
  * **org.openrewrite.sql.table.DatabaseFunctions**: *Shows matching SQL functions and the queries that contain them.*


**[Find SQL in code and resource files](https://docs.openrewrite.org/?q=org.openrewrite.sql.FindSql)**  
**org.openrewrite.sql.FindSql**  
Find SQL in code (e.g. in string literals) and in resources like those ending with `.sql`.

  * **org.openrewrite.sql.table.DatabaseColumnsUsed**: *Shows which database columns are read/written by a SQL statement.*


**[Find SQL function](https://docs.openrewrite.org/?q=org.openrewrite.sql.search.FindFunction)**  
**org.openrewrite.sql.search.FindFunction**  
Find SQL functions by name.

  * **org.openrewrite.sql.table.DatabaseQueries**: *Shows matching SQL queries.*
  * **org.openrewrite.sql.table.DatabaseFunctions**: *Shows matching SQL functions and the queries that contain them.*


**[Find Struts actions](https://docs.openrewrite.org/?q=org.openrewrite.java.struts.search.FindStrutsActions)**  
**org.openrewrite.java.struts.search.FindStrutsActions**  
Find actions and their associated definitions.

  * **org.openrewrite.java.struts.table.StrutsActions**: *Definition of struts action.*


**[Change Maven Compiler plugin annotation processor groupId, artifactId and/or the version](https://docs.openrewrite.org/?q=io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId)**  
**io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId**  
Change the groupId, artifactId and/or the version of a specified Maven Compiler plugin annotation processor.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


**[Sync Maven Compiler plugin annotation processor version with the one provided by the BOM](https://docs.openrewrite.org/?q=io.quarkus.updates.core.quarkus37.SyncMavenCompilerAnnotationProcessorVersion)**  
**io.quarkus.updates.core.quarkus37.SyncMavenCompilerAnnotationProcessorVersion**  
Sync Maven Compiler plugin annotation processor version with the one provided by the BOM.

  * **org.openrewrite.maven.table.MavenMetadataFailures**: *Attempts to resolve maven metadata that failed.*


