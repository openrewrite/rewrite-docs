# Best practices for GCP

**org.openrewrite.terraform.gcp.GCPBestPractices**

_Securely operate on Google Cloud Platform._

### Tags

* GCP
* terraform

## Source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/gcp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.0.2


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.0.2")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.GCPBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.0.2</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.terraform.gcp.GCPBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

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

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [pocan101](mailto:jcortesd@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.gcp.GCPBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
