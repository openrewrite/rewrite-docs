# Best practices for AWS

** org.openrewrite.terraform.aws.AWSBestPractices**
_Securely operate on Amazon Web Services._

### Tags

* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.6.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.22.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.AWSBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.6.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.AWSBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.6.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.terraform.aws.AWSBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Encrypt EBS volumes](../../terraform/aws/encryptebsvolumes.md)
* [Encrypt EBS snapshots](../../terraform/aws/encryptebssnapshots.md)
* [Ensure AWS Elasticsearch domain encryption for data at rest is enabled](../../terraform/aws/ensureawselasticsearchdomainencryptionfordataatrestisenabled.md)
* [Ensure AWS Elasticsearch has node-to-node encryption enabled](../../terraform/aws/ensureawselasticsearchhasnodetonodeencryptionenabled.md)
* [Ensure AWS CMK rotation is enabled](../../terraform/aws/ensureawscmkrotationisenabled.md)
* [Encrypt EBS volume launch configurations](../../terraform/aws/encryptebsvolumelaunchconfiguration.md)
* [Ensure IAM password policy expires passwords within 90 days or less](../../terraform/aws/ensureiampasswordpolicyexpirespasswordswithin90daysorless.md)
* [Ensure AWS IAM password policy has a minimum of 14 characters](../../terraform/aws/ensureawsiampasswordpolicyhasaminimumof14characters.md)
* [Ensure IAM password policy requires at least one lowercase letter](../../terraform/aws/ensureiampasswordpolicyrequiresatleastonelowercaseletter.md)
* [Ensure IAM password policy requires at least one number](../../terraform/aws/ensureiampasswordpolicyrequiresatleastonenumber.md)
* [Ensure IAM password policy prevents password reuse](../../terraform/aws/ensureiampasswordpolicypreventspasswordreuse.md)
* [Ensure IAM password policy requires at least one symbol](../../terraform/aws/ensureiampasswordpolicyrequiresatleastonesymbol.md)
* [Ensure IAM password policy requires at least one uppercase letter](../../terraform/aws/ensureiampasswordpolicyrequiresatleastoneuppercaseletter.md)
* [Encrypt RDS clusters](../../terraform/aws/encryptrdsclusters.md)
* [Ensure AWS RDS database instance is not publicly accessible](../../terraform/aws/ensureawsrdsdatabaseinstanceisnotpubliclyaccessible.md)
* [Ensure data stored in an S3 bucket is securely encrypted at rest](../../terraform/aws/ensuredatastoredinans3bucketissecurelyencryptedatrest.md)
* [Ensure AWS S3 object versioning is enabled](../../terraform/aws/ensureawss3objectversioningisenabled.md)
* [Enable point-in-time recovery for DynamoDB](../../terraform/aws/enabledynamodbpitr.md)
* [Encrypt ElastiCache Redis at rest](../../terraform/aws/encryptelasticacheredisatrest.md)
* [Encrypt ElastiCache Redis in transit](../../terraform/aws/encryptelasticacheredisintransit.md)
* [Scan images pushed to ECR](../../terraform/aws/enableecrscanonpush.md)
* [Use HTTPS for Cloudfront distribution](../../terraform/aws/usehttpsforcloudfrontdistribution.md)
* [Ensure CloudTrail log file validation is enabled](../../terraform/aws/ensurecloudtraillogfilevalidationisenabled.md)
* [Ensure Amazon EKS control plane logging enabled for all log types](../../terraform/aws/ensureamazonekscontrolplaneloggingenabledforalllogtypes.md)
* [Ensure AWS EKS cluster endpoint access is publicly disabled](../../terraform/aws/ensureawseksclusterendpointaccessispubliclydisabled.md)
* [Ensure AWS EFS with encryption for data at rest is enabled](../../terraform/aws/ensureawsefswithencryptionfordataatrestisenabled.md)
* [Ensure Kinesis Stream is securely encrypted](../../terraform/aws/ensurekinesisstreamissecurelyencrypted.md)
* [Encrypt Neptune storage](../../terraform/aws/encryptneptunestorage.md)
* [Encrypt DAX storage at rest](../../terraform/aws/encryptdaxstorage.md)
* [Ensure AWS Lambda functions have tracing enabled](../../terraform/aws/ensureawslambdafunctionshavetracingenabled.md)
* [Make ECR tags immutable](../../terraform/aws/immutableecrtags.md)
* [Encrypt Redshift storage at rest](../../terraform/aws/encryptredshift.md)
* [Encrypt DocumentDB storage](../../terraform/aws/encryptdocumentdb.md)
* [Disable Instance Metadata Service version 1](../../terraform/aws/disableinstancemetadataservicev1.md)
* [Ensure AWS Elasticsearch domains have `EnforceHTTPS` enabled](../../terraform/aws/ensureawselasticsearchdomainshaveenforcehttpsenabled.md)
* [Encrypt Aurora clusters](../../terraform/aws/encryptauroraclusters.md)
* [Encrypt EFS Volumes in ECS Task Definitions in transit](../../terraform/aws/encryptefsvolumesinecstaskdefinitionsintransit.md)
* [Ensure AWS Lambda function is configured for function-level concurrent execution limit](../../terraform/aws/ensureawslambdafunctionisconfiguredforfunctionlevelconcurrentexecutionlimit.md)
* [Ensure enhanced monitoring for Amazon RDS instances is enabled](../../terraform/aws/ensureenhancedmonitoringforamazonrdsinstancesisenabled.md)
* [Enable API gateway caching](../../terraform/aws/enableapigatewaycaching.md)
* [Ensure detailed monitoring for EC2 instances is enabled](../../terraform/aws/ensuredetailedmonitoringforec2instancesisenabled.md)
* [Ensure respective logs of Amazon RDS are enabled](../../terraform/aws/ensurerespectivelogsofamazonrdsareenabled.md)
* [Ensure VPC subnets do not assign public IP by default](../../terraform/aws/ensurevpcsubnetsdonotassignpublicipbydefault.md)
* [Ensure EC2 is EBS optimized](../../terraform/aws/ensureec2isebsoptimized.md)
* [Ensure ECR repositories are encrypted](../../terraform/aws/ensureecrrepositoriesareencrypted.md)
* [Encrypt CodeBuild projects](../../terraform/aws/encryptcodebuild.md)
* [Ensure RDS instances have Multi-AZ enabled](../../terraform/aws/ensurerdsinstanceshavemultiazenabled.md)
* [Ensure RDS database has IAM authentication enabled](../../terraform/aws/ensurerdsdatabasehasiamauthenticationenabled.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.aws.AWSBestPractices
displayName: Best practices for AWS
description: Securely operate on Amazon Web Services.
tags:
  - terraform
  - AWS
recipeList:
  - org.openrewrite.terraform.aws.EncryptEBSVolumes
  - org.openrewrite.terraform.aws.EncryptEBSSnapshots
  - org.openrewrite.terraform.aws.EnsureAWSElasticsearchDomainEncryptionForDataAtRestIsEnabled
  - org.openrewrite.terraform.aws.EnsureAWSElasticsearchHasNodeToNodeEncryptionEnabled
  - org.openrewrite.terraform.aws.EnsureAWSCMKRotationIsEnabled
  - org.openrewrite.terraform.aws.EncryptEBSVolumeLaunchConfiguration
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyExpiresPasswordsWithin90DaysOrLess
  - org.openrewrite.terraform.aws.EnsureAWSIAMPasswordPolicyHasAMinimumOf14Characters
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyRequiresAtLeastOneLowercaseLetter
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyRequiresAtLeastOneNumber
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyPreventsPasswordReuse
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyRequiresAtLeastOneSymbol
  - org.openrewrite.terraform.aws.EnsureIAMPasswordPolicyRequiresAtLeastOneUppercaseLetter
  - org.openrewrite.terraform.aws.EncryptRDSClusters
  - org.openrewrite.terraform.aws.EnsureAWSRDSDatabaseInstanceIsNotPubliclyAccessible
  - org.openrewrite.terraform.aws.EnsureDataStoredInAnS3BucketIsSecurelyEncryptedAtRest
  - org.openrewrite.terraform.aws.EnsureAWSS3ObjectVersioningIsEnabled
  - org.openrewrite.terraform.aws.EnableDynamoDbPITR
  - org.openrewrite.terraform.aws.EncryptElastiCacheRedisAtRest
  - org.openrewrite.terraform.aws.EncryptElastiCacheRedisInTransit
  - org.openrewrite.terraform.aws.EnableECRScanOnPush
  - org.openrewrite.terraform.aws.UseHttpsForCloudfrontDistribution
  - org.openrewrite.terraform.aws.EnsureCloudTrailLogFileValidationIsEnabled
  - org.openrewrite.terraform.aws.EnsureAmazonEKSControlPlaneLoggingEnabledForAllLogTypes
  - org.openrewrite.terraform.aws.EnsureAWSEKSClusterEndpointAccessIsPubliclyDisabled
  - org.openrewrite.terraform.aws.EnsureAWSEFSWithEncryptionForDataAtRestIsEnabled
  - org.openrewrite.terraform.aws.EnsureKinesisStreamIsSecurelyEncrypted
  - org.openrewrite.terraform.aws.EncryptNeptuneStorage
  - org.openrewrite.terraform.aws.EncryptDAXStorage
  - org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionsHaveTracingEnabled
  - org.openrewrite.terraform.aws.ImmutableECRTags
  - org.openrewrite.terraform.aws.EncryptRedshift
  - org.openrewrite.terraform.aws.EncryptDocumentDB
  - org.openrewrite.terraform.aws.DisableInstanceMetadataServiceV1
  - org.openrewrite.terraform.aws.EnsureAWSElasticsearchDomainsHaveEnforceHTTPSEnabled
  - org.openrewrite.terraform.aws.EncryptAuroraClusters
  - org.openrewrite.terraform.aws.EncryptEFSVolumesInECSTaskDefinitionsInTransit
  - org.openrewrite.terraform.aws.EnsureAWSLambdaFunctionIsConfiguredForFunctionLevelConcurrentExecutionLimit
  - org.openrewrite.terraform.aws.EnsureEnhancedMonitoringForAmazonRDSInstancesIsEnabled
  - org.openrewrite.terraform.aws.EnableApiGatewayCaching
  - org.openrewrite.terraform.aws.EnsureDetailedMonitoringForEC2InstancesIsEnabled
  - org.openrewrite.terraform.aws.EnsureRespectiveLogsOfAmazonRDSAreEnabled
  - org.openrewrite.terraform.aws.EnsureVPCSubnetsDoNotAssignPublicIPByDefault
  - org.openrewrite.terraform.aws.EnsureEC2IsEBSOptimized
  - org.openrewrite.terraform.aws.EnsureECRRepositoriesAreEncrypted
  - org.openrewrite.terraform.aws.EncryptCodeBuild
  - org.openrewrite.terraform.aws.EnsureRDSInstancesHaveMultiAZEnabled
  - org.openrewrite.terraform.aws.EnsureRDSDatabaseHasIAMAuthenticationEnabled

```
{% endtab %}
{% endtabs %}
