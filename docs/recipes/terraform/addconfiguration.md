---
sidebar_label: "Add Terraform configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add Terraform configuration

**org.openrewrite.terraform.AddConfiguration**

_If the configuration has a different value, leave it alone. If it is missing, add it._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | resourceName | A Terraform resource name, without the quotes. | `aws_ebs_volume` |
| `String` | content | Terraform to insert if an attribute with the same name or block with the same 'type' is not found. | `encrypted = true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Disable Instance Metadata Service version 1](/recipes/terraform/aws/disableinstancemetadataservicev1.md)
* [Disable Kubernetes dashboard](/recipes/terraform/azure/disablekubernetesdashboard.md)
* [Enable API gateway caching](/recipes/terraform/aws/enableapigatewaycaching.md)
* [Enable Azure Storage Account Trusted Microsoft Services access](/recipes/terraform/azure/enableazurestorageaccounttrustedmicrosoftservicesaccess.md)
* [Enable Azure Storage secure transfer required](/recipes/terraform/azure/enableazurestoragesecuretransferrequired.md)
* [Enable VPC Flow Logs for subnetworks](/recipes/terraform/gcp/enablevpcflowlogsforsubnetworks.md)
* [Enable VPC flow logs and intranode visibility](/recipes/terraform/gcp/enablevpcflowlogsandintranodevisibility.md)
* [Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters](/recipes/terraform/gcp/enablepodsecuritypolicycontrollerongkeclusters.md)
* [Enable geo-redundant backups on PostgreSQL server](/recipes/terraform/azure/enablegeoredundantbackupsonpostgresqlserver.md)
* [Enable point-in-time recovery for DynamoDB](/recipes/terraform/aws/enabledynamodbpitr.md)
* [Encrypt Aurora clusters](/recipes/terraform/aws/encryptauroraclusters.md)
* [Encrypt Azure VM data disk with ADE/CMK](/recipes/terraform/azure/encryptazurevmdatadiskwithadecmk.md)
* [Encrypt CodeBuild projects](/recipes/terraform/aws/encryptcodebuild.md)
* [Encrypt DAX storage at rest](/recipes/terraform/aws/encryptdaxstorage.md)
* [Encrypt DocumentDB storage](/recipes/terraform/aws/encryptdocumentdb.md)
* [Encrypt EBS snapshots](/recipes/terraform/aws/encryptebssnapshots.md)
* [Encrypt EBS volume launch configurations](/recipes/terraform/aws/encryptebsvolumelaunchconfiguration.md)
* [Encrypt EBS volumes](/recipes/terraform/aws/encryptebsvolumes.md)
* [Encrypt EFS Volumes in ECS Task Definitions in transit](/recipes/terraform/aws/encryptefsvolumesinecstaskdefinitionsintransit.md)
* [Encrypt ElastiCache Redis at rest](/recipes/terraform/aws/encryptelasticacheredisatrest.md)
* [Encrypt ElastiCache Redis in transit](/recipes/terraform/aws/encryptelasticacheredisintransit.md)
* [Encrypt Neptune storage](/recipes/terraform/aws/encryptneptunestorage.md)
* [Encrypt RDS clusters](/recipes/terraform/aws/encryptrdsclusters.md)
* [Encrypt Redshift storage at rest](/recipes/terraform/aws/encryptredshift.md)
* [Ensure AKS policies add-on](/recipes/terraform/azure/ensureakspoliciesaddon.md)
* [Ensure AKV secrets have an expiration date set](/recipes/terraform/azure/ensureakvsecretshaveanexpirationdateset.md)
* [Ensure AWS CMK rotation is enabled](/recipes/terraform/aws/ensureawscmkrotationisenabled.md)
* [Ensure AWS EFS with encryption for data at rest is enabled](/recipes/terraform/aws/ensureawsefswithencryptionfordataatrestisenabled.md)
* [Ensure AWS EKS cluster endpoint access is publicly disabled](/recipes/terraform/aws/ensureawseksclusterendpointaccessispubliclydisabled.md)
* [Ensure AWS Elasticsearch domain encryption for data at rest is enabled](/recipes/terraform/aws/ensureawselasticsearchdomainencryptionfordataatrestisenabled.md)
* [Ensure AWS Elasticsearch domains have `EnforceHTTPS` enabled](/recipes/terraform/aws/ensureawselasticsearchdomainshaveenforcehttpsenabled.md)
* [Ensure AWS Elasticsearch has node-to-node encryption enabled](/recipes/terraform/aws/ensureawselasticsearchhasnodetonodeencryptionenabled.md)
* [Ensure AWS IAM password policy has a minimum of 14 characters](/recipes/terraform/aws/ensureawsiampasswordpolicyhasaminimumof14characters.md)
* [Ensure AWS Lambda function is configured for function-level concurrent execution limit](/recipes/terraform/aws/ensureawslambdafunctionisconfiguredforfunctionlevelconcurrentexecutionlimit.md)
* [Ensure AWS Lambda functions have tracing enabled](/recipes/terraform/aws/ensureawslambdafunctionshavetracingenabled.md)
* [Ensure AWS RDS database instance is not publicly accessible](/recipes/terraform/aws/ensureawsrdsdatabaseinstanceisnotpubliclyaccessible.md)
* [Ensure AWS S3 object versioning is enabled](/recipes/terraform/aws/ensureawss3objectversioningisenabled.md)
* [Ensure Amazon EKS control plane logging enabled for all log types](/recipes/terraform/aws/ensureamazonekscontrolplaneloggingenabledforalllogtypes.md)
* [Ensure Azure App Service Web app redirects HTTP to HTTPS](/recipes/terraform/azure/ensureazureappservicewebappredirectshttptohttps.md)
* [Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days](/recipes/terraform/azure/ensureazurenetworkwatchernsgflowlogsretentionisgreaterthan90days.md)
* [Ensure Azure PostgreSQL database server with SSL connection is enabled](/recipes/terraform/azure/ensureazurepostgresqldatabaseserverwithsslconnectionisenabled.md)
* [Ensure Azure SQL Server threat detection alerts are enabled for all threat types](/recipes/terraform/azure/ensureazuresqlserverthreatdetectionalertsareenabledforallthreattypes.md)
* [Ensure Azure SQL server audit log retention is greater than 90 days](/recipes/terraform/azure/ensureazuresqlserverauditlogretentionisgreaterthan90days.md)
* [Ensure Azure SQL server send alerts to field value is set](/recipes/terraform/azure/ensureazuresqlserversendalertstofieldvalueisset.md)
* [Ensure Azure application gateway has WAF enabled](/recipes/terraform/azure/ensureazureapplicationgatewayhaswafenabled.md)
* [Ensure Azure key vault is recoverable](/recipes/terraform/azure/ensureazurekeyvaultisrecoverable.md)
* [Ensure CloudTrail log file validation is enabled](/recipes/terraform/aws/ensurecloudtraillogfilevalidationisenabled.md)
* [Ensure EC2 is EBS optimized](/recipes/terraform/aws/ensureec2isebsoptimized.md)
* [Ensure ECR repositories are encrypted](/recipes/terraform/aws/ensureecrrepositoriesareencrypted.md)
* [Ensure FTP Deployments are disabled](/recipes/terraform/azure/ensureftpdeploymentsaredisabled.md)
* [Ensure GCP Kubernetes cluster node auto-repair configuration is enabled](/recipes/terraform/gcp/ensuregcpkubernetesclusternodeautorepairconfigurationisenabled.md)
* [Ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled](/recipes/terraform/gcp/ensuregcpkubernetesengineclustershavelegacycomputeenginemetadataendpointsdisabled.md)
* [Ensure GCP VM instances have block project-wide SSH keys feature enabled](/recipes/terraform/gcp/ensuregcpvminstanceshaveblockprojectwidesshkeysfeatureenabled.md)
* [Ensure GCP cloud storage bucket with uniform bucket-level access are enabled](/recipes/terraform/gcp/ensuregcpcloudstoragebucketwithuniformbucketlevelaccessareenabled.md)
* [Ensure IAM password policy expires passwords within 90 days or less](/recipes/terraform/aws/ensureiampasswordpolicyexpirespasswordswithin90daysorless.md)
* [Ensure IAM password policy prevents password reuse](/recipes/terraform/aws/ensureiampasswordpolicypreventspasswordreuse.md)
* [Ensure IAM password policy requires at least one lowercase letter](/recipes/terraform/aws/ensureiampasswordpolicyrequiresatleastonelowercaseletter.md)
* [Ensure IAM password policy requires at least one number](/recipes/terraform/aws/ensureiampasswordpolicyrequiresatleastonenumber.md)
* [Ensure IAM password policy requires at least one symbol](/recipes/terraform/aws/ensureiampasswordpolicyrequiresatleastonesymbol.md)
* [Ensure IAM password policy requires at least one uppercase letter](/recipes/terraform/aws/ensureiampasswordpolicyrequiresatleastoneuppercaseletter.md)
* [Ensure IP forwarding on instances is disabled](/recipes/terraform/gcp/ensureipforwardingoninstancesisdisabled.md)
* [Ensure Kinesis Stream is securely encrypted](/recipes/terraform/aws/ensurekinesisstreamissecurelyencrypted.md)
* [Ensure MSSQL servers have email service and co-administrators enabled](/recipes/terraform/azure/ensuremssqlservershaveemailserviceandcoadministratorsenabled.md)
* [Ensure MySQL is using the latest version of TLS encryption](/recipes/terraform/azure/ensuremysqlisusingthelatestversionoftlsencryption.md)
* [Ensure MySQL server databases have Enforce SSL connection enabled](/recipes/terraform/azure/ensuremysqlserverdatabaseshaveenforcesslconnectionenabled.md)
* [Ensure MySQL server disables public network access](/recipes/terraform/azure/ensuremysqlserverdisablespublicnetworkaccess.md)
* [Ensure MySQL server enables Threat Detection policy](/recipes/terraform/azure/ensuremysqlserverenablesthreatdetectionpolicy.md)
* [Ensure MySQL server enables geo-redundant backups](/recipes/terraform/azure/ensuremysqlserverenablesgeoredundantbackups.md)
* [Ensure PostgreSQL server disables public network access](/recipes/terraform/azure/ensurepostgresqlserverdisablespublicnetworkaccess.md)
* [Ensure PostgreSQL server enables Threat Detection policy](/recipes/terraform/azure/ensurepostgresqlserverenablesthreatdetectionpolicy.md)
* [Ensure PostgreSQL server enables infrastructure encryption](/recipes/terraform/azure/ensurepostgresqlserverenablesinfrastructureencryption.md)
* [Ensure RDS database has IAM authentication enabled](/recipes/terraform/aws/ensurerdsdatabasehasiamauthenticationenabled.md)
* [Ensure RDS instances have Multi-AZ enabled](/recipes/terraform/aws/ensurerdsinstanceshavemultiazenabled.md)
* [Ensure Send email notification for high severity alerts is enabled](/recipes/terraform/azure/ensuresendemailnotificationforhighseverityalertsisenabled.md)
* [Ensure Send email notification for high severity alerts to admins is enabled](/recipes/terraform/azure/ensuresendemailnotificationforhighseverityalertstoadminsisenabled.md)
* [Ensure VPC subnets do not assign public IP by default](/recipes/terraform/aws/ensurevpcsubnetsdonotassignpublicipbydefault.md)
* [Ensure Web App has incoming client certificates enabled](/recipes/terraform/azure/ensurewebapphasincomingclientcertificatesenabled.md)
* [Ensure Web App uses the latest version of HTTP](/recipes/terraform/azure/ensurewebappusesthelatestversionofhttp.md)
* [Ensure Web App uses the latest version of TLS encryption](/recipes/terraform/azure/ensurewebappusesthelatestversionoftlsencryption.md)
* [Ensure a security contact phone number is present](/recipes/terraform/azure/ensureasecuritycontactphonenumberispresent.md)
* [Ensure activity log retention is set to 365 days or greater](/recipes/terraform/azure/ensureactivitylogretentionissetto365daysorgreater.md)
* [Ensure all keys have an expiration date](/recipes/terraform/azure/ensureallkeyshaveanexpirationdate.md)
* [Ensure app service enables HTTP logging](/recipes/terraform/azure/ensureappserviceenableshttplogging.md)
* [Ensure app service enables detailed error messages](/recipes/terraform/azure/ensureappserviceenablesdetailederrormessages.md)
* [Ensure app service enables failed request tracing](/recipes/terraform/azure/ensureappserviceenablesfailedrequesttracing.md)
* [Ensure app services use Azure files](/recipes/terraform/azure/ensureappservicesuseazurefiles.md)
* [Ensure binary authorization is used](/recipes/terraform/gcp/ensurebinaryauthorizationisused.md)
* [Ensure compute instances launch with shielded VM enabled](/recipes/terraform/gcp/ensurecomputeinstanceslaunchwithshieldedvmenabled.md)
* [Ensure data stored in an S3 bucket is securely encrypted at rest](/recipes/terraform/aws/ensuredatastoredinans3bucketissecurelyencryptedatrest.md)
* [Ensure detailed monitoring for EC2 instances is enabled](/recipes/terraform/aws/ensuredetailedmonitoringforec2instancesisenabled.md)
* [Ensure enhanced monitoring for Amazon RDS instances is enabled](/recipes/terraform/aws/ensureenhancedmonitoringforamazonrdsinstancesisenabled.md)
* [Ensure key vault allows firewall rules settings](/recipes/terraform/azure/ensurekeyvaultallowsfirewallrulessettings.md)
* [Ensure key vault enables purge protection](/recipes/terraform/azure/ensurekeyvaultenablespurgeprotection.md)
* [Ensure key vault key is backed by HSM](/recipes/terraform/azure/ensurekeyvaultkeyisbackedbyhsm.md)
* [Ensure key vault secrets have `content_type` set](/recipes/terraform/azure/ensurekeyvaultsecretshavecontenttypeset.md)
* [Ensure log profile is configured to capture all activities](/recipes/terraform/azure/ensurelogprofileisconfiguredtocaptureallactivities.md)
* [Ensure managed identity provider is enabled for app services](/recipes/terraform/azure/ensuremanagedidentityproviderisenabledforappservices.md)
* [Ensure private cluster is enabled when creating Kubernetes clusters](/recipes/terraform/gcp/ensureprivateclusterisenabledwhencreatingkubernetesclusters.md)
* [Ensure public network access enabled is set to False for mySQL servers](/recipes/terraform/azure/ensurepublicnetworkaccessenabledissettofalseformysqlservers.md)
* [Ensure respective logs of Amazon RDS are enabled](/recipes/terraform/aws/ensurerespectivelogsofamazonrdsareenabled.md)
* [Ensure secure boot for shielded GKE nodes is enabled](/recipes/terraform/gcp/ensuresecurebootforshieldedgkenodesisenabled.md)
* [Ensure shielded GKE nodes are enabled](/recipes/terraform/gcp/ensureshieldedgkenodesareenabled.md)
* [Ensure standard pricing tier is selected](/recipes/terraform/azure/ensurestandardpricingtierisselected.md)
* [Ensure storage account uses latest TLS version](/recipes/terraform/azure/ensurestorageaccountuseslatesttlsversion.md)
* [Ensure the GKE metadata server is enabled](/recipes/terraform/gcp/ensurethegkemetadataserverisenabled.md)
* [Ensure the S3 bucket has access logging enabled](/recipes/terraform/aws/ensurethes3buckethasaccessloggingenabled.md)
* [Ensure the storage container storing activity logs is not publicly accessible](/recipes/terraform/azure/ensurethestoragecontainerstoringactivitylogsisnotpubliclyaccessible.md)
* [Make ECR tags immutable](/recipes/terraform/aws/immutableecrtags.md)
* [Scan images pushed to ECR](/recipes/terraform/aws/enableecrscanonpush.md)
* [Set Azure Storage Account default network access to deny](/recipes/terraform/azure/setazurestorageaccountdefaultnetworkaccesstodeny.md)
* [Use HTTPS for Cloudfront distribution](/recipes/terraform/aws/usehttpsforcloudfrontdistribution.md)

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|resourceName|`aws_ebs_volume`|
|content|`encrypted = true`|


<Tabs groupId="beforeAfter">
<TabItem value="hcl" label="hcl">


###### Before
```hcl
resource "aws_ebs_volume" {
  size = 1
}

resource "aws_ebs_volume" {
  # leave this one alone
  encrypted = false
}
```

###### After
```hcl
resource "aws_ebs_volume" {
  size      = 1
  encrypted = true
}

resource "aws_ebs_volume" {
  # leave this one alone
  encrypted = false
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,2 @@
resource "aws_ebs_volume" {
- size = 1
+ size      = 1
+ encrypted = true
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddConfigurationExample
displayName: Add Terraform configuration example
recipeList:
  - org.openrewrite.terraform.AddConfiguration: 
      resourceName: aws_ebs_volume
      content: encrypted = true
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AddConfiguration --recipe-option "resourceName=aws_ebs_volume" --recipe-option "content=encrypted = true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-terraform:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TERRAFORM}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.terraform.AddConfiguration" />

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
