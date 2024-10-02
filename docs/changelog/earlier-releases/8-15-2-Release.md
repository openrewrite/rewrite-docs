# 8.15.2 release (2024-02-07)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.FindDeserializationErrors](../../recipes/core/finddeserializationerrors): Produces a data table collecting all deserialization errors of serialized LSTs. 
* [org.openrewrite.groovy.format.GStringCurlyBraces](../../recipes/groovy/format/gstringcurlybraces): In Groovy [GStrings](https://docs.groovy-lang.org/latest/html/api/groovy/lang/GString.html), curly braces are optional for single variable expressions. This recipe adds them, so that the expression is always surrounded by curly braces. 
* [org.openrewrite.java.migrate.RemoveIllegalSemicolons](../../recipes/java/migrate/removeillegalsemicolons): Remove semicolons after package declarations and imports, no longer accepted in Java 21 as of [JDK-8027682](https://bugs.openjdk.org/browse/JDK-8027682). 
* [org.openrewrite.java.migrate.jakarta.RemovalsServletJakarta10](../../recipes/java/migrate/jakarta/removalsservletjakarta10): This recipe replaces the classes and methods deprecated in Jakarta Servlet 6.0 
* [org.openrewrite.java.migrate.jakarta.RemoveBeanIsNullable](../../recipes/java/migrate/jakarta/removebeanisnullable): `Bean.isNullable()` has been removed in CDI 4.0.0, and now always returns `false`. 
* [org.openrewrite.java.migrate.jakarta.UpdateAddAnnotatedTypes](../../recipes/java/migrate/jakarta/updateaddannotatedtypes): `BeforeBeanDiscovery.addAnnotatedType(AnnotatedType)` is deprecated in CDI 1.1. It is Replaced by `BeforeBeanDiscovery.addAnnotatedType(AnnotatedType, String)`. 
* [org.openrewrite.java.migrate.jakarta.UpdateBeanManagerMethods](../../recipes/java/migrate/jakarta/updatebeanmanagermethods): Updates `BeanManager.fireEvent()` or `BeanManager.createInjectionTarget()`. 
* [org.openrewrite.java.migrate.jakarta.UpdateGetRealPath](../../recipes/java/migrate/jakarta/updategetrealpath): Updates `getRealPath()` for `jakarta.servlet.ServletRequest` and `jakarta.servlet.ServletRequestWrapper` to use `ServletContext.getRealPath(String)`. 
* [org.openrewrite.java.migrate.util.StreamFindFirst](../../recipes/java/migrate/util/streamfindfirst): For SequencedCollections, use `collection.getFirst()` instead of `collection.stream().findFirst().orElseThrow()`. 
* [org.openrewrite.java.recipes.UseTreeRandomId](../../recipes/java/recipes/usetreerandomid): Replaces occurrences of `UUID.randomUUID()` with `Tree.randomId()` when passed as an argument to a constructor call for LST elements. 
* [org.openrewrite.java.search.FindClassHierarchy](../../recipes/java/search/findclasshierarchy): Discovers all class declarations within a project, recording which files they appear in, their superclasses, and interfaces. That information is then recorded in a data table. 
* [org.openrewrite.python.cleanup.StartsWithEndsWith](../../recipes/python/cleanup/startswithendswith): `startswith` and `endswith` methods of the `str` object accept a tuple of strings to match against. When multiple calls to `startswith` or `endswith` are made on the same string, they can be combined into a single call with a tuple of strings. 
* [org.openrewrite.quarkus.ChangeQuarkusPropertyKey](../../recipes/quarkus/changequarkuspropertykey): Change a Quarkus property key. 
* [org.openrewrite.quarkus.ChangeQuarkusPropertyValue](../../recipes/quarkus/changequarkuspropertyvalue): Change the value of a property in a Quarkus configuration file. 
* [org.openrewrite.quarkus.DeleteQuarkusProperty](../../recipes/quarkus/deletequarkusproperty): Delete a property from a Quarkus configuration file. 
* [org.openrewrite.quarkus.search.FindQuarkusProfiles](../../recipes/quarkus/search/findquarkusprofiles): Search the properties for existing Quarkus profiles. 
* [org.openrewrite.quarkus.search.FindQuarkusProperties](../../recipes/quarkus/search/findquarkusproperties): Finds occurrences of a Quarkus property key. 
* [org.openrewrite.recipes.JavaRecipeBestPractices](../../recipes/recipes/javarecipebestpractices): Best practices for Java recipe development. 
* [org.openrewrite.recipes.OpenRewriteBestPractices](../../recipes/recipes/openrewritebestpractices): Best practices for OpenRewrite recipe development. 
* [org.openrewrite.recipes.RecipeTestingBestPractices](../../recipes/recipes/recipetestingbestpractices): Best practices for testing recipes. 
* [org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe](../../recipes/staticanalysis/bigdecimaldoubleconstructorrecipe): Use of `new BigDecimal(double)` constructor can lead to loss of precision. Use `BigDecimal.valueOf(double)` instead. For example writing `new BigDecimal(0.1)` does not create a `BigDecimal` which is exactly equal to `0.1`, but it is equal to `0.1000000000000000055511151231257827021181583404541015625`. This is because `0.1` cannot be represented exactly as a double (or, for that matter, as a binary fraction of any finite length). 

## Removed Recipes

* **org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate**: Because we can now clone `JavaParser.Builder`, there is no need to fully build the parser inside a `Supplier<JavaParser>`. This also makes room for `JavaTemplate` to add shared `JavaTypeCache` implementations to parsers used to compile templates. 
* **org.openrewrite.java.security.OwaspA04**: OWASP [A04:2021](https://owasp.org/Top10/A04_2021-Insecure_Design/) focuses on risks related to design and architectural flaws,  with a call for more use of threat modeling, secure design patterns, and reference architectures. This recipe seeks to remediate these vulnerabilities. 
* **org.openrewrite.java.security.OwaspA10**: OWASP [A10:2021](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/) Server-Side Request Forgery (SSRF) 
* **org.openrewrite.kotlin.StaticAnalysis**: Static analysis fixes for Kotlin sources. 

## Changed Recipes

* [org.openrewrite.search.FindCommitters](../../recipes/search/findcommitters) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `fromDate: { type: String, required: false }`
* [org.openrewrite.gradle.UpdateJavaCompatibility](../../recipes/gradle/updatejavacompatibility) was changed:
  * Old Options:
    * `allowDowngrade: { type: Boolean, required: false }`
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
  * New Options:
    * `addSourceCompatibilityIfMissing: { type: Boolean, required: false }`
    * `addTargetCompatibilityIfMissing: { type: Boolean, required: false }`
    * `allowDowngrade: { type: Boolean, required: false }`
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
* [org.openrewrite.kubernetes.UpdateContainerImageName](../../recipes/kubernetes/updatecontainerimagename) was changed:
  * Old Options:
    * `fileMatcher: { type: String, required: false }`
    * `imageToFind: { type: String, required: true }`
    * `imageToUpdate: { type: String, required: false }`
    * `includeInitContainers: { type: boolean, required: false }`
    * `repoToFind: { type: String, required: false }`
    * `repoToUpdate: { type: String, required: false }`
    * `tagToFind: { type: String, required: false }`
    * `tagToUpdate: { type: String, required: false }`
  * New Options:
    * `digestToFind: { type: String, required: false }`
    * `digestToUpdate: { type: String, required: false }`
    * `fileMatcher: { type: String, required: false }`
    * `imageToFind: { type: String, required: true }`
    * `imageToUpdate: { type: String, required: false }`
    * `includeInitContainers: { type: boolean, required: false }`
    * `repoToFind: { type: String, required: false }`
    * `repoToUpdate: { type: String, required: false }`
    * `tagToFind: { type: String, required: false }`
    * `tagToUpdate: { type: String, required: false }`
* [org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId](../../recipes/maven/changedependencygroupidandartifactid) was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `changeManagedDependency: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.ChangePackaging](../../recipes/maven/changepackaging) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `packaging: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `oldPackaging: { type: String, required: false }`
    * `packaging: { type: String, required: true }`