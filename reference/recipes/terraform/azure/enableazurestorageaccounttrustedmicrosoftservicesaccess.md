# Enable Azure Storage Account Trusted Microsoft Services access

**org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess**
_Certain Microsoft services that interact with storage accounts operate from networks that cannot be granted access through network rules. Using this configuration, you can allow the set of trusted Microsoft services to bypass those network rules._

### Tags

* Azure
* CKV_AZURE_36
* terraform

## Source

[Github](https://github.com/openrewrite/rewrite-terraform), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.14.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-terraform:1.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.14.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.14.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:1.14.0 \
  -DactiveRecipes=org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_storage_account`
  * content: `bypass = ["AzureServices"]`
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_storage_account_network_rules`
  * content: `bypass = ["AzureServices"]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnableAzureStorageAccountTrustedMicrosoftServicesAccess
displayName: Enable Azure Storage Account Trusted Microsoft Services access
description: Certain Microsoft services that interact with storage accounts operate from networks that cannot be granted access through network rules. Using this configuration, you can allow the set of trusted Microsoft services to bypass those network rules.
tags:
  - Azure
  - CKV_AZURE_36
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_storage_account
      content: bypass = ["AzureServices"]
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_storage_account_network_rules
      content: bypass = ["AzureServices"]

```
{% endtab %}
{% endtabs %}
