---
sidebar_label: "Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2

**software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2**

_This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2._

### Tags

* [sdk](/reference/recipes-by-tag#sdk)
* [aws](/reference/recipes-by-tag#aws)

## Recipe source

[GitHub: search?type=code&q=software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add AWS SDK for Java v2 S3 Transfer Manager dependency if needed](../../../../software/amazon/awssdk/v2migration/addtransfermanagerdependency)
* [Add AWS SDK for Java v2 S3 Event Notification dependency if needed](../../../../software/amazon/awssdk/v2migration/adds3eventnotificationdependency)
* [Change v1 Maven/Gradle dependencies to v2](../../../../software/amazon/awssdk/v2migration/upgradesdkdependencies)
* [Add imports and comments to unsupported S3 transforms.](../../../../software/amazon/awssdk/v2migration/s3addimportsandcomments)
* [S3 Event Notification method to v2](../../../../software/amazon/awssdk/v2migration/s3eventnotificationmethodtov2)
* [Change S3 types to v2.](../../../../software/amazon/awssdk/v2migration/s3typestov2)
* [V1 S3Object to V2](../../../../software/amazon/awssdk/v2migration/s3streamingresponsetov2)
* [V1 S3 streaming requests to V2](../../../../software/amazon/awssdk/v2migration/s3streamingrequesttov2)
* [V1 S3 non-streaming requests to V2](../../../../software/amazon/awssdk/v2migration/s3nonstreamingrequesttov2)
* [Change S3 methods to v2.](../../../../software/amazon/awssdk/v2migration/s3methodstov2)
* [Change S3EventNotification methods to v2.](../../../../software/amazon/awssdk/v2migration/s3eventnotificationmethodstov2)
* [S3 POJOs to V2](../../../../software/amazon/awssdk/v2migration/s3pojotov2)
* [Change S3 method constructors to fluent builder calls](../../../../software/amazon/awssdk/v2migration/s3methodsconstructortofluent)
* [Convert v1 AmazonS3URI to v2 S3Uri](../../../../software/amazon/awssdk/v2migration/s3uritov2)
* [Change v1 enum getters to v2](../../../../software/amazon/awssdk/v2migration/enumgetterstov2)
* [Change SDK TransferManager types from v1 to v2](../../../../software/amazon/awssdk/v2migration/changetransfermanagertypes)
* [Change SDK S3EventNotification types from v1 to v2](../../../../software/amazon/awssdk/v2migration/changes3eventnotificationtypes)
* [Change AWS SDK for Java v1 types to v2 equivalents](../../../../software/amazon/awssdk/v2migration/changesdktype)
* [SDK Exceptions Methods to V2](../../../../software/amazon/awssdk/v2migration/sdkexceptiontov2)
* [Change SDK core types from v1 to v2](../../../../software/amazon/awssdk/v2migration/changesdkcoretypes)
* [V1 client builder variations to builder()](../../../../software/amazon/awssdk/v2migration/v1buildervariationstov2builder)
* [Change new objects creation to Builder pattern](../../../../software/amazon/awssdk/v2migration/newclasstobuilderpattern)
* [Transform 'new' expressions to static factory methods](../../../../software/amazon/awssdk/v2migration/newclasstostaticfactory)
* [V1 Getter to V2](../../../../software/amazon/awssdk/v2migration/v1gettertov2)
* [Move HTTP settings from the ClientOverrideConfiguration to ApacheHttpClient for sync and NettyNioAsyncHttpClient for async](../../../../software/amazon/awssdk/v2migration/httpsettingstohttpclient)
* [Wrap the region string provided on the SDK client builder with Region.of](../../../../software/amazon/awssdk/v2migration/wrapsdkclientbuilderregionstr)
* [V1 Enum Casing to V2](../../../../software/amazon/awssdk/v2migration/enumcasingtov2)
* [Convert SdkBytes to ByteBuffer](../../../../software/amazon/awssdk/v2migration/sdkbytestobytebuffer)
* [Convert ByteBuffer to SdkBytes](../../../../software/amazon/awssdk/v2migration/bytebuffertosdkbytes)
* [Convert Date to Instant](../../../../software/amazon/awssdk/v2migration/datetoinstant)
* [V1 S3 non-streaming requests to V2](../../../../software/amazon/awssdk/v2migration/s3nonstreamingrequesttov2complex)
* [V1 S3 PutObjectRequest, AmazonS3.putObject(PutObjectRequest), and TransferManager.upload(PutObjectRequest) to V2](../../../../software/amazon/awssdk/v2migration/s3putobjectrequesttov2)
* [Convert V1 setters to V2 toBuilder setters](../../../../software/amazon/awssdk/v2migration/setterstobuilderv2)
* [Add imports and comments to unsupported S3 transfer manager transforms.](../../../../software/amazon/awssdk/v2migration/s3tmaddcomments)
* [Change TransferManager simple methods to v2.](../../../../software/amazon/awssdk/v2migration/changetransfermanagersimplemethods)
* [Transfer Manager Methods to V2](../../../../software/amazon/awssdk/v2migration/transfermanagermethodstov2)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2
displayName: Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2
description: |
  This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2.
tags:
  - sdk
  - aws
recipeList:
  - software.amazon.awssdk.v2migration.AddTransferManagerDependency
  - software.amazon.awssdk.v2migration.AddS3EventNotificationDependency
  - software.amazon.awssdk.v2migration.UpgradeSdkDependencies
  - software.amazon.awssdk.v2migration.S3AddImportsAndComments
  - software.amazon.awssdk.v2migration.S3EventNotificationMethodToV2
  - software.amazon.awssdk.v2migration.S3TypesToV2
  - software.amazon.awssdk.v2migration.S3StreamingResponseToV2
  - software.amazon.awssdk.v2migration.S3StreamingRequestToV2
  - software.amazon.awssdk.v2migration.S3NonStreamingRequestToV2
  - software.amazon.awssdk.v2migration.S3MethodsToV2
  - software.amazon.awssdk.v2migration.S3EventNotificationMethodsToV2
  - software.amazon.awssdk.v2migration.S3PojoToV2
  - software.amazon.awssdk.v2migration.S3MethodsConstructorToFluent
  - software.amazon.awssdk.v2migration.S3UriToV2
  - software.amazon.awssdk.v2migration.EnumGettersToV2
  - software.amazon.awssdk.v2migration.ChangeTransferManagerTypes
  - software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes
  - software.amazon.awssdk.v2migration.ChangeSdkType
  - software.amazon.awssdk.v2migration.SdkExceptionToV2
  - software.amazon.awssdk.v2migration.ChangeSdkCoreTypes
  - software.amazon.awssdk.v2migration.V1BuilderVariationsToV2Builder
  - software.amazon.awssdk.v2migration.NewClassToBuilderPattern
  - software.amazon.awssdk.v2migration.NewClassToStaticFactory
  - software.amazon.awssdk.v2migration.V1GetterToV2
  - software.amazon.awssdk.v2migration.HttpSettingsToHttpClient
  - software.amazon.awssdk.v2migration.WrapSdkClientBuilderRegionStr
  - software.amazon.awssdk.v2migration.EnumCasingToV2
  - software.amazon.awssdk.v2migration.SdkBytesToByteBuffer
  - software.amazon.awssdk.v2migration.ByteBufferToSdkBytes
  - software.amazon.awssdk.v2migration.DateToInstant
  - software.amazon.awssdk.v2migration.S3NonStreamingRequestToV2Complex
  - software.amazon.awssdk.v2migration.S3PutObjectRequestToV2
  - software.amazon.awssdk.v2migration.SettersToBuilderV2
  - software.amazon.awssdk.v2migration.S3TmAddComments
  - software.amazon.awssdk.v2migration.ChangeTransferManagerSimpleMethods
  - software.amazon.awssdk.v2migration.TransferManagerMethodsToV2

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2")
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
            <recipe>software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AwsSdkJavaV1ToV2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2" />

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
