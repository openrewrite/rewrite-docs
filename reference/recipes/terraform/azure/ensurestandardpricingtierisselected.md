# Ensure standard pricing tier is selected

** org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected**
_Ensure standard pricing tier is selected._

### Tags

* Azure
* CKV_AZURE_19
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
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected")
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
            <recipe>org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Terraform configuration](../../terraform/addconfiguration.md)
  * resourceName: `azurerm_security_center_subscription_pricing`
  * content: `tier = "Standard"`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.terraform.azure.EnsureStandardPricingTierIsSelected
displayName: Ensure standard pricing tier is selected
description: Ensure standard pricing tier is selected.
tags:
  - Azure
  - CKV_AZURE_19
  - terraform
recipeList:
  - org.openrewrite.terraform.AddConfiguration:
      resourceName: azurerm_security_center_subscription_pricing
      content: tier = "Standard"

```
{% endtab %}
{% endtabs %}
