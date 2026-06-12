---
description: Recipes in the org.openrewrite module.
---

# org.openrewrite


## rewrite-cobol

_License: Moderne Source Available License_

_7 recipes_

* [org.openrewrite.cobol.cleanup.RemoveWithDebuggingMode](/recipes/cobol/cleanup/removewithdebuggingmode.md)
  * **Remove with debugging mode**
  * Remove debugging mode from SOURCE-COMPUTER paragraphs.
* [org.openrewrite.cobol.search.FindCopybook](/recipes/cobol/search/findcopybook.md)
  * **Find copybook usage**
  * Find all copy statements with the copybook name.
* [org.openrewrite.cobol.search.FindIndicators](/recipes/cobol/search/findindicators.md)
  * **Find indicators**
  * Find matching indicators. Currently, this recipe will not mark indicators on copybook code.
* [org.openrewrite.cobol.search.FindReference](/recipes/cobol/search/findreference.md)
  * **Find matching identifiers in COBOL, copybooks, and JCL**
  * Finds an identifier by an exact match or regex pattern in COBOL, copybooks, and/or JCL.
* [org.openrewrite.cobol.search.FindRelationships](/recipes/cobol/search/findrelationships.md)
  * **Find COBOL relationships**
  * Build a list of relationships for diagramming and exploration.
* [org.openrewrite.cobol.search.FindWord](/recipes/cobol/search/findword.md)
  * **Find matching words in the source code**
  * Search for COBOL words based on a search term.
* [org.openrewrite.jcl.search.FindWord](/recipes/jcl/search/findword.md)
  * **Find matching words in JCL source code**
  * Search for JCL words based on a search term.

## rewrite-core

_License: Apache License Version 2.0_

_29 recipes_

* [org.openrewrite.AddToGitignore](/recipes/core/addtogitignore.md)
  * **Add entries to `.gitignore`**
  * Adds entries to the project's `.gitignore` file. If no `.gitignore` file exists, one will be created. Existing entries that match will not be duplicated.
* [org.openrewrite.DeleteSourceFiles](/recipes/core/deletesourcefiles.md)
  * **Delete files**
  * Delete files by source path.
* [org.openrewrite.ExcludeFileFromGitignore](/recipes/core/excludefilefromgitignore.md)
  * **Remove ignoral of files or directories from .gitignore**
  * This recipe will remove a file or directory from the .gitignore file. If the file or directory is already in the .gitignore file, it will be removed or negated. If the file or directory is not in the .gitignore file, no action will be taken.
* [org.openrewrite.FindCollidingSourceFiles](/recipes/core/findcollidingsourcefiles.md)
  * **Find colliding source files**
  * Finds source files which share a path with another source file. There should always be exactly one source file per path within a repository. This is a diagnostic for finding problems in OpenRewrite parsers/build plugins.
* [org.openrewrite.FindDeserializationErrors](/recipes/core/finddeserializationerrors.md)
  * **Find deserialization errors**
  * Produces a data table collecting all deserialization errors of serialized LSTs.
* [org.openrewrite.FindGitProvenance](/recipes/core/findgitprovenance.md)
  * **Show Git source control metadata**
  * List out the contents of each unique `GitProvenance` marker in the set of source files. When everything is working correctly, exactly one such marker should be printed as all source files are expected to come from the same repository / branch / commit hash.
* [org.openrewrite.FindLstProvenance](/recipes/core/findlstprovenance.md)
  * **Find LST provenance**
  * Produces a data table showing what versions of OpenRewrite/Moderne tooling was used to produce a given LST.
* [org.openrewrite.FindParseFailures](/recipes/core/findparsefailures.md)
  * **Find source files with `ParseExceptionResult` markers**
  * This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.
* [org.openrewrite.FindQuarks](/recipes/core/findquarks.md)
  * **Find instances of type `Quark`**
  * `Quark` source files are pointers to the existence of a file without capturing any of the contents of the file.
* [org.openrewrite.FindSourceFiles](/recipes/core/findsourcefiles.md)
  * **Find files**
  * Find files by source path. Paths are always interpreted as relative to the repository root.
* [org.openrewrite.FindStyles](/recipes/core/findstyles.md)
  * **Find styles**
  * Find and report the styles attached to each source file. Styles are output as valid OpenRewrite style YAML that can be used directly in rewrite.yml configuration.
* [org.openrewrite.IsInRepository](/recipes/core/isinrepository.md)
  * **Is in repository**
  * A search recipe which marks files that are in a repository with one of the supplied names. Intended for use as a precondition for other recipes being run over many different repositories.
* [org.openrewrite.ListRuntimeClasspath](/recipes/core/listruntimeclasspath.md)
  * **List runtime classpath**
  * A diagnostic utility which emits the runtime classpath to a data table.
* [org.openrewrite.MoveFile](/recipes/core/movefile.md)
  * **Move a file**
  * Move a file to a different directory. The file name will remain the same.
* [org.openrewrite.RenameFile](/recipes/core/renamefile.md)
  * **Rename a file**
  * Rename a file while keeping it in the same directory.
* [org.openrewrite.SetFilePermissions](/recipes/core/setfilepermissions.md)
  * **Set file permission attributes**
  * Set a file's read, write and executable permission attributes.
* [org.openrewrite.Singleton](/recipes/core/singleton.md)
  * **Singleton**
  * Used as a precondition to ensure that a recipe attempts to make changes only once. Accidentally including multiple copies/instances of the same large composite recipes is a common mistake. If those recipes are marked with this precondition the performance penalty is limited. This recipe does nothing useful run on its own.  ## Usage in YAML recipes  Add `org.openrewrite.Singleton` as a precondition:  ```yaml --- type: specs.openrewrite.org/v1beta/recipe name: com.example.Append displayName: My recipe preconditions:   - org.openrewrite.Singleton recipeList:   - org.openrewrite.text.AppendToTextFile:       relativeFileName: report.txt       content: 'Recipe executed' ```## Usage in Java recipes  Wrap visitors with `Singleton.singleton(this, visitor)` to ensure only the first *equivalent* recipe instance makes changes:  ```java @Override public TreeVisitor&lt;?, ExecutionContext&gt; getVisitor(Accumulator acc) \{     return singleton(this, new TreeVisitor&lt;Tree, ExecutionContext&gt;() \{         @Override         public Tree visit(@Nullable Tree tree, ExecutionContext ctx) \{             // Your transformation logic             return tree;         \}     \}); \} @Override public Collection&lt;SourceFile&gt; generate(Accumulator acc, ExecutionContext ctx) \{     if (!isSingleton(this, ctx)) \{         return Collections.emptyList();     \}     // Generate new sources     return results; \}  @Override public TreeVisitor&lt;?, ExecutionContext&gt; getVisitor(Accumulator acc) \{     return singleton(this, new TreeVisitor&lt;Tree, ExecutionContext&gt;() \{         // Visitor logic     \}); \} ```  **Note:** Singleton status is determined by the recipe's `equals()` and `hashCode()` methods. If equivalent instances of a recipe are not considered singletons, ensure your recipe class correctly implements these methods. The easiest way is to use Lombok's `@Value` annotation on your recipe class, which automatically generates correct `equals()` and `hashCode()` implementations based on all fields.
* [org.openrewrite.search.FindBuildMetadata](/recipes/search/findbuildmetadata.md)
  * **Find build metadata**
  * Find source files with matching build metadata.
* [org.openrewrite.search.FindCommitters](/recipes/search/findcommitters.md)
  * **Find committers on repositories**
  * List the committers on a repository.
* [org.openrewrite.search.FindParseToPrintInequality](/recipes/search/findparsetoprintinequality.md)
  * **Find parse to print inequality**
  * OpenRewrite `Parser` implementations should produce `SourceFile` objects whose `printAll()` method should be byte-for-byte equivalent with the original source file. When this isn't true, recipes can still run on the `SourceFile` and even produce diffs, but the diffs would fail to apply as a patch to the original source file. Most `Parser` use `Parser#requirePrintEqualsInput` to produce a `ParseError` when they fail to produce a `SourceFile` that is print idempotent.
* [org.openrewrite.search.RepositoryContainsFile](/recipes/search/repositorycontainsfile.md)
  * **Repository contains file**
  * Intended to be used primarily as a precondition for other recipes, this recipe checks if a repository contains a specific file or files matching a pattern. If present all files in the repository are marked with a `SearchResult` marker. If you want to get only the matching file as a search result, use `FindSourceFiles` instead.
* [org.openrewrite.text.AppendToTextFile](/recipes/text/appendtotextfile.md)
  * **Append to text file**
  * Appends or replaces content of an existing plain text file, or creates a new one if it doesn't already exist. Please note that this recipes requires existing plain text files' format to be successfully parsable by OpenRewrite. If a file is left unchanged, it might be parsed as a `Quark` rather than plain text. In such case, use the `plainTextMask` option. See the [Gradle](https://docs.openrewrite.org/reference/gradle-plugin-configuration#configuring-the-rewrite-dsl) or [Maven](https://openrewrite.github.io/rewrite-maven-plugin/run-mojo.html#plainTextMasks) plugin configuration page.
* [org.openrewrite.text.ChangeText](/recipes/text/changetext.md)
  * **Change text**
  * Completely replaces the contents of the text file with other text. Use together with a `FindSourceFiles` precondition to limit which files are changed.
* [org.openrewrite.text.CreateTextFile](/recipes/text/createtextfile.md)
  * **Create text file**
  * Creates a new plain text file.
* [org.openrewrite.text.EndOfLineAtEndOfFile](/recipes/text/endoflineatendoffile.md)
  * **End of Line @ End of File (EOL @ EOF)**
  * Ensure that the file ends with the newline character.  *Note*: If this recipe modifies a file, it converts the file into plain text. As such, this recipe should be run after any recipe that modifies the language-specific LST.
* [org.openrewrite.text.Find](/recipes/text/find.md)
  * **Find text**
  * Textual search, optionally using Regular Expression (regex) to query.
* [org.openrewrite.text.FindAndReplace](/recipes/text/findandreplace.md)
  * **Find and replace**
  * Textual find and replace, optionally interpreting the search query as a Regular Expression (regex). When operating on source files that are language-specific Lossless Semantic Tree, such as Java or XML, this operation converts the source file to plain text for the rest of the recipe run. So if you are combining this recipe with language-specific recipes in a single recipe run put all the language-specific recipes before this recipe.
* [org.openrewrite.text.FindMultiselect](/recipes/text/findmultiselect.md)
  * **Experimental find text with multiselect**
  * Search for text, treating all textual sources as plain text. This version of the recipe exists to experiment with multiselect recipe options.
* [org.openrewrite.text.RemoveByteOrderMark](/recipes/text/removebyteordermark.md)
  * **Remove byte order mark (BOM)**
  * Removes UTF-8 byte order marks from the beginning of files.  The BOM character (U+FEFF) is generally unnecessary in UTF-8 files and can cause issues with some tools.

## rewrite-docker

_License: Apache License Version 2.0_

_18 recipes_

* [org.openrewrite.docker.AddAptGetCleanup](/recipes/docker/addaptgetcleanup.md)
  * **Add apt-get cleanup**
  * Adds cleanup commands to apt-get RUN instructions to reduce Docker image size. By default, adds 'rm -rf /var/lib/apt/lists/*' to remove cached package lists.
* [org.openrewrite.docker.AddOciLabels](/recipes/docker/addocilabels.md)
  * **Add OCI image labels**
  * Adds standard OCI (Open Container Initiative) image labels to a Dockerfile. These labels provide metadata about the image such as title, version, source, and license information. See https://github.com/opencontainers/image-spec/blob/main/annotations.md for the specification.
* [org.openrewrite.docker.AddOrUpdateLabel](/recipes/docker/addorupdatelabel.md)
  * **Add Docker LABEL instruction**
  * Adds or updates a LABEL instruction in a Dockerfile. By default, adds to the final stage only.
* [org.openrewrite.docker.AddUserInstruction](/recipes/docker/adduserinstruction.md)
  * **Add `USER` instruction**
  * Adds a `USER` instruction to run the container as a non-root user (CIS Docker Benchmark 4.1). By default, adds to the final stage only and skips if a `USER` instruction already exists.
* [org.openrewrite.docker.ChangeFrom](/recipes/docker/changefrom.md)
  * **Change Docker FROM**
  * Change the base image in a Dockerfile FROM instruction. Each `*` in an `old*` glob is a positional capture; `$N` in the paired `new*` substitutes capture N. `$0` substitutes the full original value; `\$` is a literal dollar.
* [org.openrewrite.docker.CombineRunInstructions](/recipes/docker/combineruninstructions.md)
  * **Combine consecutive `RUN` instructions**
  * Combines consecutive `RUN` instructions into a single instruction to reduce image layers. Only shell form `RUN` instructions without flags are combined.
* [org.openrewrite.docker.DockerBestPractices](/recipes/docker/dockerbestpractices.md)
  * **Apply Docker best practices**
  * Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices.
* [org.openrewrite.docker.DockerBuildOptimization](/recipes/docker/dockerbuildoptimization.md)
  * **Optimize Docker builds**
  * Apply build optimization best practices to Dockerfiles. This includes combining RUN instructions to reduce layers and adding cleanup commands to reduce image size.
* [org.openrewrite.docker.DockerSecurityBestPractices](/recipes/docker/dockersecuritybestpractices.md)
  * **Apply Docker security best practices**
  * Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9).
* [org.openrewrite.docker.NormalizeDockerHubImageName](/recipes/docker/normalizedockerhubimagename.md)
  * **Normalize Docker Hub image names**
  * Normalizes Docker Hub image names to their canonical short form by removing redundant registry prefixes like `docker.io/library/` or `index.docker.io/`.
* [org.openrewrite.docker.ReplaceAddWithCopy](/recipes/docker/replaceaddwithcopy.md)
  * **Replace `ADD` with `COPY`**
  * Replaces `ADD` instructions with `COPY` where appropriate. `ADD` is only kept when the source is a URL or a tar archive that should be auto-extracted. Using `COPY` is preferred for transparency (CIS Docker Benchmark 4.9).
* [org.openrewrite.docker.UseExecFormEntrypoint](/recipes/docker/useexecformentrypoint.md)
  * **Use exec form for `ENTRYPOINT` and `CMD`**
  * Converts shell form `ENTRYPOINT` and `CMD` instructions to exec form (JSON array). Exec form is preferred because it runs the command as PID 1, allowing it to receive Unix signals properly. Shell form wraps commands in `/bin/sh -c` which can cause signal handling issues.
