# Best practices for GCP

** org.openrewrite.terraform.gcp.GCPBestPractices**
_Securely operate on Google Cloud Platform._

### Tags

* GCP
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/0.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 0.7.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:0.7.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.12.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:0.7.0")
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
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.GCPBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>0.7.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.gcp.GCPBestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Ensure GCP Kubernetes cluster node auto-repair configuration is enabled](../../terraform/gcp/ensuregcpkubernetesclusternodeautorepairconfigurationisenabled.md)
* [Enable `PodSecurityPolicy` controller on Google Kubernetes Engine (GKE) clusters](../../terraform/gcp/enablepodsecuritypolicycontrollerongkeclusters.md)
* [Ensure private cluster is enabled when creating Kubernetes clusters](../../terraform/gcp/ensureprivateclusterisenabledwhencreatingkubernetesclusters.md)
* [Enable VPC Flow Logs for subnetworks](../../terraform/gcp/enablevpcflowlogsforsubnetworks.md)
* [Ensure GCP cloud storage bucket with uniform bucket-level access are enabled](../../terraform/gcp/ensuregcpcloudstoragebucketwithuniformbucketlevelaccessareenabled.md)
* [Ensure GCP VM instances have block project-wide SSH keys feature enabled](../../terraform/gcp/ensuregcpvminstanceshaveblockprojectwidesshkeysfeatureenabled.md)
* [Ensure IP forwarding on instances is disabled](../../terraform/gcp/ensureipforwardingoninstancesisdisabled.md)
* [Ensure compute instances launch with shielded VM enabled](../../terraform/gcp/ensurecomputeinstanceslaunchwithshieldedvmenabled.md)
* [Enable VPC flow logs and intranode visibility](../../terraform/gcp/enablevpcflowlogsandintranodevisibility.md)
* [Ensure binary authorization is used](../../terraform/gcp/ensurebinaryauthorizationisused.md)
* [Ensure GCP Kubernetes engine clusters have legacy compute engine metadata endpoints disabled](../../terraform/gcp/ensuregcpkubernetesengineclustershavelegacycomputeenginemetadataendpointsdisabled.md)
* [Ensure secure boot for shielded GKE nodes is enabled](../../terraform/gcp/ensuresecurebootforshieldedgkenodesisenabled.md)
* [Ensure the GKE metadata server is enabled](../../terraform/gcp/ensurethegkemetadataserverisenabled.md)
* [Ensure shielded GKE nodes are enabled](../../terraform/gcp/ensureshieldedgkenodesareenabled.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.GCPBestPractices
displayName: Best practices for GCP
description: Securely operate on Google Cloud Platform.
tags:
  - GCP
  - terraform
recipeList:
  - org.openrewrite.terraform.gcp.EnsureGCPKubernetesClusterNodeAutoRepairConfigurationIsEnabled
  - org.openrewrite.terraform.gcp.EnablePodSecurityPolicyControllerOnGKEClusters
  - org.openrewrite.terraform.gcp.EnsurePrivateClusterIsEnabledWhenCreatingKubernetesClusters
  - org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks
  - org.openrewrite.terraform.gcp.EnsureGCPCloudStorageBucketWithUniformBucketLevelAccessAreEnabled
  - org.openrewrite.terraform.gcp.EnsureGCPVMInstancesHaveBlockProjectWideSSHKeysFeatureEnabled
  - org.openrewrite.terraform.gcp.EnsureIPForwardingOnInstancesIsDisabled
  - org.openrewrite.terraform.gcp.EnsureComputeInstancesLaunchWithShieldedVMEnabled
  - org.openrewrite.terraform.gcp.EnableVPCFlowLogsAndIntranodeVisibility
  - org.openrewrite.terraform.gcp.EnsureBinaryAuthorizationIsUsed
  - org.openrewrite.terraform.gcp.EnsureGCPKubernetesEngineClustersHaveLegacyComputeEngineMetadataEndpointsDisabled
  - org.openrewrite.terraform.gcp.EnsureSecureBootForShieldedGKENodesIsEnabled
  - org.openrewrite.terraform.gcp.EnsureTheGKEMetadataServerIsEnabled
  - org.openrewrite.terraform.gcp.EnsureShieldedGKENodesAreEnabled

```
{% endtab %}
{% endtabs %}
