# 8.20.0 release (2024-03-13)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts
* rewrite-apache
* rewrite-nodejs
* rewrite-struts

## New Recipes

* [org.openrewrite.apache.commons.codec.ApacheBase64ToJavaBase64](../recipes/apache/commons/codec/apachebase64tojavabase64): Prefer the Java standard library's `java.util.Base64` over third-party usage of apache's `apache.commons.codec.binary.Base64`. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes](../recipes/apache/commons/io/apachecommonsfileutilsrecipes): Refaster template recipes for `org.openrewrite.apache.commons.io.ApacheCommonsFileUtils`. 
* org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$GetFileRecipe: Replace Apache Commons `FileUtils.getFile(String... name)` with JDK provided API. 
* org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteStringToFileRecipe: Replace Apache Commons `FileUtils.writeStringToFile(File file, String data)` with JDK provided API. 
* [org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles](../recipes/apache/commons/io/apachefileutilstojavafiles): Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`. 
* [org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset](../recipes/apache/commons/io/apacheioutilsuseexplicitcharset): Use `IOUtils` method invocations that include the charset encoding instead of using the deprecated versions that do not include a charset encoding. (e.g. converts `IOUtils.readLines(inputStream)` to `IOUtils.readLines(inputStream, StandardCharsets.UTF_8)`. 
* [org.openrewrite.apache.commons.io.RelocateApacheCommonsIo](../recipes/apache/commons/io/relocateapachecommonsio): The deployment of `org.apache.commons:commons-io` [was a publishing mistake around 2012](https://issues.sonatype.org/browse/MVNCENTRAL-244) which was corrected by changing the deployment GAV to be located under `commons-io:commons-io`. 
* [org.openrewrite.apache.commons.io.UseStandardCharsets](../recipes/apache/commons/io/usestandardcharsets): Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`. 
* [org.openrewrite.apache.commons.io.UseSystemLineSeparator](../recipes/apache/commons/io/usesystemlineseparator): Prefer the Java standard library's `System.lineSeparator()` over third-party usage of apache's `IOUtils.LINE_SEPARATOR`. 
* [org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes](../recipes/apache/commons/lang/apachecommonsstringutilsrecipes): Refaster template recipes for `org.openrewrite.apache.commons.lang.ApacheCommonsStringUtils`. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe: Replace Apache Commons `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe: Replace Apache Commons `StringUtils.capitalize(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Apache Commons `StringUtils.defaultString(String str, String nullDefault)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe: Replace Apache Commons `StringUtils.defaultString(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Apache Commons `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Apache Commons `StringUtils.equalsIgnoreCase(CharSequence cs1, CharSequence cs2)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe: Replace Apache Commons `StringUtils.equals(CharSequence cs1, CharSequence cs2)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe: Replace Apache Commons `StringUtils.lowerCase(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe: Replace Apache Commons `StringUtils.removeEnd(String str, String remove)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe: Replace Apache Commons `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe: Replace Apache Commons `StringUtils.reverse(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe: Replace Apache Commons `StringUtils.split(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe: Replace Apache Commons `StringUtils.strip(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe: Replace Apache Commons `StringUtils.trim(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe: Replace Apache Commons `StringUtils.trimToEmpty(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe: Replace Apache Commons `StringUtils.trimToNull(String str)` with JDK provided API. 
* org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe: Replace Apache Commons `StringUtils.upperCase(String str)` with JDK internals. 
* [org.openrewrite.apache.commons.lang.IsNotEmptyToJdk](../recipes/apache/commons/lang/isnotemptytojdk): Replace any `StringUtils#isEmpty(String)` and `#isNotEmpty(String)` with `s == null || s.isEmpty()` and `s != null && !s.isEmpty()`. 
* [org.openrewrite.apache.httpclient4.MappingDeprecatedClasses](../recipes/apache/httpclient4/mappingdeprecatedclasses): Uses new classes/methods instead of the deprecated ones 
* [org.openrewrite.apache.httpclient4.MigrateDefaultHttpClient](../recipes/apache/httpclient4/migratedefaulthttpclient): Since `DefaultHttpClient` is deprecated, we need to change it to the `CloseableHttpClient`. It only covers the default scenario with no custom `HttpParams` or `ConnectionManager`. Of note: the `DefaultHttpClient` [does not support TLS 1.2](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT). References: - [Find Sec Bugs](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT) - [IBM Support Pages](https://www.ibm.com/support/pages/im-using-apache-httpclient-make-outbound-call-my-web-application-running-websphere-application-server-traditional-and-im-getting-ssl-handshake-error-how-can-i-debug) 
* [org.openrewrite.apache.httpclient4.UpgradeApacheHttpClient_4_5](../recipes/apache/httpclient4/upgradeapachehttpclient_4_5): Migrate applications to the latest Apache HttpClient 4.5.x release. This recipe modifies  application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions. 
* [org.openrewrite.apache.httpclient5.AddTimeUnitArgument](../recipes/apache/httpclient5/addtimeunitargument): In Apache Http Client 5.x migration, an extra TimeUnit argument is required in the timeout and duration methods. Previously in 4.x, all these methods were implicitly having the timeout or duration expressed in milliseconds, but in 5.x the unit of the timeout or duration is required. So, by default this recipe adds `TimeUnit.MILLISECONDS`, it is possible to specify this as a parameter. Since all affected methods of the Apache Http Client 5.x migration only have one integer/long argument, the recipe applies with matched method invocations of exactly one parameter. 
* [org.openrewrite.apache.httpclient5.NewStatusLine](../recipes/apache/httpclient5/newstatusline): `HttpResponse::getStatusLine()` was deprecated in 4.x, so we replace it for `new StatusLine(HttpResponse)`. Ideally we will try to simplify method chains for `getStatusCode`, `getProtocolVersion` and `getReasonPhrase`, but there are some scenarios where the `StatusLine` object is assigned or used directly, and we need to instantiate the object. 
* [org.openrewrite.apache.httpclient5.StatusLine](../recipes/apache/httpclient5/statusline): Migrates deprecated methods to their equivalent ones in 5.x 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5](../recipes/apache/httpclient5/upgradeapachehttpclient_5): Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping](../recipes/apache/httpclient5/upgradeapachehttpclient_5_classmapping): Mapping of all the compatible classes of ApacheHttpClient 5.x from 4.x. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods](../recipes/apache/httpclient5/upgradeapachehttpclient_5_deprecatedmethods): Migrates deprecated methods to their equivalent ones in 5.x 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit](../recipes/apache/httpclient5/upgradeapachehttpclient_5_timeunit): Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit. 
* [org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes](../recipes/apache/maven/shared/mavensharedstringutilsrecipes): Refaster template recipes for `org.openrewrite.apache.maven.shared.MavenSharedStringUtils`. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$AbbreviateRecipe: Replace Maven Shared `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$CapitaliseRecipe: Replace Maven Shared `StringUtils.capitalise(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Maven Shared `StringUtils.defaultString(Object obj, String nullDefault)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringRecipe: Replace Maven Shared `StringUtils.defaultString(Object obj)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Maven Shared `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Maven Shared `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$EqualsRecipe: Replace Maven Shared `StringUtils.equals(String str1, String str2)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$LowercaseRecipe: Replace Maven Shared `StringUtils.lowerCase(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$ReplaceRecipe: Replace Maven Shared `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$ReverseRecipe: Replace Maven Shared `StringUtils.reverse(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$SplitRecipe: Replace Maven Shared `StringUtils.split(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$StripRecipe: Replace Maven Shared `StringUtils.strip(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$TrimRecipe: Replace Maven Shared `StringUtils.trim(String str)` with JDK provided API. 
* org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$UppercaseRecipe: Replace Maven Shared `StringUtils.upperCase(String str)` with JDK provided API. 
* [org.openrewrite.codehaus.plexus.PlexusFileUtilsRecipes](../recipes/codehaus/plexus/plexusfileutilsrecipes): Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusFileUtils`. 
* org.openrewrite.codehaus.plexus.PlexusFileUtilsRecipes$DeleteDirectoryFileRecipe: Replace Plexus `FileUtils.deleteDirectory(File directory)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusFileUtilsRecipes$DeleteDirectoryStringRecipe: Replace Plexus `FileUtils.deleteDirectory(String directory)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusFileUtilsRecipes$FileExistsStringRecipe]: Replace Plexus `FileUtils.fileExists(String fileName)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusFileUtilsRecipes$GetFileRecipe: Replace Plexus `FileUtils.getFile(String fileName)` with JDK provided API. 
* [org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes](../recipes/codehaus/plexus/plexusstringutilsrecipes): Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusStringUtils`. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe: Replace Plexus `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe: Replace Plexus `StringUtils.capitalise(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Plexus `StringUtils.defaultString(Object obj, String nullDefault)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe: Replace Plexus `StringUtils.defaultString(Object obj)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Plexus `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Plexus `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsRecipe: Replace Plexus `StringUtils.equals(String str1, String str2)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$LowercaseRecipe: Replace Plexus `StringUtils.lowerCase(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReplaceRecipe: Replace Plexus `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReverseRecipe: Replace Plexus `StringUtils.reverse(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$SplitRecipe: Replace Plexus `StringUtils.split(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$StripRecipe: Replace Plexus `StringUtils.strip(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$TrimRecipe: Replace Plexus `StringUtils.trim(String str)` with JDK provided API. 
* org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$UppercaseRecipe: Replace Plexus `StringUtils.upperCase(String str)` with JDK provided API. 
* [org.openrewrite.gradle.UpgradeTransitiveDependencyVersion](../recipes/gradle/upgradetransitivedependencyversion): Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management. 
* [org.openrewrite.gradle.plugins.ChangePluginVersion](../recipes/gradle/plugins/changepluginversion): Change a Gradle plugin by id to a later version. 
* [org.openrewrite.java.AddLiteralMethodArgument](../recipes/java/addliteralmethodargument): Add a literal `String` or `int` argument to method invocations. 
* [org.openrewrite.java.AddNullMethodArgument](../recipes/java/addnullmethodargument): Add a `null` argument to method invocations. 
* [org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion](../recipes/java/dependencies/search/findminimumdependencyversion): The oldest dependency version in use is the lowest dependency version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Jackson 2.11, but a test source set uses Jackson 2.16. In this case, the oldest Jackson version in use is Java 2.11. 
* [org.openrewrite.java.migrate.jakarta.DeprecatedCDIAPIsRemoved40](../recipes/java/migrate/jakarta/deprecatedcdiapisremoved40): Deprecated APIs have been removed in CDI 4.0. This recipe removes and updates the corresponding deprecated methods. 
* [org.openrewrite.java.search.HasMinimumJavaVersion](../recipes/java/search/hasminimumjavaversion): The oldest Java version in use is the lowest Java version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Java 8, but a test source set uses Java 17. In this case, the oldest Java version in use is Java 8. 
* [org.openrewrite.java.security.spring.InsecureSpringServiceExporter](../recipes/java/security/spring/insecurespringserviceexporter): The default Java deserialization mechanism is available via `ObjectInputStream` class. This mechanism is known to be vulnerable. If an attacker can make an application deserialize malicious data, it may result in arbitrary code execution. Spring’s `RemoteInvocationSerializingExporter` uses the default Java deserialization mechanism to parse data. As a result, all classes that extend it are vulnerable to deserialization attacks. The Spring Framework contains at least `HttpInvokerServiceExporter` and `SimpleHttpInvokerServiceExporter` that extend `RemoteInvocationSerializingExporter`. These exporters parse data from the HTTP body using the unsafe Java deserialization mechanism. See the full [blog post](https://blog.gypsyengineer.com/en/security/detecting-dangerous-spring-exporters-with-codeql.html) by Artem Smotrakov on CVE-2016-1000027 from which the above description is excerpted. 
* [org.openrewrite.java.struts.MigrateStrutsDtd](../recipes/java/struts/migratestrutsdtd): Update Struts DTD to reflect the specified version. 
* [org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces](../recipes/java/struts/migrate6/migrateawareinterfaces): These types have moved to a new package in Struts 6.0. 
* [org.openrewrite.java.struts.migrate6.MigrateStruts6](../recipes/java/struts/migrate6/migratestruts6): Migrate Struts 2.x to Struts 6.0 
* [org.openrewrite.java.struts.migrate6.MigrateStruts6Constants](../recipes/java/struts/migrate6/migratestruts6constants): All Xwork constants had been already deprecated, with this version all of them have been removed and Struts constants have been used instead. 
* [org.openrewrite.java.struts.migrate6.UpgradeStruts6Dependencies](../recipes/java/struts/migrate6/upgradestruts6dependencies): Upgrade Struts 2.x dependencies to Struts 6.0 
* [org.openrewrite.java.struts.search.FindStrutsActions](../recipes/java/struts/search/findstrutsactions): Find actions and their associated definitions. 
* [org.openrewrite.java.struts.search.FindStrutsXml](../recipes/java/struts/search/findstrutsxml): Struts XML files may have any name, and may be outside a resources directory, so the true test is to look at the content of the file. 
* [org.openrewrite.maven.search.FindMavenProject](../recipes/maven/search/findmavenproject): Maven projects are `pom.xml` files with a `MavenResolutionResult` marker. 
* [org.openrewrite.nodejs.UpgradeDependencyVersion](../recipes/nodejs/upgradedependencyversion): Upgrade matching Node.js direct dependencies. 
* [org.openrewrite.nodejs.search.DependencyInsight](../recipes/nodejs/search/dependencyinsight): Identify the direct and transitive Node.js dependencies used in a project. 
* [org.openrewrite.nodejs.search.FindNodeProjects](../recipes/nodejs/search/findnodeprojects): Find Node.js projects and summarize data about them. 
* org.openrewrite.recipes.RecipeNullabilityBestPractices: Use OpenRewrite internal nullability annotations; drop JetBrains annotations; use `package-info.java` instead. 
* [org.openrewrite.sql.ChangeFunctionName](../recipes/sql/changefunctionname): When migrating between dialects, often one name can be substituted for another. For example, Oracle's NVL function can be replaced with Postgres COALESCE. 
* [org.openrewrite.sql.search.FindFunction](../recipes/sql/search/findfunction): Find SQL functions by name. 

## Removed Recipes

* **org.openrewrite.gradle.AddDirectDependencyToUpgradeTransitiveVersion**: Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management. 
* **org.openrewrite.java.apache.httpclient4.MappingDeprecatedClasses**: Uses new classes/methods instead of the deprecated ones 
* **org.openrewrite.java.apache.httpclient4.MigrateDefaultHttpClient**: Since `DefaultHttpClient` is deprecated, we need to change it to the `CloseableHttpClient`. It only covers the default scenario with no custom `HttpParams` or `ConnectionManager`.
* **org.openrewrite.java.apache.httpclient4.UpgradeApacheHttpClient_4_5**: Migrate applications to the latest Apache HttpClient 4.5.x release. This recipe modifies  application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions. 
* **org.openrewrite.java.apache.httpclient5.AddTimeUnitArgument**: In Apache Http Client 5.x migration, an extra TimeUnit argument is required in the timeout and duration methods. Previously in 4.x, all these methods were implicitly having the timeout or duration expressed in milliseconds, but in 5.x the unit of the timeout or duration is required. So, by default this recipe adds `TimeUnit.MILLISECONDS`, it is possible to specify this as a parameter. Since all affected methods of the Apache Http Client 5.x migration only have one integer/long argument, the recipe applies with matched method invocations of exactly one parameter. 
* **org.openrewrite.java.apache.httpclient5.NewStatusLine**: `HttpResponse::getStatusLine()` was deprecated in 4.x, so we replace it for `new StatusLine(HttpResponse)`. Ideally we will try to simplify method chains for `getStatusCode`, `getProtocolVersion` and `getReasonPhrase`, but there are some scenarios where the `StatusLine` object is assigned or used directly, and we need to instantiate the object. 
* **org.openrewrite.java.apache.httpclient5.StatusLine**: Migrates deprecated methods to their equivalent ones in 5.x 
* **org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5**: Migrate applications to the latest Apache HttpClient 5.x release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* **org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_ClassMapping**: Mapping of all the compatible classes of ApacheHttpClient 5.x from 4.x. 
* **org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_DeprecatedMethods**: Migrates deprecated methods to their equivalent ones in 5.x 
* **org.openrewrite.java.apache.httpclient5.UpgradeApacheHttpClient_5_TimeUnit**: Apache HttpClient 5.x Timeout and duration methods need an extra the TimeUnit argument. This recipe uses milliseconds as a default unit. 
* **org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64**: Prefer the Java standard library's `java.util.Base64` over third-party usage of apache's `apache.commons.codec.binary.Base64`. 
* **org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtils`. 
* **org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes$GetFileRecipe**: Replace Apache Commons `FileUtils.getFile(String... name)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteStringToFileRecipe**: Replace Apache Commons `FileUtils.writeStringToFile(File file, String data)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles**: Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`. 
* **org.openrewrite.java.migrate.apache.commons.io.ApacheIOUtilsUseExplicitCharset**: Use `IOUtils` method invocations that include the charset encoding instead of using the deprecated versions that do not include a charset encoding. (e.g. converts `IOUtils.readLines(inputStream)` to `IOUtils.readLines(inputStream, StandardCharsets.UTF_8)`. 
* **org.openrewrite.java.migrate.apache.commons.io.RelocateApacheCommonsIo**: The deployment of `org.apache.commons:commons-io` [was a publishing mistake around 2012](https://issues.sonatype.org/browse/MVNCENTRAL-244) which was corrected by changing the deployment GAV to be located under `commons-io:commons-io`. 
* **org.openrewrite.java.migrate.apache.commons.io.UseStandardCharsets**: Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`. 
* **org.openrewrite.java.migrate.apache.commons.io.UseSystemLineSeparator**: Prefer the Java standard library's `System.lineSeparator()` over third-party usage of apache's `IOUtils.LINE_SEPARATOR`. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe**: Replace Apache Commons `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe**: Replace Apache Commons `StringUtils.capitalize(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe**: Replace Apache Commons `StringUtils.defaultString(String str, String nullDefault)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe**: Replace Apache Commons `StringUtils.defaultString(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe**: Replace Apache Commons `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe**: Replace Apache Commons `StringUtils.equalsIgnoreCase(CharSequence cs1, CharSequence cs2)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe**: Replace Apache Commons `StringUtils.equals(CharSequence cs1, CharSequence cs2)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe**: Replace Apache Commons `StringUtils.lowerCase(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe**: Replace Apache Commons `StringUtils.removeEnd(String str, String remove)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe**: Replace Apache Commons `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe**: Replace Apache Commons `StringUtils.reverse(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe**: Replace Apache Commons `StringUtils.split(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe**: Replace Apache Commons `StringUtils.strip(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe**: Replace Apache Commons `StringUtils.trim(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe**: Replace Apache Commons `StringUtils.trimToEmpty(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe**: Replace Apache Commons `StringUtils.trimToNull(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe**: Replace Apache Commons `StringUtils.upperCase(String str)` with JDK internals. 
* **org.openrewrite.java.migrate.apache.commons.lang.IsNotEmptyToJdk**: Replace any `StringUtils#isEmpty(String)` and `#isNotEmpty(String)` with `s == null || s.isEmpty()` and `s != null && !s.isEmpty()`. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtils`. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$AbbreviateRecipe**: Replace Maven Shared `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$CapitaliseRecipe**: Replace Maven Shared `StringUtils.capitalise(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringFallbackRecipe**: Replace Maven Shared `StringUtils.defaultString(Object obj, String nullDefault)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringRecipe**: Replace Maven Shared `StringUtils.defaultString(Object obj)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DeleteWhitespaceRecipe**: Replace Maven Shared `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$EqualsIgnoreCaseRecipe**: Replace Maven Shared `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$EqualsRecipe**: Replace Maven Shared `StringUtils.equals(String str1, String str2)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$LowercaseRecipe**: Replace Maven Shared `StringUtils.lowerCase(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$ReplaceRecipe**: Replace Maven Shared `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$ReverseRecipe**: Replace Maven Shared `StringUtils.reverse(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$SplitRecipe**: Replace Maven Shared `StringUtils.split(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$StripRecipe**: Replace Maven Shared `StringUtils.strip(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$TrimRecipe**: Replace Maven Shared `StringUtils.trim(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$UppercaseRecipe**: Replace Maven Shared `StringUtils.upperCase(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusFileUtils`. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$DeleteDirectoryFileRecipe**: Replace Plexus `FileUtils.deleteDirectory(File directory)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$DeleteDirectoryStringRecipe**: Replace Plexus `FileUtils.deleteDirectory(String directory)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$FileExistsStringRecipe**: Replace Plexus `FileUtils.fileExists(String fileName)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$GetFileRecipe**: Replace Plexus `FileUtils.getFile(String fileName)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe**: Replace Plexus `StringUtils.abbreviate(String str, int maxWidth)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe**: Replace Plexus `StringUtils.capitalise(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe**: Replace Plexus `StringUtils.defaultString(Object obj, String nullDefault)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe**: Replace Plexus `StringUtils.defaultString(Object obj)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe**: Replace Plexus `StringUtils.deleteWhitespace(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe**: Replace Plexus `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsRecipe**: Replace Plexus `StringUtils.equals(String str1, String str2)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$LowercaseRecipe**: Replace Plexus `StringUtils.lowerCase(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReplaceRecipe**: Replace Plexus `StringUtils.replace(String text, String searchString, String replacement)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReverseRecipe**: Replace Plexus `StringUtils.reverse(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$SplitRecipe**: Replace Plexus `StringUtils.split(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$StripRecipe**: Replace Plexus `StringUtils.strip(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$TrimRecipe**: Replace Plexus `StringUtils.trim(String str)` with JDK provided API. 
* **org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$UppercaseRecipe**: Replace Plexus `StringUtils.upperCase(String str)` with JDK provided API. 
* **org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies**: Upgrade spring-framework 5.x Maven dependencies using a Node Semver advanced range selector. 

## Changed Recipes

* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](../recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `scope: { type: String, required: true }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
* [org.openrewrite.maven.search.FindProperties](../recipes/maven/search/findproperties) was changed:
  * Old Options:
    * `propertyPattern: { type: String, required: true }`
  * New Options:
    * `propertyPattern: { type: String, required: true }`
    * `valuePattern: { type: String, required: false }`