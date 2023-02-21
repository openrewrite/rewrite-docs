# Snapshot (2023-02-21)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.cleanup.ReplaceStreamToListWithCollect](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacestreamtolistwithcollect): Replace Java 16 Stream.toList() with Java 11 Stream.collect(Collectors.toList()).
* [org.openrewrite.java.search.IsLikelyNotTest](https://docs.openrewrite.org/reference/recipes/java/search/islikelynottest): Sources that do not contain indicators of being, or being exclusively for the use in tests. This recipe is simply a negation of the `org.openrewrite.java.search.IsLikelyTest` recipe.
* [org.openrewrite.java.search.IsLikelyTest](https://docs.openrewrite.org/reference/recipes/java/search/islikelytest): Sources that contain indicators of being, or being exclusively for the use in tests. This recipe is not exhaustive, but is intended to be a good starting point for finding test sources. Looks at the source set name, and types in use; for example looks for uses of JUnit & TestNG annotations/assertions.
* [org.openrewrite.java.spring.search.FindApiCalls](https://docs.openrewrite.org/reference/recipes/java/spring/search/findapicalls): Find outbound API calls that this application is making.

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