# 8.23.2 release (2024-04-05)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4](../recipes/apache/commons/collections/upgradeapachecommonscollections_3_4): Migrate applications to the latest Apache Commons Collections 4.x release. This recipe modifies  application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions. 
* [org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3](../recipes/apache/commons/lang/upgradeapachecommonslang_2_3): Migrate applications to the latest Apache Commons Lang 3.x release. This recipe modifies  application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions. 
* [org.openrewrite.apache.commons.math.UpgradeApacheCommonsMath_2_3](../recipes/apache/commons/math/upgradeapachecommonsmath_2_3): Migrate applications to the latest Apache Commons Math 3.x release. This recipe modifies  application's build files, make changes to deprecated/preferred APIs, and migrates configuration settings that have changes between versions. 

## Changed Recipes

* [org.openrewrite.maven.ChangeParentPom](../recipes/maven/changeparentpom) was changed:
  * Old Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newRelativePath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `oldRelativePath: { type: String, required: false }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newRelativePath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `oldRelativePath: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.maven.UpgradeParentVersion](../recipes/maven/upgradeparentversion) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `retainVersions: { type: List, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `groupId: { type: String, required: true }`
    * `newVersion: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`