# 8.13.4 release (2024-01-16)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.openrewrite.java.migrate.guava.PreferJavaStringJoin](../../recipes/java/migrate/guava/preferjavastringjoin): Replaces supported calls to `com.google.common.base.Joiner#join()` with `java.lang.String#join()`. 
* [org.openrewrite.java.recipes.MissingOptionExample](../../recipes/java/recipes/missingoptionexample): Find `@Option` annotations that are missing `example` values for documentation. 
* [org.openrewrite.micrometer.dropwizard.FindDropwizardMetrics](../../recipes/micrometer/dropwizard/finddropwizardmetrics): Find uses of Dropwizard metrics that could be converted to a more modern metrics instrumentation library. 

