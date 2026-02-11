---
description: What's changed in OpenRewrite version 8.73.0.
---

# 8.73.0 release (2026-02-11)

_Total recipe count: 4755_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.53.2`
* Staging CLI version: `v3.57.1`

## New Artifacts

* rewrite-prethink

## New Recipes

* [com.oracle.weblogic.rewrite.ReportDeprecated](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/reportdeprecated): This recipe will report uses of Java types that have been deprecated or removed in WebLogic. 
* [com.oracle.weblogic.rewrite.ReportDeprecatedOrRemoved1412](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/reportdeprecatedorremoved1412): This recipe will report Java types that have been deprecated or removed in WebLogic version 14.1.2. 
* [com.oracle.weblogic.rewrite.ReportDeprecatedOrRemoved1511](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/reportdeprecatedorremoved1511): This recipe will report Java types that have been deprecated or removed in WebLogic version 15.1.1. 
* [com.oracle.weblogic.rewrite.UpgradeJPATo31HibernateTo66](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/upgradejpato31hibernateto66): This recipe upgrades Jakarta JPA to 3.1 and Hibernate to 6.6 (compatible with Jakarta EE 10). 
* [com.oracle.weblogic.rewrite.hibernate.UpgradeHibernateTo66](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/hibernate/upgradehibernateto66): This recipe upgrades Hibernate to version 6.6, which is compatible with Jakarta EE 10 and JPA 3.1. It also upgrades a few of the commonly used Hibernate add-ons. 
* [io.moderne.prethink.ComprehendCode](https://docs.openrewrite.org/recipes/prethink/comprehendcode): Use an LLM to generate descriptions for classes and methods in the codebase. Descriptions are cached based on source code checksums to avoid regenerating descriptions for unchanged code. 
* [io.moderne.prethink.ComprehendCodeTokenCounter](https://docs.openrewrite.org/recipes/prethink/comprehendcodetokencounter): Estimate the input token counts that would be sent to an LLM for method comprehension, without actually calling a model. Uses OpenAI's tokenizer locally. Outputs to the MethodDescriptions table with blank descriptions. 
* [io.moderne.prethink.ExtractCodingConventions](https://docs.openrewrite.org/recipes/prethink/extractcodingconventions): Analyze the codebase to extract coding conventions including naming patterns, import organization, and documentation patterns. 
* [io.moderne.prethink.ExtractDependencyUsage](https://docs.openrewrite.org/recipes/prethink/extractdependencyusage): Analyze the codebase to extract dependency usage patterns by examining which types from external libraries are actually used in the code. 
* [io.moderne.prethink.ExtractErrorPatterns](https://docs.openrewrite.org/recipes/prethink/extracterrorpatterns): Analyze the codebase to extract error handling patterns including exception types, handling strategies, and logging frameworks used. 
* [io.moderne.prethink.FindTestCoverage](https://docs.openrewrite.org/recipes/prethink/findtestcoverage): Map test methods to their corresponding implementation methods. Uses JavaType.Method matching to determine coverage relationships. Optionally generates AI summaries of what each test is verifying when LLM provider is configured. 
* [io.moderne.prethink.UpdatePrethinkContextNoAiStarter](https://docs.openrewrite.org/recipes/prethink/updateprethinkcontextnoaistarter): Generate Moderne Prethink context files with architectural discovery, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. This recipe does not require an LLM provider - use UpdatePrethinkContextStarter if you want AI-generated code comprehension and test summaries. 
* [io.moderne.prethink.UpdatePrethinkContextStarter](https://docs.openrewrite.org/recipes/prethink/updateprethinkcontextstarter): Generate Moderne Prethink context files with AI-generated code comprehension, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. Maps tests to implementation methods and optionally generates AI summaries of what each test verifies when LLM provider is configured. 
* [io.moderne.prethink.calm.FindCalmRelationships](https://docs.openrewrite.org/recipes/prethink/calm/findcalmrelationships): Discover method call relationships within the repository for building interaction diagrams. Captures all method-to-method calls between in-repo classes. Entity IDs are resolved by GenerateCalmArchitecture when building CALM relationships. 
* [io.moderne.prethink.calm.FindDataAssets](https://docs.openrewrite.org/recipes/prethink/calm/finddataassets): Identify data assets including JPA entities, MongoDB documents, Java records, and DTOs in the application. 
* [io.moderne.prethink.calm.FindDatabaseConnections](https://docs.openrewrite.org/recipes/prethink/calm/finddatabaseconnections): Identify database connections and data access patterns in the application. Detects JPA entities, Spring Data repositories, JDBC templates, and MyBatis mappers. 
* [io.moderne.prethink.calm.FindDeploymentArtifacts](https://docs.openrewrite.org/recipes/prethink/calm/finddeploymentartifacts): Identify deployment artifacts including Dockerfiles, docker-compose files, and Kubernetes manifests. 
* [io.moderne.prethink.calm.FindExternalServiceCalls](https://docs.openrewrite.org/recipes/prethink/calm/findexternalservicecalls): Identify outbound HTTP calls to external services. Detects RestTemplate, WebClient, Feign clients, Apache HttpClient, OkHttp, and JAX-RS clients. 
* [io.moderne.prethink.calm.FindMessagingConnections](https://docs.openrewrite.org/recipes/prethink/calm/findmessagingconnections): Identify message queue producers and consumers. Detects Kafka, RabbitMQ, JMS, Spring Cloud Stream, and AWS SQS messaging. 
* [io.moderne.prethink.calm.FindProjectMetadata](https://docs.openrewrite.org/recipes/prethink/calm/findprojectmetadata): Extract project metadata (artifact ID, group ID, name, description) from Maven pom.xml files. 
* [io.moderne.prethink.calm.FindSecurityConfiguration](https://docs.openrewrite.org/recipes/prethink/calm/findsecurityconfiguration): Identify security configurations including Spring Security, OAuth2, and CORS settings. 
* [io.moderne.prethink.calm.FindServerConfiguration](https://docs.openrewrite.org/recipes/prethink/calm/findserverconfiguration): Extract server configuration (port, SSL, context path) from application.properties and application.yml files. 
* [io.moderne.prethink.calm.FindServiceComponents](https://docs.openrewrite.org/recipes/prethink/calm/findservicecomponents): Identify service layer components (@Service, @Component, @Named) in the application. Excludes controllers and repositories which are handled by dedicated recipes. 
* [io.moderne.prethink.calm.FindServiceEndpoints](https://docs.openrewrite.org/recipes/prethink/calm/findserviceendpoints): Identify all REST/HTTP service endpoints exposed by the application. Supports Spring MVC, JAX-RS, Micronaut, and Quarkus REST endpoints. 
* [io.moderne.prethink.calm.GenerateCalmMermaidDiagram](https://docs.openrewrite.org/recipes/prethink/calm/generatecalmmermaiddiagram): Generate a markdown file with a mermaid architecture diagram from discovered service endpoints, database connections, external service calls, and messaging connections. 
* [io.quarkus.updates.core.quarkus331.AddArglineToSurefireFailsafePlugins](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/addarglinetosurefirefailsafeplugins): Add or update <argLine> in maven-surefire-plugin and maven-failsafe-plugin configuration to include @{argLine} placeholder. 
* [io.quarkus.updates.core.quarkus331.JUnitRelocations](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/junitrelocations):  
* [io.quarkus.updates.core.quarkus331.OpenTelemetryTracingPackageTypoFix](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/opentelemetrytracingpackagetypofix):  
* [io.quarkus.updates.core.quarkus331.Testcontainers2](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/testcontainers2):  
* [org.openrewrite.Singleton](https://docs.openrewrite.org/recipes/core/singleton): Used as a precondition to ensure that a recipe attempts to make changes only once. Accidentally including multiple copies/instances of the same large composite recipes is a common mistake. If those recipes are marked with this precondition the performance penalty is limited. This recipe does nothing useful run on its own.

## Usage in YAML recipes

Add `org.openrewrite.Singleton` as a precondition:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.example.Append
displayName: My recipe
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.text.AppendToTextFile:
      relativeFileName: report.txt
      content: 'Recipe executed'
```## Usage in Java recipes

