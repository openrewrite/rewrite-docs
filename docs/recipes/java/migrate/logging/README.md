---
description: java.util.logging APIs OpenRewrite recipes.
---

# java.util.logging APIs

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Use modernized `java.util.logging` APIs](./javaloggingapis.md)

## Recipes

* [Use `LogRecord#setInstant(Instant)`](./migratelogrecordsetmillistosetinstant.md)
* [Use `Logger#getGlobal()`](./migrateloggerglobaltogetglobal.md)
* [Use `Logger#logrb(.., ResourceBundle bundleName, ..)`](./migrateloggerlogrbtouseresourcebundle.md)
* [Use `ManagementFactory#getPlatformMXBean(PlatformLoggingMXBean.class)`](./migrategetloggingmxbeantogetplatformmxbean.md)
* [Use `java.lang.management.PlatformLoggingMXBean`](./migrateinterfaceloggingmxbeantoplatformloggingmxbean.md)


