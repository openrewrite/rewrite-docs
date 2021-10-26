# Ensure Azure SQL Server threat detection alerts are enabled for all threat types

** org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes**
_Ensure Azure SQL Server threat detection alerts are enabled for all threat types._

### Tags

* Azure
* CKV_AZURE_25
* terraform

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
    activeRecipe("org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes")
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
        <version>4.15.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_mssql_server_security_alert_policy`
  * content: `disabled_alerts = []`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureAzureSQLServerThreatDetectionAlertsAreEnabledForAllThreatTypes
displayName: Ensure Azure SQL Server threat detection alerts are enabled for all threat types
description: Ensure Azure SQL Server threat detection alerts are enabled for all threat types.
tags:
  - Azure
  - CKV_AZURE_25
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_mssql_server_security_alert_policy
      content: disabled_alerts = []

```
{% endtab %}
{% endtabs %}
