---
sidebar_label: "Migrate to Spring Kafka 3.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Kafka 3.0

**org.openrewrite.java.spring.kafka.UpgradeSpringKafka\_3\_0**

_Migrate applications to the latest Spring Kafka 3.0 release._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [kafka](/reference/recipes-by-tag#kafka)

## Recipe source

[GitHub: spring-kafka-30.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-kafka-30.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.kafka`
  * artifactId: `spring-kafka`
  * newVersion: `3.0.x`
* [Change `KafkaOperations.send*` return type to `CompletableFuture`](../../../java/spring/kafka/kafkaoperationssendreturntype)
* [Use `Duration` in `KafkaTestUtils`](../../../java/spring/kafka/kafkatestutilsduration)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.kafka.core.KafkaOperations2`
  * newFullyQualifiedTypeName: `org.springframework.kafka.core.KafkaOperations`
* [Remove `KafkaOperations.usingCompletableFuture()`](../../../java/spring/kafka/removeusingcompletablefuture)
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.MESSAGE_KEY`
  * fullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.KEY`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.PARTITION_ID`
  * fullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.PARTITION`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.RECEIVED_MESSAGE_KEY`
  * fullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.RECEIVED_KEY`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.RECEIVED_PARTITION_ID`
  * fullyQualifiedConstantName: `org.springframework.kafka.support.KafkaHeaders.RECEIVED_PARTITION`
* [Migrates Spring Kafka deprecated error handlers](../../../java/spring/kafka/upgradespringkafka_2_8_errorhandlers)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.kafka.UpgradeSpringKafka_3_0
displayName: Migrate to Spring Kafka 3.0
description: |
  Migrate applications to the latest Spring Kafka 3.0 release.
tags:
  - spring
  - kafka
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.kafka
      artifactId: spring-kafka
      newVersion: 3.0.x
  - org.openrewrite.java.spring.kafka.KafkaOperationsSendReturnType
  - org.openrewrite.java.spring.kafka.KafkaTestUtilsDuration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.kafka.core.KafkaOperations2
      newFullyQualifiedTypeName: org.springframework.kafka.core.KafkaOperations
  - org.openrewrite.java.spring.kafka.RemoveUsingCompletableFuture
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.MESSAGE_KEY
      fullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.KEY
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.PARTITION_ID
      fullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.PARTITION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.RECEIVED_MESSAGE_KEY
      fullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.RECEIVED_KEY
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.RECEIVED_PARTITION_ID
      fullyQualifiedConstantName: org.springframework.kafka.support.KafkaHeaders.RECEIVED_PARTITION
  - org.openrewrite.java.spring.kafka.UpgradeSpringKafka_2_8_ErrorHandlers

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)

## Examples
##### Example 1
`KafkaOperationsSendReturnTypeTest#changeKafkaOperationsSendReturnType`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        ListenableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
        future.addCallback(new ListenableFutureCallback<>() {
            @Override
            public void onSuccess(SendResult<String, String> result) {
                System.out.println(result.getRecordMetadata());
            }

            @Override
            public void onFailure(Throwable ex) {
                System.err.println(ex.getMessage());
            }
        });
    }
}
```

###### After
```java
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;

import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        CompletableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
        future.whenComplete((SendResult<String, String> result, Throwable ex) -> {
            if (ex == null) {
                System.out.println(result.getRecordMetadata());
            } else {
                System.err.println(ex.getMessage());
            }
        });
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,0 @@
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
-import org.springframework.util.concurrent.ListenableFuture;
-import org.springframework.util.concurrent.ListenableFutureCallback;

@@ -6,0 +4,2 @@
import org.springframework.util.concurrent.ListenableFutureCallback;

