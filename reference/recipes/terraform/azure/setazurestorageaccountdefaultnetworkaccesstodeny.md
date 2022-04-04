# Set Azure Storage Account default network access to deny

** org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny**
_Ensure Azure Storage Account default network access is set to Deny._

### Tags

* Azure
* terraform
* CKV_AZURE_35

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.4.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_storage_account_network_rules`
  * content: `default_action = "Deny"`
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_storage_account`
  * content: `network_rules {
  default_action = "Deny"
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny
displayName: Set Azure Storage Account default network access to deny
description: Ensure Azure Storage Account default network access is set to Deny.
tags:
  - Azure
  - terraform
  - CKV_AZURE_35
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_storage_account_network_rules
      content: default_action = "Deny"
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_storage_account
      content: network_rules {
  default_action = "Deny"
}

```
{% endtab %}
{% endtabs %}
