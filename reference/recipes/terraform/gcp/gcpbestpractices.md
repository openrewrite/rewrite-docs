# Best practices for GCP

**org.openrewrite.terraform.gcp.GCPBestPractices**

_Securely operate on Google Cloud Platform._

### Tags

* GCP
* terraform

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/gcp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.1.3/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.1.3

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:2.1.3` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.7.1")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:2.1.3")
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
    dependencies { classpath("org.openrewrite:plugin:6.7.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-terraform:2.1.3")
    }
    rewrite {
        activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.GCPBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>2.1.3</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.gcp.GCPBestPractices
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe GCPBestPractices
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.gcp.GCPBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), [pocan101](mailto:jcortesd@gmail.com), [Kun Li](mailto:kun@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