+import java.util.concurrent.CompletableFuture;
+
class Foo {
@@ -8,4 +8,3 @@
class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
-       ListenableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
-       future.addCallback(new ListenableFutureCallback<>() {
-           @Override
-           public void onSuccess(SendResult<String, String> result) {
+       CompletableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
+       future.whenComplete((SendResult<String, String> result, Throwable ex) -> {
+           if (ex == null) {
                System.out.println(result.getRecordMetadata());
@@ -13,4 +12,1 @@
            public void onSuccess(SendResult<String, String> result) {
                System.out.println(result.getRecordMetadata());
-           }
-
-           @Override
-           public void onFailure(Throwable ex) {
+           } else {
                System.err.println(ex.getMessage());
```
</TabItem>
</Tabs>

---

##### Example 2
`RemoveUsingCompletableFutureTest#usingCompletableFuture`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.core.KafkaOperations2;
import org.springframework.kafka.support.SendResult;
import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        KafkaOperations2<String, String> k2 = kafkaOperations.usingCompletableFuture();
    }
}
```

###### After
```java
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        KafkaOperations<String, String> k2 = kafkaOperations;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,0 @@
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
-import org.springframework.kafka.core.KafkaOperations2;
import org.springframework.kafka.support.SendResult;
@@ -9,1 +8,1 @@
class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
-       KafkaOperations2<String, String> k2 = kafkaOperations.usingCompletableFuture();
+       KafkaOperations<String, String> k2 = kafkaOperations;
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`KafkaOperationsSendReturnTypeTest#changeKafkaOperationsSendReturnType`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        ListenableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
        future.addCallback(new ListenableFutureCallback<>() {
            @Override
            public void onSuccess(SendResult<String, String> result) {
                System.out.println(result.getRecordMetadata());
            }

            @Override
            public void onFailure(Throwable ex) {
                System.err.println(ex.getMessage());
            }
        });
    }
}
```

###### After
```java
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;

import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        CompletableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
        future.whenComplete((SendResult<String, String> result, Throwable ex) -> {
            if (ex == null) {
                System.out.println(result.getRecordMetadata());
            } else {
                System.err.println(ex.getMessage());
            }
        });
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,0 @@
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
-import org.springframework.util.concurrent.ListenableFuture;
-import org.springframework.util.concurrent.ListenableFutureCallback;

@@ -6,0 +4,2 @@
import org.springframework.util.concurrent.ListenableFutureCallback;

+import java.util.concurrent.CompletableFuture;
+
class Foo {
@@ -8,4 +8,3 @@
class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
-       ListenableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
-       future.addCallback(new ListenableFutureCallback<>() {
-           @Override
-           public void onSuccess(SendResult<String, String> result) {
+       CompletableFuture<SendResult<String,String>> future = kafkaOperations.send("topic", "key", "value");
+       future.whenComplete((SendResult<String, String> result, Throwable ex) -> {
+           if (ex == null) {
                System.out.println(result.getRecordMetadata());
@@ -13,4 +12,1 @@
            public void onSuccess(SendResult<String, String> result) {
                System.out.println(result.getRecordMetadata());
-           }
-
-           @Override
-           public void onFailure(Throwable ex) {
+           } else {
                System.err.println(ex.getMessage());
```
</TabItem>
</Tabs>

---

##### Example 4
`RemoveUsingCompletableFutureTest#usingCompletableFuture`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.core.KafkaOperations2;
import org.springframework.kafka.support.SendResult;
import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        KafkaOperations2<String, String> k2 = kafkaOperations.usingCompletableFuture();
    }
}
```

###### After
```java
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
import org.springframework.kafka.support.SendResult;
import java.util.concurrent.CompletableFuture;

class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
        KafkaOperations<String, String> k2 = kafkaOperations;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,0 @@
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.KafkaOperations;
-import org.springframework.kafka.core.KafkaOperations2;
import org.springframework.kafka.support.SendResult;
@@ -9,1 +8,1 @@
class Foo {
    void bar(KafkaOperations<String, String> kafkaOperations) {
-       KafkaOperations2<String, String> k2 = kafkaOperations.usingCompletableFuture();
+       KafkaOperations<String, String> k2 = kafkaOperations;
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.kafka.UpgradeSpringKafka_3_0"
  displayName="Migrate to Spring Kafka 3.0"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.kafka.UpgradeSpringKafka_3_0" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