* [org.openrewrite.docker.search.FindBaseImages](/recipes/docker/search/findbaseimages.md)
  * **Find Docker base images**
  * Find all base images (`FROM` instructions) in Dockerfiles.
* [org.openrewrite.docker.search.FindEndOfLifeImages](/recipes/docker/search/findendoflifeimages.md)
  * **Find end-of-life Docker base images**
  * Identifies Docker base images that have reached end-of-life. Using EOL images poses security risks as they no longer receive security updates. Detected images include EOL versions of Debian, Ubuntu, Alpine, Python, and Node.js.
* [org.openrewrite.docker.search.FindExposedPorts](/recipes/docker/search/findexposedports.md)
  * **Find exposed ports**
  * Find all `EXPOSE` instructions in Dockerfiles and report the exposed ports.
* [org.openrewrite.docker.search.FindMissingHealthcheck](/recipes/docker/search/findmissinghealthcheck.md)
  * **Find missing `HEALTHCHECK`**
  * Finds Dockerfiles where the final stage is missing a `HEALTHCHECK` instruction (CIS Docker Benchmark 4.6). Health checks help container orchestrators determine if a container is healthy and ready to receive traffic.
* [org.openrewrite.docker.search.FindRootUser](/recipes/docker/search/findrootuser.md)
  * **Find containers running as root**
  * Finds containers that run as root user (CIS Docker Benchmark 4.1). This includes explicit `USER root` or `USER 0` instructions, and optionally containers with no `USER` instruction in the final stage (which default to root).
* [org.openrewrite.docker.search.FindUnpinnedBaseImages](/recipes/docker/search/findunpinnedbaseimages.md)
  * **Find unpinned base images**
  * Finds FROM instructions that use unpinned base images (CIS Docker Benchmark 4.2). Images without an explicit tag default to 'latest', which is not reproducible. Images pinned by digest are considered acceptable.

## rewrite-gradle

_License: Apache License Version 2.0_

_74 recipes_

* [org.openrewrite.gradle.AddDependency](/recipes/gradle/adddependency.md)
  * **Add Gradle dependency**
  * Add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used.
* [org.openrewrite.gradle.AddJUnitPlatformLauncher](/recipes/gradle/addjunitplatformlauncher.md)
  * **Add JUnit Platform Launcher**
  * Add the JUnit Platform Launcher to the buildscript dependencies.
* [org.openrewrite.gradle.AddPlatformDependency](/recipes/gradle/addplatformdependency.md)
  * **Add Gradle platform dependency**
  * Add a gradle platform dependency to a `build.gradle` file in the correct configuration based on where it is used.
* [org.openrewrite.gradle.AddProperty](/recipes/gradle/addproperty.md)
  * **Add Gradle property**
  * Add a property to the `gradle.properties` file.
* [org.openrewrite.gradle.ChangeDependency](/recipes/gradle/changedependency.md)
  * **Change Gradle dependency**
  * Change a Gradle dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before.
* [org.openrewrite.gradle.ChangeDependencyArtifactId](/recipes/gradle/changedependencyartifactid.md)
  * **Change Gradle dependency artifact**
  * Change the artifact of a specified Gradle dependency.
* [org.openrewrite.gradle.ChangeDependencyClassifier](/recipes/gradle/changedependencyclassifier.md)
  * **Change a Gradle dependency classifier**
  * Changes classifier of an existing dependency declared in `build.gradle` files.
