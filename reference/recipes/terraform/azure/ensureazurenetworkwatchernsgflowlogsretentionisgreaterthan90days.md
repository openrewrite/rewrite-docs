# Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days

** org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days**
_Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days._

### Tags

* Azure
* terraform
* CKV_AZURE_12

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 0.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:0.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:0.8.0")
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
        <version>4.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>0.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_network_watcher_flow_log`
  * content: `days = 90`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureAzureNetworkWatcherNSGFlowLogsRetentionIsGreaterThan90Days
displayName: Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days
description: Ensure Azure Network Watcher NSG flow logs retention is greater than 90 days.
tags:
  - Azure
  - terraform
  - CKV_AZURE_12
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_network_watcher_flow_log
      content: days = 90

```
{% endtab %}
{% endtabs %}