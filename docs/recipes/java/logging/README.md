---
description: Logging OpenRewrite recipes.
---

# Logging

_Enforce logging best practices and migrate between logging frameworks._

## Categories

* [Jboss](/recipes/java/logging/jboss)
* [Jul](/recipes/java/logging/jul)
* [Log4j](/recipes/java/logging/log4j)
* [Logback](/recipes/java/logging/logback)
* [SLF4J](/recipes/java/logging/slf4j)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Replace any Lombok log annotations with target logging framework annotation](./changelomboklogannotation.md)
* [Use logger instead of system print statements](./systemprinttologging.md)

## Recipes

* [Catch block log level](./catchblockloglevel.md)
* [Change logger fields to `private`](./changeloggerstoprivate.md)
* [Parameterize logging statements](./parameterizedlogging.md)
* [Unpack Logger method `new Object[] {...}` into varargs](./argumentarraytovarargs.md)
* [Use logger instead of `System.err` print statements](./systemerrtologging.md)
* [Use logger instead of `System.out` print statements](./systemouttologging.md)
* [Use logger instead of `printStackTrace()`](./printstacktracetologerror.md)


