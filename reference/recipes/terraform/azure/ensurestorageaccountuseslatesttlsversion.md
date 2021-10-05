# Ensure storage account uses latest TLS version

** org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion**
_Communication between an Azure Storage account and a client application is encrypted using Transport Layer Security (TLS). Microsoft recommends using the latest version of TLS for all your Microsoft Azure App Service web applications._

### Tags

* Azure
* terraform
* CKV_AZURE_44

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
    activeRecipe("org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion")
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
            <recipe>org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_storage_account`
  * content: `min_tls_version = "TLS1_2"`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureStorageAccountUsesLatestTLSVersion
displayName: Ensure storage account uses latest TLS version
description: Communication between an Azure Storage account and a client application is encrypted using Transport Layer Security (TLS). Microsoft recommends using the latest version of TLS for all your Microsoft Azure App Service web applications.
tags:
  - Azure
  - terraform
  - CKV_AZURE_44
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_storage_account
      content: min_tls_version = "TLS1_2"

```
{% endtab %}
{% endtabs %}
