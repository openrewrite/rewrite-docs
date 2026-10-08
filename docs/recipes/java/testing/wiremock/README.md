---
description: WireMock OpenRewrite recipes.
---

# WireMock

_Recipes for [WireMock](https://wiremock.org/) HTTP service mocking._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Keep a single `Content-Type` response header while still on WireMock 3](./removeduplicatecontenttypeheaders.md)
* [Upgrade WireMock to 3.x](./upgradewiremockdependencyversion.md)
* [Upgrade WireMock to 4.x](./wiremock3to4migration.md)

## Recipes

* [Keep a single `Content-Type` response header in WireMock stub files](./removeduplicatecontenttypestubheader.md)
* [Keep a single `Content-Type` response header on WireMock stubs](./removeduplicatecontenttypeheader.md)
* [Migrate `RequestMethod.isOneOf` to the matcher it became](./migraterequestmethodisoneof.md)
* [Migrate the `uuid` field in WireMock stub mapping files to `id`](./migratestubmappinguuidtoid.md)
* [Preserve the UTF-8 default of `ContentTypeHeader.charset()`](./migratecontenttypeheadercharset.md)
* [Replace WireMock constructors removed in 4.x](./replaceremovedconstructors.md)
* [Replace WireMock setter calls with `transform()`](./replacesetterswithtransform.md)


