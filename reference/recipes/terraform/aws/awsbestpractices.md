# Best practices for AWS

**org.openrewrite.terraform.aws.AWSBestPractices**

_Securely operate on Amazon Web Services._

### Tags

* terraform
* AWS

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/aws.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.3.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.3.9

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

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

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.3.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.AWSBestPractices")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.3.9")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-terraform:2.3.9")
    }
    rewrite {
        activeRecipe("org.openrewrite.terraform.aws.AWSBestPractices")
        exportDatatables = true
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.AWSBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.3.9</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.aws.AWSBestPractices -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AWSBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.aws.AWSBestPractices)

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


## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [pocan101](mailto:jcortesd@gmail.com), [Kun Li](mailto:kun@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
