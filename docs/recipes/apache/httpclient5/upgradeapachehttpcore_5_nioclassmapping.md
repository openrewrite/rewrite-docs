---
sidebar_label: "Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x

**org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore\_5\_NioClassMapping**

_Mapping of all the compatible classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x._

## Recipe source

[GitHub: apache-httpclient-5.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-httpclient-5.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate from httpcore-nio to ApacheHttpClient 5.x core dependency](../../apache/httpclient5/upgradeapachehttpcoreniodependencies)
* [Migrate to Apache HttpCore Nio Util Classes to Apache HttpCore 5.x](../../apache/httpclient5/upgradeapachehttpcore_5_nioutilmapping)
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.http.impl.nio.reactor.IOReactorConfig`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.reactor.IOReactorConfig`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig getSelectInterval()`
  * newReturnType: `org.apache.hc.core5.util.TimeValue`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig getShutdownGracePeriod()`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig isInterestOpQueued()`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig getSoTimeout()`
  * newReturnType: `org.apache.hc.core5.util.Timeout`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig getSoLinger()`
  * newReturnType: `org.apache.hc.core5.util.TimeValue`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig getConnectTimeout()`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.http.impl.nio.reactor.IOReactorConfig.Builder`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.reactor.IOReactorConfig.Builder`
* [Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations](../../apache/httpclient5/changeargumenttotimevalue)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setSelectInterval(long)`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setShutdownGracePeriod(long)`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setInterestOpQueued(boolean)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setSoTimeout(int)`
* [Adds a TimeUnit argument to the matched method invocations](../../apache/httpclient5/addtimeunitargument)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setSoLinger(int)`
* [Remove method invocations](../../java/removemethodinvocations)
  * methodPattern: `org.apache.hc.core5.reactor.IOReactorConfig.Builder setConnectTimeout(int)`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.http.nio.reactor.ConnectingIOReactor`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.reactor.ConnectionInitiator`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.http.impl.nio.reactor.DefaultConnectingIOReactor`
  * newFullyQualifiedTypeName: `org.apache.hc.core5.reactor.DefaultConnectingIOReactor`
* [Add comment to import statement](../../java/addcommenttoimport)
  * comment: `NByteArrayEntity replaced with BasicAsyncEntityProducer - constructor and usage differs, manual migration required`
  * typePattern: `org.apache.http.nio.entity.NByteArrayEntity`
* [Add comment to import statement](../../java/addcommenttoimport)
  * comment: `NStringEntity replaced with StringAsyncEntityProducer - constructor and usage differs, manual migration required`
  * typePattern: `org.apache.http.nio.entity.NStringEntity`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioClassMapping
displayName: Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x
description: |
  Mapping of all the compatible classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x.
recipeList:
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpCoreNioDependencies
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioUtilMapping
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.impl.nio.reactor.IOReactorConfig
      newFullyQualifiedTypeName: org.apache.hc.core5.reactor.IOReactorConfig
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig getSelectInterval()
      newReturnType: org.apache.hc.core5.util.TimeValue
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig getShutdownGracePeriod()
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig isInterestOpQueued()
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig getSoTimeout()
      newReturnType: org.apache.hc.core5.util.Timeout
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig getSoLinger()
      newReturnType: org.apache.hc.core5.util.TimeValue
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig getConnectTimeout()
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.impl.nio.reactor.IOReactorConfig.Builder
      newFullyQualifiedTypeName: org.apache.hc.core5.reactor.IOReactorConfig.Builder
  - org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setSelectInterval(long)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setShutdownGracePeriod(long)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setInterestOpQueued(boolean)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setSoTimeout(int)
  - org.openrewrite.apache.httpclient5.AddTimeUnitArgument:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setSoLinger(int)
  - org.openrewrite.java.RemoveMethodInvocations:
      methodPattern: org.apache.hc.core5.reactor.IOReactorConfig.Builder setConnectTimeout(int)
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.nio.reactor.ConnectingIOReactor
      newFullyQualifiedTypeName: org.apache.hc.core5.reactor.ConnectionInitiator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.http.impl.nio.reactor.DefaultConnectingIOReactor
      newFullyQualifiedTypeName: org.apache.hc.core5.reactor.DefaultConnectingIOReactor
  - org.openrewrite.java.AddCommentToImport:
      comment: NByteArrayEntity replaced with BasicAsyncEntityProducer - constructor and usage differs, manual migration required
      typePattern: org.apache.http.nio.entity.NByteArrayEntity
  - org.openrewrite.java.AddCommentToImport:
      comment: NStringEntity replaced with StringAsyncEntityProducer - constructor and usage differs, manual migration required
      typePattern: org.apache.http.nio.entity.NStringEntity

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to ApacheHttpClient 5.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5.md)

## Examples
##### Example 1
`MigrateApacheHttpAsyncClientTest#migratesPoolingNHttpClientConnectionManagerToBuilder`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.impl.nio.conn.PoolingNHttpClientConnectionManager;
import org.apache.http.nio.reactor.ConnectingIOReactor;

