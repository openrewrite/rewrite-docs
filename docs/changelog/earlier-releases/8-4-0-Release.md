---
description: What's changed in OpenRewrite version 8.4.0.
---

# 8.4.0 release (2023-08-23)

## New Artifacts
* rewrite-okhttp

## New Recipes

* org.openrewrite.kotlin.cleanup.RemoveTrailingSemicolon: Some Java programmers may mistakenly add semicolons at the end when writing Kotlin code, but in reality, they are not necessary. 
* org.openrewrite.maven.search.EffectiveDependencies: Emit the data of binary dependency relationships. 
* org.openrewrite.maven.search.EffectiveManagedDependencies: Emit the data of binary dependency relationships. 
* org.openrewrite.okhttp.ReorderRequestBodyCreateArguments: Reorder the arguments of `RequestBody.create() to put the `MediaType` argument after the `String` body. 
* org.openrewrite.okhttp.UpgradeOkHttp5: This recipe will apply changes commonly needed when migrating to OkHttp 5.x. 
* org.openrewrite.okhttp.UpgradeOkHttp5Dependencies: Migrate OkHttp dependencies to 5.x. 
* org.openrewrite.okio.UpgradeOkio3: This recipe will apply changes commonly needed when migrating to Okio 3.x. 
* org.openrewrite.okio.UpgradeOkio3Dependencies: Migrate Okio dependencies to 3.x. 

