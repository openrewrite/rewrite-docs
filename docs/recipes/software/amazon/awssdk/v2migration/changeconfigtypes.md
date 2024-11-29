---
sidebar_label: "Change config related classes from v1 to v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change config related classes from v1 to v2

**software.amazon.awssdk.v2migration.ChangeConfigTypes**

_Change config related classes from v1 to v2._

## Recipe source

[GitHub](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.ChangeConfigTypes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withRequestTimeout(int)`
  * newMethodName: `withApiCallAttemptTimeout`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration setRequestTimeout(int)`
  * newMethodName: `withApiCallAttemptTimeout`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withApiCallAttemptTimeout(int)`
  * timeUnit: `MILLISECONDS`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withClientExecutionTimeout(int)`
  * newMethodName: `withApiCallTimeout`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration setClientExecutionTimeout(int)`
  * newMethodName: `withApiCallTimeout`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withApiCallTimeout(int)`
  * timeUnit: `MILLISECONDS`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withConnectionTimeout(int)`
  * timeUnit: `MILLISECONDS`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withSocketTimeout(int)`
  * timeUnit: `MILLISECONDS`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withConnectionMaxIdleMillis(long)`
  * newMethodName: `withConnectionMaxIdleTime`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withConnectionMaxIdleTime(long)`
  * timeUnit: `MILLISECONDS`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withConnectionTTL(long)`
  * newMethodName: `withConnectionTimeToLive`
* [Convert the method parameter from numeric type to duration](../../../../software/amazon/awssdk/v2migration/numbertoduration)
  * methodPattern: `com.amazonaws.ClientConfiguration withConnectionTimeToLive(long)`
  * timeUnit: `MILLISECONDS`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withRetryMode(..)`
  * newMethodName: `withRetryPolicy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration setRetryMode(..)`
  * newMethodName: `withRetryPolicy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration withHeader(String, String)`
  * newMethodName: `withPutHeader`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.ClientConfiguration setHeader(String, String)`
  * newMethodName: `withPutHeader`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setMaxConsecutiveRetriesBeforeThrottling(int)`
  * comment: `maxConsecutiveRetriesBeforeThrottling is deprecated and not supported in v2. Consider removing it or using a custom RetryPolicy.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withMaxConsecutiveRetriesBeforeThrottling(int)`
  * comment: `maxConsecutiveRetriesBeforeThrottling is deprecated and not supported in v2. Consider removing it or using a custom RetryPolicy.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setCacheResponseMetadata(boolean)`
  * comment: `cacheResponseMetadata is deprecated and not supported in v2. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withCacheResponseMetadata(boolean)`
  * comment: `cacheResponseMetadata is deprecated and not supported in v2. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withDisableHostPrefixInjection(boolean)`
  * comment: `disableHostPrefixInjection is deprecated and not supported removed in v2. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setDisableHostPrefixInjection(boolean)`
  * comment: `disableHostPrefixInjection is deprecated and not supported in v2. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setDnsResolver(..)`
  * comment: `dnsResolver is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withDnsResolver(..)`
  * comment: `dnsResolver is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setGzip(boolean)`
  * comment: `gzip is not supported in v2 tracking in https://github.com/aws/aws-sdk-java-v2/issues/866. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withGzip(boolean)`
  * comment: `gzip is not supported in v2 tracking in https://github.com/aws/aws-sdk-java-v2/issues/866. Consider removing it.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setLocalAddress(..)`
  * comment: `localAddress is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withLocalAddress(..)`
  * comment: `localAddress is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setSecureRandom(.*)`
  * comment: `secureRandom is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withSecureRandom(.*)`
  * comment: `secureRandom is supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setUseExpectContinue(boolean)`
  * comment: `useExpectContinue is removed in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withUseExpectContinue(boolean)`
  * comment: `useExpectContinue is removed in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withProtocol(.*)`
  * comment: `protocol is deprecated and not supported in v2. Consider using endpointOverride to specify HTTP scheme.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setProtocol(.*)`
  * comment: `protocol is deprecated and not supported in v2. Consider using endpointOverride to specify HTTP scheme.`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withUserAgent(String)`
  * comment: `userAgent override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setUserAgent(String)`
  * comment: `userAgent override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withUserAgentPrefix(String)`
  * comment: `userAgentPrefix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setUserAgentPrefix(String)`
  * comment: `userAgentPrefix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration withUserAgentSuffix(String)`
  * comment: `userAgentSuffix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Add a comment to a method](../../../../software/amazon/awssdk/v2migration/addcommenttomethod)
  * methodPattern: `com.amazonaws.ClientConfiguration setUserAgentSuffix(String)`
  * comment: `userAgentSuffix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.ClientConfiguration`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.core.client.config.ClientOverrideConfiguration`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.retry.RetryMode`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.core.retry.RetryMode`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.ChangeConfigTypes
displayName: Change config related classes from v1 to v2
description: Change config related classes from v1 to v2.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withRequestTimeout(int)
      newMethodName: withApiCallAttemptTimeout
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration setRequestTimeout(int)
      newMethodName: withApiCallAttemptTimeout
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withApiCallAttemptTimeout(int)
      timeUnit: MILLISECONDS
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withClientExecutionTimeout(int)
      newMethodName: withApiCallTimeout
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration setClientExecutionTimeout(int)
      newMethodName: withApiCallTimeout
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withApiCallTimeout(int)
      timeUnit: MILLISECONDS
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withConnectionTimeout(int)
      timeUnit: MILLISECONDS
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withSocketTimeout(int)
      timeUnit: MILLISECONDS
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withConnectionMaxIdleMillis(long)
      newMethodName: withConnectionMaxIdleTime
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withConnectionMaxIdleTime(long)
      timeUnit: MILLISECONDS
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withConnectionTTL(long)
      newMethodName: withConnectionTimeToLive
  - software.amazon.awssdk.v2migration.NumberToDuration:
      methodPattern: com.amazonaws.ClientConfiguration withConnectionTimeToLive(long)
      timeUnit: MILLISECONDS
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withRetryMode(..)
      newMethodName: withRetryPolicy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration setRetryMode(..)
      newMethodName: withRetryPolicy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration withHeader(String, String)
      newMethodName: withPutHeader
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.ClientConfiguration setHeader(String, String)
      newMethodName: withPutHeader
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setMaxConsecutiveRetriesBeforeThrottling(int)
      comment: maxConsecutiveRetriesBeforeThrottling is deprecated and not supported in v2. Consider removing it or using a custom RetryPolicy.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withMaxConsecutiveRetriesBeforeThrottling(int)
      comment: maxConsecutiveRetriesBeforeThrottling is deprecated and not supported in v2. Consider removing it or using a custom RetryPolicy.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setCacheResponseMetadata(boolean)
      comment: cacheResponseMetadata is deprecated and not supported in v2. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withCacheResponseMetadata(boolean)
      comment: cacheResponseMetadata is deprecated and not supported in v2. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withDisableHostPrefixInjection(boolean)
      comment: disableHostPrefixInjection is deprecated and not supported removed in v2. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setDisableHostPrefixInjection(boolean)
      comment: disableHostPrefixInjection is deprecated and not supported in v2. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setDnsResolver(..)
      comment: dnsResolver is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withDnsResolver(..)
      comment: dnsResolver is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setGzip(boolean)
      comment: gzip is not supported in v2 tracking in https://github.com/aws/aws-sdk-java-v2/issues/866. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withGzip(boolean)
      comment: gzip is not supported in v2 tracking in https://github.com/aws/aws-sdk-java-v2/issues/866. Consider removing it.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setLocalAddress(..)
      comment: localAddress is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withLocalAddress(..)
      comment: localAddress is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setSecureRandom(.*)
      comment: secureRandom is not supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withSecureRandom(.*)
      comment: secureRandom is supported in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setUseExpectContinue(boolean)
      comment: useExpectContinue is removed in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withUseExpectContinue(boolean)
      comment: useExpectContinue is removed in v2. Please submit a feature request https://github.com/aws/aws-sdk-java-v2/issues
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withProtocol(.*)
      comment: protocol is deprecated and not supported in v2. Consider using endpointOverride to specify HTTP scheme.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setProtocol(.*)
      comment: protocol is deprecated and not supported in v2. Consider using endpointOverride to specify HTTP scheme.
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withUserAgent(String)
      comment: userAgent override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setUserAgent(String)
      comment: userAgent override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withUserAgentPrefix(String)
      comment: userAgentPrefix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setUserAgentPrefix(String)
      comment: userAgentPrefix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration withUserAgentSuffix(String)
      comment: userAgentSuffix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - software.amazon.awssdk.v2migration.AddCommentToMethod:
      methodPattern: com.amazonaws.ClientConfiguration setUserAgentSuffix(String)
      comment: userAgentSuffix override is a request-level config in v2. See https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/core/RequestOverrideConfiguration.Builder.html#addApiName(software.amazon.awssdk.core.ApiName).
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.ClientConfiguration
      newFullyQualifiedTypeName: software.amazon.awssdk.core.client.config.ClientOverrideConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.retry.RetryMode
      newFullyQualifiedTypeName: software.amazon.awssdk.core.retry.RetryMode

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:{{VERSION_REWRITE_THIRD_PARTY}}` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("software.amazon.awssdk.v2migration.ChangeConfigTypes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("software.amazon.awssdk.v2migration.ChangeConfigTypes")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>software.amazon.awssdk.v2migration.ChangeConfigTypes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=software.amazon.awssdk.v2migration.ChangeConfigTypes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeConfigTypes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.ChangeConfigTypes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