* [org.openrewrite.gradle.ChangeDependencyConfiguration](/recipes/gradle/changedependencyconfiguration.md)
  * **Change a Gradle dependency configuration**
  * A common example is the need to change `compile` to `api`/`implementation` as [part of the move](https://docs.gradle.org/current/userguide/upgrading_version_6.html) to Gradle 7.x and later.
* [org.openrewrite.gradle.ChangeDependencyExtension](/recipes/gradle/changedependencyextension.md)
  * **Change a Gradle dependency extension**
  * Changes extension of an existing dependency declared in `build.gradle` files.
* [org.openrewrite.gradle.ChangeDependencyGroupId](/recipes/gradle/changedependencygroupid.md)
  * **Change Gradle dependency group**
  * Change the group of a specified Gradle dependency.
* [org.openrewrite.gradle.ChangeExtraProperty](/recipes/gradle/changeextraproperty.md)
  * **Change Extra Property**
  * Gradle's [ExtraPropertiesExtension](https://docs.gradle.org/current/dsl/org.gradle.api.plugins.ExtraPropertiesExtension.html) is a commonly used mechanism for setting arbitrary key/value pairs on a project. This recipe will change the value of a property with the given key name if that key can be found. It assumes that the value being set is a String literal. Does not add the value if it does not already exist.
* [org.openrewrite.gradle.ChangeManagedDependency](/recipes/gradle/changemanageddependency.md)
  * **Change Gradle managed dependency**
  * Change a Gradle managed dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before. For now, only Spring Dependency Management Plugin entries are supported and no other forms of managed dependencies (yet).
* [org.openrewrite.gradle.ChangeTaskToTasksRegister](/recipes/gradle/changetasktotasksregister.md)
  * **Change Gradle task eager creation to lazy registration**
  * Changes eager task creation `task exampleName(type: ExampleType)` to lazy registration `tasks.register(&quot;exampleName&quot;, ExampleType)`. Also supports Kotlin DSL: `task&lt;ExampleType&gt;(&quot;exampleName&quot;)` to `tasks.register&lt;ExampleType&gt;(&quot;exampleName&quot;)`.
* [org.openrewrite.gradle.DependencyConstraintToRule](/recipes/gradle/dependencyconstrainttorule.md)
  * **Dependency constraint to resolution rule**
  * Gradle [dependency constraints](https://docs.gradle.org/current/userguide/dependency_constraints.html#dependency-constraints) are useful for managing the versions of transitive dependencies. Some plugins, such as the Spring Dependency Management plugin, do not respect these constraints. This recipe converts constraints into [resolution rules](https://docs.gradle.org/current/userguide/resolution_rules.html), which can achieve similar effects to constraints but are harder for plugins to ignore.
* [org.openrewrite.gradle.DependencyUseMapNotation](/recipes/gradle/dependencyusemapnotation.md)
  * **Use `Map` notation for Gradle dependency declarations**
  * In Gradle, dependencies can be expressed as a `String` like `&quot;groupId:artifactId:version&quot;`, or equivalently as a `Map` like `group: 'groupId', name: 'artifactId', version: 'version'` (groovy) or `group = &quot;groupId&quot;, name = &quot;artifactId&quot;, version = &quot;version&quot;` (kotlin). This recipe replaces dependencies represented as `Strings` with an equivalent dependency represented as a `Map`.
* [org.openrewrite.gradle.DependencyUseStringNotation](/recipes/gradle/dependencyusestringnotation.md)
  * **Use `String` notation for Gradle dependency declarations**
  * In Gradle, dependencies can be expressed as a `String` like `&quot;groupId:artifactId:version&quot;`, or equivalently as a `Map` like `group: 'groupId', name: 'artifactId', version: 'version'`, or as positional parameters like `(&quot;groupId&quot;, &quot;artifactId&quot;, &quot;version&quot;)`. This recipe replaces dependencies represented as `Maps` or positional parameters with an equivalent dependency represented as a `String`, as recommended per the [Gradle best practices for dependencies to use a single GAV](https://docs.gradle.org/8.14.2/userguide/best_practices_dependencies.html#single-gav-string).
* [org.openrewrite.gradle.EnableDevelocityBuildCache](/recipes/gradle/enabledevelocitybuildcache.md)
  * **Enable Develocity build cache**
  * Adds `buildCache` configuration to `develocity` where not yet present.
* [org.openrewrite.gradle.EnableGradleBuildCache](/recipes/gradle/enablegradlebuildcache.md)
  * **Enable Gradle build cache**
  * Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information.
* [org.openrewrite.gradle.EnableGradleParallelExecution](/recipes/gradle/enablegradleparallelexecution.md)
  * **Enable Gradle parallel execution**
  * Most builds consist of more than one project and some of those projects are usually independent of one another. Yet Gradle will only run one task at a time by default, regardless of the project structure. By using the `--parallel` switch, you can force Gradle to execute tasks in parallel as long as those tasks are in different projects. See the [Gradle performance documentation](https://docs.gradle.org/current/userguide/performance.html#parallel_execution) for more information.
* [org.openrewrite.gradle.GradleBestPractices](/recipes/gradle/gradlebestpractices.md)
  * **Apply Gradle best practices**
  * Apply a set of [Gradle best practices](https://docs.gradle.org/current/userguide/best_practices_general.html) to the build files, for more efficient and idiomatic builds.
* [org.openrewrite.gradle.MigrateDependenciesToVersionCatalog](/recipes/gradle/migratedependenciestoversioncatalog.md)
  * **Migrate Gradle project dependencies to version catalog**
  * Migrates Gradle project dependencies to use the [version catalog](https://docs.gradle.org/current/userguide/platforms.html) feature. Supports migrating dependency declarations of various forms:  * `String` notation: `&quot;group:artifact:version&quot;`  * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`  * Property references: `&quot;group:artifact:$version&quot;` or `&quot;group:artifact:$\{version\}&quot;`  The recipe will:  * Create a `gradle/libs.versions.toml` file with version declarations  * Replace dependency declarations with catalog references (e.g., `libs.springCore`)  * Migrate version properties from `gradle.properties` to the version catalog  * Preserve project dependencies unchanged  **Note:** If a version catalog already exists, the recipe will not modify it.
* [org.openrewrite.gradle.MigrateToGradle5](/recipes/gradle/migratetogradle5.md)
  * **Migrate to Gradle 5 from Gradle 4**
  * Migrate to version 5.x. See the Gradle upgrade guide from [version 4.x to 5.0](https://docs.gradle.org/current/userguide/upgrading_version_4.html) for more information.
* [org.openrewrite.gradle.MigrateToGradle6](/recipes/gradle/migratetogradle6.md)
  * **Migrate to Gradle 6 from Gradle 5**
  * Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information.
* [org.openrewrite.gradle.MigrateToGradle7](/recipes/gradle/migratetogradle7.md)
  * **Migrate to Gradle 7 from Gradle 6**
  * Migrate to version 7.x. See the Gradle upgrade guide from [version 6.x to 7.0](https://docs.gradle.org/current/userguide/upgrading_version_6.html) for more information.
* [org.openrewrite.gradle.MigrateToGradle8](/recipes/gradle/migratetogradle8.md)
  * **Migrate to Gradle 8 from Gradle 7**
  * Migrate to version 8.x. See the Gradle upgrade guide from [version 7.x to 8.0](https://docs.gradle.org/current/userguide/upgrading_version_7.html) and [version 8.x to latest](https://docs.gradle.org/current/userguide/upgrading_version_8.html) for more information.
* [org.openrewrite.gradle.MigrateToGradle9](/recipes/gradle/migratetogradle9.md)
  * **Migrate to Gradle 9 from Gradle 8**
  * Migrate to version 9.x. See the Gradle upgrade guide from [version 8.x to 9.0](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information.
* [org.openrewrite.gradle.RemoveDependency](/recipes/gradle/removedependency.md)
  * **Remove a Gradle dependency**
  * Removes a single dependency from the dependencies section of the `build.gradle`.
* [org.openrewrite.gradle.RemoveEnableFeaturePreview](/recipes/gradle/removeenablefeaturepreview.md)
  * **Remove an enabled Gradle preview feature**
  * Remove an enabled Gradle preview feature from `settings.gradle`.
* [org.openrewrite.gradle.RemoveExtension](/recipes/gradle/removeextension.md)
  * **Remove build extension by name**
  * Remove a Gradle build extension from `settings.gradle(.kts)` or `build.gradle(.kts)` files.
* [org.openrewrite.gradle.RemoveRedundantDependencyVersions](/recipes/gradle/removeredundantdependencyversions.md)
  * **Remove redundant explicit dependencies and versions**
  * Remove explicitly-specified dependency versions that are managed by a Gradle `platform`, `enforcedPlatform` or the `io.spring.dependency-management` plugin. Also removes redundant direct dependencies and dependency constraints that are already satisfied by transitive dependencies.
* [org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules](/recipes/gradle/removeredundantsecurityresolutionrules.md)
  * **Remove redundant security resolution rules**
  * Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified.
* [org.openrewrite.gradle.RemoveRepository](/recipes/gradle/removerepository.md)
  * **Remove repository**
  * Removes a repository from Gradle build scripts. Named repositories include &quot;jcenter&quot;, &quot;mavenCentral&quot;, &quot;mavenLocal&quot;, and &quot;google&quot;.
* [org.openrewrite.gradle.SortDependencies](/recipes/gradle/sortdependencies.md)
  * **Sort Gradle dependencies**
  * Sort dependencies in `build.gradle` and `build.gradle.kts` files. Dependencies are sorted alphabetically by configuration name (e.g. `api`, `implementation`), then by groupId, then by artifactId.
* [org.openrewrite.gradle.SyncGradleExtPropertiesWithBom](/recipes/gradle/syncgradleextpropertieswithbom.md)
  * **Sync Gradle ext properties with BOM**
  * Downloads a BOM and compares its properties against Gradle ext properties. When the BOM defines a higher version for a property, the ext property is updated to match (or removed if `removeRedundantOverrides` is enabled).
* [org.openrewrite.gradle.UpdateGradleWrapper](/recipes/gradle/updategradlewrapper.md)
  * **Update Gradle wrapper**
  * Update the version of Gradle used in an existing Gradle wrapper. Queries `downloads.gradle.org` to determine the available releases, but prefers the artifact repository URL which already exists within the wrapper properties file. If your artifact repository does not contain the same Gradle distributions as `downloads.gradle.org`, then the recipe may suggest a version which is not available in your artifact repository.
* [org.openrewrite.gradle.UpdateJavaCompatibility](/recipes/gradle/updatejavacompatibility.md)
  * **Update Gradle project Java compatibility**
  * Find and updates the Java compatibility for the Gradle project.
* [org.openrewrite.gradle.UpgradeDependencyVersion](/recipes/gradle/upgradedependencyversion.md)
  * **Upgrade Gradle dependency versions**
  * Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:  * `String` notation: `&quot;group:artifact:version&quot;`   * `Map` notation: `group: 'group', name: 'artifact', version: 'version'` Can update version numbers which are defined earlier in the same file in variable declarations.
* [org.openrewrite.gradle.UpgradeTransitiveDependencyVersion](/recipes/gradle/upgradetransitivedependencyversion.md)
  * **Upgrade transitive Gradle dependencies**
  * Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management.
* [org.openrewrite.gradle.UseAssignmentForPropertySyntax](/recipes/gradle/useassignmentforpropertysyntax.md)
  * **Use `=` assignment syntax for well-known Gradle properties**
  * Converts deprecated Groovy DSL property assignment syntax from space/method-call form (e.g., `description 'text'` or `description('text')`) to assignment form (`description = 'text'`) for well-known Gradle project and task properties. See the [Gradle 8.14 upgrade guide](https://docs.gradle.org/8.14/userguide/upgrading_version_8.html#groovy_space_assignment_syntax) for more information.
* [org.openrewrite.gradle.UsePropertyAssignmentSyntax](/recipes/gradle/usepropertyassignmentsyntax.md)
  * **Use `=` assignment syntax for Gradle properties**
  * Converts deprecated Groovy DSL property assignment syntax from space/method-call form (e.g., `description 'text'` or `description('text')`) to assignment form (`description = 'text'`). Addresses Gradle 8.14 deprecation: &quot;Properties should be assigned using the 'propName = value' syntax.&quot;.
* [org.openrewrite.gradle.gradle8.JacocoReportDeprecations](/recipes/gradle/gradle8/jacocoreportdeprecations.md)
  * **Replace Gradle 8 introduced deprecations in JaCoCo report task**
  * Set the `enabled` to `required` and the `destination` to `outputLocation` for Reports deprecations that were removed in gradle 8. See [the gradle docs on this topic](https://docs.gradle.org/current/userguide/upgrading_version_7.html#report_and_testreport_api_cleanup).
* [org.openrewrite.gradle.gradle9.OneDependencyDeclarationPerStatement](/recipes/gradle/gradle9/onedependencydeclarationperstatement.md)
  * **Use one dependency declaration per statement**
  * The Gradle Groovy DSL accepts multiple coordinates in a single configuration call (e.g. `implementation 'a:b:1.0', 'c:d:2.0'`), but the Kotlin DSL does not. Gradle's best practices recommend declaring a single dependency per statement; see the [Gradle dependency best practices](https://docs.gradle.org/current/userguide/best_practices_dependencies.html). This recipe splits multi-coordinate Groovy DSL configuration calls into one call per coordinate. Run this as a cleanup pass before other dependency-aware recipes (e.g. `UpgradeDependencyVersion`, `ChangeDependency`, `RemoveDependency`): those recipes use the `GradleDependency` trait, which only inspects the first argument of a configuration call. Coordinates in later positions are invisible to them until this recipe reshapes the source into one declaration per statement.
* [org.openrewrite.gradle.gradle9.RewriteSpreadAllInConfigurationsBlock](/recipes/gradle/gradle9/rewritespreadallinconfigurationsblock.md)
  * **Replace spread-`all*` calls in `configurations` blocks with `configurations.all \{ \}`**
  * Gradle 9 throws `Cannot mutate the dependencies of configuration ':all' after the configuration was resolved.` when a `configurations \{ \}` closure uses Groovy's spread-dot form `all*.&lt;method&gt;(args)`. Rewrite each such call to the closure form `configurations.all \{ &lt;method&gt;(args) \}`, which preserves eager-`all` semantics but is accepted by Gradle 9. Only applied when every statement in the `configurations \{ \}` block uses the spread form; mixed blocks are left untouched for manual review.
* [org.openrewrite.gradle.gradle9.UseJavaExtensionBlock](/recipes/gradle/gradle9/usejavaextensionblock.md)
  * **Move `sourceCompatibility` and `targetCompatibility` into the `java \{ \}` extension block**
  * Gradle 9 removed the `JavaPluginConvention` (deprecated in 8.2). Top-level `sourceCompatibility` and `targetCompatibility` assignments in a Groovy build script previously delegated to that convention object and stop working in Gradle 9. Move them into the `java \{ \}` extension block, normalizing values to `JavaVersion.VERSION_&lt;n&gt;` and adding the missing counterpart so both properties are set explicitly. See the [Gradle upgrade guide](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information.
* [org.openrewrite.gradle.gradle9.UseMainClassProperty](/recipes/gradle/gradle9/usemainclassproperty.md)
  * **Use `mainClass` instead of `main` for `JavaExec` tasks**
  * The `main` property on `JavaExec` tasks was deprecated in Gradle 7.1 and removed in Gradle 9.0. Use the `mainClass` property instead. See the [Gradle upgrade guide](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information.
* [org.openrewrite.gradle.gradle9.UseMainClassPropertyForApplication](/recipes/gradle/gradle9/usemainclasspropertyforapplication.md)
  * **Use `application \{ mainClass \}` instead of `mainClassName`**
  * The `mainClassName` property on the `application` extension was deprecated in Gradle 6.4 and removed in Gradle 9.0. Use `application \{ mainClass = ... \}` instead. Top-level `mainClassName` assignments are wrapped in an `application` block. See the [Gradle upgrade guide](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information.
* [org.openrewrite.gradle.gradle9.UseVersionClosure](/recipes/gradle/gradle9/useversionclosure.md)
  * **Use `version \{ \}` closure instead of `version = \{ \}` assignment**
  * Converts `version = \{ ... \}` assignment syntax to `version \{ ... \}` closure call syntax in Gradle dependency declarations. The assignment form is not valid Gradle DSL; the closure form invokes the version spec method directly.
* [org.openrewrite.gradle.plugins.AddBuildPlugin](/recipes/gradle/plugins/addbuildplugin.md)
  * **Add Gradle plugin**
  * Add a build plugin to a Gradle build file's `plugins` block.
* [org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin](/recipes/gradle/plugins/adddevelocitygradleplugin.md)
  * **Add the Develocity Gradle plugin**
  * Add the Develocity Gradle plugin to settings.gradle files.
* [org.openrewrite.gradle.plugins.AddSettingsPlugin](/recipes/gradle/plugins/addsettingsplugin.md)
  * **Add Gradle settings plugin**
  * Add plugin to Gradle settings file `plugins` block by id.
* [org.openrewrite.gradle.plugins.AddSettingsPluginRepository](/recipes/gradle/plugins/addsettingspluginrepository.md)
  * **Add a Gradle settings repository**
  * Add a Gradle settings repository to `settings.gradle(.kts)`.
* [org.openrewrite.gradle.plugins.ChangePlugin](/recipes/gradle/plugins/changeplugin.md)
  * **Change a Gradle plugin**
  * Changes the selected Gradle plugin to the new plugin.
* [org.openrewrite.gradle.plugins.ChangePluginVersion](/recipes/gradle/plugins/changepluginversion.md)
  * **Change a Gradle plugin version by id**
  * Change a Gradle plugin by id to a later version.
* [org.openrewrite.gradle.plugins.MigrateGradleEnterpriseToDevelocity](/recipes/gradle/plugins/migrategradleenterprisetodevelocity.md)
  * **Migrate from Gradle Enterprise to Develocity**
  * Migrate from the Gradle Enterprise Gradle plugin to the Develocity Gradle plugin.
* [org.openrewrite.gradle.plugins.RemoveBuildPlugin](/recipes/gradle/plugins/removebuildplugin.md)
  * **Remove Gradle plugin**
  * Remove plugin from Gradle `plugins` block by its id. Does not remove plugins from the `buildscript` block.
* [org.openrewrite.gradle.plugins.RemoveDevelocity](/recipes/gradle/plugins/removedevelocity.md)
  * **Remove Develocity**
  * Remove the Develocity plugin and configuration from the Gradle build and settings files.
* [org.openrewrite.gradle.plugins.RemoveDevelocityConfiguration](/recipes/gradle/plugins/removedevelocityconfiguration.md)
  * **Remove Develocity configuration**
  * Remove the Develocity Gradle plugin and associated configuration.
* [org.openrewrite.gradle.plugins.RemoveSettingsPlugin](/recipes/gradle/plugins/removesettingsplugin.md)
  * **Remove Gradle settings plugin**
  * Remove plugin from Gradle settings file `plugins` block by id.
* [org.openrewrite.gradle.plugins.UpgradePluginVersion](/recipes/gradle/plugins/upgradepluginversion.md)
  * **Update a Gradle plugin by id**
  * Update a Gradle plugin by id to a later version defined by the plugins DSL. To upgrade a plugin dependency defined by `buildscript.dependencies`, use the `UpgradeDependencyVersion` recipe instead.
* [org.openrewrite.gradle.search.DependencyInsight](/recipes/gradle/search/dependencyinsight.md)
  * **Gradle dependency insight**
  * Find direct and transitive dependencies matching a group, artifact, resolved version, and optionally a configuration name. Results include dependencies that either directly match or transitively include a matching dependency.
* [org.openrewrite.gradle.search.DoesNotIncludeDependency](/recipes/gradle/search/doesnotincludedependency.md)
  * **Does not include Gradle dependency**
  * A precondition which returns false if visiting a Gradle file which includes the specified dependency in the classpath of some scope. For compatibility with multimodule projects, this should most often be applied as a precondition.
* [org.openrewrite.gradle.search.EffectiveGradlePluginRepositories](/recipes/gradle/search/effectivegradlepluginrepositories.md)
  * **List effective Gradle plugin repositories**
  * Lists the Gradle plugin repositories that would be used for plugin resolution, in order of precedence. This includes Maven repositories defined in the settings.gradle pluginManagement section and build.gradle buildscript repositories as determined when the LST was produced.
* [org.openrewrite.gradle.search.EffectiveGradleRepositories](/recipes/gradle/search/effectivegradlerepositories.md)
  * **List effective Gradle project repositories**
  * Lists the Gradle project repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Gradle build files and settings as determined when the LST was produced.
* [org.openrewrite.gradle.search.FindDependency](/recipes/gradle/search/finddependency.md)
  * **Find Gradle dependency**
  * Finds dependencies declared in gradle build files. Each match is also recorded as a row in the `DependenciesDeclared` data table. See the [reference](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph) on Gradle configurations or the diagram below for a description of what configuration to use. A project's compile and runtime classpath is based on these configurations.  &lt;img alt=&quot;Gradle compile classpath&quot; src=&quot;https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-main.png&quot; width=&quot;200px&quot;/&gt; A project's test classpath is based on these configurations.  &lt;img alt=&quot;Gradle test classpath&quot; src=&quot;https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-test.png&quot; width=&quot;200px&quot;/&gt;.
* [org.openrewrite.gradle.search.FindDependencyHandler](/recipes/gradle/search/finddependencyhandler.md)
  * **Find Gradle `dependencies` blocks**
  * Find the dependency handler containing any number of dependency definitions.
* [org.openrewrite.gradle.search.FindGradleProject](/recipes/gradle/search/findgradleproject.md)
  * **Find Gradle projects**
  * Gradle projects are those with `build.gradle` or `build.gradle.kts` files.
* [org.openrewrite.gradle.search.FindGradleWrapper](/recipes/gradle/search/findgradlewrapper.md)
  * **Find Gradle wrappers**
  * Find Gradle wrappers.
* [org.openrewrite.gradle.search.FindJVMTestSuites](/recipes/gradle/search/findjvmtestsuites.md)
  * **Find Gradle JVMTestSuite plugin configuration**
  * Find Gradle JVMTestSuite plugin configurations and produce a data table.
* [org.openrewrite.gradle.search.FindPlugins](/recipes/gradle/search/findplugins.md)
  * **Find Gradle plugin**
  * Find a Gradle plugin by id and/or class name. For best results both should be specified, as one cannot automatically be used to infer the other.
* [org.openrewrite.gradle.search.FindRepository](/recipes/gradle/search/findrepository.md)
  * **Find Gradle repository**
  * Find a Gradle repository by url.
* [org.openrewrite.gradle.search.FindRepositoryOrder](/recipes/gradle/search/findrepositoryorder.md)
  * **Gradle repository order**
  * Determine the order in which dependencies will be resolved for each `build.gradle` based on its defined repositories as determined when the LST was produced.
* [org.openrewrite.gradle.search.ModuleHasDependency](/recipes/gradle/search/modulehasdependency.md)
  * **Module has dependency**
  * Searches for Gradle Projects (modules) that have a dependency matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file that use the dependency, use the `FindDependency` recipe instead.
* [org.openrewrite.gradle.search.ModuleHasPlugin](/recipes/gradle/search/modulehasplugin.md)
  * **Module has plugin**
  * Searches for Gradle Projects (modules) that have a plugin matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring dependency management plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead.
* [org.openrewrite.gradle.security.UseHttpsForRepositories](/recipes/gradle/security/usehttpsforrepositories.md)
  * **Use HTTPS for repositories**
  * Use HTTPS for repository URLs.

## rewrite-groovy

_License: Apache License Version 2.0_

_4 recipes_

* [org.openrewrite.groovy.format.AutoFormat](/recipes/groovy/format/autoformat.md)
  * **Format Groovy code**
  * Format Groovy code using a standard comprehensive set of Groovy formatting recipes.
* [org.openrewrite.groovy.format.GStringCurlyBraces](/recipes/groovy/format/gstringcurlybraces.md)
  * **Groovy GString curly braces**
  * In Groovy [GStrings](https://docs.groovy-lang.org/latest/html/api/groovy/lang/GString.html), curly braces are optional for single variable expressions. This recipe adds them, so that the expression is always surrounded by curly braces.
* [org.openrewrite.groovy.format.OmitParenthesesForLastArgumentLambda](/recipes/groovy/format/omitparenthesesforlastargumentlambda.md)
  * **Move a closure which is the last argument of a method invocation out of parentheses**
  * Groovy allows a shorthand syntax that allows a closure to be placed outside of parentheses.
* [org.openrewrite.groovy.format.OmitParenthesesFormat](/recipes/groovy/format/omitparenthesesformat.md)
  * **Stylize Groovy code to omit parentheses**
  * Omit parentheses for last argument lambdas in Groovy code.

## rewrite-hcl

_License: Apache License Version 2.0_

_11 recipes_

* [org.openrewrite.hcl.DeleteContent](/recipes/hcl/deletecontent.md)
  * **Delete content**
  * Delete HCL content by path.
* [org.openrewrite.hcl.MoveContentToFile](/recipes/hcl/movecontenttofile.md)
  * **Move content to another file**
  * Move content to another HCL file, deleting it in the original file.
* [org.openrewrite.hcl.ReplaceLegacyAttributeIndexSyntax](/recipes/hcl/replacelegacyattributeindexsyntax.md)
  * **Replace legacy attribute index syntax**
  * Replace legacy attribute index syntax (`.0`) with the new syntax (`[0]`).
* [org.openrewrite.hcl.format.AutoFormat](/recipes/hcl/format/autoformat.md)
  * **Format HCL code**
  * Format HCL code using a standard comprehensive set of HCL formatting recipes.
* [org.openrewrite.hcl.format.BlankLines](/recipes/hcl/format/blanklines.md)
  * **Blank lines**
  * Add and/or remove blank lines.
* [org.openrewrite.hcl.format.NormalizeFormat](/recipes/hcl/format/normalizeformat.md)
  * **Normalize format**
  * Move whitespace to the outermost LST element possible.
* [org.openrewrite.hcl.format.RemoveTrailingWhitespace](/recipes/hcl/format/removetrailingwhitespace.md)
  * **Remove trailing whitespace**
  * Remove any extra trailing whitespace from the end of each line.
* [org.openrewrite.hcl.format.Spaces](/recipes/hcl/format/spaces.md)
  * **Spaces**
  * Format whitespace in HCL code.
* [org.openrewrite.hcl.format.TabsAndIndents](/recipes/hcl/format/tabsandindents.md)
  * **Tabs and indents**
  * Format tabs and indents in HCL code.
* [org.openrewrite.hcl.search.FindAndReplaceLiteral](/recipes/hcl/search/findandreplaceliteral.md)
  * **Find and replace literals in HCL files**
  * Find and replace literal values in HCL files. This recipe parses the source files on which it runs as HCL, meaning you can execute HCL language-specific recipes before and after this recipe in a single recipe run.
* [org.openrewrite.hcl.search.FindContent](/recipes/hcl/search/findcontent.md)
  * **Find content**
  * Find HCL content by path.

## rewrite-java

_License: Apache License Version 2.0_

_101 recipes_

* [org.openrewrite.java.AddApache2LicenseHeader](/recipes/java/addapache2licenseheader.md)
  * **Add ASLv2 license header**
  * Adds the Apache Software License Version 2.0 to Java source files which are missing a license header.
* [org.openrewrite.java.AddCommentToImport](/recipes/java/addcommenttoimport.md)
  * **Add comment to import statement**
  * Add a comment to an import statement in a Java source file.
* [org.openrewrite.java.AddCommentToMethod](/recipes/java/addcommenttomethod.md)
  * **Add comment to method declarations**
  * Add a comment to method declarations in a Java source file.
* [org.openrewrite.java.AddCommentToMethodInvocations](/recipes/java/addcommenttomethodinvocations.md)
  * **Add comment to method invocations**
  * Add a comment to method invocations in a Java source file.
* [org.openrewrite.java.AddLicenseHeader](/recipes/java/addlicenseheader.md)
  * **Add license header**
  * Adds license headers to Java source files when missing. Does not override existing license headers.
* [org.openrewrite.java.AddLiteralMethodArgument](/recipes/java/addliteralmethodargument.md)
  * **Add a literal method argument**
  * Add a literal `String` or primitive argument to method invocations.
* [org.openrewrite.java.AddMethodParameter](/recipes/java/addmethodparameter.md)
  * **Add method parameter to a method declaration**
  * Adds a new method parameter to an existing method declaration.
* [org.openrewrite.java.AddNullMethodArgument](/recipes/java/addnullmethodargument.md)
  * **Add a `null` method argument**
  * Add a `null` argument to method invocations.
* [org.openrewrite.java.AddOrUpdateAnnotationAttribute](/recipes/java/addorupdateannotationattribute.md)
  * **Add or update annotation attribute**
  * Some annotations accept arguments. This recipe sets an existing argument to the specified value, or adds the argument if it is not already set.
* [org.openrewrite.java.ChangeAnnotationAttributeName](/recipes/java/changeannotationattributename.md)
  * **Change annotation attribute name**
  * Some annotations accept arguments. This recipe renames an existing attribute.
* [org.openrewrite.java.ChangeMethodAccessLevel](/recipes/java/changemethodaccesslevel.md)
  * **Change method access level**
  * Change the access level (public, protected, private, package private) of a method.
* [org.openrewrite.java.ChangeMethodInvocationReturnType](/recipes/java/changemethodinvocationreturntype.md)
  * **Change method invocation return type**
  * Changes the return type of a method invocation.
* [org.openrewrite.java.ChangeMethodName](/recipes/java/changemethodname.md)
  * **Change method name**
  * Rename a method.
* [org.openrewrite.java.ChangeMethodTargetToStatic](/recipes/java/changemethodtargettostatic.md)
  * **Change method target to static**
  * Change method invocations to static method calls.
* [org.openrewrite.java.ChangeMethodTargetToVariable](/recipes/java/changemethodtargettovariable.md)
  * **Change method target to variable**
  * Change method invocations to method calls on a variable.
* [org.openrewrite.java.ChangePackage](/recipes/java/changepackage.md)
  * **Rename package name**
  * A recipe that will rename a package name in package statements, imports, and fully-qualified types.
* [org.openrewrite.java.ChangePackageInStringLiteral](/recipes/java/changepackageinstringliteral.md)
  * **Rename package name in String literals**
  * A recipe that will rename a package name in String literals.
* [org.openrewrite.java.ChangeStaticFieldToMethod](/recipes/java/changestaticfieldtomethod.md)
  * **Change static field access to static method access**
  * Migrate accesses to a static field to invocations of a static method.
* [org.openrewrite.java.ChangeType](/recipes/java/changetype.md)
  * **Change type**
  * Change a given type to another.
* [org.openrewrite.java.ChangeTypeInStringLiteral](/recipes/java/changetypeinstringliteral.md)
  * **Change type in String literals**
  * Change a given type to another when used in a String literal.
* [org.openrewrite.java.CreateEmptyJavaClass](/recipes/java/createemptyjavaclass.md)
  * **Create Java class**
  * Create a new, empty Java class.
* [org.openrewrite.java.DeleteMethodArgument](/recipes/java/deletemethodargument.md)
  * **Delete method argument**
  * Delete an argument from method invocations.
* [org.openrewrite.java.InlineMethodCalls](/recipes/java/inlinemethodcalls.md)
  * **Inline method calls**
  * Inline method calls using a template replacement pattern. Supports both method invocations and constructor calls, with optional imports.
* [org.openrewrite.java.NoStaticImport](/recipes/java/nostaticimport.md)
  * **Remove static import**
  * Removes static imports and replaces them with qualified references. For example, `emptyList()` becomes `Collections.emptyList()`.
* [org.openrewrite.java.OrderImports](/recipes/java/orderimports.md)
  * **Order imports**
  * Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does.
* [org.openrewrite.java.RandomizeId](/recipes/java/randomizeid.md)
  * **Randomize tree IDs**
  * Scramble the IDs. This was intended as a utility to test _en masse_ different techniques for UUID generation and compare their relative performance outside a microbenchmark.
* [org.openrewrite.java.RecipeMarkupDemonstration](/recipes/java/recipemarkupdemonstration.md)
  * **Demonstrate rendering of `Markup` markers**
  * Tooling may decide to elide or display differently markup of different levels.
* [org.openrewrite.java.RemoveAnnotation](/recipes/java/removeannotation.md)
  * **Remove annotation**
  * Remove matching annotations wherever they occur.
* [org.openrewrite.java.RemoveAnnotationAttribute](/recipes/java/removeannotationattribute.md)
  * **Remove annotation attribute**
  * Some annotations accept arguments. This recipe removes an existing attribute.
* [org.openrewrite.java.RemoveImplements](/recipes/java/removeimplements.md)
  * **Remove interface implementations**
  * Removes `implements` clauses from classes implementing the specified interface. Removes `@Overrides` annotations from methods which no longer override anything.
* [org.openrewrite.java.RemoveMethodInvocations](/recipes/java/removemethodinvocations.md)
  * **Remove method invocations**
  * Remove method invocations if syntactically safe.
* [org.openrewrite.java.RemoveMethodThrows](/recipes/java/removemethodthrows.md)
  * **Remove elements from a method declaration `throws` clause**
  * Remove specific, or all exceptions from a method declaration `throws` clause.
* [org.openrewrite.java.RemoveObjectsIsNull](/recipes/java/removeobjectsisnull.md)
  * **Transform calls to `Objects.isNull(..)` and `Objects.nonNull(..)`**
  * Replace calls to `Objects.isNull(..)` and `Objects.nonNull(..)` with a simple null check. Using these methods outside of stream predicates is not idiomatic.
* [org.openrewrite.java.RemoveUnusedImports](/recipes/java/removeunusedimports.md)
  * **Remove unused imports**
  * Remove imports for types that are not referenced. As a precaution against incorrect changes no imports will be removed from any source where unknown types are referenced.
* [org.openrewrite.java.ReorderMethodArguments](/recipes/java/reordermethodarguments.md)
  * **Reorder method arguments**
  * Reorder method arguments into the specified order.
* [org.openrewrite.java.ReplaceAnnotation](/recipes/java/replaceannotation.md)
  * **Replace annotation**
  * Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement.
* [org.openrewrite.java.ReplaceConstant](/recipes/java/replaceconstant.md)
  * **Replace constant with literal value**
  * Replace a named constant with a literal value when you wish to remove the old constant. A `String` literal must include escaped quotes.
* [org.openrewrite.java.ReplaceConstantWithAnotherConstant](/recipes/java/replaceconstantwithanotherconstant.md)
  * **Replace constant with another constant**
  * Replace a constant with another constant, adding/removing import on class if needed.
* [org.openrewrite.java.ReplaceMethodInvocationWithConstant](/recipes/java/replacemethodinvocationwithconstant.md)
  * **Replace method invocation with constant**
  * Replace all method invocations matching the method pattern with the specified constant.
* [org.openrewrite.java.ReplaceStringLiteralValue](/recipes/java/replacestringliteralvalue.md)
  * **Replace `String` literal**
  * Replace the value of a complete `String` literal.
* [org.openrewrite.java.ReplaceStringLiteralWithConstant](/recipes/java/replacestringliteralwithconstant.md)
  * **Replace String literal with constant**
  * Replace String literal with constant, adding import on class if needed.
* [org.openrewrite.java.ShortenFullyQualifiedTypeReferences](/recipes/java/shortenfullyqualifiedtypereferences.md)
  * **Add imports for fully qualified references to types**
  * Any fully qualified references to Java types will be replaced with corresponding simple names and import statements, provided that it doesn't result in any conflicts with other imports or types declared in the local compilation unit.
* [org.openrewrite.java.SimplifyMethodChain](/recipes/java/simplifymethodchain.md)
  * **Simplify a call chain**
  * Simplify `a.b().c()` to `a.d()`.
* [org.openrewrite.java.SimplifySingleElementAnnotation](/recipes/java/simplifysingleelementannotation.md)
  * **Simplify single-element annotation**
  * This recipe will remove the attribute `value` on single-element annotations. According to JLS, a _single-element annotation_, is a shorthand designed for use with single-element annotation types.
* [org.openrewrite.java.UpdateSourcePositions](/recipes/java/updatesourcepositions.md)
  * **Update source positions**
  * Calculate start position and length for every LST element.
* [org.openrewrite.java.UseStaticImport](/recipes/java/usestaticimport.md)
  * **Use static import**
  * Removes unnecessary receiver types from static method invocations. For example, `Collections.emptyList()` becomes `emptyList()`.
* [org.openrewrite.java.ai.ClassDefinitionLength](/recipes/java/ai/classdefinitionlength.md)
  * **Calculate token length of classes**
  * Locates class definitions and predicts the number of token in each.
* [org.openrewrite.java.ai.MethodDefinitionLength](/recipes/java/ai/methoddefinitionlength.md)
  * **Calculate token length of method definitions**
  * Locates method definitions and predicts the number of token in each.
* [org.openrewrite.java.format.AutoFormat](/recipes/java/format/autoformat.md)
  * **Format Java code**
  * Format Java code using a standard comprehensive set of Java formatting recipes.
* [org.openrewrite.java.format.BlankLines](/recipes/java/format/blanklines.md)
  * **Blank lines**
  * Add and/or remove blank lines.
* [org.openrewrite.java.format.EmptyNewlineAtEndOfFile](/recipes/java/format/emptynewlineatendoffile.md)
  * **End files with a single newline**
  * Some tools work better when files end with an empty line.
* [org.openrewrite.java.format.MethodParamPad](/recipes/java/format/methodparampad.md)
  * **Method parameter padding**
  * Fixes whitespace padding between the identifier of a method definition or method invocation and the left parenthesis of the parameter list. For example, when configured to remove spacing, `someMethodInvocation (x);` becomes `someMethodInvocation(x)`.
* [org.openrewrite.java.format.NoWhitespaceAfter](/recipes/java/format/nowhitespaceafter.md)
  * **No whitespace after**
  * Removes unnecessary whitespace appearing after a token. A linebreak after a token is allowed unless `allowLineBreaks` is set to `false`, in which case it will be removed.
* [org.openrewrite.java.format.NoWhitespaceBefore](/recipes/java/format/nowhitespacebefore.md)
  * **No whitespace before**
  * Removes unnecessary whitespace preceding a token. A linebreak before a token will be removed unless `allowLineBreaks` is set to `true`.
* [org.openrewrite.java.format.NormalizeFormat](/recipes/java/format/normalizeformat.md)
  * **Normalize format**
  * Move whitespace to the outermost LST element possible.
* [org.openrewrite.java.format.NormalizeLineBreaks](/recipes/java/format/normalizelinebreaks.md)
  * **Normalize line breaks**
  * Consistently use either Windows style (CRLF) or Linux style (LF) line breaks. If no `GeneralFormatStyle` is specified this will use whichever style of line endings are more common.
* [org.openrewrite.java.format.NormalizeTabsOrSpaces](/recipes/java/format/normalizetabsorspaces.md)
  * **Normalize to tabs or spaces**
  * Consistently use either tabs or spaces in indentation.
* [org.openrewrite.java.format.PadEmptyForLoopComponents](/recipes/java/format/pademptyforloopcomponents.md)
  * **Pad empty `for` loop components**
  * Fixes padding on empty `for` loop iterators and initializers to match Checkstyle policies.
* [org.openrewrite.java.format.RemoveTrailingWhitespace](/recipes/java/format/removetrailingwhitespace.md)
  * **Remove trailing whitespace**
  * Remove any extra trailing whitespace from the end of each line.
* [org.openrewrite.java.format.SingleLineComments](/recipes/java/format/singlelinecomments.md)
  * **Single line comments begin with a whitespace**
  * Write `// hi` instead of `//hi`.
* [org.openrewrite.java.format.Spaces](/recipes/java/format/spaces.md)
  * **Spaces**
  * Format whitespace in Java code.
* [org.openrewrite.java.format.TabsAndIndents](/recipes/java/format/tabsandindents.md)
  * **Tabs and indents**
  * Format tabs and indents in Java code.
* [org.openrewrite.java.format.TypecastParenPad](/recipes/java/format/typecastparenpad.md)
  * **Typecast parentheses padding**
  * Fixes whitespace padding between a typecast type identifier and the enclosing left and right parenthesis. For example, when configured to remove spacing, `( int ) 0L;` becomes `(int) 0L;`.
* [org.openrewrite.java.format.WrappingAndBraces](/recipes/java/format/wrappingandbraces.md)
  * **Wrapping and braces**
  * Format line wraps and braces in Java code.
* [org.openrewrite.java.search.ClasspathTypeCounts](/recipes/java/search/classpathtypecounts.md)
  * **Study the size of the classpath by source set**
  * Emit one data table row per source set in a project, with the number of types in the source set.
* [org.openrewrite.java.search.DoesNotUseType](/recipes/java/search/doesnotusetype.md)
  * **Check whether a type is **not** in use**
  * Useful as a precondition to skip over compilation units using the argument type.
* [org.openrewrite.java.search.FindAnnotations](/recipes/java/search/findannotations.md)
  * **Find annotations**
  * Find all annotations matching the annotation pattern.
* [org.openrewrite.java.search.FindClassHierarchy](/recipes/java/search/findclasshierarchy.md)
  * **Find class hierarchy**
  * Discovers all class declarations within a project, recording which files they appear in, their superclasses, and interfaces. That information is then recorded in a data table.
* [org.openrewrite.java.search.FindComments](/recipes/java/search/findcomments.md)
  * **Find within comments and literals**
  * Find regular expression matches within comments and literals. &quot;Literals&quot; includes string literals, character literals, and numeric literals.
* [org.openrewrite.java.search.FindCompileErrors](/recipes/java/search/findcompileerrors.md)
  * **Find compile errors**
  * Compile errors result in a particular LST structure that can be searched for.
* [org.openrewrite.java.search.FindDeprecatedClasses](/recipes/java/search/finddeprecatedclasses.md)
  * **Find uses of deprecated classes**
  * Find uses of deprecated classes, optionally ignoring those classes that are inside deprecated scopes.
* [org.openrewrite.java.search.FindDeprecatedFields](/recipes/java/search/finddeprecatedfields.md)
  * **Find uses of deprecated fields**
  * Find uses of deprecated fields in any API.
* [org.openrewrite.java.search.FindDeprecatedMethods](/recipes/java/search/finddeprecatedmethods.md)
  * **Find uses of deprecated methods**
  * Find uses of deprecated methods in any API.
* [org.openrewrite.java.search.FindDeprecatedUses](/recipes/java/search/finddeprecateduses.md)
  * **Find uses of deprecated classes, methods, and fields**
  * Find deprecated uses of methods, fields, and types. Optionally ignore those classes that are inside deprecated scopes.
* [org.openrewrite.java.search.FindDistinctMethods](/recipes/java/search/finddistinctmethods.md)
  * **Find distinct methods in use**
  * A sample of every distinct method in use in a repository. The code sample in the method calls data table will be a representative use of the method, though there may be many other such uses of the method.
* [org.openrewrite.java.search.FindEmptyClasses](/recipes/java/search/findemptyclasses.md)
  * **Find empty classes**
  * Find empty classes without annotations that do not implement an interface or extend a class.
* [org.openrewrite.java.search.FindEmptyMethods](/recipes/java/search/findemptymethods.md)
  * **Find methods with empty bodies**
  * Find methods with empty bodies and single public no arg constructors.
* [org.openrewrite.java.search.FindFields](/recipes/java/search/findfields.md)
  * **Find fields**
  * Find uses of a field.
* [org.openrewrite.java.search.FindFieldsOfType](/recipes/java/search/findfieldsoftype.md)
  * **Find fields of type**
  * Finds declared fields matching a particular class name.
* [org.openrewrite.java.search.FindImplementations](/recipes/java/search/findimplementations.md)
  * **Find implementing classes**
  * Find class declarations which implement the specified type. If the specified type is a class, its subclasses will be matched. If the specified type is an interface, classes which implement it will be matched.
* [org.openrewrite.java.search.FindImports](/recipes/java/search/findimports.md)
  * **Find source files with imports**
  * Locates source files that have imports matching the given type pattern, regardless of whether that import is used in the code.
* [org.openrewrite.java.search.FindLiterals](/recipes/java/search/findliterals.md)
  * **Find literals**
  * Find literals matching a pattern.
* [org.openrewrite.java.search.FindMethodDeclaration](/recipes/java/search/findmethoddeclaration.md)
  * **Find method declaration**
  * Locates the declaration of a method.
* [org.openrewrite.java.search.FindMethods](/recipes/java/search/findmethods.md)
  * **Find method usages**
  * Find method calls by pattern.
* [org.openrewrite.java.search.FindMissingTypes](/recipes/java/search/findmissingtypes.md)
  * **Find missing type information on Java LSTs**
  * This is a diagnostic recipe to highlight where LSTs are missing type attribution information.
* [org.openrewrite.java.search.FindRepeatableAnnotations](/recipes/java/search/findrepeatableannotations.md)
  * **Find uses of `@Repeatable` annotations**
  * Java 8 introduced the concept of `@Repeatable` annotations.
* [org.openrewrite.java.search.FindSecrets](/recipes/java/search/findsecrets.md)
  * **Find plain text secrets**
  * Find secrets stored in plain text in code.
* [org.openrewrite.java.search.FindSymbols](/recipes/java/search/findsymbols.md)
  * **Find symbols**
  * Lists all symbols (classes, methods, fields, etc.) declared in the codebase. Results are emitted into a data table with symbol kind, name, parent type, signature, and visibility.
* [org.openrewrite.java.search.FindTypeMappings](/recipes/java/search/findtypemappings.md)
  * **Find type mappings**
  * Study the frequency of `J` types and their `JavaType` type attribution.
* [org.openrewrite.java.search.FindTypes](/recipes/java/search/findtypes.md)
  * **Find types**
  * Find type references by name.
* [org.openrewrite.java.search.HasBuildToolVersion](/recipes/java/search/hasbuildtoolversion.md)
  * **Find files with a particular build tool version**
  * Finds Java source files built with a particular build tool. This is useful especially as a precondition for other recipes.
* [org.openrewrite.java.search.HasJavaVersion](/recipes/java/search/hasjavaversion.md)
  * **Find files compiled at a specific Java version**
  * Finds Java source files matching a particular language level. This is useful especially as a precondition for other recipes.
* [org.openrewrite.java.search.HasMethod](/recipes/java/search/hasmethod.md)
  * **Find files that have at least one use of a method**
  * Marks files that have at least one occurrence of a method matching a pattern.
* [org.openrewrite.java.search.HasMinimumJavaVersion](/recipes/java/search/hasminimumjavaversion.md)
  * **Find the oldest Java version in use**
  * The oldest Java version in use is the lowest Java version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Java 8, but a test source set uses Java 17. In this case, the oldest Java version in use is Java 8.
* [org.openrewrite.java.search.HasSourceSet](/recipes/java/search/hassourceset.md)
  * **Find files in a source set**
  * Source sets are a way to organize your source code into logical groups. For example, Java projects commonly have a `main` source set for application code and a `test` source set for test code. This recipe will find all files in a given source set.
* [org.openrewrite.java.search.HasType](/recipes/java/search/hastype.md)
  * **Find files that have at least one use of a type**
  * Marks files that have at least one occurrence of a type, even if the name of that type doesn't appear in the source code.
* [org.openrewrite.java.search.IsLikelyNotTest](/recipes/java/search/islikelynottest.md)
  * **Find files that are likely not tests**
  * Sources that do not contain indicators of being, or being exclusively for the use in tests. This recipe is simply a negation of the `org.openrewrite.java.search.IsLikelyTest` recipe.
* [org.openrewrite.java.search.IsLikelyTest](/recipes/java/search/islikelytest.md)
  * **Find sources that are likely tests**
  * Sources that contain indicators of being, or being exclusively for the use in tests. This recipe is not exhaustive, but is intended to be a good starting point for finding test sources. Looks at the source set name, and types in use; for example looks for uses of JUnit &amp; TestNG annotations/assertions.
* [org.openrewrite.java.search.ModuleContainsFile](/recipes/java/search/modulecontainsfile.md)
  * **Module contains file**
  * Intended to be used primarily as a precondition for other recipes, this recipe checks if a module contains a specific file or files matching a pattern. Only files belonging to modules containing the specified file are marked with a `SearchResult` marker. This is more specific than `RepositoryContainsFile` which marks all files in the repository if any file matches.
* [org.openrewrite.java.search.ModuleUsesType](/recipes/java/search/moduleusestype.md)
  * **Module uses type**
  * Intended to be used primarily as a precondition for other recipes, this recipe checks if a module uses a specified type. Only files belonging to modules that use the specified type are marked with a `SearchResult` marker. This is more specific than `UsesType` which only marks the files that directly use the type.
* [org.openrewrite.java.search.ResultOfMethodCallIgnored](/recipes/java/search/resultofmethodcallignored.md)
  * **Result of method call ignored**
  * Find locations where the result of the method call is being ignored.

## rewrite-javascript

_License: Moderne Source Available License_

_18 recipes_

* [org.openrewrite.javascript.AddDependency](/recipes/javascript/adddependency.md)
  * **Add npm dependency**
  * Add an npm dependency to `package.json` and regenerate the lock file by running the package manager. If the dependency already exists in any scope, the recipe is a no-op. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes.
* [org.openrewrite.javascript.ChangeDependency](/recipes/javascript/changedependency.md)
  * **Change npm dependency**
  * Renames an npm dependency in `package.json` and optionally updates its version constraint. After modifying the package.json, the lock file is regenerated by running the package manager. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes.
* [org.openrewrite.javascript.RemoveDependency](/recipes/javascript/removedependency.md)
  * **Remove npm dependency**
  * Remove an npm dependency from `package.json` and regenerate the lock file. If the dependency does not exist in any scope, the recipe is a no-op.
* [org.openrewrite.javascript.UpgradeDependencyVersion](/recipes/javascript/upgradedependencyversion.md)
  * **Upgrade npm dependency version**
  * Upgrades the version constraint of matching npm dependencies in `package.json` and regenerates the lock file by running the package manager. Matching is by exact package name or glob pattern. v1 uses simple string inequality for the upgrade check (always overwrites). A future version will use semver to skip already-up-to-date constraints. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes.
* [org.openrewrite.javascript.UpgradeTransitiveDependencyVersion](/recipes/javascript/upgradetransitivedependencyversion.md)
  * **Upgrade transitive npm dependency**
  * Pins or upgrades a transitive npm dependency by adding an override entry to `package.json` and regenerating the lock file. For npm and Bun, adds to the `overrides` field; for Yarn, adds to `resolutions`; for pnpm, adds to `pnpm.overrides`. The override is idempotent — if the entry already exists with the same version, no change is made. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes.
* [org.openrewrite.javascript.change-import](/recipes/javascript/change-import.md)
  * **Change import**
  * Changes an import from one module/member to another, updating all type attributions.
* [org.openrewrite.javascript.cleanup.add-parse-int-radix](/recipes/javascript/cleanup/add-parse-int-radix.md)
  * **Add radix to `parseInt`**
  * Adds the radix parameter (base 10) to `parseInt()` calls that are missing it, preventing potential parsing issues.
* [org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method](/recipes/javascript/cleanup/async-callback-in-sync-array-method.md)
  * **Detect async callbacks in synchronous array methods**
  * Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy.
* [org.openrewrite.javascript.cleanup.order-imports](/recipes/javascript/cleanup/order-imports.md)
  * **Order imports**
  * Sort imports by category and module path. Categories: side-effect, namespace, default, named, type. Within each category, imports are sorted alphabetically by module path. Named specifiers within each import are also sorted alphabetically.
* [org.openrewrite.javascript.cleanup.prefer-optional-chain](/recipes/javascript/cleanup/prefer-optional-chain.md)
  * **Prefer optional chaining**
  * Converts ternary expressions like `foo ? foo.bar : undefined` to use optional chaining syntax `foo?.bar`.
* [org.openrewrite.javascript.cleanup.use-object-property-shorthand](/recipes/javascript/cleanup/use-object-property-shorthand.md)
  * **Use object property shorthand**
  * Simplifies object properties where the property name and value/variable name are the same (e.g., `\{ x: x \}` becomes `\{ x \}`). Applies to both destructuring patterns and object literals.
* [org.openrewrite.javascript.dependencies.find-dependency](/recipes/javascript/dependencies/find-dependency.md)
  * **Find Node.js dependency**
  * Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes.
* [org.openrewrite.javascript.format.auto-format](/recipes/javascript/format/auto-format.md)
  * **Auto-format JavaScript/TypeScript code**
  * Format JavaScript and TypeScript code using formatting rules auto-detected from the project's existing code style.
* [org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences](/recipes/javascript/migrate/es6/modernize-octal-escape-sequences.md)
  * **Modernize octal escape sequences**
  * Convert old-style octal escape sequences (e.g., `\0`, `\123`) to modern hex escape sequences (e.g., `\x00`, `\x53`) or Unicode escape sequences (e.g., `\u0000`, `\u0053`).
* [org.openrewrite.javascript.migrate.es6.modernize-octal-literals](/recipes/javascript/migrate/es6/modernize-octal-literals.md)
  * **Modernize octal literals**
  * Convert old-style octal literals (e.g., `0777`) to modern ES6 syntax (e.g., `0o777`).
* [org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys](/recipes/javascript/migrate/es6/remove-duplicate-object-keys.md)
  * **Remove duplicate object keys**
  * Remove duplicate keys in object literals, keeping only the last occurrence (last-wins semantics).
* [org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default](/recipes/javascript/migrate/typescript/export-assignment-to-export-default.md)
  * **Convert `export =` to `export default`**
  * Converts TypeScript `export =` syntax to ES module `export default` syntax for compatibility with ECMAScript modules.
* [org.openrewrite.javascript.search.DependencyInsight](/recipes/javascript/search/dependencyinsight.md)
  * **Node.js dependency insight**
  * Find direct and transitive npm dependencies matching a package name pattern. Results include dependencies that either directly match or transitively include a matching dependency.

## rewrite-json

_License: Apache License Version 2.0_

_10 recipes_

* [org.openrewrite.json.AddKeyValue](/recipes/json/addkeyvalue.md)
  * **Add value to JSON Object**
  * Adds a `value` at the specified `keyPath` with the specified `key`, if the key doesn't already exist.
* [org.openrewrite.json.ChangeKey](/recipes/json/changekey.md)
  * **Change key**
  * Change a JSON mapping entry key, while leaving the value intact.
* [org.openrewrite.json.ChangeValue](/recipes/json/changevalue.md)
  * **Change value**
  * Change a JSON mapping entry value leaving the key intact.
* [org.openrewrite.json.CopyValue](/recipes/json/copyvalue.md)
  * **Copy JSON value**
  * Copies a JSON value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to create the new key if it does not exist.
* [org.openrewrite.json.CreateJsonFile](/recipes/json/createjsonfile.md)
  * **Create JSON file**
  * Create a new JSON file.
* [org.openrewrite.json.DeleteKey](/recipes/json/deletekey.md)
  * **Delete key**
  * Delete a JSON mapping entry key.
* [org.openrewrite.json.format.AutoFormat](/recipes/json/format/autoformat.md)
  * **Format JSON**
  * Format JSON code using a standard comprehensive set of JSON formatting recipes.
* [org.openrewrite.json.format.Indents](/recipes/json/format/indents.md)
  * **JSON indent**
  * Format tabs and indents in JSON.
* [org.openrewrite.json.format.WrappingAndBraces](/recipes/json/format/wrappingandbraces.md)
  * **JSON new lines**
  * Split members into separate lines in JSON.
* [org.openrewrite.json.search.FindKey](/recipes/json/search/findkey.md)
  * **Find JSON object members**
  * Find JSON object members by JsonPath expression.

## rewrite-kotlin

_License: Apache License Version 2.0_

_11 recipes_

* [org.openrewrite.kotlin.FindKotlinSources](/recipes/kotlin/findkotlinsources.md)
  * **Find Kotlin sources and collect data metrics**
  * Use data table to collect source files types and counts of files with extensions `.kt`.
* [org.openrewrite.kotlin.OrderImports](/recipes/kotlin/orderimports.md)
  * **Order Kotlin imports**
  * Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does.
* [org.openrewrite.kotlin.RenameTypeAlias](/recipes/kotlin/renametypealias.md)
  * **Rename type alias**
  * Change the name of a given type alias.
* [org.openrewrite.kotlin.cleanup.EqualsMethodUsage](/recipes/kotlin/cleanup/equalsmethodusage.md)
  * **Structural equality tests should use `==` or `!=`**
  * In Kotlin, `==` means structural equality and `!=` structural inequality and both map to the left-side term’s `equals()` function. It is, therefore, redundant to call `equals()` as a function. Also, `==` and `!=` are more general than `equals()` and `!equals()` because it allows either of both operands to be `null`. Developers using `equals()` instead of `==` or `!=` is often the result of adapting styles from other languages like Java, where `==` means reference equality and `!=` means reference inequality. The `==` and `!=` operators are a more concise and elegant way to test structural equality than calling a function.
* [org.openrewrite.kotlin.cleanup.ImplicitParameterInLambda](/recipes/kotlin/cleanup/implicitparameterinlambda.md)
  * **`it` shouldn't be used as a lambda parameter name**
  * `it` is a special identifier that allows you to refer to the current parameter being passed to a lambda expression without explicitly naming the parameter. Lambda expressions are a concise way of writing anonymous functions. Many lambda expressions have only one parameter, when this is true the compiler can determine the parameter type by context. Thus when using it with single parameter lambda expressions, you do not need to declare the type.
* [org.openrewrite.kotlin.cleanup.RemoveLambdaArgumentParentheses](/recipes/kotlin/cleanup/removelambdaargumentparentheses.md)
  * **Remove method invocation parentheses around single lambda argument**
  * For example, convert `1.let(\{ it + 1 \})` to `1.let \{ it + 1 \}`.
* [org.openrewrite.kotlin.cleanup.RemoveTrailingComma](/recipes/kotlin/cleanup/removetrailingcomma.md)
  * **Remove trailing comma in Kotlin**
  * Remove trailing commas in variable, parameter, and class property lists.
* [org.openrewrite.kotlin.cleanup.RemoveTrailingSemicolon](/recipes/kotlin/cleanup/removetrailingsemicolon.md)
  * **Remove unnecessary trailing semicolon**
  * Some Java programmers may mistakenly add semicolons at the end when writing Kotlin code, but in reality, they are not necessary.
* [org.openrewrite.kotlin.cleanup.ReplaceCharToIntWithCode](/recipes/kotlin/cleanup/replacechartointwithcode.md)
  * **Replace `Char#toInt()` with `Char#code`**
  * Replace the usage of the deprecated `Char#toInt()` with `Char#code`. Please ensure that your Kotlin version is 1.5 or later to support the `Char#code` property. Note that the current implementation does not perform a Kotlin version check.
* [org.openrewrite.kotlin.cleanup.UnnecessaryTypeParentheses](/recipes/kotlin/cleanup/unnecessarytypeparentheses.md)
  * **Remove unnecessary parentheses on Kotlin types**
  * In Kotlin, it's possible to add redundant nested parentheses in type definitions. This recipe is designed to remove those unnecessary parentheses.
* [org.openrewrite.kotlin.format.AutoFormat](/recipes/kotlin/format/autoformat.md)
  * **Format Kotlin code**
  * Format Kotlin code using a standard comprehensive set of Kotlin formatting recipes.

## rewrite-maven

_License: Apache License Version 2.0_

_90 recipes_

* [org.openrewrite.maven.AddAnnotationProcessor](/recipes/maven/addannotationprocessor.md)
  * **Add an annotation processor to `maven-compiler-plugin`**
  * Add an annotation processor path to the `maven-compiler-plugin` configuration. For modules with an in-reactor parent, adds to the parent's `build/pluginManagement/plugins` section. For modules without a parent or with a parent outside the reactor, adds directly to `build/plugins`. Updates the annotation processor version if a newer version is specified.
* [org.openrewrite.maven.AddCommentToMavenDependency](/recipes/maven/addcommenttomavendependency.md)
  * **Add a comment to a `Maven` dependency or plugin**
  * Adds a comment as the first element in a `Maven` dependency or plugin.
* [org.openrewrite.maven.AddDependency](/recipes/maven/adddependency.md)
  * **Add Maven dependency**
  * Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used.
* [org.openrewrite.maven.AddDevelocityMavenExtension](/recipes/maven/adddevelocitymavenextension.md)
  * **Add the Develocity Maven extension**
  * To integrate the Develocity Maven extension into Maven projects, ensure that the `develocity-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/develocity.xml` configuration file.
* [org.openrewrite.maven.AddManagedDependency](/recipes/maven/addmanageddependency.md)
  * **Add managed Maven dependency**
  * Add a managed Maven dependency to a `pom.xml` file.
* [org.openrewrite.maven.AddManagedPlugin](/recipes/maven/addmanagedplugin.md)
  * **Add Managed Maven plugin**
  * Add the specified Maven plugin to the Plugin Managed of the pom.xml.
* [org.openrewrite.maven.AddParentPom](/recipes/maven/addparentpom.md)
  * **Add Maven parent**
  * Add a parent pom to a Maven pom.xml. Does nothing if a parent pom is already present.
* [org.openrewrite.maven.AddPlugin](/recipes/maven/addplugin.md)
  * **Add Maven plugin**
  * Add the specified Maven plugin to the pom.xml.
* [org.openrewrite.maven.AddPluginDependency](/recipes/maven/addplugindependency.md)
  * **Add Maven plugin dependencies**
  * Adds the specified dependencies to a Maven plugin. Will not add the plugin if it does not already exist in the pom.
* [org.openrewrite.maven.AddProfile](/recipes/maven/addprofile.md)
  * **Add Maven profile**
  * Add a maven profile to a `pom.xml` file.
* [org.openrewrite.maven.AddProperty](/recipes/maven/addproperty.md)
  * **Add Maven project property**
  * Add a new property to the Maven project property. Prefers to add the property to the parent if the project has multiple modules.
* [org.openrewrite.maven.AddRepository](/recipes/maven/addrepository.md)
  * **Add repository**
  * Adds a new Maven Repository or updates a matching repository.
* [org.openrewrite.maven.AddRuntimeConfig](/recipes/maven/addruntimeconfig.md)
  * **Add a configuration option for the Maven runtime**
  * Add a new configuration option for the Maven runtime if not already present.
* [org.openrewrite.maven.BestPractices](/recipes/maven/bestpractices.md)
  * **Apache Maven best practices**
  * Applies best practices to Maven POMs.
* [org.openrewrite.maven.ChangeDependencyClassifier](/recipes/maven/changedependencyclassifier.md)
  * **Change Maven dependency classifier**
  * Add or alter the classifier of the specified dependency.
* [org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId](/recipes/maven/changedependencygroupidandartifactid.md)
  * **Change Maven dependency**
  * Change a Maven dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before. Matching `&lt;dependencyManagement&gt;` coordinates are also updated if a `newVersion` or `versionPattern` is provided. Exclusions that reference the old dependency coordinates are preserved, and a sibling exclusion for the new coordinates is added alongside them.
* [org.openrewrite.maven.ChangeDependencyScope](/recipes/maven/changedependencyscope.md)
  * **Change Maven dependency scope**
  * Add or alter the scope of the specified dependency.
* [org.openrewrite.maven.ChangeExclusion](/recipes/maven/changeexclusion.md)
  * **Change Maven dependency exclusion**
  * Modify Maven dependency exclusions, changing the group ID, artifact Id, or both. Useful when an excluded dependency has been renamed and references to it must be updated.
* [org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId](/recipes/maven/changemanageddependencygroupidandartifactid.md)
  * **Change Maven managed dependency groupId, artifactId and optionally the version**
  * Change the groupId, artifactId and optionally the version of a specified Maven managed dependency.
* [org.openrewrite.maven.ChangePackaging](/recipes/maven/changepackaging.md)
  * **Set Maven project packaging**
  * Sets the packaging type of Maven projects. Either adds the packaging tag if it is missing or changes its context if present.
* [org.openrewrite.maven.ChangeParentPom](/recipes/maven/changeparentpom.md)
  * **Change Maven parent**
  * Change the parent pom of a Maven pom.xml by matching the existing parent via groupId and artifactId, and updating it to a new groupId, artifactId, version, and optional relativePath. Also updates the project to retain dependency management and properties previously inherited from the old parent that are no longer provided by the new parent. Removes redundant dependency versions already managed by the new parent.
* [org.openrewrite.maven.ChangePluginConfiguration](/recipes/maven/changepluginconfiguration.md)
  * **Change Maven plugin configuration**
  * Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom.
* [org.openrewrite.maven.ChangePluginDependencies](/recipes/maven/changeplugindependencies.md)
  * **Change Maven plugin dependencies**
  * Applies the specified dependencies to a Maven plugin. Will not add the plugin if it does not already exist in the pom.
* [org.openrewrite.maven.ChangePluginExecutions](/recipes/maven/changepluginexecutions.md)
  * **Change Maven plugin executions**
  * Apply the specified executions to a Maven plugin. Will not add the plugin if it does not already exist in the pom.
* [org.openrewrite.maven.ChangePluginGroupIdAndArtifactId](/recipes/maven/changeplugingroupidandartifactid.md)
  * **Change Maven plugin group and artifact ID**
  * Change the groupId and/or the artifactId of a specified Maven plugin. Optionally update the plugin version. This recipe does not perform any validation and assumes all values passed are valid.
* [org.openrewrite.maven.ChangeProjectVersion](/recipes/maven/changeprojectversion.md)
  * **Change Maven Project Version**
  * Change the project version of a Maven pom.xml. Identifies the project to be changed by its groupId and artifactId. If the version is defined as a property, this recipe will only change the property value if the property exists within the same pom.
* [org.openrewrite.maven.ChangePropertyValue](/recipes/maven/changepropertyvalue.md)
  * **Change Maven project property value**
  * Changes the specified Maven project property value leaving the key intact.
* [org.openrewrite.maven.EnableDevelocityBuildCache](/recipes/maven/enabledevelocitybuildcache.md)
  * **Enable Develocity build cache**
  * Add Develocity build cache configuration to any `.mvn/` Develocity configuration file that lack existing configuration.
* [org.openrewrite.maven.ExcludeDependency](/recipes/maven/excludedependency.md)
  * **Exclude Maven dependency**
  * Exclude specified dependency from any dependency that transitively includes it.
* [org.openrewrite.maven.IncrementProjectVersion](/recipes/maven/incrementprojectversion.md)
  * **Increment Maven project version**
  * Increase Maven project version by incrementing either the major, minor, or patch version as defined by [semver](https://semver.org/). Other versioning schemes are not supported.
* [org.openrewrite.maven.ManageDependencies](/recipes/maven/managedependencies.md)
  * **Manage dependencies**
  * Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM.
* [org.openrewrite.maven.ManagedToRuntimeDependencies](/recipes/maven/managedtoruntimedependencies.md)
  * **Convert managed dependencies to runtime dependencies**
  * This recipe processes Maven POMs, converting all `&lt;dependencyManagement&gt;` entries into runtime scoped `&lt;dependencies&gt;` entries. Import scoped BOMs (like jackson-bom) are left unmodified in `&lt;dependencyManagement&gt;`. Some style guidelines prefer that `&lt;dependencyManagement&gt;` be used only for BOMs. This maintain that style while avoiding introducing new symbols onto the compile classpath unintentionally.
* [org.openrewrite.maven.MigrateToMaven4](/recipes/maven/migratetomaven4.md)
  * **Migrate to Maven 4**
  * Migrates Maven POMs from Maven 3 to Maven 4, addressing breaking changes and deprecations. This recipe updates property expressions, lifecycle phases, removes duplicate plugin declarations, and replaces removed properties to ensure compatibility with Maven 4.
* [org.openrewrite.maven.ModernizeObsoletePoms](/recipes/maven/modernizeobsoletepoms.md)
  * **Modernize obsolete Maven poms**
  * Very old Maven poms are no longer supported by current versions of Maven. This recipe updates poms with `&lt;pomVersion&gt;3&lt;/pomVersion&gt;` to `&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;` of the Maven pom schema. This does not attempt to upgrade old dependencies or plugins and is best regarded as the starting point of a migration rather than an end-point.
* [org.openrewrite.maven.OrderPomElements](/recipes/maven/orderpomelements.md)
  * **Order POM elements**
  * Order POM elements according to the [recommended](https://maven.apache.org/developers/conventions/code.html#pom-code-convention) order.
* [org.openrewrite.maven.RemoveDependency](/recipes/maven/removedependency.md)
  * **Remove Maven dependency**
  * Removes a single dependency from the &lt;dependencies&gt; section of the pom.xml. Does not remove usage of the dependency classes, nor guard against the resulting compilation errors.
* [org.openrewrite.maven.RemoveDuplicateDependencies](/recipes/maven/removeduplicatedependencies.md)
  * **Remove duplicate Maven dependencies**
  * Removes duplicated dependencies in the `&lt;dependencies&gt;` and `&lt;dependencyManagement&gt;` sections of the `pom.xml`.
* [org.openrewrite.maven.RemoveDuplicatePluginDeclarations](/recipes/maven/removeduplicateplugindeclarations.md)
  * **Remove duplicate plugin declarations**
  * Maven 4 rejects duplicate plugin declarations (same groupId and artifactId) with an error. This recipe removes duplicate plugin declarations, keeping only the first occurrence.
* [org.openrewrite.maven.RemoveExclusion](/recipes/maven/removeexclusion.md)
  * **Remove exclusion**
  * Remove any matching exclusion from any matching dependency.
* [org.openrewrite.maven.RemoveManagedDependency](/recipes/maven/removemanageddependency.md)
  * **Remove Maven managed dependency**
  * Removes a single managed dependency from the &lt;dependencyManagement&gt;&lt;dependencies&gt; section of the pom.xml.
* [org.openrewrite.maven.RemoveMavenWrapper](/recipes/maven/removemavenwrapper.md)
  * **Remove Maven wrapper**
  * Remove Maven wrapper files from a project. This includes the `mvnw` and `mvnw.cmd` scripts, and the `.mvn/wrapper` directory.
* [org.openrewrite.maven.RemovePlugin](/recipes/maven/removeplugin.md)
  * **Remove Maven plugin**
  * Remove the specified Maven plugin from the POM.
* [org.openrewrite.maven.RemovePluginDependency](/recipes/maven/removeplugindependency.md)
  * **Remove Maven plugin dependency**
  * Removes a dependency from the &lt;dependencies&gt; section of a plugin in the pom.xml.
* [org.openrewrite.maven.RemoveProperty](/recipes/maven/removeproperty.md)
  * **Remove Maven project property**
  * Removes the specified Maven project property from the pom.xml.
* [org.openrewrite.maven.RemoveRedundantDependencyVersions](/recipes/maven/removeredundantdependencyversions.md)
  * **Remove redundant explicit dependency and plugin versions**
  * Remove explicitly-specified dependency/plugin versions when a parent POM's `dependencyManagement`/`pluginManagement` specifies the version.
* [org.openrewrite.maven.RemoveRedundantProperties](/recipes/maven/removeredundantproperties.md)
  * **Remove redundant properties**
  * Remove properties when a parent POM specifies the same property.
* [org.openrewrite.maven.RemoveRepository](/recipes/maven/removerepository.md)
  * **Remove repository**
  * Removes a matching Maven repository.
* [org.openrewrite.maven.RemoveUnusedProperties](/recipes/maven/removeunusedproperties.md)
  * **Remove unused properties**
  * Detect and remove Maven property declarations which do not have any usage within the project.
* [org.openrewrite.maven.RenamePropertyKey](/recipes/maven/renamepropertykey.md)
  * **Rename Maven property key**
  * Rename the specified Maven project property key leaving the value unchanged.
* [org.openrewrite.maven.ReplaceDeprecatedLifecyclePhases](/recipes/maven/replacedeprecatedlifecyclephases.md)
  * **Replace deprecated lifecycle phases**
  * Maven 4 deprecated all `pre-*` and `post-*` lifecycle phases in favor of the `before:` and `after:` syntax. This recipe updates plugin phase declarations to use the new syntax, including `pre-clean` → `before:clean`, `pre-site` → `before:site`, `pre-integration-test` → `before:integration-test`, and their `post-*` equivalents.
* [org.openrewrite.maven.ReplaceModulesWithSubprojects](/recipes/maven/replacemoduleswithsubprojects.md)
  * **Replace modules with subprojects**
  * Maven 4 model version 4.1.0 deprecates the `&lt;modules&gt;` element in favor of `&lt;subprojects&gt;` to eliminate confusion with Java's Platform Module System (JPMS). This recipe renames `&lt;modules&gt;` to `&lt;subprojects&gt;` and `&lt;module&gt;` children to `&lt;subproject&gt;`.
* [org.openrewrite.maven.ReplaceRemovedRootDirectoryProperties](/recipes/maven/replaceremovedrootdirectoryproperties.md)
  * **Replace removed root directory properties**
  * Maven 4 removed support for deprecated root directory properties. This recipe replaces `$\{executionRootDirectory\}` with `$\{session.rootDirectory\}` and `$\{multiModuleProjectDirectory\}` with `$\{project.rootDirectory\}`.
* [org.openrewrite.maven.ReproducibleBuilds](/recipes/maven/reproduciblebuilds.md)
  * **Apache Maven reproducible builds**
  * Configure a Maven project for [reproducible builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html): pin dependency and plugin versions, set `project.build.outputTimestamp`, set explicit UTF-8 source encoding, and upgrade core plugins to versions that honor the output timestamp.
* [org.openrewrite.maven.SortDependencies](/recipes/maven/sortdependencies.md)
  * **Sort dependencies**
  * Sort dependencies alphabetically by groupId then artifactId. Test-scoped dependencies are sorted after non-test dependencies. Applies to both `&lt;dependencies&gt;` and `&lt;dependencyManagement&gt;` sections.
* [org.openrewrite.maven.UpdateMavenProjectPropertyJavaVersion](/recipes/maven/updatemavenprojectpropertyjavaversion.md)
  * **Update Maven Java project properties**
  * The Java version is determined by several project properties, including:   * `java.version`  * `jdk.version`  * `javaVersion`  * `jdkVersion`  * `maven.compiler.source`  * `maven.compiler.target`  * `maven.compiler.release`  * `release.version`  If none of these properties are in use and the maven compiler plugin is not otherwise configured, adds the `maven.compiler.release` property.
* [org.openrewrite.maven.UpdateMavenWrapper](/recipes/maven/updatemavenwrapper.md)
  * **Update Maven wrapper**
  * Update the version of Maven used in an existing Maven wrapper.
* [org.openrewrite.maven.UpdateScmFromGitOrigin](/recipes/maven/updatescmfromgitorigin.md)
  * **Update SCM with Git origin**
  * Updates or adds the Maven `&lt;scm&gt;` tag based on the Git remote origin. By default, only existing Source Control Management (SCM) sections are updated. Set `addIfMissing` to `true` to also add missing SCM sections to root POMs (POMs without a parent element).
* [org.openrewrite.maven.UpgradeDependencyVersion](/recipes/maven/upgradedependencyversion.md)
  * **Upgrade Maven dependency version**
  * Upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.
* [org.openrewrite.maven.UpgradeParentVersion](/recipes/maven/upgradeparentversion.md)
  * **Upgrade Maven parent project version**
  * Set the parent pom version number according to a [version selector](https://docs.openrewrite.org/reference/dependency-version-selectors) or to a specific version number.
* [org.openrewrite.maven.UpgradePluginVersion](/recipes/maven/upgradepluginversion.md)
  * **Upgrade Maven plugin version**
  * Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.
* [org.openrewrite.maven.UpgradeToModelVersion410](/recipes/maven/upgradetomodelversion410.md)
  * **Upgrade to Maven model version 4.1.0**
  * Upgrades Maven POMs from model version 4.0.0 to 4.1.0, enabling new Maven 4 features like `&lt;subprojects&gt;`, `bom` packaging, and automatic version inference. This recipe updates the `&lt;modelVersion&gt;` element, `xmlns` namespace, and `xsi:schemaLocation` from 4.0.0 to 4.1.0.
* [org.openrewrite.maven.UpgradeTransitiveDependencyVersion](/recipes/maven/upgradetransitivedependencyversion.md)
  * **Upgrade transitive Maven dependencies**
  * Upgrades the version of a transitive dependency in a Maven pom file. Leaves direct dependencies unmodified. Can be paired with the regular Upgrade Dependency Version recipe to upgrade a dependency everywhere, regardless of whether it is direct or transitive.
* [org.openrewrite.maven.UseMavenCompilerPluginReleaseConfiguration](/recipes/maven/usemavencompilerpluginreleaseconfiguration.md)
  * **Use Maven compiler plugin release configuration**
  * Replaces any explicit `source` or `target` configuration (if present) on the `maven-compiler-plugin` with `release`, and updates the `release` value if needed. When `testSource` or `testTarget` differ from the main version, introduces `testRelease`. Will not downgrade the Java version if the current version is higher. Also removes stale `maven.compiler.source`, `maven.compiler.target`, `maven.compiler.testSource`, and `maven.compiler.testTarget` properties that are no longer referenced.
* [org.openrewrite.maven.UseParentInference](/recipes/maven/useparentinference.md)
  * **Use Maven 4 parent inference**
  * Maven 4.1.0 supports automatic parent version inference when using a relative path. This recipe simplifies parent declarations by using the shorthand `&lt;parent/&gt;` form when the parent is in the default location (`..`), removing the explicit `&lt;relativePath&gt;`, `&lt;groupId&gt;`, `&lt;artifactId&gt;`, and `&lt;version&gt;` elements. Maven automatically infers these values from the parent POM.
* [org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp](/recipes/maven/cleanup/addprojectbuildoutputtimestamp.md)
  * **Add `project.build.outputTimestamp` for reproducible builds**
  * Adds the `project.build.outputTimestamp` property, which Maven uses to make build outputs reproducible by stamping archive entries with a fixed timestamp instead of the current time. An existing value is preserved. See [Configuring for Reproducible Builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html).
* [org.openrewrite.maven.cleanup.DependencyManagementDependencyRequiresVersion](/recipes/maven/cleanup/dependencymanagementdependencyrequiresversion.md)
  * **Dependency management dependencies should have a version**
  * If they don't have a version, they can't possibly affect dependency resolution anywhere, and can be safely removed.
* [org.openrewrite.maven.cleanup.ExplicitDependencyVersion](/recipes/maven/cleanup/explicitdependencyversion.md)
  * **Add explicit dependency versions**
  * Add explicit dependency versions to POMs for reproducibility, as the `LATEST` and `RELEASE` version keywords are deprecated.
* [org.openrewrite.maven.cleanup.ExplicitPluginGroupId](/recipes/maven/cleanup/explicitplugingroupid.md)
  * **Add explicit `groupId` to Maven plugins**
  * Add the default `&lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;` to plugins for clarity.
* [org.openrewrite.maven.cleanup.ExplicitPluginVersion](/recipes/maven/cleanup/explicitpluginversion.md)
  * **Add explicit plugin versions**
  * Add explicit plugin versions to POMs for reproducibility, as [MNG-4173](https://issues.apache.org/jira/browse/MNG-4173) removes automatic version resolution for POM plugins.
* [org.openrewrite.maven.cleanup.NoSystemScopeDependencies](/recipes/maven/cleanup/nosystemscopedependencies.md)
  * **Dependencies should not have `system` scope**
  * Replaces `&lt;scope&gt;system&lt;/scope&gt;` with the default compile scope and removes `&lt;systemPath&gt;` for dependencies that are available in configured repositories.
* [org.openrewrite.maven.cleanup.PrefixlessExpressions](/recipes/maven/cleanup/prefixlessexpressions.md)
  * **Drop prefixless expressions in POM**
  * MNG-7404 drops support for prefixless in POMs. This recipe will add the `project.` prefix where missing.
* [org.openrewrite.maven.plugin.DependencyPluginGoalResolveSources](/recipes/maven/plugin/dependencyplugingoalresolvesources.md)
  * **Migrate to `maven-dependency-plugin` goal `resolve-sources`**
  * Migrate from `sources` to `resolve-sources` for the `maven-dependency-plugin`.
* [org.openrewrite.maven.search.DependencyInsight](/recipes/maven/search/dependencyinsight.md)
  * **Maven dependency insight**
  * Find direct and transitive dependencies matching a group, artifact, and scope. Results include dependencies that either directly match or transitively include a matching dependency.
* [org.openrewrite.maven.search.DoesNotIncludeDependency](/recipes/maven/search/doesnotincludedependency.md)
  * **Does not include Maven dependency**
  * A precondition which returns false if visiting a Maven pom which includes the specified dependency in the classpath of some scope. For compatibility with multimodule projects, this should most often be applied as a precondition.
* [org.openrewrite.maven.search.EffectiveDependencies](/recipes/maven/search/effectivedependencies.md)
  * **Effective dependencies**
  * Emit the data of binary dependency relationships.
* [org.openrewrite.maven.search.EffectiveManagedDependencies](/recipes/maven/search/effectivemanageddependencies.md)
  * **Effective managed dependencies**
  * Emit the data of binary dependency relationships.
* [org.openrewrite.maven.search.EffectiveMavenRepositories](/recipes/maven/search/effectivemavenrepositories.md)
  * **List effective Maven repositories**
  * Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the LST was produced.
* [org.openrewrite.maven.search.FindDependency](/recipes/maven/search/finddependency.md)
  * **Find Maven dependency**
  * Finds first-order dependency uses, i.e. dependencies that are defined directly in a project. Each match is also recorded as a row in the `DependenciesDeclared` data table.
* [org.openrewrite.maven.search.FindManagedDependency](/recipes/maven/search/findmanageddependency.md)
  * **Find Maven dependency management entry**
  * Finds first-order dependency management entries, i.e. dependencies that are defined directly in a project.
* [org.openrewrite.maven.search.FindMavenProject](/recipes/maven/search/findmavenproject.md)
  * **Find Maven projects**
  * Maven projects are `pom.xml` files with a `MavenResolutionResult` marker.
* [org.openrewrite.maven.search.FindMavenSettings](/recipes/maven/search/findmavensettings.md)
  * **Find effective maven settings**
  * List the effective maven settings file for the current project.
* [org.openrewrite.maven.search.FindPlugin](/recipes/maven/search/findplugin.md)
  * **Find Maven plugin**
  * Finds a Maven plugin within a pom.xml.
* [org.openrewrite.maven.search.FindProperties](/recipes/maven/search/findproperties.md)
  * **Find Maven project properties**
  * Finds the specified Maven project properties within a pom.xml.
* [org.openrewrite.maven.search.FindRepositoryOrder](/recipes/maven/search/findrepositoryorder.md)
  * **Maven repository order**
  * Determine the order in which dependencies will be resolved for each `pom.xml` based on its defined repositories and effective `settings.xml`.
* [org.openrewrite.maven.search.FindScm](/recipes/maven/search/findscm.md)
  * **Find SCM tag**
  * Finds any `&lt;scm&gt;` tag directly inside the `&lt;project&gt;` root of a Maven pom.xml file.
* [org.openrewrite.maven.search.ModuleHasDependency](/recipes/maven/search/modulehasdependency.md)
  * **Module has dependency**
  * Searches for Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindDependency` recipe instead.
* [org.openrewrite.maven.search.ModuleHasPlugin](/recipes/maven/search/modulehasplugin.md)
  * **Module has plugin**
  * Searches for Maven modules that have a plugin matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring boot plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead.
* [org.openrewrite.maven.search.ParentPomInsight](/recipes/maven/search/parentpominsight.md)
  * **Maven parent insight**
  * Find Maven parents matching a `groupId` and `artifactId`.
* [org.openrewrite.maven.security.UseHttpsForRepositories](/recipes/maven/security/usehttpsforrepositories.md)
  * **Use HTTPS for repositories**
  * Use HTTPS for repository URLs.
* [org.openrewrite.maven.utilities.PrintMavenAsDot](/recipes/maven/utilities/printmavenasdot.md)
  * **Print Maven dependency hierarchy in DOT format**
  * The DOT language format is specified [here](https://graphviz.org/doc/info/lang.html).

## rewrite-properties

_License: Apache License Version 2.0_

_8 recipes_

* [org.openrewrite.properties.AddProperty](/recipes/properties/addproperty.md)
  * **Add a new property**
  * Adds a new property to a property file. Attempts to place the new property in alphabetical order by the property keys. Whitespace before and after the `=` must be included in the property and value.
* [org.openrewrite.properties.AddPropertyComment](/recipes/properties/addpropertycomment.md)
  * **Add comment before property key**
  * Add a new comment before a property key if not already present, optionally commenting out the property.
* [org.openrewrite.properties.ChangePropertyKey](/recipes/properties/changepropertykey.md)
  * **Change property key**
  * Change a property key leaving the value intact.
* [org.openrewrite.properties.ChangePropertyValue](/recipes/properties/changepropertyvalue.md)
  * **Change property value**
  * Change a property value leaving the key intact.
* [org.openrewrite.properties.CopyValue](/recipes/properties/copyvalue.md)
  * **Copy property value**
  * Copies a property value from one key to another. The existing key/value pair remains unaffected by this change. If the destination key already exists, its value will be replaced. By default, creates the destination key if it does not exist.
* [org.openrewrite.properties.CreatePropertiesFile](/recipes/properties/createpropertiesfile.md)
  * **Create Properties file**
  * Create a new Properties file.
* [org.openrewrite.properties.DeleteProperty](/recipes/properties/deleteproperty.md)
  * **Delete property by key**
  * Deletes key/value pairs from properties files, as well as any comments that immediately precede the key/value pair. Comments separated by two or more newlines from the deleted key/value pair are preserved.
* [org.openrewrite.properties.search.FindProperties](/recipes/properties/search/findproperties.md)
  * **Find property**
  * Finds occurrences of a property key.

## rewrite-toml

_License: Apache License Version 2.0_

_10 recipes_

* [org.openrewrite.toml.ChangeKey](/recipes/toml/changekey.md)
  * **Change TOML key**
  * Change a TOML key, while leaving the value intact.
* [org.openrewrite.toml.ChangeTableRowValue](/recipes/toml/changetablerowvalue.md)
  * **Change TOML table row value**
  * Change a value in a TOML table row when the identifying property matches the specified matcher.
* [org.openrewrite.toml.ChangeValue](/recipes/toml/changevalue.md)
  * **Change TOML value**
  * Change the value of a TOML key.
* [org.openrewrite.toml.CreateTomlFile](/recipes/toml/createtomlfile.md)
  * **Create TOML file**
  * Create a new TOML file.
* [org.openrewrite.toml.DeleteKey](/recipes/toml/deletekey.md)
  * **Delete TOML key**
  * Delete a TOML key-value pair.
* [org.openrewrite.toml.DeleteTable](/recipes/toml/deletetable.md)
  * **Delete TOML table**
  * Delete a TOML table.
* [org.openrewrite.toml.DeleteTableRow](/recipes/toml/deletetablerow.md)
  * **Delete TOML table row**
  * Delete a TOML table row when one of its values matches the specified matcher.
* [org.openrewrite.toml.FindKey](/recipes/toml/findkey.md)
  * **Find TOML keys**
  * Find TOML keys matching a path expression.
* [org.openrewrite.toml.MergeTableRow](/recipes/toml/mergetablerow.md)
  * **Merge TOML table row**
  * Merge a TOML row into an array table. If a row with the same identifying property exists, merge the values. Otherwise, insert a new row.
* [org.openrewrite.toml.ReplaceTableRow](/recipes/toml/replacetablerow.md)
  * **Replace TOML table row**
  * Replace a TOML table row with new content. If a row with the same identifying property exists, replace it entirely.

## rewrite-xml

_License: Apache License Version 2.0_

_28 recipes_

* [org.openrewrite.xml.AddCommentToXmlTag](/recipes/xml/addcommenttoxmltag.md)
  * **Add a comment to an XML tag**
  * Adds a comment as the first element in an XML tag.
* [org.openrewrite.xml.AddOrUpdateChildTag](/recipes/xml/addorupdatechildtag.md)
  * **Add or update child tag**
  * Adds or updates a child element below the parent(s) matching the provided `parentXPath` expression. If a child with the same name already exists, it will be replaced by default. Otherwise, a new child will be added. This ensures idempotent behaviour.
* [org.openrewrite.xml.AddTagAttribute](/recipes/xml/addtagattribute.md)
  * **Add new XML attribute for an Element**
  * Add new XML attribute with value on a specified element.
* [org.openrewrite.xml.ChangeNamespaceValue](/recipes/xml/changenamespacevalue.md)
  * **Change XML attribute of a specific resource version**
  * Alters XML Attribute value within specified element of a specific resource versions.
* [org.openrewrite.xml.ChangeTagAttribute](/recipes/xml/changetagattribute.md)
  * **Change XML attribute**
  * Alters XML attribute value on a specified element.
* [org.openrewrite.xml.ChangeTagAttributeKey](/recipes/xml/changetagattributekey.md)
  * **Change XML attribute key**
  * Change an attributes key on XML elements using an XPath expression.
* [org.openrewrite.xml.ChangeTagName](/recipes/xml/changetagname.md)
  * **Change XML tag name**
  * Alters the name of XML tags matching the provided expression.
* [org.openrewrite.xml.ChangeTagValue](/recipes/xml/changetagvalue.md)
  * **Change XML tag value**
  * Alters the value of XML tags matching the provided expression. When regex is enabled the replacement happens only for text nodes provided the pattern matches.
* [org.openrewrite.xml.CreateXmlFile](/recipes/xml/createxmlfile.md)
  * **Create XML file**
  * Create a new XML file.
* [org.openrewrite.xml.RemoveEmptyXmlTags](/recipes/xml/removeemptyxmltags.md)
  * **Remove empty XML Tag**
  * Removes XML tags that do not have attributes or children, including self closing tags.
* [org.openrewrite.xml.RemoveTrailingWhitespace](/recipes/xml/removetrailingwhitespace.md)
  * **Remove trailing whitespace**
  * Remove any extra trailing whitespace from the end of each line.
* [org.openrewrite.xml.RemoveXmlTag](/recipes/xml/removexmltag.md)
  * **Remove XML tag**
  * Removes XML tags matching the provided expression.
* [org.openrewrite.xml.XsltTransformation](/recipes/xml/xslttransformation.md)
  * **XSLT transformation**
  * Apply the specified XSLT transformation on matching files. Note that there are no format matching guarantees when running this recipe.
* [org.openrewrite.xml.format.AutoFormat](/recipes/xml/format/autoformat.md)
  * **Format XML**
  * Indents XML using the most common indentation size and tabs or space choice in use in the file.
* [org.openrewrite.xml.format.LineBreaks](/recipes/xml/format/linebreaks.md)
  * **Blank lines**
  * Add line breaks at appropriate places between XML syntax elements.
* [org.openrewrite.xml.format.NormalizeFormat](/recipes/xml/format/normalizeformat.md)
  * **Normalize format**
  * Move whitespace to the outermost LST element possible.
* [org.openrewrite.xml.format.NormalizeLineBreaks](/recipes/xml/format/normalizelinebreaks.md)
  * **Normalize line breaks**
  * Consistently use either Windows style (CRLF) or Linux style (LF) line breaks. If no `GeneralFormatStyle` is specified this will use whichever style of line endings are more common.
* [org.openrewrite.xml.format.NormalizeTabsOrSpaces](/recipes/xml/format/normalizetabsorspaces.md)
  * **Normalize to tabs or spaces**
  * Consistently use either tabs or spaces in indentation.
* [org.openrewrite.xml.format.TabsAndIndents](/recipes/xml/format/tabsandindents.md)
  * **Tabs and indents**
  * Format tabs and indents in XML code.
* [org.openrewrite.xml.search.DoesNotUseNamespaceUri](/recipes/xml/search/doesnotusenamespaceuri.md)
  * **Find files without Namespace URI**
  * Find XML root elements that do not have a specific Namespace URI, optionally restricting the search by an XPath expression.
* [org.openrewrite.xml.search.FindNamespacePrefix](/recipes/xml/search/findnamespaceprefix.md)
  * **Find XML namespace prefixes**
  * Find XML namespace prefixes, optionally restricting the search by a XPath expression.
* [org.openrewrite.xml.search.FindTags](/recipes/xml/search/findtags.md)
  * **Find XML tags**
  * Find XML tags by XPath expression.
* [org.openrewrite.xml.search.HasNamespaceUri](/recipes/xml/search/hasnamespaceuri.md)
  * **Find XML namespace URIs**
  * Find XML namespace URIs, optionally restricting the search by a XPath expression.
* [org.openrewrite.xml.security.AddOwaspDateBoundSuppressions](/recipes/xml/security/addowaspdateboundsuppressions.md)
  * **Add date bounds to OWASP suppressions**
  * Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* [org.openrewrite.xml.security.IsOwaspSuppressionsFile](/recipes/xml/security/isowaspsuppressionsfile.md)
  * **Find OWASP vulnerability suppression XML files**
  * These files are used to suppress false positives in OWASP [Dependency Check](https://jeremylong.github.io/DependencyCheck).
* [org.openrewrite.xml.security.RemoveOwaspSuppressions](/recipes/xml/security/removeowaspsuppressions.md)
  * **Remove out-of-date OWASP suppressions**
  * Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files can be found [here](https://jeremylong.github.io/DependencyCheck/general/suppression.html).
* [org.openrewrite.xml.security.UpdateOwaspSuppressionDate](/recipes/xml/security/updateowaspsuppressiondate.md)
  * **Update OWASP suppression date bounds**
  * Updates the expiration date for OWASP suppressions having a matching cve tag. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* [org.openrewrite.xml.style.AutodetectDebug](/recipes/xml/style/autodetectdebug.md)
  * **XML style Auto-detection debug**
  * Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do.

## rewrite-yaml

_License: Apache License Version 2.0_

_18 recipes_

* [org.openrewrite.yaml.AddCommentToProperty](/recipes/yaml/addcommenttoproperty.md)
  * **Add comment to a YAML property**
  * Add a comment to a YAML property. The comment will be added on the line before the property.
* [org.openrewrite.yaml.AppendToSequence](/recipes/yaml/appendtosequence.md)
  * **Append to sequence**
  * Append item to YAML sequence.
* [org.openrewrite.yaml.ChangeKey](/recipes/yaml/changekey.md)
  * **Change key**
  * Change a YAML mapping entry key while leaving the value intact.
* [org.openrewrite.yaml.ChangePropertyKey](/recipes/yaml/changepropertykey.md)
  * **Change property key**
  * Change a YAML property key while leaving the value intact. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files.
* [org.openrewrite.yaml.ChangePropertyValue](/recipes/yaml/changepropertyvalue.md)
  * **Change YAML property**
  * Change a YAML property. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files.
* [org.openrewrite.yaml.ChangeValue](/recipes/yaml/changevalue.md)
  * **Change value**
  * Change a YAML mapping entry value while leaving the key intact.
* [org.openrewrite.yaml.CoalesceProperties](/recipes/yaml/coalesceproperties.md)
  * **Coalesce YAML properties**
  * Simplify nested map hierarchies into their simplest dot separated property form, similar to how Spring Boot interprets `application.yml` files.
* [org.openrewrite.yaml.CommentOutProperty](/recipes/yaml/commentoutproperty.md)
  * **Comment out property**
  * Comment out a YAML property and add a comment in front.
* [org.openrewrite.yaml.CopyValue](/recipes/yaml/copyvalue.md)
  * **Copy YAML value**
  * Copies a YAML value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to merge the copied value into the new key if it already exists. By default, attempts to create the new key if it does not exist.
* [org.openrewrite.yaml.CreateYamlFile](/recipes/yaml/createyamlfile.md)
  * **Create YAML file**
  * Create a new YAML file.
* [org.openrewrite.yaml.DeleteKey](/recipes/yaml/deletekey.md)
  * **Delete key**
  * Delete a YAML mapping entry key.
* [org.openrewrite.yaml.DeleteProperty](/recipes/yaml/deleteproperty.md)
  * **Delete property**
  * Delete a YAML property. Nested YAML mappings are interpreted as dot separated property names, i.e. as Spring Boot interprets application.yml files like `a.b.c.d` or `a.b.c:d`.
* [org.openrewrite.yaml.MergeYaml](/recipes/yaml/mergeyaml.md)
  * **Merge YAML snippet**
  * Merge a YAML snippet with an existing YAML document.
* [org.openrewrite.yaml.UnfoldProperties](/recipes/yaml/unfoldproperties.md)
  * **Unfold YAML properties**
  * Transforms dot-separated property keys in YAML files into nested map hierarchies to enhance clarity and readability, or for compatibility with tools expecting structured YAML.
* [org.openrewrite.yaml.cleanup.RemoveUnused](/recipes/yaml/cleanup/removeunused.md)
  * **Remove unused YAML**
  * Remove YAML mappings and sequence keys that have no value.
* [org.openrewrite.yaml.format.Indents](/recipes/yaml/format/indents.md)
  * **YAML indent**
  * Format tabs and indents in YAML.
* [org.openrewrite.yaml.search.FindKey](/recipes/yaml/search/findkey.md)
  * **Find YAML entries**
  * Find YAML entries that match the specified [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression.
* [org.openrewrite.yaml.search.FindProperty](/recipes/yaml/search/findproperty.md)
  * **Find YAML properties**
  * Find YAML properties that match the specified `propertyKey`. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files.
