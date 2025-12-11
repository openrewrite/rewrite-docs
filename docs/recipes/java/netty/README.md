---
description: Netty OpenRewrite recipes.
---

# Netty

_Recipes to perform [Netty](https://netty.io/) migration tasks._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Replace all `EventLoopGroup`s with `MultiThreadIoEventLoopGroup`](./eventloopgrouptomultithreadioeventloopgrouprecipes.md)

## Recipes

* [Replace `EpollEventLoopGroup` with `MultiThreadIoEventLoopGroup`](./eventloopgrouptomultithreadioeventloopgrouprecipes$epolleventloopgroupfactoryrecipe.md)
* [Replace `LocalEventLoopGroup` with `MultiThreadIoEventLoopGroup`](./eventloopgrouptomultithreadioeventloopgrouprecipes$localeventloopgroupfactoryrecipe.md)
* [Replace `NioEventLoopGroup` with `MultiThreadIoEventLoopGroup`](./eventloopgrouptomultithreadioeventloopgrouprecipes$nioeventloopgroupfactoryrecipe.md)


