---
description: Log4j OpenRewrite recipes.
---

# Log4j

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate JCL to Log4j 2.x API](./commonsloggingtolog4j.md)
* [Migrate JUL to Log4j 2.x API](./jultolog4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](./log4j1tolog4j2.md)
* [Migrate SLF4J to Log4j 2.x API](./slf4jtolog4j.md)
* [Parameterize Log4j 2.x logging statements](./parameterizedlogging.md)

## Recipes

* [Convert Log4j `Logger.setLevel` to Log4j2 `Configurator.setLevel`](./loggersetleveltoconfiguratorrecipe.md)
* [Log exceptions as parameters rather than as string concatenations](./loggingexceptionconcatenationrecipe.md)
* [Prepend a random name to each Log4J statement](./prependrandomname.md)
* [Rewrites JUL's Logger#entering method to Log4j API](./convertjulentering.md)
* [Rewrites JUL's Logger#exiting method to Log4j API](./convertjulexiting.md)
* [Upgrade Log4j 2.x dependency version](./upgradelog4j2dependencyversion.md)


