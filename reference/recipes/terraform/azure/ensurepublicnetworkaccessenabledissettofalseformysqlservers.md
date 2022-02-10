# Ensure public network access enabled is set to False for mySQL servers

** org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers**
_Ensure public network access enabled is set to False for mySQL servers._

### Tags

* Azure
* CKV_AZURE_53
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
    activeRecipe("org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers")
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
            <recipe>org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_mysql_server`
  * content: `public_network_access_enabled = false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsurePublicNetworkAccessEnabledIsSetToFalseForMySQLServers
displayName: Ensure public network access enabled is set to False for mySQL servers
description: Ensure public network access enabled is set to False for mySQL servers.
tags:
  - Azure
  - CKV_AZURE_53
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_mysql_server
      content: public_network_access_enabled = false

```
{% endtab %}
{% endtabs %}
