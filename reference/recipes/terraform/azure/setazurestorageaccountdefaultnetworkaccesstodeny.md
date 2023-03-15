# Set Azure Storage Account default network access to deny

**org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny**
_Ensure Azure Storage Account default network access is set to Deny._

### Tags

* Azure
* terraform
* CKV_AZURE_35

## Source

[Github](https://github.com/openrewrite/rewrite-terraform/blob/main/src/main/resources/META-INF/rewrite/azure.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-terraform/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-terraform/1.17.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-terraform
* version: 1.17.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-terraform:1.17.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.0")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-terraform:1.17.0")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-terraform</artifactId>
            <version>1.17.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-terraform:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny
```
{% endcode %}
{% endtab %}
{% endtabs %}


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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.terraform.azure.SetAzureStorageAccountDefaultNetworkAccessToDeny)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
