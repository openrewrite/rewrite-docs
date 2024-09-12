# Best practices for GCP

**org.openrewrite.terraform.gcp.GCPBestPractices**

_Securely operate on Google Cloud Platform._

### Tags

* GCP
* terraform

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/gcp.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-terraform/2.3.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 2.3.9

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

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
    activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
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
        activeRecipe("org.openrewrite.terraform.gcp.GCPBestPractices")
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
            <recipe>org.openrewrite.terraform.gcp.GCPBestPractices</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:RELEASE -Drewrite.activeRecipes=org.openrewrite.terraform.gcp.GCPBestPractices -Drewrite.exportDatatables=true
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.terraform.gcp.GCPBestPractices)

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
