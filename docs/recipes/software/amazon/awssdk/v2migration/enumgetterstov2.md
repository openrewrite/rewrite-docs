---
sidebar_label: "Change v1 enum getters to v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change v1 enum getters to v2

**software.amazon.awssdk.v2migration.EnumGettersToV2**

_Change v1 enum getters to v2._

## Recipe source

[GitHub](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.EnumGettersToV2), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.12.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.12.1

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.CreateQueueRequest getAttributes()`
  * newMethodName: `attributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.GetQueueAttributesRequest getAttributeNames()`
  * newMethodName: `attributeNamesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.GetQueueAttributesResult getAttributes()`
  * newMethodName: `attributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.Message getAttributes()`
  * newMethodName: `attributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.ReceiveMessageRequest getAttributeNames()`
  * newMethodName: `attributeNamesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.ReceiveMessageRequest getMessageSystemAttributeNames()`
  * newMethodName: `messageSystemAttributeNamesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.SendMessageBatchRequestEntry getMessageSystemAttributes()`
  * newMethodName: `messageSystemAttributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.SendMessageRequest getMessageSystemAttributes()`
  * newMethodName: `messageSystemAttributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sqs.model.SetQueueAttributesRequest getAttributes()`
  * newMethodName: `attributesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sns.model.CreateSMSSandboxPhoneNumberInput getLanguageCode()`
  * newMethodName: `languageCodeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sns.model.PhoneNumberInformation getRouteType()`
  * newMethodName: `routeTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sns.model.SMSSandboxPhoneNumber getStatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.sns.model.PhoneNumberInformation getNumberCapabilities()`
  * newMethodName: `numberCapabilitiesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.AttributeDefinition getAttributeType()`
  * newMethodName: `attributeTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.AttributeValueUpdate getAction()`
  * newMethodName: `actionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BackupDetails getBackupStatus()`
  * newMethodName: `backupStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BackupDetails getBackupType()`
  * newMethodName: `backupTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BackupSummary getBackupStatus()`
  * newMethodName: `backupStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BackupSummary getBackupType()`
  * newMethodName: `backupTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchExecuteStatementInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchGetItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchStatementError getCode()`
  * newMethodName: `codeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchStatementRequest getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchWriteItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BatchWriteItemInput getReturnItemCollectionMetrics()`
  * newMethodName: `returnItemCollectionMetricsAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.BillingModeSummary getBillingMode()`
  * newMethodName: `billingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.Condition getComparisonOperator()`
  * newMethodName: `comparisonOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ConditionCheck getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ContinuousBackupsDescription getContinuousBackupsStatus()`
  * newMethodName: `continuousBackupsStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ContributorInsightsSummary getContributorInsightsStatus()`
  * newMethodName: `contributorInsightsStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.CreateReplicationGroupMemberAction getTableClassOverride()`
  * newMethodName: `tableClassOverrideAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.CreateTableInput getBillingMode()`
  * newMethodName: `billingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.CreateTableInput getTableClass()`
  * newMethodName: `tableClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.Delete getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DeleteItemInput getConditionalOperator()`
  * newMethodName: `conditionalOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnValues()`
  * newMethodName: `returnValuesAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnItemCollectionMetrics()`
  * newMethodName: `returnItemCollectionMetricsAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.DescribeContributorInsightsOutput getContributorInsightsStatus()`
  * newMethodName: `contributorInsightsStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.EnableKinesisStreamingConfiguration getApproximateCreationDateTimePrecision()`
  * newMethodName: `approximateCreationDateTimePrecisionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExecuteStatementInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExecuteStatementInput getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExecuteTransactionInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExpectedAttributeValue getComparisonOperator()`
  * newMethodName: `comparisonOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportDescription getExportStatus()`
  * newMethodName: `exportStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportDescription getS3SseAlgorithm()`
  * newMethodName: `s3SseAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportDescription getExportFormat()`
  * newMethodName: `exportFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportDescription getExportType()`
  * newMethodName: `exportTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportSummary getExportStatus()`
  * newMethodName: `exportStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportSummary getExportType()`
  * newMethodName: `exportTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getS3SseAlgorithm()`
  * newMethodName: `s3SseAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getExportFormat()`
  * newMethodName: `exportFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getExportType()`
  * newMethodName: `exportTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.GetItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.GlobalSecondaryIndexDescription getIndexStatus()`
  * newMethodName: `indexStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.GlobalTableDescription getGlobalTableStatus()`
  * newMethodName: `globalTableStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportSummary getImportStatus()`
  * newMethodName: `importStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportSummary getInputFormat()`
  * newMethodName: `inputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportTableDescription getImportStatus()`
  * newMethodName: `importStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportTableDescription getInputFormat()`
  * newMethodName: `inputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportTableDescription getInputCompressionType()`
  * newMethodName: `inputCompressionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportTableInput getInputFormat()`
  * newMethodName: `inputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ImportTableInput getInputCompressionType()`
  * newMethodName: `inputCompressionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.IncrementalExportSpecification getExportViewType()`
  * newMethodName: `exportViewTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.KeySchemaElement getKeyType()`
  * newMethodName: `keyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.KinesisDataStreamDestination getDestinationStatus()`
  * newMethodName: `destinationStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.KinesisDataStreamDestination getApproximateCreationDateTimePrecision()`
  * newMethodName: `approximateCreationDateTimePrecisionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.KinesisStreamingDestinationOutput getDestinationStatus()`
  * newMethodName: `destinationStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ListBackupsInput getBackupType()`
  * newMethodName: `backupTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ParameterizedStatement getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PointInTimeRecoveryDescription getPointInTimeRecoveryStatus()`
  * newMethodName: `pointInTimeRecoveryStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.Projection getProjectionType()`
  * newMethodName: `projectionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.Put getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PutItemInput getReturnValues()`
  * newMethodName: `returnValuesAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PutItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PutItemInput getReturnItemCollectionMetrics()`
  * newMethodName: `returnItemCollectionMetricsAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PutItemInput getConditionalOperator()`
  * newMethodName: `conditionalOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.PutItemInput getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.QueryInput getSelect()`
  * newMethodName: `selectAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.QueryInput getConditionalOperator()`
  * newMethodName: `conditionalOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.QueryInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaAutoScalingDescription getReplicaStatus()`
  * newMethodName: `replicaStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaDescription getReplicaStatus()`
  * newMethodName: `replicaStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaGlobalSecondaryIndexAutoScalingDescription getIndexStatus()`
  * newMethodName: `indexStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaGlobalSecondaryIndexSettingsDescription getIndexStatus()`
  * newMethodName: `indexStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaSettingsDescription getReplicaStatus()`
  * newMethodName: `replicaStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ReplicaSettingsUpdate getReplicaTableClass()`
  * newMethodName: `replicaTableClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.RestoreTableFromBackupInput getBillingModeOverride()`
  * newMethodName: `billingModeOverrideAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.RestoreTableToPointInTimeInput getBillingModeOverride()`
  * newMethodName: `billingModeOverrideAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.SSEDescription getStatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.SSEDescription getSSEType()`
  * newMethodName: `sSETypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.SSESpecification getSSEType()`
  * newMethodName: `sSETypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ScanInput getSelect()`
  * newMethodName: `selectAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ScanInput getConditionalOperator()`
  * newMethodName: `conditionalOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.ScanInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.SourceTableDetails getBillingMode()`
  * newMethodName: `billingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.StreamSpecification getStreamViewType()`
  * newMethodName: `streamViewTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TableAutoScalingDescription getTableStatus()`
  * newMethodName: `tableStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TableClassSummary getTableClass()`
  * newMethodName: `tableClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TableCreationParameters getBillingMode()`
  * newMethodName: `billingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TableDescription getTableStatus()`
  * newMethodName: `tableStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TimeToLiveDescription getTimeToLiveStatus()`
  * newMethodName: `timeToLiveStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TransactGetItemsInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TransactWriteItemsInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.TransactWriteItemsInput getReturnItemCollectionMetrics()`
  * newMethodName: `returnItemCollectionMetricsAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.Update getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateContributorInsightsInput getContributorInsightsAction()`
  * newMethodName: `contributorInsightsActionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateContributorInsightsOutput getContributorInsightsStatus()`
  * newMethodName: `contributorInsightsStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateGlobalTableSettingsInput getGlobalTableBillingMode()`
  * newMethodName: `globalTableBillingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateItemInput getConditionalOperator()`
  * newMethodName: `conditionalOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnValues()`
  * newMethodName: `returnValuesAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnConsumedCapacity()`
  * newMethodName: `returnConsumedCapacityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnItemCollectionMetrics()`
  * newMethodName: `returnItemCollectionMetricsAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnValuesOnConditionCheckFailure()`
  * newMethodName: `returnValuesOnConditionCheckFailureAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateKinesisStreamingConfiguration getApproximateCreationDateTimePrecision()`
  * newMethodName: `approximateCreationDateTimePrecisionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateKinesisStreamingDestinationOutput getDestinationStatus()`
  * newMethodName: `destinationStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateReplicationGroupMemberAction getTableClassOverride()`
  * newMethodName: `tableClassOverrideAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateTableInput getBillingMode()`
  * newMethodName: `billingModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.dynamodb.model.UpdateTableInput getTableClass()`
  * newMethodName: `tableClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.AccountPolicy getpolicyType()`
  * newMethodName: `policyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.AccountPolicy getscope()`
  * newMethodName: `scopeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.Anomaly getstate()`
  * newMethodName: `stateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.AnomalyDetector getevaluationFrequency()`
  * newMethodName: `evaluationFrequencyAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.AnomalyDetector getanomalyDetectorStatus()`
  * newMethodName: `anomalyDetectorStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.CreateLogAnomalyDetectorRequest getevaluationFrequency()`
  * newMethodName: `evaluationFrequencyAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.CreateLogGroupRequest getlogGroupClass()`
  * newMethodName: `logGroupClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DeleteAccountPolicyRequest getpolicyType()`
  * newMethodName: `policyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.Delivery getdeliveryDestinationType()`
  * newMethodName: `deliveryDestinationTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DeliveryDestination getdeliveryDestinationType()`
  * newMethodName: `deliveryDestinationTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DeliveryDestination getoutputFormat()`
  * newMethodName: `outputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DescribeAccountPoliciesRequest getpolicyType()`
  * newMethodName: `policyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DescribeExportTasksRequest getstatusCode()`
  * newMethodName: `statusCodeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DescribeLogGroupsRequest getlogGroupClass()`
  * newMethodName: `logGroupClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DescribeLogStreamsRequest getorderBy()`
  * newMethodName: `orderByAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.DescribeQueriesRequest getstatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.ExportTaskStatus getcode()`
  * newMethodName: `codeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.GetLogAnomalyDetectorResponse getevaluationFrequency()`
  * newMethodName: `evaluationFrequencyAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.GetLogAnomalyDetectorResponse getanomalyDetectorStatus()`
  * newMethodName: `anomalyDetectorStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.GetQueryResultsResponse getstatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.ListAnomaliesRequest getsuppressionState()`
  * newMethodName: `suppressionStateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.LogGroup getdataProtectionStatus()`
  * newMethodName: `dataProtectionStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.LogGroup getlogGroupClass()`
  * newMethodName: `logGroupClassAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.MetricTransformation getunit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.PutAccountPolicyRequest getpolicyType()`
  * newMethodName: `policyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.PutAccountPolicyRequest getscope()`
  * newMethodName: `scopeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.PutDeliveryDestinationRequest getoutputFormat()`
  * newMethodName: `outputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.PutSubscriptionFilterRequest getdistribution()`
  * newMethodName: `distributionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.QueryInfo getstatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.SubscriptionFilter getdistribution()`
  * newMethodName: `distributionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.SuppressionPeriod getsuppressionUnit()`
  * newMethodName: `suppressionUnitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.UpdateAnomalyRequest getsuppressionType()`
  * newMethodName: `suppressionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.UpdateLogAnomalyDetectorRequest getevaluationFrequency()`
  * newMethodName: `evaluationFrequencyAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatchlogs.model.LogGroup getinheritedProperties()`
  * newMethodName: `inheritedPropertiesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.AlarmHistoryItem getAlarmType()`
  * newMethodName: `alarmTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.AlarmHistoryItem getHistoryItemType()`
  * newMethodName: `historyItemTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.AnomalyDetector getStateValue()`
  * newMethodName: `stateValueAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.CompositeAlarm getStateValue()`
  * newMethodName: `stateValueAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.CompositeAlarm getActionsSuppressedBy()`
  * newMethodName: `actionsSuppressedByAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.Datapoint getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getHistoryItemType()`
  * newMethodName: `historyItemTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getScanBy()`
  * newMethodName: `scanByAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmsForMetricInput getStatistic()`
  * newMethodName: `statisticAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmsForMetricInput getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmsInput getStateValue()`
  * newMethodName: `stateValueAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.GetMetricDataInput getScanBy()`
  * newMethodName: `scanByAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.GetMetricStatisticsInput getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.GetMetricStreamOutput getOutputFormat()`
  * newMethodName: `outputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.ListMetricsInput getRecentlyActive()`
  * newMethodName: `recentlyActiveAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricAlarm getStateValue()`
  * newMethodName: `stateValueAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricAlarm getStatistic()`
  * newMethodName: `statisticAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricAlarm getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricAlarm getComparisonOperator()`
  * newMethodName: `comparisonOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricAlarm getEvaluationState()`
  * newMethodName: `evaluationStateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricDataResult getStatusCode()`
  * newMethodName: `statusCodeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricDatum getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricStat getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.MetricStreamEntry getOutputFormat()`
  * newMethodName: `outputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getStatistic()`
  * newMethodName: `statisticAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getUnit()`
  * newMethodName: `unitAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getComparisonOperator()`
  * newMethodName: `comparisonOperatorAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.PutMetricStreamInput getOutputFormat()`
  * newMethodName: `outputFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.SetAlarmStateInput getStateValue()`
  * newMethodName: `stateValueAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getAlarmTypes()`
  * newMethodName: `alarmTypesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAlarmsInput getAlarmTypes()`
  * newMethodName: `alarmTypesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.DescribeAnomalyDetectorsInput getAnomalyDetectorTypes()`
  * newMethodName: `anomalyDetectorTypesAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.cloudwatch.model.GetMetricStatisticsInput getStatistics()`
  * newMethodName: `statisticsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateCustomKeyStoreRequest getCustomKeyStoreType()`
  * newMethodName: `customKeyStoreTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateCustomKeyStoreRequest getXksProxyConnectivity()`
  * newMethodName: `xksProxyConnectivityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateKeyRequest getKeyUsage()`
  * newMethodName: `keyUsageAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateKeyRequest getCustomerMasterKeySpec()`
  * newMethodName: `customerMasterKeySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateKeyRequest getKeySpec()`
  * newMethodName: `keySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateKeyRequest getOrigin()`
  * newMethodName: `originAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CustomKeyStoresListEntry getConnectionState()`
  * newMethodName: `connectionStateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CustomKeyStoresListEntry getConnectionErrorCode()`
  * newMethodName: `connectionErrorCodeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CustomKeyStoresListEntry getCustomKeyStoreType()`
  * newMethodName: `customKeyStoreTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.DecryptRequest getEncryptionAlgorithm()`
  * newMethodName: `encryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.DecryptResponse getEncryptionAlgorithm()`
  * newMethodName: `encryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.DeriveSharedSecretRequest getKeyAgreementAlgorithm()`
  * newMethodName: `keyAgreementAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.DeriveSharedSecretResponse getKeyAgreementAlgorithm()`
  * newMethodName: `keyAgreementAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.DeriveSharedSecretResponse getKeyOrigin()`
  * newMethodName: `keyOriginAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.EncryptRequest getEncryptionAlgorithm()`
  * newMethodName: `encryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.EncryptResponse getEncryptionAlgorithm()`
  * newMethodName: `encryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyPairRequest getKeyPairSpec()`
  * newMethodName: `keyPairSpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyPairResponse getKeyPairSpec()`
  * newMethodName: `keyPairSpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyPairWithoutPlaintextRequest getKeyPairSpec()`
  * newMethodName: `keyPairSpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyPairWithoutPlaintextResponse getKeyPairSpec()`
  * newMethodName: `keyPairSpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyRequest getKeySpec()`
  * newMethodName: `keySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateDataKeyWithoutPlaintextRequest getKeySpec()`
  * newMethodName: `keySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateMacRequest getMacAlgorithm()`
  * newMethodName: `macAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GenerateMacResponse getMacAlgorithm()`
  * newMethodName: `macAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetParametersForImportRequest getWrappingAlgorithm()`
  * newMethodName: `wrappingAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetParametersForImportRequest getWrappingKeySpec()`
  * newMethodName: `wrappingKeySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getCustomerMasterKeySpec()`
  * newMethodName: `customerMasterKeySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getKeySpec()`
  * newMethodName: `keySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getKeyUsage()`
  * newMethodName: `keyUsageAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ImportKeyMaterialRequest getExpirationModel()`
  * newMethodName: `expirationModelAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getKeyUsage()`
  * newMethodName: `keyUsageAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getKeyState()`
  * newMethodName: `keyStateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getOrigin()`
  * newMethodName: `originAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getExpirationModel()`
  * newMethodName: `expirationModelAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getKeyManager()`
  * newMethodName: `keyManagerAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getCustomerMasterKeySpec()`
  * newMethodName: `customerMasterKeySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getKeySpec()`
  * newMethodName: `keySpecAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.MultiRegionConfiguration getMultiRegionKeyType()`
  * newMethodName: `multiRegionKeyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ReEncryptRequest getSourceEncryptionAlgorithm()`
  * newMethodName: `sourceEncryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ReEncryptRequest getDestinationEncryptionAlgorithm()`
  * newMethodName: `destinationEncryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ReEncryptResponse getSourceEncryptionAlgorithm()`
  * newMethodName: `sourceEncryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ReEncryptResponse getDestinationEncryptionAlgorithm()`
  * newMethodName: `destinationEncryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.RecipientInfo getKeyEncryptionAlgorithm()`
  * newMethodName: `keyEncryptionAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.RotationsListEntry getRotationType()`
  * newMethodName: `rotationTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.ScheduleKeyDeletionResponse getKeyState()`
  * newMethodName: `keyStateAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.SignRequest getMessageType()`
  * newMethodName: `messageTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.SignRequest getSigningAlgorithm()`
  * newMethodName: `signingAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.SignResponse getSigningAlgorithm()`
  * newMethodName: `signingAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.UpdateCustomKeyStoreRequest getXksProxyConnectivity()`
  * newMethodName: `xksProxyConnectivityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.VerifyMacRequest getMacAlgorithm()`
  * newMethodName: `macAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.VerifyMacResponse getMacAlgorithm()`
  * newMethodName: `macAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.VerifyRequest getMessageType()`
  * newMethodName: `messageTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.VerifyRequest getSigningAlgorithm()`
  * newMethodName: `signingAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.VerifyResponse getSigningAlgorithm()`
  * newMethodName: `signingAlgorithmAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.XksProxyConfigurationType getConnectivity()`
  * newMethodName: `connectivityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.CreateGrantRequest getOperations()`
  * newMethodName: `operationsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getEncryptionAlgorithms()`
  * newMethodName: `encryptionAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getSigningAlgorithms()`
  * newMethodName: `signingAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GetPublicKeyResponse getKeyAgreementAlgorithms()`
  * newMethodName: `keyAgreementAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.GrantListEntry getOperations()`
  * newMethodName: `operationsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getEncryptionAlgorithms()`
  * newMethodName: `encryptionAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getSigningAlgorithms()`
  * newMethodName: `signingAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getKeyAgreementAlgorithms()`
  * newMethodName: `keyAgreementAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kms.model.KeyMetadata getMacAlgorithms()`
  * newMethodName: `macAlgorithmsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonOpenSearchServerlessDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonOpenSearchServerlessDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationConfiguration getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationDescription getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationUpdate getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.AuthenticationConfiguration getConnectivity()`
  * newMethodName: `connectivityAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.CreateDeliveryStreamInput getDeliveryStreamType()`
  * newMethodName: `deliveryStreamTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DeliveryStreamDescription getDeliveryStreamStatus()`
  * newMethodName: `deliveryStreamStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DeliveryStreamDescription getDeliveryStreamType()`
  * newMethodName: `deliveryStreamTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfiguration getKeyType()`
  * newMethodName: `keyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfiguration getStatus()`
  * newMethodName: `statusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfigurationInput getKeyType()`
  * newMethodName: `keyTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.DocumentIdOptions getDefaultDocumentIdFormat()`
  * newMethodName: `defaultDocumentIdFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ElasticsearchDestinationConfiguration getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ElasticsearchDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ElasticsearchDestinationDescription getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ElasticsearchDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ElasticsearchDestinationUpdate getIndexRotationPeriod()`
  * newMethodName: `indexRotationPeriodAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.EncryptionConfiguration getNoEncryptionConfig()`
  * newMethodName: `noEncryptionConfigAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationConfiguration getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationDescription getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationUpdate getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ExtendedS3DestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.FailureDescription getType()`
  * newMethodName: `typeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.HttpEndpointDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.HttpEndpointDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.HttpEndpointDestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.HttpEndpointRequestConfiguration getContentEncoding()`
  * newMethodName: `contentEncodingAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.IcebergDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.IcebergDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.IcebergDestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ListDeliveryStreamsInput getDeliveryStreamType()`
  * newMethodName: `deliveryStreamTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.OrcSerDe getCompression()`
  * newMethodName: `compressionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.OrcSerDe getFormatVersion()`
  * newMethodName: `formatVersionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ParquetSerDe getCompression()`
  * newMethodName: `compressionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ParquetSerDe getWriterVersion()`
  * newMethodName: `writerVersionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.Processor getType()`
  * newMethodName: `typeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.ProcessorParameter getParameterName()`
  * newMethodName: `parameterNameAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.RedshiftDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.RedshiftDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.RedshiftDestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.S3DestinationConfiguration getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.S3DestinationDescription getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.S3DestinationUpdate getCompressionFormat()`
  * newMethodName: `compressionFormatAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationConfiguration getDataLoadingOption()`
  * newMethodName: `dataLoadingOptionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationDescription getDataLoadingOption()`
  * newMethodName: `dataLoadingOptionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationUpdate getDataLoadingOption()`
  * newMethodName: `dataLoadingOptionAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SnowflakeDestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationConfiguration getHECEndpointType()`
  * newMethodName: `hECEndpointTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationConfiguration getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationDescription getHECEndpointType()`
  * newMethodName: `hECEndpointTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationDescription getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationUpdate getHECEndpointType()`
  * newMethodName: `hECEndpointTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.firehose.model.SplunkDestinationUpdate getS3BackupMode()`
  * newMethodName: `s3BackupModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.Consumer getConsumerStatus()`
  * newMethodName: `consumerStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.ConsumerDescription getConsumerStatus()`
  * newMethodName: `consumerStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.GetShardIteratorInput getShardIteratorType()`
  * newMethodName: `shardIteratorTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.PutRecordOutput getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.PutRecordsOutput getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.Record getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.ShardFilter getType()`
  * newMethodName: `typeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StartStreamEncryptionInput getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StartingPosition getType()`
  * newMethodName: `typeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StopStreamEncryptionInput getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamDescription getStreamStatus()`
  * newMethodName: `streamStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamDescription getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamDescriptionSummary getStreamStatus()`
  * newMethodName: `streamStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamDescriptionSummary getEncryptionType()`
  * newMethodName: `encryptionTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamModeDetails getStreamMode()`
  * newMethodName: `streamModeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.StreamSummary getStreamStatus()`
  * newMethodName: `streamStatusAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.UpdateShardCountInput getScalingType()`
  * newMethodName: `scalingTypeAsString`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.DisableEnhancedMonitoringInput getShardLevelMetrics()`
  * newMethodName: `shardLevelMetricsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.EnableEnhancedMonitoringInput getShardLevelMetrics()`
  * newMethodName: `shardLevelMetricsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.EnhancedMetrics getShardLevelMetrics()`
  * newMethodName: `shardLevelMetricsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.EnhancedMonitoringOutput getCurrentShardLevelMetrics()`
  * newMethodName: `currentShardLevelMetricsAsStrings`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.kinesis.model.EnhancedMonitoringOutput getDesiredShardLevelMetrics()`
  * newMethodName: `desiredShardLevelMetricsAsStrings`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.EnumGettersToV2
displayName: Change v1 enum getters to v2
description: Change v1 enum getters to v2.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.CreateQueueRequest getAttributes()
      newMethodName: attributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.GetQueueAttributesRequest getAttributeNames()
      newMethodName: attributeNamesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.GetQueueAttributesResult getAttributes()
      newMethodName: attributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.Message getAttributes()
      newMethodName: attributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.ReceiveMessageRequest getAttributeNames()
      newMethodName: attributeNamesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.ReceiveMessageRequest getMessageSystemAttributeNames()
      newMethodName: messageSystemAttributeNamesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.SendMessageBatchRequestEntry getMessageSystemAttributes()
      newMethodName: messageSystemAttributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.SendMessageRequest getMessageSystemAttributes()
      newMethodName: messageSystemAttributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sqs.model.SetQueueAttributesRequest getAttributes()
      newMethodName: attributesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sns.model.CreateSMSSandboxPhoneNumberInput getLanguageCode()
      newMethodName: languageCodeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sns.model.PhoneNumberInformation getRouteType()
      newMethodName: routeTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sns.model.SMSSandboxPhoneNumber getStatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.sns.model.PhoneNumberInformation getNumberCapabilities()
      newMethodName: numberCapabilitiesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.AttributeDefinition getAttributeType()
      newMethodName: attributeTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.AttributeValueUpdate getAction()
      newMethodName: actionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BackupDetails getBackupStatus()
      newMethodName: backupStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BackupDetails getBackupType()
      newMethodName: backupTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BackupSummary getBackupStatus()
      newMethodName: backupStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BackupSummary getBackupType()
      newMethodName: backupTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchExecuteStatementInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchGetItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchStatementError getCode()
      newMethodName: codeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchStatementRequest getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchWriteItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BatchWriteItemInput getReturnItemCollectionMetrics()
      newMethodName: returnItemCollectionMetricsAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.BillingModeSummary getBillingMode()
      newMethodName: billingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.Condition getComparisonOperator()
      newMethodName: comparisonOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ConditionCheck getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ContinuousBackupsDescription getContinuousBackupsStatus()
      newMethodName: continuousBackupsStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ContributorInsightsSummary getContributorInsightsStatus()
      newMethodName: contributorInsightsStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.CreateReplicationGroupMemberAction getTableClassOverride()
      newMethodName: tableClassOverrideAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.CreateTableInput getBillingMode()
      newMethodName: billingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.CreateTableInput getTableClass()
      newMethodName: tableClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.Delete getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DeleteItemInput getConditionalOperator()
      newMethodName: conditionalOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnValues()
      newMethodName: returnValuesAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnItemCollectionMetrics()
      newMethodName: returnItemCollectionMetricsAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DeleteItemInput getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.DescribeContributorInsightsOutput getContributorInsightsStatus()
      newMethodName: contributorInsightsStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.EnableKinesisStreamingConfiguration getApproximateCreationDateTimePrecision()
      newMethodName: approximateCreationDateTimePrecisionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExecuteStatementInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExecuteStatementInput getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExecuteTransactionInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExpectedAttributeValue getComparisonOperator()
      newMethodName: comparisonOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportDescription getExportStatus()
      newMethodName: exportStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportDescription getS3SseAlgorithm()
      newMethodName: s3SseAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportDescription getExportFormat()
      newMethodName: exportFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportDescription getExportType()
      newMethodName: exportTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportSummary getExportStatus()
      newMethodName: exportStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportSummary getExportType()
      newMethodName: exportTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getS3SseAlgorithm()
      newMethodName: s3SseAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getExportFormat()
      newMethodName: exportFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ExportTableToPointInTimeInput getExportType()
      newMethodName: exportTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.GetItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.GlobalSecondaryIndexDescription getIndexStatus()
      newMethodName: indexStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.GlobalTableDescription getGlobalTableStatus()
      newMethodName: globalTableStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportSummary getImportStatus()
      newMethodName: importStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportSummary getInputFormat()
      newMethodName: inputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportTableDescription getImportStatus()
      newMethodName: importStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportTableDescription getInputFormat()
      newMethodName: inputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportTableDescription getInputCompressionType()
      newMethodName: inputCompressionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportTableInput getInputFormat()
      newMethodName: inputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ImportTableInput getInputCompressionType()
      newMethodName: inputCompressionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.IncrementalExportSpecification getExportViewType()
      newMethodName: exportViewTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.KeySchemaElement getKeyType()
      newMethodName: keyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.KinesisDataStreamDestination getDestinationStatus()
      newMethodName: destinationStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.KinesisDataStreamDestination getApproximateCreationDateTimePrecision()
      newMethodName: approximateCreationDateTimePrecisionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.KinesisStreamingDestinationOutput getDestinationStatus()
      newMethodName: destinationStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ListBackupsInput getBackupType()
      newMethodName: backupTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ParameterizedStatement getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PointInTimeRecoveryDescription getPointInTimeRecoveryStatus()
      newMethodName: pointInTimeRecoveryStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.Projection getProjectionType()
      newMethodName: projectionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.Put getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PutItemInput getReturnValues()
      newMethodName: returnValuesAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PutItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PutItemInput getReturnItemCollectionMetrics()
      newMethodName: returnItemCollectionMetricsAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PutItemInput getConditionalOperator()
      newMethodName: conditionalOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.PutItemInput getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.QueryInput getSelect()
      newMethodName: selectAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.QueryInput getConditionalOperator()
      newMethodName: conditionalOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.QueryInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaAutoScalingDescription getReplicaStatus()
      newMethodName: replicaStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaDescription getReplicaStatus()
      newMethodName: replicaStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaGlobalSecondaryIndexAutoScalingDescription getIndexStatus()
      newMethodName: indexStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaGlobalSecondaryIndexSettingsDescription getIndexStatus()
      newMethodName: indexStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaSettingsDescription getReplicaStatus()
      newMethodName: replicaStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ReplicaSettingsUpdate getReplicaTableClass()
      newMethodName: replicaTableClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.RestoreTableFromBackupInput getBillingModeOverride()
      newMethodName: billingModeOverrideAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.RestoreTableToPointInTimeInput getBillingModeOverride()
      newMethodName: billingModeOverrideAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.SSEDescription getStatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.SSEDescription getSSEType()
      newMethodName: sSETypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.SSESpecification getSSEType()
      newMethodName: sSETypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ScanInput getSelect()
      newMethodName: selectAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ScanInput getConditionalOperator()
      newMethodName: conditionalOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.ScanInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.SourceTableDetails getBillingMode()
      newMethodName: billingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.StreamSpecification getStreamViewType()
      newMethodName: streamViewTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TableAutoScalingDescription getTableStatus()
      newMethodName: tableStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TableClassSummary getTableClass()
      newMethodName: tableClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TableCreationParameters getBillingMode()
      newMethodName: billingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TableDescription getTableStatus()
      newMethodName: tableStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TimeToLiveDescription getTimeToLiveStatus()
      newMethodName: timeToLiveStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TransactGetItemsInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TransactWriteItemsInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.TransactWriteItemsInput getReturnItemCollectionMetrics()
      newMethodName: returnItemCollectionMetricsAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.Update getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateContributorInsightsInput getContributorInsightsAction()
      newMethodName: contributorInsightsActionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateContributorInsightsOutput getContributorInsightsStatus()
      newMethodName: contributorInsightsStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateGlobalTableSettingsInput getGlobalTableBillingMode()
      newMethodName: globalTableBillingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateItemInput getConditionalOperator()
      newMethodName: conditionalOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnValues()
      newMethodName: returnValuesAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnConsumedCapacity()
      newMethodName: returnConsumedCapacityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnItemCollectionMetrics()
      newMethodName: returnItemCollectionMetricsAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateItemInput getReturnValuesOnConditionCheckFailure()
      newMethodName: returnValuesOnConditionCheckFailureAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateKinesisStreamingConfiguration getApproximateCreationDateTimePrecision()
      newMethodName: approximateCreationDateTimePrecisionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateKinesisStreamingDestinationOutput getDestinationStatus()
      newMethodName: destinationStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateReplicationGroupMemberAction getTableClassOverride()
      newMethodName: tableClassOverrideAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateTableInput getBillingMode()
      newMethodName: billingModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.dynamodb.model.UpdateTableInput getTableClass()
      newMethodName: tableClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.AccountPolicy getpolicyType()
      newMethodName: policyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.AccountPolicy getscope()
      newMethodName: scopeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.Anomaly getstate()
      newMethodName: stateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.AnomalyDetector getevaluationFrequency()
      newMethodName: evaluationFrequencyAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.AnomalyDetector getanomalyDetectorStatus()
      newMethodName: anomalyDetectorStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.CreateLogAnomalyDetectorRequest getevaluationFrequency()
      newMethodName: evaluationFrequencyAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.CreateLogGroupRequest getlogGroupClass()
      newMethodName: logGroupClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DeleteAccountPolicyRequest getpolicyType()
      newMethodName: policyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.Delivery getdeliveryDestinationType()
      newMethodName: deliveryDestinationTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DeliveryDestination getdeliveryDestinationType()
      newMethodName: deliveryDestinationTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DeliveryDestination getoutputFormat()
      newMethodName: outputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DescribeAccountPoliciesRequest getpolicyType()
      newMethodName: policyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DescribeExportTasksRequest getstatusCode()
      newMethodName: statusCodeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DescribeLogGroupsRequest getlogGroupClass()
      newMethodName: logGroupClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DescribeLogStreamsRequest getorderBy()
      newMethodName: orderByAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.DescribeQueriesRequest getstatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.ExportTaskStatus getcode()
      newMethodName: codeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.GetLogAnomalyDetectorResponse getevaluationFrequency()
      newMethodName: evaluationFrequencyAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.GetLogAnomalyDetectorResponse getanomalyDetectorStatus()
      newMethodName: anomalyDetectorStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.GetQueryResultsResponse getstatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.ListAnomaliesRequest getsuppressionState()
      newMethodName: suppressionStateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.LogGroup getdataProtectionStatus()
      newMethodName: dataProtectionStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.LogGroup getlogGroupClass()
      newMethodName: logGroupClassAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.MetricTransformation getunit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.PutAccountPolicyRequest getpolicyType()
      newMethodName: policyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.PutAccountPolicyRequest getscope()
      newMethodName: scopeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.PutDeliveryDestinationRequest getoutputFormat()
      newMethodName: outputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.PutSubscriptionFilterRequest getdistribution()
      newMethodName: distributionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.QueryInfo getstatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.SubscriptionFilter getdistribution()
      newMethodName: distributionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.SuppressionPeriod getsuppressionUnit()
      newMethodName: suppressionUnitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.UpdateAnomalyRequest getsuppressionType()
      newMethodName: suppressionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.UpdateLogAnomalyDetectorRequest getevaluationFrequency()
      newMethodName: evaluationFrequencyAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatchlogs.model.LogGroup getinheritedProperties()
      newMethodName: inheritedPropertiesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.AlarmHistoryItem getAlarmType()
      newMethodName: alarmTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.AlarmHistoryItem getHistoryItemType()
      newMethodName: historyItemTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.AnomalyDetector getStateValue()
      newMethodName: stateValueAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.CompositeAlarm getStateValue()
      newMethodName: stateValueAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.CompositeAlarm getActionsSuppressedBy()
      newMethodName: actionsSuppressedByAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.Datapoint getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getHistoryItemType()
      newMethodName: historyItemTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getScanBy()
      newMethodName: scanByAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmsForMetricInput getStatistic()
      newMethodName: statisticAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmsForMetricInput getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmsInput getStateValue()
      newMethodName: stateValueAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.GetMetricDataInput getScanBy()
      newMethodName: scanByAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.GetMetricStatisticsInput getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.GetMetricStreamOutput getOutputFormat()
      newMethodName: outputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.ListMetricsInput getRecentlyActive()
      newMethodName: recentlyActiveAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricAlarm getStateValue()
      newMethodName: stateValueAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricAlarm getStatistic()
      newMethodName: statisticAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricAlarm getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricAlarm getComparisonOperator()
      newMethodName: comparisonOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricAlarm getEvaluationState()
      newMethodName: evaluationStateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricDataResult getStatusCode()
      newMethodName: statusCodeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricDatum getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricStat getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.MetricStreamEntry getOutputFormat()
      newMethodName: outputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getStatistic()
      newMethodName: statisticAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getUnit()
      newMethodName: unitAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.PutMetricAlarmInput getComparisonOperator()
      newMethodName: comparisonOperatorAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.PutMetricStreamInput getOutputFormat()
      newMethodName: outputFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.SetAlarmStateInput getStateValue()
      newMethodName: stateValueAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmHistoryInput getAlarmTypes()
      newMethodName: alarmTypesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAlarmsInput getAlarmTypes()
      newMethodName: alarmTypesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.DescribeAnomalyDetectorsInput getAnomalyDetectorTypes()
      newMethodName: anomalyDetectorTypesAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.cloudwatch.model.GetMetricStatisticsInput getStatistics()
      newMethodName: statisticsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateCustomKeyStoreRequest getCustomKeyStoreType()
      newMethodName: customKeyStoreTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateCustomKeyStoreRequest getXksProxyConnectivity()
      newMethodName: xksProxyConnectivityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateKeyRequest getKeyUsage()
      newMethodName: keyUsageAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateKeyRequest getCustomerMasterKeySpec()
      newMethodName: customerMasterKeySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateKeyRequest getKeySpec()
      newMethodName: keySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateKeyRequest getOrigin()
      newMethodName: originAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CustomKeyStoresListEntry getConnectionState()
      newMethodName: connectionStateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CustomKeyStoresListEntry getConnectionErrorCode()
      newMethodName: connectionErrorCodeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CustomKeyStoresListEntry getCustomKeyStoreType()
      newMethodName: customKeyStoreTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.DecryptRequest getEncryptionAlgorithm()
      newMethodName: encryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.DecryptResponse getEncryptionAlgorithm()
      newMethodName: encryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.DeriveSharedSecretRequest getKeyAgreementAlgorithm()
      newMethodName: keyAgreementAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.DeriveSharedSecretResponse getKeyAgreementAlgorithm()
      newMethodName: keyAgreementAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.DeriveSharedSecretResponse getKeyOrigin()
      newMethodName: keyOriginAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.EncryptRequest getEncryptionAlgorithm()
      newMethodName: encryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.EncryptResponse getEncryptionAlgorithm()
      newMethodName: encryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyPairRequest getKeyPairSpec()
      newMethodName: keyPairSpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyPairResponse getKeyPairSpec()
      newMethodName: keyPairSpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyPairWithoutPlaintextRequest getKeyPairSpec()
      newMethodName: keyPairSpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyPairWithoutPlaintextResponse getKeyPairSpec()
      newMethodName: keyPairSpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyRequest getKeySpec()
      newMethodName: keySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateDataKeyWithoutPlaintextRequest getKeySpec()
      newMethodName: keySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateMacRequest getMacAlgorithm()
      newMethodName: macAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GenerateMacResponse getMacAlgorithm()
      newMethodName: macAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetParametersForImportRequest getWrappingAlgorithm()
      newMethodName: wrappingAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetParametersForImportRequest getWrappingKeySpec()
      newMethodName: wrappingKeySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getCustomerMasterKeySpec()
      newMethodName: customerMasterKeySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getKeySpec()
      newMethodName: keySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getKeyUsage()
      newMethodName: keyUsageAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ImportKeyMaterialRequest getExpirationModel()
      newMethodName: expirationModelAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getKeyUsage()
      newMethodName: keyUsageAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getKeyState()
      newMethodName: keyStateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getOrigin()
      newMethodName: originAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getExpirationModel()
      newMethodName: expirationModelAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getKeyManager()
      newMethodName: keyManagerAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getCustomerMasterKeySpec()
      newMethodName: customerMasterKeySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getKeySpec()
      newMethodName: keySpecAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.MultiRegionConfiguration getMultiRegionKeyType()
      newMethodName: multiRegionKeyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ReEncryptRequest getSourceEncryptionAlgorithm()
      newMethodName: sourceEncryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ReEncryptRequest getDestinationEncryptionAlgorithm()
      newMethodName: destinationEncryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ReEncryptResponse getSourceEncryptionAlgorithm()
      newMethodName: sourceEncryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ReEncryptResponse getDestinationEncryptionAlgorithm()
      newMethodName: destinationEncryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.RecipientInfo getKeyEncryptionAlgorithm()
      newMethodName: keyEncryptionAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.RotationsListEntry getRotationType()
      newMethodName: rotationTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.ScheduleKeyDeletionResponse getKeyState()
      newMethodName: keyStateAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.SignRequest getMessageType()
      newMethodName: messageTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.SignRequest getSigningAlgorithm()
      newMethodName: signingAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.SignResponse getSigningAlgorithm()
      newMethodName: signingAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.UpdateCustomKeyStoreRequest getXksProxyConnectivity()
      newMethodName: xksProxyConnectivityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.VerifyMacRequest getMacAlgorithm()
      newMethodName: macAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.VerifyMacResponse getMacAlgorithm()
      newMethodName: macAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.VerifyRequest getMessageType()
      newMethodName: messageTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.VerifyRequest getSigningAlgorithm()
      newMethodName: signingAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.VerifyResponse getSigningAlgorithm()
      newMethodName: signingAlgorithmAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.XksProxyConfigurationType getConnectivity()
      newMethodName: connectivityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.CreateGrantRequest getOperations()
      newMethodName: operationsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getEncryptionAlgorithms()
      newMethodName: encryptionAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getSigningAlgorithms()
      newMethodName: signingAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GetPublicKeyResponse getKeyAgreementAlgorithms()
      newMethodName: keyAgreementAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.GrantListEntry getOperations()
      newMethodName: operationsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getEncryptionAlgorithms()
      newMethodName: encryptionAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getSigningAlgorithms()
      newMethodName: signingAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getKeyAgreementAlgorithms()
      newMethodName: keyAgreementAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kms.model.KeyMetadata getMacAlgorithms()
      newMethodName: macAlgorithmsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonOpenSearchServerlessDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonOpenSearchServerlessDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationConfiguration getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationDescription getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AmazonopensearchserviceDestinationUpdate getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.AuthenticationConfiguration getConnectivity()
      newMethodName: connectivityAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.CreateDeliveryStreamInput getDeliveryStreamType()
      newMethodName: deliveryStreamTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DeliveryStreamDescription getDeliveryStreamStatus()
      newMethodName: deliveryStreamStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DeliveryStreamDescription getDeliveryStreamType()
      newMethodName: deliveryStreamTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfiguration getKeyType()
      newMethodName: keyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfiguration getStatus()
      newMethodName: statusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DeliveryStreamEncryptionConfigurationInput getKeyType()
      newMethodName: keyTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.DocumentIdOptions getDefaultDocumentIdFormat()
      newMethodName: defaultDocumentIdFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ElasticsearchDestinationConfiguration getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ElasticsearchDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ElasticsearchDestinationDescription getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ElasticsearchDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ElasticsearchDestinationUpdate getIndexRotationPeriod()
      newMethodName: indexRotationPeriodAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.EncryptionConfiguration getNoEncryptionConfig()
      newMethodName: noEncryptionConfigAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationConfiguration getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationDescription getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationUpdate getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ExtendedS3DestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.FailureDescription getType()
      newMethodName: typeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.HttpEndpointDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.HttpEndpointDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.HttpEndpointDestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.HttpEndpointRequestConfiguration getContentEncoding()
      newMethodName: contentEncodingAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.IcebergDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.IcebergDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.IcebergDestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ListDeliveryStreamsInput getDeliveryStreamType()
      newMethodName: deliveryStreamTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.OrcSerDe getCompression()
      newMethodName: compressionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.OrcSerDe getFormatVersion()
      newMethodName: formatVersionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ParquetSerDe getCompression()
      newMethodName: compressionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ParquetSerDe getWriterVersion()
      newMethodName: writerVersionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.Processor getType()
      newMethodName: typeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.ProcessorParameter getParameterName()
      newMethodName: parameterNameAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.RedshiftDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.RedshiftDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.RedshiftDestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.S3DestinationConfiguration getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.S3DestinationDescription getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.S3DestinationUpdate getCompressionFormat()
      newMethodName: compressionFormatAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationConfiguration getDataLoadingOption()
      newMethodName: dataLoadingOptionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationDescription getDataLoadingOption()
      newMethodName: dataLoadingOptionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationUpdate getDataLoadingOption()
      newMethodName: dataLoadingOptionAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SnowflakeDestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationConfiguration getHECEndpointType()
      newMethodName: hECEndpointTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationConfiguration getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationDescription getHECEndpointType()
      newMethodName: hECEndpointTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationDescription getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationUpdate getHECEndpointType()
      newMethodName: hECEndpointTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.firehose.model.SplunkDestinationUpdate getS3BackupMode()
      newMethodName: s3BackupModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.Consumer getConsumerStatus()
      newMethodName: consumerStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.ConsumerDescription getConsumerStatus()
      newMethodName: consumerStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.GetShardIteratorInput getShardIteratorType()
      newMethodName: shardIteratorTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.PutRecordOutput getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.PutRecordsOutput getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.Record getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.ShardFilter getType()
      newMethodName: typeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StartStreamEncryptionInput getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StartingPosition getType()
      newMethodName: typeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StopStreamEncryptionInput getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamDescription getStreamStatus()
      newMethodName: streamStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamDescription getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamDescriptionSummary getStreamStatus()
      newMethodName: streamStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamDescriptionSummary getEncryptionType()
      newMethodName: encryptionTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamModeDetails getStreamMode()
      newMethodName: streamModeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.StreamSummary getStreamStatus()
      newMethodName: streamStatusAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.UpdateShardCountInput getScalingType()
      newMethodName: scalingTypeAsString
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.DisableEnhancedMonitoringInput getShardLevelMetrics()
      newMethodName: shardLevelMetricsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.EnableEnhancedMonitoringInput getShardLevelMetrics()
      newMethodName: shardLevelMetricsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.EnhancedMetrics getShardLevelMetrics()
      newMethodName: shardLevelMetricsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.EnhancedMonitoringOutput getCurrentShardLevelMetrics()
      newMethodName: currentShardLevelMetricsAsStrings
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.kinesis.model.EnhancedMonitoringOutput getDesiredShardLevelMetrics()
      newMethodName: desiredShardLevelMetricsAsStrings

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.12.1` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.1")
}

rewrite {
    activeRecipe("software.amazon.awssdk.v2migration.EnumGettersToV2")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.12.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.12.1")
    }
    rewrite {
        activeRecipe("software.amazon.awssdk.v2migration.EnumGettersToV2")
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
        <version>5.46.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>software.amazon.awssdk.v2migration.EnumGettersToV2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.12.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=software.amazon.awssdk.v2migration.EnumGettersToV2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe EnumGettersToV2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:0.12.1
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.EnumGettersToV2" />

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

