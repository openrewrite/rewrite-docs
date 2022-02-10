# Disable Kubernetes dashboard

** org.openrewrite.terraform.azure.DisableKubernetesDashboard**
_Disabling the dashboard eliminates it as an attack vector. The dashboard add-on is disabled by default for all new clusters created on Kubernetes 1.18 or greater._

### Tags

* Azure
* terraform
* CKV_AZURE_8

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
    activeRecipe("org.openrewrite.terraform.azure.DisableKubernetesDashboard")
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
            <recipe>org.openrewrite.terraform.azure.DisableKubernetesDashboard</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.DisableKubernetesDashboard`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_kubernetes_cluster`
  * content: `addon_profile {
  kube_dashboard {
    enabled = false
  }
}`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.DisableKubernetesDashboard
displayName: Disable Kubernetes dashboard
description: Disabling the dashboard eliminates it as an attack vector. The dashboard add-on is disabled by default for all new clusters created on Kubernetes 1.18 or greater.
tags:
  - Azure
  - terraform
  - CKV_AZURE_8
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_kubernetes_cluster
      content: addon_profile {
  kube_dashboard {
    enabled = false
  }
}

```
{% endtab %}
{% endtabs %}
