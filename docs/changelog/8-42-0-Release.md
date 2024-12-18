# 8.42.0 release (2024-12-18)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.codemods.migrate.angular.v18](https://docs.openrewrite.org/recipes/codemods/migrate/angular/v18): Upgrade to Angular v18 
* [org.openrewrite.codemods.migrate.angular.v19](https://docs.openrewrite.org/recipes/codemods/migrate/angular/v19): Upgrade to Angular v19 
* [org.openrewrite.csharp.dependencies.DependencyInsight](https://docs.openrewrite.org/recipes/csharp/dependencies/dependencyinsight): Finds dependencies in `*.csproj` and `packages.config`. 
* [org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/csharp/dependencies/dependencyvulnerabilitycheck): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable. 
* [org.openrewrite.csharp.dependencies.UpgradeDependencyVersion](https://docs.openrewrite.org/recipes/csharp/dependencies/upgradedependencyversion): Upgrades dependencies in `*.csproj` and `packages.config`. 
* [org.openrewrite.gitlab.AddStages](https://docs.openrewrite.org/recipes/gitlab/addstages): Add or Update the set of stages defined in `.gitlab-ci.yml`. 
* [org.openrewrite.gradle.AddJUnitPlatformLauncher](https://docs.openrewrite.org/recipes/gradle/addjunitplatformlauncher): Add the JUnit Platform Launcher to the buildscript dependencies. 
* [org.openrewrite.gradle.RemoveRedundantDependencyVersions](https://docs.openrewrite.org/recipes/gradle/removeredundantdependencyversions): Remove explicitly-specified dependency versions that are managed by a Gradle `platform`/`enforcedPlatform`. 
* [org.openrewrite.java.boot3.ReplaceMockBeanAndSpyBean](https://docs.openrewrite.org/recipes/java/boot3/replacemockbeanandspybean): Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`. 
* [org.openrewrite.java.dependencies.DependencyLicenseCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencylicensecheck): Locates and reports on all licenses in use. 
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Upgrades dependencies versioned according to [Semantic Versioning](https://semver.org/). 
* [org.openrewrite.java.dependencies.RemoveUnusedDependencies](https://docs.openrewrite.org/recipes/java/dependencies/removeunuseddependencies): Scans through source code collecting references to types and methods, removing any dependencies that are not used from Maven or Gradle build files. 
* [org.openrewrite.java.dependencies.SoftwareBillOfMaterials](https://docs.openrewrite.org/recipes/java/dependencies/softwarebillofmaterials): Produces a software bill of materials (SBOM) for a project. An SBOM is a complete list of all dependencies used in a project, including transitive dependencies. The produced SBOM is in the [CycloneDX](https://cyclonedx.org/) XML format. Supports Gradle and Maven. Places a file named sbom.xml adjacent to the Gradle or Maven build file. 
* [org.openrewrite.java.logging.log4j.LoggerSetLevelToConfiguratorRecipe](https://docs.openrewrite.org/recipes/java/logging/log4j/loggersetleveltoconfiguratorrecipe): Converts `org.apache.log4j.Logger.setLevel` to `org.apache.logging.log4j.core.config.Configurator.setLevel`. 
* [org.openrewrite.java.migrate.IllegalArgumentExceptionToAlreadyConnectedException](https://docs.openrewrite.org/recipes/java/migrate/illegalargumentexceptiontoalreadyconnectedexception): Replace `IllegalArgumentException` with `AlreadyConnectedException` for DatagramChannel.send() to ensure compatibility with Java 11+. 
* [org.openrewrite.java.migrate.joda.NoJodaTime](https://docs.openrewrite.org/recipes/java/migrate/joda/nojodatime): Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types. 
* [org.openrewrite.java.migrate.lang.ExplicitRecordImport](https://docs.openrewrite.org/recipes/java/migrate/lang/explicitrecordimport): Add explicit import for `Record` classes when upgrading past Java 14+, to avoid conflicts with `java.lang.Record`. 
* [org.openrewrite.java.migrate.lombok.UseLombokGetter](https://docs.openrewrite.org/recipes/java/migrate/lombok/uselombokgetter): Convert trivial getter methods to `@Getter` annotations on their respective fields. 
* [org.openrewrite.java.migrate.lombok.UseLombokSetter](https://docs.openrewrite.org/recipes/java/migrate/lombok/uselomboksetter): Convert trivial setter methods to `@Setter` annotations on their respective fields. 
* [org.openrewrite.java.testing.easymock.EasyMockToMockito](https://docs.openrewrite.org/recipes/java/testing/easymock/easymocktomockito): This recipe will apply changes commonly needed when migrating from EasyMock to Mockito. 
* [org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify](https://docs.openrewrite.org/recipes/java/testing/easymock/easymockverifytomockitoverify): Replace `EasyMock.verify(dependency)` with individual `Mockito.verify(dependency).method()` calls based on expected methods. 
* [org.openrewrite.java.testing.easymock.RemoveExtendsEasyMockSupport](https://docs.openrewrite.org/recipes/java/testing/easymock/removeextendseasymocksupport): Modify test classes by removing extends EasyMockSupport and replacing EasyMock methods with Mockito equivalents. 
* [org.openrewrite.java.testing.hamcrest.ConsistentHamcrestMatcherImports](https://docs.openrewrite.org/recipes/java/testing/hamcrest/consistenthamcrestmatcherimports): Use consistent imports for Hamcrest matchers, and remove wrapping `is(Matcher)` calls ahead of further changes. 
* [org.openrewrite.java.testing.hamcrest.HamcrestInstanceOfToJUnit5](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcrestinstanceoftojunit5): Migrate from Hamcrest `instanceOf` and `isA` matcher to JUnit5 `assertInstanceOf` assertion. 
* [org.openrewrite.java.testing.hamcrest.HamcrestMatcherToJUnit5](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcrestmatchertojunit5): Migrate from Hamcrest `Matcher` to JUnit 5 assertions. 
* [org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5](https://docs.openrewrite.org/recipes/java/testing/hamcrest/migratehamcresttojunit5): Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`. 
* [org.openrewrite.java.testing.mockito.NoInitializationForInjectMock](https://docs.openrewrite.org/recipes/java/testing/mockito/noinitializationforinjectmock): Removes unnecessary initialization for fields annotated with `@InjectMocks` in Mockito tests. 
* [org.openrewrite.java.testing.mockito.RemoveTimesZeroAndOne](https://docs.openrewrite.org/recipes/java/testing/mockito/removetimeszeroandone): Remove `Mockito.times(0)` and `Mockito.times(0)` from `Mockito.verify()` calls. 
* [org.openrewrite.java.testing.testng.TestNgAssertEqualsToAssertThat](https://docs.openrewrite.org/recipes/java/testing/testng/testngassertequalstoassertthat): Convert TestNG-style `assertEquals()` to AssertJ's `assertThat().isEqualTo()`. 
* [org.openrewrite.java.testing.testng.TestNgAssertNotEqualsToAssertThat](https://docs.openrewrite.org/recipes/java/testing/testng/testngassertnotequalstoassertthat): Convert TestNG-style `assertNotEquals()` to AssertJ's `assertThat().isNotEqualTo()`. 
* [org.openrewrite.java.testing.testng.TestNgToAssertj](https://docs.openrewrite.org/recipes/java/testing/testng/testngtoassertj): Convert assertions from `org.testng.Assert` to `org.assertj.core.api.Assertions`. 
* [org.openrewrite.kubernetes.search.FindHarcodedIPAddresses](https://docs.openrewrite.org/recipes/kubernetes/search/findharcodedipaddresses): Find hardcoded IP address anywhere in text-based files. 
* [org.openrewrite.openapi.swagger.MigrateApiImplicitParamDataTypeClass](https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiimplicitparamdatatypeclass): Migrate `@ApiImplicitParam(dataTypeClass=Foo.class)` to `@Parameter(schema=@Schema(implementation=Foo.class))`. 
* [org.openrewrite.reactive.reactor.ReactorBestPractices](https://docs.openrewrite.org/recipes/reactive/reactor/reactorbestpractices): This recipe applies best practices for using Reactor. 
* [org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes](https://docs.openrewrite.org/recipes/staticanalysis/urlequalshashcoderecipes): Uses of `equals()` and `hashCode()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`. 
* [org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes$URLEqualsRecipe](https://docs.openrewrite.org/recipes/staticanalysis/urlequalshashcoderecipesusdurlequalsrecipe): Uses of `equals()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`. 
* [org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes$URLHashCodeRecipe](https://docs.openrewrite.org/recipes/staticanalysis/urlequalshashcoderecipesusdurlhashcoderecipe): Uses of `hashCode()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`. 

## Removed Recipes

* **org.openrewrite.csharp.dependencies.DependencyInsight**: Finds dependencies in `*.csproj` and `packages.config`. 
* **org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck**: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable. 
* **org.openrewrite.csharp.dependencies.UpgradeDependencyVersion**: Upgrades dependencies in `*.csproj` and `packages.config`. 
* **org.openrewrite.java.dependencies.DependencyLicenseCheck**: Locates and reports on all licenses in use. 
* **org.openrewrite.java.dependencies.DependencyVulnerabilityCheck**: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable. 
* **org.openrewrite.java.dependencies.SoftwareBillOfMaterials**: Produces a software bill of materials (SBOM) for a project. An SBOM is a complete list of all dependencies used in a project, including transitive dependencies. The produced SBOM is in the [CycloneDX](https://cyclonedx.org/) XML format. Supports Gradle and Maven. Places a file named sbom.xml adjacent to the Gradle or Maven build file. 

## Changed Recipes

* [org.openrewrite.java.migrate.lang.StringFormatted](https://docs.openrewrite.org/recipes/java/migrate/lang/stringformatted) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `addParentheses: { type: Boolean, required: false }`
* [org.openrewrite.xml.ChangeTagValue](https://docs.openrewrite.org/recipes/xml/changetagvalue) was changed:
  * Old Options:
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
  * New Options:
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `regex: { type: Boolean, required: false }`
* [org.openrewrite.yaml.CommentOutProperty](https://docs.openrewrite.org/recipes/yaml/commentoutproperty) was changed:
  * Old Options:
    * `commentText: { type: String, required: true }`
    * `propertyKey: { type: String, required: true }`
  * New Options:
    * `commentOutProperty: { type: Boolean, required: false }`
    * `commentText: { type: String, required: true }`
    * `propertyKey: { type: String, required: true }`