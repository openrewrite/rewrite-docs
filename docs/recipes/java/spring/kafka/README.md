---
description: Spring Kafka OpenRewrite recipes.
---

# Spring Kafka

_Recipes for [Spring for Apache Kafka](https://spring.io/projects/spring-kafka) producers, consumers, and listeners._

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate to Spring Kafka 3.0](./upgradespringkafka_3_0.md)
* [Migrate to Spring Kafka 4.0](./upgradespringkafka_4_0.md)
* [Migrates Spring Kafka deprecated error handlers](./upgradespringkafka_2_8_errorhandlers.md)

## Recipes

* [Change `KafkaOperations.send*` return type to `CompletableFuture`](./kafkaoperationssendreturntype.md)
* [Move `DefaultErrorHandler.setBackOff(BackOff)` to the constructor](./defaulterrorhandlersetbackofftoconstructor.md)
* [Remove `KafkaOperations.usingCompletableFuture()`](./removeusingcompletablefuture.md)
* [Use `Duration` in `KafkaTestUtils`](./kafkatestutilsduration.md)


