# 7.37.2 release (2023-03-02)

{% hint style="info" %}
This release fixes issues with Gradle and Groovy parsing on top of adding the recipes specified below.
{% endhint %}


## New Recipes
* [org.openrewrite.ListRuntimeClasspath](https://docs.openrewrite.org/reference/recipes/listruntimeclasspath): A diagnostic utility which emits the runtime classpath to a data table. 
* [org.openrewrite.java.cleanup.ChainStringBuilderAppendCalls](https://docs.openrewrite.org/reference/recipes/java/cleanup/chainstringbuilderappendcalls): String concatenation within calls to `StringBuilder.append()` causes unnecessary memory allocation. Except for concatenations of String literals, which are joined together at compile time. Replaces inefficient concatenations with chained calls to `StringBuilder.append()`. 
* [org.openrewrite.java.cleanup.NoFinalizedLocalVariables](https://docs.openrewrite.org/reference/recipes/java/cleanup/nofinalizedlocalvariables): Remove the `final` modifier keyword from local variables regardless of whether or not they are used within a local class or an anonymous class. 
* [org.openrewrite.java.cleanup.ReplaceDeprecatedRuntimeExecMethods](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacedeprecatedruntimeexecmethods): Replace Runtime.exec(String) methods to use exec(String[]) instead because the former is deprecated after java 18 and no longer recommended for use by the Java documentation. 
* [org.openrewrite.java.cleanup.ReplaceStreamToListWithCollect](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacestreamtolistwithcollect): Replace Java 16 Stream.toList() with Java 11 Stream.collect(Collectors.toList()). 
* [org.openrewrite.java.cleanup.ReplaceStringBuilderWithString](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacestringbuilderwithstring): Replace StringBuilder.append() with String if you are only concatenating a small number of strings and the code is simple and easy to read, as the compiler can optimize simple string concatenation expressions into a single String object, which can be more efficient than using StringBuilder. 
* [org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingSingleArgWithObjectsRequireNonNull](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull): Replace `org.apache.commons.lang3.Validate.notNull(Object)` with `Objects.requireNonNull(Object)`. 
* [org.openrewrite.java.cleanup.ReplaceValidateNotNullHavingVarargsWithObjectsRequireNonNull](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacevalidatenotnullhavingvarargswithobjectsrequirenonnull): Replace `org.apache.commons.lang3.Validate.notNull(Object, String, Object[])` with `Objects.requireNonNull(Object, String)`. 
* [org.openrewrite.java.search.IsLikelyNotTest](https://docs.openrewrite.org/reference/recipes/java/search/islikelynottest): Sources that do not contain indicators of being, or being exclusively for the use in tests. This recipe is simply a negation of the `org.openrewrite.java.search.IsLikelyTest` recipe. 
* [org.openrewrite.java.search.IsLikelyTest](https://docs.openrewrite.org/reference/recipes/java/search/islikelytest): Sources that contain indicators of being, or being exclusively for the use in tests. This recipe is not exhaustive, but is intended to be a good starting point for finding test sources. Looks at the source set name, and types in use; for example looks for uses of JUnit & TestNG annotations/assertions. 

## Changed Recipes
* [org.openrewrite.kubernetes.search.FindDisallowedImageTags](https://docs.openrewrite.org/reference/recipes/kubernetes/search/finddisallowedimagetags) was changed:
  * Old Options:
    * `disallowedTags: { type: Set, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `includeInitContainers: { type: boolean, required: false }`
  * New Options:
    * `disallowedTags: { type: String, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `includeInitContainers: { type: boolean, required: false }`
* [org.openrewrite.maven.ChangeParentPom](https://docs.openrewrite.org/reference/recipes/maven/changeparentpom) was changed:
  * Old Options:
    * `allowVersionDowngrades: { type: boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`