# Enable VPC Flow Logs for subnetworks

** org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks**
_Ensure GCP VPC flow logs for subnets are enabled. Flow Logs capture information on IP traffic moving through network interfaces. This information can be used to monitor anomalous traffic and provide security insights._

### Tags

* GCP
* CKV_GCP_26
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.1.0")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `google_compute_subnetwork`
  * content: `log_config {
  aggregation_interval = "INTERVAL_10_MIN"
  flow_sampling        = 0.5
  metadata             = "INCLUDE_ALL_METADATA"
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.gcp.EnableVPCFlowLogsForSubnetworks
displayName: Enable VPC Flow Logs for subnetworks
description: Ensure GCP VPC flow logs for subnets are enabled. Flow Logs capture information on IP traffic moving through network interfaces. This information can be used to monitor anomalous traffic and provide security insights.
tags:
  - GCP
  - CKV_GCP_26
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: google_compute_subnetwork
      content: log_config {
  aggregation_interval = "INTERVAL_10_MIN"
  flow_sampling        = 0.5
  metadata             = "INCLUDE_ALL_METADATA"
}

```
{% endtab %}
{% endtabs %}