class A {
    void method(ConnectingIOReactor ioReactor) {
        PoolingNHttpClientConnectionManager cm = new PoolingNHttpClientConnectionManager(ioReactor);
    }
}
```

###### After
```java
import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManager;
import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManagerBuilder;
import org.apache.hc.core5.reactor.ConnectionInitiator;

class A {
    void method(ConnectionInitiator ioReactor) {
        PoolingAsyncClientConnectionManager cm = PoolingAsyncClientConnectionManagerBuilder.create().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.http.impl.nio.conn.PoolingNHttpClientConnectionManager;
-import org.apache.http.nio.reactor.ConnectingIOReactor;
+import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManager;
+import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManagerBuilder;
+import org.apache.hc.core5.reactor.ConnectionInitiator;

@@ -5,2 +6,2 @@

class A {
-   void method(ConnectingIOReactor ioReactor) {
-       PoolingNHttpClientConnectionManager cm = new PoolingNHttpClientConnectionManager(ioReactor);
+   void method(ConnectionInitiator ioReactor) {
+       PoolingAsyncClientConnectionManager cm = PoolingAsyncClientConnectionManagerBuilder.create().build();
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateApacheHttpCoreNioTest#migratesIOReactorConfig`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.impl.nio.reactor.IOReactorConfig;
import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;

class A {
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
        builder.setSelectInterval(500);
        builder.setShutdownGracePeriod(400);
        builder.setInterestOpQueued(true);
        builder.setSoTimeout(300);
        builder.setSoLinger(200);
        builder.setConnectTimeout(100);
        IOReactorConfig ioReactorConfig = builder.build();
        long selectInterval = ioReactorConfig.getSelectInterval();
        ioReactorConfig.getShutdownGracePeriod();
        ioReactorConfig.isInterestOpQueued();
        int soTimeout = ioReactorConfig.getSoTimeout();
        int soLinger = ioReactorConfig.getSoLinger();
        ioReactorConfig.getConnectTimeout();
    }
}
```

###### After
```java
import org.apache.hc.core5.reactor.IOReactorConfig;
import org.apache.hc.core5.reactor.IOReactorConfig.Builder;
import org.apache.hc.core5.util.TimeValue;
import org.apache.hc.core5.util.Timeout;

import java.util.concurrent.TimeUnit;

class A {
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
        builder.setSelectInterval(TimeValue.of(500, TimeUnit.MILLISECONDS));
        builder.setSoTimeout(300, TimeUnit.MILLISECONDS);
        builder.setSoLinger(200, TimeUnit.MILLISECONDS);
        IOReactorConfig ioReactorConfig = builder.build();
        TimeValue selectInterval = ioReactorConfig.getSelectInterval();
        Timeout soTimeout = ioReactorConfig.getSoTimeout();
        TimeValue soLinger = ioReactorConfig.getSoLinger();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,4 @@
-import org.apache.http.impl.nio.reactor.IOReactorConfig;
-import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;
+import org.apache.hc.core5.reactor.IOReactorConfig;
+import org.apache.hc.core5.reactor.IOReactorConfig.Builder;
+import org.apache.hc.core5.util.TimeValue;
+import org.apache.hc.core5.util.Timeout;

@@ -4,0 +6,2 @@
import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;

+import java.util.concurrent.TimeUnit;
+
class A {
@@ -7,6 +11,3 @@
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
-       builder.setSelectInterval(500);
-       builder.setShutdownGracePeriod(400);
-       builder.setInterestOpQueued(true);
-       builder.setSoTimeout(300);
-       builder.setSoLinger(200);
-       builder.setConnectTimeout(100);
+       builder.setSelectInterval(TimeValue.of(500, TimeUnit.MILLISECONDS));
+       builder.setSoTimeout(300, TimeUnit.MILLISECONDS);
+       builder.setSoLinger(200, TimeUnit.MILLISECONDS);
        IOReactorConfig ioReactorConfig = builder.build();
@@ -14,6 +15,3 @@
        builder.setConnectTimeout(100);
        IOReactorConfig ioReactorConfig = builder.build();
-       long selectInterval = ioReactorConfig.getSelectInterval();
-       ioReactorConfig.getShutdownGracePeriod();
-       ioReactorConfig.isInterestOpQueued();
-       int soTimeout = ioReactorConfig.getSoTimeout();
-       int soLinger = ioReactorConfig.getSoLinger();
-       ioReactorConfig.getConnectTimeout();
+       TimeValue selectInterval = ioReactorConfig.getSelectInterval();
+       Timeout soTimeout = ioReactorConfig.getSoTimeout();
+       TimeValue soLinger = ioReactorConfig.getSoLinger();
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`MigrateApacheHttpAsyncClientTest#migratesPoolingNHttpClientConnectionManagerToBuilder`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.impl.nio.conn.PoolingNHttpClientConnectionManager;
import org.apache.http.nio.reactor.ConnectingIOReactor;

class A {
    void method(ConnectingIOReactor ioReactor) {
        PoolingNHttpClientConnectionManager cm = new PoolingNHttpClientConnectionManager(ioReactor);
    }
}
```

###### After
```java
import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManager;
import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManagerBuilder;
import org.apache.hc.core5.reactor.ConnectionInitiator;

class A {
    void method(ConnectionInitiator ioReactor) {
        PoolingAsyncClientConnectionManager cm = PoolingAsyncClientConnectionManagerBuilder.create().build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,3 @@
-import org.apache.http.impl.nio.conn.PoolingNHttpClientConnectionManager;
-import org.apache.http.nio.reactor.ConnectingIOReactor;
+import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManager;
+import org.apache.hc.client5.http.impl.nio.PoolingAsyncClientConnectionManagerBuilder;
+import org.apache.hc.core5.reactor.ConnectionInitiator;

@@ -5,2 +6,2 @@

class A {
-   void method(ConnectingIOReactor ioReactor) {
-       PoolingNHttpClientConnectionManager cm = new PoolingNHttpClientConnectionManager(ioReactor);
+   void method(ConnectionInitiator ioReactor) {
+       PoolingAsyncClientConnectionManager cm = PoolingAsyncClientConnectionManagerBuilder.create().build();
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`MigrateApacheHttpCoreNioTest#migratesIOReactorConfig`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.http.impl.nio.reactor.IOReactorConfig;
import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;

class A {
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
        builder.setSelectInterval(500);
        builder.setShutdownGracePeriod(400);
        builder.setInterestOpQueued(true);
        builder.setSoTimeout(300);
        builder.setSoLinger(200);
        builder.setConnectTimeout(100);
        IOReactorConfig ioReactorConfig = builder.build();
        long selectInterval = ioReactorConfig.getSelectInterval();
        ioReactorConfig.getShutdownGracePeriod();
        ioReactorConfig.isInterestOpQueued();
        int soTimeout = ioReactorConfig.getSoTimeout();
        int soLinger = ioReactorConfig.getSoLinger();
        ioReactorConfig.getConnectTimeout();
    }
}
```

###### After
```java
import org.apache.hc.core5.reactor.IOReactorConfig;
import org.apache.hc.core5.reactor.IOReactorConfig.Builder;
import org.apache.hc.core5.util.TimeValue;
import org.apache.hc.core5.util.Timeout;

import java.util.concurrent.TimeUnit;

class A {
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
        builder.setSelectInterval(TimeValue.of(500, TimeUnit.MILLISECONDS));
        builder.setSoTimeout(300, TimeUnit.MILLISECONDS);
        builder.setSoLinger(200, TimeUnit.MILLISECONDS);
        IOReactorConfig ioReactorConfig = builder.build();
        TimeValue selectInterval = ioReactorConfig.getSelectInterval();
        Timeout soTimeout = ioReactorConfig.getSoTimeout();
        TimeValue soLinger = ioReactorConfig.getSoLinger();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,4 @@
-import org.apache.http.impl.nio.reactor.IOReactorConfig;
-import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;
+import org.apache.hc.core5.reactor.IOReactorConfig;
+import org.apache.hc.core5.reactor.IOReactorConfig.Builder;
+import org.apache.hc.core5.util.TimeValue;
+import org.apache.hc.core5.util.Timeout;

@@ -4,0 +6,2 @@
import org.apache.http.impl.nio.reactor.IOReactorConfig.Builder;

+import java.util.concurrent.TimeUnit;
+
class A {
@@ -7,6 +11,3 @@
    void method() {
        IOReactorConfig.Builder builder = new IOReactorConfig.Builder();
-       builder.setSelectInterval(500);
-       builder.setShutdownGracePeriod(400);
-       builder.setInterestOpQueued(true);
-       builder.setSoTimeout(300);
-       builder.setSoLinger(200);
-       builder.setConnectTimeout(100);
+       builder.setSelectInterval(TimeValue.of(500, TimeUnit.MILLISECONDS));
+       builder.setSoTimeout(300, TimeUnit.MILLISECONDS);
+       builder.setSoLinger(200, TimeUnit.MILLISECONDS);
        IOReactorConfig ioReactorConfig = builder.build();
@@ -14,6 +15,3 @@
        builder.setConnectTimeout(100);
        IOReactorConfig ioReactorConfig = builder.build();
-       long selectInterval = ioReactorConfig.getSelectInterval();
-       ioReactorConfig.getShutdownGracePeriod();
-       ioReactorConfig.isInterestOpQueued();
-       int soTimeout = ioReactorConfig.getSoTimeout();
-       int soLinger = ioReactorConfig.getSoLinger();
-       ioReactorConfig.getConnectTimeout();
+       TimeValue selectInterval = ioReactorConfig.getSelectInterval();
+       Timeout soTimeout = ioReactorConfig.getSoTimeout();
+       TimeValue soLinger = ioReactorConfig.getSoLinger();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioClassMapping"
  displayName="Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioClassMapping" />

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
