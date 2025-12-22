---
description: What's changed in OpenRewrite version 8.48.0.
---

# 8.48.0 release (2025-03-11)

_Total recipe count: 3092_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.moderne.moddy.ImproveRecipeDescriptors](https://docs.openrewrite.org/recipes/moddy/improverecipedescriptors): Improving recipe display names and descriptions in turn improves Moddy.
* [io.quarkus.updates.camel.camel410.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel410/camelquarkusmigrationrecipe): Migrates `camel 4.9` quarkus application to `camel 4.10`.
* [io.quarkus.updates.camel.camel49.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel49/camelquarkusmigrationrecipe): Migrates `camel 4.8` quarkus application to `camel 4.9`.
* [io.quarkus.updates.core.quarkus319.ConfigurationPropertiesChange](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus319/configurationpropertieschange):
* [io.quarkus.updates.core.quarkus319.MoveAccessTokenAnnotationToNewPackage](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus319/moveaccesstokenannotationtonewpackage):
* [org.openrewrite.codemods.Biome](https://docs.openrewrite.org/recipes/codemods/biome): Run [Biome](https://biomejs.dev/) recommended settings on your projects.
* [org.openrewrite.java.migrate.net.URLConstructorToURICreate](https://docs.openrewrite.org/recipes/java/migrate/net/urlconstructortouricreate): Converts `new URL(String)` constructor to `URI.create(String).toURL()`.
* [org.openrewrite.java.migrate.net.URLConstructorsToNewURI](https://docs.openrewrite.org/recipes/java/migrate/net/urlconstructorstonewuri): Converts `new URL(String, ..)` constructors to `new URI(String, ..).toURL()`.
* [software.amazon.awssdk.v2migration.AddTransferManagerDependency](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/addtransfermanagerdependency): This recipe will add the Java v2 S3 Transfer Manager dependency if v1 Transfer Manager is used
* [software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2Experimental](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/awssdkjavav1tov2experimental): This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2, including S3 Transfer Manager. Transforms for Transfer Manager are incomplete and in-progress.
* [software.amazon.awssdk.v2migration.ByteBufferToSdkBytes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/bytebuffertosdkbytes): Convert ByteBuffer to SdkBytes by calling SdkBytes#fromByteBuffer
* [software.amazon.awssdk.v2migration.ChangeTransferManagerTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changetransfermanagertypes): Change SDK TransferManager types from v1 to v2.
* [software.amazon.awssdk.v2migration.S3NonStreamingRequestToV2Complex](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3nonstreamingrequesttov2complex): Transform usage of V1 S3 non-streaming requests to V2.
* [software.amazon.awssdk.v2migration.TransferManagerMethodsToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/transfermanagermethodstov2): Transfer Manager Methods to V2

## Removed Recipes

* **org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes**: Refaster template recipes for `org.openrewrite.java.migrate.net.URLConstructorsToURI`.
* **org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLFourArgumentConstructorRecipe**: Converts `new URL(String, String, int, String)` constructors to `new URI(...).toURL()`.
* **org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLSingleArgumentConstructorRecipe**: Converts `new URL(String)` constructors to `URI.create(String).toURL()`.
* **org.openrewrite.java.migrate.net.URLConstructorsToURIRecipes$URLThreeArgumentConstructorRecipe**: Converts `new URL(String, String, String)` constructors to `new URI(...).toURL()`.

## Changed Recipes

* [org.openrewrite.yaml.MergeYaml](https://docs.openrewrite.org/recipes/yaml/mergeyaml) was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `insertMode: { type: InsertMode, required: false }`
    * `insertProperty: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `createNewKeys: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `insertMode: { type: InsertMode, required: false }`
    * `insertProperty: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`