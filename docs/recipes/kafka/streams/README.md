---
description: Streams OpenRewrite recipes.
---

# Streams

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `Joined.named()` to `Joined.as()`](./migratejoinednamemethod.md)
* [Migrate TaskMetadata and ThreadMetadata](./migratetaskandthreadmetadata.md)
* [Migrate `exactly_once` and `exactly_once_beta` to `exactly_once_v2`](./processingguaranteeexactlyoncetov2.md)
* [Migrate `exactly_once` to `exactly_once_beta`](./processingguaranteeexactlyoncetobeta.md)

## Recipes

* [Migrate KStream to KTable conversion to use `toTable()` method](./migratekstreamtotable.md)
* [Migrate `TaskMetadata.taskId()` to return `TaskId`](./migratetaskmetadatataskid.md)
* [Migrate `WindowStore.put()` to include timestamp](./migratewindowstoreputmethod.md)
* [Migrate deprecated `KafkaStreams#store` method](./migratekafkastreamsstoremethod.md)
* [Migrate deprecated retry configuration to task timeout](./migrateretryconfiguration.md)
* [Migrate to StreamsUncaughtExceptionHandler API](./migratestreamsuncaughtexceptionhandler.md)
* [Remove `PartitionGrouper` configuration](./removepartitiongrouperconfiguration.md)


