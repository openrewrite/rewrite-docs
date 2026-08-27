---
description: SpringDoc OpenRewrite recipes.
---

# SpringDoc

_Recipes for migrating from SpringFox to [springdoc-openapi](https://springdoc.org/)._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `ApiInfoBuilder` to `Info`](./apiinfobuildertoinfo.md)
* [Replace elements of SpringFox's security with Swagger's security models](./securitycontexttosecurityscheme.md)

## Recipes

* [Migrate `Docket` to `GroupedOpenAPI`](./migratedocketbeantogroupedopenapibean.md)
* [Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties](./migratespringfoxsecurityconfiguration.md)
* [Removes @Import(BeanValidatorPluginsConfiguration.class)](./removebeanvalidatorpluginsconfiguration.md)
* [Rewrite safe `PathSelectors.regex(...)` calls as `PathSelectors.ant(...)`](./normalizespringfoxpathselectorsregextoant.md)


