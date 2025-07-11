---
sidebar_label: "Change v1 Maven/Gradle dependencies to v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change v1 Maven/Gradle dependencies to v2

**software.amazon.awssdk.v2migration.UpgradeSdkDependencies**

_Change v1 Maven/Gradle dependencies to v2._

## Recipe source

[GitHub](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.UpgradeSdkDependencies), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../../../java/dependencies/adddependency)
  * groupId: `software.amazon.awssdk`
  * artifactId: `apache-client`
  * version: `2.31.75`
  * onlyIfUsing: `com.amazonaws.ClientConfiguration`
* [Add Gradle or Maven dependency](../../../../java/dependencies/adddependency)
  * groupId: `software.amazon.awssdk`
  * artifactId: `netty-nio-client`
  * version: `2.31.75`
  * onlyIfUsing: `com.amazonaws.ClientConfiguration`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-core`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `aws-core`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bom`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bom`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iot`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotdataplane`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-oam`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `oam`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotwireless`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotwireless`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-forecast`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `forecast`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-licensemanagerlinuxsubscriptions`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `licensemanagerlinuxsubscriptions`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-docdbelastic`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `docdbelastic`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-emrcontainers`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `emrcontainers`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-timestreamwrite`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `timestreamwrite`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codebuild`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codebuild`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotdeviceadvisor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotdeviceadvisor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssmcontacts`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssmcontacts`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pcaconnectorscep`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pcaconnectorscep`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-paymentcryptographydata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `paymentcryptographydata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codeguruprofiler`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codeguruprofiler`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesis`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesis`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesisvideo`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesisvideo`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pinpoint`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pinpoint`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iottwinmaker`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iottwinmaker`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-organizations`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `organizations`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-licensemanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `licensemanager`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-shield`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `shield`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediastoredata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediastoredata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemakerruntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakerruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-signer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `signer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-servicecatalog`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `servicecatalog`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-timestreaminfluxdb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `timestreaminfluxdb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lakeformation`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lakeformation`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pcs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pcs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-licensemanagerusersubscriptions`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `licensemanagerusersubscriptions`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-secretsmanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `secretsmanager`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediaconnect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediaconnect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mwaa`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mwaa`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kms`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kms`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-quicksight`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `quicksight`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workmail`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workmail`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-eventbridge`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `eventbridge`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemakergeospatial`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakergeospatial`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-frauddetector`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `frauddetector`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elastictranscoder`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elastictranscoder`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticinference`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticinference`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lookoutequipment`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lookoutequipment`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pcaconnectorad`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pcaconnectorad`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pinpointsmsvoice`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pinpointsmsvoice`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-securitylake`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `securitylake`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudwatch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudwatch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudwatchmetrics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudwatch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-glue`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `glue`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-costoptimizationhub`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `costoptimizationhub`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-servicequotas`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `servicequotas`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-s3`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `s3`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appintegrations`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appintegrations`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sesv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sesv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-arczonalshift`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `arczonalshift`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-emr`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `emr`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-controltower`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `controltower`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotfleethub`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotfleethub`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-personalize`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `personalize`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-outposts`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `outposts`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workdocs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workdocs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-networkmanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `networkmanager`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-omics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `omics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediapackage`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediapackage`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-medialive`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `medialive`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediaconvert`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediaconvert`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplaceagreement`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplaceagreement`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cognitosync`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cognitosync`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sns`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sns`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-datasync`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `datasync`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemakeredgemanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakeredge`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-greengrassv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `greengrassv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pinpointemail`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pinpointemail`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cleanroomsml`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cleanroomsml`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-augmentedairuntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakera2iruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-neptunedata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `neptunedata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-b2bi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `b2bi`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotanalytics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotanalytics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-inspector2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `inspector2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-groundstation`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `groundstation`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-fis`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `fis`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-proton`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `proton`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-voiceid`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `voiceid`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudhsm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudhsm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ecrpublic`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ecrpublic`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-servermigration`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sms`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudtraildata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudtraildata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cognitoidentity`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cognitoidentity`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-config`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `config`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-osis`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `osis`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-private5g`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `privatenetworks`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-memorydb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `memorydb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-inspector`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `inspector`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-translate`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `translate`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mailmanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mailmanager`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-paymentcryptography`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `paymentcryptography`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chatbot`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chatbot`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-fms`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `fms`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssmincidents`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssmincidents`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-vpclattice`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `vpclattice`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-s3control`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `s3control`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-qapps`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `qapps`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-rdsdata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rdsdata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesisanalyticsv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesisanalyticsv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-qbusiness`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `qbusiness`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplacecommerceanalytics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplacecommerceanalytics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-synthetics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `synthetics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-apptest`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `apptest`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-costexplorer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `costexplorer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotsecuretunneling`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotsecuretunneling`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudfront`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudfront`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-location`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `location`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-wafv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `wafv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-opensearch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `opensearch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ec2instanceconnect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ec2instanceconnect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotthingsgraph`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotthingsgraph`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-repostspace`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `repostspace`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53recoveryreadiness`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53recoveryreadiness`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-health`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `health`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workmailmessageflow`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workmailmessageflow`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-comprehendmedical`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `comprehendmedical`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotfleetwise`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotfleetwise`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53profiles`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53profiles`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bcmdataexports`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bcmdataexports`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-accessanalyzer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `accessanalyzer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-glacier`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `glacier`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lightsail`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lightsail`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudwatchrum`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rum`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-inspectorscan`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `inspectorscan`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-imagebuilder`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `imagebuilder`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemakermetrics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakermetrics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bedrockagent`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bedrockagent`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-migrationhub`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `migrationhub`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-simspaceweaver`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `simspaceweaver`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticbeanstalk`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticbeanstalk`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-freetier`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `freetier`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudsearch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudsearchdomain`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-neptune`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `neptune`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-supportapp`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `supportapp`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-transfer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `transfer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-deadline`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `deadline`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-braket`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `braket`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-verifiedpermissions`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `verifiedpermissions`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-scheduler`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `scheduler`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplacedeployment`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplacedeployment`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-resourcegroups`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `resourcegroups`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-qldb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `qldb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-dms`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `databasemigration`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ecr`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ecr`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-dynamodb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `dynamodb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-resiliencehub`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `resiliencehub`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-qldbsession`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `qldbsession`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53domains`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-macie2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `macie2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chimesdkmeetings`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chimesdkmeetings`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-applicationautoscaling`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `applicationautoscaling`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-entityresolution`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `entityresolution`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-s3outposts`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `s3outposts`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-managedgrafana`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `grafana`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-storagegateway`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `storagegateway`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-recyclebin`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rbin`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ioteventsdata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ioteventsdata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53recoverycluster`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53recoverycluster`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ecs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ecs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticloadbalancing`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticloadbalancing`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connectcontactlens`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `connectcontactlens`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chimesdkmediapipelines`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chimesdkmediapipelines`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesisvideosignalingchannels`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesisvideosignaling`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-qconnect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `qconnect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kendraranking`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kendraranking`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudsearch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudsearch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-logs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudwatchlogs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appfabric`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appfabric`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lookoutforvision`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lookoutvision`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53resolver`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53resolver`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workspaces`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workspaces`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-machinelearning`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `machinelearning`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-costandusagereport`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `costandusagereport`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-taxsettings`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `taxsettings`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-fsx`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `fsx`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codepipeline`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codepipeline`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticloadbalancingv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticloadbalancingv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-directory`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `directory`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bedrockruntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bedrockruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codestarnotifications`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codestarnotifications`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-schemas`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `schemas`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sqs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sqs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appregistry`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `servicecatalogappregistry`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appmesh`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appmesh`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-migrationhuborchestrator`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `migrationhuborchestrator`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-discovery`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `applicationdiscovery`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iot`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iot`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesisvideowebrtcstorage`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesisvideowebrtcstorage`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ebs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ebs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-amplify`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `amplify`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudcontrolapi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudcontrol`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-wellarchitected`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `wellarchitected`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplaceentitlement`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplaceentitlement`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bedrock`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bedrock`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-redshift`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `redshift`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connectcases`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `connectcases`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appflow`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appflow`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-gamelift`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `gamelift`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudtrail`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudtrail`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-supplychain`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `supplychain`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pipes`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pipes`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudwatchevidently`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `evidently`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-amplifyuibuilder`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `amplifyuibuilder`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-managedblockchainquery`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `managedblockchainquery`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-applicationinsights`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `applicationinsights`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chimesdkmessaging`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chimesdkmessaging`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediatailor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediatailor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediapackagev2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediapackagev2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-resourceexplorer2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `resourceexplorer2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pi`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-emrserverless`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `emrserverless`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appconfig`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appconfig`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-networkmonitor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `networkmonitor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemakerfeaturestoreruntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemakerfeaturestoreruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chimesdkidentity`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chimesdkidentity`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-computeoptimizer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `computeoptimizer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connectparticipant`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `connectparticipant`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mgn`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mgn`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-applicationcostprofiler`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `applicationcostprofiler`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-new-service-template`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `new-service-template`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-keyspaces`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `keyspaces`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iam`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iam`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-networkfirewall`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `networkfirewall`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-redshiftdataapi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `redshiftdata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediastore`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediastore`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloud9`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloud9`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connectwisdom`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `wisdom`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sso`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sso`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-auditmanager`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `auditmanager`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-snowball`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `snowball`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesis`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kinesisanalytics`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53recoverycontrolconfig`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53recoverycontrolconfig`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-opsworks`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `opsworks`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-identitystore`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `identitystore`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connectcampaign`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `connectcampaigns`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-textract`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `textract`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-redshiftserverless`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `redshiftserverless`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-eks`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `eks`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-support`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `support`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mechanicalturkrequester`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mturk`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-apigatewayv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `apigatewayv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-devopsguru`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `devopsguru`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-prometheus`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `amp`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-drs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `drs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-migrationhubconfig`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `migrationhubconfig`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kafkaconnect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kafkaconnect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kafka`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kafka`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-gluedatabrew`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `databrew`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codedeploy`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codedeploy`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudhsmv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudhsmv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-batch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `batch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-savingsplans`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `savingsplans`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-migrationhubstrategyrecommendations`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `migrationhubstrategy`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appsync`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appsync`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-backupgateway`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `backupgateway`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-dlm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `dlm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-amplifybackend`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `amplifybackend`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-datazoneexternal`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `datazone`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-billingconductor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `billingconductor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workspacesthinclient`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workspacesthinclient`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssmsap`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssmsap`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-budgets`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `budgets`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mainframemodernization`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `m2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-finspace`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `finspace`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-detective`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `detective`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lambda`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lambda`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssooidc`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssooidc`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-panorama`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `panorama`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotevents`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotevents`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-managedblockchain`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `managedblockchain`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-servicediscovery`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `servicediscovery`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-waf`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `waf`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ivs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ivs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-directconnect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `directconnect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mq`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mq`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pinpointsmsvoicev2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pinpointsmsvoicev2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-internetmonitor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `internetmonitor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-artifact`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `artifact`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotsitewise`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotsitewise`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lexmodelsv2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lexmodelsv2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lexruntimev2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lexruntimev2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-serverlessapplicationrepository`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `serverlessapplicationrepository`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-eksauth`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `eksauth`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-snowdevicemanagement`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `snowdevicemanagement`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-clouddirectory`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `clouddirectory`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-mediapackagevod`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `mediapackagevod`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codestarconnections`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codestarconnections`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codeartifact`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codeartifact`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-guardduty`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `guardduty`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-worklink`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `worklink`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cleanrooms`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cleanrooms`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-customerprofiles`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `customerprofiles`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-trustedadvisor`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `trustedadvisor`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-dax`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `dax`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-opsworkscm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `opsworkscm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-docdb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `docdb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-acmpca`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `acmpca`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kinesis`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `firehose`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ivschat`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ivschat`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-globalaccelerator`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `globalaccelerator`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ses`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ses`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codegurureviewer`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codegurureviewer`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lexmodelbuilding`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lexmodelbuilding`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-medicalimaging`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `medicalimaging`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-account`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `account`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-robomaker`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `robomaker`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lex`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lexruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-autoscaling`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `autoscaling`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-nimblestudio`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `nimble`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iotjobsdataplane`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `iotjobsdataplane`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appconfigdata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appconfigdata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-controlcatalog`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `controlcatalog`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-greengrass`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `greengrass`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-securityhub`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `securityhub`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-timestreamquery`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `timestreamquery`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-backup`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `backup`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-opensearchserverless`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `opensearchserverless`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cloudformation`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudformation`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-kendra`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `kendra`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-connect`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `connect`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticache`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticache`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-stepfunctions`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sfn`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-cognitoidp`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cognitoidentityprovider`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-chimesdkvoice`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `chimesdkvoice`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-workspacesweb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `workspacesweb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-comprehend`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `comprehend`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-applicationsignals`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `applicationsignals`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplacemeteringservice`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplacemetering`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-devicefarm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `devicefarm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-rekognition`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rekognition`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-appstream`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `appstream`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-polly`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `polly`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-rds`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rds`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-pricing`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `pricing`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-simpleworkflow`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `swf`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-events`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `cloudwatchevents`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssmquicksetup`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssmquicksetup`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-autoscalingplans`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `autoscalingplans`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-datapipeline`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `datapipeline`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-transcribe`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `transcribe`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ivsrealtime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ivsrealtime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-personalizeruntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `personalizeruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-elasticsearch`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `elasticsearch`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codecommit`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codecommit`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-resourcegroupstaggingapi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `resourcegroupstaggingapi`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-forecastquery`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `forecastquery`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-healthlake`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `healthlake`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-iamrolesanywhere`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `rolesanywhere`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-personalizeevents`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `personalizeevents`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-apigatewaymanagementapi`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `apigatewaymanagementapi`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-launchwizard`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `launchwizard`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-xray`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `xray`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ssoadmin`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ssoadmin`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-api-gateway`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `apigateway`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-migrationhubrefactorspaces`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `migrationhubrefactorspaces`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ram`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ram`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codeconnections`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codeconnections`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-efs`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `efs`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-bedrockagentruntime`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `bedrockagentruntime`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-dataexchange`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `dataexchange`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sts`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sts`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-sagemaker`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `sagemaker`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-finspacedata`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `finspacedata`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-marketplacecatalog`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `marketplacecatalog`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-acm`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `acm`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-athena`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `athena`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-route53`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `route53`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-codegurusecurity`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `codegurusecurity`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-tnb`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `tnb`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-ec2`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `ec2`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-apprunner`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `apprunner`
  * newVersion: `2.31.75`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.amazonaws`
  * oldArtifactId: `aws-java-sdk-lookoutmetrics`
  * newGroupId: `software.amazon.awssdk`
  * newArtifactId: `lookoutmetrics`
  * newVersion: `2.31.75`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.UpgradeSdkDependencies
displayName: Change v1 Maven/Gradle dependencies to v2
description: |
  Change v1 Maven/Gradle dependencies to v2.
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: software.amazon.awssdk
      artifactId: apache-client
      version: 2.31.75
      onlyIfUsing: com.amazonaws.ClientConfiguration
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: software.amazon.awssdk
      artifactId: netty-nio-client
      version: 2.31.75
      onlyIfUsing: com.amazonaws.ClientConfiguration
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-core
      newGroupId: software.amazon.awssdk
      newArtifactId: aws-core
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bom
      newGroupId: software.amazon.awssdk
      newArtifactId: bom
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iot
      newGroupId: software.amazon.awssdk
      newArtifactId: iotdataplane
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-oam
      newGroupId: software.amazon.awssdk
      newArtifactId: oam
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotwireless
      newGroupId: software.amazon.awssdk
      newArtifactId: iotwireless
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-forecast
      newGroupId: software.amazon.awssdk
      newArtifactId: forecast
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-licensemanagerlinuxsubscriptions
      newGroupId: software.amazon.awssdk
      newArtifactId: licensemanagerlinuxsubscriptions
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-docdbelastic
      newGroupId: software.amazon.awssdk
      newArtifactId: docdbelastic
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-emrcontainers
      newGroupId: software.amazon.awssdk
      newArtifactId: emrcontainers
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-timestreamwrite
      newGroupId: software.amazon.awssdk
      newArtifactId: timestreamwrite
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codebuild
      newGroupId: software.amazon.awssdk
      newArtifactId: codebuild
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotdeviceadvisor
      newGroupId: software.amazon.awssdk
      newArtifactId: iotdeviceadvisor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssmcontacts
      newGroupId: software.amazon.awssdk
      newArtifactId: ssmcontacts
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pcaconnectorscep
      newGroupId: software.amazon.awssdk
      newArtifactId: pcaconnectorscep
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-paymentcryptographydata
      newGroupId: software.amazon.awssdk
      newArtifactId: paymentcryptographydata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codeguruprofiler
      newGroupId: software.amazon.awssdk
      newArtifactId: codeguruprofiler
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesis
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesis
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesisvideo
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesisvideo
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pinpoint
      newGroupId: software.amazon.awssdk
      newArtifactId: pinpoint
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chime
      newGroupId: software.amazon.awssdk
      newArtifactId: chime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iottwinmaker
      newGroupId: software.amazon.awssdk
      newArtifactId: iottwinmaker
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-organizations
      newGroupId: software.amazon.awssdk
      newArtifactId: organizations
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-licensemanager
      newGroupId: software.amazon.awssdk
      newArtifactId: licensemanager
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-shield
      newGroupId: software.amazon.awssdk
      newArtifactId: shield
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssm
      newGroupId: software.amazon.awssdk
      newArtifactId: ssm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediastoredata
      newGroupId: software.amazon.awssdk
      newArtifactId: mediastoredata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemakerruntime
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakerruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-signer
      newGroupId: software.amazon.awssdk
      newArtifactId: signer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-servicecatalog
      newGroupId: software.amazon.awssdk
      newArtifactId: servicecatalog
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-timestreaminfluxdb
      newGroupId: software.amazon.awssdk
      newArtifactId: timestreaminfluxdb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lakeformation
      newGroupId: software.amazon.awssdk
      newArtifactId: lakeformation
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pcs
      newGroupId: software.amazon.awssdk
      newArtifactId: pcs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-licensemanagerusersubscriptions
      newGroupId: software.amazon.awssdk
      newArtifactId: licensemanagerusersubscriptions
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-secretsmanager
      newGroupId: software.amazon.awssdk
      newArtifactId: secretsmanager
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediaconnect
      newGroupId: software.amazon.awssdk
      newArtifactId: mediaconnect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mwaa
      newGroupId: software.amazon.awssdk
      newArtifactId: mwaa
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kms
      newGroupId: software.amazon.awssdk
      newArtifactId: kms
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-quicksight
      newGroupId: software.amazon.awssdk
      newArtifactId: quicksight
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workmail
      newGroupId: software.amazon.awssdk
      newArtifactId: workmail
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-eventbridge
      newGroupId: software.amazon.awssdk
      newArtifactId: eventbridge
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemakergeospatial
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakergeospatial
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-frauddetector
      newGroupId: software.amazon.awssdk
      newArtifactId: frauddetector
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elastictranscoder
      newGroupId: software.amazon.awssdk
      newArtifactId: elastictranscoder
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticinference
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticinference
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lookoutequipment
      newGroupId: software.amazon.awssdk
      newArtifactId: lookoutequipment
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pcaconnectorad
      newGroupId: software.amazon.awssdk
      newArtifactId: pcaconnectorad
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pinpointsmsvoice
      newGroupId: software.amazon.awssdk
      newArtifactId: pinpointsmsvoice
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-securitylake
      newGroupId: software.amazon.awssdk
      newArtifactId: securitylake
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudwatch
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudwatch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudwatchmetrics
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudwatch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-glue
      newGroupId: software.amazon.awssdk
      newArtifactId: glue
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-costoptimizationhub
      newGroupId: software.amazon.awssdk
      newArtifactId: costoptimizationhub
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-servicequotas
      newGroupId: software.amazon.awssdk
      newArtifactId: servicequotas
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-s3
      newGroupId: software.amazon.awssdk
      newArtifactId: s3
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appintegrations
      newGroupId: software.amazon.awssdk
      newArtifactId: appintegrations
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sesv2
      newGroupId: software.amazon.awssdk
      newArtifactId: sesv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-arczonalshift
      newGroupId: software.amazon.awssdk
      newArtifactId: arczonalshift
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-emr
      newGroupId: software.amazon.awssdk
      newArtifactId: emr
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-controltower
      newGroupId: software.amazon.awssdk
      newArtifactId: controltower
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotfleethub
      newGroupId: software.amazon.awssdk
      newArtifactId: iotfleethub
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-personalize
      newGroupId: software.amazon.awssdk
      newArtifactId: personalize
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-outposts
      newGroupId: software.amazon.awssdk
      newArtifactId: outposts
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workdocs
      newGroupId: software.amazon.awssdk
      newArtifactId: workdocs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-networkmanager
      newGroupId: software.amazon.awssdk
      newArtifactId: networkmanager
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-omics
      newGroupId: software.amazon.awssdk
      newArtifactId: omics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediapackage
      newGroupId: software.amazon.awssdk
      newArtifactId: mediapackage
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-medialive
      newGroupId: software.amazon.awssdk
      newArtifactId: medialive
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediaconvert
      newGroupId: software.amazon.awssdk
      newArtifactId: mediaconvert
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplaceagreement
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplaceagreement
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cognitosync
      newGroupId: software.amazon.awssdk
      newArtifactId: cognitosync
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sns
      newGroupId: software.amazon.awssdk
      newArtifactId: sns
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-datasync
      newGroupId: software.amazon.awssdk
      newArtifactId: datasync
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemakeredgemanager
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakeredge
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-greengrassv2
      newGroupId: software.amazon.awssdk
      newArtifactId: greengrassv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pinpointemail
      newGroupId: software.amazon.awssdk
      newArtifactId: pinpointemail
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cleanroomsml
      newGroupId: software.amazon.awssdk
      newArtifactId: cleanroomsml
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-augmentedairuntime
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakera2iruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-neptunedata
      newGroupId: software.amazon.awssdk
      newArtifactId: neptunedata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-b2bi
      newGroupId: software.amazon.awssdk
      newArtifactId: b2bi
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotanalytics
      newGroupId: software.amazon.awssdk
      newArtifactId: iotanalytics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-inspector2
      newGroupId: software.amazon.awssdk
      newArtifactId: inspector2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-groundstation
      newGroupId: software.amazon.awssdk
      newArtifactId: groundstation
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-fis
      newGroupId: software.amazon.awssdk
      newArtifactId: fis
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-proton
      newGroupId: software.amazon.awssdk
      newArtifactId: proton
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-voiceid
      newGroupId: software.amazon.awssdk
      newArtifactId: voiceid
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudhsm
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudhsm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ecrpublic
      newGroupId: software.amazon.awssdk
      newArtifactId: ecrpublic
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-servermigration
      newGroupId: software.amazon.awssdk
      newArtifactId: sms
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudtraildata
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudtraildata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cognitoidentity
      newGroupId: software.amazon.awssdk
      newArtifactId: cognitoidentity
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-config
      newGroupId: software.amazon.awssdk
      newArtifactId: config
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-osis
      newGroupId: software.amazon.awssdk
      newArtifactId: osis
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-private5g
      newGroupId: software.amazon.awssdk
      newArtifactId: privatenetworks
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-memorydb
      newGroupId: software.amazon.awssdk
      newArtifactId: memorydb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-inspector
      newGroupId: software.amazon.awssdk
      newArtifactId: inspector
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-translate
      newGroupId: software.amazon.awssdk
      newArtifactId: translate
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mailmanager
      newGroupId: software.amazon.awssdk
      newArtifactId: mailmanager
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-paymentcryptography
      newGroupId: software.amazon.awssdk
      newArtifactId: paymentcryptography
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chatbot
      newGroupId: software.amazon.awssdk
      newArtifactId: chatbot
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-fms
      newGroupId: software.amazon.awssdk
      newArtifactId: fms
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssmincidents
      newGroupId: software.amazon.awssdk
      newArtifactId: ssmincidents
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-vpclattice
      newGroupId: software.amazon.awssdk
      newArtifactId: vpclattice
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-s3control
      newGroupId: software.amazon.awssdk
      newArtifactId: s3control
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-qapps
      newGroupId: software.amazon.awssdk
      newArtifactId: qapps
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-rdsdata
      newGroupId: software.amazon.awssdk
      newArtifactId: rdsdata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesisanalyticsv2
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesisanalyticsv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-qbusiness
      newGroupId: software.amazon.awssdk
      newArtifactId: qbusiness
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplacecommerceanalytics
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplacecommerceanalytics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-synthetics
      newGroupId: software.amazon.awssdk
      newArtifactId: synthetics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-apptest
      newGroupId: software.amazon.awssdk
      newArtifactId: apptest
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-costexplorer
      newGroupId: software.amazon.awssdk
      newArtifactId: costexplorer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotsecuretunneling
      newGroupId: software.amazon.awssdk
      newArtifactId: iotsecuretunneling
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudfront
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudfront
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-location
      newGroupId: software.amazon.awssdk
      newArtifactId: location
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-wafv2
      newGroupId: software.amazon.awssdk
      newArtifactId: wafv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-opensearch
      newGroupId: software.amazon.awssdk
      newArtifactId: opensearch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ec2instanceconnect
      newGroupId: software.amazon.awssdk
      newArtifactId: ec2instanceconnect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotthingsgraph
      newGroupId: software.amazon.awssdk
      newArtifactId: iotthingsgraph
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-repostspace
      newGroupId: software.amazon.awssdk
      newArtifactId: repostspace
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53recoveryreadiness
      newGroupId: software.amazon.awssdk
      newArtifactId: route53recoveryreadiness
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-health
      newGroupId: software.amazon.awssdk
      newArtifactId: health
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workmailmessageflow
      newGroupId: software.amazon.awssdk
      newArtifactId: workmailmessageflow
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-comprehendmedical
      newGroupId: software.amazon.awssdk
      newArtifactId: comprehendmedical
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotfleetwise
      newGroupId: software.amazon.awssdk
      newArtifactId: iotfleetwise
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53profiles
      newGroupId: software.amazon.awssdk
      newArtifactId: route53profiles
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bcmdataexports
      newGroupId: software.amazon.awssdk
      newArtifactId: bcmdataexports
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-accessanalyzer
      newGroupId: software.amazon.awssdk
      newArtifactId: accessanalyzer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-glacier
      newGroupId: software.amazon.awssdk
      newArtifactId: glacier
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lightsail
      newGroupId: software.amazon.awssdk
      newArtifactId: lightsail
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudwatchrum
      newGroupId: software.amazon.awssdk
      newArtifactId: rum
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-inspectorscan
      newGroupId: software.amazon.awssdk
      newArtifactId: inspectorscan
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-imagebuilder
      newGroupId: software.amazon.awssdk
      newArtifactId: imagebuilder
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemakermetrics
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakermetrics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bedrockagent
      newGroupId: software.amazon.awssdk
      newArtifactId: bedrockagent
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-migrationhub
      newGroupId: software.amazon.awssdk
      newArtifactId: migrationhub
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-simspaceweaver
      newGroupId: software.amazon.awssdk
      newArtifactId: simspaceweaver
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticbeanstalk
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticbeanstalk
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-freetier
      newGroupId: software.amazon.awssdk
      newArtifactId: freetier
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudsearch
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudsearchdomain
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-neptune
      newGroupId: software.amazon.awssdk
      newArtifactId: neptune
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-supportapp
      newGroupId: software.amazon.awssdk
      newArtifactId: supportapp
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-transfer
      newGroupId: software.amazon.awssdk
      newArtifactId: transfer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-deadline
      newGroupId: software.amazon.awssdk
      newArtifactId: deadline
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-braket
      newGroupId: software.amazon.awssdk
      newArtifactId: braket
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-verifiedpermissions
      newGroupId: software.amazon.awssdk
      newArtifactId: verifiedpermissions
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-scheduler
      newGroupId: software.amazon.awssdk
      newArtifactId: scheduler
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplacedeployment
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplacedeployment
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-resourcegroups
      newGroupId: software.amazon.awssdk
      newArtifactId: resourcegroups
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-qldb
      newGroupId: software.amazon.awssdk
      newArtifactId: qldb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-dms
      newGroupId: software.amazon.awssdk
      newArtifactId: databasemigration
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ecr
      newGroupId: software.amazon.awssdk
      newArtifactId: ecr
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-dynamodb
      newGroupId: software.amazon.awssdk
      newArtifactId: dynamodb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-resiliencehub
      newGroupId: software.amazon.awssdk
      newArtifactId: resiliencehub
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-qldbsession
      newGroupId: software.amazon.awssdk
      newArtifactId: qldbsession
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53
      newGroupId: software.amazon.awssdk
      newArtifactId: route53domains
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-macie2
      newGroupId: software.amazon.awssdk
      newArtifactId: macie2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chimesdkmeetings
      newGroupId: software.amazon.awssdk
      newArtifactId: chimesdkmeetings
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-applicationautoscaling
      newGroupId: software.amazon.awssdk
      newArtifactId: applicationautoscaling
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-entityresolution
      newGroupId: software.amazon.awssdk
      newArtifactId: entityresolution
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-s3outposts
      newGroupId: software.amazon.awssdk
      newArtifactId: s3outposts
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-managedgrafana
      newGroupId: software.amazon.awssdk
      newArtifactId: grafana
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-storagegateway
      newGroupId: software.amazon.awssdk
      newArtifactId: storagegateway
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-recyclebin
      newGroupId: software.amazon.awssdk
      newArtifactId: rbin
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ioteventsdata
      newGroupId: software.amazon.awssdk
      newArtifactId: ioteventsdata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53recoverycluster
      newGroupId: software.amazon.awssdk
      newArtifactId: route53recoverycluster
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ecs
      newGroupId: software.amazon.awssdk
      newArtifactId: ecs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticloadbalancing
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticloadbalancing
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connectcontactlens
      newGroupId: software.amazon.awssdk
      newArtifactId: connectcontactlens
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chimesdkmediapipelines
      newGroupId: software.amazon.awssdk
      newArtifactId: chimesdkmediapipelines
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesisvideosignalingchannels
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesisvideosignaling
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-qconnect
      newGroupId: software.amazon.awssdk
      newArtifactId: qconnect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kendraranking
      newGroupId: software.amazon.awssdk
      newArtifactId: kendraranking
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudsearch
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudsearch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-logs
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudwatchlogs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appfabric
      newGroupId: software.amazon.awssdk
      newArtifactId: appfabric
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lookoutforvision
      newGroupId: software.amazon.awssdk
      newArtifactId: lookoutvision
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53resolver
      newGroupId: software.amazon.awssdk
      newArtifactId: route53resolver
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workspaces
      newGroupId: software.amazon.awssdk
      newArtifactId: workspaces
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-machinelearning
      newGroupId: software.amazon.awssdk
      newArtifactId: machinelearning
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-costandusagereport
      newGroupId: software.amazon.awssdk
      newArtifactId: costandusagereport
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-taxsettings
      newGroupId: software.amazon.awssdk
      newArtifactId: taxsettings
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-fsx
      newGroupId: software.amazon.awssdk
      newArtifactId: fsx
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codepipeline
      newGroupId: software.amazon.awssdk
      newArtifactId: codepipeline
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticloadbalancingv2
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticloadbalancingv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-directory
      newGroupId: software.amazon.awssdk
      newArtifactId: directory
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bedrockruntime
      newGroupId: software.amazon.awssdk
      newArtifactId: bedrockruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codestarnotifications
      newGroupId: software.amazon.awssdk
      newArtifactId: codestarnotifications
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-schemas
      newGroupId: software.amazon.awssdk
      newArtifactId: schemas
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sqs
      newGroupId: software.amazon.awssdk
      newArtifactId: sqs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appregistry
      newGroupId: software.amazon.awssdk
      newArtifactId: servicecatalogappregistry
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appmesh
      newGroupId: software.amazon.awssdk
      newArtifactId: appmesh
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-migrationhuborchestrator
      newGroupId: software.amazon.awssdk
      newArtifactId: migrationhuborchestrator
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-discovery
      newGroupId: software.amazon.awssdk
      newArtifactId: applicationdiscovery
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iot
      newGroupId: software.amazon.awssdk
      newArtifactId: iot
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesisvideowebrtcstorage
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesisvideowebrtcstorage
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ebs
      newGroupId: software.amazon.awssdk
      newArtifactId: ebs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-amplify
      newGroupId: software.amazon.awssdk
      newArtifactId: amplify
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudcontrolapi
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudcontrol
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-wellarchitected
      newGroupId: software.amazon.awssdk
      newArtifactId: wellarchitected
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplaceentitlement
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplaceentitlement
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bedrock
      newGroupId: software.amazon.awssdk
      newArtifactId: bedrock
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-redshift
      newGroupId: software.amazon.awssdk
      newArtifactId: redshift
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connectcases
      newGroupId: software.amazon.awssdk
      newArtifactId: connectcases
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appflow
      newGroupId: software.amazon.awssdk
      newArtifactId: appflow
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-gamelift
      newGroupId: software.amazon.awssdk
      newArtifactId: gamelift
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudtrail
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudtrail
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-supplychain
      newGroupId: software.amazon.awssdk
      newArtifactId: supplychain
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pipes
      newGroupId: software.amazon.awssdk
      newArtifactId: pipes
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudwatchevidently
      newGroupId: software.amazon.awssdk
      newArtifactId: evidently
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-amplifyuibuilder
      newGroupId: software.amazon.awssdk
      newArtifactId: amplifyuibuilder
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-managedblockchainquery
      newGroupId: software.amazon.awssdk
      newArtifactId: managedblockchainquery
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-applicationinsights
      newGroupId: software.amazon.awssdk
      newArtifactId: applicationinsights
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chimesdkmessaging
      newGroupId: software.amazon.awssdk
      newArtifactId: chimesdkmessaging
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediatailor
      newGroupId: software.amazon.awssdk
      newArtifactId: mediatailor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediapackagev2
      newGroupId: software.amazon.awssdk
      newArtifactId: mediapackagev2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-resourceexplorer2
      newGroupId: software.amazon.awssdk
      newArtifactId: resourceexplorer2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pi
      newGroupId: software.amazon.awssdk
      newArtifactId: pi
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-emrserverless
      newGroupId: software.amazon.awssdk
      newArtifactId: emrserverless
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appconfig
      newGroupId: software.amazon.awssdk
      newArtifactId: appconfig
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-networkmonitor
      newGroupId: software.amazon.awssdk
      newArtifactId: networkmonitor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemakerfeaturestoreruntime
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemakerfeaturestoreruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chimesdkidentity
      newGroupId: software.amazon.awssdk
      newArtifactId: chimesdkidentity
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-computeoptimizer
      newGroupId: software.amazon.awssdk
      newArtifactId: computeoptimizer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connectparticipant
      newGroupId: software.amazon.awssdk
      newArtifactId: connectparticipant
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mgn
      newGroupId: software.amazon.awssdk
      newArtifactId: mgn
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-applicationcostprofiler
      newGroupId: software.amazon.awssdk
      newArtifactId: applicationcostprofiler
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-new-service-template
      newGroupId: software.amazon.awssdk
      newArtifactId: new-service-template
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-keyspaces
      newGroupId: software.amazon.awssdk
      newArtifactId: keyspaces
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iam
      newGroupId: software.amazon.awssdk
      newArtifactId: iam
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-networkfirewall
      newGroupId: software.amazon.awssdk
      newArtifactId: networkfirewall
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-redshiftdataapi
      newGroupId: software.amazon.awssdk
      newArtifactId: redshiftdata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediastore
      newGroupId: software.amazon.awssdk
      newArtifactId: mediastore
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloud9
      newGroupId: software.amazon.awssdk
      newArtifactId: cloud9
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connectwisdom
      newGroupId: software.amazon.awssdk
      newArtifactId: wisdom
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sso
      newGroupId: software.amazon.awssdk
      newArtifactId: sso
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-auditmanager
      newGroupId: software.amazon.awssdk
      newArtifactId: auditmanager
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-snowball
      newGroupId: software.amazon.awssdk
      newArtifactId: snowball
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesis
      newGroupId: software.amazon.awssdk
      newArtifactId: kinesisanalytics
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53recoverycontrolconfig
      newGroupId: software.amazon.awssdk
      newArtifactId: route53recoverycontrolconfig
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-opsworks
      newGroupId: software.amazon.awssdk
      newArtifactId: opsworks
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-identitystore
      newGroupId: software.amazon.awssdk
      newArtifactId: identitystore
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connectcampaign
      newGroupId: software.amazon.awssdk
      newArtifactId: connectcampaigns
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-textract
      newGroupId: software.amazon.awssdk
      newArtifactId: textract
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-redshiftserverless
      newGroupId: software.amazon.awssdk
      newArtifactId: redshiftserverless
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-eks
      newGroupId: software.amazon.awssdk
      newArtifactId: eks
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-support
      newGroupId: software.amazon.awssdk
      newArtifactId: support
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mechanicalturkrequester
      newGroupId: software.amazon.awssdk
      newArtifactId: mturk
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-apigatewayv2
      newGroupId: software.amazon.awssdk
      newArtifactId: apigatewayv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-devopsguru
      newGroupId: software.amazon.awssdk
      newArtifactId: devopsguru
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-prometheus
      newGroupId: software.amazon.awssdk
      newArtifactId: amp
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-drs
      newGroupId: software.amazon.awssdk
      newArtifactId: drs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-migrationhubconfig
      newGroupId: software.amazon.awssdk
      newArtifactId: migrationhubconfig
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kafkaconnect
      newGroupId: software.amazon.awssdk
      newArtifactId: kafkaconnect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kafka
      newGroupId: software.amazon.awssdk
      newArtifactId: kafka
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-gluedatabrew
      newGroupId: software.amazon.awssdk
      newArtifactId: databrew
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codedeploy
      newGroupId: software.amazon.awssdk
      newArtifactId: codedeploy
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudhsmv2
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudhsmv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-batch
      newGroupId: software.amazon.awssdk
      newArtifactId: batch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-savingsplans
      newGroupId: software.amazon.awssdk
      newArtifactId: savingsplans
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-migrationhubstrategyrecommendations
      newGroupId: software.amazon.awssdk
      newArtifactId: migrationhubstrategy
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appsync
      newGroupId: software.amazon.awssdk
      newArtifactId: appsync
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-backupgateway
      newGroupId: software.amazon.awssdk
      newArtifactId: backupgateway
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-dlm
      newGroupId: software.amazon.awssdk
      newArtifactId: dlm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-amplifybackend
      newGroupId: software.amazon.awssdk
      newArtifactId: amplifybackend
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-datazoneexternal
      newGroupId: software.amazon.awssdk
      newArtifactId: datazone
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-billingconductor
      newGroupId: software.amazon.awssdk
      newArtifactId: billingconductor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workspacesthinclient
      newGroupId: software.amazon.awssdk
      newArtifactId: workspacesthinclient
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssmsap
      newGroupId: software.amazon.awssdk
      newArtifactId: ssmsap
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-budgets
      newGroupId: software.amazon.awssdk
      newArtifactId: budgets
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mainframemodernization
      newGroupId: software.amazon.awssdk
      newArtifactId: m2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-finspace
      newGroupId: software.amazon.awssdk
      newArtifactId: finspace
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-detective
      newGroupId: software.amazon.awssdk
      newArtifactId: detective
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lambda
      newGroupId: software.amazon.awssdk
      newArtifactId: lambda
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssooidc
      newGroupId: software.amazon.awssdk
      newArtifactId: ssooidc
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-panorama
      newGroupId: software.amazon.awssdk
      newArtifactId: panorama
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotevents
      newGroupId: software.amazon.awssdk
      newArtifactId: iotevents
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-managedblockchain
      newGroupId: software.amazon.awssdk
      newArtifactId: managedblockchain
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-servicediscovery
      newGroupId: software.amazon.awssdk
      newArtifactId: servicediscovery
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-waf
      newGroupId: software.amazon.awssdk
      newArtifactId: waf
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ivs
      newGroupId: software.amazon.awssdk
      newArtifactId: ivs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-directconnect
      newGroupId: software.amazon.awssdk
      newArtifactId: directconnect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mq
      newGroupId: software.amazon.awssdk
      newArtifactId: mq
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pinpointsmsvoicev2
      newGroupId: software.amazon.awssdk
      newArtifactId: pinpointsmsvoicev2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-internetmonitor
      newGroupId: software.amazon.awssdk
      newArtifactId: internetmonitor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-artifact
      newGroupId: software.amazon.awssdk
      newArtifactId: artifact
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotsitewise
      newGroupId: software.amazon.awssdk
      newArtifactId: iotsitewise
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lexmodelsv2
      newGroupId: software.amazon.awssdk
      newArtifactId: lexmodelsv2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lexruntimev2
      newGroupId: software.amazon.awssdk
      newArtifactId: lexruntimev2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-serverlessapplicationrepository
      newGroupId: software.amazon.awssdk
      newArtifactId: serverlessapplicationrepository
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-eksauth
      newGroupId: software.amazon.awssdk
      newArtifactId: eksauth
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-snowdevicemanagement
      newGroupId: software.amazon.awssdk
      newArtifactId: snowdevicemanagement
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-clouddirectory
      newGroupId: software.amazon.awssdk
      newArtifactId: clouddirectory
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-mediapackagevod
      newGroupId: software.amazon.awssdk
      newArtifactId: mediapackagevod
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codestarconnections
      newGroupId: software.amazon.awssdk
      newArtifactId: codestarconnections
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codeartifact
      newGroupId: software.amazon.awssdk
      newArtifactId: codeartifact
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-guardduty
      newGroupId: software.amazon.awssdk
      newArtifactId: guardduty
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-worklink
      newGroupId: software.amazon.awssdk
      newArtifactId: worklink
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cleanrooms
      newGroupId: software.amazon.awssdk
      newArtifactId: cleanrooms
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-customerprofiles
      newGroupId: software.amazon.awssdk
      newArtifactId: customerprofiles
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-trustedadvisor
      newGroupId: software.amazon.awssdk
      newArtifactId: trustedadvisor
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-dax
      newGroupId: software.amazon.awssdk
      newArtifactId: dax
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-opsworkscm
      newGroupId: software.amazon.awssdk
      newArtifactId: opsworkscm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-docdb
      newGroupId: software.amazon.awssdk
      newArtifactId: docdb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-acmpca
      newGroupId: software.amazon.awssdk
      newArtifactId: acmpca
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kinesis
      newGroupId: software.amazon.awssdk
      newArtifactId: firehose
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ivschat
      newGroupId: software.amazon.awssdk
      newArtifactId: ivschat
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-globalaccelerator
      newGroupId: software.amazon.awssdk
      newArtifactId: globalaccelerator
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ses
      newGroupId: software.amazon.awssdk
      newArtifactId: ses
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codegurureviewer
      newGroupId: software.amazon.awssdk
      newArtifactId: codegurureviewer
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lexmodelbuilding
      newGroupId: software.amazon.awssdk
      newArtifactId: lexmodelbuilding
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-medicalimaging
      newGroupId: software.amazon.awssdk
      newArtifactId: medicalimaging
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-account
      newGroupId: software.amazon.awssdk
      newArtifactId: account
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-robomaker
      newGroupId: software.amazon.awssdk
      newArtifactId: robomaker
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lex
      newGroupId: software.amazon.awssdk
      newArtifactId: lexruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-autoscaling
      newGroupId: software.amazon.awssdk
      newArtifactId: autoscaling
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-nimblestudio
      newGroupId: software.amazon.awssdk
      newArtifactId: nimble
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iotjobsdataplane
      newGroupId: software.amazon.awssdk
      newArtifactId: iotjobsdataplane
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appconfigdata
      newGroupId: software.amazon.awssdk
      newArtifactId: appconfigdata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-controlcatalog
      newGroupId: software.amazon.awssdk
      newArtifactId: controlcatalog
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-greengrass
      newGroupId: software.amazon.awssdk
      newArtifactId: greengrass
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-securityhub
      newGroupId: software.amazon.awssdk
      newArtifactId: securityhub
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-timestreamquery
      newGroupId: software.amazon.awssdk
      newArtifactId: timestreamquery
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-backup
      newGroupId: software.amazon.awssdk
      newArtifactId: backup
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-opensearchserverless
      newGroupId: software.amazon.awssdk
      newArtifactId: opensearchserverless
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cloudformation
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudformation
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-kendra
      newGroupId: software.amazon.awssdk
      newArtifactId: kendra
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-connect
      newGroupId: software.amazon.awssdk
      newArtifactId: connect
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticache
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticache
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-stepfunctions
      newGroupId: software.amazon.awssdk
      newArtifactId: sfn
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-cognitoidp
      newGroupId: software.amazon.awssdk
      newArtifactId: cognitoidentityprovider
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-chimesdkvoice
      newGroupId: software.amazon.awssdk
      newArtifactId: chimesdkvoice
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-workspacesweb
      newGroupId: software.amazon.awssdk
      newArtifactId: workspacesweb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-comprehend
      newGroupId: software.amazon.awssdk
      newArtifactId: comprehend
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-applicationsignals
      newGroupId: software.amazon.awssdk
      newArtifactId: applicationsignals
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplacemeteringservice
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplacemetering
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-devicefarm
      newGroupId: software.amazon.awssdk
      newArtifactId: devicefarm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-rekognition
      newGroupId: software.amazon.awssdk
      newArtifactId: rekognition
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-appstream
      newGroupId: software.amazon.awssdk
      newArtifactId: appstream
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-polly
      newGroupId: software.amazon.awssdk
      newArtifactId: polly
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-rds
      newGroupId: software.amazon.awssdk
      newArtifactId: rds
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-pricing
      newGroupId: software.amazon.awssdk
      newArtifactId: pricing
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-simpleworkflow
      newGroupId: software.amazon.awssdk
      newArtifactId: swf
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-events
      newGroupId: software.amazon.awssdk
      newArtifactId: cloudwatchevents
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssmquicksetup
      newGroupId: software.amazon.awssdk
      newArtifactId: ssmquicksetup
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-autoscalingplans
      newGroupId: software.amazon.awssdk
      newArtifactId: autoscalingplans
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-datapipeline
      newGroupId: software.amazon.awssdk
      newArtifactId: datapipeline
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-transcribe
      newGroupId: software.amazon.awssdk
      newArtifactId: transcribe
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ivsrealtime
      newGroupId: software.amazon.awssdk
      newArtifactId: ivsrealtime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-personalizeruntime
      newGroupId: software.amazon.awssdk
      newArtifactId: personalizeruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-elasticsearch
      newGroupId: software.amazon.awssdk
      newArtifactId: elasticsearch
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codecommit
      newGroupId: software.amazon.awssdk
      newArtifactId: codecommit
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-resourcegroupstaggingapi
      newGroupId: software.amazon.awssdk
      newArtifactId: resourcegroupstaggingapi
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-forecastquery
      newGroupId: software.amazon.awssdk
      newArtifactId: forecastquery
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-healthlake
      newGroupId: software.amazon.awssdk
      newArtifactId: healthlake
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-iamrolesanywhere
      newGroupId: software.amazon.awssdk
      newArtifactId: rolesanywhere
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-personalizeevents
      newGroupId: software.amazon.awssdk
      newArtifactId: personalizeevents
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-apigatewaymanagementapi
      newGroupId: software.amazon.awssdk
      newArtifactId: apigatewaymanagementapi
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-launchwizard
      newGroupId: software.amazon.awssdk
      newArtifactId: launchwizard
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-xray
      newGroupId: software.amazon.awssdk
      newArtifactId: xray
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ssoadmin
      newGroupId: software.amazon.awssdk
      newArtifactId: ssoadmin
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-api-gateway
      newGroupId: software.amazon.awssdk
      newArtifactId: apigateway
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-migrationhubrefactorspaces
      newGroupId: software.amazon.awssdk
      newArtifactId: migrationhubrefactorspaces
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ram
      newGroupId: software.amazon.awssdk
      newArtifactId: ram
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codeconnections
      newGroupId: software.amazon.awssdk
      newArtifactId: codeconnections
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-efs
      newGroupId: software.amazon.awssdk
      newArtifactId: efs
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-bedrockagentruntime
      newGroupId: software.amazon.awssdk
      newArtifactId: bedrockagentruntime
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-dataexchange
      newGroupId: software.amazon.awssdk
      newArtifactId: dataexchange
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sts
      newGroupId: software.amazon.awssdk
      newArtifactId: sts
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-sagemaker
      newGroupId: software.amazon.awssdk
      newArtifactId: sagemaker
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-finspacedata
      newGroupId: software.amazon.awssdk
      newArtifactId: finspacedata
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-marketplacecatalog
      newGroupId: software.amazon.awssdk
      newArtifactId: marketplacecatalog
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-acm
      newGroupId: software.amazon.awssdk
      newArtifactId: acm
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-athena
      newGroupId: software.amazon.awssdk
      newArtifactId: athena
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-route53
      newGroupId: software.amazon.awssdk
      newArtifactId: route53
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-codegurusecurity
      newGroupId: software.amazon.awssdk
      newArtifactId: codegurusecurity
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-tnb
      newGroupId: software.amazon.awssdk
      newArtifactId: tnb
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-ec2
      newGroupId: software.amazon.awssdk
      newArtifactId: ec2
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-apprunner
      newGroupId: software.amazon.awssdk
      newArtifactId: apprunner
      newVersion: 2.31.75
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.amazonaws
      oldArtifactId: aws-java-sdk-lookoutmetrics
      newGroupId: software.amazon.awssdk
      newArtifactId: lookoutmetrics
      newVersion: 2.31.75

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
    activeRecipe("software.amazon.awssdk.v2migration.UpgradeSdkDependencies")
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
        activeRecipe("software.amazon.awssdk.v2migration.UpgradeSdkDependencies")
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
            <recipe>software.amazon.awssdk.v2migration.UpgradeSdkDependencies</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=software.amazon.awssdk.v2migration.UpgradeSdkDependencies -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeSdkDependencies
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.UpgradeSdkDependencies" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
