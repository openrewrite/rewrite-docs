# 8.4.0 release (2023-08-23)

## New Artifacts
* rewrite-okhttp

## New Recipes

* [org.openrewrite.kotlin.cleanup.RemoveTrailingSemicolon](https://docs.openrewrite.org/reference/recipes/kotlin/cleanup/removetrailingsemicolon): Some Java programmers may mistakenly add semicolons at the end when writing Kotlin code, but in reality, they are not necessary. 
* [org.openrewrite.maven.search.EffectiveDependencies](https://docs.openrewrite.org/reference/recipes/maven/search/effectivedependencies): Emit the data of binary dependency relationships. 
* [org.openrewrite.maven.search.EffectiveManagedDependencies](https://docs.openrewrite.org/reference/recipes/maven/search/effectivemanageddependencies): Emit the data of binary dependency relationships. 
* [org.openrewrite.okhttp.ReorderRequestBodyCreateArguments](https://docs.openrewrite.org/reference/recipes/okhttp/reorderrequestbodycreatearguments): Reorder the arguments of `RequestBody.create() to put the `MediaType` argument after the `String` body. 
* [org.openrewrite.okhttp.UpgradeOkHttp5](https://docs.openrewrite.org/reference/recipes/okhttp/upgradeokhttp5): This recipe will apply changes commonly needed when migrating to OkHttp 5.x. 
* [org.openrewrite.okhttp.UpgradeOkHttp5Dependencies](https://docs.openrewrite.org/reference/recipes/okhttp/upgradeokhttp5dependencies): Migrate OkHttp dependencies to 5.x. 
* [org.openrewrite.okio.UpgradeOkio3](https://docs.openrewrite.org/reference/recipes/okio/upgradeokio3): This recipe will apply changes commonly needed when migrating to Okio 3.x. 
* [org.openrewrite.okio.UpgradeOkio3Dependencies](https://docs.openrewrite.org/reference/recipes/okio/upgradeokio3dependencies): Migrate Okio dependencies to 3.x. 

