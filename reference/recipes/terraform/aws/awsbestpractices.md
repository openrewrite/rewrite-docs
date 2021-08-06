# Best practices for AWS

 **org.openrewrite.terraform.aws.AWSBestPractices** _Securely operate on Amazon Web Services._

### Tags

* terraform
* AWS

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 0.2.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:0.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.aws.AWSBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:0.2.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.aws.AWSBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>0.2.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.aws.AWSBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Encrypt CodeBuild projects](disableinstancemetadataservicev1.md)
* [Enable API gateway caching](enableapigatewaycaching.md)
* [Encrypt Aurora clusters](encryptauroraclusters.md)
* [Encrypt CodeBuild projects](encryptcodebuild.md)
* [Encrypt DAX storage at rest](encryptdaxstorage.md)
* [Encrypt Neptune storage](encryptdocumentdb.md)
* [Scan images pushed to ECR](enabledynamodbpitr.md)
* [Encrypt EBS volume launch configurations](encryptebsvolumelaunchconfiguration.md)
* [Encrypt EBS volumes](encryptebsvolumes.md)
* [Encrypt EBS snapshots](encryptebssnapshots.md)
* [Enable point-in-time recovery for DynamoDB](enableecrscanonpush.md)
* [Encrypt ElastiCache Redis at rest](encryptelasticacheredisatrest.md)
* [Encrypt ElastiCache Redis in transit](encryptelasticacheredisintransit.md)
* [Encrypt Neptune storage](encryptneptunestorage.md)
* [Encrypt RDS clusters](encryptrdsclusters.md)
* [Encrypt DAX storage at rest](encryptredshift.md)
* [Make ECR tags immutable](immutableecrtags.md)
* [Use HTTPS for Cloudfront distribution](usehttpsforcloudfrontdistribution.md)
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
  - org.openrewrite.terraform.aws.DisableInstanceMetadataServiceV1
  - org.openrewrite.terraform.aws.EnableApiGatewayCaching
  - org.openrewrite.terraform.aws.EncryptAuroraClusters
  - org.openrewrite.terraform.aws.EncryptCodeBuild
  - org.openrewrite.terraform.aws.EncryptDAXStorage
  - org.openrewrite.terraform.aws.EncryptDocumentDB
  - org.openrewrite.terraform.aws.EnableDynamoDbPITR
  - org.openrewrite.terraform.aws.EncryptEBSVolumeLaunchConfiguration
  - org.openrewrite.terraform.aws.EncryptEBSVolumes
  - org.openrewrite.terraform.aws.EncryptEBSSnapshots
  - org.openrewrite.terraform.aws.EnableECRScanOnPush
  - org.openrewrite.terraform.aws.EncryptElastiCacheRedisAtRest
  - org.openrewrite.terraform.aws.EncryptElastiCacheRedisInTransit
  - org.openrewrite.terraform.aws.EncryptNeptuneStorage
  - org.openrewrite.terraform.aws.EncryptRDSClusters
  - org.openrewrite.terraform.aws.EncryptRedshift
  - org.openrewrite.terraform.aws.ImmutableECRTags
  - org.openrewrite.terraform.aws.UseHttpsForCloudfrontDistribution
```
{% endtab %}
{% endtabs %}

