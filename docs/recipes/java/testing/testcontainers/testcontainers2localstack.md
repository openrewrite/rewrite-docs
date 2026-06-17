---
title: "Migrate removed `LocalStackContainer` members to Testcontainers 2.x"
sidebar_label: "Migrate removed `LocalStackContainer` members to Testcontainers 2.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate removed `LocalStackContainer` members to Testcontainers 2.x

**org.openrewrite.java.testing.testcontainers.Testcontainers2LocalStack**

_Testcontainers 2.x removed the nested `LocalStackContainer.Service` enum and the `getEndpointOverride(...)` method. Replace `LocalStackContainer.Service` constants with the equivalent service name strings and `getEndpointOverride(service)` with `getEndpoint()`, so code continues to compile against Testcontainers 2.x. This runs while the type is still `org.testcontainers.containers.localstack.LocalStackContainer`, before it is renamed._

## Recipe source

[GitHub: testcontainers.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/testcontainers.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

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

* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `API_GATEWAY`
  * literalValue: `"apigateway"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `EC2`
  * literalValue: `"ec2"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `KINESIS`
  * literalValue: `"kinesis"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `DYNAMODB`
  * literalValue: `"dynamodb"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `DYNAMODB_STREAMS`
  * literalValue: `"dynamodbstreams"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `S3`
  * literalValue: `"s3"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `FIREHOSE`
  * literalValue: `"firehose"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `LAMBDA`
  * literalValue: `"lambda"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `SNS`
  * literalValue: `"sns"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `SQS`
  * literalValue: `"sqs"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `REDSHIFT`
  * literalValue: `"redshift"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `SES`
  * literalValue: `"ses"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `ROUTE53`
  * literalValue: `"route53"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `CLOUDFORMATION`
  * literalValue: `"cloudformation"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `CLOUDWATCH`
  * literalValue: `"cloudwatch"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `SSM`
  * literalValue: `"ssm"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `SECRETSMANAGER`
  * literalValue: `"secretsmanager"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `STEPFUNCTIONS`
  * literalValue: `"stepfunctions"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `CLOUDWATCHLOGS`
  * literalValue: `"logs"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `STS`
  * literalValue: `"sts"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `IAM`
  * literalValue: `"iam"`
* [Replace constant with literal value](../../../java/replaceconstant)
  * owningType: `org.testcontainers.containers.localstack.LocalStackContainer$Service`
  * constantName: `KMS`
  * literalValue: `"kms"`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.testcontainers.containers.localstack.LocalStackContainer getEndpointOverride(..)`
  * newMethodName: `getEndpoint`
* [Delete method argument](../../../java/deletemethodargument)
  * methodPattern: `org.testcontainers.containers.localstack.LocalStackContainer getEndpoint(..)`
  * argumentIndex: `0`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.testcontainers.Testcontainers2LocalStack
displayName: Migrate removed `LocalStackContainer` members to Testcontainers 2.x
description: |
  Testcontainers 2.x removed the nested `LocalStackContainer.Service` enum and the `getEndpointOverride(...)` method. Replace `LocalStackContainer.Service` constants with the equivalent service name strings and `getEndpointOverride(service)` with `getEndpoint()`, so code continues to compile against Testcontainers 2.x. This runs while the type is still `org.testcontainers.containers.localstack.LocalStackContainer`, before it is renamed.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: API_GATEWAY
      literalValue: "apigateway"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: EC2
      literalValue: "ec2"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: KINESIS
      literalValue: "kinesis"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: DYNAMODB
      literalValue: "dynamodb"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: DYNAMODB_STREAMS
      literalValue: "dynamodbstreams"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: S3
      literalValue: "s3"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: FIREHOSE
      literalValue: "firehose"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: LAMBDA
      literalValue: "lambda"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: SNS
      literalValue: "sns"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: SQS
      literalValue: "sqs"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: REDSHIFT
      literalValue: "redshift"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: SES
      literalValue: "ses"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: ROUTE53
      literalValue: "route53"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: CLOUDFORMATION
      literalValue: "cloudformation"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: CLOUDWATCH
      literalValue: "cloudwatch"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: SSM
      literalValue: "ssm"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: SECRETSMANAGER
      literalValue: "secretsmanager"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: STEPFUNCTIONS
      literalValue: "stepfunctions"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: CLOUDWATCHLOGS
      literalValue: "logs"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: STS
      literalValue: "sts"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: IAM
      literalValue: "iam"
  - org.openrewrite.java.ReplaceConstant:
      owningType: org.testcontainers.containers.localstack.LocalStackContainer$Service
      constantName: KMS
      literalValue: "kms"
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.testcontainers.containers.localstack.LocalStackContainer getEndpointOverride(..)
      newMethodName: getEndpoint
  - org.openrewrite.java.DeleteMethodArgument:
      methodPattern: org.testcontainers.containers.localstack.LocalStackContainer getEndpoint(..)
      argumentIndex: 0

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to testcontainers-java 2.x](/recipes/java/testing/testcontainers/testcontainers2migration.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.testcontainers.Testcontainers2LocalStack"
  displayName="Migrate removed `LocalStackContainer` members to Testcontainers 2.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.Testcontainers2LocalStack" />

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