Wrap visitors with `Singleton.singleton(this, visitor)` to ensure only the first *equivalent* recipe instance makes changes:

```java
@Override
public TreeVisitor<?, ExecutionContext> getVisitor(Accumulator acc) {
    return singleton(this, new TreeVisitor<Tree, ExecutionContext>() {
        @Override
        public Tree visit(@Nullable Tree tree, ExecutionContext ctx) {
            // Your transformation logic
            return tree;
        }
    });
}
@Override
public Collection<SourceFile> generate(Accumulator acc, ExecutionContext ctx) {
    if (!isSingleton(this, ctx)) {
        return Collections.emptyList();
    }
    // Generate new sources
    return results;
}

@Override
public TreeVisitor<?, ExecutionContext> getVisitor(Accumulator acc) {
    return singleton(this, new TreeVisitor<Tree, ExecutionContext>() {
        // Visitor logic
    });
}
```

**Note:** Singleton status is determined by the recipe's `equals()` and `hashCode()` methods. If equivalent instances of a recipe are not considered singletons, ensure your recipe class correctly implements these methods. The easiest way is to use Lombok's `@Value` annotation on your recipe class, which automatically generates correct `equals()` and `hashCode()` implementations based on all fields. 
* [org.openrewrite.apache.httpclient5.MigratePoolingNHttpClientConnectionManager](https://docs.openrewrite.org/recipes/apache/httpclient5/migratepoolingnhttpclientconnectionmanager): Migrates `PoolingNHttpClientConnectionManager` from Apache HttpAsyncClient 4.x to `PoolingAsyncClientConnectionManager` in HttpClient 5.x using the builder pattern. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_AsyncClientClassMapping](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpclient_5_asyncclientclassmapping): Migrates classes from Apache HttpAsyncClient 4.x `httpasyncclient` to their equivalents in HttpClient 5.x. 
* [org.openrewrite.apache.httpclient5.UsePoolingAsyncClientConnectionManagerBuilder](https://docs.openrewrite.org/recipes/apache/httpclient5/usepoolingasyncclientconnectionmanagerbuilder): Moves method calls that exist on both `PoolingAsyncClientConnectionManager` and `PoolingAsyncClientConnectionManagerBuilder` into the builder chain. 
* [org.openrewrite.docker.AddAptGetCleanup](https://docs.openrewrite.org/recipes/docker/addaptgetcleanup): Adds cleanup commands to apt-get RUN instructions to reduce Docker image size. By default, adds 'rm -rf /var/lib/apt/lists/*' to remove cached package lists. 
* [org.openrewrite.docker.AddOciLabels](https://docs.openrewrite.org/recipes/docker/addocilabels): Adds standard OCI (Open Container Initiative) image labels to a Dockerfile. These labels provide metadata about the image such as title, version, source, and license information. See https://github.com/opencontainers/image-spec/blob/main/annotations.md for the specification. 
* [org.openrewrite.docker.AddOrUpdateLabel](https://docs.openrewrite.org/recipes/docker/addorupdatelabel): Adds or updates a LABEL instruction in a Dockerfile. By default, adds to the final stage only. 
* [org.openrewrite.docker.AddUserInstruction](https://docs.openrewrite.org/recipes/docker/adduserinstruction): Adds a `USER` instruction to run the container as a non-root user (CIS Docker Benchmark 4.1). By default, adds to the final stage only and skips if a `USER` instruction already exists. 
* [org.openrewrite.docker.ChangeFrom](https://docs.openrewrite.org/recipes/docker/changefrom): Change the base image in a Dockerfile FROM instruction. 
* [org.openrewrite.docker.CombineRunInstructions](https://docs.openrewrite.org/recipes/docker/combineruninstructions): Combines consecutive `RUN` instructions into a single instruction to reduce image layers. Only shell form `RUN` instructions without flags are combined. 
* [org.openrewrite.docker.DockerBestPractices](https://docs.openrewrite.org/recipes/docker/dockerbestpractices): Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices. 
* [org.openrewrite.docker.DockerBuildOptimization](https://docs.openrewrite.org/recipes/docker/dockerbuildoptimization): Apply build optimization best practices to Dockerfiles. This includes combining RUN instructions to reduce layers and adding cleanup commands to reduce image size. 
* [org.openrewrite.docker.DockerSecurityBestPractices](https://docs.openrewrite.org/recipes/docker/dockersecuritybestpractices): Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9). 
* [org.openrewrite.docker.NormalizeDockerHubImageName](https://docs.openrewrite.org/recipes/docker/normalizedockerhubimagename): Normalizes Docker Hub image names to their canonical short form by removing redundant registry prefixes like `docker.io/library/` or `index.docker.io/`. 
* [org.openrewrite.docker.ReplaceAddWithCopy](https://docs.openrewrite.org/recipes/docker/replaceaddwithcopy): Replaces `ADD` instructions with `COPY` where appropriate. `ADD` is only kept when the source is a URL or a tar archive that should be auto-extracted. Using `COPY` is preferred for transparency (CIS Docker Benchmark 4.9). 
* [org.openrewrite.docker.UseExecFormEntrypoint](https://docs.openrewrite.org/recipes/docker/useexecformentrypoint): Converts shell form `ENTRYPOINT` and `CMD` instructions to exec form (JSON array). Exec form is preferred because it runs the command as PID 1, allowing it to receive Unix signals properly. Shell form wraps commands in `/bin/sh -c` which can cause signal handling issues. 
* [org.openrewrite.docker.search.FindBaseImages](https://docs.openrewrite.org/recipes/docker/search/findbaseimages): Find all base images (`FROM` instructions) in Dockerfiles. 
* [org.openrewrite.docker.search.FindEndOfLifeImages](https://docs.openrewrite.org/recipes/docker/search/findendoflifeimages): Identifies Docker base images that have reached end-of-life. Using EOL images poses security risks as they no longer receive security updates. Detected images include EOL versions of Debian, Ubuntu, Alpine, Python, and Node.js. 
* [org.openrewrite.docker.search.FindExposedPorts](https://docs.openrewrite.org/recipes/docker/search/findexposedports): Find all `EXPOSE` instructions in Dockerfiles and report the exposed ports. 
* [org.openrewrite.docker.search.FindMissingHealthcheck](https://docs.openrewrite.org/recipes/docker/search/findmissinghealthcheck): Finds Dockerfiles where the final stage is missing a `HEALTHCHECK` instruction (CIS Docker Benchmark 4.6). Health checks help container orchestrators determine if a container is healthy and ready to receive traffic. 
* [org.openrewrite.docker.search.FindRootUser](https://docs.openrewrite.org/recipes/docker/search/findrootuser): Finds containers that run as root user (CIS Docker Benchmark 4.1). This includes explicit `USER root` or `USER 0` instructions, and optionally containers with no `USER` instruction in the final stage (which default to root). 
* [org.openrewrite.docker.search.FindUnpinnedBaseImages](https://docs.openrewrite.org/recipes/docker/search/findunpinnedbaseimages): Finds FROM instructions that use unpinned base images (CIS Docker Benchmark 4.2). Images without an explicit tag default to 'latest', which is not reproducible. Images pinned by digest are considered acceptable. 
* [org.openrewrite.gradle.search.FindRepositoryOrder](https://docs.openrewrite.org/recipes/gradle/search/findrepositoryorder): Determine the order in which dependencies will be resolved for each `build.gradle` based on its defined repositories as determined when the LST was produced. 
* [org.openrewrite.java.dependencies.FindRepositoryOrder](https://docs.openrewrite.org/recipes/java/dependencies/findrepositoryorder): Determine the order in which dependencies will be resolved for each `pom.xml` or `build.gradle` based on its defined repositories and effective settings. 
* [org.openrewrite.java.dependencies.search.FindDuplicateClasses](https://docs.openrewrite.org/recipes/java/dependencies/search/findduplicateclasses): Detects classes that appear in multiple dependencies on the classpath. This is similar to what the Maven duplicate-finder-maven-plugin does. Duplicate classes can cause runtime issues when different versions of the same class are loaded. 
* [org.openrewrite.java.dropwizard.MigrateToDropwizard5](https://docs.openrewrite.org/recipes/java/dropwizard/migratetodropwizard5): Apply changes required to upgrade a Dropwizard 4.x application to 5.0.x. This includes upgrading dependencies, removing deprecated configuration options, and migrating Jetty handler implementations.
Includes required migrations to Java 17, Jakarta EE 10, JUnit 5.14, Jackson 2.x, and Hibernate 6.6. See [the upgrade guide](https://www.dropwizard.io/en/stable/manual/upgrade-notes/upgrade-notes-5_0_x.html). 
* [org.openrewrite.java.dropwizard.jetty.MigrateJettyHandlerSignature](https://docs.openrewrite.org/recipes/java/dropwizard/jetty/migratejettyhandlersignature): Migrates custom Jetty handler implementations from Jetty 11's `AbstractHandler` (used in Dropwizard 4.x) to Jetty 12's `Handler.Abstract` (used in Dropwizard 5.x). This changes the `handle` method signature and updates `baseRequest.setHandled(true)` to use `Callback` and return `true`. 
* [org.openrewrite.java.migrate.EnableLombokAnnotationProcessor](https://docs.openrewrite.org/recipes/java/migrate/enablelombokannotationprocessor): With Java 23 the encapsulation of JDK internals made it necessary to configure annotation processors like Lombok explicitly. The change is valid for older versions as well. 
* [org.openrewrite.java.migrate.MigrateGraalVMResourceConfig](https://docs.openrewrite.org/recipes/java/migrate/migrategraalvmresourceconfig): Migrates GraalVM native-image resource-config.json files from the legacy regex pattern format (JDK 21 and earlier) to the new glob pattern format (JDK 23+). Converts `pattern` entries to `glob` entries and restructures the format. Note: `excludes` are no longer supported in the new format and will be removed. 
* [org.openrewrite.java.migrate.UpgradeDockerImageVersion](https://docs.openrewrite.org/recipes/java/migrate/upgradedockerimageversion): Upgrade Docker image tags to use the specified Java version. Updates common Java Docker images including eclipse-temurin, amazoncorretto, azul/zulu-openjdk, and others. Also migrates deprecated images (openjdk, adoptopenjdk) to eclipse-temurin. 
* [org.openrewrite.java.migrate.util.UseListOf](https://docs.openrewrite.org/recipes/java/migrate/util/uselistof): Prefer `List.of(..)` instead of using `java.util.List#add(..)` in anonymous ArrayList initializers in Java 10 or higher. This recipe will not modify code where the List is later mutated since `List.of` returns an immutable list. 
* [org.openrewrite.java.migrate.util.UseSetOf](https://docs.openrewrite.org/recipes/java/migrate/util/usesetof): Prefer `Set.of(..)` instead of using `java.util.Set#add(..)` in anonymous HashSet initializers in Java 10 or higher. This recipe will not modify code where the Set is later mutated since `Set.of` returns an immutable set. 
* [org.openrewrite.java.recipes.DeclarativeSingleton](https://docs.openrewrite.org/recipes/java/recipes/declarativesingleton): Adds the `org.openrewrite.Singleton` precondition to declarative YAML recipes to ensure they only execute once, even when included multiple times. 
* [org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes](https://docs.openrewrite.org/recipes/java/recipes/generatedeprecatedmethodrecipes): Finds `@Deprecated` method declarations whose body is a single delegation call to another method in the same class, and generates a declarative YAML recipe file containing `InlineMethodCalls` entries for each. 
* [org.openrewrite.java.recipes.RemoveToBeRemoved](https://docs.openrewrite.org/recipes/java/recipes/removetoberemoved): Removes class, method and variable declarations annotated with `org.openrewrite.internal.ToBeRemoved` whose `after` date has passed. This does not remove invocations or references to such methods or variables. Those must be handled separately, e.g. with `org.openrewrite.java.InlineMethodCalls`. 
* [org.openrewrite.java.search.ModuleContainsFile](https://docs.openrewrite.org/recipes/java/search/modulecontainsfile): Intended to be used primarily as a precondition for other recipes, this recipe checks if a module contains a specific file or files matching a pattern. Only files belonging to modules containing the specified file are marked with a `SearchResult` marker. This is more specific than `RepositoryContainsFile` which marks all files in the repository if any file matches. 
* [org.openrewrite.java.search.ModuleUsesType](https://docs.openrewrite.org/recipes/java/search/moduleusestype): Intended to be used primarily as a precondition for other recipes, this recipe checks if a module uses a specified type. Only files belonging to modules that use the specified type are marked with a `SearchResult` marker. This is more specific than `UsesType` which only marks the files that directly use the type. 
* [org.openrewrite.java.spring.NoHttpExchangeAnnotation](https://docs.openrewrite.org/recipes/java/spring/nohttpexchangeannotation): Replace method declaration `@HttpExchange` annotations with `@GetExchange`, `@PostExchange`, etc. 
* [org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk](https://docs.openrewrite.org/recipes/java/spring/batch/addtransactionmanagertotaskletandchunk): Spring Batch 5.0 requires a `PlatformTransactionManager` as the second argument to `StepBuilder.tasklet(Tasklet)` and `StepBuilder.chunk(int)` / `StepBuilder.chunk(CompletionPolicy)`. This recipe adds the `transactionManager` argument and injects it as a method parameter if needed. 
* [org.openrewrite.java.spring.batch.MigrateStepExecutionTimestampTypes](https://docs.openrewrite.org/recipes/java/spring/batch/migratestepexecutiontimestamptypes): In Spring Batch 5.0, `StepExecution` and `JobExecution` timestamp methods (`getStartTime()`, `getEndTime()`, `getCreateTime()`, `getLastUpdated()`) return `java.time.LocalDateTime` instead of `java.util.Date`. This recipe updates variable declarations accordingly. 
* [org.openrewrite.java.spring.boot4.AddAutoConfigureWebTestClient](https://docs.openrewrite.org/recipes/java/spring/boot4/addautoconfigurewebtestclient): Adds `@AutoConfigureWebTestClient` to test classes annotated with `@SpringBootTest` that use `WebTestClient` since this bean is no longer auto-configured as described in the [Spring Boot 4 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-4.0-Migration-Guide#using-webclient-or-testresttemplate-and-springboottest). 
* [org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryConnectTimeout](https://docs.openrewrite.org/recipes/java/spring/framework/httpcomponentsclienthttprequestfactoryconnecttimeout): `setConnectTimeout(..)` was deprecated in Spring Framework 6.2 and removed in 7.0. This recipe adds a comment directing users to migrate to `ConnectionConfig.setConnectTimeout()` on the `PoolingHttpClientConnectionManager`. 
* [org.openrewrite.java.spring.security.SpringSecurityBestPractices](https://docs.openrewrite.org/recipes/java/spring/security/springsecuritybestpractices): Applies security best practices to Spring applications, including TLS for database and message broker connections. 
* [org.openrewrite.java.testing.assertj.ReturnActual](https://docs.openrewrite.org/recipes/java/testing/assertj/returnactual): Collapse an `assertThat` statement followed by a `return` of the same object into a single `return assertThat(...).assertions().actual()` statement. 
* [org.openrewrite.java.testing.junit5.CleanupKotlinJUnit5AssertionImports](https://docs.openrewrite.org/recipes/java/testing/junit5/cleanupkotlinjunit5assertionimports): In Kotlin, when both `import org.junit.jupiter.api.*` and static imports from `org.junit.jupiter.api.Assertions` are present, there is overload resolution ambiguity between the Java static methods and the Kotlin extension functions. This recipe removes the static Assertions imports when the wildcard import is present, allowing the Kotlin extension functions to be used instead. 
* [org.openrewrite.java.testing.junit5.MigrateAssertionFailedError](https://docs.openrewrite.org/recipes/java/testing/junit5/migrateassertionfailederror): Replace JUnit 4's `junit.framework.AssertionFailedError` and `org.junit.ComparisonFailure` with JUnit Jupiter's `org.opentest4j.AssertionFailedError`. 
* [org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse](https://docs.openrewrite.org/recipes/java/testing/junit5/updatemockwebservermockresponse): Replace usages of OkHttp MockWebServer `MockResponse` with 5.x MockWebServer3 `MockResponse` and it's `Builder`. 
* [org.openrewrite.java.testing.mockito.MockConstructionToTryWithResources](https://docs.openrewrite.org/recipes/java/testing/mockito/mockconstructiontotrywithresources): Wraps `MockedConstruction` variable declarations that have explicit `.close()` calls into try-with-resources blocks, removing the explicit close call. This ensures proper resource management and makes the code cleaner. 
* [org.openrewrite.maven.AddManagedPlugin](https://docs.openrewrite.org/recipes/maven/addmanagedplugin): Add the specified Maven plugin to the Plugin Managed of the pom.xml. 
* [org.openrewrite.maven.RemoveMavenWrapper](https://docs.openrewrite.org/recipes/maven/removemavenwrapper): Remove Maven wrapper files from a project. This includes the `mvnw` and `mvnw.cmd` scripts, and the `.mvn/wrapper` directory. 
* [org.openrewrite.node.dependency-vulnerability-check](https://docs.openrewrite.org/recipes/node/dependency-vulnerability-check): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version. If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from the GitHub Security Advisory Database. 
* [org.openrewrite.node.migrate.buffer.replace-deprecated-slice](https://docs.openrewrite.org/recipes/node/migrate/buffer/replace-deprecated-slice): Replace deprecated `buffer.slice()` calls with `buffer.subarray()` for compatibility with Uint8Array.prototype.slice(). 
* [org.openrewrite.node.migrate.buffer.replace-slow-buffer](https://docs.openrewrite.org/recipes/node/migrate/buffer/replace-slow-buffer): Replace deprecated `new SlowBuffer(size)` calls with `Buffer.allocUnsafeSlow(size)`. SlowBuffer was used to create un-pooled Buffer instances, but has been removed in favor of the explicit Buffer.allocUnsafeSlow() method. 
* [org.openrewrite.node.migrate.crypto.replace-crypto-fips](https://docs.openrewrite.org/recipes/node/migrate/crypto/replace-crypto-fips): Replace deprecated `crypto.fips` property access with `crypto.getFips()` for reads and `crypto.setFips(value)` for writes. 
* [org.openrewrite.node.migrate.crypto.replace-hash-constructor](https://docs.openrewrite.org/recipes/node/migrate/crypto/replace-hash-constructor): Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods. 
* [org.openrewrite.node.migrate.fs.replace-dirent-path](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-dirent-path): Replaces deprecated `dirent.path` property access with `dirent.parentPath` on `fs.Dirent` instances to address DEP0178 deprecation. 
* [org.openrewrite.node.migrate.fs.replace-fs-access-constants](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-fs-access-constants): Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace. 
* [org.openrewrite.node.migrate.fs.replace-fs-truncate-fd](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-fs-truncate-fd): Replace deprecated `fs.truncate(fd, ...)` and `fs.truncateSync(fd, ...)` calls with `fs.ftruncate(fd, ...)` and `fs.ftruncateSync(fd, ...)` when the first argument is a file descriptor (number). 
* [org.openrewrite.node.migrate.fs.replace-stats-constructor](https://docs.openrewrite.org/recipes/node/migrate/fs/replace-stats-constructor): Replace deprecated `new fs.Stats()` constructor calls with an object literal containing Stats properties initialized to undefined. 
* [org.openrewrite.node.migrate.http.replace-outgoing-message-headers](https://docs.openrewrite.org/recipes/node/migrate/http/replace-outgoing-message-headers): Replace deprecated `OutgoingMessage.prototype._headers` with `getHeaders()`, `setHeader()`, `removeHeader()` and `OutgoingMessage.prototype._headerNames` with `getHeaderNames()` to address DEP0066 deprecation. 
* [org.openrewrite.node.migrate.net.remove-set-simultaneous-accepts](https://docs.openrewrite.org/recipes/node/migrate/net/remove-set-simultaneous-accepts): Remove calls to deprecated `net._setSimultaneousAccepts()` which was an undocumented internal function that is no longer necessary. 
* [org.openrewrite.node.migrate.process.coerce-process-exit-code](https://docs.openrewrite.org/recipes/node/migrate/process/coerce-process-exit-code): Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer. 
* [org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants](https://docs.openrewrite.org/recipes/node/migrate/process/remove-usage-of-features-tls-underscore_constants): Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`. 
* [org.openrewrite.node.migrate.stream.replace-internal-modules](https://docs.openrewrite.org/recipes/node/migrate/stream/replace-internal-modules): Replace deprecated internal stream module imports like `require('node:_stream_readable')` with the public `node:stream` module. 
* [org.openrewrite.node.migrate.tls.replace-internal-modules](https://docs.openrewrite.org/recipes/node/migrate/tls/replace-internal-modules): Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module. 
* [org.openrewrite.node.migrate.upgrade-node-22](https://docs.openrewrite.org/recipes/node/migrate/upgrade-node-22): Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions. 
* [org.openrewrite.node.migrate.upgrade-node-24](https://docs.openrewrite.org/recipes/node/migrate/upgrade-node-24): Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations. 
* [org.openrewrite.node.migrate.util.remove-promisify-on-promise](https://docs.openrewrite.org/recipes/node/migrate/util/remove-promisify-on-promise): Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174). 
* [org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module](https://docs.openrewrite.org/recipes/node/migrate/util/replace-is-webassembly-compiled-module): Replace `util.types.isWebAssemblyCompiledModule(value)` with `value instanceof WebAssembly.Module`. 
* [org.openrewrite.node.migrate.util.replace-util-extend](https://docs.openrewrite.org/recipes/node/migrate/util/replace-util-extend): Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior. 
* [org.openrewrite.node.migrate.util.replace-util-log](https://docs.openrewrite.org/recipes/node/migrate/util/replace-util-log): Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not. 
* [org.openrewrite.node.migrate.util.use-native-type-checking-methods](https://docs.openrewrite.org/recipes/node/migrate/util/use-native-type-checking-methods): The `util` module's type-checking methods have been removed in Node 22. 
* [org.openrewrite.node.migrate.zlib.replace-bytes-read](https://docs.openrewrite.org/recipes/node/migrate/zlib/replace-bytes-read): Replace deprecated `bytesRead` property on zlib streams with `bytesWritten`. 
* [org.openrewrite.node.security.remove-redundant-overrides](https://docs.openrewrite.org/recipes/node/security/remove-redundant-overrides): Removes overrides/resolutions from package.json that are redundant because the dependency tree already resolves to the overridden version or higher. 
* [org.openrewrite.openapi.swagger.ConvertApiResponseHeadersToHeaders](https://docs.openrewrite.org/recipes/openapi/swagger/convertapiresponseheaderstoheaders): Add `headers = @Header(name = ...)` to `@ApiResponse`. 
* [org.openrewrite.prethink.ExportContext](https://docs.openrewrite.org/recipes/prethink/exportcontext): Export DataTables to CSV files in `.moderne/context/` along with a markdown description file. The markdown file describes the context and includes schema information for each data table. 
* [org.openrewrite.prethink.UpdateAgentConfig](https://docs.openrewrite.org/recipes/prethink/updateagentconfig): Update coding agent configuration files (CLAUDE.md, .cursorrules, etc.) to include references to Moderne Prethink context files in .moderne/context/. 
* [org.openrewrite.prethink.UpdateGitignore](https://docs.openrewrite.org/recipes/prethink/updategitignore): Updates .gitignore to allow committing the `.moderne/context/` directory while ignoring other files in `.moderne/`. Transforms `.moderne/` into `.moderne/*` with an exception for `!.moderne/context/`. 
* [org.openrewrite.prethink.UpdatePrethinkContext](https://docs.openrewrite.org/recipes/prethink/updateprethinkcontext): Generate FINOS CALM architecture diagram and update agent configuration files. This recipe expects CALM-related data tables (ServiceEndpoints, DatabaseConnections, ExternalServiceCalls, MessagingConnections, etc.) to be populated by other recipes in a composite. 
* [org.openrewrite.prethink.calm.GenerateCalmArchitecture](https://docs.openrewrite.org/recipes/prethink/calm/generatecalmarchitecture): Generate a FINOS CALM (Common Architecture Language Model) JSON file from discovered service endpoints, database connections, external service calls, and messaging connections. 
* [org.openrewrite.yaml.AddCommentToProperty](https://docs.openrewrite.org/recipes/yaml/addcommenttoproperty): Add a comment to a YAML property. The comment will be added on the line before the property. 

## Removed Recipes

* **io.moderne.hibernate.MigrateToHibernate66**: This recipe will apply changes commonly needed when migrating to Hibernate 6.6.x. 
* **io.moderne.hibernate.MigrateToHibernate70**: This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x. 
* **io.moderne.hibernate.MigrateToHibernate71**: This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x. 
* **io.moderne.hibernate.MigrateToHibernate72**: This recipe will apply changes commonly needed when migrating to Hibernate 7.2.x. 
* **io.moderne.hibernate.search.FindJPQLDefinitions**: Find Java Persistence Query Language definitions in the codebase. 
* **io.moderne.hibernate.update66.FixConflictingClassTypeAnnotations**: Since Hibernate 6.6 a mapped class can have *either* `@MappedSuperclass` or `@Embeddable`, or `@Entity`. This recipe removes `@Entity` from classes annotated with `@MappedSuperclass` or `@Embeddable`. For the moment die combination of `@MappedSuperclass` or `@Embeddable` is advised to migrate to [Single Table Inheritance](https://docs.jboss.org/hibernate/orm/6.6/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance-single-table) but still accepted and therefore stays. 
* **io.moderne.hibernate.update66.MigrateCascadeTypes**: Moving away from deprecated Hibernate CascadeType constants. CascadeType.SAVE_UPDATE -> CascadeType.PERSIST and/or CascadeType.MERGE, CascadeType.DELETE -> CascadeType.REMOVE. 
* **io.moderne.hibernate.update66.RemoveTableFromInheritedEntity**: For Single Table Inherited Entities Hibernate ignores the `@Table` annotation on child entities. From Version 6.6 it is considered an error. 
* **io.moderne.hibernate.update70.AddCascadePersistToIdMappedAssociations**: Hibernate used to automatically enable cascade=PERSIST for association fields annotated @Id or @MapsId. This was undocumented and unexpected behavior, and no longer supported in Hibernate 7. Existing code which relies on this behavior will be modified by addition of explicit cascade=PERSIST to the association fields. 
* **io.moderne.hibernate.update70.CompositeUserTypeSessionFactoryImplementor**: Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations. 
* **io.moderne.hibernate.update70.MigrateConfigurableToGeneratorCreationContext**: In Hibernate 7.0, `Configurable.configure()` now takes a `GeneratorCreationContext` parameter instead of `ServiceRegistry`. This recipe migrates method signatures and call sites. 
* **io.moderne.hibernate.update70.MigrateIntegratorMethod**: Migrate Hibernate `Integrator#integrate` method from deprecated signature to Hibernate 7 compatible signature. Changes `integrate(Metadata, SessionFactoryImplementor, SessionFactoryServiceRegistry)` to `integrate(Metadata, BootstrapContext, SessionFactoryImplementor)`. 
* **io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode**: In Hibernate 7.0, various JDBC types were moved to internal packages. Use @JdbcTypeCode with SqlTypes constants instead of @JdbcType with specific classes. 
* **io.moderne.hibernate.update70.MigrateLockOptionsToDirectParameters**: Migrates deprecated `LockOptions` usage to direct parameters in method calls. As of JPA 3.2 and Hibernate 7, `LockMode`, `Timeout`, and `PessimisticLockScope` are passed directly to `find()`, `refresh()`, and `lock()` methods instead of being wrapped in a `LockOptions` object. 
* **io.moderne.hibernate.update70.MigrateMetamodelImplementor**: In Hibernate 7.0, `MetamodelImplementor` has been split into `MappingMetamodel` for ORM-specific operations and `JpaMetamodel` for JPA-standard operations. This recipe migrates the usage based on which methods are called. 
* **io.moderne.hibernate.update70.MigrateNaturalIdLoadAccess**: Migrates NaturalIdLoadAccess#using(Object...) to using(Map.of(...)) variants for Hibernate 7.0. 
* **io.moderne.hibernate.update70.MigrateNaturalIdMultiLoadAccess**: Migrates NaturalIdMultiLoadAccess#compoundValue(Object...) to Map.of(...) variants for Hibernate 7.0. 
* **io.moderne.hibernate.update70.MigrateSessionInterface**: Migrates code using deprecated Session interface methods to their Hibernate 7.0 replacements. 
* **io.moderne.hibernate.update70.MigrateSessionToDeferToJPA**: Migrates code using deprecated Session load/get/refresh/save/update/delete methods to their Hibernate 7.0 replacements. 
* **io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode**: In Hibernate 7.0, `CommonQueryContract.setFlushMode(FlushModeType)` has been replaced with `setQueryFlushMode(QueryFlushMode)`. This recipe migrates the method call and converts `FlushModeType` parameters to their `QueryFlushMode` equivalents. 
* **io.moderne.hibernate.update70.MigrateToHibernate7JFR**: Migrates deprecated JFR integration APIs to their Hibernate 7 replacements. `EventManager` becomes `EventMonitor` and `HibernateMonitoringEvent` becomes `DiagnosticEvent`. 
* **io.moderne.hibernate.update70.MigrateToTargetEmbeddable**: Migrates code using removed @Target to to Hibernate 7.0's @TargetEmbeddable equivalent. Removes misused @Target annotations. 
* **io.moderne.hibernate.update70.RemoveUnnecessaryCastToSession**: In Hibernate 7.0, `SessionFactory.createEntityManager()` explicitly returns Session, making casts to Session unnecessary. 
* **io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations**: Tries to replaces annotations that have been removed in Hibernate 7.0 with its Jakarta equivalent, such as Table, @Where, @OrderBy, etc.
If a annotation is used with arguments that do not have a direct replacement, the annotation is not replaced at all. 
* **io.moderne.hibernate.update70.ReplaceSessionLockRequest**: Migrates Session.buildLockRequest(LockOptions.X) calls to use session.lock(entity, new LockOptions(LockMode.X)) in Hibernate 7.0. 
* **io.moderne.hibernate.update70.UnboxingTransactionTimeout**: JPA 3.2 adds `#getTimeout` but uses `Integer` whereas Hibernate has historically used `int`. Note that this raises the possibility of a `NullPointerException` during migration if, e.g., performing direct comparisons on the timeout value against an in (auto unboxing). This recipe adds ternary operators where `Transaction#getTimeout()` is used and a negative value will be used if the `getTimeout()` resulted in a null value. 
* **io.moderne.hibernate.update70.UserTypeNullSafeGetSharedSessionContractImplementorRecipe**: Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations. 
* **io.moderne.hibernate.update70.UserTypeSharedSessionContractImplementor**: Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations. 
* **io.moderne.java.jsf.MigrateToJsf_2_3**: Complete migration to JSF 2.3, including associated technologies like RichFaces. Updates dependencies, transforms XHTML views, and migrates Java APIs. 
* **io.moderne.java.jsf.richfaces.ConvertExtendedDataTableHeightToStyle**: Converts height and width attributes to inline style attribute for RichFaces `extendedDataTable` components. 
* **io.moderne.java.jsf.richfaces.MigrateRichFaces_4_5**: Complete RichFaces 3.x to 4.5 migration including tag renames, attribute migrations, and Java API updates. 
* **io.moderne.java.jsf.richfaces.update45.UpdateXHTMLTags**: Migrate RichFaces tags in `xhtml` files to RichFaces 4. 
* **io.moderne.java.spring.boot.AddSpringBootApplication**: Adds a `@SpringBootApplication` class containing a main method to bootify your Spring Framework application. 
* **io.moderne.java.spring.boot.FieldToConstructorInjection**: Converts `@Autowired` field injection to constructor injection pattern. For non-final classes, adds both a no-args constructor and the autowired constructor to maintain compatibility with extending classes. Moves `@Qualifier` annotations to constructor parameters. 
* **io.moderne.java.spring.boot.IsLikelyNotSpringBoot**: Marks the project if it's likely not a Spring Boot project. 
* **io.moderne.java.spring.boot.IsLikelySpringBoot**: Marks the project if it's likely a Spring Boot project. 
* **io.moderne.java.spring.boot.MigrateSpringFrameworkDependenciesToSpringBoot**: Migrate Spring Framework dependencies to Spring Boot. 
* **io.moderne.java.spring.boot.SpringToSpringBoot**: Migrate non Spring Boot applications to the latest compatible Spring Boot release. This recipe will modify an application's build files introducing Maven dependency management for Spring Boot, or adding the Gradle Spring Boot build plugin. 
* **io.moderne.java.spring.boot2.UpgradeSpringBoot_2_0**: Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0. 
* **io.moderne.java.spring.boot3.AddValidToConfigurationPropertiesFields**: In Spring Boot 3.4, validation of `@ConfigurationProperties` classes annotated with `@Validated` now follows the Bean Validation specification, only cascading to nested properties if the corresponding field is annotated with `@Valid`. The recipe will add a `@Valid` annotation to each field which has a type that has a field which is annotated with a `jakarta.validation.constraints.*` annotation. 
* **io.moderne.java.spring.boot3.CommentDeprecations**: Spring Boot 3.4 deprecates methods that are not commonly used or need manual interaction. 
* **io.moderne.java.spring.boot3.CommentOnMockAndSpyBeansInConfigSpring34**: As stated in [Spring Docs](https://docs.spring.io/spring-framework/reference/testing/annotations/integration-spring/annotation-mockitobean.html) `@MockitoSpyBean` and `@MockitoBean` will only work in tests, explicitly not in `@Configuration` annotated classes. 
* **io.moderne.java.spring.boot3.ConditionalOnAvailableEndpointMigrationSpring34**: Migrate `@ConditionalOnAvailableEndpoint(EndpointExposure.CLOUD_FOUNDRY)` to `@ConditionalOnAvailableEndpoint(EndpointExposure.WEB)` for Spring Boot 3.4. 
* **io.moderne.java.spring.boot3.MigrateAbstractDiscoveredEndpointConstructor**: The boolean-parameter constructor of `AbstractDiscoveredEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter. 
* **io.moderne.java.spring.boot3.MigrateAbstractExposableEndpointConstructor**: The boolean-parameter constructor of `AbstractExposableEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter instead of boolean `enableByDefault`. 
* **io.moderne.java.spring.boot3.MigrateEndpointAnnotationAccessValueSpring34**: Since Spring Boot 3.4 the `@Endpoint` access configuration values are no longer `true|false` but `none|read-only|unrestricted`. 
* **io.moderne.java.spring.boot3.MigrateEndpointDiscovererConstructor**: The 4-parameter constructor of `EndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter. 
* **io.moderne.java.spring.boot3.MigrateEntityManagerFactoryBuilderConstructor**: The constructors of `EntityManagerFactoryBuilder` have been deprecated in Spring Boot 3.4. This recipe transforms them to use the new constructor with a Function parameter for property mapping. 
* **io.moderne.java.spring.boot3.MigrateJmxEndpointDiscovererConstructor**: The 4-parameter constructor of `JmxEndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter. 
* **io.moderne.java.spring.boot3.MigrateWebEndpointDiscovererConstructor**: The 6-parameter constructor of `WebEndpointDiscoverer` has been deprecated in Spring Boot 3.3. This recipe adds two new parameters (`AdditionalPathsMapper` and `OperationFilter<WebOperation>`) to the constructor and updates the Bean method signature to inject them as `ObjectProvider` types. 
* **io.moderne.java.spring.boot3.RemoveDeprecatedConditions**: Replace Spring Boot 3.5 deprecated condition classes with their corresponding conditional annotations. 
* **io.moderne.java.spring.boot3.RemoveReplaceNoneFromAutoConfigureTestDatabase**: `Replace.NONE` is the default value for `@AutoConfigureTestDatabase` since Spring Boot 3.4. 
* **io.moderne.java.spring.boot3.RemoveTestRestTemplateEnableRedirectsOptionRecipe**: The `TestRestTemplate` now uses the same follow redirects settings as the regular RestTemplate. The `HttpOption.ENABLE_REDIRECTS` option has also been deprecated. This recipe removes the option from the `TestRestTemplate` constructor arguments. 
* **io.moderne.java.spring.boot3.ReplaceConditionalOutcomeInverse**: Replace deprecated `ConditionOutcome.inverse(ConditionOutcome outcome)` calls with `new ConditionOutcome(!outcome.isMatch(), outcome.getConditionMessage())`. 
* **io.moderne.java.spring.boot3.ReplaceDeprecatedKafkaConnectionDetailsBootstrapServerGetters**: Replace deprecated `KafkaConnectionDetails` bootstrap server methods with chained calls. For example, `getProducerBootstrapServers()` becomes `getProducer().getBootstrapServers()`. 
* **io.moderne.java.spring.boot3.ReplaceDeprecatedThreadPoolTaskSchedulerConstructor**: The 5-parameter constructor of `ThreadPoolTaskSchedulerBuilder` has been deprecated in Spring Boot 3.5. This recipe transforms it to use the builder pattern instead, omitting null values and defaults. 
* **io.moderne.java.spring.boot3.ReplaceKafkaTransactionManagerSetter**: Replace deprecated `ContainerProperties#setTransactionManager(org.springframework.transaction.PlatformTransactionManager)` method with `ContainerProperties#setKafkaAwareTransactionManager(org.springframework.kafka.transaction.KafkaAwareTransactionManager)`. The method will be replaced only if its argument has the type `KafkaAwareTransactionManager`. 
* **io.moderne.java.spring.boot3.ReplaceTaskExecutorNameByApplicationTaskExecutorName**: Spring Boot 3.5 removed the bean name `taskExecutor`. Where this bean name is used, the recipe replaces the bean name to `applicationTaskExecutor`. This also includes instances where the developer provided their own bean named `taskExecutor`. This also includes scenarios where JSR-250's `@Resource` annotation is used. 
* **io.moderne.java.spring.boot3.ResolveDeprecationsSpringBoot_3_3**: Migrates Deprecations in the Spring Boot 3.3 Release. Contains the removal of `DefaultJmsListenerContainerFactoryConfigurer.setObservationRegistry` and adds new parameter of `WebEndpointDiscoverer` constructor. 
* **io.moderne.java.spring.boot3.ResolveTaskExecutorFromContext**: Use bean name `applicationTaskExecutor` instead of `taskExecutor` when resolving `TaskExecutor` Bean from application context. 
* **io.moderne.java.spring.boot3.SpringBoot34Deprecations**: Migrate deprecated classes and methods that have been marked for removal in Spring Boot 4.0. This includes constructor changes for `EntityManagerFactoryBuilder`, `HikariCheckpointRestoreLifecycle`, and various actuator endpoint discovery classes. 
* **io.moderne.java.spring.boot3.SpringBoot35Deprecations**: Migrate deprecated classes and methods that have been marked for removal in Spring Boot 3.5. 
* **io.moderne.java.spring.boot3.SpringBoot3BestPractices**: Applies best practices to Spring Boot 3.5+ applications. 
* **io.moderne.java.spring.boot3.SpringBootProperties_3_4**: Migrate the settings for Spring Boot Management Endpoint Security from `true`|`false` to `read-only`|`none`. 
* **io.moderne.java.spring.boot3.UpdateOpenTelemetryResourceAttributes**: The `service.group` resource attribute has been deprecated for OpenTelemetry in Spring Boot 3.5. Consider using alternative attributes or remove the deprecated attribute. 
* **io.moderne.java.spring.boot3.UpgradeGradle7Spring34**: Spring Boot 3.4 requires Gradle 7.6.4. 
* **io.moderne.java.spring.boot3.UpgradeGradle8Spring34**: Spring Boot 3.4 requires Gradle 8.4+. 
* **io.moderne.java.spring.boot3.UpgradeMyBatisToSpringBoot_3_4**: Upgrade MyBatis Spring modules to a version corresponding to Spring Boot 3.4. 
* **io.moderne.java.spring.boot3.UpgradeSpringBoot_3_4**: Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.4. 
* **io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5**: Migrate applications to the latest Spring Boot 3.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.5. 
* **io.moderne.java.spring.boot3.UpgradeSpringCloudAWSToSpringBoot_3_4**: Upgrade the Spring Cloud AWS dependency to a version compatible with Spring Boot 3.4. 
* **io.moderne.java.spring.boot3.UpgradeSpringKafka_3_3**: Migrate applications to the latest Spring Kafka 3.3 release. 
* **io.moderne.java.spring.boot4.AddAutoConfigureMockMvc**: Adds `@AutoConfigureMockMvc` annotation to classes annotated with `@SpringBootTest` that use `MockMvc`. 
* **io.moderne.java.spring.boot4.AddJackson2ForJerseyJson**: Check whether a module uses Jersey on combination with JSON and adds the needed `spring-boot-jackson` dependency and conditionally `spring-boot-jackson2` dependency. 
* **io.moderne.java.spring.boot4.AddModularStarters**: Add Spring Boot 4.0 starter dependencies based on package usage.
Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology. 
* **io.moderne.java.spring.boot4.AddMongoDbRepresentationProperties**: Adds the 'spring.mongodb.representation.uuid' property with value 'standard' and the 'spring.data.mongodb.representation.big-decimal' property with the value 'decimal128' to Spring configuration files when a MongoDB dependency is detected. 
* **io.moderne.java.spring.boot4.AdoptJackson3**: Adopt Jackson 3 which is supported by Spring Boot 4 and Jackson 2 support is deprecated. 
* **io.moderne.java.spring.boot4.MigrateSpringRetry**: Handle spring-retry not longer managed by Spring Boot and the possible migration to Spring Core Resilience. 
* **io.moderne.java.spring.boot4.MigrateSpringRetryToSpringFramework7**: Migrate `spring-retry`s `@Retryable` and `@Backoff` annotation to Spring Framework 7 Resilience annotations. 
* **io.moderne.java.spring.boot4.MigrateToModularStarters**: Remove monolithic starters and adds the necessary Spring Boot 4.0 starter dependencies based on package usage, where any spring-boot-starter was used previously. 
* **io.moderne.java.spring.boot4.ModuleStarterRelocations**: Relocate types and packages for Spring Boot 4.0 modular starters. 
* **io.moderne.java.spring.boot4.RemoveGradleUberJarLoaderImplementationConfig**: Removes the Spring Boot Uber-Jar `loaderImplementation` configuration from Gradle build files. 
* **io.moderne.java.spring.boot4.ReplaceDeprecatedAutoconfigureMongoApi**: Replace deprecated `org.springframework.boot.autoconfigure.mongo` API. 
* **io.moderne.java.spring.boot4.ReplaceDeprecatedDockerApi**: Replaces deprecated `DockerApi` constructors and configuration methods with their modern equivalents. 
* **io.moderne.java.spring.boot4.ReplaceDeprecatedRequestMatcherProvider**: Replaces the deprecated `org.springframework.boot.autoconfigure.security.servlet.RequestMatcherProvider` with `org.springframework.boot.security.autoconfigure.actuate.web.servlet.RequestMatcherProvider`. The new interface adds an `HttpMethod` parameter to the `getRequestMatcher` method. 
* **io.moderne.java.spring.boot4.ReplaceDeprecatedThreadPoolTaskSchedulerBuilderApi**: Replaces the deprecated 5-argument constructor of `ThreadPoolTaskSchedulerBuilder` with the builder pattern. 
* **io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0**: Migrate applications to the latest Spring Boot 4.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.0. 
* **io.moderne.java.spring.cloud2020.SpringCloudProperties_2020**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2021.SpringCloudProperties_2021**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2022.SpringCloudProperties_2022**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2023.SpringCloudProperties_2023**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2024.SpringCloudProperties_2024**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2025.SpringCloudProperties_2025**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud20251.SpringCloudProperties_2025_1**: Migrate properties found in `application.properties` and `application.yml` for Spring Cloud 2025.1 (Oakwood). This includes the stubrunner property prefix migration from `stubrunner.` to `spring.cloud.contract.stubrunner.`. 
* **io.moderne.java.spring.cloud20251.UpgradeSpringCloud_2025_1**: Upgrade to Spring Cloud 2025.1 (Oakwood). This release is based on Spring Framework 7 and Spring Boot 4. Each Spring Cloud project has been updated to version 5.0.0. 
* **io.moderne.java.spring.framework.IsLikelySpringFramework**: Marks the project if it's likely a Spring Framework project. 
* **io.moderne.java.spring.framework.JaxRsToSpringWeb**: Converts JAX-RS annotations such as `@Path`, `@GET`, `@POST`, etc., to their Spring Web equivalents like `@RestController`, `@RequestMapping`, `@GetMapping`, etc. 
* **io.moderne.java.spring.framework.MigrateDefaultResponseErrorHandler**: Migrates overridden `handleError(ClientHttpResponse response)` methods to the new signature `handleError(URI url, HttpMethod method, ClientHttpResponse response)` in classes extending `DefaultResponseErrorHandler`. The old single-argument method was removed in Spring Framework 7.0. 
* **io.moderne.java.spring.framework.MigrateDeprecatedBeanXmlProperties**: Migrate Bean XML properties that were deprecated in Spring Framework 3.0. 
* **io.moderne.java.spring.framework.ModularSpringFrameworkDependencies**: Adds Spring Framework modular dependencies based on package usage, replacing legacy monolithic `org.springframework:spring`. 
* **io.moderne.java.spring.framework.NullableSpringWebParameters**: In Spring Boot 4, JSpecify's `@Nullable` annotation should be used to indicate that a parameter can be null. This recipe adds `@Nullable` to parameters annotated with `@PathVariable(required = false)` or `@RequestParam(required = false)` and removes the now-redundant `required = false` attribute. 
* **io.moderne.java.spring.framework.UpgradeSpringFramework_3_0**: Migrate applications to the latest Spring Framework 3 release, pulling in additional proprietary Moderne recipes. 
* **io.moderne.java.spring.framework.UpgradeSpringFramework_5_3**: Migrate applications to the latest Spring Framework 5.3 release, pulling in additional proprietary Moderne recipes. 
* **io.moderne.java.spring.framework.beansxml.BeansXmlToConfiguration**: Converts Java/Jakarta EE `beans.xml` configuration files to Spring Framework `@Configuration` classes. 
* **io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer**: Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests. It creates a `WebXmlWebAppInitializer` class in `src/main/java` with respect to submodules if they contain java files. **If it finds an existing `WebXmlWebAppInitializer`, it skips the creation**. 
* **io.moderne.java.spring.hibernate.MigrateDaoSupportGetSession**: Migrate `HibernateDaoSupport#getSession()` usage to `HibernateDaoSupport#getSessionFactory()#getCurrentSession()` and annotate the methods with `@Transactional`. 
* **io.moderne.java.spring.hibernate.MigrateSaveOrUpdateAll**: Migrate removed `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdateAll` to an iterative `HibernateDaoSupport#getHibernateTemplate#.saveOrUpdate`. 
* **io.moderne.java.spring.orm.SpringORM5**: Migrate applications using Spring ORM Hibernate Support to Hibernate 5 compatible version. This will enable a further migration by the Spring Framework migration past 5. 
* **io.moderne.java.spring.security6.MigrateAntPathRequestMatcher**: In Spring Security 6.5, `AntPathRequestMatcher` is deprecated in favor of `PathPatternRequestMatcher`. This recipe migrates static method calls and constructor usage to the new pattern. 
* **io.moderne.java.spring.security6.UpgradeSpringSecurity_6_5**: Migrate applications to the latest Spring Security 6.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* **io.moderne.java.spring.security7.MigrateOAuth2AccessTokenResponseClient**: A new set of `OAuth2AccessTokenResponseClient` implementations were introduced based on `RestClient`. This recipe replaces the `RestOperations`-based implementations which have been deprecated. The `RestClient` implementations are drop-in replacements for the deprecated implementations. 
* **io.moderne.java.spring.security7.ModularizeSpringSecurity7**: Spring Security Core was modularized in version 7, deprecated classes that are still a crucial part of some applications are moved to `spring-security-access`. 
* **org.openrewrite.docker.search.FindDockerImageUses**: Produce an impact analysis of base images used in Dockerfiles, .gitlab-ci files, Kubernetes Deployment file, etc. 

## Changed Recipes

* [org.openrewrite.java.OrderImports](https://docs.openrewrite.org/recipes/java/orderimports) was changed:
  * Old Options:
    * `removeUnused: { type: Boolean, required: false }`
  * New Options:
    * `removeUnused: { type: Boolean, required: false }`
    * `style: { type: String, required: false }`
* [org.openrewrite.javascript.change-import](https://docs.openrewrite.org/recipes/javascript/change-import) was changed:
  * Old Options:
    * `newAlias: { type: String, required: false }`
    * `newMember: { type: String, required: false }`
    * `newModule: { type: String, required: true }`
    * `oldMember: { type: String, required: true }`
    * `oldModule: { type: String, required: true }`
  * New Options:
    * `None`
* [org.openrewrite.javascript.dependencies.add-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/add-dependency) was changed:
  * Old Options:
    * `packageName: { type: String, required: true }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: true }`
  * New Options:
    * `None`
* [org.openrewrite.javascript.dependencies.find-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/find-dependency) was changed:
  * Old Options:
    * `onlyDirect: { type: String, required: false }`
    * `packageName: { type: String, required: true }`
    * `version: { type: String, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.javascript.dependencies.upgrade-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-dependency-version) was changed:
  * Old Options:
    * `newVersion: { type: String, required: true }`
    * `packageName: { type: String, required: true }`
  * New Options:
    * `None`
* [org.openrewrite.javascript.dependencies.upgrade-transitive-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-transitive-dependency-version) was changed:
  * Old Options:
    * `dependencyPath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `packageName: { type: String, required: true }`
  * New Options:
    * `None`
* [org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences](https://docs.openrewrite.org/recipes/javascript/migrate/es6/modernize-octal-escape-sequences) was changed:
  * Old Options:
    * `useUnicodeEscapes: { type: String, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.json.AddKeyValue](https://docs.openrewrite.org/recipes/json/addkeyvalue) was changed:
  * Old Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: boolean, required: false }`
    * `value: { type: String, required: true }`
  * New Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: Boolean, required: false }`
    * `value: { type: String, required: true }`
* [org.openrewrite.java.migrate.lang.UseTextBlocks](https://docs.openrewrite.org/recipes/java/migrate/lang/usetextblocks) was changed:
  * Old Options:
    * `convertStringsWithoutNewlines: { type: boolean, required: false }`
  * New Options:
    * `avoidLineContinuations: { type: boolean, required: false }`
    * `convertStringsWithoutNewlines: { type: boolean, required: false }`
* [org.openrewrite.yaml.CopyValue](https://docs.openrewrite.org/recipes/yaml/copyvalue) was changed:
  * Old Options:
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `createNewKeys: { type: Boolean, required: false }`
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
