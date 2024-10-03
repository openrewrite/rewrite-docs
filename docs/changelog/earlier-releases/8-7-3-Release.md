# 8.7.3 release (2023-10-10)

## New Recipes

* org.openrewrite.java.migrate.ChangeMethodInvocationReturnType: Changes the return type of a method invocation. 
* org.openrewrite.java.migrate.DeprecatedJavaxSecurityCert: The `javax.security.cert` package has been deprecated for removal. 
* org.openrewrite.java.migrate.DeprecatedLogRecordThreadID: Avoid using the deprecated methods in `java.util.logging.LogRecord` 
* org.openrewrite.java.migrate.IBMSemeru: This recipe will apply changes commonly needed when upgrading Java versions. The solutions provided in this list are solutions only available in IBM Semeru Runtimes. 
* org.openrewrite.java.migrate.InternalBindContextFactory: Do not use the `com.sun.xml.internal.bind.v2.ContextFactory` class. 
* org.openrewrite.java.migrate.JREDoNotUseSunNetSslInternalSslProvider: Do not use the `com.sun.net.ssl.internal.ssl.Provider` class. 
* org.openrewrite.java.migrate.JREDoNotUseSunNetSslInternalWwwProtocol: Do not use the `com.sun.net.ssl.internal.www.protocol` package. 
* org.openrewrite.java.migrate.JREDoNotUseSunNetSslInternalWwwProtocolHttpsHandler: Do not use the `com.sun.net.ssl.internal.www.protocol.https.Handler` class. 
* org.openrewrite.java.migrate.JavaVersion21: Change maven.compiler.source and maven.compiler.target values to 21. 
* org.openrewrite.java.migrate.Jre17AgentMainPreMainPublic: Check for a behavior change in Java agents. 
* org.openrewrite.java.migrate.RemovedLegacySunJSSEProviderName: The `com.sun.net.ssl.internal.ssl.Provider` provider name was removed. 
* org.openrewrite.java.migrate.ReplaceStringLiteralValue: Replace the value of a complete `String` literal. 
* org.openrewrite.java.migrate.UpgradeToJava21: This recipe will apply changes commonly needed when migrating to Java 21. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 21 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 21. 
* org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtils`. 
* org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes$GetFileRecipe: Replace Apache Commons `FileUtils.getFile(String... name)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteStringToFileRecipe: Replace Apache Commons `FileUtils.writeStringToFile(File file, String data)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe: Replace Apache Commons `StringUtils.abbreviate(String str, int maxWidth)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe: Replace Apache Commons `StringUtils.capitalize(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Apache Commons `StringUtils.defaultString(String str, String nullDefault)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe: Replace Apache Commons `StringUtils.defaultString(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Apache Commons `StringUtils.deleteWhitespace(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Apache Commons `StringUtils.equalsIgnoreCase(CharSequence cs1, CharSequence cs2)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe: Replace Apache Commons `StringUtils.equals(CharSequence cs1, CharSequence cs2)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe: Replace Apache Commons `StringUtils.lowerCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe: Replace Apache Commons `StringUtils.removeEnd(String str, String remove)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe: Replace Apache Commons `StringUtils.replace(String text, String searchString, String replacement)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe: Replace Apache Commons `StringUtils.reverse(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe: Replace Apache Commons `StringUtils.split(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe: Replace Apache Commons `StringUtils.strip(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe: Replace Apache Commons `StringUtils.trim(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe: Replace Apache Commons `StringUtils.trimToEmpty(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe: Replace Apache Commons `StringUtils.trimToNull(String str)` with JDK internals. 
* org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe: Replace Apache Commons `StringUtils.upperCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.guava.NoGuavaJava11: Guava filled in important gaps in the Java standard library and still does. But at least some of Guava's API surface area is covered by the Java standard library now, and some projects may be able to remove Guava altogether if they migrate to standard library for these functions. 
* org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsRequireNonNullElse: Prefer `java.util.Objects#requireNonNullElse` instead of using `com.google.common.base.MoreObjects#firstNonNull`. 
* org.openrewrite.java.migrate.jakarta.JakartaEE10: These recipes help with the Migration to Jakarta EE 10, flagging and updating deprecated methods. 
* org.openrewrite.java.migrate.jakarta.RemovedIsParmetersProvidedMethod: Expression Language prior to 5.0 provides the deprecated MethodExpression.isParmetersProvided() method, with the word 'parameter' misspelled in the method name.  This method is unavailable in Jakarta Expression Language 5.0. Use the correctly spelled MethodExpression.isParametersProvided() method instead. 
* org.openrewrite.java.migrate.jakarta.RemovedSOAPElementFactory: XML Web Services prior to 4.0 provides the deprecated SOAPElementFactory class,  which is removed in XML Web Services 4.0. The recommended replacement is to use jakarta.xml.soap.SOAPFactory to create SOAPElements. 
* org.openrewrite.java.migrate.jakarta.WsWsocServerContainerDeprecation: Deprecated `WsWsocServerContainer.doUpgrade(..)` is replaced by the Jakarta WebSocket 2.1 specification `ServerContainer.upgradeHttpToWebSocket(..)`. 
* org.openrewrite.java.migrate.javax.AddJaxwsRuntime$AddJaxwsRuntimeGradle: Update Gradle build files to use the latest JAX-WS runtime from Jakarta EE 8 to maintain compatibility with Java version 11 or greater.  The recipe will add a JAX-WS run-time, in `compileOnly`+`testImplementation` configurations, to any project that has a transitive dependency on the JAX-WS API. **The resulting dependencies still use the `javax` namespace, despite the move to the Jakarta artifact**. 
* org.openrewrite.java.migrate.javax.AddJaxwsRuntime$AddJaxwsRuntimeMaven: Update maven build files to use the latest JAX-WS runtime from Jakarta EE 8 to maintain compatibility with Java version 11 or greater.  The recipe will add a JAX-WS run-time, in `provided` scope, to any project that has a transitive dependency on the JAX-WS API. **The resulting dependencies still use the `javax` namespace, despite the move to the Jakarta artifact**. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes: Refaster template recipes for `org.openrewrite.java.migrate.lang.StringRules`. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes$IndexOfCharRecipe: Replace `String.indexOf(char ch, int fromIndex)` with `String.indexOf(char)`. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes$IndexOfStringRecipe: Replace `String.indexOf(String str, int fromIndex)` with `String.indexOf(String)`. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes$RedundantCallRecipe: Replace redundant `substring(..)` and `toString()` method calls with the `String` self. 
* org.openrewrite.java.migrate.lang.StringRulesRecipes$UseEqualsIgnoreCaseRecipe: Replace `String` equality comparisons involving `.toLowerCase()` or `.toUpperCase()` with `String.equalsIgnoreCase(String anotherString)`. 
* org.openrewrite.java.migrate.lang.UseStringIsEmptyRecipe: Replace `0 < s.length()` and `s.length() != 0` with `!s.isEmpty()`. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtils`. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$AbbreviateRecipe: Replace Maven Shared `StringUtils.abbreviate(String str, int maxWidth)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$CapitaliseRecipe: Replace Maven Shared `StringUtils.capitalise(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Maven Shared `StringUtils.defaultString(Object obj, String nullDefault)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringRecipe: Replace Maven Shared `StringUtils.defaultString(Object obj)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Maven Shared `StringUtils.deleteWhitespace(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Maven Shared `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$EqualsRecipe: Replace Maven Shared `StringUtils.equals(String str1, String str2)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$LowercaseRecipe: Replace Maven Shared `StringUtils.lowerCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$ReplaceRecipe: Replace Maven Shared `StringUtils.replace(String text, String searchString, String replacement)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$ReverseRecipe: Replace Maven Shared `StringUtils.reverse(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$SplitRecipe: Replace Maven Shared `StringUtils.split(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$StripRecipe: Replace Maven Shared `StringUtils.strip(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$TrimRecipe: Replace Maven Shared `StringUtils.trim(String str)` with JDK internals. 
* org.openrewrite.java.migrate.maven.shared.MavenSharedStringUtilsRecipes$UppercaseRecipe: Replace Maven Shared `StringUtils.upperCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusFileUtils`. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$DeleteDirectoryFileRecipe: Replace Plexus `FileUtils.deleteDirectory(File directory)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$DeleteDirectoryStringRecipe: Replace Plexus `FileUtils.deleteDirectory(String directory)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$FileExistsStringRecipe: Replace Plexus `FileUtils.fileExists(String fileName)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusFileUtilsRecipes$GetFileRecipe: Replace Plexus `FileUtils.getFile(String fileName)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe: Replace Plexus `StringUtils.abbreviate(String str, int maxWidth)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe: Replace Plexus `StringUtils.capitalise(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe: Replace Plexus `StringUtils.defaultString(Object obj, String nullDefault)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe: Replace Plexus `StringUtils.defaultString(Object obj)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe: Replace Plexus `StringUtils.deleteWhitespace(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe: Replace Plexus `StringUtils.equalsIgnoreCase(String str1, String str2)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsRecipe: Replace Plexus `StringUtils.equals(String str1, String str2)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$LowercaseRecipe: Replace Plexus `StringUtils.lowerCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReplaceRecipe: Replace Plexus `StringUtils.replace(String text, String searchString, String replacement)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReverseRecipe: Replace Plexus `StringUtils.reverse(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$SplitRecipe: Replace Plexus `StringUtils.split(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$StripRecipe: Replace Plexus `StringUtils.strip(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$TrimRecipe: Replace Plexus `StringUtils.trim(String str)` with JDK internals. 
* org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$UppercaseRecipe: Replace Plexus `StringUtils.upperCase(String str)` with JDK internals. 
* org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList: Replace `Stream.collect(Collectors.toUnmodifiableList())` with Java 16+ `Stream.toList()`. Also replaces `Stream.collect(Collectors.toList())` if `convertToList` is set to `true`. 
* org.openrewrite.java.migrate.util.SequencedCollection: Replace older code patterns with `SequencedCollection` methods, as per https://openjdk.org/jeps/431. 
* org.openrewrite.java.spring.boot3.UpgradeSpringDoc_2: Migrate applications to the latest spring-doc 2 release. This recipe will modify an application's build files and make changes code changes for removed/updated APIs. See the upgrade guide 
* org.openrewrite.java.testing.assertj.AdoptAssertJDurationAssertions: Adopt AssertJ `DurationAssert` assertions for more expressive messages. 
* org.openrewrite.micrometer.misk.MigrateEmptyLabelMiskCounter: Convert a Misk (Prometheus) counter to a Micrometer counter. 
* org.openrewrite.micrometer.misk.MigrateMiskToMicrometer: This recipe will move Misk metrics to Micrometer, where that is possible to do without a loss of fidelity. 
* org.openrewrite.micrometer.misk.NoExplicitEmptyLabelList: `listOf()` is the default argument for the `labels` parameter. 

## Removed Recipes

* **org.openrewrite.java.liberty.ChangeStringLiteral**: Changes the value of a string literal. 
* **org.openrewrite.java.migrate.JavaVersion20**: Change maven.compiler.source and maven.compiler.target values to 20. 
* **org.openrewrite.java.migrate.UpgradeToJava20**: This recipe will apply changes commonly needed when migrating to Java 20. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 20 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 20. 
* **org.openrewrite.maven.NormalizeMavenVariables**: Variables are all referenced by the prefix `project.`. You may also see references with `pom.` as the prefix, or the prefix omitted entirely - these forms are now deprecated and should not be used. 

