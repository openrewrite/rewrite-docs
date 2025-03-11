---
sidebar_label: "Change S3 methods to v2."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change S3 methods to v2.

**software.amazon.awssdk.v2migration.S3MethodsToV2**

_Change S3 methods to v2._

## Recipe source

[GitHub](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.S3MethodsToV2), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getObjectMetadata(com.amazonaws.services.s3.model.GetObjectMetadataRequest)`
  * newMethodName: `headObject`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 initiateMultipartUpload(com.amazonaws.services.s3.model.InitiateMultipartUploadRequest)`
  * newMethodName: `createMultipartUpload`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 listVersions(com.amazonaws.services.s3.model.ListVersionsRequest)`
  * newMethodName: `listObjectVersions`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.SetBucketCrossOriginConfigurationRequest)`
  * newMethodName: `putBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.DeleteBucketCrossOriginConfigurationRequest)`
  * newMethodName: `deleteBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.GetBucketCrossOriginConfigurationRequest)`
  * newMethodName: `getBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketVersioningConfiguration(com.amazonaws.services.s3.model.GetBucketVersioningConfigurationRequest)`
  * newMethodName: `getBucketVersioning`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteBucketLifecycleConfiguration(com.amazonaws.services.s3.model.DeleteBucketLifecycleConfigurationRequest)`
  * newMethodName: `deleteBucketLifecycle`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteBucketReplicationConfiguration(com.amazonaws.services.s3.model.DeleteBucketReplicationConfigurationRequest)`
  * newMethodName: `deleteBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteBucketTaggingConfiguration(com.amazonaws.services.s3.model.DeleteBucketTaggingConfigurationRequest)`
  * newMethodName: `deleteBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteBucketWebsiteConfiguration(com.amazonaws.services.s3.model.DeleteBucketWebsiteConfigurationRequest)`
  * newMethodName: `deleteBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketLoggingConfiguration(com.amazonaws.services.s3.model.GetBucketLoggingConfigurationRequest)`
  * newMethodName: `getBucketLogging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketReplicationConfiguration(com.amazonaws.services.s3.model.GetBucketReplicationConfigurationRequest)`
  * newMethodName: `getBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketTaggingConfiguration(com.amazonaws.services.s3.model.GetBucketTaggingConfigurationRequest)`
  * newMethodName: `getBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketWebsiteConfiguration(com.amazonaws.services.s3.model.GetBucketWebsiteConfigurationRequest)`
  * newMethodName: `getBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 deleteVersion(com.amazonaws.services.s3.model.DeleteObjectRequest)`
  * newMethodName: `deleteObject`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketPolicy(com.amazonaws.services.s3.model.PutBucketPolicyRequest)`
  * newMethodName: `putBucketPolicy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 copyPart(com.amazonaws.services.s3.model.CopyPartRequest)`
  * newMethodName: `uploadPartCopy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketAccelerateConfiguration(com.amazonaws.services.s3.model.SetBucketAccelerateConfigurationRequest)`
  * newMethodName: `putBucketAccelerateConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketAnalyticsConfiguration(com.amazonaws.services.s3.model.SetBucketAnalyticsConfigurationRequest)`
  * newMethodName: `putBucketAnalyticsConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketIntelligentTieringConfiguration(com.amazonaws.services.s3.model.SetBucketIntelligentTieringConfigurationRequest)`
  * newMethodName: `putBucketIntelligentTieringConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketInventoryConfiguration(com.amazonaws.services.s3.model.SetBucketInventoryConfigurationRequest)`
  * newMethodName: `putBucketInventoryConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketLifecycleConfiguration(com.amazonaws.services.s3.model.SetBucketLifecycleConfigurationRequest)`
  * newMethodName: `putBucketLifecycleConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketMetricsConfiguration(com.amazonaws.services.s3.model.SetBucketMetricsConfigurationRequest)`
  * newMethodName: `putBucketMetricsConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketNotificationConfiguration(com.amazonaws.services.s3.model.SetBucketNotificationConfigurationRequest)`
  * newMethodName: `putBucketNotificationConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketOwnershipControls(com.amazonaws.services.s3.model.SetBucketOwnershipControlsRequest)`
  * newMethodName: `putBucketOwnershipControls`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketReplicationConfiguration(com.amazonaws.services.s3.model.SetBucketReplicationConfigurationRequest)`
  * newMethodName: `putBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketTaggingConfiguration(com.amazonaws.services.s3.model.SetBucketTaggingConfigurationRequest)`
  * newMethodName: `putBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 setBucketWebsiteConfiguration(com.amazonaws.services.s3.model.SetBucketWebsiteConfigurationRequest)`
  * newMethodName: `putBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getObjectMetadata(com.amazonaws.services.s3.model.GetObjectMetadataRequest)`
  * newMethodName: `headObject`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client initiateMultipartUpload(com.amazonaws.services.s3.model.InitiateMultipartUploadRequest)`
  * newMethodName: `createMultipartUpload`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client listVersions(com.amazonaws.services.s3.model.ListVersionsRequest)`
  * newMethodName: `listObjectVersions`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.SetBucketCrossOriginConfigurationRequest)`
  * newMethodName: `putBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.DeleteBucketCrossOriginConfigurationRequest)`
  * newMethodName: `deleteBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.GetBucketCrossOriginConfigurationRequest)`
  * newMethodName: `getBucketCors`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketVersioningConfiguration(com.amazonaws.services.s3.model.GetBucketVersioningConfigurationRequest)`
  * newMethodName: `getBucketVersioning`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteBucketLifecycleConfiguration(com.amazonaws.services.s3.model.DeleteBucketLifecycleConfigurationRequest)`
  * newMethodName: `deleteBucketLifecycle`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteBucketReplicationConfiguration(com.amazonaws.services.s3.model.DeleteBucketReplicationConfigurationRequest)`
  * newMethodName: `deleteBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteBucketTaggingConfiguration(com.amazonaws.services.s3.model.DeleteBucketTaggingConfigurationRequest)`
  * newMethodName: `deleteBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteBucketWebsiteConfiguration(com.amazonaws.services.s3.model.DeleteBucketWebsiteConfigurationRequest)`
  * newMethodName: `deleteBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketLoggingConfiguration(com.amazonaws.services.s3.model.GetBucketLoggingConfigurationRequest)`
  * newMethodName: `getBucketLogging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketReplicationConfiguration(com.amazonaws.services.s3.model.GetBucketReplicationConfigurationRequest)`
  * newMethodName: `getBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketTaggingConfiguration(com.amazonaws.services.s3.model.GetBucketTaggingConfigurationRequest)`
  * newMethodName: `getBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketWebsiteConfiguration(com.amazonaws.services.s3.model.GetBucketWebsiteConfigurationRequest)`
  * newMethodName: `getBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client deleteVersion(com.amazonaws.services.s3.model.DeleteObjectRequest)`
  * newMethodName: `deleteObject`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketPolicy(com.amazonaws.services.s3.model.PutBucketPolicyRequest)`
  * newMethodName: `putBucketPolicy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client copyPart(com.amazonaws.services.s3.model.CopyPartRequest)`
  * newMethodName: `uploadPartCopy`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketAccelerateConfiguration(com.amazonaws.services.s3.model.SetBucketAccelerateConfigurationRequest)`
  * newMethodName: `putBucketAccelerateConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketAnalyticsConfiguration(com.amazonaws.services.s3.model.SetBucketAnalyticsConfigurationRequest)`
  * newMethodName: `putBucketAnalyticsConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketIntelligentTieringConfiguration(com.amazonaws.services.s3.model.SetBucketIntelligentTieringConfigurationRequest)`
  * newMethodName: `putBucketIntelligentTieringConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketInventoryConfiguration(com.amazonaws.services.s3.model.SetBucketInventoryConfigurationRequest)`
  * newMethodName: `putBucketInventoryConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketLifecycleConfiguration(com.amazonaws.services.s3.model.SetBucketLifecycleConfigurationRequest)`
  * newMethodName: `putBucketLifecycleConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketMetricsConfiguration(com.amazonaws.services.s3.model.SetBucketMetricsConfigurationRequest)`
  * newMethodName: `putBucketMetricsConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketNotificationConfiguration(com.amazonaws.services.s3.model.SetBucketNotificationConfigurationRequest)`
  * newMethodName: `putBucketNotificationConfiguration`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketOwnershipControls(com.amazonaws.services.s3.model.SetBucketOwnershipControlsRequest)`
  * newMethodName: `putBucketOwnershipControls`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketReplicationConfiguration(com.amazonaws.services.s3.model.SetBucketReplicationConfigurationRequest)`
  * newMethodName: `putBucketReplication`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketTaggingConfiguration(com.amazonaws.services.s3.model.SetBucketTaggingConfigurationRequest)`
  * newMethodName: `putBucketTagging`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client setBucketWebsiteConfiguration(com.amazonaws.services.s3.model.SetBucketWebsiteConfigurationRequest)`
  * newMethodName: `putBucketWebsite`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.BucketCrossOriginConfiguration withRules(com.amazonaws.services.s3.model.CORSRule...)`
  * newMethodName: `withCorsRules`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.ListObjectsRequest withBucketName(String)`
  * newMethodName: `withBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.ListObjectsV2Request withBucketName(String)`
  * newMethodName: `withBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.CopyPartRequest withSourceBucketName(String)`
  * newMethodName: `withSourceBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.CopyPartRequest withDestinationBucketName(String)`
  * newMethodName: `withDestinationBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.analytics.AnalyticsS3BucketDestination withBucketArn(String)`
  * newMethodName: `withBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.CompleteMultipartUploadRequest withBucketName(String)`
  * newMethodName: `withBucket`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.services.s3.model.CompleteMultipartUploadRequest withPartETags(java.util.List)`
  * newMethodName: `withMultipartUpload`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.S3MethodsToV2
displayName: Change S3 methods to v2.
description: |
  Change S3 methods to v2.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getObjectMetadata(com.amazonaws.services.s3.model.GetObjectMetadataRequest)
      newMethodName: headObject
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 initiateMultipartUpload(com.amazonaws.services.s3.model.InitiateMultipartUploadRequest)
      newMethodName: createMultipartUpload
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 listVersions(com.amazonaws.services.s3.model.ListVersionsRequest)
      newMethodName: listObjectVersions
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.SetBucketCrossOriginConfigurationRequest)
      newMethodName: putBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.DeleteBucketCrossOriginConfigurationRequest)
      newMethodName: deleteBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.GetBucketCrossOriginConfigurationRequest)
      newMethodName: getBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketVersioningConfiguration(com.amazonaws.services.s3.model.GetBucketVersioningConfigurationRequest)
      newMethodName: getBucketVersioning
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteBucketLifecycleConfiguration(com.amazonaws.services.s3.model.DeleteBucketLifecycleConfigurationRequest)
      newMethodName: deleteBucketLifecycle
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteBucketReplicationConfiguration(com.amazonaws.services.s3.model.DeleteBucketReplicationConfigurationRequest)
      newMethodName: deleteBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteBucketTaggingConfiguration(com.amazonaws.services.s3.model.DeleteBucketTaggingConfigurationRequest)
      newMethodName: deleteBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteBucketWebsiteConfiguration(com.amazonaws.services.s3.model.DeleteBucketWebsiteConfigurationRequest)
      newMethodName: deleteBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketLoggingConfiguration(com.amazonaws.services.s3.model.GetBucketLoggingConfigurationRequest)
      newMethodName: getBucketLogging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketReplicationConfiguration(com.amazonaws.services.s3.model.GetBucketReplicationConfigurationRequest)
      newMethodName: getBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketTaggingConfiguration(com.amazonaws.services.s3.model.GetBucketTaggingConfigurationRequest)
      newMethodName: getBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketWebsiteConfiguration(com.amazonaws.services.s3.model.GetBucketWebsiteConfigurationRequest)
      newMethodName: getBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 deleteVersion(com.amazonaws.services.s3.model.DeleteObjectRequest)
      newMethodName: deleteObject
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketPolicy(com.amazonaws.services.s3.model.PutBucketPolicyRequest)
      newMethodName: putBucketPolicy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 copyPart(com.amazonaws.services.s3.model.CopyPartRequest)
      newMethodName: uploadPartCopy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketAccelerateConfiguration(com.amazonaws.services.s3.model.SetBucketAccelerateConfigurationRequest)
      newMethodName: putBucketAccelerateConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketAnalyticsConfiguration(com.amazonaws.services.s3.model.SetBucketAnalyticsConfigurationRequest)
      newMethodName: putBucketAnalyticsConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketIntelligentTieringConfiguration(com.amazonaws.services.s3.model.SetBucketIntelligentTieringConfigurationRequest)
      newMethodName: putBucketIntelligentTieringConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketInventoryConfiguration(com.amazonaws.services.s3.model.SetBucketInventoryConfigurationRequest)
      newMethodName: putBucketInventoryConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketLifecycleConfiguration(com.amazonaws.services.s3.model.SetBucketLifecycleConfigurationRequest)
      newMethodName: putBucketLifecycleConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketMetricsConfiguration(com.amazonaws.services.s3.model.SetBucketMetricsConfigurationRequest)
      newMethodName: putBucketMetricsConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketNotificationConfiguration(com.amazonaws.services.s3.model.SetBucketNotificationConfigurationRequest)
      newMethodName: putBucketNotificationConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketOwnershipControls(com.amazonaws.services.s3.model.SetBucketOwnershipControlsRequest)
      newMethodName: putBucketOwnershipControls
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketReplicationConfiguration(com.amazonaws.services.s3.model.SetBucketReplicationConfigurationRequest)
      newMethodName: putBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketTaggingConfiguration(com.amazonaws.services.s3.model.SetBucketTaggingConfigurationRequest)
      newMethodName: putBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3 setBucketWebsiteConfiguration(com.amazonaws.services.s3.model.SetBucketWebsiteConfigurationRequest)
      newMethodName: putBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getObjectMetadata(com.amazonaws.services.s3.model.GetObjectMetadataRequest)
      newMethodName: headObject
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client initiateMultipartUpload(com.amazonaws.services.s3.model.InitiateMultipartUploadRequest)
      newMethodName: createMultipartUpload
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client listVersions(com.amazonaws.services.s3.model.ListVersionsRequest)
      newMethodName: listObjectVersions
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.SetBucketCrossOriginConfigurationRequest)
      newMethodName: putBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.DeleteBucketCrossOriginConfigurationRequest)
      newMethodName: deleteBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketCrossOriginConfiguration(com.amazonaws.services.s3.model.GetBucketCrossOriginConfigurationRequest)
      newMethodName: getBucketCors
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketVersioningConfiguration(com.amazonaws.services.s3.model.GetBucketVersioningConfigurationRequest)
      newMethodName: getBucketVersioning
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteBucketLifecycleConfiguration(com.amazonaws.services.s3.model.DeleteBucketLifecycleConfigurationRequest)
      newMethodName: deleteBucketLifecycle
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteBucketReplicationConfiguration(com.amazonaws.services.s3.model.DeleteBucketReplicationConfigurationRequest)
      newMethodName: deleteBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteBucketTaggingConfiguration(com.amazonaws.services.s3.model.DeleteBucketTaggingConfigurationRequest)
      newMethodName: deleteBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteBucketWebsiteConfiguration(com.amazonaws.services.s3.model.DeleteBucketWebsiteConfigurationRequest)
      newMethodName: deleteBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketLoggingConfiguration(com.amazonaws.services.s3.model.GetBucketLoggingConfigurationRequest)
      newMethodName: getBucketLogging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketReplicationConfiguration(com.amazonaws.services.s3.model.GetBucketReplicationConfigurationRequest)
      newMethodName: getBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketTaggingConfiguration(com.amazonaws.services.s3.model.GetBucketTaggingConfigurationRequest)
      newMethodName: getBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketWebsiteConfiguration(com.amazonaws.services.s3.model.GetBucketWebsiteConfigurationRequest)
      newMethodName: getBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client deleteVersion(com.amazonaws.services.s3.model.DeleteObjectRequest)
      newMethodName: deleteObject
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketPolicy(com.amazonaws.services.s3.model.PutBucketPolicyRequest)
      newMethodName: putBucketPolicy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client copyPart(com.amazonaws.services.s3.model.CopyPartRequest)
      newMethodName: uploadPartCopy
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketAccelerateConfiguration(com.amazonaws.services.s3.model.SetBucketAccelerateConfigurationRequest)
      newMethodName: putBucketAccelerateConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketAnalyticsConfiguration(com.amazonaws.services.s3.model.SetBucketAnalyticsConfigurationRequest)
      newMethodName: putBucketAnalyticsConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketIntelligentTieringConfiguration(com.amazonaws.services.s3.model.SetBucketIntelligentTieringConfigurationRequest)
      newMethodName: putBucketIntelligentTieringConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketInventoryConfiguration(com.amazonaws.services.s3.model.SetBucketInventoryConfigurationRequest)
      newMethodName: putBucketInventoryConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketLifecycleConfiguration(com.amazonaws.services.s3.model.SetBucketLifecycleConfigurationRequest)
      newMethodName: putBucketLifecycleConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketMetricsConfiguration(com.amazonaws.services.s3.model.SetBucketMetricsConfigurationRequest)
      newMethodName: putBucketMetricsConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketNotificationConfiguration(com.amazonaws.services.s3.model.SetBucketNotificationConfigurationRequest)
      newMethodName: putBucketNotificationConfiguration
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketOwnershipControls(com.amazonaws.services.s3.model.SetBucketOwnershipControlsRequest)
      newMethodName: putBucketOwnershipControls
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketReplicationConfiguration(com.amazonaws.services.s3.model.SetBucketReplicationConfigurationRequest)
      newMethodName: putBucketReplication
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketTaggingConfiguration(com.amazonaws.services.s3.model.SetBucketTaggingConfigurationRequest)
      newMethodName: putBucketTagging
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client setBucketWebsiteConfiguration(com.amazonaws.services.s3.model.SetBucketWebsiteConfigurationRequest)
      newMethodName: putBucketWebsite
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.BucketCrossOriginConfiguration withRules(com.amazonaws.services.s3.model.CORSRule...)
      newMethodName: withCorsRules
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.ListObjectsRequest withBucketName(String)
      newMethodName: withBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.ListObjectsV2Request withBucketName(String)
      newMethodName: withBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.CopyPartRequest withSourceBucketName(String)
      newMethodName: withSourceBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.CopyPartRequest withDestinationBucketName(String)
      newMethodName: withDestinationBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.analytics.AnalyticsS3BucketDestination withBucketArn(String)
      newMethodName: withBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.CompleteMultipartUploadRequest withBucketName(String)
      newMethodName: withBucket
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.services.s3.model.CompleteMultipartUploadRequest withPartETags(java.util.List)
      newMethodName: withMultipartUpload

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
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("software.amazon.awssdk.v2migration.S3MethodsToV2")
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
        activeRecipe("software.amazon.awssdk.v2migration.S3MethodsToV2")
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
            <recipe>software.amazon.awssdk.v2migration.S3MethodsToV2</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=software.amazon.awssdk.v2migration.S3MethodsToV2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe S3MethodsToV2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.S3MethodsToV2" />

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

