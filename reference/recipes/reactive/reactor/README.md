# Reactor

_Recipes to perform [Reactor](https://projectreactor.io/) migration tasks._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Reactor 3.5](./upgradereactor_3_5.md)
* [Replace various `Processor.cache` calls with their `Sinks` equivalent](./reactorprocessorcachetosinkrecipes.md)
* [Replace various `Processor.create` calls with their `Sinks` equivalent](./reactorprocessorcreatetosinkrecipes.md)

## Recipes

* [Replace `DirectProcessor.create()` with `Sinks.many().multicast().directBestEffort()`](./reactorprocessorcreatetosinkrecipesdirectprocessorcreatetosinkrecipe.md)
* [Replace `EmitterProcessor.create()` with `Sinks.many().multicast().onBackpressureBuffer()`](./reactorprocessorcreatetosinkrecipesemitterprocessorcreatetosinkrecipe.md)
* [Replace `EmitterProcessor.create(Boolean)` with `Sinks.many().multicast().onBackpressureBuffer(Queues.SMALL_BUFFER_SIZE, Boolean)`](./reactorprocessorcreatetosinkrecipesemitterprocessorcreatebooleantosinkrecipe.md)
* [Replace `EmitterProcessor.create(int)` with `Sinks.many().multicast().onBackpressureBuffer(int)`](./reactorprocessorcreatetosinkrecipesemitterprocessorcreateinttosinkrecipe.md)
* [Replace `EmitterProcessor.create(int, Boolean)` with `Sinks.many().multicast().onBackpressureBuffer(int, Boolean)`](./reactorprocessorcreatetosinkrecipesemitterprocessorcreateintbooleantosinkrecipe.md)
* [Replace `MonoProcessor.create()` with `Sinks.one()`](./reactorprocessorcreatetosinkrecipesmonoprocessorcreatetosinkrecipe.md)
* [Replace `ReplayProcessor.cacheLast()` with `Sinks.many().replay().latest()`](./reactorprocessorcachetosinkrecipesreplayprocessorcachedefaulttosinkrecipe.md)
* [Replace `ReplayProcessor.cacheLast()` with `Sinks.many().replay().latest()`](./reactorprocessorcachetosinkrecipesreplayprocessorcachetosinkrecipe.md)
* [Replace `ReplayProcessor.create()` with `Sinks.many().replay().all()`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreatetosinkrecipe.md)
* [Replace `ReplayProcessor.create(int)` with `Sinks.many().replay().limit(int)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreateinttosinkrecipe.md)
* [Replace `ReplayProcessor.create(int, false)` with `Sinks.many().replay().limit(int)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreateintliteralfalsetosinkrecipe.md)
* [Replace `ReplayProcessor.create(int, true)` with `Sinks.many().replay().all(int)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreateintliteraltruetosinkrecipe.md)
* [Replace `ReplayProcessor.createSizeAndTimeout(int, Duration)` with `Sinks.many().replay().limit(int, duration)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreatesizeandtimeouttosinkrecipe.md)
* [Replace `ReplayProcessor.createSizeAndTimeout(int, Duration, Scheduler)` with `Sinks.many().replay().limit(int, Duration, Scheduler)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreatesizeandtimeoutschedulertosinkrecipe.md)
* [Replace `ReplayProcessor.createTimeout(Duration)` with `Sinks.many().replay().limit(duration)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreatetimeouttosinkrecipe.md)
* [Replace `ReplayProcessor.createTimeout(Duration, Scheduler)` with `Sinks.many().replay().limit(Duration, Scheduler)`](./reactorprocessorcreatetosinkrecipesreplayprocessorcreatetimeoutschedulertosinkrecipe.md)
* [Replace `UnicastProcessor.create()` with `Sinks.many().unicast().onBackpressureBuffer()`](./reactorprocessorcreatetosinkrecipesunicastprocessorcreatetosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue)` with `Sinks.many().unicast().onBackpressureBuffer(Queue)`](./reactorprocessorcreatetosinkrecipesunicastprocessorcreatequeuetosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue, Consumer, Disposable)` with `Sinks.many().unicast().onBackpressureBuffer(Queue, Disposable)`](./reactorprocessorcreatetosinkrecipesunicastprocessorcreatequeueconsumerdisposabletosinkrecipe.md)
* [Replace `UnicastProcessor.create(Queue, Disposable)` with `Sinks.many().unicast().onBackpressureBuffer(Queue, Disposable)`](./reactorprocessorcreatetosinkrecipesunicastprocessorcreatequeuedisposabletosinkrecipe.md)


