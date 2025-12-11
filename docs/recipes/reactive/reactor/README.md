---
description: Reactor OpenRewrite recipes.
---

# Reactor

_Recipes to perform [Reactor](https://projectreactor.io/) migration tasks._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Reactor 3.5](./upgradereactor_3_5.md)
* [Replace various `Processor.cache` calls with their `Sinks` equivalent](./reactorprocessorcachetosinkrecipes.md)
* [Replace various `Processor.create` calls with their `Sinks` equivalent](./reactorprocessorcreatetosinkrecipes.md)

## Recipes

* [Reactor Best Practices](./reactorbestpractices.md)
* [Replace `DirectProcessor.create()` with `Sinks.many().multicast().directBestEffort()`](./reactorprocessorcreatetosinkrecipes$directprocessorcreatetosinkrecipe.md)
* [Replace `EmitterProcessor.create()` with `Sinks.many().multicast().onBackpressureBuffer()`](./reactorprocessorcreatetosinkrecipes$emitterprocessorcreatetosinkrecipe.md)
* [Replace `EmitterProcessor.create(Boolean)` with `Sinks.many().multicast().onBackpressureBuffer(Queues.SMALL_BUFFER_SIZE, Boolean)`](./reactorprocessorcreatetosinkrecipes$emitterprocessorcreatebooleantosinkrecipe.md)
* [Replace `EmitterProcessor.create(int)` with `Sinks.many().multicast().onBackpressureBuffer(int)`](./reactorprocessorcreatetosinkrecipes$emitterprocessorcreateinttosinkrecipe.md)
* [Replace `EmitterProcessor.create(int, Boolean)` with `Sinks.many().multicast().onBackpressureBuffer(int, Boolean)`](./reactorprocessorcreatetosinkrecipes$emitterprocessorcreateintbooleantosinkrecipe.md)
* [Replace `MonoProcessor.create()` with `Sinks.one()`](./reactorprocessorcreatetosinkrecipes$monoprocessorcreatetosinkrecipe.md)
* [Replace `ReplayProcessor.cacheLast()` with `Sinks.many().replay().latest()`](./reactorprocessorcachetosinkrecipes$replayprocessorcachedefaulttosinkrecipe.md)
* [Replace `ReplayProcessor.cacheLast()` with `Sinks.many().replay().latest()`](./reactorprocessorcachetosinkrecipes$replayprocessorcachetosinkrecipe.md)
* [Replace `ReplayProcessor.create()` with `Sinks.many().replay().all()`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreatetosinkrecipe.md)
* [Replace `ReplayProcessor.create(int)` with `Sinks.many().replay().limit(int)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreateinttosinkrecipe.md)
* [Replace `ReplayProcessor.create(int, false)` with `Sinks.many().replay().limit(int)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreateintliteralfalsetosinkrecipe.md)
* [Replace `ReplayProcessor.create(int, true)` with `Sinks.many().replay().all(int)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreateintliteraltruetosinkrecipe.md)
* [Replace `ReplayProcessor.createSizeAndTimeout(int, Duration)` with `Sinks.many().replay().limit(int, duration)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreatesizeandtimeouttosinkrecipe.md)
* [Replace `ReplayProcessor.createSizeAndTimeout(int, Duration, Scheduler)` with `Sinks.many().replay().limit(int, Duration, Scheduler)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreatesizeandtimeoutschedulertosinkrecipe.md)
* [Replace `ReplayProcessor.createTimeout(Duration)` with `Sinks.many().replay().limit(duration)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreatetimeouttosinkrecipe.md)
* [Replace `ReplayProcessor.createTimeout(Duration, Scheduler)` with `Sinks.many().replay().limit(Duration, Scheduler)`](./reactorprocessorcreatetosinkrecipes$replayprocessorcreatetimeoutschedulertosinkrecipe.md)
* [Replace `UnicastProcessor.create()` with `Sinks.many().unicast().onBackpressureBuffer()`](./reactorprocessorcreatetosinkrecipes$unicastprocessorcreatetosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue)` with `Sinks.many().unicast().onBackpressureBuffer(Queue)`](./reactorprocessorcreatetosinkrecipes$unicastprocessorcreatequeuetosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue, Consumer, Disposable)` with `Sinks.many().unicast().onBackpressureBuffer(Queue, Disposable)`](./reactorprocessorcreatetosinkrecipes$unicastprocessorcreatequeueconsumerdisposabletosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue, Disposable)` with `Sinks.many().unicast().onBackpressureBuffer(Queue, Disposable)`](./reactorprocessorcreatetosinkrecipes$unicastprocessorcreatequeuedisposabletosinkrecipe.md)
* [Replace `doAfterSuccessOrError` calls with `tap` operator](./reactordoaftersuccessorerrortotap.md)


